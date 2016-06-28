import { post } from './utils/cruder'
import { today } from './utils'
import { reportsEndpoints, defaultStartDate } from './config'
const { base, payroll, project, currentTotals } = reportsEndpoints

export default (query) => {
  const methods = {
    getPayrollReport: (body) => {
      if (!body) body = {}
      if (!body.start_date) body.start_date = defaultStartDate
      if (!body.end_date) body.end_date = today()
      return post(`${base}/${payroll}`)(body).then(({results}) => results)
    },
    getProjectReport: (body) => {
      if (!body) body = {}
      if (!body.start_date) body.start_date = defaultStartDate
      if (!body.end_date) body.end_date = today()
      return post(`${base}/${project}`)(body).then(({results}) => results)
    },
    getCurrentTotalsReport: (body) => {
      if (!body) body = {}
      if (!body.start_date) body.start_date = defaultStartDate
      if (!body.end_date) body.end_date = today()
      return post(`${base}/${currentTotals}`)(body).then(({results}) => results)
    }
  }

  return Object.assign(
    {},
    methods
  )
}
