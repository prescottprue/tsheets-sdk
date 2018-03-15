import * as utils from './utils'
import groups from './groups'
import jobcodes from './jobcodes'
import timesheets from './timesheets'
import users from './users'
import reports from './reports'

const tsheets = ({ request, context, apiKey } = {}) =>
  Object.assign(context || {}, {
    utils,
    timesheets: timesheets(request),
    jobcodes: jobcodes(request),
    groups: groups(request),
    users: users(request),
    reports: reports(request)
  })

export default tsheets

export { utils, timesheets, jobcodes, groups, users, reports }
