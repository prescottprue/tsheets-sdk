import { tokenVarName, apiUrl } from '../config'
import { getVar as getEnvVar } from './env'
import { today, typeReducer } from '../utils'
import hiddenRequire from 'hidden-require'

const dateParams = ['start_date', 'end_date', 'modified_since', 'modified_before']

/**
 * Makes an authenticated request to the TSheets API.
 * @param {Object} params Token, endpoint, method, body_params.
 * @return {Promise}
 */
export const makeRequest = ({ params, request = hiddenRequire('request'), apiKey = getEnvVar(tokenVarName) } = {}) => {
  const { endpoint, method, body, qs } = params

  let opts = {
    url: `${apiUrl}/${endpoint}`,
    method,
    json: true,
    headers: {
      Authorization: `Bearer ${apiKey}`
    }
  }

  if (body && Object.keys(body).length) opts.json = { data: body }
  if (qs) opts.qs = qs
  return new Promise((resolve, reject) => {
    request(opts, (err, res, json) => {
      if (err) return reject(err)
      if (res.statusCode >= 300) {
        return reject(res.body.error || res.body)
      }
      resolve(json)
    })
  })
}

// Switch any date params that are 'today' into today's date
// TODO: Add support for "now" as well
export const swapTodayForDate = (obj = {}) => {
  Object.keys(obj).forEach(key => {
    if (dateParams.indexOf(key) !== -1 && obj[key] === 'today') obj[key] = today()
  })
  return obj
}

export const get = ({ endpoint, request, apiKey }) => qs =>
  makeRequest({
    params: { endpoint, method: 'get', qs: swapTodayForDate(qs) },
    request,
    apiKey
  })

export const remove = ({ endpoint, request, apiKey }) => (body, qs) =>
  makeRequest({
    params: { endpoint, method: 'remove', body, qs },
    request,
    apiKey
  })

export const put = ({ endpoint, request, apiKey }) => body =>
  makeRequest({
    params: { endpoint, method: 'put', body },
    request,
    apiKey
  })

export const post = ({ endpoint, request, apiKey }) => body =>
  makeRequest({
    params: {
      endpoint,
      method: 'post',
      body: swapTodayForDate(body)
    },
    request,
    apiKey
  })

export const add = post
export const create = post
export const update = put

/*
request is optional to allow different request libraries
Think non node, google-app-script, rhino, browser fetch
*/
export default ({ endpoint, types, request, apiKey }) => {
  let methods = {
    get,
    remove,
    update,
    create,
    add
  }

  return typeReducer({
    endpoint,
    types,
    methods,
    name: 'cruder',
    request,
    apiKey
  })
}
