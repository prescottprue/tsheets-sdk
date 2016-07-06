import cruder, { get } from './utils/cruder'
import { today } from './utils'
import { usersEndpoint as endpoint, defaultStartDate } from './config'

const methods = {

  get: (q) => {
    // if (!q || !isObject(q)) throw new Error('Object with query parameters required to get timesheets')
    // if (!q.start_date && !q.end_date && !q.modified_since && !q.modified_before && !q.ids) {
    //   throw new Error('Query object consisting of start_date, end_date, modified_since, modified_before, or ids required')
    // }
    // const dateParams = [ 'start_date', 'end_date', 'modified_since', 'modified_before' ]
    // dateParams.forEach((paramName) => {
    //   if (q[paramName] === 'today') q[paramName] = today()
    // })
    return get(endpoint)(q)
  }

}

export default Object.assign(
  {},
  cruder(endpoint, ['add', 'remove', 'update']), // functions that don't have validation
  methods
)
