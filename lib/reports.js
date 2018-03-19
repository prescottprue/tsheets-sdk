'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _cruder = require('./utils/cruder');

var _config = require('./config');

var base = _config.reportsEndpoints.base,
    payroll = _config.reportsEndpoints.payroll,
    project = _config.reportsEndpoints.project,
    currentTotals = _config.reportsEndpoints.currentTotals;


var methods = function methods(request, apiKey) {
  return {
    getPayrollReport: function getPayrollReport(body) {
      if (!body) throw Error('Report query object required');
      if (!body.start_date && !body.end_date) {
        throw Error('Query containing start_date, end_date, modified_since, or modified_before required');
      }
      return (0, _cruder.post)({ endpoint: base + '/' + payroll, request: request, apiKey: apiKey })(body).catch(function (error) {
        console.error('Error posting', JSON.stringify(error));
        return Promise.reject(error);
      });
    },
    getProjectReport: function getProjectReport(body) {
      if (!body) throw Error('Report query object required');
      // if (!body.group_ids || !body.user_ids) {
      //   console.log('body:', body)
      //   throw Error('Query containing user_ids, group_ids, on_the_clock required')
      // }
      return (0, _cruder.post)({ endpoint: base + '/' + project, request: request, apiKey: apiKey })(body).catch(function (error) {
        console.error('Error posting', JSON.stringify(error));
        return Promise.reject(error);
      });
    },
    getCurrentTotalsReport: function getCurrentTotalsReport(body) {
      if (!body) throw Error('Report query object required');
      if (!body.group_ids && !body.user_ids) {
        throw Error('Query containing user_ids, group_ids, on_the_clock required');
      }
      return (0, _cruder.post)({ endpoint: base + '/' + currentTotals, request: request, apiKey: apiKey })(body).catch(function (error) {
        console.error('Error posting', JSON.stringify(error));
        return Promise.reject(error);
      });
    }
  };
};

exports.default = function (request, apiKey) {
  return Object.assign({}, methods(request, apiKey));
};