'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.update = exports.create = exports.add = exports.post = exports.put = exports.remove = exports.get = exports.swapTodayForDate = exports.makeRequest = undefined;

var _config = require('../config');

var _env = require('./env');

var _utils = require('../utils');

var _hiddenRequire = require('./hiddenRequire');

var _hiddenRequire2 = _interopRequireDefault(_hiddenRequire);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var dateParams = ['start_date', 'end_date', 'modified_since', 'modified_before'];

/**
 * Makes an authenticated request to the TSheets API.
 * @param {Object} params Token, endpoint, method, body_params.
 * @return {Promise}
 */
var makeRequest = exports.makeRequest = function makeRequest() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      params = _ref.params,
      _ref$request = _ref.request,
      request = _ref$request === undefined ? (0, _hiddenRequire2.default)('request') : _ref$request,
      _ref$apiKey = _ref.apiKey,
      apiKey = _ref$apiKey === undefined ? (0, _env.getVar)(_config.tokenVarName) : _ref$apiKey;

  var endpoint = params.endpoint,
      method = params.method,
      body = params.body,
      qs = params.qs;


  var opts = {
    url: _config.apiUrl + '/' + endpoint,
    method: method,
    json: true,
    headers: {
      Authorization: 'Bearer ' + apiKey
    }
  };

  if (body && Object.keys(body).length) opts.json = { data: body };
  if (qs) opts.qs = qs;
  return new Promise(function (resolve, reject) {
    request(opts, function (err, res, json) {
      if (err) return reject(err);
      if (res.statusCode >= 300) {
        return reject(res.body.error || res.body);
      }
      resolve(json);
    });
  });
};

// Switch any date params that are 'today' into today's date
// TODO: Add support for "now" as well
var swapTodayForDate = exports.swapTodayForDate = function swapTodayForDate() {
  var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  Object.keys(obj).forEach(function (key) {
    if (dateParams.indexOf(key) !== -1 && obj[key] === 'today') obj[key] = (0, _utils.today)();
  });
  return obj;
};

var get = exports.get = function get(_ref2) {
  var endpoint = _ref2.endpoint,
      request = _ref2.request,
      apiKey = _ref2.apiKey;
  return function (qs) {
    return makeRequest({
      params: { endpoint: endpoint, method: 'get', qs: swapTodayForDate(qs) },
      request: request,
      apiKey: apiKey
    });
  };
};

var remove = exports.remove = function remove(_ref3) {
  var endpoint = _ref3.endpoint,
      request = _ref3.request,
      apiKey = _ref3.apiKey;
  return function (body, qs) {
    return makeRequest({
      params: { endpoint: endpoint, method: 'remove', body: body, qs: qs },
      request: request,
      apiKey: apiKey
    });
  };
};

var put = exports.put = function put(_ref4) {
  var endpoint = _ref4.endpoint,
      request = _ref4.request,
      apiKey = _ref4.apiKey;
  return function (body) {
    return makeRequest({
      params: { endpoint: endpoint, method: 'put', body: body },
      request: request,
      apiKey: apiKey
    });
  };
};

var post = exports.post = function post(_ref5) {
  var endpoint = _ref5.endpoint,
      request = _ref5.request,
      apiKey = _ref5.apiKey;
  return function (body) {
    return makeRequest({
      params: {
        endpoint: endpoint,
        method: 'post',
        body: swapTodayForDate(body)
      },
      request: request,
      apiKey: apiKey
    });
  };
};

var add = exports.add = post;
var create = exports.create = post;
var update = exports.update = put;

/*
request is optional to allow different request libraries
Think non node, google-app-script, rhino, browser fetch
*/

exports.default = function (_ref6) {
  var endpoint = _ref6.endpoint,
      types = _ref6.types,
      request = _ref6.request,
      apiKey = _ref6.apiKey;

  var methods = {
    get: get,
    remove: remove,
    update: update,
    create: create,
    add: add
  };

  return (0, _utils.typeReducer)({
    endpoint: endpoint,
    types: types,
    methods: methods,
    name: 'cruder',
    request: request,
    apiKey: apiKey
  });
};