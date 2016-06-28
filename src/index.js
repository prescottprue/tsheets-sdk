import * as utils from './utils'
import groups from './groups'
import jobcodes from './jobcodes'
import timesheets from './timesheets'
import users from './users'

// Original API
export const reportTime = (reportData) => timesheets().add(reportData)
export const getTimesheets = () => timesheets().get()
export const getJobcodes = () => jobcodes().get()

export default class TSheets {

  constructor () {
    Object.assign(this, { utils, timesheets, jobcodes, groups, users })
  }

}

export { utils, timesheets, jobcodes, groups, users }
