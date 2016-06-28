import cruder, { get } from './utils/cruder'
import { today } from './utils'
import { groupsEndpoint as endpoint, defaultStartDate } from './config'

export default (query) => {
  const methods = {

    get: (q) => {
      if (!q) q = {}
      if (!q.start_date) q.start_date = defaultStartDate
      if (!q.end_date) q.end_date = today()
      return get(endpoint)(q)
    }

  }

  return Object.assign(
    {},
    cruder(endpoint, ['add', 'remove', 'update']), // functions that don't have validation
    methods
  )
}
