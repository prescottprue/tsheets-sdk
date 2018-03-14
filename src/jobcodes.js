import cruder from './utils/cruder'
import { jobcodesEndpoint as endpoint } from './config'

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
