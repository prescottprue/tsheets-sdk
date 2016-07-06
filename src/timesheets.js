import cruder, { get } from './utils/cruder'
import { today } from './utils'
import { timesheetsEndpoint as endpoint } from './config'
import { isObject } from 'lodash'

const methods = {
  // TODO: Give option auto population using supplemental data
  get: (q) => {
    if (!q || !isObject(q)) throw new Error('Object with query parameters required to get timesheets')
    if (!q.start_date && !q.end_date && !q.modified_since && !q.modified_before && !q.ids) {
      throw new Error('Query object consisting of start_date, end_date, modified_since, modified_before, or ids required') //eslint-disable-line
    }
    // Switch any date params that are 'today' into today's date
    const dateParams = [ 'start_date', 'end_date', 'modified_since', 'modified_before' ]
    dateParams.forEach((paramName) => {
      if (q[paramName] === 'today') q[paramName] = today()
    })
    return get(endpoint)(q)
  }

}

export default Object.assign(
  {},
  cruder(endpoint, ['add', 'remove', 'update']), // functions that don't have validation
  methods
)
