'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _cruder = require('./utils/cruder');

var _cruder2 = _interopRequireDefault(_cruder);

var _config = require('./config');

var _lodash = require('lodash');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var methods = {
  // TODO: Give option auto population using supplemental data
  get: function get(q) {
    if (!q || !(0, _lodash.isObject)(q)) throw new Error('Object with query parameters required to get timesheets');
    if (!q.start_date && !q.end_date && !q.modified_since && !q.modified_before && !q.ids) {
      throw new Error('Query object consisting of start_date, end_date, modified_since, modified_before, or ids required'); //eslint-disable-line
    }
    return (0, _cruder.get)({ endpoint: _config.timesheetsEndpoint })(q);
  }
};

exports.default = function (request, apiKey) {
  return Object.assign({}, (0, _cruder2.default)({
    endpoint: _config.timesheetsEndpoint,
    types: ['add', 'remove', 'update'],
    request: request,
    apiKey: apiKey
  }), // functions that don't have validation
  methods);
};