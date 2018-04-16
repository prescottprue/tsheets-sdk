import cruder from './utils/cruder'
// import cruder, { get } from './utils/cruder'
import { usersEndpoint as endpoint } from './config'

const methods = {}

export default (request, apiKey) =>
  Object.assign(
    {},
    cruder({
      endpoint,
      types: ['get', 'add', 'remove', 'update'],
      request,
      apiKey
    }), // functions that don't have validation
    methods
  )
