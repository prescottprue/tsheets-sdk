import * as utils from './utils'
import groups from './groups'
import jobcodes from './jobcodes'
import timesheets from './timesheets'
import users from './users'
import reports from './reports'

const tsheets = ({ request, context, apiKey } = {}) =>
  Object.assign(context || {}, {
    utils,
    timesheets: timesheets(request, apiKey),
    jobcodes: jobcodes(request, apiKey),
    groups: groups(request, apiKey),
    users: users(request, apiKey),
    reports: reports(request, apiKey)
  })

export default tsheets

export { utils, timesheets, jobcodes, groups, users, reports }
