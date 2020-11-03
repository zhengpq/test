"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _dataURIData = _interopRequireDefault(require("./lib/data/data-URI/data-URI-data"));

var _typeData = _interopRequireDefault(require("./lib/data/icon-types/type-data"));

var _svgData = _interopRequireDefault(require("./lib/data/svg/svg-data"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = {
  svgData: _svgData["default"],
  typeData: _typeData["default"],
  dataURIData: _dataURIData["default"]
};
exports["default"] = _default;