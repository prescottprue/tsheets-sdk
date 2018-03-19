'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var apiUrl = exports.apiUrl = 'https://rest.tsheets.com/api/v1';
var defaultStartDate = exports.defaultStartDate = '2014-01-01'; // end is today by default
var tokenVarName = exports.tokenVarName = 'TSHEETS_TOKEN';
var groupsEndpoint = exports.groupsEndpoint = 'groups';
var jobcodesEndpoint = exports.jobcodesEndpoint = 'jobcodes';
var usersEndpoint = exports.usersEndpoint = 'users';
var timesheetsEndpoint = exports.timesheetsEndpoint = 'timesheets';

var reportsEndpoints = exports.reportsEndpoints = {
  base: 'reports',
  project: 'project',
  payroll: 'payroll',
  currentTotals: 'current_totals'
};

exports.default = {
  apiUrl: apiUrl,
  defaultStartDate: defaultStartDate,
  tokenVarName: tokenVarName,
  groupsEndpoint: groupsEndpoint,
  jobcodesEndpoint: jobcodesEndpoint,
  usersEndpoint: usersEndpoint,
  timesheetsEndpoint: timesheetsEndpoint
};