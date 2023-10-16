(this["webpackJsonp"] = this["webpackJsonp"] || []).push([["app-service"],[
/* 0 */
/*!********************************************************!*\
  !*** /Users/tongjie/Desktop/QNRTC-Uniapp/demo/main.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 1);\nvar _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ 2));\n__webpack_require__(/*! uni-pages */ 6);\nvar _App = _interopRequireDefault(__webpack_require__(/*! ./App */ 7));\nvar _store = _interopRequireDefault(__webpack_require__(/*! ./store */ 14));\nvar _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 15));\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\n_vue.default.config.productionTip = false;\n_vue.default.prototype.$store = _store.default;\n_App.default.mpType = 'app';\nvar app = new _vue.default(_objectSpread(_objectSpread({}, _App.default), {}, {\n  store: _store.default\n}));\napp.$mount();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vbWFpbi5qcyJdLCJuYW1lcyI6WyJWdWUiLCJjb25maWciLCJwcm9kdWN0aW9uVGlwIiwicHJvdG90eXBlIiwiJHN0b3JlIiwic3RvcmUiLCJBcHAiLCJtcFR5cGUiLCJhcHAiLCIkbW91bnQiXSwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUFtQjtBQUNuQjtBQUNBO0FBQXFCO0FBQUE7QUFDckJBLFlBQUcsQ0FBQ0MsTUFBTSxDQUFDQyxhQUFhLEdBQUcsS0FBSztBQUNoQ0YsWUFBRyxDQUFDRyxTQUFTLENBQUNDLE1BQU0sR0FBR0MsY0FBSztBQUM1QkMsWUFBRyxDQUFDQyxNQUFNLEdBQUcsS0FBSztBQUNsQixJQUFNQyxHQUFHLEdBQUcsSUFBSVIsWUFBRyxpQ0FDWk0sWUFBRztFQUNSRCxLQUFLLEVBQUxBO0FBQUssR0FDTDtBQUNGRyxHQUFHLENBQUNDLE1BQU0sRUFBRSIsImZpbGUiOiIwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICd1bmktcGFnZXMnO2ltcG9ydCBBcHAgZnJvbSAnLi9BcHAnXG5pbXBvcnQgc3RvcmUgZnJvbSAnLi9zdG9yZSdcbmltcG9ydCBWdWUgZnJvbSAndnVlJ1xuVnVlLmNvbmZpZy5wcm9kdWN0aW9uVGlwID0gZmFsc2VcblZ1ZS5wcm90b3R5cGUuJHN0b3JlID0gc3RvcmVcbkFwcC5tcFR5cGUgPSAnYXBwJ1xuY29uc3QgYXBwID0gbmV3IFZ1ZSh7XG4gICAgLi4uQXBwLFxuXHQgc3RvcmVcbn0pXG5hcHAuJG1vdW50KCkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}
module.exports = _interopRequireDefault, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 2 */
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toPropertyKey = __webpack_require__(/*! ./toPropertyKey.js */ 3);
function _defineProperty(obj, key, value) {
  key = toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
module.exports = _defineProperty, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 3 */
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toPropertyKey.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ./typeof.js */ 4)["default"];
var toPrimitive = __webpack_require__(/*! ./toPrimitive.js */ 5);
function _toPropertyKey(arg) {
  var key = toPrimitive(arg, "string");
  return _typeof(key) === "symbol" ? key : String(key);
}
module.exports = _toPropertyKey, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 4 */
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  return (module.exports = _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports), _typeof(obj);
}
module.exports = _typeof, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 5 */
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toPrimitive.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ./typeof.js */ 4)["default"];
function _toPrimitive(input, hint) {
  if (_typeof(input) !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if (_typeof(res) !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
module.exports = _toPrimitive, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 6 */
/*!***********************************************************!*\
  !*** /Users/tongjie/Desktop/QNRTC-Uniapp/demo/pages.json ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

if (typeof Promise !== 'undefined' && !Promise.prototype.finally) {
  Promise.prototype.finally = function (callback) {
    var promise = this.constructor;
    return this.then(function (value) {
      return promise.resolve(callback()).then(function () {
        return value;
      });
    }, function (reason) {
      return promise.resolve(callback()).then(function () {
        throw reason;
      });
    });
  };
}
if (typeof uni !== 'undefined' && uni && uni.requireGlobal) {
  var global = uni.requireGlobal();
  ArrayBuffer = global.ArrayBuffer;
  Int8Array = global.Int8Array;
  Uint8Array = global.Uint8Array;
  Uint8ClampedArray = global.Uint8ClampedArray;
  Int16Array = global.Int16Array;
  Uint16Array = global.Uint16Array;
  Int32Array = global.Int32Array;
  Uint32Array = global.Uint32Array;
  Float32Array = global.Float32Array;
  Float64Array = global.Float64Array;
  BigInt64Array = global.BigInt64Array;
  BigUint64Array = global.BigUint64Array;
}
if (uni.restoreGlobal) {
  uni.restoreGlobal(weex, plus, setTimeout, clearTimeout, setInterval, clearInterval);
}

/***/ }),
/* 7 */
/*!********************************************************!*\
  !*** /Users/tongjie/Desktop/QNRTC-Uniapp/demo/App.vue ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ 8);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 13);\nvar render, staticRenderFns, recyclableRender, components\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  render,\n  staticRenderFns,\n  false,\n  null,\n  null,\n  null,\n  false,\n  components,\n  renderjs\n)\n\ncomponent.options.__file = \"App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUN1RDtBQUNMOzs7QUFHbEQ7QUFDME07QUFDMU0sZ0JBQWdCLGlOQUFVO0FBQzFCLEVBQUUseUVBQU07QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNlLGdGIiwiZmlsZSI6IjcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMsIHJlY3ljbGFibGVSZW5kZXIsIGNvbXBvbmVudHNcbnZhciByZW5kZXJqc1xuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9BcHAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9BcHAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGwsXG4gIGZhbHNlLFxuICBjb21wb25lbnRzLFxuICByZW5kZXJqc1xuKVxuXG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIkFwcC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///7\n");

/***/ }),
/* 8 */
/*!*********************************************************************************!*\
  !*** /Users/tongjie/Desktop/QNRTC-Uniapp/demo/App.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-1!../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ 9);\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTJyQixDQUFnQix5c0JBQUcsRUFBQyIsImZpbGUiOiI4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS03LTEhLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXVuaS1hcHAtbG9hZGVyL3VzaW5nLWNvbXBvbmVudHMuanMhLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS03LTEhLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXVuaS1hcHAtbG9hZGVyL3VzaW5nLWNvbXBvbmVudHMuanMhLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///8\n");

/***/ }),
/* 9 */
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!/Users/tongjie/Desktop/QNRTC-Uniapp/demo/App.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 1);\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\nvar _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ 2));\nvar _vuex = __webpack_require__(/*! vuex */ 11);\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\nvar _default = {\n  onLaunch: function onLaunch() {\n    __f__(\"log\", 'App Launch', \" at App.vue:5\");\n  },\n  onShow: function onShow() {\n    __f__(\"log\", 'App Show', \" at App.vue:8\");\n    this.initToken();\n    this.getPlatform();\n  },\n  onHide: function onHide() {\n    __f__(\"log\", 'App Hide', \" at App.vue:13\");\n  },\n  methods: _objectSpread({}, (0, _vuex.mapMutations)([\"initToken\", \"getPlatform\"]))\n};\nexports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 10)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vQXBwLnZ1ZSJdLCJuYW1lcyI6WyJvbkxhdW5jaCIsIm9uU2hvdyIsImluaXRUb2tlbiIsImdldFBsYXRmb3JtIiwib25IaWRlIiwibWV0aG9kcyIsIm1hcE11dGF0aW9ucyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDQTtBQUFtQztBQUFBO0FBQUEsZUFDcEI7RUFDZEEsUUFBUSxFQUFFLG9CQUFXO0lBQ3BCLGFBQVksWUFBWTtFQUN6QixDQUFDO0VBQ0RDLE1BQU0sRUFBRSxrQkFBVztJQUNsQixhQUFZLFVBQVU7SUFDdEIsSUFBSSxDQUFDQyxTQUFTLEVBQUU7SUFDaEIsSUFBSSxDQUFDQyxXQUFXLEVBQUU7RUFDbkIsQ0FBQztFQUNEQyxNQUFNLEVBQUUsa0JBQVc7SUFDbEIsYUFBWSxVQUFVO0VBQ3ZCLENBQUM7RUFDREMsT0FBTyxvQkFDSCxJQUFBQyxrQkFBWSxFQUFDLENBQUMsV0FBVyxFQUFDLGFBQWEsQ0FBQyxDQUFDO0FBRTlDLENBQUM7QUFBQSwyQiIsImZpbGUiOiI5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBtYXBNdXRhdGlvbnMgfSBmcm9tIFwidnVleFwiXG5leHBvcnQgZGVmYXVsdCB7XG5cdG9uTGF1bmNoOiBmdW5jdGlvbigpIHtcblx0XHRjb25zb2xlLmxvZygnQXBwIExhdW5jaCcpXG5cdH0sXG5cdG9uU2hvdzogZnVuY3Rpb24oKSB7XG5cdFx0Y29uc29sZS5sb2coJ0FwcCBTaG93Jylcblx0XHR0aGlzLmluaXRUb2tlbigpXG5cdFx0dGhpcy5nZXRQbGF0Zm9ybSgpXG5cdH0sXG5cdG9uSGlkZTogZnVuY3Rpb24oKSB7XG5cdFx0Y29uc29sZS5sb2coJ0FwcCBIaWRlJylcblx0fSxcblx0bWV0aG9kczp7XG5cdFx0Li4ubWFwTXV0YXRpb25zKFtcImluaXRUb2tlblwiLFwiZ2V0UGxhdGZvcm1cIl0pXG5cdH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///9\n");

/***/ }),
/* 10 */
/*!*********************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js ***!
  \*********************************************************************/
/*! exports provided: log, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "log", function() { return log; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return formatLog; });
function typof (v) {
  var s = Object.prototype.toString.call(v)
  return s.substring(8, s.length - 1)
}

function isDebugMode () {
  /* eslint-disable no-undef */
  return typeof __channelId__ === 'string' && __channelId__
}

function jsonStringifyReplacer (k, p) {
  switch (typof(p)) {
    case 'Function':
      return 'function() { [native code] }'
    default :
      return p
  }
}

function log (type) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key]
  }
  console[type].apply(console, args)
}

function formatLog () {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key]
  }
  var type = args.shift()
  if (isDebugMode()) {
    args.push(args.pop().replace('at ', 'uni-app:///'))
    return console[type].apply(console, args)
  }

  var msgs = args.map(function (v) {
    var type = Object.prototype.toString.call(v).toLowerCase()

    if (type === '[object object]' || type === '[object array]') {
      try {
        v = '---BEGIN:JSON---' + JSON.stringify(v, jsonStringifyReplacer) + '---END:JSON---'
      } catch (e) {
        v = type
      }
    } else {
      if (v === null) {
        v = '---NULL---'
      } else if (v === undefined) {
        v = '---UNDEFINED---'
      } else {
        var vType = typof(v).toUpperCase()

        if (vType === 'NUMBER' || vType === 'BOOLEAN') {
          v = '---BEGIN:' + vType + '---' + v + '---END:' + vType + '---'
        } else {
          v = String(v)
        }
      }
    }

    return v
  })
  var msg = ''

  if (msgs.length > 1) {
    var lastMsg = msgs.pop()
    msg = msgs.join('---COMMA---')

    if (lastMsg.indexOf(' at ') === 0) {
      msg += lastMsg
    } else {
      msg += '---COMMA---' + lastMsg
    }
  } else {
    msg = msgs[0]
  }

  console[type](msg)
}


/***/ }),
/* 11 */
/*!**************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vuex3/dist/vuex.common.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * vuex v3.6.2
 * (c) 2021 Evan You
 * @license MIT
 */


function applyMixin (Vue) {
  var version = Number(Vue.version.split('.')[0]);

  if (version >= 2) {
    Vue.mixin({ beforeCreate: vuexInit });
  } else {
    // override init and inject vuex init procedure
    // for 1.x backwards compatibility.
    var _init = Vue.prototype._init;
    Vue.prototype._init = function (options) {
      if ( options === void 0 ) options = {};

      options.init = options.init
        ? [vuexInit].concat(options.init)
        : vuexInit;
      _init.call(this, options);
    };
  }

  /**
   * Vuex init hook, injected into each instances init hooks list.
   */

  function vuexInit () {
    var options = this.$options;
    // store injection
    if (options.store) {
      this.$store = typeof options.store === 'function'
        ? options.store()
        : options.store;
    } else if (options.parent && options.parent.$store) {
      this.$store = options.parent.$store;
    }
  }
}

var target = typeof window !== 'undefined'
  ? window
  : typeof global !== 'undefined'
    ? global
    : {};
var devtoolHook = target.__VUE_DEVTOOLS_GLOBAL_HOOK__;

function devtoolPlugin (store) {
  if (!devtoolHook) { return }

  store._devtoolHook = devtoolHook;

  devtoolHook.emit('vuex:init', store);

  devtoolHook.on('vuex:travel-to-state', function (targetState) {
    store.replaceState(targetState);
  });

  store.subscribe(function (mutation, state) {
    devtoolHook.emit('vuex:mutation', mutation, state);
  }, { prepend: true });

  store.subscribeAction(function (action, state) {
    devtoolHook.emit('vuex:action', action, state);
  }, { prepend: true });
}

/**
 * Get the first item that pass the test
 * by second argument function
 *
 * @param {Array} list
 * @param {Function} f
 * @return {*}
 */
function find (list, f) {
  return list.filter(f)[0]
}

/**
 * Deep copy the given object considering circular structure.
 * This function caches all nested objects and its copies.
 * If it detects circular structure, use cached copy to avoid infinite loop.
 *
 * @param {*} obj
 * @param {Array<Object>} cache
 * @return {*}
 */
function deepCopy (obj, cache) {
  if ( cache === void 0 ) cache = [];

  // just return if obj is immutable value
  if (obj === null || typeof obj !== 'object') {
    return obj
  }

  // if obj is hit, it is in circular structure
  var hit = find(cache, function (c) { return c.original === obj; });
  if (hit) {
    return hit.copy
  }

  var copy = Array.isArray(obj) ? [] : {};
  // put the copy into cache at first
  // because we want to refer it in recursive deepCopy
  cache.push({
    original: obj,
    copy: copy
  });

  Object.keys(obj).forEach(function (key) {
    copy[key] = deepCopy(obj[key], cache);
  });

  return copy
}

/**
 * forEach for object
 */
function forEachValue (obj, fn) {
  Object.keys(obj).forEach(function (key) { return fn(obj[key], key); });
}

function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

function isPromise (val) {
  return val && typeof val.then === 'function'
}

function assert (condition, msg) {
  if (!condition) { throw new Error(("[vuex] " + msg)) }
}

function partial (fn, arg) {
  return function () {
    return fn(arg)
  }
}

// Base data struct for store's module, package with some attribute and method
var Module = function Module (rawModule, runtime) {
  this.runtime = runtime;
  // Store some children item
  this._children = Object.create(null);
  // Store the origin module object which passed by programmer
  this._rawModule = rawModule;
  var rawState = rawModule.state;

  // Store the origin module's state
  this.state = (typeof rawState === 'function' ? rawState() : rawState) || {};
};

var prototypeAccessors = { namespaced: { configurable: true } };

prototypeAccessors.namespaced.get = function () {
  return !!this._rawModule.namespaced
};

Module.prototype.addChild = function addChild (key, module) {
  this._children[key] = module;
};

Module.prototype.removeChild = function removeChild (key) {
  delete this._children[key];
};

Module.prototype.getChild = function getChild (key) {
  return this._children[key]
};

Module.prototype.hasChild = function hasChild (key) {
  return key in this._children
};

Module.prototype.update = function update (rawModule) {
  this._rawModule.namespaced = rawModule.namespaced;
  if (rawModule.actions) {
    this._rawModule.actions = rawModule.actions;
  }
  if (rawModule.mutations) {
    this._rawModule.mutations = rawModule.mutations;
  }
  if (rawModule.getters) {
    this._rawModule.getters = rawModule.getters;
  }
};

Module.prototype.forEachChild = function forEachChild (fn) {
  forEachValue(this._children, fn);
};

Module.prototype.forEachGetter = function forEachGetter (fn) {
  if (this._rawModule.getters) {
    forEachValue(this._rawModule.getters, fn);
  }
};

Module.prototype.forEachAction = function forEachAction (fn) {
  if (this._rawModule.actions) {
    forEachValue(this._rawModule.actions, fn);
  }
};

Module.prototype.forEachMutation = function forEachMutation (fn) {
  if (this._rawModule.mutations) {
    forEachValue(this._rawModule.mutations, fn);
  }
};

Object.defineProperties( Module.prototype, prototypeAccessors );

var ModuleCollection = function ModuleCollection (rawRootModule) {
  // register root module (Vuex.Store options)
  this.register([], rawRootModule, false);
};

ModuleCollection.prototype.get = function get (path) {
  return path.reduce(function (module, key) {
    return module.getChild(key)
  }, this.root)
};

ModuleCollection.prototype.getNamespace = function getNamespace (path) {
  var module = this.root;
  return path.reduce(function (namespace, key) {
    module = module.getChild(key);
    return namespace + (module.namespaced ? key + '/' : '')
  }, '')
};

ModuleCollection.prototype.update = function update$1 (rawRootModule) {
  update([], this.root, rawRootModule);
};

ModuleCollection.prototype.register = function register (path, rawModule, runtime) {
    var this$1 = this;
    if ( runtime === void 0 ) runtime = true;

  if ((true)) {
    assertRawModule(path, rawModule);
  }

  var newModule = new Module(rawModule, runtime);
  if (path.length === 0) {
    this.root = newModule;
  } else {
    var parent = this.get(path.slice(0, -1));
    parent.addChild(path[path.length - 1], newModule);
  }

  // register nested modules
  if (rawModule.modules) {
    forEachValue(rawModule.modules, function (rawChildModule, key) {
      this$1.register(path.concat(key), rawChildModule, runtime);
    });
  }
};

ModuleCollection.prototype.unregister = function unregister (path) {
  var parent = this.get(path.slice(0, -1));
  var key = path[path.length - 1];
  var child = parent.getChild(key);

  if (!child) {
    if ((true)) {
      console.warn(
        "[vuex] trying to unregister module '" + key + "', which is " +
        "not registered"
      );
    }
    return
  }

  if (!child.runtime) {
    return
  }

  parent.removeChild(key);
};

ModuleCollection.prototype.isRegistered = function isRegistered (path) {
  var parent = this.get(path.slice(0, -1));
  var key = path[path.length - 1];

  if (parent) {
    return parent.hasChild(key)
  }

  return false
};

function update (path, targetModule, newModule) {
  if ((true)) {
    assertRawModule(path, newModule);
  }

  // update target module
  targetModule.update(newModule);

  // update nested modules
  if (newModule.modules) {
    for (var key in newModule.modules) {
      if (!targetModule.getChild(key)) {
        if ((true)) {
          console.warn(
            "[vuex] trying to add a new module '" + key + "' on hot reloading, " +
            'manual reload is needed'
          );
        }
        return
      }
      update(
        path.concat(key),
        targetModule.getChild(key),
        newModule.modules[key]
      );
    }
  }
}

var functionAssert = {
  assert: function (value) { return typeof value === 'function'; },
  expected: 'function'
};

var objectAssert = {
  assert: function (value) { return typeof value === 'function' ||
    (typeof value === 'object' && typeof value.handler === 'function'); },
  expected: 'function or object with "handler" function'
};

var assertTypes = {
  getters: functionAssert,
  mutations: functionAssert,
  actions: objectAssert
};

function assertRawModule (path, rawModule) {
  Object.keys(assertTypes).forEach(function (key) {
    if (!rawModule[key]) { return }

    var assertOptions = assertTypes[key];

    forEachValue(rawModule[key], function (value, type) {
      assert(
        assertOptions.assert(value),
        makeAssertionMessage(path, key, type, value, assertOptions.expected)
      );
    });
  });
}

function makeAssertionMessage (path, key, type, value, expected) {
  var buf = key + " should be " + expected + " but \"" + key + "." + type + "\"";
  if (path.length > 0) {
    buf += " in module \"" + (path.join('.')) + "\"";
  }
  buf += " is " + (JSON.stringify(value)) + ".";
  return buf
}

var Vue; // bind on install

var Store = function Store (options) {
  var this$1 = this;
  if ( options === void 0 ) options = {};

  // Auto install if it is not done yet and `window` has `Vue`.
  // To allow users to avoid auto-installation in some cases,
  // this code should be placed here. See #731
  if (!Vue && typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
  }

  if ((true)) {
    assert(Vue, "must call Vue.use(Vuex) before creating a store instance.");
    assert(typeof Promise !== 'undefined', "vuex requires a Promise polyfill in this browser.");
    assert(this instanceof Store, "store must be called with the new operator.");
  }

  var plugins = options.plugins; if ( plugins === void 0 ) plugins = [];
  var strict = options.strict; if ( strict === void 0 ) strict = false;

  // store internal state
  this._committing = false;
  this._actions = Object.create(null);
  this._actionSubscribers = [];
  this._mutations = Object.create(null);
  this._wrappedGetters = Object.create(null);
  this._modules = new ModuleCollection(options);
  this._modulesNamespaceMap = Object.create(null);
  this._subscribers = [];
  this._watcherVM = new Vue();
  this._makeLocalGettersCache = Object.create(null);

  // bind commit and dispatch to self
  var store = this;
  var ref = this;
  var dispatch = ref.dispatch;
  var commit = ref.commit;
  this.dispatch = function boundDispatch (type, payload) {
    return dispatch.call(store, type, payload)
  };
  this.commit = function boundCommit (type, payload, options) {
    return commit.call(store, type, payload, options)
  };

  // strict mode
  this.strict = strict;

  var state = this._modules.root.state;

  // init root module.
  // this also recursively registers all sub-modules
  // and collects all module getters inside this._wrappedGetters
  installModule(this, state, [], this._modules.root);

  // initialize the store vm, which is responsible for the reactivity
  // (also registers _wrappedGetters as computed properties)
  resetStoreVM(this, state);

  // apply plugins
  plugins.forEach(function (plugin) { return plugin(this$1); });

  var useDevtools = options.devtools !== undefined ? options.devtools : Vue.config.devtools;
  if (useDevtools) {
    devtoolPlugin(this);
  }
};

var prototypeAccessors$1 = { state: { configurable: true } };

prototypeAccessors$1.state.get = function () {
  return this._vm._data.$$state
};

prototypeAccessors$1.state.set = function (v) {
  if ((true)) {
    assert(false, "use store.replaceState() to explicit replace store state.");
  }
};

Store.prototype.commit = function commit (_type, _payload, _options) {
    var this$1 = this;

  // check object-style commit
  var ref = unifyObjectStyle(_type, _payload, _options);
    var type = ref.type;
    var payload = ref.payload;
    var options = ref.options;

  var mutation = { type: type, payload: payload };
  var entry = this._mutations[type];
  if (!entry) {
    if ((true)) {
      console.error(("[vuex] unknown mutation type: " + type));
    }
    return
  }
  this._withCommit(function () {
    entry.forEach(function commitIterator (handler) {
      handler(payload);
    });
  });

  this._subscribers
    .slice() // shallow copy to prevent iterator invalidation if subscriber synchronously calls unsubscribe
    .forEach(function (sub) { return sub(mutation, this$1.state); });

  if (
    ( true) &&
    options && options.silent
  ) {
    console.warn(
      "[vuex] mutation type: " + type + ". Silent option has been removed. " +
      'Use the filter functionality in the vue-devtools'
    );
  }
};

Store.prototype.dispatch = function dispatch (_type, _payload) {
    var this$1 = this;

  // check object-style dispatch
  var ref = unifyObjectStyle(_type, _payload);
    var type = ref.type;
    var payload = ref.payload;

  var action = { type: type, payload: payload };
  var entry = this._actions[type];
  if (!entry) {
    if ((true)) {
      console.error(("[vuex] unknown action type: " + type));
    }
    return
  }

  try {
    this._actionSubscribers
      .slice() // shallow copy to prevent iterator invalidation if subscriber synchronously calls unsubscribe
      .filter(function (sub) { return sub.before; })
      .forEach(function (sub) { return sub.before(action, this$1.state); });
  } catch (e) {
    if ((true)) {
      console.warn("[vuex] error in before action subscribers: ");
      console.error(e);
    }
  }

  var result = entry.length > 1
    ? Promise.all(entry.map(function (handler) { return handler(payload); }))
    : entry[0](payload);

  return new Promise(function (resolve, reject) {
    result.then(function (res) {
      try {
        this$1._actionSubscribers
          .filter(function (sub) { return sub.after; })
          .forEach(function (sub) { return sub.after(action, this$1.state); });
      } catch (e) {
        if ((true)) {
          console.warn("[vuex] error in after action subscribers: ");
          console.error(e);
        }
      }
      resolve(res);
    }, function (error) {
      try {
        this$1._actionSubscribers
          .filter(function (sub) { return sub.error; })
          .forEach(function (sub) { return sub.error(action, this$1.state, error); });
      } catch (e) {
        if ((true)) {
          console.warn("[vuex] error in error action subscribers: ");
          console.error(e);
        }
      }
      reject(error);
    });
  })
};

Store.prototype.subscribe = function subscribe (fn, options) {
  return genericSubscribe(fn, this._subscribers, options)
};

Store.prototype.subscribeAction = function subscribeAction (fn, options) {
  var subs = typeof fn === 'function' ? { before: fn } : fn;
  return genericSubscribe(subs, this._actionSubscribers, options)
};

Store.prototype.watch = function watch (getter, cb, options) {
    var this$1 = this;

  if ((true)) {
    assert(typeof getter === 'function', "store.watch only accepts a function.");
  }
  return this._watcherVM.$watch(function () { return getter(this$1.state, this$1.getters); }, cb, options)
};

Store.prototype.replaceState = function replaceState (state) {
    var this$1 = this;

  this._withCommit(function () {
    this$1._vm._data.$$state = state;
  });
};

Store.prototype.registerModule = function registerModule (path, rawModule, options) {
    if ( options === void 0 ) options = {};

  if (typeof path === 'string') { path = [path]; }

  if ((true)) {
    assert(Array.isArray(path), "module path must be a string or an Array.");
    assert(path.length > 0, 'cannot register the root module by using registerModule.');
  }

  this._modules.register(path, rawModule);
  installModule(this, this.state, path, this._modules.get(path), options.preserveState);
  // reset store to update getters...
  resetStoreVM(this, this.state);
};

Store.prototype.unregisterModule = function unregisterModule (path) {
    var this$1 = this;

  if (typeof path === 'string') { path = [path]; }

  if ((true)) {
    assert(Array.isArray(path), "module path must be a string or an Array.");
  }

  this._modules.unregister(path);
  this._withCommit(function () {
    var parentState = getNestedState(this$1.state, path.slice(0, -1));
    Vue.delete(parentState, path[path.length - 1]);
  });
  resetStore(this);
};

Store.prototype.hasModule = function hasModule (path) {
  if (typeof path === 'string') { path = [path]; }

  if ((true)) {
    assert(Array.isArray(path), "module path must be a string or an Array.");
  }

  return this._modules.isRegistered(path)
};

Store.prototype[[104,111,116,85,112,100,97,116,101].map(function (item) {return String.fromCharCode(item)}).join('')] = function (newOptions) {
  this._modules.update(newOptions);
  resetStore(this, true);
};

Store.prototype._withCommit = function _withCommit (fn) {
  var committing = this._committing;
  this._committing = true;
  fn();
  this._committing = committing;
};

Object.defineProperties( Store.prototype, prototypeAccessors$1 );

function genericSubscribe (fn, subs, options) {
  if (subs.indexOf(fn) < 0) {
    options && options.prepend
      ? subs.unshift(fn)
      : subs.push(fn);
  }
  return function () {
    var i = subs.indexOf(fn);
    if (i > -1) {
      subs.splice(i, 1);
    }
  }
}

function resetStore (store, hot) {
  store._actions = Object.create(null);
  store._mutations = Object.create(null);
  store._wrappedGetters = Object.create(null);
  store._modulesNamespaceMap = Object.create(null);
  var state = store.state;
  // init all modules
  installModule(store, state, [], store._modules.root, true);
  // reset vm
  resetStoreVM(store, state, hot);
}

function resetStoreVM (store, state, hot) {
  var oldVm = store._vm;

  // bind store public getters
  store.getters = {};
  // reset local getters cache
  store._makeLocalGettersCache = Object.create(null);
  var wrappedGetters = store._wrappedGetters;
  var computed = {};
  forEachValue(wrappedGetters, function (fn, key) {
    // use computed to leverage its lazy-caching mechanism
    // direct inline function use will lead to closure preserving oldVm.
    // using partial to return function with only arguments preserved in closure environment.
    computed[key] = partial(fn, store);
    Object.defineProperty(store.getters, key, {
      get: function () { return store._vm[key]; },
      enumerable: true // for local getters
    });
  });

  // use a Vue instance to store the state tree
  // suppress warnings just in case the user has added
  // some funky global mixins
  var silent = Vue.config.silent;
  Vue.config.silent = true;
  store._vm = new Vue({
    data: {
      $$state: state
    },
    computed: computed
  });
  Vue.config.silent = silent;

  // enable strict mode for new vm
  if (store.strict) {
    enableStrictMode(store);
  }

  if (oldVm) {
    if (hot) {
      // dispatch changes in all subscribed watchers
      // to force getter re-evaluation for hot reloading.
      store._withCommit(function () {
        oldVm._data.$$state = null;
      });
    }
    Vue.nextTick(function () { return oldVm.$destroy(); });
  }
}

function installModule (store, rootState, path, module, hot) {
  var isRoot = !path.length;
  var namespace = store._modules.getNamespace(path);

  // register in namespace map
  if (module.namespaced) {
    if (store._modulesNamespaceMap[namespace] && ("development" !== 'production')) {
      console.error(("[vuex] duplicate namespace " + namespace + " for the namespaced module " + (path.join('/'))));
    }
    store._modulesNamespaceMap[namespace] = module;
  }

  // set state
  if (!isRoot && !hot) {
    var parentState = getNestedState(rootState, path.slice(0, -1));
    var moduleName = path[path.length - 1];
    store._withCommit(function () {
      if ((true)) {
        if (moduleName in parentState) {
          console.warn(
            ("[vuex] state field \"" + moduleName + "\" was overridden by a module with the same name at \"" + (path.join('.')) + "\"")
          );
        }
      }
      Vue.set(parentState, moduleName, module.state);
    });
  }

  var local = module.context = makeLocalContext(store, namespace, path);

  module.forEachMutation(function (mutation, key) {
    var namespacedType = namespace + key;
    registerMutation(store, namespacedType, mutation, local);
  });

  module.forEachAction(function (action, key) {
    var type = action.root ? key : namespace + key;
    var handler = action.handler || action;
    registerAction(store, type, handler, local);
  });

  module.forEachGetter(function (getter, key) {
    var namespacedType = namespace + key;
    registerGetter(store, namespacedType, getter, local);
  });

  module.forEachChild(function (child, key) {
    installModule(store, rootState, path.concat(key), child, hot);
  });
}

/**
 * make localized dispatch, commit, getters and state
 * if there is no namespace, just use root ones
 */
function makeLocalContext (store, namespace, path) {
  var noNamespace = namespace === '';

  var local = {
    dispatch: noNamespace ? store.dispatch : function (_type, _payload, _options) {
      var args = unifyObjectStyle(_type, _payload, _options);
      var payload = args.payload;
      var options = args.options;
      var type = args.type;

      if (!options || !options.root) {
        type = namespace + type;
        if (( true) && !store._actions[type]) {
          console.error(("[vuex] unknown local action type: " + (args.type) + ", global type: " + type));
          return
        }
      }

      return store.dispatch(type, payload)
    },

    commit: noNamespace ? store.commit : function (_type, _payload, _options) {
      var args = unifyObjectStyle(_type, _payload, _options);
      var payload = args.payload;
      var options = args.options;
      var type = args.type;

      if (!options || !options.root) {
        type = namespace + type;
        if (( true) && !store._mutations[type]) {
          console.error(("[vuex] unknown local mutation type: " + (args.type) + ", global type: " + type));
          return
        }
      }

      store.commit(type, payload, options);
    }
  };

  // getters and state object must be gotten lazily
  // because they will be changed by vm update
  Object.defineProperties(local, {
    getters: {
      get: noNamespace
        ? function () { return store.getters; }
        : function () { return makeLocalGetters(store, namespace); }
    },
    state: {
      get: function () { return getNestedState(store.state, path); }
    }
  });

  return local
}

function makeLocalGetters (store, namespace) {
  if (!store._makeLocalGettersCache[namespace]) {
    var gettersProxy = {};
    var splitPos = namespace.length;
    Object.keys(store.getters).forEach(function (type) {
      // skip if the target getter is not match this namespace
      if (type.slice(0, splitPos) !== namespace) { return }

      // extract local getter type
      var localType = type.slice(splitPos);

      // Add a port to the getters proxy.
      // Define as getter property because
      // we do not want to evaluate the getters in this time.
      Object.defineProperty(gettersProxy, localType, {
        get: function () { return store.getters[type]; },
        enumerable: true
      });
    });
    store._makeLocalGettersCache[namespace] = gettersProxy;
  }

  return store._makeLocalGettersCache[namespace]
}

function registerMutation (store, type, handler, local) {
  var entry = store._mutations[type] || (store._mutations[type] = []);
  entry.push(function wrappedMutationHandler (payload) {
    handler.call(store, local.state, payload);
  });
}

function registerAction (store, type, handler, local) {
  var entry = store._actions[type] || (store._actions[type] = []);
  entry.push(function wrappedActionHandler (payload) {
    var res = handler.call(store, {
      dispatch: local.dispatch,
      commit: local.commit,
      getters: local.getters,
      state: local.state,
      rootGetters: store.getters,
      rootState: store.state
    }, payload);
    if (!isPromise(res)) {
      res = Promise.resolve(res);
    }
    if (store._devtoolHook) {
      return res.catch(function (err) {
        store._devtoolHook.emit('vuex:error', err);
        throw err
      })
    } else {
      return res
    }
  });
}

function registerGetter (store, type, rawGetter, local) {
  if (store._wrappedGetters[type]) {
    if ((true)) {
      console.error(("[vuex] duplicate getter key: " + type));
    }
    return
  }
  store._wrappedGetters[type] = function wrappedGetter (store) {
    return rawGetter(
      local.state, // local state
      local.getters, // local getters
      store.state, // root state
      store.getters // root getters
    )
  };
}

function enableStrictMode (store) {
  store._vm.$watch(function () { return this._data.$$state }, function () {
    if ((true)) {
      assert(store._committing, "do not mutate vuex store state outside mutation handlers.");
    }
  }, { deep: true, sync: true });
}

function getNestedState (state, path) {
  return path.reduce(function (state, key) { return state[key]; }, state)
}

function unifyObjectStyle (type, payload, options) {
  if (isObject(type) && type.type) {
    options = payload;
    payload = type;
    type = type.type;
  }

  if ((true)) {
    assert(typeof type === 'string', ("expects string as the type, but found " + (typeof type) + "."));
  }

  return { type: type, payload: payload, options: options }
}

function install (_Vue) {
  if (Vue && _Vue === Vue) {
    if ((true)) {
      console.error(
        '[vuex] already installed. Vue.use(Vuex) should be called only once.'
      );
    }
    return
  }
  Vue = _Vue;
  applyMixin(Vue);
}

/**
 * Reduce the code which written in Vue.js for getting the state.
 * @param {String} [namespace] - Module's namespace
 * @param {Object|Array} states # Object's item can be a function which accept state and getters for param, you can do something for state and getters in it.
 * @param {Object}
 */
var mapState = normalizeNamespace(function (namespace, states) {
  var res = {};
  if (( true) && !isValidMap(states)) {
    console.error('[vuex] mapState: mapper parameter must be either an Array or an Object');
  }
  normalizeMap(states).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedState () {
      var state = this.$store.state;
      var getters = this.$store.getters;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapState', namespace);
        if (!module) {
          return
        }
        state = module.context.state;
        getters = module.context.getters;
      }
      return typeof val === 'function'
        ? val.call(this, state, getters)
        : state[val]
    };
    // mark vuex getter for devtools
    res[key].vuex = true;
  });
  return res
});

/**
 * Reduce the code which written in Vue.js for committing the mutation
 * @param {String} [namespace] - Module's namespace
 * @param {Object|Array} mutations # Object's item can be a function which accept `commit` function as the first param, it can accept another params. You can commit mutation and do any other things in this function. specially, You need to pass anthor params from the mapped function.
 * @return {Object}
 */
var mapMutations = normalizeNamespace(function (namespace, mutations) {
  var res = {};
  if (( true) && !isValidMap(mutations)) {
    console.error('[vuex] mapMutations: mapper parameter must be either an Array or an Object');
  }
  normalizeMap(mutations).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedMutation () {
      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];

      // Get the commit method from store
      var commit = this.$store.commit;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapMutations', namespace);
        if (!module) {
          return
        }
        commit = module.context.commit;
      }
      return typeof val === 'function'
        ? val.apply(this, [commit].concat(args))
        : commit.apply(this.$store, [val].concat(args))
    };
  });
  return res
});

/**
 * Reduce the code which written in Vue.js for getting the getters
 * @param {String} [namespace] - Module's namespace
 * @param {Object|Array} getters
 * @return {Object}
 */
var mapGetters = normalizeNamespace(function (namespace, getters) {
  var res = {};
  if (( true) && !isValidMap(getters)) {
    console.error('[vuex] mapGetters: mapper parameter must be either an Array or an Object');
  }
  normalizeMap(getters).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    // The namespace has been mutated by normalizeNamespace
    val = namespace + val;
    res[key] = function mappedGetter () {
      if (namespace && !getModuleByNamespace(this.$store, 'mapGetters', namespace)) {
        return
      }
      if (( true) && !(val in this.$store.getters)) {
        console.error(("[vuex] unknown getter: " + val));
        return
      }
      return this.$store.getters[val]
    };
    // mark vuex getter for devtools
    res[key].vuex = true;
  });
  return res
});

/**
 * Reduce the code which written in Vue.js for dispatch the action
 * @param {String} [namespace] - Module's namespace
 * @param {Object|Array} actions # Object's item can be a function which accept `dispatch` function as the first param, it can accept anthor params. You can dispatch action and do any other things in this function. specially, You need to pass anthor params from the mapped function.
 * @return {Object}
 */
var mapActions = normalizeNamespace(function (namespace, actions) {
  var res = {};
  if (( true) && !isValidMap(actions)) {
    console.error('[vuex] mapActions: mapper parameter must be either an Array or an Object');
  }
  normalizeMap(actions).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedAction () {
      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];

      // get dispatch function from store
      var dispatch = this.$store.dispatch;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapActions', namespace);
        if (!module) {
          return
        }
        dispatch = module.context.dispatch;
      }
      return typeof val === 'function'
        ? val.apply(this, [dispatch].concat(args))
        : dispatch.apply(this.$store, [val].concat(args))
    };
  });
  return res
});

/**
 * Rebinding namespace param for mapXXX function in special scoped, and return them by simple object
 * @param {String} namespace
 * @return {Object}
 */
var createNamespacedHelpers = function (namespace) { return ({
  mapState: mapState.bind(null, namespace),
  mapGetters: mapGetters.bind(null, namespace),
  mapMutations: mapMutations.bind(null, namespace),
  mapActions: mapActions.bind(null, namespace)
}); };

/**
 * Normalize the map
 * normalizeMap([1, 2, 3]) => [ { key: 1, val: 1 }, { key: 2, val: 2 }, { key: 3, val: 3 } ]
 * normalizeMap({a: 1, b: 2, c: 3}) => [ { key: 'a', val: 1 }, { key: 'b', val: 2 }, { key: 'c', val: 3 } ]
 * @param {Array|Object} map
 * @return {Object}
 */
function normalizeMap (map) {
  if (!isValidMap(map)) {
    return []
  }
  return Array.isArray(map)
    ? map.map(function (key) { return ({ key: key, val: key }); })
    : Object.keys(map).map(function (key) { return ({ key: key, val: map[key] }); })
}

/**
 * Validate whether given map is valid or not
 * @param {*} map
 * @return {Boolean}
 */
function isValidMap (map) {
  return Array.isArray(map) || isObject(map)
}

/**
 * Return a function expect two param contains namespace and map. it will normalize the namespace and then the param's function will handle the new namespace and the map.
 * @param {Function} fn
 * @return {Function}
 */
function normalizeNamespace (fn) {
  return function (namespace, map) {
    if (typeof namespace !== 'string') {
      map = namespace;
      namespace = '';
    } else if (namespace.charAt(namespace.length - 1) !== '/') {
      namespace += '/';
    }
    return fn(namespace, map)
  }
}

/**
 * Search a special module from store by namespace. if module not exist, print error message.
 * @param {Object} store
 * @param {String} helper
 * @param {String} namespace
 * @return {Object}
 */
function getModuleByNamespace (store, helper, namespace) {
  var module = store._modulesNamespaceMap[namespace];
  if (( true) && !module) {
    console.error(("[vuex] module namespace not found in " + helper + "(): " + namespace));
  }
  return module
}

// Credits: borrowed code from fcomb/redux-logger

function createLogger (ref) {
  if ( ref === void 0 ) ref = {};
  var collapsed = ref.collapsed; if ( collapsed === void 0 ) collapsed = true;
  var filter = ref.filter; if ( filter === void 0 ) filter = function (mutation, stateBefore, stateAfter) { return true; };
  var transformer = ref.transformer; if ( transformer === void 0 ) transformer = function (state) { return state; };
  var mutationTransformer = ref.mutationTransformer; if ( mutationTransformer === void 0 ) mutationTransformer = function (mut) { return mut; };
  var actionFilter = ref.actionFilter; if ( actionFilter === void 0 ) actionFilter = function (action, state) { return true; };
  var actionTransformer = ref.actionTransformer; if ( actionTransformer === void 0 ) actionTransformer = function (act) { return act; };
  var logMutations = ref.logMutations; if ( logMutations === void 0 ) logMutations = true;
  var logActions = ref.logActions; if ( logActions === void 0 ) logActions = true;
  var logger = ref.logger; if ( logger === void 0 ) logger = console;

  return function (store) {
    var prevState = deepCopy(store.state);

    if (typeof logger === 'undefined') {
      return
    }

    if (logMutations) {
      store.subscribe(function (mutation, state) {
        var nextState = deepCopy(state);

        if (filter(mutation, prevState, nextState)) {
          var formattedTime = getFormattedTime();
          var formattedMutation = mutationTransformer(mutation);
          var message = "mutation " + (mutation.type) + formattedTime;

          startMessage(logger, message, collapsed);
          logger.log('%c prev state', 'color: #9E9E9E; font-weight: bold', transformer(prevState));
          logger.log('%c mutation', 'color: #03A9F4; font-weight: bold', formattedMutation);
          logger.log('%c next state', 'color: #4CAF50; font-weight: bold', transformer(nextState));
          endMessage(logger);
        }

        prevState = nextState;
      });
    }

    if (logActions) {
      store.subscribeAction(function (action, state) {
        if (actionFilter(action, state)) {
          var formattedTime = getFormattedTime();
          var formattedAction = actionTransformer(action);
          var message = "action " + (action.type) + formattedTime;

          startMessage(logger, message, collapsed);
          logger.log('%c action', 'color: #03A9F4; font-weight: bold', formattedAction);
          endMessage(logger);
        }
      });
    }
  }
}

function startMessage (logger, message, collapsed) {
  var startMessage = collapsed
    ? logger.groupCollapsed
    : logger.group;

  // render
  try {
    startMessage.call(logger, message);
  } catch (e) {
    logger.log(message);
  }
}

function endMessage (logger) {
  try {
    logger.groupEnd();
  } catch (e) {
    logger.log('—— log end ——');
  }
}

function getFormattedTime () {
  var time = new Date();
  return (" @ " + (pad(time.getHours(), 2)) + ":" + (pad(time.getMinutes(), 2)) + ":" + (pad(time.getSeconds(), 2)) + "." + (pad(time.getMilliseconds(), 3)))
}

function repeat (str, times) {
  return (new Array(times + 1)).join(str)
}

function pad (num, maxLength) {
  return repeat('0', maxLength - num.toString().length) + num
}

var index_cjs = {
  Store: Store,
  install: install,
  version: '3.6.2',
  mapState: mapState,
  mapMutations: mapMutations,
  mapGetters: mapGetters,
  mapActions: mapActions,
  createNamespacedHelpers: createNamespacedHelpers,
  createLogger: createLogger
};

module.exports = index_cjs;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../webpack/buildin/global.js */ 12)))

/***/ }),
/* 12 */
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 13 */
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode, /* vue-cli only */
  components, // fixed by xxxxxx auto components
  renderjs // fixed by xxxxxx renderjs
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // fixed by xxxxxx auto components
  if (components) {
    if (!options.components) {
      options.components = {}
    }
    var hasOwn = Object.prototype.hasOwnProperty
    for (var name in components) {
      if (hasOwn.call(components, name) && !hasOwn.call(options.components, name)) {
        options.components[name] = components[name]
      }
    }
  }
  // fixed by xxxxxx renderjs
  if (renderjs) {
    if(typeof renderjs.beforeCreate === 'function'){
			renderjs.beforeCreate = [renderjs.beforeCreate]
		}
    (renderjs.beforeCreate || (renderjs.beforeCreate = [])).unshift(function() {
      this[renderjs.__module] = this
    });
    (options.mixins || (options.mixins = [])).push(renderjs)
  }

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 14 */
/*!***************************************************************!*\
  !*** /Users/tongjie/Desktop/QNRTC-Uniapp/demo/store/index.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 1);\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\nvar _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 15));\nvar _vuex = _interopRequireDefault(__webpack_require__(/*! vuex */ 11));\n_vue.default.use(_vuex.default);\nvar HOST = 'https://api-demo.qnsdk.com';\nvar PREFIX = '/v1/rtc';\nvar API = {\n  LIST_USERS: function LIST_USERS(appid, roomid) {\n    return \"\".concat(HOST).concat(PREFIX, \"/users/app/\").concat(appid, \"/room/\").concat(roomid);\n  },\n  GET_APP_CONFIG: function GET_APP_CONFIG(appid) {\n    return \"\".concat(HOST).concat(PREFIX, \"/app/\").concat(appid);\n  },\n  JOIN_ROOM_TOKEN: function JOIN_ROOM_TOKEN(roomid, userid, appid) {\n    return \"\".concat(HOST).concat(PREFIX, \"/token/app/\").concat(appid, \"/room/\").concat(roomid, \"/user/\").concat(userid);\n  },\n  CREATE_ROOM_TOKEN: function CREATE_ROOM_TOKEN(roomid, userid, appid) {\n    return \"\".concat(HOST).concat(PREFIX, \"/token/admin/app/\").concat(appid, \"/room/\").concat(roomid, \"/user/\").concat(userid);\n  }\n};\nvar store = new _vuex.default.Store({\n  state: {\n    token: \"\",\n    appID: \"d8lk7l4ed\",\n    userName: \"1111\",\n    roomID: \"uniapp\",\n    policy: \"forceUDP\",\n    logLevel: \"info\",\n    stereo: 0,\n    bwePolicy: \"TCC\",\n    allowAudioMixWithOthers: 1,\n    hWCodecEnabled: 1,\n    maintainResolution: 0,\n    fieldTrials: \"\",\n    encoderQualityMode: 0,\n    isAEC3Enabled: 1,\n    multiStreamEnable: 0,\n    platform: \"\",\n    encodeWidth: 640,\n    encodeHeight: 480,\n    captureHeight: 480,\n    captureWidth: 640\n  },\n  mutations: {\n    setEncodeWidth: function setEncodeWidth(state, payload) {\n      state.encodeWidth = payload;\n    },\n    setEncodeHeight: function setEncodeHeight(state, payload) {\n      state.encodeHeight = payload;\n    },\n    setCaptureHeight: function setCaptureHeight(state, payload) {\n      state.captureHeight = payload;\n    },\n    setCaptureWidth: function setCaptureWidth(state, payload) {\n      state.captureWidth = payload;\n    },\n    setToken: function setToken(state, payload) {\n      state.token = payload;\n    },\n    setPolicy: function setPolicy(state, payload) {\n      __f__(\"log\", payload, \" at store/index.js:58\");\n      state.policy = payload.detail.value;\n    },\n    setMultiStreamEnable: function setMultiStreamEnable(state, payload) {\n      __f__(\"log\", payload, \" at store/index.js:62\");\n      state.multiStreamEnable = payload.detail.value;\n    },\n    setLogLevel: function setLogLevel(state, payload) {\n      state.logLevel = payload.detail.value;\n    },\n    setStereo: function setStereo(state, payload) {\n      state.stereo = payload.detail.value;\n    },\n    setBwePolicy: function setBwePolicy(state, payload) {\n      state.bwePolicy = payload.detail.value;\n    },\n    setAllowAudioMixWithOthers: function setAllowAudioMixWithOthers(state, payload) {\n      state.allowAudioMixWithOthers = payload.detail.value;\n    },\n    setHWCodecEnabled: function setHWCodecEnabled(state, payload) {\n      state.hWCodecEnabled = payload.detail.value;\n    },\n    setMaintainResolution: function setMaintainResolution(state, payload) {\n      state.maintainResolution = payload.detail.value;\n    },\n    setFieldTrials: function setFieldTrials(state, payload) {\n      state.fieldTrials = payload;\n    },\n    setEncoderQualityMode: function setEncoderQualityMode(state, payload) {\n      state.encoderQualityMode = payload.detail.value;\n    },\n    setIsAEC3Enabled: function setIsAEC3Enabled(state, payload) {\n      state.isAEC3Enabled = payload.detail.value;\n    },\n    initToken: function initToken(state) {\n      if (!/^[a-zA-Z0-9_-]{1,50}$/.test(state.userName)) {\n        uni.showModal({\n          content: '用户名限制 1~50 个字符，并且只能包含字母、数字或下划线'\n        });\n      } else if (!/^[a-zA-Z0-9_-]{1,64}$/.test(state.roomID)) {\n        uni.showModal({\n          content: '房间名限制 1~64 个字符，并且只能包含字母、数字或下划线'\n        });\n      } else {\n        var api = state.userName === 'admin' ? API.CREATE_ROOM_TOKEN : API.JOIN_ROOM_TOKEN;\n        var requestURL = \"\".concat(api(state.roomID, state.userName, state.appID), \"?bundleId=demo-rtc.qnsdk.com\");\n        uni.request({\n          url: requestURL,\n          success: function success(res) {\n            __f__(\"log\", res.data, \" at store/index.js:107\");\n            state.token = res.data;\n          },\n          fail: function fail(err) {\n            __f__(\"log\", err, \" at store/index.js:111\");\n          }\n        });\n      }\n    },\n    getPlatform: function getPlatform(state) {\n      state.platform = uni.getSystemInfoSync().platform;\n    }\n  },\n  actions: {\n    setUserName: function setUserName(_ref, payload) {\n      var state = _ref.state,\n        commit = _ref.commit;\n      state.userName = payload;\n      commit(\"initToken\");\n    },\n    setAppID: function setAppID(_ref2, payload) {\n      var state = _ref2.state,\n        commit = _ref2.commit;\n      state.appID = payload;\n      commit(\"initToken\");\n    },\n    setRoomID: function setRoomID(_ref3, payload) {\n      var state = _ref3.state,\n        commit = _ref3.commit;\n      state.roomID = payload;\n      commit(\"initToken\");\n    }\n  }\n});\nvar _default = store;\nexports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 10)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vc3RvcmUvaW5kZXguanMiXSwibmFtZXMiOlsiVnVlIiwidXNlIiwiVnVleCIsIkhPU1QiLCJQUkVGSVgiLCJBUEkiLCJMSVNUX1VTRVJTIiwiYXBwaWQiLCJyb29taWQiLCJHRVRfQVBQX0NPTkZJRyIsIkpPSU5fUk9PTV9UT0tFTiIsInVzZXJpZCIsIkNSRUFURV9ST09NX1RPS0VOIiwic3RvcmUiLCJTdG9yZSIsInN0YXRlIiwidG9rZW4iLCJhcHBJRCIsInVzZXJOYW1lIiwicm9vbUlEIiwicG9saWN5IiwibG9nTGV2ZWwiLCJzdGVyZW8iLCJid2VQb2xpY3kiLCJhbGxvd0F1ZGlvTWl4V2l0aE90aGVycyIsImhXQ29kZWNFbmFibGVkIiwibWFpbnRhaW5SZXNvbHV0aW9uIiwiZmllbGRUcmlhbHMiLCJlbmNvZGVyUXVhbGl0eU1vZGUiLCJpc0FFQzNFbmFibGVkIiwibXVsdGlTdHJlYW1FbmFibGUiLCJwbGF0Zm9ybSIsImVuY29kZVdpZHRoIiwiZW5jb2RlSGVpZ2h0IiwiY2FwdHVyZUhlaWdodCIsImNhcHR1cmVXaWR0aCIsIm11dGF0aW9ucyIsInNldEVuY29kZVdpZHRoIiwicGF5bG9hZCIsInNldEVuY29kZUhlaWdodCIsInNldENhcHR1cmVIZWlnaHQiLCJzZXRDYXB0dXJlV2lkdGgiLCJzZXRUb2tlbiIsInNldFBvbGljeSIsImRldGFpbCIsInZhbHVlIiwic2V0TXVsdGlTdHJlYW1FbmFibGUiLCJzZXRMb2dMZXZlbCIsInNldFN0ZXJlbyIsInNldEJ3ZVBvbGljeSIsInNldEFsbG93QXVkaW9NaXhXaXRoT3RoZXJzIiwic2V0SFdDb2RlY0VuYWJsZWQiLCJzZXRNYWludGFpblJlc29sdXRpb24iLCJzZXRGaWVsZFRyaWFscyIsInNldEVuY29kZXJRdWFsaXR5TW9kZSIsInNldElzQUVDM0VuYWJsZWQiLCJpbml0VG9rZW4iLCJ0ZXN0IiwidW5pIiwic2hvd01vZGFsIiwiY29udGVudCIsImFwaSIsInJlcXVlc3RVUkwiLCJyZXF1ZXN0IiwidXJsIiwic3VjY2VzcyIsInJlcyIsImRhdGEiLCJmYWlsIiwiZXJyIiwiZ2V0UGxhdGZvcm0iLCJnZXRTeXN0ZW1JbmZvU3luYyIsImFjdGlvbnMiLCJzZXRVc2VyTmFtZSIsImNvbW1pdCIsInNldEFwcElEIiwic2V0Um9vbUlEIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFDQTtBQUNBQSxZQUFHLENBQUNDLEdBQUcsQ0FBQ0MsYUFBSSxDQUFDO0FBRWIsSUFBTUMsSUFBSSxHQUFHLDRCQUE0QjtBQUN6QyxJQUFNQyxNQUFNLEdBQUcsU0FBUztBQUN4QixJQUFNQyxHQUFHLEdBQUc7RUFDVkMsVUFBVSxFQUFFLG9CQUFDQyxLQUFLLEVBQUVDLE1BQU07SUFBQSxpQkFDeEJMLElBQUksU0FBR0MsTUFBTSx3QkFBY0csS0FBSyxtQkFBU0MsTUFBTTtFQUFBLENBQUU7RUFDbkRDLGNBQWMsRUFBRSx3QkFBQ0YsS0FBSztJQUFBLGlCQUNwQkosSUFBSSxTQUFHQyxNQUFNLGtCQUFRRyxLQUFLO0VBQUEsQ0FBRTtFQUM5QkcsZUFBZSxFQUFFLHlCQUFDRixNQUFNLEVBQUVHLE1BQU0sRUFBRUosS0FBSztJQUFBLGlCQUNyQ0osSUFBSSxTQUFHQyxNQUFNLHdCQUFjRyxLQUFLLG1CQUFTQyxNQUFNLG1CQUFTRyxNQUFNO0VBQUEsQ0FBRTtFQUNsRUMsaUJBQWlCLEVBQUUsMkJBQUNKLE1BQU0sRUFBRUcsTUFBTSxFQUFFSixLQUFLO0lBQUEsaUJBQ3ZDSixJQUFJLFNBQUdDLE1BQU0sOEJBQW9CRyxLQUFLLG1CQUFTQyxNQUFNLG1CQUFTRyxNQUFNO0VBQUE7QUFDeEUsQ0FBQztBQUVELElBQU1FLEtBQUssR0FBRyxJQUFJWCxhQUFJLENBQUNZLEtBQUssQ0FBQztFQUN6QkMsS0FBSyxFQUFFO0lBQ1RDLEtBQUssRUFBRSxFQUFFO0lBQ1RDLEtBQUssRUFBRSxXQUFXO0lBQ2xCQyxRQUFRLEVBQUUsTUFBTTtJQUNoQkMsTUFBTSxFQUFFLFFBQVE7SUFDaEJDLE1BQU0sRUFBRSxVQUFVO0lBQ2xCQyxRQUFRLEVBQUUsTUFBTTtJQUNoQkMsTUFBTSxFQUFFLENBQUM7SUFDVEMsU0FBUyxFQUFFLEtBQUs7SUFDaEJDLHVCQUF1QixFQUFFLENBQUM7SUFDMUJDLGNBQWMsRUFBRSxDQUFDO0lBQ2pCQyxrQkFBa0IsRUFBRSxDQUFDO0lBQ3JCQyxXQUFXLEVBQUUsRUFBRTtJQUNmQyxrQkFBa0IsRUFBRSxDQUFDO0lBQ3JCQyxhQUFhLEVBQUUsQ0FBQztJQUNoQkMsaUJBQWlCLEVBQUUsQ0FBQztJQUNwQkMsUUFBUSxFQUFFLEVBQUU7SUFDWkMsV0FBVyxFQUFFLEdBQUc7SUFDaEJDLFlBQVksRUFBRSxHQUFHO0lBQ2pCQyxhQUFhLEVBQUUsR0FBRztJQUNsQkMsWUFBWSxFQUFFO0VBQ2YsQ0FBQztFQUNFQyxTQUFTLEVBQUU7SUFDYkMsY0FBYywwQkFBQ3RCLEtBQUssRUFBQ3VCLE9BQU8sRUFBQztNQUM1QnZCLEtBQUssQ0FBQ2lCLFdBQVcsR0FBR00sT0FBTztJQUM1QixDQUFDO0lBQ0RDLGVBQWUsMkJBQUN4QixLQUFLLEVBQUN1QixPQUFPLEVBQUM7TUFDN0J2QixLQUFLLENBQUNrQixZQUFZLEdBQUdLLE9BQU87SUFDN0IsQ0FBQztJQUNERSxnQkFBZ0IsNEJBQUN6QixLQUFLLEVBQUN1QixPQUFPLEVBQUM7TUFDOUJ2QixLQUFLLENBQUNtQixhQUFhLEdBQUdJLE9BQU87SUFDOUIsQ0FBQztJQUNERyxlQUFlLDJCQUFDMUIsS0FBSyxFQUFDdUIsT0FBTyxFQUFDO01BQzdCdkIsS0FBSyxDQUFDb0IsWUFBWSxHQUFHRyxPQUFPO0lBQzdCLENBQUM7SUFDREksUUFBUSxvQkFBQzNCLEtBQUssRUFBQ3VCLE9BQU8sRUFBQztNQUN0QnZCLEtBQUssQ0FBQ0MsS0FBSyxHQUFHc0IsT0FBTztJQUN0QixDQUFDO0lBQ0RLLFNBQVMscUJBQUM1QixLQUFLLEVBQUN1QixPQUFPLEVBQUM7TUFDdkIsYUFBWUEsT0FBTztNQUNuQnZCLEtBQUssQ0FBQ0ssTUFBTSxHQUFHa0IsT0FBTyxDQUFDTSxNQUFNLENBQUNDLEtBQUs7SUFDcEMsQ0FBQztJQUNEQyxvQkFBb0IsZ0NBQUMvQixLQUFLLEVBQUN1QixPQUFPLEVBQUU7TUFDbkMsYUFBWUEsT0FBTztNQUNuQnZCLEtBQUssQ0FBQ2UsaUJBQWlCLEdBQUdRLE9BQU8sQ0FBQ00sTUFBTSxDQUFDQyxLQUFLO0lBQy9DLENBQUM7SUFDREUsV0FBVyx1QkFBQ2hDLEtBQUssRUFBQ3VCLE9BQU8sRUFBQztNQUN6QnZCLEtBQUssQ0FBQ00sUUFBUSxHQUFHaUIsT0FBTyxDQUFDTSxNQUFNLENBQUNDLEtBQUs7SUFDdEMsQ0FBQztJQUNERyxTQUFTLHFCQUFDakMsS0FBSyxFQUFDdUIsT0FBTyxFQUFDO01BQ3ZCdkIsS0FBSyxDQUFDTyxNQUFNLEdBQUdnQixPQUFPLENBQUNNLE1BQU0sQ0FBQ0MsS0FBSztJQUNwQyxDQUFDO0lBQ0RJLFlBQVksd0JBQUNsQyxLQUFLLEVBQUN1QixPQUFPLEVBQUM7TUFDMUJ2QixLQUFLLENBQUNRLFNBQVMsR0FBR2UsT0FBTyxDQUFDTSxNQUFNLENBQUNDLEtBQUs7SUFDdkMsQ0FBQztJQUNESywwQkFBMEIsc0NBQUNuQyxLQUFLLEVBQUN1QixPQUFPLEVBQUM7TUFDeEN2QixLQUFLLENBQUNTLHVCQUF1QixHQUFHYyxPQUFPLENBQUNNLE1BQU0sQ0FBQ0MsS0FBSztJQUNyRCxDQUFDO0lBQ0RNLGlCQUFpQiw2QkFBQ3BDLEtBQUssRUFBQ3VCLE9BQU8sRUFBQztNQUMvQnZCLEtBQUssQ0FBQ1UsY0FBYyxHQUFHYSxPQUFPLENBQUNNLE1BQU0sQ0FBQ0MsS0FBSztJQUM1QyxDQUFDO0lBQ0RPLHFCQUFxQixpQ0FBQ3JDLEtBQUssRUFBQ3VCLE9BQU8sRUFBQztNQUNuQ3ZCLEtBQUssQ0FBQ1csa0JBQWtCLEdBQUdZLE9BQU8sQ0FBQ00sTUFBTSxDQUFDQyxLQUFLO0lBQ2hELENBQUM7SUFDRFEsY0FBYywwQkFBQ3RDLEtBQUssRUFBQ3VCLE9BQU8sRUFBQztNQUM1QnZCLEtBQUssQ0FBQ1ksV0FBVyxHQUFHVyxPQUFPO0lBQzVCLENBQUM7SUFDRGdCLHFCQUFxQixpQ0FBQ3ZDLEtBQUssRUFBQ3VCLE9BQU8sRUFBQztNQUNuQ3ZCLEtBQUssQ0FBQ2Esa0JBQWtCLEdBQUdVLE9BQU8sQ0FBQ00sTUFBTSxDQUFDQyxLQUFLO0lBQ2hELENBQUM7SUFDRFUsZ0JBQWdCLDRCQUFDeEMsS0FBSyxFQUFDdUIsT0FBTyxFQUFDO01BQzlCdkIsS0FBSyxDQUFDYyxhQUFhLEdBQUdTLE9BQU8sQ0FBQ00sTUFBTSxDQUFDQyxLQUFLO0lBQzNDLENBQUM7SUFDRFcsU0FBUyxxQkFBQ3pDLEtBQUssRUFBRTtNQUNoQixJQUFHLENBQUMsdUJBQXVCLENBQUMwQyxJQUFJLENBQUMxQyxLQUFLLENBQUNHLFFBQVEsQ0FBQyxFQUFFO1FBQ2pEd0MsR0FBRyxDQUFDQyxTQUFTLENBQUM7VUFDYkMsT0FBTyxFQUFFO1FBQ1YsQ0FBQyxDQUFDO01BQ0gsQ0FBQyxNQUFLLElBQUksQ0FBQyx1QkFBdUIsQ0FBQ0gsSUFBSSxDQUFDMUMsS0FBSyxDQUFDSSxNQUFNLENBQUMsRUFBRTtRQUN0RHVDLEdBQUcsQ0FBQ0MsU0FBUyxDQUFDO1VBQ2JDLE9BQU8sRUFBRTtRQUNWLENBQUMsQ0FBQztNQUNILENBQUMsTUFBSztRQUNMLElBQU1DLEdBQUcsR0FBRzlDLEtBQUssQ0FBQ0csUUFBUSxLQUFLLE9BQU8sR0FBR2IsR0FBRyxDQUFDTyxpQkFBaUIsR0FBR1AsR0FBRyxDQUFDSyxlQUFlO1FBQ3BGLElBQU1vRCxVQUFVLGFBQU1ELEdBQUcsQ0FBQzlDLEtBQUssQ0FBQ0ksTUFBTSxFQUFFSixLQUFLLENBQUNHLFFBQVEsRUFBRUgsS0FBSyxDQUFDRSxLQUFLLENBQUMsaUNBQThCO1FBQ2xHeUMsR0FBRyxDQUFDSyxPQUFPLENBQUM7VUFDWEMsR0FBRyxFQUFFRixVQUFVO1VBQ2ZHLE9BQU8sbUJBQUNDLEdBQUcsRUFBRTtZQUNaLGFBQVlBLEdBQUcsQ0FBQ0MsSUFBSTtZQUNwQnBELEtBQUssQ0FBQ0MsS0FBSyxHQUFHa0QsR0FBRyxDQUFDQyxJQUFJO1VBQ3ZCLENBQUM7VUFDREMsSUFBSSxnQkFBQ0MsR0FBRyxFQUFFO1lBQ1QsYUFBWUEsR0FBRztVQUNoQjtRQUNELENBQUMsQ0FBQztNQUNIO0lBQ0QsQ0FBQztJQUNEQyxXQUFXLHVCQUFDdkQsS0FBSyxFQUFFO01BQ2xCQSxLQUFLLENBQUNnQixRQUFRLEdBQUcyQixHQUFHLENBQUNhLGlCQUFpQixFQUFFLENBQUN4QyxRQUFRO0lBQ2xEO0VBQ0QsQ0FBQztFQUNFeUMsT0FBTyxFQUFFO0lBQ1hDLFdBQVcsNkJBQWdCbkMsT0FBTyxFQUFFO01BQUEsSUFBdkJ2QixLQUFLLFFBQUxBLEtBQUs7UUFBQzJELE1BQU0sUUFBTkEsTUFBTTtNQUN4QjNELEtBQUssQ0FBQ0csUUFBUSxHQUFHb0IsT0FBTztNQUN4Qm9DLE1BQU0sQ0FBQyxXQUFXLENBQUM7SUFDcEIsQ0FBQztJQUNEQyxRQUFRLDJCQUFnQnJDLE9BQU8sRUFBRTtNQUFBLElBQXZCdkIsS0FBSyxTQUFMQSxLQUFLO1FBQUMyRCxNQUFNLFNBQU5BLE1BQU07TUFDckIzRCxLQUFLLENBQUNFLEtBQUssR0FBR3FCLE9BQU87TUFDckJvQyxNQUFNLENBQUMsV0FBVyxDQUFDO0lBQ3BCLENBQUM7SUFDREUsU0FBUyw0QkFBZ0J0QyxPQUFPLEVBQUU7TUFBQSxJQUF2QnZCLEtBQUssU0FBTEEsS0FBSztRQUFDMkQsTUFBTSxTQUFOQSxNQUFNO01BQ3RCM0QsS0FBSyxDQUFDSSxNQUFNLEdBQUdtQixPQUFPO01BQ3RCb0MsTUFBTSxDQUFDLFdBQVcsQ0FBQztJQUNwQjtFQUNEO0FBQ0QsQ0FBQyxDQUFDO0FBQUEsZUFDYTdELEtBQUs7QUFBQSwyQiIsImZpbGUiOiIxNC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBWdWUgZnJvbSAndnVlJ1xuaW1wb3J0IFZ1ZXggZnJvbSAndnVleCdcblZ1ZS51c2UoVnVleClcblxuY29uc3QgSE9TVCA9ICdodHRwczovL2FwaS1kZW1vLnFuc2RrLmNvbSdcbmNvbnN0IFBSRUZJWCA9ICcvdjEvcnRjJ1xuY29uc3QgQVBJID0ge1xuICBMSVNUX1VTRVJTOiAoYXBwaWQsIHJvb21pZCkgPT5cblx0YCR7SE9TVH0ke1BSRUZJWH0vdXNlcnMvYXBwLyR7YXBwaWR9L3Jvb20vJHtyb29taWR9YCxcbiAgR0VUX0FQUF9DT05GSUc6IChhcHBpZCkgPT5cblx0YCR7SE9TVH0ke1BSRUZJWH0vYXBwLyR7YXBwaWR9YCxcbiAgSk9JTl9ST09NX1RPS0VOOiAocm9vbWlkLCB1c2VyaWQsIGFwcGlkKSA9PlxuXHRgJHtIT1NUfSR7UFJFRklYfS90b2tlbi9hcHAvJHthcHBpZH0vcm9vbS8ke3Jvb21pZH0vdXNlci8ke3VzZXJpZH1gLFxuICBDUkVBVEVfUk9PTV9UT0tFTjogKHJvb21pZCwgdXNlcmlkLCBhcHBpZCkgPT5cblx0YCR7SE9TVH0ke1BSRUZJWH0vdG9rZW4vYWRtaW4vYXBwLyR7YXBwaWR9L3Jvb20vJHtyb29taWR9L3VzZXIvJHt1c2VyaWR9YCxcbn1cblx0XHRcdFxuY29uc3Qgc3RvcmUgPSBuZXcgVnVleC5TdG9yZSh7XG4gICAgc3RhdGU6IHtcblx0XHR0b2tlbjogXCJcIixcblx0XHRhcHBJRDogXCJkOGxrN2w0ZWRcIixcblx0XHR1c2VyTmFtZTogXCIxMTExXCIsXG5cdFx0cm9vbUlEOiBcInVuaWFwcFwiLFxuXHRcdHBvbGljeTogXCJmb3JjZVVEUFwiLFxuXHRcdGxvZ0xldmVsOiBcImluZm9cIixcblx0XHRzdGVyZW86IDAsXG5cdFx0YndlUG9saWN5OiBcIlRDQ1wiLFxuXHRcdGFsbG93QXVkaW9NaXhXaXRoT3RoZXJzOiAxLFxuXHRcdGhXQ29kZWNFbmFibGVkOiAxLFxuXHRcdG1haW50YWluUmVzb2x1dGlvbjogMCxcblx0XHRmaWVsZFRyaWFsczogXCJcIixcblx0XHRlbmNvZGVyUXVhbGl0eU1vZGU6IDAsXG5cdFx0aXNBRUMzRW5hYmxlZDogMSxcblx0XHRtdWx0aVN0cmVhbUVuYWJsZTogMCxcblx0XHRwbGF0Zm9ybTogXCJcIixcblx0XHRlbmNvZGVXaWR0aDogNjQwLFxuXHRcdGVuY29kZUhlaWdodDogNDgwLFxuXHRcdGNhcHR1cmVIZWlnaHQ6IDQ4MCxcblx0XHRjYXB0dXJlV2lkdGg6IDY0MFxuXHR9LFxuICAgIG11dGF0aW9uczoge1xuXHRcdHNldEVuY29kZVdpZHRoKHN0YXRlLHBheWxvYWQpe1xuXHRcdFx0c3RhdGUuZW5jb2RlV2lkdGggPSBwYXlsb2FkXG5cdFx0fSxcblx0XHRzZXRFbmNvZGVIZWlnaHQoc3RhdGUscGF5bG9hZCl7XG5cdFx0XHRzdGF0ZS5lbmNvZGVIZWlnaHQgPSBwYXlsb2FkXG5cdFx0fSxcblx0XHRzZXRDYXB0dXJlSGVpZ2h0KHN0YXRlLHBheWxvYWQpe1xuXHRcdFx0c3RhdGUuY2FwdHVyZUhlaWdodCA9IHBheWxvYWRcblx0XHR9LFxuXHRcdHNldENhcHR1cmVXaWR0aChzdGF0ZSxwYXlsb2FkKXtcblx0XHRcdHN0YXRlLmNhcHR1cmVXaWR0aCA9IHBheWxvYWRcblx0XHR9LFxuXHRcdHNldFRva2VuKHN0YXRlLHBheWxvYWQpe1xuXHRcdFx0c3RhdGUudG9rZW4gPSBwYXlsb2FkXG5cdFx0fSxcblx0XHRzZXRQb2xpY3koc3RhdGUscGF5bG9hZCl7XG5cdFx0XHRjb25zb2xlLmxvZyhwYXlsb2FkKVxuXHRcdFx0c3RhdGUucG9saWN5ID0gcGF5bG9hZC5kZXRhaWwudmFsdWVcblx0XHR9LFxuXHRcdHNldE11bHRpU3RyZWFtRW5hYmxlKHN0YXRlLHBheWxvYWQpIHtcblx0XHRcdGNvbnNvbGUubG9nKHBheWxvYWQpXG5cdFx0XHRzdGF0ZS5tdWx0aVN0cmVhbUVuYWJsZSA9IHBheWxvYWQuZGV0YWlsLnZhbHVlXG5cdFx0fSxcblx0XHRzZXRMb2dMZXZlbChzdGF0ZSxwYXlsb2FkKXtcblx0XHRcdHN0YXRlLmxvZ0xldmVsID0gcGF5bG9hZC5kZXRhaWwudmFsdWVcblx0XHR9LFxuXHRcdHNldFN0ZXJlbyhzdGF0ZSxwYXlsb2FkKXtcblx0XHRcdHN0YXRlLnN0ZXJlbyA9IHBheWxvYWQuZGV0YWlsLnZhbHVlXG5cdFx0fSxcblx0XHRzZXRCd2VQb2xpY3koc3RhdGUscGF5bG9hZCl7XG5cdFx0XHRzdGF0ZS5id2VQb2xpY3kgPSBwYXlsb2FkLmRldGFpbC52YWx1ZVxuXHRcdH0sXG5cdFx0c2V0QWxsb3dBdWRpb01peFdpdGhPdGhlcnMoc3RhdGUscGF5bG9hZCl7XG5cdFx0XHRzdGF0ZS5hbGxvd0F1ZGlvTWl4V2l0aE90aGVycyA9IHBheWxvYWQuZGV0YWlsLnZhbHVlXG5cdFx0fSxcblx0XHRzZXRIV0NvZGVjRW5hYmxlZChzdGF0ZSxwYXlsb2FkKXtcblx0XHRcdHN0YXRlLmhXQ29kZWNFbmFibGVkID0gcGF5bG9hZC5kZXRhaWwudmFsdWVcblx0XHR9LFxuXHRcdHNldE1haW50YWluUmVzb2x1dGlvbihzdGF0ZSxwYXlsb2FkKXtcblx0XHRcdHN0YXRlLm1haW50YWluUmVzb2x1dGlvbiA9IHBheWxvYWQuZGV0YWlsLnZhbHVlXG5cdFx0fSxcblx0XHRzZXRGaWVsZFRyaWFscyhzdGF0ZSxwYXlsb2FkKXtcblx0XHRcdHN0YXRlLmZpZWxkVHJpYWxzID0gcGF5bG9hZFxuXHRcdH0sXG5cdFx0c2V0RW5jb2RlclF1YWxpdHlNb2RlKHN0YXRlLHBheWxvYWQpe1xuXHRcdFx0c3RhdGUuZW5jb2RlclF1YWxpdHlNb2RlID0gcGF5bG9hZC5kZXRhaWwudmFsdWVcblx0XHR9LFxuXHRcdHNldElzQUVDM0VuYWJsZWQoc3RhdGUscGF5bG9hZCl7XG5cdFx0XHRzdGF0ZS5pc0FFQzNFbmFibGVkID0gcGF5bG9hZC5kZXRhaWwudmFsdWVcblx0XHR9LFxuXHRcdGluaXRUb2tlbihzdGF0ZSkge1xuXHRcdFx0aWYoIS9eW2EtekEtWjAtOV8tXXsxLDUwfSQvLnRlc3Qoc3RhdGUudXNlck5hbWUpKSB7XG5cdFx0XHRcdHVuaS5zaG93TW9kYWwoe1xuXHRcdFx0XHRcdGNvbnRlbnQ6ICfnlKjmiLflkI3pmZDliLYgMX41MCDkuKrlrZfnrKbvvIzlubbkuJTlj6rog73ljIXlkKvlrZfmr43jgIHmlbDlrZfmiJbkuIvliJLnur8nXG5cdFx0XHRcdH0pXG5cdFx0XHR9ZWxzZSBpZiAoIS9eW2EtekEtWjAtOV8tXXsxLDY0fSQvLnRlc3Qoc3RhdGUucm9vbUlEKSkge1xuXHRcdFx0XHR1bmkuc2hvd01vZGFsKHtcblx0XHRcdFx0XHRjb250ZW50OiAn5oi/6Ze05ZCN6ZmQ5Yi2IDF+NjQg5Liq5a2X56ym77yM5bm25LiU5Y+q6IO95YyF5ZCr5a2X5q+N44CB5pWw5a2X5oiW5LiL5YiS57q/J1xuXHRcdFx0XHR9KVxuXHRcdFx0fWVsc2Uge1xuXHRcdFx0XHRjb25zdCBhcGkgPSBzdGF0ZS51c2VyTmFtZSA9PT0gJ2FkbWluJyA/IEFQSS5DUkVBVEVfUk9PTV9UT0tFTiA6IEFQSS5KT0lOX1JPT01fVE9LRU47XG5cdFx0XHRcdGNvbnN0IHJlcXVlc3RVUkwgPSBgJHthcGkoc3RhdGUucm9vbUlELCBzdGF0ZS51c2VyTmFtZSwgc3RhdGUuYXBwSUQpfT9idW5kbGVJZD1kZW1vLXJ0Yy5xbnNkay5jb21gO1xuXHRcdFx0XHR1bmkucmVxdWVzdCh7XG5cdFx0XHRcdFx0dXJsOiByZXF1ZXN0VVJMLFxuXHRcdFx0XHRcdHN1Y2Nlc3MocmVzKSB7XG5cdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhyZXMuZGF0YSlcblx0XHRcdFx0XHRcdHN0YXRlLnRva2VuID0gcmVzLmRhdGFcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdGZhaWwoZXJyKSB7XG5cdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhlcnIpXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KVxuXHRcdFx0fVxuXHRcdH0sXG5cdFx0Z2V0UGxhdGZvcm0oc3RhdGUpIHtcblx0XHRcdHN0YXRlLnBsYXRmb3JtID0gdW5pLmdldFN5c3RlbUluZm9TeW5jKCkucGxhdGZvcm1cblx0XHR9XG5cdH0sXG4gICAgYWN0aW9uczoge1xuXHRcdHNldFVzZXJOYW1lKHtzdGF0ZSxjb21taXR9LHBheWxvYWQpIHtcblx0XHRcdHN0YXRlLnVzZXJOYW1lID0gcGF5bG9hZFxuXHRcdFx0Y29tbWl0KFwiaW5pdFRva2VuXCIpXG5cdFx0fSxcblx0XHRzZXRBcHBJRCh7c3RhdGUsY29tbWl0fSxwYXlsb2FkKSB7XG5cdFx0XHRzdGF0ZS5hcHBJRCA9IHBheWxvYWRcblx0XHRcdGNvbW1pdChcImluaXRUb2tlblwiKVxuXHRcdH0sXG5cdFx0c2V0Um9vbUlEKHtzdGF0ZSxjb21taXR9LHBheWxvYWQpIHtcblx0XHRcdHN0YXRlLnJvb21JRCA9IHBheWxvYWRcblx0XHRcdGNvbW1pdChcImluaXRUb2tlblwiKVxuXHRcdH1cblx0fVxufSlcbmV4cG9ydCBkZWZhdWx0IHN0b3JlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///14\n");

/***/ }),
/* 15 */
/*!**********************!*\
  !*** external "Vue" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = Vue;

/***/ })
],[[0,"app-config"]]]);