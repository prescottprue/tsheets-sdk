export const apiUrl = 'https://rest.tsheets.com/api/v1'
export const defaultStartDate = '2014-01-01' // end is today by default
export const tokenVarName = 'TSHEETS_TOKEN'
export const groupsEndpoint = 'groups'
export const jobcodesEndpoint = 'jobcodes'
export const usersEndpoint = 'users'
export const timesheetsEndpoint = 'timesheets'

export const reportsEndpoints = {
  base: 'reports',
  project: 'project',
  payroll: 'payroll',
  currentTotals: 'current_totals'
}

export default {
  apiUrl,
  defaultStartDate,
  tokenVarName,
  groupsEndpoint,
  jobcodesEndpoint,
  usersEndpoint,
  timesheetsEndpoint
}
