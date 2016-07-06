import { post } from './utils/cruder'
import { reportsEndpoints } from './config'
const { base, payroll, project, currentTotals } = reportsEndpoints

const methods = {
  getPayrollReport: (body) => {
    if (!body) throw Error('Report query object required')
    if (!body.start_date && !body.end_date) {
      throw Error('Query containing start_date, end_date, modified_since, or modified_before required')
    }
    return post(`${base}/${payroll}`)(body).then(({results}) => results)
  },
  getProjectReport: (body) => {
    if (!body) throw Error('Report query object required')
    if (!body.start_date && !body.end_date) {
      throw Error('Query containing start_date, end_date, modified_since, or modified_before required')
    }
    return post(`${base}/${project}`)(body).then(({results}) => results)
  },
  getCurrentTotalsReport: (body) => {
    if (!body) throw Error('Report query object required')
    if (!body.start_date && !body.end_date) {
      throw Error('Query containing start_date, end_date, modified_since, or modified_before required')
    }
    return post(`${base}/${currentTotals}`)(body).then(({results}) => results)
  }
}

export default Object.assign(
  {},
  methods
)
