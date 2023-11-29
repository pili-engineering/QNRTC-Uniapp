"use weex:vue";
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 362);
/******/ })
/************************************************************************/
/******/ ({

/***/ 1:
/*!****************************************************************************!*\
  !*** /Users/tongjie/Desktop/QNRTC-Uniapp/demo/main.js?{"type":"appStyle"} ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("Vue.prototype.__$appStyle__ = {}\nVue.prototype.__merge_style && Vue.prototype.__merge_style(__webpack_require__(/*! ./App.vue?vue&type=style&index=0&lang=scss */ 2).default,Vue.prototype.__$appStyle__)\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0EsMkRBQTJELG1CQUFPLENBQUMsbURBQTRDIiwiZmlsZSI6IjEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18gPSB7fVxuVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlICYmIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShyZXF1aXJlKFwiLi9BcHAudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1zY3NzXCIpLmRlZmF1bHQsVnVlLnByb3RvdHlwZS5fXyRhcHBTdHlsZV9fKVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///1\n");

/***/ }),

/***/ 115:
/*!**************************************************************************************************!*\
  !*** /Users/tongjie/Desktop/QNRTC-Uniapp/demo/uni_modules/uview-ui/components/u-icon/u-icon.vue ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _u_icon_vue_vue_type_template_id_2ee87dc9_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./u-icon.vue?vue&type=template&id=2ee87dc9&scoped=true& */ 116);\n/* harmony import */ var _u_icon_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./u-icon.vue?vue&type=script&lang=js& */ 118);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _u_icon_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _u_icon_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 20);\n\nvar renderjs\n\n\nfunction injectStyles (context) {\n  \n  if(!this.options.style){\n          this.options.style = {}\n      }\n      if(Vue.prototype.__merge_style && Vue.prototype.__$appStyle__){\n        Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style)\n      }\n      if(Vue.prototype.__merge_style){\n                Vue.prototype.__merge_style(__webpack_require__(/*! ./u-icon.vue?vue&type=style&index=0&id=2ee87dc9&lang=scss&scoped=true& */ 122).default, this.options.style)\n            }else{\n                Object.assign(this.options.style,__webpack_require__(/*! ./u-icon.vue?vue&type=style&index=0&id=2ee87dc9&lang=scss&scoped=true& */ 122).default)\n            }\n\n}\n\n/* normalize component */\n\nvar component = Object(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _u_icon_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _u_icon_vue_vue_type_template_id_2ee87dc9_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _u_icon_vue_vue_type_template_id_2ee87dc9_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"2ee87dc9\",\n  \"56fa38e7\",\n  false,\n  _u_icon_vue_vue_type_template_id_2ee87dc9_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ninjectStyles.call(component)\ncomponent.options.__file = \"uni_modules/uview-ui/components/u-icon/u-icon.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBK0g7QUFDL0g7QUFDMEQ7QUFDTDtBQUNyRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxtQkFBTyxDQUFDLGlGQUF3RTtBQUM1SCxhQUFhO0FBQ2IsaURBQWlELG1CQUFPLENBQUMsaUZBQXdFO0FBQ2pJOztBQUVBOztBQUVBO0FBQ3NOO0FBQ3ROLGdCQUFnQixpTkFBVTtBQUMxQixFQUFFLDRFQUFNO0FBQ1IsRUFBRSw2RkFBTTtBQUNSLEVBQUUsc0dBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsaUdBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDZSxnRiIsImZpbGUiOiIxMTUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IGZyb20gXCIuL3UtaWNvbi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MmVlODdkYzkmc2NvcGVkPXRydWUmXCJcbnZhciByZW5kZXJqc1xuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi91LWljb24udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi91LWljb24udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5mdW5jdGlvbiBpbmplY3RTdHlsZXMgKGNvbnRleHQpIHtcbiAgXG4gIGlmKCF0aGlzLm9wdGlvbnMuc3R5bGUpe1xuICAgICAgICAgIHRoaXMub3B0aW9ucy5zdHlsZSA9IHt9XG4gICAgICB9XG4gICAgICBpZihWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUgJiYgVnVlLnByb3RvdHlwZS5fXyRhcHBTdHlsZV9fKXtcbiAgICAgICAgVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlKFZ1ZS5wcm90b3R5cGUuX18kYXBwU3R5bGVfXywgdGhpcy5vcHRpb25zLnN0eWxlKVxuICAgICAgfVxuICAgICAgaWYoVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlKXtcbiAgICAgICAgICAgICAgICBWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUocmVxdWlyZShcIi4vdS1pY29uLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTJlZTg3ZGM5Jmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIikuZGVmYXVsdCwgdGhpcy5vcHRpb25zLnN0eWxlKVxuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLm9wdGlvbnMuc3R5bGUscmVxdWlyZShcIi4vdS1pY29uLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTJlZTg3ZGM5Jmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIikuZGVmYXVsdClcbiAgICAgICAgICAgIH1cblxufVxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCIyZWU4N2RjOVwiLFxuICBcIjU2ZmEzOGU3XCIsXG4gIGZhbHNlLFxuICBjb21wb25lbnRzLFxuICByZW5kZXJqc1xuKVxuXG5pbmplY3RTdHlsZXMuY2FsbChjb21wb25lbnQpXG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInVuaV9tb2R1bGVzL3V2aWV3LXVpL2NvbXBvbmVudHMvdS1pY29uL3UtaWNvbi52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///115\n");

/***/ }),

/***/ 116:
/*!*********************************************************************************************************************************************!*\
  !*** /Users/tongjie/Desktop/QNRTC-Uniapp/demo/uni_modules/uview-ui/components/u-icon/u-icon.vue?vue&type=template&id=2ee87dc9&scoped=true& ***!
  \*********************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_u_icon_vue_vue_type_template_id_2ee87dc9_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-0!../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./u-icon.vue?vue&type=template&id=2ee87dc9&scoped=true& */ 117);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_u_icon_vue_vue_type_template_id_2ee87dc9_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_u_icon_vue_vue_type_template_id_2ee87dc9_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_u_icon_vue_vue_type_template_id_2ee87dc9_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_u_icon_vue_vue_type_template_id_2ee87dc9_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 117:
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!/Users/tongjie/Desktop/QNRTC-Uniapp/demo/uni_modules/uview-ui/components/u-icon/u-icon.vue?vue&type=template&id=2ee87dc9&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "view",
    {
      staticClass: ["u-icon"],
      class: ["u-icon--" + _vm.labelPos],
      on: { click: _vm.clickHandler },
    },
    [
      _vm.isImg
        ? _c("u-image", {
            staticClass: ["u-icon__img"],
            style: [_vm.imgStyle, _vm.$u.addStyle(_vm.customStyle)],
            attrs: { src: _vm.name, mode: _vm.imgMode },
          })
        : _c(
            "u-text",
            {
              staticClass: ["u-icon__icon"],
              class: _vm.uClasses,
              style: [_vm.iconStyle, _vm.$u.addStyle(_vm.customStyle)],
              appendAsTree: true,
              attrs: { hoverClass: _vm.hoverClass, append: "tree" },
            },
            [_vm._v(_vm._s(_vm.icon))]
          ),
      _vm.label !== ""
        ? _c(
            "u-text",
            {
              staticClass: ["u-icon__label"],
              style: {
                color: _vm.labelColor,
                fontSize: _vm.$u.addUnit(_vm.labelSize),
                marginLeft:
                  _vm.labelPos == "right" ? _vm.$u.addUnit(_vm.space) : 0,
                marginTop:
                  _vm.labelPos == "bottom" ? _vm.$u.addUnit(_vm.space) : 0,
                marginRight:
                  _vm.labelPos == "left" ? _vm.$u.addUnit(_vm.space) : 0,
                marginBottom:
                  _vm.labelPos == "top" ? _vm.$u.addUnit(_vm.space) : 0,
              },
              appendAsTree: true,
              attrs: { append: "tree" },
            },
            [_vm._v(_vm._s(_vm.label))]
          )
        : _vm._e(),
    ],
    1
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 118:
/*!***************************************************************************************************************************!*\
  !*** /Users/tongjie/Desktop/QNRTC-Uniapp/demo/uni_modules/uview-ui/components/u-icon/u-icon.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_u_icon_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib??ref--5-0!../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--5-1!../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./u-icon.vue?vue&type=script&lang=js& */ 119);\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_u_icon_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_u_icon_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_u_icon_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_u_icon_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_u_icon_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQThqQixDQUFnQixzakJBQUcsRUFBQyIsImZpbGUiOiIxMTguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNS0wIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS01LTEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vdS1pY29uLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTUtMCEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNS0xIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3UtaWNvbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///118\n");

/***/ }),

/***/ 119:
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--5-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--5-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!/Users/tongjie/Desktop/QNRTC-Uniapp/demo/uni_modules/uview-ui/components/u-icon/u-icon.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 16);\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\nvar _icons = _interopRequireDefault(__webpack_require__(/*! ./icons */ 120));\nvar _props = _interopRequireDefault(__webpack_require__(/*! ./props.js */ 121));\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n// nvue通过weex的dom模块引入字体，相关文档地址如下：\n// https://weex.apache.org/zh/docs/modules/dom.html#addrule\nvar fontUrl = 'https://at.alicdn.com/t/font_2225171_8kdcwk4po24.ttf';\nvar domModule = weex.requireModule('dom');\ndomModule.addRule('fontFace', {\n  'fontFamily': \"uicon-iconfont\",\n  'src': \"url('\".concat(fontUrl, \"')\")\n});\n\n// 引入图标名称，已经对应的unicode\n\n;\n\n/**\n * icon 图标\n * @description 基于字体的图标集，包含了大多数常见场景的图标。\n * @tutorial https://www.uviewui.com/components/icon.html\n * @property {String}\t\t\tname\t\t\t图标名称，见示例图标集\n * @property {String}\t\t\tcolor\t\t\t图标颜色,可接受主题色 （默认 color['u-content-color'] ）\n * @property {String | Number}\tsize\t\t\t图标字体大小，单位px （默认 '16px' ）\n * @property {Boolean}\t\t\tbold\t\t\t是否显示粗体 （默认 false ）\n * @property {String | Number}\tindex\t\t\t点击图标的时候传递事件出去的index（用于区分点击了哪一个）\n * @property {String}\t\t\thoverClass\t\t图标按下去的样式类，用法同uni的view组件的hoverClass参数，详情见官网\n * @property {String}\t\t\tcustomPrefix\t自定义扩展前缀，方便用户扩展自己的图标库 （默认 'uicon' ）\n * @property {String | Number}\tlabel\t\t\t图标右侧的label文字\n * @property {String}\t\t\tlabelPos\t\tlabel相对于图标的位置，只能right或bottom （默认 'right' ）\n * @property {String | Number}\tlabelSize\t\tlabel字体大小，单位px （默认 '15px' ）\n * @property {String}\t\t\tlabelColor\t\t图标右侧的label文字颜色 （ 默认 color['u-content-color'] ）\n * @property {String | Number}\tspace\t\t\tlabel与图标的距离，单位px （默认 '3px' ）\n * @property {String}\t\t\timgMode\t\t\t图片的mode\n * @property {String | Number}\twidth\t\t\t显示图片小图标时的宽度\n * @property {String | Number}\theight\t\t\t显示图片小图标时的高度\n * @property {String | Number}\ttop\t\t\t\t图标在垂直方向上的定位 用于解决某些情况下，让图标垂直居中的用途  （默认 0 ）\n * @property {Boolean}\t\t\tstop\t\t\t是否阻止事件传播 （默认 false ）\n * @property {Object}\t\t\tcustomStyle\t\ticon的样式，对象形式\n * @event {Function} click 点击图标时触发\n * @event {Function} touchstart 事件触摸时触发\n * @example <u-icon name=\"photo\" color=\"#2979ff\" size=\"28\"></u-icon>\n */\nvar _default = {\n  name: 'u-icon',\n  data: function data() {\n    return {};\n  },\n  mixins: [uni.$u.mpMixin, uni.$u.mixin, _props.default],\n  computed: {\n    uClasses: function uClasses() {\n      var classes = [];\n      classes.push(this.customPrefix + '-' + this.name);\n      // // uView的自定义图标类名为u-iconfont\n      // if (this.customPrefix == 'uicon') {\n      // \tclasses.push('u-iconfont')\n      // } else {\n      // \tclasses.push(this.customPrefix)\n      // }\n      // 主题色，通过类配置\n      if (this.color && uni.$u.config.type.includes(this.color)) classes.push('u-icon__icon--' + this.color);\n      // 阿里，头条，百度小程序通过数组绑定类名时，无法直接使用[a, b, c]的形式，否则无法识别\n      // 故需将其拆成一个字符串的形式，通过空格隔开各个类名\n\n      return classes;\n    },\n    iconStyle: function iconStyle() {\n      var style = {};\n      style = {\n        fontSize: uni.$u.addUnit(this.size),\n        lineHeight: uni.$u.addUnit(this.size),\n        fontWeight: this.bold ? 'bold' : 'normal',\n        // 某些特殊情况需要设置一个到顶部的距离，才能更好的垂直居中\n        top: uni.$u.addUnit(this.top)\n      };\n      // 非主题色值时，才当作颜色值\n      if (this.color && !uni.$u.config.type.includes(this.color)) style.color = this.color;\n      return style;\n    },\n    // 判断传入的name属性，是否图片路径，只要带有\"/\"均认为是图片形式\n    isImg: function isImg() {\n      return this.name.indexOf('/') !== -1;\n    },\n    imgStyle: function imgStyle() {\n      var style = {};\n      // 如果设置width和height属性，则优先使用，否则使用size属性\n      style.width = this.width ? uni.$u.addUnit(this.width) : uni.$u.addUnit(this.size);\n      style.height = this.height ? uni.$u.addUnit(this.height) : uni.$u.addUnit(this.size);\n      return style;\n    },\n    // 通过图标名，查找对应的图标\n    icon: function icon() {\n      // 如果内置的图标中找不到对应的图标，就直接返回name值，因为用户可能传入的是unicode代码\n      return _icons.default['uicon-' + this.name] || this.name;\n    }\n  },\n  methods: {\n    clickHandler: function clickHandler(e) {\n      this.$emit('click', this.index);\n      // 是否阻止事件冒泡\n      this.stop && this.preventEvent(e);\n    }\n  }\n};\nexports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vdW5pX21vZHVsZXMvdXZpZXctdWkvY29tcG9uZW50cy91LWljb24vdS1pY29uLnZ1ZSJdLCJuYW1lcyI6WyJkb21Nb2R1bGUiLCJuYW1lIiwiZGF0YSIsIm1peGlucyIsImNvbXB1dGVkIiwidUNsYXNzZXMiLCJjbGFzc2VzIiwiaWNvblN0eWxlIiwic3R5bGUiLCJmb250U2l6ZSIsImxpbmVIZWlnaHQiLCJmb250V2VpZ2h0IiwidG9wIiwiaXNJbWciLCJpbWdTdHlsZSIsImljb24iLCJtZXRob2RzIiwiY2xpY2tIYW5kbGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBaURBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBYkE7QUFDQTtBQUNBO0FBQ0E7QUFDQUE7RUFDQTtFQUNBO0FBQ0E7O0FBR0E7O0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXpCQSxlQTBCQTtFQUNBQztFQUNBQztJQUNBLFFBRUE7RUFDQTtFQUNBQztFQUNBQztJQUNBQztNQUNBO01BQ0FDO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7O01BSUE7SUFDQTtJQUNBQztNQUNBO01BQ0FDO1FBQ0FDO1FBQ0FDO1FBQ0FDO1FBQ0E7UUFDQUM7TUFDQTtNQUNBO01BQ0E7TUFFQTtJQUNBO0lBQ0E7SUFDQUM7TUFDQTtJQUNBO0lBQ0FDO01BQ0E7TUFDQTtNQUNBTjtNQUNBQTtNQUNBO0lBQ0E7SUFDQTtJQUNBTztNQUNBO01BQ0E7SUFDQTtFQUNBO0VBQ0FDO0lBQ0FDO01BQ0E7TUFDQTtNQUNBO0lBQ0E7RUFDQTtBQUNBO0FBQUEiLCJmaWxlIjoiMTE5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuXHQ8dmlld1xuXHQgICAgY2xhc3M9XCJ1LWljb25cIlxuXHQgICAgQHRhcD1cImNsaWNrSGFuZGxlclwiXG5cdCAgICA6Y2xhc3M9XCJbJ3UtaWNvbi0tJyArIGxhYmVsUG9zXVwiXG5cdD5cblx0XHQ8aW1hZ2Vcblx0XHQgICAgY2xhc3M9XCJ1LWljb25fX2ltZ1wiXG5cdFx0ICAgIHYtaWY9XCJpc0ltZ1wiXG5cdFx0ICAgIDpzcmM9XCJuYW1lXCJcblx0XHQgICAgOm1vZGU9XCJpbWdNb2RlXCJcblx0XHQgICAgOnN0eWxlPVwiW2ltZ1N0eWxlLCAkdS5hZGRTdHlsZShjdXN0b21TdHlsZSldXCJcblx0XHQ+PC9pbWFnZT5cblx0XHQ8dGV4dFxuXHRcdCAgICB2LWVsc2Vcblx0XHQgICAgY2xhc3M9XCJ1LWljb25fX2ljb25cIlxuXHRcdCAgICA6Y2xhc3M9XCJ1Q2xhc3Nlc1wiXG5cdFx0ICAgIDpzdHlsZT1cIltpY29uU3R5bGUsICR1LmFkZFN0eWxlKGN1c3RvbVN0eWxlKV1cIlxuXHRcdCAgICA6aG92ZXItY2xhc3M9XCJob3ZlckNsYXNzXCJcblx0XHQ+e3tpY29ufX08L3RleHQ+XG5cdFx0PCEtLSDov5nph4zov5vooYznqbrlrZfnrKbkuLLliKTmlq3vvIzlpoLmnpzku4Xku4XmmK92LWlmPVwibGFiZWxcIu+8jOWPr+iDveS8muWHuueOsOS8oOmAkjDnmoTml7blgJnvvIznu5PmnpzkuZ/ml6Dms5XmmL7npLogLS0+XG5cdFx0PHRleHRcblx0XHQgICAgdi1pZj1cImxhYmVsICE9PSAnJ1wiIFxuXHRcdCAgICBjbGFzcz1cInUtaWNvbl9fbGFiZWxcIlxuXHRcdCAgICA6c3R5bGU9XCJ7XG5cdFx0XHRjb2xvcjogbGFiZWxDb2xvcixcblx0XHRcdGZvbnRTaXplOiAkdS5hZGRVbml0KGxhYmVsU2l6ZSksXG5cdFx0XHRtYXJnaW5MZWZ0OiBsYWJlbFBvcyA9PSAncmlnaHQnID8gJHUuYWRkVW5pdChzcGFjZSkgOiAwLFxuXHRcdFx0bWFyZ2luVG9wOiBsYWJlbFBvcyA9PSAnYm90dG9tJyA/ICR1LmFkZFVuaXQoc3BhY2UpIDogMCxcblx0XHRcdG1hcmdpblJpZ2h0OiBsYWJlbFBvcyA9PSAnbGVmdCcgPyAkdS5hZGRVbml0KHNwYWNlKSA6IDAsXG5cdFx0XHRtYXJnaW5Cb3R0b206IGxhYmVsUG9zID09ICd0b3AnID8gJHUuYWRkVW5pdChzcGFjZSkgOiAwLFxuXHRcdH1cIlxuXHRcdD57eyBsYWJlbCB9fTwvdGV4dD5cblx0PC92aWV3PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cblx0Ly8gI2lmZGVmIEFQUC1OVlVFXG5cdC8vIG52dWXpgJrov4d3ZWV455qEZG9t5qih5Z2X5byV5YWl5a2X5L2T77yM55u45YWz5paH5qGj5Zyw5Z2A5aaC5LiL77yaXG5cdC8vIGh0dHBzOi8vd2VleC5hcGFjaGUub3JnL3poL2RvY3MvbW9kdWxlcy9kb20uaHRtbCNhZGRydWxlXG5cdGNvbnN0IGZvbnRVcmwgPSAnaHR0cHM6Ly9hdC5hbGljZG4uY29tL3QvZm9udF8yMjI1MTcxXzhrZGN3azRwbzI0LnR0Zidcblx0Y29uc3QgZG9tTW9kdWxlID0gd2VleC5yZXF1aXJlTW9kdWxlKCdkb20nKVxuXHRkb21Nb2R1bGUuYWRkUnVsZSgnZm9udEZhY2UnLCB7XG5cdFx0J2ZvbnRGYW1pbHknOiBcInVpY29uLWljb25mb250XCIsXG5cdFx0J3NyYyc6IGB1cmwoJyR7Zm9udFVybH0nKWBcblx0fSlcblx0Ly8gI2VuZGlmXG5cblx0Ly8g5byV5YWl5Zu+5qCH5ZCN56ew77yM5bey57uP5a+55bqU55qEdW5pY29kZVxuXHRpbXBvcnQgaWNvbnMgZnJvbSAnLi9pY29ucydcblx0XG5cdGltcG9ydCBwcm9wcyBmcm9tICcuL3Byb3BzLmpzJzs7XG5cblx0LyoqXG5cdCAqIGljb24g5Zu+5qCHXG5cdCAqIEBkZXNjcmlwdGlvbiDln7rkuo7lrZfkvZPnmoTlm77moIfpm4bvvIzljIXlkKvkuoblpKflpJrmlbDluLjop4HlnLrmma/nmoTlm77moIfjgIJcblx0ICogQHR1dG9yaWFsIGh0dHBzOi8vd3d3LnV2aWV3dWkuY29tL2NvbXBvbmVudHMvaWNvbi5odG1sXG5cdCAqIEBwcm9wZXJ0eSB7U3RyaW5nfVx0XHRcdG5hbWVcdFx0XHTlm77moIflkI3np7DvvIzop4HnpLrkvovlm77moIfpm4Zcblx0ICogQHByb3BlcnR5IHtTdHJpbmd9XHRcdFx0Y29sb3JcdFx0XHTlm77moIfpopzoibIs5Y+v5o6l5Y+X5Li76aKY6ImyIO+8iOm7mOiupCBjb2xvclsndS1jb250ZW50LWNvbG9yJ10g77yJXG5cdCAqIEBwcm9wZXJ0eSB7U3RyaW5nIHwgTnVtYmVyfVx0c2l6ZVx0XHRcdOWbvuagh+Wtl+S9k+Wkp+Wwj++8jOWNleS9jXB4IO+8iOm7mOiupCAnMTZweCcg77yJXG5cdCAqIEBwcm9wZXJ0eSB7Qm9vbGVhbn1cdFx0XHRib2xkXHRcdFx05piv5ZCm5pi+56S657KX5L2TIO+8iOm7mOiupCBmYWxzZSDvvIlcblx0ICogQHByb3BlcnR5IHtTdHJpbmcgfCBOdW1iZXJ9XHRpbmRleFx0XHRcdOeCueWHu+Wbvuagh+eahOaXtuWAmeS8oOmAkuS6i+S7tuWHuuWOu+eahGluZGV477yI55So5LqO5Yy65YiG54K55Ye75LqG5ZOq5LiA5Liq77yJXG5cdCAqIEBwcm9wZXJ0eSB7U3RyaW5nfVx0XHRcdGhvdmVyQ2xhc3NcdFx05Zu+5qCH5oyJ5LiL5Y6755qE5qC35byP57G777yM55So5rOV5ZCMdW5p55qEdmlld+e7hOS7tueahGhvdmVyQ2xhc3Plj4LmlbDvvIzor6bmg4Xop4HlrpjnvZFcblx0ICogQHByb3BlcnR5IHtTdHJpbmd9XHRcdFx0Y3VzdG9tUHJlZml4XHToh6rlrprkuYnmianlsZXliY3nvIDvvIzmlrnkvr/nlKjmiLfmianlsZXoh6rlt7HnmoTlm77moIflupMg77yI6buY6K6kICd1aWNvbicg77yJXG5cdCAqIEBwcm9wZXJ0eSB7U3RyaW5nIHwgTnVtYmVyfVx0bGFiZWxcdFx0XHTlm77moIflj7PkvqfnmoRsYWJlbOaWh+Wtl1xuXHQgKiBAcHJvcGVydHkge1N0cmluZ31cdFx0XHRsYWJlbFBvc1x0XHRsYWJlbOebuOWvueS6juWbvuagh+eahOS9jee9ru+8jOWPquiDvXJpZ2h05oiWYm90dG9tIO+8iOm7mOiupCAncmlnaHQnIO+8iVxuXHQgKiBAcHJvcGVydHkge1N0cmluZyB8IE51bWJlcn1cdGxhYmVsU2l6ZVx0XHRsYWJlbOWtl+S9k+Wkp+Wwj++8jOWNleS9jXB4IO+8iOm7mOiupCAnMTVweCcg77yJXG5cdCAqIEBwcm9wZXJ0eSB7U3RyaW5nfVx0XHRcdGxhYmVsQ29sb3JcdFx05Zu+5qCH5Y+z5L6n55qEbGFiZWzmloflrZfpopzoibIg77yIIOm7mOiupCBjb2xvclsndS1jb250ZW50LWNvbG9yJ10g77yJXG5cdCAqIEBwcm9wZXJ0eSB7U3RyaW5nIHwgTnVtYmVyfVx0c3BhY2VcdFx0XHRsYWJlbOS4juWbvuagh+eahOi3neemu++8jOWNleS9jXB4IO+8iOm7mOiupCAnM3B4JyDvvIlcblx0ICogQHByb3BlcnR5IHtTdHJpbmd9XHRcdFx0aW1nTW9kZVx0XHRcdOWbvueJh+eahG1vZGVcblx0ICogQHByb3BlcnR5IHtTdHJpbmcgfCBOdW1iZXJ9XHR3aWR0aFx0XHRcdOaYvuekuuWbvueJh+Wwj+Wbvuagh+aXtueahOWuveW6plxuXHQgKiBAcHJvcGVydHkge1N0cmluZyB8IE51bWJlcn1cdGhlaWdodFx0XHRcdOaYvuekuuWbvueJh+Wwj+Wbvuagh+aXtueahOmrmOW6plxuXHQgKiBAcHJvcGVydHkge1N0cmluZyB8IE51bWJlcn1cdHRvcFx0XHRcdFx05Zu+5qCH5Zyo5Z6C55u05pa55ZCR5LiK55qE5a6a5L2NIOeUqOS6juino+WGs+afkOS6m+aDheWGteS4i++8jOiuqeWbvuagh+WeguebtOWxheS4reeahOeUqOmAlCAg77yI6buY6K6kIDAg77yJXG5cdCAqIEBwcm9wZXJ0eSB7Qm9vbGVhbn1cdFx0XHRzdG9wXHRcdFx05piv5ZCm6Zi75q2i5LqL5Lu25Lyg5pKtIO+8iOm7mOiupCBmYWxzZSDvvIlcblx0ICogQHByb3BlcnR5IHtPYmplY3R9XHRcdFx0Y3VzdG9tU3R5bGVcdFx0aWNvbueahOagt+W8j++8jOWvueixoeW9ouW8j1xuXHQgKiBAZXZlbnQge0Z1bmN0aW9ufSBjbGljayDngrnlh7vlm77moIfml7bop6blj5Fcblx0ICogQGV2ZW50IHtGdW5jdGlvbn0gdG91Y2hzdGFydCDkuovku7bop6bmkbjml7bop6blj5Fcblx0ICogQGV4YW1wbGUgPHUtaWNvbiBuYW1lPVwicGhvdG9cIiBjb2xvcj1cIiMyOTc5ZmZcIiBzaXplPVwiMjhcIj48L3UtaWNvbj5cblx0ICovXG5cdGV4cG9ydCBkZWZhdWx0IHtcblx0XHRuYW1lOiAndS1pY29uJyxcblx0XHRkYXRhKCkge1xuXHRcdFx0cmV0dXJuIHtcblxuXHRcdFx0fVxuXHRcdH0sXG5cdFx0bWl4aW5zOiBbdW5pLiR1Lm1wTWl4aW4sIHVuaS4kdS5taXhpbixwcm9wc10sXG5cdFx0Y29tcHV0ZWQ6IHtcblx0XHRcdHVDbGFzc2VzKCkge1xuXHRcdFx0XHRsZXQgY2xhc3NlcyA9IFtdXG5cdFx0XHRcdGNsYXNzZXMucHVzaCh0aGlzLmN1c3RvbVByZWZpeCArICctJyArIHRoaXMubmFtZSlcblx0XHRcdFx0Ly8gLy8gdVZpZXfnmoToh6rlrprkuYnlm77moIfnsbvlkI3kuLp1LWljb25mb250XG5cdFx0XHRcdC8vIGlmICh0aGlzLmN1c3RvbVByZWZpeCA9PSAndWljb24nKSB7XG5cdFx0XHRcdC8vIFx0Y2xhc3Nlcy5wdXNoKCd1LWljb25mb250Jylcblx0XHRcdFx0Ly8gfSBlbHNlIHtcblx0XHRcdFx0Ly8gXHRjbGFzc2VzLnB1c2godGhpcy5jdXN0b21QcmVmaXgpXG5cdFx0XHRcdC8vIH1cblx0XHRcdFx0Ly8g5Li76aKY6Imy77yM6YCa6L+H57G76YWN572uXG5cdFx0XHRcdGlmICh0aGlzLmNvbG9yICYmIHVuaS4kdS5jb25maWcudHlwZS5pbmNsdWRlcyh0aGlzLmNvbG9yKSkgY2xhc3Nlcy5wdXNoKCd1LWljb25fX2ljb24tLScgKyB0aGlzLmNvbG9yKVxuXHRcdFx0XHQvLyDpmL/ph4zvvIzlpLTmnaHvvIznmb7luqblsI/nqIvluo/pgJrov4fmlbDnu4Tnu5HlrprnsbvlkI3ml7bvvIzml6Dms5Xnm7TmjqXkvb/nlKhbYSwgYiwgY13nmoTlvaLlvI/vvIzlkKbliJnml6Dms5Xor4bliKtcblx0XHRcdFx0Ly8g5pWF6ZyA5bCG5YW25ouG5oiQ5LiA5Liq5a2X56ym5Liy55qE5b2i5byP77yM6YCa6L+H56m65qC86ZqU5byA5ZCE5Liq57G75ZCNXG5cdFx0XHRcdC8vI2lmZGVmIE1QLUFMSVBBWSB8fCBNUC1UT1VUSUFPIHx8IE1QLUJBSURVXG5cdFx0XHRcdGNsYXNzZXMgPSBjbGFzc2VzLmpvaW4oJyAnKVxuXHRcdFx0XHQvLyNlbmRpZlxuXHRcdFx0XHRyZXR1cm4gY2xhc3Nlc1xuXHRcdFx0fSxcblx0XHRcdGljb25TdHlsZSgpIHtcblx0XHRcdFx0bGV0IHN0eWxlID0ge31cblx0XHRcdFx0c3R5bGUgPSB7XG5cdFx0XHRcdFx0Zm9udFNpemU6IHVuaS4kdS5hZGRVbml0KHRoaXMuc2l6ZSksXG5cdFx0XHRcdFx0bGluZUhlaWdodDogdW5pLiR1LmFkZFVuaXQodGhpcy5zaXplKSxcblx0XHRcdFx0XHRmb250V2VpZ2h0OiB0aGlzLmJvbGQgPyAnYm9sZCcgOiAnbm9ybWFsJyxcblx0XHRcdFx0XHQvLyDmn5Dkupvnibnmrormg4XlhrXpnIDopoHorr7nva7kuIDkuKrliLDpobbpg6jnmoTot53nprvvvIzmiY3og73mm7Tlpb3nmoTlnoLnm7TlsYXkuK1cblx0XHRcdFx0XHR0b3A6IHVuaS4kdS5hZGRVbml0KHRoaXMudG9wKVxuXHRcdFx0XHR9XG5cdFx0XHRcdC8vIOmdnuS4u+mimOiJsuWAvOaXtu+8jOaJjeW9k+S9nOminOiJsuWAvFxuXHRcdFx0XHRpZiAodGhpcy5jb2xvciAmJiAhdW5pLiR1LmNvbmZpZy50eXBlLmluY2x1ZGVzKHRoaXMuY29sb3IpKSBzdHlsZS5jb2xvciA9IHRoaXMuY29sb3JcblxuXHRcdFx0XHRyZXR1cm4gc3R5bGVcblx0XHRcdH0sXG5cdFx0XHQvLyDliKTmlq3kvKDlhaXnmoRuYW1l5bGe5oCn77yM5piv5ZCm5Zu+54mH6Lev5b6E77yM5Y+q6KaB5bim5pyJXCIvXCLlnYforqTkuLrmmK/lm77niYflvaLlvI9cblx0XHRcdGlzSW1nKCkge1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5uYW1lLmluZGV4T2YoJy8nKSAhPT0gLTFcblx0XHRcdH0sXG5cdFx0XHRpbWdTdHlsZSgpIHtcblx0XHRcdFx0bGV0IHN0eWxlID0ge31cblx0XHRcdFx0Ly8g5aaC5p6c6K6+572ud2lkdGjlkoxoZWlnaHTlsZ7mgKfvvIzliJnkvJjlhYjkvb/nlKjvvIzlkKbliJnkvb/nlKhzaXpl5bGe5oCnXG5cdFx0XHRcdHN0eWxlLndpZHRoID0gdGhpcy53aWR0aCA/IHVuaS4kdS5hZGRVbml0KHRoaXMud2lkdGgpIDogdW5pLiR1LmFkZFVuaXQodGhpcy5zaXplKVxuXHRcdFx0XHRzdHlsZS5oZWlnaHQgPSB0aGlzLmhlaWdodCA/IHVuaS4kdS5hZGRVbml0KHRoaXMuaGVpZ2h0KSA6IHVuaS4kdS5hZGRVbml0KHRoaXMuc2l6ZSlcblx0XHRcdFx0cmV0dXJuIHN0eWxlXG5cdFx0XHR9LFxuXHRcdFx0Ly8g6YCa6L+H5Zu+5qCH5ZCN77yM5p+l5om+5a+55bqU55qE5Zu+5qCHXG5cdFx0XHRpY29uKCkge1xuXHRcdFx0XHQvLyDlpoLmnpzlhoXnva7nmoTlm77moIfkuK3mib7kuI3liLDlr7nlupTnmoTlm77moIfvvIzlsLHnm7TmjqXov5Tlm55uYW1l5YC877yM5Zug5Li655So5oi35Y+v6IO95Lyg5YWl55qE5pivdW5pY29kZeS7o+eggVxuXHRcdFx0XHRyZXR1cm4gaWNvbnNbJ3VpY29uLScgKyB0aGlzLm5hbWVdIHx8IHRoaXMubmFtZVxuXHRcdFx0fVxuXHRcdH0sXG5cdFx0bWV0aG9kczoge1xuXHRcdFx0Y2xpY2tIYW5kbGVyKGUpIHtcblx0XHRcdFx0dGhpcy4kZW1pdCgnY2xpY2snLCB0aGlzLmluZGV4KVxuXHRcdFx0XHQvLyDmmK/lkKbpmLvmraLkuovku7blhpLms6Fcblx0XHRcdFx0dGhpcy5zdG9wICYmIHRoaXMucHJldmVudEV2ZW50KGUpXG5cdFx0XHR9XG5cdFx0fVxuXHR9XG48L3NjcmlwdD5cblxuPHN0eWxlIGxhbmc9XCJzY3NzXCIgc2NvcGVkPlxuXHRAaW1wb3J0IFwiLi4vLi4vbGlicy9jc3MvY29tcG9uZW50cy5zY3NzXCI7XG5cblx0Ly8g5Y+Y6YeP5a6a5LmJXG5cdCR1LWljb24tcHJpbWFyeTogJHUtcHJpbWFyeSAhZGVmYXVsdDtcblx0JHUtaWNvbi1zdWNjZXNzOiAkdS1zdWNjZXNzICFkZWZhdWx0O1xuXHQkdS1pY29uLWluZm86ICR1LWluZm8gIWRlZmF1bHQ7XG5cdCR1LWljb24td2FybmluZzogJHUtd2FybmluZyAhZGVmYXVsdDtcblx0JHUtaWNvbi1lcnJvcjogJHUtZXJyb3IgIWRlZmF1bHQ7XG5cdCR1LWljb24tbGFiZWwtbGluZS1oZWlnaHQ6MSAhZGVmYXVsdDtcblxuXHQvKiAjaWZuZGVmIEFQUC1OVlVFICovXG5cdC8vIOmdnm52dWXkuIvliqDovb3lrZfkvZNcblx0QGZvbnQtZmFjZSB7XG5cdFx0Zm9udC1mYW1pbHk6ICd1aWNvbi1pY29uZm9udCc7XG5cdFx0c3JjOiB1cmwoJ2h0dHBzOi8vYXQuYWxpY2RuLmNvbS90L2ZvbnRfMjIyNTE3MV84a2Rjd2s0cG8yNC50dGYnKSBmb3JtYXQoJ3RydWV0eXBlJyk7XG5cdH1cblxuXHQvKiAjZW5kaWYgKi9cblxuXHQudS1pY29uIHtcblx0XHQvKiAjaWZuZGVmIEFQUC1OVlVFICovXG5cdFx0ZGlzcGxheTogZmxleDtcblx0XHQvKiAjZW5kaWYgKi9cblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXG5cdFx0Ji0tbGVmdCB7XG5cdFx0XHRmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XG5cdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdH1cblxuXHRcdCYtLXJpZ2h0IHtcblx0XHRcdGZsZXgtZGlyZWN0aW9uOiByb3c7XG5cdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdH1cblxuXHRcdCYtLXRvcCB7XG5cdFx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XG5cdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0XHR9XG5cblx0XHQmLS1ib3R0b20ge1xuXHRcdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0XHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRcdH1cblxuXHRcdCZfX2ljb24ge1xuXHRcdFx0Zm9udC1mYW1pbHk6IHVpY29uLWljb25mb250O1xuXHRcdFx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRcdFx0QGluY2x1ZGUgZmxleDtcblx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cblx0XHRcdCYtLXByaW1hcnkge1xuXHRcdFx0XHRjb2xvcjogJHUtaWNvbi1wcmltYXJ5O1xuXHRcdFx0fVxuXG5cdFx0XHQmLS1zdWNjZXNzIHtcblx0XHRcdFx0Y29sb3I6ICR1LWljb24tc3VjY2Vzcztcblx0XHRcdH1cblxuXHRcdFx0Ji0tZXJyb3Ige1xuXHRcdFx0XHRjb2xvcjogJHUtaWNvbi1lcnJvcjtcblx0XHRcdH1cblxuXHRcdFx0Ji0td2FybmluZyB7XG5cdFx0XHRcdGNvbG9yOiAkdS1pY29uLXdhcm5pbmc7XG5cdFx0XHR9XG5cblx0XHRcdCYtLWluZm8ge1xuXHRcdFx0XHRjb2xvcjogJHUtaWNvbi1pbmZvO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdCZfX2ltZyB7XG5cdFx0XHQvKiAjaWZuZGVmIEFQUC1OVlVFICovXG5cdFx0XHRoZWlnaHQ6IGF1dG87XG5cdFx0XHR3aWxsLWNoYW5nZTogdHJhbnNmb3JtO1xuXHRcdFx0LyogI2VuZGlmICovXG5cdFx0fVxuXG5cdFx0Jl9fbGFiZWwge1xuXHRcdFx0LyogI2lmbmRlZiBBUFAtTlZVRSAqL1xuXHRcdFx0bGluZS1oZWlnaHQ6ICR1LWljb24tbGFiZWwtbGluZS1oZWlnaHQ7XG5cdFx0XHQvKiAjZW5kaWYgKi9cblx0XHR9XG5cdH1cbjwvc3R5bGU+XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///119\n");

/***/ }),

/***/ 120:
/*!************************************************************************************************!*\
  !*** /Users/tongjie/Desktop/QNRTC-Uniapp/demo/uni_modules/uview-ui/components/u-icon/icons.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\nvar _default = {\n  'uicon-level': \"\\uE693\",\n  'uicon-column-line': \"\\uE68E\",\n  'uicon-checkbox-mark': \"\\uE807\",\n  'uicon-folder': \"\\uE7F5\",\n  'uicon-movie': \"\\uE7F6\",\n  'uicon-star-fill': \"\\uE669\",\n  'uicon-star': \"\\uE65F\",\n  'uicon-phone-fill': \"\\uE64F\",\n  'uicon-phone': \"\\uE622\",\n  'uicon-apple-fill': \"\\uE881\",\n  'uicon-chrome-circle-fill': \"\\uE885\",\n  'uicon-backspace': \"\\uE67B\",\n  'uicon-attach': \"\\uE632\",\n  'uicon-cut': \"\\uE948\",\n  'uicon-empty-car': \"\\uE602\",\n  'uicon-empty-coupon': \"\\uE682\",\n  'uicon-empty-address': \"\\uE646\",\n  'uicon-empty-favor': \"\\uE67C\",\n  'uicon-empty-permission': \"\\uE686\",\n  'uicon-empty-news': \"\\uE687\",\n  'uicon-empty-search': \"\\uE664\",\n  'uicon-github-circle-fill': \"\\uE887\",\n  'uicon-rmb': \"\\uE608\",\n  'uicon-person-delete-fill': \"\\uE66A\",\n  'uicon-reload': \"\\uE788\",\n  'uicon-order': \"\\uE68F\",\n  'uicon-server-man': \"\\uE6BC\",\n  'uicon-search': \"\\uE62A\",\n  'uicon-fingerprint': \"\\uE955\",\n  'uicon-more-dot-fill': \"\\uE630\",\n  'uicon-scan': \"\\uE662\",\n  'uicon-share-square': \"\\uE60B\",\n  'uicon-map': \"\\uE61D\",\n  'uicon-map-fill': \"\\uE64E\",\n  'uicon-tags': \"\\uE629\",\n  'uicon-tags-fill': \"\\uE651\",\n  'uicon-bookmark-fill': \"\\uE63B\",\n  'uicon-bookmark': \"\\uE60A\",\n  'uicon-eye': \"\\uE613\",\n  'uicon-eye-fill': \"\\uE641\",\n  'uicon-mic': \"\\uE64A\",\n  'uicon-mic-off': \"\\uE649\",\n  'uicon-calendar': \"\\uE66E\",\n  'uicon-calendar-fill': \"\\uE634\",\n  'uicon-trash': \"\\uE623\",\n  'uicon-trash-fill': \"\\uE658\",\n  'uicon-play-left': \"\\uE66D\",\n  'uicon-play-right': \"\\uE610\",\n  'uicon-minus': \"\\uE618\",\n  'uicon-plus': \"\\uE62D\",\n  'uicon-info': \"\\uE653\",\n  'uicon-info-circle': \"\\uE7D2\",\n  'uicon-info-circle-fill': \"\\uE64B\",\n  'uicon-question': \"\\uE715\",\n  'uicon-error': \"\\uE6D3\",\n  'uicon-close': \"\\uE685\",\n  'uicon-checkmark': \"\\uE6A8\",\n  'uicon-android-circle-fill': \"\\uE67E\",\n  'uicon-android-fill': \"\\uE67D\",\n  'uicon-ie': \"\\uE87B\",\n  'uicon-IE-circle-fill': \"\\uE889\",\n  'uicon-google': \"\\uE87A\",\n  'uicon-google-circle-fill': \"\\uE88A\",\n  'uicon-setting-fill': \"\\uE872\",\n  'uicon-setting': \"\\uE61F\",\n  'uicon-minus-square-fill': \"\\uE855\",\n  'uicon-plus-square-fill': \"\\uE856\",\n  'uicon-heart': \"\\uE7DF\",\n  'uicon-heart-fill': \"\\uE851\",\n  'uicon-camera': \"\\uE7D7\",\n  'uicon-camera-fill': \"\\uE870\",\n  'uicon-more-circle': \"\\uE63E\",\n  'uicon-more-circle-fill': \"\\uE645\",\n  'uicon-chat': \"\\uE620\",\n  'uicon-chat-fill': \"\\uE61E\",\n  'uicon-bag-fill': \"\\uE617\",\n  'uicon-bag': \"\\uE619\",\n  'uicon-error-circle-fill': \"\\uE62C\",\n  'uicon-error-circle': \"\\uE624\",\n  'uicon-close-circle': \"\\uE63F\",\n  'uicon-close-circle-fill': \"\\uE637\",\n  'uicon-checkmark-circle': \"\\uE63D\",\n  'uicon-checkmark-circle-fill': \"\\uE635\",\n  'uicon-question-circle-fill': \"\\uE666\",\n  'uicon-question-circle': \"\\uE625\",\n  'uicon-share': \"\\uE631\",\n  'uicon-share-fill': \"\\uE65E\",\n  'uicon-shopping-cart': \"\\uE621\",\n  'uicon-shopping-cart-fill': \"\\uE65D\",\n  'uicon-bell': \"\\uE609\",\n  'uicon-bell-fill': \"\\uE640\",\n  'uicon-list': \"\\uE650\",\n  'uicon-list-dot': \"\\uE616\",\n  'uicon-zhihu': \"\\uE6BA\",\n  'uicon-zhihu-circle-fill': \"\\uE709\",\n  'uicon-zhifubao': \"\\uE6B9\",\n  'uicon-zhifubao-circle-fill': \"\\uE6B8\",\n  'uicon-weixin-circle-fill': \"\\uE6B1\",\n  'uicon-weixin-fill': \"\\uE6B2\",\n  'uicon-twitter-circle-fill': \"\\uE6AB\",\n  'uicon-twitter': \"\\uE6AA\",\n  'uicon-taobao-circle-fill': \"\\uE6A7\",\n  'uicon-taobao': \"\\uE6A6\",\n  'uicon-weibo-circle-fill': \"\\uE6A5\",\n  'uicon-weibo': \"\\uE6A4\",\n  'uicon-qq-fill': \"\\uE6A1\",\n  'uicon-qq-circle-fill': \"\\uE6A0\",\n  'uicon-moments-circel-fill': \"\\uE69A\",\n  'uicon-moments': \"\\uE69B\",\n  'uicon-qzone': \"\\uE695\",\n  'uicon-qzone-circle-fill': \"\\uE696\",\n  'uicon-baidu-circle-fill': \"\\uE680\",\n  'uicon-baidu': \"\\uE681\",\n  'uicon-facebook-circle-fill': \"\\uE68A\",\n  'uicon-facebook': \"\\uE689\",\n  'uicon-car': \"\\uE60C\",\n  'uicon-car-fill': \"\\uE636\",\n  'uicon-warning-fill': \"\\uE64D\",\n  'uicon-warning': \"\\uE694\",\n  'uicon-clock-fill': \"\\uE638\",\n  'uicon-clock': \"\\uE60F\",\n  'uicon-edit-pen': \"\\uE612\",\n  'uicon-edit-pen-fill': \"\\uE66B\",\n  'uicon-email': \"\\uE611\",\n  'uicon-email-fill': \"\\uE642\",\n  'uicon-minus-circle': \"\\uE61B\",\n  'uicon-minus-circle-fill': \"\\uE652\",\n  'uicon-plus-circle': \"\\uE62E\",\n  'uicon-plus-circle-fill': \"\\uE661\",\n  'uicon-file-text': \"\\uE663\",\n  'uicon-file-text-fill': \"\\uE665\",\n  'uicon-pushpin': \"\\uE7E3\",\n  'uicon-pushpin-fill': \"\\uE86E\",\n  'uicon-grid': \"\\uE673\",\n  'uicon-grid-fill': \"\\uE678\",\n  'uicon-play-circle': \"\\uE647\",\n  'uicon-play-circle-fill': \"\\uE655\",\n  'uicon-pause-circle-fill': \"\\uE654\",\n  'uicon-pause': \"\\uE8FA\",\n  'uicon-pause-circle': \"\\uE643\",\n  'uicon-eye-off': \"\\uE648\",\n  'uicon-eye-off-outline': \"\\uE62B\",\n  'uicon-gift-fill': \"\\uE65C\",\n  'uicon-gift': \"\\uE65B\",\n  'uicon-rmb-circle-fill': \"\\uE657\",\n  'uicon-rmb-circle': \"\\uE677\",\n  'uicon-kefu-ermai': \"\\uE656\",\n  'uicon-server-fill': \"\\uE751\",\n  'uicon-coupon-fill': \"\\uE8C4\",\n  'uicon-coupon': \"\\uE8AE\",\n  'uicon-integral': \"\\uE704\",\n  'uicon-integral-fill': \"\\uE703\",\n  'uicon-home-fill': \"\\uE964\",\n  'uicon-home': \"\\uE965\",\n  'uicon-hourglass-half-fill': \"\\uE966\",\n  'uicon-hourglass': \"\\uE967\",\n  'uicon-account': \"\\uE628\",\n  'uicon-plus-people-fill': \"\\uE626\",\n  'uicon-minus-people-fill': \"\\uE615\",\n  'uicon-account-fill': \"\\uE614\",\n  'uicon-thumb-down-fill': \"\\uE726\",\n  'uicon-thumb-down': \"\\uE727\",\n  'uicon-thumb-up': \"\\uE733\",\n  'uicon-thumb-up-fill': \"\\uE72F\",\n  'uicon-lock-fill': \"\\uE979\",\n  'uicon-lock-open': \"\\uE973\",\n  'uicon-lock-opened-fill': \"\\uE974\",\n  'uicon-lock': \"\\uE97A\",\n  'uicon-red-packet-fill': \"\\uE690\",\n  'uicon-photo-fill': \"\\uE98B\",\n  'uicon-photo': \"\\uE98D\",\n  'uicon-volume-off-fill': \"\\uE659\",\n  'uicon-volume-off': \"\\uE644\",\n  'uicon-volume-fill': \"\\uE670\",\n  'uicon-volume': \"\\uE633\",\n  'uicon-red-packet': \"\\uE691\",\n  'uicon-download': \"\\uE63C\",\n  'uicon-arrow-up-fill': \"\\uE6B0\",\n  'uicon-arrow-down-fill': \"\\uE600\",\n  'uicon-play-left-fill': \"\\uE675\",\n  'uicon-play-right-fill': \"\\uE676\",\n  'uicon-rewind-left-fill': \"\\uE679\",\n  'uicon-rewind-right-fill': \"\\uE67A\",\n  'uicon-arrow-downward': \"\\uE604\",\n  'uicon-arrow-leftward': \"\\uE601\",\n  'uicon-arrow-rightward': \"\\uE603\",\n  'uicon-arrow-upward': \"\\uE607\",\n  'uicon-arrow-down': \"\\uE60D\",\n  'uicon-arrow-right': \"\\uE605\",\n  'uicon-arrow-left': \"\\uE60E\",\n  'uicon-arrow-up': \"\\uE606\",\n  'uicon-skip-back-left': \"\\uE674\",\n  'uicon-skip-forward-right': \"\\uE672\",\n  'uicon-rewind-right': \"\\uE66F\",\n  'uicon-rewind-left': \"\\uE671\",\n  'uicon-arrow-right-double': \"\\uE68D\",\n  'uicon-arrow-left-double': \"\\uE68C\",\n  'uicon-wifi-off': \"\\uE668\",\n  'uicon-wifi': \"\\uE667\",\n  'uicon-empty-data': \"\\uE62F\",\n  'uicon-empty-history': \"\\uE684\",\n  'uicon-empty-list': \"\\uE68B\",\n  'uicon-empty-page': \"\\uE627\",\n  'uicon-empty-order': \"\\uE639\",\n  'uicon-man': \"\\uE697\",\n  'uicon-woman': \"\\uE69C\",\n  'uicon-man-add': \"\\uE61C\",\n  'uicon-man-add-fill': \"\\uE64C\",\n  'uicon-man-delete': \"\\uE61A\",\n  'uicon-man-delete-fill': \"\\uE66A\",\n  'uicon-zh': \"\\uE70A\",\n  'uicon-en': \"\\uE692\"\n};\nexports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vdW5pX21vZHVsZXMvdXZpZXctdWkvY29tcG9uZW50cy91LWljb24vaWNvbnMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O2VBQWU7RUFDWCxhQUFhLEVBQUUsUUFBUTtFQUN2QixtQkFBbUIsRUFBRSxRQUFRO0VBQzdCLHFCQUFxQixFQUFFLFFBQVE7RUFDL0IsY0FBYyxFQUFFLFFBQVE7RUFDeEIsYUFBYSxFQUFFLFFBQVE7RUFDdkIsaUJBQWlCLEVBQUUsUUFBUTtFQUMzQixZQUFZLEVBQUUsUUFBUTtFQUN0QixrQkFBa0IsRUFBRSxRQUFRO0VBQzVCLGFBQWEsRUFBRSxRQUFRO0VBQ3ZCLGtCQUFrQixFQUFFLFFBQVE7RUFDNUIsMEJBQTBCLEVBQUUsUUFBUTtFQUNwQyxpQkFBaUIsRUFBRSxRQUFRO0VBQzNCLGNBQWMsRUFBRSxRQUFRO0VBQ3hCLFdBQVcsRUFBRSxRQUFRO0VBQ3JCLGlCQUFpQixFQUFFLFFBQVE7RUFDM0Isb0JBQW9CLEVBQUUsUUFBUTtFQUM5QixxQkFBcUIsRUFBRSxRQUFRO0VBQy9CLG1CQUFtQixFQUFFLFFBQVE7RUFDN0Isd0JBQXdCLEVBQUUsUUFBUTtFQUNsQyxrQkFBa0IsRUFBRSxRQUFRO0VBQzVCLG9CQUFvQixFQUFFLFFBQVE7RUFDOUIsMEJBQTBCLEVBQUUsUUFBUTtFQUNwQyxXQUFXLEVBQUUsUUFBUTtFQUNyQiwwQkFBMEIsRUFBRSxRQUFRO0VBQ3BDLGNBQWMsRUFBRSxRQUFRO0VBQ3hCLGFBQWEsRUFBRSxRQUFRO0VBQ3ZCLGtCQUFrQixFQUFFLFFBQVE7RUFDNUIsY0FBYyxFQUFFLFFBQVE7RUFDeEIsbUJBQW1CLEVBQUUsUUFBUTtFQUM3QixxQkFBcUIsRUFBRSxRQUFRO0VBQy9CLFlBQVksRUFBRSxRQUFRO0VBQ3RCLG9CQUFvQixFQUFFLFFBQVE7RUFDOUIsV0FBVyxFQUFFLFFBQVE7RUFDckIsZ0JBQWdCLEVBQUUsUUFBUTtFQUMxQixZQUFZLEVBQUUsUUFBUTtFQUN0QixpQkFBaUIsRUFBRSxRQUFRO0VBQzNCLHFCQUFxQixFQUFFLFFBQVE7RUFDL0IsZ0JBQWdCLEVBQUUsUUFBUTtFQUMxQixXQUFXLEVBQUUsUUFBUTtFQUNyQixnQkFBZ0IsRUFBRSxRQUFRO0VBQzFCLFdBQVcsRUFBRSxRQUFRO0VBQ3JCLGVBQWUsRUFBRSxRQUFRO0VBQ3pCLGdCQUFnQixFQUFFLFFBQVE7RUFDMUIscUJBQXFCLEVBQUUsUUFBUTtFQUMvQixhQUFhLEVBQUUsUUFBUTtFQUN2QixrQkFBa0IsRUFBRSxRQUFRO0VBQzVCLGlCQUFpQixFQUFFLFFBQVE7RUFDM0Isa0JBQWtCLEVBQUUsUUFBUTtFQUM1QixhQUFhLEVBQUUsUUFBUTtFQUN2QixZQUFZLEVBQUUsUUFBUTtFQUN0QixZQUFZLEVBQUUsUUFBUTtFQUN0QixtQkFBbUIsRUFBRSxRQUFRO0VBQzdCLHdCQUF3QixFQUFFLFFBQVE7RUFDbEMsZ0JBQWdCLEVBQUUsUUFBUTtFQUMxQixhQUFhLEVBQUUsUUFBUTtFQUN2QixhQUFhLEVBQUUsUUFBUTtFQUN2QixpQkFBaUIsRUFBRSxRQUFRO0VBQzNCLDJCQUEyQixFQUFFLFFBQVE7RUFDckMsb0JBQW9CLEVBQUUsUUFBUTtFQUM5QixVQUFVLEVBQUUsUUFBUTtFQUNwQixzQkFBc0IsRUFBRSxRQUFRO0VBQ2hDLGNBQWMsRUFBRSxRQUFRO0VBQ3hCLDBCQUEwQixFQUFFLFFBQVE7RUFDcEMsb0JBQW9CLEVBQUUsUUFBUTtFQUM5QixlQUFlLEVBQUUsUUFBUTtFQUN6Qix5QkFBeUIsRUFBRSxRQUFRO0VBQ25DLHdCQUF3QixFQUFFLFFBQVE7RUFDbEMsYUFBYSxFQUFFLFFBQVE7RUFDdkIsa0JBQWtCLEVBQUUsUUFBUTtFQUM1QixjQUFjLEVBQUUsUUFBUTtFQUN4QixtQkFBbUIsRUFBRSxRQUFRO0VBQzdCLG1CQUFtQixFQUFFLFFBQVE7RUFDN0Isd0JBQXdCLEVBQUUsUUFBUTtFQUNsQyxZQUFZLEVBQUUsUUFBUTtFQUN0QixpQkFBaUIsRUFBRSxRQUFRO0VBQzNCLGdCQUFnQixFQUFFLFFBQVE7RUFDMUIsV0FBVyxFQUFFLFFBQVE7RUFDckIseUJBQXlCLEVBQUUsUUFBUTtFQUNuQyxvQkFBb0IsRUFBRSxRQUFRO0VBQzlCLG9CQUFvQixFQUFFLFFBQVE7RUFDOUIseUJBQXlCLEVBQUUsUUFBUTtFQUNuQyx3QkFBd0IsRUFBRSxRQUFRO0VBQ2xDLDZCQUE2QixFQUFFLFFBQVE7RUFDdkMsNEJBQTRCLEVBQUUsUUFBUTtFQUN0Qyx1QkFBdUIsRUFBRSxRQUFRO0VBQ2pDLGFBQWEsRUFBRSxRQUFRO0VBQ3ZCLGtCQUFrQixFQUFFLFFBQVE7RUFDNUIscUJBQXFCLEVBQUUsUUFBUTtFQUMvQiwwQkFBMEIsRUFBRSxRQUFRO0VBQ3BDLFlBQVksRUFBRSxRQUFRO0VBQ3RCLGlCQUFpQixFQUFFLFFBQVE7RUFDM0IsWUFBWSxFQUFFLFFBQVE7RUFDdEIsZ0JBQWdCLEVBQUUsUUFBUTtFQUMxQixhQUFhLEVBQUUsUUFBUTtFQUN2Qix5QkFBeUIsRUFBRSxRQUFRO0VBQ25DLGdCQUFnQixFQUFFLFFBQVE7RUFDMUIsNEJBQTRCLEVBQUUsUUFBUTtFQUN0QywwQkFBMEIsRUFBRSxRQUFRO0VBQ3BDLG1CQUFtQixFQUFFLFFBQVE7RUFDN0IsMkJBQTJCLEVBQUUsUUFBUTtFQUNyQyxlQUFlLEVBQUUsUUFBUTtFQUN6QiwwQkFBMEIsRUFBRSxRQUFRO0VBQ3BDLGNBQWMsRUFBRSxRQUFRO0VBQ3hCLHlCQUF5QixFQUFFLFFBQVE7RUFDbkMsYUFBYSxFQUFFLFFBQVE7RUFDdkIsZUFBZSxFQUFFLFFBQVE7RUFDekIsc0JBQXNCLEVBQUUsUUFBUTtFQUNoQywyQkFBMkIsRUFBRSxRQUFRO0VBQ3JDLGVBQWUsRUFBRSxRQUFRO0VBQ3pCLGFBQWEsRUFBRSxRQUFRO0VBQ3ZCLHlCQUF5QixFQUFFLFFBQVE7RUFDbkMseUJBQXlCLEVBQUUsUUFBUTtFQUNuQyxhQUFhLEVBQUUsUUFBUTtFQUN2Qiw0QkFBNEIsRUFBRSxRQUFRO0VBQ3RDLGdCQUFnQixFQUFFLFFBQVE7RUFDMUIsV0FBVyxFQUFFLFFBQVE7RUFDckIsZ0JBQWdCLEVBQUUsUUFBUTtFQUMxQixvQkFBb0IsRUFBRSxRQUFRO0VBQzlCLGVBQWUsRUFBRSxRQUFRO0VBQ3pCLGtCQUFrQixFQUFFLFFBQVE7RUFDNUIsYUFBYSxFQUFFLFFBQVE7RUFDdkIsZ0JBQWdCLEVBQUUsUUFBUTtFQUMxQixxQkFBcUIsRUFBRSxRQUFRO0VBQy9CLGFBQWEsRUFBRSxRQUFRO0VBQ3ZCLGtCQUFrQixFQUFFLFFBQVE7RUFDNUIsb0JBQW9CLEVBQUUsUUFBUTtFQUM5Qix5QkFBeUIsRUFBRSxRQUFRO0VBQ25DLG1CQUFtQixFQUFFLFFBQVE7RUFDN0Isd0JBQXdCLEVBQUUsUUFBUTtFQUNsQyxpQkFBaUIsRUFBRSxRQUFRO0VBQzNCLHNCQUFzQixFQUFFLFFBQVE7RUFDaEMsZUFBZSxFQUFFLFFBQVE7RUFDekIsb0JBQW9CLEVBQUUsUUFBUTtFQUM5QixZQUFZLEVBQUUsUUFBUTtFQUN0QixpQkFBaUIsRUFBRSxRQUFRO0VBQzNCLG1CQUFtQixFQUFFLFFBQVE7RUFDN0Isd0JBQXdCLEVBQUUsUUFBUTtFQUNsQyx5QkFBeUIsRUFBRSxRQUFRO0VBQ25DLGFBQWEsRUFBRSxRQUFRO0VBQ3ZCLG9CQUFvQixFQUFFLFFBQVE7RUFDOUIsZUFBZSxFQUFFLFFBQVE7RUFDekIsdUJBQXVCLEVBQUUsUUFBUTtFQUNqQyxpQkFBaUIsRUFBRSxRQUFRO0VBQzNCLFlBQVksRUFBRSxRQUFRO0VBQ3RCLHVCQUF1QixFQUFFLFFBQVE7RUFDakMsa0JBQWtCLEVBQUUsUUFBUTtFQUM1QixrQkFBa0IsRUFBRSxRQUFRO0VBQzVCLG1CQUFtQixFQUFFLFFBQVE7RUFDN0IsbUJBQW1CLEVBQUUsUUFBUTtFQUM3QixjQUFjLEVBQUUsUUFBUTtFQUN4QixnQkFBZ0IsRUFBRSxRQUFRO0VBQzFCLHFCQUFxQixFQUFFLFFBQVE7RUFDL0IsaUJBQWlCLEVBQUUsUUFBUTtFQUMzQixZQUFZLEVBQUUsUUFBUTtFQUN0QiwyQkFBMkIsRUFBRSxRQUFRO0VBQ3JDLGlCQUFpQixFQUFFLFFBQVE7RUFDM0IsZUFBZSxFQUFFLFFBQVE7RUFDekIsd0JBQXdCLEVBQUUsUUFBUTtFQUNsQyx5QkFBeUIsRUFBRSxRQUFRO0VBQ25DLG9CQUFvQixFQUFFLFFBQVE7RUFDOUIsdUJBQXVCLEVBQUUsUUFBUTtFQUNqQyxrQkFBa0IsRUFBRSxRQUFRO0VBQzVCLGdCQUFnQixFQUFFLFFBQVE7RUFDMUIscUJBQXFCLEVBQUUsUUFBUTtFQUMvQixpQkFBaUIsRUFBRSxRQUFRO0VBQzNCLGlCQUFpQixFQUFFLFFBQVE7RUFDM0Isd0JBQXdCLEVBQUUsUUFBUTtFQUNsQyxZQUFZLEVBQUUsUUFBUTtFQUN0Qix1QkFBdUIsRUFBRSxRQUFRO0VBQ2pDLGtCQUFrQixFQUFFLFFBQVE7RUFDNUIsYUFBYSxFQUFFLFFBQVE7RUFDdkIsdUJBQXVCLEVBQUUsUUFBUTtFQUNqQyxrQkFBa0IsRUFBRSxRQUFRO0VBQzVCLG1CQUFtQixFQUFFLFFBQVE7RUFDN0IsY0FBYyxFQUFFLFFBQVE7RUFDeEIsa0JBQWtCLEVBQUUsUUFBUTtFQUM1QixnQkFBZ0IsRUFBRSxRQUFRO0VBQzFCLHFCQUFxQixFQUFFLFFBQVE7RUFDL0IsdUJBQXVCLEVBQUUsUUFBUTtFQUNqQyxzQkFBc0IsRUFBRSxRQUFRO0VBQ2hDLHVCQUF1QixFQUFFLFFBQVE7RUFDakMsd0JBQXdCLEVBQUUsUUFBUTtFQUNsQyx5QkFBeUIsRUFBRSxRQUFRO0VBQ25DLHNCQUFzQixFQUFFLFFBQVE7RUFDaEMsc0JBQXNCLEVBQUUsUUFBUTtFQUNoQyx1QkFBdUIsRUFBRSxRQUFRO0VBQ2pDLG9CQUFvQixFQUFFLFFBQVE7RUFDOUIsa0JBQWtCLEVBQUUsUUFBUTtFQUM1QixtQkFBbUIsRUFBRSxRQUFRO0VBQzdCLGtCQUFrQixFQUFFLFFBQVE7RUFDNUIsZ0JBQWdCLEVBQUUsUUFBUTtFQUMxQixzQkFBc0IsRUFBRSxRQUFRO0VBQ2hDLDBCQUEwQixFQUFFLFFBQVE7RUFDcEMsb0JBQW9CLEVBQUUsUUFBUTtFQUM5QixtQkFBbUIsRUFBRSxRQUFRO0VBQzdCLDBCQUEwQixFQUFFLFFBQVE7RUFDcEMseUJBQXlCLEVBQUUsUUFBUTtFQUNuQyxnQkFBZ0IsRUFBRSxRQUFRO0VBQzFCLFlBQVksRUFBRSxRQUFRO0VBQ3RCLGtCQUFrQixFQUFFLFFBQVE7RUFDNUIscUJBQXFCLEVBQUUsUUFBUTtFQUMvQixrQkFBa0IsRUFBRSxRQUFRO0VBQzVCLGtCQUFrQixFQUFFLFFBQVE7RUFDNUIsbUJBQW1CLEVBQUUsUUFBUTtFQUM3QixXQUFXLEVBQUUsUUFBUTtFQUNyQixhQUFhLEVBQUUsUUFBUTtFQUN2QixlQUFlLEVBQUUsUUFBUTtFQUN6QixvQkFBb0IsRUFBRSxRQUFRO0VBQzlCLGtCQUFrQixFQUFFLFFBQVE7RUFDNUIsdUJBQXVCLEVBQUUsUUFBUTtFQUNqQyxVQUFVLEVBQUUsUUFBUTtFQUNwQixVQUFVLEVBQUU7QUFDaEIsQ0FBQztBQUFBIiwiZmlsZSI6IjEyMC5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IHtcbiAgICAndWljb24tbGV2ZWwnOiAnXFx1ZTY5MycsXG4gICAgJ3VpY29uLWNvbHVtbi1saW5lJzogJ1xcdWU2OGUnLFxuICAgICd1aWNvbi1jaGVja2JveC1tYXJrJzogJ1xcdWU4MDcnLFxuICAgICd1aWNvbi1mb2xkZXInOiAnXFx1ZTdmNScsXG4gICAgJ3VpY29uLW1vdmllJzogJ1xcdWU3ZjYnLFxuICAgICd1aWNvbi1zdGFyLWZpbGwnOiAnXFx1ZTY2OScsXG4gICAgJ3VpY29uLXN0YXInOiAnXFx1ZTY1ZicsXG4gICAgJ3VpY29uLXBob25lLWZpbGwnOiAnXFx1ZTY0ZicsXG4gICAgJ3VpY29uLXBob25lJzogJ1xcdWU2MjInLFxuICAgICd1aWNvbi1hcHBsZS1maWxsJzogJ1xcdWU4ODEnLFxuICAgICd1aWNvbi1jaHJvbWUtY2lyY2xlLWZpbGwnOiAnXFx1ZTg4NScsXG4gICAgJ3VpY29uLWJhY2tzcGFjZSc6ICdcXHVlNjdiJyxcbiAgICAndWljb24tYXR0YWNoJzogJ1xcdWU2MzInLFxuICAgICd1aWNvbi1jdXQnOiAnXFx1ZTk0OCcsXG4gICAgJ3VpY29uLWVtcHR5LWNhcic6ICdcXHVlNjAyJyxcbiAgICAndWljb24tZW1wdHktY291cG9uJzogJ1xcdWU2ODInLFxuICAgICd1aWNvbi1lbXB0eS1hZGRyZXNzJzogJ1xcdWU2NDYnLFxuICAgICd1aWNvbi1lbXB0eS1mYXZvcic6ICdcXHVlNjdjJyxcbiAgICAndWljb24tZW1wdHktcGVybWlzc2lvbic6ICdcXHVlNjg2JyxcbiAgICAndWljb24tZW1wdHktbmV3cyc6ICdcXHVlNjg3JyxcbiAgICAndWljb24tZW1wdHktc2VhcmNoJzogJ1xcdWU2NjQnLFxuICAgICd1aWNvbi1naXRodWItY2lyY2xlLWZpbGwnOiAnXFx1ZTg4NycsXG4gICAgJ3VpY29uLXJtYic6ICdcXHVlNjA4JyxcbiAgICAndWljb24tcGVyc29uLWRlbGV0ZS1maWxsJzogJ1xcdWU2NmEnLFxuICAgICd1aWNvbi1yZWxvYWQnOiAnXFx1ZTc4OCcsXG4gICAgJ3VpY29uLW9yZGVyJzogJ1xcdWU2OGYnLFxuICAgICd1aWNvbi1zZXJ2ZXItbWFuJzogJ1xcdWU2YmMnLFxuICAgICd1aWNvbi1zZWFyY2gnOiAnXFx1ZTYyYScsXG4gICAgJ3VpY29uLWZpbmdlcnByaW50JzogJ1xcdWU5NTUnLFxuICAgICd1aWNvbi1tb3JlLWRvdC1maWxsJzogJ1xcdWU2MzAnLFxuICAgICd1aWNvbi1zY2FuJzogJ1xcdWU2NjInLFxuICAgICd1aWNvbi1zaGFyZS1zcXVhcmUnOiAnXFx1ZTYwYicsXG4gICAgJ3VpY29uLW1hcCc6ICdcXHVlNjFkJyxcbiAgICAndWljb24tbWFwLWZpbGwnOiAnXFx1ZTY0ZScsXG4gICAgJ3VpY29uLXRhZ3MnOiAnXFx1ZTYyOScsXG4gICAgJ3VpY29uLXRhZ3MtZmlsbCc6ICdcXHVlNjUxJyxcbiAgICAndWljb24tYm9va21hcmstZmlsbCc6ICdcXHVlNjNiJyxcbiAgICAndWljb24tYm9va21hcmsnOiAnXFx1ZTYwYScsXG4gICAgJ3VpY29uLWV5ZSc6ICdcXHVlNjEzJyxcbiAgICAndWljb24tZXllLWZpbGwnOiAnXFx1ZTY0MScsXG4gICAgJ3VpY29uLW1pYyc6ICdcXHVlNjRhJyxcbiAgICAndWljb24tbWljLW9mZic6ICdcXHVlNjQ5JyxcbiAgICAndWljb24tY2FsZW5kYXInOiAnXFx1ZTY2ZScsXG4gICAgJ3VpY29uLWNhbGVuZGFyLWZpbGwnOiAnXFx1ZTYzNCcsXG4gICAgJ3VpY29uLXRyYXNoJzogJ1xcdWU2MjMnLFxuICAgICd1aWNvbi10cmFzaC1maWxsJzogJ1xcdWU2NTgnLFxuICAgICd1aWNvbi1wbGF5LWxlZnQnOiAnXFx1ZTY2ZCcsXG4gICAgJ3VpY29uLXBsYXktcmlnaHQnOiAnXFx1ZTYxMCcsXG4gICAgJ3VpY29uLW1pbnVzJzogJ1xcdWU2MTgnLFxuICAgICd1aWNvbi1wbHVzJzogJ1xcdWU2MmQnLFxuICAgICd1aWNvbi1pbmZvJzogJ1xcdWU2NTMnLFxuICAgICd1aWNvbi1pbmZvLWNpcmNsZSc6ICdcXHVlN2QyJyxcbiAgICAndWljb24taW5mby1jaXJjbGUtZmlsbCc6ICdcXHVlNjRiJyxcbiAgICAndWljb24tcXVlc3Rpb24nOiAnXFx1ZTcxNScsXG4gICAgJ3VpY29uLWVycm9yJzogJ1xcdWU2ZDMnLFxuICAgICd1aWNvbi1jbG9zZSc6ICdcXHVlNjg1JyxcbiAgICAndWljb24tY2hlY2ttYXJrJzogJ1xcdWU2YTgnLFxuICAgICd1aWNvbi1hbmRyb2lkLWNpcmNsZS1maWxsJzogJ1xcdWU2N2UnLFxuICAgICd1aWNvbi1hbmRyb2lkLWZpbGwnOiAnXFx1ZTY3ZCcsXG4gICAgJ3VpY29uLWllJzogJ1xcdWU4N2InLFxuICAgICd1aWNvbi1JRS1jaXJjbGUtZmlsbCc6ICdcXHVlODg5JyxcbiAgICAndWljb24tZ29vZ2xlJzogJ1xcdWU4N2EnLFxuICAgICd1aWNvbi1nb29nbGUtY2lyY2xlLWZpbGwnOiAnXFx1ZTg4YScsXG4gICAgJ3VpY29uLXNldHRpbmctZmlsbCc6ICdcXHVlODcyJyxcbiAgICAndWljb24tc2V0dGluZyc6ICdcXHVlNjFmJyxcbiAgICAndWljb24tbWludXMtc3F1YXJlLWZpbGwnOiAnXFx1ZTg1NScsXG4gICAgJ3VpY29uLXBsdXMtc3F1YXJlLWZpbGwnOiAnXFx1ZTg1NicsXG4gICAgJ3VpY29uLWhlYXJ0JzogJ1xcdWU3ZGYnLFxuICAgICd1aWNvbi1oZWFydC1maWxsJzogJ1xcdWU4NTEnLFxuICAgICd1aWNvbi1jYW1lcmEnOiAnXFx1ZTdkNycsXG4gICAgJ3VpY29uLWNhbWVyYS1maWxsJzogJ1xcdWU4NzAnLFxuICAgICd1aWNvbi1tb3JlLWNpcmNsZSc6ICdcXHVlNjNlJyxcbiAgICAndWljb24tbW9yZS1jaXJjbGUtZmlsbCc6ICdcXHVlNjQ1JyxcbiAgICAndWljb24tY2hhdCc6ICdcXHVlNjIwJyxcbiAgICAndWljb24tY2hhdC1maWxsJzogJ1xcdWU2MWUnLFxuICAgICd1aWNvbi1iYWctZmlsbCc6ICdcXHVlNjE3JyxcbiAgICAndWljb24tYmFnJzogJ1xcdWU2MTknLFxuICAgICd1aWNvbi1lcnJvci1jaXJjbGUtZmlsbCc6ICdcXHVlNjJjJyxcbiAgICAndWljb24tZXJyb3ItY2lyY2xlJzogJ1xcdWU2MjQnLFxuICAgICd1aWNvbi1jbG9zZS1jaXJjbGUnOiAnXFx1ZTYzZicsXG4gICAgJ3VpY29uLWNsb3NlLWNpcmNsZS1maWxsJzogJ1xcdWU2MzcnLFxuICAgICd1aWNvbi1jaGVja21hcmstY2lyY2xlJzogJ1xcdWU2M2QnLFxuICAgICd1aWNvbi1jaGVja21hcmstY2lyY2xlLWZpbGwnOiAnXFx1ZTYzNScsXG4gICAgJ3VpY29uLXF1ZXN0aW9uLWNpcmNsZS1maWxsJzogJ1xcdWU2NjYnLFxuICAgICd1aWNvbi1xdWVzdGlvbi1jaXJjbGUnOiAnXFx1ZTYyNScsXG4gICAgJ3VpY29uLXNoYXJlJzogJ1xcdWU2MzEnLFxuICAgICd1aWNvbi1zaGFyZS1maWxsJzogJ1xcdWU2NWUnLFxuICAgICd1aWNvbi1zaG9wcGluZy1jYXJ0JzogJ1xcdWU2MjEnLFxuICAgICd1aWNvbi1zaG9wcGluZy1jYXJ0LWZpbGwnOiAnXFx1ZTY1ZCcsXG4gICAgJ3VpY29uLWJlbGwnOiAnXFx1ZTYwOScsXG4gICAgJ3VpY29uLWJlbGwtZmlsbCc6ICdcXHVlNjQwJyxcbiAgICAndWljb24tbGlzdCc6ICdcXHVlNjUwJyxcbiAgICAndWljb24tbGlzdC1kb3QnOiAnXFx1ZTYxNicsXG4gICAgJ3VpY29uLXpoaWh1JzogJ1xcdWU2YmEnLFxuICAgICd1aWNvbi16aGlodS1jaXJjbGUtZmlsbCc6ICdcXHVlNzA5JyxcbiAgICAndWljb24temhpZnViYW8nOiAnXFx1ZTZiOScsXG4gICAgJ3VpY29uLXpoaWZ1YmFvLWNpcmNsZS1maWxsJzogJ1xcdWU2YjgnLFxuICAgICd1aWNvbi13ZWl4aW4tY2lyY2xlLWZpbGwnOiAnXFx1ZTZiMScsXG4gICAgJ3VpY29uLXdlaXhpbi1maWxsJzogJ1xcdWU2YjInLFxuICAgICd1aWNvbi10d2l0dGVyLWNpcmNsZS1maWxsJzogJ1xcdWU2YWInLFxuICAgICd1aWNvbi10d2l0dGVyJzogJ1xcdWU2YWEnLFxuICAgICd1aWNvbi10YW9iYW8tY2lyY2xlLWZpbGwnOiAnXFx1ZTZhNycsXG4gICAgJ3VpY29uLXRhb2Jhbyc6ICdcXHVlNmE2JyxcbiAgICAndWljb24td2VpYm8tY2lyY2xlLWZpbGwnOiAnXFx1ZTZhNScsXG4gICAgJ3VpY29uLXdlaWJvJzogJ1xcdWU2YTQnLFxuICAgICd1aWNvbi1xcS1maWxsJzogJ1xcdWU2YTEnLFxuICAgICd1aWNvbi1xcS1jaXJjbGUtZmlsbCc6ICdcXHVlNmEwJyxcbiAgICAndWljb24tbW9tZW50cy1jaXJjZWwtZmlsbCc6ICdcXHVlNjlhJyxcbiAgICAndWljb24tbW9tZW50cyc6ICdcXHVlNjliJyxcbiAgICAndWljb24tcXpvbmUnOiAnXFx1ZTY5NScsXG4gICAgJ3VpY29uLXF6b25lLWNpcmNsZS1maWxsJzogJ1xcdWU2OTYnLFxuICAgICd1aWNvbi1iYWlkdS1jaXJjbGUtZmlsbCc6ICdcXHVlNjgwJyxcbiAgICAndWljb24tYmFpZHUnOiAnXFx1ZTY4MScsXG4gICAgJ3VpY29uLWZhY2Vib29rLWNpcmNsZS1maWxsJzogJ1xcdWU2OGEnLFxuICAgICd1aWNvbi1mYWNlYm9vayc6ICdcXHVlNjg5JyxcbiAgICAndWljb24tY2FyJzogJ1xcdWU2MGMnLFxuICAgICd1aWNvbi1jYXItZmlsbCc6ICdcXHVlNjM2JyxcbiAgICAndWljb24td2FybmluZy1maWxsJzogJ1xcdWU2NGQnLFxuICAgICd1aWNvbi13YXJuaW5nJzogJ1xcdWU2OTQnLFxuICAgICd1aWNvbi1jbG9jay1maWxsJzogJ1xcdWU2MzgnLFxuICAgICd1aWNvbi1jbG9jayc6ICdcXHVlNjBmJyxcbiAgICAndWljb24tZWRpdC1wZW4nOiAnXFx1ZTYxMicsXG4gICAgJ3VpY29uLWVkaXQtcGVuLWZpbGwnOiAnXFx1ZTY2YicsXG4gICAgJ3VpY29uLWVtYWlsJzogJ1xcdWU2MTEnLFxuICAgICd1aWNvbi1lbWFpbC1maWxsJzogJ1xcdWU2NDInLFxuICAgICd1aWNvbi1taW51cy1jaXJjbGUnOiAnXFx1ZTYxYicsXG4gICAgJ3VpY29uLW1pbnVzLWNpcmNsZS1maWxsJzogJ1xcdWU2NTInLFxuICAgICd1aWNvbi1wbHVzLWNpcmNsZSc6ICdcXHVlNjJlJyxcbiAgICAndWljb24tcGx1cy1jaXJjbGUtZmlsbCc6ICdcXHVlNjYxJyxcbiAgICAndWljb24tZmlsZS10ZXh0JzogJ1xcdWU2NjMnLFxuICAgICd1aWNvbi1maWxlLXRleHQtZmlsbCc6ICdcXHVlNjY1JyxcbiAgICAndWljb24tcHVzaHBpbic6ICdcXHVlN2UzJyxcbiAgICAndWljb24tcHVzaHBpbi1maWxsJzogJ1xcdWU4NmUnLFxuICAgICd1aWNvbi1ncmlkJzogJ1xcdWU2NzMnLFxuICAgICd1aWNvbi1ncmlkLWZpbGwnOiAnXFx1ZTY3OCcsXG4gICAgJ3VpY29uLXBsYXktY2lyY2xlJzogJ1xcdWU2NDcnLFxuICAgICd1aWNvbi1wbGF5LWNpcmNsZS1maWxsJzogJ1xcdWU2NTUnLFxuICAgICd1aWNvbi1wYXVzZS1jaXJjbGUtZmlsbCc6ICdcXHVlNjU0JyxcbiAgICAndWljb24tcGF1c2UnOiAnXFx1ZThmYScsXG4gICAgJ3VpY29uLXBhdXNlLWNpcmNsZSc6ICdcXHVlNjQzJyxcbiAgICAndWljb24tZXllLW9mZic6ICdcXHVlNjQ4JyxcbiAgICAndWljb24tZXllLW9mZi1vdXRsaW5lJzogJ1xcdWU2MmInLFxuICAgICd1aWNvbi1naWZ0LWZpbGwnOiAnXFx1ZTY1YycsXG4gICAgJ3VpY29uLWdpZnQnOiAnXFx1ZTY1YicsXG4gICAgJ3VpY29uLXJtYi1jaXJjbGUtZmlsbCc6ICdcXHVlNjU3JyxcbiAgICAndWljb24tcm1iLWNpcmNsZSc6ICdcXHVlNjc3JyxcbiAgICAndWljb24ta2VmdS1lcm1haSc6ICdcXHVlNjU2JyxcbiAgICAndWljb24tc2VydmVyLWZpbGwnOiAnXFx1ZTc1MScsXG4gICAgJ3VpY29uLWNvdXBvbi1maWxsJzogJ1xcdWU4YzQnLFxuICAgICd1aWNvbi1jb3Vwb24nOiAnXFx1ZThhZScsXG4gICAgJ3VpY29uLWludGVncmFsJzogJ1xcdWU3MDQnLFxuICAgICd1aWNvbi1pbnRlZ3JhbC1maWxsJzogJ1xcdWU3MDMnLFxuICAgICd1aWNvbi1ob21lLWZpbGwnOiAnXFx1ZTk2NCcsXG4gICAgJ3VpY29uLWhvbWUnOiAnXFx1ZTk2NScsXG4gICAgJ3VpY29uLWhvdXJnbGFzcy1oYWxmLWZpbGwnOiAnXFx1ZTk2NicsXG4gICAgJ3VpY29uLWhvdXJnbGFzcyc6ICdcXHVlOTY3JyxcbiAgICAndWljb24tYWNjb3VudCc6ICdcXHVlNjI4JyxcbiAgICAndWljb24tcGx1cy1wZW9wbGUtZmlsbCc6ICdcXHVlNjI2JyxcbiAgICAndWljb24tbWludXMtcGVvcGxlLWZpbGwnOiAnXFx1ZTYxNScsXG4gICAgJ3VpY29uLWFjY291bnQtZmlsbCc6ICdcXHVlNjE0JyxcbiAgICAndWljb24tdGh1bWItZG93bi1maWxsJzogJ1xcdWU3MjYnLFxuICAgICd1aWNvbi10aHVtYi1kb3duJzogJ1xcdWU3MjcnLFxuICAgICd1aWNvbi10aHVtYi11cCc6ICdcXHVlNzMzJyxcbiAgICAndWljb24tdGh1bWItdXAtZmlsbCc6ICdcXHVlNzJmJyxcbiAgICAndWljb24tbG9jay1maWxsJzogJ1xcdWU5NzknLFxuICAgICd1aWNvbi1sb2NrLW9wZW4nOiAnXFx1ZTk3MycsXG4gICAgJ3VpY29uLWxvY2stb3BlbmVkLWZpbGwnOiAnXFx1ZTk3NCcsXG4gICAgJ3VpY29uLWxvY2snOiAnXFx1ZTk3YScsXG4gICAgJ3VpY29uLXJlZC1wYWNrZXQtZmlsbCc6ICdcXHVlNjkwJyxcbiAgICAndWljb24tcGhvdG8tZmlsbCc6ICdcXHVlOThiJyxcbiAgICAndWljb24tcGhvdG8nOiAnXFx1ZTk4ZCcsXG4gICAgJ3VpY29uLXZvbHVtZS1vZmYtZmlsbCc6ICdcXHVlNjU5JyxcbiAgICAndWljb24tdm9sdW1lLW9mZic6ICdcXHVlNjQ0JyxcbiAgICAndWljb24tdm9sdW1lLWZpbGwnOiAnXFx1ZTY3MCcsXG4gICAgJ3VpY29uLXZvbHVtZSc6ICdcXHVlNjMzJyxcbiAgICAndWljb24tcmVkLXBhY2tldCc6ICdcXHVlNjkxJyxcbiAgICAndWljb24tZG93bmxvYWQnOiAnXFx1ZTYzYycsXG4gICAgJ3VpY29uLWFycm93LXVwLWZpbGwnOiAnXFx1ZTZiMCcsXG4gICAgJ3VpY29uLWFycm93LWRvd24tZmlsbCc6ICdcXHVlNjAwJyxcbiAgICAndWljb24tcGxheS1sZWZ0LWZpbGwnOiAnXFx1ZTY3NScsXG4gICAgJ3VpY29uLXBsYXktcmlnaHQtZmlsbCc6ICdcXHVlNjc2JyxcbiAgICAndWljb24tcmV3aW5kLWxlZnQtZmlsbCc6ICdcXHVlNjc5JyxcbiAgICAndWljb24tcmV3aW5kLXJpZ2h0LWZpbGwnOiAnXFx1ZTY3YScsXG4gICAgJ3VpY29uLWFycm93LWRvd253YXJkJzogJ1xcdWU2MDQnLFxuICAgICd1aWNvbi1hcnJvdy1sZWZ0d2FyZCc6ICdcXHVlNjAxJyxcbiAgICAndWljb24tYXJyb3ctcmlnaHR3YXJkJzogJ1xcdWU2MDMnLFxuICAgICd1aWNvbi1hcnJvdy11cHdhcmQnOiAnXFx1ZTYwNycsXG4gICAgJ3VpY29uLWFycm93LWRvd24nOiAnXFx1ZTYwZCcsXG4gICAgJ3VpY29uLWFycm93LXJpZ2h0JzogJ1xcdWU2MDUnLFxuICAgICd1aWNvbi1hcnJvdy1sZWZ0JzogJ1xcdWU2MGUnLFxuICAgICd1aWNvbi1hcnJvdy11cCc6ICdcXHVlNjA2JyxcbiAgICAndWljb24tc2tpcC1iYWNrLWxlZnQnOiAnXFx1ZTY3NCcsXG4gICAgJ3VpY29uLXNraXAtZm9yd2FyZC1yaWdodCc6ICdcXHVlNjcyJyxcbiAgICAndWljb24tcmV3aW5kLXJpZ2h0JzogJ1xcdWU2NmYnLFxuICAgICd1aWNvbi1yZXdpbmQtbGVmdCc6ICdcXHVlNjcxJyxcbiAgICAndWljb24tYXJyb3ctcmlnaHQtZG91YmxlJzogJ1xcdWU2OGQnLFxuICAgICd1aWNvbi1hcnJvdy1sZWZ0LWRvdWJsZSc6ICdcXHVlNjhjJyxcbiAgICAndWljb24td2lmaS1vZmYnOiAnXFx1ZTY2OCcsXG4gICAgJ3VpY29uLXdpZmknOiAnXFx1ZTY2NycsXG4gICAgJ3VpY29uLWVtcHR5LWRhdGEnOiAnXFx1ZTYyZicsXG4gICAgJ3VpY29uLWVtcHR5LWhpc3RvcnknOiAnXFx1ZTY4NCcsXG4gICAgJ3VpY29uLWVtcHR5LWxpc3QnOiAnXFx1ZTY4YicsXG4gICAgJ3VpY29uLWVtcHR5LXBhZ2UnOiAnXFx1ZTYyNycsXG4gICAgJ3VpY29uLWVtcHR5LW9yZGVyJzogJ1xcdWU2MzknLFxuICAgICd1aWNvbi1tYW4nOiAnXFx1ZTY5NycsXG4gICAgJ3VpY29uLXdvbWFuJzogJ1xcdWU2OWMnLFxuICAgICd1aWNvbi1tYW4tYWRkJzogJ1xcdWU2MWMnLFxuICAgICd1aWNvbi1tYW4tYWRkLWZpbGwnOiAnXFx1ZTY0YycsXG4gICAgJ3VpY29uLW1hbi1kZWxldGUnOiAnXFx1ZTYxYScsXG4gICAgJ3VpY29uLW1hbi1kZWxldGUtZmlsbCc6ICdcXHVlNjZhJyxcbiAgICAndWljb24temgnOiAnXFx1ZTcwYScsXG4gICAgJ3VpY29uLWVuJzogJ1xcdWU2OTInXG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///120\n");

/***/ }),

/***/ 121:
/*!************************************************************************************************!*\
  !*** /Users/tongjie/Desktop/QNRTC-Uniapp/demo/uni_modules/uview-ui/components/u-icon/props.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\nvar _default = {\n  props: {\n    // 图标类名\n    name: {\n      type: String,\n      default: uni.$u.props.icon.name\n    },\n    // 图标颜色，可接受主题色\n    color: {\n      type: String,\n      default: uni.$u.props.icon.color\n    },\n    // 字体大小，单位px\n    size: {\n      type: [String, Number],\n      default: uni.$u.props.icon.size\n    },\n    // 是否显示粗体\n    bold: {\n      type: Boolean,\n      default: uni.$u.props.icon.bold\n    },\n    // 点击图标的时候传递事件出去的index（用于区分点击了哪一个）\n    index: {\n      type: [String, Number],\n      default: uni.$u.props.icon.index\n    },\n    // 触摸图标时的类名\n    hoverClass: {\n      type: String,\n      default: uni.$u.props.icon.hoverClass\n    },\n    // 自定义扩展前缀，方便用户扩展自己的图标库\n    customPrefix: {\n      type: String,\n      default: uni.$u.props.icon.customPrefix\n    },\n    // 图标右边或者下面的文字\n    label: {\n      type: [String, Number],\n      default: uni.$u.props.icon.label\n    },\n    // label的位置，只能右边或者下边\n    labelPos: {\n      type: String,\n      default: uni.$u.props.icon.labelPos\n    },\n    // label的大小\n    labelSize: {\n      type: [String, Number],\n      default: uni.$u.props.icon.labelSize\n    },\n    // label的颜色\n    labelColor: {\n      type: String,\n      default: uni.$u.props.icon.labelColor\n    },\n    // label与图标的距离\n    space: {\n      type: [String, Number],\n      default: uni.$u.props.icon.space\n    },\n    // 图片的mode\n    imgMode: {\n      type: String,\n      default: uni.$u.props.icon.imgMode\n    },\n    // 用于显示图片小图标时，图片的宽度\n    width: {\n      type: [String, Number],\n      default: uni.$u.props.icon.width\n    },\n    // 用于显示图片小图标时，图片的高度\n    height: {\n      type: [String, Number],\n      default: uni.$u.props.icon.height\n    },\n    // 用于解决某些情况下，让图标垂直居中的用途\n    top: {\n      type: [String, Number],\n      default: uni.$u.props.icon.top\n    },\n    // 是否阻止事件传播\n    stop: {\n      type: Boolean,\n      default: uni.$u.props.icon.stop\n    }\n  }\n};\nexports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vdW5pX21vZHVsZXMvdXZpZXctdWkvY29tcG9uZW50cy91LWljb24vcHJvcHMuanMiXSwibmFtZXMiOlsicHJvcHMiLCJuYW1lIiwidHlwZSIsIlN0cmluZyIsImRlZmF1bHQiLCJ1bmkiLCIkdSIsImljb24iLCJjb2xvciIsInNpemUiLCJOdW1iZXIiLCJib2xkIiwiQm9vbGVhbiIsImluZGV4IiwiaG92ZXJDbGFzcyIsImN1c3RvbVByZWZpeCIsImxhYmVsIiwibGFiZWxQb3MiLCJsYWJlbFNpemUiLCJsYWJlbENvbG9yIiwic3BhY2UiLCJpbWdNb2RlIiwid2lkdGgiLCJoZWlnaHQiLCJ0b3AiLCJzdG9wIl0sIm1hcHBpbmdzIjoiOzs7Ozs7ZUFBZTtFQUNYQSxLQUFLLEVBQUU7SUFDSDtJQUNBQyxJQUFJLEVBQUU7TUFDRkMsSUFBSSxFQUFFQyxNQUFNO01BQ1pDLE9BQU8sRUFBRUMsR0FBRyxDQUFDQyxFQUFFLENBQUNOLEtBQUssQ0FBQ08sSUFBSSxDQUFDTjtJQUMvQixDQUFDO0lBQ0Q7SUFDQU8sS0FBSyxFQUFFO01BQ0hOLElBQUksRUFBRUMsTUFBTTtNQUNaQyxPQUFPLEVBQUVDLEdBQUcsQ0FBQ0MsRUFBRSxDQUFDTixLQUFLLENBQUNPLElBQUksQ0FBQ0M7SUFDL0IsQ0FBQztJQUNEO0lBQ0FDLElBQUksRUFBRTtNQUNGUCxJQUFJLEVBQUUsQ0FBQ0MsTUFBTSxFQUFFTyxNQUFNLENBQUM7TUFDdEJOLE9BQU8sRUFBRUMsR0FBRyxDQUFDQyxFQUFFLENBQUNOLEtBQUssQ0FBQ08sSUFBSSxDQUFDRTtJQUMvQixDQUFDO0lBQ0Q7SUFDQUUsSUFBSSxFQUFFO01BQ0ZULElBQUksRUFBRVUsT0FBTztNQUNiUixPQUFPLEVBQUVDLEdBQUcsQ0FBQ0MsRUFBRSxDQUFDTixLQUFLLENBQUNPLElBQUksQ0FBQ0k7SUFDL0IsQ0FBQztJQUNEO0lBQ0FFLEtBQUssRUFBRTtNQUNIWCxJQUFJLEVBQUUsQ0FBQ0MsTUFBTSxFQUFFTyxNQUFNLENBQUM7TUFDdEJOLE9BQU8sRUFBRUMsR0FBRyxDQUFDQyxFQUFFLENBQUNOLEtBQUssQ0FBQ08sSUFBSSxDQUFDTTtJQUMvQixDQUFDO0lBQ0Q7SUFDQUMsVUFBVSxFQUFFO01BQ1JaLElBQUksRUFBRUMsTUFBTTtNQUNaQyxPQUFPLEVBQUVDLEdBQUcsQ0FBQ0MsRUFBRSxDQUFDTixLQUFLLENBQUNPLElBQUksQ0FBQ087SUFDL0IsQ0FBQztJQUNEO0lBQ0FDLFlBQVksRUFBRTtNQUNWYixJQUFJLEVBQUVDLE1BQU07TUFDWkMsT0FBTyxFQUFFQyxHQUFHLENBQUNDLEVBQUUsQ0FBQ04sS0FBSyxDQUFDTyxJQUFJLENBQUNRO0lBQy9CLENBQUM7SUFDRDtJQUNBQyxLQUFLLEVBQUU7TUFDSGQsSUFBSSxFQUFFLENBQUNDLE1BQU0sRUFBRU8sTUFBTSxDQUFDO01BQ3RCTixPQUFPLEVBQUVDLEdBQUcsQ0FBQ0MsRUFBRSxDQUFDTixLQUFLLENBQUNPLElBQUksQ0FBQ1M7SUFDL0IsQ0FBQztJQUNEO0lBQ0FDLFFBQVEsRUFBRTtNQUNOZixJQUFJLEVBQUVDLE1BQU07TUFDWkMsT0FBTyxFQUFFQyxHQUFHLENBQUNDLEVBQUUsQ0FBQ04sS0FBSyxDQUFDTyxJQUFJLENBQUNVO0lBQy9CLENBQUM7SUFDRDtJQUNBQyxTQUFTLEVBQUU7TUFDUGhCLElBQUksRUFBRSxDQUFDQyxNQUFNLEVBQUVPLE1BQU0sQ0FBQztNQUN0Qk4sT0FBTyxFQUFFQyxHQUFHLENBQUNDLEVBQUUsQ0FBQ04sS0FBSyxDQUFDTyxJQUFJLENBQUNXO0lBQy9CLENBQUM7SUFDRDtJQUNBQyxVQUFVLEVBQUU7TUFDUmpCLElBQUksRUFBRUMsTUFBTTtNQUNaQyxPQUFPLEVBQUVDLEdBQUcsQ0FBQ0MsRUFBRSxDQUFDTixLQUFLLENBQUNPLElBQUksQ0FBQ1k7SUFDL0IsQ0FBQztJQUNEO0lBQ0FDLEtBQUssRUFBRTtNQUNIbEIsSUFBSSxFQUFFLENBQUNDLE1BQU0sRUFBRU8sTUFBTSxDQUFDO01BQ3RCTixPQUFPLEVBQUVDLEdBQUcsQ0FBQ0MsRUFBRSxDQUFDTixLQUFLLENBQUNPLElBQUksQ0FBQ2E7SUFDL0IsQ0FBQztJQUNEO0lBQ0FDLE9BQU8sRUFBRTtNQUNMbkIsSUFBSSxFQUFFQyxNQUFNO01BQ1pDLE9BQU8sRUFBRUMsR0FBRyxDQUFDQyxFQUFFLENBQUNOLEtBQUssQ0FBQ08sSUFBSSxDQUFDYztJQUMvQixDQUFDO0lBQ0Q7SUFDQUMsS0FBSyxFQUFFO01BQ0hwQixJQUFJLEVBQUUsQ0FBQ0MsTUFBTSxFQUFFTyxNQUFNLENBQUM7TUFDdEJOLE9BQU8sRUFBRUMsR0FBRyxDQUFDQyxFQUFFLENBQUNOLEtBQUssQ0FBQ08sSUFBSSxDQUFDZTtJQUMvQixDQUFDO0lBQ0Q7SUFDQUMsTUFBTSxFQUFFO01BQ0pyQixJQUFJLEVBQUUsQ0FBQ0MsTUFBTSxFQUFFTyxNQUFNLENBQUM7TUFDdEJOLE9BQU8sRUFBRUMsR0FBRyxDQUFDQyxFQUFFLENBQUNOLEtBQUssQ0FBQ08sSUFBSSxDQUFDZ0I7SUFDL0IsQ0FBQztJQUNEO0lBQ0FDLEdBQUcsRUFBRTtNQUNEdEIsSUFBSSxFQUFFLENBQUNDLE1BQU0sRUFBRU8sTUFBTSxDQUFDO01BQ3RCTixPQUFPLEVBQUVDLEdBQUcsQ0FBQ0MsRUFBRSxDQUFDTixLQUFLLENBQUNPLElBQUksQ0FBQ2lCO0lBQy9CLENBQUM7SUFDRDtJQUNBQyxJQUFJLEVBQUU7TUFDRnZCLElBQUksRUFBRVUsT0FBTztNQUNiUixPQUFPLEVBQUVDLEdBQUcsQ0FBQ0MsRUFBRSxDQUFDTixLQUFLLENBQUNPLElBQUksQ0FBQ2tCO0lBQy9CO0VBQ0o7QUFDSixDQUFDO0FBQUEiLCJmaWxlIjoiMTIxLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQge1xuICAgIHByb3BzOiB7XG4gICAgICAgIC8vIOWbvuagh+exu+WQjVxuICAgICAgICBuYW1lOiB7XG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICBkZWZhdWx0OiB1bmkuJHUucHJvcHMuaWNvbi5uYW1lXG4gICAgICAgIH0sXG4gICAgICAgIC8vIOWbvuagh+minOiJsu+8jOWPr+aOpeWPl+S4u+mimOiJslxuICAgICAgICBjb2xvcjoge1xuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgZGVmYXVsdDogdW5pLiR1LnByb3BzLmljb24uY29sb3JcbiAgICAgICAgfSxcbiAgICAgICAgLy8g5a2X5L2T5aSn5bCP77yM5Y2V5L2NcHhcbiAgICAgICAgc2l6ZToge1xuICAgICAgICAgICAgdHlwZTogW1N0cmluZywgTnVtYmVyXSxcbiAgICAgICAgICAgIGRlZmF1bHQ6IHVuaS4kdS5wcm9wcy5pY29uLnNpemVcbiAgICAgICAgfSxcbiAgICAgICAgLy8g5piv5ZCm5pi+56S657KX5L2TXG4gICAgICAgIGJvbGQ6IHtcbiAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgICAgICBkZWZhdWx0OiB1bmkuJHUucHJvcHMuaWNvbi5ib2xkXG4gICAgICAgIH0sXG4gICAgICAgIC8vIOeCueWHu+Wbvuagh+eahOaXtuWAmeS8oOmAkuS6i+S7tuWHuuWOu+eahGluZGV477yI55So5LqO5Yy65YiG54K55Ye75LqG5ZOq5LiA5Liq77yJXG4gICAgICAgIGluZGV4OiB7XG4gICAgICAgICAgICB0eXBlOiBbU3RyaW5nLCBOdW1iZXJdLFxuICAgICAgICAgICAgZGVmYXVsdDogdW5pLiR1LnByb3BzLmljb24uaW5kZXhcbiAgICAgICAgfSxcbiAgICAgICAgLy8g6Kem5pG45Zu+5qCH5pe255qE57G75ZCNXG4gICAgICAgIGhvdmVyQ2xhc3M6IHtcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICAgIGRlZmF1bHQ6IHVuaS4kdS5wcm9wcy5pY29uLmhvdmVyQ2xhc3NcbiAgICAgICAgfSxcbiAgICAgICAgLy8g6Ieq5a6a5LmJ5omp5bGV5YmN57yA77yM5pa55L6/55So5oi35omp5bGV6Ieq5bex55qE5Zu+5qCH5bqTXG4gICAgICAgIGN1c3RvbVByZWZpeDoge1xuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgZGVmYXVsdDogdW5pLiR1LnByb3BzLmljb24uY3VzdG9tUHJlZml4XG4gICAgICAgIH0sXG4gICAgICAgIC8vIOWbvuagh+WPs+i+ueaIluiAheS4i+mdoueahOaWh+Wtl1xuICAgICAgICBsYWJlbDoge1xuICAgICAgICAgICAgdHlwZTogW1N0cmluZywgTnVtYmVyXSxcbiAgICAgICAgICAgIGRlZmF1bHQ6IHVuaS4kdS5wcm9wcy5pY29uLmxhYmVsXG4gICAgICAgIH0sXG4gICAgICAgIC8vIGxhYmVs55qE5L2N572u77yM5Y+q6IO95Y+z6L655oiW6ICF5LiL6L65XG4gICAgICAgIGxhYmVsUG9zOiB7XG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICBkZWZhdWx0OiB1bmkuJHUucHJvcHMuaWNvbi5sYWJlbFBvc1xuICAgICAgICB9LFxuICAgICAgICAvLyBsYWJlbOeahOWkp+Wwj1xuICAgICAgICBsYWJlbFNpemU6IHtcbiAgICAgICAgICAgIHR5cGU6IFtTdHJpbmcsIE51bWJlcl0sXG4gICAgICAgICAgICBkZWZhdWx0OiB1bmkuJHUucHJvcHMuaWNvbi5sYWJlbFNpemVcbiAgICAgICAgfSxcbiAgICAgICAgLy8gbGFiZWznmoTpopzoibJcbiAgICAgICAgbGFiZWxDb2xvcjoge1xuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgZGVmYXVsdDogdW5pLiR1LnByb3BzLmljb24ubGFiZWxDb2xvclxuICAgICAgICB9LFxuICAgICAgICAvLyBsYWJlbOS4juWbvuagh+eahOi3neemu1xuICAgICAgICBzcGFjZToge1xuICAgICAgICAgICAgdHlwZTogW1N0cmluZywgTnVtYmVyXSxcbiAgICAgICAgICAgIGRlZmF1bHQ6IHVuaS4kdS5wcm9wcy5pY29uLnNwYWNlXG4gICAgICAgIH0sXG4gICAgICAgIC8vIOWbvueJh+eahG1vZGVcbiAgICAgICAgaW1nTW9kZToge1xuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgZGVmYXVsdDogdW5pLiR1LnByb3BzLmljb24uaW1nTW9kZVxuICAgICAgICB9LFxuICAgICAgICAvLyDnlKjkuo7mmL7npLrlm77niYflsI/lm77moIfml7bvvIzlm77niYfnmoTlrr3luqZcbiAgICAgICAgd2lkdGg6IHtcbiAgICAgICAgICAgIHR5cGU6IFtTdHJpbmcsIE51bWJlcl0sXG4gICAgICAgICAgICBkZWZhdWx0OiB1bmkuJHUucHJvcHMuaWNvbi53aWR0aFxuICAgICAgICB9LFxuICAgICAgICAvLyDnlKjkuo7mmL7npLrlm77niYflsI/lm77moIfml7bvvIzlm77niYfnmoTpq5jluqZcbiAgICAgICAgaGVpZ2h0OiB7XG4gICAgICAgICAgICB0eXBlOiBbU3RyaW5nLCBOdW1iZXJdLFxuICAgICAgICAgICAgZGVmYXVsdDogdW5pLiR1LnByb3BzLmljb24uaGVpZ2h0XG4gICAgICAgIH0sXG4gICAgICAgIC8vIOeUqOS6juino+WGs+afkOS6m+aDheWGteS4i++8jOiuqeWbvuagh+WeguebtOWxheS4reeahOeUqOmAlFxuICAgICAgICB0b3A6IHtcbiAgICAgICAgICAgIHR5cGU6IFtTdHJpbmcsIE51bWJlcl0sXG4gICAgICAgICAgICBkZWZhdWx0OiB1bmkuJHUucHJvcHMuaWNvbi50b3BcbiAgICAgICAgfSxcbiAgICAgICAgLy8g5piv5ZCm6Zi75q2i5LqL5Lu25Lyg5pKtXG4gICAgICAgIHN0b3A6IHtcbiAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgICAgICBkZWZhdWx0OiB1bmkuJHUucHJvcHMuaWNvbi5zdG9wXG4gICAgICAgIH1cbiAgICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///121\n");

/***/ }),

/***/ 122:
/*!************************************************************************************************************************************************************!*\
  !*** /Users/tongjie/Desktop/QNRTC-Uniapp/demo/uni_modules/uview-ui/components/u-icon/u-icon.vue?vue&type=style&index=0&id=2ee87dc9&lang=scss&scoped=true& ***!
  \************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_11_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_11_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_u_icon_vue_vue_type_style_index_0_id_2ee87dc9_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--11-oneOf-0-1!../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--11-oneOf-0-2!../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--11-oneOf-0-3!../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--11-oneOf-0-4!../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./u-icon.vue?vue&type=style&index=0&id=2ee87dc9&lang=scss&scoped=true& */ 123);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_11_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_11_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_u_icon_vue_vue_type_style_index_0_id_2ee87dc9_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_11_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_11_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_u_icon_vue_vue_type_style_index_0_id_2ee87dc9_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_11_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_11_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_u_icon_vue_vue_type_style_index_0_id_2ee87dc9_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_11_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_11_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_u_icon_vue_vue_type_style_index_0_id_2ee87dc9_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_11_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_11_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_u_icon_vue_vue_type_style_index_0_id_2ee87dc9_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 123:
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--11-oneOf-0-1!./node_modules/postcss-loader/src??ref--11-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--11-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--11-oneOf-0-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!/Users/tongjie/Desktop/QNRTC-Uniapp/demo/uni_modules/uview-ui/components/u-icon/u-icon.vue?vue&type=style&index=0&id=2ee87dc9&lang=scss&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  ".u-icon": {
    "": {
      "alignItems": [
        "center",
        0,
        0,
        16
      ]
    }
  },
  ".u-icon--left": {
    "": {
      "flexDirection": [
        "row-reverse",
        0,
        0,
        17
      ],
      "alignItems": [
        "center",
        0,
        0,
        17
      ]
    }
  },
  ".u-icon--right": {
    "": {
      "flexDirection": [
        "row",
        0,
        0,
        18
      ],
      "alignItems": [
        "center",
        0,
        0,
        18
      ]
    }
  },
  ".u-icon--top": {
    "": {
      "flexDirection": [
        "column-reverse",
        0,
        0,
        19
      ],
      "justifyContent": [
        "center",
        0,
        0,
        19
      ]
    }
  },
  ".u-icon--bottom": {
    "": {
      "flexDirection": [
        "column",
        0,
        0,
        20
      ],
      "justifyContent": [
        "center",
        0,
        0,
        20
      ]
    }
  },
  ".u-icon__icon": {
    "": {
      "fontFamily": [
        "uicon-iconfont",
        0,
        0,
        21
      ],
      "position": [
        "relative",
        0,
        0,
        21
      ],
      "flexDirection": [
        "row",
        0,
        0,
        21
      ],
      "alignItems": [
        "center",
        0,
        0,
        21
      ]
    }
  },
  ".u-icon__icon--primary": {
    "": {
      "color": [
        "#3c9cff",
        0,
        0,
        22
      ]
    }
  },
  ".u-icon__icon--success": {
    "": {
      "color": [
        "#5ac725",
        0,
        0,
        23
      ]
    }
  },
  ".u-icon__icon--error": {
    "": {
      "color": [
        "#f56c6c",
        0,
        0,
        24
      ]
    }
  },
  ".u-icon__icon--warning": {
    "": {
      "color": [
        "#f9ae3d",
        0,
        0,
        25
      ]
    }
  },
  ".u-icon__icon--info": {
    "": {
      "color": [
        "#909399",
        0,
        0,
        26
      ]
    }
  },
  "@VERSION": 2
}

/***/ }),

/***/ 147:
/*!******************************************************************************************************!*\
  !*** /Users/tongjie/Desktop/QNRTC-Uniapp/demo/uni_modules/uview-ui/components/u-button/u-button.vue ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _u_button_vue_vue_type_template_id_2bf0e569_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./u-button.vue?vue&type=template&id=2bf0e569&scoped=true& */ 148);\n/* harmony import */ var _u_button_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./u-button.vue?vue&type=script&lang=js& */ 158);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _u_button_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _u_button_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 20);\n\nvar renderjs\n\n\nfunction injectStyles (context) {\n  \n  if(!this.options.style){\n          this.options.style = {}\n      }\n      if(Vue.prototype.__merge_style && Vue.prototype.__$appStyle__){\n        Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style)\n      }\n      if(Vue.prototype.__merge_style){\n                Vue.prototype.__merge_style(__webpack_require__(/*! ./u-button.vue?vue&type=style&index=0&id=2bf0e569&lang=scss&scoped=true& */ 163).default, this.options.style)\n            }else{\n                Object.assign(this.options.style,__webpack_require__(/*! ./u-button.vue?vue&type=style&index=0&id=2bf0e569&lang=scss&scoped=true& */ 163).default)\n            }\n\n}\n\n/* normalize component */\n\nvar component = Object(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _u_button_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _u_button_vue_vue_type_template_id_2bf0e569_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _u_button_vue_vue_type_template_id_2bf0e569_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"2bf0e569\",\n  \"3053e187\",\n  false,\n  _u_button_vue_vue_type_template_id_2bf0e569_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ninjectStyles.call(component)\ncomponent.options.__file = \"uni_modules/uview-ui/components/u-button/u-button.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBaUk7QUFDakk7QUFDNEQ7QUFDTDtBQUN2RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxtQkFBTyxDQUFDLG1GQUEwRTtBQUM5SCxhQUFhO0FBQ2IsaURBQWlELG1CQUFPLENBQUMsbUZBQTBFO0FBQ25JOztBQUVBOztBQUVBO0FBQ3NOO0FBQ3ROLGdCQUFnQixpTkFBVTtBQUMxQixFQUFFLDhFQUFNO0FBQ1IsRUFBRSwrRkFBTTtBQUNSLEVBQUUsd0dBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsbUdBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDZSxnRiIsImZpbGUiOiIxNDcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IGZyb20gXCIuL3UtYnV0dG9uLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0yYmYwZTU2OSZzY29wZWQ9dHJ1ZSZcIlxudmFyIHJlbmRlcmpzXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL3UtYnV0dG9uLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vdS1idXR0b24udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5mdW5jdGlvbiBpbmplY3RTdHlsZXMgKGNvbnRleHQpIHtcbiAgXG4gIGlmKCF0aGlzLm9wdGlvbnMuc3R5bGUpe1xuICAgICAgICAgIHRoaXMub3B0aW9ucy5zdHlsZSA9IHt9XG4gICAgICB9XG4gICAgICBpZihWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUgJiYgVnVlLnByb3RvdHlwZS5fXyRhcHBTdHlsZV9fKXtcbiAgICAgICAgVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlKFZ1ZS5wcm90b3R5cGUuX18kYXBwU3R5bGVfXywgdGhpcy5vcHRpb25zLnN0eWxlKVxuICAgICAgfVxuICAgICAgaWYoVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlKXtcbiAgICAgICAgICAgICAgICBWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUocmVxdWlyZShcIi4vdS1idXR0b24udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MmJmMGU1NjkmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiKS5kZWZhdWx0LCB0aGlzLm9wdGlvbnMuc3R5bGUpXG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMub3B0aW9ucy5zdHlsZSxyZXF1aXJlKFwiLi91LWJ1dHRvbi52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0yYmYwZTU2OSZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIpLmRlZmF1bHQpXG4gICAgICAgICAgICB9XG5cbn1cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiMmJmMGU1NjlcIixcbiAgXCIzMDUzZTE4N1wiLFxuICBmYWxzZSxcbiAgY29tcG9uZW50cyxcbiAgcmVuZGVyanNcbilcblxuaW5qZWN0U3R5bGVzLmNhbGwoY29tcG9uZW50KVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJ1bmlfbW9kdWxlcy91dmlldy11aS9jb21wb25lbnRzL3UtYnV0dG9uL3UtYnV0dG9uLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///147\n");

/***/ }),

/***/ 148:
/*!*************************************************************************************************************************************************!*\
  !*** /Users/tongjie/Desktop/QNRTC-Uniapp/demo/uni_modules/uview-ui/components/u-button/u-button.vue?vue&type=template&id=2bf0e569&scoped=true& ***!
  \*************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_u_button_vue_vue_type_template_id_2bf0e569_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-0!../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./u-button.vue?vue&type=template&id=2bf0e569&scoped=true& */ 149);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_u_button_vue_vue_type_template_id_2bf0e569_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_u_button_vue_vue_type_template_id_2bf0e569_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_u_button_vue_vue_type_template_id_2bf0e569_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_u_button_vue_vue_type_template_id_2bf0e569_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 149:
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!/Users/tongjie/Desktop/QNRTC-Uniapp/demo/uni_modules/uview-ui/components/u-button/u-button.vue?vue&type=template&id=2bf0e569&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
try {
  components = {
    uLoadingIcon:
      __webpack_require__(/*! @/uni_modules/uview-ui/components/u-loading-icon/u-loading-icon.vue */ 150)
        .default,
    uIcon: __webpack_require__(/*! @/uni_modules/uview-ui/components/u-icon/u-icon.vue */ 115)
      .default,
  }
} catch (e) {
  if (
    e.message.indexOf("Cannot find module") !== -1 &&
    e.message.indexOf(".vue") !== -1
  ) {
    console.error(e.message)
    console.error("1. 排查组件名称拼写是否正确")
    console.error(
      "2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"
    )
    console.error(
      "3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件"
    )
  } else {
    throw e
  }
}
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "view",
    {
      staticClass: ["u-button"],
      class: _vm.bemClass,
      style: [_vm.baseColor, _vm.$u.addStyle(_vm.customStyle)],
      attrs: {
        hoverStartTime: Number(_vm.hoverStartTime),
        hoverStayTime: Number(_vm.hoverStayTime),
        hoverClass:
          !_vm.disabled &&
          !_vm.loading &&
          !_vm.color &&
          (_vm.plain || _vm.type === "info")
            ? "u-button--active--plain"
            : !_vm.disabled && !_vm.loading && !_vm.plain
            ? "u-button--active"
            : "",
      },
      on: { click: _vm.clickHandler },
    },
    [
      _vm.loading
        ? [
            _c("u-loading-icon", {
              attrs: {
                mode: _vm.loadingMode,
                size: _vm.loadingSize * 1.15,
                color: _vm.loadingColor,
              },
            }),
            _c(
              "u-text",
              {
                staticClass: ["u-button__loading-text"],
                class: [_vm.plain && "u-button__text--plain--" + _vm.type],
                style: [_vm.nvueTextStyle],
                appendAsTree: true,
                attrs: { append: "tree" },
              },
              [_vm._v(_vm._s(_vm.loadingText || _vm.text))]
            ),
          ]
        : [
            _vm.icon
              ? _c("u-icon", {
                  attrs: {
                    name: _vm.icon,
                    color: _vm.iconColorCom,
                    size: _vm.textSize * 1.35,
                  },
                })
              : _vm._e(),
            _c(
              "u-text",
              {
                staticClass: ["u-button__text"],
                class: [_vm.plain && "u-button__text--plain--" + _vm.type],
                style: [
                  {
                    marginLeft: _vm.icon ? "2px" : 0,
                  },
                  _vm.nvueTextStyle,
                ],
                appendAsTree: true,
                attrs: { append: "tree" },
              },
              [_vm._v(_vm._s(_vm.text))]
            ),
          ],
    ],
    2
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 150:
/*!******************************************************************************************************************!*\
  !*** /Users/tongjie/Desktop/QNRTC-Uniapp/demo/uni_modules/uview-ui/components/u-loading-icon/u-loading-icon.vue ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _u_loading_icon_vue_vue_type_template_id_0fe228ae_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./u-loading-icon.vue?vue&type=template&id=0fe228ae&scoped=true& */ 151);\n/* harmony import */ var _u_loading_icon_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./u-loading-icon.vue?vue&type=script&lang=js& */ 153);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _u_loading_icon_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _u_loading_icon_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 20);\n\nvar renderjs\n\n\nfunction injectStyles (context) {\n  \n  if(!this.options.style){\n          this.options.style = {}\n      }\n      if(Vue.prototype.__merge_style && Vue.prototype.__$appStyle__){\n        Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style)\n      }\n      if(Vue.prototype.__merge_style){\n                Vue.prototype.__merge_style(__webpack_require__(/*! ./u-loading-icon.vue?vue&type=style&index=0&id=0fe228ae&lang=scss&scoped=true& */ 156).default, this.options.style)\n            }else{\n                Object.assign(this.options.style,__webpack_require__(/*! ./u-loading-icon.vue?vue&type=style&index=0&id=0fe228ae&lang=scss&scoped=true& */ 156).default)\n            }\n\n}\n\n/* normalize component */\n\nvar component = Object(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _u_loading_icon_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _u_loading_icon_vue_vue_type_template_id_0fe228ae_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _u_loading_icon_vue_vue_type_template_id_0fe228ae_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"0fe228ae\",\n  \"6732aac7\",\n  false,\n  _u_loading_icon_vue_vue_type_template_id_0fe228ae_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ninjectStyles.call(component)\ncomponent.options.__file = \"uni_modules/uview-ui/components/u-loading-icon/u-loading-icon.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBdUk7QUFDdkk7QUFDa0U7QUFDTDtBQUM3RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxtQkFBTyxDQUFDLHlGQUFnRjtBQUNwSSxhQUFhO0FBQ2IsaURBQWlELG1CQUFPLENBQUMseUZBQWdGO0FBQ3pJOztBQUVBOztBQUVBO0FBQ3NOO0FBQ3ROLGdCQUFnQixpTkFBVTtBQUMxQixFQUFFLG9GQUFNO0FBQ1IsRUFBRSxxR0FBTTtBQUNSLEVBQUUsOEdBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUseUdBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDZSxnRiIsImZpbGUiOiIxNTAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IGZyb20gXCIuL3UtbG9hZGluZy1pY29uLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0wZmUyMjhhZSZzY29wZWQ9dHJ1ZSZcIlxudmFyIHJlbmRlcmpzXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL3UtbG9hZGluZy1pY29uLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vdS1sb2FkaW5nLWljb24udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5mdW5jdGlvbiBpbmplY3RTdHlsZXMgKGNvbnRleHQpIHtcbiAgXG4gIGlmKCF0aGlzLm9wdGlvbnMuc3R5bGUpe1xuICAgICAgICAgIHRoaXMub3B0aW9ucy5zdHlsZSA9IHt9XG4gICAgICB9XG4gICAgICBpZihWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUgJiYgVnVlLnByb3RvdHlwZS5fXyRhcHBTdHlsZV9fKXtcbiAgICAgICAgVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlKFZ1ZS5wcm90b3R5cGUuX18kYXBwU3R5bGVfXywgdGhpcy5vcHRpb25zLnN0eWxlKVxuICAgICAgfVxuICAgICAgaWYoVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlKXtcbiAgICAgICAgICAgICAgICBWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUocmVxdWlyZShcIi4vdS1sb2FkaW5nLWljb24udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MGZlMjI4YWUmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiKS5kZWZhdWx0LCB0aGlzLm9wdGlvbnMuc3R5bGUpXG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMub3B0aW9ucy5zdHlsZSxyZXF1aXJlKFwiLi91LWxvYWRpbmctaWNvbi52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0wZmUyMjhhZSZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIpLmRlZmF1bHQpXG4gICAgICAgICAgICB9XG5cbn1cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiMGZlMjI4YWVcIixcbiAgXCI2NzMyYWFjN1wiLFxuICBmYWxzZSxcbiAgY29tcG9uZW50cyxcbiAgcmVuZGVyanNcbilcblxuaW5qZWN0U3R5bGVzLmNhbGwoY29tcG9uZW50KVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJ1bmlfbW9kdWxlcy91dmlldy11aS9jb21wb25lbnRzL3UtbG9hZGluZy1pY29uL3UtbG9hZGluZy1pY29uLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///150\n");

/***/ }),

/***/ 151:
/*!*************************************************************************************************************************************************************!*\
  !*** /Users/tongjie/Desktop/QNRTC-Uniapp/demo/uni_modules/uview-ui/components/u-loading-icon/u-loading-icon.vue?vue&type=template&id=0fe228ae&scoped=true& ***!
  \*************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_u_loading_icon_vue_vue_type_template_id_0fe228ae_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-0!../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./u-loading-icon.vue?vue&type=template&id=0fe228ae&scoped=true& */ 152);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_u_loading_icon_vue_vue_type_template_id_0fe228ae_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_u_loading_icon_vue_vue_type_template_id_0fe228ae_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_u_loading_icon_vue_vue_type_template_id_0fe228ae_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_u_loading_icon_vue_vue_type_template_id_0fe228ae_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 152:
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!/Users/tongjie/Desktop/QNRTC-Uniapp/demo/uni_modules/uview-ui/components/u-loading-icon/u-loading-icon.vue?vue&type=template&id=0fe228ae&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.show
    ? _c(
        "view",
        {
          staticClass: ["u-loading-icon"],
          class: [_vm.vertical && "u-loading-icon--vertical"],
          style: [_vm.$u.addStyle(_vm.customStyle)],
        },
        [
          !_vm.webviewHide
            ? _c(
                "view",
                {
                  ref: "ani",
                  staticClass: ["u-loading-icon__spinner"],
                  class: ["u-loading-icon__spinner--" + _vm.mode],
                  style: {
                    color: _vm.color,
                    width: _vm.$u.addUnit(_vm.size),
                    height: _vm.$u.addUnit(_vm.size),
                    borderTopColor: _vm.color,
                    borderBottomColor: _vm.otherBorderColor,
                    borderLeftColor: _vm.otherBorderColor,
                    borderRightColor: _vm.otherBorderColor,
                    "animation-duration": _vm.duration + "ms",
                    "animation-timing-function":
                      _vm.mode === "semicircle" || _vm.mode === "circle"
                        ? _vm.timingFunction
                        : "",
                  },
                },
                [
                  _vm.mode === "spinner"
                    ? _c("block", [
                        !_vm.webviewHide
                          ? _c("loading-indicator", {
                              staticClass: ["u-loading-indicator"],
                              style: {
                                color: _vm.color,
                                width: _vm.$u.addUnit(_vm.size),
                                height: _vm.$u.addUnit(_vm.size),
                              },
                              attrs: { animating: true },
                            })
                          : _vm._e(),
                      ])
                    : _vm._e(),
                ],
                1
              )
            : _vm._e(),
          _vm.text
            ? _c(
                "u-text",
                {
                  staticClass: ["u-loading-icon__text"],
                  style: {
                    fontSize: _vm.$u.addUnit(_vm.textSize),
                    color: _vm.textColor,
                  },
                  appendAsTree: true,
                  attrs: { append: "tree" },
                },
                [_vm._v(_vm._s(_vm.text))]
              )
            : _vm._e(),
        ]
      )
    : _vm._e()
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 153:
/*!*******************************************************************************************************************************************!*\
  !*** /Users/tongjie/Desktop/QNRTC-Uniapp/demo/uni_modules/uview-ui/components/u-loading-icon/u-loading-icon.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_u_loading_icon_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib??ref--5-0!../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--5-1!../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./u-loading-icon.vue?vue&type=script&lang=js& */ 154);\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_u_loading_icon_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_u_loading_icon_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_u_loading_icon_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_u_loading_icon_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_u_loading_icon_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXNrQixDQUFnQiw4akJBQUcsRUFBQyIsImZpbGUiOiIxNTMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNS0wIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS01LTEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vdS1sb2FkaW5nLWljb24udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNS0wIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS01LTEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vdS1sb2FkaW5nLWljb24udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///153\n");

/***/ }),

/***/ 154:
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--5-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--5-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!/Users/tongjie/Desktop/QNRTC-Uniapp/demo/uni_modules/uview-ui/components/u-loading-icon/u-loading-icon.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 16);\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\nvar _props = _interopRequireDefault(__webpack_require__(/*! ./props.js */ 155));\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\nvar animation = weex.requireModule('animation');\n\n/**\n * loading 加载动画\n * @description 警此组件为一个小动画，目前用在uView的loadmore加载更多和switch开关等组件的正在加载状态场景。\n * @tutorial https://www.uviewui.com/components/loading.html\n * @property {Boolean}\t\t\tshow\t\t\t是否显示组件  (默认 true)\n * @property {String}\t\t\tcolor\t\t\t动画活动区域的颜色，只对 mode = flower 模式有效（默认color['u-tips-color']）\n * @property {String}\t\t\ttextColor\t\t提示文本的颜色（默认color['u-tips-color']）\n * @property {Boolean}\t\t\tvertical\t\t文字和图标是否垂直排列 (默认 false )\n * @property {String}\t\t\tmode\t\t\t模式选择，见官网说明（默认 'circle' ）\n * @property {String | Number}\tsize\t\t\t加载图标的大小，单位px （默认 24 ）\n * @property {String | Number}\ttextSize\t\t文字大小（默认 15 ）\n * @property {String | Number}\ttext\t\t\t文字内容 \n * @property {String}\t\t\ttimingFunction\t动画模式 （默认 'ease-in-out' ）\n * @property {String | Number}\tduration\t\t动画执行周期时间（默认 1200）\n * @property {String}\t\t\tinactiveColor\tmode=circle时的暗边颜色 \n * @property {Object}\t\t\tcustomStyle\t\t定义需要用到的外部样式\n * @example <u-loading mode=\"circle\"></u-loading>\n */\nvar _default = {\n  name: 'u-loading-icon',\n  mixins: [uni.$u.mpMixin, uni.$u.mixin, _props.default],\n  data: function data() {\n    return {\n      // Array.form可以通过一个伪数组对象创建指定长度的数组\n      // https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/from\n      array12: Array.from({\n        length: 12\n      }),\n      // 这里需要设置默认值为360，否则在安卓nvue上，会延迟一个duration周期后才执行\n      // 在iOS nvue上，则会一开始默认执行两个周期的动画\n      aniAngel: 360,\n      // 动画旋转角度\n      webviewHide: false,\n      // 监听webview的状态，如果隐藏了页面，则停止动画，以免性能消耗\n      loading: false // 是否运行中，针对nvue使用\n    };\n  },\n\n  computed: {\n    // 当为circle类型时，给其另外三边设置一个更轻一些的颜色\n    // 之所以需要这么做的原因是，比如父组件传了color为红色，那么需要另外的三个边为浅红色\n    // 而不能是固定的某一个其他颜色(因为这个固定的颜色可能浅蓝，导致效果没有那么细腻良好)\n    otherBorderColor: function otherBorderColor() {\n      var lightColor = uni.$u.colorGradient(this.color, '#ffffff', 100)[80];\n      if (this.mode === 'circle') {\n        return this.inactiveColor ? this.inactiveColor : lightColor;\n      } else {\n        return 'transparent';\n      }\n      // return this.mode === 'circle' ? this.inactiveColor ? this.inactiveColor : lightColor : 'transparent'\n    }\n  },\n\n  watch: {\n    show: function show(n) {\n      var _this = this;\n      // nvue中，show为true，且为非loading状态，就重新执行动画模块\n\n      if (n && !this.loading) {\n        setTimeout(function () {\n          _this.startAnimate();\n        }, 30);\n      }\n    }\n  },\n  mounted: function mounted() {\n    this.init();\n  },\n  methods: {\n    init: function init() {\n      var _this2 = this;\n      setTimeout(function () {\n        _this2.show && _this2.nvueAnimate();\n        _this2.show && _this2.addEventListenerToWebview();\n      }, 20);\n    },\n    // 监听webview的显示与隐藏\n    addEventListenerToWebview: function addEventListenerToWebview() {\n      var _this3 = this;\n      // webview的堆栈\n      var pages = getCurrentPages();\n      // 当前页面\n      var page = pages[pages.length - 1];\n      // 当前页面的webview实例\n      var currentWebview = page.$getAppWebview();\n      // 监听webview的显示与隐藏，从而停止或者开始动画(为了性能)\n      currentWebview.addEventListener('hide', function () {\n        _this3.webviewHide = true;\n      });\n      currentWebview.addEventListener('show', function () {\n        _this3.webviewHide = false;\n      });\n    },\n    nvueAnimate: function nvueAnimate() {\n      // nvue下，非spinner类型时才需要旋转，因为nvue的spinner类型，使用了weex的\n      // loading-indicator组件，自带旋转功能\n      this.mode !== 'spinner' && this.startAnimate();\n    },\n    // 执行nvue的animate模块动画\n    startAnimate: function startAnimate() {\n      var _this4 = this;\n      this.loading = true;\n      var ani = this.$refs.ani;\n      if (!ani) return;\n      animation.transition(ani, {\n        // 进行角度旋转\n        styles: {\n          transform: \"rotate(\".concat(this.aniAngel, \"deg)\"),\n          transformOrigin: 'center center'\n        },\n        duration: this.duration,\n        timingFunction: this.timingFunction\n        // delay: 10\n      }, function () {\n        // 每次增加360deg，为了让其重新旋转一周\n        _this4.aniAngel += 360;\n        // 动画结束后，继续循环执行动画，需要同时判断webviewHide变量\n        // nvue安卓，页面隐藏后依然会继续执行startAnimate方法\n        _this4.show && !_this4.webviewHide ? _this4.startAnimate() : _this4.loading = false;\n      });\n    }\n  }\n};\nexports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vdW5pX21vZHVsZXMvdXZpZXctdWkvY29tcG9uZW50cy91LWxvYWRpbmctaWNvbi91LWxvYWRpbmctaWNvbi52dWUiXSwibmFtZXMiOlsibmFtZSIsIm1peGlucyIsImRhdGEiLCJhcnJheTEyIiwibGVuZ3RoIiwiYW5pQW5nZWwiLCJ3ZWJ2aWV3SGlkZSIsImxvYWRpbmciLCJjb21wdXRlZCIsIm90aGVyQm9yZGVyQ29sb3IiLCJ3YXRjaCIsInNob3ciLCJzZXRUaW1lb3V0IiwibW91bnRlZCIsIm1ldGhvZHMiLCJpbml0IiwiYWRkRXZlbnRMaXN0ZW5lclRvV2VidmlldyIsImN1cnJlbnRXZWJ2aWV3IiwibnZ1ZUFuaW1hdGUiLCJzdGFydEFuaW1hdGUiLCJhbmltYXRpb24iLCJzdHlsZXMiLCJ0cmFuc2Zvcm0iLCJ0cmFuc2Zvcm1PcmlnaW4iLCJkdXJhdGlvbiIsInRpbWluZ0Z1bmN0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBNERBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBakJBLGVBa0JBO0VBQ0FBO0VBQ0FDO0VBQ0FDO0lBQ0E7TUFDQTtNQUNBO01BQ0FDO1FBQ0FDO01BQ0E7TUFDQTtNQUNBO01BQ0FDO01BQUE7TUFDQUM7TUFBQTtNQUNBQztJQUNBO0VBQ0E7O0VBQ0FDO0lBQ0E7SUFDQTtJQUNBO0lBQ0FDO01BQ0E7TUFDQTtRQUNBO01BQ0E7UUFDQTtNQUNBO01BQ0E7SUFDQTtFQUNBOztFQUNBQztJQUNBQztNQUFBO01BQ0E7O01BRUE7UUFDQUM7VUFDQTtRQUNBO01BQ0E7SUFFQTtFQUNBO0VBQ0FDO0lBQ0E7RUFDQTtFQUNBQztJQUNBQztNQUFBO01BQ0FIO1FBRUE7UUFHQTtNQUVBO0lBQ0E7SUFDQTtJQUNBSTtNQUFBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQUM7UUFDQTtNQUNBO01BQ0FBO1FBQ0E7TUFDQTtJQUNBO0lBRUFDO01BQ0E7TUFDQTtNQUNBO0lBQ0E7SUFDQTtJQUNBQztNQUFBO01BQ0E7TUFDQTtNQUNBO01BQ0FDO1FBQ0E7UUFDQUM7VUFDQUM7VUFDQUM7UUFDQTtRQUNBQztRQUNBQztRQUNBO01BQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO01BQ0E7SUFDQTtFQUVBO0FBQ0E7QUFBQSIsImZpbGUiOiIxNTQuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcblx0PHZpZXdcclxuXHRcdGNsYXNzPVwidS1sb2FkaW5nLWljb25cIlxyXG5cdFx0OnN0eWxlPVwiWyR1LmFkZFN0eWxlKGN1c3RvbVN0eWxlKV1cIlxyXG5cdFx0OmNsYXNzPVwiW3ZlcnRpY2FsICYmICd1LWxvYWRpbmctaWNvbi0tdmVydGljYWwnXVwiXHJcblx0XHR2LWlmPVwic2hvd1wiXHJcblx0PlxyXG5cdFx0PHZpZXdcclxuXHRcdFx0di1pZj1cIiF3ZWJ2aWV3SGlkZVwiXHJcblx0XHRcdGNsYXNzPVwidS1sb2FkaW5nLWljb25fX3NwaW5uZXJcIlxyXG5cdFx0XHQ6Y2xhc3M9XCJbYHUtbG9hZGluZy1pY29uX19zcGlubmVyLS0ke21vZGV9YF1cIlxyXG5cdFx0XHRyZWY9XCJhbmlcIlxyXG5cdFx0XHQ6c3R5bGU9XCJ7XHJcblx0XHRcdFx0Y29sb3I6IGNvbG9yLFxyXG5cdFx0XHRcdHdpZHRoOiAkdS5hZGRVbml0KHNpemUpLFxyXG5cdFx0XHRcdGhlaWdodDogJHUuYWRkVW5pdChzaXplKSxcclxuXHRcdFx0XHRib3JkZXJUb3BDb2xvcjogY29sb3IsXHJcblx0XHRcdFx0Ym9yZGVyQm90dG9tQ29sb3I6IG90aGVyQm9yZGVyQ29sb3IsXHJcblx0XHRcdFx0Ym9yZGVyTGVmdENvbG9yOiBvdGhlckJvcmRlckNvbG9yLFxyXG5cdFx0XHRcdGJvcmRlclJpZ2h0Q29sb3I6IG90aGVyQm9yZGVyQ29sb3IsXHJcblx0XHRcdFx0J2FuaW1hdGlvbi1kdXJhdGlvbic6IGAke2R1cmF0aW9ufW1zYCxcclxuXHRcdFx0XHQnYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbic6IG1vZGUgPT09ICdzZW1pY2lyY2xlJyB8fCBtb2RlID09PSAnY2lyY2xlJyA/IHRpbWluZ0Z1bmN0aW9uIDogJydcclxuXHRcdFx0fVwiXHJcblx0XHQ+XHJcblx0XHRcdDxibG9jayB2LWlmPVwibW9kZSA9PT0gJ3NwaW5uZXInXCI+XHJcblx0XHRcdFx0PCEtLSAjaWZuZGVmIEFQUC1OVlVFIC0tPlxyXG5cdFx0XHRcdDx2aWV3XHJcblx0XHRcdFx0XHR2LWZvcj1cIihpdGVtLCBpbmRleCkgaW4gYXJyYXkxMlwiXHJcblx0XHRcdFx0XHQ6a2V5PVwiaW5kZXhcIlxyXG5cdFx0XHRcdFx0Y2xhc3M9XCJ1LWxvYWRpbmctaWNvbl9fZG90XCJcclxuXHRcdFx0XHQ+XHJcblx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdDwhLS0gI2VuZGlmIC0tPlxyXG5cdFx0XHRcdDwhLS0gI2lmZGVmIEFQUC1OVlVFIC0tPlxyXG5cdFx0XHRcdDwhLS0g5q2k57uE5Lu25YaF6YOo5Zu+5qCH6YOo5YiG5peg5rOV6K6+572u5a696auY77yM5Y2z5L2/6YCa6L+Hd2lkdGjlkoxoZWlnaHTphY3nva7kuobkuZ/ml6DmlYggLS0+XHJcblx0XHRcdFx0PGxvYWRpbmctaW5kaWNhdG9yXHJcblx0XHRcdFx0XHR2LWlmPVwiIXdlYnZpZXdIaWRlXCJcclxuXHRcdFx0XHRcdGNsYXNzPVwidS1sb2FkaW5nLWluZGljYXRvclwiXHJcblx0XHRcdFx0XHQ6YW5pbWF0aW5nPVwidHJ1ZVwiXHJcblx0XHRcdFx0XHQ6c3R5bGU9XCJ7XHJcblx0XHRcdFx0XHRcdGNvbG9yOiBjb2xvcixcclxuXHRcdFx0XHRcdFx0d2lkdGg6ICR1LmFkZFVuaXQoc2l6ZSksXHJcblx0XHRcdFx0XHRcdGhlaWdodDogJHUuYWRkVW5pdChzaXplKVxyXG5cdFx0XHRcdFx0fVwiXHJcblx0XHRcdFx0Lz5cclxuXHRcdFx0XHQ8IS0tICNlbmRpZiAtLT5cclxuXHRcdFx0PC9ibG9jaz5cclxuXHRcdDwvdmlldz5cclxuXHRcdDx0ZXh0XHJcblx0XHRcdHYtaWY9XCJ0ZXh0XCJcclxuXHRcdFx0Y2xhc3M9XCJ1LWxvYWRpbmctaWNvbl9fdGV4dFwiXHJcblx0XHRcdDpzdHlsZT1cIntcclxuXHRcdFx0XHRmb250U2l6ZTogJHUuYWRkVW5pdCh0ZXh0U2l6ZSksXHJcblx0XHRcdFx0Y29sb3I6IHRleHRDb2xvcixcclxuXHRcdFx0fVwiXHJcblx0XHQ+e3t0ZXh0fX08L3RleHQ+XHJcblx0PC92aWV3PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuXHRpbXBvcnQgcHJvcHMgZnJvbSAnLi9wcm9wcy5qcyc7XHJcblx0Ly8gI2lmZGVmIEFQUC1OVlVFXHJcblx0Y29uc3QgYW5pbWF0aW9uID0gd2VleC5yZXF1aXJlTW9kdWxlKCdhbmltYXRpb24nKTtcclxuXHQvLyAjZW5kaWZcclxuXHQvKipcclxuXHQgKiBsb2FkaW5nIOWKoOi9veWKqOeUu1xyXG5cdCAqIEBkZXNjcmlwdGlvbiDorabmraTnu4Tku7bkuLrkuIDkuKrlsI/liqjnlLvvvIznm67liY3nlKjlnKh1Vmlld+eahGxvYWRtb3Jl5Yqg6L295pu05aSa5ZKMc3dpdGNo5byA5YWz562J57uE5Lu255qE5q2j5Zyo5Yqg6L2954q25oCB5Zy65pmv44CCXHJcblx0ICogQHR1dG9yaWFsIGh0dHBzOi8vd3d3LnV2aWV3dWkuY29tL2NvbXBvbmVudHMvbG9hZGluZy5odG1sXHJcblx0ICogQHByb3BlcnR5IHtCb29sZWFufVx0XHRcdHNob3dcdFx0XHTmmK/lkKbmmL7npLrnu4Tku7YgICjpu5jorqQgdHJ1ZSlcclxuXHQgKiBAcHJvcGVydHkge1N0cmluZ31cdFx0XHRjb2xvclx0XHRcdOWKqOeUu+a0u+WKqOWMuuWfn+eahOminOiJsu+8jOWPquWvuSBtb2RlID0gZmxvd2VyIOaooeW8j+acieaViO+8iOm7mOiupGNvbG9yWyd1LXRpcHMtY29sb3InXe+8iVxyXG5cdCAqIEBwcm9wZXJ0eSB7U3RyaW5nfVx0XHRcdHRleHRDb2xvclx0XHTmj5DnpLrmlofmnKznmoTpopzoibLvvIjpu5jorqRjb2xvclsndS10aXBzLWNvbG9yJ13vvIlcclxuXHQgKiBAcHJvcGVydHkge0Jvb2xlYW59XHRcdFx0dmVydGljYWxcdFx05paH5a2X5ZKM5Zu+5qCH5piv5ZCm5Z6C55u05o6S5YiXICjpu5jorqQgZmFsc2UgKVxyXG5cdCAqIEBwcm9wZXJ0eSB7U3RyaW5nfVx0XHRcdG1vZGVcdFx0XHTmqKHlvI/pgInmi6nvvIzop4HlrpjnvZHor7TmmI7vvIjpu5jorqQgJ2NpcmNsZScg77yJXHJcblx0ICogQHByb3BlcnR5IHtTdHJpbmcgfCBOdW1iZXJ9XHRzaXplXHRcdFx05Yqg6L295Zu+5qCH55qE5aSn5bCP77yM5Y2V5L2NcHgg77yI6buY6K6kIDI0IO+8iVxyXG5cdCAqIEBwcm9wZXJ0eSB7U3RyaW5nIHwgTnVtYmVyfVx0dGV4dFNpemVcdFx05paH5a2X5aSn5bCP77yI6buY6K6kIDE1IO+8iVxyXG5cdCAqIEBwcm9wZXJ0eSB7U3RyaW5nIHwgTnVtYmVyfVx0dGV4dFx0XHRcdOaWh+Wtl+WGheWuuSBcclxuXHQgKiBAcHJvcGVydHkge1N0cmluZ31cdFx0XHR0aW1pbmdGdW5jdGlvblx05Yqo55S75qih5byPIO+8iOm7mOiupCAnZWFzZS1pbi1vdXQnIO+8iVxyXG5cdCAqIEBwcm9wZXJ0eSB7U3RyaW5nIHwgTnVtYmVyfVx0ZHVyYXRpb25cdFx05Yqo55S75omn6KGM5ZGo5pyf5pe26Ze077yI6buY6K6kIDEyMDDvvIlcclxuXHQgKiBAcHJvcGVydHkge1N0cmluZ31cdFx0XHRpbmFjdGl2ZUNvbG9yXHRtb2RlPWNpcmNsZeaXtueahOaal+i+ueminOiJsiBcclxuXHQgKiBAcHJvcGVydHkge09iamVjdH1cdFx0XHRjdXN0b21TdHlsZVx0XHTlrprkuYnpnIDopoHnlKjliLDnmoTlpJbpg6jmoLflvI9cclxuXHQgKiBAZXhhbXBsZSA8dS1sb2FkaW5nIG1vZGU9XCJjaXJjbGVcIj48L3UtbG9hZGluZz5cclxuXHQgKi9cclxuXHRleHBvcnQgZGVmYXVsdCB7XHJcblx0XHRuYW1lOiAndS1sb2FkaW5nLWljb24nLFxyXG5cdFx0bWl4aW5zOiBbdW5pLiR1Lm1wTWl4aW4sIHVuaS4kdS5taXhpbiwgcHJvcHNdLFxyXG5cdFx0ZGF0YSgpIHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQvLyBBcnJheS5mb3Jt5Y+v5Lul6YCa6L+H5LiA5Liq5Lyq5pWw57uE5a+56LGh5Yib5bu65oyH5a6a6ZW/5bqm55qE5pWw57uEXHJcblx0XHRcdFx0Ly8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvemgtQ04vZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvQXJyYXkvZnJvbVxyXG5cdFx0XHRcdGFycmF5MTI6IEFycmF5LmZyb20oe1xyXG5cdFx0XHRcdFx0bGVuZ3RoOiAxMlxyXG5cdFx0XHRcdH0pLFxyXG5cdFx0XHRcdC8vIOi/memHjOmcgOimgeiuvue9rum7mOiupOWAvOS4ujM2MO+8jOWQpuWImeWcqOWuieWNk252dWXkuIrvvIzkvJrlu7bov5/kuIDkuKpkdXJhdGlvbuWRqOacn+WQjuaJjeaJp+ihjFxyXG5cdFx0XHRcdC8vIOWcqGlPUyBudnVl5LiK77yM5YiZ5Lya5LiA5byA5aeL6buY6K6k5omn6KGM5Lik5Liq5ZGo5pyf55qE5Yqo55S7XHJcblx0XHRcdFx0YW5pQW5nZWw6IDM2MCwgLy8g5Yqo55S75peL6L2s6KeS5bqmXHJcblx0XHRcdFx0d2Vidmlld0hpZGU6IGZhbHNlLCAvLyDnm5HlkKx3ZWJ2aWV355qE54q25oCB77yM5aaC5p6c6ZqQ6JeP5LqG6aG16Z2i77yM5YiZ5YGc5q2i5Yqo55S777yM5Lul5YWN5oCn6IO95raI6ICXXHJcblx0XHRcdFx0bG9hZGluZzogZmFsc2UsIC8vIOaYr+WQpui/kOihjOS4re+8jOmSiOWvuW52dWXkvb/nlKhcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdGNvbXB1dGVkOiB7XHJcblx0XHRcdC8vIOW9k+S4umNpcmNsZeexu+Wei+aXtu+8jOe7meWFtuWPpuWkluS4iei+ueiuvue9ruS4gOS4quabtOi9u+S4gOS6m+eahOminOiJslxyXG5cdFx0XHQvLyDkuYvmiYDku6XpnIDopoHov5nkuYjlgZrnmoTljp/lm6DmmK/vvIzmr5TlpoLniLbnu4Tku7bkvKDkuoZjb2xvcuS4uue6ouiJsu+8jOmCo+S5iOmcgOimgeWPpuWklueahOS4ieS4qui+ueS4uua1hee6ouiJslxyXG5cdFx0XHQvLyDogIzkuI3og73mmK/lm7rlrprnmoTmn5DkuIDkuKrlhbbku5bpopzoibIo5Zug5Li66L+Z5Liq5Zu65a6a55qE6aKc6Imy5Y+v6IO95rWF6JOd77yM5a+86Ie05pWI5p6c5rKh5pyJ6YKj5LmI57uG6IW76Imv5aW9KVxyXG5cdFx0XHRvdGhlckJvcmRlckNvbG9yKCkge1xyXG5cdFx0XHRcdGNvbnN0IGxpZ2h0Q29sb3IgPSB1bmkuJHUuY29sb3JHcmFkaWVudCh0aGlzLmNvbG9yLCAnI2ZmZmZmZicsIDEwMClbODBdXHJcblx0XHRcdFx0aWYgKHRoaXMubW9kZSA9PT0gJ2NpcmNsZScpIHtcclxuXHRcdFx0XHRcdHJldHVybiB0aGlzLmluYWN0aXZlQ29sb3IgPyB0aGlzLmluYWN0aXZlQ29sb3IgOiBsaWdodENvbG9yXHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdHJldHVybiAndHJhbnNwYXJlbnQnXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdC8vIHJldHVybiB0aGlzLm1vZGUgPT09ICdjaXJjbGUnID8gdGhpcy5pbmFjdGl2ZUNvbG9yID8gdGhpcy5pbmFjdGl2ZUNvbG9yIDogbGlnaHRDb2xvciA6ICd0cmFuc3BhcmVudCdcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdHdhdGNoOiB7XHJcblx0XHRcdHNob3cobikge1xyXG5cdFx0XHRcdC8vIG52dWXkuK3vvIxzaG935Li6dHJ1Ze+8jOS4lOS4uumdnmxvYWRpbmfnirbmgIHvvIzlsLHph43mlrDmiafooYzliqjnlLvmqKHlnZdcclxuXHRcdFx0XHQvLyAjaWZkZWYgQVBQLU5WVUVcclxuXHRcdFx0XHRpZiAobiAmJiAhdGhpcy5sb2FkaW5nKSB7XHJcblx0XHRcdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdFx0XHRcdFx0dGhpcy5zdGFydEFuaW1hdGUoKVxyXG5cdFx0XHRcdFx0fSwgMzApXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdC8vICNlbmRpZlxyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0bW91bnRlZCgpIHtcclxuXHRcdFx0dGhpcy5pbml0KClcclxuXHRcdH0sXHJcblx0XHRtZXRob2RzOiB7XHJcblx0XHRcdGluaXQoKSB7XHJcblx0XHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XHJcblx0XHRcdFx0XHQvLyAjaWZkZWYgQVBQLU5WVUVcclxuXHRcdFx0XHRcdHRoaXMuc2hvdyAmJiB0aGlzLm52dWVBbmltYXRlKClcclxuXHRcdFx0XHRcdC8vICNlbmRpZlxyXG5cdFx0XHRcdFx0Ly8gI2lmZGVmIEFQUC1QTFVTIFxyXG5cdFx0XHRcdFx0dGhpcy5zaG93ICYmIHRoaXMuYWRkRXZlbnRMaXN0ZW5lclRvV2VidmlldygpXHJcblx0XHRcdFx0XHQvLyAjZW5kaWZcclxuXHRcdFx0XHR9LCAyMClcclxuXHRcdFx0fSxcclxuXHRcdFx0Ly8g55uR5ZCsd2Vidmlld+eahOaYvuekuuS4jumakOiXj1xyXG5cdFx0XHRhZGRFdmVudExpc3RlbmVyVG9XZWJ2aWV3KCkge1xyXG5cdFx0XHRcdC8vIHdlYnZpZXfnmoTloIbmoIhcclxuXHRcdFx0XHRjb25zdCBwYWdlcyA9IGdldEN1cnJlbnRQYWdlcygpXHJcblx0XHRcdFx0Ly8g5b2T5YmN6aG16Z2iXHJcblx0XHRcdFx0Y29uc3QgcGFnZSA9IHBhZ2VzW3BhZ2VzLmxlbmd0aCAtIDFdXHJcblx0XHRcdFx0Ly8g5b2T5YmN6aG16Z2i55qEd2Vidmlld+WunuS+i1xyXG5cdFx0XHRcdGNvbnN0IGN1cnJlbnRXZWJ2aWV3ID0gcGFnZS4kZ2V0QXBwV2VidmlldygpXHJcblx0XHRcdFx0Ly8g55uR5ZCsd2Vidmlld+eahOaYvuekuuS4jumakOiXj++8jOS7juiAjOWBnOatouaIluiAheW8gOWni+WKqOeUuyjkuLrkuobmgKfog70pXHJcblx0XHRcdFx0Y3VycmVudFdlYnZpZXcuYWRkRXZlbnRMaXN0ZW5lcignaGlkZScsICgpID0+IHtcclxuXHRcdFx0XHRcdHRoaXMud2Vidmlld0hpZGUgPSB0cnVlXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0XHRjdXJyZW50V2Vidmlldy5hZGRFdmVudExpc3RlbmVyKCdzaG93JywgKCkgPT4ge1xyXG5cdFx0XHRcdFx0dGhpcy53ZWJ2aWV3SGlkZSA9IGZhbHNlXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0fSxcclxuXHRcdFx0Ly8gI2lmZGVmIEFQUC1OVlVFXHJcblx0XHRcdG52dWVBbmltYXRlKCkge1xyXG5cdFx0XHRcdC8vIG52dWXkuIvvvIzpnZ5zcGlubmVy57G75Z6L5pe25omN6ZyA6KaB5peL6L2s77yM5Zug5Li6bnZ1ZeeahHNwaW5uZXLnsbvlnovvvIzkvb/nlKjkuoZ3ZWV455qEXHJcblx0XHRcdFx0Ly8gbG9hZGluZy1pbmRpY2F0b3Lnu4Tku7bvvIzoh6rluKbml4vovazlip/og71cclxuXHRcdFx0XHR0aGlzLm1vZGUgIT09ICdzcGlubmVyJyAmJiB0aGlzLnN0YXJ0QW5pbWF0ZSgpXHJcblx0XHRcdH0sXHJcblx0XHRcdC8vIOaJp+ihjG52dWXnmoRhbmltYXRl5qih5Z2X5Yqo55S7XHJcblx0XHRcdHN0YXJ0QW5pbWF0ZSgpIHtcclxuXHRcdFx0XHR0aGlzLmxvYWRpbmcgPSB0cnVlXHJcblx0XHRcdFx0Y29uc3QgYW5pID0gdGhpcy4kcmVmcy5hbmlcclxuXHRcdFx0XHRpZiAoIWFuaSkgcmV0dXJuXHJcblx0XHRcdFx0YW5pbWF0aW9uLnRyYW5zaXRpb24oYW5pLCB7XHJcblx0XHRcdFx0XHQvLyDov5vooYzop5Lluqbml4vovaxcclxuXHRcdFx0XHRcdHN0eWxlczoge1xyXG5cdFx0XHRcdFx0XHR0cmFuc2Zvcm06IGByb3RhdGUoJHt0aGlzLmFuaUFuZ2VsfWRlZylgLFxyXG5cdFx0XHRcdFx0XHR0cmFuc2Zvcm1PcmlnaW46ICdjZW50ZXIgY2VudGVyJ1xyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdGR1cmF0aW9uOiB0aGlzLmR1cmF0aW9uLFxyXG5cdFx0XHRcdFx0dGltaW5nRnVuY3Rpb246IHRoaXMudGltaW5nRnVuY3Rpb24sXHJcblx0XHRcdFx0XHQvLyBkZWxheTogMTBcclxuXHRcdFx0XHR9LCAoKSA9PiB7XHJcblx0XHRcdFx0XHQvLyDmr4/mrKHlop7liqAzNjBkZWfvvIzkuLrkuoborqnlhbbph43mlrDml4vovazkuIDlkahcclxuXHRcdFx0XHRcdHRoaXMuYW5pQW5nZWwgKz0gMzYwXHJcblx0XHRcdFx0XHQvLyDliqjnlLvnu5PmnZ/lkI7vvIznu6fnu63lvqrnjq/miafooYzliqjnlLvvvIzpnIDopoHlkIzml7bliKTmlq13ZWJ2aWV3SGlkZeWPmOmHj1xyXG5cdFx0XHRcdFx0Ly8gbnZ1ZeWuieWNk++8jOmhtemdoumakOiXj+WQjuS+neeEtuS8mue7p+e7reaJp+ihjHN0YXJ0QW5pbWF0ZeaWueazlVxyXG5cdFx0XHRcdFx0dGhpcy5zaG93ICYmICF0aGlzLndlYnZpZXdIaWRlID8gdGhpcy5zdGFydEFuaW1hdGUoKSA6IHRoaXMubG9hZGluZyA9IGZhbHNlXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0fVxyXG5cdFx0XHQvLyAjZW5kaWZcclxuXHRcdH1cclxuXHR9XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIGxhbmc9XCJzY3NzXCIgc2NvcGVkPlxyXG5cdEBpbXBvcnQgXCIuLi8uLi9saWJzL2Nzcy9jb21wb25lbnRzLnNjc3NcIjtcclxuXHQkdS1sb2FkaW5nLWljb24tY29sb3I6ICNjOGM5Y2MgIWRlZmF1bHQ7XHJcblx0JHUtbG9hZGluZy1pY29uLXRleHQtbWFyZ2luLWxlZnQ6NHB4ICFkZWZhdWx0O1xyXG5cdCR1LWxvYWRpbmctaWNvbi10ZXh0LWNvbG9yOiR1LWNvbnRlbnQtY29sb3IgIWRlZmF1bHQ7XHJcblx0JHUtbG9hZGluZy1pY29uLXRleHQtZm9udC1zaXplOjE0cHggIWRlZmF1bHQ7XHJcblx0JHUtbG9hZGluZy1pY29uLXRleHQtbGluZS1oZWlnaHQ6MjBweCAhZGVmYXVsdDtcclxuXHQkdS1sb2FkaW5nLXdpZHRoOjMwcHggIWRlZmF1bHQ7XHJcblx0JHUtbG9hZGluZy1oZWlnaHQ6MzBweCAhZGVmYXVsdDtcclxuXHQkdS1sb2FkaW5nLW1heC13aWR0aDoxMDAlICFkZWZhdWx0O1xyXG5cdCR1LWxvYWRpbmctbWF4LWhlaWdodDoxMDAlICFkZWZhdWx0O1xyXG5cdCR1LWxvYWRpbmctc2VtaWNpcmNsZS1ib3JkZXItd2lkdGg6IDJweCAhZGVmYXVsdDtcclxuXHQkdS1sb2FkaW5nLXNlbWljaXJjbGUtYm9yZGVyLWNvbG9yOnRyYW5zcGFyZW50ICFkZWZhdWx0O1xyXG5cdCR1LWxvYWRpbmctc2VtaWNpcmNsZS1ib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTAwcHggIWRlZmF1bHQ7XHJcblx0JHUtbG9hZGluZy1zZW1pY2lyY2xlLWJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEwMHB4ICFkZWZhdWx0O1xyXG5cdCR1LWxvYWRpbmctc2VtaWNpcmNsZS1ib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxMDBweCAhZGVmYXVsdDtcclxuXHQkdS1sb2FkaW5nLXNlbWljaXJjbGUtYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdTogMTAwcHggIWRlZmF1bHQ7XHJcblx0JHUtbG9hZGluZy1zZW1pY2lyY2xlLWJvcmRlci1zdHlsZTogc29saWQgIWRlZmF1bHQ7XHJcblx0JHUtbG9hZGluZy1jaXJjbGUtYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEwMHB4ICFkZWZhdWx0O1xyXG5cdCR1LWxvYWRpbmctY2lyY2xlLWJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEwMHB4ICFkZWZhdWx0O1xyXG5cdCR1LWxvYWRpbmctY2lyY2xlLWJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDEwMHB4ICFkZWZhdWx0O1xyXG5cdCR1LWxvYWRpbmctY2lyY2xlLWJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXU6IDEwMHB4ICFkZWZhdWx0O1xyXG5cdCR1LWxvYWRpbmctY2lyY2xlLWJvcmRlci13aWR0aDoycHggIWRlZmF1bHQ7XHJcblx0JHUtbG9hZGluZy1jaXJjbGUtYm9yZGVyLXRvcC1jb2xvcjojZTVlNWU1ICFkZWZhdWx0O1xyXG5cdCR1LWxvYWRpbmctY2lyY2xlLWJvcmRlci1yaWdodC1jb2xvcjokdS1sb2FkaW5nLWNpcmNsZS1ib3JkZXItdG9wLWNvbG9yICFkZWZhdWx0O1xyXG5cdCR1LWxvYWRpbmctY2lyY2xlLWJvcmRlci1ib3R0b20tY29sb3I6JHUtbG9hZGluZy1jaXJjbGUtYm9yZGVyLXRvcC1jb2xvciAhZGVmYXVsdDtcclxuXHQkdS1sb2FkaW5nLWNpcmNsZS1ib3JkZXItbGVmdC1jb2xvcjokdS1sb2FkaW5nLWNpcmNsZS1ib3JkZXItdG9wLWNvbG9yICFkZWZhdWx0O1xyXG5cdCR1LWxvYWRpbmctY2lyY2xlLWJvcmRlci1zdHlsZTpzb2xpZCAhZGVmYXVsdDtcclxuXHQkdS1sb2FkaW5nLWljb24taG9zdC1mb250LXNpemU6MHB4ICFkZWZhdWx0O1xyXG5cdCR1LWxvYWRpbmctaWNvbi1ob3N0LWxpbmUtaGVpZ2h0OjEgIWRlZmF1bHQ7XHJcblx0JHUtbG9hZGluZy1pY29uLXZlcnRpY2FsLW1hcmdpbjo2cHggMCAwICFkZWZhdWx0O1xyXG5cdCR1LWxvYWRpbmctaWNvbi1kb3QtdG9wOjAgIWRlZmF1bHQ7XHJcblx0JHUtbG9hZGluZy1pY29uLWRvdC1sZWZ0OjAgIWRlZmF1bHQ7XHJcblx0JHUtbG9hZGluZy1pY29uLWRvdC13aWR0aDoxMDAlICFkZWZhdWx0O1xyXG5cdCR1LWxvYWRpbmctaWNvbi1kb3QtaGVpZ2h0OjEwMCUgIWRlZmF1bHQ7XHJcblx0JHUtbG9hZGluZy1pY29uLWRvdC1iZWZvcmUtd2lkdGg6MnB4ICFkZWZhdWx0O1xyXG5cdCR1LWxvYWRpbmctaWNvbi1kb3QtYmVmb3JlLWhlaWdodDoyNSUgIWRlZmF1bHQ7XHJcblx0JHUtbG9hZGluZy1pY29uLWRvdC1iZWZvcmUtbWFyZ2luOjAgYXV0byAhZGVmYXVsdDtcclxuXHQkdS1sb2FkaW5nLWljb24tZG90LWJlZm9yZS1iYWNrZ3JvdW5kLWNvbG9yOmN1cnJlbnRDb2xvciAhZGVmYXVsdDtcclxuXHQkdS1sb2FkaW5nLWljb24tZG90LWJlZm9yZS1ib3JkZXItcmFkaXVzOjQwJSAhZGVmYXVsdDtcclxuXHJcblx0LnUtbG9hZGluZy1pY29uIHtcclxuXHRcdC8qICNpZm5kZWYgQVBQLU5WVUUgKi9cclxuXHRcdC8vIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG5cdFx0LyogI2VuZGlmICovXHJcblx0XHRmbGV4LWRpcmVjdGlvbjogcm93O1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdFx0Y29sb3I6ICR1LWxvYWRpbmctaWNvbi1jb2xvcjtcclxuXHJcblx0XHQmX190ZXh0IHtcclxuXHRcdFx0bWFyZ2luLWxlZnQ6ICR1LWxvYWRpbmctaWNvbi10ZXh0LW1hcmdpbi1sZWZ0O1xyXG5cdFx0XHRjb2xvcjogJHUtbG9hZGluZy1pY29uLXRleHQtY29sb3I7XHJcblx0XHRcdGZvbnQtc2l6ZTogJHUtbG9hZGluZy1pY29uLXRleHQtZm9udC1zaXplO1xyXG5cdFx0XHRsaW5lLWhlaWdodDogJHUtbG9hZGluZy1pY29uLXRleHQtbGluZS1oZWlnaHQ7XHJcblx0XHR9XHJcblxyXG5cdFx0Jl9fc3Bpbm5lciB7XHJcblx0XHRcdHdpZHRoOiAkdS1sb2FkaW5nLXdpZHRoO1xyXG5cdFx0XHRoZWlnaHQ6ICR1LWxvYWRpbmctaGVpZ2h0O1xyXG5cdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0XHRcdC8qICNpZm5kZWYgQVBQLU5WVUUgKi9cclxuXHRcdFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHRcdFx0bWF4LXdpZHRoOiAkdS1sb2FkaW5nLW1heC13aWR0aDtcclxuXHRcdFx0bWF4LWhlaWdodDogJHUtbG9hZGluZy1tYXgtaGVpZ2h0O1xyXG5cdFx0XHRhbmltYXRpb246IHUtcm90YXRlIDFzIGxpbmVhciBpbmZpbml0ZTtcclxuXHRcdFx0LyogI2VuZGlmICovXHJcblx0XHR9XHJcblxyXG5cdFx0Jl9fc3Bpbm5lci0tc2VtaWNpcmNsZSB7XHJcblx0XHRcdGJvcmRlci13aWR0aDogJHUtbG9hZGluZy1zZW1pY2lyY2xlLWJvcmRlci13aWR0aDtcclxuXHRcdFx0Ym9yZGVyLWNvbG9yOiAkdS1sb2FkaW5nLXNlbWljaXJjbGUtYm9yZGVyLWNvbG9yO1xyXG5cdFx0XHRib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogJHUtbG9hZGluZy1zZW1pY2lyY2xlLWJvcmRlci10b3AtcmlnaHQtcmFkaXVzO1xyXG5cdFx0XHRib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAkdS1sb2FkaW5nLXNlbWljaXJjbGUtYm9yZGVyLXRvcC1sZWZ0LXJhZGl1cztcclxuXHRcdFx0Ym9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogJHUtbG9hZGluZy1zZW1pY2lyY2xlLWJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM7XHJcblx0XHRcdGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAkdS1sb2FkaW5nLXNlbWljaXJjbGUtYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdTtcclxuXHRcdFx0Ym9yZGVyLXN0eWxlOiAkdS1sb2FkaW5nLXNlbWljaXJjbGUtYm9yZGVyLXN0eWxlO1xyXG5cdFx0fVxyXG5cclxuXHRcdCZfX3NwaW5uZXItLWNpcmNsZSB7XHJcblx0XHRcdGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAkdS1sb2FkaW5nLWNpcmNsZS1ib3JkZXItdG9wLXJpZ2h0LXJhZGl1cztcclxuXHRcdFx0Ym9yZGVyLXRvcC1sZWZ0LXJhZGl1czogJHUtbG9hZGluZy1jaXJjbGUtYm9yZGVyLXRvcC1sZWZ0LXJhZGl1cztcclxuXHRcdFx0Ym9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogJHUtbG9hZGluZy1jaXJjbGUtYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1cztcclxuXHRcdFx0Ym9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6ICR1LWxvYWRpbmctY2lyY2xlLWJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXU7XHJcblx0XHRcdGJvcmRlci13aWR0aDogJHUtbG9hZGluZy1jaXJjbGUtYm9yZGVyLXdpZHRoO1xyXG5cdFx0XHRib3JkZXItdG9wLWNvbG9yOiAkdS1sb2FkaW5nLWNpcmNsZS1ib3JkZXItdG9wLWNvbG9yO1xyXG5cdFx0XHRib3JkZXItcmlnaHQtY29sb3I6ICR1LWxvYWRpbmctY2lyY2xlLWJvcmRlci1yaWdodC1jb2xvcjtcclxuXHRcdFx0Ym9yZGVyLWJvdHRvbS1jb2xvcjogJHUtbG9hZGluZy1jaXJjbGUtYm9yZGVyLWJvdHRvbS1jb2xvcjtcclxuXHRcdFx0Ym9yZGVyLWxlZnQtY29sb3I6ICR1LWxvYWRpbmctY2lyY2xlLWJvcmRlci1sZWZ0LWNvbG9yO1xyXG5cdFx0XHRib3JkZXItc3R5bGU6ICR1LWxvYWRpbmctY2lyY2xlLWJvcmRlci1zdHlsZTtcclxuXHRcdH1cclxuXHJcblx0XHQmLS12ZXJ0aWNhbCB7XHJcblx0XHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW5cclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdC8qICNpZm5kZWYgQVBQLU5WVUUgKi9cclxuXHQ6aG9zdCB7XHJcblx0XHRmb250LXNpemU6ICR1LWxvYWRpbmctaWNvbi1ob3N0LWZvbnQtc2l6ZTtcclxuXHRcdGxpbmUtaGVpZ2h0OiAkdS1sb2FkaW5nLWljb24taG9zdC1saW5lLWhlaWdodDtcclxuXHR9XHJcblxyXG5cdC51LWxvYWRpbmctaWNvbiB7XHJcblx0XHQmX19zcGlubmVyLS1zcGlubmVyIHtcclxuXHRcdFx0YW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogc3RlcHMoMTIpXHJcblx0XHR9XHJcblxyXG5cdFx0Jl9fdGV4dDplbXB0eSB7XHJcblx0XHRcdGRpc3BsYXk6IG5vbmVcclxuXHRcdH1cclxuXHJcblx0XHQmLS12ZXJ0aWNhbCAmX190ZXh0IHtcclxuXHRcdFx0bWFyZ2luOiAkdS1sb2FkaW5nLWljb24tdmVydGljYWwtbWFyZ2luO1xyXG5cdFx0XHRjb2xvcjogJHUtY29udGVudC1jb2xvcjtcclxuXHRcdH1cclxuXHJcblx0XHQmX19kb3Qge1xyXG5cdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHRcdHRvcDogJHUtbG9hZGluZy1pY29uLWRvdC10b3A7XHJcblx0XHRcdGxlZnQ6ICR1LWxvYWRpbmctaWNvbi1kb3QtbGVmdDtcclxuXHRcdFx0d2lkdGg6ICR1LWxvYWRpbmctaWNvbi1kb3Qtd2lkdGg7XHJcblx0XHRcdGhlaWdodDogJHUtbG9hZGluZy1pY29uLWRvdC1oZWlnaHQ7XHJcblxyXG5cdFx0XHQmOmJlZm9yZSB7XHJcblx0XHRcdFx0ZGlzcGxheTogYmxvY2s7XHJcblx0XHRcdFx0d2lkdGg6ICR1LWxvYWRpbmctaWNvbi1kb3QtYmVmb3JlLXdpZHRoO1xyXG5cdFx0XHRcdGhlaWdodDogJHUtbG9hZGluZy1pY29uLWRvdC1iZWZvcmUtaGVpZ2h0O1xyXG5cdFx0XHRcdG1hcmdpbjogJHUtbG9hZGluZy1pY29uLWRvdC1iZWZvcmUtbWFyZ2luO1xyXG5cdFx0XHRcdGJhY2tncm91bmQtY29sb3I6ICR1LWxvYWRpbmctaWNvbi1kb3QtYmVmb3JlLWJhY2tncm91bmQtY29sb3I7XHJcblx0XHRcdFx0Ym9yZGVyLXJhZGl1czogJHUtbG9hZGluZy1pY29uLWRvdC1iZWZvcmUtYm9yZGVyLXJhZGl1cztcclxuXHRcdFx0XHRjb250ZW50OiBcIiBcIlxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRAZm9yICRpIGZyb20gMSB0aHJvdWdoIDEyIHtcclxuXHRcdC51LWxvYWRpbmctaWNvbl9fZG90Om50aC1vZi10eXBlKCN7JGl9KSB7XHJcblx0XHRcdHRyYW5zZm9ybTogcm90YXRlKCRpICogMzBkZWcpO1xyXG5cdFx0XHRvcGFjaXR5OiAxIC0gMC4wNjI1ICogKCRpIC0gMSk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRAa2V5ZnJhbWVzIHUtcm90YXRlIHtcclxuXHRcdDAlIHtcclxuXHRcdFx0dHJhbnNmb3JtOiByb3RhdGUoMGRlZylcclxuXHRcdH1cclxuXHJcblx0XHR0byB7XHJcblx0XHRcdHRyYW5zZm9ybTogcm90YXRlKDF0dXJuKVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0LyogI2VuZGlmICovXHJcbjwvc3R5bGU+XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///154\n");

/***/ }),

/***/ 155:
/*!********************************************************************************************************!*\
  !*** /Users/tongjie/Desktop/QNRTC-Uniapp/demo/uni_modules/uview-ui/components/u-loading-icon/props.js ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\nvar _default = {\n  props: {\n    // 是否显示组件\n    show: {\n      type: Boolean,\n      default: uni.$u.props.loadingIcon.show\n    },\n    // 颜色\n    color: {\n      type: String,\n      default: uni.$u.props.loadingIcon.color\n    },\n    // 提示文字颜色\n    textColor: {\n      type: String,\n      default: uni.$u.props.loadingIcon.textColor\n    },\n    // 文字和图标是否垂直排列\n    vertical: {\n      type: Boolean,\n      default: uni.$u.props.loadingIcon.vertical\n    },\n    // 模式选择，circle-圆形，spinner-花朵形，semicircle-半圆形\n    mode: {\n      type: String,\n      default: uni.$u.props.loadingIcon.mode\n    },\n    // 图标大小，单位默认px\n    size: {\n      type: [String, Number],\n      default: uni.$u.props.loadingIcon.size\n    },\n    // 文字大小\n    textSize: {\n      type: [String, Number],\n      default: uni.$u.props.loadingIcon.textSize\n    },\n    // 文字内容\n    text: {\n      type: [String, Number],\n      default: uni.$u.props.loadingIcon.text\n    },\n    // 动画模式\n    timingFunction: {\n      type: String,\n      default: uni.$u.props.loadingIcon.timingFunction\n    },\n    // 动画执行周期时间\n    duration: {\n      type: [String, Number],\n      default: uni.$u.props.loadingIcon.duration\n    },\n    // mode=circle时的暗边颜色\n    inactiveColor: {\n      type: String,\n      default: uni.$u.props.loadingIcon.inactiveColor\n    }\n  }\n};\nexports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vdW5pX21vZHVsZXMvdXZpZXctdWkvY29tcG9uZW50cy91LWxvYWRpbmctaWNvbi9wcm9wcy5qcyJdLCJuYW1lcyI6WyJwcm9wcyIsInNob3ciLCJ0eXBlIiwiQm9vbGVhbiIsImRlZmF1bHQiLCJ1bmkiLCIkdSIsImxvYWRpbmdJY29uIiwiY29sb3IiLCJTdHJpbmciLCJ0ZXh0Q29sb3IiLCJ2ZXJ0aWNhbCIsIm1vZGUiLCJzaXplIiwiTnVtYmVyIiwidGV4dFNpemUiLCJ0ZXh0IiwidGltaW5nRnVuY3Rpb24iLCJkdXJhdGlvbiIsImluYWN0aXZlQ29sb3IiXSwibWFwcGluZ3MiOiI7Ozs7OztlQUFlO0VBQ1hBLEtBQUssRUFBRTtJQUNIO0lBQ0FDLElBQUksRUFBRTtNQUNGQyxJQUFJLEVBQUVDLE9BQU87TUFDYkMsT0FBTyxFQUFFQyxHQUFHLENBQUNDLEVBQUUsQ0FBQ04sS0FBSyxDQUFDTyxXQUFXLENBQUNOO0lBQ3RDLENBQUM7SUFDRDtJQUNBTyxLQUFLLEVBQUU7TUFDSE4sSUFBSSxFQUFFTyxNQUFNO01BQ1pMLE9BQU8sRUFBRUMsR0FBRyxDQUFDQyxFQUFFLENBQUNOLEtBQUssQ0FBQ08sV0FBVyxDQUFDQztJQUN0QyxDQUFDO0lBQ0Q7SUFDQUUsU0FBUyxFQUFFO01BQ1BSLElBQUksRUFBRU8sTUFBTTtNQUNaTCxPQUFPLEVBQUVDLEdBQUcsQ0FBQ0MsRUFBRSxDQUFDTixLQUFLLENBQUNPLFdBQVcsQ0FBQ0c7SUFDdEMsQ0FBQztJQUNEO0lBQ0FDLFFBQVEsRUFBRTtNQUNOVCxJQUFJLEVBQUVDLE9BQU87TUFDYkMsT0FBTyxFQUFFQyxHQUFHLENBQUNDLEVBQUUsQ0FBQ04sS0FBSyxDQUFDTyxXQUFXLENBQUNJO0lBQ3RDLENBQUM7SUFDRDtJQUNBQyxJQUFJLEVBQUU7TUFDRlYsSUFBSSxFQUFFTyxNQUFNO01BQ1pMLE9BQU8sRUFBRUMsR0FBRyxDQUFDQyxFQUFFLENBQUNOLEtBQUssQ0FBQ08sV0FBVyxDQUFDSztJQUN0QyxDQUFDO0lBQ0Q7SUFDQUMsSUFBSSxFQUFFO01BQ0ZYLElBQUksRUFBRSxDQUFDTyxNQUFNLEVBQUVLLE1BQU0sQ0FBQztNQUN0QlYsT0FBTyxFQUFFQyxHQUFHLENBQUNDLEVBQUUsQ0FBQ04sS0FBSyxDQUFDTyxXQUFXLENBQUNNO0lBQ3RDLENBQUM7SUFDRDtJQUNBRSxRQUFRLEVBQUU7TUFDTmIsSUFBSSxFQUFFLENBQUNPLE1BQU0sRUFBRUssTUFBTSxDQUFDO01BQ3RCVixPQUFPLEVBQUVDLEdBQUcsQ0FBQ0MsRUFBRSxDQUFDTixLQUFLLENBQUNPLFdBQVcsQ0FBQ1E7SUFDdEMsQ0FBQztJQUNEO0lBQ0FDLElBQUksRUFBRTtNQUNGZCxJQUFJLEVBQUUsQ0FBQ08sTUFBTSxFQUFFSyxNQUFNLENBQUM7TUFDdEJWLE9BQU8sRUFBRUMsR0FBRyxDQUFDQyxFQUFFLENBQUNOLEtBQUssQ0FBQ08sV0FBVyxDQUFDUztJQUN0QyxDQUFDO0lBQ0Q7SUFDQUMsY0FBYyxFQUFFO01BQ1pmLElBQUksRUFBRU8sTUFBTTtNQUNaTCxPQUFPLEVBQUVDLEdBQUcsQ0FBQ0MsRUFBRSxDQUFDTixLQUFLLENBQUNPLFdBQVcsQ0FBQ1U7SUFDdEMsQ0FBQztJQUNEO0lBQ0FDLFFBQVEsRUFBRTtNQUNOaEIsSUFBSSxFQUFFLENBQUNPLE1BQU0sRUFBRUssTUFBTSxDQUFDO01BQ3RCVixPQUFPLEVBQUVDLEdBQUcsQ0FBQ0MsRUFBRSxDQUFDTixLQUFLLENBQUNPLFdBQVcsQ0FBQ1c7SUFDdEMsQ0FBQztJQUNEO0lBQ0FDLGFBQWEsRUFBRTtNQUNYakIsSUFBSSxFQUFFTyxNQUFNO01BQ1pMLE9BQU8sRUFBRUMsR0FBRyxDQUFDQyxFQUFFLENBQUNOLEtBQUssQ0FBQ08sV0FBVyxDQUFDWTtJQUN0QztFQUNKO0FBQ0osQ0FBQztBQUFBIiwiZmlsZSI6IjE1NS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IHtcbiAgICBwcm9wczoge1xuICAgICAgICAvLyDmmK/lkKbmmL7npLrnu4Tku7ZcbiAgICAgICAgc2hvdzoge1xuICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgICAgIGRlZmF1bHQ6IHVuaS4kdS5wcm9wcy5sb2FkaW5nSWNvbi5zaG93XG4gICAgICAgIH0sXG4gICAgICAgIC8vIOminOiJslxuICAgICAgICBjb2xvcjoge1xuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgZGVmYXVsdDogdW5pLiR1LnByb3BzLmxvYWRpbmdJY29uLmNvbG9yXG4gICAgICAgIH0sXG4gICAgICAgIC8vIOaPkOekuuaWh+Wtl+minOiJslxuICAgICAgICB0ZXh0Q29sb3I6IHtcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICAgIGRlZmF1bHQ6IHVuaS4kdS5wcm9wcy5sb2FkaW5nSWNvbi50ZXh0Q29sb3JcbiAgICAgICAgfSxcbiAgICAgICAgLy8g5paH5a2X5ZKM5Zu+5qCH5piv5ZCm5Z6C55u05o6S5YiXXG4gICAgICAgIHZlcnRpY2FsOiB7XG4gICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICAgICAgZGVmYXVsdDogdW5pLiR1LnByb3BzLmxvYWRpbmdJY29uLnZlcnRpY2FsXG4gICAgICAgIH0sXG4gICAgICAgIC8vIOaooeW8j+mAieaLqe+8jGNpcmNsZS3lnIblvaLvvIxzcGlubmVyLeiKseacteW9ou+8jHNlbWljaXJjbGUt5Y2K5ZyG5b2iXG4gICAgICAgIG1vZGU6IHtcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICAgIGRlZmF1bHQ6IHVuaS4kdS5wcm9wcy5sb2FkaW5nSWNvbi5tb2RlXG4gICAgICAgIH0sXG4gICAgICAgIC8vIOWbvuagh+Wkp+Wwj++8jOWNleS9jem7mOiupHB4XG4gICAgICAgIHNpemU6IHtcbiAgICAgICAgICAgIHR5cGU6IFtTdHJpbmcsIE51bWJlcl0sXG4gICAgICAgICAgICBkZWZhdWx0OiB1bmkuJHUucHJvcHMubG9hZGluZ0ljb24uc2l6ZVxuICAgICAgICB9LFxuICAgICAgICAvLyDmloflrZflpKflsI9cbiAgICAgICAgdGV4dFNpemU6IHtcbiAgICAgICAgICAgIHR5cGU6IFtTdHJpbmcsIE51bWJlcl0sXG4gICAgICAgICAgICBkZWZhdWx0OiB1bmkuJHUucHJvcHMubG9hZGluZ0ljb24udGV4dFNpemVcbiAgICAgICAgfSxcbiAgICAgICAgLy8g5paH5a2X5YaF5a65XG4gICAgICAgIHRleHQ6IHtcbiAgICAgICAgICAgIHR5cGU6IFtTdHJpbmcsIE51bWJlcl0sXG4gICAgICAgICAgICBkZWZhdWx0OiB1bmkuJHUucHJvcHMubG9hZGluZ0ljb24udGV4dFxuICAgICAgICB9LFxuICAgICAgICAvLyDliqjnlLvmqKHlvI9cbiAgICAgICAgdGltaW5nRnVuY3Rpb246IHtcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICAgIGRlZmF1bHQ6IHVuaS4kdS5wcm9wcy5sb2FkaW5nSWNvbi50aW1pbmdGdW5jdGlvblxuICAgICAgICB9LFxuICAgICAgICAvLyDliqjnlLvmiafooYzlkajmnJ/ml7bpl7RcbiAgICAgICAgZHVyYXRpb246IHtcbiAgICAgICAgICAgIHR5cGU6IFtTdHJpbmcsIE51bWJlcl0sXG4gICAgICAgICAgICBkZWZhdWx0OiB1bmkuJHUucHJvcHMubG9hZGluZ0ljb24uZHVyYXRpb25cbiAgICAgICAgfSxcbiAgICAgICAgLy8gbW9kZT1jaXJjbGXml7bnmoTmmpfovrnpopzoibJcbiAgICAgICAgaW5hY3RpdmVDb2xvcjoge1xuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgZGVmYXVsdDogdW5pLiR1LnByb3BzLmxvYWRpbmdJY29uLmluYWN0aXZlQ29sb3JcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///155\n");

/***/ }),

/***/ 156:
/*!****************************************************************************************************************************************************************************!*\
  !*** /Users/tongjie/Desktop/QNRTC-Uniapp/demo/uni_modules/uview-ui/components/u-loading-icon/u-loading-icon.vue?vue&type=style&index=0&id=0fe228ae&lang=scss&scoped=true& ***!
  \****************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_11_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_11_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_u_loading_icon_vue_vue_type_style_index_0_id_0fe228ae_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--11-oneOf-0-1!../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--11-oneOf-0-2!../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--11-oneOf-0-3!../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--11-oneOf-0-4!../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./u-loading-icon.vue?vue&type=style&index=0&id=0fe228ae&lang=scss&scoped=true& */ 157);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_11_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_11_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_u_loading_icon_vue_vue_type_style_index_0_id_0fe228ae_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_11_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_11_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_u_loading_icon_vue_vue_type_style_index_0_id_0fe228ae_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_11_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_11_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_u_loading_icon_vue_vue_type_style_index_0_id_0fe228ae_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_11_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_11_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_u_loading_icon_vue_vue_type_style_index_0_id_0fe228ae_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_11_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_11_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_u_loading_icon_vue_vue_type_style_index_0_id_0fe228ae_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 157:
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--11-oneOf-0-1!./node_modules/postcss-loader/src??ref--11-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--11-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--11-oneOf-0-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!/Users/tongjie/Desktop/QNRTC-Uniapp/demo/uni_modules/uview-ui/components/u-loading-icon/u-loading-icon.vue?vue&type=style&index=0&id=0fe228ae&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  ".u-loading-icon": {
    "": {
      "flexDirection": [
        "row",
        0,
        0,
        16
      ],
      "alignItems": [
        "center",
        0,
        0,
        16
      ],
      "justifyContent": [
        "center",
        0,
        0,
        16
      ],
      "color": [
        "#c8c9cc",
        0,
        0,
        16
      ]
    }
  },
  ".u-loading-icon__text": {
    "": {
      "marginLeft": [
        "4",
        0,
        0,
        17
      ],
      "color": [
        "#606266",
        0,
        0,
        17
      ],
      "fontSize": [
        "14",
        0,
        0,
        17
      ],
      "lineHeight": [
        "20",
        0,
        0,
        17
      ]
    }
  },
  ".u-loading-icon__spinner": {
    "": {
      "width": [
        "30",
        0,
        0,
        18
      ],
      "height": [
        "30",
        0,
        0,
        18
      ],
      "position": [
        "relative",
        0,
        0,
        18
      ]
    }
  },
  ".u-loading-icon__spinner--semicircle": {
    "": {
      "borderWidth": [
        "2",
        0,
        0,
        19
      ],
      "borderColor": [
        "rgba(0,0,0,0)",
        0,
        0,
        19
      ],
      "borderTopRightRadius": [
        "100",
        0,
        0,
        19
      ],
      "borderTopLeftRadius": [
        "100",
        0,
        0,
        19
      ],
      "borderBottomLeftRadius": [
        "100",
        0,
        0,
        19
      ],
      "borderBottomRightRadius": [
        "100",
        0,
        0,
        19
      ],
      "borderStyle": [
        "solid",
        0,
        0,
        19
      ]
    }
  },
  ".u-loading-icon__spinner--circle": {
    "": {
      "borderTopRightRadius": [
        "100",
        0,
        0,
        20
      ],
      "borderTopLeftRadius": [
        "100",
        0,
        0,
        20
      ],
      "borderBottomLeftRadius": [
        "100",
        0,
        0,
        20
      ],
      "borderBottomRightRadius": [
        "100",
        0,
        0,
        20
      ],
      "borderWidth": [
        "2",
        0,
        0,
        20
      ],
      "borderTopColor": [
        "#e5e5e5",
        0,
        0,
        20
      ],
      "borderRightColor": [
        "#e5e5e5",
        0,
        0,
        20
      ],
      "borderBottomColor": [
        "#e5e5e5",
        0,
        0,
        20
      ],
      "borderLeftColor": [
        "#e5e5e5",
        0,
        0,
        20
      ],
      "borderStyle": [
        "solid",
        0,
        0,
        20
      ]
    }
  },
  ".u-loading-icon--vertical": {
    "": {
      "flexDirection": [
        "column",
        0,
        0,
        21
      ]
    }
  },
  "@VERSION": 2
}

/***/ }),

/***/ 158:
/*!*******************************************************************************************************************************!*\
  !*** /Users/tongjie/Desktop/QNRTC-Uniapp/demo/uni_modules/uview-ui/components/u-button/u-button.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_u_button_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib??ref--5-0!../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--5-1!../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./u-button.vue?vue&type=script&lang=js& */ 159);\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_u_button_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_u_button_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_u_button_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_u_button_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_u_button_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWdrQixDQUFnQix3akJBQUcsRUFBQyIsImZpbGUiOiIxNTguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNS0wIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS01LTEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vdS1idXR0b24udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNS0wIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS01LTEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vdS1idXR0b24udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///158\n");

/***/ }),

/***/ 159:
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--5-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--5-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!/Users/tongjie/Desktop/QNRTC-Uniapp/demo/uni_modules/uview-ui/components/u-button/u-button.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 16);\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\nvar _button = _interopRequireDefault(__webpack_require__(/*! ../../libs/mixin/button.js */ 160));\nvar _openType = _interopRequireDefault(__webpack_require__(/*! ../../libs/mixin/openType.js */ 161));\nvar _props = _interopRequireDefault(__webpack_require__(/*! ./props.js */ 162));\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n/**\n * button 按钮\n * @description Button 按钮\n * @tutorial https://www.uviewui.com/components/button.html\n *\n * @property {Boolean}\t\t\thairline\t\t\t\t是否显示按钮的细边框 (默认 true )\n * @property {String}\t\t\ttype\t\t\t\t\t按钮的预置样式，info，primary，error，warning，success (默认 'info' )\n * @property {String}\t\t\tsize\t\t\t\t\t按钮尺寸，large，normal，mini （默认 normal）\n * @property {String}\t\t\tshape\t\t\t\t\t按钮形状，circle（两边为半圆），square（带圆角） （默认 'square' ）\n * @property {Boolean}\t\t\tplain\t\t\t\t\t按钮是否镂空，背景色透明 （默认 false）\n * @property {Boolean}\t\t\tdisabled\t\t\t\t是否禁用 （默认 false）\n * @property {Boolean}\t\t\tloading\t\t\t\t\t按钮名称前是否带 loading 图标(App-nvue 平台，在 ios 上为雪花，Android上为圆圈) （默认 false）\n * @property {String | Number}\tloadingText\t\t\t\t加载中提示文字\n * @property {String}\t\t\tloadingMode\t\t\t\t加载状态图标类型 （默认 'spinner' ）\n * @property {String | Number}\tloadingSize\t\t\t\t加载图标大小 （默认 15 ）\n * @property {String}\t\t\topenType\t\t\t\t开放能力，具体请看uniapp稳定关于button组件部分说明\n * @property {String}\t\t\tformType\t\t\t\t用于 <form> 组件，点击分别会触发 <form> 组件的 submit/reset 事件\n * @property {String}\t\t\tappParameter\t\t\t打开 APP 时，向 APP 传递的参数，open-type=launchApp时有效 （注：只微信小程序、QQ小程序有效）\n * @property {Boolean}\t\t\thoverStopPropagation\t指定是否阻止本节点的祖先节点出现点击态，微信小程序有效（默认 true ）\n * @property {String}\t\t\tlang\t\t\t\t\t指定返回用户信息的语言，zh_CN 简体中文，zh_TW 繁体中文，en 英文（默认 en ）\n * @property {String}\t\t\tsessionFrom\t\t\t\t会话来源，openType=\"contact\"时有效\n * @property {String}\t\t\tsendMessageTitle\t\t会话内消息卡片标题，openType=\"contact\"时有效\n * @property {String}\t\t\tsendMessagePath\t\t\t会话内消息卡片点击跳转小程序路径，openType=\"contact\"时有效\n * @property {String}\t\t\tsendMessageImg\t\t\t会话内消息卡片图片，openType=\"contact\"时有效\n * @property {Boolean}\t\t\tshowMessageCard\t\t\t是否显示会话内消息卡片，设置此参数为 true，用户进入客服会话会在右下角显示\"可能要发送的小程序\"提示，用户点击后可以快速发送小程序消息，openType=\"contact\"时有效（默认false）\n * @property {String}\t\t\tdataName\t\t\t\t额外传参参数，用于小程序的data-xxx属性，通过target.dataset.name获取\n * @property {String | Number}\tthrottleTime\t\t\t节流，一定时间内只能触发一次 （默认 0 )\n * @property {String | Number}\thoverStartTime\t\t\t按住后多久出现点击态，单位毫秒 （默认 0 )\n * @property {String | Number}\thoverStayTime\t\t\t手指松开后点击态保留时间，单位毫秒 （默认 200 )\n * @property {String | Number}\ttext\t\t\t\t\t按钮文字，之所以通过props传入，是因为slot传入的话（注：nvue中无法控制文字的样式）\n * @property {String}\t\t\ticon\t\t\t\t\t按钮图标\n * @property {String}\t\t\ticonColor\t\t\t\t按钮图标颜色\n * @property {String}\t\t\tcolor\t\t\t\t\t按钮颜色，支持传入linear-gradient渐变色\n * @property {Object}\t\t\tcustomStyle\t\t\t\t定义需要用到的外部样式\n *\n * @event {Function}\tclick\t\t\t非禁止并且非加载中，才能点击\n * @event {Function}\tgetphonenumber\topen-type=\"getPhoneNumber\"时有效\n * @event {Function}\tgetuserinfo\t\t用户点击该按钮时，会返回获取到的用户信息，从返回参数的detail中获取到的值同uni.getUserInfo\n * @event {Function}\terror\t\t\t当使用开放能力时，发生错误的回调\n * @event {Function}\topensetting\t\t在打开授权设置页并关闭后回调\n * @event {Function}\tlaunchapp\t\t打开 APP 成功的回调\n * @example <u-button>月落</u-button>\n */\nvar _default = {\n  name: \"u-button\",\n  mixins: [uni.$u.mpMixin, uni.$u.mixin, _props.default],\n  data: function data() {\n    return {};\n  },\n  computed: {\n    // 生成bem风格的类名\n    bemClass: function bemClass() {\n      // this.bem为一个computed变量，在mixin中\n      if (!this.color) {\n        return this.bem(\"button\", [\"type\", \"shape\", \"size\"], [\"disabled\", \"plain\", \"hairline\"]);\n      } else {\n        // 由于nvue的原因，在有color参数时，不需要传入type，否则会生成type相关的类型，影响最终的样式\n        return this.bem(\"button\", [\"shape\", \"size\"], [\"disabled\", \"plain\", \"hairline\"]);\n      }\n    },\n    loadingColor: function loadingColor() {\n      if (this.plain) {\n        // 如果有设置color值，则用color值，否则使用type主题颜色\n        return this.color ? this.color : uni.$u.config.color[\"u-\".concat(this.type)];\n      }\n      if (this.type === \"info\") {\n        return \"#c9c9c9\";\n      }\n      return \"rgb(200, 200, 200)\";\n    },\n    iconColorCom: function iconColorCom() {\n      // 如果是镂空状态，设置了color就用color值，否则使用主题颜色，\n      // u-icon的color能接受一个主题颜色的值\n      if (this.iconColor) return this.iconColor;\n      if (this.plain) {\n        return this.color ? this.color : this.type;\n      } else {\n        return this.type === \"info\" ? \"#000000\" : \"#ffffff\";\n      }\n    },\n    baseColor: function baseColor() {\n      var style = {};\n      if (this.color) {\n        // 针对自定义了color颜色的情况，镂空状态下，就是用自定义的颜色\n        style.color = this.plain ? this.color : \"white\";\n        if (!this.plain) {\n          // 非镂空，背景色使用自定义的颜色\n          style[\"background-color\"] = this.color;\n        }\n        if (this.color.indexOf(\"gradient\") !== -1) {\n          // 如果自定义的颜色为渐变色，不显示边框，以及通过backgroundImage设置渐变色\n          // weex文档说明可以写borderWidth的形式，为什么这里需要分开写？\n          // 因为weex是阿里巴巴为了部门业绩考核而做的你懂的东西，所以需要这么写才有效\n          style.borderTopWidth = 0;\n          style.borderRightWidth = 0;\n          style.borderBottomWidth = 0;\n          style.borderLeftWidth = 0;\n          if (!this.plain) {\n            style.backgroundImage = this.color;\n          }\n        } else {\n          // 非渐变色，则设置边框相关的属性\n          style.borderColor = this.color;\n          style.borderWidth = \"1px\";\n          style.borderStyle = \"solid\";\n        }\n      }\n      return style;\n    },\n    // nvue版本按钮的字体不会继承父组件的颜色，需要对每一个text组件进行单独的设置\n    nvueTextStyle: function nvueTextStyle() {\n      var style = {};\n      // 针对自定义了color颜色的情况，镂空状态下，就是用自定义的颜色\n      if (this.type === \"info\") {\n        style.color = \"#323233\";\n      }\n      if (this.color) {\n        style.color = this.plain ? this.color : \"white\";\n      }\n      style.fontSize = this.textSize + \"px\";\n      return style;\n    },\n    // 字体大小\n    textSize: function textSize() {\n      var fontSize = 14,\n        size = this.size;\n      if (size === \"large\") fontSize = 16;\n      if (size === \"normal\") fontSize = 14;\n      if (size === \"small\") fontSize = 12;\n      if (size === \"mini\") fontSize = 10;\n      return fontSize;\n    }\n  },\n  methods: {\n    clickHandler: function clickHandler() {\n      var _this = this;\n      // 非禁止并且非加载中，才能点击\n      if (!this.disabled && !this.loading) {\n        // 进行节流控制，每this.throttle毫秒内，只在开始处执行\n        uni.$u.throttle(function () {\n          _this.$emit(\"click\");\n        }, this.throttleTime);\n      }\n    },\n    // 下面为对接uniapp官方按钮开放能力事件回调的对接\n    getphonenumber: function getphonenumber(res) {\n      this.$emit(\"getphonenumber\", res);\n    },\n    getuserinfo: function getuserinfo(res) {\n      this.$emit(\"getuserinfo\", res);\n    },\n    error: function error(res) {\n      this.$emit(\"error\", res);\n    },\n    opensetting: function opensetting(res) {\n      this.$emit(\"opensetting\", res);\n    },\n    launchapp: function launchapp(res) {\n      this.$emit(\"launchapp\", res);\n    }\n  }\n};\nexports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vdW5pX21vZHVsZXMvdXZpZXctdWkvY29tcG9uZW50cy91LWJ1dHRvbi91LWJ1dHRvbi52dWUiXSwibmFtZXMiOlsibmFtZSIsIm1peGlucyIsImRhdGEiLCJjb21wdXRlZCIsImJlbUNsYXNzIiwibG9hZGluZ0NvbG9yIiwidW5pIiwiaWNvbkNvbG9yQ29tIiwiYmFzZUNvbG9yIiwic3R5bGUiLCJudnVlVGV4dFN0eWxlIiwidGV4dFNpemUiLCJzaXplIiwibWV0aG9kcyIsImNsaWNrSGFuZGxlciIsImdldHBob25lbnVtYmVyIiwiZ2V0dXNlcmluZm8iLCJlcnJvciIsIm9wZW5zZXR0aW5nIiwibGF1bmNoYXBwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBK0dBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUExQ0EsZUEyQ0E7RUFDQUE7RUFLQUM7RUFFQUM7SUFDQTtFQUNBO0VBQ0FDO0lBQ0E7SUFDQUM7TUFDQTtNQUNBO1FBQ0EsZ0JBQ0EsVUFDQSwyQkFDQSxrQ0FDQTtNQUNBO1FBQ0E7UUFDQSxnQkFDQSxVQUNBLG1CQUNBLGtDQUNBO01BQ0E7SUFDQTtJQUNBQztNQUNBO1FBQ0E7UUFDQSxvQkFDQSxhQUNBQztNQUNBO01BQ0E7UUFDQTtNQUNBO01BQ0E7SUFDQTtJQUNBQztNQUNBO01BQ0E7TUFDQTtNQUNBO1FBQ0E7TUFDQTtRQUNBO01BQ0E7SUFDQTtJQUNBQztNQUNBO01BQ0E7UUFDQTtRQUNBQztRQUNBO1VBQ0E7VUFDQUE7UUFDQTtRQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0FBO1VBQ0FBO1VBQ0FBO1VBQ0FBO1VBQ0E7WUFDQUE7VUFDQTtRQUNBO1VBQ0E7VUFDQUE7VUFDQUE7VUFDQUE7UUFDQTtNQUNBO01BQ0E7SUFDQTtJQUNBO0lBQ0FDO01BQ0E7TUFDQTtNQUNBO1FBQ0FEO01BQ0E7TUFDQTtRQUNBQTtNQUNBO01BQ0FBO01BQ0E7SUFDQTtJQUNBO0lBQ0FFO01BQ0E7UUFDQUM7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO0lBQ0E7RUFDQTtFQUNBQztJQUNBQztNQUFBO01BQ0E7TUFDQTtRQUNBO1FBQ0FSO1VBQ0E7UUFDQTtNQUNBO0lBQ0E7SUFDQTtJQUNBUztNQUNBO0lBQ0E7SUFDQUM7TUFDQTtJQUNBO0lBQ0FDO01BQ0E7SUFDQTtJQUNBQztNQUNBO0lBQ0E7SUFDQUM7TUFDQTtJQUNBO0VBQ0E7QUFDQTtBQUFBIiwiZmlsZSI6IjE1OS5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgICA8IS0tICNpZm5kZWYgQVBQLU5WVUUgLS0+XG4gICAgPGJ1dHRvblxuICAgICAgICA6aG92ZXItc3RhcnQtdGltZT1cIk51bWJlcihob3ZlclN0YXJ0VGltZSlcIlxuICAgICAgICA6aG92ZXItc3RheS10aW1lPVwiTnVtYmVyKGhvdmVyU3RheVRpbWUpXCJcbiAgICAgICAgOmZvcm0tdHlwZT1cImZvcm1UeXBlXCJcbiAgICAgICAgOm9wZW4tdHlwZT1cIm9wZW5UeXBlXCJcbiAgICAgICAgOmFwcC1wYXJhbWV0ZXI9XCJhcHBQYXJhbWV0ZXJcIlxuICAgICAgICA6aG92ZXItc3RvcC1wcm9wYWdhdGlvbj1cImhvdmVyU3RvcFByb3BhZ2F0aW9uXCJcbiAgICAgICAgOnNlbmQtbWVzc2FnZS10aXRsZT1cInNlbmRNZXNzYWdlVGl0bGVcIlxuICAgICAgICA6c2VuZC1tZXNzYWdlLXBhdGg9XCJzZW5kTWVzc2FnZVBhdGhcIlxuICAgICAgICA6bGFuZz1cImxhbmdcIlxuICAgICAgICA6ZGF0YS1uYW1lPVwiZGF0YU5hbWVcIlxuICAgICAgICA6c2Vzc2lvbi1mcm9tPVwic2Vzc2lvbkZyb21cIlxuICAgICAgICA6c2VuZC1tZXNzYWdlLWltZz1cInNlbmRNZXNzYWdlSW1nXCJcbiAgICAgICAgOnNob3ctbWVzc2FnZS1jYXJkPVwic2hvd01lc3NhZ2VDYXJkXCJcbiAgICAgICAgQGdldHBob25lbnVtYmVyPVwiZ2V0cGhvbmVudW1iZXJcIlxuICAgICAgICBAZ2V0dXNlcmluZm89XCJnZXR1c2VyaW5mb1wiXG4gICAgICAgIEBlcnJvcj1cImVycm9yXCJcbiAgICAgICAgQG9wZW5zZXR0aW5nPVwib3BlbnNldHRpbmdcIlxuICAgICAgICBAbGF1bmNoYXBwPVwibGF1bmNoYXBwXCJcbiAgICAgICAgOmhvdmVyLWNsYXNzPVwiIWRpc2FibGVkICYmICFsb2FkaW5nID8gJ3UtYnV0dG9uLS1hY3RpdmUnIDogJydcIlxuICAgICAgICBjbGFzcz1cInUtYnV0dG9uIHUtcmVzZXQtYnV0dG9uXCJcbiAgICAgICAgOnN0eWxlPVwiW2Jhc2VDb2xvciwgJHUuYWRkU3R5bGUoY3VzdG9tU3R5bGUpXVwiXG4gICAgICAgIEB0YXA9XCJjbGlja0hhbmRsZXJcIlxuICAgICAgICA6Y2xhc3M9XCJiZW1DbGFzc1wiXG4gICAgPlxuICAgICAgICA8dGVtcGxhdGUgdi1pZj1cImxvYWRpbmdcIj5cbiAgICAgICAgICAgIDx1LWxvYWRpbmctaWNvblxuICAgICAgICAgICAgICAgIDptb2RlPVwibG9hZGluZ01vZGVcIlxuICAgICAgICAgICAgICAgIDpzaXplPVwibG9hZGluZ1NpemUgKiAxLjE1XCJcbiAgICAgICAgICAgICAgICA6Y29sb3I9XCJsb2FkaW5nQ29sb3JcIlxuICAgICAgICAgICAgPjwvdS1sb2FkaW5nLWljb24+XG4gICAgICAgICAgICA8dGV4dFxuICAgICAgICAgICAgICAgIGNsYXNzPVwidS1idXR0b25fX2xvYWRpbmctdGV4dFwiXG4gICAgICAgICAgICAgICAgOnN0eWxlPVwiW3sgZm9udFNpemU6IHRleHRTaXplICsgJ3B4JyB9XVwiXG4gICAgICAgICAgICAgICAgPnt7IGxvYWRpbmdUZXh0IHx8IHRleHQgfX08L3RleHRcbiAgICAgICAgICAgID5cbiAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgPHRlbXBsYXRlIHYtZWxzZT5cbiAgICAgICAgICAgIDx1LWljb25cbiAgICAgICAgICAgICAgICB2LWlmPVwiaWNvblwiXG4gICAgICAgICAgICAgICAgOm5hbWU9XCJpY29uXCJcbiAgICAgICAgICAgICAgICA6Y29sb3I9XCJpY29uQ29sb3JDb21cIlxuICAgICAgICAgICAgICAgIDpzaXplPVwidGV4dFNpemUgKiAxLjM1XCJcbiAgICAgICAgICAgICAgICA6Y3VzdG9tU3R5bGU9XCJ7IG1hcmdpblJpZ2h0OiAnMnB4JyB9XCJcbiAgICAgICAgICAgID48L3UtaWNvbj5cbiAgICAgICAgICAgIDxzbG90PlxuICAgICAgICAgICAgICAgIDx0ZXh0XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwidS1idXR0b25fX3RleHRcIlxuICAgICAgICAgICAgICAgICAgICA6c3R5bGU9XCJbeyBmb250U2l6ZTogdGV4dFNpemUgKyAncHgnIH1dXCJcbiAgICAgICAgICAgICAgICAgICAgPnt7IHRleHQgfX08L3RleHRcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICA8L3Nsb3Q+XG4gICAgICAgIDwvdGVtcGxhdGU+XG4gICAgPC9idXR0b24+XG4gICAgPCEtLSAjZW5kaWYgLS0+XG5cbiAgICA8IS0tICNpZmRlZiBBUFAtTlZVRSAtLT5cbiAgICA8dmlld1xuICAgICAgICA6aG92ZXItc3RhcnQtdGltZT1cIk51bWJlcihob3ZlclN0YXJ0VGltZSlcIlxuICAgICAgICA6aG92ZXItc3RheS10aW1lPVwiTnVtYmVyKGhvdmVyU3RheVRpbWUpXCJcbiAgICAgICAgY2xhc3M9XCJ1LWJ1dHRvblwiXG4gICAgICAgIDpob3Zlci1jbGFzcz1cIlxuICAgICAgICAgICAgIWRpc2FibGVkICYmICFsb2FkaW5nICYmICFjb2xvciAmJiAocGxhaW4gfHwgdHlwZSA9PT0gJ2luZm8nKVxuICAgICAgICAgICAgICAgID8gJ3UtYnV0dG9uLS1hY3RpdmUtLXBsYWluJ1xuICAgICAgICAgICAgICAgIDogIWRpc2FibGVkICYmICFsb2FkaW5nICYmICFwbGFpblxuICAgICAgICAgICAgICAgID8gJ3UtYnV0dG9uLS1hY3RpdmUnXG4gICAgICAgICAgICAgICAgOiAnJ1xuICAgICAgICBcIlxuICAgICAgICBAdGFwPVwiY2xpY2tIYW5kbGVyXCJcbiAgICAgICAgOmNsYXNzPVwiYmVtQ2xhc3NcIlxuICAgICAgICA6c3R5bGU9XCJbYmFzZUNvbG9yLCAkdS5hZGRTdHlsZShjdXN0b21TdHlsZSldXCJcbiAgICA+XG4gICAgICAgIDx0ZW1wbGF0ZSB2LWlmPVwibG9hZGluZ1wiPlxuICAgICAgICAgICAgPHUtbG9hZGluZy1pY29uXG4gICAgICAgICAgICAgICAgOm1vZGU9XCJsb2FkaW5nTW9kZVwiXG4gICAgICAgICAgICAgICAgOnNpemU9XCJsb2FkaW5nU2l6ZSAqIDEuMTVcIlxuICAgICAgICAgICAgICAgIDpjb2xvcj1cImxvYWRpbmdDb2xvclwiXG4gICAgICAgICAgICA+PC91LWxvYWRpbmctaWNvbj5cbiAgICAgICAgICAgIDx0ZXh0XG4gICAgICAgICAgICAgICAgY2xhc3M9XCJ1LWJ1dHRvbl9fbG9hZGluZy10ZXh0XCJcbiAgICAgICAgICAgICAgICA6c3R5bGU9XCJbbnZ1ZVRleHRTdHlsZV1cIlxuICAgICAgICAgICAgICAgIDpjbGFzcz1cIltwbGFpbiAmJiBgdS1idXR0b25fX3RleHQtLXBsYWluLS0ke3R5cGV9YF1cIlxuICAgICAgICAgICAgICAgID57eyBsb2FkaW5nVGV4dCB8fCB0ZXh0IH19PC90ZXh0XG4gICAgICAgICAgICA+XG4gICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgIDx0ZW1wbGF0ZSB2LWVsc2U+XG4gICAgICAgICAgICA8dS1pY29uXG4gICAgICAgICAgICAgICAgdi1pZj1cImljb25cIlxuICAgICAgICAgICAgICAgIDpuYW1lPVwiaWNvblwiXG4gICAgICAgICAgICAgICAgOmNvbG9yPVwiaWNvbkNvbG9yQ29tXCJcbiAgICAgICAgICAgICAgICA6c2l6ZT1cInRleHRTaXplICogMS4zNVwiXG4gICAgICAgICAgICA+PC91LWljb24+XG4gICAgICAgICAgICA8dGV4dFxuICAgICAgICAgICAgICAgIGNsYXNzPVwidS1idXR0b25fX3RleHRcIlxuICAgICAgICAgICAgICAgIDpzdHlsZT1cIltcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luTGVmdDogaWNvbiA/ICcycHgnIDogMCxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgbnZ1ZVRleHRTdHlsZSxcbiAgICAgICAgICAgICAgICBdXCJcbiAgICAgICAgICAgICAgICA6Y2xhc3M9XCJbcGxhaW4gJiYgYHUtYnV0dG9uX190ZXh0LS1wbGFpbi0tJHt0eXBlfWBdXCJcbiAgICAgICAgICAgICAgICA+e3sgdGV4dCB9fTwvdGV4dFxuICAgICAgICAgICAgPlxuICAgICAgICA8L3RlbXBsYXRlPlxuICAgIDwvdmlldz5cbiAgICA8IS0tICNlbmRpZiAtLT5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgYnV0dG9uIGZyb20gXCIuLi8uLi9saWJzL21peGluL2J1dHRvbi5qc1wiO1xuaW1wb3J0IG9wZW5UeXBlIGZyb20gXCIuLi8uLi9saWJzL21peGluL29wZW5UeXBlLmpzXCI7XG5pbXBvcnQgcHJvcHMgZnJvbSBcIi4vcHJvcHMuanNcIjtcbi8qKlxuICogYnV0dG9uIOaMiemSrlxuICogQGRlc2NyaXB0aW9uIEJ1dHRvbiDmjInpkq5cbiAqIEB0dXRvcmlhbCBodHRwczovL3d3dy51dmlld3VpLmNvbS9jb21wb25lbnRzL2J1dHRvbi5odG1sXG4gKlxuICogQHByb3BlcnR5IHtCb29sZWFufVx0XHRcdGhhaXJsaW5lXHRcdFx0XHTmmK/lkKbmmL7npLrmjInpkq7nmoTnu4bovrnmoYYgKOm7mOiupCB0cnVlIClcbiAqIEBwcm9wZXJ0eSB7U3RyaW5nfVx0XHRcdHR5cGVcdFx0XHRcdFx05oyJ6ZKu55qE6aKE572u5qC35byP77yMaW5mb++8jHByaW1hcnnvvIxlcnJvcu+8jHdhcm5pbmfvvIxzdWNjZXNzICjpu5jorqQgJ2luZm8nIClcbiAqIEBwcm9wZXJ0eSB7U3RyaW5nfVx0XHRcdHNpemVcdFx0XHRcdFx05oyJ6ZKu5bC65a+477yMbGFyZ2XvvIxub3JtYWzvvIxtaW5pIO+8iOm7mOiupCBub3JtYWzvvIlcbiAqIEBwcm9wZXJ0eSB7U3RyaW5nfVx0XHRcdHNoYXBlXHRcdFx0XHRcdOaMiemSruW9oueKtu+8jGNpcmNsZe+8iOS4pOi+ueS4uuWNiuWchu+8ie+8jHNxdWFyZe+8iOW4puWchuinku+8iSDvvIjpu5jorqQgJ3NxdWFyZScg77yJXG4gKiBAcHJvcGVydHkge0Jvb2xlYW59XHRcdFx0cGxhaW5cdFx0XHRcdFx05oyJ6ZKu5piv5ZCm6ZWC56m677yM6IOM5pmv6Imy6YCP5piOIO+8iOm7mOiupCBmYWxzZe+8iVxuICogQHByb3BlcnR5IHtCb29sZWFufVx0XHRcdGRpc2FibGVkXHRcdFx0XHTmmK/lkKbnpoHnlKgg77yI6buY6K6kIGZhbHNl77yJXG4gKiBAcHJvcGVydHkge0Jvb2xlYW59XHRcdFx0bG9hZGluZ1x0XHRcdFx0XHTmjInpkq7lkI3np7DliY3mmK/lkKbluKYgbG9hZGluZyDlm77moIcoQXBwLW52dWUg5bmz5Y+w77yM5ZyoIGlvcyDkuIrkuLrpm6roirHvvIxBbmRyb2lk5LiK5Li65ZyG5ZyIKSDvvIjpu5jorqQgZmFsc2XvvIlcbiAqIEBwcm9wZXJ0eSB7U3RyaW5nIHwgTnVtYmVyfVx0bG9hZGluZ1RleHRcdFx0XHRcdOWKoOi9veS4reaPkOekuuaWh+Wtl1xuICogQHByb3BlcnR5IHtTdHJpbmd9XHRcdFx0bG9hZGluZ01vZGVcdFx0XHRcdOWKoOi9veeKtuaAgeWbvuagh+exu+WeiyDvvIjpu5jorqQgJ3NwaW5uZXInIO+8iVxuICogQHByb3BlcnR5IHtTdHJpbmcgfCBOdW1iZXJ9XHRsb2FkaW5nU2l6ZVx0XHRcdFx05Yqg6L295Zu+5qCH5aSn5bCPIO+8iOm7mOiupCAxNSDvvIlcbiAqIEBwcm9wZXJ0eSB7U3RyaW5nfVx0XHRcdG9wZW5UeXBlXHRcdFx0XHTlvIDmlL7og73lipvvvIzlhbfkvZPor7fnnIt1bmlhcHDnqLPlrprlhbPkuo5idXR0b27nu4Tku7bpg6jliIbor7TmmI5cbiAqIEBwcm9wZXJ0eSB7U3RyaW5nfVx0XHRcdGZvcm1UeXBlXHRcdFx0XHTnlKjkuo4gPGZvcm0+IOe7hOS7tu+8jOeCueWHu+WIhuWIq+S8muinpuWPkSA8Zm9ybT4g57uE5Lu255qEIHN1Ym1pdC9yZXNldCDkuovku7ZcbiAqIEBwcm9wZXJ0eSB7U3RyaW5nfVx0XHRcdGFwcFBhcmFtZXRlclx0XHRcdOaJk+W8gCBBUFAg5pe277yM5ZCRIEFQUCDkvKDpgJLnmoTlj4LmlbDvvIxvcGVuLXR5cGU9bGF1bmNoQXBw5pe25pyJ5pWIIO+8iOazqO+8muWPquW+ruS/oeWwj+eoi+W6j+OAgVFR5bCP56iL5bqP5pyJ5pWI77yJXG4gKiBAcHJvcGVydHkge0Jvb2xlYW59XHRcdFx0aG92ZXJTdG9wUHJvcGFnYXRpb25cdOaMh+WumuaYr+WQpumYu+atouacrOiKgueCueeahOelluWFiOiKgueCueWHuueOsOeCueWHu+aAge+8jOW+ruS/oeWwj+eoi+W6j+acieaViO+8iOm7mOiupCB0cnVlIO+8iVxuICogQHByb3BlcnR5IHtTdHJpbmd9XHRcdFx0bGFuZ1x0XHRcdFx0XHTmjIflrprov5Tlm57nlKjmiLfkv6Hmga/nmoTor63oqIDvvIx6aF9DTiDnroDkvZPkuK3mlofvvIx6aF9UVyDnuYHkvZPkuK3mlofvvIxlbiDoi7HmlofvvIjpu5jorqQgZW4g77yJXG4gKiBAcHJvcGVydHkge1N0cmluZ31cdFx0XHRzZXNzaW9uRnJvbVx0XHRcdFx05Lya6K+d5p2l5rqQ77yMb3BlblR5cGU9XCJjb250YWN0XCLml7bmnInmlYhcbiAqIEBwcm9wZXJ0eSB7U3RyaW5nfVx0XHRcdHNlbmRNZXNzYWdlVGl0bGVcdFx05Lya6K+d5YaF5raI5oGv5Y2h54mH5qCH6aKY77yMb3BlblR5cGU9XCJjb250YWN0XCLml7bmnInmlYhcbiAqIEBwcm9wZXJ0eSB7U3RyaW5nfVx0XHRcdHNlbmRNZXNzYWdlUGF0aFx0XHRcdOS8muivneWGhea2iOaBr+WNoeeJh+eCueWHu+i3s+i9rOWwj+eoi+W6j+i3r+W+hO+8jG9wZW5UeXBlPVwiY29udGFjdFwi5pe25pyJ5pWIXG4gKiBAcHJvcGVydHkge1N0cmluZ31cdFx0XHRzZW5kTWVzc2FnZUltZ1x0XHRcdOS8muivneWGhea2iOaBr+WNoeeJh+WbvueJh++8jG9wZW5UeXBlPVwiY29udGFjdFwi5pe25pyJ5pWIXG4gKiBAcHJvcGVydHkge0Jvb2xlYW59XHRcdFx0c2hvd01lc3NhZ2VDYXJkXHRcdFx05piv5ZCm5pi+56S65Lya6K+d5YaF5raI5oGv5Y2h54mH77yM6K6+572u5q2k5Y+C5pWw5Li6IHRydWXvvIznlKjmiLfov5vlhaXlrqLmnI3kvJror53kvJrlnKjlj7PkuIvop5LmmL7npLpcIuWPr+iDveimgeWPkemAgeeahOWwj+eoi+W6j1wi5o+Q56S677yM55So5oi354K55Ye75ZCO5Y+v5Lul5b+r6YCf5Y+R6YCB5bCP56iL5bqP5raI5oGv77yMb3BlblR5cGU9XCJjb250YWN0XCLml7bmnInmlYjvvIjpu5jorqRmYWxzZe+8iVxuICogQHByb3BlcnR5IHtTdHJpbmd9XHRcdFx0ZGF0YU5hbWVcdFx0XHRcdOmineWkluS8oOWPguWPguaVsO+8jOeUqOS6juWwj+eoi+W6j+eahGRhdGEteHh45bGe5oCn77yM6YCa6L+HdGFyZ2V0LmRhdGFzZXQubmFtZeiOt+WPllxuICogQHByb3BlcnR5IHtTdHJpbmcgfCBOdW1iZXJ9XHR0aHJvdHRsZVRpbWVcdFx0XHToioLmtYHvvIzkuIDlrprml7bpl7TlhoXlj6rog73op6blj5HkuIDmrKEg77yI6buY6K6kIDAgKVxuICogQHByb3BlcnR5IHtTdHJpbmcgfCBOdW1iZXJ9XHRob3ZlclN0YXJ0VGltZVx0XHRcdOaMieS9j+WQjuWkmuS5heWHuueOsOeCueWHu+aAge+8jOWNleS9jeavq+enkiDvvIjpu5jorqQgMCApXG4gKiBAcHJvcGVydHkge1N0cmluZyB8IE51bWJlcn1cdGhvdmVyU3RheVRpbWVcdFx0XHTmiYvmjIfmnb7lvIDlkI7ngrnlh7vmgIHkv53nlZnml7bpl7TvvIzljZXkvY3mr6vnp5Ig77yI6buY6K6kIDIwMCApXG4gKiBAcHJvcGVydHkge1N0cmluZyB8IE51bWJlcn1cdHRleHRcdFx0XHRcdFx05oyJ6ZKu5paH5a2X77yM5LmL5omA5Lul6YCa6L+HcHJvcHPkvKDlhaXvvIzmmK/lm6DkuLpzbG905Lyg5YWl55qE6K+d77yI5rOo77yabnZ1ZeS4reaXoOazleaOp+WItuaWh+Wtl+eahOagt+W8j++8iVxuICogQHByb3BlcnR5IHtTdHJpbmd9XHRcdFx0aWNvblx0XHRcdFx0XHTmjInpkq7lm77moIdcbiAqIEBwcm9wZXJ0eSB7U3RyaW5nfVx0XHRcdGljb25Db2xvclx0XHRcdFx05oyJ6ZKu5Zu+5qCH6aKc6ImyXG4gKiBAcHJvcGVydHkge1N0cmluZ31cdFx0XHRjb2xvclx0XHRcdFx0XHTmjInpkq7popzoibLvvIzmlK/mjIHkvKDlhaVsaW5lYXItZ3JhZGllbnTmuJDlj5joibJcbiAqIEBwcm9wZXJ0eSB7T2JqZWN0fVx0XHRcdGN1c3RvbVN0eWxlXHRcdFx0XHTlrprkuYnpnIDopoHnlKjliLDnmoTlpJbpg6jmoLflvI9cbiAqXG4gKiBAZXZlbnQge0Z1bmN0aW9ufVx0Y2xpY2tcdFx0XHTpnZ7npoHmraLlubbkuJTpnZ7liqDovb3kuK3vvIzmiY3og73ngrnlh7tcbiAqIEBldmVudCB7RnVuY3Rpb259XHRnZXRwaG9uZW51bWJlclx0b3Blbi10eXBlPVwiZ2V0UGhvbmVOdW1iZXJcIuaXtuacieaViFxuICogQGV2ZW50IHtGdW5jdGlvbn1cdGdldHVzZXJpbmZvXHRcdOeUqOaIt+eCueWHu+ivpeaMiemSruaXtu+8jOS8mui/lOWbnuiOt+WPluWIsOeahOeUqOaIt+S/oeaBr++8jOS7jui/lOWbnuWPguaVsOeahGRldGFpbOS4reiOt+WPluWIsOeahOWAvOWQjHVuaS5nZXRVc2VySW5mb1xuICogQGV2ZW50IHtGdW5jdGlvbn1cdGVycm9yXHRcdFx05b2T5L2/55So5byA5pS+6IO95Yqb5pe277yM5Y+R55Sf6ZSZ6K+v55qE5Zue6LCDXG4gKiBAZXZlbnQge0Z1bmN0aW9ufVx0b3BlbnNldHRpbmdcdFx05Zyo5omT5byA5o6I5p2D6K6+572u6aG15bm25YWz6Zet5ZCO5Zue6LCDXG4gKiBAZXZlbnQge0Z1bmN0aW9ufVx0bGF1bmNoYXBwXHRcdOaJk+W8gCBBUFAg5oiQ5Yqf55qE5Zue6LCDXG4gKiBAZXhhbXBsZSA8dS1idXR0b24+5pyI6JC9PC91LWJ1dHRvbj5cbiAqL1xuZXhwb3J0IGRlZmF1bHQge1xuICAgIG5hbWU6IFwidS1idXR0b25cIixcbiAgICAvLyAjaWZkZWYgTVBcbiAgICBtaXhpbnM6IFt1bmkuJHUubXBNaXhpbiwgdW5pLiR1Lm1peGluLCBidXR0b24sIG9wZW5UeXBlLCBwcm9wc10sXG4gICAgLy8gI2VuZGlmXG4gICAgLy8gI2lmbmRlZiBNUFxuICAgIG1peGluczogW3VuaS4kdS5tcE1peGluLCB1bmkuJHUubWl4aW4sIHByb3BzXSxcbiAgICAvLyAjZW5kaWZcbiAgICBkYXRhKCkge1xuICAgICAgICByZXR1cm4ge307XG4gICAgfSxcbiAgICBjb21wdXRlZDoge1xuICAgICAgICAvLyDnlJ/miJBiZW3po47moLznmoTnsbvlkI1cbiAgICAgICAgYmVtQ2xhc3MoKSB7XG4gICAgICAgICAgICAvLyB0aGlzLmJlbeS4uuS4gOS4qmNvbXB1dGVk5Y+Y6YeP77yM5ZyobWl4aW7kuK1cbiAgICAgICAgICAgIGlmICghdGhpcy5jb2xvcikge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmJlbShcbiAgICAgICAgICAgICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgW1widHlwZVwiLCBcInNoYXBlXCIsIFwic2l6ZVwiXSxcbiAgICAgICAgICAgICAgICAgICAgW1wiZGlzYWJsZWRcIiwgXCJwbGFpblwiLCBcImhhaXJsaW5lXCJdXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8g55Sx5LqObnZ1ZeeahOWOn+WboO+8jOWcqOaciWNvbG9y5Y+C5pWw5pe277yM5LiN6ZyA6KaB5Lyg5YWldHlwZe+8jOWQpuWImeS8mueUn+aIkHR5cGXnm7jlhbPnmoTnsbvlnovvvIzlvbHlk43mnIDnu4jnmoTmoLflvI9cbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5iZW0oXG4gICAgICAgICAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgIFtcInNoYXBlXCIsIFwic2l6ZVwiXSxcbiAgICAgICAgICAgICAgICAgICAgW1wiZGlzYWJsZWRcIiwgXCJwbGFpblwiLCBcImhhaXJsaW5lXCJdXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgbG9hZGluZ0NvbG9yKCkge1xuICAgICAgICAgICAgaWYgKHRoaXMucGxhaW4pIHtcbiAgICAgICAgICAgICAgICAvLyDlpoLmnpzmnInorr7nva5jb2xvcuWAvO+8jOWImeeUqGNvbG9y5YC877yM5ZCm5YiZ5L2/55SodHlwZeS4u+mimOminOiJslxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbG9yXG4gICAgICAgICAgICAgICAgICAgID8gdGhpcy5jb2xvclxuICAgICAgICAgICAgICAgICAgICA6IHVuaS4kdS5jb25maWcuY29sb3JbYHUtJHt0aGlzLnR5cGV9YF07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy50eXBlID09PSBcImluZm9cIikge1xuICAgICAgICAgICAgICAgIHJldHVybiBcIiNjOWM5YzlcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBcInJnYigyMDAsIDIwMCwgMjAwKVwiO1xuICAgICAgICB9LFxuICAgICAgICBpY29uQ29sb3JDb20oKSB7XG4gICAgICAgICAgICAvLyDlpoLmnpzmmK/plYLnqbrnirbmgIHvvIzorr7nva7kuoZjb2xvcuWwseeUqGNvbG9y5YC877yM5ZCm5YiZ5L2/55So5Li76aKY6aKc6Imy77yMXG4gICAgICAgICAgICAvLyB1LWljb27nmoRjb2xvcuiDveaOpeWPl+S4gOS4quS4u+mimOminOiJsueahOWAvFxuXHRcdFx0aWYgKHRoaXMuaWNvbkNvbG9yKSByZXR1cm4gdGhpcy5pY29uQ29sb3I7XG5cdFx0XHRpZiAodGhpcy5wbGFpbikge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbG9yID8gdGhpcy5jb2xvciA6IHRoaXMudHlwZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudHlwZSA9PT0gXCJpbmZvXCIgPyBcIiMwMDAwMDBcIiA6IFwiI2ZmZmZmZlwiO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBiYXNlQ29sb3IoKSB7XG4gICAgICAgICAgICBsZXQgc3R5bGUgPSB7fTtcbiAgICAgICAgICAgIGlmICh0aGlzLmNvbG9yKSB7XG4gICAgICAgICAgICAgICAgLy8g6ZKI5a+56Ieq5a6a5LmJ5LqGY29sb3LpopzoibLnmoTmg4XlhrXvvIzplYLnqbrnirbmgIHkuIvvvIzlsLHmmK/nlKjoh6rlrprkuYnnmoTpopzoibJcbiAgICAgICAgICAgICAgICBzdHlsZS5jb2xvciA9IHRoaXMucGxhaW4gPyB0aGlzLmNvbG9yIDogXCJ3aGl0ZVwiO1xuICAgICAgICAgICAgICAgIGlmICghdGhpcy5wbGFpbikge1xuICAgICAgICAgICAgICAgICAgICAvLyDpnZ7plYLnqbrvvIzog4zmma/oibLkvb/nlKjoh6rlrprkuYnnmoTpopzoibJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGVbXCJiYWNrZ3JvdW5kLWNvbG9yXCJdID0gdGhpcy5jb2xvcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY29sb3IuaW5kZXhPZihcImdyYWRpZW50XCIpICE9PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICAvLyDlpoLmnpzoh6rlrprkuYnnmoTpopzoibLkuLrmuJDlj5joibLvvIzkuI3mmL7npLrovrnmoYbvvIzku6Xlj4rpgJrov4diYWNrZ3JvdW5kSW1hZ2Xorr7nva7muJDlj5joibJcbiAgICAgICAgICAgICAgICAgICAgLy8gd2VleOaWh+aho+ivtOaYjuWPr+S7peWGmWJvcmRlcldpZHRo55qE5b2i5byP77yM5Li65LuA5LmI6L+Z6YeM6ZyA6KaB5YiG5byA5YaZ77yfXG4gICAgICAgICAgICAgICAgICAgIC8vIOWboOS4undlZXjmmK/pmL/ph4zlt7Tlt7TkuLrkuobpg6jpl6jkuJrnu6nogIPmoLjogIzlgZrnmoTkvaDmh4LnmoTkuJzopb/vvIzmiYDku6XpnIDopoHov5nkuYjlhpnmiY3mnInmlYhcbiAgICAgICAgICAgICAgICAgICAgc3R5bGUuYm9yZGVyVG9wV2lkdGggPSAwO1xuICAgICAgICAgICAgICAgICAgICBzdHlsZS5ib3JkZXJSaWdodFdpZHRoID0gMDtcbiAgICAgICAgICAgICAgICAgICAgc3R5bGUuYm9yZGVyQm90dG9tV2lkdGggPSAwO1xuICAgICAgICAgICAgICAgICAgICBzdHlsZS5ib3JkZXJMZWZ0V2lkdGggPSAwO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMucGxhaW4pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlLmJhY2tncm91bmRJbWFnZSA9IHRoaXMuY29sb3I7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyDpnZ7muJDlj5joibLvvIzliJnorr7nva7ovrnmoYbnm7jlhbPnmoTlsZ7mgKdcbiAgICAgICAgICAgICAgICAgICAgc3R5bGUuYm9yZGVyQ29sb3IgPSB0aGlzLmNvbG9yO1xuICAgICAgICAgICAgICAgICAgICBzdHlsZS5ib3JkZXJXaWR0aCA9IFwiMXB4XCI7XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlLmJvcmRlclN0eWxlID0gXCJzb2xpZFwiO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBzdHlsZTtcbiAgICAgICAgfSxcbiAgICAgICAgLy8gbnZ1ZeeJiOacrOaMiemSrueahOWtl+S9k+S4jeS8mue7p+aJv+eItue7hOS7tueahOminOiJsu+8jOmcgOimgeWvueavj+S4gOS4qnRleHTnu4Tku7bov5vooYzljZXni6znmoTorr7nva5cbiAgICAgICAgbnZ1ZVRleHRTdHlsZSgpIHtcbiAgICAgICAgICAgIGxldCBzdHlsZSA9IHt9O1xuICAgICAgICAgICAgLy8g6ZKI5a+56Ieq5a6a5LmJ5LqGY29sb3LpopzoibLnmoTmg4XlhrXvvIzplYLnqbrnirbmgIHkuIvvvIzlsLHmmK/nlKjoh6rlrprkuYnnmoTpopzoibJcbiAgICAgICAgICAgIGlmICh0aGlzLnR5cGUgPT09IFwiaW5mb1wiKSB7XG4gICAgICAgICAgICAgICAgc3R5bGUuY29sb3IgPSBcIiMzMjMyMzNcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLmNvbG9yKSB7XG4gICAgICAgICAgICAgICAgc3R5bGUuY29sb3IgPSB0aGlzLnBsYWluID8gdGhpcy5jb2xvciA6IFwid2hpdGVcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHN0eWxlLmZvbnRTaXplID0gdGhpcy50ZXh0U2l6ZSArIFwicHhcIjtcbiAgICAgICAgICAgIHJldHVybiBzdHlsZTtcbiAgICAgICAgfSxcbiAgICAgICAgLy8g5a2X5L2T5aSn5bCPXG4gICAgICAgIHRleHRTaXplKCkge1xuICAgICAgICAgICAgbGV0IGZvbnRTaXplID0gMTQsXG4gICAgICAgICAgICAgICAgeyBzaXplIH0gPSB0aGlzO1xuICAgICAgICAgICAgaWYgKHNpemUgPT09IFwibGFyZ2VcIikgZm9udFNpemUgPSAxNjtcbiAgICAgICAgICAgIGlmIChzaXplID09PSBcIm5vcm1hbFwiKSBmb250U2l6ZSA9IDE0O1xuICAgICAgICAgICAgaWYgKHNpemUgPT09IFwic21hbGxcIikgZm9udFNpemUgPSAxMjtcbiAgICAgICAgICAgIGlmIChzaXplID09PSBcIm1pbmlcIikgZm9udFNpemUgPSAxMDtcbiAgICAgICAgICAgIHJldHVybiBmb250U2l6ZTtcbiAgICAgICAgfSxcbiAgICB9LFxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgY2xpY2tIYW5kbGVyKCkge1xuICAgICAgICAgICAgLy8g6Z2e56aB5q2i5bm25LiU6Z2e5Yqg6L295Lit77yM5omN6IO954K55Ye7XG4gICAgICAgICAgICBpZiAoIXRoaXMuZGlzYWJsZWQgJiYgIXRoaXMubG9hZGluZykge1xuXHRcdFx0XHQvLyDov5vooYzoioLmtYHmjqfliLbvvIzmr490aGlzLnRocm90dGxl5q+r56eS5YaF77yM5Y+q5Zyo5byA5aeL5aSE5omn6KGMXG5cdFx0XHRcdHVuaS4kdS50aHJvdHRsZSgoKSA9PiB7XG5cdFx0XHRcdFx0dGhpcy4kZW1pdChcImNsaWNrXCIpO1xuXHRcdFx0XHR9LCB0aGlzLnRocm90dGxlVGltZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIC8vIOS4i+mdouS4uuWvueaOpXVuaWFwcOWumOaWueaMiemSruW8gOaUvuiDveWKm+S6i+S7tuWbnuiwg+eahOWvueaOpVxuICAgICAgICBnZXRwaG9uZW51bWJlcihyZXMpIHtcbiAgICAgICAgICAgIHRoaXMuJGVtaXQoXCJnZXRwaG9uZW51bWJlclwiLCByZXMpO1xuICAgICAgICB9LFxuICAgICAgICBnZXR1c2VyaW5mbyhyZXMpIHtcbiAgICAgICAgICAgIHRoaXMuJGVtaXQoXCJnZXR1c2VyaW5mb1wiLCByZXMpO1xuICAgICAgICB9LFxuICAgICAgICBlcnJvcihyZXMpIHtcbiAgICAgICAgICAgIHRoaXMuJGVtaXQoXCJlcnJvclwiLCByZXMpO1xuICAgICAgICB9LFxuICAgICAgICBvcGVuc2V0dGluZyhyZXMpIHtcbiAgICAgICAgICAgIHRoaXMuJGVtaXQoXCJvcGVuc2V0dGluZ1wiLCByZXMpO1xuICAgICAgICB9LFxuICAgICAgICBsYXVuY2hhcHAocmVzKSB7XG4gICAgICAgICAgICB0aGlzLiRlbWl0KFwibGF1bmNoYXBwXCIsIHJlcyk7XG4gICAgICAgIH0sXG4gICAgfSxcbn07XG48L3NjcmlwdD5cblxuPHN0eWxlIGxhbmc9XCJzY3NzXCIgc2NvcGVkPlxuQGltcG9ydCBcIi4uLy4uL2xpYnMvY3NzL2NvbXBvbmVudHMuc2Nzc1wiO1xuXG4vKiAjaWZuZGVmIEFQUC1OVlVFICovXG5AaW1wb3J0IFwiLi92dWUuc2Nzc1wiO1xuLyogI2VuZGlmICovXG5cbi8qICNpZmRlZiBBUFAtTlZVRSAqL1xuQGltcG9ydCBcIi4vbnZ1ZS5zY3NzXCI7XG4vKiAjZW5kaWYgKi9cblxuJHUtYnV0dG9uLXUtYnV0dG9uLWhlaWdodDogNDBweCAhZGVmYXVsdDtcbiR1LWJ1dHRvbi10ZXh0LWZvbnQtc2l6ZTogMTVweCAhZGVmYXVsdDtcbiR1LWJ1dHRvbi1sb2FkaW5nLXRleHQtZm9udC1zaXplOiAxNXB4ICFkZWZhdWx0O1xuJHUtYnV0dG9uLWxvYWRpbmctdGV4dC1tYXJnaW4tbGVmdDogNHB4ICFkZWZhdWx0O1xuJHUtYnV0dG9uLWxhcmdlLXdpZHRoOiAxMDAlICFkZWZhdWx0O1xuJHUtYnV0dG9uLWxhcmdlLWhlaWdodDogNTBweCAhZGVmYXVsdDtcbiR1LWJ1dHRvbi1ub3JtYWwtcGFkZGluZzogMCAxMnB4ICFkZWZhdWx0O1xuJHUtYnV0dG9uLWxhcmdlLXBhZGRpbmc6IDAgMTVweCAhZGVmYXVsdDtcbiR1LWJ1dHRvbi1ub3JtYWwtZm9udC1zaXplOiAxNHB4ICFkZWZhdWx0O1xuJHUtYnV0dG9uLXNtYWxsLW1pbi13aWR0aDogNjBweCAhZGVmYXVsdDtcbiR1LWJ1dHRvbi1zbWFsbC1oZWlnaHQ6IDMwcHggIWRlZmF1bHQ7XG4kdS1idXR0b24tc21hbGwtcGFkZGluZzogMHB4IDhweCAhZGVmYXVsdDtcbiR1LWJ1dHRvbi1taW5pLXBhZGRpbmc6IDBweCA4cHggIWRlZmF1bHQ7XG4kdS1idXR0b24tc21hbGwtZm9udC1zaXplOiAxMnB4ICFkZWZhdWx0O1xuJHUtYnV0dG9uLW1pbmktaGVpZ2h0OiAyMnB4ICFkZWZhdWx0O1xuJHUtYnV0dG9uLW1pbmktZm9udC1zaXplOiAxMHB4ICFkZWZhdWx0O1xuJHUtYnV0dG9uLW1pbmktbWluLXdpZHRoOiA1MHB4ICFkZWZhdWx0O1xuJHUtYnV0dG9uLWRpc2FibGVkLW9wYWNpdHk6IDAuNSAhZGVmYXVsdDtcbiR1LWJ1dHRvbi1pbmZvLWNvbG9yOiAjMzIzMjMzICFkZWZhdWx0O1xuJHUtYnV0dG9uLWluZm8tYmFja2dyb3VuZC1jb2xvcjogI2ZmZiAhZGVmYXVsdDtcbiR1LWJ1dHRvbi1pbmZvLWJvcmRlci1jb2xvcjogI2ViZWRmMCAhZGVmYXVsdDtcbiR1LWJ1dHRvbi1pbmZvLWJvcmRlci13aWR0aDogMXB4ICFkZWZhdWx0O1xuJHUtYnV0dG9uLWluZm8tYm9yZGVyLXN0eWxlOiBzb2xpZCAhZGVmYXVsdDtcbiR1LWJ1dHRvbi1zdWNjZXNzLWNvbG9yOiAjZmZmICFkZWZhdWx0O1xuJHUtYnV0dG9uLXN1Y2Nlc3MtYmFja2dyb3VuZC1jb2xvcjogJHUtc3VjY2VzcyAhZGVmYXVsdDtcbiR1LWJ1dHRvbi1zdWNjZXNzLWJvcmRlci1jb2xvcjogJHUtYnV0dG9uLXN1Y2Nlc3MtYmFja2dyb3VuZC1jb2xvciAhZGVmYXVsdDtcbiR1LWJ1dHRvbi1zdWNjZXNzLWJvcmRlci13aWR0aDogMXB4ICFkZWZhdWx0O1xuJHUtYnV0dG9uLXN1Y2Nlc3MtYm9yZGVyLXN0eWxlOiBzb2xpZCAhZGVmYXVsdDtcbiR1LWJ1dHRvbi1wcmltYXJ5LWNvbG9yOiAjZmZmICFkZWZhdWx0O1xuJHUtYnV0dG9uLXByaW1hcnktYmFja2dyb3VuZC1jb2xvcjogJHUtcHJpbWFyeSAhZGVmYXVsdDtcbiR1LWJ1dHRvbi1wcmltYXJ5LWJvcmRlci1jb2xvcjogJHUtYnV0dG9uLXByaW1hcnktYmFja2dyb3VuZC1jb2xvciAhZGVmYXVsdDtcbiR1LWJ1dHRvbi1wcmltYXJ5LWJvcmRlci13aWR0aDogMXB4ICFkZWZhdWx0O1xuJHUtYnV0dG9uLXByaW1hcnktYm9yZGVyLXN0eWxlOiBzb2xpZCAhZGVmYXVsdDtcbiR1LWJ1dHRvbi1lcnJvci1jb2xvcjogI2ZmZiAhZGVmYXVsdDtcbiR1LWJ1dHRvbi1lcnJvci1iYWNrZ3JvdW5kLWNvbG9yOiAkdS1lcnJvciAhZGVmYXVsdDtcbiR1LWJ1dHRvbi1lcnJvci1ib3JkZXItY29sb3I6ICR1LWJ1dHRvbi1lcnJvci1iYWNrZ3JvdW5kLWNvbG9yICFkZWZhdWx0O1xuJHUtYnV0dG9uLWVycm9yLWJvcmRlci13aWR0aDogMXB4ICFkZWZhdWx0O1xuJHUtYnV0dG9uLWVycm9yLWJvcmRlci1zdHlsZTogc29saWQgIWRlZmF1bHQ7XG4kdS1idXR0b24td2FybmluZy1jb2xvcjogI2ZmZiAhZGVmYXVsdDtcbiR1LWJ1dHRvbi13YXJuaW5nLWJhY2tncm91bmQtY29sb3I6ICR1LXdhcm5pbmcgIWRlZmF1bHQ7XG4kdS1idXR0b24td2FybmluZy1ib3JkZXItY29sb3I6ICR1LWJ1dHRvbi13YXJuaW5nLWJhY2tncm91bmQtY29sb3IgIWRlZmF1bHQ7XG4kdS1idXR0b24td2FybmluZy1ib3JkZXItd2lkdGg6IDFweCAhZGVmYXVsdDtcbiR1LWJ1dHRvbi13YXJuaW5nLWJvcmRlci1zdHlsZTogc29saWQgIWRlZmF1bHQ7XG4kdS1idXR0b24tYmxvY2std2lkdGg6IDEwMCUgIWRlZmF1bHQ7XG4kdS1idXR0b24tY2lyY2xlLWJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMDBweCAhZGVmYXVsdDtcbiR1LWJ1dHRvbi1jaXJjbGUtYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTAwcHggIWRlZmF1bHQ7XG4kdS1idXR0b24tY2lyY2xlLWJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDEwMHB4ICFkZWZhdWx0O1xuJHUtYnV0dG9uLWNpcmNsZS1ib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTAwcHggIWRlZmF1bHQ7XG4kdS1idXR0b24tc3F1YXJlLWJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAzcHggIWRlZmF1bHQ7XG4kdS1idXR0b24tc3F1YXJlLWJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDNweCAhZGVmYXVsdDtcbiR1LWJ1dHRvbi1zcXVhcmUtYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogM3B4ICFkZWZhdWx0O1xuJHUtYnV0dG9uLXNxdWFyZS1ib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogM3B4ICFkZWZhdWx0O1xuJHUtYnV0dG9uLWljb24tbWluLXdpZHRoOiAxZW0gIWRlZmF1bHQ7XG4kdS1idXR0b24tcGxhaW4tYmFja2dyb3VuZC1jb2xvcjogI2ZmZiAhZGVmYXVsdDtcbiR1LWJ1dHRvbi1oYWlybGluZS1ib3JkZXItd2lkdGg6IDAuNXB4ICFkZWZhdWx0O1xuXG4udS1idXR0b24ge1xuICAgIGhlaWdodDogJHUtYnV0dG9uLXUtYnV0dG9uLWhlaWdodDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBAaW5jbHVkZSBmbGV4O1xuICAgIC8qICNpZm5kZWYgQVBQLU5WVUUgKi9cbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIC8qICNlbmRpZiAqL1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG5cbiAgICAmX190ZXh0IHtcbiAgICAgICAgZm9udC1zaXplOiAkdS1idXR0b24tdGV4dC1mb250LXNpemU7XG4gICAgfVxuXG4gICAgJl9fbG9hZGluZy10ZXh0IHtcbiAgICAgICAgZm9udC1zaXplOiAkdS1idXR0b24tbG9hZGluZy10ZXh0LWZvbnQtc2l6ZTtcbiAgICAgICAgbWFyZ2luLWxlZnQ6ICR1LWJ1dHRvbi1sb2FkaW5nLXRleHQtbWFyZ2luLWxlZnQ7XG4gICAgfVxuXG4gICAgJi0tbGFyZ2Uge1xuICAgICAgICAvKiAjaWZuZGVmIEFQUC1OVlVFICovXG4gICAgICAgIHdpZHRoOiAkdS1idXR0b24tbGFyZ2Utd2lkdGg7XG4gICAgICAgIC8qICNlbmRpZiAqL1xuICAgICAgICBoZWlnaHQ6ICR1LWJ1dHRvbi1sYXJnZS1oZWlnaHQ7XG4gICAgICAgIHBhZGRpbmc6ICR1LWJ1dHRvbi1sYXJnZS1wYWRkaW5nO1xuICAgIH1cblxuICAgICYtLW5vcm1hbCB7XG4gICAgICAgIHBhZGRpbmc6ICR1LWJ1dHRvbi1ub3JtYWwtcGFkZGluZztcbiAgICAgICAgZm9udC1zaXplOiAkdS1idXR0b24tbm9ybWFsLWZvbnQtc2l6ZTtcbiAgICB9XG5cbiAgICAmLS1zbWFsbCB7XG4gICAgICAgIC8qICNpZm5kZWYgQVBQLU5WVUUgKi9cbiAgICAgICAgbWluLXdpZHRoOiAkdS1idXR0b24tc21hbGwtbWluLXdpZHRoO1xuICAgICAgICAvKiAjZW5kaWYgKi9cbiAgICAgICAgaGVpZ2h0OiAkdS1idXR0b24tc21hbGwtaGVpZ2h0O1xuICAgICAgICBwYWRkaW5nOiAkdS1idXR0b24tc21hbGwtcGFkZGluZztcbiAgICAgICAgZm9udC1zaXplOiAkdS1idXR0b24tc21hbGwtZm9udC1zaXplO1xuICAgIH1cblxuICAgICYtLW1pbmkge1xuICAgICAgICBoZWlnaHQ6ICR1LWJ1dHRvbi1taW5pLWhlaWdodDtcbiAgICAgICAgZm9udC1zaXplOiAkdS1idXR0b24tbWluaS1mb250LXNpemU7XG4gICAgICAgIC8qICNpZm5kZWYgQVBQLU5WVUUgKi9cbiAgICAgICAgbWluLXdpZHRoOiAkdS1idXR0b24tbWluaS1taW4td2lkdGg7XG4gICAgICAgIC8qICNlbmRpZiAqL1xuICAgICAgICBwYWRkaW5nOiAkdS1idXR0b24tbWluaS1wYWRkaW5nO1xuICAgIH1cblxuICAgICYtLWRpc2FibGVkIHtcbiAgICAgICAgb3BhY2l0eTogJHUtYnV0dG9uLWRpc2FibGVkLW9wYWNpdHk7XG4gICAgfVxuXG4gICAgJi0taW5mbyB7XG4gICAgICAgIGNvbG9yOiAkdS1idXR0b24taW5mby1jb2xvcjtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHUtYnV0dG9uLWluZm8tYmFja2dyb3VuZC1jb2xvcjtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAkdS1idXR0b24taW5mby1ib3JkZXItY29sb3I7XG4gICAgICAgIGJvcmRlci13aWR0aDogJHUtYnV0dG9uLWluZm8tYm9yZGVyLXdpZHRoO1xuICAgICAgICBib3JkZXItc3R5bGU6ICR1LWJ1dHRvbi1pbmZvLWJvcmRlci1zdHlsZTtcbiAgICB9XG5cbiAgICAmLS1zdWNjZXNzIHtcbiAgICAgICAgY29sb3I6ICR1LWJ1dHRvbi1zdWNjZXNzLWNvbG9yO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdS1idXR0b24tc3VjY2Vzcy1iYWNrZ3JvdW5kLWNvbG9yO1xuICAgICAgICBib3JkZXItY29sb3I6ICR1LWJ1dHRvbi1zdWNjZXNzLWJvcmRlci1jb2xvcjtcbiAgICAgICAgYm9yZGVyLXdpZHRoOiAkdS1idXR0b24tc3VjY2Vzcy1ib3JkZXItd2lkdGg7XG4gICAgICAgIGJvcmRlci1zdHlsZTogJHUtYnV0dG9uLXN1Y2Nlc3MtYm9yZGVyLXN0eWxlO1xuICAgIH1cblxuICAgICYtLXByaW1hcnkge1xuICAgICAgICBjb2xvcjogJHUtYnV0dG9uLXByaW1hcnktY29sb3I7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR1LWJ1dHRvbi1wcmltYXJ5LWJhY2tncm91bmQtY29sb3I7XG4gICAgICAgIGJvcmRlci1jb2xvcjogJHUtYnV0dG9uLXByaW1hcnktYm9yZGVyLWNvbG9yO1xuICAgICAgICBib3JkZXItd2lkdGg6ICR1LWJ1dHRvbi1wcmltYXJ5LWJvcmRlci13aWR0aDtcbiAgICAgICAgYm9yZGVyLXN0eWxlOiAkdS1idXR0b24tcHJpbWFyeS1ib3JkZXItc3R5bGU7XG4gICAgfVxuXG4gICAgJi0tZXJyb3Ige1xuICAgICAgICBjb2xvcjogJHUtYnV0dG9uLWVycm9yLWNvbG9yO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdS1idXR0b24tZXJyb3ItYmFja2dyb3VuZC1jb2xvcjtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAkdS1idXR0b24tZXJyb3ItYm9yZGVyLWNvbG9yO1xuICAgICAgICBib3JkZXItd2lkdGg6ICR1LWJ1dHRvbi1lcnJvci1ib3JkZXItd2lkdGg7XG4gICAgICAgIGJvcmRlci1zdHlsZTogJHUtYnV0dG9uLWVycm9yLWJvcmRlci1zdHlsZTtcbiAgICB9XG5cbiAgICAmLS13YXJuaW5nIHtcbiAgICAgICAgY29sb3I6ICR1LWJ1dHRvbi13YXJuaW5nLWNvbG9yO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdS1idXR0b24td2FybmluZy1iYWNrZ3JvdW5kLWNvbG9yO1xuICAgICAgICBib3JkZXItY29sb3I6ICR1LWJ1dHRvbi13YXJuaW5nLWJvcmRlci1jb2xvcjtcbiAgICAgICAgYm9yZGVyLXdpZHRoOiAkdS1idXR0b24td2FybmluZy1ib3JkZXItd2lkdGg7XG4gICAgICAgIGJvcmRlci1zdHlsZTogJHUtYnV0dG9uLXdhcm5pbmctYm9yZGVyLXN0eWxlO1xuICAgIH1cblxuICAgICYtLWJsb2NrIHtcbiAgICAgICAgQGluY2x1ZGUgZmxleDtcbiAgICAgICAgd2lkdGg6ICR1LWJ1dHRvbi1ibG9jay13aWR0aDtcbiAgICB9XG5cbiAgICAmLS1jaXJjbGUge1xuICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogJHUtYnV0dG9uLWNpcmNsZS1ib3JkZXItdG9wLXJpZ2h0LXJhZGl1cztcbiAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogJHUtYnV0dG9uLWNpcmNsZS1ib3JkZXItdG9wLWxlZnQtcmFkaXVzO1xuICAgICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAkdS1idXR0b24tY2lyY2xlLWJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM7XG4gICAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAkdS1idXR0b24tY2lyY2xlLWJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzO1xuICAgIH1cblxuICAgICYtLXNxdWFyZSB7XG4gICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6ICR1LWJ1dHRvbi1zcXVhcmUtYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM7XG4gICAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAkdS1idXR0b24tc3F1YXJlLWJvcmRlci10b3AtbGVmdC1yYWRpdXM7XG4gICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6ICR1LWJ1dHRvbi1zcXVhcmUtYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1cztcbiAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6ICR1LWJ1dHRvbi1zcXVhcmUtYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM7XG4gICAgfVxuXG4gICAgJl9faWNvbiB7XG4gICAgICAgIC8qICNpZm5kZWYgQVBQLU5WVUUgKi9cbiAgICAgICAgbWluLXdpZHRoOiAkdS1idXR0b24taWNvbi1taW4td2lkdGg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiBpbmhlcml0ICFpbXBvcnRhbnQ7XG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gICAgICAgIC8qICNlbmRpZiAqL1xuICAgIH1cblxuICAgICYtLXBsYWluIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHUtYnV0dG9uLXBsYWluLWJhY2tncm91bmQtY29sb3I7XG4gICAgfVxuXG4gICAgJi0taGFpcmxpbmUge1xuICAgICAgICBib3JkZXItd2lkdGg6ICR1LWJ1dHRvbi1oYWlybGluZS1ib3JkZXItd2lkdGggIWltcG9ydGFudDtcbiAgICB9XG59XG48L3N0eWxlPlxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///159\n");

/***/ }),

/***/ 16:
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

/***/ 160:
/*!******************************************************************************************!*\
  !*** /Users/tongjie/Desktop/QNRTC-Uniapp/demo/uni_modules/uview-ui/libs/mixin/button.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\nvar _default = {\n  props: {\n    lang: String,\n    sessionFrom: String,\n    sendMessageTitle: String,\n    sendMessagePath: String,\n    sendMessageImg: String,\n    showMessageCard: Boolean,\n    appParameter: String,\n    formType: String,\n    openType: String\n  }\n};\nexports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vdW5pX21vZHVsZXMvdXZpZXctdWkvbGlicy9taXhpbi9idXR0b24uanMiXSwibmFtZXMiOlsicHJvcHMiLCJsYW5nIiwiU3RyaW5nIiwic2Vzc2lvbkZyb20iLCJzZW5kTWVzc2FnZVRpdGxlIiwic2VuZE1lc3NhZ2VQYXRoIiwic2VuZE1lc3NhZ2VJbWciLCJzaG93TWVzc2FnZUNhcmQiLCJCb29sZWFuIiwiYXBwUGFyYW1ldGVyIiwiZm9ybVR5cGUiLCJvcGVuVHlwZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O2VBQWU7RUFDWEEsS0FBSyxFQUFFO0lBQ0hDLElBQUksRUFBRUMsTUFBTTtJQUNaQyxXQUFXLEVBQUVELE1BQU07SUFDbkJFLGdCQUFnQixFQUFFRixNQUFNO0lBQ3hCRyxlQUFlLEVBQUVILE1BQU07SUFDdkJJLGNBQWMsRUFBRUosTUFBTTtJQUN0QkssZUFBZSxFQUFFQyxPQUFPO0lBQ3hCQyxZQUFZLEVBQUVQLE1BQU07SUFDcEJRLFFBQVEsRUFBRVIsTUFBTTtJQUNoQlMsUUFBUSxFQUFFVDtFQUNkO0FBQ0osQ0FBQztBQUFBIiwiZmlsZSI6IjE2MC5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgICAgbGFuZzogU3RyaW5nLFxyXG4gICAgICAgIHNlc3Npb25Gcm9tOiBTdHJpbmcsXHJcbiAgICAgICAgc2VuZE1lc3NhZ2VUaXRsZTogU3RyaW5nLFxyXG4gICAgICAgIHNlbmRNZXNzYWdlUGF0aDogU3RyaW5nLFxyXG4gICAgICAgIHNlbmRNZXNzYWdlSW1nOiBTdHJpbmcsXHJcbiAgICAgICAgc2hvd01lc3NhZ2VDYXJkOiBCb29sZWFuLFxyXG4gICAgICAgIGFwcFBhcmFtZXRlcjogU3RyaW5nLFxyXG4gICAgICAgIGZvcm1UeXBlOiBTdHJpbmcsXHJcbiAgICAgICAgb3BlblR5cGU6IFN0cmluZ1xyXG4gICAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///160\n");

/***/ }),

/***/ 161:
/*!********************************************************************************************!*\
  !*** /Users/tongjie/Desktop/QNRTC-Uniapp/demo/uni_modules/uview-ui/libs/mixin/openType.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\nvar _default = {\n  props: {\n    openType: String\n  },\n  methods: {\n    onGetUserInfo: function onGetUserInfo(event) {\n      this.$emit('getuserinfo', event.detail);\n    },\n    onContact: function onContact(event) {\n      this.$emit('contact', event.detail);\n    },\n    onGetPhoneNumber: function onGetPhoneNumber(event) {\n      this.$emit('getphonenumber', event.detail);\n    },\n    onError: function onError(event) {\n      this.$emit('error', event.detail);\n    },\n    onLaunchApp: function onLaunchApp(event) {\n      this.$emit('launchapp', event.detail);\n    },\n    onOpenSetting: function onOpenSetting(event) {\n      this.$emit('opensetting', event.detail);\n    }\n  }\n};\nexports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vdW5pX21vZHVsZXMvdXZpZXctdWkvbGlicy9taXhpbi9vcGVuVHlwZS5qcyJdLCJuYW1lcyI6WyJwcm9wcyIsIm9wZW5UeXBlIiwiU3RyaW5nIiwibWV0aG9kcyIsIm9uR2V0VXNlckluZm8iLCJldmVudCIsIiRlbWl0IiwiZGV0YWlsIiwib25Db250YWN0Iiwib25HZXRQaG9uZU51bWJlciIsIm9uRXJyb3IiLCJvbkxhdW5jaEFwcCIsIm9uT3BlblNldHRpbmciXSwibWFwcGluZ3MiOiI7Ozs7OztlQUFlO0VBQ1hBLEtBQUssRUFBRTtJQUNIQyxRQUFRLEVBQUVDO0VBQ2QsQ0FBQztFQUNEQyxPQUFPLEVBQUU7SUFDTEMsYUFBYSx5QkFBQ0MsS0FBSyxFQUFFO01BQ2pCLElBQUksQ0FBQ0MsS0FBSyxDQUFDLGFBQWEsRUFBRUQsS0FBSyxDQUFDRSxNQUFNLENBQUM7SUFDM0MsQ0FBQztJQUNEQyxTQUFTLHFCQUFDSCxLQUFLLEVBQUU7TUFDYixJQUFJLENBQUNDLEtBQUssQ0FBQyxTQUFTLEVBQUVELEtBQUssQ0FBQ0UsTUFBTSxDQUFDO0lBQ3ZDLENBQUM7SUFDREUsZ0JBQWdCLDRCQUFDSixLQUFLLEVBQUU7TUFDcEIsSUFBSSxDQUFDQyxLQUFLLENBQUMsZ0JBQWdCLEVBQUVELEtBQUssQ0FBQ0UsTUFBTSxDQUFDO0lBQzlDLENBQUM7SUFDREcsT0FBTyxtQkFBQ0wsS0FBSyxFQUFFO01BQ1gsSUFBSSxDQUFDQyxLQUFLLENBQUMsT0FBTyxFQUFFRCxLQUFLLENBQUNFLE1BQU0sQ0FBQztJQUNyQyxDQUFDO0lBQ0RJLFdBQVcsdUJBQUNOLEtBQUssRUFBRTtNQUNmLElBQUksQ0FBQ0MsS0FBSyxDQUFDLFdBQVcsRUFBRUQsS0FBSyxDQUFDRSxNQUFNLENBQUM7SUFDekMsQ0FBQztJQUNESyxhQUFhLHlCQUFDUCxLQUFLLEVBQUU7TUFDakIsSUFBSSxDQUFDQyxLQUFLLENBQUMsYUFBYSxFQUFFRCxLQUFLLENBQUNFLE1BQU0sQ0FBQztJQUMzQztFQUNKO0FBQ0osQ0FBQztBQUFBIiwiZmlsZSI6IjE2MS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgICAgb3BlblR5cGU6IFN0cmluZ1xyXG4gICAgfSxcclxuICAgIG1ldGhvZHM6IHtcclxuICAgICAgICBvbkdldFVzZXJJbmZvKGV2ZW50KSB7XHJcbiAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2dldHVzZXJpbmZvJywgZXZlbnQuZGV0YWlsKVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgb25Db250YWN0KGV2ZW50KSB7XHJcbiAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2NvbnRhY3QnLCBldmVudC5kZXRhaWwpXHJcbiAgICAgICAgfSxcclxuICAgICAgICBvbkdldFBob25lTnVtYmVyKGV2ZW50KSB7XHJcbiAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2dldHBob25lbnVtYmVyJywgZXZlbnQuZGV0YWlsKVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgb25FcnJvcihldmVudCkge1xyXG4gICAgICAgICAgICB0aGlzLiRlbWl0KCdlcnJvcicsIGV2ZW50LmRldGFpbClcclxuICAgICAgICB9LFxyXG4gICAgICAgIG9uTGF1bmNoQXBwKGV2ZW50KSB7XHJcbiAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2xhdW5jaGFwcCcsIGV2ZW50LmRldGFpbClcclxuICAgICAgICB9LFxyXG4gICAgICAgIG9uT3BlblNldHRpbmcoZXZlbnQpIHtcclxuICAgICAgICAgICAgdGhpcy4kZW1pdCgnb3BlbnNldHRpbmcnLCBldmVudC5kZXRhaWwpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///161\n");

/***/ }),

/***/ 162:
/*!**************************************************************************************************!*\
  !*** /Users/tongjie/Desktop/QNRTC-Uniapp/demo/uni_modules/uview-ui/components/u-button/props.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n/*\n * @Author       : LQ\n * @Description  :\n * @version      : 1.0\n * @Date         : 2021-08-16 10:04:04\n * @LastAuthor   : LQ\n * @lastTime     : 2021-08-16 10:04:24\n * @FilePath     : /u-view2.0/uview-ui/components/u-button/props.js\n */\nvar _default = {\n  props: {\n    // 是否细边框\n    hairline: {\n      type: Boolean,\n      default: uni.$u.props.button.hairline\n    },\n    // 按钮的预置样式，info，primary，error，warning，success\n    type: {\n      type: String,\n      default: uni.$u.props.button.type\n    },\n    // 按钮尺寸，large，normal，small，mini\n    size: {\n      type: String,\n      default: uni.$u.props.button.size\n    },\n    // 按钮形状，circle（两边为半圆），square（带圆角）\n    shape: {\n      type: String,\n      default: uni.$u.props.button.shape\n    },\n    // 按钮是否镂空\n    plain: {\n      type: Boolean,\n      default: uni.$u.props.button.plain\n    },\n    // 是否禁止状态\n    disabled: {\n      type: Boolean,\n      default: uni.$u.props.button.disabled\n    },\n    // 是否加载中\n    loading: {\n      type: Boolean,\n      default: uni.$u.props.button.loading\n    },\n    // 加载中提示文字\n    loadingText: {\n      type: [String, Number],\n      default: uni.$u.props.button.loadingText\n    },\n    // 加载状态图标类型\n    loadingMode: {\n      type: String,\n      default: uni.$u.props.button.loadingMode\n    },\n    // 加载图标大小\n    loadingSize: {\n      type: [String, Number],\n      default: uni.$u.props.button.loadingSize\n    },\n    // 开放能力，具体请看uniapp稳定关于button组件部分说明\n    // https://uniapp.dcloud.io/component/button\n    openType: {\n      type: String,\n      default: uni.$u.props.button.openType\n    },\n    // 用于 <form> 组件，点击分别会触发 <form> 组件的 submit/reset 事件\n    // 取值为submit（提交表单），reset（重置表单）\n    formType: {\n      type: String,\n      default: uni.$u.props.button.formType\n    },\n    // 打开 APP 时，向 APP 传递的参数，open-type=launchApp时有效\n    // 只微信小程序、QQ小程序有效\n    appParameter: {\n      type: String,\n      default: uni.$u.props.button.appParameter\n    },\n    // 指定是否阻止本节点的祖先节点出现点击态，微信小程序有效\n    hoverStopPropagation: {\n      type: Boolean,\n      default: uni.$u.props.button.hoverStopPropagation\n    },\n    // 指定返回用户信息的语言，zh_CN 简体中文，zh_TW 繁体中文，en 英文。只微信小程序有效\n    lang: {\n      type: String,\n      default: uni.$u.props.button.lang\n    },\n    // 会话来源，open-type=\"contact\"时有效。只微信小程序有效\n    sessionFrom: {\n      type: String,\n      default: uni.$u.props.button.sessionFrom\n    },\n    // 会话内消息卡片标题，open-type=\"contact\"时有效\n    // 默认当前标题，只微信小程序有效\n    sendMessageTitle: {\n      type: String,\n      default: uni.$u.props.button.sendMessageTitle\n    },\n    // 会话内消息卡片点击跳转小程序路径，open-type=\"contact\"时有效\n    // 默认当前分享路径，只微信小程序有效\n    sendMessagePath: {\n      type: String,\n      default: uni.$u.props.button.sendMessagePath\n    },\n    // 会话内消息卡片图片，open-type=\"contact\"时有效\n    // 默认当前页面截图，只微信小程序有效\n    sendMessageImg: {\n      type: String,\n      default: uni.$u.props.button.sendMessageImg\n    },\n    // 是否显示会话内消息卡片，设置此参数为 true，用户进入客服会话会在右下角显示\"可能要发送的小程序\"提示，\n    // 用户点击后可以快速发送小程序消息，open-type=\"contact\"时有效\n    showMessageCard: {\n      type: Boolean,\n      default: uni.$u.props.button.showMessageCard\n    },\n    // 额外传参参数，用于小程序的data-xxx属性，通过target.dataset.name获取\n    dataName: {\n      type: String,\n      default: uni.$u.props.button.dataName\n    },\n    // 节流，一定时间内只能触发一次\n    throttleTime: {\n      type: [String, Number],\n      default: uni.$u.props.button.throttleTime\n    },\n    // 按住后多久出现点击态，单位毫秒\n    hoverStartTime: {\n      type: [String, Number],\n      default: uni.$u.props.button.hoverStartTime\n    },\n    // 手指松开后点击态保留时间，单位毫秒\n    hoverStayTime: {\n      type: [String, Number],\n      default: uni.$u.props.button.hoverStayTime\n    },\n    // 按钮文字，之所以通过props传入，是因为slot传入的话\n    // nvue中无法控制文字的样式\n    text: {\n      type: [String, Number],\n      default: uni.$u.props.button.text\n    },\n    // 按钮图标\n    icon: {\n      type: String,\n      default: uni.$u.props.button.icon\n    },\n    // 按钮图标\n    iconColor: {\n      type: String,\n      default: uni.$u.props.button.icon\n    },\n    // 按钮颜色，支持传入linear-gradient渐变色\n    color: {\n      type: String,\n      default: uni.$u.props.button.color\n    }\n  }\n};\nexports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vdW5pX21vZHVsZXMvdXZpZXctdWkvY29tcG9uZW50cy91LWJ1dHRvbi9wcm9wcy5qcyJdLCJuYW1lcyI6WyJwcm9wcyIsImhhaXJsaW5lIiwidHlwZSIsIkJvb2xlYW4iLCJkZWZhdWx0IiwidW5pIiwiJHUiLCJidXR0b24iLCJTdHJpbmciLCJzaXplIiwic2hhcGUiLCJwbGFpbiIsImRpc2FibGVkIiwibG9hZGluZyIsImxvYWRpbmdUZXh0IiwiTnVtYmVyIiwibG9hZGluZ01vZGUiLCJsb2FkaW5nU2l6ZSIsIm9wZW5UeXBlIiwiZm9ybVR5cGUiLCJhcHBQYXJhbWV0ZXIiLCJob3ZlclN0b3BQcm9wYWdhdGlvbiIsImxhbmciLCJzZXNzaW9uRnJvbSIsInNlbmRNZXNzYWdlVGl0bGUiLCJzZW5kTWVzc2FnZVBhdGgiLCJzZW5kTWVzc2FnZUltZyIsInNob3dNZXNzYWdlQ2FyZCIsImRhdGFOYW1lIiwidGhyb3R0bGVUaW1lIiwiaG92ZXJTdGFydFRpbWUiLCJob3ZlclN0YXlUaW1lIiwidGV4dCIsImljb24iLCJpY29uQ29sb3IiLCJjb2xvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUkEsZUFTZTtFQUNYQSxLQUFLLEVBQUU7SUFDSDtJQUNBQyxRQUFRLEVBQUU7TUFDTkMsSUFBSSxFQUFFQyxPQUFPO01BQ2JDLE9BQU8sRUFBRUMsR0FBRyxDQUFDQyxFQUFFLENBQUNOLEtBQUssQ0FBQ08sTUFBTSxDQUFDTjtJQUNqQyxDQUFDO0lBQ0Q7SUFDQUMsSUFBSSxFQUFFO01BQ0ZBLElBQUksRUFBRU0sTUFBTTtNQUNaSixPQUFPLEVBQUVDLEdBQUcsQ0FBQ0MsRUFBRSxDQUFDTixLQUFLLENBQUNPLE1BQU0sQ0FBQ0w7SUFDakMsQ0FBQztJQUNEO0lBQ0FPLElBQUksRUFBRTtNQUNGUCxJQUFJLEVBQUVNLE1BQU07TUFDWkosT0FBTyxFQUFFQyxHQUFHLENB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LENBQUM7TUFDdEJYLE9BQU8sRUFBRUMsR0FBRyxDQUFDQyxFQUFFLENBQUNOLEtBQUssQ0FBQ08sTUFBTSxDQUFDeUI7SUFDakMsQ0FBQztJQUNEO0lBQ0FDLElBQUksRUFBRTtNQUNGL0IsSUFBSSxFQUFFTSxNQUFNO01BQ1pKLE9BQU8sRUFBRUMsR0FBRyxDQUFDQyxFQUFFLENBQUNOLEtBQUssQ0FBQ08sTUFBTSxDQUFDMEI7SUFDakMsQ0FBQztJQUNEO0lBQ0FDLFNBQVMsRUFBRTtNQUNQaEMsSUFBSSxFQUFFTSxNQUFNO01BQ1pKLE9BQU8sRUFBRUMsR0FBRyxDQUFDQyxFQUFFLENBQUNOLEtBQUssQ0FBQ08sTUFBTSxDQUFDMEI7SUFDakMsQ0FBQztJQUNEO0lBQ0FFLEtBQUssRUFBRTtNQUNIakMsSUFBSSxFQUFFTSxNQUFNO01BQ1pKLE9BQU8sRUFBRUMsR0FBRyxDQUFDQyxFQUFFLENBQUNOLEtBQUssQ0FBQ08sTUFBTSxDQUFDNEI7SUFDakM7RUFDSjtBQUNKLENBQUM7QUFBQSIsImZpbGUiOiIxNjIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogQEF1dGhvciAgICAgICA6IExRXG4gKiBARGVzY3JpcHRpb24gIDpcbiAqIEB2ZXJzaW9uICAgICAgOiAxLjBcbiAqIEBEYXRlICAgICAgICAgOiAyMDIxLTA4LTE2IDEwOjA0OjA0XG4gKiBATGFzdEF1dGhvciAgIDogTFFcbiAqIEBsYXN0VGltZSAgICAgOiAyMDIxLTA4LTE2IDEwOjA0OjI0XG4gKiBARmlsZVBhdGggICAgIDogL3UtdmlldzIuMC91dmlldy11aS9jb21wb25lbnRzL3UtYnV0dG9uL3Byb3BzLmpzXG4gKi9cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBwcm9wczoge1xuICAgICAgICAvLyDmmK/lkKbnu4bovrnmoYZcbiAgICAgICAgaGFpcmxpbmU6IHtcbiAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgICAgICBkZWZhdWx0OiB1bmkuJHUucHJvcHMuYnV0dG9uLmhhaXJsaW5lXG4gICAgICAgIH0sXG4gICAgICAgIC8vIOaMiemSrueahOmihOe9ruagt+W8j++8jGluZm/vvIxwcmltYXJ577yMZXJyb3LvvIx3YXJuaW5n77yMc3VjY2Vzc1xuICAgICAgICB0eXBlOiB7XG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICBkZWZhdWx0OiB1bmkuJHUucHJvcHMuYnV0dG9uLnR5cGVcbiAgICAgICAgfSxcbiAgICAgICAgLy8g5oyJ6ZKu5bC65a+477yMbGFyZ2XvvIxub3JtYWzvvIxzbWFsbO+8jG1pbmlcbiAgICAgICAgc2l6ZToge1xuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgZGVmYXVsdDogdW5pLiR1LnByb3BzLmJ1dHRvbi5zaXplXG4gICAgICAgIH0sXG4gICAgICAgIC8vIOaMiemSruW9oueKtu+8jGNpcmNsZe+8iOS4pOi+ueS4uuWNiuWchu+8ie+8jHNxdWFyZe+8iOW4puWchuinku+8iVxuICAgICAgICBzaGFwZToge1xuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgZGVmYXVsdDogdW5pLiR1LnByb3BzLmJ1dHRvbi5zaGFwZVxuICAgICAgICB9LFxuICAgICAgICAvLyDmjInpkq7mmK/lkKbplYLnqbpcbiAgICAgICAgcGxhaW46IHtcbiAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgICAgICBkZWZhdWx0OiB1bmkuJHUucHJvcHMuYnV0dG9uLnBsYWluXG4gICAgICAgIH0sXG4gICAgICAgIC8vIOaYr+WQpuemgeatoueKtuaAgVxuICAgICAgICBkaXNhYmxlZDoge1xuICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgICAgIGRlZmF1bHQ6IHVuaS4kdS5wcm9wcy5idXR0b24uZGlzYWJsZWRcbiAgICAgICAgfSxcbiAgICAgICAgLy8g5piv5ZCm5Yqg6L295LitXG4gICAgICAgIGxvYWRpbmc6IHtcbiAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgICAgICBkZWZhdWx0OiB1bmkuJHUucHJvcHMuYnV0dG9uLmxvYWRpbmdcbiAgICAgICAgfSxcbiAgICAgICAgLy8g5Yqg6L295Lit5o+Q56S65paH5a2XXG4gICAgICAgIGxvYWRpbmdUZXh0OiB7XG4gICAgICAgICAgICB0eXBlOiBbU3RyaW5nLCBOdW1iZXJdLFxuICAgICAgICAgICAgZGVmYXVsdDogdW5pLiR1LnByb3BzLmJ1dHRvbi5sb2FkaW5nVGV4dFxuICAgICAgICB9LFxuICAgICAgICAvLyDliqDovb3nirbmgIHlm77moIfnsbvlnotcbiAgICAgICAgbG9hZGluZ01vZGU6IHtcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICAgIGRlZmF1bHQ6IHVuaS4kdS5wcm9wcy5idXR0b24ubG9hZGluZ01vZGVcbiAgICAgICAgfSxcbiAgICAgICAgLy8g5Yqg6L295Zu+5qCH5aSn5bCPXG4gICAgICAgIGxvYWRpbmdTaXplOiB7XG4gICAgICAgICAgICB0eXBlOiBbU3RyaW5nLCBOdW1iZXJdLFxuICAgICAgICAgICAgZGVmYXVsdDogdW5pLiR1LnByb3BzLmJ1dHRvbi5sb2FkaW5nU2l6ZVxuICAgICAgICB9LFxuICAgICAgICAvLyDlvIDmlL7og73lipvvvIzlhbfkvZPor7fnnIt1bmlhcHDnqLPlrprlhbPkuo5idXR0b27nu4Tku7bpg6jliIbor7TmmI5cbiAgICAgICAgLy8gaHR0cHM6Ly91bmlhcHAuZGNsb3VkLmlvL2NvbXBvbmVudC9idXR0b25cbiAgICAgICAgb3BlblR5cGU6IHtcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICAgIGRlZmF1bHQ6IHVuaS4kdS5wcm9wcy5idXR0b24ub3BlblR5cGVcbiAgICAgICAgfSxcbiAgICAgICAgLy8g55So5LqOIDxmb3JtPiDnu4Tku7bvvIzngrnlh7vliIbliKvkvJrop6blj5EgPGZvcm0+IOe7hOS7tueahCBzdWJtaXQvcmVzZXQg5LqL5Lu2XG4gICAgICAgIC8vIOWPluWAvOS4unN1Ym1pdO+8iOaPkOS6pOihqOWNle+8ie+8jHJlc2V077yI6YeN572u6KGo5Y2V77yJXG4gICAgICAgIGZvcm1UeXBlOiB7XG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICBkZWZhdWx0OiB1bmkuJHUucHJvcHMuYnV0dG9uLmZvcm1UeXBlXG4gICAgICAgIH0sXG4gICAgICAgIC8vIOaJk+W8gCBBUFAg5pe277yM5ZCRIEFQUCDkvKDpgJLnmoTlj4LmlbDvvIxvcGVuLXR5cGU9bGF1bmNoQXBw5pe25pyJ5pWIXG4gICAgICAgIC8vIOWPquW+ruS/oeWwj+eoi+W6j+OAgVFR5bCP56iL5bqP5pyJ5pWIXG4gICAgICAgIGFwcFBhcmFtZXRlcjoge1xuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgZGVmYXVsdDogdW5pLiR1LnByb3BzLmJ1dHRvbi5hcHBQYXJhbWV0ZXJcbiAgICAgICAgfSxcbiAgICAgICAgLy8g5oyH5a6a5piv5ZCm6Zi75q2i5pys6IqC54K555qE56WW5YWI6IqC54K55Ye6546w54K55Ye75oCB77yM5b6u5L+h5bCP56iL5bqP5pyJ5pWIXG4gICAgICAgIGhvdmVyU3RvcFByb3BhZ2F0aW9uOiB7XG4gICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICAgICAgZGVmYXVsdDogdW5pLiR1LnByb3BzLmJ1dHRvbi5ob3ZlclN0b3BQcm9wYWdhdGlvblxuICAgICAgICB9LFxuICAgICAgICAvLyDmjIflrprov5Tlm57nlKjmiLfkv6Hmga/nmoTor63oqIDvvIx6aF9DTiDnroDkvZPkuK3mlofvvIx6aF9UVyDnuYHkvZPkuK3mlofvvIxlbiDoi7HmlofjgILlj6rlvq7kv6HlsI/nqIvluo/mnInmlYhcbiAgICAgICAgbGFuZzoge1xuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgZGVmYXVsdDogdW5pLiR1LnByb3BzLmJ1dHRvbi5sYW5nXG4gICAgICAgIH0sXG4gICAgICAgIC8vIOS8muivneadpea6kO+8jG9wZW4tdHlwZT1cImNvbnRhY3RcIuaXtuacieaViOOAguWPquW+ruS/oeWwj+eoi+W6j+acieaViFxuICAgICAgICBzZXNzaW9uRnJvbToge1xuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgZGVmYXVsdDogdW5pLiR1LnByb3BzLmJ1dHRvbi5zZXNzaW9uRnJvbVxuICAgICAgICB9LFxuICAgICAgICAvLyDkvJror53lhoXmtojmga/ljaHniYfmoIfpopjvvIxvcGVuLXR5cGU9XCJjb250YWN0XCLml7bmnInmlYhcbiAgICAgICAgLy8g6buY6K6k5b2T5YmN5qCH6aKY77yM5Y+q5b6u5L+h5bCP56iL5bqP5pyJ5pWIXG4gICAgICAgIHNlbmRNZXNzYWdlVGl0bGU6IHtcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICAgIGRlZmF1bHQ6IHVuaS4kdS5wcm9wcy5idXR0b24uc2VuZE1lc3NhZ2VUaXRsZVxuICAgICAgICB9LFxuICAgICAgICAvLyDkvJror53lhoXmtojmga/ljaHniYfngrnlh7vot7PovazlsI/nqIvluo/ot6/lvoTvvIxvcGVuLXR5cGU9XCJjb250YWN0XCLml7bmnInmlYhcbiAgICAgICAgLy8g6buY6K6k5b2T5YmN5YiG5Lqr6Lev5b6E77yM5Y+q5b6u5L+h5bCP56iL5bqP5pyJ5pWIXG4gICAgICAgIHNlbmRNZXNzYWdlUGF0aDoge1xuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgZGVmYXVsdDogdW5pLiR1LnByb3BzLmJ1dHRvbi5zZW5kTWVzc2FnZVBhdGhcbiAgICAgICAgfSxcbiAgICAgICAgLy8g5Lya6K+d5YaF5raI5oGv5Y2h54mH5Zu+54mH77yMb3Blbi10eXBlPVwiY29udGFjdFwi5pe25pyJ5pWIXG4gICAgICAgIC8vIOm7mOiupOW9k+WJjemhtemdouaIquWbvu+8jOWPquW+ruS/oeWwj+eoi+W6j+acieaViFxuICAgICAgICBzZW5kTWVzc2FnZUltZzoge1xuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgZGVmYXVsdDogdW5pLiR1LnByb3BzLmJ1dHRvbi5zZW5kTWVzc2FnZUltZ1xuICAgICAgICB9LFxuICAgICAgICAvLyDmmK/lkKbmmL7npLrkvJror53lhoXmtojmga/ljaHniYfvvIzorr7nva7mraTlj4LmlbDkuLogdHJ1Ze+8jOeUqOaIt+i/m+WFpeWuouacjeS8muivneS8muWcqOWPs+S4i+inkuaYvuekulwi5Y+v6IO96KaB5Y+R6YCB55qE5bCP56iL5bqPXCLmj5DnpLrvvIxcbiAgICAgICAgLy8g55So5oi354K55Ye75ZCO5Y+v5Lul5b+r6YCf5Y+R6YCB5bCP56iL5bqP5raI5oGv77yMb3Blbi10eXBlPVwiY29udGFjdFwi5pe25pyJ5pWIXG4gICAgICAgIHNob3dNZXNzYWdlQ2FyZDoge1xuICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgICAgIGRlZmF1bHQ6IHVuaS4kdS5wcm9wcy5idXR0b24uc2hvd01lc3NhZ2VDYXJkXG4gICAgICAgIH0sXG4gICAgICAgIC8vIOmineWkluS8oOWPguWPguaVsO+8jOeUqOS6juWwj+eoi+W6j+eahGRhdGEteHh45bGe5oCn77yM6YCa6L+HdGFyZ2V0LmRhdGFzZXQubmFtZeiOt+WPllxuICAgICAgICBkYXRhTmFtZToge1xuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgZGVmYXVsdDogdW5pLiR1LnByb3BzLmJ1dHRvbi5kYXRhTmFtZVxuICAgICAgICB9LFxuICAgICAgICAvLyDoioLmtYHvvIzkuIDlrprml7bpl7TlhoXlj6rog73op6blj5HkuIDmrKFcbiAgICAgICAgdGhyb3R0bGVUaW1lOiB7XG4gICAgICAgICAgICB0eXBlOiBbU3RyaW5nLCBOdW1iZXJdLFxuICAgICAgICAgICAgZGVmYXVsdDogdW5pLiR1LnByb3BzLmJ1dHRvbi50aHJvdHRsZVRpbWVcbiAgICAgICAgfSxcbiAgICAgICAgLy8g5oyJ5L2P5ZCO5aSa5LmF5Ye6546w54K55Ye75oCB77yM5Y2V5L2N5q+r56eSXG4gICAgICAgIGhvdmVyU3RhcnRUaW1lOiB7XG4gICAgICAgICAgICB0eXBlOiBbU3RyaW5nLCBOdW1iZXJdLFxuICAgICAgICAgICAgZGVmYXVsdDogdW5pLiR1LnByb3BzLmJ1dHRvbi5ob3ZlclN0YXJ0VGltZVxuICAgICAgICB9LFxuICAgICAgICAvLyDmiYvmjIfmnb7lvIDlkI7ngrnlh7vmgIHkv53nlZnml7bpl7TvvIzljZXkvY3mr6vnp5JcbiAgICAgICAgaG92ZXJTdGF5VGltZToge1xuICAgICAgICAgICAgdHlwZTogW1N0cmluZywgTnVtYmVyXSxcbiAgICAgICAgICAgIGRlZmF1bHQ6IHVuaS4kdS5wcm9wcy5idXR0b24uaG92ZXJTdGF5VGltZVxuICAgICAgICB9LFxuICAgICAgICAvLyDmjInpkq7mloflrZfvvIzkuYvmiYDku6XpgJrov4dwcm9wc+S8oOWFpe+8jOaYr+WboOS4unNsb3TkvKDlhaXnmoTor51cbiAgICAgICAgLy8gbnZ1ZeS4reaXoOazleaOp+WItuaWh+Wtl+eahOagt+W8j1xuICAgICAgICB0ZXh0OiB7XG4gICAgICAgICAgICB0eXBlOiBbU3RyaW5nLCBOdW1iZXJdLFxuICAgICAgICAgICAgZGVmYXVsdDogdW5pLiR1LnByb3BzLmJ1dHRvbi50ZXh0XG4gICAgICAgIH0sXG4gICAgICAgIC8vIOaMiemSruWbvuagh1xuICAgICAgICBpY29uOiB7XG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICBkZWZhdWx0OiB1bmkuJHUucHJvcHMuYnV0dG9uLmljb25cbiAgICAgICAgfSxcbiAgICAgICAgLy8g5oyJ6ZKu5Zu+5qCHXG4gICAgICAgIGljb25Db2xvcjoge1xuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgZGVmYXVsdDogdW5pLiR1LnByb3BzLmJ1dHRvbi5pY29uXG4gICAgICAgIH0sXG4gICAgICAgIC8vIOaMiemSruminOiJsu+8jOaUr+aMgeS8oOWFpWxpbmVhci1ncmFkaWVudOa4kOWPmOiJslxuICAgICAgICBjb2xvcjoge1xuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgZGVmYXVsdDogdW5pLiR1LnByb3BzLmJ1dHRvbi5jb2xvclxuICAgICAgICB9XG4gICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///162\n");

/***/ }),

/***/ 163:
/*!****************************************************************************************************************************************************************!*\
  !*** /Users/tongjie/Desktop/QNRTC-Uniapp/demo/uni_modules/uview-ui/components/u-button/u-button.vue?vue&type=style&index=0&id=2bf0e569&lang=scss&scoped=true& ***!
  \****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_11_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_11_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_u_button_vue_vue_type_style_index_0_id_2bf0e569_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--11-oneOf-0-1!../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--11-oneOf-0-2!../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--11-oneOf-0-3!../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--11-oneOf-0-4!../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./u-button.vue?vue&type=style&index=0&id=2bf0e569&lang=scss&scoped=true& */ 164);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_11_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_11_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_u_button_vue_vue_type_style_index_0_id_2bf0e569_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_11_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_11_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_u_button_vue_vue_type_style_index_0_id_2bf0e569_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_11_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_11_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_u_button_vue_vue_type_style_index_0_id_2bf0e569_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_11_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_11_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_u_button_vue_vue_type_style_index_0_id_2bf0e569_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_11_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_11_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_u_button_vue_vue_type_style_index_0_id_2bf0e569_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 164:
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--11-oneOf-0-1!./node_modules/postcss-loader/src??ref--11-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--11-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--11-oneOf-0-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!/Users/tongjie/Desktop/QNRTC-Uniapp/demo/uni_modules/uview-ui/components/u-button/u-button.vue?vue&type=style&index=0&id=2bf0e569&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  ".u-button--active": {
    "": {
      "opacity": [
        0.75,
        0,
        0,
        16
      ]
    }
  },
  ".u-button--active--plain": {
    "": {
      "backgroundColor": [
        "#d9d9d9",
        0,
        0,
        17
      ]
    }
  },
  ".u-button__loading-text": {
    "": {
      "marginLeft": [
        "4",
        0,
        0,
        27
      ],
      "color": [
        "#FFFFFF",
        0,
        0,
        19
      ],
      "fontSize": [
        "15",
        0,
        0,
        27
      ]
    }
  },
  ".u-button__text": {
    "": {
      "color": [
        "#FFFFFF",
        0,
        0,
        19
      ],
      "fontSize": [
        "15",
        0,
        0,
        26
      ]
    }
  },
  ".u-button__text--plain--error": {
    "": {
      "color": [
        "#f56c6c",
        0,
        0,
        20
      ]
    }
  },
  ".u-button__text--plain--warning": {
    "": {
      "color": [
        "#f9ae3d",
        0,
        0,
        21
      ]
    }
  },
  ".u-button__text--plain--success": {
    "": {
      "color": [
        "#5ac725",
        0,
        0,
        22
      ]
    }
  },
  ".u-button__text--plain--info": {
    "": {
      "color": [
        "#909399",
        0,
        0,
        23
      ]
    }
  },
  ".u-button__text--plain--primary": {
    "": {
      "color": [
        "#3c9cff",
        0,
        0,
        24
      ]
    }
  },
  ".u-button": {
    "": {
      "height": [
        "40",
        0,
        0,
        25
      ],
      "position": [
        "relative",
        0,
        0,
        25
      ],
      "alignItems": [
        "center",
        0,
        0,
        25
      ],
      "justifyContent": [
        "center",
        0,
        0,
        25
      ],
      "flexDirection": [
        "row",
        0,
        0,
        25
      ]
    }
  },
  ".u-button--large": {
    "": {
      "height": [
        "50",
        0,
        0,
        28
      ],
      "paddingTop": [
        0,
        0,
        0,
        28
      ],
      "paddingRight": [
        "15",
        0,
        0,
        28
      ],
      "paddingBottom": [
        0,
        0,
        0,
        28
      ],
      "paddingLeft": [
        "15",
        0,
        0,
        28
      ]
    }
  },
  ".u-button--normal": {
    "": {
      "paddingTop": [
        0,
        0,
        0,
        29
      ],
      "paddingRight": [
        "12",
        0,
        0,
        29
      ],
      "paddingBottom": [
        0,
        0,
        0,
        29
      ],
      "paddingLeft": [
        "12",
        0,
        0,
        29
      ],
      "fontSize": [
        "14",
        0,
        0,
        29
      ]
    }
  },
  ".u-button--small": {
    "": {
      "height": [
        "30",
        0,
        0,
        30
      ],
      "paddingTop": [
        "0",
        0,
        0,
        30
      ],
      "paddingRight": [
        "8",
        0,
        0,
        30
      ],
      "paddingBottom": [
        "0",
        0,
        0,
        30
      ],
      "paddingLeft": [
        "8",
        0,
        0,
        30
      ],
      "fontSize": [
        "12",
        0,
        0,
        30
      ]
    }
  },
  ".u-button--mini": {
    "": {
      "height": [
        "22",
        0,
        0,
        31
      ],
      "fontSize": [
        "10",
        0,
        0,
        31
      ],
      "paddingTop": [
        "0",
        0,
        0,
        31
      ],
      "paddingRight": [
        "8",
        0,
        0,
        31
      ],
      "paddingBottom": [
        "0",
        0,
        0,
        31
      ],
      "paddingLeft": [
        "8",
        0,
        0,
        31
      ]
    }
  },
  ".u-button--disabled": {
    "": {
      "opacity": [
        0.5,
        0,
        0,
        32
      ]
    }
  },
  ".u-button--info": {
    "": {
      "color": [
        "#323233",
        0,
        0,
        33
      ],
      "backgroundColor": [
        "#ffffff",
        0,
        0,
        33
      ],
      "borderColor": [
        "#ebedf0",
        0,
        0,
        33
      ],
      "borderWidth": [
        "1",
        0,
        0,
        33
      ],
      "borderStyle": [
        "solid",
        0,
        0,
        33
      ]
    }
  },
  ".u-button--success": {
    "": {
      "color": [
        "#ffffff",
        0,
        0,
        34
      ],
      "backgroundColor": [
        "#5ac725",
        0,
        0,
        34
      ],
      "borderColor": [
        "#5ac725",
        0,
        0,
        34
      ],
      "borderWidth": [
        "1",
        0,
        0,
        34
      ],
      "borderStyle": [
        "solid",
        0,
        0,
        34
      ]
    }
  },
  ".u-button--primary": {
    "": {
      "color": [
        "#ffffff",
        0,
        0,
        35
      ],
      "backgroundColor": [
        "#3c9cff",
        0,
        0,
        35
      ],
      "borderColor": [
        "#3c9cff",
        0,
        0,
        35
      ],
      "borderWidth": [
        "1",
        0,
        0,
        35
      ],
      "borderStyle": [
        "solid",
        0,
        0,
        35
      ]
    }
  },
  ".u-button--error": {
    "": {
      "color": [
        "#ffffff",
        0,
        0,
        36
      ],
      "backgroundColor": [
        "#f56c6c",
        0,
        0,
        36
      ],
      "borderColor": [
        "#f56c6c",
        0,
        0,
        36
      ],
      "borderWidth": [
        "1",
        0,
        0,
        36
      ],
      "borderStyle": [
        "solid",
        0,
        0,
        36
      ]
    }
  },
  ".u-button--warning": {
    "": {
      "color": [
        "#ffffff",
        0,
        0,
        37
      ],
      "backgroundColor": [
        "#f9ae3d",
        0,
        0,
        37
      ],
      "borderColor": [
        "#f9ae3d",
        0,
        0,
        37
      ],
      "borderWidth": [
        "1",
        0,
        0,
        37
      ],
      "borderStyle": [
        "solid",
        0,
        0,
        37
      ]
    }
  },
  ".u-button--block": {
    "": {
      "flexDirection": [
        "row",
        0,
        0,
        38
      ],
      "width": [
        100,
        0,
        0,
        38
      ]
    }
  },
  ".u-button--circle": {
    "": {
      "borderTopRightRadius": [
        "100",
        0,
        0,
        39
      ],
      "borderTopLeftRadius": [
        "100",
        0,
        0,
        39
      ],
      "borderBottomLeftRadius": [
        "100",
        0,
        0,
        39
      ],
      "borderBottomRightRadius": [
        "100",
        0,
        0,
        39
      ]
    }
  },
  ".u-button--square": {
    "": {
      "borderBottomLeftRadius": [
        "3",
        0,
        0,
        40
      ],
      "borderBottomRightRadius": [
        "3",
        0,
        0,
        40
      ],
      "borderTopLeftRadius": [
        "3",
        0,
        0,
        40
      ],
      "borderTopRightRadius": [
        "3",
        0,
        0,
        40
      ]
    }
  },
  ".u-button--plain": {
    "": {
      "backgroundColor": [
        "#ffffff",
        0,
        0,
        41
      ]
    }
  },
  ".u-button--hairline": {
    "": {
      "borderWidth": [
        "0.5",
        1,
        0,
        42
      ]
    }
  },
  "@VERSION": 2
}

/***/ }),

/***/ 2:
/*!*****************************************************************************************!*\
  !*** /Users/tongjie/Desktop/QNRTC-Uniapp/demo/App.vue?vue&type=style&index=0&lang=scss ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_11_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_11_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--11-oneOf-0-1!../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--11-oneOf-0-2!../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--11-oneOf-0-3!../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--11-oneOf-0-4!../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&lang=scss */ 3);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_11_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_11_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_11_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_11_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_11_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_11_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_scss__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_11_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_11_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_scss__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_11_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_11_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_scss__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 20:
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

/***/ 221:
/*!****************************************************************************************************************!*\
  !*** /Users/tongjie/Desktop/QNRTC-Uniapp/demo/js_sdk/QNRTC-UniPlugin-JS/QNRTC-UniPlugin-JS/RTCIndex.native.js ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nvar _RTCEngine = __webpack_require__(/*! ./class/RTCEngine */ 222);\nObject.keys(_RTCEngine).forEach(function (key) {\n  if (key === \"default\" || key === \"__esModule\") return;\n  if (key in exports && exports[key] === _RTCEngine[key]) return;\n  Object.defineProperty(exports, key, {\n    enumerable: true,\n    get: function get() {\n      return _RTCEngine[key];\n    }\n  });\n});\nvar _RTCEnum = __webpack_require__(/*! ./enum/RTCEnum */ 224);\nObject.keys(_RTCEnum).forEach(function (key) {\n  if (key === \"default\" || key === \"__esModule\") return;\n  if (key in exports && exports[key] === _RTCEnum[key]) return;\n  Object.defineProperty(exports, key, {\n    enumerable: true,\n    get: function get() {\n      return _RTCEnum[key];\n    }\n  });\n});\nvar _RTCInterface = __webpack_require__(/*! ./interface/RTCInterface */ 233);\nObject.keys(_RTCInterface).forEach(function (key) {\n  if (key === \"default\" || key === \"__esModule\") return;\n  if (key in exports && exports[key] === _RTCInterface[key]) return;\n  Object.defineProperty(exports, key, {\n    enumerable: true,\n    get: function get() {\n      return _RTCInterface[key];\n    }\n  });\n});\nvar _RTCEvent = __webpack_require__(/*! ./event/RTCEvent */ 241);\nObject.keys(_RTCEvent).forEach(function (key) {\n  if (key === \"default\" || key === \"__esModule\") return;\n  if (key in exports && exports[key] === _RTCEvent[key]) return;\n  Object.defineProperty(exports, key, {\n    enumerable: true,\n    get: function get() {\n      return _RTCEvent[key];\n    }\n  });\n});\nvar _RTCClient = __webpack_require__(/*! ./class/RTCClient */ 225);\nObject.keys(_RTCClient).forEach(function (key) {\n  if (key === \"default\" || key === \"__esModule\") return;\n  if (key in exports && exports[key] === _RTCClient[key]) return;\n  Object.defineProperty(exports, key, {\n    enumerable: true,\n    get: function get() {\n      return _RTCClient[key];\n    }\n  });\n});\nvar _RTCCameraVideoTrack = __webpack_require__(/*! ./class/RTCCameraVideoTrack */ 231);\nObject.keys(_RTCCameraVideoTrack).forEach(function (key) {\n  if (key === \"default\" || key === \"__esModule\") return;\n  if (key in exports && exports[key] === _RTCCameraVideoTrack[key]) return;\n  Object.defineProperty(exports, key, {\n    enumerable: true,\n    get: function get() {\n      return _RTCCameraVideoTrack[key];\n    }\n  });\n});\nvar _RTCLocalAudioTrack = __webpack_require__(/*! ./class/RTCLocalAudioTrack */ 235);\nObject.keys(_RTCLocalAudioTrack).forEach(function (key) {\n  if (key === \"default\" || key === \"__esModule\") return;\n  if (key in exports && exports[key] === _RTCLocalAudioTrack[key]) return;\n  Object.defineProperty(exports, key, {\n    enumerable: true,\n    get: function get() {\n      return _RTCLocalAudioTrack[key];\n    }\n  });\n});\nvar _RTCLocalTrack = __webpack_require__(/*! ./class/RTCLocalTrack */ 230);\nObject.keys(_RTCLocalTrack).forEach(function (key) {\n  if (key === \"default\" || key === \"__esModule\") return;\n  if (key in exports && exports[key] === _RTCLocalTrack[key]) return;\n  Object.defineProperty(exports, key, {\n    enumerable: true,\n    get: function get() {\n      return _RTCLocalTrack[key];\n    }\n  });\n});\nvar _RTCLocalVideoTrack = __webpack_require__(/*! ./class/RTCLocalVideoTrack */ 232);\nObject.keys(_RTCLocalVideoTrack).forEach(function (key) {\n  if (key === \"default\" || key === \"__esModule\") return;\n  if (key in exports && exports[key] === _RTCLocalVideoTrack[key]) return;\n  Object.defineProperty(exports, key, {\n    enumerable: true,\n    get: function get() {\n      return _RTCLocalVideoTrack[key];\n    }\n  });\n});\nvar _RTCMicrophoneAudioTrack = __webpack_require__(/*! ./class/RTCMicrophoneAudioTrack */ 234);\nObject.keys(_RTCMicrophoneAudioTrack).forEach(function (key) {\n  if (key === \"default\" || key === \"__esModule\") return;\n  if (key in exports && exports[key] === _RTCMicrophoneAudioTrack[key]) return;\n  Object.defineProperty(exports, key, {\n    enumerable: true,\n    get: function get() {\n      return _RTCMicrophoneAudioTrack[key];\n    }\n  });\n});\nvar _RTCRemoteAudioTrack = __webpack_require__(/*! ./class/RTCRemoteAudioTrack */ 229);\nObject.keys(_RTCRemoteAudioTrack).forEach(function (key) {\n  if (key === \"default\" || key === \"__esModule\") return;\n  if (key in exports && exports[key] === _RTCRemoteAudioTrack[key]) return;\n  Object.defineProperty(exports, key, {\n    enumerable: true,\n    get: function get() {\n      return _RTCRemoteAudioTrack[key];\n    }\n  });\n});\nvar _RTCRemoteTrack = __webpack_require__(/*! ./class/RTCRemoteTrack */ 227);\nObject.keys(_RTCRemoteTrack).forEach(function (key) {\n  if (key === \"default\" || key === \"__esModule\") return;\n  if (key in exports && exports[key] === _RTCRemoteTrack[key]) return;\n  Object.defineProperty(exports, key, {\n    enumerable: true,\n    get: function get() {\n      return _RTCRemoteTrack[key];\n    }\n  });\n});\nvar _RTCRemoteVideoTrack = __webpack_require__(/*! ./class/RTCRemoteVideoTrack */ 226);\nObject.keys(_RTCRemoteVideoTrack).forEach(function (key) {\n  if (key === \"default\" || key === \"__esModule\") return;\n  if (key in exports && exports[key] === _RTCRemoteVideoTrack[key]) return;\n  Object.defineProperty(exports, key, {\n    enumerable: true,\n    get: function get() {\n      return _RTCRemoteVideoTrack[key];\n    }\n  });\n});\nvar _RTCScreenVideoTrack = __webpack_require__(/*! ./class/RTCScreenVideoTrack */ 237);\nObject.keys(_RTCScreenVideoTrack).forEach(function (key) {\n  if (key === \"default\" || key === \"__esModule\") return;\n  if (key in exports && exports[key] === _RTCScreenVideoTrack[key]) return;\n  Object.defineProperty(exports, key, {\n    enumerable: true,\n    get: function get() {\n      return _RTCScreenVideoTrack[key];\n    }\n  });\n});\nvar _RTCTrack = __webpack_require__(/*! ./class/RTCTrack */ 228);\nObject.keys(_RTCTrack).forEach(function (key) {\n  if (key === \"default\" || key === \"__esModule\") return;\n  if (key in exports && exports[key] === _RTCTrack[key]) return;\n  Object.defineProperty(exports, key, {\n    enumerable: true,\n    get: function get() {\n      return _RTCTrack[key];\n    }\n  });\n});\nvar _RTCAudioMixer = __webpack_require__(/*! ./class/RTCAudioMixer */ 236);\nObject.keys(_RTCAudioMixer).forEach(function (key) {\n  if (key === \"default\" || key === \"__esModule\") return;\n  if (key in exports && exports[key] === _RTCAudioMixer[key]) return;\n  Object.defineProperty(exports, key, {\n    enumerable: true,\n    get: function get() {\n      return _RTCAudioMixer[key];\n    }\n  });\n});\nvar _RTCPreset = __webpack_require__(/*! ./preset/RTCPreset */ 223);\nObject.keys(_RTCPreset).forEach(function (key) {\n  if (key === \"default\" || key === \"__esModule\") return;\n  if (key in exports && exports[key] === _RTCPreset[key]) return;\n  Object.defineProperty(exports, key, {\n    enumerable: true,\n    get: function get() {\n      return _RTCPreset[key];\n    }\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vanNfc2RrL1FOUlRDLVVuaVBsdWdpbi1KUy9RTlJUQy1VbmlQbHVnaW4tSlMvUlRDSW5kZXgubmF0aXZlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFBQTtFQUFBO0VBQUE7RUFBQTtJQUFBO0lBQUE7TUFBQTtJQUFBO0VBQUE7QUFBQTtBQUNBO0FBQUE7RUFBQTtFQUFBO0VBQUE7SUFBQTtJQUFBO01BQUE7SUFBQTtFQUFBO0FBQUE7QUFDQTtBQUFBO0VBQUE7RUFBQTtFQUFBO0lBQUE7SUFBQTtNQUFBO0lBQUE7RUFBQTtBQUFBO0FBQ0E7QUFBQTtFQUFBO0VBQUE7RUFBQTtJQUFBO0lBQUE7TUFBQTtJQUFBO0VBQUE7QUFBQTtBQUNBO0FBQUE7RUFBQTtFQUFBO0VBQUE7SUFBQTtJQUFBO01BQUE7SUFBQTtFQUFBO0FBQUE7QUFDQTtBQUFBO0VBQUE7RUFBQTtFQUFBO0lBQUE7SUFBQTtNQUFBO0lBQUE7RUFBQTtBQUFBO0FBQ0E7QUFBQTtFQUFBO0VBQUE7RUFBQTtJQUFBO0lBQUE7TUFBQTtJQUFBO0VBQUE7QUFBQTtBQUNBO0FBQUE7RUFBQTtFQUFBO0VBQUE7SUFBQTtJQUFBO01BQUE7SUFBQTtFQUFBO0FBQUE7QUFDQTtBQUFBO0VBQUE7RUFBQTtFQUFBO0lBQUE7SUFBQTtNQUFBO0lBQUE7RUFBQTtBQUFBO0FBQ0E7QUFBQTtFQUFBO0VBQUE7RUFBQTtJQUFBO0lBQUE7TUFBQTtJQUFBO0VBQUE7QUFBQTtBQUNBO0FBQUE7RUFBQTtFQUFBO0VBQUE7SUFBQTtJQUFBO01BQUE7SUFBQTtFQUFBO0FBQUE7QUFDQTtBQUFBO0VBQUE7RUFBQTtFQUFBO0lBQUE7SUFBQTtNQUFBO0lBQUE7RUFBQTtBQUFBO0FBQ0E7QUFBQTtFQUFBO0VBQUE7RUFBQTtJQUFBO0lBQUE7TUFBQTtJQUFBO0VBQUE7QUFBQTtBQUNBO0FBQUE7RUFBQTtFQUFBO0VBQUE7SUFBQTtJQUFBO01BQUE7SUFBQTtFQUFBO0FBQUE7QUFDQTtBQUFBO0VBQUE7RUFBQTtFQUFBO0lBQUE7SUFBQTtNQUFBO0lBQUE7RUFBQTtBQUFBO0FBQ0E7QUFBQTtFQUFBO0VBQUE7RUFBQTtJQUFBO0lBQUE7TUFBQTtJQUFBO0VBQUE7QUFBQTtBQUNBO0FBQUE7RUFBQTtFQUFBO0VBQUE7SUFBQTtJQUFBO01BQUE7SUFBQTtFQUFBO0FBQUEiLCJmaWxlIjoiMjIxLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0ICogZnJvbSAnLi9jbGFzcy9SVENFbmdpbmUnO1xuZXhwb3J0ICogZnJvbSAnLi9lbnVtL1JUQ0VudW0nO1xuZXhwb3J0ICogZnJvbSAnLi9pbnRlcmZhY2UvUlRDSW50ZXJmYWNlJztcbmV4cG9ydCAqIGZyb20gJy4vZXZlbnQvUlRDRXZlbnQnO1xuZXhwb3J0ICogZnJvbSAnLi9jbGFzcy9SVENDbGllbnQnO1xuZXhwb3J0ICogZnJvbSAnLi9jbGFzcy9SVENDYW1lcmFWaWRlb1RyYWNrJztcbmV4cG9ydCAqIGZyb20gJy4vY2xhc3MvUlRDTG9jYWxBdWRpb1RyYWNrJztcbmV4cG9ydCAqIGZyb20gJy4vY2xhc3MvUlRDTG9jYWxUcmFjayc7XG5leHBvcnQgKiBmcm9tICcuL2NsYXNzL1JUQ0xvY2FsVmlkZW9UcmFjayc7XG5leHBvcnQgKiBmcm9tICcuL2NsYXNzL1JUQ01pY3JvcGhvbmVBdWRpb1RyYWNrJztcbmV4cG9ydCAqIGZyb20gJy4vY2xhc3MvUlRDUmVtb3RlQXVkaW9UcmFjayc7XG5leHBvcnQgKiBmcm9tICcuL2NsYXNzL1JUQ1JlbW90ZVRyYWNrJztcbmV4cG9ydCAqIGZyb20gJy4vY2xhc3MvUlRDUmVtb3RlVmlkZW9UcmFjayc7XG5leHBvcnQgKiBmcm9tICcuL2NsYXNzL1JUQ1NjcmVlblZpZGVvVHJhY2snO1xuZXhwb3J0ICogZnJvbSAnLi9jbGFzcy9SVENUcmFjayc7XG5leHBvcnQgKiBmcm9tICcuL2NsYXNzL1JUQ0F1ZGlvTWl4ZXInO1xuZXhwb3J0ICogZnJvbSAnLi9wcmVzZXQvUlRDUHJlc2V0JztcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///221\n");

/***/ }),

/***/ 222:
/*!****************************************************************************************************************!*\
  !*** /Users/tongjie/Desktop/QNRTC-Uniapp/demo/js_sdk/QNRTC-UniPlugin-JS/QNRTC-UniPlugin-JS/class/RTCEngine.js ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__webpack_provided_uni_dot_requireNativePlugin) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.QNRTC = void 0;\nvar _RTCPreset = __webpack_require__(/*! ../preset/RTCPreset */ 223);\nvar _RTCClient = __webpack_require__(/*! ./RTCClient */ 225);\nvar _RTCCameraVideoTrack = __webpack_require__(/*! ./RTCCameraVideoTrack */ 231);\nvar _RTCMicrophoneAudioTrack = __webpack_require__(/*! ./RTCMicrophoneAudioTrack */ 234);\nvar _RTCScreenVideoTrack = __webpack_require__(/*! ./RTCScreenVideoTrack */ 237);\nvar _RTCAudioMusicMixer = __webpack_require__(/*! ./RTCAudioMusicMixer */ 238);\nvar _RTCAudioEffectMixer = __webpack_require__(/*! ./RTCAudioEffectMixer */ 239);\nvar __assign = void 0 && (void 0).__assign || function () {\n  __assign = Object.assign || function (t) {\n    for (var s, i = 1, n = arguments.length; i < n; i++) {\n      s = arguments[i];\n      for (var p in s) {\n        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];\n      }\n    }\n    return t;\n  };\n  return __assign.apply(this, arguments);\n};\nvar QNRtcEngine = __webpack_provided_uni_dot_requireNativePlugin('QNRTC-UniPlugin-QNRtcEngine');\nvar QNEvent = __webpack_provided_uni_dot_requireNativePlugin('globalEvent');\nvar QNRtcTrack = __webpack_provided_uni_dot_requireNativePlugin('QNRTC-UniPlugin-QNRtcTrack');\nvar QNRTCClientPlugin = __webpack_provided_uni_dot_requireNativePlugin('QNRTC-UniPlugin-QNRtcClient');\nvar QNRtcAudioMusicMixer = __webpack_provided_uni_dot_requireNativePlugin('QNRTC-UniPlugin-QNRtcAudioMusicMixer');\nvar QNRtcAudioEffectMixer = __webpack_provided_uni_dot_requireNativePlugin('QNRTC-UniPlugin-QNRtcAudioEffectMixer');\nvar QNRTC = function () {\n  function QNRTC() {}\n  QNRTC.on = function (name, listener) {\n    QNEvent.addEventListener(name, listener);\n  };\n  QNRTC.off = function (name, listener) {\n    QNEvent.removeEventListener(name, listener);\n  };\n  QNRTC.requestPermission = function (callback) {\n    return QNRtcTrack.requestPermission(callback);\n  };\n  QNRTC.isScreenCaptureSupported = function () {\n    return QNRtcTrack.isScreenCaptureSupported();\n  };\n  QNRTC.init = function (config) {\n    var _config = __assign(__assign({}, _RTCPreset.QNRTCConfigurationPreset), config);\n    try {\n      QNRtcEngine.initDelegate();\n    } catch (e) {}\n    QNRtcTrack.initDelegate();\n    QNRTCClientPlugin.initDelegate();\n    QNRtcAudioMusicMixer.initDelegate();\n    QNRtcAudioEffectMixer.initDelegate();\n    return QNRtcEngine.configRTC(_config);\n  };\n  QNRTC.configRTC = function (config) {\n    var _config = __assign(__assign({}, _RTCPreset.QNRTCConfigurationPreset), config);\n    try {\n      QNRtcEngine.initDelegate();\n    } catch (e) {}\n    QNRtcTrack.initDelegate();\n    QNRTCClientPlugin.initDelegate();\n    QNRtcAudioMusicMixer.initDelegate();\n    QNRtcAudioEffectMixer.initDelegate();\n    return QNRtcEngine.configRTC(_config);\n  };\n  QNRTC.deinit = function () {\n    return QNRtcEngine.deinit();\n  };\n  QNRTC.createClient = function (config) {\n    var _config = __assign(__assign({}, _RTCPreset.QNClientConfigPreset), config);\n    QNRtcEngine.createClient(_config);\n    return new _RTCClient.QNRTCClient();\n  };\n  QNRTC.createMicrophoneAudioTrack = function (config) {\n    var _config = __assign(__assign({}, _RTCPreset.QNMicrophoneAudioTrackConfigPreset), config);\n    var result = QNRtcEngine.createMicrophoneAudioTrack(_config);\n    return new _RTCMicrophoneAudioTrack.QNMicrophoneAudioTrack(__assign({\n      trackID: '',\n      raw: result,\n      userID: ''\n    }, result));\n  };\n  QNRTC.createCameraVideoTrack = function (config) {\n    var _config = __assign(__assign({}, _RTCPreset.QNCameraVideoTrackConfigPreset), config);\n    var result = QNRtcEngine.createCameraVideoTrack(_config);\n    return new _RTCCameraVideoTrack.QNCameraVideoTrack(__assign({\n      trackID: '',\n      raw: result,\n      userID: ''\n    }, result));\n  };\n  QNRTC.createScreenVideoTrack = function (config) {\n    var _config = __assign(__assign({}, _RTCPreset.QNScreenVideoTrackConfigPreset), config);\n    var result = QNRtcEngine.createScreenVideoTrack(_config);\n    return new _RTCScreenVideoTrack.QNScreenVideoTrack(__assign({\n      trackID: '',\n      raw: result,\n      userID: ''\n    }, result));\n  };\n  QNRTC.setAudioScene = function (audioScene) {\n    return QNRtcEngine.setAudioScene(audioScene);\n  };\n  QNRTC.setAudioRouteToSpeakerphone = function (audioRouteToSpeakerphone) {\n    return QNRtcEngine.setAudioRouteToSpeakerphone(audioRouteToSpeakerphone);\n  };\n  QNRTC.setSpeakerphoneMuted = function (muted) {\n    return QNRtcEngine.setSpeakerphoneMuted(muted);\n  };\n  QNRTC.enableFileLogging = function () {\n    return QNRtcEngine.enableFileLogging();\n  };\n  QNRTC.createAudioMusicMixer = function (url) {\n    QNRtcEngine.createAudioMusicMixer(url);\n    return new _RTCAudioMusicMixer.QNAudioMusicMixer();\n  };\n  QNRTC.createAudioEffectMixer = function () {\n    QNRtcEngine.createAudioEffectMixer();\n    return new _RTCAudioEffectMixer.QNAudioEffectMixer();\n  };\n  QNRTC.setLogConfig = function () {};\n  QNRTC.uploadLog = function () {};\n  return QNRTC;\n}();\nexports.QNRTC = QNRTC;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/uni-app-plus-nvue/dist/require-native-plugin.js */ 54)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vanNfc2RrL1FOUlRDLVVuaVBsdWdpbi1KUy9RTlJUQy1VbmlQbHVnaW4tSlMvY2xhc3MvUlRDRW5naW5lLmpzIl0sIm5hbWVzIjpbIl9fYXNzaWduIiwiT2JqZWN0IiwiYXNzaWduIiwidCIsInMiLCJpIiwibiIsImFyZ3VtZW50cyIsImxlbmd0aCIsInAiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJhcHBseSIsIlFOUnRjRW5naW5lIiwidW5pIiwiUU5FdmVudCIsIlFOUnRjVHJhY2siLCJRTlJUQ0NsaWVudFBsdWdpbiIsIlFOUnRjQXVkaW9NdXNpY01peGVyIiwiUU5SdGNBdWRpb0VmZmVjdE1peGVyIiwiUU5SVEMiLCJvbiIsIm5hbWUiLCJsaXN0ZW5lciIsImFkZEV2ZW50TGlzdGVuZXIiLCJvZmYiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwicmVxdWVzdFBlcm1pc3Npb24iLCJjYWxsYmFjayIsImlzU2NyZWVuQ2FwdHVyZVN1cHBvcnRlZCIsImluaXQiLCJjb25maWciLCJfY29uZmlnIiwiUU5SVENDb25maWd1cmF0aW9uUHJlc2V0IiwiaW5pdERlbGVnYXRlIiwiZSIsImNvbmZpZ1JUQyIsImRlaW5pdCIsImNyZWF0ZUNsaWVudCIsIlFOQ2xpZW50Q29uZmlnUHJlc2V0IiwiUU5SVENDbGllbnQiLCJjcmVhdGVNaWNyb3Bob25lQXVkaW9UcmFjayIsIlFOTWljcm9waG9uZUF1ZGlvVHJhY2tDb25maWdQcmVzZXQiLCJyZXN1bHQiLCJRTk1pY3JvcGhvbmVBdWRpb1RyYWNrIiwidHJhY2tJRCIsInJhdyIsInVzZXJJRCIsImNyZWF0ZUNhbWVyYVZpZGVvVHJhY2siLCJRTkNhbWVyYVZpZGVvVHJhY2tDb25maWdQcmVzZXQiLCJRTkNhbWVyYVZpZGVvVHJhY2siLCJjcmVhdGVTY3JlZW5WaWRlb1RyYWNrIiwiUU5TY3JlZW5WaWRlb1RyYWNrQ29uZmlnUHJlc2V0IiwiUU5TY3JlZW5WaWRlb1RyYWNrIiwic2V0QXVkaW9TY2VuZSIsImF1ZGlvU2NlbmUiLCJzZXRBdWRpb1JvdXRlVG9TcGVha2VycGhvbmUiLCJhdWRpb1JvdXRlVG9TcGVha2VycGhvbmUiLCJzZXRTcGVha2VycGhvbmVNdXRlZCIsIm11dGVkIiwiZW5hYmxlRmlsZUxvZ2dpbmciLCJjcmVhdGVBdWRpb011c2ljTWl4ZXIiLCJ1cmwiLCJRTkF1ZGlvTXVzaWNNaXhlciIsImNyZWF0ZUF1ZGlvRWZmZWN0TWl4ZXIiLCJRTkF1ZGlvRWZmZWN0TWl4ZXIiLCJzZXRMb2dDb25maWciLCJ1cGxvYWRMb2ciXSwibWFwcGluZ3MiOiI7Ozs7OztBQVdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBakJBLElBQUlBLFFBQVEsR0FBSSxVQUFRLFNBQUtBLFFBQVEsSUFBSyxZQUFZO0VBQ2xEQSxRQUFRLEdBQUdDLE1BQU0sQ0FBQ0MsTUFBTSxJQUFJLFVBQVNDLENBQUMsRUFBRTtJQUNwQyxLQUFLLElBQUlDLENBQUMsRUFBRUMsQ0FBQyxHQUFHLENBQUMsRUFBRUMsQ0FBQyxHQUFHQyxTQUFTLENBQUNDLE1BQU0sRUFBRUgsQ0FBQyxHQUFHQyxDQUFDLEVBQUVELENBQUMsRUFBRSxFQUFFO01BQ2pERCxDQUFDLEdBQUdHLFNBQVMsQ0FBQ0YsQ0FBQyxDQUFDO01BQ2hCLEtBQUssSUFBSUksQ0FBQyxJQUFJTCxDQUFDO1FBQUUsSUFBSUgsTUFBTSxDQUFDUyxTQUFTLENBQUNDLGNBQWMsQ0FBQ0MsSUFBSSxDQUFDUixDQUFDLEVBQUVLLENBQUMsQ0FBQyxFQUMzRE4sQ0FBQyxDQUFDTSxDQUFDLENBQUMsR0FBR0wsQ0FBQyxDQUFDSyxDQUFDLENBQUM7TUFBQztJQUNwQjtJQUNBLE9BQU9OLENBQUM7RUFDWixDQUFDO0VBQ0QsT0FBT0gsUUFBUSxDQUFDYSxLQUFLLENBQUMsSUFBSSxFQUFFTixTQUFTLENBQUM7QUFDMUMsQ0FBQztBQVFELElBQUlPLFdBQVcsR0FBR0MsOENBQXVCLENBQUMsNkJBQTZCLENBQUM7QUFDeEUsSUFBSUMsT0FB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WyJ2YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBmdW5jdGlvbiAoKSB7XG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKVxuICAgICAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0O1xuICAgIH07XG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59O1xuaW1wb3J0IHsgUU5SVENDb25maWd1cmF0aW9uUHJlc2V0LCBRTk1pY3JvcGhvbmVBdWRpb1RyYWNrQ29uZmlnUHJlc2V0LCBRTkNhbWVyYVZpZGVvVHJhY2tDb25maWdQcmVzZXQsIFFOU2NyZWVuVmlkZW9UcmFja0NvbmZpZ1ByZXNldCwgUU5DbGllbnRDb25maWdQcmVzZXQsIH0gZnJvbSAnLi4vcHJlc2V0L1JUQ1ByZXNldCc7XG5pbXBvcnQgeyBRTlJUQ0NsaWVudCB9IGZyb20gJy4vUlRDQ2xpZW50JztcbmltcG9ydCB7IFFOQ2FtZXJhVmlkZW9UcmFjayB9IGZyb20gJy4vUlRDQ2FtZXJhVmlkZW9UcmFjayc7XG5pbXBvcnQgeyBRTk1pY3JvcGhvbmVBdWRpb1RyYWNrIH0gZnJvbSAnLi9SVENNaWNyb3Bob25lQXVkaW9UcmFjayc7XG5pbXBvcnQgeyBRTlNjcmVlblZpZGVvVHJhY2sgfSBmcm9tICcuL1JUQ1NjcmVlblZpZGVvVHJhY2snO1xuaW1wb3J0IHsgUU5BdWRpb011c2ljTWl4ZXIgfSBmcm9tICcuL1JUQ0F1ZGlvTXVzaWNNaXhlcic7XG5pbXBvcnQgeyBRTkF1ZGlvRWZmZWN0TWl4ZXIgfSBmcm9tICcuL1JUQ0F1ZGlvRWZmZWN0TWl4ZXInO1xudmFyIFFOUnRjRW5naW5lID0gdW5pLnJlcXVpcmVOYXRpdmVQbHVnaW4oJ1FOUlRDLVVuaVBsdWdpbi1RTlJ0Y0VuZ2luZScpO1xudmFyIFFORXZlbnQgPSB1bmkucmVxdWlyZU5hdGl2ZVBsdWdpbignZ2xvYmFsRXZlbnQnKTtcbnZhciBRTlJ0Y1RyYWNrID0gdW5pLnJlcXVpcmVOYXRpdmVQbHVnaW4oJ1FOUlRDLVVuaVBsdWdpbi1RTlJ0Y1RyYWNrJyk7XG52YXIgUU5SVENDbGllbnRQbHVnaW4gPSB1bmkucmVxdWlyZU5hdGl2ZVBsdWdpbignUU5SVEMtVW5pUGx1Z2luLVFOUnRjQ2xpZW50Jyk7XG52YXIgUU5SdGNBdWRpb011c2ljTWl4ZXIgPSB1bmkucmVxdWlyZU5hdGl2ZVBsdWdpbignUU5SVEMtVW5pUGx1Z2luLVFOUnRjQXVkaW9NdXNpY01peGVyJyk7XG52YXIgUU5SdGNBdWRpb0VmZmVjdE1peGVyID0gdW5pLnJlcXVpcmVOYXRpdmVQbHVnaW4oJ1FOUlRDLVVuaVBsdWdpbi1RTlJ0Y0F1ZGlvRWZmZWN0TWl4ZXInKTtcbnZhciBRTlJUQyA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gUU5SVEMoKSB7XG4gICAgfVxuICAgIFFOUlRDLm9uID0gZnVuY3Rpb24gKG5hbWUsIGxpc3RlbmVyKSB7XG4gICAgICAgIFFORXZlbnQuYWRkRXZlbnRMaXN0ZW5lcihuYW1lLCBsaXN0ZW5lcik7XG4gICAgfTtcbiAgICBRTlJUQy5vZmYgPSBmdW5jdGlvbiAobmFtZSwgbGlzdGVuZXIpIHtcbiAgICAgICAgUU5FdmVudC5yZW1vdmVFdmVudExpc3RlbmVyKG5hbWUsIGxpc3RlbmVyKTtcbiAgICB9O1xuICAgIFFOUlRDLnJlcXVlc3RQZXJtaXNzaW9uID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgICAgIHJldHVybiBRTlJ0Y1RyYWNrLnJlcXVlc3RQZXJtaXNzaW9uKGNhbGxiYWNrKTtcbiAgICB9O1xuICAgIFFOUlRDLmlzU2NyZWVuQ2FwdHVyZVN1cHBvcnRlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIFFOUnRjVHJhY2suaXNTY3JlZW5DYXB0dXJlU3VwcG9ydGVkKCk7XG4gICAgfTtcbiAgICBRTlJUQy5pbml0ID0gZnVuY3Rpb24gKGNvbmZpZykge1xuICAgICAgICB2YXIgX2NvbmZpZyA9IF9fYXNzaWduKF9fYXNzaWduKHt9LCBRTlJUQ0NvbmZpZ3VyYXRpb25QcmVzZXQpLCBjb25maWcpO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgUU5SdGNFbmdpbmUuaW5pdERlbGVnYXRlKCk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGUpIHsgfVxuICAgICAgICBRTlJ0Y1RyYWNrLmluaXREZWxlZ2F0ZSgpO1xuICAgICAgICBRTlJUQ0NsaWVudFBsdWdpbi5pbml0RGVsZWdhdGUoKTtcbiAgICAgICAgUU5SdGNBdWRpb011c2ljTWl4ZXIuaW5pdERlbGVnYXRlKCk7XG4gICAgICAgIFFOUnRjQXVkaW9FZmZlY3RNaXhlci5pbml0RGVsZWdhdGUoKTtcbiAgICAgICAgcmV0dXJuIFFOUnRjRW5naW5lLmNvbmZpZ1JUQyhfY29uZmlnKTtcbiAgICB9O1xuICAgIFFOUlRDLmNvbmZpZ1JUQyA9IGZ1bmN0aW9uIChjb25maWcpIHtcbiAgICAgICAgdmFyIF9jb25maWcgPSBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgUU5SVENDb25maWd1cmF0aW9uUHJlc2V0KSwgY29uZmlnKTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIFFOUnRjRW5naW5lLmluaXREZWxlZ2F0ZSgpO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlKSB7IH1cbiAgICAgICAgUU5SdGNUcmFjay5pbml0RGVsZWdhdGUoKTtcbiAgICAgICAgUU5SVENDbGllbnRQbHVnaW4uaW5pdERlbGVnYXRlKCk7XG4gICAgICAgIFFOUnRjQXVkaW9NdXNpY01peGVyLmluaXREZWxlZ2F0ZSgpO1xuICAgICAgICBRTlJ0Y0F1ZGlvRWZmZWN0TWl4ZXIuaW5pdERlbGVnYXRlKCk7XG4gICAgICAgIHJldHVybiBRTlJ0Y0VuZ2luZS5jb25maWdSVEMoX2NvbmZpZyk7XG4gICAgfTtcbiAgICBRTlJUQy5kZWluaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBRTlJ0Y0VuZ2luZS5kZWluaXQoKTtcbiAgICB9O1xuICAgIFFOUlRDLmNyZWF0ZUNsaWVudCA9IGZ1bmN0aW9uIChjb25maWcpIHtcbiAgICAgICAgdmFyIF9jb25maWcgPSBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgUU5DbGllbnRDb25maWdQcmVzZXQpLCBjb25maWcpO1xuICAgICAgICBRTlJ0Y0VuZ2luZS5jcmVhdGVDbGllbnQoX2NvbmZpZyk7XG4gICAgICAgIHJldHVybiBuZXcgUU5SVENDbGllbnQoKTtcbiAgICB9O1xuICAgIFFOUlRDLmNyZWF0ZU1pY3JvcGhvbmVBdWRpb1RyYWNrID0gZnVuY3Rpb24gKGNvbmZpZykge1xuICAgICAgICB2YXIgX2NvbmZpZyA9IF9fYXNzaWduKF9fYXNzaWduKHt9LCBRTk1pY3JvcGhvbmVBdWRpb1RyYWNrQ29uZmlnUHJlc2V0KSwgY29uZmlnKTtcbiAgICAgICAgdmFyIHJlc3VsdCA9IFFOUnRjRW5naW5lLmNyZWF0ZU1pY3JvcGhvbmVBdWRpb1RyYWNrKF9jb25maWcpO1xuICAgICAgICByZXR1cm4gbmV3IFFOTWljcm9waG9uZUF1ZGlvVHJhY2soX19hc3NpZ24oeyB0cmFja0lEOiAnJywgcmF3OiByZXN1bHQsIHVzZXJJRDogJycgfSwgcmVzdWx0KSk7XG4gICAgfTtcbiAgICBRTlJUQy5jcmVhdGVDYW1lcmFWaWRlb1RyYWNrID0gZnVuY3Rpb24gKGNvbmZpZykge1xuICAgICAgICB2YXIgX2NvbmZpZyA9IF9fYXNzaWduKF9fYXNzaWduKHt9LCBRTkNhbWVyYVZpZGVvVHJhY2tDb25maWdQcmVzZXQpLCBjb25maWcpO1xuICAgICAgICB2YXIgcmVzdWx0ID0gUU5SdGNFbmdpbmUuY3JlYXRlQ2FtZXJhVmlkZW9UcmFjayhfY29uZmlnKTtcbiAgICAgICAgcmV0dXJuIG5ldyBRTkNhbWVyYVZpZGVvVHJhY2soX19hc3NpZ24oeyB0cmFja0lEOiAnJywgcmF3OiByZXN1bHQsIHVzZXJJRDogJycgfSwgcmVzdWx0KSk7XG4gICAgfTtcbiAgICBRTlJUQy5jcmVhdGVTY3JlZW5WaWRlb1RyYWNrID0gZnVuY3Rpb24gKGNvbmZpZykge1xuICAgICAgICB2YXIgX2NvbmZpZyA9IF9fYXNzaWduKF9fYXNzaWduKHt9LCBRTlNjcmVlblZpZGVvVHJhY2tDb25maWdQcmVzZXQpLCBjb25maWcpO1xuICAgICAgICB2YXIgcmVzdWx0ID0gUU5SdGNFbmdpbmUuY3JlYXRlU2NyZWVuVmlkZW9UcmFjayhfY29uZmlnKTtcbiAgICAgICAgcmV0dXJuIG5ldyBRTlNjcmVlblZpZGVvVHJhY2soX19hc3NpZ24oeyB0cmFja0lEOiAnJywgcmF3OiByZXN1bHQsIHVzZXJJRDogJycgfSwgcmVzdWx0KSk7XG4gICAgfTtcbiAgICBRTlJUQy5zZXRBdWRpb1NjZW5lID0gZnVuY3Rpb24gKGF1ZGlvU2NlbmUpIHtcbiAgICAgICAgcmV0dXJuIFFOUnRjRW5naW5lLnNldEF1ZGlvU2NlbmUoYXVkaW9TY2VuZSk7XG4gICAgfTtcbiAgICBRTlJUQy5zZXRBdWRpb1JvdXRlVG9TcGVha2VycGhvbmUgPSBmdW5jdGlvbiAoYXVkaW9Sb3V0ZVRvU3BlYWtlcnBob25lKSB7XG4gICAgICAgIHJldHVybiBRTlJ0Y0VuZ2luZS5zZXRBdWRpb1JvdXRlVG9TcGVha2VycGhvbmUoYXVkaW9Sb3V0ZVRvU3BlYWtlcnBob25lKTtcbiAgICB9O1xuICAgIFFOUlRDLnNldFNwZWFrZXJwaG9uZU11dGVkID0gZnVuY3Rpb24gKG11dGVkKSB7XG4gICAgICAgIHJldHVybiBRTlJ0Y0VuZ2luZS5zZXRTcGVha2VycGhvbmVNdXRlZChtdXRlZCk7XG4gICAgfTtcbiAgICBRTlJUQy5lbmFibGVGaWxlTG9nZ2luZyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIFFOUnRjRW5naW5lLmVuYWJsZUZpbGVMb2dnaW5nKCk7XG4gICAgfTtcbiAgICBRTlJUQy5jcmVhdGVBdWRpb011c2ljTWl4ZXIgPSBmdW5jdGlvbiAodXJsKSB7XG4gICAgICAgIFFOUnRjRW5naW5lLmNyZWF0ZUF1ZGlvTXVzaWNNaXhlcih1cmwpO1xuICAgICAgICByZXR1cm4gbmV3IFFOQXVkaW9NdXNpY01peGVyKCk7XG4gICAgfTtcbiAgICBRTlJUQy5jcmVhdGVBdWRpb0VmZmVjdE1peGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBRTlJ0Y0VuZ2luZS5jcmVhdGVBdWRpb0VmZmVjdE1peGVyKCk7XG4gICAgICAgIHJldHVybiBuZXcgUU5BdWRpb0VmZmVjdE1peGVyKCk7XG4gICAgfTtcbiAgICBRTlJUQy5zZXRMb2dDb25maWcgPSBmdW5jdGlvbiAoKSB7IH07XG4gICAgUU5SVEMudXBsb2FkTG9nID0gZnVuY3Rpb24gKCkgeyB9O1xuICAgIHJldHVybiBRTlJUQztcbn0oKSk7XG5leHBvcnQgeyBRTlJUQyB9O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///222\n");

/***/ }),

/***/ 223:
/*!*****************************************************************************************************************!*\
  !*** /Users/tongjie/Desktop/QNRTC-Uniapp/demo/js_sdk/QNRTC-UniPlugin-JS/QNRTC-UniPlugin-JS/preset/RTCPreset.js ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.QNScreenVideoTrackConfigPreset = exports.QNRTCConfigurationPreset = exports.QNMicrophoneAudioTrackConfigPreset = exports.QNCustomVideoTrackConfigPreset = exports.QNCustomAudioTrackConfigPreset = exports.QNClientConfigPreset = exports.QNCameraVideoTrackConfigPreset = void 0;\nvar _RTCEnum = __webpack_require__(/*! ../enum/RTCEnum */ 224);\nvar QNRTCConfigurationPreset = {\n  policy: _RTCEnum.QNRTCPolicy.forceUDP,\n  stereo: false,\n  logLevel: _RTCEnum.QNRTCLogLevel.info,\n  bwePolicy: _RTCEnum.QNRTCBwePolicy.TCC,\n  allowAudioMixWithOthers: true,\n  hWCodecEnabled: true,\n  maintainResolution: false,\n  fieldTrials: '',\n  encoderQualityMode: false,\n  isAEC3Enabled: true,\n  audioScene: _RTCEnum.QNAudioScene.DEFAULT,\n  defaultAudioRouteToSpeakerphone: true,\n  reconnectionTimeout: 30000\n};\nexports.QNRTCConfigurationPreset = QNRTCConfigurationPreset;\nvar QNMicrophoneAudioTrackConfigPreset = {\n  tag: '',\n  bitrate: 24,\n  BitsPerSample: 16,\n  ChannelCount: 1,\n  SampleRate: 16000,\n  communicationModeOn: true\n};\nexports.QNMicrophoneAudioTrackConfigPreset = QNMicrophoneAudioTrackConfigPreset;\nvar QNCustomAudioTrackConfigPreset = {\n  tag: '',\n  bitrate: 24,\n  BitsPerSample: 16,\n  ChannelCount: 1,\n  SampleRate: 16000\n};\nexports.QNCustomAudioTrackConfigPreset = QNCustomAudioTrackConfigPreset;\nvar QNCameraVideoTrackConfigPreset = {\n  tag: '',\n  bitrate: 800,\n  width: 640,\n  height: 480,\n  multiStreamEnable: false,\n  cameraFacing: _RTCEnum.QNRTCCameraFacing.front,\n  frameRate: 20,\n  captureWidth: 640,\n  captureHeight: 480,\n  captureFrameRate: 20,\n  sessionPreset: _RTCEnum.QNSessionPresetType.AVCaptureSessionPreset640x480\n};\nexports.QNCameraVideoTrackConfigPreset = QNCameraVideoTrackConfigPreset;\nvar QNScreenVideoTrackConfigPreset = {\n  tag: '',\n  bitrate: 800,\n  width: 640,\n  height: 480,\n  multiStreamEnable: false,\n  frameRate: 20\n};\nexports.QNScreenVideoTrackConfigPreset = QNScreenVideoTrackConfigPreset;\nvar QNCustomVideoTrackConfigPreset = {\n  tag: '',\n  bitrate: 800,\n  width: 640,\n  height: 480,\n  multiStreamEnable: false,\n  frameRate: 20\n};\nexports.QNCustomVideoTrackConfigPreset = QNCustomVideoTrackConfigPreset;\nvar QNClientConfigPreset = {\n  mode: _RTCEnum.QNClientMode.RTC,\n  role: _RTCEnum.QNClientRole.BROADCASTER\n};\nexports.QNClientConfigPreset = QNClientConfigPreset;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vanNfc2RrL1FOUlRDLVVuaVBsdWdpbi1KUy9RTlJUQy1VbmlQbHVnaW4tSlMvcHJlc2V0L1JUQ1ByZXNldC5qcyJdLCJuYW1lcyI6WyJRTlJUQ0NvbmZpZ3VyYXRpb25QcmVzZXQiLCJwb2xpY3kiLCJRTlJUQ1BvbGljeSIsImZvcmNlVURQIiwic3RlcmVvIiwibG9nTGV2ZWwiLCJRTlJUQ0xvZ0xldmVsIiwiaW5mbyIsImJ3ZVBvbGljeSIsIlFOUlRDQndlUG9saWN5IiwiVENDIiwiYWxsb3dBdWRpb01peFdpdGhPdGhlcnMiLCJoV0NvZGVjRW5hYmxlZCIsIm1haW50YWluUmVzb2x1dGlvbiIsImZpZWxkVHJpYWxzIiwiZW5jb2RlclF1YWxpdHlNb2RlIiwiaXNBRUMzRW5hYmxlZCIsImF1ZGlvU2NlbmUiLCJRTkF1ZGlvU2NlbmUiLCJERUZBVUxUIiwiZGVmYXVsdEF1ZGlvUm91dGVUb1NwZWFrZXJwaG9uZSIsInJlY29ubmVjdGlvblRpbWVvdXQiLCJRTk1pY3JvcGhvbmVBdWRpb1RyYWNrQ29uZmlnUHJlc2V0IiwidGFnIiwiYml0cmF0ZSIsIkJpdHNQZXJTYW1wbGUiLCJDaGFubmVsQ291bnQiLCJTYW1wbGVSYXRlIiwiY29tbXVuaWNhdGlvbk1vZGVPbiIsIlFOQ3VzdG9tQXVkaW9UcmFja0NvbmZpZ1ByZXNldCIsIlFOQ2FtZXJhVmlkZW9UcmFja0NvbmZpZ1ByZXNldCIsIndpZHRoIiwiaGVpZ2h0IiwibXVsdGlTdHJlYW1FbmFibGUiLCJjYW1lcmFGYWNpbmciLCJRTlJUQ0NhbWVyYUZhY2luZyIsImZyb250IiwiZnJhbWVSYXRlIiwiY2FwdHVyZVdpZHRoIiwiY2FwdHVyZUhlaWdodCIsImNhcHR1cmVGcmFtZVJhdGUiLCJzZXNzaW9uUHJlc2V0IiwiUU5TZXNzaW9uUHJlc2V0VHlwZSIsIkFWQ2FwdHVyZVNlc3Npb25QcmVzZXQ2NDB4NDgwIiwiUU5TY3JlZW5WaWRlb1RyYWNrQ29uZmlnUHJlc2V0IiwiUU5DdXN0b21WaWRlb1RyYWNrQ29uZmlnUHJlc2V0IiwiUU5DbGllbnRDb25maWdQcmVzZXQiLCJtb2RlIiwiUU5DbGllbnRNb2RlIiwiUlRDIiwicm9sZSIsIlFOQ2xpZW50Um9sZSIsIkJST0FEQ0FTVEVSIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUNPLElBQUlBLHdCQUF3QixHQUFHO0VBQ2xDQyxNQUFNLEVBQUVDLG9CQUFXLENBQUNDLFFBQVE7RUFDNUJDLE1BQU0sRUFBRSxLQUFLO0VBQ2JDLFFBQVEsRUFBRUMsc0JBQWEsQ0FBQ0MsSUFBSTtFQUM1QkMsU0FBUyxFQUFFQyx1QkFBYyxDQUFDQyxHQUFHO0VBQzdCQyx1QkFBdUIsRUFBRSxJQUFJO0VBQzdCQyxjQUFjLEVBQUUsSUFBSTtFQUNwQkMsa0JBQWtCLEVBQUUsS0FBSztFQUN6QkMsV0FBVyxFQUFFLEVBQUU7RUFDZkMsa0JBQWtCLEVBQUUsS0FBSztFQUN6QkMsYUFBYSxFQUFFLElBQUk7RUFDbkJDLFVBQVUsRUFBRUMscUJBQVksQ0FBQ0MsT0FBTztFQUNoQ0MsK0JBQStCLEVBQUUsSUFBSTtFQUNyQ0MsbUJBQW1CLEVBQUU7QUFDekIsQ0FBQztBQUFDO0FBQ0ssSUFBSUMsa0NBQWtDLEdBQUc7RUFDNUNDLEdBQUcsRUFBRSxFQUFFO0VBQ1BDLE9BQU8sRUFBRSxFQUFFO0VBQ1hDLGFBQWEsRUFBRSxFQUFFO0VBQ2pCQyxZQUFZLEVBQUUsQ0FBQztFQUNmQyxVQUFVLEVBQUUsS0FBSztFQUNqQkMsbUJBQW1CLEVBQUU7QUFDekIsQ0FBQztBQUFDO0FBQ0ssSUFBSUMsOEJBQThCLEdBQUc7RUFDeENOLEdBQUcsRUFBRSxFQUFFO0VBQ1BDLE9BQU8sRUFBRSxFQUFFO0VBQ1hDLGFBQWEsRUFBRSxFQUFFO0VBQ2pCQyxZQUFZLEVBQUUsQ0FBQztFQUNmQyxVQUFVLEVBQUU7QUFDaEIsQ0FBQztBQUFDO0FBQ0ssSUFBSUcsOEJBQThCLEdBQUc7RUFDeENQLEdBQUcsRUFBRSxFQUFFO0VBQ1BDLE9BQU8sRUFBRSxHQUFHO0VBQ1pPLEtBQUssRUFBRSxHQUFHO0VBQ1ZDLE1BQU0sRUFBRSxHQUFHO0VBQ1hDLGlCQUFpQixFQUFFLEtBQUs7RUFDeEJDLFlBQVksRUFBRUMsMEJBQWlCLENBQUNDLEtBQUs7RUFDckNDLFNBQVMsRUFBRSxFQUFFO0VBQ2JDLFlBQVksRUFBRSxHQUFHO0VBQ2pCQyxhQUFhLEVBQUUsR0FBRztFQUNsQkMsZ0JBQWdCLEVBQUUsRUFBRTtFQUNwQkMsYUFBYSxFQUFFQyw0QkFBbUIsQ0FBQ0M7QUFDdkMsQ0FBQztBQUFDO0FBQ0ssSUFBSUMsOEJBQThCLEdBQUc7RUFDeENyQixHQUFHLEVBQUUsRUFBRTtFQUNQQyxPQUFPLEVBQUUsR0FBRztFQUNaTyxLQUFLLEVBQUUsR0FBRztFQUNWQyxNQUFNLEVBQUUsR0FBRztFQUNYQyxpQkFBaUIsRUFBRSxLQUFLO0VBQ3hCSSxTQUFTLEVBQUU7QUFDZixDQUFDO0FBQUM7QUFDSyxJQUFJUSw4QkFBOEIsR0FBRztFQUN4Q3RCLEdBQUcsRUFBRSxFQUFFO0VBQ1BDLE9BQU8sRUFBRSxHQUFHO0VBQ1pPLEtBQUssRUFBRSxHQUFHO0VBQ1ZDLE1BQU0sRUFBRSxHQUFHO0VBQ1hDLGlCQUFpQixFQUFFLEtBQUs7RUFDeEJJLFNBQVMsRUFBRTtBQUNmLENBQUM7QUFBQztBQUNLLElBQUlTLG9CQUFvQixHQUFHO0VBQzlCQyxJQUFJLEVBQUVDLHFCQUFZLENBQUNDLEdBQUc7RUFDdEJDLElBQUksRUFBRUMscUJBQVksQ0FBQ0M7QUFDdkIsQ0FBQztBQUFDIiwiZmlsZSI6IjIyMy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFFOUlRDQ2FtZXJhRmFjaW5nLCBRTlJUQ1BvbGljeSwgUU5SVENCd2VQb2xpY3ksIFFOUlRDTG9nTGV2ZWwsIFFOU2Vzc2lvblByZXNldFR5cGUsIFFOQ2xpZW50Um9sZSwgUU5DbGllbnRNb2RlLCBRTkF1ZGlvU2NlbmUgfSBmcm9tICcuLi9lbnVtL1JUQ0VudW0nO1xuZXhwb3J0IHZhciBRTlJUQ0NvbmZpZ3VyYXRpb25QcmVzZXQgPSB7XG4gICAgcG9saWN5OiBRTlJUQ1BvbGljeS5mb3JjZVVEUCxcbiAgICBzdGVyZW86IGZhbHNlLFxuICAgIGxvZ0xldmVsOiBRTlJUQ0xvZ0xldmVsLmluZm8sXG4gICAgYndlUG9saWN5OiBRTlJUQ0J3ZVBvbGljeS5UQ0MsXG4gICAgYWxsb3dBdWRpb01peFdpdGhPdGhlcnM6IHRydWUsXG4gICAgaFdDb2RlY0VuYWJsZWQ6IHRydWUsXG4gICAgbWFpbnRhaW5SZXNvbHV0aW9uOiBmYWxzZSxcbiAgICBmaWVsZFRyaWFsczogJycsXG4gICAgZW5jb2RlclF1YWxpdHlNb2RlOiBmYWxzZSxcbiAgICBpc0FFQzNFbmFibGVkOiB0cnVlLFxuICAgIGF1ZGlvU2NlbmU6IFFOQXVkaW9TY2VuZS5ERUZBVUxULFxuICAgIGRlZmF1bHRBdWRpb1JvdXRlVG9TcGVha2VycGhvbmU6IHRydWUsXG4gICAgcmVjb25uZWN0aW9uVGltZW91dDogMzAwMDBcbn07XG5leHBvcnQgdmFyIFFOTWljcm9waG9uZUF1ZGlvVHJhY2tDb25maWdQcmVzZXQgPSB7XG4gICAgdGFnOiAnJyxcbiAgICBiaXRyYXRlOiAyNCxcbiAgICBCaXRzUGVyU2FtcGxlOiAxNixcbiAgICBDaGFubmVsQ291bnQ6IDEsXG4gICAgU2FtcGxlUmF0ZTogMTYwMDAsXG4gICAgY29tbXVuaWNhdGlvbk1vZGVPbjogdHJ1ZVxufTtcbmV4cG9ydCB2YXIgUU5DdXN0b21BdWRpb1RyYWNrQ29uZmlnUHJlc2V0ID0ge1xuICAgIHRhZzogJycsXG4gICAgYml0cmF0ZTogMjQsXG4gICAgQml0c1BlclNhbXBsZTogMTYsXG4gICAgQ2hhbm5lbENvdW50OiAxLFxuICAgIFNhbXBsZVJhdGU6IDE2MDAwXG59O1xuZXhwb3J0IHZhciBRTkNhbWVyYVZpZGVvVHJhY2tDb25maWdQcmVzZXQgPSB7XG4gICAgdGFnOiAnJyxcbiAgICBiaXRyYXRlOiA4MDAsXG4gICAgd2lkdGg6IDY0MCxcbiAgICBoZWlnaHQ6IDQ4MCxcbiAgICBtdWx0aVN0cmVhbUVuYWJsZTogZmFsc2UsXG4gICAgY2FtZXJhRmFjaW5nOiBRTlJUQ0NhbWVyYUZhY2luZy5mcm9udCxcbiAgICBmcmFtZVJhdGU6IDIwLFxuICAgIGNhcHR1cmVXaWR0aDogNjQwLFxuICAgIGNhcHR1cmVIZWlnaHQ6IDQ4MCxcbiAgICBjYXB0dXJlRnJhbWVSYXRlOiAyMCxcbiAgICBzZXNzaW9uUHJlc2V0OiBRTlNlc3Npb25QcmVzZXRUeXBlLkFWQ2FwdHVyZVNlc3Npb25QcmVzZXQ2NDB4NDgwXG59O1xuZXhwb3J0IHZhciBRTlNjcmVlblZpZGVvVHJhY2tDb25maWdQcmVzZXQgPSB7XG4gICAgdGFnOiAnJyxcbiAgICBiaXRyYXRlOiA4MDAsXG4gICAgd2lkdGg6IDY0MCxcbiAgICBoZWlnaHQ6IDQ4MCxcbiAgICBtdWx0aVN0cmVhbUVuYWJsZTogZmFsc2UsXG4gICAgZnJhbWVSYXRlOiAyMFxufTtcbmV4cG9ydCB2YXIgUU5DdXN0b21WaWRlb1RyYWNrQ29uZmlnUHJlc2V0ID0ge1xuICAgIHRhZzogJycsXG4gICAgYml0cmF0ZTogODAwLFxuICAgIHdpZHRoOiA2NDAsXG4gICAgaGVpZ2h0OiA0ODAsXG4gICAgbXVsdGlTdHJlYW1FbmFibGU6IGZhbHNlLFxuICAgIGZyYW1lUmF0ZTogMjBcbn07XG5leHBvcnQgdmFyIFFOQ2xpZW50Q29uZmlnUHJlc2V0ID0ge1xuICAgIG1vZGU6IFFOQ2xpZW50TW9kZS5SVEMsXG4gICAgcm9sZTogUU5DbGllbnRSb2xlLkJST0FEQ0FTVEVSXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///223\n");

/***/ }),

/***/ 224:
/*!*************************************************************************************************************!*\
  !*** /Users/tongjie/Desktop/QNRTC-Uniapp/demo/js_sdk/QNRTC-UniPlugin-JS/QNRTC-UniPlugin-JS/enum/RTCEnum.js ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.QNVideoWaterMarkSize = exports.QNVideoFrameType = exports.QNVideoFormatDefault = exports.QNVideoFillModeType = exports.QNTrackProfile = exports.QNSessionPresetType = exports.QNRenderMode = exports.QNRTCTrackKind = exports.QNRTCPolicy = exports.QNRTCLogLevel = exports.QNRTCCameraFacing = exports.QNRTCBwePolicy = exports.QNNetworkGrade = exports.QNMediaRelayState = exports.QNLiveStreamingErrorInfoType = exports.QNLiveStreamingErrorInfoCode = exports.QNDegradationPreference = exports.QNConnectionState = exports.QNConnectionDisconnectedReason = exports.QNClientRole = exports.QNClientMode = exports.QNAudioScene = exports.QNAudioMusicMixerState = exports.QNAudioMixerState = exports.QNAudioDevice = exports.QNAVCaptureVideoOrientation = void 0;\nvar QNRTCCameraFacing;\nexports.QNRTCCameraFacing = QNRTCCameraFacing;\n(function (QNRTCCameraFacing) {\n  QNRTCCameraFacing[\"back\"] = \"back\";\n  QNRTCCameraFacing[\"front\"] = \"front\";\n})(QNRTCCameraFacing || (exports.QNRTCCameraFacing = QNRTCCameraFacing = {}));\nvar QNRTCPolicy;\nexports.QNRTCPolicy = QNRTCPolicy;\n(function (QNRTCPolicy) {\n  QNRTCPolicy[\"forceUDP\"] = \"forceUDP\";\n  QNRTCPolicy[\"forceTCP\"] = \"forceTCP\";\n  QNRTCPolicy[\"preferUDP\"] = \"preferUDP\";\n})(QNRTCPolicy || (exports.QNRTCPolicy = QNRTCPolicy = {}));\nvar QNRTCBwePolicy;\nexports.QNRTCBwePolicy = QNRTCBwePolicy;\n(function (QNRTCBwePolicy) {\n  QNRTCBwePolicy[\"TCC\"] = \"TCC\";\n  QNRTCBwePolicy[\"GCC\"] = \"GCC\";\n})(QNRTCBwePolicy || (exports.QNRTCBwePolicy = QNRTCBwePolicy = {}));\nvar QNRTCTrackKind;\nexports.QNRTCTrackKind = QNRTCTrackKind;\n(function (QNRTCTrackKind) {\n  QNRTCTrackKind[\"audio\"] = \"audio\";\n  QNRTCTrackKind[\"video\"] = \"video\";\n})(QNRTCTrackKind || (exports.QNRTCTrackKind = QNRTCTrackKind = {}));\nvar QNRTCLogLevel;\nexports.QNRTCLogLevel = QNRTCLogLevel;\n(function (QNRTCLogLevel) {\n  QNRTCLogLevel[\"verbose\"] = \"verbose\";\n  QNRTCLogLevel[\"info\"] = \"info\";\n  QNRTCLogLevel[\"warning\"] = \"warning\";\n  QNRTCLogLevel[\"error\"] = \"error\";\n  QNRTCLogLevel[\"none\"] = \"none\";\n})(QNRTCLogLevel || (exports.QNRTCLogLevel = QNRTCLogLevel = {}));\nvar QNConnectionState;\nexports.QNConnectionState = QNConnectionState;\n(function (QNConnectionState) {\n  QNConnectionState[\"DISCONNECTED\"] = \"DISCONNECTED\";\n  QNConnectionState[\"CONNECTING\"] = \"CONNECTING\";\n  QNConnectionState[\"CONNECTED\"] = \"CONNECTED\";\n  QNConnectionState[\"RECONNECTING\"] = \"RECONNECTING\";\n  QNConnectionState[\"RECONNECTED\"] = \"RECONNECTED\";\n})(QNConnectionState || (exports.QNConnectionState = QNConnectionState = {}));\nvar QNRenderMode;\nexports.QNRenderMode = QNRenderMode;\n(function (QNRenderMode) {\n  QNRenderMode[\"FILL\"] = \"FILL\";\n  QNRenderMode[\"ASPECT_FILL\"] = \"ASPECT_FILL\";\n  QNRenderMode[\"ASPECT_FIT\"] = \"ASPECT_FIT\";\n})(QNRenderMode || (exports.QNRenderMode = QNRenderMode = {}));\nvar QNTrackProfile;\nexports.QNTrackProfile = QNTrackProfile;\n(function (QNTrackProfile) {\n  QNTrackProfile[\"LOW\"] = \"LOW\";\n  QNTrackProfile[\"MEDIUM\"] = \"MEDIUM\";\n  QNTrackProfile[\"HIGH\"] = \"HIGH\";\n})(QNTrackProfile || (exports.QNTrackProfile = QNTrackProfile = {}));\nvar QNNetworkGrade;\nexports.QNNetworkGrade = QNNetworkGrade;\n(function (QNNetworkGrade) {\n  QNNetworkGrade[\"INVALID\"] = \"INVALID\";\n  QNNetworkGrade[\"EXCELLENT\"] = \"EXCELLENT\";\n  QNNetworkGrade[\"GOOD\"] = \"GOOD\";\n  QNNetworkGrade[\"FAIR\"] = \"FAIR\";\n  QNNetworkGrade[\"POOR\"] = \"POOR\";\n})(QNNetworkGrade || (exports.QNNetworkGrade = QNNetworkGrade = {}));\nvar QNConnectionDisconnectedReason;\nexports.QNConnectionDisconnectedReason = QNConnectionDisconnectedReason;\n(function (QNConnectionDisconnectedReason) {\n  QNConnectionDisconnectedReason[\"LEAVE\"] = \"LEAVE\";\n  QNConnectionDisconnectedReason[\"KICKED_OUT\"] = \"KICKED_OUT\";\n  QNConnectionDisconnectedReason[\"ROOM_CLOSED\"] = \"ROOM_CLOSED\";\n  QNConnectionDisconnectedReason[\"ROOM_FULL\"] = \"ROOM_FULL\";\n  QNConnectionDisconnectedReason[\"ERROR\"] = \"ERROR\";\n})(QNConnectionDisconnectedReason || (exports.QNConnectionDisconnectedReason = QNConnectionDisconnectedReason = {}));\nvar QNLiveStreamingErrorInfoType;\nexports.QNLiveStreamingErrorInfoType = QNLiveStreamingErrorInfoType;\n(function (QNLiveStreamingErrorInfoType) {\n  QNLiveStreamingErrorInfoType[\"START\"] = \"START\";\n  QNLiveStreamingErrorInfoType[\"STOP\"] = \"STOP\";\n  QNLiveStreamingErrorInfoType[\"UPDATE\"] = \"UPDATE\";\n})(QNLiveStreamingErrorInfoType || (exports.QNLiveStreamingErrorInfoType = QNLiveStreamingErrorInfoType = {}));\nvar QNLiveStreamingErrorInfoCode;\nexports.QNLiveStreamingErrorInfoCode = QNLiveStreamingErrorInfoCode;\n(function (QNLiveStreamingErrorInfoCode) {\n  QNLiveStreamingErrorInfoCode[\"ERROR_NO_PERMISSION\"] = \"ERROR_NO_PERMISSION\";\n  QNLiveStreamingErrorInfoCode[\"ERROR_INVALID_STATE\"] = \"ERROR_INVALID_STATE\";\n  QNLiveStreamingErrorInfoCode[\"ERROR_INVALID_PARAMETER\"] = \"ERROR_INVALID_PARAMETER\";\n  QNLiveStreamingErrorInfoCode[\"ERROR_SIGNAL_TIMEOUT\"] = \"ERROR_SIGNAL_TIMEOUT\";\n  QNLiveStreamingErrorInfoCode[\"SERVER_ERROR\"] = \"SERVER_ERROR\";\n})(QNLiveStreamingErrorInfoCode || (exports.QNLiveStreamingErrorInfoCode = QNLiveStreamingErrorInfoCode = {}));\nvar QNAudioDevice;\nexports.QNAudioDevice = QNAudioDevice;\n(function (QNAudioDevice) {\n  QNAudioDevice[\"SPEAKER_PHONE\"] = \"SPEAKER_PHONE\";\n  QNAudioDevice[\"EARPIECE\"] = \"EARPIECE\";\n  QNAudioDevice[\"WIRED_HEADSET\"] = \"WIRED_HEADSET\";\n  QNAudioDevice[\"BLUETOOTH\"] = \"BLUETOOTH\";\n  QNAudioDevice[\"NONE\"] = \"NONE\";\n})(QNAudioDevice || (exports.QNAudioDevice = QNAudioDevice = {}));\nvar QNVideoWaterMarkSize;\nexports.QNVideoWaterMarkSize = QNVideoWaterMarkSize;\n(function (QNVideoWaterMarkSize) {\n  QNVideoWaterMarkSize[\"LARGE\"] = \"LARGE\";\n  QNVideoWaterMarkSize[\"MEDIUM\"] = \"MEDIUM\";\n  QNVideoWaterMarkSize[\"SMALL\"] = \"SMALL\";\n})(QNVideoWaterMarkSize || (exports.QNVideoWaterMarkSize = QNVideoWaterMarkSize = {}));\nvar QNAVCaptureVideoOrientation;\nexports.QNAVCaptureVideoOrientation = QNAVCaptureVideoOrientation;\n(function (QNAVCaptureVideoOrientation) {\n  QNAVCaptureVideoOrientation[\"AVCaptureVideoOrientationPortrait\"] = \"AVCaptureVideoOrientationPortrait\";\n  QNAVCaptureVideoOrientation[\"AVCaptureVideoOrientationLandscapeRight\"] = \"AVCaptureVideoOrientationLandscapeRight\";\n  QNAVCaptureVideoOrientation[\"AVCaptureVideoOrientationLandscapeLeft\"] = \"AVCaptureVideoOrientationLandscapeLeft\";\n})(QNAVCaptureVideoOrientation || (exports.QNAVCaptureVideoOrientation = QNAVCaptureVideoOrientation = {}));\nvar QNVideoFillModeType;\nexports.QNVideoFillModeType = QNVideoFillModeType;\n(function (QNVideoFillModeType) {\n  QNVideoFillModeType[\"QNVideoFillModeNone\"] = \"QNVideoFillModeNone\";\n  QNVideoFillModeType[\"QNVideoFillModeStretch\"] = \"QNVideoFillModeStretch\";\n  QNVideoFillModeType[\"QNVideoFillModePreserveAspectRatio\"] = \"QNVideoFillModePreserveAspectRatio\";\n  QNVideoFillModeType[\"QNVideoFillModePreserveAspectRatioAndFill\"] = \"QNVideoFillModePreserveAspectRatioAndFill\";\n})(QNVideoFillModeType || (exports.QNVideoFillModeType = QNVideoFillModeType = {}));\nvar QNSessionPresetType;\nexports.QNSessionPresetType = QNSessionPresetType;\n(function (QNSessionPresetType) {\n  QNSessionPresetType[\"AVCaptureSessionPreset352x288\"] = \"AVCaptureSessionPreset352x288\";\n  QNSessionPresetType[\"AVCaptureSessionPreset640x480\"] = \"AVCaptureSessionPreset640x480\";\n  QNSessionPresetType[\"AVCaptureSessionPreset1280x720\"] = \"AVCaptureSessionPreset1280x720\";\n  QNSessionPresetType[\"AVCaptureSessionPreset1920x1080\"] = \"AVCaptureSessionPreset1920x1080\";\n  QNSessionPresetType[\"AVCaptureSessionPreset3840x2160\"] = \"AVCaptureSessionPreset3840x2160\";\n  QNSessionPresetType[\"AVCaptureSessionPresetiFrame960x540\"] = \"AVCaptureSessionPresetiFrame960x540\";\n  QNSessionPresetType[\"AVCaptureSessionPresetiFrame1280x720\"] = \"AVCaptureSessionPresetiFrame1280x720\";\n})(QNSessionPresetType || (exports.QNSessionPresetType = QNSessionPresetType = {}));\nvar QNAudioMixerState;\nexports.QNAudioMixerState = QNAudioMixerState;\n(function (QNAudioMixerState) {\n  QNAudioMixerState[\"MIXING\"] = \"MIXING\";\n  QNAudioMixerState[\"PAUSED\"] = \"PAUSED\";\n  QNAudioMixerState[\"STOPPED\"] = \"STOPPED\";\n  QNAudioMixerState[\"COMPLETED\"] = \"COMPLETED\";\n})(QNAudioMixerState || (exports.QNAudioMixerState = QNAudioMixerState = {}));\nvar QNAudioMusicMixerState;\nexports.QNAudioMusicMixerState = QNAudioMusicMixerState;\n(function (QNAudioMusicMixerState) {\n  QNAudioMusicMixerState[\"IDLE\"] = \"IDLE\";\n  QNAudioMusicMixerState[\"MIXING\"] = \"MIXING\";\n  QNAudioMusicMixerState[\"PAUSED\"] = \"PAUSED\";\n  QNAudioMusicMixerState[\"STOPPED\"] = \"STOPPED\";\n  QNAudioMusicMixerState[\"COMPLETED\"] = \"COMPLETED\";\n})(QNAudioMusicMixerState || (exports.QNAudioMusicMixerState = QNAudioMusicMixerState = {}));\nvar QNVideoFrameType;\nexports.QNVideoFrameType = QNVideoFrameType;\n(function (QNVideoFrameType) {\n  QNVideoFrameType[\"YUV_NV21\"] = \"YUV_NV21\";\n  QNVideoFrameType[\"TEXTURE_RGB\"] = \"TEXTURE_RGB\";\n  QNVideoFrameType[\"TEXTURE_OES\"] = \"TEXTURE_OES\";\n})(QNVideoFrameType || (exports.QNVideoFrameType = QNVideoFrameType = {}));\nvar QNAudioScene;\nexports.QNAudioScene = QNAudioScene;\n(function (QNAudioScene) {\n  QNAudioScene[\"DEFAULT\"] = \"DEFAULT\";\n  QNAudioScene[\"VOICE_CHAT\"] = \"VOICE_CHAT\";\n  QNAudioScene[\"SOUND_EQUALIZE\"] = \"SOUND_EQUALIZE\";\n})(QNAudioScene || (exports.QNAudioScene = QNAudioScene = {}));\nvar QNClientRole;\nexports.QNClientRole = QNClientRole;\n(function (QNClientRole) {\n  QNClientRole[\"BROADCASTER\"] = \"BROADCASTER\";\n  QNClientRole[\"AUDIENCE\"] = \"AUDIENCE\";\n})(QNClientRole || (exports.QNClientRole = QNClientRole = {}));\nvar QNClientMode;\nexports.QNClientMode = QNClientMode;\n(function (QNClientMode) {\n  QNClientMode[\"RTC\"] = \"RTC\";\n  QNClientMode[\"LIVE\"] = \"LIVE\";\n})(QNClientMode || (exports.QNClientMode = QNClientMode = {}));\nvar QNMediaRelayState;\nexports.QNMediaRelayState = QNMediaRelayState;\n(function (QNMediaRelayState) {\n  QNMediaRelayState[\"UNKNOWN\"] = \"UNKNOWN\";\n  QNMediaRelayState[\"SUCCESS\"] = \"SUCCESS\";\n  QNMediaRelayState[\"STOPPED\"] = \"STOPPED\";\n  QNMediaRelayState[\"INVALID_TOKEN\"] = \"INVALID_TOKEN\";\n  QNMediaRelayState[\"NO_ROOM\"] = \"NO_ROOM\";\n  QNMediaRelayState[\"ROOM_CLOSED\"] = \"ROOM_CLOSED\";\n  QNMediaRelayState[\"PLAYER_EXISTED\"] = \"PLAYER_EXISTED\";\n})(QNMediaRelayState || (exports.QNMediaRelayState = QNMediaRelayState = {}));\nvar QNDegradationPreference;\nexports.QNDegradationPreference = QNDegradationPreference;\n(function (QNDegradationPreference) {\n  QNDegradationPreference[\"DEFAULT\"] = \"DEFAULT\";\n  QNDegradationPreference[\"MAINTAIN_FRAMERATE\"] = \"MAINTAIN_FRAMERATE\";\n  QNDegradationPreference[\"MAINTAIN_RESOLUTION\"] = \"MAINTAIN_RESOLUTION\";\n  QNDegradationPreference[\"BALANCED\"] = \"BALANCED\";\n  QNDegradationPreference[\"ADAPT_BITRATE_ONLY\"] = \"ADAPT_BITRATE_ONLY\";\n})(QNDegradationPreference || (exports.QNDegradationPreference = QNDegradationPreference = {}));\nvar QNVideoFormatDefault;\nexports.QNVideoFormatDefault = QNVideoFormatDefault;\n(function (QNVideoFormatDefault) {\n  QNVideoFormatDefault[\"VIDEO_320x180_15\"] = \"VIDEO_320x180_15\";\n  QNVideoFormatDefault[\"VIDEO_320x240_15\"] = \"VIDEO_320x240_15\";\n  QNVideoFormatDefault[\"VIDEO_640x360_15\"] = \"VIDEO_640x360_15\";\n  QNVideoFormatDefault[\"VIDEO_640x360_30\"] = \"VIDEO_640x360_30\";\n  QNVideoFormatDefault[\"VIDEO_640x480_15\"] = \"VIDEO_640x480_15\";\n  QNVideoFormatDefault[\"VIDEO_640x480_30\"] = \"VIDEO_640x480_30\";\n  QNVideoFormatDefault[\"VIDEO_960x540_15\"] = \"VIDEO_960x540_15\";\n  QNVideoFormatDefault[\"VIDEO_960x540_30\"] = \"VIDEO_960x540_30\";\n  QNVideoFormatDefault[\"VIDEO_960x720_15\"] = \"VIDEO_960x720_15\";\n  QNVideoFormatDefault[\"VIDEO_960x720_30\"] = \"VIDEO_960x720_30\";\n  QNVideoFormatDefault[\"VIDEO_1280x720_15\"] = \"VIDEO_1280x720_15\";\n  QNVideoFormatDefault[\"VIDEO_1280x720_30\"] = \"VIDEO_1280x720_30\";\n})(QNVideoFormatDefault || (exports.QNVideoFormatDefault = QNVideoFormatDefault = {}));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vanNfc2RrL1FOUlRDLVVuaVBsdWdpbi1KUy9RTlJUQy1VbmlQbHVnaW4tSlMvZW51bS9SVENFbnVtLmpzIl0sIm5hbWVzIjpbIlFOUlRDQ2FtZXJhRmFjaW5nIiwiUU5SVENQb2xpY3kiLCJRTlJUQ0J3ZVBvbGljeSIsIlFOUlRDVHJhY2tLaW5kIiwiUU5SVENMb2dMZXZlbCIsIlFOQ29ubmVjdGlvblN0YXRlIiwiUU5SZW5kZXJNb2RlIiwiUU5UcmFja1Byb2ZpbGUiLCJRTk5ldHdvcmtHcmFkZSIsIlFOQ29ubmVjdGlvbkRpc2Nvbm5lY3RlZFJlYXNvbiIsIlFOTGl2ZVN0cmVhbWluZ0Vycm9ySW5mb1R5cGUiLCJRTkxpdmVTdHJlYW1pbmdFcnJvckluZm9Db2RlIiwiUU5BdWRpb0RldmljZSIsIlFOVmlkZW9XYXRlck1hcmtTaXplIiwiUU5BVkNhcHR1cmVWaWRlb09yaWVudGF0aW9uIiwiUU5WaWRlb0ZpbGxNb2RlVHlwZSIsIlFOU2Vzc2lvblByZXNldFR5cGUiLCJRTkF1ZGlvTWl4ZXJTdGF0ZSIsIlFOQXVkaW9NdXNpY01peGVyU3RhdGUiLCJRTlZpZGVvRnJhbWVUeXBlIiwiUU5BdWRpb1NjZW5lIiwiUU5DbGllbnRSb2xlIiwiUU5DbGllbnRNb2RlIiwiUU5NZWRpYVJlbGF5U3RhdGUiLCJRTkRlZ3JhZGF0aW9uUHJlZmVyZW5jZSIsIlFOVmlkZW9Gb3JtYXREZWZhdWx0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBTyxJQUFJQSxpQkFBaUI7QUFBQztBQUM3QixDQUFDLFVBQVVBLGlCQUFpQixFQUFFO0VBQzFCQSxpQkFBaUIsQ0FBQyxNQUFNLENBQUMsR0FBRyxNQUFNO0VBQ2xDQSxpQkFBaUIsQ0FBQyxPQUFPLENBQUMsR0FBRyxPQUFPO0FBQ3hDLENBQUMsRUFBRUEsaUJBQWlCLGlDQUFLQSxpQkFBaUIsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQzFDLElBQUlDLFdBQVc7QUFBQztBQUN2QixDQUFDLFVBQVVBLFdB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QXVCLHVDQUFLQSx1QkFBdUIsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ3RELElBQUlDLG9CQUFvQjtBQUFDO0FBQ2hDLENBQUMsVUFBVUEsb0JBQW9CLEVBQUU7RUFDN0JBLG9CQUFvQixDQUFDLGtCQUFrQixDQUFDLEdBQUcsa0JBQWtCO0VBQzdEQSxvQkFBb0IsQ0FBQyxrQkFBa0IsQ0FBQyxHQUFHLGtCQUFrQjtFQUM3REEsb0JBQW9CLENBQUMsa0JBQWtCLENBQUMsR0FBRyxrQkFBa0I7RUFDN0RBLG9CQUFvQixDQUFDLGtCQUFrQixDQUFDLEdBQUcsa0JBQWtCO0VBQzdEQSxvQkFBb0IsQ0FBQyxrQkFBa0IsQ0FBQyxHQUFHLGtCQUFrQjtFQUM3REEsb0JBQW9CLENBQUMsa0JBQWtCLENBQUMsR0FBRyxrQkFBa0I7RUFDN0RBLG9CQUFvQixDQUFDLGtCQUFrQixDQUFDLEdBQUcsa0JBQWtCO0VBQzdEQSxvQkFBb0IsQ0FBQyxrQkFBa0IsQ0FBQyxHQUFHLGtCQUFrQjtFQUM3REEsb0JBQW9CLENBQUMsa0JBQWtCLENBQUMsR0FBRyxrQkFBa0I7RUFDN0RBLG9CQUFvQixDQUFDLGtCQUFrQixDQUFDLEdBQUcsa0JBQWtCO0VBQzdEQSxvQkFBb0IsQ0FBQyxtQkFBbUIsQ0FBQyxHQUFHLG1CQUFtQjtFQUMvREEsb0JBQW9CLENBQUMsbUJBQW1CLENBQUMsR0FBRyxtQkFBbUI7QUFDbkUsQ0FBQyxFQUFFQSxvQkFBb0Isb0NBQUtBLG9CQUFvQixHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMiLCJmaWxlIjoiMjI0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IHZhciBRTlJUQ0NhbWVyYUZhY2luZztcbihmdW5jdGlvbiAoUU5SVENDYW1lcmFGYWNpbmcpIHtcbiAgICBRTlJUQ0NhbWVyYUZhY2luZ1tcImJhY2tcIl0gPSBcImJhY2tcIjtcbiAgICBRTlJUQ0NhbWVyYUZhY2luZ1tcImZyb250XCJdID0gXCJmcm9udFwiO1xufSkoUU5SVENDYW1lcmFGYWNpbmcgfHwgKFFOUlRDQ2FtZXJhRmFjaW5nID0ge30pKTtcbmV4cG9ydCB2YXIgUU5SVENQb2xpY3k7XG4oZnVuY3Rpb24gKFFOUlRDUG9saWN5KSB7XG4gICAgUU5SVENQb2xpY3lbXCJmb3JjZVVEUFwiXSA9IFwiZm9yY2VVRFBcIjtcbiAgICBRTlJUQ1BvbGljeVtcImZvcmNlVENQXCJdID0gXCJmb3JjZVRDUFwiO1xuICAgIFFOUlRDUG9saWN5W1wicHJlZmVyVURQXCJdID0gXCJwcmVmZXJVRFBcIjtcbn0pKFFOUlRDUG9saWN5IHx8IChRTlJUQ1BvbGljeSA9IHt9KSk7XG5leHBvcnQgdmFyIFFOUlRDQndlUG9saWN5O1xuKGZ1bmN0aW9uIChRTlJUQ0J3ZVBvbGljeSkge1xuICAgIFFOUlRDQndlUG9saWN5W1wiVENDXCJdID0gXCJUQ0NcIjtcbiAgICBRTlJUQ0J3ZVBvbGljeVtcIkdDQ1wiXSA9IFwiR0NDXCI7XG59KShRTlJUQ0J3ZVBvbGljeSB8fCAoUU5SVENCd2VQb2xpY3kgPSB7fSkpO1xuZXhwb3J0IHZhciBRTlJUQ1RyYWNrS2luZDtcbihmdW5jdGlvbiAoUU5SVENUcmFja0tpbmQpIHtcbiAgICBRTlJUQ1RyYWNrS2luZFtcImF1ZGlvXCJdID0gXCJhdWRpb1wiO1xuICAgIFFOUlRDVHJhY2tLaW5kW1widmlkZW9cIl0gPSBcInZpZGVvXCI7XG59KShRTlJUQ1RyYWNrS2luZCB8fCAoUU5SVENUcmFja0tpbmQgPSB7fSkpO1xuZXhwb3J0IHZhciBRTlJUQ0xvZ0xldmVsO1xuKGZ1bmN0aW9uIChRTlJUQ0xvZ0xldmVsKSB7XG4gICAgUU5SVENMb2dMZXZlbFtcInZlcmJvc2VcIl0gPSBcInZlcmJvc2VcIjtcbiAgICBRTlJUQ0xvZ0xldmVsW1wiaW5mb1wiXSA9IFwiaW5mb1wiO1xuICAgIFFOUlRDTG9nTGV2ZWxbXCJ3YXJuaW5nXCJdID0gXCJ3YXJuaW5nXCI7XG4gICAgUU5SVENMb2dMZXZlbFtcImVycm9yXCJdID0gXCJlcnJvclwiO1xuICAgIFFOUlRDTG9nTGV2ZWxbXCJub25lXCJdID0gXCJub25lXCI7XG59KShRTlJUQ0xvZ0xldmVsIHx8IChRTlJUQ0xvZ0xldmVsID0ge30pKTtcbmV4cG9ydCB2YXIgUU5Db25uZWN0aW9uU3RhdGU7XG4oZnVuY3Rpb24gKFFOQ29ubmVjdGlvblN0YXRlKSB7XG4gICAgUU5Db25uZWN0aW9uU3RhdGVbXCJESVNDT05ORUNURURcIl0gPSBcIkRJU0NPTk5FQ1RFRFwiO1xuICAgIFFOQ29ubmVjdGlvblN0YXRlW1wiQ09OTkVDVElOR1wiXSA9IFwiQ09OTkVDVElOR1wiO1xuICAgIFFOQ29ubmVjdGlvblN0YXRlW1wiQ09OTkVDVEVEXCJdID0gXCJDT05ORUNURURcIjtcbiAgICBRTkNvbm5lY3Rpb25TdGF0ZVtcIlJFQ09OTkVDVElOR1wiXSA9IFwiUkVDT05ORUNUSU5HXCI7XG4gICAgUU5Db25uZWN0aW9uU3RhdGVbXCJSRUNPTk5FQ1RFRFwiXSA9IFwiUkVDT05ORUNURURcIjtcbn0pKFFOQ29ubmVjdGlvblN0YXRlIHx8IChRTkNvbm5lY3Rpb25TdGF0ZSA9IHt9KSk7XG5leHBvcnQgdmFyIFFOUmVuZGVyTW9kZTtcbihmdW5jdGlvbiAoUU5SZW5kZXJNb2RlKSB7XG4gICAgUU5SZW5kZXJNb2RlW1wiRklMTFwiXSA9IFwiRklMTFwiO1xuICAgIFFOUmVuZGVyTW9kZVtcIkFTUEVDVF9GSUxMXCJdID0gXCJBU1BFQ1RfRklMTFwiO1xuICAgIFFOUmVuZGVyTW9kZVtcIkFTUEVDVF9GSVRcIl0gPSBcIkFTUEVDVF9GSVRcIjtcbn0pKFFOUmVuZGVyTW9kZSB8fCAoUU5SZW5kZXJNb2RlID0ge30pKTtcbmV4cG9ydCB2YXIgUU5UcmFja1Byb2ZpbGU7XG4oZnVuY3Rpb24gKFFOVHJhY2tQcm9maWxlKSB7XG4gICAgUU5UcmFja1Byb2ZpbGVbXCJMT1dcIl0gPSBcIkxPV1wiO1xuICAgIFFOVHJhY2tQcm9maWxlW1wiTUVESVVNXCJdID0gXCJNRURJVU1cIjtcbiAgICBRTlRyYWNrUHJvZmlsZVtcIkhJR0hcIl0gPSBcIkhJR0hcIjtcbn0pKFFOVHJhY2tQcm9maWxlIHx8IChRTlRyYWNrUHJvZmlsZSA9IHt9KSk7XG5leHBvcnQgdmFyIFFOTmV0d29ya0dyYWRlO1xuKGZ1bmN0aW9uIChRTk5ldHdvcmtHcmFkZSkge1xuICAgIFFOTmV0d29ya0dyYWRlW1wiSU5WQUxJRFwiXSA9IFwiSU5WQUxJRFwiO1xuICAgIFFOTmV0d29ya0dyYWRlW1wiRVhDRUxMRU5UXCJdID0gXCJFWENFTExFTlRcIjtcbiAgICBRTk5ldHdvcmtHcmFkZVtcIkdPT0RcIl0gPSBcIkdPT0RcIjtcbiAgICBRTk5ldHdvcmtHcmFkZVtcIkZBSVJcIl0gPSBcIkZBSVJcIjtcbiAgICBRTk5ldHdvcmtHcmFkZVtcIlBPT1JcIl0gPSBcIlBPT1JcIjtcbn0pKFFOTmV0d29ya0dyYWRlIHx8IChRTk5ldHdvcmtHcmFkZSA9IHt9KSk7XG5leHBvcnQgdmFyIFFOQ29ubmVjdGlvbkRpc2Nvbm5lY3RlZFJlYXNvbjtcbihmdW5jdGlvbiAoUU5Db25uZWN0aW9uRGlzY29ubmVjdGVkUmVhc29uKSB7XG4gICAgUU5Db25uZWN0aW9uRGlzY29ubmVjdGVkUmVhc29uW1wiTEVBVkVcIl0gPSBcIkxFQVZFXCI7XG4gICAgUU5Db25uZWN0aW9uRGlzY29ubmVjdGVkUmVhc29uW1wiS0lDS0VEX09VVFwiXSA9IFwiS0lDS0VEX09VVFwiO1xuICAgIFFOQ29ubmVjdGlvbkRpc2Nvbm5lY3RlZFJlYXNvbltcIlJPT01fQ0xPU0VEXCJdID0gXCJST09NX0NMT1NFRFwiO1xuICAgIFFOQ29ubmVjdGlvbkRpc2Nvbm5lY3RlZFJlYXNvbltcIlJPT01fRlVMTFwiXSA9IFwiUk9PTV9GVUxMXCI7XG4gICAgUU5Db25uZWN0aW9uRGlzY29ubmVjdGVkUmVhc29uW1wiRVJST1JcIl0gPSBcIkVSUk9SXCI7XG59KShRTkNvbm5lY3Rpb25EaXNjb25uZWN0ZWRSZWFzb24gfHwgKFFOQ29ubmVjdGlvbkRpc2Nvbm5lY3RlZFJlYXNvbiA9IHt9KSk7XG5leHBvcnQgdmFyIFFOTGl2ZVN0cmVhbWluZ0Vycm9ySW5mb1R5cGU7XG4oZnVuY3Rpb24gKFFOTGl2ZVN0cmVhbWluZ0Vycm9ySW5mb1R5cGUpIHtcbiAgICBRTkxpdmVTdHJlYW1pbmdFcnJvckluZm9UeXBlW1wiU1RBUlRcIl0gPSBcIlNUQVJUXCI7XG4gICAgUU5MaXZlU3RyZWFtaW5nRXJyb3JJbmZvVHlwZVtcIlNUT1BcIl0gPSBcIlNUT1BcIjtcbiAgICBRTkxpdmVTdHJlYW1pbmdFcnJvckluZm9UeXBlW1wiVVBEQVRFXCJdID0gXCJVUERBVEVcIjtcbn0pKFFOTGl2ZVN0cmVhbWluZ0Vycm9ySW5mb1R5cGUgfHwgKFFOTGl2ZVN0cmVhbWluZ0Vycm9ySW5mb1R5cGUgPSB7fSkpO1xuZXhwb3J0IHZhciBRTkxpdmVTdHJlYW1pbmdFcnJvckluZm9Db2RlO1xuKGZ1bmN0aW9uIChRTkxpdmVTdHJlYW1pbmdFcnJvckluZm9Db2RlKSB7XG4gICAgUU5MaXZlU3RyZWFtaW5nRXJyb3JJbmZvQ29kZVtcIkVSUk9SX05PX1BFUk1JU1NJT05cIl0gPSBcIkVSUk9SX05PX1BFUk1JU1NJT05cIjtcbiAgICBRTkxpdmVTdHJlYW1pbmdFcnJvckluZm9Db2RlW1wiRVJST1JfSU5WQUxJRF9TVEFURVwiXSA9IFwiRVJST1JfSU5WQUxJRF9TVEFURVwiO1xuICAgIFFOTGl2ZVN0cmVhbWluZ0Vycm9ySW5mb0NvZGVbXCJFUlJPUl9JTlZBTElEX1BBUkFNRVRFUlwiXSA9IFwiRVJST1JfSU5WQUxJRF9QQVJBTUVURVJcIjtcbiAgICBRTkxpdmVTdHJlYW1pbmdFcnJvckluZm9Db2RlW1wiRVJST1JfU0lHTkFMX1RJTUVPVVRcIl0gPSBcIkVSUk9SX1NJR05BTF9USU1FT1VUXCI7XG4gICAgUU5MaXZlU3RyZWFtaW5nRXJyb3JJbmZvQ29kZVtcIlNFUlZFUl9FUlJPUlwiXSA9IFwiU0VSVkVSX0VSUk9SXCI7XG59KShRTkxpdmVTdHJlYW1pbmdFcnJvckluZm9Db2RlIHx8IChRTkxpdmVTdHJlYW1pbmdFcnJvckluZm9Db2RlID0ge30pKTtcbmV4cG9ydCB2YXIgUU5BdWRpb0RldmljZTtcbihmdW5jdGlvbiAoUU5BdWRpb0RldmljZSkge1xuICAgIFFOQXVkaW9EZXZpY2VbXCJTUEVBS0VSX1BIT05FXCJdID0gXCJTUEVBS0VSX1BIT05FXCI7XG4gICAgUU5BdWRpb0RldmljZVtcIkVBUlBJRUNFXCJdID0gXCJFQVJQSUVDRVwiO1xuICAgIFFOQXVkaW9EZXZpY2VbXCJXSVJFRF9IRUFEU0VUXCJdID0gXCJXSVJFRF9IRUFEU0VUXCI7XG4gICAgUU5BdWRpb0RldmljZVtcIkJMVUVUT09USFwiXSA9IFwiQkxVRVRPT1RIXCI7XG4gICAgUU5BdWRpb0RldmljZVtcIk5PTkVcIl0gPSBcIk5PTkVcIjtcbn0pKFFOQXVkaW9EZXZpY2UgfHwgKFFOQXVkaW9EZXZpY2UgPSB7fSkpO1xuZXhwb3J0IHZhciBRTlZpZGVvV2F0ZXJNYXJrU2l6ZTtcbihmdW5jdGlvbiAoUU5WaWRlb1dhdGVyTWFya1NpemUpIHtcbiAgICBRTlZpZGVvV2F0ZXJNYXJrU2l6ZVtcIkxBUkdFXCJdID0gXCJMQVJHRVwiO1xuICAgIFFOVmlkZW9XYXRlck1hcmtTaXplW1wiTUVESVVNXCJdID0gXCJNRURJVU1cIjtcbiAgICBRTlZpZGVvV2F0ZXJNYXJrU2l6ZVtcIlNNQUxMXCJdID0gXCJTTUFMTFwiO1xufSkoUU5WaWRlb1dhdGVyTWFya1NpemUgfHwgKFFOVmlkZW9XYXRlck1hcmtTaXplID0ge30pKTtcbmV4cG9ydCB2YXIgUU5BVkNhcHR1cmVWaWRlb09yaWVudGF0aW9uO1xuKGZ1bmN0aW9uIChRTkFWQ2FwdHVyZVZpZGVvT3JpZW50YXRpb24pIHtcbiAgICBRTkFWQ2FwdHVyZVZpZGVvT3JpZW50YXRpb25bXCJBVkNhcHR1cmVWaWRlb09yaWVudGF0aW9uUG9ydHJhaXRcIl0gPSBcIkFWQ2FwdHVyZVZpZGVvT3JpZW50YXRpb25Qb3J0cmFpdFwiO1xuICAgIFFOQVZDYXB0dXJlVmlkZW9PcmllbnRhdGlvbltcIkFWQ2FwdHVyZVZpZGVvT3JpZW50YXRpb25MYW5kc2NhcGVSaWdodFwiXSA9IFwiQVZDYXB0dXJlVmlkZW9PcmllbnRhdGlvbkxhbmRzY2FwZVJpZ2h0XCI7XG4gICAgUU5BVkNhcHR1cmVWaWRlb09yaWVudGF0aW9uW1wiQVZDYXB0dXJlVmlkZW9PcmllbnRhdGlvbkxhbmRzY2FwZUxlZnRcIl0gPSBcIkFWQ2FwdHVyZVZpZGVvT3JpZW50YXRpb25MYW5kc2NhcGVMZWZ0XCI7XG59KShRTkFWQ2FwdHVyZVZpZGVvT3JpZW50YXRpb24gfHwgKFFOQVZDYXB0dXJlVmlkZW9PcmllbnRhdGlvbiA9IHt9KSk7XG5leHBvcnQgdmFyIFFOVmlkZW9GaWxsTW9kZVR5cGU7XG4oZnVuY3Rpb24gKFFOVmlkZW9GaWxsTW9kZVR5cGUpIHtcbiAgICBRTlZpZGVvRmlsbE1vZGVUeXBlW1wiUU5WaWRlb0ZpbGxNb2RlTm9uZVwiXSA9IFwiUU5WaWRlb0ZpbGxNb2RlTm9uZVwiO1xuICAgIFFOVmlkZW9GaWxsTW9kZVR5cGVbXCJRTlZpZGVvRmlsbE1vZGVTdHJldGNoXCJdID0gXCJRTlZpZGVvRmlsbE1vZGVTdHJldGNoXCI7XG4gICAgUU5WaWRlb0ZpbGxNb2RlVHlwZVtcIlFOVmlkZW9GaWxsTW9kZVByZXNlcnZlQXNwZWN0UmF0aW9cIl0gPSBcIlFOVmlkZW9GaWxsTW9kZVByZXNlcnZlQXNwZWN0UmF0aW9cIjtcbiAgICBRTlZpZGVvRmlsbE1vZGVUeXBlW1wiUU5WaWRlb0ZpbGxNb2RlUHJlc2VydmVBc3BlY3RSYXRpb0FuZEZpbGxcIl0gPSBcIlFOVmlkZW9GaWxsTW9kZVByZXNlcnZlQXNwZWN0UmF0aW9BbmRGaWxsXCI7XG59KShRTlZpZGVvRmlsbE1vZGVUeXBlIHx8IChRTlZpZGVvRmlsbE1vZGVUeXBlID0ge30pKTtcbmV4cG9ydCB2YXIgUU5TZXNzaW9uUHJlc2V0VHlwZTtcbihmdW5jdGlvbiAoUU5TZXNzaW9uUHJlc2V0VHlwZSkge1xuICAgIFFOU2Vzc2lvblByZXNldFR5cGVbXCJBVkNhcHR1cmVTZXNzaW9uUHJlc2V0MzUyeDI4OFwiXSA9IFwiQVZDYXB0dXJlU2Vzc2lvblByZXNldDM1MngyODhcIjtcbiAgICBRTlNlc3Npb25QcmVzZXRUeXBlW1wiQVZDYXB0dXJlU2Vzc2lvblByZXNldDY0MHg0ODBcIl0gPSBcIkFWQ2FwdHVyZVNlc3Npb25QcmVzZXQ2NDB4NDgwXCI7XG4gICAgUU5TZXNzaW9uUHJlc2V0VHlwZVtcIkFWQ2FwdHVyZVNlc3Npb25QcmVzZXQxMjgweDcyMFwiXSA9IFwiQVZDYXB0dXJlU2Vzc2lvblByZXNldDEyODB4NzIwXCI7XG4gICAgUU5TZXNzaW9uUHJlc2V0VHlwZVtcIkFWQ2FwdHVyZVNlc3Npb25QcmVzZXQxOTIweDEwODBcIl0gPSBcIkFWQ2FwdHVyZVNlc3Npb25QcmVzZXQxOTIweDEwODBcIjtcbiAgICBRTlNlc3Npb25QcmVzZXRUeXBlW1wiQVZDYXB0dXJlU2Vzc2lvblByZXNldDM4NDB4MjE2MFwiXSA9IFwiQVZDYXB0dXJlU2Vzc2lvblByZXNldDM4NDB4MjE2MFwiO1xuICAgIFFOU2Vzc2lvblByZXNldFR5cGVbXCJBVkNhcHR1cmVTZXNzaW9uUHJlc2V0aUZyYW1lOTYweDU0MFwiXSA9IFwiQVZDYXB0dXJlU2Vzc2lvblByZXNldGlGcmFtZTk2MHg1NDBcIjtcbiAgICBRTlNlc3Npb25QcmVzZXRUeXBlW1wiQVZDYXB0dXJlU2Vzc2lvblByZXNldGlGcmFtZTEyODB4NzIwXCJdID0gXCJBVkNhcHR1cmVTZXNzaW9uUHJlc2V0aUZyYW1lMTI4MHg3MjBcIjtcbn0pKFFOU2Vzc2lvblByZXNldFR5cGUgfHwgKFFOU2Vzc2lvblByZXNldFR5cGUgPSB7fSkpO1xuZXhwb3J0IHZhciBRTkF1ZGlvTWl4ZXJTdGF0ZTtcbihmdW5jdGlvbiAoUU5BdWRpb01peGVyU3RhdGUpIHtcbiAgICBRTkF1ZGlvTWl4ZXJTdGF0ZVtcIk1JWElOR1wiXSA9IFwiTUlYSU5HXCI7XG4gICAgUU5BdWRpb01peGVyU3RhdGVbXCJQQVVTRURcIl0gPSBcIlBBVVNFRFwiO1xuICAgIFFOQXVkaW9NaXhlclN0YXRlW1wiU1RPUFBFRFwiXSA9IFwiU1RPUFBFRFwiO1xuICAgIFFOQXVkaW9NaXhlclN0YXRlW1wiQ09NUExFVEVEXCJdID0gXCJDT01QTEVURURcIjtcbn0pKFFOQXVkaW9NaXhlclN0YXRlIHx8IChRTkF1ZGlvTWl4ZXJTdGF0ZSA9IHt9KSk7XG5leHBvcnQgdmFyIFFOQXVkaW9NdXNpY01peGVyU3RhdGU7XG4oZnVuY3Rpb24gKFFOQXVkaW9NdXNpY01peGVyU3RhdGUpIHtcbiAgICBRTkF1ZGlvTXVzaWNNaXhlclN0YXRlW1wiSURMRVwiXSA9IFwiSURMRVwiO1xuICAgIFFOQXVkaW9NdXNpY01peGVyU3RhdGVbXCJNSVhJTkdcIl0gPSBcIk1JWElOR1wiO1xuICAgIFFOQXVkaW9NdXNpY01peGVyU3RhdGVbXCJQQVVTRURcIl0gPSBcIlBBVVNFRFwiO1xuICAgIFFOQXVkaW9NdXNpY01peGVyU3RhdGVbXCJTVE9QUEVEXCJdID0gXCJTVE9QUEVEXCI7XG4gICAgUU5BdWRpb011c2ljTWl4ZXJTdGF0ZVtcIkNPTVBMRVRFRFwiXSA9IFwiQ09NUExFVEVEXCI7XG59KShRTkF1ZGlvTXVzaWNNaXhlclN0YXRlIHx8IChRTkF1ZGlvTXVzaWNNaXhlclN0YXRlID0ge30pKTtcbmV4cG9ydCB2YXIgUU5WaWRlb0ZyYW1lVHlwZTtcbihmdW5jdGlvbiAoUU5WaWRlb0ZyYW1lVHlwZSkge1xuICAgIFFOVmlkZW9GcmFtZVR5cGVbXCJZVVZfTlYyMVwiXSA9IFwiWVVWX05WMjFcIjtcbiAgICBRTlZpZGVvRnJhbWVUeXBlW1wiVEVYVFVSRV9SR0JcIl0gPSBcIlRFWFRVUkVfUkdCXCI7XG4gICAgUU5WaWRlb0ZyYW1lVHlwZVtcIlRFWFRVUkVfT0VTXCJdID0gXCJURVhUVVJFX09FU1wiO1xufSkoUU5WaWRlb0ZyYW1lVHlwZSB8fCAoUU5WaWRlb0ZyYW1lVHlwZSA9IHt9KSk7XG5leHBvcnQgdmFyIFFOQXVkaW9TY2VuZTtcbihmdW5jdGlvbiAoUU5BdWRpb1NjZW5lKSB7XG4gICAgUU5BdWRpb1NjZW5lW1wiREVGQVVMVFwiXSA9IFwiREVGQVVMVFwiO1xuICAgIFFOQXVkaW9TY2VuZVtcIlZPSUNFX0NIQVRcIl0gPSBcIlZPSUNFX0NIQVRcIjtcbiAgICBRTkF1ZGlvU2NlbmVbXCJTT1VORF9FUVVBTElaRVwiXSA9IFwiU09VTkRfRVFVQUxJWkVcIjtcbn0pKFFOQXVkaW9TY2VuZSB8fCAoUU5BdWRpb1NjZW5lID0ge30pKTtcbmV4cG9ydCB2YXIgUU5DbGllbnRSb2xlO1xuKGZ1bmN0aW9uIChRTkNsaWVudFJvbGUpIHtcbiAgICBRTkNsaWVudFJvbGVbXCJCUk9BRENBU1RFUlwiXSA9IFwiQlJPQURDQVNURVJcIjtcbiAgICBRTkNsaWVudFJvbGVbXCJBVURJRU5DRVwiXSA9IFwiQVVESUVOQ0VcIjtcbn0pKFFOQ2xpZW50Um9sZSB8fCAoUU5DbGllbnRSb2xlID0ge30pKTtcbmV4cG9ydCB2YXIgUU5DbGllbnRNb2RlO1xuKGZ1bmN0aW9uIChRTkNsaWVudE1vZGUpIHtcbiAgICBRTkNsaWVudE1vZGVbXCJSVENcIl0gPSBcIlJUQ1wiO1xuICAgIFFOQ2xpZW50TW9kZVtcIkxJVkVcIl0gPSBcIkxJVkVcIjtcbn0pKFFOQ2xpZW50TW9kZSB8fCAoUU5DbGllbnRNb2RlID0ge30pKTtcbmV4cG9ydCB2YXIgUU5NZWRpYVJlbGF5U3RhdGU7XG4oZnVuY3Rpb24gKFFOTWVkaWFSZWxheVN0YXRlKSB7XG4gICAgUU5NZWRpYVJlbGF5U3RhdGVbXCJVTktOT1dOXCJdID0gXCJVTktOT1dOXCI7XG4gICAgUU5NZWRpYVJlbGF5U3RhdGVbXCJTVUNDRVNTXCJdID0gXCJTVUNDRVNTXCI7XG4gICAgUU5NZWRpYVJlbGF5U3RhdGVbXCJTVE9QUEVEXCJdID0gXCJTVE9QUEVEXCI7XG4gICAgUU5NZWRpYVJlbGF5U3RhdGVbXCJJTlZBTElEX1RPS0VOXCJdID0gXCJJTlZBTElEX1RPS0VOXCI7XG4gICAgUU5NZWRpYVJlbGF5U3RhdGVbXCJOT19ST09NXCJdID0gXCJOT19ST09NXCI7XG4gICAgUU5NZWRpYVJlbGF5U3RhdGVbXCJST09NX0NMT1NFRFwiXSA9IFwiUk9PTV9DTE9TRURcIjtcbiAgICBRTk1lZGlhUmVsYXlTdGF0ZVtcIlBMQVlFUl9FWElTVEVEXCJdID0gXCJQTEFZRVJfRVhJU1RFRFwiO1xufSkoUU5NZWRpYVJlbGF5U3RhdGUgfHwgKFFOTWVkaWFSZWxheVN0YXRlID0ge30pKTtcbmV4cG9ydCB2YXIgUU5EZWdyYWRhdGlvblByZWZlcmVuY2U7XG4oZnVuY3Rpb24gKFFORGVncmFkYXRpb25QcmVmZXJlbmNlKSB7XG4gICAgUU5EZWdyYWRhdGlvblByZWZlcmVuY2VbXCJERUZBVUxUXCJdID0gXCJERUZBVUxUXCI7XG4gICAgUU5EZWdyYWRhdGlvblByZWZlcmVuY2VbXCJNQUlOVEFJTl9GUkFNRVJBVEVcIl0gPSBcIk1BSU5UQUlOX0ZSQU1FUkFURVwiO1xuICAgIFFORGVncmFkYXRpb25QcmVmZXJlbmNlW1wiTUFJTlRBSU5fUkVTT0xVVElPTlwiXSA9IFwiTUFJTlRBSU5fUkVTT0xVVElPTlwiO1xuICAgIFFORGVncmFkYXRpb25QcmVmZXJlbmNlW1wiQkFMQU5DRURcIl0gPSBcIkJBTEFOQ0VEXCI7XG4gICAgUU5EZWdyYWRhdGlvblByZWZlcmVuY2VbXCJBREFQVF9CSVRSQVRFX09OTFlcIl0gPSBcIkFEQVBUX0JJVFJBVEVfT05MWVwiO1xufSkoUU5EZWdyYWRhdGlvblByZWZlcmVuY2UgfHwgKFFORGVncmFkYXRpb25QcmVmZXJlbmNlID0ge30pKTtcbmV4cG9ydCB2YXIgUU5WaWRlb0Zvcm1hdERlZmF1bHQ7XG4oZnVuY3Rpb24gKFFOVmlkZW9Gb3JtYXREZWZhdWx0KSB7XG4gICAgUU5WaWRlb0Zvcm1hdERlZmF1bHRbXCJWSURFT18zMjB4MTgwXzE1XCJdID0gXCJWSURFT18zMjB4MTgwXzE1XCI7XG4gICAgUU5WaWRlb0Zvcm1hdERlZmF1bHRbXCJWSURFT18zMjB4MjQwXzE1XCJdID0gXCJWSURFT18zMjB4MjQwXzE1XCI7XG4gICAgUU5WaWRlb0Zvcm1hdERlZmF1bHRbXCJWSURFT182NDB4MzYwXzE1XCJdID0gXCJWSURFT182NDB4MzYwXzE1XCI7XG4gICAgUU5WaWRlb0Zvcm1hdERlZmF1bHRbXCJWSURFT182NDB4MzYwXzMwXCJdID0gXCJWSURFT182NDB4MzYwXzMwXCI7XG4gICAgUU5WaWRlb0Zvcm1hdERlZmF1bHRbXCJWSURFT182NDB4NDgwXzE1XCJdID0gXCJWSURFT182NDB4NDgwXzE1XCI7XG4gICAgUU5WaWRlb0Zvcm1hdERlZmF1bHRbXCJWSURFT182NDB4NDgwXzMwXCJdID0gXCJWSURFT182NDB4NDgwXzMwXCI7XG4gICAgUU5WaWRlb0Zvcm1hdERlZmF1bHRbXCJWSURFT185NjB4NTQwXzE1XCJdID0gXCJWSURFT185NjB4NTQwXzE1XCI7XG4gICAgUU5WaWRlb0Zvcm1hdERlZmF1bHRbXCJWSURFT185NjB4NTQwXzMwXCJdID0gXCJWSURFT185NjB4NTQwXzMwXCI7XG4gICAgUU5WaWRlb0Zvcm1hdERlZmF1bHRbXCJWSURFT185NjB4NzIwXzE1XCJdID0gXCJWSURFT185NjB4NzIwXzE1XCI7XG4gICAgUU5WaWRlb0Zvcm1hdERlZmF1bHRbXCJWSURFT185NjB4NzIwXzMwXCJdID0gXCJWSURFT185NjB4NzIwXzMwXCI7XG4gICAgUU5WaWRlb0Zvcm1hdERlZmF1bHRbXCJWSURFT18xMjgweDcyMF8xNVwiXSA9IFwiVklERU9fMTI4MHg3MjBfMTVcIjtcbiAgICBRTlZpZGVvRm9ybWF0RGVmYXVsdFtcIlZJREVPXzEyODB4NzIwXzMwXCJdID0gXCJWSURFT18xMjgweDcyMF8zMFwiO1xufSkoUU5WaWRlb0Zvcm1hdERlZmF1bHQgfHwgKFFOVmlkZW9Gb3JtYXREZWZhdWx0ID0ge30pKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///224\n");

/***/ }),

/***/ 225:
/*!****************************************************************************************************************!*\
  !*** /Users/tongjie/Desktop/QNRTC-Uniapp/demo/js_sdk/QNRTC-UniPlugin-JS/QNRTC-UniPlugin-JS/class/RTCClient.js ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__webpack_provided_uni_dot_requireNativePlugin) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.QNRTCClient = void 0;\nvar _RTCEnum = __webpack_require__(/*! ../enum/RTCEnum */ 224);\nvar _RTCRemoteVideoTrack = __webpack_require__(/*! ./RTCRemoteVideoTrack */ 226);\nvar _RTCRemoteAudioTrack = __webpack_require__(/*! ./RTCRemoteAudioTrack */ 229);\nvar _RTCLocalTrack = __webpack_require__(/*! ./RTCLocalTrack */ 230);\nvar __assign = void 0 && (void 0).__assign || function () {\n  __assign = Object.assign || function (t) {\n    for (var s, i = 1, n = arguments.length; i < n; i++) {\n      s = arguments[i];\n      for (var p in s) {\n        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];\n      }\n    }\n    return t;\n  };\n  return __assign.apply(this, arguments);\n};\nvar RTCClient = __webpack_provided_uni_dot_requireNativePlugin('QNRTC-UniPlugin-QNRtcClient');\nvar QNEvent = __webpack_provided_uni_dot_requireNativePlugin('globalEvent');\nvar QNRTCClient = function () {\n  function QNRTCClient() {\n    this.variationList = ['onUserPublished', 'onUserUnpublished', 'onVideoSubscribed', 'onAudioSubscribed'];\n  }\n  QNRTCClient.prototype.transformRemoteRTCTrack = function (trackList) {\n    var result = [];\n    for (var _i = 0, trackList_1 = trackList; _i < trackList_1.length; _i++) {\n      var i = trackList_1[_i];\n      var config = __assign({\n        identifyID: i.trackID,\n        raw: i\n      }, i);\n      if (i.kind === _RTCEnum.QNRTCTrackKind.audio) {\n        result.push(new _RTCRemoteAudioTrack.QNRemoteAudioTrack(config));\n      } else {\n        result.push(new _RTCRemoteVideoTrack.QNRemoteVideoTrack(config));\n      }\n    }\n    return result;\n  };\n  QNRTCClient.prototype.transformLocalRTCTrack = function (trackList) {\n    var result = [];\n    for (var _i = 0, trackList_2 = trackList; _i < trackList_2.length; _i++) {\n      var i = trackList_2[_i];\n      var config = __assign({\n        identifyID: i.trackID,\n        userID: '',\n        raw: i\n      }, i);\n      if (i.kind === _RTCEnum.QNRTCTrackKind.audio) {\n        result.push(new _RTCLocalTrack.QNLocalTrack(config));\n      } else {\n        result.push(new _RTCLocalTrack.QNLocalTrack(config));\n      }\n    }\n    return result;\n  };\n  QNRTCClient.prototype.createRemoteTrackDataCallback = function (listener) {\n    var _this = this;\n    var variationCallback = function variationCallback(params) {\n      var result = _this.transformRemoteRTCTrack(params.trackList);\n      var callbackData = {\n        remoteUserID: params.remoteUserID,\n        trackList: result\n      };\n      var callback = listener;\n      callback(callbackData);\n    };\n    return variationCallback;\n  };\n  QNRTCClient.prototype.on = function (name, listener) {\n    if (this.variationList.some(function (item) {\n      return item === name;\n    })) {\n      var callback = this.createRemoteTrackDataCallback(listener);\n      QNEvent.addEventListener(name, callback);\n    } else {\n      QNEvent.addEventListener(name, listener);\n    }\n  };\n  QNRTCClient.prototype.off = function (name, listener) {\n    QNEvent.removeEventListener(name, listener);\n  };\n  QNRTCClient.prototype.join = function (token, userData) {\n    RTCClient.join(token, userData !== null && userData !== void 0 ? userData : '');\n  };\n  QNRTCClient.prototype.leave = function () {\n    RTCClient.leave();\n  };\n  QNRTCClient.prototype.publish = function (tracks, callback) {\n    RTCClient.publish(tracks, function (_a) {\n      var onPublished = _a.onPublished,\n        data = _a.data,\n        error = _a.error;\n      if (onPublished) {\n        var _loop_1 = function _loop_1(key) {\n          var index = tracks.findIndex(function (item) {\n            return item.identifyID === key;\n          });\n          if (index >= 0) {\n            tracks[index].trackID = data[key];\n          }\n        };\n        for (var key in data) {\n          _loop_1(key);\n        }\n      }\n      callback(onPublished, error);\n    });\n  };\n  QNRTCClient.prototype.unpublish = function (tracks) {\n    RTCClient.unpublish(tracks);\n  };\n  QNRTCClient.prototype.subscribe = function (tracks) {\n    RTCClient.subscribe(tracks);\n  };\n  QNRTCClient.prototype.unsubscribe = function (tracks) {\n    RTCClient.unsubscribe(tracks);\n  };\n  QNRTCClient.prototype.getSubscribedTracks = function (userID) {\n    var remoteTrack = RTCClient.getSubscribedTracks(userID);\n    return this.transformRemoteRTCTrack(remoteTrack);\n  };\n  QNRTCClient.prototype.getLocalAudioTrackStats = function () {\n    return RTCClient.getLocalAudioTrackStats();\n  };\n  QNRTCClient.prototype.getLocalVideoTrackStats = function () {\n    return RTCClient.getLocalVideoTrackStats();\n  };\n  QNRTCClient.prototype.getRemoteAudioTrackStats = function () {\n    return RTCClient.getRemoteAudioTrackStats();\n  };\n  QNRTCClient.prototype.getRemoteVideoTrackStats = function () {\n    return RTCClient.getRemoteVideoTrackStats();\n  };\n  QNRTCClient.prototype.getUserNetworkQuality = function (userID) {\n    return RTCClient.getUserNetworkQuality(userID);\n  };\n  QNRTCClient.prototype.getRemoteUsers = function () {\n    var remoteUser = RTCClient.getRemoteUsers();\n    var result = [];\n    for (var _i = 0, remoteUser_1 = remoteUser; _i < remoteUser_1.length; _i++) {\n      var i = remoteUser_1[_i];\n      var audioTracks = this.transformRemoteRTCTrack(i.audioTracks);\n      var videoTracks = this.transformRemoteRTCTrack(i.videoTracks);\n      result.push({\n        userID: i.userID,\n        videoTracks: videoTracks,\n        audioTracks: audioTracks,\n        userData: i.userData\n      });\n    }\n    return result;\n  };\n  QNRTCClient.prototype.getPublishedTracks = function () {\n    var locakTrack = RTCClient.getPublishedTracks();\n    return this.transformLocalRTCTrack(locakTrack);\n  };\n  QNRTCClient.prototype.sendMessage = function (message, users, messageId) {\n    RTCClient.sendMessage(message, users, messageId);\n  };\n  QNRTCClient.prototype.getConnectionState = function () {\n    return RTCClient.getConnectionState();\n  };\n  QNRTCClient.prototype.setAutoSubscribe = function (autoSubscribe) {\n    RTCClient.setAutoSubscribe(autoSubscribe);\n  };\n  QNRTCClient.prototype.startLiveStreamingWithDirect = function (config) {\n    RTCClient.startLiveStreamingWithDirect(config);\n  };\n  QNRTCClient.prototype.startLiveStreamingWithTranscoding = function (config) {\n    !config.watermarks && (config.watermarks = []);\n    !config.background && (config.background = {});\n    RTCClient.startLiveStreamingWithTranscoding(config);\n  };\n  QNRTCClient.prototype.stopLiveStreamingWithDirect = function (config) {\n    RTCClient.stopLiveStreamingWithDirect(config);\n  };\n  QNRTCClient.prototype.stopLiveStreamingWithTranscoding = function (config) {\n    RTCClient.stopLiveStreamingWithTranscoding(config);\n  };\n  QNRTCClient.prototype.setTranscodingLiveStreamingTracks = function (streamID, transcodingTracks) {\n    RTCClient.setTranscodingLiveStreamingTracks(streamID, transcodingTracks);\n  };\n  QNRTCClient.prototype.removeTranscodingLiveStreamingTracks = function (streamID, transcodingTracks) {\n    RTCClient.removeTranscodingLiveStreamingTracks(streamID, transcodingTracks);\n  };\n  QNRTCClient.prototype.setClientRole = function (clientRole, callback) {\n    RTCClient.setClientRole(clientRole, callback);\n  };\n  QNRTCClient.prototype.startMediaRelay = function (configuration, callback) {\n    RTCClient.startMediaRelay(configuration, callback);\n  };\n  QNRTCClient.prototype.updateMediaRelay = function (configuration, callback) {\n    RTCClient.updateMediaRelay(configuration, callback);\n  };\n  QNRTCClient.prototype.stopMediaRelay = function (callback) {\n    RTCClient.stopMediaRelay(callback);\n  };\n  return QNRTCClient;\n}();\nexports.QNRTCClient = QNRTCClient;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/uni-app-plus-nvue/dist/require-native-plugin.js */ 54)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vanNfc2RrL1FOUlRDLVVuaVBsdWdpbi1KUy9RTlJUQy1VbmlQbHVnaW4tSlMvY2xhc3MvUlRDQ2xpZW50LmpzIl0sIm5hbWVzIjpbIl9fYXNzaWduIiwiT2JqZWN0IiwiYXNzaWduIiwidCIsInMiLCJpIiwibiIsImFyZ3VtZW50cyIsImxlbmd0aCIsInAiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJhcHBseSIsIlJUQ0NsaWVudCIsInVuaSIsIlFORXZlbnQiLCJRTlJUQ0NsaWVudCIsInZhcmlhdGlvbkxpc3QiLCJ0cmFuc2Zvcm1SZW1vdGVSVENUcmFjayIsInRyYWNrTGlzdCIsInJlc3VsdCIsIl9pIiwidHJhY2tMaXN0XzEiLCJjb25maWciLCJpZGVudGlmeUlEIiwidHJhY2tJRCIsInJhdyIsImtpbmQiLCJRTlJUQ1RyYWNrS2luZCIsImF1ZGlvIiwicHVzaCIsIlFOUmVtb3RlQXVkaW9UcmFjayIsIlFOUmVtb3RlVmlkZW9UcmFjayIsInRyYW5zZm9ybUxvY2FsUlRDVHJhY2siLCJ0cmFja0xpc3RfMiIsInVzZXJJRCIsIlFOTG9jYWxUcmFjayIsImNyZWF0ZVJlbW90ZVRyYWNrRGF0YUNhbGxiYWNrIiwibGlzdGVuZXIiLCJfdGhpcyIsInZhcmlhdGlvbkNhbGxiYWNrIiwicGFyYW1zIiwiY2FsbGJhY2tEYXRhIiwicmVtb3RlVXNlcklEIiwiY2FsbGJhY2siLCJvbiIsIm5hbWUiLCJzb21lIiwiaXRlbSIsImFkZEV2ZW50TGlzdGVuZXIiLCJvZmYiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiam9pbiIsInRva2VuIiwidXNlckRhdGEiLCJsZWF2ZSIsInB1Ymxpc2giLCJ0cmFja3MiLCJfYSIsIm9uUHVibGlzaGVkIiwiZGF0YSIsImVycm9yIiwiX2xvb3BfMSIsImtleSIsImluZGV4IiwiZmluZEluZGV4IiwidW5wdWJsaXNoIiwic3Vic2NyaWJlIiwidW5zdWJzY3JpYmUiLCJnZXRTdWJzY3JpYmVkVHJhY2tzIiwicmVtb3RlVHJhY2siLCJnZXRMb2NhbEF1ZGlvVHJhY2tTdGF0cyIsImdldExvY2FsVmlkZW9UcmFja1N0YXRzIiwiZ2V0UmVtb3RlQXVkaW9UcmFja1N0YXRzIiwiZ2V0UmVtb3RlVmlkZW9UcmFja1N0YXRzIiwiZ2V0VXNlck5ldHdvcmtRdWFsaXR5IiwiZ2V0UmVtb3RlVXNlcnMiLCJyZW1vdGVVc2VyIiwicmVtb3RlVXNlcl8xIiwiYXVkaW9UcmFja3MiLCJ2aWRlb1RyYWNrcyIsImdldFB1Ymxpc2hlZFRyYWNrcyIsImxvY2FrVHJhY2siLCJzZW5kTWVzc2FnZSIsIm1lc3NhZ2UiLCJ1c2VycyIsIm1lc3NhZ2VJZCIsImdldENvbm5lY3Rpb25TdGF0ZSIsInNldEF1dG9TdWJzY3JpYmUiLCJhdXRvU3Vic2NyaWJlIiwic3RhcnRMaXZlU3RyZWFtaW5nV2l0aERpcmVjdCIsInN0YXJ0TGl2ZVN0cmVhbWluZ1dpdGhUcmFuc2NvZGluZyIsIndhdGVybWFya3MiLCJiYWNrZ3JvdW5kIiwic3RvcExpdmVTdHJlYW1pbmdXaXRoRGlyZWN0Iiwic3RvcExpdmVTdHJlYW1pbmdXaXRoVHJhbnNjb2RpbmciLCJzZXRUcmFuc2NvZGluZ0xpdmVTdHJlYW1pbmdUcmFja3MiLCJzdHJlYW1JRCIsInRyYW5zY29kaW5nVHJhY2tzIiwicmVtb3ZlVHJhbnNjb2RpbmdMaXZlU3RyZWFtaW5nVHJhY2tzIiwic2V0Q2xpZW50Um9sZSIsImNsaWVudFJvbGUiLCJzdGFydE1lZGlhUmVsYXkiLCJjb25maWd1cmF0aW9uIiwidXBkYXRlTWVkaWFSZWxheSIsInN0b3BNZWRpYVJlbGF5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFXQTtBQUNBO0FBQ0E7QUFDQTtBQWRBLElBQUlBLFFBQVEsR0FBSSxVQUFRLFNBQUtBLFFBQVEsSUFBSyxZQUFZO0VBQ2xEQSxRQUFRLEdBQUdDLE1BQU0sQ0FBQ0MsTUFBTSxJQUFJLFVBQVNDLENBQUMsRUFBRTtJQUNwQyxLQUFLLElBQUlDLENBQUMsRUFBRUMsQ0FBQyxHQUFH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b3VyY2VzQ29udGVudCI6WyJ2YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBmdW5jdGlvbiAoKSB7XG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKVxuICAgICAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0O1xuICAgIH07XG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59O1xuaW1wb3J0IHsgUU5SVENUcmFja0tpbmQgfSBmcm9tICcuLi9lbnVtL1JUQ0VudW0nO1xuaW1wb3J0IHsgUU5SZW1vdGVWaWRlb1RyYWNrIH0gZnJvbSAnLi9SVENSZW1vdGVWaWRlb1RyYWNrJztcbmltcG9ydCB7IFFOUmVtb3RlQXVkaW9UcmFjayB9IGZyb20gJy4vUlRDUmVtb3RlQXVkaW9UcmFjayc7XG5pbXBvcnQgeyBRTkxvY2FsVHJhY2sgfSBmcm9tICcuL1JUQ0xvY2FsVHJhY2snO1xudmFyIFJUQ0NsaWVudCA9IHVuaS5yZXF1aXJlTmF0aXZlUGx1Z2luKCdRTlJUQy1VbmlQbHVnaW4tUU5SdGNDbGllbnQnKTtcbnZhciBRTkV2ZW50ID0gdW5pLnJlcXVpcmVOYXRpdmVQbHVnaW4oJ2dsb2JhbEV2ZW50Jyk7XG52YXIgUU5SVENDbGllbnQgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFFOUlRDQ2xpZW50KCkge1xuICAgICAgICB0aGlzLnZhcmlhdGlvbkxpc3QgPSBbXG4gICAgICAgICAgICAnb25Vc2VyUHVibGlzaGVkJyxcbiAgICAgICAgICAgICdvblVzZXJVbnB1Ymxpc2hlZCcsXG4gICAgICAgICAgICAnb25WaWRlb1N1YnNjcmliZWQnLFxuICAgICAgICAgICAgJ29uQXVkaW9TdWJzY3JpYmVkJyxcbiAgICAgICAgXTtcbiAgICB9XG4gICAgUU5SVENDbGllbnQucHJvdG90eXBlLnRyYW5zZm9ybVJlbW90ZVJUQ1RyYWNrID0gZnVuY3Rpb24gKHRyYWNrTGlzdCkge1xuICAgICAgICB2YXIgcmVzdWx0ID0gW107XG4gICAgICAgIGZvciAodmFyIF9pID0gMCwgdHJhY2tMaXN0XzEgPSB0cmFja0xpc3Q7IF9pIDwgdHJhY2tMaXN0XzEubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICB2YXIgaSA9IHRyYWNrTGlzdF8xW19pXTtcbiAgICAgICAgICAgIHZhciBjb25maWcgPSBfX2Fzc2lnbih7IGlkZW50aWZ5SUQ6IGkudHJhY2tJRCwgcmF3OiBpIH0sIGkpO1xuICAgICAgICAgICAgaWYgKGkua2luZCA9PT0gUU5SVENUcmFja0tpbmQuYXVkaW8pIHtcbiAgICAgICAgICAgICAgICByZXN1bHQucHVzaChuZXcgUU5SZW1vdGVBdWRpb1RyYWNrKGNvbmZpZykpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0LnB1c2gobmV3IFFOUmVtb3RlVmlkZW9UcmFjayhjb25maWcpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH07XG4gICAgUU5SVENDbGllbnQucHJvdG90eXBlLnRyYW5zZm9ybUxvY2FsUlRDVHJhY2sgPSBmdW5jdGlvbiAodHJhY2tMaXN0KSB7XG4gICAgICAgIHZhciByZXN1bHQgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgX2kgPSAwLCB0cmFja0xpc3RfMiA9IHRyYWNrTGlzdDsgX2kgPCB0cmFja0xpc3RfMi5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgIHZhciBpID0gdHJhY2tMaXN0XzJbX2ldO1xuICAgICAgICAgICAgdmFyIGNvbmZpZyA9IF9fYXNzaWduKHsgaWRlbnRpZnlJRDogaS50cmFja0lELCB1c2VySUQ6ICcnLCByYXc6IGkgfSwgaSk7XG4gICAgICAgICAgICBpZiAoaS5raW5kID09PSBRTlJUQ1RyYWNrS2luZC5hdWRpbykge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKG5ldyBRTkxvY2FsVHJhY2soY29uZmlnKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXN1bHQucHVzaChuZXcgUU5Mb2NhbFRyYWNrKGNvbmZpZykpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfTtcbiAgICBRTlJUQ0NsaWVudC5wcm90b3R5cGUuY3JlYXRlUmVtb3RlVHJhY2tEYXRhQ2FsbGJhY2sgPSBmdW5jdGlvbiAobGlzdGVuZXIpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdmFyIHZhcmlhdGlvbkNhbGxiYWNrID0gZnVuY3Rpb24gKHBhcmFtcykge1xuICAgICAgICAgICAgdmFyIHJlc3VsdCA9IF90aGlzLnRyYW5zZm9ybVJlbW90ZVJUQ1RyYWNrKHBhcmFtcy50cmFja0xpc3QpO1xuICAgICAgICAgICAgdmFyIGNhbGxiYWNrRGF0YSA9IHtcbiAgICAgICAgICAgICAgICByZW1vdGVVc2VySUQ6IHBhcmFtcy5yZW1vdGVVc2VySUQsXG4gICAgICAgICAgICAgICAgdHJhY2tMaXN0OiByZXN1bHRcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB2YXIgY2FsbGJhY2sgPSBsaXN0ZW5lcjtcbiAgICAgICAgICAgIGNhbGxiYWNrKGNhbGxiYWNrRGF0YSk7XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiB2YXJpYXRpb25DYWxsYmFjaztcbiAgICB9O1xuICAgIFFOUlRDQ2xpZW50LnByb3RvdHlwZS5vbiA9IGZ1bmN0aW9uIChuYW1lLCBsaXN0ZW5lcikge1xuICAgICAgICBpZiAodGhpcy52YXJpYXRpb25MaXN0LnNvbWUoZnVuY3Rpb24gKGl0ZW0pIHsgcmV0dXJuIGl0ZW0gPT09IG5hbWU7IH0pKSB7XG4gICAgICAgICAgICB2YXIgY2FsbGJhY2sgPSB0aGlzLmNyZWF0ZVJlbW90ZVRyYWNrRGF0YUNhbGxiYWNrKGxpc3RlbmVyKTtcbiAgICAgICAgICAgIFFORXZlbnQuYWRkRXZlbnRMaXN0ZW5lcihuYW1lLCBjYWxsYmFjayk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBRTkV2ZW50LmFkZEV2ZW50TGlzdGVuZXIobmFtZSwgbGlzdGVuZXIpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBRTlJUQ0NsaWVudC5wcm90b3R5cGUub2ZmID0gZnVuY3Rpb24gKG5hbWUsIGxpc3RlbmVyKSB7XG4gICAgICAgIFFORXZlbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihuYW1lLCBsaXN0ZW5lcik7XG4gICAgfTtcbiAgICBRTlJUQ0NsaWVudC5wcm90b3R5cGUuam9pbiA9IGZ1bmN0aW9uICh0b2tlbiwgdXNlckRhdGEpIHtcbiAgICAgICAgUlRDQ2xpZW50LmpvaW4odG9rZW4sIHVzZXJEYXRhICE9PSBudWxsICYmIHVzZXJEYXRhICE9PSB2b2lkIDAgPyB1c2VyRGF0YSA6ICcnKTtcbiAgICB9O1xuICAgIFFOUlRDQ2xpZW50LnByb3RvdHlwZS5sZWF2ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgUlRDQ2xpZW50LmxlYXZlKCk7XG4gICAgfTtcbiAgICBRTlJUQ0NsaWVudC5wcm90b3R5cGUucHVibGlzaCA9IGZ1bmN0aW9uICh0cmFja3MsIGNhbGxiYWNrKSB7XG4gICAgICAgIFJUQ0NsaWVudC5wdWJsaXNoKHRyYWNrcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICB2YXIgb25QdWJsaXNoZWQgPSBfYS5vblB1Ymxpc2hlZCwgZGF0YSA9IF9hLmRhdGEsIGVycm9yID0gX2EuZXJyb3I7XG4gICAgICAgICAgICBpZiAob25QdWJsaXNoZWQpIHtcbiAgICAgICAgICAgICAgICB2YXIgX2xvb3BfMSA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGluZGV4ID0gdHJhY2tzLmZpbmRJbmRleChmdW5jdGlvbiAoaXRlbSkgeyByZXR1cm4gaXRlbS5pZGVudGlmeUlEID09PSBrZXk7IH0pO1xuICAgICAgICAgICAgICAgICAgICBpZiAoaW5kZXggPj0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHJhY2tzW2luZGV4XS50cmFja0lEID0gZGF0YVtrZXldO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBrZXkgaW4gZGF0YSkge1xuICAgICAgICAgICAgICAgICAgICBfbG9vcF8xKGtleSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FsbGJhY2sob25QdWJsaXNoZWQsIGVycm9yKTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBRTlJUQ0NsaWVudC5wcm90b3R5cGUudW5wdWJsaXNoID0gZnVuY3Rpb24gKHRyYWNrcykge1xuICAgICAgICBSVENDbGllbnQudW5wdWJsaXNoKHRyYWNrcyk7XG4gICAgfTtcbiAgICBRTlJUQ0NsaWVudC5wcm90b3R5cGUuc3Vic2NyaWJlID0gZnVuY3Rpb24gKHRyYWNrcykge1xuICAgICAgICBSVENDbGllbnQuc3Vic2NyaWJlKHRyYWNrcyk7XG4gICAgfTtcbiAgICBRTlJUQ0NsaWVudC5wcm90b3R5cGUudW5zdWJzY3JpYmUgPSBmdW5jdGlvbiAodHJhY2tzKSB7XG4gICAgICAgIFJUQ0NsaWVudC51bnN1YnNjcmliZSh0cmFja3MpO1xuICAgIH07XG4gICAgUU5SVENDbGllbnQucHJvdG90eXBlLmdldFN1YnNjcmliZWRUcmFja3MgPSBmdW5jdGlvbiAodXNlcklEKSB7XG4gICAgICAgIHZhciByZW1vdGVUcmFjayA9IFJUQ0NsaWVudC5nZXRTdWJzY3JpYmVkVHJhY2tzKHVzZXJJRCk7XG4gICAgICAgIHJldHVybiB0aGlzLnRyYW5zZm9ybVJlbW90ZVJUQ1RyYWNrKHJlbW90ZVRyYWNrKTtcbiAgICB9O1xuICAgIFFOUlRDQ2xpZW50LnByb3RvdHlwZS5nZXRMb2NhbEF1ZGlvVHJhY2tTdGF0cyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIFJUQ0NsaWVudC5nZXRMb2NhbEF1ZGlvVHJhY2tTdGF0cygpO1xuICAgIH07XG4gICAgUU5SVENDbGllbnQucHJvdG90eXBlLmdldExvY2FsVmlkZW9UcmFja1N0YXRzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gUlRDQ2xpZW50LmdldExvY2FsVmlkZW9UcmFja1N0YXRzKCk7XG4gICAgfTtcbiAgICBRTlJUQ0NsaWVudC5wcm90b3R5cGUuZ2V0UmVtb3RlQXVkaW9UcmFja1N0YXRzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gUlRDQ2xpZW50LmdldFJlbW90ZUF1ZGlvVHJhY2tTdGF0cygpO1xuICAgIH07XG4gICAgUU5SVENDbGllbnQucHJvdG90eXBlLmdldFJlbW90ZVZpZGVvVHJhY2tTdGF0cyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIFJUQ0NsaWVudC5nZXRSZW1vdGVWaWRlb1RyYWNrU3RhdHMoKTtcbiAgICB9O1xuICAgIFFOUlRDQ2xpZW50LnByb3RvdHlwZS5nZXRVc2VyTmV0d29ya1F1YWxpdHkgPSBmdW5jdGlvbiAodXNlcklEKSB7XG4gICAgICAgIHJldHVybiBSVENDbGllbnQuZ2V0VXNlck5ldHdvcmtRdWFsaXR5KHVzZXJJRCk7XG4gICAgfTtcbiAgICBRTlJUQ0NsaWVudC5wcm90b3R5cGUuZ2V0UmVtb3RlVXNlcnMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciByZW1vdGVVc2VyID0gUlRDQ2xpZW50LmdldFJlbW90ZVVzZXJzKCk7XG4gICAgICAgIHZhciByZXN1bHQgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgX2kgPSAwLCByZW1vdGVVc2VyXzEgPSByZW1vdGVVc2VyOyBfaSA8IHJlbW90ZVVzZXJfMS5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgIHZhciBpID0gcmVtb3RlVXNlcl8xW19pXTtcbiAgICAgICAgICAgIHZhciBhdWRpb1RyYWNrcyA9IHRoaXMudHJhbnNmb3JtUmVtb3RlUlRDVHJhY2soaS5hdWRpb1RyYWNrcyk7XG4gICAgICAgICAgICB2YXIgdmlkZW9UcmFja3MgPSB0aGlzLnRyYW5zZm9ybVJlbW90ZVJUQ1RyYWNrKGkudmlkZW9UcmFja3MpO1xuICAgICAgICAgICAgcmVzdWx0LnB1c2goe1xuICAgICAgICAgICAgICAgIHVzZXJJRDogaS51c2VySUQsXG4gICAgICAgICAgICAgICAgdmlkZW9UcmFja3M6IHZpZGVvVHJhY2tzLFxuICAgICAgICAgICAgICAgIGF1ZGlvVHJhY2tzOiBhdWRpb1RyYWNrcyxcbiAgICAgICAgICAgICAgICB1c2VyRGF0YTogaS51c2VyRGF0YVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xuICAgIFFOUlRDQ2xpZW50LnByb3RvdHlwZS5nZXRQdWJsaXNoZWRUcmFja3MgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBsb2Nha1RyYWNrID0gUlRDQ2xpZW50LmdldFB1Ymxpc2hlZFRyYWNrcygpO1xuICAgICAgICByZXR1cm4gdGhpcy50cmFuc2Zvcm1Mb2NhbFJUQ1RyYWNrKGxvY2FrVHJhY2spO1xuICAgIH07XG4gICAgUU5SVENDbGllbnQucHJvdG90eXBlLnNlbmRNZXNzYWdlID0gZnVuY3Rpb24gKG1lc3NhZ2UsIHVzZXJzLCBtZXNzYWdlSWQpIHtcbiAgICAgICAgUlRDQ2xpZW50LnNlbmRNZXNzYWdlKG1lc3NhZ2UsIHVzZXJzLCBtZXNzYWdlSWQpO1xuICAgIH07XG4gICAgUU5SVENDbGllbnQucHJvdG90eXBlLmdldENvbm5lY3Rpb25TdGF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIFJUQ0NsaWVudC5nZXRDb25uZWN0aW9uU3RhdGUoKTtcbiAgICB9O1xuICAgIFFOUlRDQ2xpZW50LnByb3RvdHlwZS5zZXRBdXRvU3Vic2NyaWJlID0gZnVuY3Rpb24gKGF1dG9TdWJzY3JpYmUpIHtcbiAgICAgICAgUlRDQ2xpZW50LnNldEF1dG9TdWJzY3JpYmUoYXV0b1N1YnNjcmliZSk7XG4gICAgfTtcbiAgICBRTlJUQ0NsaWVudC5wcm90b3R5cGUuc3RhcnRMaXZlU3RyZWFtaW5nV2l0aERpcmVjdCA9IGZ1bmN0aW9uIChjb25maWcpIHtcbiAgICAgICAgUlRDQ2xpZW50LnN0YXJ0TGl2ZVN0cmVhbWluZ1dpdGhEaXJlY3QoY29uZmlnKTtcbiAgICB9O1xuICAgIFFOUlRDQ2xpZW50LnByb3RvdHlwZS5zdGFydExpdmVTdHJlYW1pbmdXaXRoVHJhbnNjb2RpbmcgPSBmdW5jdGlvbiAoY29uZmlnKSB7XG4gICAgICAgICFjb25maWcud2F0ZXJtYXJrcyAmJiAoY29uZmlnLndhdGVybWFya3MgPSBbXSk7XG4gICAgICAgICFjb25maWcuYmFja2dyb3VuZCAmJiAoY29uZmlnLmJhY2tncm91bmQgPSB7fSk7XG4gICAgICAgIFJUQ0NsaWVudC5zdGFydExpdmVTdHJlYW1pbmdXaXRoVHJhbnNjb2RpbmcoY29uZmlnKTtcbiAgICB9O1xuICAgIFFOUlRDQ2xpZW50LnByb3RvdHlwZS5zdG9wTGl2ZVN0cmVhbWluZ1dpdGhEaXJlY3QgPSBmdW5jdGlvbiAoY29uZmlnKSB7XG4gICAgICAgIFJUQ0NsaWVudC5zdG9wTGl2ZVN0cmVhbWluZ1dpdGhEaXJlY3QoY29uZmlnKTtcbiAgICB9O1xuICAgIFFOUlRDQ2xpZW50LnByb3RvdHlwZS5zdG9wTGl2ZVN0cmVhbWluZ1dpdGhUcmFuc2NvZGluZyA9IGZ1bmN0aW9uIChjb25maWcpIHtcbiAgICAgICAgUlRDQ2xpZW50LnN0b3BMaXZlU3RyZWFtaW5nV2l0aFRyYW5zY29kaW5nKGNvbmZpZyk7XG4gICAgfTtcbiAgICBRTlJUQ0NsaWVudC5wcm90b3R5cGUuc2V0VHJhbnNjb2RpbmdMaXZlU3RyZWFtaW5nVHJhY2tzID0gZnVuY3Rpb24gKHN0cmVhbUlELCB0cmFuc2NvZGluZ1RyYWNrcykge1xuICAgICAgICBSVENDbGllbnQuc2V0VHJhbnNjb2RpbmdMaXZlU3RyZWFtaW5nVHJhY2tzKHN0cmVhbUlELCB0cmFuc2NvZGluZ1RyYWNrcyk7XG4gICAgfTtcbiAgICBRTlJUQ0NsaWVudC5wcm90b3R5cGUucmVtb3ZlVHJhbnNjb2RpbmdMaXZlU3RyZWFtaW5nVHJhY2tzID0gZnVuY3Rpb24gKHN0cmVhbUlELCB0cmFuc2NvZGluZ1RyYWNrcykge1xuICAgICAgICBSVENDbGllbnQucmVtb3ZlVHJhbnNjb2RpbmdMaXZlU3RyZWFtaW5nVHJhY2tzKHN0cmVhbUlELCB0cmFuc2NvZGluZ1RyYWNrcyk7XG4gICAgfTtcbiAgICBRTlJUQ0NsaWVudC5wcm90b3R5cGUuc2V0Q2xpZW50Um9sZSA9IGZ1bmN0aW9uIChjbGllbnRSb2xlLCBjYWxsYmFjaykge1xuICAgICAgICBSVENDbGllbnQuc2V0Q2xpZW50Um9sZShjbGllbnRSb2xlLCBjYWxsYmFjayk7XG4gICAgfTtcbiAgICBRTlJUQ0NsaWVudC5wcm90b3R5cGUuc3RhcnRNZWRpYVJlbGF5ID0gZnVuY3Rpb24gKGNvbmZpZ3VyYXRpb24sIGNhbGxiYWNrKSB7XG4gICAgICAgIFJUQ0NsaWVudC5zdGFydE1lZGlhUmVsYXkoY29uZmlndXJhdGlvbiwgY2FsbGJhY2spO1xuICAgIH07XG4gICAgUU5SVENDbGllbnQucHJvdG90eXBlLnVwZGF0ZU1lZGlhUmVsYXkgPSBmdW5jdGlvbiAoY29uZmlndXJhdGlvbiwgY2FsbGJhY2spIHtcbiAgICAgICAgUlRDQ2xpZW50LnVwZGF0ZU1lZGlhUmVsYXkoY29uZmlndXJhdGlvbiwgY2FsbGJhY2spO1xuICAgIH07XG4gICAgUU5SVENDbGllbnQucHJvdG90eXBlLnN0b3BNZWRpYVJlbGF5ID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgICAgIFJUQ0NsaWVudC5zdG9wTWVkaWFSZWxheShjYWxsYmFjayk7XG4gICAgfTtcbiAgICByZXR1cm4gUU5SVENDbGllbnQ7XG59KCkpO1xuZXhwb3J0IHsgUU5SVENDbGllbnQgfTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///225\n");

/***/ }),

/***/ 226:
/*!**************************************************************************************************************************!*\
  !*** /Users/tongjie/Desktop/QNRTC-Uniapp/demo/js_sdk/QNRTC-UniPlugin-JS/QNRTC-UniPlugin-JS/class/RTCRemoteVideoTrack.js ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__webpack_provided_uni_dot_requireNativePlugin) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.QNRemoteVideoTrack = void 0;\nvar _RTCRemoteTrack = __webpack_require__(/*! ./RTCRemoteTrack */ 227);\nvar __extends = void 0 && (void 0).__extends || function () {\n  var _extendStatics = function extendStatics(d, b) {\n    _extendStatics = Object.setPrototypeOf || {\n      __proto__: []\n    } instanceof Array && function (d, b) {\n      d.__proto__ = b;\n    } || function (d, b) {\n      for (var p in b) {\n        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];\n      }\n    };\n    return _extendStatics(d, b);\n  };\n  return function (d, b) {\n    if (typeof b !== \"function\" && b !== null) throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\n    _extendStatics(d, b);\n    function __() {\n      this.constructor = d;\n    }\n    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n  };\n}();\nvar __awaiter = void 0 && (void 0).__awaiter || function (thisArg, _arguments, P, generator) {\n  function adopt(value) {\n    return value instanceof P ? value : new P(function (resolve) {\n      resolve(value);\n    });\n  }\n  return new (P || (P = Promise))(function (resolve, reject) {\n    function fulfilled(value) {\n      try {\n        step(generator.next(value));\n      } catch (e) {\n        reject(e);\n      }\n    }\n    function rejected(value) {\n      try {\n        step(generator[\"throw\"](value));\n      } catch (e) {\n        reject(e);\n      }\n    }\n    function step(result) {\n      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);\n    }\n    step((generator = generator.apply(thisArg, _arguments || [])).next());\n  });\n};\nvar __generator = void 0 && (void 0).__generator || function (thisArg, body) {\n  var _ = {\n      label: 0,\n      sent: function sent() {\n        if (t[0] & 1) throw t[1];\n        return t[1];\n      },\n      trys: [],\n      ops: []\n    },\n    f,\n    y,\n    t,\n    g;\n  return g = {\n    next: verb(0),\n    \"throw\": verb(1),\n    \"return\": verb(2)\n  }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function () {\n    return this;\n  }), g;\n  function verb(n) {\n    return function (v) {\n      return step([n, v]);\n    };\n  }\n  function step(op) {\n    if (f) throw new TypeError(\"Generator is already executing.\");\n    while (g && (g = 0, op[0] && (_ = 0)), _) {\n      try {\n        if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n        if (y = 0, t) op = [op[0] & 2, t.value];\n        switch (op[0]) {\n          case 0:\n          case 1:\n            t = op;\n            break;\n          case 4:\n            _.label++;\n            return {\n              value: op[1],\n              done: false\n            };\n          case 5:\n            _.label++;\n            y = op[1];\n            op = [0];\n            continue;\n          case 7:\n            op = _.ops.pop();\n            _.trys.pop();\n            continue;\n          default:\n            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {\n              _ = 0;\n              continue;\n            }\n            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {\n              _.label = op[1];\n              break;\n            }\n            if (op[0] === 6 && _.label < t[1]) {\n              _.label = t[1];\n              t = op;\n              break;\n            }\n            if (t && _.label < t[2]) {\n              _.label = t[2];\n              _.ops.push(op);\n              break;\n            }\n            if (t[2]) _.ops.pop();\n            _.trys.pop();\n            continue;\n        }\n        op = body.call(thisArg, _);\n      } catch (e) {\n        op = [6, e];\n        y = 0;\n      } finally {\n        f = t = 0;\n      }\n    }\n    if (op[0] & 5) throw op[1];\n    return {\n      value: op[0] ? op[1] : void 0,\n      done: true\n    };\n  }\n};\nvar QNRtcTrack = __webpack_provided_uni_dot_requireNativePlugin('QNRTC-UniPlugin-QNRtcTrack');\nvar QNEvent = __webpack_provided_uni_dot_requireNativePlugin('globalEvent');\nvar QNRemoteVideoTrack = function (_super) {\n  __extends(QNRemoteVideoTrack, _super);\n  function QNRemoteVideoTrack() {\n    return _super !== null && _super.apply(this, arguments) || this;\n  }\n  QNRemoteVideoTrack.prototype.setProfile = function (profile) {\n    return QNRtcTrack.setProfile(this.identifyID, profile);\n  };\n  QNRemoteVideoTrack.prototype.isMultiProfileEnabled = function () {\n    return QNRtcTrack.isMultiProfileEnabled(this.identifyID);\n  };\n  QNRemoteVideoTrack.prototype.getProfile = function () {\n    return QNRtcTrack.getProfile(this.identifyID);\n  };\n  QNRemoteVideoTrack.prototype.takeVideoSnapshot = function () {\n    return __awaiter(this, void 0, void 0, function () {\n      var platform;\n      var _this = this;\n      return __generator(this, function (_a) {\n        platform = uni.getSystemInfoSync().platform;\n        if (platform === 'ios') {\n          return [2, new Promise(function (resolve, reject) {\n            QNRtcTrack.takeVideoSnapshot(_this.identifyID);\n            var listener = function listener(param) {\n              QNEvent.removeEventListener('onLocalVideoFrame', listener);\n              resolve({\n                base64: _this.trimBase64(param.data)\n              });\n            };\n            QNEvent.addEventListener('onLocalVideoFrame', listener);\n            setTimeout(function () {\n              QNEvent.removeEventListener('onLocalVideoFrame', listener);\n              reject();\n            }, 5000);\n          })];\n        } else if (platform === 'android') {\n          return [2, new Promise(function (resolve, reject) {\n            QNRtcTrack.takeVideoSnapshot(_this.trackID, function (data) {\n              resolve(data);\n            });\n          })];\n        }\n        return [2];\n      });\n    });\n  };\n  QNRemoteVideoTrack.prototype.trimBase64 = function (base64) {\n    if (!base64) {\n      return '';\n    }\n    return base64.replace(/\\r|\\n/g, '');\n  };\n  return QNRemoteVideoTrack;\n}(_RTCRemoteTrack.QNRemoteTrack);\nexports.QNRemoteVideoTrack = QNRemoteVideoTrack;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/uni-app-plus-nvue/dist/require-native-plugin.js */ 54)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vanNfc2RrL1FOUlRDLVVuaVBsdWdpbi1KUy9RTlJUQy1VbmlQbHVnaW4tSlMvY2xhc3MvUlRDUmVtb3RlVmlkZW9UcmFjay5qcyJdLCJuYW1lcyI6WyJfX2V4dGVuZHMiLCJleHRlbmRTdGF0aWNzIiwiZCIsImIiLCJPYmplY3QiLCJzZXRQcm90b3R5cGVPZiIsIl9fcHJvdG9fXyIsIkFycmF5IiwicCIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsIlR5cGVFcnJvciIsIlN0cmluZyIsIl9fIiwiY29uc3RydWN0b3IiLCJjcmVhdGUiLCJfX2F3YWl0ZXIiLCJ0aGlzQXJnIiwiX2FyZ3VtZW50cyIsIlAiLCJnZW5lcmF0b3IiLCJhZG9wdCIsInZhbHVlIiwicmVzb2x2ZSIsIlByb21pc2UiLCJyZWplY3QiLCJmdWxmaWxsZWQiLCJzdGVwIiwibmV4dCIsImUiLCJyZWplY3RlZCIsInJlc3VsdCIsImRvbmUiLCJ0aGVuIiwiYXBwbHkiLCJfX2dlbmVyYXRvciIsImJvZHkiLCJfIiwibGFiZWwiLCJzZW50IiwidCIsInRyeXMiLCJvcHMiLCJmIiwieSIsImciLCJ2ZXJiIiwiU3ltYm9sIiwiaXRlcmF0b3IiLCJuIiwidiIsIm9wIiwicG9wIiwibGVuZ3RoIiwicHVzaCIsIlFOUnRjVHJhY2siLCJ1bmkiLCJRTkV2ZW50IiwiUU5SZW1vdGVWaWRlb1RyYWNrIiwiX3N1cGVyIiwiYXJndW1lbnRzIiwic2V0UHJvZmlsZSIsInByb2ZpbGUiLCJpZGVudGlmeUlEIiwiaXNNdWx0aVByb2ZpbGVFbmFibGVkIiwiZ2V0UHJvZmlsZSIsInRha2VWaWRlb1NuYXBzaG90IiwicGxhdGZvcm0iLCJfdGhpcyIsIl9hIiwiZ2V0U3lzdGVtSW5mb1N5bmMiLCJsaXN0ZW5lciIsInBhcmFtIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImJhc2U2NCIsInRyaW1CYXNlNjQiLCJkYXRhIiwiYWRkRXZlbnRMaXN0ZW5lciIsInNldFRpbWVvdXQi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O0VBQ3ZDLENBQUM7RUFDRCxPQUFPdEIsa0JBQWtCO0FBQzdCLENBQUMsQ0FBQ3VCLDZCQUFhLENBQUU7QUFBQyxnRCIsImZpbGUiOiIyMjYuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYiwgcCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICB9O1xuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBpZiAodHlwZW9mIGIgIT09IFwiZnVuY3Rpb25cIiAmJiBiICE9PSBudWxsKVxuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNsYXNzIGV4dGVuZHMgdmFsdWUgXCIgKyBTdHJpbmcoYikgKyBcIiBpcyBub3QgYSBjb25zdHJ1Y3RvciBvciBudWxsXCIpO1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG52YXIgX19nZW5lcmF0b3IgPSAodGhpcyAmJiB0aGlzLl9fZ2VuZXJhdG9yKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgYm9keSkge1xuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XG4gICAgICAgIHdoaWxlIChnICYmIChnID0gMCwgb3BbMF0gJiYgKF8gPSAwKSksIF8pIHRyeSB7XG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcbiAgICB9XG59O1xuaW1wb3J0IHsgUU5SZW1vdGVUcmFjayB9IGZyb20gJy4vUlRDUmVtb3RlVHJhY2snO1xudmFyIFFOUnRjVHJhY2sgPSB1bmkucmVxdWlyZU5hdGl2ZVBsdWdpbignUU5SVEMtVW5pUGx1Z2luLVFOUnRjVHJhY2snKTtcbnZhciBRTkV2ZW50ID0gdW5pLnJlcXVpcmVOYXRpdmVQbHVnaW4oJ2dsb2JhbEV2ZW50Jyk7XG52YXIgUU5SZW1vdGVWaWRlb1RyYWNrID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoUU5SZW1vdGVWaWRlb1RyYWNrLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIFFOUmVtb3RlVmlkZW9UcmFjaygpIHtcbiAgICAgICAgcmV0dXJuIF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICAgIH1cbiAgICBRTlJlbW90ZVZpZGVvVHJhY2sucHJvdG90eXBlLnNldFByb2ZpbGUgPSBmdW5jdGlvbiAocHJvZmlsZSkge1xuICAgICAgICByZXR1cm4gUU5SdGNUcmFjay5zZXRQcm9maWxlKHRoaXMuaWRlbnRpZnlJRCwgcHJvZmlsZSk7XG4gICAgfTtcbiAgICBRTlJlbW90ZVZpZGVvVHJhY2sucHJvdG90eXBlLmlzTXVsdGlQcm9maWxlRW5hYmxlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIFFOUnRjVHJhY2suaXNNdWx0aVByb2ZpbGVFbmFibGVkKHRoaXMuaWRlbnRpZnlJRCk7XG4gICAgfTtcbiAgICBRTlJlbW90ZVZpZGVvVHJhY2sucHJvdG90eXBlLmdldFByb2ZpbGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBRTlJ0Y1RyYWNrLmdldFByb2ZpbGUodGhpcy5pZGVudGlmeUlEKTtcbiAgICB9O1xuICAgIFFOUmVtb3RlVmlkZW9UcmFjay5wcm90b3R5cGUudGFrZVZpZGVvU25hcHNob3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBwbGF0Zm9ybTtcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgcGxhdGZvcm0gPSB1bmkuZ2V0U3lzdGVtSW5mb1N5bmMoKS5wbGF0Zm9ybTtcbiAgICAgICAgICAgICAgICBpZiAocGxhdGZvcm0gPT09ICdpb3MnKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiwgbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFFOUnRjVHJhY2sudGFrZVZpZGVvU25hcHNob3QoX3RoaXMuaWRlbnRpZnlJRCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGxpc3RlbmVyID0gZnVuY3Rpb24gKHBhcmFtKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFFORXZlbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignb25Mb2NhbFZpZGVvRnJhbWUnLCBsaXN0ZW5lcik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoeyBiYXNlNjQ6IF90aGlzLnRyaW1CYXNlNjQocGFyYW0uZGF0YSkgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBRTkV2ZW50LmFkZEV2ZW50TGlzdGVuZXIoJ29uTG9jYWxWaWRlb0ZyYW1lJywgbGlzdGVuZXIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBRTkV2ZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ29uTG9jYWxWaWRlb0ZyYW1lJywgbGlzdGVuZXIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCA1MDAwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAocGxhdGZvcm0gPT09ICdhbmRyb2lkJykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIsIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBRTlJ0Y1RyYWNrLnRha2VWaWRlb1NuYXBzaG90KF90aGlzLnRyYWNrSUQsIGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBbMl07XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBRTlJlbW90ZVZpZGVvVHJhY2sucHJvdG90eXBlLnRyaW1CYXNlNjQgPSBmdW5jdGlvbiAoYmFzZTY0KSB7XG4gICAgICAgIGlmICghYmFzZTY0KSB7XG4gICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGJhc2U2NC5yZXBsYWNlKC9cXHJ8XFxuL2csICcnKTtcbiAgICB9O1xuICAgIHJldHVybiBRTlJlbW90ZVZpZGVvVHJhY2s7XG59KFFOUmVtb3RlVHJhY2spKTtcbmV4cG9ydCB7IFFOUmVtb3RlVmlkZW9UcmFjayB9O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///226\n");

/***/ }),

/***/ 227:
/*!*********************************************************************************************************************!*\
  !*** /Users/tongjie/Desktop/QNRTC-Uniapp/demo/js_sdk/QNRTC-UniPlugin-JS/QNRTC-UniPlugin-JS/class/RTCRemoteTrack.js ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__webpack_provided_uni_dot_requireNativePlugin) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.QNRemoteTrack = void 0;\nvar _RTCTrack = __webpack_require__(/*! ./RTCTrack */ 228);\nvar __extends = void 0 && (void 0).__extends || function () {\n  var _extendStatics = function extendStatics(d, b) {\n    _extendStatics = Object.setPrototypeOf || {\n      __proto__: []\n    } instanceof Array && function (d, b) {\n      d.__proto__ = b;\n    } || function (d, b) {\n      for (var p in b) {\n        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];\n      }\n    };\n    return _extendStatics(d, b);\n  };\n  return function (d, b) {\n    if (typeof b !== \"function\" && b !== null) throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\n    _extendStatics(d, b);\n    function __() {\n      this.constructor = d;\n    }\n    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n  };\n}();\nvar QNRtcTrack = __webpack_provided_uni_dot_requireNativePlugin('QNRTC-UniPlugin-QNRtcTrack');\nvar QNRemoteTrack = function (_super) {\n  __extends(QNRemoteTrack, _super);\n  function QNRemoteTrack() {\n    return _super !== null && _super.apply(this, arguments) || this;\n  }\n  QNRemoteTrack.prototype.isSubscribed = function () {\n    return QNRtcTrack.isSubscribed(this.identifyID);\n  };\n  return QNRemoteTrack;\n}(_RTCTrack.QNTrack);\nexports.QNRemoteTrack = QNRemoteTrack;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/uni-app-plus-nvue/dist/require-native-plugin.js */ 54)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vanNfc2RrL1FOUlRDLVVuaVBsdWdpbi1KUy9RTlJUQy1VbmlQbHVnaW4tSlMvY2xhc3MvUlRDUmVtb3RlVHJhY2suanMiXSwibmFtZXMiOlsiX19leHRlbmRzIiwiZXh0ZW5kU3RhdGljcyIsImQiLCJiIiwiT2JqZWN0Iiwic2V0UHJvdG90eXBlT2YiLCJfX3Byb3RvX18iLCJBcnJheSIsInAiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJUeXBlRXJyb3IiLCJTdHJpbmciLCJfXyIsImNvbnN0cnVjdG9yIiwiY3JlYXRlIiwiUU5SdGNUcmFjayIsInVuaSIsIlFOUmVtb3RlVHJhY2siLCJfc3VwZXIiLCJhcHBseSIsImFyZ3VtZW50cyIsImlzU3Vic2NyaWJlZCIsImlkZW50aWZ5SUQiLCJRTlRyYWNrIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFlQTtBQWZBLElBQUlBLFNBQVMsR0FBSSxVQUFRLFNBQUtBLFNBQVMsSUFBTSxZQUFZO0VBQ3JELElBQUlDLGNBQWEsR0FBRyx1QkFBVUMsQ0FBQyxFQUFFQyxDQUFDLEVBQUU7SUFDaENGLGNBQWEsR0FBR0csTUFBTSxDQUFDQyxjQUFjLElBQ2hDO01BQUVDLFNBQVMsRUFBRTtJQUFHLENBQUMsWUFBWUMsS0FBSyxJQUFJLFVBQVVMLENBQUMsRUFBRUMsQ0FBQyxFQUFFO01BQUVELENBQUMsQ0FBQ0ksU0FBUyxHQUFHSCxDQUFDO0lBQUUsQ0FBRSxJQUM1RSxVQUFVRCxDQUFDLEVBQUVDLENBQUMsRUFBRTtNQUFFLEtBQUssSUFBSUssQ0FBQyxJQUFJTCxDQUFDO1FBQUUsSUFBSUMsTUFBTSxDQUFDSyxTQUFTLENBQUNDLGNBQWMsQ0FBQ0MsSUFBSSxDQUFDUixDQUFDLEVBQUVLLENBQUMsQ0FBQyxFQUFFTixDQUFDLENBQUNNLENBQUMsQ0FBQyxHQUFHTCxDQUFDLENBQUNLLENBQUMsQ0FBQztNQUFDO0lBQUMsQ0FBQztJQUNyRyxPQUFPUCxjQUFhLENBQUNDLENBQUMsRUFBRUMsQ0FBQyxDQUFDO0VBQzlCLENBQUM7RUFDRCxPQUFPLFVBQVVELENBQUMsRUFBRUMsQ0FBQyxFQUFFO0lBQ25CLElBQUksT0FBT0EsQ0FBQyxLQUFLLFVBQVUsSUFBSUEsQ0FBQyxLQUFLLElBQUksRUFDckMsTUFBTSxJQUFJUyxTQUFTLENBQUMsc0JBQXNCLEdBQUdDLE1BQU0sQ0FBQ1YsQ0FBQyxDQUFDLEdBQUcsK0JBQStCLENBQUM7SUFDN0ZGLGNBQWEsQ0FBQ0MsQ0FBQyxFQUFFQyxDQUFDLENBQUM7SUFDbkIsU0FBU1csRUFBRSxHQUFHO01BQUUsSUFBSSxDQUFDQyxXQUFXLEdBQUdiLENBQUM7SUFBRTtJQUN0Q0EsQ0FBQyxDQUFDTyxTQUFTLEdBQUdOLENBQUMsS0FBSyxJQUFJLEdBQUdDLE1BQU0sQ0FBQ1ksTUFBTSxDQUFDYixDQUFDLENBQUMsSUFBSVcsRUFBRSxDQUFDTCxTQUFTLEdBQUdOLENBQUMsQ0FBQ00sU0FBUyxFQUFFLElBQUlLLEVBQUUsRUFBRSxDQUFDO0VBQ3hGLENBQUM7QUFDTCxDQUFDLEVBQUc7QUFFSixJQUFJRyxVQUFVLEdBQUdDLDhDQUF1QixDQUFDLDRCQUE0QixDQUFDO0FBQ3RFLElBQUlDLGFBQWEsR0FBSSxVQUFVQyxNQUFNLEVBQUU7RUFDbkNwQixTQUFTLENBQUNtQixhQUFhLEVBQUVDLE1BQU0sQ0FBQztFQUNoQyxTQUFTRCxhQUFhLEdBQUc7SUFDckIsT0FBT0MsTUFBTSxLQUFLLElBQUksSUFBSUEsTUFBTSxDQUFDQyxLQUFLLENBQUMsSUFBSSxFQUFFQyxTQUFTLENBQUMsSUFBSSxJQUFJO0VBQ25FO0VBQ0FILGFBQWEsQ0FBQ1YsU0FBUyxDQUFDYyxZQUFZLEdBQUcsWUFBWTtJQUMvQyxPQUFPTixVQUFVLENBQUNNLFlBQVksQ0FBQyxJQUFJLENBQUNDLFVBQVUsQ0FBQztFQUNuRCxDQUFDO0VBQ0QsT0FBT0wsYUFBYTtBQUN4QixDQUFDLENBQUNNLGlCQUFPLENBQUU7QUFBQyxzQyIsImZpbGUiOiIyMjcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYiwgcCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICB9O1xuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBpZiAodHlwZW9mIGIgIT09IFwiZnVuY3Rpb25cIiAmJiBiICE9PSBudWxsKVxuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNsYXNzIGV4dGVuZHMgdmFsdWUgXCIgKyBTdHJpbmcoYikgKyBcIiBpcyBub3QgYSBjb25zdHJ1Y3RvciBvciBudWxsXCIpO1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xuaW1wb3J0IHsgUU5UcmFjayB9IGZyb20gJy4vUlRDVHJhY2snO1xudmFyIFFOUnRjVHJhY2sgPSB1bmkucmVxdWlyZU5hdGl2ZVBsdWdpbignUU5SVEMtVW5pUGx1Z2luLVFOUnRjVHJhY2snKTtcbnZhciBRTlJlbW90ZVRyYWNrID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoUU5SZW1vdGVUcmFjaywgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBRTlJlbW90ZVRyYWNrKCkge1xuICAgICAgICByZXR1cm4gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gICAgfVxuICAgIFFOUmVtb3RlVHJhY2sucHJvdG90eXBlLmlzU3Vic2NyaWJlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIFFOUnRjVHJhY2suaXNTdWJzY3JpYmVkKHRoaXMuaWRlbnRpZnlJRCk7XG4gICAgfTtcbiAgICByZXR1cm4gUU5SZW1vdGVUcmFjaztcbn0oUU5UcmFjaykpO1xuZXhwb3J0IHsgUU5SZW1vdGVUcmFjayB9O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///227\n");

/***/ }),

/***/ 228:
/*!***************************************************************************************************************!*\
  !*** /Users/tongjie/Desktop/QNRTC-Uniapp/demo/js_sdk/QNRTC-UniPlugin-JS/QNRTC-UniPlugin-JS/class/RTCTrack.js ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__webpack_provided_uni_dot_requireNativePlugin) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.QNTrack = void 0;\nvar _RTCEnum = __webpack_require__(/*! ../enum/RTCEnum */ 224);\nvar __rest = void 0 && (void 0).__rest || function (s, e) {\n  var t = {};\n  for (var p in s) {\n    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];\n  }\n  if (s != null && typeof Object.getOwnPropertySymbols === \"function\") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {\n    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];\n  }\n  return t;\n};\nvar QNRtcTrack = __webpack_provided_uni_dot_requireNativePlugin('QNRTC-UniPlugin-QNRtcTrack');\nvar QNEvent = __webpack_provided_uni_dot_requireNativePlugin('globalEvent');\nvar QNTrack = function () {\n  function QNTrack(_a) {\n    var identifyID = _a.identifyID,\n      kind = _a.kind,\n      tag = _a.tag,\n      trackID = _a.trackID,\n      raw = _a.raw,\n      userID = _a.userID;\n    this.getMuted = this.isMuted;\n    this.identifyID = identifyID;\n    this.kind = kind;\n    this.tag = tag;\n    this.trackID = trackID;\n    this.raw = raw;\n    this.userID = userID;\n  }\n  QNTrack.prototype.on = function (name, listener) {\n    var _this = this;\n    var _listener = function _listener(params) {\n      var trackID = params.trackID,\n        arguv = __rest(params, [\"trackID\"]);\n      if (trackID && trackID === _this.trackID) {\n        listener(arguv);\n      }\n    };\n    QNEvent.addEventListener(name, _listener);\n  };\n  QNTrack.prototype.off = function (name, listener) {\n    QNEvent.removeEventListener(name, listener);\n  };\n  QNTrack.prototype.getTrackID = function () {\n    return this.trackID;\n  };\n  QNTrack.prototype.getUserID = function () {\n    return this.userID;\n  };\n  QNTrack.prototype.getTag = function () {\n    return this.tag;\n  };\n  QNTrack.prototype.isAudio = function () {\n    return this.kind === _RTCEnum.QNRTCTrackKind.audio;\n  };\n  QNTrack.prototype.isVideo = function () {\n    return this.kind === _RTCEnum.QNRTCTrackKind.video;\n  };\n  QNTrack.prototype.isMuted = function () {\n    return QNRtcTrack.getMuted(this.identifyID);\n  };\n  return QNTrack;\n}();\nexports.QNTrack = QNTrack;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/uni-app-plus-nvue/dist/require-native-plugin.js */ 54)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vanNfc2RrL1FOUlRDLVVuaVBsdWdpbi1KUy9RTlJUQy1VbmlQbHVnaW4tSlMvY2xhc3MvUlRDVHJhY2suanMiXSwibmFtZXMiOlsiX19yZXN0IiwicyIsImUiLCJ0IiwicCIsIk9iamVjdCIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsImluZGV4T2YiLCJnZXRPd25Qcm9wZXJ0eVN5bWJvbHMiLCJpIiwibGVuZ3RoIiwicHJvcGVydHlJc0VudW1lcmFibGUiLCJRTlJ0Y1RyYWNrIiwidW5pIiwiUU5FdmVudCIsIlFOVHJhY2siLCJfYSIsImlkZW50aWZ5SUQiLCJraW5kIiwidGFnIiwidHJhY2tJRCIsInJhdyIsInVzZXJJRCIsImdldE11dGVkIiwiaXNNdXRlZCIsIm9uIiwibmFtZSIsImxpc3RlbmVyIiwiX3RoaXMiLCJfbGlzdGVuZXIiLCJwYXJhbXMiLCJhcmd1diIsImFkZEV2ZW50TGlzdGVuZXIiLCJvZmYiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiZ2V0VHJhY2tJRCIsImdldFVzZXJJRCIsImdldFRhZyIsImlzQXVkaW8iLCJRTlJUQ1RyYWNrS2luZCIsImF1ZGlvIiwiaXNWaWRlbyIsInZpZGVvIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFXQTtBQVhBLElBQUlBLE1BQU0sR0FBSSxVQUFRLFNBQUtBLE1BQU0sSUFBSyxVQUFVQyxDQUFDLEVBQUVDLENBQUMsRUFBRTtFQUNsRCxJQUFJQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0VBQ1YsS0FBSyxJQUFJQyxDQUFDLElBQUlILENBQUM7SUFBRSxJQUFJSSxNQUFNLENBQUNDLFNBQVMsQ0FBQ0MsY0FBYyxDQUFDQyxJQUFJLENBQUNQLENBQUMsRUFBRUcsQ0FBQyxDQUFDLElBQUlGLENBQUMsQ0FBQ08sT0FBTyxDQUFDTCxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQy9FRCxDQUFDLENBQUNDLENBQUMsQ0FBQyxHQUFHSCxDQUFDLENBQUNHLENBQUMsQ0FBQztFQUFD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UyxDQUFDaUMsTUFBTSxHQUFHLFlBQVk7SUFDbkMsT0FBTyxJQUFJLENBQUNsQixHQUFHO0VBQ25CLENBQUM7RUFDREosT0FBTyxDQUFDWCxTQUFTLENBQUNrQyxPQUFPLEdBQUcsWUFBWTtJQUNwQyxPQUFPLElBQUksQ0FBQ3BCLElBQUksS0FBS3FCLHVCQUFjLENBQUNDLEtBQUs7RUFDN0MsQ0FBQztFQUNEekIsT0FBTyxDQUFDWCxTQUFTLENBQUNxQyxPQUFPLEdBQUcsWUFBWTtJQUNwQyxPQUFPLElBQUksQ0FBQ3ZCLElBQUksS0FBS3FCLHVCQUFjLENBQUNHLEtBQUs7RUFDN0MsQ0FBQztFQUNEM0IsT0FBTyxDQUFDWCxTQUFTLENBQUNvQixPQUFPLEdBQUcsWUFBWTtJQUNwQyxPQUFPWixVQUFVLENBQUNXLFFBQVEsQ0FBQyxJQUFJLENBQUNOLFVBQVUsQ0FBQztFQUMvQyxDQUFDO0VBQ0QsT0FBT0YsT0FBTztBQUNsQixDQUFDLEVBQUc7QUFBQywwQiIsImZpbGUiOiIyMjguanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgX19yZXN0ID0gKHRoaXMgJiYgdGhpcy5fX3Jlc3QpIHx8IGZ1bmN0aW9uIChzLCBlKSB7XG4gICAgdmFyIHQgPSB7fTtcbiAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMClcbiAgICAgICAgdFtwXSA9IHNbcF07XG4gICAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKVxuICAgICAgICBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMCAmJiBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwocywgcFtpXSkpXG4gICAgICAgICAgICAgICAgdFtwW2ldXSA9IHNbcFtpXV07XG4gICAgICAgIH1cbiAgICByZXR1cm4gdDtcbn07XG5pbXBvcnQgeyBRTlJUQ1RyYWNrS2luZCB9IGZyb20gJy4uL2VudW0vUlRDRW51bSc7XG52YXIgUU5SdGNUcmFjayA9IHVuaS5yZXF1aXJlTmF0aXZlUGx1Z2luKCdRTlJUQy1VbmlQbHVnaW4tUU5SdGNUcmFjaycpO1xudmFyIFFORXZlbnQgPSB1bmkucmVxdWlyZU5hdGl2ZVBsdWdpbignZ2xvYmFsRXZlbnQnKTtcbnZhciBRTlRyYWNrID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBRTlRyYWNrKF9hKSB7XG4gICAgICAgIHZhciBpZGVudGlmeUlEID0gX2EuaWRlbnRpZnlJRCwga2luZCA9IF9hLmtpbmQsIHRhZyA9IF9hLnRhZywgdHJhY2tJRCA9IF9hLnRyYWNrSUQsIHJhdyA9IF9hLnJhdywgdXNlcklEID0gX2EudXNlcklEO1xuICAgICAgICB0aGlzLmdldE11dGVkID0gdGhpcy5pc011dGVkO1xuICAgICAgICB0aGlzLmlkZW50aWZ5SUQgPSBpZGVudGlmeUlEO1xuICAgICAgICB0aGlzLmtpbmQgPSBraW5kO1xuICAgICAgICB0aGlzLnRhZyA9IHRhZztcbiAgICAgICAgdGhpcy50cmFja0lEID0gdHJhY2tJRDtcbiAgICAgICAgdGhpcy5yYXcgPSByYXc7XG4gICAgICAgIHRoaXMudXNlcklEID0gdXNlcklEO1xuICAgIH1cbiAgICBRTlRyYWNrLnByb3RvdHlwZS5vbiA9IGZ1bmN0aW9uIChuYW1lLCBsaXN0ZW5lcikge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB2YXIgX2xpc3RlbmVyID0gZnVuY3Rpb24gKHBhcmFtcykge1xuICAgICAgICAgICAgdmFyIHRyYWNrSUQgPSBwYXJhbXMudHJhY2tJRCwgYXJndXYgPSBfX3Jlc3QocGFyYW1zLCBbXCJ0cmFja0lEXCJdKTtcbiAgICAgICAgICAgIGlmICh0cmFja0lEICYmIHRyYWNrSUQgPT09IF90aGlzLnRyYWNrSUQpIHtcbiAgICAgICAgICAgICAgICBsaXN0ZW5lcihhcmd1dik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIFFORXZlbnQuYWRkRXZlbnRMaXN0ZW5lcihuYW1lLCBfbGlzdGVuZXIpO1xuICAgIH07XG4gICAgUU5UcmFjay5wcm90b3R5cGUub2ZmID0gZnVuY3Rpb24gKG5hbWUsIGxpc3RlbmVyKSB7XG4gICAgICAgIFFORXZlbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihuYW1lLCBsaXN0ZW5lcik7XG4gICAgfTtcbiAgICBRTlRyYWNrLnByb3RvdHlwZS5nZXRUcmFja0lEID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy50cmFja0lEO1xuICAgIH07XG4gICAgUU5UcmFjay5wcm90b3R5cGUuZ2V0VXNlcklEID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy51c2VySUQ7XG4gICAgfTtcbiAgICBRTlRyYWNrLnByb3RvdHlwZS5nZXRUYWcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRhZztcbiAgICB9O1xuICAgIFFOVHJhY2sucHJvdG90eXBlLmlzQXVkaW8gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmtpbmQgPT09IFFOUlRDVHJhY2tLaW5kLmF1ZGlvO1xuICAgIH07XG4gICAgUU5UcmFjay5wcm90b3R5cGUuaXNWaWRlbyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMua2luZCA9PT0gUU5SVENUcmFja0tpbmQudmlkZW87XG4gICAgfTtcbiAgICBRTlRyYWNrLnByb3RvdHlwZS5pc011dGVkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gUU5SdGNUcmFjay5nZXRNdXRlZCh0aGlzLmlkZW50aWZ5SUQpO1xuICAgIH07XG4gICAgcmV0dXJuIFFOVHJhY2s7XG59KCkpO1xuZXhwb3J0IHsgUU5UcmFjayB9O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///228\n");

/***/ }),

/***/ 229:
/*!**************************************************************************************************************************!*\
  !*** /Users/tongjie/Desktop/QNRTC-Uniapp/demo/js_sdk/QNRTC-UniPlugin-JS/QNRTC-UniPlugin-JS/class/RTCRemoteAudioTrack.js ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__webpack_provided_uni_dot_requireNativePlugin) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.QNRemoteAudioTrack = void 0;\nvar _RTCRemoteTrack = __webpack_require__(/*! ./RTCRemoteTrack */ 227);\nvar __extends = void 0 && (void 0).__extends || function () {\n  var _extendStatics = function extendStatics(d, b) {\n    _extendStatics = Object.setPrototypeOf || {\n      __proto__: []\n    } instanceof Array && function (d, b) {\n      d.__proto__ = b;\n    } || function (d, b) {\n      for (var p in b) {\n        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];\n      }\n    };\n    return _extendStatics(d, b);\n  };\n  return function (d, b) {\n    if (typeof b !== \"function\" && b !== null) throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\n    _extendStatics(d, b);\n    function __() {\n      this.constructor = d;\n    }\n    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n  };\n}();\nvar QNRtcTrack = __webpack_provided_uni_dot_requireNativePlugin('QNRTC-UniPlugin-QNRtcTrack');\nvar QNRemoteAudioTrack = function (_super) {\n  __extends(QNRemoteAudioTrack, _super);\n  function QNRemoteAudioTrack() {\n    return _super !== null && _super.apply(this, arguments) || this;\n  }\n  QNRemoteAudioTrack.prototype.setRemoteVolume = function (volume) {\n    return QNRtcTrack.setRemoteVolume(this.identifyID, volume);\n  };\n  QNRemoteAudioTrack.prototype.getRemoteVolume = function () {\n    return QNRtcTrack.getRemoteVolume(this.identifyID);\n  };\n  return QNRemoteAudioTrack;\n}(_RTCRemoteTrack.QNRemoteTrack);\nexports.QNRemoteAudioTrack = QNRemoteAudioTrack;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/uni-app-plus-nvue/dist/require-native-plugin.js */ 54)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vanNfc2RrL1FOUlRDLVVuaVBsdWdpbi1KUy9RTlJUQy1VbmlQbHVnaW4tSlMvY2xhc3MvUlRDUmVtb3RlQXVkaW9UcmFjay5qcyJdLCJuYW1lcyI6WyJfX2V4dGVuZHMiLCJleHRlbmRTdGF0aWNzIiwiZCIsImIiLCJPYmplY3QiLCJzZXRQcm90b3R5cGVPZiIsIl9fcHJvdG9fXyIsIkFycmF5IiwicCIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsIlR5cGVFcnJvciIsIlN0cmluZyIsIl9fIiwiY29uc3RydWN0b3IiLCJjcmVhdGUiLCJRTlJ0Y1RyYWNrIiwidW5pIiwiUU5SZW1vdGVBdWRpb1RyYWNrIiwiX3N1cGVyIiwiYXBwbHkiLCJhcmd1bWVudHMiLCJzZXRSZW1vdGVWb2x1bWUiLCJ2b2x1bWUiLCJpZGVudGlmeUlEIiwiZ2V0UmVtb3RlVm9sdW1lIiwiUU5SZW1vdGVUcmFjayJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBZUE7QUFmQSxJQUFJQSxTQUFTLEdBQUksVUFBUSxTQUFLQSxTQUFTLElBQU0sWUFBWTtFQUNyRCxJQUFJQyxjQUFhLEdBQUcsdUJBQVVDLENBQUMsRUFBRUMsQ0FBQyxFQUFFO0lBQ2hDRixjQUFhLEdBQUdHLE1BQU0sQ0FBQ0MsY0FBYyxJQUNoQztNQUFFQyxTQUFTLEVBQUU7SUFBRyxDQUFDLFlBQVlDLEtBQUssSUFBSSxVQUFVTCxDQUFDLEVBQUVDLENBQUMsRUFBRTtNQUFFRCxDQUFDLENBQUNJLFNBQVMsR0FBR0gsQ0FBQztJQUFFLENBQUUsSUFDNUUsVUFBVUQsQ0FBQyxFQUFFQyxDQUFDLEVBQUU7TUFBRSxLQUFLLElBQUlLLENBQUMsSUFBSUwsQ0FBQztRQUFFLElBQUlDLE1BQU0sQ0FBQ0ssU0FBUyxDQUFDQyxjQUFjLENBQUNDLElBQUksQ0FBQ1IsQ0FBQyxFQUFFSyxDQUFDLENBQUMsRUFBRU4sQ0FBQyxDQUFDTSxDQUFDLENBQUMsR0FBR0wsQ0FBQyxDQUFDSyxDQUFDLENBQUM7TUFBQztJQUFDLENBQUM7SUFDckcsT0FBT1AsY0FBYSxDQUFDQyxDQUFDLEVBQUVDLENBQUMsQ0FBQztFQUM5QixDQUFDO0VBQ0QsT0FBTyxVQUFVRCxDQUFDLEVBQUVDLENBQUMsRUFBRTtJQUNuQixJQUFJLE9BQU9BLENBQUMsS0FBSyxVQUFVLElBQUlBLENBQUMsS0FBSyxJQUFJLEVBQ3JDLE1BQU0sSUFBSVMsU0FBUyxDQUFDLHNCQUFzQixHQUFHQyxNQUFNLENBQUNWLENBQUMsQ0FBQyxHQUFHLCtCQUErQixDQUFDO0lBQzdGRixjQUFhLENBQUNDLENBQUMsRUFBRUMsQ0FBQyxDQUFDO0lBQ25CLFNBQVNXLEVBQUUsR0FBRztNQUFFLElBQUksQ0FBQ0MsV0FBVyxHQUFHYixDQUFDO0lBQUU7SUFDdENBLENBQUMsQ0FBQ08sU0FBUyxHQUFHTixDQUFDLEtBQUssSUFBSSxHQUFHQyxNQUFNLENBQUNZLE1BQU0sQ0FBQ2IsQ0FBQyxDQUFDLElBQUlXLEVBQUUsQ0FBQ0wsU0FBUyxHQUFHTixDQUFDLENBQUNNLFNBQVMsRUFBRSxJQUFJSyxFQUFFLEVBQUUsQ0FBQztFQUN4RixDQUFDO0FBQ0wsQ0FBQyxFQUFHO0FBRUosSUFBSUcsVUFBVSxHQUFHQyw4Q0FBdUIsQ0FBQyw0QkFBNEIsQ0FBQztBQUN0RSxJQUFJQyxrQkFBa0IsR0FBSSxVQUFVQyxNQUFNLEVBQUU7RUFDeENwQixTQUFTLENBQUNtQixrQkFBa0IsRUFBRUMsTUFBTSxDQUFDO0VBQ3JDLFNBQVNELGtCQUFrQixHQUFHO0lBQzFCLE9BQU9DLE1BQU0sS0FBSyxJQUFJLElBQUlBLE1BQU0sQ0FBQ0MsS0FBSyxDQUFDLElBQUksRUFBRUMsU0FBUyxDQUFDLElBQUksSUFBSTtFQUNuRTtFQUNBSCxrQkFBa0IsQ0FBQ1YsU0FBUyxDQUFDYyxlQUFlLEdBQUcsVUFBVUMsTUFBTSxFQUFFO0lBQzdELE9BQU9QLFVBQVUsQ0FBQ00sZUFBZSxDQUFDLElBQUksQ0FBQ0UsVUFBVSxFQUFFRCxNQUFNLENBQUM7RUFDOUQsQ0FBQztFQUNETCxrQkFBa0IsQ0FBQ1YsU0FBUyxDQUFDaUIsZUFBZSxHQUFHLFlBQVk7SUFDdkQsT0FBT1QsVUFBVSxDQUFDUyxlQUFlLENBQUMsSUFBSSxDQUFDRCxVQUFVLENBQUM7RUFDdEQsQ0FBQztFQUNELE9BQU9OLGtCQUFrQjtBQUM3QixDQUFDLENBQUNRLDZCQUFhLENBQUU7QUFBQyxnRCIsImZpbGUiOiIyMjkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYiwgcCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICB9O1xuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBpZiAodHlwZW9mIGIgIT09IFwiZnVuY3Rpb25cIiAmJiBiICE9PSBudWxsKVxuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNsYXNzIGV4dGVuZHMgdmFsdWUgXCIgKyBTdHJpbmcoYikgKyBcIiBpcyBub3QgYSBjb25zdHJ1Y3RvciBvciBudWxsXCIpO1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xuaW1wb3J0IHsgUU5SZW1vdGVUcmFjayB9IGZyb20gJy4vUlRDUmVtb3RlVHJhY2snO1xudmFyIFFOUnRjVHJhY2sgPSB1bmkucmVxdWlyZU5hdGl2ZVBsdWdpbignUU5SVEMtVW5pUGx1Z2luLVFOUnRjVHJhY2snKTtcbnZhciBRTlJlbW90ZUF1ZGlvVHJhY2sgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhRTlJlbW90ZUF1ZGlvVHJhY2ssIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gUU5SZW1vdGVBdWRpb1RyYWNrKCkge1xuICAgICAgICByZXR1cm4gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gICAgfVxuICAgIFFOUmVtb3RlQXVkaW9UcmFjay5wcm90b3R5cGUuc2V0UmVtb3RlVm9sdW1lID0gZnVuY3Rpb24gKHZvbHVtZSkge1xuICAgICAgICByZXR1cm4gUU5SdGNUcmFjay5zZXRSZW1vdGVWb2x1bWUodGhpcy5pZGVudGlmeUlELCB2b2x1bWUpO1xuICAgIH07XG4gICAgUU5SZW1vdGVBdWRpb1RyYWNrLnByb3RvdHlwZS5nZXRSZW1vdGVWb2x1bWUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBRTlJ0Y1RyYWNrLmdldFJlbW90ZVZvbHVtZSh0aGlzLmlkZW50aWZ5SUQpO1xuICAgIH07XG4gICAgcmV0dXJuIFFOUmVtb3RlQXVkaW9UcmFjaztcbn0oUU5SZW1vdGVUcmFjaykpO1xuZXhwb3J0IHsgUU5SZW1vdGVBdWRpb1RyYWNrIH07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///229\n");

/***/ }),

/***/ 230:
/*!********************************************************************************************************************!*\
  !*** /Users/tongjie/Desktop/QNRTC-Uniapp/demo/js_sdk/QNRTC-UniPlugin-JS/QNRTC-UniPlugin-JS/class/RTCLocalTrack.js ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__webpack_provided_uni_dot_requireNativePlugin) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.QNLocalTrack = void 0;\nvar _RTCTrack = __webpack_require__(/*! ./RTCTrack */ 228);\nvar __extends = void 0 && (void 0).__extends || function () {\n  var _extendStatics = function extendStatics(d, b) {\n    _extendStatics = Object.setPrototypeOf || {\n      __proto__: []\n    } instanceof Array && function (d, b) {\n      d.__proto__ = b;\n    } || function (d, b) {\n      for (var p in b) {\n        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];\n      }\n    };\n    return _extendStatics(d, b);\n  };\n  return function (d, b) {\n    if (typeof b !== \"function\" && b !== null) throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\n    _extendStatics(d, b);\n    function __() {\n      this.constructor = d;\n    }\n    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n  };\n}();\nvar QNRtcTrack = __webpack_provided_uni_dot_requireNativePlugin('QNRTC-UniPlugin-QNRtcTrack');\nvar QNLocalTrack = function (_super) {\n  __extends(QNLocalTrack, _super);\n  function QNLocalTrack() {\n    return _super !== null && _super.apply(this, arguments) || this;\n  }\n  QNLocalTrack.prototype.setMuted = function (muted) {\n    QNRtcTrack.setMuted(this.identifyID, muted);\n  };\n  QNLocalTrack.prototype.destroy = function () {\n    QNRtcTrack.destroy(this.identifyID);\n  };\n  return QNLocalTrack;\n}(_RTCTrack.QNTrack);\nexports.QNLocalTrack = QNLocalTrack;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/uni-app-plus-nvue/dist/require-native-plugin.js */ 54)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vanNfc2RrL1FOUlRDLVVuaVBsdWdpbi1KUy9RTlJUQy1VbmlQbHVnaW4tSlMvY2xhc3MvUlRDTG9jYWxUcmFjay5qcyJdLCJuYW1lcyI6WyJfX2V4dGVuZHMiLCJleHRlbmRTdGF0aWNzIiwiZCIsImIiLCJPYmplY3QiLCJzZXRQcm90b3R5cGVPZiIsIl9fcHJvdG9fXyIsIkFycmF5IiwicCIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsIlR5cGVFcnJvciIsIlN0cmluZyIsIl9fIiwiY29uc3RydWN0b3IiLCJjcmVhdGUiLCJRTlJ0Y1RyYWNrIiwidW5pIiwiUU5Mb2NhbFRyYWNrIiwiX3N1cGVyIiwiYXBwbHkiLCJhcmd1bWVudHMiLCJzZXRNdXRlZCIsIm11dGVkIiwiaWRlbnRpZnlJRCIsImRlc3Ryb3kiLCJRTlRyYWNrIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFlQTtBQWZBLElBQUlBLFNBQVMsR0FBSSxVQUFRLFNBQUtBLFNBQVMsSUFBTSxZQUFZO0VBQ3JELElBQUlDLGNBQWEsR0FBRyx1QkFBVUMsQ0FBQyxFQUFFQyxDQUFDLEVBQUU7SUFDaENGLGNBQWEsR0FBR0csTUFBTSxDQUFDQyxjQUFjLElBQ2hDO01BQUVDLFNBQVMsRUFBRTtJQUFHLENBQUMsWUFBWUMsS0FBSyxJQUFJLFVBQVVMLENBQUMsRUFBRUMsQ0FBQyxFQUFFO01BQUVELENBQUMsQ0FBQ0ksU0FBUyxHQUFHSCxDQUFDO0lBQUUsQ0FBRSxJQUM1RSxVQUFVRCxDQUFDLEVBQUVDLENBQUMsRUFBRTtNQUFFLEtBQUssSUFBSUssQ0FBQyxJQUFJTCxDQUFDO1FBQUUsSUFBSUMsTUFBTSxDQUFDSyxTQUFTLENBQUNDLGNBQWMsQ0FBQ0MsSUFBSSxDQUFDUixDQUFDLEVBQUVLLENBQUMsQ0FBQyxFQUFFTixDQUFDLENBQUNNLENBQUMsQ0FBQyxHQUFHTCxDQUFDLENBQUNLLENBQUMsQ0FBQztNQUFDO0lBQUMsQ0FBQztJQUNyRyxPQUFPUCxjQUFhLENBQUNDLENBQUMsRUFBRUMsQ0FBQyxDQUFDO0VBQzlCLENBQUM7RUFDRCxPQUFPLFVBQVVELENBQUMsRUFBRUMsQ0FBQyxFQUFFO0lBQ25CLElBQUksT0FBT0EsQ0FBQyxLQUFLLFVBQVUsSUFBSUEsQ0FBQyxLQUFLLElBQUksRUFDckMsTUFBTSxJQUFJUyxTQUFTLENBQUMsc0JBQXNCLEdBQUdDLE1BQU0sQ0FBQ1YsQ0FBQyxDQUFDLEdBQUcsK0JBQStCLENBQUM7SUFDN0ZGLGNBQWEsQ0FBQ0MsQ0FBQyxFQUFFQyxDQUFDLENBQUM7SUFDbkIsU0FBU1csRUFBRSxHQUFHO01BQUUsSUFBSSxDQUFDQyxXQUFXLEdBQUdiLENBQUM7SUFBRTtJQUN0Q0EsQ0FBQyxDQUFDTyxTQUFTLEdBQUdOLENBQUMsS0FBSyxJQUFJLEdBQUdDLE1BQU0sQ0FBQ1ksTUFBTSxDQUFDYixDQUFDLENBQUMsSUFBSVcsRUFBRSxDQUFDTCxTQUFTLEdBQUdOLENBQUMsQ0FBQ00sU0FBUyxFQUFFLElBQUlLLEVBQUUsRUFBRSxDQUFDO0VBQ3hGLENBQUM7QUFDTCxDQUFDLEVBQUc7QUFFSixJQUFJRyxVQUFVLEdBQUdDLDhDQUF1QixDQUFDLDRCQUE0QixDQUFDO0FBQ3RFLElBQUlDLFlBQVksR0FBSSxVQUFVQyxNQUFNLEVBQUU7RUFDbENwQixTQUFTLENBQUNtQixZQUFZLEVBQUVDLE1BQU0sQ0FBQztFQUMvQixTQUFTRCxZQUFZLEdBQUc7SUFDcEIsT0FBT0MsTUFBTSxLQUFLLElBQUksSUFBSUEsTUFBTSxDQUFDQyxLQUFLLENBQUMsSUFBSSxFQUFFQyxTQUFTLENBQUMsSUFBSSxJQUFJO0VBQ25FO0VBQ0FILFlBQVksQ0FBQ1YsU0FBUyxDQUFDYyxRQUFRLEdBQUcsVUFBVUMsS0FBSyxFQUFFO0lBQy9DUCxVQUFVLENBQUNNLFFBQVEsQ0FBQyxJQUFJLENBQUNFLFVBQVUsRUFBRUQsS0FBSyxDQUFDO0VBQy9DLENBQUM7RUFDREwsWUFBWSxDQUFDVixTQUFTLENBQUNpQixPQUFPLEdBQUcsWUFBWTtJQUN6Q1QsVUFBVSxDQUFDUyxPQUFPLENBQUMsSUFBSSxDQUFDRCxVQUFVLENBQUM7RUFDdkMsQ0FBQztFQUNELE9BQU9OLFlBQVk7QUFDdkIsQ0FBQyxDQUFDUSxpQkFBTyxDQUFFO0FBQUMsb0MiLCJmaWxlIjoiMjMwLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBiICE9PSBcImZ1bmN0aW9uXCIgJiYgYiAhPT0gbnVsbClcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDbGFzcyBleHRlbmRzIHZhbHVlIFwiICsgU3RyaW5nKGIpICsgXCIgaXMgbm90IGEgY29uc3RydWN0b3Igb3IgbnVsbFwiKTtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbmltcG9ydCB7IFFOVHJhY2sgfSBmcm9tICcuL1JUQ1RyYWNrJztcbnZhciBRTlJ0Y1RyYWNrID0gdW5pLnJlcXVpcmVOYXRpdmVQbHVnaW4oJ1FOUlRDLVVuaVBsdWdpbi1RTlJ0Y1RyYWNrJyk7XG52YXIgUU5Mb2NhbFRyYWNrID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoUU5Mb2NhbFRyYWNrLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIFFOTG9jYWxUcmFjaygpIHtcbiAgICAgICAgcmV0dXJuIF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICAgIH1cbiAgICBRTkxvY2FsVHJhY2sucHJvdG90eXBlLnNldE11dGVkID0gZnVuY3Rpb24gKG11dGVkKSB7XG4gICAgICAgIFFOUnRjVHJhY2suc2V0TXV0ZWQodGhpcy5pZGVudGlmeUlELCBtdXRlZCk7XG4gICAgfTtcbiAgICBRTkxvY2FsVHJhY2sucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIFFOUnRjVHJhY2suZGVzdHJveSh0aGlzLmlkZW50aWZ5SUQpO1xuICAgIH07XG4gICAgcmV0dXJuIFFOTG9jYWxUcmFjaztcbn0oUU5UcmFjaykpO1xuZXhwb3J0IHsgUU5Mb2NhbFRyYWNrIH07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///230\n");

/***/ }),

/***/ 231:
/*!**************************************************************************************************************************!*\
  !*** /Users/tongjie/Desktop/QNRTC-Uniapp/demo/js_sdk/QNRTC-UniPlugin-JS/QNRTC-UniPlugin-JS/class/RTCCameraVideoTrack.js ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__webpack_provided_uni_dot_requireNativePlugin) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.QNCameraVideoTrack = void 0;\nvar _RTCLocalVideoTrack = __webpack_require__(/*! ./RTCLocalVideoTrack */ 232);\nvar __extends = void 0 && (void 0).__extends || function () {\n  var _extendStatics = function extendStatics(d, b) {\n    _extendStatics = Object.setPrototypeOf || {\n      __proto__: []\n    } instanceof Array && function (d, b) {\n      d.__proto__ = b;\n    } || function (d, b) {\n      for (var p in b) {\n        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];\n      }\n    };\n    return _extendStatics(d, b);\n  };\n  return function (d, b) {\n    if (typeof b !== \"function\" && b !== null) throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\n    _extendStatics(d, b);\n    function __() {\n      this.constructor = d;\n    }\n    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n  };\n}();\nvar __awaiter = void 0 && (void 0).__awaiter || function (thisArg, _arguments, P, generator) {\n  function adopt(value) {\n    return value instanceof P ? value : new P(function (resolve) {\n      resolve(value);\n    });\n  }\n  return new (P || (P = Promise))(function (resolve, reject) {\n    function fulfilled(value) {\n      try {\n        step(generator.next(value));\n      } catch (e) {\n        reject(e);\n      }\n    }\n    function rejected(value) {\n      try {\n        step(generator[\"throw\"](value));\n      } catch (e) {\n        reject(e);\n      }\n    }\n    function step(result) {\n      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);\n    }\n    step((generator = generator.apply(thisArg, _arguments || [])).next());\n  });\n};\nvar __generator = void 0 && (void 0).__generator || function (thisArg, body) {\n  var _ = {\n      label: 0,\n      sent: function sent() {\n        if (t[0] & 1) throw t[1];\n        return t[1];\n      },\n      trys: [],\n      ops: []\n    },\n    f,\n    y,\n    t,\n    g;\n  return g = {\n    next: verb(0),\n    \"throw\": verb(1),\n    \"return\": verb(2)\n  }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function () {\n    return this;\n  }), g;\n  function verb(n) {\n    return function (v) {\n      return step([n, v]);\n    };\n  }\n  function step(op) {\n    if (f) throw new TypeError(\"Generator is already executing.\");\n    while (g && (g = 0, op[0] && (_ = 0)), _) {\n      try {\n        if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n        if (y = 0, t) op = [op[0] & 2, t.value];\n        switch (op[0]) {\n          case 0:\n          case 1:\n            t = op;\n            break;\n          case 4:\n            _.label++;\n            return {\n              value: op[1],\n              done: false\n            };\n          case 5:\n            _.label++;\n            y = op[1];\n            op = [0];\n            continue;\n          case 7:\n            op = _.ops.pop();\n            _.trys.pop();\n            continue;\n          default:\n            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {\n              _ = 0;\n              continue;\n            }\n            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {\n              _.label = op[1];\n              break;\n            }\n            if (op[0] === 6 && _.label < t[1]) {\n              _.label = t[1];\n              t = op;\n              break;\n            }\n            if (t && _.label < t[2]) {\n              _.label = t[2];\n              _.ops.push(op);\n              break;\n            }\n            if (t[2]) _.ops.pop();\n            _.trys.pop();\n            continue;\n        }\n        op = body.call(thisArg, _);\n      } catch (e) {\n        op = [6, e];\n        y = 0;\n      } finally {\n        f = t = 0;\n      }\n    }\n    if (op[0] & 5) throw op[1];\n    return {\n      value: op[0] ? op[1] : void 0,\n      done: true\n    };\n  }\n};\nvar QNRtcTrack = __webpack_provided_uni_dot_requireNativePlugin('QNRTC-UniPlugin-QNRtcTrack');\nvar QNEvent = __webpack_provided_uni_dot_requireNativePlugin('globalEvent');\nvar QNCameraVideoTrack = function (_super) {\n  __extends(QNCameraVideoTrack, _super);\n  function QNCameraVideoTrack() {\n    return _super !== null && _super.apply(this, arguments) || this;\n  }\n  QNCameraVideoTrack.prototype.setSessionPreset = function (sessionPreset) {\n    return QNRtcTrack.setSessionPreset(this.identifyID, sessionPreset);\n  };\n  QNCameraVideoTrack.prototype.startCapture = function () {\n    return QNRtcTrack.startCapture(this.identifyID);\n  };\n  QNCameraVideoTrack.prototype.stopCapture = function () {\n    return QNRtcTrack.stopCapture(this.identifyID);\n  };\n  QNCameraVideoTrack.prototype.switchCamera = function () {\n    return QNRtcTrack.switchCamera(this.identifyID);\n  };\n  QNCameraVideoTrack.prototype.turnLightOn = function () {\n    return QNRtcTrack.turnLightOn(this.identifyID);\n  };\n  QNCameraVideoTrack.prototype.turnLightOff = function () {\n    return QNRtcTrack.turnLightOff(this.identifyID);\n  };\n  QNCameraVideoTrack.prototype.manualFocus = function (x, y) {\n    return QNRtcTrack.manualFocus(this.identifyID, x, y);\n  };\n  QNCameraVideoTrack.prototype.setExposureCompensation = function (value) {\n    return QNRtcTrack.setExposureCompensation(this.identifyID, value);\n  };\n  QNCameraVideoTrack.prototype.getMaxExposureCompensation = function () {\n    return QNRtcTrack.getMaxExposureCompensation(this.identifyID);\n  };\n  QNCameraVideoTrack.prototype.getMinExposureCompensation = function () {\n    return QNRtcTrack.getMinExposureCompensation(this.identifyID);\n  };\n  QNCameraVideoTrack.prototype.setVideoOrientation = function (videoOrientation) {\n    return QNRtcTrack.setVideoOrientation(this.identifyID, videoOrientation);\n  };\n  QNCameraVideoTrack.prototype.getVideoOrientation = function () {\n    return QNRtcTrack.getVideoOrientation(this.identifyID);\n  };\n  QNCameraVideoTrack.prototype.setZoom = function (zoom) {\n    return QNRtcTrack.setZoom(this.identifyID, zoom);\n  };\n  QNCameraVideoTrack.prototype.getZooms = function () {\n    return QNRtcTrack.getZooms(this.identifyID);\n  };\n  QNCameraVideoTrack.prototype.setPreviewEnabled = function (isEnabled) {\n    return QNRtcTrack.setPreviewEnabled(this.identifyID, isEnabled);\n  };\n  QNCameraVideoTrack.prototype.setBeauty = function (beautySetting) {\n    return QNRtcTrack.setBeauty(this.identifyID, beautySetting);\n  };\n  QNCameraVideoTrack.prototype.previewMirrorFrontFacing = function (previewMirrorFrontFacing) {\n    return QNRtcTrack.previewMirrorFrontFacing(this.identifyID, previewMirrorFrontFacing);\n  };\n  QNCameraVideoTrack.prototype.previewMirrorRearFacing = function (previewMirrorRearFacing) {\n    return QNRtcTrack.previewMirrorRearFacing(this.identifyID, previewMirrorRearFacing);\n  };\n  QNCameraVideoTrack.prototype.encodeMirrorFrontFacing = function (encodeMirrorFrontFacing) {\n    return QNRtcTrack.encodeMirrorFrontFacing(this.identifyID, encodeMirrorFrontFacing);\n  };\n  QNCameraVideoTrack.prototype.encodeMirrorRearFacing = function (encodeMirrorRearFacing) {\n    return QNRtcTrack.encodeMirrorRearFacing(this.identifyID, encodeMirrorRearFacing);\n  };\n  QNCameraVideoTrack.prototype.pushImage = function (image) {\n    return QNRtcTrack.pushImage(this.identifyID, image);\n  };\n  QNCameraVideoTrack.prototype.setWaterMark = function (waterMark) {\n    return QNRtcTrack.setWaterMark(this.identifyID, waterMark);\n  };\n  QNCameraVideoTrack.prototype.clearWaterMark = function () {\n    return QNRtcTrack.clearWaterMark(this.identifyID);\n  };\n  QNCameraVideoTrack.prototype.takeVideoSnapshot = function () {\n    return __awaiter(this, void 0, void 0, function () {\n      var platform;\n      var _this = this;\n      return __generator(this, function (_a) {\n        platform = uni.getSystemInfoSync().platform;\n        if (platform === 'ios') {\n          return [2, new Promise(function (resolve, reject) {\n            QNRtcTrack.takeVideoSnapshot(_this.identifyID);\n            var listener = function listener(param) {\n              QNEvent.removeEventListener('onLocalVideoFrame', listener);\n              resolve({\n                base64: _this.trimBase64(param.data)\n              });\n            };\n            QNEvent.addEventListener('onLocalVideoFrame', listener);\n            setTimeout(function () {\n              QNEvent.removeEventListener('onLocalVideoFrame', listener);\n              reject();\n            }, 5000);\n          })];\n        } else if (platform === 'android') {\n          return [2, new Promise(function (resolve, reject) {\n            QNRtcTrack.takeVideoSnapshot(_this.getTrackID(), function (data) {\n              resolve(data);\n            });\n          })];\n        }\n        return [2];\n      });\n    });\n  };\n  QNCameraVideoTrack.prototype.trimBase64 = function (base64) {\n    if (!base64) {\n      return '';\n    }\n    return base64.replace(/\\r|\\n/g, '');\n  };\n  return QNCameraVideoTrack;\n}(_RTCLocalVideoTrack.QNLocalVideoTrack);\nexports.QNCameraVideoTrack = QNCameraVideoTrack;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/uni-app-plus-nvue/dist/require-native-plugin.js */ 54)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vanNfc2RrL1FOUlRDLVVuaVBsdWdpbi1KUy9RTlJUQy1VbmlQbHVnaW4tSlMvY2xhc3MvUlRDQ2FtZXJhVmlkZW9UcmFjay5qcyJdLCJuYW1lcyI6WyJfX2V4dGVuZHMiLCJleHRlbmRTdGF0aWNzIiwiZCIsImIiLCJPYmplY3QiLCJzZXRQcm90b3R5cGVPZiIsIl9fcHJvdG9fXyIsIkFycmF5IiwicCIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsIlR5cGVFcnJvciIsIlN0cmluZyIsIl9fIiwiY29uc3RydWN0b3IiLCJjcmVhdGUiLCJfX2F3YWl0ZXIiLCJ0aGlzQXJnIiwiX2FyZ3VtZW50cyIsIlAiLCJnZW5lcmF0b3IiLCJhZG9wdCIsInZhbHVlIiwicmVzb2x2ZSIsIlByb21pc2UiLCJyZWplY3QiLCJmdWxmaWxsZWQiLCJzdGVwIiwibmV4dCIsImUiLCJyZWplY3RlZCIsInJlc3VsdCIsImRvbmUiLCJ0aGVuIiwiYXBwbHkiLCJfX2dlbmVyYXRvciIsImJvZHkiLCJfIiwibGFiZWwiLCJzZW50IiwidCIsInRyeXMiLCJvcHMiLCJmIiwieSIsImciLCJ2ZXJiIiwiU3ltYm9sIiwiaXRlcmF0b3IiLCJuIiwidiIsIm9wIiwicG9wIiwibGVuZ3RoIiwicHVzaCIsIlFOUnRjVHJhY2siLCJ1bmkiLCJRTkV2ZW50IiwiUU5DYW1lcmFWaWRlb1RyYWNrIiwiX3N1cGVyIiwiYXJndW1lbnRzIiwic2V0U2Vzc2lvblByZXNldCIsInNlc3Npb25QcmVzZXQiLCJpZGVudGlmeUlEIiwic3RhcnRDYXB0dXJlIiwic3RvcENhcHR1cmUiLCJzd2l0Y2hDYW1lcmEiLCJ0dXJuTGlnaHRPbiIsInR1cm5MaWdodE9mZiIsIm1hbnVhbEZvY3VzIiwieCIsInNldEV4cG9zdXJlQ29tcGVuc2F0aW9uIiwiZ2V0TWF4RXhwb3N1cmVDb21wZW5zYXRpb24iLCJnZXRNaW5FeHBvc3VyZUNvbXBlbnNhdGlvbiIsInNldFZpZGVvT3JpZW50YXRpb24iLCJ2aWRlb09yaWVudGF0aW9uIiwiZ2V0VmlkZW9PcmllbnRhdGlvbiIsInNldFpvb20iLCJ6b29tIiwiZ2V0Wm9vbXMiLCJzZXRQcmV2aWV3RW5hYmxlZCIsImlzRW5hYmxlZCIsInNldEJlYXV0eSIsImJlYXV0eVNldHRpbmciLCJwcmV2aWV3TWlycm9yRnJvbnRGYWNpbmciLCJwcmV2aWV3TWlycm9yUmVhckZhY2luZyIsImVuY29kZU1pcnJvckZyb250RmFjaW5nIiwiZW5jb2RlTWlycm9yUmVhckZhY2luZyIsInB1c2hJbWFnZSIsImltYWdlIiwic2V0V2F0ZXJNYXJrIiwid2F0ZXJNYXJrIiwiY2xlYXJXYXRlck1hcmsiLCJ0YWtlVmlkZW9TbmFwc2hvdCIsInBsYXRmb3JtIiwiX3RoaXMiLCJfYSIsImdldFN5c3RlbUluZm9TeW5jIiwibGlzdGVuZXIiLCJwYXJhbSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJiYXNlNjQiLCJ0cmltQmFzZTY0IiwiZGF0YSIsImFkZEV2ZW50TGlzdGVuZXIiLCJzZXRUaW1lb3V0IiwiZ2V0VHJhY2tJRCIsInJlcGxhY2UiLCJRTkxvY2FsVmlkZW9UcmFjayJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBbURBO0FBbkRBLElBQUlBLFNBQVMsR0FBSSxVQUFRLFNBQUtBLFNBQVMsSUFBTSxZQUFZO0VBQ3JELElBQUlDLGNBQWEsR0FBRyx1QkFBVUMsQ0FBQyxFQUFFQyxDQUFDLEVBQUU7SUFDaENGLGNBQWEsR0FBR0csTUFBTSxDQUFDQyxjQUFjLElBQ2hDO01BQUVDLFNBQVMsRUFBRTtJQUFHLENBQUMsWUFBWUMsS0FBSyxJQUFJLFVBQVVMLENBQUMsRUFBRUMsQ0FBQyxFQUFFO01BQUVELENBQUMsQ0FBQ0ksU0FBUyxHQUFHSCxDQUFDO0lBQUUsQ0FBRSxJQUM1RSxVQUFVRCxDQUFDLEVBQUVDLENBQUMsRUFBRTtNQUFFLEtBQUssSUFBSUssQ0FBQyxJQUFJTCxDQUFDO1FBQUUsSUFBSUMsTUFBTSxDQUFDSyxTQUFTLENBQUNDLGNBQWMsQ0FBQ0MsSUFB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O1VBQzdCLE9BQU8sQ0FBQyxDQUFDLEVBQUUsSUFBSXRFLE9BQU8sQ0FBQyxVQUFVRCxPQUFPLEVBQUVFLE1BQU0sRUFBRTtZQUMxQzhCLFVBQVUsQ0FBQ3NDLGlCQUFpQixDQUFDRSxLQUFLLENBQUNXLFVBQVUsRUFBRSxFQUFFLFVBQVVILElBQUksRUFBRTtjQUM3RGhGLE9BQU8sQ0FBQ2dGLElBQUksQ0FBQztZQUNqQixDQUFDLENBQUM7VUFDTixDQUFDLENBQUMsQ0FBQztRQUNYO1FBQ0EsT0FBTyxDQUFDLENBQUMsQ0FBQztNQUNkLENBQUMsQ0FBQztJQUNOLENBQUMsQ0FBQztFQUNOLENBQUM7RUFDRDdDLGtCQUFrQixDQUFDbEQsU0FBUyxDQUFDOEYsVUFBVSxHQUFHLFVBQVVELE1BQU0sRUFBRTtJQUN4RCxJQUFJLENBQUNBLE1BQU0sRUFBRTtNQUNULE9BQU8sRUFBRTtJQUNiO0lBQ0EsT0FBT0EsTUFBTSxDQUFDTSxPQUFPLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQztFQUN2QyxDQUFDO0VBQ0QsT0FBT2pELGtCQUFrQjtBQUM3QixDQUFDLENBQUNrRCxxQ0FBaUIsQ0FBRTtBQUFDLGdEIiwiZmlsZSI6IjIzMS5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChiLCBwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgIH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgYiAhPT0gXCJmdW5jdGlvblwiICYmIGIgIT09IG51bGwpXG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2xhc3MgZXh0ZW5kcyB2YWx1ZSBcIiArIFN0cmluZyhiKSArIFwiIGlzIG5vdCBhIGNvbnN0cnVjdG9yIG9yIG51bGxcIik7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG52YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbnZhciBfX2dlbmVyYXRvciA9ICh0aGlzICYmIHRoaXMuX19nZW5lcmF0b3IpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBib2R5KSB7XG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcbiAgICAgICAgd2hpbGUgKGcgJiYgKGcgPSAwLCBvcFswXSAmJiAoXyA9IDApKSwgXykgdHJ5IHtcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xuICAgIH1cbn07XG5pbXBvcnQgeyBRTkxvY2FsVmlkZW9UcmFjayB9IGZyb20gJy4vUlRDTG9jYWxWaWRlb1RyYWNrJztcbnZhciBRTlJ0Y1RyYWNrID0gdW5pLnJlcXVpcmVOYXRpdmVQbHVnaW4oJ1FOUlRDLVVuaVBsdWdpbi1RTlJ0Y1RyYWNrJyk7XG52YXIgUU5FdmVudCA9IHVuaS5yZXF1aXJlTmF0aXZlUGx1Z2luKCdnbG9iYWxFdmVudCcpO1xudmFyIFFOQ2FtZXJhVmlkZW9UcmFjayA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKFFOQ2FtZXJhVmlkZW9UcmFjaywgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBRTkNhbWVyYVZpZGVvVHJhY2soKSB7XG4gICAgICAgIHJldHVybiBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgICB9XG4gICAgUU5DYW1lcmFWaWRlb1RyYWNrLnByb3RvdHlwZS5zZXRTZXNzaW9uUHJlc2V0ID0gZnVuY3Rpb24gKHNlc3Npb25QcmVzZXQpIHtcbiAgICAgICAgcmV0dXJuIFFOUnRjVHJhY2suc2V0U2Vzc2lvblByZXNldCh0aGlzLmlkZW50aWZ5SUQsIHNlc3Npb25QcmVzZXQpO1xuICAgIH07XG4gICAgUU5DYW1lcmFWaWRlb1RyYWNrLnByb3RvdHlwZS5zdGFydENhcHR1cmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBRTlJ0Y1RyYWNrLnN0YXJ0Q2FwdHVyZSh0aGlzLmlkZW50aWZ5SUQpO1xuICAgIH07XG4gICAgUU5DYW1lcmFWaWRlb1RyYWNrLnByb3RvdHlwZS5zdG9wQ2FwdHVyZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIFFOUnRjVHJhY2suc3RvcENhcHR1cmUodGhpcy5pZGVudGlmeUlEKTtcbiAgICB9O1xuICAgIFFOQ2FtZXJhVmlkZW9UcmFjay5wcm90b3R5cGUuc3dpdGNoQ2FtZXJhID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gUU5SdGNUcmFjay5zd2l0Y2hDYW1lcmEodGhpcy5pZGVudGlmeUlEKTtcbiAgICB9O1xuICAgIFFOQ2FtZXJhVmlkZW9UcmFjay5wcm90b3R5cGUudHVybkxpZ2h0T24gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBRTlJ0Y1RyYWNrLnR1cm5MaWdodE9uKHRoaXMuaWRlbnRpZnlJRCk7XG4gICAgfTtcbiAgICBRTkNhbWVyYVZpZGVvVHJhY2sucHJvdG90eXBlLnR1cm5MaWdodE9mZiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIFFOUnRjVHJhY2sudHVybkxpZ2h0T2ZmKHRoaXMuaWRlbnRpZnlJRCk7XG4gICAgfTtcbiAgICBRTkNhbWVyYVZpZGVvVHJhY2sucHJvdG90eXBlLm1hbnVhbEZvY3VzID0gZnVuY3Rpb24gKHgsIHkpIHtcbiAgICAgICAgcmV0dXJuIFFOUnRjVHJhY2subWFudWFsRm9jdXModGhpcy5pZGVudGlmeUlELCB4LCB5KTtcbiAgICB9O1xuICAgIFFOQ2FtZXJhVmlkZW9UcmFjay5wcm90b3R5cGUuc2V0RXhwb3N1cmVDb21wZW5zYXRpb24gPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIFFOUnRjVHJhY2suc2V0RXhwb3N1cmVDb21wZW5zYXRpb24odGhpcy5pZGVudGlmeUlELCB2YWx1ZSk7XG4gICAgfTtcbiAgICBRTkNhbWVyYVZpZGVvVHJhY2sucHJvdG90eXBlLmdldE1heEV4cG9zdXJlQ29tcGVuc2F0aW9uID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gUU5SdGNUcmFjay5nZXRNYXhFeHBvc3VyZUNvbXBlbnNhdGlvbih0aGlzLmlkZW50aWZ5SUQpO1xuICAgIH07XG4gICAgUU5DYW1lcmFWaWRlb1RyYWNrLnByb3RvdHlwZS5nZXRNaW5FeHBvc3VyZUNvbXBlbnNhdGlvbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIFFOUnRjVHJhY2suZ2V0TWluRXhwb3N1cmVDb21wZW5zYXRpb24odGhpcy5pZGVudGlmeUlEKTtcbiAgICB9O1xuICAgIFFOQ2FtZXJhVmlkZW9UcmFjay5wcm90b3R5cGUuc2V0VmlkZW9PcmllbnRhdGlvbiA9IGZ1bmN0aW9uICh2aWRlb09yaWVudGF0aW9uKSB7XG4gICAgICAgIHJldHVybiBRTlJ0Y1RyYWNrLnNldFZpZGVvT3JpZW50YXRpb24odGhpcy5pZGVudGlmeUlELCB2aWRlb09yaWVudGF0aW9uKTtcbiAgICB9O1xuICAgIFFOQ2FtZXJhVmlkZW9UcmFjay5wcm90b3R5cGUuZ2V0VmlkZW9PcmllbnRhdGlvbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIFFOUnRjVHJhY2suZ2V0VmlkZW9PcmllbnRhdGlvbih0aGlzLmlkZW50aWZ5SUQpO1xuICAgIH07XG4gICAgUU5DYW1lcmFWaWRlb1RyYWNrLnByb3RvdHlwZS5zZXRab29tID0gZnVuY3Rpb24gKHpvb20pIHtcbiAgICAgICAgcmV0dXJuIFFOUnRjVHJhY2suc2V0Wm9vbSh0aGlzLmlkZW50aWZ5SUQsIHpvb20pO1xuICAgIH07XG4gICAgUU5DYW1lcmFWaWRlb1RyYWNrLnByb3RvdHlwZS5nZXRab29tcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIFFOUnRjVHJhY2suZ2V0Wm9vbXModGhpcy5pZGVudGlmeUlEKTtcbiAgICB9O1xuICAgIFFOQ2FtZXJhVmlkZW9UcmFjay5wcm90b3R5cGUuc2V0UHJldmlld0VuYWJsZWQgPSBmdW5jdGlvbiAoaXNFbmFibGVkKSB7XG4gICAgICAgIHJldHVybiBRTlJ0Y1RyYWNrLnNldFByZXZpZXdFbmFibGVkKHRoaXMuaWRlbnRpZnlJRCwgaXNFbmFibGVkKTtcbiAgICB9O1xuICAgIFFOQ2FtZXJhVmlkZW9UcmFjay5wcm90b3R5cGUuc2V0QmVhdXR5ID0gZnVuY3Rpb24gKGJlYXV0eVNldHRpbmcpIHtcbiAgICAgICAgcmV0dXJuIFFOUnRjVHJhY2suc2V0QmVhdXR5KHRoaXMuaWRlbnRpZnlJRCwgYmVhdXR5U2V0dGluZyk7XG4gICAgfTtcbiAgICBRTkNhbWVyYVZpZGVvVHJhY2sucHJvdG90eXBlLnByZXZpZXdNaXJyb3JGcm9udEZhY2luZyA9IGZ1bmN0aW9uIChwcmV2aWV3TWlycm9yRnJvbnRGYWNpbmcpIHtcbiAgICAgICAgcmV0dXJuIFFOUnRjVHJhY2sucHJldmlld01pcnJvckZyb250RmFjaW5nKHRoaXMuaWRlbnRpZnlJRCwgcHJldmlld01pcnJvckZyb250RmFjaW5nKTtcbiAgICB9O1xuICAgIFFOQ2FtZXJhVmlkZW9UcmFjay5wcm90b3R5cGUucHJldmlld01pcnJvclJlYXJGYWNpbmcgPSBmdW5jdGlvbiAocHJldmlld01pcnJvclJlYXJGYWNpbmcpIHtcbiAgICAgICAgcmV0dXJuIFFOUnRjVHJhY2sucHJldmlld01pcnJvclJlYXJGYWNpbmcodGhpcy5pZGVudGlmeUlELCBwcmV2aWV3TWlycm9yUmVhckZhY2luZyk7XG4gICAgfTtcbiAgICBRTkNhbWVyYVZpZGVvVHJhY2sucHJvdG90eXBlLmVuY29kZU1pcnJvckZyb250RmFjaW5nID0gZnVuY3Rpb24gKGVuY29kZU1pcnJvckZyb250RmFjaW5nKSB7XG4gICAgICAgIHJldHVybiBRTlJ0Y1RyYWNrLmVuY29kZU1pcnJvckZyb250RmFjaW5nKHRoaXMuaWRlbnRpZnlJRCwgZW5jb2RlTWlycm9yRnJvbnRGYWNpbmcpO1xuICAgIH07XG4gICAgUU5DYW1lcmFWaWRlb1RyYWNrLnByb3RvdHlwZS5lbmNvZGVNaXJyb3JSZWFyRmFjaW5nID0gZnVuY3Rpb24gKGVuY29kZU1pcnJvclJlYXJGYWNpbmcpIHtcbiAgICAgICAgcmV0dXJuIFFOUnRjVHJhY2suZW5jb2RlTWlycm9yUmVhckZhY2luZyh0aGlzLmlkZW50aWZ5SUQsIGVuY29kZU1pcnJvclJlYXJGYWNpbmcpO1xuICAgIH07XG4gICAgUU5DYW1lcmFWaWRlb1RyYWNrLnByb3RvdHlwZS5wdXNoSW1hZ2UgPSBmdW5jdGlvbiAoaW1hZ2UpIHtcbiAgICAgICAgcmV0dXJuIFFOUnRjVHJhY2sucHVzaEltYWdlKHRoaXMuaWRlbnRpZnlJRCwgaW1hZ2UpO1xuICAgIH07XG4gICAgUU5DYW1lcmFWaWRlb1RyYWNrLnByb3RvdHlwZS5zZXRXYXRlck1hcmsgPSBmdW5jdGlvbiAod2F0ZXJNYXJrKSB7XG4gICAgICAgIHJldHVybiBRTlJ0Y1RyYWNrLnNldFdhdGVyTWFyayh0aGlzLmlkZW50aWZ5SUQsIHdhdGVyTWFyayk7XG4gICAgfTtcbiAgICBRTkNhbWVyYVZpZGVvVHJhY2sucHJvdG90eXBlLmNsZWFyV2F0ZXJNYXJrID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gUU5SdGNUcmFjay5jbGVhcldhdGVyTWFyayh0aGlzLmlkZW50aWZ5SUQpO1xuICAgIH07XG4gICAgUU5DYW1lcmFWaWRlb1RyYWNrLnByb3RvdHlwZS50YWtlVmlkZW9TbmFwc2hvdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIHBsYXRmb3JtO1xuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICBwbGF0Zm9ybSA9IHVuaS5nZXRTeXN0ZW1JbmZvU3luYygpLnBsYXRmb3JtO1xuICAgICAgICAgICAgICAgIGlmIChwbGF0Zm9ybSA9PT0gJ2lvcycpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyLCBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUU5SdGNUcmFjay50YWtlVmlkZW9TbmFwc2hvdChfdGhpcy5pZGVudGlmeUlEKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbGlzdGVuZXIgPSBmdW5jdGlvbiAocGFyYW0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUU5FdmVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdvbkxvY2FsVmlkZW9GcmFtZScsIGxpc3RlbmVyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh7IGJhc2U2NDogX3RoaXMudHJpbUJhc2U2NChwYXJhbS5kYXRhKSB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFFORXZlbnQuYWRkRXZlbnRMaXN0ZW5lcignb25Mb2NhbFZpZGVvRnJhbWUnLCBsaXN0ZW5lcik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFFORXZlbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignb25Mb2NhbFZpZGVvRnJhbWUnLCBsaXN0ZW5lcik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIDUwMDApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChwbGF0Zm9ybSA9PT0gJ2FuZHJvaWQnKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiwgbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFFOUnRjVHJhY2sudGFrZVZpZGVvU25hcHNob3QoX3RoaXMuZ2V0VHJhY2tJRCgpLCBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKGRhdGEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gWzJdO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgUU5DYW1lcmFWaWRlb1RyYWNrLnByb3RvdHlwZS50cmltQmFzZTY0ID0gZnVuY3Rpb24gKGJhc2U2NCkge1xuICAgICAgICBpZiAoIWJhc2U2NCkge1xuICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBiYXNlNjQucmVwbGFjZSgvXFxyfFxcbi9nLCAnJyk7XG4gICAgfTtcbiAgICByZXR1cm4gUU5DYW1lcmFWaWRlb1RyYWNrO1xufShRTkxvY2FsVmlkZW9UcmFjaykpO1xuZXhwb3J0IHsgUU5DYW1lcmFWaWRlb1RyYWNrIH07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///231\n");

/***/ }),

/***/ 232:
/*!*************************************************************************************************************************!*\
  !*** /Users/tongjie/Desktop/QNRTC-Uniapp/demo/js_sdk/QNRTC-UniPlugin-JS/QNRTC-UniPlugin-JS/class/RTCLocalVideoTrack.js ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__webpack_provided_uni_dot_requireNativePlugin) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.QNLocalVideoTrack = void 0;\nvar _RTCLocalTrack = __webpack_require__(/*! ./RTCLocalTrack */ 230);\nvar _RTCInterface = __webpack_require__(/*! ../interface/RTCInterface */ 233);\nvar __extends = void 0 && (void 0).__extends || function () {\n  var _extendStatics = function extendStatics(d, b) {\n    _extendStatics = Object.setPrototypeOf || {\n      __proto__: []\n    } instanceof Array && function (d, b) {\n      d.__proto__ = b;\n    } || function (d, b) {\n      for (var p in b) {\n        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];\n      }\n    };\n    return _extendStatics(d, b);\n  };\n  return function (d, b) {\n    if (typeof b !== \"function\" && b !== null) throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\n    _extendStatics(d, b);\n    function __() {\n      this.constructor = d;\n    }\n    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n  };\n}();\nvar QNRtcTrack = __webpack_provided_uni_dot_requireNativePlugin('QNRTC-UniPlugin-QNRtcTrack');\nvar isQNVideoEncoderConfig = function isQNVideoEncoderConfig(preset) {\n  return preset.prefer !== undefined;\n};\nvar isQNVideoFormatDefault = function isQNVideoFormatDefault(preset) {\n  return preset in _RTCInterface.QNVideoFormatDefault;\n};\nvar QNLocalVideoTrack = function (_super) {\n  __extends(QNLocalVideoTrack, _super);\n  function QNLocalVideoTrack() {\n    return _super !== null && _super.apply(this, arguments) || this;\n  }\n  QNLocalVideoTrack.prototype.sendSEI = function (message, repeatCount, uuid) {\n    return QNRtcTrack.sendSEI(this.identifyID, message, repeatCount, uuid);\n  };\n  QNLocalVideoTrack.prototype.setVideoEncoderConfig = function (preset, prefer) {\n    if (isQNVideoEncoderConfig(preset)) {\n      QNRtcTrack.setVideoEncoderConfig(this.identifyID, preset);\n    } else if (isQNVideoFormatDefault(preset)) {\n      if (prefer === undefined) {\n        QNRtcTrack.setVideoEncoderConfigPreset(this.identifyID, preset);\n      } else {\n        QNRtcTrack.setVideoEncoderConfigPreset(this.identifyID, preset, prefer);\n      }\n    }\n  };\n  return QNLocalVideoTrack;\n}(_RTCLocalTrack.QNLocalTrack);\nexports.QNLocalVideoTrack = QNLocalVideoTrack;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/uni-app-plus-nvue/dist/require-native-plugin.js */ 54)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vanNfc2RrL1FOUlRDLVVuaVBsdWdpbi1KUy9RTlJUQy1VbmlQbHVnaW4tSlMvY2xhc3MvUlRDTG9jYWxWaWRlb1RyYWNrLmpzIl0sIm5hbWVzIjpbIl9fZXh0ZW5kcyIsImV4dGVuZFN0YXRpY3MiLCJkIiwiYiIsIk9iamVjdCIsInNldFByb3RvdHlwZU9mIiwiX19wcm90b19fIiwiQXJyYXkiLCJwIiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwiVHlwZUVycm9yIiwiU3RyaW5nIiwiX18iLCJjb25zdHJ1Y3RvciIsImNyZWF0ZSIsIlFOUnRjVHJhY2siLCJ1bmkiLCJpc1FOVmlkZW9FbmNvZGVyQ29uZmlnIiwicHJlc2V0IiwicHJlZmVyIiwidW5kZWZpbmVkIiwiaXNRTlZpZGVvRm9ybWF0RGVmYXVsdCIsIlFOVmlkZW9Gb3JtYXREZWZhdWx0IiwiUU5Mb2NhbFZpZGVvVHJhY2siLCJfc3VwZXIiLCJhcHBseSIsImFyZ3VtZW50cyIsInNlbmRTRUkiLCJtZXNzYWdlIiwicmVwZWF0Q291bnQiLCJ1dWlkIiwiaWRlbnRpZnlJRCIsInNldFZpZGVvRW5jb2RlckNvbmZpZyIsInNldFZpZGVvRW5jb2RlckNvbmZpZ1ByZXNldCIsIlFOTG9jYWxUcmFjayJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBZUE7QUFDQTtBQWhCQSxJQUFJQSxTQUFTLEdBQUksVUFBUSxTQUFLQSxTQUFTLElBQU0sWUFBWTtFQUNyRCxJQUFJQyxjQUFhLEdBQUcsdUJBQVVDLENBQUMsRUFBRUMsQ0FBQyxFQUFFO0lBQ2hDRixjQUFhLEdBQUdHLE1BQU0sQ0FBQ0MsY0FBYyxJQUNoQztNQUFFQyxTQUFTLEVBQUU7SUFBRyxDQUFDLFlBQVlDLEtBQUssSUFBSSxVQUFVTCxDQUFDLEVBQUVDLENBQUMsRUFBRTtNQUFFRCxDQUFDLENBQUNJLFNBQVMsR0FBR0gsQ0FBQztJQUFFLENBQUUsSUFDNUUsVUFBVUQsQ0FBQyxFQUFFQyxDQUFDLEVBQUU7TUFB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c0NvbnRlbnQiOlsidmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBiICE9PSBcImZ1bmN0aW9uXCIgJiYgYiAhPT0gbnVsbClcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDbGFzcyBleHRlbmRzIHZhbHVlIFwiICsgU3RyaW5nKGIpICsgXCIgaXMgbm90IGEgY29uc3RydWN0b3Igb3IgbnVsbFwiKTtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbmltcG9ydCB7IFFOTG9jYWxUcmFjayB9IGZyb20gJy4vUlRDTG9jYWxUcmFjayc7XG5pbXBvcnQgeyBRTlZpZGVvRm9ybWF0RGVmYXVsdCB9IGZyb20gJy4uL2ludGVyZmFjZS9SVENJbnRlcmZhY2UnO1xudmFyIFFOUnRjVHJhY2sgPSB1bmkucmVxdWlyZU5hdGl2ZVBsdWdpbignUU5SVEMtVW5pUGx1Z2luLVFOUnRjVHJhY2snKTtcbnZhciBpc1FOVmlkZW9FbmNvZGVyQ29uZmlnID0gZnVuY3Rpb24gKHByZXNldCkge1xuICAgIHJldHVybiBwcmVzZXQucHJlZmVyICE9PSB1bmRlZmluZWQ7XG59O1xudmFyIGlzUU5WaWRlb0Zvcm1hdERlZmF1bHQgPSBmdW5jdGlvbiAocHJlc2V0KSB7XG4gICAgcmV0dXJuIHByZXNldCBpbiBRTlZpZGVvRm9ybWF0RGVmYXVsdDtcbn07XG52YXIgUU5Mb2NhbFZpZGVvVHJhY2sgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhRTkxvY2FsVmlkZW9UcmFjaywgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBRTkxvY2FsVmlkZW9UcmFjaygpIHtcbiAgICAgICAgcmV0dXJuIF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICAgIH1cbiAgICBRTkxvY2FsVmlkZW9UcmFjay5wcm90b3R5cGUuc2VuZFNFSSA9IGZ1bmN0aW9uIChtZXNzYWdlLCByZXBlYXRDb3VudCwgdXVpZCkge1xuICAgICAgICByZXR1cm4gUU5SdGNUcmFjay5zZW5kU0VJKHRoaXMuaWRlbnRpZnlJRCwgbWVzc2FnZSwgcmVwZWF0Q291bnQsIHV1aWQpO1xuICAgIH07XG4gICAgUU5Mb2NhbFZpZGVvVHJhY2sucHJvdG90eXBlLnNldFZpZGVvRW5jb2RlckNvbmZpZyA9IGZ1bmN0aW9uIChwcmVzZXQsIHByZWZlcikge1xuICAgICAgICBpZiAoaXNRTlZpZGVvRW5jb2RlckNvbmZpZyhwcmVzZXQpKSB7XG4gICAgICAgICAgICBRTlJ0Y1RyYWNrLnNldFZpZGVvRW5jb2RlckNvbmZpZyh0aGlzLmlkZW50aWZ5SUQsIHByZXNldCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoaXNRTlZpZGVvRm9ybWF0RGVmYXVsdChwcmVzZXQpKSB7XG4gICAgICAgICAgICBpZiAocHJlZmVyID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBRTlJ0Y1RyYWNrLnNldFZpZGVvRW5jb2RlckNvbmZpZ1ByZXNldCh0aGlzLmlkZW50aWZ5SUQsIHByZXNldCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBRTlJ0Y1RyYWNrLnNldFZpZGVvRW5jb2RlckNvbmZpZ1ByZXNldCh0aGlzLmlkZW50aWZ5SUQsIHByZXNldCwgcHJlZmVyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIFFOTG9jYWxWaWRlb1RyYWNrO1xufShRTkxvY2FsVHJhY2spKTtcbmV4cG9ydCB7IFFOTG9jYWxWaWRlb1RyYWNrIH07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///232\n");

/***/ }),

/***/ 233:
/*!***********************************************************************************************************************!*\
  !*** /Users/tongjie/Desktop/QNRTC-Uniapp/demo/js_sdk/QNRTC-UniPlugin-JS/QNRTC-UniPlugin-JS/interface/RTCInterface.js ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nvar _RTCEnum = __webpack_require__(/*! ../enum/RTCEnum */ 224);\nObject.keys(_RTCEnum).forEach(function (key) {\n  if (key === \"default\" || key === \"__esModule\") return;\n  if (key in exports && exports[key] === _RTCEnum[key]) return;\n  Object.defineProperty(exports, key, {\n    enumerable: true,\n    get: function get() {\n      return _RTCEnum[key];\n    }\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vanNfc2RrL1FOUlRDLVVuaVBsdWdpbi1KUy9RTlJUQy1VbmlQbHVnaW4tSlMvaW50ZXJmYWNlL1JUQ0ludGVyZmFjZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQUE7RUFBQTtFQUFBO0VBQUE7SUFBQTtJQUFBO01BQUE7SUFBQTtFQUFBO0FBQUEiLCJmaWxlIjoiMjMzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0ICogZnJvbSAnLi4vZW51bS9SVENFbnVtJztcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///233\n");

/***/ }),

/***/ 234:
/*!******************************************************************************************************************************!*\
  !*** /Users/tongjie/Desktop/QNRTC-Uniapp/demo/js_sdk/QNRTC-UniPlugin-JS/QNRTC-UniPlugin-JS/class/RTCMicrophoneAudioTrack.js ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__webpack_provided_uni_dot_requireNativePlugin) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.QNMicrophoneAudioTrack = void 0;\nvar _RTCLocalAudioTrack = __webpack_require__(/*! ./RTCLocalAudioTrack */ 235);\nvar _RTCAudioMixer = __webpack_require__(/*! ../class/RTCAudioMixer */ 236);\nvar __extends = void 0 && (void 0).__extends || function () {\n  var _extendStatics = function extendStatics(d, b) {\n    _extendStatics = Object.setPrototypeOf || {\n      __proto__: []\n    } instanceof Array && function (d, b) {\n      d.__proto__ = b;\n    } || function (d, b) {\n      for (var p in b) {\n        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];\n      }\n    };\n    return _extendStatics(d, b);\n  };\n  return function (d, b) {\n    if (typeof b !== \"function\" && b !== null) throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\n    _extendStatics(d, b);\n    function __() {\n      this.constructor = d;\n    }\n    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n  };\n}();\nvar QNRtcTrack = __webpack_provided_uni_dot_requireNativePlugin('QNRTC-UniPlugin-QNRtcTrack');\nvar QNMicrophoneAudioTrack = function (_super) {\n  __extends(QNMicrophoneAudioTrack, _super);\n  function QNMicrophoneAudioTrack() {\n    return _super !== null && _super.apply(this, arguments) || this;\n  }\n  QNMicrophoneAudioTrack.prototype.createAudioMixer = function (url) {\n    QNRtcTrack.createAudioMixer(url);\n    return new _RTCAudioMixer.QNAudioMixer(this.identifyID, url);\n  };\n  return QNMicrophoneAudioTrack;\n}(_RTCLocalAudioTrack.QNLocalAudioTrack);\nexports.QNMicrophoneAudioTrack = QNMicrophoneAudioTrack;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/uni-app-plus-nvue/dist/require-native-plugin.js */ 54)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vanNfc2RrL1FOUlRDLVVuaVBsdWdpbi1KUy9RTlJUQy1VbmlQbHVnaW4tSlMvY2xhc3MvUlRDTWljcm9waG9uZUF1ZGlvVHJhY2suanMiXSwibmFtZXMiOlsiX19leHRlbmRzIiwiZXh0ZW5kU3RhdGljcyIsImQiLCJiIiwiT2JqZWN0Iiwic2V0UHJvdG90eXBlT2YiLCJfX3Byb3RvX18iLCJBcnJheSIsInAiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJUeXBlRXJyb3IiLCJTdHJpbmciLCJfXyIsImNvbnN0cnVjdG9yIiwiY3JlYXRlIiwiUU5SdGNUcmFjayIsInVuaSIsIlFOTWljcm9waG9uZUF1ZGlvVHJhY2siLCJfc3VwZXIiLCJhcHBseSIsImFyZ3VtZW50cyIsImNyZWF0ZUF1ZGlvTWl4ZXIiLCJ1cmwiLCJRTkF1ZGlvTWl4ZXIiLCJpZGVudGlmeUlEIiwiUU5Mb2NhbEF1ZGlvVHJhY2siXSwibWFwcGluZ3MiOiI7Ozs7OztBQWVBO0FBQ0E7QUFoQkEsSUFBSUEsU0FBUyxHQUFJLFVBQVEsU0FBS0EsU0FBUyxJQUFNLFlBQVk7RUFDckQsSUFBSUMsY0FBYSxHQUFHLHVCQUFVQyxDQUFDLEVBQUVDLENBQUMsRUFBRTtJQUNoQ0YsY0FBYSxHQUFHRyxNQUFNLENBQUNDLGNBQWMsSUFDaEM7TUFBRUMsU0FBUyxFQUFFO0lBQUcsQ0FBQyxZQUFZQyxLQUFLLElBQUksVUFBVUwsQ0FBQyxFQUFFQyxDQUFDLEVBQUU7TUFBRUQsQ0FBQyxDQUFDSSxTQUFTLEdBQUdILENBQUM7SUFBRSxDQUFFLElBQzVFLFVBQVVELENBQUMsRUFBRUMsQ0FBQyxFQUFFO01BQUUsS0FBSyxJQUFJSyxDQUFDLElBQUlMLENBQUM7UUFBRSxJQUFJQyxNQUFNLENBQUNLLFNBQVMsQ0FBQ0MsY0FBYyxDQUFDQyxJQUFJLENBQUNSLENBQUMsRUFBRUssQ0FBQyxDQUFDLEVBQUVOLENBQUMsQ0FBQ00sQ0FBQyxDQUFDLEdBQUdMLENBQUMsQ0FBQ0ssQ0FBQyxDQUFDO01BQUM7SUFBQyxDQUFDO0lBQ3JHLE9BQU9QLGNBQWEsQ0FBQ0MsQ0FBQyxFQUFFQyxDQUFDLENBQUM7RUFDOUIsQ0FBQztFQUNELE9BQU8sVUFBVUQsQ0FBQyxFQUFFQyxDQUFDLEVBQUU7SUFDbkIsSUFBSSxPQUFPQSxDQUFDLEtBQUssVUFBVSxJQUFJQSxDQUFDLEtBQUssSUFBSSxFQUNyQyxNQUFNLElBQUlTLFNBQVMsQ0FBQyxzQkFBc0IsR0FBR0MsTUFBTSxDQUFDVixDQUFDLENBQUMsR0FBRywrQkFBK0IsQ0FBQztJQUM3RkYsY0FBYSxDQUFDQyxDQUFDLEVBQUVDLENBQUMsQ0FBQztJQUNuQixTQUFTVyxFQUFFLEdBQUc7TUFBRSxJQUFJLENBQUNDLFdBQVcsR0FBR2IsQ0FBQztJQUFFO0lBQ3RDQSxDQUFDLENBQUNPLFNBQVMsR0FBR04sQ0FBQyxLQUFLLElBQUksR0FBR0MsTUFBTSxDQUFDWSxNQUFNLENBQUNiLENBQUMsQ0FBQyxJQUFJVyxFQUFFLENBQUNMLFNBQVMsR0FBR04sQ0FBQyxDQUFDTSxTQUFTLEVBQUUsSUFBSUssRUFBRSxFQUFFLENBQUM7RUFDeEYsQ0FBQztBQUNMLENBQUMsRUFBRztBQUdKLElBQUlHLFVBQVUsR0FBR0MsOENBQXVCLENBQUMsNEJBQTRCLENBQUM7QUFDdEUsSUFBSUMsc0JBQXNCLEdBQUksVUFBVUMsTUFBTSxFQUFFO0VBQzVDcEIsU0FBUyxDQUFDbUIsc0JBQXNCLEVBQUVDLE1BQU0sQ0FBQztFQUN6QyxTQUFTRCxzQkFBc0IsR0FBRztJQUM5QixPQUFPQyxNQUFNLEtBQUssSUFBSSxJQUFJQSxNQUFNLENBQUNDLEtBQUssQ0FBQyxJQUFJLEVBQUVDLFNBQVMsQ0FBQyxJQUFJLElBQUk7RUFDbkU7RUFDQUgsc0JBQXNCLENBQUNWLFNBQVMsQ0FBQ2MsZ0JBQWdCLEdBQUcsVUFBVUMsR0FBRyxFQUFFO0lBQy9EUCxVQUFVLENBQUNNLGdCQUFnQixDQUFDQyxHQUFHLENBQUM7SUFDaEMsT0FBTyxJQUFJQywyQkFBWSxDQUFDLElBQUksQ0FBQ0MsVUFBVSxFQUFFRixHQUFHLENBQUM7RUFDakQsQ0FBQztFQUNELE9BQU9MLHNCQUFzQjtBQUNqQyxDQUFDLENBQUNRLHFDQUFpQixDQUFFO0FBQUMsd0QiLCJmaWxlIjoiMjM0LmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBiICE9PSBcImZ1bmN0aW9uXCIgJiYgYiAhPT0gbnVsbClcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDbGFzcyBleHRlbmRzIHZhbHVlIFwiICsgU3RyaW5nKGIpICsgXCIgaXMgbm90IGEgY29uc3RydWN0b3Igb3IgbnVsbFwiKTtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbmltcG9ydCB7IFFOTG9jYWxBdWRpb1RyYWNrIH0gZnJvbSAnLi9SVENMb2NhbEF1ZGlvVHJhY2snO1xuaW1wb3J0IHsgUU5BdWRpb01peGVyIH0gZnJvbSAnLi4vY2xhc3MvUlRDQXVkaW9NaXhlcic7XG52YXIgUU5SdGNUcmFjayA9IHVuaS5yZXF1aXJlTmF0aXZlUGx1Z2luKCdRTlJUQy1VbmlQbHVnaW4tUU5SdGNUcmFjaycpO1xudmFyIFFOTWljcm9waG9uZUF1ZGlvVHJhY2sgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhRTk1pY3JvcGhvbmVBdWRpb1RyYWNrLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIFFOTWljcm9waG9uZUF1ZGlvVHJhY2soKSB7XG4gICAgICAgIHJldHVybiBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgICB9XG4gICAgUU5NaWNyb3Bob25lQXVkaW9UcmFjay5wcm90b3R5cGUuY3JlYXRlQXVkaW9NaXhlciA9IGZ1bmN0aW9uICh1cmwpIHtcbiAgICAgICAgUU5SdGNUcmFjay5jcmVhdGVBdWRpb01peGVyKHVybCk7XG4gICAgICAgIHJldHVybiBuZXcgUU5BdWRpb01peGVyKHRoaXMuaWRlbnRpZnlJRCwgdXJsKTtcbiAgICB9O1xuICAgIHJldHVybiBRTk1pY3JvcGhvbmVBdWRpb1RyYWNrO1xufShRTkxvY2FsQXVkaW9UcmFjaykpO1xuZXhwb3J0IHsgUU5NaWNyb3Bob25lQXVkaW9UcmFjayB9O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///234\n");

/***/ }),

/***/ 235:
/*!*************************************************************************************************************************!*\
  !*** /Users/tongjie/Desktop/QNRTC-Uniapp/demo/js_sdk/QNRTC-UniPlugin-JS/QNRTC-UniPlugin-JS/class/RTCLocalAudioTrack.js ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__webpack_provided_uni_dot_requireNativePlugin) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.QNLocalAudioTrack = void 0;\nvar _RTCLocalTrack = __webpack_require__(/*! ./RTCLocalTrack */ 230);\nvar __extends = void 0 && (void 0).__extends || function () {\n  var _extendStatics = function extendStatics(d, b) {\n    _extendStatics = Object.setPrototypeOf || {\n      __proto__: []\n    } instanceof Array && function (d, b) {\n      d.__proto__ = b;\n    } || function (d, b) {\n      for (var p in b) {\n        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];\n      }\n    };\n    return _extendStatics(d, b);\n  };\n  return function (d, b) {\n    if (typeof b !== \"function\" && b !== null) throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\n    _extendStatics(d, b);\n    function __() {\n      this.constructor = d;\n    }\n    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n  };\n}();\nvar QNRtcTrack = __webpack_provided_uni_dot_requireNativePlugin('QNRTC-UniPlugin-QNRtcTrack');\nvar QNLocalAudioTrack = function (_super) {\n  __extends(QNLocalAudioTrack, _super);\n  function QNLocalAudioTrack() {\n    return _super !== null && _super.apply(this, arguments) || this;\n  }\n  QNLocalAudioTrack.prototype.setVolume = function (volume) {\n    return QNRtcTrack.setVolume(this.identifyID, volume);\n  };\n  QNLocalAudioTrack.prototype.getVolumeLevel = function () {\n    return QNRtcTrack.getVolumeLevel(this.identifyID);\n  };\n  QNLocalAudioTrack.prototype.addAudioFilter = function (filter) {\n    QNRtcTrack.addAudioFilter(this.identifyID, filter.id);\n  };\n  QNLocalAudioTrack.prototype.removeAudioFilter = function (filter) {\n    QNRtcTrack.removeAudioFilter(this.identifyID, filter.id);\n  };\n  return QNLocalAudioTrack;\n}(_RTCLocalTrack.QNLocalTrack);\nexports.QNLocalAudioTrack = QNLocalAudioTrack;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/uni-app-plus-nvue/dist/require-native-plugin.js */ 54)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vanNfc2RrL1FOUlRDLVVuaVBsdWdpbi1KUy9RTlJUQy1VbmlQbHVnaW4tSlMvY2xhc3MvUlRDTG9jYWxBdWRpb1RyYWNrLmpzIl0sIm5hbWVzIjpbIl9fZXh0ZW5kcyIsImV4dGVuZFN0YXRpY3MiLCJkIiwiYiIsIk9iamVjdCIsInNldFByb3RvdHlwZU9mIiwiX19wcm90b19fIiwiQXJyYXkiLCJwIiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwiVHlwZUVycm9yIiwiU3RyaW5nIiwiX18iLCJjb25zdHJ1Y3RvciIsImNyZWF0ZSIsIlFOUnRjVHJhY2siLCJ1bmkiLCJRTkxvY2FsQXVkaW9UcmFjayIsIl9zdXBlciIsImFwcGx5IiwiYXJndW1lbnRzIiwic2V0Vm9sdW1lIiwidm9sdW1lIiwiaWRlbnRpZnlJRCIsImdldFZvbHVtZUxldmVsIiwiYWRkQXVkaW9GaWx0ZXIiLCJmaWx0ZXIiLCJpZCIsInJlbW92ZUF1ZGlvRmlsdGVyIiwiUU5Mb2NhbFRyYWNrIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFlQTtBQWZBLElBQUlBLFNBQVMsR0FBSSxVQUFRLFNBQUtBLFNBQVMsSUFBTSxZQUFZO0VBQ3JELElBQUlDLGNBQWEsR0FBRyx1QkFBVUMsQ0FBQyxFQUFFQyxDQUFDLEVBQUU7SUFDaENGLGNBQWEsR0FBR0csTUFBTSxDQUFDQyxjQUFjLElBQ2hDO01BQUVDLFNBQVMsRUFBRTtJQUFHLENBQUMsWUFBWUMsS0FBSyxJQUFJLFVBQVVMLENBQUMsRUFBRUMsQ0FBQyxFQUFFO01BQUVELENBQUMsQ0FBQ0ksU0FBUyxHQUFHSCxDQUFDO0lBQUUsQ0FBRSxJQUM1RSxVQUFVRCxDQUFDLEVBQUVDLENBQUMsRUFBRTtNQUFFLEtBQUssSUFBSUssQ0FBQyxJQUFJTCxDQUFDO1FBQUUsSUFBSUMsTUFBTSxDQUFDSyxTQUFTLENBQUNDLGNBQWMsQ0FBQ0MsSUFBSSxDQUFDUixDQUFDLEVBQUVLLENBQUMsQ0FBQyxFQUFFTixDQUFDLENBQUNNLENBQUMsQ0FBQyxHQUFHTCxDQUFDLENBQUNLLENBQUMsQ0FBQztNQUFDO0lBQUMsQ0FBQztJQUNyRyxPQUFPUCxjQUFhLENBQUNDLENBQUMsRUFBRUMsQ0FBQyxDQUFDO0VBQzlCLENBQUM7RUFDRCxPQUFPLFVBQVVELENBQUMsRUFBRUMsQ0FBQyxFQUFFO0lBQ25CLElBQUksT0FBT0EsQ0FBQyxLQUFLLFVBQVUsSUFBSUEsQ0FBQyxLQUFLLElBQUksRUFDckMsTUFBTSxJQUFJUyxTQUFTLENBQUMsc0JBQXNCLEdBQUdDLE1BQU0sQ0FBQ1YsQ0FBQyxDQUFDLEdBQUcsK0JBQStCLENBQUM7SUFDN0ZGLGNBQWEsQ0FBQ0MsQ0FBQyxFQUFFQyxDQUFDLENBQUM7SUFDbkIsU0FBU1csRUFBRSxHQUFHO01BQUUsSUFBSSxDQUFDQyxXQUFXLEdBQUdiLENBQUM7SUFBRTtJQUN0Q0EsQ0FBQyxDQUFDTyxTQUFTLEdBQUdOLENBQUMsS0FBSyxJQUFJLEdBQUdDLE1BQU0sQ0FBQ1ksTUFBTSxDQUFDYixDQUFDLENBQUMsSUFBSVcsRUFBRSxDQUFDTCxTQUFTLEdBQUdOLENBQUMsQ0FBQ00sU0FBUyxFQUFFLElBQUlLLEVBQUUsRUFBRSxDQUFDO0VBQ3hGLENBQUM7QUFDTCxDQUFDLEVBQUc7QUFFSixJQUFJRyxVQUFVLEdBQUdDLDhDQUF1QixDQUFDLDRCQUE0QixDQUFDO0FBQ3RFLElBQUlDLGlCQUFpQixHQUFJLFVBQVVDLE1BQU0sRUFBRTtFQUN2Q3BCLFNBQVMsQ0FBQ21CLGlCQUFpQixFQUFFQyxNQUFNLENBQUM7RUFDcEMsU0FBU0QsaUJBQWlCLEdBQUc7SUFDekIsT0FBT0MsTUFBTSxLQUFLLElBQUksSUFBSUEsTUFBTSxDQUFDQyxLQUFLLENBQUMsSUFBSSxFQUFFQyxTQUFTLENBQUMsSUFBSSxJQUFJO0VBQ25FO0VBQ0FILGlCQUFpQixDQUFDVixTQUFTLENBQUNjLFNBQVMsR0FBRyxVQUFVQyxNQUFNLEVBQUU7SUFDdEQsT0FBT1AsVUFBVSxDQUFDTSxTQUFTLENBQUMsSUFBSSxDQUFDRSxVQUFVLEVBQUVELE1BQU0sQ0FBQztFQUN4RCxDQUFDO0VBQ0RMLGlCQUFpQixDQUFDVixTQUFTLENBQUNpQixjQUFjLEdBQUcsWUFBWTtJQUNyRCxPQUFPVCxVQUFVLENBQUNTLGNBQWMsQ0FBQyxJQUFJLENBQUNELFVBQVUsQ0FBQztFQUNyRCxDQUFDO0VBQ0ROLGlCQUFpQixDQUFDVixTQUFTLENBQUNrQixjQUFjLEdBQUcsVUFBVUMsTUFBTSxFQUFFO0lBQzNEWCxVQUFVLENBQUNVLGNBQWMsQ0FBQyxJQUFJLENBQUNGLFVBQVUsRUFBRUcsTUFBTSxDQUFDQyxFQUFFLENBQUM7RUFDekQsQ0FBQztFQUNEVixpQkFBaUIsQ0FBQ1YsU0FBUyxDQUFDcUIsaUJBQWlCLEdBQUcsVUFBVUYsTUFBTSxFQUFFO0lBQzlEWCxVQUFVLENBQUNhLGlCQUFpQixDQUFDLElBQUksQ0FBQ0wsVUFBVSxFQUFFRyxNQUFNLENBQUNDLEVBQUUsQ0FBQztFQUM1RCxDQUFDO0VBQ0QsT0FBT1YsaUJBQWlCO0FBQzVCLENBQUMsQ0FBQ1ksMkJBQVksQ0FBRTtBQUFDLDhDIiwiZmlsZSI6IjIzNS5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChiLCBwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgIH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgYiAhPT0gXCJmdW5jdGlvblwiICYmIGIgIT09IG51bGwpXG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2xhc3MgZXh0ZW5kcyB2YWx1ZSBcIiArIFN0cmluZyhiKSArIFwiIGlzIG5vdCBhIGNvbnN0cnVjdG9yIG9yIG51bGxcIik7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG5pbXBvcnQgeyBRTkxvY2FsVHJhY2sgfSBmcm9tICcuL1JUQ0xvY2FsVHJhY2snO1xudmFyIFFOUnRjVHJhY2sgPSB1bmkucmVxdWlyZU5hdGl2ZVBsdWdpbignUU5SVEMtVW5pUGx1Z2luLVFOUnRjVHJhY2snKTtcbnZhciBRTkxvY2FsQXVkaW9UcmFjayA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKFFOTG9jYWxBdWRpb1RyYWNrLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIFFOTG9jYWxBdWRpb1RyYWNrKCkge1xuICAgICAgICByZXR1cm4gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gICAgfVxuICAgIFFOTG9jYWxBdWRpb1RyYWNrLnByb3RvdHlwZS5zZXRWb2x1bWUgPSBmdW5jdGlvbiAodm9sdW1lKSB7XG4gICAgICAgIHJldHVybiBRTlJ0Y1RyYWNrLnNldFZvbHVtZSh0aGlzLmlkZW50aWZ5SUQsIHZvbHVtZSk7XG4gICAgfTtcbiAgICBRTkxvY2FsQXVkaW9UcmFjay5wcm90b3R5cGUuZ2V0Vm9sdW1lTGV2ZWwgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBRTlJ0Y1RyYWNrLmdldFZvbHVtZUxldmVsKHRoaXMuaWRlbnRpZnlJRCk7XG4gICAgfTtcbiAgICBRTkxvY2FsQXVkaW9UcmFjay5wcm90b3R5cGUuYWRkQXVkaW9GaWx0ZXIgPSBmdW5jdGlvbiAoZmlsdGVyKSB7XG4gICAgICAgIFFOUnRjVHJhY2suYWRkQXVkaW9GaWx0ZXIodGhpcy5pZGVudGlmeUlELCBmaWx0ZXIuaWQpO1xuICAgIH07XG4gICAgUU5Mb2NhbEF1ZGlvVHJhY2sucHJvdG90eXBlLnJlbW92ZUF1ZGlvRmlsdGVyID0gZnVuY3Rpb24gKGZpbHRlcikge1xuICAgICAgICBRTlJ0Y1RyYWNrLnJlbW92ZUF1ZGlvRmlsdGVyKHRoaXMuaWRlbnRpZnlJRCwgZmlsdGVyLmlkKTtcbiAgICB9O1xuICAgIHJldHVybiBRTkxvY2FsQXVkaW9UcmFjaztcbn0oUU5Mb2NhbFRyYWNrKSk7XG5leHBvcnQgeyBRTkxvY2FsQXVkaW9UcmFjayB9O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///235\n");

/***/ }),

/***/ 236:
/*!********************************************************************************************************************!*\
  !*** /Users/tongjie/Desktop/QNRTC-Uniapp/demo/js_sdk/QNRTC-UniPlugin-JS/QNRTC-UniPlugin-JS/class/RTCAudioMixer.js ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__webpack_provided_uni_dot_requireNativePlugin) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.QNAudioMixer = void 0;\nvar QNRtcAudioMixer = __webpack_provided_uni_dot_requireNativePlugin('QNRTC-UniPlugin-QNRtcAudioMixer');\nvar QNEvent = __webpack_provided_uni_dot_requireNativePlugin('globalEvent');\nvar QNAudioMixer = function () {\n  function QNAudioMixer(identifyID, url) {\n    this.variationList = ['onStateChanged'];\n    this.identifyID = identifyID;\n    this.url = url;\n  }\n  QNAudioMixer.prototype.createAudioMixerCallback = function (name, listener) {\n    if (name === 'onStateChanged') {\n      var variationCallback = function variationCallback(params) {\n        if (params.state) {\n          listener(params);\n        }\n      };\n      return variationCallback;\n    }\n  };\n  QNAudioMixer.prototype.on = function (name, listener) {\n    if (this.variationList.some(function (item) {\n      return item === name;\n    })) {\n      var callback = this.createAudioMixerCallback(name, listener);\n      QNEvent.addEventListener(name, callback);\n    } else {\n      QNEvent.addEventListener(name, listener);\n    }\n  };\n  QNAudioMixer.prototype.off = function (name, listener) {\n    QNEvent.removeEventListener(name, listener);\n  };\n  QNAudioMixer.prototype.start = function (loopTimes) {\n    QNRtcAudioMixer.start(this.identifyID, loopTimes);\n  };\n  QNAudioMixer.prototype.stop = function () {\n    QNRtcAudioMixer.stop(this.identifyID);\n  };\n  QNAudioMixer.prototype.resume = function () {\n    QNRtcAudioMixer.resume(this.identifyID);\n  };\n  QNAudioMixer.prototype.pause = function () {\n    QNRtcAudioMixer.pause(this.identifyID);\n  };\n  QNAudioMixer.prototype.seekTo = function (timeUs) {\n    QNRtcAudioMixer.seekTo(this.identifyID, timeUs);\n  };\n  QNAudioMixer.prototype.setMixingVolume = function (microphoneVolume, musicVolume) {\n    QNRtcAudioMixer.setMixingVolume(this.identifyID, microphoneVolume, musicVolume);\n  };\n  QNAudioMixer.prototype.setPlayingVolume = function (volume) {\n    QNRtcAudioMixer.setPlayingVolume(this.identifyID, volume);\n  };\n  QNAudioMixer.prototype.getDuration = function () {\n    return QNRtcAudioMixer.getDuration(this.identifyID);\n  };\n  QNAudioMixer.prototype.getCurrentPosition = function () {\n    return QNRtcAudioMixer.getCurrentPosition(this.identifyID);\n  };\n  QNAudioMixer.prototype.setPlayBack = function (playBack) {\n    QNRtcAudioMixer.setPlayBack(this.identifyID, playBack);\n  };\n  return QNAudioMixer;\n}();\nexports.QNAudioMixer = QNAudioMixer;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/uni-app-plus-nvue/dist/require-native-plugin.js */ 54)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vanNfc2RrL1FOUlRDLVVuaVBsdWdpbi1KUy9RTlJUQy1VbmlQbHVnaW4tSlMvY2xhc3MvUlRDQXVkaW9NaXhlci5qcyJdLCJuYW1lcyI6WyJRTlJ0Y0F1ZGlvTWl4ZXIiLCJ1bmkiLCJRTkV2ZW50IiwiUU5BdWRpb01peGVyIiwiaWRlbnRpZnlJRCIsInVybCIsInZhcmlhdGlvbkxpc3QiLCJwcm90b3R5cGUiLCJjcmVhdGVBdWRpb01peGVyQ2FsbGJhY2siLCJuYW1lIiwibGlzdGVuZXIiLCJ2YXJpYXRpb25DYWxsYmFjayIsInBhcmFtcyIsInN0YXRlIiwib24iLCJzb21lIiwiaXRlbSIsImNhbGxiYWNrIiwiYWRkRXZlbnRMaXN0ZW5lciIsIm9mZiIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJzdGFydCIsImxvb3BUaW1lcyIsInN0b3AiLCJyZXN1bWUiLCJwYXVzZSIsInNlZWtUbyIsInRpbWVVcyIsInNldE1peGluZ1ZvbHVtZSIsIm1pY3JvcGhvbmVWb2x1bWUiLCJtdXNpY1ZvbHVtZSIsInNldFBsYXlpbmdWb2x1bWUiLCJ2b2x1bWUiLCJnZXREdXJhdGlvbiIsImdldEN1cnJlbnRQb3NpdGlvbiIsInNldFBsYXlCYWNrIiwicGxheUJhY2siXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLElBQUlBLGVBQWUsR0FBR0MsOENBQXVCLENBQUMsaUNBQWlDLENBQUM7QUFDaEYsSUFBSUMsT0FBTyxHQUFHRCw4Q0FBdUIsQ0FBQyxhQUFhLENBQUM7QUFDcEQsSUFBSUUsWUFBWSxHQUFJLFlBQVk7RUFDNUIsU0FBU0EsWUFBWSxDQUFDQyxVQUFVLEVBQUVDLEdBQUcsRUFBRTtJQUNuQyxJQUFJLENBQUNDLGFBQWEsR0FBRyxDQUFDLGdCQUFnQixDQUFDO0lBQ3ZDLElBQUksQ0FBQ0YsVUFBVSxHQUFHQSxVQUFVO0lBQzVCLElBQUksQ0FBQ0MsR0FBRyxHQUFHQSxHQUFHO0VBQ2xCO0VBQ0FGLFlBQVksQ0FBQ0ksU0FBUyxDQUFDQyx3QkFB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LENBQUMsSUFBSSxDQUFDOUIsVUFBVSxDQUFDO0VBQzlELENBQUM7RUFDREQsWUFBWSxDQUFDSSxTQUFTLENBQUM0QixXQUFXLEdBQUcsVUFBVUMsUUFBUSxFQUFFO0lBQ3JEcEMsZUFBZSxDQUFDbUMsV0FBVyxDQUFDLElBQUksQ0FBQy9CLFVBQVUsRUFBRWdDLFFBQVEsQ0FBQztFQUMxRCxDQUFDO0VBQ0QsT0FBT2pDLFlBQVk7QUFDdkIsQ0FBQyxFQUFHO0FBQUMsb0MiLCJmaWxlIjoiMjM2LmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIFFOUnRjQXVkaW9NaXhlciA9IHVuaS5yZXF1aXJlTmF0aXZlUGx1Z2luKCdRTlJUQy1VbmlQbHVnaW4tUU5SdGNBdWRpb01peGVyJyk7XG52YXIgUU5FdmVudCA9IHVuaS5yZXF1aXJlTmF0aXZlUGx1Z2luKCdnbG9iYWxFdmVudCcpO1xudmFyIFFOQXVkaW9NaXhlciA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gUU5BdWRpb01peGVyKGlkZW50aWZ5SUQsIHVybCkge1xuICAgICAgICB0aGlzLnZhcmlhdGlvbkxpc3QgPSBbJ29uU3RhdGVDaGFuZ2VkJ107XG4gICAgICAgIHRoaXMuaWRlbnRpZnlJRCA9IGlkZW50aWZ5SUQ7XG4gICAgICAgIHRoaXMudXJsID0gdXJsO1xuICAgIH1cbiAgICBRTkF1ZGlvTWl4ZXIucHJvdG90eXBlLmNyZWF0ZUF1ZGlvTWl4ZXJDYWxsYmFjayA9IGZ1bmN0aW9uIChuYW1lLCBsaXN0ZW5lcikge1xuICAgICAgICBpZiAobmFtZSA9PT0gJ29uU3RhdGVDaGFuZ2VkJykge1xuICAgICAgICAgICAgdmFyIHZhcmlhdGlvbkNhbGxiYWNrID0gZnVuY3Rpb24gKHBhcmFtcykge1xuICAgICAgICAgICAgICAgIGlmIChwYXJhbXMuc3RhdGUpIHtcbiAgICAgICAgICAgICAgICAgICAgbGlzdGVuZXIocGFyYW1zKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgcmV0dXJuIHZhcmlhdGlvbkNhbGxiYWNrO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBRTkF1ZGlvTWl4ZXIucHJvdG90eXBlLm9uID0gZnVuY3Rpb24gKG5hbWUsIGxpc3RlbmVyKSB7XG4gICAgICAgIGlmICh0aGlzLnZhcmlhdGlvbkxpc3Quc29tZShmdW5jdGlvbiAoaXRlbSkgeyByZXR1cm4gaXRlbSA9PT0gbmFtZTsgfSkpIHtcbiAgICAgICAgICAgIHZhciBjYWxsYmFjayA9IHRoaXMuY3JlYXRlQXVkaW9NaXhlckNhbGxiYWNrKG5hbWUsIGxpc3RlbmVyKTtcbiAgICAgICAgICAgIFFORXZlbnQuYWRkRXZlbnRMaXN0ZW5lcihuYW1lLCBjYWxsYmFjayk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBRTkV2ZW50LmFkZEV2ZW50TGlzdGVuZXIobmFtZSwgbGlzdGVuZXIpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBRTkF1ZGlvTWl4ZXIucHJvdG90eXBlLm9mZiA9IGZ1bmN0aW9uIChuYW1lLCBsaXN0ZW5lcikge1xuICAgICAgICBRTkV2ZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIobmFtZSwgbGlzdGVuZXIpO1xuICAgIH07XG4gICAgUU5BdWRpb01peGVyLnByb3RvdHlwZS5zdGFydCA9IGZ1bmN0aW9uIChsb29wVGltZXMpIHtcbiAgICAgICAgUU5SdGNBdWRpb01peGVyLnN0YXJ0KHRoaXMuaWRlbnRpZnlJRCwgbG9vcFRpbWVzKTtcbiAgICB9O1xuICAgIFFOQXVkaW9NaXhlci5wcm90b3R5cGUuc3RvcCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgUU5SdGNBdWRpb01peGVyLnN0b3AodGhpcy5pZGVudGlmeUlEKTtcbiAgICB9O1xuICAgIFFOQXVkaW9NaXhlci5wcm90b3R5cGUucmVzdW1lID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBRTlJ0Y0F1ZGlvTWl4ZXIucmVzdW1lKHRoaXMuaWRlbnRpZnlJRCk7XG4gICAgfTtcbiAgICBRTkF1ZGlvTWl4ZXIucHJvdG90eXBlLnBhdXNlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBRTlJ0Y0F1ZGlvTWl4ZXIucGF1c2UodGhpcy5pZGVudGlmeUlEKTtcbiAgICB9O1xuICAgIFFOQXVkaW9NaXhlci5wcm90b3R5cGUuc2Vla1RvID0gZnVuY3Rpb24gKHRpbWVVcykge1xuICAgICAgICBRTlJ0Y0F1ZGlvTWl4ZXIuc2Vla1RvKHRoaXMuaWRlbnRpZnlJRCwgdGltZVVzKTtcbiAgICB9O1xuICAgIFFOQXVkaW9NaXhlci5wcm90b3R5cGUuc2V0TWl4aW5nVm9sdW1lID0gZnVuY3Rpb24gKG1pY3JvcGhvbmVWb2x1bWUsIG11c2ljVm9sdW1lKSB7XG4gICAgICAgIFFOUnRjQXVkaW9NaXhlci5zZXRNaXhpbmdWb2x1bWUodGhpcy5pZGVudGlmeUlELCBtaWNyb3Bob25lVm9sdW1lLCBtdXNpY1ZvbHVtZSk7XG4gICAgfTtcbiAgICBRTkF1ZGlvTWl4ZXIucHJvdG90eXBlLnNldFBsYXlpbmdWb2x1bWUgPSBmdW5jdGlvbiAodm9sdW1lKSB7XG4gICAgICAgIFFOUnRjQXVkaW9NaXhlci5zZXRQbGF5aW5nVm9sdW1lKHRoaXMuaWRlbnRpZnlJRCwgdm9sdW1lKTtcbiAgICB9O1xuICAgIFFOQXVkaW9NaXhlci5wcm90b3R5cGUuZ2V0RHVyYXRpb24gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBRTlJ0Y0F1ZGlvTWl4ZXIuZ2V0RHVyYXRpb24odGhpcy5pZGVudGlmeUlEKTtcbiAgICB9O1xuICAgIFFOQXVkaW9NaXhlci5wcm90b3R5cGUuZ2V0Q3VycmVudFBvc2l0aW9uID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gUU5SdGNBdWRpb01peGVyLmdldEN1cnJlbnRQb3NpdGlvbih0aGlzLmlkZW50aWZ5SUQpO1xuICAgIH07XG4gICAgUU5BdWRpb01peGVyLnByb3RvdHlwZS5zZXRQbGF5QmFjayA9IGZ1bmN0aW9uIChwbGF5QmFjaykge1xuICAgICAgICBRTlJ0Y0F1ZGlvTWl4ZXIuc2V0UGxheUJhY2sodGhpcy5pZGVudGlmeUlELCBwbGF5QmFjayk7XG4gICAgfTtcbiAgICByZXR1cm4gUU5BdWRpb01peGVyO1xufSgpKTtcbmV4cG9ydCB7IFFOQXVkaW9NaXhlciB9O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///236\n");

/***/ }),

/***/ 237:
/*!**************************************************************************************************************************!*\
  !*** /Users/tongjie/Desktop/QNRTC-Uniapp/demo/js_sdk/QNRTC-UniPlugin-JS/QNRTC-UniPlugin-JS/class/RTCScreenVideoTrack.js ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__webpack_provided_uni_dot_requireNativePlugin) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.QNScreenVideoTrack = void 0;\nvar _RTCLocalVideoTrack = __webpack_require__(/*! ./RTCLocalVideoTrack */ 232);\nvar __extends = void 0 && (void 0).__extends || function () {\n  var _extendStatics = function extendStatics(d, b) {\n    _extendStatics = Object.setPrototypeOf || {\n      __proto__: []\n    } instanceof Array && function (d, b) {\n      d.__proto__ = b;\n    } || function (d, b) {\n      for (var p in b) {\n        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];\n      }\n    };\n    return _extendStatics(d, b);\n  };\n  return function (d, b) {\n    if (typeof b !== \"function\" && b !== null) throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\n    _extendStatics(d, b);\n    function __() {\n      this.constructor = d;\n    }\n    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n  };\n}();\nvar QNRtcTrack = __webpack_provided_uni_dot_requireNativePlugin('QNRTC-UniPlugin-QNRtcTrack');\nvar QNScreenVideoTrack = function (_super) {\n  __extends(QNScreenVideoTrack, _super);\n  function QNScreenVideoTrack() {\n    return _super !== null && _super.apply(this, arguments) || this;\n  }\n  QNScreenVideoTrack.prototype.setScreenRecorderFrameRate = function (screenRecorderFrameRate) {\n    return QNRtcTrack.setScreenRecorderFrameRate(this.identifyID, screenRecorderFrameRate);\n  };\n  QNScreenVideoTrack.requestPermission = function (callback) {\n    return QNRtcTrack.requestPermission(callback);\n  };\n  QNScreenVideoTrack.isScreenCaptureSupported = function () {\n    return QNRtcTrack.isScreenCaptureSupported() === 1;\n  };\n  return QNScreenVideoTrack;\n}(_RTCLocalVideoTrack.QNLocalVideoTrack);\nexports.QNScreenVideoTrack = QNScreenVideoTrack;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/uni-app-plus-nvue/dist/require-native-plugin.js */ 54)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vanNfc2RrL1FOUlRDLVVuaVBsdWdpbi1KUy9RTlJUQy1VbmlQbHVnaW4tSlMvY2xhc3MvUlRDU2NyZWVuVmlkZW9UcmFjay5qcyJdLCJuYW1lcyI6WyJfX2V4dGVuZHMiLCJleHRlbmRTdGF0aWNzIiwiZCIsImIiLCJPYmplY3QiLCJzZXRQcm90b3R5cGVPZiIsIl9fcHJvdG9fXyIsIkFycmF5IiwicCIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsIlR5cGVFcnJvciIsIlN0cmluZyIsIl9fIiwiY29uc3RydWN0b3IiLCJjcmVhdGUiLCJRTlJ0Y1RyYWNrIiwidW5pIiwiUU5TY3JlZW5WaWRlb1RyYWNrIiwiX3N1cGVyIiwiYXBwbHkiLCJhcmd1bWVudHMiLCJzZXRTY3JlZW5SZWNvcmRlckZyYW1lUmF0ZSIsInNjcmVlblJlY29yZGVyRnJhbWVSYXRlIiwiaWRlbnRpZnlJRCIsInJlcXVlc3RQZXJtaXNzaW9uIiwiY2FsbGJhY2siLCJpc1NjcmVlbkNhcHR1cmVTdXBwb3J0ZWQiLCJRTkxvY2FsVmlkZW9UcmFjayJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBZUE7QUFmQSxJQUFJQSxTQUFTLEdBQUksVUFBUSxTQUFLQSxTQUFTLElBQU0sWUFBWTtFQUNyRCxJQUFJQyxjQUFhLEdBQUcsdUJBQVVDLENBQUMsRUFBRUMsQ0FBQyxFQUFFO0lBQ2hDRixjQUFhLEdBQUdHLE1BQU0sQ0FBQ0MsY0FBYyxJQUNoQztNQUFFQyxTQUFTLEVBQUU7SUFBRyxDQUFDLFlBQVlDLEtBQUssSUFBSSxVQUFVTCxDQUFDLEVBQUVDLENBQUMsRUFBRTtNQUFFRCxDQUFDLENBQUNJLFNBQVMsR0FBR0gsQ0FBQztJQUFFLENBQUUsSUFDNUUsVUFBVUQsQ0FBQyxFQUFFQyxDQUFDLEVBQUU7TUFBRSxLQUFLLElBQUlLLENBQUMsSUFBSUwsQ0FBQztRQUFFLElBQUlDLE1BQU0sQ0FBQ0ssU0FBUyxDQUFDQyxjQUFjLENBQUNDLElBQUksQ0FBQ1IsQ0FBQyxFQUFFSyxDQUFDLENBQUMsRUFBRU4sQ0FBQyxDQUFDTSxDQUFDLENBQUMsR0FBR0wsQ0FBQyxDQUFDSyxDQUFDLENBQUM7TUFBQztJQUFDLENBQUM7SUFDckcsT0FBT1AsY0FBYSxDQUFDQyxDQUFDLEVBQUVDLENBQUMsQ0FBQztFQUM5QixDQUFDO0VBQ0QsT0FBTyxVQUFVRCxDQUFDLEVBQUVDLENBQUMsRUFBRTtJQUNuQixJQUFJLE9BQU9BLENBQUMsS0FBSyxVQUFVLElBQUlBLENBQUMsS0FBSyxJQUFJLEVBQ3JDLE1BQU0sSUFBSVMsU0FBUyxDQUFDLHNCQUFzQixHQUFHQyxNQUFNLENBQUNWLENBQUMsQ0FBQyxHQUFHLCtCQUErQixDQUFDO0lBQzdGRixjQUFhLENBQUNDLENBQUMsRUFBRUMsQ0FBQyxDQUFDO0lBQ25CLFNBQVNXLEVBQUUsR0FBRztNQUFFLElBQUksQ0FBQ0MsV0FBVyxHQUFHYixDQUFDO0lBQUU7SUFDdENBLENBQUMsQ0FBQ08sU0FBUyxHQUFHTixDQUFDLEtBQUssSUFBSSxHQUFHQyxNQUFNLENBQUNZLE1BQU0sQ0FBQ2IsQ0FBQyxDQUFDLElBQUlXLEVBQUUsQ0FBQ0wsU0FBUyxHQUFHTixDQUFDLENBQUNNLFNBQVMsRUFBRSxJQUFJSyxFQUFFLEVBQUUsQ0FBQztFQUN4RixDQUFDO0FBQ0wsQ0FBQyxFQUFHO0FBRUosSUFBSUcsVUFBVSxHQUFHQyw4Q0FBdUIsQ0FBQyw0QkFBNEIsQ0FBQztBQUN0RSxJQUFJQyxrQkFBa0IsR0FBSSxVQUFVQyxNQUFNLEVBQUU7RUFDeENwQixTQUFTLENBQUNtQixrQkFBa0IsRUFBRUMsTUFBTSxDQUFDO0VBQ3JDLFNBQVNELGtCQUFrQixHQUFHO0lBQzFCLE9BQU9DLE1BQU0sS0FBSyxJQUFJLElBQUlBLE1BQU0sQ0FBQ0MsS0FBSyxDQUFDLElBQUksRUFBRUMsU0FBUyxDQUFDLElBQUksSUFBSTtFQUNuRTtFQUNBSCxrQkFBa0IsQ0FBQ1YsU0FBUyxDQUFDYywwQkFBMEIsR0FBRyxVQUFVQyx1QkFBdUIsRUFBRTtJQUN6RixPQUFPUCxVQUFVLENBQUNNLDBCQUEwQixDQUFDLElBQUksQ0FBQ0UsVUFBVSxFQUFFRCx1QkFBdUIsQ0FBQztFQUMxRixDQUFDO0VBQ0RMLGtCQUFrQixDQUFDTyxpQkFBaUIsR0FBRyxVQUFVQyxRQUFRLEVBQUU7SUFDdkQsT0FBT1YsVUFBVSxDQUFDUyxpQkFBaUIsQ0FBQ0MsUUFBUSxDQUFDO0VBQ2pELENBQUM7RUFDRFIsa0JBQWtCLENBQUNTLHdCQUF3QixHQUFHLFlBQVk7SUFDdEQsT0FBT1gsVUFBVSxDQUFDVyx3QkFBd0IsRUFBRSxLQUFLLENBQUM7RUFDdEQsQ0FBQztFQUNELE9BQU9ULGtCQUFrQjtBQUM3QixDQUFDLENBQUNVLHFDQUFpQixDQUFFO0FBQUMsZ0QiLCJmaWxlIjoiMjM3LmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBiICE9PSBcImZ1bmN0aW9uXCIgJiYgYiAhPT0gbnVsbClcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDbGFzcyBleHRlbmRzIHZhbHVlIFwiICsgU3RyaW5nKGIpICsgXCIgaXMgbm90IGEgY29uc3RydWN0b3Igb3IgbnVsbFwiKTtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbmltcG9ydCB7IFFOTG9jYWxWaWRlb1RyYWNrIH0gZnJvbSAnLi9SVENMb2NhbFZpZGVvVHJhY2snO1xudmFyIFFOUnRjVHJhY2sgPSB1bmkucmVxdWlyZU5hdGl2ZVBsdWdpbignUU5SVEMtVW5pUGx1Z2luLVFOUnRjVHJhY2snKTtcbnZhciBRTlNjcmVlblZpZGVvVHJhY2sgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhRTlNjcmVlblZpZGVvVHJhY2ssIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gUU5TY3JlZW5WaWRlb1RyYWNrKCkge1xuICAgICAgICByZXR1cm4gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gICAgfVxuICAgIFFOU2NyZWVuVmlkZW9UcmFjay5wcm90b3R5cGUuc2V0U2NyZWVuUmVjb3JkZXJGcmFtZVJhdGUgPSBmdW5jdGlvbiAoc2NyZWVuUmVjb3JkZXJGcmFtZVJhdGUpIHtcbiAgICAgICAgcmV0dXJuIFFOUnRjVHJhY2suc2V0U2NyZWVuUmVjb3JkZXJGcmFtZVJhdGUodGhpcy5pZGVudGlmeUlELCBzY3JlZW5SZWNvcmRlckZyYW1lUmF0ZSk7XG4gICAgfTtcbiAgICBRTlNjcmVlblZpZGVvVHJhY2sucmVxdWVzdFBlcm1pc3Npb24gPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICAgICAgcmV0dXJuIFFOUnRjVHJhY2sucmVxdWVzdFBlcm1pc3Npb24oY2FsbGJhY2spO1xuICAgIH07XG4gICAgUU5TY3JlZW5WaWRlb1RyYWNrLmlzU2NyZWVuQ2FwdHVyZVN1cHBvcnRlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIFFOUnRjVHJhY2suaXNTY3JlZW5DYXB0dXJlU3VwcG9ydGVkKCkgPT09IDE7XG4gICAgfTtcbiAgICByZXR1cm4gUU5TY3JlZW5WaWRlb1RyYWNrO1xufShRTkxvY2FsVmlkZW9UcmFjaykpO1xuZXhwb3J0IHsgUU5TY3JlZW5WaWRlb1RyYWNrIH07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///237\n");

/***/ }),

/***/ 238:
/*!*************************************************************************************************************************!*\
  !*** /Users/tongjie/Desktop/QNRTC-Uniapp/demo/js_sdk/QNRTC-UniPlugin-JS/QNRTC-UniPlugin-JS/class/RTCAudioMusicMixer.js ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__webpack_provided_uni_dot_requireNativePlugin) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.QNAudioMusicMixer = void 0;\nvar QNRtcAudioMusicMixer = __webpack_provided_uni_dot_requireNativePlugin('QNRTC-UniPlugin-QNRtcAudioMusicMixer');\nvar QNEvent = __webpack_provided_uni_dot_requireNativePlugin('globalEvent');\nvar QNAudioMusicMixer = function () {\n  function QNAudioMusicMixer() {\n    this.id = \"audioMusicMixer\";\n    this.variationList = ['onStateChanged'];\n    this.eventMap = {\n      onStateChanged: 'onMusicStateChanged',\n      onMixing: 'onMusicMixing',\n      onError: 'onMusicError'\n    };\n  }\n  QNAudioMusicMixer.prototype.createAudioMusicMixerCallback = function (name, listener) {\n    if (name === 'onStateChanged') {\n      var variationCallback = function variationCallback(params) {\n        if (params.state) {\n          listener(params);\n        }\n      };\n      return variationCallback;\n    }\n  };\n  QNAudioMusicMixer.prototype.on = function (name, listener) {\n    if (this.variationList.some(function (item) {\n      return item === name;\n    })) {\n      var callback = this.createAudioMusicMixerCallback(name, listener);\n      QNEvent.addEventListener(this.eventMap[name], callback);\n    } else {\n      QNEvent.addEventListener(this.eventMap[name], listener);\n    }\n  };\n  QNAudioMusicMixer.prototype.off = function (name, listener) {\n    QNEvent.removeEventListener(this.eventMap[name], listener);\n  };\n  QNAudioMusicMixer.prototype.setPublishEnabled = function (enabled) {\n    QNRtcAudioMusicMixer.setPublishEnabled(enabled);\n  };\n  QNAudioMusicMixer.prototype.isPublishEnabled = function () {\n    return QNRtcAudioMusicMixer.isPublishEnabled();\n  };\n  QNAudioMusicMixer.prototype.getDuration = function (filePath) {\n    return QNRtcAudioMusicMixer.getDuration(filePath);\n  };\n  QNAudioMusicMixer.prototype.start = function (loopCount) {\n    if (loopCount === void 0) {\n      loopCount = 1;\n    }\n    QNRtcAudioMusicMixer.start(loopCount);\n  };\n  QNAudioMusicMixer.prototype.stop = function () {\n    QNRtcAudioMusicMixer.stop();\n  };\n  QNAudioMusicMixer.prototype.resume = function () {\n    QNRtcAudioMusicMixer.resume();\n  };\n  QNAudioMusicMixer.prototype.pause = function () {\n    QNRtcAudioMusicMixer.pause();\n  };\n  QNAudioMusicMixer.prototype.getCurrentPosition = function () {\n    return QNRtcAudioMusicMixer.getCurrentPosition();\n  };\n  QNAudioMusicMixer.prototype.seekTo = function (timeUs) {\n    QNRtcAudioMusicMixer.seekTo(timeUs);\n  };\n  QNAudioMusicMixer.prototype.setMusicVolume = function (musicVolume) {\n    QNRtcAudioMusicMixer.setMusicVolume(musicVolume);\n  };\n  QNAudioMusicMixer.prototype.getMusicVolume = function () {\n    return QNRtcAudioMusicMixer.getMusicVolume();\n  };\n  QNAudioMusicMixer.prototype.setStartPosition = function (position) {\n    QNRtcAudioMusicMixer.setStartPosition(position);\n  };\n  QNAudioMusicMixer.prototype.getStartPosition = function () {\n    return QNRtcAudioMusicMixer.getStartPosition();\n  };\n  return QNAudioMusicMixer;\n}();\nexports.QNAudioMusicMixer = QNAudioMusicMixer;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/uni-app-plus-nvue/dist/require-native-plugin.js */ 54)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vanNfc2RrL1FOUlRDLVVuaVBsdWdpbi1KUy9RTlJUQy1VbmlQbHVnaW4tSlMvY2xhc3MvUlRDQXVkaW9NdXNpY01peGVyLmpzIl0sIm5hbWVzIjpbIlFOUnRjQXVkaW9NdXNpY01peGVyIiwidW5pIiwiUU5FdmVudCIsIlFOQXVkaW9NdXNpY01peGVyIiwiaWQiLCJ2YXJpYXRpb25MaXN0IiwiZXZlbnRNYXAiLCJvblN0YXRlQ2hhbmdlZCIsIm9uTWl4aW5nIiwib25FcnJvciIsInByb3RvdHlwZSIsImNyZWF0ZUF1ZGlvTXVzaWNNaXhlckNhbGxiYWNrIiwibmFtZSIsImxpc3RlbmVyIiwidmFyaWF0aW9uQ2FsbGJhY2siLCJwYXJhbXMiLCJzdGF0ZSIsIm9uIiwic29tZSIsIml0ZW0iLCJjYWxsYmFjayIsImFkZEV2ZW50TGlzdGVuZXIiLCJvZmYiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwic2V0UHVibGlzaEVuYWJsZWQiLCJlbmFibGVkIiwiaXNQdWJsaXNoRW5hYmxlZCIsImdldER1cmF0aW9uIiwiZmlsZVBhdGgiLCJzdGFydCIsImxvb3BDb3VudCIsInN0b3AiLCJyZXN1bWUiLCJwYXVzZSIsImdldEN1cnJlbnRQb3NpdGlvbiIsInNlZWtUbyIsInRpbWVVcyIsInNldE11c2ljVm9sdW1lIiwibXVzaWNWb2x1bWUiLCJnZXRNdXNpY1ZvbHVtZSIsInNldFN0YXJ0UG9zaXRpb24iLCJwb3NpdGlvbiIsImdldFN0YXJ0UG9zaXRpb24iXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLElBQUlBLG9CQUFvQixHQUFHQyw4Q0FBdUIsQ0FBQyxzQ0FBc0MsQ0FBQztBQUMxRixJQUFJQyxPQUFPLEdBQUdELDhDQUF1QixDQUFDLGFBQWEsQ0FBQztBQUNwRCxJQUFJRSxpQkFBaUIsR0FBSSxZQUFZO0VBQ2pDLFNBQVNBLGlCQUFpQixHQUFHO0lBQ3pCLElBQUksQ0FBQ0MsRUFBRSxHQUFHLGlCQUFpQjtJQUMzQixJQUFJLENBQUNDLGFBQWEs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WUFBWTtJQUN6RCxPQUFPbEMsb0JBQW9CLENBQUNrQyxrQkFBa0IsRUFBRTtFQUNwRCxDQUFDO0VBQ0QvQixpQkFBaUIsQ0FBQ08sU0FBUyxDQUFDeUIsTUFBTSxHQUFHLFVBQVVDLE1BQU0sRUFBRTtJQUNuRHBDLG9CQUFvQixDQUFDbUMsTUFBTSxDQUFDQyxNQUFNLENBQUM7RUFDdkMsQ0FBQztFQUNEakMsaUJBQWlCLENBQUNPLFNBQVMsQ0FBQzJCLGNBQWMsR0FBRyxVQUFVQyxXQUFXLEVBQUU7SUFDaEV0QyxvQkFBb0IsQ0FBQ3FDLGNBQWMsQ0FBQ0MsV0FBVyxDQUFDO0VBQ3BELENBQUM7RUFDRG5DLGlCQUFpQixDQUFDTyxTQUFTLENBQUM2QixjQUFjLEdBQUcsWUFBWTtJQUNyRCxPQUFPdkMsb0JBQW9CLENBQUN1QyxjQUFjLEVBQUU7RUFDaEQsQ0FBQztFQUNEcEMsaUJBQWlCLENBQUNPLFNBQVMsQ0FBQzhCLGdCQUFnQixHQUFHLFVBQVVDLFFBQVEsRUFBRTtJQUMvRHpDLG9CQUFvQixDQUFDd0MsZ0JBQWdCLENBQUNDLFFBQVEsQ0FBQztFQUNuRCxDQUFDO0VBQ0R0QyxpQkFBaUIsQ0FBQ08sU0FBUyxDQUFDZ0MsZ0JBQWdCLEdBQUcsWUFBWTtJQUN2RCxPQUFPMUMsb0JBQW9CLENBQUMwQyxnQkFBZ0IsRUFBRTtFQUNsRCxDQUFDO0VBQ0QsT0FBT3ZDLGlCQUFpQjtBQUM1QixDQUFDLEVBQUc7QUFBQyw4QyIsImZpbGUiOiIyMzguanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgUU5SdGNBdWRpb011c2ljTWl4ZXIgPSB1bmkucmVxdWlyZU5hdGl2ZVBsdWdpbignUU5SVEMtVW5pUGx1Z2luLVFOUnRjQXVkaW9NdXNpY01peGVyJyk7XG52YXIgUU5FdmVudCA9IHVuaS5yZXF1aXJlTmF0aXZlUGx1Z2luKCdnbG9iYWxFdmVudCcpO1xudmFyIFFOQXVkaW9NdXNpY01peGVyID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBRTkF1ZGlvTXVzaWNNaXhlcigpIHtcbiAgICAgICAgdGhpcy5pZCA9IFwiYXVkaW9NdXNpY01peGVyXCI7XG4gICAgICAgIHRoaXMudmFyaWF0aW9uTGlzdCA9IFsnb25TdGF0ZUNoYW5nZWQnXTtcbiAgICAgICAgdGhpcy5ldmVudE1hcCA9IHtcbiAgICAgICAgICAgIG9uU3RhdGVDaGFuZ2VkOiAnb25NdXNpY1N0YXRlQ2hhbmdlZCcsXG4gICAgICAgICAgICBvbk1peGluZzogJ29uTXVzaWNNaXhpbmcnLFxuICAgICAgICAgICAgb25FcnJvcjogJ29uTXVzaWNFcnJvcidcbiAgICAgICAgfTtcbiAgICB9XG4gICAgUU5BdWRpb011c2ljTWl4ZXIucHJvdG90eXBlLmNyZWF0ZUF1ZGlvTXVzaWNNaXhlckNhbGxiYWNrID0gZnVuY3Rpb24gKG5hbWUsIGxpc3RlbmVyKSB7XG4gICAgICAgIGlmIChuYW1lID09PSAnb25TdGF0ZUNoYW5nZWQnKSB7XG4gICAgICAgICAgICB2YXIgdmFyaWF0aW9uQ2FsbGJhY2sgPSBmdW5jdGlvbiAocGFyYW1zKSB7XG4gICAgICAgICAgICAgICAgaWYgKHBhcmFtcy5zdGF0ZSkge1xuICAgICAgICAgICAgICAgICAgICBsaXN0ZW5lcihwYXJhbXMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICByZXR1cm4gdmFyaWF0aW9uQ2FsbGJhY2s7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFFOQXVkaW9NdXNpY01peGVyLnByb3RvdHlwZS5vbiA9IGZ1bmN0aW9uIChuYW1lLCBsaXN0ZW5lcikge1xuICAgICAgICBpZiAodGhpcy52YXJpYXRpb25MaXN0LnNvbWUoZnVuY3Rpb24gKGl0ZW0pIHsgcmV0dXJuIGl0ZW0gPT09IG5hbWU7IH0pKSB7XG4gICAgICAgICAgICB2YXIgY2FsbGJhY2sgPSB0aGlzLmNyZWF0ZUF1ZGlvTXVzaWNNaXhlckNhbGxiYWNrKG5hbWUsIGxpc3RlbmVyKTtcbiAgICAgICAgICAgIFFORXZlbnQuYWRkRXZlbnRMaXN0ZW5lcih0aGlzLmV2ZW50TWFwW25hbWVdLCBjYWxsYmFjayk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBRTkV2ZW50LmFkZEV2ZW50TGlzdGVuZXIodGhpcy5ldmVudE1hcFtuYW1lXSwgbGlzdGVuZXIpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBRTkF1ZGlvTXVzaWNNaXhlci5wcm90b3R5cGUub2ZmID0gZnVuY3Rpb24gKG5hbWUsIGxpc3RlbmVyKSB7XG4gICAgICAgIFFORXZlbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcih0aGlzLmV2ZW50TWFwW25hbWVdLCBsaXN0ZW5lcik7XG4gICAgfTtcbiAgICBRTkF1ZGlvTXVzaWNNaXhlci5wcm90b3R5cGUuc2V0UHVibGlzaEVuYWJsZWQgPSBmdW5jdGlvbiAoZW5hYmxlZCkge1xuICAgICAgICBRTlJ0Y0F1ZGlvTXVzaWNNaXhlci5zZXRQdWJsaXNoRW5hYmxlZChlbmFibGVkKTtcbiAgICB9O1xuICAgIFFOQXVkaW9NdXNpY01peGVyLnByb3RvdHlwZS5pc1B1Ymxpc2hFbmFibGVkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gUU5SdGNBdWRpb011c2ljTWl4ZXIuaXNQdWJsaXNoRW5hYmxlZCgpO1xuICAgIH07XG4gICAgUU5BdWRpb011c2ljTWl4ZXIucHJvdG90eXBlLmdldER1cmF0aW9uID0gZnVuY3Rpb24gKGZpbGVQYXRoKSB7XG4gICAgICAgIHJldHVybiBRTlJ0Y0F1ZGlvTXVzaWNNaXhlci5nZXREdXJhdGlvbihmaWxlUGF0aCk7XG4gICAgfTtcbiAgICBRTkF1ZGlvTXVzaWNNaXhlci5wcm90b3R5cGUuc3RhcnQgPSBmdW5jdGlvbiAobG9vcENvdW50KSB7XG4gICAgICAgIGlmIChsb29wQ291bnQgPT09IHZvaWQgMCkgeyBsb29wQ291bnQgPSAxOyB9XG4gICAgICAgIFFOUnRjQXVkaW9NdXNpY01peGVyLnN0YXJ0KGxvb3BDb3VudCk7XG4gICAgfTtcbiAgICBRTkF1ZGlvTXVzaWNNaXhlci5wcm90b3R5cGUuc3RvcCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgUU5SdGNBdWRpb011c2ljTWl4ZXIuc3RvcCgpO1xuICAgIH07XG4gICAgUU5BdWRpb011c2ljTWl4ZXIucHJvdG90eXBlLnJlc3VtZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgUU5SdGNBdWRpb011c2ljTWl4ZXIucmVzdW1lKCk7XG4gICAgfTtcbiAgICBRTkF1ZGlvTXVzaWNNaXhlci5wcm90b3R5cGUucGF1c2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIFFOUnRjQXVkaW9NdXNpY01peGVyLnBhdXNlKCk7XG4gICAgfTtcbiAgICBRTkF1ZGlvTXVzaWNNaXhlci5wcm90b3R5cGUuZ2V0Q3VycmVudFBvc2l0aW9uID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gUU5SdGNBdWRpb011c2ljTWl4ZXIuZ2V0Q3VycmVudFBvc2l0aW9uKCk7XG4gICAgfTtcbiAgICBRTkF1ZGlvTXVzaWNNaXhlci5wcm90b3R5cGUuc2Vla1RvID0gZnVuY3Rpb24gKHRpbWVVcykge1xuICAgICAgICBRTlJ0Y0F1ZGlvTXVzaWNNaXhlci5zZWVrVG8odGltZVVzKTtcbiAgICB9O1xuICAgIFFOQXVkaW9NdXNpY01peGVyLnByb3RvdHlwZS5zZXRNdXNpY1ZvbHVtZSA9IGZ1bmN0aW9uIChtdXNpY1ZvbHVtZSkge1xuICAgICAgICBRTlJ0Y0F1ZGlvTXVzaWNNaXhlci5zZXRNdXNpY1ZvbHVtZShtdXNpY1ZvbHVtZSk7XG4gICAgfTtcbiAgICBRTkF1ZGlvTXVzaWNNaXhlci5wcm90b3R5cGUuZ2V0TXVzaWNWb2x1bWUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBRTlJ0Y0F1ZGlvTXVzaWNNaXhlci5nZXRNdXNpY1ZvbHVtZSgpO1xuICAgIH07XG4gICAgUU5BdWRpb011c2ljTWl4ZXIucHJvdG90eXBlLnNldFN0YXJ0UG9zaXRpb24gPSBmdW5jdGlvbiAocG9zaXRpb24pIHtcbiAgICAgICAgUU5SdGNBdWRpb011c2ljTWl4ZXIuc2V0U3RhcnRQb3NpdGlvbihwb3NpdGlvbik7XG4gICAgfTtcbiAgICBRTkF1ZGlvTXVzaWNNaXhlci5wcm90b3R5cGUuZ2V0U3RhcnRQb3NpdGlvbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIFFOUnRjQXVkaW9NdXNpY01peGVyLmdldFN0YXJ0UG9zaXRpb24oKTtcbiAgICB9O1xuICAgIHJldHVybiBRTkF1ZGlvTXVzaWNNaXhlcjtcbn0oKSk7XG5leHBvcnQgeyBRTkF1ZGlvTXVzaWNNaXhlciB9O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///238\n");

/***/ }),

/***/ 239:
/*!**************************************************************************************************************************!*\
  !*** /Users/tongjie/Desktop/QNRTC-Uniapp/demo/js_sdk/QNRTC-UniPlugin-JS/QNRTC-UniPlugin-JS/class/RTCAudioEffectMixer.js ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__webpack_provided_uni_dot_requireNativePlugin) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.QNAudioEffectMixer = void 0;\nvar _RTCAudioEffect = __webpack_require__(/*! ./RTCAudioEffect */ 240);\nvar QNRtcAudioEffectMixer = __webpack_provided_uni_dot_requireNativePlugin('QNRTC-UniPlugin-QNRtcAudioEffectMixer');\nvar QNEvent = __webpack_provided_uni_dot_requireNativePlugin('globalEvent');\nvar QNAudioEffectMixer = function () {\n  function QNAudioEffectMixer() {\n    this.id = \"audioEffectMixer\";\n    this.eventMap = {\n      onEffectFinished: 'onEffectFinished',\n      onEffectError: 'onEffectEffectError',\n      onError: 'onEffectError'\n    };\n  }\n  QNAudioEffectMixer.prototype.on = function (name, listener) {\n    QNEvent.addEventListener(this.eventMap[name], listener);\n  };\n  QNAudioEffectMixer.prototype.off = function (name, listener) {\n    QNEvent.removeEventListener(name, listener);\n  };\n  QNAudioEffectMixer.prototype.createAudioEffect = function (effectID, filePath) {\n    QNRtcAudioEffectMixer.createAudioEffect(effectID, filePath);\n    return new _RTCAudioEffect.QNAudioEffect(effectID, filePath);\n  };\n  QNAudioEffectMixer.prototype.start = function (effectID) {\n    QNRtcAudioEffectMixer.start(effectID);\n  };\n  QNAudioEffectMixer.prototype.setPublishEnabled = function (effectID, enabled) {\n    QNRtcAudioEffectMixer.setPublishEnabled(effectID, enabled);\n  };\n  QNAudioEffectMixer.prototype.isPublishEnabled = function (effectID) {\n    return QNRtcAudioEffectMixer.isPublishEnabled(effectID);\n  };\n  QNAudioEffectMixer.prototype.stop = function (effectID) {\n    QNRtcAudioEffectMixer.stop(effectID);\n  };\n  QNAudioEffectMixer.prototype.resume = function (effectID) {\n    QNRtcAudioEffectMixer.resume(effectID);\n  };\n  QNAudioEffectMixer.prototype.pause = function (effectID) {\n    QNRtcAudioEffectMixer.pause(effectID);\n  };\n  QNAudioEffectMixer.prototype.stopAll = function () {\n    QNRtcAudioEffectMixer.stopAll();\n  };\n  QNAudioEffectMixer.prototype.pauseAll = function () {\n    QNRtcAudioEffectMixer.pauseAll();\n  };\n  QNAudioEffectMixer.prototype.resumeAll = function () {\n    QNRtcAudioEffectMixer.resumeAll();\n  };\n  QNAudioEffectMixer.prototype.getCurrentPosition = function (effectID) {\n    return QNRtcAudioEffectMixer.getCurrentPosition(effectID);\n  };\n  QNAudioEffectMixer.prototype.setVolume = function (effectID, volume) {\n    QNRtcAudioEffectMixer.setVolume(effectID, volume);\n  };\n  QNAudioEffectMixer.prototype.getVolume = function (effectID) {\n    return QNRtcAudioEffectMixer.getVolume(effectID);\n  };\n  QNAudioEffectMixer.prototype.setAllEffectsVolume = function (volume) {\n    QNRtcAudioEffectMixer.setAllEffectsVolume(volume);\n  };\n  return QNAudioEffectMixer;\n}();\nexports.QNAudioEffectMixer = QNAudioEffectMixer;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/uni-app-plus-nvue/dist/require-native-plugin.js */ 54)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vanNfc2RrL1FOUlRDLVVuaVBsdWdpbi1KUy9RTlJUQy1VbmlQbHVnaW4tSlMvY2xhc3MvUlRDQXVkaW9FZmZlY3RNaXhlci5qcyJdLCJuYW1lcyI6WyJRTlJ0Y0F1ZGlvRWZmZWN0TWl4ZXIiLCJ1bmkiLCJRTkV2ZW50IiwiUU5BdWRpb0VmZmVjdE1peGVyIiwiaWQiLCJldmVudE1hcCIsIm9uRWZmZWN0RmluaXNoZWQiLCJvbkVmZmVjdEVycm9yIiwib25FcnJvciIsInByb3RvdHlwZSIsIm9uIiwibmFtZSIsImxpc3RlbmVyIiwiYWRkRXZlbnRMaXN0ZW5lciIsIm9mZiIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJjcmVhdGVBdWRpb0VmZmVjdCIsImVmZmVjdElEIiwiZmlsZVBhdGgiLCJRTkF1ZGlvRWZmZWN0Iiwic3RhcnQiLCJzZXRQdWJsaXNoRW5hYmxlZCIsImVuYWJsZWQiLCJpc1B1Ymxpc2hFbmFibGVkIiwic3RvcCIsInJlc3VtZSIsInBhdXNlIiwic3RvcEFsbCIsInBhdXNlQWxsIiwicmVzdW1lQWxsIiwiZ2V0Q3VycmVudFBvc2l0aW9uIiwic2V0Vm9sdW1lIiwidm9sdW1lIiwiZ2V0Vm9sdW1lIiwic2V0QWxsRWZmZWN0c1ZvbHVtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFDQSxJQUFJQSxxQkFBcUIsR0FBR0MsOENBQXVCLENBQUMsdUNBQXVDLENBQUM7QUFDNUYsSUFBSUMsT0FBTyxHQUFHRCw4Q0FBdUIsQ0FBQyxhQUFhLENBQUM7QUFDcEQsSUFBSUUsa0JBQWtCLEdBQUksWUFBWTtFQUNsQyxTQUFTQSxrQkFBa0IsR0FBRztJQUMxQixJQUFJLENBQUNDLEVBQUUsR0FBRyxrQkFBa0I7SUFDNUIsSUFBSSxDQUFDQyxRQUFRLEdBQUc7TUFDWkMsZ0JBQWdCLEVBQUUsa0JBQWtCO01BQ3BDQyxhQUFhLEVBQUUscUJBQXFCO01BQ3BDQyxPQUFPLEVBQUU7SUFDYixDQUFDO0VBQ0w7RUFDQUwsa0JBQWtCLENB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RGQsa0JBQWtCLENBQUNNLFNBQVMsQ0FBQ3lCLG1CQUFtQixHQUFHLFVBQVVGLE1BQU0sRUFBRTtJQUNqRWhDLHFCQUFxQixDQUFDa0MsbUJBQW1CLENBQUNGLE1BQU0sQ0FBQztFQUNyRCxDQUFDO0VBQ0QsT0FBTzdCLGtCQUFrQjtBQUM3QixDQUFDLEVBQUc7QUFBQyxnRCIsImZpbGUiOiIyMzkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBRTkF1ZGlvRWZmZWN0IH0gZnJvbSAnLi9SVENBdWRpb0VmZmVjdCc7XG52YXIgUU5SdGNBdWRpb0VmZmVjdE1peGVyID0gdW5pLnJlcXVpcmVOYXRpdmVQbHVnaW4oJ1FOUlRDLVVuaVBsdWdpbi1RTlJ0Y0F1ZGlvRWZmZWN0TWl4ZXInKTtcbnZhciBRTkV2ZW50ID0gdW5pLnJlcXVpcmVOYXRpdmVQbHVnaW4oJ2dsb2JhbEV2ZW50Jyk7XG52YXIgUU5BdWRpb0VmZmVjdE1peGVyID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBRTkF1ZGlvRWZmZWN0TWl4ZXIoKSB7XG4gICAgICAgIHRoaXMuaWQgPSBcImF1ZGlvRWZmZWN0TWl4ZXJcIjtcbiAgICAgICAgdGhpcy5ldmVudE1hcCA9IHtcbiAgICAgICAgICAgIG9uRWZmZWN0RmluaXNoZWQ6ICdvbkVmZmVjdEZpbmlzaGVkJyxcbiAgICAgICAgICAgIG9uRWZmZWN0RXJyb3I6ICdvbkVmZmVjdEVmZmVjdEVycm9yJyxcbiAgICAgICAgICAgIG9uRXJyb3I6ICdvbkVmZmVjdEVycm9yJ1xuICAgICAgICB9O1xuICAgIH1cbiAgICBRTkF1ZGlvRWZmZWN0TWl4ZXIucHJvdG90eXBlLm9uID0gZnVuY3Rpb24gKG5hbWUsIGxpc3RlbmVyKSB7XG4gICAgICAgIFFORXZlbnQuYWRkRXZlbnRMaXN0ZW5lcih0aGlzLmV2ZW50TWFwW25hbWVdLCBsaXN0ZW5lcik7XG4gICAgfTtcbiAgICBRTkF1ZGlvRWZmZWN0TWl4ZXIucHJvdG90eXBlLm9mZiA9IGZ1bmN0aW9uIChuYW1lLCBsaXN0ZW5lcikge1xuICAgICAgICBRTkV2ZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIobmFtZSwgbGlzdGVuZXIpO1xuICAgIH07XG4gICAgUU5BdWRpb0VmZmVjdE1peGVyLnByb3RvdHlwZS5jcmVhdGVBdWRpb0VmZmVjdCA9IGZ1bmN0aW9uIChlZmZlY3RJRCwgZmlsZVBhdGgpIHtcbiAgICAgICAgUU5SdGNBdWRpb0VmZmVjdE1peGVyLmNyZWF0ZUF1ZGlvRWZmZWN0KGVmZmVjdElELCBmaWxlUGF0aCk7XG4gICAgICAgIHJldHVybiBuZXcgUU5BdWRpb0VmZmVjdChlZmZlY3RJRCwgZmlsZVBhdGgpO1xuICAgIH07XG4gICAgUU5BdWRpb0VmZmVjdE1peGVyLnByb3RvdHlwZS5zdGFydCA9IGZ1bmN0aW9uIChlZmZlY3RJRCkge1xuICAgICAgICBRTlJ0Y0F1ZGlvRWZmZWN0TWl4ZXIuc3RhcnQoZWZmZWN0SUQpO1xuICAgIH07XG4gICAgUU5BdWRpb0VmZmVjdE1peGVyLnByb3RvdHlwZS5zZXRQdWJsaXNoRW5hYmxlZCA9IGZ1bmN0aW9uIChlZmZlY3RJRCwgZW5hYmxlZCkge1xuICAgICAgICBRTlJ0Y0F1ZGlvRWZmZWN0TWl4ZXIuc2V0UHVibGlzaEVuYWJsZWQoZWZmZWN0SUQsIGVuYWJsZWQpO1xuICAgIH07XG4gICAgUU5BdWRpb0VmZmVjdE1peGVyLnByb3RvdHlwZS5pc1B1Ymxpc2hFbmFibGVkID0gZnVuY3Rpb24gKGVmZmVjdElEKSB7XG4gICAgICAgIHJldHVybiBRTlJ0Y0F1ZGlvRWZmZWN0TWl4ZXIuaXNQdWJsaXNoRW5hYmxlZChlZmZlY3RJRCk7XG4gICAgfTtcbiAgICBRTkF1ZGlvRWZmZWN0TWl4ZXIucHJvdG90eXBlLnN0b3AgPSBmdW5jdGlvbiAoZWZmZWN0SUQpIHtcbiAgICAgICAgUU5SdGNBdWRpb0VmZmVjdE1peGVyLnN0b3AoZWZmZWN0SUQpO1xuICAgIH07XG4gICAgUU5BdWRpb0VmZmVjdE1peGVyLnByb3RvdHlwZS5yZXN1bWUgPSBmdW5jdGlvbiAoZWZmZWN0SUQpIHtcbiAgICAgICAgUU5SdGNBdWRpb0VmZmVjdE1peGVyLnJlc3VtZShlZmZlY3RJRCk7XG4gICAgfTtcbiAgICBRTkF1ZGlvRWZmZWN0TWl4ZXIucHJvdG90eXBlLnBhdXNlID0gZnVuY3Rpb24gKGVmZmVjdElEKSB7XG4gICAgICAgIFFOUnRjQXVkaW9FZmZlY3RNaXhlci5wYXVzZShlZmZlY3RJRCk7XG4gICAgfTtcbiAgICBRTkF1ZGlvRWZmZWN0TWl4ZXIucHJvdG90eXBlLnN0b3BBbGwgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIFFOUnRjQXVkaW9FZmZlY3RNaXhlci5zdG9wQWxsKCk7XG4gICAgfTtcbiAgICBRTkF1ZGlvRWZmZWN0TWl4ZXIucHJvdG90eXBlLnBhdXNlQWxsID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBRTlJ0Y0F1ZGlvRWZmZWN0TWl4ZXIucGF1c2VBbGwoKTtcbiAgICB9O1xuICAgIFFOQXVkaW9FZmZlY3RNaXhlci5wcm90b3R5cGUucmVzdW1lQWxsID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBRTlJ0Y0F1ZGlvRWZmZWN0TWl4ZXIucmVzdW1lQWxsKCk7XG4gICAgfTtcbiAgICBRTkF1ZGlvRWZmZWN0TWl4ZXIucHJvdG90eXBlLmdldEN1cnJlbnRQb3NpdGlvbiA9IGZ1bmN0aW9uIChlZmZlY3RJRCkge1xuICAgICAgICByZXR1cm4gUU5SdGNBdWRpb0VmZmVjdE1peGVyLmdldEN1cnJlbnRQb3NpdGlvbihlZmZlY3RJRCk7XG4gICAgfTtcbiAgICBRTkF1ZGlvRWZmZWN0TWl4ZXIucHJvdG90eXBlLnNldFZvbHVtZSA9IGZ1bmN0aW9uIChlZmZlY3RJRCwgdm9sdW1lKSB7XG4gICAgICAgIFFOUnRjQXVkaW9FZmZlY3RNaXhlci5zZXRWb2x1bWUoZWZmZWN0SUQsIHZvbHVtZSk7XG4gICAgfTtcbiAgICBRTkF1ZGlvRWZmZWN0TWl4ZXIucHJvdG90eXBlLmdldFZvbHVtZSA9IGZ1bmN0aW9uIChlZmZlY3RJRCkge1xuICAgICAgICByZXR1cm4gUU5SdGNBdWRpb0VmZmVjdE1peGVyLmdldFZvbHVtZShlZmZlY3RJRCk7XG4gICAgfTtcbiAgICBRTkF1ZGlvRWZmZWN0TWl4ZXIucHJvdG90eXBlLnNldEFsbEVmZmVjdHNWb2x1bWUgPSBmdW5jdGlvbiAodm9sdW1lKSB7XG4gICAgICAgIFFOUnRjQXVkaW9FZmZlY3RNaXhlci5zZXRBbGxFZmZlY3RzVm9sdW1lKHZvbHVtZSk7XG4gICAgfTtcbiAgICByZXR1cm4gUU5BdWRpb0VmZmVjdE1peGVyO1xufSgpKTtcbmV4cG9ydCB7IFFOQXVkaW9FZmZlY3RNaXhlciB9O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///239\n");

/***/ }),

/***/ 240:
/*!*********************************************************************************************************************!*\
  !*** /Users/tongjie/Desktop/QNRTC-Uniapp/demo/js_sdk/QNRTC-UniPlugin-JS/QNRTC-UniPlugin-JS/class/RTCAudioEffect.js ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__webpack_provided_uni_dot_requireNativePlugin) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.QNAudioEffect = void 0;\nvar QNRtcAudioEffect = __webpack_provided_uni_dot_requireNativePlugin('QNRTC-UniPlugin-QNRtcAudioEffect');\nvar QNAudioEffect = function () {\n  function QNAudioEffect(effectID, filePath) {\n    this.effectID = effectID;\n    this.filePath = filePath;\n  }\n  QNAudioEffect.getDuration = function (filePath) {\n    return QNRtcAudioEffect.getDuration(filePath);\n  };\n  QNAudioEffect.prototype.getID = function () {\n    return QNRtcAudioEffect.getID(this.effectID);\n  };\n  QNAudioEffect.prototype.getFilePath = function () {\n    return QNRtcAudioEffect.getFilePath(this.effectID);\n  };\n  QNAudioEffect.prototype.setStartPosition = function (position) {\n    QNRtcAudioEffect.setStartPosition(this.effectID, position);\n  };\n  QNAudioEffect.prototype.getStartPosition = function () {\n    return QNRtcAudioEffect.getStartPosition(this.effectID);\n  };\n  QNAudioEffect.prototype.setLoopCount = function (loopCount) {\n    QNRtcAudioEffect.setLoopCount(this.effectID, loopCount);\n  };\n  QNAudioEffect.prototype.getLoopCount = function () {\n    return QNRtcAudioEffect.getLoopCount(this.effectID);\n  };\n  return QNAudioEffect;\n}();\nexports.QNAudioEffect = QNAudioEffect;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/uni-app-plus-nvue/dist/require-native-plugin.js */ 54)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vanNfc2RrL1FOUlRDLVVuaVBsdWdpbi1KUy9RTlJUQy1VbmlQbHVnaW4tSlMvY2xhc3MvUlRDQXVkaW9FZmZlY3QuanMiXSwibmFtZXMiOlsiUU5SdGNBdWRpb0VmZmVjdCIsInVuaSIsIlFOQXVkaW9FZmZlY3QiLCJlZmZlY3RJRCIsImZpbGVQYXRoIiwiZ2V0RHVyYXRpb24iLCJwcm90b3R5cGUiLCJnZXRJRCIsImdldEZpbGVQYXRoIiwic2V0U3RhcnRQb3NpdGlvbiIsInBvc2l0aW9uIiwiZ2V0U3RhcnRQb3NpdGlvbiIsInNldExvb3BDb3VudCIsImxvb3BDb3VudCIsImdldExvb3BDb3VudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsSUFBSUEsZ0JBQWdCLEdBQUdDLDhDQUF1QixDQUFDLGtDQUFrQyxDQUFDO0FBQ2xGLElBQUlDLGFBQWEsR0FBSSxZQUFZO0VBQzdCLFNBQVNBLGFBQWEsQ0FBQ0MsUUFBUSxFQUFFQyxRQUFRLEVBQUU7SUFDdkMsSUFBSSxDQUFDRCxRQUFRLEdBQUdBLFFBQVE7SUFDeEIsSUFBSSxDQUFDQyxRQUFRLEdBQUdBLFFBQVE7RUFDNUI7RUFDQUYsYUFBYSxDQUFDRyxXQUFXLEdBQUcsVUFBVUQsUUFBUSxFQUFFO0lBQzVDLE9BQU9KLGdCQUFnQixDQUFDSyxXQUFXLENBQUNELFFBQVEsQ0FBQztFQUNqRCxDQUFDO0VBQ0RGLGFBQWEsQ0FBQ0ksU0FBUyxDQUFDQyxLQUFLLEdBQUcsWUFBWTtJQUN4QyxPQUFPUCxnQkFBZ0IsQ0FBQ08sS0FBSyxDQUFDLElBQUksQ0FBQ0osUUFBUSxDQUFDO0VBQ2hELENBQUM7RUFDREQsYUFBYSxDQUFDSSxTQUFTLENBQUNFLFdBQVcsR0FBRyxZQUFZO0lBQzlDLE9BQU9SLGdCQUFnQixDQUFDUSxXQUFXLENBQUMsSUFBSSxDQUFDTCxRQUFRLENBQUM7RUFDdEQsQ0FBQztFQUNERCxhQUFhLENBQUNJLFNBQVMsQ0FBQ0csZ0JBQWdCLEdBQUcsVUFBVUMsUUFBUSxFQUFFO0lBQzNEVixnQkFBZ0IsQ0FBQ1MsZ0JBQWdCLENBQUMsSUFBSSxDQUFDTixRQUFRLEVBQUVPLFFBQVEsQ0FBQztFQUM5RCxDQUFDO0VBQ0RSLGFBQWEsQ0FBQ0ksU0FBUyxDQUFDSyxnQkFBZ0IsR0FBRyxZQUFZO0lBQ25ELE9BQU9YLGdCQUFnQixDQUFDVyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUNSLFFBQVEsQ0FBQztFQUMzRCxDQUFDO0VBQ0RELGFBQWEsQ0FBQ0ksU0FBUyxDQUFDTSxZQUFZLEdBQUcsVUFBVUMsU0FBUyxFQUFFO0lBQ3hEYixnQkFBZ0IsQ0FBQ1ksWUFBWSxDQUFDLElBQUksQ0FBQ1QsUUFBUSxFQUFFVSxTQUFTLENBQUM7RUFDM0QsQ0FBQztFQUNEWCxhQUFhLENBQUNJLFNBQVMsQ0FBQ1EsWUFBWSxHQUFHLFlBQVk7SUFDL0MsT0FBT2QsZ0JBQWdCLENBQUNjLFlBQVksQ0FBQyxJQUFJLENBQUNYLFFBQVEsQ0FBQztFQUN2RCxDQUFDO0VBQ0QsT0FBT0QsYUFBYTtBQUN4QixDQUFDLEVBQUc7QUFBQyxzQyIsImZpbGUiOiIyNDAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgUU5SdGNBdWRpb0VmZmVjdCA9IHVuaS5yZXF1aXJlTmF0aXZlUGx1Z2luKCdRTlJUQy1VbmlQbHVnaW4tUU5SdGNBdWRpb0VmZmVjdCcpO1xudmFyIFFOQXVkaW9FZmZlY3QgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFFOQXVkaW9FZmZlY3QoZWZmZWN0SUQsIGZpbGVQYXRoKSB7XG4gICAgICAgIHRoaXMuZWZmZWN0SUQgPSBlZmZlY3RJRDtcbiAgICAgICAgdGhpcy5maWxlUGF0aCA9IGZpbGVQYXRoO1xuICAgIH1cbiAgICBRTkF1ZGlvRWZmZWN0LmdldER1cmF0aW9uID0gZnVuY3Rpb24gKGZpbGVQYXRoKSB7XG4gICAgICAgIHJldHVybiBRTlJ0Y0F1ZGlvRWZmZWN0LmdldER1cmF0aW9uKGZpbGVQYXRoKTtcbiAgICB9O1xuICAgIFFOQXVkaW9FZmZlY3QucHJvdG90eXBlLmdldElEID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gUU5SdGNBdWRpb0VmZmVjdC5nZXRJRCh0aGlzLmVmZmVjdElEKTtcbiAgICB9O1xuICAgIFFOQXVkaW9FZmZlY3QucHJvdG90eXBlLmdldEZpbGVQYXRoID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gUU5SdGNBdWRpb0VmZmVjdC5nZXRGaWxlUGF0aCh0aGlzLmVmZmVjdElEKTtcbiAgICB9O1xuICAgIFFOQXVkaW9FZmZlY3QucHJvdG90eXBlLnNldFN0YXJ0UG9zaXRpb24gPSBmdW5jdGlvbiAocG9zaXRpb24pIHtcbiAgICAgICAgUU5SdGNBdWRpb0VmZmVjdC5zZXRTdGFydFBvc2l0aW9uKHRoaXMuZWZmZWN0SUQsIHBvc2l0aW9uKTtcbiAgICB9O1xuICAgIFFOQXVkaW9FZmZlY3QucHJvdG90eXBlLmdldFN0YXJ0UG9zaXRpb24gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBRTlJ0Y0F1ZGlvRWZmZWN0LmdldFN0YXJ0UG9zaXRpb24odGhpcy5lZmZlY3RJRCk7XG4gICAgfTtcbiAgICBRTkF1ZGlvRWZmZWN0LnByb3RvdHlwZS5zZXRMb29wQ291bnQgPSBmdW5jdGlvbiAobG9vcENvdW50KSB7XG4gICAgICAgIFFOUnRjQXVkaW9FZmZlY3Quc2V0TG9vcENvdW50KHRoaXMuZWZmZWN0SUQsIGxvb3BDb3VudCk7XG4gICAgfTtcbiAgICBRTkF1ZGlvRWZmZWN0LnByb3RvdHlwZS5nZXRMb29wQ291bnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBRTlJ0Y0F1ZGlvRWZmZWN0LmdldExvb3BDb3VudCh0aGlzLmVmZmVjdElEKTtcbiAgICB9O1xuICAgIHJldHVybiBRTkF1ZGlvRWZmZWN0O1xufSgpKTtcbmV4cG9ydCB7IFFOQXVkaW9FZmZlY3QgfTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///240\n");

/***/ }),

/***/ 241:
/*!***************************************************************************************************************!*\
  !*** /Users/tongjie/Desktop/QNRTC-Uniapp/demo/js_sdk/QNRTC-UniPlugin-JS/QNRTC-UniPlugin-JS/event/RTCEvent.js ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIyNDEuanMiLCJzb3VyY2VzQ29udGVudCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///241\n");

/***/ }),

/***/ 3:
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--11-oneOf-0-1!./node_modules/postcss-loader/src??ref--11-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--11-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--11-oneOf-0-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!/Users/tongjie/Desktop/QNRTC-Uniapp/demo/App.vue?vue&type=style&index=0&lang=scss ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  ".u-line-1": {
    "": {
      "lines": [
        1,
        0,
        0,
        16
      ],
      "textOverflow": [
        "ellipsis",
        0,
        0,
        16
      ],
      "overflow": [
        "hidden",
        0,
        0,
        16
      ],
      "flex": [
        1,
        0,
        0,
        16
      ]
    }
  },
  ".u-line-2": {
    "": {
      "lines": [
        2,
        0,
        0,
        17
      ],
      "textOverflow": [
        "ellipsis",
        0,
        0,
        17
      ],
      "overflow": [
        "hidden",
        0,
        0,
        17
      ],
      "flex": [
        1,
        0,
        0,
        17
      ]
    }
  },
  ".u-line-3": {
    "": {
      "lines": [
        3,
        0,
        0,
        18
      ],
      "textOverflow": [
        "ellipsis",
        0,
        0,
        18
      ],
      "overflow": [
        "hidden",
        0,
        0,
        18
      ],
      "flex": [
        1,
        0,
        0,
        18
      ]
    }
  },
  ".u-line-4": {
    "": {
      "lines": [
        4,
        0,
        0,
        19
      ],
      "textOverflow": [
        "ellipsis",
        0,
        0,
        19
      ],
      "overflow": [
        "hidden",
        0,
        0,
        19
      ],
      "flex": [
        1,
        0,
        0,
        19
      ]
    }
  },
  ".u-line-5": {
    "": {
      "lines": [
        5,
        0,
        0,
        20
      ],
      "textOverflow": [
        "ellipsis",
        0,
        0,
        20
      ],
      "overflow": [
        "hidden",
        0,
        0,
        20
      ],
      "flex": [
        1,
        0,
        0,
        20
      ]
    }
  },
  ".u-border": {
    "": {
      "borderWidth": [
        "0.5",
        1,
        0,
        21
      ],
      "borderColor": [
        "#dadbde",
        1,
        0,
        21
      ],
      "borderStyle": [
        "solid",
        0,
        0,
        21
      ]
    }
  },
  ".u-border-top": {
    "": {
      "borderTopWidth": [
        "0.5",
        1,
        0,
        22
      ],
      "borderColor": [
        "#dadbde",
        1,
        0,
        22
      ],
      "borderTopStyle": [
        "solid",
        0,
        0,
        22
      ]
    }
  },
  ".u-border-left": {
    "": {
      "borderLeftWidth": [
        "0.5",
        1,
        0,
        23
      ],
      "borderColor": [
        "#dadbde",
        1,
        0,
        23
      ],
      "borderLeftStyle": [
        "solid",
        0,
        0,
        23
      ]
    }
  },
  ".u-border-right": {
    "": {
      "borderRightWidth": [
        "0.5",
        1,
        0,
        24
      ],
      "borderColor": [
        "#dadbde",
        1,
        0,
        24
      ],
      "borderRightStyle": [
        "solid",
        0,
        0,
        24
      ]
    }
  },
  ".u-border-bottom": {
    "": {
      "borderBottomWidth": [
        "0.5",
        1,
        0,
        25
      ],
      "borderColor": [
        "#dadbde",
        1,
        0,
        25
      ],
      "borderBottomStyle": [
        "solid",
        0,
        0,
        25
      ]
    }
  },
  ".u-border-top-bottom": {
    "": {
      "borderTopWidth": [
        "0.5",
        1,
        0,
        26
      ],
      "borderBottomWidth": [
        "0.5",
        1,
        0,
        26
      ],
      "borderColor": [
        "#dadbde",
        1,
        0,
        26
      ],
      "borderTopStyle": [
        "solid",
        0,
        0,
        26
      ],
      "borderBottomStyle": [
        "solid",
        0,
        0,
        26
      ]
    }
  },
  ".u-reset-button": {
    "": {
      "paddingTop": [
        0,
        0,
        0,
        27
      ],
      "paddingRight": [
        0,
        0,
        0,
        27
      ],
      "paddingBottom": [
        0,
        0,
        0,
        27
      ],
      "paddingLeft": [
        0,
        0,
        0,
        27
      ],
      "backgroundColor": [
        "rgba(0,0,0,0)",
        0,
        0,
        27
      ],
      "borderWidth": [
        0,
        0,
        0,
        27
      ]
    }
  },
  ".u-hover-class": {
    "": {
      "opacity": [
        0.7,
        0,
        0,
        28
      ]
    }
  },
  ".u-primary-light": {
    "": {
      "color": [
        "#ecf5ff",
        0,
        0,
        29
      ]
    }
  },
  ".u-warning-light": {
    "": {
      "color": [
        "#fdf6ec",
        0,
        0,
        30
      ]
    }
  },
  ".u-success-light": {
    "": {
      "color": [
        "#f5fff0",
        0,
        0,
        31
      ]
    }
  },
  ".u-error-light": {
    "": {
      "color": [
        "#fef0f0",
        0,
        0,
        32
      ]
    }
  },
  ".u-info-light": {
    "": {
      "color": [
        "#f4f4f5",
        0,
        0,
        33
      ]
    }
  },
  ".u-primary-light-bg": {
    "": {
      "backgroundColor": [
        "#ecf5ff",
        0,
        0,
        34
      ]
    }
  },
  ".u-warning-light-bg": {
    "": {
      "backgroundColor": [
        "#fdf6ec",
        0,
        0,
        35
      ]
    }
  },
  ".u-success-light-bg": {
    "": {
      "backgroundColor": [
        "#f5fff0",
        0,
        0,
        36
      ]
    }
  },
  ".u-error-light-bg": {
    "": {
      "backgroundColor": [
        "#fef0f0",
        0,
        0,
        37
      ]
    }
  },
  ".u-info-light-bg": {
    "": {
      "backgroundColor": [
        "#f4f4f5",
        0,
        0,
        38
      ]
    }
  },
  ".u-primary-dark": {
    "": {
      "color": [
        "#398ade",
        0,
        0,
        39
      ]
    }
  },
  ".u-warning-dark": {
    "": {
      "color": [
        "#f1a532",
        0,
        0,
        40
      ]
    }
  },
  ".u-success-dark": {
    "": {
      "color": [
        "#53c21d",
        0,
        0,
        41
      ]
    }
  },
  ".u-error-dark": {
    "": {
      "color": [
        "#e45656",
        0,
        0,
        42
      ]
    }
  },
  ".u-info-dark": {
    "": {
      "color": [
        "#767a82",
        0,
        0,
        43
      ]
    }
  },
  ".u-primary-dark-bg": {
    "": {
      "backgroundColor": [
        "#398ade",
        0,
        0,
        44
      ]
    }
  },
  ".u-warning-dark-bg": {
    "": {
      "backgroundColor": [
        "#f1a532",
        0,
        0,
        45
      ]
    }
  },
  ".u-success-dark-bg": {
    "": {
      "backgroundColor": [
        "#53c21d",
        0,
        0,
        46
      ]
    }
  },
  ".u-error-dark-bg": {
    "": {
      "backgroundColor": [
        "#e45656",
        0,
        0,
        47
      ]
    }
  },
  ".u-info-dark-bg": {
    "": {
      "backgroundColor": [
        "#767a82",
        0,
        0,
        48
      ]
    }
  },
  ".u-primary-disabled": {
    "": {
      "color": [
        "#9acafc",
        0,
        0,
        49
      ]
    }
  },
  ".u-warning-disabled": {
    "": {
      "color": [
        "#f9d39b",
        0,
        0,
        50
      ]
    }
  },
  ".u-success-disabled": {
    "": {
      "color": [
        "#a9e08f",
        0,
        0,
        51
      ]
    }
  },
  ".u-error-disabled": {
    "": {
      "color": [
        "#f7b2b2",
        0,
        0,
        52
      ]
    }
  },
  ".u-info-disabled": {
    "": {
      "color": [
        "#c4c6c9",
        0,
        0,
        53
      ]
    }
  },
  ".u-primary": {
    "": {
      "color": [
        "#3c9cff",
        0,
        0,
        54
      ]
    }
  },
  ".u-warning": {
    "": {
      "color": [
        "#f9ae3d",
        0,
        0,
        55
      ]
    }
  },
  ".u-success": {
    "": {
      "color": [
        "#5ac725",
        0,
        0,
        56
      ]
    }
  },
  ".u-error": {
    "": {
      "color": [
        "#f56c6c",
        0,
        0,
        57
      ]
    }
  },
  ".u-info": {
    "": {
      "color": [
        "#909399",
        0,
        0,
        58
      ]
    }
  },
  ".u-primary-bg": {
    "": {
      "backgroundColor": [
        "#3c9cff",
        0,
        0,
        59
      ]
    }
  },
  ".u-warning-bg": {
    "": {
      "backgroundColor": [
        "#f9ae3d",
        0,
        0,
        60
      ]
    }
  },
  ".u-success-bg": {
    "": {
      "backgroundColor": [
        "#5ac725",
        0,
        0,
        61
      ]
    }
  },
  ".u-error-bg": {
    "": {
      "backgroundColor": [
        "#f56c6c",
        0,
        0,
        62
      ]
    }
  },
  ".u-info-bg": {
    "": {
      "backgroundColor": [
        "#909399",
        0,
        0,
        63
      ]
    }
  },
  ".u-main-color": {
    "": {
      "color": [
        "#303133",
        0,
        0,
        64
      ]
    }
  },
  ".u-content-color": {
    "": {
      "color": [
        "#606266",
        0,
        0,
        65
      ]
    }
  },
  ".u-tips-color": {
    "": {
      "color": [
        "#909193",
        0,
        0,
        66
      ]
    }
  },
  ".u-light-color": {
    "": {
      "color": [
        "#c0c4cc",
        0,
        0,
        67
      ]
    }
  },
  ".wrap": {
    "": {
      "borderRadius": [
        "5",
        1,
        0,
        68
      ],
      "marginTop": [
        0,
        1,
        0,
        68
      ],
      "marginRight": [
        "20",
        1,
        0,
        68
      ],
      "marginBottom": [
        "20",
        1,
        0,
        68
      ],
      "marginLeft": [
        "20",
        1,
        0,
        68
      ],
      "paddingTop": [
        "10",
        1,
        0,
        68
      ],
      "paddingRight": [
        0,
        1,
        0,
        68
      ],
      "paddingBottom": [
        "10",
        1,
        0,
        68
      ],
      "paddingLeft": [
        0,
        1,
        0,
        68
      ]
    }
  },
  ".margin-top-sm": {
    "": {
      "marginTop": [
        "10",
        1,
        0,
        69
      ]
    }
  },
  ".margin-right-sm": {
    "": {
      "marginRight": [
        "20",
        0,
        0,
        70
      ]
    }
  },
  ".margin-left-sm": {
    "": {
      "marginLeft": [
        "20",
        0,
        0,
        71
      ]
    }
  },
  ".margin-bottom-sm": {
    "": {
      "marginBottom": [
        "10",
        1,
        0,
        72
      ]
    }
  },
  ".flex-row": {
    "": {
      "flex": [
        1,
        0,
        0,
        73
      ],
      "display": [
        "flex",
        0,
        0,
        73
      ],
      "flexDirection": [
        "row",
        1,
        0,
        73
      ],
      "justifyContent": [
        "space-between",
        0,
        0,
        73
      ],
      "flexWrap": [
        "nowrap",
        0,
        0,
        73
      ],
      "alignItems": [
        "center",
        1,
        0,
        73
      ]
    }
  },
  ".scroll-view": {
    "": {
      "flex": [
        1,
        0,
        0,
        74
      ]
    }
  },
  ".scroll-view-box": {
    "": {
      "flex": [
        1,
        0,
        0,
        75
      ],
      "position": [
        "absolute",
        0,
        0,
        75
      ],
      "top": [
        0,
        0,
        0,
        75
      ],
      "right": [
        0,
        0,
        0,
        75
      ],
      "bottom": [
        0,
        0,
        0,
        75
      ],
      "left": [
        0,
        0,
        0,
        75
      ]
    }
  },
  ".scroll-view-wrap": {
    "": {
      "paddingLeft": [
        "10",
        0,
        0,
        76
      ],
      "paddingTop": [
        "10",
        0,
        0,
        76
      ],
      "paddingBottom": [
        "10",
        0,
        0,
        76
      ],
      "paddingRight": [
        "10",
        0,
        0,
        76
      ]
    }
  },
  ".table": {
    "": {
      "marginTop": [
        "20upx",
        0,
        0,
        77
      ],
      "marginBottom": [
        "20upx",
        0,
        0,
        77
      ],
      "flex": [
        1,
        0,
        0,
        77
      ],
      "borderWidth": [
        "1",
        1,
        0,
        77
      ],
      "borderStyle": [
        "solid",
        1,
        0,
        77
      ],
      "borderColor": [
        "#BEBEBE",
        1,
        0,
        77
      ]
    }
  },
  ".th": {
    "": {
      "display": [
        "flex",
        1,
        0,
        78
      ],
      "flexDirection": [
        "row",
        1,
        0,
        78
      ],
      "justifyContent": [
        "flex-start",
        1,
        0,
        78
      ],
      "alignItems": [
        "stretch",
        1,
        0,
        78
      ],
      "flex": [
        1,
        0,
        0,
        78
      ],
      "flexWrap": [
        "nowrap",
        0,
        0,
        78
      ]
    },
    ".tr": {
      "backgroundColor": [
        "#eeeeee",
        0,
        1,
        79
      ]
    }
  },
  ".td": {
    "": {
      "display": [
        "flex",
        1,
        0,
        80
      ],
      "flexDirection": [
        "row",
        1,
        0,
        80
      ],
      "justifyContent": [
        "flex-start",
        1,
        0,
        80
      ],
      "alignItems": [
        "stretch",
        1,
        0,
        80
      ],
      "flex": [
        1,
        0,
        0,
        80
      ],
      "flexWrap": [
        "nowrap",
        0,
        0,
        80
      ]
    }
  },
  ".tr": {
    "": {
      "fontSize": [
        "24upx",
        0,
        0,
        81
      ],
      "flex": [
        1,
        0,
        0,
        81
      ],
      "textAlign": [
        "center",
        0,
        0,
        81
      ],
      "paddingTop": [
        "15upx",
        0,
        0,
        81
      ],
      "paddingRight": [
        0,
        0,
        0,
        81
      ],
      "paddingBottom": [
        "15upx",
        0,
        0,
        81
      ],
      "paddingLeft": [
        0,
        0,
        0,
        81
      ]
    }
  },
  ".track-item-wrap": {
    "": {
      "position": [
        "relative",
        0,
        0,
        82
      ],
      "height": [
        "1000upx",
        0,
        0,
        82
      ],
      "display": [
        "flex",
        0,
        0,
        82
      ],
      "flexDirection": [
        "row",
        0,
        0,
        82
      ],
      "justifyContent": [
        "flex-start",
        0,
        0,
        82
      ],
      "backgroundColor": [
        "#000000",
        0,
        0,
        82
      ]
    }
  },
  ".track-video": {
    "": {
      "position": [
        "absolute",
        0,
        0,
        83
      ],
      "top": [
        0,
        0,
        0,
        83
      ],
      "left": [
        0,
        0,
        0,
        83
      ],
      "height": [
        "1000upx",
        0,
        0,
        83
      ],
      "width": [
        "750upx",
        0,
        0,
        83
      ]
    }
  },
  ".track-info-wrap": {
    "": {
      "position": [
        "absolute",
        0,
        0,
        84
      ],
      "top": [
        0,
        0,
        0,
        84
      ],
      "left": [
        0,
        0,
        0,
        84
      ],
      "paddingBottom": [
        "20upx",
        0,
        0,
        84
      ],
      "paddingLeft": [
        "20upx",
        0,
        0,
        84
      ],
      "paddingRight": [
        "20upx",
        0,
        0,
        84
      ],
      "width": [
        "750upx",
        0,
        0,
        84
      ]
    }
  },
  ".track-info-item": {
    "": {
      "color": [
        "#007AFF",
        0,
        0,
        85
      ],
      "fontSize": [
        "20upx",
        0,
        0,
        85
      ],
      "paddingTop": [
        "10upx",
        0,
        0,
        85
      ],
      "paddingBottom": [
        "10upx",
        0,
        0,
        85
      ],
      "fontWeight": [
        "bold",
        0,
        0,
        85
      ]
    }
  },
  "@VERSION": 2
}

/***/ }),

/***/ 362:
/*!*****************************************************************************************!*\
  !*** /Users/tongjie/Desktop/QNRTC-Uniapp/demo/main.js?{"page":"pages%2Findex%2Findex"} ***!
  \*****************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var uni_app_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uni-app-style */ 1);\n/* harmony import */ var uni_app_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uni_app_style__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var uni_polyfill__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! uni-polyfill */ 4);\n/* harmony import */ var uni_polyfill__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(uni_polyfill__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _pages_index_index_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/index/index.nvue?mpType=page */ 363);\n\n        \n        \n        \n        \n        _pages_index_index_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__[\"default\"].mpType = 'page'\n        _pages_index_index_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__[\"default\"].route = 'pages/index/index'\n        _pages_index_index_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__[\"default\"].el = '#root'\n        new Vue(_pages_index_index_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__[\"default\"])\n        //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBRUEsUUFBOEI7QUFDOUIsUUFBNkI7QUFDN0IsUUFBOEQ7QUFDOUQsUUFBUSwyRUFBRztBQUNYLFFBQVEsMkVBQUc7QUFDWCxRQUFRLDJFQUFHO0FBQ1gsZ0JBQWdCLDJFQUFHIiwiZmlsZSI6IjM2Mi5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgICAgICBcbiAgICAgICAgaW1wb3J0ICd1bmktYXBwLXN0eWxlJ1xuICAgICAgICBpbXBvcnQgJ3VuaS1wb2x5ZmlsbCdcbiAgICAgICAgaW1wb3J0IEFwcCBmcm9tICcuL3BhZ2VzL2luZGV4L2luZGV4Lm52dWU/bXBUeXBlPXBhZ2UnXG4gICAgICAgIEFwcC5tcFR5cGUgPSAncGFnZSdcbiAgICAgICAgQXBwLnJvdXRlID0gJ3BhZ2VzL2luZGV4L2luZGV4J1xuICAgICAgICBBcHAuZWwgPSAnI3Jvb3QnXG4gICAgICAgIG5ldyBWdWUoQXBwKVxuICAgICAgICAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///362\n");

/***/ }),

/***/ 363:
/*!***********************************************************************************!*\
  !*** /Users/tongjie/Desktop/QNRTC-Uniapp/demo/pages/index/index.nvue?mpType=page ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_nvue_vue_type_template_id_7b909402_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.nvue?vue&type=template&id=7b909402&mpType=page */ 364);\n/* harmony import */ var _index_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.nvue?vue&type=script&lang=js&mpType=page */ 373);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 20);\n\nvar renderjs\n\n\nfunction injectStyles (context) {\n  \n  if(!this.options.style){\n          this.options.style = {}\n      }\n      if(Vue.prototype.__merge_style && Vue.prototype.__$appStyle__){\n        Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style)\n      }\n      if(Vue.prototype.__merge_style){\n                Vue.prototype.__merge_style(__webpack_require__(/*! ./index.nvue?vue&type=style&index=0&lang=css&mpType=page */ 375).default, this.options.style)\n            }else{\n                Object.assign(this.options.style,__webpack_require__(/*! ./index.nvue?vue&type=style&index=0&lang=css&mpType=page */ 375).default)\n            }\n\n}\n\n/* normalize component */\n\nvar component = Object(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _index_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _index_nvue_vue_type_template_id_7b909402_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _index_nvue_vue_type_template_id_7b909402_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  \"13e07eb8\",\n  false,\n  _index_nvue_vue_type_template_id_7b909402_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ninjectStyles.call(component)\ncomponent.options.__file = \"pages/index/index.nvue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBOEg7QUFDOUg7QUFDcUU7QUFDTDtBQUNoRTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxtQkFBTyxDQUFDLG1FQUEwRDtBQUM5RyxhQUFhO0FBQ2IsaURBQWlELG1CQUFPLENBQUMsbUVBQTBEO0FBQ25IOztBQUVBOztBQUVBO0FBQ2dOO0FBQ2hOLGdCQUFnQixpTkFBVTtBQUMxQixFQUFFLHVGQUFNO0FBQ1IsRUFBRSw0RkFBTTtBQUNSLEVBQUUscUdBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsZ0dBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDZSxnRiIsImZpbGUiOiIzNjMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IGZyb20gXCIuL2luZGV4Lm52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9N2I5MDk0MDImbXBUeXBlPXBhZ2VcIlxudmFyIHJlbmRlcmpzXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL2luZGV4Lm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIlxuZXhwb3J0ICogZnJvbSBcIi4vaW5kZXgubnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiXG5mdW5jdGlvbiBpbmplY3RTdHlsZXMgKGNvbnRleHQpIHtcbiAgXG4gIGlmKCF0aGlzLm9wdGlvbnMuc3R5bGUpe1xuICAgICAgICAgIHRoaXMub3B0aW9ucy5zdHlsZSA9IHt9XG4gICAgICB9XG4gICAgICBpZihWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUgJiYgVnVlLnByb3RvdHlwZS5fXyRhcHBTdHlsZV9fKXtcbiAgICAgICAgVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlKFZ1ZS5wcm90b3R5cGUuX18kYXBwU3R5bGVfXywgdGhpcy5vcHRpb25zLnN0eWxlKVxuICAgICAgfVxuICAgICAgaWYoVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlKXtcbiAgICAgICAgICAgICAgICBWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUocmVxdWlyZShcIi4vaW5kZXgubnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJm1wVHlwZT1wYWdlXCIpLmRlZmF1bHQsIHRoaXMub3B0aW9ucy5zdHlsZSlcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24odGhpcy5vcHRpb25zLnN0eWxlLHJlcXVpcmUoXCIuL2luZGV4Lm52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZtcFR5cGU9cGFnZVwiKS5kZWZhdWx0KVxuICAgICAgICAgICAgfVxuXG59XG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBcIjEzZTA3ZWI4XCIsXG4gIGZhbHNlLFxuICBjb21wb25lbnRzLFxuICByZW5kZXJqc1xuKVxuXG5pbmplY3RTdHlsZXMuY2FsbChjb21wb25lbnQpXG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInBhZ2VzL2luZGV4L2luZGV4Lm52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///363\n");

/***/ }),

/***/ 364:
/*!*****************************************************************************************************************!*\
  !*** /Users/tongjie/Desktop/QNRTC-Uniapp/demo/pages/index/index.nvue?vue&type=template&id=7b909402&mpType=page ***!
  \*****************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_template_id_7b909402_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.js!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-0!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./index.nvue?vue&type=template&id=7b909402&mpType=page */ 365);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_template_id_7b909402_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_template_id_7b909402_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_template_id_7b909402_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_template_id_7b909402_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 365:
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!/Users/tongjie/Desktop/QNRTC-Uniapp/demo/pages/index/index.nvue?vue&type=template&id=7b909402&mpType=page ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
try {
  components = {
    uniFab: __webpack_require__(/*! @/uni_modules/uni-fab/components/uni-fab/uni-fab.vue */ 366)
      .default,
    uButton: __webpack_require__(/*! @/uni_modules/uview-ui/components/u-button/u-button.vue */ 147)
      .default,
  }
} catch (e) {
  if (
    e.message.indexOf("Cannot find module") !== -1 &&
    e.message.indexOf(".vue") !== -1
  ) {
    console.error(e.message)
    console.error("1. 排查组件名称拼写是否正确")
    console.error(
      "2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"
    )
    console.error(
      "3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件"
    )
  } else {
    throw e
  }
}
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "scroll-view",
    {
      staticStyle: { flexDirection: "column" },
      attrs: {
        scrollY: true,
        showScrollbar: true,
        enableBackToTop: true,
        bubble: "true",
      },
    },
    [
      _c(
        "view",
        { staticClass: ["wrap"] },
        [
          _c("uni-fab", {
            attrs: { horizontal: "right", content: _vm.content },
            on: { trigger: _vm.handleChooseItem },
          }),
          _c("u-button", {
            attrs: { type: "primary", text: "多人通讯" },
            on: { click: _vm.routeGroupToGroup },
          }),
          _c("u-button", {
            staticClass: ["margin-top-sm"],
            attrs: { type: "primary", text: "单路转推配置" },
            on: { click: _vm.routeLiveStreamingDirect },
          }),
          _c("u-button", {
            staticClass: ["margin-top-sm"],
            attrs: { type: "primary", text: "合流配置" },
            on: { click: _vm.routeLiveStreamingTranscoding },
          }),
          _c(
            "u-button",
            {
              staticClass: ["margin-top-sm"],
              attrs: { type: "primary", text: "单人通讯" },
              on: { click: _vm.routeTrackSetting },
            },
            [_c("u-text", [_vm._v("单人通讯")])]
          ),
          _c("u-button", {
            staticClass: ["margin-top-sm"],
            attrs: { type: "primary", text: "混音音乐设置" },
            on: { click: _vm.routeNewAudioMusicMixer },
          }),
          _c("u-button", {
            staticClass: ["margin-top-sm"],
            attrs: { type: "primary", text: "混音音效设置" },
            on: { click: _vm.routeNewAudioEffectMixer },
          }),
        ],
        1
      ),
    ]
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 366:
/*!***************************************************************************************************!*\
  !*** /Users/tongjie/Desktop/QNRTC-Uniapp/demo/uni_modules/uni-fab/components/uni-fab/uni-fab.vue ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _uni_fab_vue_vue_type_template_id_7d5a6316_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./uni-fab.vue?vue&type=template&id=7d5a6316&scoped=true& */ 367);\n/* harmony import */ var _uni_fab_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./uni-fab.vue?vue&type=script&lang=js& */ 369);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _uni_fab_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _uni_fab_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 20);\n\nvar renderjs\n\n\nfunction injectStyles (context) {\n  \n  if(!this.options.style){\n          this.options.style = {}\n      }\n      if(Vue.prototype.__merge_style && Vue.prototype.__$appStyle__){\n        Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style)\n      }\n      if(Vue.prototype.__merge_style){\n                Vue.prototype.__merge_style(__webpack_require__(/*! ./uni-fab.vue?vue&type=style&index=0&id=7d5a6316&lang=scss&scoped=true& */ 371).default, this.options.style)\n            }else{\n                Object.assign(this.options.style,__webpack_require__(/*! ./uni-fab.vue?vue&type=style&index=0&id=7d5a6316&lang=scss&scoped=true& */ 371).default)\n            }\n\n}\n\n/* normalize component */\n\nvar component = Object(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _uni_fab_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _uni_fab_vue_vue_type_template_id_7d5a6316_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _uni_fab_vue_vue_type_template_id_7d5a6316_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"7d5a6316\",\n  \"57800bb8\",\n  false,\n  _uni_fab_vue_vue_type_template_id_7d5a6316_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ninjectStyles.call(component)\ncomponent.options.__file = \"uni_modules/uni-fab/components/uni-fab/uni-fab.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBZ0k7QUFDaEk7QUFDMkQ7QUFDTDtBQUN0RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxtQkFBTyxDQUFDLGtGQUF5RTtBQUM3SCxhQUFhO0FBQ2IsaURBQWlELG1CQUFPLENBQUMsa0ZBQXlFO0FBQ2xJOztBQUVBOztBQUVBO0FBQ3NOO0FBQ3ROLGdCQUFnQixpTkFBVTtBQUMxQixFQUFFLDZFQUFNO0FBQ1IsRUFBRSw4RkFBTTtBQUNSLEVBQUUsdUdBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsa0dBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDZSxnRiIsImZpbGUiOiIzNjYuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IGZyb20gXCIuL3VuaS1mYWIudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTdkNWE2MzE2JnNjb3BlZD10cnVlJlwiXG52YXIgcmVuZGVyanNcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vdW5pLWZhYi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL3VuaS1mYWIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5mdW5jdGlvbiBpbmplY3RTdHlsZXMgKGNvbnRleHQpIHtcbiAgXG4gIGlmKCF0aGlzLm9wdGlvbnMuc3R5bGUpe1xuICAgICAgICAgIHRoaXMub3B0aW9ucy5zdHlsZSA9IHt9XG4gICAgICB9XG4gICAgICBpZihWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUgJiYgVnVlLnByb3RvdHlwZS5fXyRhcHBTdHlsZV9fKXtcbiAgICAgICAgVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlKFZ1ZS5wcm90b3R5cGUuX18kYXBwU3R5bGVfXywgdGhpcy5vcHRpb25zLnN0eWxlKVxuICAgICAgfVxuICAgICAgaWYoVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlKXtcbiAgICAgICAgICAgICAgICBWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUocmVxdWlyZShcIi4vdW5pLWZhYi52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD03ZDVhNjMxNiZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIpLmRlZmF1bHQsIHRoaXMub3B0aW9ucy5zdHlsZSlcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24odGhpcy5vcHRpb25zLnN0eWxlLHJlcXVpcmUoXCIuL3VuaS1mYWIudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9N2Q1YTYzMTYmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiKS5kZWZhdWx0KVxuICAgICAgICAgICAgfVxuXG59XG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcIjdkNWE2MzE2XCIsXG4gIFwiNTc4MDBiYjhcIixcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmluamVjdFN0eWxlcy5jYWxsKGNvbXBvbmVudClcbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwidW5pX21vZHVsZXMvdW5pLWZhYi9jb21wb25lbnRzL3VuaS1mYWIvdW5pLWZhYi52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///366\n");

/***/ }),

/***/ 367:
/*!**********************************************************************************************************************************************!*\
  !*** /Users/tongjie/Desktop/QNRTC-Uniapp/demo/uni_modules/uni-fab/components/uni-fab/uni-fab.vue?vue&type=template&id=7d5a6316&scoped=true& ***!
  \**********************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_fab_vue_vue_type_template_id_7d5a6316_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-0!../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./uni-fab.vue?vue&type=template&id=7d5a6316&scoped=true& */ 368);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_fab_vue_vue_type_template_id_7d5a6316_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_fab_vue_vue_type_template_id_7d5a6316_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_fab_vue_vue_type_template_id_7d5a6316_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_fab_vue_vue_type_template_id_7d5a6316_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 368:
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!/Users/tongjie/Desktop/QNRTC-Uniapp/demo/uni_modules/uni-fab/components/uni-fab/uni-fab.vue?vue&type=template&id=7d5a6316&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("view", { staticClass: ["uni-cursor-point"] }, [
    _vm.popMenu &&
    (_vm.leftBottom || _vm.rightBottom || _vm.leftTop || _vm.rightTop) &&
    _vm.content.length > 0
      ? _c(
          "view",
          {
            staticClass: ["uni-fab"],
            class: {
              "uni-fab--leftBottom": _vm.leftBottom,
              "uni-fab--rightBottom": _vm.rightBottom,
              "uni-fab--leftTop": _vm.leftTop,
              "uni-fab--rightTop": _vm.rightTop,
            },
          },
          [
            _c(
              "view",
              {
                staticClass: ["uni-fab__content"],
                class: {
                  "uni-fab__content--left": _vm.horizontal === "left",
                  "uni-fab__content--right": _vm.horizontal === "right",
                  "uni-fab__content--flexDirection":
                    _vm.direction === "vertical",
                  "uni-fab__content--flexDirectionStart":
                    _vm.flexDirectionStart,
                  "uni-fab__content--flexDirectionEnd": _vm.flexDirectionEnd,
                  "uni-fab__content--other-platform": !_vm.isAndroidNvue,
                },
                style: {
                  width: _vm.boxWidth,
                  height: _vm.boxHeight,
                  backgroundColor: _vm.styles.backgroundColor,
                },
                attrs: { elevation: "5" },
              },
              [
                _vm.flexDirectionStart || _vm.horizontalLeft
                  ? _c("view", {
                      staticClass: ["uni-fab__item", "uni-fab__item--first"],
                    })
                  : _vm._e(),
                _vm._l(_vm.content, function (item, index) {
                  return _c(
                    "view",
                    {
                      key: index,
                      staticClass: ["uni-fab__item"],
                      class: { "uni-fab__item--active": _vm.isShow },
                      on: {
                        click: function ($event) {
                          _vm._onItemClick(index, item)
                        },
                      },
                    },
                    [
                      _c("u-image", {
                        staticClass: ["uni-fab__item-image"],
                        attrs: {
                          src: item.active
                            ? item.selectedIconPath
                            : item.iconPath,
                          mode: "widthFix",
                        },
                      }),
                      _c(
                        "u-text",
                        {
                          staticClass: ["uni-fab__item-text"],
                          style: {
                            color: item.active
                              ? _vm.styles.selectedColor
                              : _vm.styles.color,
                          },
                          appendAsTree: true,
                          attrs: { append: "tree" },
                        },
                        [_vm._v(_vm._s(item.text))]
                      ),
                    ],
                    1
                  )
                }),
                _vm.flexDirectionEnd || _vm.horizontalRight
                  ? _c("view", {
                      staticClass: ["uni-fab__item", "uni-fab__item--first"],
                    })
                  : _vm._e(),
              ],
              2
            ),
          ]
        )
      : _vm._e(),
    _c(
      "view",
      {
        staticClass: ["uni-fab__circle", "uni-fab__plus"],
        class: {
          "uni-fab__circle--leftBottom": _vm.leftBottom,
          "uni-fab__circle--rightBottom": _vm.rightBottom,
          "uni-fab__circle--leftTop": _vm.leftTop,
          "uni-fab__circle--rightTop": _vm.rightTop,
          "uni-fab__content--other-platform": !_vm.isAndroidNvue,
        },
        style: { "background-color": _vm.styles.buttonColor },
        on: { click: _vm._onClick },
      },
      [
        _c("view", {
          staticClass: ["fab-circle-v"],
          class: {
            "uni-fab__plus--active": _vm.isShow && _vm.content.length > 0,
          },
        }),
        _c("view", {
          staticClass: ["fab-circle-h"],
          class: {
            "uni-fab__plus--active": _vm.isShow && _vm.content.length > 0,
          },
        }),
      ]
    ),
  ])
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 369:
/*!****************************************************************************************************************************!*\
  !*** /Users/tongjie/Desktop/QNRTC-Uniapp/demo/uni_modules/uni-fab/components/uni-fab/uni-fab.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_fab_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib??ref--5-0!../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--5-1!../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./uni-fab.vue?vue&type=script&lang=js& */ 370);\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_fab_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_fab_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_fab_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_fab_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_fab_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQStqQixDQUFnQix1akJBQUcsRUFBQyIsImZpbGUiOiIzNjkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNS0wIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS01LTEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vdW5pLWZhYi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS01LTAhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTUtMSEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi91bmktZmFiLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///369\n");

/***/ }),

/***/ 370:
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--5-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--5-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!/Users/tongjie/Desktop/QNRTC-Uniapp/demo/uni_modules/uni-fab/components/uni-fab/uni-fab.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\nvar platform = 'other';\nplatform = uni.getSystemInfoSync().platform;\n\n/**\n * Fab 悬浮按钮\n * @description 点击可展开一个图形按钮菜单\n * @tutorial https://ext.dcloud.net.cn/plugin?id=144\n * @property {Object} pattern 可选样式配置项\n * @property {Object} horizontal = [left | right] 水平对齐方式\n * \t@value left 左对齐\n * \t@value right 右对齐\n * @property {Object} vertical = [bottom | top] 垂直对齐方式\n * \t@value bottom 下对齐\n * \t@value top 上对齐\n * @property {Object} direction = [horizontal | vertical] 展开菜单显示方式\n * \t@value horizontal 水平显示\n * \t@value vertical 垂直显示\n * @property {Array} content 展开菜单内容配置项\n * @property {Boolean} popMenu 是否使用弹出菜单\n * @event {Function} trigger 展开菜单点击事件，返回点击信息\n * @event {Function} fabClick 悬浮按钮点击事件\n */\nvar _default2 = {\n  name: 'UniFab',\n  emits: ['fabClick', 'trigger'],\n  props: {\n    pattern: {\n      type: Object,\n      default: function _default() {\n        return {};\n      }\n    },\n    horizontal: {\n      type: String,\n      default: 'left'\n    },\n    vertical: {\n      type: String,\n      default: 'bottom'\n    },\n    direction: {\n      type: String,\n      default: 'horizontal'\n    },\n    content: {\n      type: Array,\n      default: function _default() {\n        return [];\n      }\n    },\n    show: {\n      type: Boolean,\n      default: false\n    },\n    popMenu: {\n      type: Boolean,\n      default: true\n    }\n  },\n  data: function data() {\n    return {\n      fabShow: false,\n      isShow: false,\n      isAndroidNvue: platform === 'android',\n      styles: {\n        color: '#3c3e49',\n        selectedColor: '#007AFF',\n        backgroundColor: '#fff',\n        buttonColor: '#007AFF'\n      }\n    };\n  },\n  computed: {\n    contentWidth: function contentWidth(e) {\n      return (this.content.length + 1) * 55 + 10 + 'px';\n    },\n    contentWidthMin: function contentWidthMin() {\n      return 55 + 'px';\n    },\n    // 动态计算宽度\n    boxWidth: function boxWidth() {\n      return this.getPosition(3, 'horizontal');\n    },\n    // 动态计算高度\n    boxHeight: function boxHeight() {\n      return this.getPosition(3, 'vertical');\n    },\n    // 计算左下位置\n    leftBottom: function leftBottom() {\n      return this.getPosition(0, 'left', 'bottom');\n    },\n    // 计算右下位置\n    rightBottom: function rightBottom() {\n      return this.getPosition(0, 'right', 'bottom');\n    },\n    // 计算左上位置\n    leftTop: function leftTop() {\n      return this.getPosition(0, 'left', 'top');\n    },\n    rightTop: function rightTop() {\n      return this.getPosition(0, 'right', 'top');\n    },\n    flexDirectionStart: function flexDirectionStart() {\n      return this.getPosition(1, 'vertical', 'top');\n    },\n    flexDirectionEnd: function flexDirectionEnd() {\n      return this.getPosition(1, 'vertical', 'bottom');\n    },\n    horizontalLeft: function horizontalLeft() {\n      return this.getPosition(2, 'horizontal', 'left');\n    },\n    horizontalRight: function horizontalRight() {\n      return this.getPosition(2, 'horizontal', 'right');\n    }\n  },\n  watch: {\n    pattern: function pattern(newValue, oldValue) {\n      //console.log(JSON.stringify(newValue))\n      this.styles = Object.assign({}, this.styles, newValue);\n    }\n  },\n  created: function created() {\n    this.isShow = this.show;\n    if (this.top === 0) {\n      this.fabShow = true;\n    }\n    // 初始化样式\n    this.styles = Object.assign({}, this.styles, this.pattern);\n  },\n  methods: {\n    _onClick: function _onClick() {\n      this.$emit('fabClick');\n      if (!this.popMenu) {\n        return;\n      }\n      this.isShow = !this.isShow;\n    },\n    open: function open() {\n      this.isShow = true;\n    },\n    close: function close() {\n      this.isShow = false;\n    },\n    /**\n     * 按钮点击事件\n     */\n    _onItemClick: function _onItemClick(index, item) {\n      this.$emit('trigger', {\n        index: index,\n        item: item\n      });\n    },\n    /**\n     * 获取 位置信息\n     */\n    getPosition: function getPosition(types, paramA, paramB) {\n      if (types === 0) {\n        return this.horizontal === paramA && this.vertical === paramB;\n      } else if (types === 1) {\n        return this.direction === paramA && this.vertical === paramB;\n      } else if (types === 2) {\n        return this.direction === paramA && this.horizontal === paramB;\n      } else {\n        return this.isShow && this.direction === paramA ? this.contentWidth : this.contentWidthMin;\n      }\n    }\n  }\n};\nexports.default = _default2;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vdW5pX21vZHVsZXMvdW5pLWZhYi9jb21wb25lbnRzL3VuaS1mYWIvdW5pLWZhYi52dWUiXSwibmFtZXMiOlsicGxhdGZvcm0iLCJuYW1lIiwiZW1pdHMiLCJwcm9wcyIsInBhdHRlcm4iLCJ0eXBlIiwiZGVmYXVsdCIsImhvcml6b250YWwiLCJ2ZXJ0aWNhbCIsImRpcmVjdGlvbiIsImNvbnRlbnQiLCJzaG93IiwicG9wTWVudSIsImRhdGEiLCJmYWJTaG93IiwiaXNTaG93IiwiaXNBbmRyb2lkTnZ1ZSIsInN0eWxlcyIsImNvbG9yIiwic2VsZWN0ZWRDb2xvciIsImJhY2tncm91bmRDb2xvciIsImJ1dHRvbkNvbG9yIiwiY29tcHV0ZWQiLCJjb250ZW50V2lkdGgiLCJjb250ZW50V2lkdGhNaW4iLCJib3hXaWR0aCIsImJveEhlaWdodCIsImxlZnRCb3R0b20iLCJyaWdodEJvdHRvbSIsImxlZnRUb3AiLCJyaWdodFRvcCIsImZsZXhEaXJlY3Rpb25TdGFydCIsImZsZXhEaXJlY3Rpb25FbmQiLCJob3Jpem9udGFsTGVmdCIsImhvcml6b250YWxSaWdodCIsIndhdGNoIiwiY3JlYXRlZCIsIm1ldGhvZHMiLCJfb25DbGljayIsIm9wZW4iLCJjbG9zZSIsIl9vbkl0ZW1DbGljayIsImluZGV4IiwiaXRlbSIsImdldFBvc2l0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBMkNBO0FBRUFBOztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBbEJBLGdCQW1CQTtFQUNBQztFQUNBQztFQUNBQztJQUNBQztNQUNBQztNQUNBQztRQUNBO01BQ0E7SUFDQTtJQUNBQztNQUNBRjtNQUNBQztJQUNBO0lBQ0FFO01BQ0FIO01BQ0FDO0lBQ0E7SUFDQUc7TUFDQUo7TUFDQUM7SUFDQTtJQUNBSTtNQUNBTDtNQUNBQztRQUNBO01BQ0E7SUFDQTtJQUNBSztNQUNBTjtNQUNBQztJQUNBO0lBQ0FNO01BQ0FQO01BQ0FDO0lBQ0E7RUFDQTtFQUNBTztJQUNBO01BQ0FDO01BQ0FDO01BQ0FDO01BQ0FDO1FBQ0FDO1FBQ0FDO1FBQ0FDO1FBQ0FDO01BQ0E7SUFDQTtFQUNBO0VBQ0FDO0lBQ0FDO01BQ0E7SUFDQTtJQUNBQztNQUNBO0lBQ0E7SUFDQTtJQUNBQztNQUNBO0lBQ0E7SUFDQTtJQUNBQztNQUNBO0lBQ0E7SUFDQTtJQUNBQztNQUNBO0lBQ0E7SUFDQTtJQUNBQztNQUNBO0lBQ0E7SUFDQTtJQUNBQztNQUNBO0lBQ0E7SUFDQUM7TUFDQTtJQUNBO0lBQ0FDO01BQ0E7SUFDQTtJQUNBQztNQUNBO0lBQ0E7SUFDQUM7TUFDQTtJQUNBO0lBQ0FDO01BQ0E7SUFDQTtFQUNBO0VBQ0FDO0lBQ0EvQjtNQUNBO01BQ0E7SUFDQTtFQUNBO0VBQ0FnQztJQUNBO0lBQ0E7TUFDQTtJQUNBO0lBQ0E7SUFDQTtFQUNBO0VBQ0FDO0lBQ0FDO01BQ0E7TUFDQTtRQUNBO01BQ0E7TUFDQTtJQUNBO0lBQ0FDO01BQ0E7SUFDQTtJQUNBQztNQUNBO0lBQ0E7SUFDQTtBQUNBO0FBQ0E7SUFDQUM7TUFDQTtRQUNBQztRQUNBQztNQUNBO0lBQ0E7SUFDQTtBQUNBO0FBQ0E7SUFDQUM7TUFDQTtRQUNBO01BQ0E7UUFDQTtNQUNBO1FBQ0E7TUFDQTtRQUNBO01BQ0E7SUFDQTtFQUNBO0FBQ0E7QUFBQSIsImZpbGUiOiIzNzAuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcblx0PHZpZXcgY2xhc3M9XCJ1bmktY3Vyc29yLXBvaW50XCI+XHJcblx0XHQ8dmlldyB2LWlmPVwicG9wTWVudSAmJiAobGVmdEJvdHRvbXx8cmlnaHRCb3R0b218fGxlZnRUb3B8fHJpZ2h0VG9wKSAmJiBjb250ZW50Lmxlbmd0aCA+IDBcIiA6Y2xhc3M9XCJ7XHJcbiAgICAgICAgJ3VuaS1mYWItLWxlZnRCb3R0b20nOiBsZWZ0Qm90dG9tLFxyXG4gICAgICAgICd1bmktZmFiLS1yaWdodEJvdHRvbSc6IHJpZ2h0Qm90dG9tLFxyXG4gICAgICAgICd1bmktZmFiLS1sZWZ0VG9wJzogbGVmdFRvcCxcclxuICAgICAgICAndW5pLWZhYi0tcmlnaHRUb3AnOiByaWdodFRvcFxyXG4gICAgICB9XCJcclxuXHRcdCBjbGFzcz1cInVuaS1mYWJcIj5cclxuXHRcdFx0PHZpZXcgOmNsYXNzPVwie1xyXG4gICAgICAgICAgJ3VuaS1mYWJfX2NvbnRlbnQtLWxlZnQnOiBob3Jpem9udGFsID09PSAnbGVmdCcsXHJcbiAgICAgICAgICAndW5pLWZhYl9fY29udGVudC0tcmlnaHQnOiBob3Jpem9udGFsID09PSAncmlnaHQnLFxyXG4gICAgICAgICAgJ3VuaS1mYWJfX2NvbnRlbnQtLWZsZXhEaXJlY3Rpb24nOiBkaXJlY3Rpb24gPT09ICd2ZXJ0aWNhbCcsXHJcbiAgICAgICAgICAndW5pLWZhYl9fY29udGVudC0tZmxleERpcmVjdGlvblN0YXJ0JzogZmxleERpcmVjdGlvblN0YXJ0LFxyXG4gICAgICAgICAgJ3VuaS1mYWJfX2NvbnRlbnQtLWZsZXhEaXJlY3Rpb25FbmQnOiBmbGV4RGlyZWN0aW9uRW5kLFxyXG5cdFx0ICAndW5pLWZhYl9fY29udGVudC0tb3RoZXItcGxhdGZvcm0nOiAhaXNBbmRyb2lkTnZ1ZVxyXG4gICAgICAgIH1cIlxyXG5cdFx0XHQgOnN0eWxlPVwieyB3aWR0aDogYm94V2lkdGgsIGhlaWdodDogYm94SGVpZ2h0LCBiYWNrZ3JvdW5kQ29sb3I6IHN0eWxlcy5iYWNrZ3JvdW5kQ29sb3IgfVwiIGNsYXNzPVwidW5pLWZhYl9fY29udGVudFwiXHJcblx0XHRcdCBlbGV2YXRpb249XCI1XCI+XHJcblx0XHRcdFx0PHZpZXcgdi1pZj1cImZsZXhEaXJlY3Rpb25TdGFydCB8fCBob3Jpem9udGFsTGVmdFwiIGNsYXNzPVwidW5pLWZhYl9faXRlbSB1bmktZmFiX19pdGVtLS1maXJzdFwiIC8+XHJcblx0XHRcdFx0PHZpZXcgdi1mb3I9XCIoaXRlbSwgaW5kZXgpIGluIGNvbnRlbnRcIiA6a2V5PVwiaW5kZXhcIiA6Y2xhc3M9XCJ7ICd1bmktZmFiX19pdGVtLS1hY3RpdmUnOiBpc1Nob3cgfVwiIGNsYXNzPVwidW5pLWZhYl9faXRlbVwiXHJcblx0XHRcdFx0IEBjbGljaz1cIl9vbkl0ZW1DbGljayhpbmRleCwgaXRlbSlcIj5cclxuXHRcdFx0XHRcdDxpbWFnZSA6c3JjPVwiaXRlbS5hY3RpdmUgPyBpdGVtLnNlbGVjdGVkSWNvblBhdGggOiBpdGVtLmljb25QYXRoXCIgY2xhc3M9XCJ1bmktZmFiX19pdGVtLWltYWdlXCIgbW9kZT1cIndpZHRoRml4XCIgLz5cclxuXHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwidW5pLWZhYl9faXRlbS10ZXh0XCIgOnN0eWxlPVwieyBjb2xvcjogaXRlbS5hY3RpdmUgPyBzdHlsZXMuc2VsZWN0ZWRDb2xvciA6IHN0eWxlcy5jb2xvciB9XCI+e3sgaXRlbS50ZXh0IH19PC90ZXh0PlxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHQ8dmlldyB2LWlmPVwiZmxleERpcmVjdGlvbkVuZCB8fCBob3Jpem9udGFsUmlnaHRcIiBjbGFzcz1cInVuaS1mYWJfX2l0ZW0gdW5pLWZhYl9faXRlbS0tZmlyc3RcIiAvPlxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHQ8L3ZpZXc+XHJcblx0XHQ8dmlldyA6Y2xhc3M9XCJ7XHJcblx0XHQgICd1bmktZmFiX19jaXJjbGUtLWxlZnRCb3R0b20nOiBsZWZ0Qm90dG9tLFxyXG5cdFx0ICAndW5pLWZhYl9fY2lyY2xlLS1yaWdodEJvdHRvbSc6IHJpZ2h0Qm90dG9tLFxyXG5cdFx0ICAndW5pLWZhYl9fY2lyY2xlLS1sZWZ0VG9wJzogbGVmdFRvcCxcclxuXHRcdCAgJ3VuaS1mYWJfX2NpcmNsZS0tcmlnaHRUb3AnOiByaWdodFRvcCxcclxuXHRcdCAgJ3VuaS1mYWJfX2NvbnRlbnQtLW90aGVyLXBsYXRmb3JtJzogIWlzQW5kcm9pZE52dWVcclxuXHRcdH1cIlxyXG5cdFx0IGNsYXNzPVwidW5pLWZhYl9fY2lyY2xlIHVuaS1mYWJfX3BsdXNcIiA6c3R5bGU9XCJ7ICdiYWNrZ3JvdW5kLWNvbG9yJzogc3R5bGVzLmJ1dHRvbkNvbG9yIH1cIiBAY2xpY2s9XCJfb25DbGlja1wiPlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cImZhYi1jaXJjbGUtdlwiICA6Y2xhc3M9XCJ7J3VuaS1mYWJfX3BsdXMtLWFjdGl2ZSc6IGlzU2hvdyAmJiBjb250ZW50Lmxlbmd0aCA+IDB9XCI+PC92aWV3PlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cImZhYi1jaXJjbGUtaFwiIDpjbGFzcz1cInsndW5pLWZhYl9fcGx1cy0tYWN0aXZlJzogaXNTaG93ICAmJiBjb250ZW50Lmxlbmd0aCA+IDB9XCI+PC92aWV3PlxyXG5cdFx0PC92aWV3PlxyXG5cdDwvdmlldz5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcblx0bGV0IHBsYXRmb3JtID0gJ290aGVyJ1xyXG5cdC8vICNpZmRlZiBBUFAtTlZVRVxyXG5cdHBsYXRmb3JtID0gdW5pLmdldFN5c3RlbUluZm9TeW5jKCkucGxhdGZvcm1cclxuXHQvLyAjZW5kaWZcclxuXHJcblx0LyoqXHJcblx0ICogRmFiIOaCrOa1ruaMiemSrlxyXG5cdCAqIEBkZXNjcmlwdGlvbiDngrnlh7vlj6/lsZXlvIDkuIDkuKrlm77lvaLmjInpkq7oj5zljZVcclxuXHQgKiBAdHV0b3JpYWwgaHR0cHM6Ly9leHQuZGNsb3VkLm5ldC5jbi9wbHVnaW4/aWQ9MTQ0XHJcblx0ICogQHByb3BlcnR5IHtPYmplY3R9IHBhdHRlcm4g5Y+v6YCJ5qC35byP6YWN572u6aG5XHJcblx0ICogQHByb3BlcnR5IHtPYmplY3R9IGhvcml6b250YWwgPSBbbGVmdCB8IHJpZ2h0XSDmsLTlubPlr7npvZDmlrnlvI9cclxuXHQgKiBcdEB2YWx1ZSBsZWZ0IOW3puWvuem9kFxyXG5cdCAqIFx0QHZhbHVlIHJpZ2h0IOWPs+Wvuem9kFxyXG5cdCAqIEBwcm9wZXJ0eSB7T2JqZWN0fSB2ZXJ0aWNhbCA9IFtib3R0b20gfCB0b3BdIOWeguebtOWvuem9kOaWueW8j1xyXG5cdCAqIFx0QHZhbHVlIGJvdHRvbSDkuIvlr7npvZBcclxuXHQgKiBcdEB2YWx1ZSB0b3Ag5LiK5a+56b2QXHJcblx0ICogQHByb3BlcnR5IHtPYmplY3R9IGRpcmVjdGlvbiA9IFtob3Jpem9udGFsIHwgdmVydGljYWxdIOWxleW8gOiPnOWNleaYvuekuuaWueW8j1xyXG5cdCAqIFx0QHZhbHVlIGhvcml6b250YWwg5rC05bmz5pi+56S6XHJcblx0ICogXHRAdmFsdWUgdmVydGljYWwg5Z6C55u05pi+56S6XHJcblx0ICogQHByb3BlcnR5IHtBcnJheX0gY29udGVudCDlsZXlvIDoj5zljZXlhoXlrrnphY3nva7poblcclxuXHQgKiBAcHJvcGVydHkge0Jvb2xlYW59IHBvcE1lbnUg5piv5ZCm5L2/55So5by55Ye66I+c5Y2VXHJcblx0ICogQGV2ZW50IHtGdW5jdGlvbn0gdHJpZ2dlciDlsZXlvIDoj5zljZXngrnlh7vkuovku7bvvIzov5Tlm57ngrnlh7vkv6Hmga9cclxuXHQgKiBAZXZlbnQge0Z1bmN0aW9ufSBmYWJDbGljayDmgqzmta7mjInpkq7ngrnlh7vkuovku7ZcclxuXHQgKi9cclxuXHRleHBvcnQgZGVmYXVsdCB7XHJcblx0XHRuYW1lOiAnVW5pRmFiJyxcclxuXHRcdGVtaXRzOlsnZmFiQ2xpY2snLCd0cmlnZ2VyJ10sXHJcblx0XHRwcm9wczoge1xyXG5cdFx0XHRwYXR0ZXJuOiB7XHJcblx0XHRcdFx0dHlwZTogT2JqZWN0LFxyXG5cdFx0XHRcdGRlZmF1bHQgKCkge1xyXG5cdFx0XHRcdFx0cmV0dXJuIHt9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRob3Jpem9udGFsOiB7XHJcblx0XHRcdFx0dHlwZTogU3RyaW5nLFxyXG5cdFx0XHRcdGRlZmF1bHQ6ICdsZWZ0J1xyXG5cdFx0XHR9LFxyXG5cdFx0XHR2ZXJ0aWNhbDoge1xyXG5cdFx0XHRcdHR5cGU6IFN0cmluZyxcclxuXHRcdFx0XHRkZWZhdWx0OiAnYm90dG9tJ1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRkaXJlY3Rpb246IHtcclxuXHRcdFx0XHR0eXBlOiBTdHJpbmcsXHJcblx0XHRcdFx0ZGVmYXVsdDogJ2hvcml6b250YWwnXHJcblx0XHRcdH0sXHJcblx0XHRcdGNvbnRlbnQ6IHtcclxuXHRcdFx0XHR0eXBlOiBBcnJheSxcclxuXHRcdFx0XHRkZWZhdWx0ICgpIHtcclxuXHRcdFx0XHRcdHJldHVybiBbXVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSxcclxuXHRcdFx0c2hvdzoge1xyXG5cdFx0XHRcdHR5cGU6IEJvb2xlYW4sXHJcblx0XHRcdFx0ZGVmYXVsdDogZmFsc2VcclxuXHRcdFx0fSxcclxuXHRcdFx0cG9wTWVudToge1xyXG5cdFx0XHRcdHR5cGU6IEJvb2xlYW4sXHJcblx0XHRcdFx0ZGVmYXVsdDogdHJ1ZVxyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0ZGF0YSgpIHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHRmYWJTaG93OiBmYWxzZSxcclxuXHRcdFx0XHRpc1Nob3c6IGZhbHNlLFxyXG5cdFx0XHRcdGlzQW5kcm9pZE52dWU6IHBsYXRmb3JtID09PSAnYW5kcm9pZCcsXHJcblx0XHRcdFx0c3R5bGVzOiB7XHJcblx0XHRcdFx0XHRjb2xvcjogJyMzYzNlNDknLFxyXG5cdFx0XHRcdFx0c2VsZWN0ZWRDb2xvcjogJyMwMDdBRkYnLFxyXG5cdFx0XHRcdFx0YmFja2dyb3VuZENvbG9yOiAnI2ZmZicsXHJcblx0XHRcdFx0XHRidXR0b25Db2xvcjogJyMwMDdBRkYnXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0Y29tcHV0ZWQ6IHtcclxuXHRcdFx0Y29udGVudFdpZHRoKGUpIHtcclxuXHRcdFx0XHRyZXR1cm4gKHRoaXMuY29udGVudC5sZW5ndGggKyAxKSAqIDU1ICsgMTAgKyAncHgnXHJcblx0XHRcdH0sXHJcblx0XHRcdGNvbnRlbnRXaWR0aE1pbigpIHtcclxuXHRcdFx0XHRyZXR1cm4gNTUgKyAncHgnXHJcblx0XHRcdH0sXHJcblx0XHRcdC8vIOWKqOaAgeiuoeeul+WuveW6plxyXG5cdFx0XHRib3hXaWR0aCgpIHtcclxuXHRcdFx0XHRyZXR1cm4gdGhpcy5nZXRQb3NpdGlvbigzLCAnaG9yaXpvbnRhbCcpXHJcblx0XHRcdH0sXHJcblx0XHRcdC8vIOWKqOaAgeiuoeeul+mrmOW6plxyXG5cdFx0XHRib3hIZWlnaHQoKSB7XHJcblx0XHRcdFx0cmV0dXJuIHRoaXMuZ2V0UG9zaXRpb24oMywgJ3ZlcnRpY2FsJylcclxuXHRcdFx0fSxcclxuXHRcdFx0Ly8g6K6h566X5bem5LiL5L2N572uXHJcblx0XHRcdGxlZnRCb3R0b20oKSB7XHJcblx0XHRcdFx0cmV0dXJuIHRoaXMuZ2V0UG9zaXRpb24oMCwgJ2xlZnQnLCAnYm90dG9tJylcclxuXHRcdFx0fSxcclxuXHRcdFx0Ly8g6K6h566X5Y+z5LiL5L2N572uXHJcblx0XHRcdHJpZ2h0Qm90dG9tKCkge1xyXG5cdFx0XHRcdHJldHVybiB0aGlzLmdldFBvc2l0aW9uKDAsICdyaWdodCcsICdib3R0b20nKVxyXG5cdFx0XHR9LFxyXG5cdFx0XHQvLyDorqHnrpflt6bkuIrkvY3nva5cclxuXHRcdFx0bGVmdFRvcCgpIHtcclxuXHRcdFx0XHRyZXR1cm4gdGhpcy5nZXRQb3NpdGlvbigwLCAnbGVmdCcsICd0b3AnKVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRyaWdodFRvcCgpIHtcclxuXHRcdFx0XHRyZXR1cm4gdGhpcy5nZXRQb3NpdGlvbigwLCAncmlnaHQnLCAndG9wJylcclxuXHRcdFx0fSxcclxuXHRcdFx0ZmxleERpcmVjdGlvblN0YXJ0KCkge1xyXG5cdFx0XHRcdHJldHVybiB0aGlzLmdldFBvc2l0aW9uKDEsICd2ZXJ0aWNhbCcsICd0b3AnKVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRmbGV4RGlyZWN0aW9uRW5kKCkge1xyXG5cdFx0XHRcdHJldHVybiB0aGlzLmdldFBvc2l0aW9uKDEsICd2ZXJ0aWNhbCcsICdib3R0b20nKVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRob3Jpem9udGFsTGVmdCgpIHtcclxuXHRcdFx0XHRyZXR1cm4gdGhpcy5nZXRQb3NpdGlvbigyLCAnaG9yaXpvbnRhbCcsICdsZWZ0JylcclxuXHRcdFx0fSxcclxuXHRcdFx0aG9yaXpvbnRhbFJpZ2h0KCkge1xyXG5cdFx0XHRcdHJldHVybiB0aGlzLmdldFBvc2l0aW9uKDIsICdob3Jpem9udGFsJywgJ3JpZ2h0JylcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdHdhdGNoOiB7XHJcblx0XHRcdHBhdHRlcm4obmV3VmFsdWUsIG9sZFZhbHVlKSB7XHJcblx0XHRcdFx0Ly9jb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShuZXdWYWx1ZSkpXHJcblx0XHRcdFx0dGhpcy5zdHlsZXMgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnN0eWxlcywgbmV3VmFsdWUpXHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRjcmVhdGVkKCkge1xyXG5cdFx0XHR0aGlzLmlzU2hvdyA9IHRoaXMuc2hvd1xyXG5cdFx0XHRpZiAodGhpcy50b3AgPT09IDApIHtcclxuXHRcdFx0XHR0aGlzLmZhYlNob3cgPSB0cnVlXHJcblx0XHRcdH1cclxuXHRcdFx0Ly8g5Yid5aeL5YyW5qC35byPXHJcblx0XHRcdHRoaXMuc3R5bGVzID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5zdHlsZXMsIHRoaXMucGF0dGVybilcclxuXHRcdH0sXHJcblx0XHRtZXRob2RzOiB7XHJcblx0XHRcdF9vbkNsaWNrKCkge1xuXHRcdFx0XHR0aGlzLiRlbWl0KCdmYWJDbGljaycpXHJcblx0XHRcdFx0aWYgKCF0aGlzLnBvcE1lbnUpIHtcclxuXHRcdFx0XHRcdHJldHVyblxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHR0aGlzLmlzU2hvdyA9ICF0aGlzLmlzU2hvd1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRvcGVuKCkge1xyXG5cdFx0XHRcdHRoaXMuaXNTaG93ID0gdHJ1ZVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRjbG9zZSgpIHtcclxuXHRcdFx0XHR0aGlzLmlzU2hvdyA9IGZhbHNlXHJcblx0XHRcdH0sXHJcblx0XHRcdC8qKlxyXG5cdFx0XHQgKiDmjInpkq7ngrnlh7vkuovku7ZcclxuXHRcdFx0ICovXHJcblx0XHRcdF9vbkl0ZW1DbGljayhpbmRleCwgaXRlbSkge1xyXG5cdFx0XHRcdHRoaXMuJGVtaXQoJ3RyaWdnZXInLCB7XHJcblx0XHRcdFx0XHRpbmRleCxcclxuXHRcdFx0XHRcdGl0ZW1cclxuXHRcdFx0XHR9KVxyXG5cdFx0XHR9LFxyXG5cdFx0XHQvKipcclxuXHRcdFx0ICog6I635Y+WIOS9jee9ruS/oeaBr1xyXG5cdFx0XHQgKi9cclxuXHRcdFx0Z2V0UG9zaXRpb24odHlwZXMsIHBhcmFtQSwgcGFyYW1CKSB7XHJcblx0XHRcdFx0aWYgKHR5cGVzID09PSAwKSB7XHJcblx0XHRcdFx0XHRyZXR1cm4gdGhpcy5ob3Jpem9udGFsID09PSBwYXJhbUEgJiYgdGhpcy52ZXJ0aWNhbCA9PT0gcGFyYW1CXHJcblx0XHRcdFx0fSBlbHNlIGlmICh0eXBlcyA9PT0gMSkge1xyXG5cdFx0XHRcdFx0cmV0dXJuIHRoaXMuZGlyZWN0aW9uID09PSBwYXJhbUEgJiYgdGhpcy52ZXJ0aWNhbCA9PT0gcGFyYW1CXHJcblx0XHRcdFx0fSBlbHNlIGlmICh0eXBlcyA9PT0gMikge1xyXG5cdFx0XHRcdFx0cmV0dXJuIHRoaXMuZGlyZWN0aW9uID09PSBwYXJhbUEgJiYgdGhpcy5ob3Jpem9udGFsID09PSBwYXJhbUJcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0cmV0dXJuIHRoaXMuaXNTaG93ICYmIHRoaXMuZGlyZWN0aW9uID09PSBwYXJhbUEgPyB0aGlzLmNvbnRlbnRXaWR0aCA6IHRoaXMuY29udGVudFdpZHRoTWluXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBsYW5nPVwic2Nzc1wiIHNjb3BlZD5cclxuXHQudW5pLWZhYiB7XHJcblx0XHRwb3NpdGlvbjogZml4ZWQ7XHJcblx0XHQvKiAjaWZuZGVmIEFQUC1OVlVFICovXHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0LyogI2VuZGlmICovXHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHR6LWluZGV4OiAxMDtcclxuXHR9XG5cdFxuXHQudW5pLWN1cnNvci1wb2ludCB7XG5cdFx0LyogI2lmZGVmIEg1ICovXG5cdFx0Y3Vyc29yOiBwb2ludGVyO1xuXHRcdC8qICNlbmRpZiAqL1xuXHR9XHJcblxyXG5cdC51bmktZmFiLS1hY3RpdmUge1xyXG5cdFx0b3BhY2l0eTogMTtcclxuXHR9XHJcblxyXG5cdC51bmktZmFiLS1sZWZ0Qm90dG9tIHtcclxuXHRcdGxlZnQ6IDVweDtcclxuXHRcdGJvdHRvbTogMjBweDtcblx0XHQvKiAjaWZkZWYgSDUgKi9cblx0XHRsZWZ0OiBjYWxjKDVweCArIHZhcigtLXdpbmRvdy1sZWZ0KSk7XHJcblx0XHRib3R0b206IGNhbGMoMjBweCArIHZhcigtLXdpbmRvdy1ib3R0b20pKTtcclxuXHRcdC8qICNlbmRpZiAqL1xyXG5cdFx0cGFkZGluZzogMTBweDtcclxuXHR9XHJcblxyXG5cdC51bmktZmFiLS1sZWZ0VG9wIHtcclxuXHRcdGxlZnQ6IDVweDtcclxuXHRcdHRvcDogMzBweDtcclxuXHRcdC8qICNpZmRlZiBINSAqL1xuXHRcdGxlZnQ6IGNhbGMoNXB4ICsgdmFyKC0td2luZG93LWxlZnQpKTtcclxuXHRcdHRvcDogY2FsYygzMHB4ICsgdmFyKC0td2luZG93LXRvcCkpO1xyXG5cdFx0LyogI2VuZGlmICovXHJcblx0XHRwYWRkaW5nOiAxMHB4O1xyXG5cdH1cclxuXHJcblx0LnVuaS1mYWItLXJpZ2h0Qm90dG9tIHtcclxuXHRcdHJpZ2h0OiA1cHg7XHJcblx0XHRib3R0b206IDIwcHg7XHJcblx0XHQvKiAjaWZkZWYgSDUgKi9cblx0XHRyaWdodDogY2FsYyg1cHggKyB2YXIoLS13aW5kb3ctcmlnaHQpKTtcclxuXHRcdGJvdHRvbTogY2FsYygyMHB4ICsgdmFyKC0td2luZG93LWJvdHRvbSkpO1xyXG5cdFx0LyogI2VuZGlmICovXHJcblx0XHRwYWRkaW5nOiAxMHB4O1xyXG5cdH1cclxuXHJcblx0LnVuaS1mYWItLXJpZ2h0VG9wIHtcclxuXHRcdHJpZ2h0OiA1cHg7XHJcblx0XHR0b3A6IDMwcHg7XHJcblx0XHQvKiAjaWZkZWYgSDUgKi9cblx0XHRyaWdodDogY2FsYyg1cHggKyB2YXIoLS13aW5kb3ctcmlnaHQpKTtcclxuXHRcdHRvcDogY2FsYygzMHB4ICsgdmFyKC0td2luZG93LXRvcCkpO1xyXG5cdFx0LyogI2VuZGlmICovXHJcblx0XHRwYWRkaW5nOiAxMHB4O1xyXG5cdH1cclxuXHJcblx0LnVuaS1mYWJfX2NpcmNsZSB7XHJcblx0XHRwb3NpdGlvbjogZml4ZWQ7XHJcblx0XHQvKiAjaWZuZGVmIEFQUC1OVlVFICovXHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0LyogI2VuZGlmICovXHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHR3aWR0aDogNTVweDtcclxuXHRcdGhlaWdodDogNTVweDtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICMzYzNlNDk7XHJcblx0XHRib3JkZXItcmFkaXVzOiA1NXB4O1xyXG5cdFx0ei1pbmRleDogMTE7XHJcblx0fVxyXG5cclxuXHQudW5pLWZhYl9fY2lyY2xlLS1sZWZ0Qm90dG9tIHtcclxuXHRcdGxlZnQ6IDE1cHg7XHJcblx0XHRib3R0b206IDMwcHg7XHJcblx0XHQvKiAjaWZkZWYgSDUgKi9cblx0XHRsZWZ0OiBjYWxjKDE1cHggKyB2YXIoLS13aW5kb3ctbGVmdCkpO1xyXG5cdFx0Ym90dG9tOiBjYWxjKDMwcHggKyB2YXIoLS13aW5kb3ctYm90dG9tKSk7XHJcblx0XHQvKiAjZW5kaWYgKi9cclxuXHR9XHJcblxyXG5cdC51bmktZmFiX19jaXJjbGUtLWxlZnRUb3Age1xyXG5cdFx0bGVmdDogMTVweDtcclxuXHRcdHRvcDogNDBweDtcclxuXHRcdC8qICNpZmRlZiBINSAqL1xuXHRcdGxlZnQ6IGNhbGMoMTVweCArIHZhcigtLXdpbmRvdy1sZWZ0KSk7XHJcblx0XHR0b3A6IGNhbGMoNDBweCArIHZhcigtLXdpbmRvdy10b3ApKTtcclxuXHRcdC8qICNlbmRpZiAqL1xyXG5cdH1cclxuXHJcblx0LnVuaS1mYWJfX2NpcmNsZS0tcmlnaHRCb3R0b20ge1xyXG5cdFx0cmlnaHQ6IDE1cHg7XHJcblx0XHRib3R0b206IDMwcHg7XHJcblx0XHQvKiAjaWZkZWYgSDUgKi9cblx0XHRyaWdodDogY2FsYygxNXB4ICsgdmFyKC0td2luZG93LXJpZ2h0KSk7XHJcblx0XHRib3R0b206IGNhbGMoMzBweCArIHZhcigtLXdpbmRvdy1ib3R0b20pKTtcclxuXHRcdC8qICNlbmRpZiAqL1xyXG5cdH1cclxuXHJcblx0LnVuaS1mYWJfX2NpcmNsZS0tcmlnaHRUb3Age1xyXG5cdFx0cmlnaHQ6IDE1cHg7XHJcblx0XHR0b3A6IDQwcHg7XHJcblx0XHQvKiAjaWZkZWYgSDUgKi9cblx0XHRyaWdodDogY2FsYygxNXB4ICsgdmFyKC0td2luZG93LXJpZ2h0KSk7XHJcblx0XHR0b3A6IGNhbGMoNDBweCArIHZhcigtLXdpbmRvdy10b3ApKTtcclxuXHRcdC8qICNlbmRpZiAqL1xyXG5cdH1cclxuXHJcblx0LnVuaS1mYWJfX2NpcmNsZS0tbGVmdCB7XHJcblx0XHRsZWZ0OiAwO1xyXG5cdH1cclxuXHJcblx0LnVuaS1mYWJfX2NpcmNsZS0tcmlnaHQge1xyXG5cdFx0cmlnaHQ6IDA7XHJcblx0fVxyXG5cclxuXHQudW5pLWZhYl9fY2lyY2xlLS10b3Age1xyXG5cdFx0dG9wOiAwO1xyXG5cdH1cclxuXHJcblx0LnVuaS1mYWJfX2NpcmNsZS0tYm90dG9tIHtcclxuXHRcdGJvdHRvbTogMDtcclxuXHR9XHJcblxyXG5cdC51bmktZmFiX19wbHVzIHtcclxuXHRcdGZvbnQtd2VpZ2h0OiBib2xkO1xyXG5cdH1cclxuXHJcblx0LmZhYi1jaXJjbGUtdiB7XHJcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHR3aWR0aDogM3B4O1xyXG5cdFx0aGVpZ2h0OiAzMXB4O1xyXG5cdFx0bGVmdDogMjZweDtcclxuXHRcdHRvcDogMTJweDtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG5cdFx0dHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcblx0XHR0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcztcclxuXHR9XHJcblxyXG5cdC5mYWItY2lyY2xlLWgge1xyXG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0d2lkdGg6IDMxcHg7XHJcblx0XHRoZWlnaHQ6IDNweDtcclxuXHRcdGxlZnQ6IDEycHg7XHJcblx0XHR0b3A6IDI2cHg7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuXHRcdHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG5cdFx0dHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3M7XHJcblx0fVxyXG5cclxuXHQudW5pLWZhYl9fcGx1cy0tYWN0aXZlIHtcclxuXHRcdHRyYW5zZm9ybTogcm90YXRlKDEzNWRlZyk7XHJcblx0fVxyXG5cclxuXHQudW5pLWZhYl9fY29udGVudCB7XHJcblx0XHQvKiAjaWZuZGVmIEFQUC1OVlVFICovXHJcblx0XHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdC8qICNlbmRpZiAqL1xyXG5cdFx0ZmxleC1kaXJlY3Rpb246IHJvdztcclxuXHRcdGJvcmRlci1yYWRpdXM6IDU1cHg7XHJcblx0XHRvdmVyZmxvdzogaGlkZGVuO1xyXG5cdFx0dHJhbnNpdGlvbi1wcm9wZXJ0eTogd2lkdGgsIGhlaWdodDtcclxuXHRcdHRyYW5zaXRpb24tZHVyYXRpb246IDAuMnM7XHJcblx0XHR3aWR0aDogNTVweDtcclxuXHRcdGJvcmRlci1jb2xvcjogI0RERERERDtcclxuXHRcdGJvcmRlci13aWR0aDogMXJweDtcclxuXHRcdGJvcmRlci1zdHlsZTogc29saWQ7XHJcblx0fVxyXG5cclxuXHQudW5pLWZhYl9fY29udGVudC0tb3RoZXItcGxhdGZvcm0ge1xyXG5cdFx0Ym9yZGVyLXdpZHRoOiAwcHg7XHJcblx0XHRib3gtc2hhZG93OiAwIDAgNXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcblx0fVxyXG5cclxuXHQudW5pLWZhYl9fY29udGVudC0tbGVmdCB7XHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcblx0fVxyXG5cclxuXHQudW5pLWZhYl9fY29udGVudC0tcmlnaHQge1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuXHR9XHJcblxyXG5cdC51bmktZmFiX19jb250ZW50LS1mbGV4RGlyZWN0aW9uIHtcclxuXHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG5cdH1cclxuXHJcblx0LnVuaS1mYWJfX2NvbnRlbnQtLWZsZXhEaXJlY3Rpb25TdGFydCB7XHJcblx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG5cdH1cclxuXHJcblx0LnVuaS1mYWJfX2NvbnRlbnQtLWZsZXhEaXJlY3Rpb25FbmQge1xyXG5cdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHRcdGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcblx0fVxyXG5cclxuXHQudW5pLWZhYl9faXRlbSB7XHJcblx0XHQvKiAjaWZuZGVmIEFQUC1OVlVFICovXHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0LyogI2VuZGlmICovXHJcblx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0d2lkdGg6IDU1cHg7XHJcblx0XHRoZWlnaHQ6IDU1cHg7XHJcblx0XHRvcGFjaXR5OiAwO1xyXG5cdFx0dHJhbnNpdGlvbjogb3BhY2l0eSAwLjJzO1xyXG5cdH1cclxuXHJcblx0LnVuaS1mYWJfX2l0ZW0tLWFjdGl2ZSB7XHJcblx0XHRvcGFjaXR5OiAxO1xyXG5cdH1cclxuXHJcblx0LnVuaS1mYWJfX2l0ZW0taW1hZ2Uge1xyXG5cdFx0d2lkdGg6IDI1cHg7XHJcblx0XHRoZWlnaHQ6IDI1cHg7XHJcblx0XHRtYXJnaW4tYm90dG9tOiAzcHg7XHJcblx0fVxyXG5cclxuXHQudW5pLWZhYl9faXRlbS10ZXh0IHtcclxuXHRcdGNvbG9yOiAjRkZGRkZGO1xyXG5cdFx0Zm9udC1zaXplOiAxMnB4O1xyXG5cdH1cclxuXHJcblx0LnVuaS1mYWJfX2l0ZW0tLWZpcnN0IHtcclxuXHRcdHdpZHRoOiA1NXB4O1xyXG5cdH1cclxuPC9zdHlsZT5cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///370\n");

/***/ }),

/***/ 371:
/*!*************************************************************************************************************************************************************!*\
  !*** /Users/tongjie/Desktop/QNRTC-Uniapp/demo/uni_modules/uni-fab/components/uni-fab/uni-fab.vue?vue&type=style&index=0&id=7d5a6316&lang=scss&scoped=true& ***!
  \*************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_11_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_11_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_fab_vue_vue_type_style_index_0_id_7d5a6316_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--11-oneOf-0-1!../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--11-oneOf-0-2!../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--11-oneOf-0-3!../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--11-oneOf-0-4!../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./uni-fab.vue?vue&type=style&index=0&id=7d5a6316&lang=scss&scoped=true& */ 372);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_11_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_11_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_fab_vue_vue_type_style_index_0_id_7d5a6316_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_11_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_11_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_fab_vue_vue_type_style_index_0_id_7d5a6316_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_11_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_11_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_fab_vue_vue_type_style_index_0_id_7d5a6316_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_11_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_11_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_fab_vue_vue_type_style_index_0_id_7d5a6316_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_11_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_11_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_fab_vue_vue_type_style_index_0_id_7d5a6316_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 372:
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--11-oneOf-0-1!./node_modules/postcss-loader/src??ref--11-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--11-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--11-oneOf-0-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!/Users/tongjie/Desktop/QNRTC-Uniapp/demo/uni_modules/uni-fab/components/uni-fab/uni-fab.vue?vue&type=style&index=0&id=7d5a6316&lang=scss&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  ".uni-fab": {
    "": {
      "position": [
        "fixed",
        0,
        0,
        16
      ],
      "justifyContent": [
        "center",
        0,
        0,
        16
      ],
      "alignItems": [
        "center",
        0,
        0,
        16
      ],
      "zIndex": [
        10,
        0,
        0,
        16
      ]
    }
  },
  ".uni-fab--active": {
    "": {
      "opacity": [
        1,
        0,
        0,
        17
      ]
    }
  },
  ".uni-fab--leftBottom": {
    "": {
      "left": [
        "5",
        0,
        0,
        18
      ],
      "bottom": [
        "20",
        0,
        0,
        18
      ],
      "paddingTop": [
        "10",
        0,
        0,
        18
      ],
      "paddingRight": [
        "10",
        0,
        0,
        18
      ],
      "paddingBottom": [
        "10",
        0,
        0,
        18
      ],
      "paddingLeft": [
        "10",
        0,
        0,
        18
      ]
    }
  },
  ".uni-fab--leftTop": {
    "": {
      "left": [
        "5",
        0,
        0,
        19
      ],
      "top": [
        "30",
        0,
        0,
        19
      ],
      "paddingTop": [
        "10",
        0,
        0,
        19
      ],
      "paddingRight": [
        "10",
        0,
        0,
        19
      ],
      "paddingBottom": [
        "10",
        0,
        0,
        19
      ],
      "paddingLeft": [
        "10",
        0,
        0,
        19
      ]
    }
  },
  ".uni-fab--rightBottom": {
    "": {
      "right": [
        "5",
        0,
        0,
        20
      ],
      "bottom": [
        "20",
        0,
        0,
        20
      ],
      "paddingTop": [
        "10",
        0,
        0,
        20
      ],
      "paddingRight": [
        "10",
        0,
        0,
        20
      ],
      "paddingBottom": [
        "10",
        0,
        0,
        20
      ],
      "paddingLeft": [
        "10",
        0,
        0,
        20
      ]
    }
  },
  ".uni-fab--rightTop": {
    "": {
      "right": [
        "5",
        0,
        0,
        21
      ],
      "top": [
        "30",
        0,
        0,
        21
      ],
      "paddingTop": [
        "10",
        0,
        0,
        21
      ],
      "paddingRight": [
        "10",
        0,
        0,
        21
      ],
      "paddingBottom": [
        "10",
        0,
        0,
        21
      ],
      "paddingLeft": [
        "10",
        0,
        0,
        21
      ]
    }
  },
  ".uni-fab__circle": {
    "": {
      "position": [
        "fixed",
        0,
        0,
        22
      ],
      "justifyContent": [
        "center",
        0,
        0,
        22
      ],
      "alignItems": [
        "center",
        0,
        0,
        22
      ],
      "width": [
        "55",
        0,
        0,
        22
      ],
      "height": [
        "55",
        0,
        0,
        22
      ],
      "backgroundColor": [
        "#3c3e49",
        0,
        0,
        22
      ],
      "borderRadius": [
        "55",
        0,
        0,
        22
      ],
      "zIndex": [
        11,
        0,
        0,
        22
      ]
    }
  },
  ".uni-fab__circle--leftBottom": {
    "": {
      "left": [
        "15",
        0,
        0,
        23
      ],
      "bottom": [
        "30",
        0,
        0,
        23
      ]
    }
  },
  ".uni-fab__circle--leftTop": {
    "": {
      "left": [
        "15",
        0,
        0,
        24
      ],
      "top": [
        "40",
        0,
        0,
        24
      ]
    }
  },
  ".uni-fab__circle--rightBottom": {
    "": {
      "right": [
        "15",
        0,
        0,
        25
      ],
      "bottom": [
        "30",
        0,
        0,
        25
      ]
    }
  },
  ".uni-fab__circle--rightTop": {
    "": {
      "right": [
        "15",
        0,
        0,
        26
      ],
      "top": [
        "40",
        0,
        0,
        26
      ]
    }
  },
  ".uni-fab__circle--left": {
    "": {
      "left": [
        0,
        0,
        0,
        27
      ]
    }
  },
  ".uni-fab__circle--right": {
    "": {
      "right": [
        0,
        0,
        0,
        28
      ]
    }
  },
  ".uni-fab__circle--top": {
    "": {
      "top": [
        0,
        0,
        0,
        29
      ]
    }
  },
  ".uni-fab__circle--bottom": {
    "": {
      "bottom": [
        0,
        0,
        0,
        30
      ]
    }
  },
  ".uni-fab__plus": {
    "": {
      "fontWeight": [
        "bold",
        0,
        0,
        31
      ]
    }
  },
  ".fab-circle-v": {
    "": {
      "position": [
        "absolute",
        0,
        0,
        32
      ],
      "width": [
        "3",
        0,
        0,
        32
      ],
      "height": [
        "31",
        0,
        0,
        32
      ],
      "left": [
        "26",
        0,
        0,
        32
      ],
      "top": [
        "12",
        0,
        0,
        32
      ],
      "backgroundColor": [
        "#FFFFFF",
        0,
        0,
        32
      ],
      "transform": [
        "rotate(0deg)",
        0,
        0,
        32
      ],
      "transitionProperty": [
        "transform",
        0,
        0,
        32
      ],
      "transitionDuration": [
        300,
        0,
        0,
        32
      ],
      "transitionTimingFunction": [
        "ease",
        0,
        0,
        32
      ],
      "transitionDelay": [
        0,
        0,
        0,
        32
      ]
    }
  },
  ".fab-circle-h": {
    "": {
      "position": [
        "absolute",
        0,
        0,
        33
      ],
      "width": [
        "31",
        0,
        0,
        33
      ],
      "height": [
        "3",
        0,
        0,
        33
      ],
      "left": [
        "12",
        0,
        0,
        33
      ],
      "top": [
        "26",
        0,
        0,
        33
      ],
      "backgroundColor": [
        "#FFFFFF",
        0,
        0,
        33
      ],
      "transform": [
        "rotate(0deg)",
        0,
        0,
        33
      ],
      "transitionProperty": [
        "transform",
        0,
        0,
        33
      ],
      "transitionDuration": [
        300,
        0,
        0,
        33
      ],
      "transitionTimingFunction": [
        "ease",
        0,
        0,
        33
      ],
      "transitionDelay": [
        0,
        0,
        0,
        33
      ]
    }
  },
  ".uni-fab__plus--active": {
    "": {
      "transform": [
        "rotate(135deg)",
        0,
        0,
        34
      ]
    }
  },
  ".uni-fab__content": {
    "": {
      "flexDirection": [
        "row",
        0,
        0,
        35
      ],
      "borderRadius": [
        "55",
        0,
        0,
        35
      ],
      "overflow": [
        "hidden",
        0,
        0,
        35
      ],
      "transitionProperty": [
        "width,height",
        0,
        0,
        35
      ],
      "transitionDuration": [
        200,
        0,
        0,
        35
      ],
      "width": [
        "55",
        0,
        0,
        35
      ],
      "borderColor": [
        "#DDDDDD",
        0,
        0,
        35
      ],
      "borderWidth": [
        "1rpx",
        0,
        0,
        35
      ],
      "borderStyle": [
        "solid",
        0,
        0,
        35
      ]
    }
  },
  ".uni-fab__content--other-platform": {
    "": {
      "borderWidth": [
        "0",
        0,
        0,
        36
      ],
      "boxShadow": [
        "0 0 5px 2px rgba(0, 0, 0, 0.2)",
        0,
        0,
        36
      ]
    }
  },
  ".uni-fab__content--left": {
    "": {
      "justifyContent": [
        "flex-start",
        0,
        0,
        37
      ]
    }
  },
  ".uni-fab__content--right": {
    "": {
      "justifyContent": [
        "flex-end",
        0,
        0,
        38
      ]
    }
  },
  ".uni-fab__content--flexDirection": {
    "": {
      "flexDirection": [
        "column",
        0,
        0,
        39
      ],
      "justifyContent": [
        "flex-end",
        0,
        0,
        39
      ]
    }
  },
  ".uni-fab__content--flexDirectionStart": {
    "": {
      "flexDirection": [
        "column",
        0,
        0,
        40
      ],
      "justifyContent": [
        "flex-start",
        0,
        0,
        40
      ]
    }
  },
  ".uni-fab__content--flexDirectionEnd": {
    "": {
      "flexDirection": [
        "column",
        0,
        0,
        41
      ],
      "justifyContent": [
        "flex-end",
        0,
        0,
        41
      ]
    }
  },
  ".uni-fab__item": {
    "": {
      "flexDirection": [
        "column",
        0,
        0,
        42
      ],
      "justifyContent": [
        "center",
        0,
        0,
        42
      ],
      "alignItems": [
        "center",
        0,
        0,
        42
      ],
      "width": [
        "55",
        0,
        0,
        42
      ],
      "height": [
        "55",
        0,
        0,
        42
      ],
      "opacity": [
        0,
        0,
        0,
        42
      ],
      "transitionProperty": [
        "opacity",
        0,
        0,
        42
      ],
      "transitionDuration": [
        200,
        0,
        0,
        42
      ],
      "transitionTimingFunction": [
        "ease",
        0,
        0,
        42
      ],
      "transitionDelay": [
        0,
        0,
        0,
        42
      ]
    }
  },
  ".uni-fab__item--active": {
    "": {
      "opacity": [
        1,
        0,
        0,
        43
      ]
    }
  },
  ".uni-fab__item-image": {
    "": {
      "width": [
        "25",
        0,
        0,
        44
      ],
      "height": [
        "25",
        0,
        0,
        44
      ],
      "marginBottom": [
        "3",
        0,
        0,
        44
      ]
    }
  },
  ".uni-fab__item-text": {
    "": {
      "color": [
        "#FFFFFF",
        0,
        0,
        45
      ],
      "fontSize": [
        "12",
        0,
        0,
        45
      ]
    }
  },
  ".uni-fab__item--first": {
    "": {
      "width": [
        "55",
        0,
        0,
        46
      ]
    }
  },
  "@VERSION": 2
}

/***/ }),

/***/ 373:
/*!***********************************************************************************************************!*\
  !*** /Users/tongjie/Desktop/QNRTC-Uniapp/demo/pages/index/index.nvue?vue&type=script&lang=js&mpType=page ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib??ref--5-0!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--5-1!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./index.nvue?vue&type=script&lang=js&mpType=page */ 374);\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXVqQixDQUFnQixpa0JBQUcsRUFBQyIsImZpbGUiOiIzNzMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNS0wIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS01LTEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgubnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNS0wIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS01LTEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgubnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///373\n");

/***/ }),

/***/ 374:
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--5-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--5-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!/Users/tongjie/Desktop/QNRTC-Uniapp/demo/pages/index/index.nvue?vue&type=script&lang=js&mpType=page ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 16);\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\nvar _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ 63));\nvar _RTCIndexNative = __webpack_require__(/*! @/js_sdk/QNRTC-UniPlugin-JS/QNRTC-UniPlugin-JS/RTCIndex.native.js */ 221);\nvar _vuex = __webpack_require__(/*! vuex */ 78);\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== \"undefined\" && o[Symbol.iterator] || o[\"@@iterator\"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\nvar _default = {\n  computed: _objectSpread({}, (0, _vuex.mapState)([\"platform\"])),\n  data: function data() {\n    return {\n      content: [{\n        iconPath: \"/static/template.png\",\n        selectedIconPath: \"/static/template.png\",\n        text: \"设置\"\n      }]\n    };\n  },\n  methods: {\n    routeGroupToGroup: function routeGroupToGroup() {\n      uni.navigateTo({\n        url: \"/pages/group-to-group/index\"\n      });\n    },\n    routeLiveStreamingDirect: function routeLiveStreamingDirect() {\n      uni.navigateTo({\n        url: \"/pages/live-streaming-direct/index\"\n      });\n    },\n    routeLiveStreamingTranscoding: function routeLiveStreamingTranscoding() {\n      uni.navigateTo({\n        url: \"/pages/live-streaming-transcoding/index\"\n      });\n    },\n    routeTrackSetting: function routeTrackSetting() {\n      uni.navigateTo({\n        url: \"/pages/track-setting/index\"\n      });\n    },\n    routeNewAudioMusicMixer: function routeNewAudioMusicMixer() {\n      uni.navigateTo({\n        url: \"/pages/audio-music-mixer/index\"\n      });\n    },\n    routeNewAudioEffectMixer: function routeNewAudioEffectMixer() {\n      uni.navigateTo({\n        url: \"/pages/audio-effect-mixer/index\"\n      });\n    },\n    handleChooseItem: function handleChooseItem(event) {\n      if (event.item.text === \"设置\") {\n        uni.navigateTo({\n          url: \"/pages/setting/index\"\n        });\n      }\n    },\n    requestPermission: function requestPermission() {\n      var permission = [\"android.permission.CAMERA\", \"android.permission.RECORD_AUDIO\", \"android.permission.WRITE_EXTERNAL_STORAGE\"];\n      if (plus.android) {\n        var _iterator = _createForOfIteratorHelper(permission),\n          _step;\n        try {\n          for (_iterator.s(); !(_step = _iterator.n()).done;) {\n            var i = _step.value;\n            plus.android.requestPermissions([i], function (resultObj) {\n              for (var i = 0; i < resultObj.granted.length; i++) {\n                var grantedPermission = resultObj.granted[i];\n                __f__(\"log\", '已获取的权限：' + grantedPermission, \" at pages/index/index.nvue:82\");\n              }\n              for (var i = 0; i < resultObj.deniedPresent.length; i++) {\n                var deniedPresentPermission = resultObj.deniedPresent[i];\n                __f__(\"log\", '拒绝本次申请的权限：' + deniedPresentPermission, \" at pages/index/index.nvue:86\");\n              }\n              for (var i = 0; i < resultObj.deniedAlways.length; i++) {\n                var deniedAlwaysPermission = resultObj.deniedAlways[i];\n                __f__(\"log\", '永久拒绝申请的权限：' + deniedAlwaysPermission, \" at pages/index/index.nvue:90\");\n              }\n            }, function (error) {\n              __f__(\"log\", '申请权限错误：' + error.code + \" = \" + error.message, \" at pages/index/index.nvue:94\");\n            });\n          }\n        } catch (err) {\n          _iterator.e(err);\n        } finally {\n          _iterator.f();\n        }\n      }\n    }\n  },\n  created: function created() {\n    if (this.platform = \"android\") {\n      this.requestPermission();\n    }\n  }\n};\nexports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 93)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvaW5kZXgvaW5kZXgubnZ1ZSJdLCJuYW1lcyI6WyJjb21wdXRlZCIsImRhdGEiLCJjb250ZW50IiwiaWNvblBhdGgiLCJzZWxlY3RlZEljb25QYXRoIiwidGV4dCIsIm1ldGhvZHMiLCJyb3V0ZUdyb3VwVG9Hcm91cCIsInVuaSIsInVybCIsInJvdXRlTGl2ZVN0cmVhbWluZ0RpcmVjdCIsInJvdXRlTGl2ZVN0cmVhbWluZ1RyYW5zY29kaW5nIiwicm91dGVUcmFja1NldHRpbmciLCJyb3V0ZU5ld0F1ZGlvTXVzaWNNaXhlciIsInJvdXRlTmV3QXVkaW9FZmZlY3RNaXhlciIsImhhbmRsZUNob29zZUl0ZW0iLCJyZXF1ZXN0UGVybWlzc2lvbiIsInBlcm1pc3Npb24iLCJwbHVzIiwiY3JlYXRlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFhQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQ0E7RUFDQUEsNEJBQ0Esa0NBQ0E7RUFDQUM7SUFDQTtNQUNBQyxVQUNBO1FBQ0FDO1FBQ0FDO1FBQ0FDO01BQ0E7SUFFQTtFQUNBO0VBQ0FDO0lBQ0FDO01BQ0FDO1FBQ0FDO01BQ0E7SUFDQTtJQUNBQztNQUNBRjtRQUNBQztNQUNBO0lBQ0E7SUFDQUU7TUFDQUg7UUFDQUM7TUFDQTtJQUNBO0lBQ0FHO01BQ0FKO1FBQ0FDO01BQ0E7SUFDQTtJQUNBSTtNQUNBTDtRQUNBQztNQUNBO0lBQ0E7SUFDQUs7TUFDQU47UUFDQUM7TUFDQTtJQUNBO0lBQ0FNO01BQ0E7UUFDQVA7VUFDQUM7UUFDQTtNQUNBO0lBQ0E7SUFDQU87TUFDQSxrRkFDQSw0Q0FDQTtNQUNBO1FBQUEsMkNBQ0FDO1VBQUE7UUFBQTtVQUFBO1lBQUE7WUFDQUMsZ0NBQ0EsS0FDQTtjQUNBO2dCQUNBO2dCQUNBO2NBQ0E7Y0FDQTtnQkFDQTtnQkFDQTtjQUNBO2NBQ0E7Z0JBQ0E7Z0JBQ0E7Y0FDQTtZQUNBLEdBQ0E7Y0FDQTtZQUNBLEVBQ0E7VUFDQTtRQUFBO1VBQUE7UUFBQTtVQUFBO1FBQUE7TUFDQTtJQUVBO0VBQ0E7RUFDQUM7SUFDQTtNQUNBO0lBQ0E7RUFDQTtBQUNBO0FBQUEsMkIiLCJmaWxlIjoiMzc0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxyXG48dmlldyBjbGFzcz1cIndyYXBcIj5cclxuXHQ8dW5pLWZhYiBob3Jpem9udGFsPVwicmlnaHRcIiA6Y29udGVudD1cImNvbnRlbnRcIiBAdHJpZ2dlcj1cImhhbmRsZUNob29zZUl0ZW1cIj48L3VuaS1mYWI+XHJcbiAgICA8dS1idXR0b24gdHlwZT1cInByaW1hcnlcIiBAY2xpY2s9XCJyb3V0ZUdyb3VwVG9Hcm91cFwiIHRleHQ9XCLlpJrkurrpgJrorq9cIj48L3UtYnV0dG9uPlxyXG4gICAgPHUtYnV0dG9uIHR5cGU9XCJwcmltYXJ5XCIgY2xhc3M9XCJtYXJnaW4tdG9wLXNtXCIgQGNsaWNrPVwicm91dGVMaXZlU3RyZWFtaW5nRGlyZWN0XCIgIHRleHQ9XCLljZXot6/ovazmjqjphY3nva5cIj48L3UtYnV0dG9uPlxyXG4gICAgPHUtYnV0dG9uIHR5cGU9XCJwcmltYXJ5XCIgY2xhc3M9XCJtYXJnaW4tdG9wLXNtXCIgQGNsaWNrPVwicm91dGVMaXZlU3RyZWFtaW5nVHJhbnNjb2RpbmdcIiB0ZXh0PVwi5ZCI5rWB6YWN572uXCI+PC91LWJ1dHRvbj5cclxuICAgIDx1LWJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiIGNsYXNzPVwibWFyZ2luLXRvcC1zbVwiIEBjbGljaz1cInJvdXRlVHJhY2tTZXR0aW5nXCIgdGV4dD1cIuWNleS6uumAmuiur1wiPuWNleS6uumAmuiurzwvdS1idXR0b24+XHJcblx0PHUtYnV0dG9uIHR5cGU9XCJwcmltYXJ5XCIgY2xhc3M9XCJtYXJnaW4tdG9wLXNtXCIgQGNsaWNrPVwicm91dGVOZXdBdWRpb011c2ljTWl4ZXJcIiB0ZXh0PVwi5re36Z+z6Z+z5LmQ6K6+572uXCI+PC91LWJ1dHRvbj5cclxuXHQ8dS1idXR0b24gdHlwZT1cInByaW1hcnlcIiBjbGFzcz1cIm1hcmdpbi10b3Atc21cIiBAY2xpY2s9XCJyb3V0ZU5ld0F1ZGlvRWZmZWN0TWl4ZXJcIiB0ZXh0PVwi5re36Z+z6Z+z5pWI6K6+572uXCI+PC91LWJ1dHRvbj5cclxuPC92aWV3PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuaW1wb3J0IHsgUU5SVEMgfSBmcm9tIFwiQC9qc19zZGsvUU5SVEMtVW5pUGx1Z2luLUpTL1FOUlRDLVVuaVBsdWdpbi1KUy9SVENJbmRleC5uYXRpdmUuanNcIlxyXG5pbXBvcnQge1xyXG4gICAgbWFwU3RhdGVcclxufSBmcm9tIFwidnVleFwiXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIGNvbXB1dGVkOiB7XHJcblx0XHRcdC4uLm1hcFN0YXRlKFtcInBsYXRmb3JtXCJdKVxyXG5cdFx0fSxcclxuXHRkYXRhKCkge1xyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0Y29udGVudDogW1xyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGljb25QYXRoOiBcIi9zdGF0aWMvdGVtcGxhdGUucG5nXCIsXHJcblx0XHRcdFx0XHRzZWxlY3RlZEljb25QYXRoOiBcIi9zdGF0aWMvdGVtcGxhdGUucG5nXCIsXHJcblx0XHRcdFx0XHR0ZXh0OiBcIuiuvue9rlwiXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRdXHJcblx0XHR9XHJcblx0fSxcclxuICAgIG1ldGhvZHM6IHtcclxuICAgICAgICByb3V0ZUdyb3VwVG9Hcm91cCgpIHtcclxuICAgICAgICAgICAgdW5pLm5hdmlnYXRlVG8oe1xyXG4gICAgICAgICAgICAgICAgdXJsOiBcIi9wYWdlcy9ncm91cC10by1ncm91cC9pbmRleFwiXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSxcclxuICAgICAgICByb3V0ZUxpdmVTdHJlYW1pbmdEaXJlY3QoKSB7XHJcbiAgICAgICAgICAgIHVuaS5uYXZpZ2F0ZVRvKHtcclxuICAgICAgICAgICAgICAgIHVybDogXCIvcGFnZXMvbGl2ZS1zdHJlYW1pbmctZGlyZWN0L2luZGV4XCJcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9LFxyXG4gICAgICAgIHJvdXRlTGl2ZVN0cmVhbWluZ1RyYW5zY29kaW5nKCkge1xyXG4gICAgICAgICAgICB1bmkubmF2aWdhdGVUbyh7XHJcbiAgICAgICAgICAgICAgICB1cmw6IFwiL3BhZ2VzL2xpdmUtc3RyZWFtaW5nLXRyYW5zY29kaW5nL2luZGV4XCJcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9LFxyXG4gICAgICAgIHJvdXRlVHJhY2tTZXR0aW5nKCkge1xyXG4gICAgICAgICAgICB1bmkubmF2aWdhdGVUbyh7XHJcbiAgICAgICAgICAgICAgICB1cmw6IFwiL3BhZ2VzL3RyYWNrLXNldHRpbmcvaW5kZXhcIlxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0sXHJcblx0XHRyb3V0ZU5ld0F1ZGlvTXVzaWNNaXhlcigpIHtcclxuXHRcdFx0dW5pLm5hdmlnYXRlVG8oe1xyXG5cdFx0XHRcdHVybDogXCIvcGFnZXMvYXVkaW8tbXVzaWMtbWl4ZXIvaW5kZXhcIlxyXG5cdFx0XHR9KVxyXG5cdFx0fSxcclxuXHRcdHJvdXRlTmV3QXVkaW9FZmZlY3RNaXhlcigpIHtcclxuXHRcdFx0dW5pLm5hdmlnYXRlVG8oe1xyXG5cdFx0XHRcdHVybDogXCIvcGFnZXMvYXVkaW8tZWZmZWN0LW1peGVyL2luZGV4XCJcclxuXHRcdFx0fSlcclxuXHRcdH0sXHJcblx0XHRoYW5kbGVDaG9vc2VJdGVtKGV2ZW50KSB7XHJcblx0XHRcdGlmKGV2ZW50Lml0ZW0udGV4dCA9PT0gXCLorr7nva5cIikge1xyXG5cdFx0XHRcdHVuaS5uYXZpZ2F0ZVRvKHtcclxuXHRcdFx0XHRcdHVybDogXCIvcGFnZXMvc2V0dGluZy9pbmRleFwiXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuICAgICAgICByZXF1ZXN0UGVybWlzc2lvbigpIHtcclxuICAgICAgICAgICAgY29uc3QgcGVybWlzc2lvbiA9IFtcImFuZHJvaWQucGVybWlzc2lvbi5DQU1FUkFcIiwgXCJhbmRyb2lkLnBlcm1pc3Npb24uUkVDT1JEX0FVRElPXCIsXHJcbiAgICAgICAgICAgICAgICBcImFuZHJvaWQucGVybWlzc2lvbi5XUklURV9FWFRFUk5BTF9TVE9SQUdFXCJcclxuICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICBpZiAocGx1cy5hbmRyb2lkKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGkgb2YgcGVybWlzc2lvbikge1xyXG4gICAgICAgICAgICAgICAgICAgIHBsdXMuYW5kcm9pZC5yZXF1ZXN0UGVybWlzc2lvbnMoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtpXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKHJlc3VsdE9iaikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCByZXN1bHRPYmouZ3JhbnRlZC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBncmFudGVkUGVybWlzc2lvbiA9IHJlc3VsdE9iai5ncmFudGVkW2ldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCflt7Lojrflj5bnmoTmnYPpmZDvvJonICsgZ3JhbnRlZFBlcm1pc3Npb24pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCByZXN1bHRPYmouZGVuaWVkUHJlc2VudC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBkZW5pZWRQcmVzZW50UGVybWlzc2lvbiA9IHJlc3VsdE9iai5kZW5pZWRQcmVzZW50W2ldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCfmi5Lnu53mnKzmrKHnlLPor7fnmoTmnYPpmZDvvJonICsgZGVuaWVkUHJlc2VudFBlcm1pc3Npb24pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCByZXN1bHRPYmouZGVuaWVkQWx3YXlzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGRlbmllZEFsd2F5c1Blcm1pc3Npb24gPSByZXN1bHRPYmouZGVuaWVkQWx3YXlzW2ldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCfmsLjkuYXmi5Lnu53nlLPor7fnmoTmnYPpmZDvvJonICsgZGVuaWVkQWx3YXlzUGVybWlzc2lvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ+eUs+ivt+adg+mZkOmUmeivr++8micgKyBlcnJvci5jb2RlICsgXCIgPSBcIiArIGVycm9yLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgY3JlYXRlZCgpIHtcclxuICAgICAgICBpZih0aGlzLnBsYXRmb3JtID0gXCJhbmRyb2lkXCIpIHtcclxuICAgICAgICAgICAgdGhpcy5yZXF1ZXN0UGVybWlzc2lvbigpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbjwvc2NyaXB0PlxyXG48c3R5bGU+XHJcblx0LndyYXAge1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogNXB4O1xyXG5cdFx0bWFyZ2luOiAwIDIwcHggMjBweDtcclxuXHRcdHBhZGRpbmc6IDEwcHggMDtcclxuXHR9XG5cdC50ZXN0IHtcblx0XHRjb2xvcjogcmVkIWltcG9ydGFudDtcblx0XHRmb250LXNpemU6IDI0dXB4O1xuXHR9XHJcbjwvc3R5bGU+XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///374\n");

/***/ }),

/***/ 375:
/*!*******************************************************************************************************************!*\
  !*** /Users/tongjie/Desktop/QNRTC-Uniapp/demo/pages/index/index.nvue?vue&type=style&index=0&lang=css&mpType=page ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-1!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--10-oneOf-0-2!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-3!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./index.nvue?vue&type=style&index=0&lang=css&mpType=page */ 376);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 376:
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-1!./node_modules/postcss-loader/src??ref--10-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!/Users/tongjie/Desktop/QNRTC-Uniapp/demo/pages/index/index.nvue?vue&type=style&index=0&lang=css&mpType=page ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  ".wrap": {
    "": {
      "borderRadius": [
        "5",
        0,
        0,
        0
      ],
      "marginTop": [
        0,
        0,
        0,
        0
      ],
      "marginRight": [
        "20",
        0,
        0,
        0
      ],
      "marginBottom": [
        "20",
        0,
        0,
        0
      ],
      "marginLeft": [
        "20",
        0,
        0,
        0
      ],
      "paddingTop": [
        "10",
        0,
        0,
        0
      ],
      "paddingRight": [
        0,
        0,
        0,
        0
      ],
      "paddingBottom": [
        "10",
        0,
        0,
        0
      ],
      "paddingLeft": [
        0,
        0,
        0,
        0
      ]
    }
  },
  ".test": {
    "": {
      "color": [
        "#FF0000",
        1,
        0,
        1
      ],
      "fontSize": [
        "24upx",
        0,
        0,
        1
      ]
    }
  },
  "@VERSION": 2
}

/***/ }),

/***/ 4:
/*!*******************************************************************!*\
  !*** ./node_modules/@dcloudio/uni-cli-shared/lib/uni-polyfill.js ***!
  \*******************************************************************/
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

/***/ }),

/***/ 42:
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toPropertyKey.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ./typeof.js */ 43)["default"];
var toPrimitive = __webpack_require__(/*! ./toPrimitive.js */ 44);
function _toPropertyKey(arg) {
  var key = toPrimitive(arg, "string");
  return _typeof(key) === "symbol" ? key : String(key);
}
module.exports = _toPropertyKey, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 43:
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

/***/ 44:
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toPrimitive.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ./typeof.js */ 43)["default"];
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

/***/ 54:
/*!******************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/uni-app-plus-nvue/dist/require-native-plugin.js ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = requireNativePlugin;
function requireNativePlugin(name) {
  return weex.requireModule(name);
}

/***/ }),

/***/ 63:
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toPropertyKey = __webpack_require__(/*! ./toPropertyKey.js */ 42);
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

/***/ 78:
/*!********************************************!*\
  !*** ./node_modules/vuex/dist/vuex.esm.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 16);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Store = void 0;
exports.createLogger = createLogger;
exports.default = exports.createNamespacedHelpers = void 0;
exports.install = install;
exports.mapState = exports.mapMutations = exports.mapGetters = exports.mapActions = void 0;
var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ 43));
/*!
 * vuex v3.6.2
 * (c) 2021 Evan You
 * @license MIT
 */
function applyMixin(Vue) {
  var version = Number(Vue.version.split('.')[0]);
  if (version >= 2) {
    Vue.mixin({
      beforeCreate: vuexInit
    });
  } else {
    // override init and inject vuex init procedure
    // for 1.x backwards compatibility.
    var _init = Vue.prototype._init;
    Vue.prototype._init = function (options) {
      if (options === void 0) options = {};
      options.init = options.init ? [vuexInit].concat(options.init) : vuexInit;
      _init.call(this, options);
    };
  }

  /**
   * Vuex init hook, injected into each instances init hooks list.
   */

  function vuexInit() {
    var options = this.$options;
    // store injection
    if (options.store) {
      this.$store = typeof options.store === 'function' ? options.store() : options.store;
    } else if (options.parent && options.parent.$store) {
      this.$store = options.parent.$store;
    }
  }
}
var target = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : {};
var devtoolHook = target.__VUE_DEVTOOLS_GLOBAL_HOOK__;
function devtoolPlugin(store) {
  if (!devtoolHook) {
    return;
  }
  store._devtoolHook = devtoolHook;
  devtoolHook.emit('vuex:init', store);
  devtoolHook.on('vuex:travel-to-state', function (targetState) {
    store.replaceState(targetState);
  });
  store.subscribe(function (mutation, state) {
    devtoolHook.emit('vuex:mutation', mutation, state);
  }, {
    prepend: true
  });
  store.subscribeAction(function (action, state) {
    devtoolHook.emit('vuex:action', action, state);
  }, {
    prepend: true
  });
}

/**
 * Get the first item that pass the test
 * by second argument function
 *
 * @param {Array} list
 * @param {Function} f
 * @return {*}
 */
function find(list, f) {
  return list.filter(f)[0];
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
function deepCopy(obj, cache) {
  if (cache === void 0) cache = [];

  // just return if obj is immutable value
  if (obj === null || (0, _typeof2.default)(obj) !== 'object') {
    return obj;
  }

  // if obj is hit, it is in circular structure
  var hit = find(cache, function (c) {
    return c.original === obj;
  });
  if (hit) {
    return hit.copy;
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
  return copy;
}

/**
 * forEach for object
 */
function forEachValue(obj, fn) {
  Object.keys(obj).forEach(function (key) {
    return fn(obj[key], key);
  });
}
function isObject(obj) {
  return obj !== null && (0, _typeof2.default)(obj) === 'object';
}
function isPromise(val) {
  return val && typeof val.then === 'function';
}
function assert(condition, msg) {
  if (!condition) {
    throw new Error("[vuex] " + msg);
  }
}
function partial(fn, arg) {
  return function () {
    return fn(arg);
  };
}

// Base data struct for store's module, package with some attribute and method
var Module = function Module(rawModule, runtime) {
  this.runtime = runtime;
  // Store some children item
  this._children = Object.create(null);
  // Store the origin module object which passed by programmer
  this._rawModule = rawModule;
  var rawState = rawModule.state;

  // Store the origin module's state
  this.state = (typeof rawState === 'function' ? rawState() : rawState) || {};
};
var prototypeAccessors = {
  namespaced: {
    configurable: true
  }
};
prototypeAccessors.namespaced.get = function () {
  return !!this._rawModule.namespaced;
};
Module.prototype.addChild = function addChild(key, module) {
  this._children[key] = module;
};
Module.prototype.removeChild = function removeChild(key) {
  delete this._children[key];
};
Module.prototype.getChild = function getChild(key) {
  return this._children[key];
};
Module.prototype.hasChild = function hasChild(key) {
  return key in this._children;
};
Module.prototype.update = function update(rawModule) {
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
Module.prototype.forEachChild = function forEachChild(fn) {
  forEachValue(this._children, fn);
};
Module.prototype.forEachGetter = function forEachGetter(fn) {
  if (this._rawModule.getters) {
    forEachValue(this._rawModule.getters, fn);
  }
};
Module.prototype.forEachAction = function forEachAction(fn) {
  if (this._rawModule.actions) {
    forEachValue(this._rawModule.actions, fn);
  }
};
Module.prototype.forEachMutation = function forEachMutation(fn) {
  if (this._rawModule.mutations) {
    forEachValue(this._rawModule.mutations, fn);
  }
};
Object.defineProperties(Module.prototype, prototypeAccessors);
var ModuleCollection = function ModuleCollection(rawRootModule) {
  // register root module (Vuex.Store options)
  this.register([], rawRootModule, false);
};
ModuleCollection.prototype.get = function get(path) {
  return path.reduce(function (module, key) {
    return module.getChild(key);
  }, this.root);
};
ModuleCollection.prototype.getNamespace = function getNamespace(path) {
  var module = this.root;
  return path.reduce(function (namespace, key) {
    module = module.getChild(key);
    return namespace + (module.namespaced ? key + '/' : '');
  }, '');
};
ModuleCollection.prototype.update = function update$1(rawRootModule) {
  update([], this.root, rawRootModule);
};
ModuleCollection.prototype.register = function register(path, rawModule, runtime) {
  var this$1 = this;
  if (runtime === void 0) runtime = true;
  if (true) {
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
ModuleCollection.prototype.unregister = function unregister(path) {
  var parent = this.get(path.slice(0, -1));
  var key = path[path.length - 1];
  var child = parent.getChild(key);
  if (!child) {
    if (true) {
      console.warn("[vuex] trying to unregister module '" + key + "', which is " + "not registered");
    }
    return;
  }
  if (!child.runtime) {
    return;
  }
  parent.removeChild(key);
};
ModuleCollection.prototype.isRegistered = function isRegistered(path) {
  var parent = this.get(path.slice(0, -1));
  var key = path[path.length - 1];
  if (parent) {
    return parent.hasChild(key);
  }
  return false;
};
function update(path, targetModule, newModule) {
  if (true) {
    assertRawModule(path, newModule);
  }

  // update target module
  targetModule.update(newModule);

  // update nested modules
  if (newModule.modules) {
    for (var key in newModule.modules) {
      if (!targetModule.getChild(key)) {
        if (true) {
          console.warn("[vuex] trying to add a new module '" + key + "' on hot reloading, " + 'manual reload is needed');
        }
        return;
      }
      update(path.concat(key), targetModule.getChild(key), newModule.modules[key]);
    }
  }
}
var functionAssert = {
  assert: function assert(value) {
    return typeof value === 'function';
  },
  expected: 'function'
};
var objectAssert = {
  assert: function assert(value) {
    return typeof value === 'function' || (0, _typeof2.default)(value) === 'object' && typeof value.handler === 'function';
  },
  expected: 'function or object with "handler" function'
};
var assertTypes = {
  getters: functionAssert,
  mutations: functionAssert,
  actions: objectAssert
};
function assertRawModule(path, rawModule) {
  Object.keys(assertTypes).forEach(function (key) {
    if (!rawModule[key]) {
      return;
    }
    var assertOptions = assertTypes[key];
    forEachValue(rawModule[key], function (value, type) {
      assert(assertOptions.assert(value), makeAssertionMessage(path, key, type, value, assertOptions.expected));
    });
  });
}
function makeAssertionMessage(path, key, type, value, expected) {
  var buf = key + " should be " + expected + " but \"" + key + "." + type + "\"";
  if (path.length > 0) {
    buf += " in module \"" + path.join('.') + "\"";
  }
  buf += " is " + JSON.stringify(value) + ".";
  return buf;
}
var Vue; // bind on install

var Store = function Store(options) {
  var this$1 = this;
  if (options === void 0) options = {};

  // Auto install if it is not done yet and `window` has `Vue`.
  // To allow users to avoid auto-installation in some cases,
  // this code should be placed here. See #731
  if (!Vue && typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
  }
  if (true) {
    assert(Vue, "must call Vue.use(Vuex) before creating a store instance.");
    assert(typeof Promise !== 'undefined', "vuex requires a Promise polyfill in this browser.");
    assert(this instanceof Store, "store must be called with the new operator.");
  }
  var plugins = options.plugins;
  if (plugins === void 0) plugins = [];
  var strict = options.strict;
  if (strict === void 0) strict = false;

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
  this.dispatch = function boundDispatch(type, payload) {
    return dispatch.call(store, type, payload);
  };
  this.commit = function boundCommit(type, payload, options) {
    return commit.call(store, type, payload, options);
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
  plugins.forEach(function (plugin) {
    return plugin(this$1);
  });
  var useDevtools = options.devtools !== undefined ? options.devtools : Vue.config.devtools;
  if (useDevtools) {
    devtoolPlugin(this);
  }
};
exports.Store = Store;
var prototypeAccessors$1 = {
  state: {
    configurable: true
  }
};
prototypeAccessors$1.state.get = function () {
  return this._vm._data.$$state;
};
prototypeAccessors$1.state.set = function (v) {
  if (true) {
    assert(false, "use store.replaceState() to explicit replace store state.");
  }
};
Store.prototype.commit = function commit(_type, _payload, _options) {
  var this$1 = this;

  // check object-style commit
  var ref = unifyObjectStyle(_type, _payload, _options);
  var type = ref.type;
  var payload = ref.payload;
  var options = ref.options;
  var mutation = {
    type: type,
    payload: payload
  };
  var entry = this._mutations[type];
  if (!entry) {
    if (true) {
      console.error("[vuex] unknown mutation type: " + type);
    }
    return;
  }
  this._withCommit(function () {
    entry.forEach(function commitIterator(handler) {
      handler(payload);
    });
  });
  this._subscribers.slice() // shallow copy to prevent iterator invalidation if subscriber synchronously calls unsubscribe
  .forEach(function (sub) {
    return sub(mutation, this$1.state);
  });
  if ( true && options && options.silent) {
    console.warn("[vuex] mutation type: " + type + ". Silent option has been removed. " + 'Use the filter functionality in the vue-devtools');
  }
};
Store.prototype.dispatch = function dispatch(_type, _payload) {
  var this$1 = this;

  // check object-style dispatch
  var ref = unifyObjectStyle(_type, _payload);
  var type = ref.type;
  var payload = ref.payload;
  var action = {
    type: type,
    payload: payload
  };
  var entry = this._actions[type];
  if (!entry) {
    if (true) {
      console.error("[vuex] unknown action type: " + type);
    }
    return;
  }
  try {
    this._actionSubscribers.slice() // shallow copy to prevent iterator invalidation if subscriber synchronously calls unsubscribe
    .filter(function (sub) {
      return sub.before;
    }).forEach(function (sub) {
      return sub.before(action, this$1.state);
    });
  } catch (e) {
    if (true) {
      console.warn("[vuex] error in before action subscribers: ");
      console.error(e);
    }
  }
  var result = entry.length > 1 ? Promise.all(entry.map(function (handler) {
    return handler(payload);
  })) : entry[0](payload);
  return new Promise(function (resolve, reject) {
    result.then(function (res) {
      try {
        this$1._actionSubscribers.filter(function (sub) {
          return sub.after;
        }).forEach(function (sub) {
          return sub.after(action, this$1.state);
        });
      } catch (e) {
        if (true) {
          console.warn("[vuex] error in after action subscribers: ");
          console.error(e);
        }
      }
      resolve(res);
    }, function (error) {
      try {
        this$1._actionSubscribers.filter(function (sub) {
          return sub.error;
        }).forEach(function (sub) {
          return sub.error(action, this$1.state, error);
        });
      } catch (e) {
        if (true) {
          console.warn("[vuex] error in error action subscribers: ");
          console.error(e);
        }
      }
      reject(error);
    });
  });
};
Store.prototype.subscribe = function subscribe(fn, options) {
  return genericSubscribe(fn, this._subscribers, options);
};
Store.prototype.subscribeAction = function subscribeAction(fn, options) {
  var subs = typeof fn === 'function' ? {
    before: fn
  } : fn;
  return genericSubscribe(subs, this._actionSubscribers, options);
};
Store.prototype.watch = function watch(getter, cb, options) {
  var this$1 = this;
  if (true) {
    assert(typeof getter === 'function', "store.watch only accepts a function.");
  }
  return this._watcherVM.$watch(function () {
    return getter(this$1.state, this$1.getters);
  }, cb, options);
};
Store.prototype.replaceState = function replaceState(state) {
  var this$1 = this;
  this._withCommit(function () {
    this$1._vm._data.$$state = state;
  });
};
Store.prototype.registerModule = function registerModule(path, rawModule, options) {
  if (options === void 0) options = {};
  if (typeof path === 'string') {
    path = [path];
  }
  if (true) {
    assert(Array.isArray(path), "module path must be a string or an Array.");
    assert(path.length > 0, 'cannot register the root module by using registerModule.');
  }
  this._modules.register(path, rawModule);
  installModule(this, this.state, path, this._modules.get(path), options.preserveState);
  // reset store to update getters...
  resetStoreVM(this, this.state);
};
Store.prototype.unregisterModule = function unregisterModule(path) {
  var this$1 = this;
  if (typeof path === 'string') {
    path = [path];
  }
  if (true) {
    assert(Array.isArray(path), "module path must be a string or an Array.");
  }
  this._modules.unregister(path);
  this._withCommit(function () {
    var parentState = getNestedState(this$1.state, path.slice(0, -1));
    Vue.delete(parentState, path[path.length - 1]);
  });
  resetStore(this);
};
Store.prototype.hasModule = function hasModule(path) {
  if (typeof path === 'string') {
    path = [path];
  }
  if (true) {
    assert(Array.isArray(path), "module path must be a string or an Array.");
  }
  return this._modules.isRegistered(path);
};
Store.prototype.hotUpdate = function hotUpdate(newOptions) {
  this._modules.update(newOptions);
  resetStore(this, true);
};
Store.prototype._withCommit = function _withCommit(fn) {
  var committing = this._committing;
  this._committing = true;
  fn();
  this._committing = committing;
};
Object.defineProperties(Store.prototype, prototypeAccessors$1);
function genericSubscribe(fn, subs, options) {
  if (subs.indexOf(fn) < 0) {
    options && options.prepend ? subs.unshift(fn) : subs.push(fn);
  }
  return function () {
    var i = subs.indexOf(fn);
    if (i > -1) {
      subs.splice(i, 1);
    }
  };
}
function resetStore(store, hot) {
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
function resetStoreVM(store, state, hot) {
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
      get: function get() {
        return store._vm[key];
      },
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
    Vue.nextTick(function () {
      return oldVm.$destroy();
    });
  }
}
function installModule(store, rootState, path, module, hot) {
  var isRoot = !path.length;
  var namespace = store._modules.getNamespace(path);

  // register in namespace map
  if (module.namespaced) {
    if (store._modulesNamespaceMap[namespace] && "development" !== 'production') {
      console.error("[vuex] duplicate namespace " + namespace + " for the namespaced module " + path.join('/'));
    }
    store._modulesNamespaceMap[namespace] = module;
  }

  // set state
  if (!isRoot && !hot) {
    var parentState = getNestedState(rootState, path.slice(0, -1));
    var moduleName = path[path.length - 1];
    store._withCommit(function () {
      if (true) {
        if (moduleName in parentState) {
          console.warn("[vuex] state field \"" + moduleName + "\" was overridden by a module with the same name at \"" + path.join('.') + "\"");
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
function makeLocalContext(store, namespace, path) {
  var noNamespace = namespace === '';
  var local = {
    dispatch: noNamespace ? store.dispatch : function (_type, _payload, _options) {
      var args = unifyObjectStyle(_type, _payload, _options);
      var payload = args.payload;
      var options = args.options;
      var type = args.type;
      if (!options || !options.root) {
        type = namespace + type;
        if ( true && !store._actions[type]) {
          console.error("[vuex] unknown local action type: " + args.type + ", global type: " + type);
          return;
        }
      }
      return store.dispatch(type, payload);
    },
    commit: noNamespace ? store.commit : function (_type, _payload, _options) {
      var args = unifyObjectStyle(_type, _payload, _options);
      var payload = args.payload;
      var options = args.options;
      var type = args.type;
      if (!options || !options.root) {
        type = namespace + type;
        if ( true && !store._mutations[type]) {
          console.error("[vuex] unknown local mutation type: " + args.type + ", global type: " + type);
          return;
        }
      }
      store.commit(type, payload, options);
    }
  };

  // getters and state object must be gotten lazily
  // because they will be changed by vm update
  Object.defineProperties(local, {
    getters: {
      get: noNamespace ? function () {
        return store.getters;
      } : function () {
        return makeLocalGetters(store, namespace);
      }
    },
    state: {
      get: function get() {
        return getNestedState(store.state, path);
      }
    }
  });
  return local;
}
function makeLocalGetters(store, namespace) {
  if (!store._makeLocalGettersCache[namespace]) {
    var gettersProxy = {};
    var splitPos = namespace.length;
    Object.keys(store.getters).forEach(function (type) {
      // skip if the target getter is not match this namespace
      if (type.slice(0, splitPos) !== namespace) {
        return;
      }

      // extract local getter type
      var localType = type.slice(splitPos);

      // Add a port to the getters proxy.
      // Define as getter property because
      // we do not want to evaluate the getters in this time.
      Object.defineProperty(gettersProxy, localType, {
        get: function get() {
          return store.getters[type];
        },
        enumerable: true
      });
    });
    store._makeLocalGettersCache[namespace] = gettersProxy;
  }
  return store._makeLocalGettersCache[namespace];
}
function registerMutation(store, type, handler, local) {
  var entry = store._mutations[type] || (store._mutations[type] = []);
  entry.push(function wrappedMutationHandler(payload) {
    handler.call(store, local.state, payload);
  });
}
function registerAction(store, type, handler, local) {
  var entry = store._actions[type] || (store._actions[type] = []);
  entry.push(function wrappedActionHandler(payload) {
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
        throw err;
      });
    } else {
      return res;
    }
  });
}
function registerGetter(store, type, rawGetter, local) {
  if (store._wrappedGetters[type]) {
    if (true) {
      console.error("[vuex] duplicate getter key: " + type);
    }
    return;
  }
  store._wrappedGetters[type] = function wrappedGetter(store) {
    return rawGetter(local.state,
    // local state
    local.getters,
    // local getters
    store.state,
    // root state
    store.getters // root getters
    );
  };
}

function enableStrictMode(store) {
  store._vm.$watch(function () {
    return this._data.$$state;
  }, function () {
    if (true) {
      assert(store._committing, "do not mutate vuex store state outside mutation handlers.");
    }
  }, {
    deep: true,
    sync: true
  });
}
function getNestedState(state, path) {
  return path.reduce(function (state, key) {
    return state[key];
  }, state);
}
function unifyObjectStyle(type, payload, options) {
  if (isObject(type) && type.type) {
    options = payload;
    payload = type;
    type = type.type;
  }
  if (true) {
    assert(typeof type === 'string', "expects string as the type, but found " + (0, _typeof2.default)(type) + ".");
  }
  return {
    type: type,
    payload: payload,
    options: options
  };
}
function install(_Vue) {
  if (Vue && _Vue === Vue) {
    if (true) {
      console.error('[vuex] already installed. Vue.use(Vuex) should be called only once.');
    }
    return;
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
  if ( true && !isValidMap(states)) {
    console.error('[vuex] mapState: mapper parameter must be either an Array or an Object');
  }
  normalizeMap(states).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;
    res[key] = function mappedState() {
      var state = this.$store.state;
      var getters = this.$store.getters;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapState', namespace);
        if (!module) {
          return;
        }
        state = module.context.state;
        getters = module.context.getters;
      }
      return typeof val === 'function' ? val.call(this, state, getters) : state[val];
    };
    // mark vuex getter for devtools
    res[key].vuex = true;
  });
  return res;
});

/**
 * Reduce the code which written in Vue.js for committing the mutation
 * @param {String} [namespace] - Module's namespace
 * @param {Object|Array} mutations # Object's item can be a function which accept `commit` function as the first param, it can accept another params. You can commit mutation and do any other things in this function. specially, You need to pass anthor params from the mapped function.
 * @return {Object}
 */
exports.mapState = mapState;
var mapMutations = normalizeNamespace(function (namespace, mutations) {
  var res = {};
  if ( true && !isValidMap(mutations)) {
    console.error('[vuex] mapMutations: mapper parameter must be either an Array or an Object');
  }
  normalizeMap(mutations).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;
    res[key] = function mappedMutation() {
      var args = [],
        len = arguments.length;
      while (len--) {
        args[len] = arguments[len];
      }

      // Get the commit method from store
      var commit = this.$store.commit;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapMutations', namespace);
        if (!module) {
          return;
        }
        commit = module.context.commit;
      }
      return typeof val === 'function' ? val.apply(this, [commit].concat(args)) : commit.apply(this.$store, [val].concat(args));
    };
  });
  return res;
});

/**
 * Reduce the code which written in Vue.js for getting the getters
 * @param {String} [namespace] - Module's namespace
 * @param {Object|Array} getters
 * @return {Object}
 */
exports.mapMutations = mapMutations;
var mapGetters = normalizeNamespace(function (namespace, getters) {
  var res = {};
  if ( true && !isValidMap(getters)) {
    console.error('[vuex] mapGetters: mapper parameter must be either an Array or an Object');
  }
  normalizeMap(getters).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    // The namespace has been mutated by normalizeNamespace
    val = namespace + val;
    res[key] = function mappedGetter() {
      if (namespace && !getModuleByNamespace(this.$store, 'mapGetters', namespace)) {
        return;
      }
      if ( true && !(val in this.$store.getters)) {
        console.error("[vuex] unknown getter: " + val);
        return;
      }
      return this.$store.getters[val];
    };
    // mark vuex getter for devtools
    res[key].vuex = true;
  });
  return res;
});

/**
 * Reduce the code which written in Vue.js for dispatch the action
 * @param {String} [namespace] - Module's namespace
 * @param {Object|Array} actions # Object's item can be a function which accept `dispatch` function as the first param, it can accept anthor params. You can dispatch action and do any other things in this function. specially, You need to pass anthor params from the mapped function.
 * @return {Object}
 */
exports.mapGetters = mapGetters;
var mapActions = normalizeNamespace(function (namespace, actions) {
  var res = {};
  if ( true && !isValidMap(actions)) {
    console.error('[vuex] mapActions: mapper parameter must be either an Array or an Object');
  }
  normalizeMap(actions).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;
    res[key] = function mappedAction() {
      var args = [],
        len = arguments.length;
      while (len--) {
        args[len] = arguments[len];
      }

      // get dispatch function from store
      var dispatch = this.$store.dispatch;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapActions', namespace);
        if (!module) {
          return;
        }
        dispatch = module.context.dispatch;
      }
      return typeof val === 'function' ? val.apply(this, [dispatch].concat(args)) : dispatch.apply(this.$store, [val].concat(args));
    };
  });
  return res;
});

/**
 * Rebinding namespace param for mapXXX function in special scoped, and return them by simple object
 * @param {String} namespace
 * @return {Object}
 */
exports.mapActions = mapActions;
var createNamespacedHelpers = function createNamespacedHelpers(namespace) {
  return {
    mapState: mapState.bind(null, namespace),
    mapGetters: mapGetters.bind(null, namespace),
    mapMutations: mapMutations.bind(null, namespace),
    mapActions: mapActions.bind(null, namespace)
  };
};

/**
 * Normalize the map
 * normalizeMap([1, 2, 3]) => [ { key: 1, val: 1 }, { key: 2, val: 2 }, { key: 3, val: 3 } ]
 * normalizeMap({a: 1, b: 2, c: 3}) => [ { key: 'a', val: 1 }, { key: 'b', val: 2 }, { key: 'c', val: 3 } ]
 * @param {Array|Object} map
 * @return {Object}
 */
exports.createNamespacedHelpers = createNamespacedHelpers;
function normalizeMap(map) {
  if (!isValidMap(map)) {
    return [];
  }
  return Array.isArray(map) ? map.map(function (key) {
    return {
      key: key,
      val: key
    };
  }) : Object.keys(map).map(function (key) {
    return {
      key: key,
      val: map[key]
    };
  });
}

/**
 * Validate whether given map is valid or not
 * @param {*} map
 * @return {Boolean}
 */
function isValidMap(map) {
  return Array.isArray(map) || isObject(map);
}

/**
 * Return a function expect two param contains namespace and map. it will normalize the namespace and then the param's function will handle the new namespace and the map.
 * @param {Function} fn
 * @return {Function}
 */
function normalizeNamespace(fn) {
  return function (namespace, map) {
    if (typeof namespace !== 'string') {
      map = namespace;
      namespace = '';
    } else if (namespace.charAt(namespace.length - 1) !== '/') {
      namespace += '/';
    }
    return fn(namespace, map);
  };
}

/**
 * Search a special module from store by namespace. if module not exist, print error message.
 * @param {Object} store
 * @param {String} helper
 * @param {String} namespace
 * @return {Object}
 */
function getModuleByNamespace(store, helper, namespace) {
  var module = store._modulesNamespaceMap[namespace];
  if ( true && !module) {
    console.error("[vuex] module namespace not found in " + helper + "(): " + namespace);
  }
  return module;
}

// Credits: borrowed code from fcomb/redux-logger

function createLogger(ref) {
  if (ref === void 0) ref = {};
  var collapsed = ref.collapsed;
  if (collapsed === void 0) collapsed = true;
  var filter = ref.filter;
  if (filter === void 0) filter = function filter(mutation, stateBefore, stateAfter) {
    return true;
  };
  var transformer = ref.transformer;
  if (transformer === void 0) transformer = function transformer(state) {
    return state;
  };
  var mutationTransformer = ref.mutationTransformer;
  if (mutationTransformer === void 0) mutationTransformer = function mutationTransformer(mut) {
    return mut;
  };
  var actionFilter = ref.actionFilter;
  if (actionFilter === void 0) actionFilter = function actionFilter(action, state) {
    return true;
  };
  var actionTransformer = ref.actionTransformer;
  if (actionTransformer === void 0) actionTransformer = function actionTransformer(act) {
    return act;
  };
  var logMutations = ref.logMutations;
  if (logMutations === void 0) logMutations = true;
  var logActions = ref.logActions;
  if (logActions === void 0) logActions = true;
  var logger = ref.logger;
  if (logger === void 0) logger = console;
  return function (store) {
    var prevState = deepCopy(store.state);
    if (typeof logger === 'undefined') {
      return;
    }
    if (logMutations) {
      store.subscribe(function (mutation, state) {
        var nextState = deepCopy(state);
        if (filter(mutation, prevState, nextState)) {
          var formattedTime = getFormattedTime();
          var formattedMutation = mutationTransformer(mutation);
          var message = "mutation " + mutation.type + formattedTime;
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
          var message = "action " + action.type + formattedTime;
          startMessage(logger, message, collapsed);
          logger.log('%c action', 'color: #03A9F4; font-weight: bold', formattedAction);
          endMessage(logger);
        }
      });
    }
  };
}
function startMessage(logger, message, collapsed) {
  var startMessage = collapsed ? logger.groupCollapsed : logger.group;

  // render
  try {
    startMessage.call(logger, message);
  } catch (e) {
    logger.log(message);
  }
}
function endMessage(logger) {
  try {
    logger.groupEnd();
  } catch (e) {
    logger.log('—— log end ——');
  }
}
function getFormattedTime() {
  var time = new Date();
  return " @ " + pad(time.getHours(), 2) + ":" + pad(time.getMinutes(), 2) + ":" + pad(time.getSeconds(), 2) + "." + pad(time.getMilliseconds(), 3);
}
function repeat(str, times) {
  return new Array(times + 1).join(str);
}
function pad(num, maxLength) {
  return repeat('0', maxLength - num.toString().length) + num;
}
var index = {
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
var _default = index;
exports.default = _default;

/***/ }),

/***/ 93:
/*!*********************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = formatLog;
exports.log = log;
function typof(v) {
  var s = Object.prototype.toString.call(v);
  return s.substring(8, s.length - 1);
}
function isDebugMode() {
  /* eslint-disable no-undef */
  return typeof __channelId__ === 'string' && __channelId__;
}
function jsonStringifyReplacer(k, p) {
  switch (typof(p)) {
    case 'Function':
      return 'function() { [native code] }';
    default:
      return p;
  }
}
function log(type) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }
  console[type].apply(console, args);
}
function formatLog() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  var type = args.shift();
  if (isDebugMode()) {
    args.push(args.pop().replace('at ', 'uni-app:///'));
    return console[type].apply(console, args);
  }
  var msgs = args.map(function (v) {
    var type = Object.prototype.toString.call(v).toLowerCase();
    if (type === '[object object]' || type === '[object array]') {
      try {
        v = '---BEGIN:JSON---' + JSON.stringify(v, jsonStringifyReplacer) + '---END:JSON---';
      } catch (e) {
        v = type;
      }
    } else {
      if (v === null) {
        v = '---NULL---';
      } else if (v === undefined) {
        v = '---UNDEFINED---';
      } else {
        var vType = typof(v).toUpperCase();
        if (vType === 'NUMBER' || vType === 'BOOLEAN') {
          v = '---BEGIN:' + vType + '---' + v + '---END:' + vType + '---';
        } else {
          v = String(v);
        }
      }
    }
    return v;
  });
  var msg = '';
  if (msgs.length > 1) {
    var lastMsg = msgs.pop();
    msg = msgs.join('---COMMA---');
    if (lastMsg.indexOf(' at ') === 0) {
      msg += lastMsg;
    } else {
      msg += '---COMMA---' + lastMsg;
    }
  } else {
    msg = msgs[0];
  }
  console[type](msg);
}

/***/ })

/******/ });