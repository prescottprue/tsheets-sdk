import request from 'request'
import { tokenVarName, apiUrl } from '../config'
import { getVar as getEnvVar } from './env'
import { typeReducer } from './index'

/**
 * Makes an authenticated request to the TSheets API.
 * @param {Object} params Token, endpoint, method, body_params.
 * @return {Promise}
 */
export const makeRequest = (params) => {
  const { endpoint, method, body, qs } = params

  let opts = {
    url: `${apiUrl}/${endpoint.replace('/', '')}`,
    method,
    json: true,
    headers: {
      Authorization: `Bearer ${getEnvVar(tokenVarName)}`
    }
  }

  if (body && Object.keys(body).length) opts.json = { data: body }
  if (qs) opts.qs = qs
  console.log('request:', opts)
  return new Promise((resolve, reject) => {
    request(opts, (err, res, json) => {
      console.log('error:', err)
      if (err) return reject(err)
      if (res.statusCode >= 300) {
        return reject(new Error(res.message || 'Invalid response, statusCode=' + res.statusCode))
      }
      console.log('request response:', json)
      resolve(json)
    })
  })
}

export const get = (endpoint) => (qs) =>
  makeRequest({ endpoint, method: 'get', qs })

export const remove = (endpoint) => (body, qs) =>
  makeRequest({ endpoint, method: 'remove', body, qs })

export const put = (endpoint) => (body) =>
  makeRequest({ endpoint, method: 'put', body })

export const post = (endpoint) => (body) =>
  makeRequest({ endpoint, method: 'post', body })

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
