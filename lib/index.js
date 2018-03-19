'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.reports = exports.users = exports.groups = exports.jobcodes = exports.timesheets = exports.utils = undefined;

var _utils = require('./utils');

var utils = _interopRequireWildcard(_utils);

var _groups = require('./groups');

var _groups2 = _interopRequireDefault(_groups);

var _jobcodes = require('./jobcodes');

var _jobcodes2 = _interopRequireDefault(_jobcodes);

var _timesheets = require('./timesheets');

var _timesheets2 = _interopRequireDefault(_timesheets);

var _users = require('./users');

var _users2 = _interopRequireDefault(_users);

var _reports = require('./reports');

var _reports2 = _interopRequireDefault(_reports);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var tsheets = function tsheets() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      request = _ref.request,
      context = _ref.context,
      apiKey = _ref.apiKey;

  return Object.assign(context || {}, {
    utils: utils,
    timesheets: (0, _timesheets2.default)(request, apiKey),
    jobcodes: (0, _jobcodes2.default)(request, apiKey),
    groups: (0, _groups2.default)(request, apiKey),
    users: (0, _users2.default)(request, apiKey),
    reports: (0, _reports2.default)(request, apiKey)
  });
};

exports.default = tsheets;
exports.utils = utils;
exports.timesheets = _timesheets2.default;
exports.jobcodes = _jobcodes2.default;
exports.groups = _groups2.default;
exports.users = _users2.default;
exports.reports = _reports2.default;