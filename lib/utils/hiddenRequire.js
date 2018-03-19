"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
/*
  Since webpack relies on search and replace of require 'string' or require "string".
  Calling require via another function hides the requirement from webpack/browserify.
  I found this out originally when I tried making a requires iterator which did not work.
  But that failure led to this success : )
  */
var hiddenRequire = function hiddenRequire(dep) {
  var ret = require(dep);
  return ret.default || ret;
};

exports.default = hiddenRequire;