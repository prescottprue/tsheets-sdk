import _env from './env'

export const env = _env
// Creates current time in tsheets format
export const today = () => {
  let today = new Date()
  let dd = today.getDate()
  let mm = today.getMonth() + 1 // January is 0
  const yyyy = today.getFullYear()
  if (dd < 10) dd = '0' + dd
  if (mm < 10) mm = '0' + mm
  return `${yyyy}-${mm}-${dd}`
}

export const typeReducer = ({ endpoint, types, methods, name, request }) =>
  types.reduce((returnedMethods, type) => {
    let method = {}
    if (typeof methods[type] === 'undefined') {
      throw Error(`${type} is not a valid ${name ? 'method of ' + name : 'method'}`)
    }
    method[type] = methods[type].call(this, endpoint, request)
    return Object.assign({}, returnedMethods, method)
  }, {})

// export const populate = (main, supplemental) => {
//   let final = {}
//   Object.keys(main).forEach((item) =>  )
// }
export default Object.assign({}, { today, typeReducer })
