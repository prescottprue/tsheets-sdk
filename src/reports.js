import { post } from './utils/cruder'
import { reportsEndpoints } from './config'
const { base, payroll, project, currentTotals } = reportsEndpoints

const methods = (request, apiKey) => ({
  getPayrollReport: body => {
    if (!body) throw Error('Report query object required')
    if (!body.start_date && !body.end_date) {
      throw Error('Query containing start_date, end_date, modified_since, or modified_before required')
    }
    return post({ endpoint: `${base}/${payroll}`, request, apiKey })(body).catch(error => {
      console.error('Error posting', JSON.stringify(error))
      return Promise.reject(error)
    })
  },
  getProjectReport: body => {
    if (!body) throw Error('Report query object required')
    // if (!body.group_ids || !body.user_ids) {
    //   console.log('body:', body)
    //   throw Error('Query containing user_ids, group_ids, on_the_clock required')
    // }
    return post({ endpoint: `${base}/${project}`, request, apiKey })(body).catch(error => {
      console.error('Error posting', JSON.stringify(error))
      return Promise.reject(error)
    })
  },
  getCurrentTotalsReport: body => {
    if (!body) throw Error('Report query object required')
    if (!body.group_ids && !body.user_ids) {
      throw Error('Query containing user_ids, group_ids, on_the_clock required')
    }
    return post({ endpoint: `${base}/${currentTotals}`, request, apiKey })(body).catch(error => {
      console.error('Error posting', JSON.stringify(error))
      return Promise.reject(error)
    })
  }
})

export default (request, apiKey) => Object.assign({}, methods(request, apiKey))
