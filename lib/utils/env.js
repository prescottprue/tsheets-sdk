"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var getVar = exports.getVar = function getVar(key) {
  if (!process.env[key]) throw Error(key + " is a required environment variable");
  return process.env[key];
};