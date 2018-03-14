import cruder from './utils/cruder'
// import cruder, { get } from './utils/cruder'
import { usersEndpoint as endpoint } from './config'

const methods = {}

export default request =>
  Object.assign(
    {},
    cruder({
      endpoint,
      types: ['get', 'add', 'remove', 'update'],
      request
    }), // functions that don't have validation
    methods
  )
