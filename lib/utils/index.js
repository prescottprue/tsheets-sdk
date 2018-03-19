'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.typeReducer = exports.today = exports.env = undefined;

var _env2 = require('./env');

var _env3 = _interopRequireDefault(_env2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var env = exports.env = _env3.default;
// Creates current time in tsheets format
var today = exports.today = function today() {
  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth() + 1; // January is 0
  var yyyy = today.getFullYear();
  if (dd < 10) dd = '0' + dd;
  if (mm < 10) mm = '0' + mm;
  return yyyy + '-' + mm + '-' + dd;
};

var typeReducer = exports.typeReducer = function typeReducer(_ref) {
  var endpoint = _ref.endpoint,
      types = _ref.types,
      methods = _ref.methods,
      name = _ref.name,
      request = _ref.request,
      apiKey = _ref.apiKey;
  return types.reduce(function (returnedMethods, type) {
    var method = {};
    if (typeof methods[type] === 'undefined') {
      throw Error(type + ' is not a valid ' + (name ? 'method of ' + name : 'method'));
    }
    method[type] = methods[type].call(undefined, { endpoint: endpoint, request: request, apiKey: apiKey });
    return Object.assign({}, returnedMethods, method);
  }, {});
};

// export const populate = (main, supplemental) => {
//   let final = {}
//   Object.keys(main).forEach((item) =>  )
// }
exports.default = Object.assign({}, { today: today, typeReducer: typeReducer });