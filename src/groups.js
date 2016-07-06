import cruder from './utils/cruder'
import { groupsEndpoint as endpoint } from './config'

const methods = {

}

export default Object.assign(
  {},
  cruder(endpoint, ['get', 'add', 'remove', 'update']), // functions that don't have validation
  methods
)
