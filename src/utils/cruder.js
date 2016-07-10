import request from 'request'
import { tokenVarName, apiUrl } from '../config'
import { getVar as getEnvVar } from './env'
import { typeReducer } from './index'
import { today } from '../utils'

const dateParams = [
  'start_date', 'end_date',
  'modified_since', 'modified_before'
]

/**
 * Makes an authenticated request to the TSheets API.
 * @param {Object} params Token, endpoint, method, body_params.
 * @return {Promise}
 */
export const makeRequest = (params) => {
  const { endpoint, method, body, qs } = params

  let opts = {
    url: `${apiUrl}/${endpoint}`,
    method,
    json: true,
    headers: {
      Authorization: `Bearer ${getEnvVar(tokenVarName)}`
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
export const swapTodayForDate = (obj) => {
  Object.keys(obj).forEach((key) => {
    if (dateParams.indexOf(key) !== -1 && obj[key] === 'today') obj[key] = today()
  })
  return obj
}

export const get = (endpoint) => (qs) =>
  makeRequest({ endpoint, method: 'get', qs: swapTodayForDate(qs) })

export const remove = (endpoint) => (body, qs) =>
  makeRequest({ endpoint, method: 'remove', body, qs })

export const put = (endpoint) => (body) =>
  makeRequest({ endpoint, method: 'put', body })

export const post = (endpoint) => (body) =>
  makeRequest({ endpoint, method: 'post', body: swapTodayForDate(body) })

export const add = post
export const create = post
export const update = put

export default (endpoint, types) => {
  let methods = {
    get,
    remove,
    update,
    create,
    add
  }

  return typeReducer(endpoint, types, methods, 'cruder')
}
