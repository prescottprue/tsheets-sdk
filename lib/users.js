'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _cruder = require('./utils/cruder');

var _cruder2 = _interopRequireDefault(_cruder);

var _config = require('./config');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var methods = {};
// import cruder, { get } from './utils/cruder'

exports.default = function (request, apiKey) {
  return Object.assign({}, (0, _cruder2.default)({
    endpoint: _config.usersEndpoint,
    types: ['get', 'add', 'remove', 'update'],
    request: request,
    apiKey: apiKey
  }), // functions that don't have validation
  methods);
};