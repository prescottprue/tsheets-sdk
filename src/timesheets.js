import cruder, { get } from './utils/cruder'
import { timesheetsEndpoint as endpoint } from './config'
import { isObject } from 'lodash'

const methods = {
  // TODO: Give option auto population using supplemental data
  get: q => {
    if (!q || !isObject(q)) throw new Error('Object with query parameters required to get timesheets')
    if (!q.start_date && !q.end_date && !q.modified_since && !q.modified_before && !q.ids) {
      throw new Error(
        'Query object consisting of start_date, end_date, modified_since, modified_before, or ids required'
      ) //eslint-disable-line
    }
    return get({ endpoint })(q)
  }
}

export default (request, apiKey) =>
  Object.assign(
    {},
    cruder({
      endpoint,
      types: ['add', 'remove', 'update'],
      request,
      apiKey
    }), // functions that don't have validation
    methods
  )
