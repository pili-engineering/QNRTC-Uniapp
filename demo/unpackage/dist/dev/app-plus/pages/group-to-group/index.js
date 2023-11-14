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
/******/ 	return __webpack_require__(__webpack_require__.s = 330);
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

/***/ 10:
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!/Users/tongjie/Desktop/QNRTC-Uniapp/demo/uni_modules/uni-easyinput/components/uni-easyinput/uni-easyinput.vue?vue&type=template&id=abe12412&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
    uniIcons:
      __webpack_require__(/*! @/uni_modules/uni-icons/components/uni-icons/uni-icons.vue */ 11)
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
      staticClass: ["uni-easyinput"],
      class: { "uni-easyinput-error": _vm.msg },
      style: {
        color: _vm.inputBorder && _vm.msg ? "#dd524d" : _vm.styles.color,
      },
    },
    [
      _c(
        "view",
        {
          staticClass: ["uni-easyinput__content"],
          class: {
            "is-input-border": _vm.inputBorder,
            "is-input-error-border": _vm.inputBorder && _vm.msg,
            "is-textarea": _vm.type === "textarea",
            "is-disabled": _vm.disabled,
          },
          style: {
            "border-color":
              _vm.inputBorder && _vm.msg ? "#dd524d" : _vm.styles.borderColor,
            "background-color": _vm.disabled ? _vm.styles.disableColor : "",
          },
        },
        [
          _vm.prefixIcon
            ? _c("uni-icons", {
                staticClass: ["content-clear-icon"],
                attrs: { type: _vm.prefixIcon, color: "#c0c4cc" },
                on: {
                  click: function ($event) {
                    _vm.onClickIcon("prefix")
                  },
                },
              })
            : _vm._e(),
          _vm.type === "textarea"
            ? _c("u-textarea", {
                staticClass: ["uni-easyinput__content-textarea"],
                class: { "input-padding": _vm.inputBorder },
                attrs: {
                  name: _vm.name,
                  value: _vm.val,
                  placeholder: _vm.placeholder,
                  placeholderStyle: _vm.placeholderStyle,
                  disabled: _vm.disabled,
                  maxlength: _vm.inputMaxlength,
                  focus: _vm.focused,
                  autoHeight: _vm.autoHeight,
                },
                on: {
                  input: _vm.onInput,
                  blur: _vm.onBlur,
                  focus: _vm.onFocus,
                  confirm: _vm.onConfirm,
                },
              })
            : _c("u-input", {
                staticClass: ["uni-easyinput__content-input"],
                style: {
                  "padding-right":
                    _vm.type === "password" || _vm.clearable || _vm.prefixIcon
                      ? ""
                      : "10px",
                  "padding-left": _vm.prefixIcon ? "" : "10px",
                },
                attrs: {
                  type: _vm.type === "password" ? "text" : _vm.type,
                  name: _vm.name,
                  value: _vm.val,
                  password: !_vm.showPassword && _vm.type === "password",
                  placeholder: _vm.placeholder,
                  placeholderStyle: _vm.placeholderStyle,
                  disabled: _vm.disabled,
                  maxlength: _vm.inputMaxlength,
                  focus: _vm.focused,
                  confirmType: _vm.confirmType,
                },
                on: {
                  focus: _vm.onFocus,
                  blur: _vm.onBlur,
                  input: _vm.onInput,
                  confirm: _vm.onConfirm,
                },
              }),
          _vm.type === "password" && _vm.passwordIcon
            ? [
                _vm.val != ""
                  ? _c("uni-icons", {
                      staticClass: ["content-clear-icon"],
                      class: { "is-textarea-icon": _vm.type === "textarea" },
                      attrs: {
                        type: _vm.showPassword
                          ? "eye-slash-filled"
                          : "eye-filled",
                        size: 18,
                        color: "#c0c4cc",
                      },
                      on: { click: _vm.onEyes },
                    })
                  : _vm._e(),
              ]
            : _vm.suffixIcon
            ? [
                _vm.suffixIcon
                  ? _c("uni-icons", {
                      staticClass: ["content-clear-icon"],
                      attrs: { type: _vm.suffixIcon, color: "#c0c4cc" },
                      on: {
                        click: function ($event) {
                          _vm.onClickIcon("suffix")
                        },
                      },
                    })
                  : _vm._e(),
              ]
            : [
                _vm.clearable && _vm.val && !_vm.disabled
                  ? _c("uni-icons", {
                      staticClass: ["content-clear-icon"],
                      class: { "is-textarea-icon": _vm.type === "textarea" },
                      attrs: {
                        type: "clear",
                        size: _vm.clearSize,
                        color: "#c0c4cc",
                      },
                      on: { click: _vm.onClear },
                    })
                  : _vm._e(),
              ],
          _vm._t("right"),
        ],
        2
      ),
    ]
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 11:
/*!*********************************************************************************************************!*\
  !*** /Users/tongjie/Desktop/QNRTC-Uniapp/demo/uni_modules/uni-icons/components/uni-icons/uni-icons.vue ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _uni_icons_vue_vue_type_template_id_a2e81f6e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./uni-icons.vue?vue&type=template&id=a2e81f6e&scoped=true& */ 12);\n/* harmony import */ var _uni_icons_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./uni-icons.vue?vue&type=script&lang=js& */ 14);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _uni_icons_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _uni_icons_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 20);\n\nvar renderjs\n\n\nfunction injectStyles (context) {\n  \n  if(!this.options.style){\n          this.options.style = {}\n      }\n      if(Vue.prototype.__merge_style && Vue.prototype.__$appStyle__){\n        Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style)\n      }\n      if(Vue.prototype.__merge_style){\n                Vue.prototype.__merge_style(__webpack_require__(/*! ./uni-icons.vue?vue&type=style&index=0&id=a2e81f6e&lang=scss&scoped=true& */ 18).default, this.options.style)\n            }else{\n                Object.assign(this.options.style,__webpack_require__(/*! ./uni-icons.vue?vue&type=style&index=0&id=a2e81f6e&lang=scss&scoped=true& */ 18).default)\n            }\n\n}\n\n/* normalize component */\n\nvar component = Object(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _uni_icons_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _uni_icons_vue_vue_type_template_id_a2e81f6e_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _uni_icons_vue_vue_type_template_id_a2e81f6e_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"a2e81f6e\",\n  \"2985176b\",\n  false,\n  _uni_icons_vue_vue_type_template_id_a2e81f6e_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ninjectStyles.call(component)\ncomponent.options.__file = \"uni_modules/uni-icons/components/uni-icons/uni-icons.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBa0k7QUFDbEk7QUFDNkQ7QUFDTDtBQUN4RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxtQkFBTyxDQUFDLG1GQUEyRTtBQUMvSCxhQUFhO0FBQ2IsaURBQWlELG1CQUFPLENBQUMsbUZBQTJFO0FBQ3BJOztBQUVBOztBQUVBO0FBQ3NOO0FBQ3ROLGdCQUFnQixpTkFBVTtBQUMxQixFQUFFLCtFQUFNO0FBQ1IsRUFBRSxnR0FBTTtBQUNSLEVBQUUseUdBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsb0dBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDZSxnRiIsImZpbGUiOiIxMS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0gZnJvbSBcIi4vdW5pLWljb25zLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1hMmU4MWY2ZSZzY29wZWQ9dHJ1ZSZcIlxudmFyIHJlbmRlcmpzXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL3VuaS1pY29ucy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL3VuaS1pY29ucy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmZ1bmN0aW9uIGluamVjdFN0eWxlcyAoY29udGV4dCkge1xuICBcbiAgaWYoIXRoaXMub3B0aW9ucy5zdHlsZSl7XG4gICAgICAgICAgdGhpcy5vcHRpb25zLnN0eWxlID0ge31cbiAgICAgIH1cbiAgICAgIGlmKFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZSAmJiBWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18pe1xuICAgICAgICBWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUoVnVlLnByb3RvdHlwZS5fXyRhcHBTdHlsZV9fLCB0aGlzLm9wdGlvbnMuc3R5bGUpXG4gICAgICB9XG4gICAgICBpZihWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUpe1xuICAgICAgICAgICAgICAgIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShyZXF1aXJlKFwiLi91bmktaWNvbnMudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9YTJlODFmNmUmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiKS5kZWZhdWx0LCB0aGlzLm9wdGlvbnMuc3R5bGUpXG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMub3B0aW9ucy5zdHlsZSxyZXF1aXJlKFwiLi91bmktaWNvbnMudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9YTJlODFmNmUmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiKS5kZWZhdWx0KVxuICAgICAgICAgICAgfVxuXG59XG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcImEyZTgxZjZlXCIsXG4gIFwiMjk4NTE3NmJcIixcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmluamVjdFN0eWxlcy5jYWxsKGNvbXBvbmVudClcbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwidW5pX21vZHVsZXMvdW5pLWljb25zL2NvbXBvbmVudHMvdW5pLWljb25zL3VuaS1pY29ucy52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///11\n");

/***/ }),

/***/ 12:
/*!****************************************************************************************************************************************************!*\
  !*** /Users/tongjie/Desktop/QNRTC-Uniapp/demo/uni_modules/uni-icons/components/uni-icons/uni-icons.vue?vue&type=template&id=a2e81f6e&scoped=true& ***!
  \****************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_icons_vue_vue_type_template_id_a2e81f6e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-0!../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./uni-icons.vue?vue&type=template&id=a2e81f6e&scoped=true& */ 13);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_icons_vue_vue_type_template_id_a2e81f6e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_icons_vue_vue_type_template_id_a2e81f6e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_icons_vue_vue_type_template_id_a2e81f6e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_icons_vue_vue_type_template_id_a2e81f6e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 13:
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!/Users/tongjie/Desktop/QNRTC-Uniapp/demo/uni_modules/uni-icons/components/uni-icons/uni-icons.vue?vue&type=template&id=a2e81f6e&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
    "u-text",
    {
      staticClass: ["uni-icons"],
      class: [_vm.fontFamily, _vm.fontFamily ? _vm.type : ""],
      style: { color: _vm.color, "font-size": _vm.size + "px" },
      appendAsTree: true,
      attrs: { append: "tree" },
      on: { click: _vm._onClick },
    },
    [_vm._v(_vm._s(_vm.fontFamily ? "" : _vm.icons[_vm.type]))]
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 14:
/*!**********************************************************************************************************************************!*\
  !*** /Users/tongjie/Desktop/QNRTC-Uniapp/demo/uni_modules/uni-icons/components/uni-icons/uni-icons.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_icons_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib??ref--5-0!../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--5-1!../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./uni-icons.vue?vue&type=script&lang=js& */ 15);\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_icons_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_icons_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_icons_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_icons_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_icons_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWlrQixDQUFnQix5akJBQUcsRUFBQyIsImZpbGUiOiIxNC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS01LTAhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTUtMSEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi91bmktaWNvbnMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNS0wIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS01LTEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vdW5pLWljb25zLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///14\n");

/***/ }),

/***/ 15:
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--5-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--5-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!/Users/tongjie/Desktop/QNRTC-Uniapp/demo/uni_modules/uni-icons/components/uni-icons/uni-icons.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 16);\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\nvar _icons = _interopRequireDefault(__webpack_require__(/*! ./icons.js */ 17));\n//\n//\n//\n//\n\nvar domModule = weex.requireModule('dom');\ndomModule.addRule('fontFace', {\n  'fontFamily': \"uniicons\",\n  'src': \"url('data:font/truetype;charset=utf-8;base64,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AXcBeAF5AXoBewF8AX0BfgF/AYABgQGCAYMHdW5pMDAwMAdjb250YWN0BnBlcnNvbglwZXJzb25hZGQNY29udGFjdGZpbGxlZAxwZXJzb25maWxsZWQPcGVyc29uYWRkZmlsbGVkBXBob25lBWVtYWlsCmNoYXRidWJibGUJY2hhdGJveGVzC3Bob25lZmlsbGVkC2VtYWlsZmlsbGVkEGNoYXRidWJibGVmaWxsZWQPY2hhdGJveGVzZmlsbGVkBXdlaWJvBndlaXhpbgtwZW5neW91cXVhbgRjaGF0AnFxCHZpZGVvY2FtBmNhbWVyYQNtaWMIbG9jYXRpb24JbWljZmlsbGVkDmxvY2F0aW9uZmlsbGVkBm1pY29mZgVpbWFnZQNtYXAHY29tcG9zZQV0cmFzaAZ1cGxvYWQIZG93bmxvYWQFY2xvc2UEcmVkbwR1bmRvB3JlZnJlc2gEc3Rhcgt3aGl0ZWNpcmNsZQVjbGVhcg1yZWZyZXNoZmlsbGVkCnN0YXJmaWxsZWQKcGx1c2ZpbGxlZAttaW51c2ZpbGxlZAxjaXJjbGVmaWxsZWQOY2hlY2tib3hmaWxsZWQKY2xvc2VlbXB0eQxyZWZyZXNoZW1wdHkGcmVsb2FkCHN0YXJoYWxmDHNwaW5uZXJjeWNsZQZzZWFyY2gJcGx1c2VtcHR5B2ZvcndhcmQEYmFjaw5jaGVja21hcmtlbXB0eQRob21lCG5hdmlnYXRlBGdlYXIKcGFwZXJwbGFuZQRpbmZvBGhlbHAGbG9ja2VkBG1vcmUEZmxhZwpob21lZmlsbGVkCmdlYXJmaWxsZWQKaW5mb2ZpbGxlZApoZWxwZmlsbGVkCm1vcmVmaWxsZWQIc2V0dGluZ3MEbGlzdARiYXJzBGxvb3AJcGFwZXJjbGlwCWV5ZWZpbGxlZAx1cHdhcmRzYXJyb3cOZG93bndhcmRzYXJyb3cObGVmdHdhcmRzYXJyb3cPcmlnaHR3YXJkc2Fycm93C2Fycm93dGhpbnVwDWFycm93dGhpbmRvd24NYXJyb3d0aGlubGVmdA5hcnJvd3RoaW5yaWdodAhwdWxsZG93bgVzb3VuZARzaG9wBHNjYW4KdW5kb2ZpbGxlZApyZWRvZmlsbGVkDGNhbWVyYWZpbGxlZApjYXJ0ZmlsbGVkBGNhcnQIY2hlY2tib3gRc21hbGxjaXJjbGVmaWxsZWQOZXllc2xhc2hmaWxsZWQIZXllc2xhc2gDZXllCmZsYWdmaWxsZWQVaGFuZHRodW1ic2Rvd25fZmlsbGVkDmhhbmR0aHVtYnNkb3duEmhhbmR0aHVtYnN1cGZpbGxlZAtoZWFydGZpbGxlZAxoYW5kdGh1bWJzdXAOYmxhY2toZWFydHN1aXQKY2hhdGZpbGxlZA5tYWlsb3BlbmZpbGxlZAhtYWlsb3Blbgxsb2NrZWRmaWxsZWQJbWFwZmlsbGVkBm1hcHBpbg1tYXBwaW5lbGxpcHNlC3NtYWxsY2lyY2xlEHBhcGVycGxhbmVmaWxsZWQLaW1hZ2VmaWxsZWQMaW1hZ2VzZmlsbGVkBmltYWdlcw5uYXZpZ2F0ZWZpbGxlZA5taWNzbGFzaGZpbGxlZAtzb3VuZGZpbGxlZA5kb3dubG9hZGZpbGxlZA52aWRlb2NhbWZpbGxlZAx1cGxvYWRmaWxsZWQKaGVhZHBob25lcwt0cmFzaGZpbGxlZA1jbG91ZGRvd25sb2FkEWNsb3VkdXBsb2FkZmlsbGVkC2Nsb3VkdXBsb2FkE2Nsb3VkZG93bmxvYWRmaWxsZWQHdW5pMDAwOQAAAAAB//8AAgABAAAADAAAABYAAAACAAEAAQCFAAEABAAAAAIAAAAAAAAAAQAAAADVpCcIAAAAANoxE3MAAAAA2jSpUA==')\"\n});\n\n/**\n * Icons 图标\n * @description 用于展示 icons 图标\n * @tutorial https://ext.dcloud.net.cn/plugin?id=28\n * @property {Number} size 图标大小\n * @property {String} type 图标图案，参考示例\n * @property {String} color 图标颜色\n * @event {Function} click 点击 Icon 触发事件\n */\nvar _default = {\n  name: 'UniIcons',\n  emits: ['click'],\n  props: {\n    type: {\n      type: String,\n      default: ''\n    },\n    color: {\n      type: String,\n      default: '#333333'\n    },\n    size: {\n      type: [Number, String],\n      default: 16\n    },\n    fontFamily: {\n      type: String,\n      default: ''\n    }\n  },\n  data: function data() {\n    return {\n      icons: _icons.default\n    };\n  },\n  methods: {\n    _onClick: function _onClick() {\n      this.$emit('click');\n    }\n  }\n};\nexports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vdW5pX21vZHVsZXMvdW5pLWljb25zL2NvbXBvbmVudHMvdW5pLWljb25zL3VuaS1pY29ucy52dWUiXSwibmFtZXMiOlsiZG9tTW9kdWxlIiwibmFtZSIsImVtaXRzIiwicHJvcHMiLCJ0eXBlIiwiZGVmYXVsdCIsImNvbG9yIiwic2l6ZSIsImZvbnRGYW1pbHkiLCJkYXRhIiwiaWNvbnMiLCJtZXRob2RzIiwiX29uQ2xpY2siXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFLQTs7Ozs7O0FBRUE7QUFDQUE7RUFDQTtFQUNBO0FBQ0E7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUkEsZUFTQTtFQUNBQztFQUNBQztFQUNBQztJQUNBQztNQUNBQTtNQUNBQztJQUNBO0lBQ0FDO01BQ0FGO01BQ0FDO0lBQ0E7SUFDQUU7TUFDQUg7TUFDQUM7SUFDQTtJQUNBRztNQUNBSjtNQUNBQztJQUNBO0VBQ0E7RUFDQUk7SUFDQTtNQUNBQztJQUNBO0VBQ0E7RUFDQUM7SUFDQUM7TUFDQTtJQUNBO0VBQ0E7QUFDQTtBQUFBIiwiZmlsZSI6IjE1LmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxyXG5cdDx0ZXh0IDpzdHlsZT1cInsgY29sb3I6IGNvbG9yLCAnZm9udC1zaXplJzogc2l6ZSArICdweCcgfVwiIGNsYXNzPVwidW5pLWljb25zXCIgOmNsYXNzPVwiW2ZvbnRGYW1pbHksZm9udEZhbWlseT90eXBlOicnXVwiIEBjbGljaz1cIl9vbkNsaWNrXCI+e3tmb250RmFtaWx5ID8gJycgOiBpY29uc1t0eXBlXX19PC90ZXh0PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuXHRpbXBvcnQgaWNvbnMgZnJvbSAnLi9pY29ucy5qcyc7XHJcblx0Ly8gI2lmZGVmIEFQUC1OVlVFXHJcblx0dmFyIGRvbU1vZHVsZSA9IHdlZXgucmVxdWlyZU1vZHVsZSgnZG9tJyk7XHJcblx0ZG9tTW9kdWxlLmFkZFJ1bGUoJ2ZvbnRGYWNlJywge1xyXG5cdFx0J2ZvbnRGYW1pbHknOiBcInVuaWljb25zXCIsXHJcblx0XHQnc3JjJzogXCJ1cmwoJ2RhdGE6Zm9udC90cnVldHlwZTtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxBQUVBQUFBTkFJQUFBd0JRUmtaVVRZb0o0OHdBQUdmNEFBQUFIRWRFUlVZQUp3Q01BQUJuMkFBQUFCNVBVeTh5V1hwYzNRQUFBVmdBQUFCZ1kyMWhjQjlTQ2E4QUFBUFFBQUFESW1kaGMzRC8vd0FEQUFCbjBBQUFBQWhuYkhsbVdXZmVjUUFBQ0FRQUFGWWNhR1ZoWkJlaEFNQUFBQURjQUFBQU5taG9aV0VIK2dTSEFBQUJGQUFBQUNSb2JYUjREM0l1akFBQUFiZ0FBQUlZYkc5allhNzdtaUFBQUFiMEFBQUJEbTFoZUhBQm5BQ29BQUFCT0FBQUFDQnVZVzFsajR2YlV3QUFYaUFBQUFNNWNHOXpkSC9nMTFZQUFHRmNBQUFHY3dBQkFBQUFBUUFBR2J2VGVGOFBQUFVBQ3dRQUFBQUFBTm94RTNNQUFBQUEyalNwVUFBQS81VUVIQU5yQUFBQUNBQUNBQUFBQUFBQUFBRUFBQU9BLzRBQVhBU0FBQUFBQUFRY0FBRUFBQUFBQUFBQUFBQUFBQUFBQUFDR0FBRUFBQUNHQUp3QURBQUFBQUFBQWdBQUFBb0FDZ0FBQVA4QUFBQUFBQUFBQXdRQkFaQUFCUUFBQW9rQ3pBQUFBSThDaVFMTUFBQUI2d0F5QVFnQUFBSUFCUU1BQUFBQUFBQUFBQUFBRUFBQUFBQUFBQUFBQUFBQVVHWkZaQUJBQUIzbzZRT0EvNEFBWEFPQUFJQUFBQUFCQUFBQUFBSUFBczBBQUFBZ0FBRUVBQUFBQUFBQUFBRlZBQUFFQUFCTEJBQUFpUVFBQUNFRUFBQkxCQUFBbHdRQUFDa0VBQUJkQkFBQUp3UUFBQ2dFQUFBQUJBQUFjd1FBQUNjRUFBQW9CQUFBQUFRQUFDQUVnQUJWQkFBQWVnUUFBQ2dFQUFDY0JBQUFrZ1FBQUFnRUFBRE5CQUFBeVFRQUFOMEVBQURKQkFBQWVBUUFBQVlFQUFCQ0JBQUFWZ1FBQUdvRUFBQ0VCQUFBaEFRQUFFc0VBQUF4QkFBQU1RUUFBRXNFQUFBY0JBQUFTd1FBQUVzRUFBQkxCQUFBU3dRQUFFc0VBQUFjQkFBQVN3UUFBRXNFQUFCTEJBQUFTUVFBQU9NRUFBRUFCQUFBU3dRQUFCd0VBQUFkQkFBQWJRUUFBSjhFQUFGQUJBQUJRQVFBQUxnRUFBQUxCQUFBU3dRQUFGWUVBQUEvQkFBQVN3UUFBRXNFQUFEUkJBQUFaQVFBQUlNRUFBQUxCQUFBVmdRQUFFc0VBQUJMQkFBQVpBUUFBRkFFQUFCUkJBQUFrZ1FBQUFRRUFBQnFCQUFBQUFRQUFJd0VBQUNNQkFBQkx3UUFBUzRFQUFDN0JBQUF1d1FBQUhJRUFBQnlCQUFCSGdRQUFBMEVBQUE1QkFBQVFBUUFBREVFQUFBeEJBQUFDQVFBQUJFRUFBQVNCQUFBU1FRQUFFc0VBQUFBQkFBQUFBUUFBQUFFQUFDREJBQUFWUVFBQUR3RUFBQlZCQUFBVmdRQUFEd0VBQUJXQkFBQUtBUUFBQ1lFQUFBbUJBQUExZ1FBQUVFRUFBRmZCQUFBWndRQUFFc0VBQUEvQkFBQUJnUUFBQUFFQUFBQUJBQUFTd1FBQUhnRUFBQUFCQUFBaEFRQUFKSUVBQUNFQkFBQVJRUUFBSVFFRWdBY0JCSUFIQVFTQUJ3RUVnQWNBVlVBQUFBQUFBTUFBQUFEQUFBQUhBQUJBQUFBQUFJY0FBTUFBUUFBQUJ3QUJBSUFBQUFBZkFCQUFBVUFQQUFBQUIzaEF1RXk0Z1BpTStKazR3UGpNK05nNDJUa0NlUVI1RFRrT2VSQzVHUGtadVJvNUhMbENPVXc1VExsTmVVMzVXRGxZK1ZsNVdqbGlPV1E1Z25tRXVmVzU5bm43K2YxNS9yb0FlZ2w2RURvUitoTzZGYm9YT2hlNkdUb2FPaHU2SGZvZStpRTZKTG9vZWlrNksvb3NlaS82TnpvNXVqcC8vOEFBQUFBQUIzaEFPRXc0Z0RpTU9KZzR3RGpNdU5nNDJQa0FPUVE1RFRrTitSQTVHRGtaZVJvNUhEbEFPVXc1VExsTk9VMzVXRGxZdVZsNVdmbGdPV1E1Z25tRXVmVzU5bm43K2YwNS9yb0FlZ2k2RHZvUitoTjZGYm9YT2hlNkdUb2FPaHU2SGZvZXVpRTZKTG9vZWlrNksvb3NlaS82TnpvNU9qcC8vOEFBZi9rSHdNZTFoNEpIZDBkc1IwV0hPZ2N2Qnk2SEI4Y0dSdjNHL1ViN3h2U0c5RWIwQnZKR3p3YkZSc1VHeE1iRWhycUd1a2E2QnJuR3RBYXlScFJHa2tZaGhpRUdHOFlheGhuR0dFWVFSZ3NHQ1lZSVJnYUdCVVlGQmdQR0F3WUJ4Zi9GLzBYOVJmb0Y5b1gyQmZPRjgwWHdCZWtGNTBYbXdBQkFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFRWUFBQUVBQUFBQUFBQUFBUUlBQUFBQ0FBQUFBQUFBQUFBQUFBQUFBQUFBQVFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFFb0FtZ0VnQVdJQmtBSDRBbkFDd2dNVUE1WUQzQVFrQkU0RW9BVTBCYTRHUGdhdUJ2UUhWZ2ZzQ0ZBSWlnamdDUklKbWdua0NrQUtpZ3NVQzJvTHZnd1VESFFNMUExQURhWU4rQTQyRG1RT3FBOENEeklQY0ErYUQ5b1FFaEJBRUdvUXNCRUFFZm9TTmhKbUVub1NqaEs2RXh3VGFCUXVGSUFVMmhWSUZZd1Y2QlkrRnB3WENoZFNGNndYNEJoNEdONFpIaG1BR2Q0YUdobzhHbUlhaEJxcUd0d2JEaHRBRzNJYmhCd01ITGdkT2gxd0hhWWVFQjVvSHNnZkZCOHVINVFnQWlCU0lJb2c3aUdnSWdRaU1DTGlJelFqaENQVUpEd2tiQ1NtSk5vbE5DVmlKWndsNWlZK0pwZ20wQ2RDSjY0bitDZ3FLSElvd2lrNktjUXFKQ3F1S3c0ckRnQUFBQU1BUy8vTEE3VUROUUFMQUIwQUtRQUFCVDRCTnk0Qkp3NEJCeDRCRXc0QkJ5NEJKejRCTng0QkZ4UUdCeTRCSno0Qk55NEJKdzRCQng0QkFnQzQrQVVGK0xpNTl3VUYrTGhpakNJck1BRUV6SnlielFReEt5S01ZajlUQVFKU1B6OVRBUUpTTlFYNHVMajRCUVg0dUxqNEFSNEJPU2N3ZkVlYnpRUUV6WnRIZkRFb09Vb0JXa1pEV2dJQ1drTkdXUUFBQUFBRUFJbi84Z04zQXcwQUN3QVhBQ0lBTFFBQUFUNEJOeTRCSnc0QkJ4NEJOeTRCSno0Qk54NEJGdzRCQVNFV0p5NEJKdzRCQndZM0JqYzBOamNlQVJVV0p3SUFUMmdDQW1oUFRta0NBbWxPTUVNQkFVSXhNa0VCQVVMK3dnSWFhZ0VCeGJDd3hRRUJWaEVCblpTVW5RRVFBWUFDY2xWVWJnSUNiMVJWY1Q0Q1REbzVTZ0VCU1RrNlRmNHhBVVpic1FZR3NWdEdRZ0VOTzRrR0JvazdEUUVBQlFBaC82d0Q0QU5VQUFzQUZ3QXNBRGdBVlFBQUFUNEJOeTRCSnc0QkJ4NEJOeTRCSno0Qk54NEJGdzRCQnlJR0J4WVhOamNlQVJjV0p5RUdCeUVXSnk0QkFUNEJOeTRCSnc0QkJ4NEJOeUltUFFFakxnRTBOanNCTlRRMk1oWWRBVE15RmhRR0J5TVZGQVlDYVU1cEFnSm9UMDVwQWdKcFRqRkNBUUZDTVRGQ0FRRkNNVHBsS1JzVlAxbVVuQUVCRWY2RkFRb0JjbW9CQXNUOTRsdDhBZ0o3WEZ4N0F3TjdYQXNSVWdzUER3dFNFUmNRVWdzUER3dFNFQUhIQW5KVlZXMENBbTlUVlhJL0FVdzdPVWtCQVVrNU9rMTNHUllXSEI4QkJvazdEUUVoSUFGR1c3SCtJUUo4WEZ4N0FnSjdYRjE3U2c0TldBRVBGZzlaREE0T0RGa1BGZzhCV0EwT0FBQUFBQU1BUy8vTEE3VUROUUFMQUJjQUpBQUFCVDRCTnk0Qkp3NEJCeDRCRXg0QkZ3NEJCeTRCSno0QkFSY09BU0ltSnpjK0FUY2VBUUlBdVBnRkJmaTR1ZmNGQmZpNFAxSUNBVk0vUDFNQkFWTUJSQUV6aUphSk1nRWNobU5qaFRVRitMaTQrQVVGK0xpNCtBS25BbHBEUmxvQkFsbEdRMXIrRFFVMU9qbzFCU2xCQWdKQkFBSUFsLy8vQTJrREFRQUxBQmdBQUFFK0FUY3VBU2NPQVFjZUFRTWhNalkxTGdFbkRnRUhGQllDQUVkakFnSmpSMGRpQWdKaXhnSWFNaW9DdjZpb3Z3SXFBWXdCYWxKUlpnRUJaMUZSYXY1eUhCMVpxQVlHcUZrZEhBQUFCQUFwLzdJRDJBTk9BQXNBR2dBbUFFTUFBQUUrQVRjdUFTY09BUWNlQVJjaUJnY2VBUlVVQnlFeU5pY3VBUUUrQVRjdUFTY09BUWNlQVRjaUppYzFJeUltTkRZN0FUVStBVElXRnhVek1oWVVCaXNCRlE0QkFtOUhZZ0lDWWtkSFlnSUNZa2MzWHljdk5nZ0JiVElxQVFHLy9ldGNld01DZkZ4Y2V3SUNlMTBNRUFGUkRBOFBERkVCRUJjUUFWRU1EZzRNVVFFUUFka0NhVkpSWmdFQloxRlJhVThZRkNadVFTQWZIUnhacVA0c0FueGJYSHdDQW54Y1hIdEtEZ3haRHhjUFdRd09EZ3haRHhjUFdRd09BQUlBWGYvY0E2UURKQUFuQUU0QUFBVVdOajhCTmljMkx3RW1JZzhCQmljdUF5Y21Qd0UrQVM4QkppTW1Ed0VPQVJVVUhnSTNJaTRDSnpZM05qYytBUjhCRmhRUEFRWVVGeDRERnhZeVB3RTJNaDhCRmdZUEFRWUN6RGRRSVFrbkFRRTVmUjAvR3lFT0R4STZNaXdOQ2c0aEdnRVZWeWN1S1NzTUpDQnUwTlJkVThDcmJ3RUJNZ1FGRXljTVV3Y0tKaFlRRXpjMFFob1dNaFltQ2hVS2ZSTUJFZ1l1SXdFaEpRb3NLQzhvVmhRYUlRNEtEREl5TXhVT0RpRWJQeDE5T0FFbkNTQlFOMTNWMEc1Q2E2dkVWRWd0QXdRUUFoTjlDaFVLSmhjeEZobytORG9VRUJZbUNnWlVEQ2NVQ0RFQUFBVUFKd0FQQTlrQzhRQU5BQmNBSFFBaEFDNEFBRGNoTWpZMUVUUWpJU0lHRlJFVUNRRTJNeUV5RndFR0lnVVJOUmNISmdFUkp6Y0JJaWNsRnhZM0ZqOEJCUVlqclFLeU96K0cvVTQ2UUFHbS9yd09GQUtxRkEvK3ZSc3kvb0QzOWdFRE1QWDEvUk1TRFFFQUhDd3RMQzBjQVFBT0V3OUNRd0haaEVKQy9pZUZBVnNCUUFZSC9zRWJ1d0haQlBMekJBSGMvaUx4OGYzZ0J2MGJLd0VCS3h2OUJnQUFBZ0FvLzc0RDJBTTVBQmtBTUFBQUpUWVhGak0rQVRjdUFTY09BUWNVRmg4Qk1pTVhIZ0VYTnpZQk5pUTNGZ1FYQmdRSElpY3hKZ1lIQmo0Qkx3RXVBUUZsS1NzakpLL2tCQVRrcjYva0JFUS9FZ0VDQnhrWkFSb00vc3NGQVFySnlRRUtCUVgrOXNrcktDdFphQzFFSXgwWFNsVmtEZ2tGQkx5Smlid0VCTHlKUm53dkRRUVRMeHNOQmdGTXFPQUVCT0NvcWQ4RkJnaEZId3hIVmhrUU41a0FBQUFEQUFEL3RRUUFBdVVBSndCQUFGa0FBQmN5Tmo4QkZoY3pGeDRCTXo0QlBRRXpQZ0UzTlM0Qkp5TTFMZ0VuSVE0QkJ4RWVBUmN6RlJRM0xnRXJBU0ltSnhFK0FUTWhNaFlYRlNNT0FRY1ZGQmNIQlNjdUFTc0JJaVluTlQ0Qk15RXlGaGNWRGdFckFTSUdCL0VOR1JCNEowdDdkeEFXRFJJVUQwUlFBUUZRUkRnQlVFbitBa2RUQVFGVFJ5ODJBUThNUmpBMEFRRTBNQUgzTURRQjZVZE5BUWVEQWlaeUNoSU9kaTB4QVFFeExRRlVMVEVCQVRFdEpnd1BBU01NRDJzckFXWU5Ed0VYRlZVQlRFZlNSMHdCRzBsUEFRRlBTZjYzU1U4QllTcWpFQTR6TWdGRk1qTXpNaGtCVEVmU0hSaDVKMmNKQnpBdjBDOHdNQy9RTHpBT0R3QUFBQUVBYy8veEE0MEREd0FzQUFBbEhnRVhGamMrQVRVMEppOEJKaU1HRHdFR0lpY3VBeWNtTkQ4Qk5qYzBMd0VtQnlJR0J3NEJGUjRCQVV4ZjBWNVRPeElURFErRUhSY2NIQjhIRkFjVVBVRXpDd1VHSGg0QkZWd1lKQlVxRXg4ZEFuak5YbnNDQVQ4VEt4WVFIZ3RkRlFFZUhnWUVERE5CUFJRSUVnY2dIQndYSG9FZkFSTVNIa2twWHM4QUJBQW5BQThEMlFMeEFBb0FFUUFZQUNRQUFBRVdOd0VtSXlFaUJ3RVdCUWtCQmhVUkZBVTJOUkUwSndrQklUSTNBUWNHSWk4QkFSWUNBUm9iQVhRWVAvMU9OeFVCZHh2K1N3RXYvdEFLQTZnS0NmN1IvZ3dDc2pZVi9zd2RLbHdxSGY3TUdBRlBBUndCY1JZVi9vNGMrZ0VyQVN3U0xQNG5MaElUTFFIWkt4TCsxZjZRRkFFeUhDb3FIUDdQRlFBQUFRQW8vNzREMkFNNUFCWUFBQk0ySkRjV0JCY0dCQWNpSnpFbUJnY0dQZ0V2QVM0QktBVUJDc25KQVFvRkJmNzJ5U3NvSzFsb0xVUWpIUmRLVlFHdHFPQUVCT0NvcWQ4RkJnaEZId3hIVmhrUU41a0FBZ0FBLzdJRUFBTHRBQndBTlFBQUZ6STJQd0V1QVNjMVBnRTdBU2N1QVNjaERnRUhFUjRCRnpNVkZCWUZQZ0U5QVRNK0FUYzFMZ0VuSVE0QkhRRVVGaGN6Rng0QjVnc1NEV29RRlFFQlhsVCtBUVJIUHY0UFAwb0JBVW8vUEJFQ1dROFJKajlLQVFGS1AvNmFRa2hJUW5PRERSSWJDd3hpQ3k0czhGUmREamhDQVFGR1FmNmNRa3NCYVJFVU13RVVFR29CUzBIZFFVWUJBVVpCM1VGTEFYY01EQUFIQUNBQUdnUDZBellBQ3dBZ0FDd0FPQUJFQUUwQVZnQUFBVFltQndZbU56WVdCd1ltQVM0Qkp6UTJOejRCQndZMk56WVdCd1lXRnhZQ0F5NEJCdzRCRng0Qk56NEJBd1lXTnpZV0J3WVdOelltQVE0Qkp5NEJOejRCRng0Qkl5WU9BUjRCUGdFbU55WU9BUjRCUGdFbUF4c0pMQ01nQ3g1SldSTU5OZjZlblBFR1MwU1UweUVFR0FOemhDSUVDUXUzemhvTHJYcDZtQVVMclhwNm1Ca2pEaVZxZ3h3R1BROG51UDdYR25VOU9pb1lHMnc3UERHNUV5Z1hDU1VxR0FzcUJ3OElBdzhRQ0FRQ0V5TXhCZ00yQ3d4bFJoMFIvaVlCaDNnL2lrU05CSVlSQlFFdk1GOE5DUU5OL3NzQkFWQmFDZzU2VVZCYkNnOTZBa0lNUHdNUmtHa2tGQ0dUelAyaE9ERVNGVjgwTXpBT0VWMElEaVVrRVE0bUpDRURCZzROQndZUERRQUFBQVlBVmYvMkJCd0RDZ0FXQUI4QUtBQTVBRU1BVFFBQUFUSVhMZ0VuRGdFSEZCWVhCemNlQVRNeU55WTFQZ0VuTWhZVUJpSW1ORFlISWlZME5qSVdGQVlCTGdFbkRnRUhIZ0VYTWpZM0Z5YytBU1VpSmpRMk54NEJGQVl6SWlZME5qY2VBUlFHQXVNUkVCbS9nWkhCQkVoQkluY2dPUjhRRUFvQ296c1VGeGNvSGg3YkZCOGZKeGNYQXMwRXFIZDlvd01EbzMwWk5CcGVHalJEL29BT0ZCUU9FeGNYcVE0VUZRMFRGeGNDR3dKcWhRSURvMzFHZEMxblBBY0tBU0ltYzVoZ0Z5Y1hGeWNYVlJjbkZ4Y25GLzd1YVl3REE0eHBhb3dEQ3djMFZpZGtaUlVhRkFFQkZCc1VGUm9VQVFFVUd4UUFBQUFKQUhyLytnT0dBd1lBQndBUUFCZ0FJQUFvQUVBQVNBQlFBRmdBQUNVT0FSOEJQZ0UzSlJVV0Z6STNKeVlHRXlJSEZ4WTNOU1lGQmdjVUZ6YzJKemNPQVFjaE1qWW5CeFVVSHdFV093RXlQd0UyUFFFMEx3RW1Ld0VpRHdFR0pRY0dGek0yTnpRREVSUVdQd0V1QVFFZUFSY1JMZ0VIQWZVQ0FnS1FQR01qL2hSTldpZ2w3UUlGcHljbDdnVUJUZjVGSlFFSTdnTUdFVHhqSXdGUkFnSUN0Z0plQWdPRkF3SmVBZ0plQWdPRkF3SmVBZ0ltN1FRR3pDVUJyUVVDa0JaTi9ZUVZUalVCQkFLb0FRUUNrQlZOTlVYTkpRRUk3UUlDQWhjSDdnTUZ6U1hkVFZzb0plNEZBc2dXVFRVRkFwMkVBd0plQWdKZUFnT0VCQUpkQXdOZEF3ZnRCUUpOV3ljQkhmNndBZ0lDa0R4ai9sdzhZeU1CVVFJQ0FnQUFBQUFGQUNqL3hRUFlBenNBR0FBeEFEb0FRd0JNQUFBRk1qWS9BU0UrQVRVUk5DWWpJU0lHRlJFVUZoY3pGUlFXTnpVMEppc0JJaVkxRVRRMk15RXlGaFVSRkFZaklTSUdCd011QVNJR0ZCWXlOamN1QVNJR0ZCWXlOamMwSmlJR0ZCWXlOZ0V2RUJzVGxBRVRZR1JrWVAzWVlHUmtZQlVZS0E4Uk5VRStQa0VDS0VFK1BrSCs2aEVYREZFQklEQWdJREFneEFFZ01DQWdNQ0RFSVRBZ0lEQWhPeEVSZ3dGbFh3RklYMlZsWC82NFgyVUJieGtkVG53U0QwQS9BVWcvUUVBLy9yZy9RQWdOQVNjWUlDQXdJU0VZR0NBZ01DRWhHQmdnSURBaElRQUFBQUVBblAvWkEyUURKZ0FwQUFBbExnRW5GQVlISGdFSEJpWW5EZ0VuSmpZM0xnRTFEZ0VISWlZM05qOEJKalkzSGdFSEZ4WVhGZ1lEV2hFMkF5a3JHRHNJRThBME5NQVRDRHNZS3lrRE5oRUlBaG9NRUNZRmdJMk1nQVFtRUF3YUFuRUVUUVlvV2lZSEhoUU9BZ1lHQWc0VUhnY21XaWdHVFFST1ZpZ29YNVRLQkFUSWxsOG9LRlpPQUFBQUJBQ1NBS1VEYmdKYkFBOEFId0F0QUQ4QUFCTVZIZ0V6SVRJMlBRRTBKaU1oSWdZbklUSVdGUkVVQmlNaElpWW5FVDRCQlJVVUh3RVdOamMxTGdFUEFRWW5OejRCSGdFVkVSUU9BU1l2QVNZOUFUVGJBUlFRQVNVUEZSVVAvdHNRRkFFQmJoNHJLeDcra2g0cUFRRXFBakVISkFrVUFRRVVDU1FIS1cwSkZCUUxDeFFVQ1cwT0FlN2NEeFVWRDl3UEZSVmVLeDcrM0I0ckt4NEJKQjRydFV3SkJSNEdDZ3VHQ3dvR0hnVWxXQVlEQ1JJTC91SUxFZ2tDQjFnTEVYQVJBQUFBQUFVQUNQL25BL2dER1FBYkFEc0FSd0JWQUdRQUFCY2hOamNSSmlzQklpWXZBUzRCS3dFaUJnOEJEZ0VyQVNJSEVSWTNJaVkxRVRRMk93RXlOajhCUGdFN0FUSVdId0VlQVRzQk1oWVZFUlFHSXlVK0FUY3VBU2NPQVFjZUFRRXlOamMwTGdFaURnRVZGQllYQVM0Qkp6NEJOekllQWhRT0FvOEM0b1lCQVlaa0dCb05JdzhuSWFzZ0tBOGpEUm9ZWVlZQkFZY2dJeU1nY1Iwa0VDSVJIaHgvSEI0UkloQWtIWFFnSXlNZy9wQmtnd01EZzJSa2d3TURnd0dZRmg0QkRoa2NHUTRlRi83TVNGOENBbDlJSWowd0dob3dQUmtCaEFIQmhBMFFKaElURXhJbUVBMkUvaitFUkNJaUFia2lJUTRTSlJRUER4UWxFZzRoSXY1SElpSkVBNFJrWklRQ0FvUmtaSVFCVVI0V0R4Z09EaGdQRmg0Qi91OEJZRWhJWHdJWk1ENUVQakFaQUFBQUFBTUF6ZisxQXpNRFN3QU5BQmtBUWdBQUFSRXVBU2NPQVFjUkhnRVhQZ0VuRkFZaUpqVVJORFl5RmhjQklnWVVGak1oTWpZMEppc0JOVDRCTnpVMEppSUdIUUVPQVFjdUFTYzFOQ1lpQmdjVkhnRVhGUUtjQVZWR1JsVUJBVlZHUmxWQU1WTXlNbE14QWY3bERoSVNEZ0YvRFJNVERhQjlsQUlUR3hNQmdYQnZnZ0VUR2hNQkFwUjlBWlVCRGt0YkFnSmJTLzd5UzF3QkFWeExNRGc0TUFFT01EYzNNUDFURXhzVEV4c1RaQXlnZ0ZjTkV4TU5WVytDQWdLQ2IxVU5FeE1OVjRDZ0RHUUFBZ0RKLzhRRE53TTNBQkFBSHdBQUFTNEJKdzRCQng0Qkh3RVdNajhCUGdFbFBnRTNIZ0VYQmdJSEJpSW5KZ0lDN2dLQ2FtcUNBZ0pzV1FvTEpBc0tXV3o5M1FPd2hJU3dBd200U1JRekUwbTRBZHVCa1FFQmtZRkwwblVPRFEwT2RkTktwclVCQWJXbWcvN1lWaFlXVlFFcEFBQUNBTjMveEFNakF6d0FEUUEyQUFBQkVTNEJKdzRCQnhFZUFSYytBUUVPQVJRV015RXlOalFtSnlNMVBnRTNOVFFtSWdZSEZRNEJCeTRCSnpVdUFTSUdIUUVlQVJjVkFvSUJSem82UndFQlJ6bzZSLzYzRFJNVERRR1FEUk1URGFoM2l3RVNHaElCQVgxbVpuMEJBUklhRWdHTGRnR0FBVEk5VEFFQlREMyt6anhOQVFGTi9zRUJFeG9URXhvVEFWNE1tbmRsRFJJU0RXVmtmQUlDZkdSbERSSVNEV1YzbWd4ZUFBQUFBZ0RKLzhRRE53TTNBQTRBR2dBQUV6NEJOeDRCRndZQ0J3WWlKeVlDSlQ0Qk55NEJKdzRCQng0QnlRT3doSVN3QXdtNFNSUXpFMG00QVM0dlBnRUJQaTh2UGdFQlBnSGJwclVCQWJXbWcvN1lWaFlXVlFFcE9nRStMeTgrQVFFK0x5OCtBQVVBZVAvQUE0Y0RRQUFSQUIwQVBnQktBRmtBQUFFZUFSMEJGeEV1QVNjT0FROEJGelUrQVFFV01qWTBKd0VtSWdZVUZ4TWlCaFFXTXlFeU5qUW1Ld0UxTmpjbkJnY3VBU2MxTkNZaUJoMEJIZ0VYRlFFMEppSUdCeFVVQnhjMk5RVXlOamNuQmlNaUppYzFKeFVlQVFIb0pTeENBazlDT2t3SkFUOEJMQUdMQ2hzVEN2MDBDaHNVQ3A0TkV4TU5BWkFORXhNTnAxSTdMalZMWm53Q0Voc1NBb3AzQVVNU0doSUJCVFVQL3RVWkpBNDFCZzhpSmdGQ0FVMERBZ0V6Sjg1Q0FRNUVWZ0VCUXpZTlBpd25NLzBkQ2hNYkNnTE5DaFFiQ3YwV0V4b1RFeG9UWGdncUxpUUJBbjFrWlEwU0VnMWxkNXNNWGdIaERSSVNEV1VaR1RNdU41TUpDVFFIS1NJYVExUktTUUFBQXdBRy8vVUQrZ01MQUF3QUh3QXJBQUFYSVRJM0VTWW5JU0lIRVJZekFTNEJEd0VuSmljaUR3RVJOak1oTWhZVkVTVStBVGN1QVNjT0FRY2VBWTBDNW9ZQkFZYjlHb1lCQVlZQ1FSMUhIY0ZRR3g0ZEdvQUJRUUxrSUNMOWtpbzVBUUU1S2lzNUFRRTVDb1FDRElRQmhmMzBoUUdNR2dFYnJVZ1lBUmh6QWRoRElTTCtKOU1CT2lvck9RSUNPU3NxT1FBQUFBUUFRdi9SQTc0REx3QWJBQ1VBTEFBNEFBQUZNajhCTmpVUkppY2lEd0VuSmlJUEFRWVZFUlFXTXpJL0FSY1dKU0kxRVRRL0FSRUhCZ1VtTHdFUkh3RVRFVGMyTnhZWEVSUVBBUVlDalJnVDRTVUJNQThVNU9rVE1CVGVKaG9YRHhYWjdSaitHQVlPd01JREFkWUpDYm9OdjBYQ0JBSUZBUTZzQ2k4TGZ4VXJBbEl3QVF0K2pnd01meFVxL2E0WUdneDFoUXhwQndJVER3bHYvY3hyQVE0RkJXa0NNZ2gwL2M4Q05Xa0NBUUVHL2UwUUNHUUdBQUFEQUZiL3pRT21BekFBQ1FBUkFDa0FBQUUzTmpRdkFTWUdEd0VCTndFbkFRY0dGZ01oTWpZM0VRY1JEZ0VqSVNJbkVUWXpJVGNoSWdjUkZnTjhId3NMQ2dvYkN4LytUVk1CZXp2K2hpY0NDYXNCOXpvL0FVVUJIaGYrQzBFQ0FrRUJjMFgrUjRZQkFRTEtId3diQ3dzS0Fnb2YvZ2NrQVhvNi9vWlFCZ3IrdzBOQ0FkMUYvbXNoSWtNQjUwTkZoUDRTaFFBQUJnQnEvNkVEbGdOZkFCOEFLUUF6QUVBQVRRQlpBQUFsRXpNeU5qUW1KeU0xTkNZbkl3NEJCeFVqRGdFVUZqc0JFeDRCRnlFK0FRRTBOanNCTWhZZEFTTURMZ0VuQXlFRERnRUhKekkyTnhNMEppSUdCd01VRmlNeU5qVUROQ1lpQmhVVEhnRTNFVFFtSWdZSEVSNEJNallETGg0ckRSSVNEYnc1TXFFeU9BRzZEUk1URFNzZEF6Z3ZBWWt1T1A1ZUdCU1dGQmp1UnhNWUFSNENEeHdCR0JRL0N3NEJEQTRWRGdFTkR2TUxEZzBQRlE0TkFRMmtEeFVQQVFFUEZROEdBbk1TR3hNQlFDNDJBUUUyTGtBQkVod1MvWTB2TlFFQk5RTWZFaGNYRWp6OUp3RVlFd0pzL1pRVEdBRk1EdzBCeEEwUER3eitPd3dRRUF3QnhRd1BEdzMrUEEwUEhBSEZEQThQRFA0N0RCQVFBQUFBQWdDRS81d0RmUU5rQUJvQU9BQUFKVEkyTlJFbkZ4WXlOalF2QVNZaUR3RU9BUll5UHdFSEVSUVdBeUUySnhFMkp5TVZNeklXRlJFVUJpTWhKaWNSTmpjek5TTWlGUkVVQWdBT0ZBSmRDaHNTQ3BFTUdneVJDUUVSSEFwZUF4VG9BZXlIQVFHSGQzWWdJaUlnL2hkQ0FRRkNkbmlHN0JNT0FiaEFZd29RR3dtTURBeU1DUm9SQ21SQi9rZ09FLzZ3QVlRQnA0UUJSU0lpL21FaUlnRkRBWjlEQVVXRi9sbUZBQUFBQUFJQWhQK3hBMzBEVGdBYUFEZ0FBQ1V5UHdFMk5DWWlEd0UzRVRRbUlnWVZFUmNuSmlJR0ZoOEJGZ01oTWljUk5pY2pGVE15RmhVUkZBWWpJU0luRVRZM016VWpCaFVSRkFJQURReVJDaEliQ2wwQ0ZCd1VBMTRLSEJFQkNwQU02UUhzaHdFQmgzeDdJQ0lpSVA0WFFnRUJRbnA4aHNzTWl3b2JFQXBrUUFIRURoTVREdjQ4UUdRS0VCc0tpdzMrNklRQnU0UUJSU01oL2swaUlVTUJzME1CUlFHRS9rV0ZBQU1BUy8vTEE3VUROUUFMQUJjQU5BQUFCVDRCTnk0Qkp3NEJCeDRCTnk0Qkp6NEJOeDRCRnc0QkpUSS9BUmNXTWpZMEx3RTNOalFtSWc4Qkp5WWlCaFFmQVFjR0ZCWUNBTGo0QlFYNHVMbjNCUVg0dUp2TkJBVE1uSnZOQkFQTy90SVBDbnA1Q2g0VENucDdDaFFjQ250N0Nod1VDbnA2Q2hRMUJmaTR1UGdGQmZpNHVQaEVCTXljbTgwRUJNMmJuTXl5QzNwNkNoTWVDWHA3Q2h3VUNudDZDaE1kQ25wNkNSNFRBQUFDQURILzlnUFBBd2tBSUFBK0FBQUZNalkzQVRZMEp3RXVBU01pQmgwQkl3WUNGeDRCTXhZMk56NEJGek1WRkJZM0lqMEJOQWNqRGdFSEJpSTFQZ0UzTXhZOUFUUTJNaGNCRmhRSEFRWUNLdzhjRUFGU0Z4ZityaElaRHhjY0RlYlZBUUVaRWc0YkN6aW5ldzBjTHdZT09wbkNKUUlGQXF6Wk9nNERCd01CTVFVRi9zOEVDUTRPQVQ4WUxCZ0JQQkFQSGhlaUF2N3c4QndkQVEwVGFGQUJwQlljWEFhbUR3RUJYMUlFQlo3eEJ3RVBxZ01EQS83YkJBZ0UvdDhFQUFBQ0FESC85Z1BQQXdrQUlBQStBQUFGTWpZOUFUTTJGaGNlQVRjeU5qYzJBaWNqTlRRbUl5SUdCd0VHRkJjQkhnRW5JaWNCSmpRM0FUWXlGaDBCRkRjekhnRVhGQ0luTGdFbkl5WWRBUlFCMVJZY0RYdW5Od3diRGhJWkFRSFY1ZzBjRnc4YUVmNnVGeGNCVWhBYkNRTUUvczhGQlFFeEF3Y0REanJackFJR0FTWENtVG9PQ1J3V3BBRlFaeFFOQVIwYzhBRVFBNklXSGc4US9zUVlMQmord1E0T1hBUUJJUVFJQkFFbEF3TURxZzhCQi9HZkJBUlNYd0VCRDZZR0FBQURBRXYveXdPMUF6VUFDd0FYQUVNQUFBVStBVGN1QVNjT0FRY2VBVGN1QVNjK0FUY2VBUmNPQVFFZUFSYytBVGMwSmlJR0ZRNEJCeTRCSno0Qk56SVhCd1llQVRJL0FUWTBMd0VtSWdZVUh3RW1JdzRCQWdDNCtBVUYrTGk1OXdVRitMaWJ6UVFFekp5YnpRUUR6djZsQW14U1VXc0NFUmdSQWtvNE9Vb0NBa281Q0FjcUNBRU9Gd2hUQ0FoU0NCZ09CeDRHQmtwcU5RWDR1TGo0QlFYNHVMajRSQVRNbkp2TkJBVE5tNXpNQVZSU2JRSUNiVkVNRUJBTU9Vb0NBa281T0VvQ0FTa0lHQThJVXdnWENWUUlFQmNJSHdFQ2FRQUNBQnovc1FQa0Ewa0FHUUE5QUFBWEZqOEJGeFkySndNM05pWWpCUU1tSWdjREpTSUdId0VEQmpjaVB3RTJMd0VtTmpNRkZqOEJOaklmQVJZM0pUSVdEd0VHSHdFV0JpOEJKZzhCQnRzYUtPUGpLRFVRV2VVb0ZETCs1MVVQUVJCVi91Y3hGU25sV2hCWkFRRlZDUmJWQXdFRUFRTWFDRW9DQXdGS0NCb0JCQU1CQTlVV0NsVUJBZ1BPRmhYUEFqd1RIcWFtSGljdUFRdWtIRDhDQVF3dkwvNzBBajhjcFA3MUxrRUU5UmtQa3dJREJRRWErQVFFK0JvQkJRTUNrdzhaOVFRQ0E1MFFFSjRDQUFBREFFdi95d08xQXpVQUN3QVhBRFFBQUFVK0FUY3VBU2NPQVFjZUFUY3VBU2MrQVRjZUFSY09BU2MrQVRjMU16STJOQ1luSXpVdUFTSUdIUUVqRGdFVUZqc0JGUlFXQWdDNCtBVUYrTGk1OXdVRitMaWJ6UVFFekp5YnpRUUR6cHdSRXdHR0VoWVZFNFlCRXlJU2hoTVdGeEtHRWpVRitMaTQrQVVGK0xpNCtFUUV6SnlielFRRXpadWN6SndCRlJOL0VpTVNBWVlURmhZVGhnRVNJeEovRWhZQUFBTUFTLy9MQTdVRE5RQUxBQmNBSXdBQUJUNEJOeTRCSnc0QkJ4NEJOeTRCSno0Qk54NEJGdzRCQVNFeU5qUW1JeUVpQmhRV0FnQzQrQVVGK0xpNTl3VUYrTGlielFRRXpKeWJ6UVFEenY2NEFWa1NGaFVUL3FjVEZoYzFCZmk0dVBnRkJmaTR1UGhFQk15Y204MEVCTTJibk13QlJCSWlFeE1pRWdBQ0FFdi95d08xQXpVQUN3QVhBQUFGUGdFM0xnRW5EZ0VISGdFM0xnRW5QZ0UzSGdFWERnRUNBTGo0QlFYNHVMbjNCUVg0dUp2TkJBVE1uSnZOQkFQT05RWDR1TGo0QlFYNHVMajRSQVRNbkp2TkJBVE5tNXpNQUFBQUFBSUFTLy9MQTdVRE5RQUxBQ2dBQUFVK0FUY3VBU2NPQVFjZUFUY2lKalEvQVNjbU5EWXlId0UzTmg0Q0R3RVhGaFFHSWk4QkJ3WUNBTGo0QlFYNHVMbjNCUVg0SGc4VkM0Q0FDeFVlQ29HQkN4MFVBUXVBZ0FvVkhncUFnQXMxQmZpNHVQZ0ZCZmk0dVBqeUZSNEtnWUFLSGhRS2dJQU1BUlFlQ29HQUNoOFZDb0dCQ2dBQUFBQUNBRXYveXdPMUF6VUFDd0EzQUFBRlBnRTNMZ0VuRGdFSEhnRURQZ0UzTWhjbkpqUTJNaDhCSGdFUEFRWWlKalEvQVNZSERnRUhIZ0VYUGdFM05EWXlGaFVPQVFjdUFRSUF1UGdGQmZpNHVmY0ZCZmdMQTJ0TUJnWWZCdzhZQ0ZRSEFRaFVDUmNQQ0NvSENEcE1BUUZNT2psTEFoRVpFUUp0VWxOdU5RWDR1TGo0QlFYNHVMajRBWjVTYXdJQkh3Z1lFQWhXQ0JnSVZBZ1BHQWdxQVFFQlN6azZTd0lDU3pvTUVSRU1VMjRDQW04QUFBQUJBQnovc1FQa0Ewa0FHUUFBRnhZL0FSY1dOaWNETnpZbUl3VURKaUlIQXlVaUJoOEJBd2JiR2lqajR5ZzFFRm5sS0JReS91ZFZEMEVRVmY3bk1SVXA1Vm9RUEJNZXBxWWVKeTRCQzZRY1B3SUJEQzh2L3ZRQ1B4eWsvdlV1QUFBQ0FFdi95d08xQXpVQUN3QW9BQUFGUGdFM0xnRW5EZ0VISGdFM0lpWTlBU01pSmpRMk93RTFORFl5RmgwQk16SVdEZ0VyQVJVVUJnSUF1UGdGQmZpNHVmY0ZCZmkzRWhPTkV4Y1dGSTBUSkJTTkZCY0JGaFNORkRVRitMaTQrQVVGK0xpNCtOc1hFNFVUSlJPT0V4Y1dGSTRUSlJPRkZCWUFBQUFBQWdCTC84c0R0UU0xQUFzQUZ3QUFCVDRCTnk0Qkp3NEJCeDRCRXlJbU5EWXpJVElXRkFZakFnQzQrQVVGK0xpNTl3VUYrQU1VRnhjVUFXb1VGaGNUTlFYNHVMajRCUVg0dUxqNEFZb1RKUk1USlJNQUF3QkwvOHNEdFFNMUFBc0FGd0FqQUFBRlBnRTNMZ0VuRGdFSEhnRTNMZ0VuUGdFM0hnRVhEZ0VuUGdFM0xnRW5EZ0VISGdFQ0FMajRCUVg0dUxuM0JRWDR1SnZOQkFUTW5Kdk5CQVBPbTNTZUF3T2VkSGFkQXdPZU5RWDR1TGo0QlFYNHVMajRSQVRNbkp2TkJBVE5tNXpNVWdPZWRYV2VBd09lZFhXZUFBQUNBRW4veVFPM0F6Y0FDd0FnQUFBRkxnRW5QZ0UzSGdFWERnRVRKaUlQQVFZaUx3RW1JZ1lVSHdFV01qOEJOalFDQUxyNEJRWDR1cnI0QlFYNEN3a2FDY2dLR1FrN0Noa1RDV2dKR1FyMENUY0YrTHE2K0FVRitMcTYrQUpHQ1FuSUNnbzZDaE1aQ21jSkNmUUtHUUFBQVFEakFHTURIUUtkQUJzQUFEY0dGQll5UHdFWEZqSTJOQzhCTnpZMEppSVBBU2NtSWdZVUh3SHVDeFlmRE56Y0N4OFhDOXpjQ3hjZkM5emNEQjhXQzl1a0N4OFhDOXpjQ3hjZkM5emNDeDhYQzl6Y0N4Y2ZDOXdBQUFBQkFRQUFnQU1BQXRnQUZnQUFKUzRCSno0Qk56VVhCelVPQVFjZUFSYytBVGN6RGdFQ0FHMlFBd09RYmNEQVhIb0NBbnBjWEhvQ0tBT1FnQU9RYlcyUUExaUFiMjhDZWx4Y2VnSUNlbHh0a1FBQUFBQUJBRXYvblFPMUExNEFLUUFBQlQ0Qk55NEJKeVlPQVJZWEhnRVhEZ0VITGdFblBnRTNGUjRCUHdFMk5DOEJKZ1lIRlE0QkJ4NEJBZ0M0K0FVQllsUVBIUkVIRFVWUkFRUE9tNXZOQkFPYWZBRVpFb29PRG9rU0dnR1p4Z01GK0dNRitMaHR1RDBMQlJ3YkNqS1lYWnZOQkFUTm00WEFIajRXREExZ0Noc0xZQXdMRnowZzY2SzQrQUFBQUFJQUhQK3hBK1FEU1FBWkFDMEFBQmNXUHdFWEZqWW5BemMySmlNRkF5WWlCd01sSWdZZkFRTUdKUkUySHdFV055VXlGZzhCQmg4QkZnWXZBU2JiR2lqajR5ZzFFRm5sS0JReS91ZFZEMEVRVmY3bk1SVXA1Vm9RQVVBQ0FVb0lHZ0VFQXdFRDFSWUtWUUVDQTg0S1BCTWVwcVllSnk0QkM2UWNQd0lCREM4di92UUNQeHlrL3ZVdTV3SWlBUVQ0R2dFRkF3S1REeG4xQkFJRG5RZ0FBQUFNQUIzL25RUGpBMk1BREFBWkFDWUFNd0JBQUUwQVdnQm5BSFFBZ1FDT0FKc0FBQUVpQmdjVkhnRXlOamMxTGdFSERnRWZBUjRCUGdFdkFTNEJCU1lHRHdFR0hnRTJQd0UySmdVR0ZoOEJGajRCSmk4QkpnWUZMZ0VQQVE0QkhnRS9BVDRCRnpRbUp5TU9BUlFXRnpNK0FTVVVGaGN6UGdFMEppY2pEZ0VGTmlZdkFTWU9BUllmQVJZMkpSNEJQd0UrQVM0QkR3RU9BUVUrQVM4QkxnRU9BUjhCSGdFbEZqWS9BVFl1QVFZUEFRWVdGekkyTnpVdUFTSUdCeFVlQVFJQURSRUJBUkVhRVFFQkVmNE1CZ1pNQnhnV0J3ZE1CeGNCMkF3WENFd0dCeFlZQjB3R0J2MWdCZ2NMaEFzWURRWU1oQXNZQXo4SEdBdUZDd1lORnd5RUN3YzZFUTZZRFJFUkRaZ09FZnc2RVEyWkRSRVJEWmtORVFPR0JnY0xoQXdYRFFZTGhBd1kvTUVIR0F1RkN3WU5HQXVFQ3djQ21nd0dCa3dIR0JjR0Jrd0lGLzRwQ3hjSVN3Y0dHQmNIVEFZRy9RMFJBUUVSR2hFQkFSRURZeEVPbUEwUkVRMllEaEZBQnhnTGhRc0dEUmdMaEFzSEJnWUhDNFFMR1F3R0M0VUxHS29NRndoTUJnWVhHQWRNQmdZTURBWUdUQWNZRndZR1RBZ1g1ZzBSQVFFUkdoRUJBUkVORFJFQkFSRWFFUUVCRWY0TEZ3aE1CZ1lYR0FkTUJnWU1EQVlHVEFjWUZ3WUdUQWdYdlFjWUM0VUxCZzBYRElRTEJ3WUdCd3VFREJjTkJneUVDeGhIRVE2WURSRVJEWmdPRVFBQUFBSUFiZi9wQTVRREZ3QVZBQ0VBQUNVeU5qY1hGakkrQVM4QlBnRTNMZ0VuRGdFSEhnRTNMZ0VuUGdFM0hnRVhEZ0VCdGpSaEs4c09LaG9CRHNvZ0l3RUV1b3lNdWdNRHVveHRrd0lDazIxdGt3TURrNFFnSHNzT0d5a1B5aXBsT1l1N0F3TzdpNHk2UXdPVGJXMlNBd09TYlcyVEFBQUFBQUVBbndBWEEyRUM2QUFjQUFBbFBnRTFFU0UrQVRRbUl5RVJOQ1lpQmhVUklTSUdGQllYSVJFVUZnSUFFQllCRlJBV0ZoRCs2eFlnRnY3ckVCWVdFQUVWRmhjQkZROEJIUUVXSUJZQkhnOFZGUS8rNGhZZ0ZnSCs0dzhWQUFBQUFBRUJRQUJBQXNBQ3dBQUZBQUFCTndrQkp3RUJRRUVCUC83QlFRRC9BbjlCL3NEK3dFRUEvd0FCQVVBQVFBTEFBc0FBQlFBQUFTY0pBVGNEQXNCQi9zRUJQMEgvQW45Qi9zRCt3RUVBL3dBQUFRQzRBSVVEV2dKL0FCY0FBQUVYRmhRSEFRWWlMd0VtTkQ4Qk5qSWZBUll5TndFMk1nTkREUW9LL2x3TEhReTFDd3NOQ3gwTGRRd2RDd0ZqQ3gwQ2RBMExIUXYrWEFzTHRnc2REQXdMQzNVS0NnRmpDd0FBQUFJQUMvKzlBL1VEUXdBbkFEMEFBQmNoUGdFMUVSY1dGekkyTnlZdkFUVTBKaWNqRGdFZEFTY21JZ2NCQmdjZUFUTTJQd0VSRkJZQk5DWXJBU0lHRlJFakppY1JBVDRCRndFUkJnY2o1d0l6TGpJM0RSSVFGQUVCREpVUkRqZ09FYW9YT0JmK1N3d0JBUlFRRWcwM013SENFUSsyRHhLUEtRRUJKZ2NRQndFbUFTbVFRd0V4TFFHSE1nNEJFZzhUQ29mOURoQUJBUkFPa1pvVkZmNXlDUk1QRWdFT012NTVMakFCWVE4UkVRLys0d0VxQWJVQkRBWUJCLzcwL2tzcUFRQUFBQUFEQUV2L3l3TzFBelVBQ3dBWEFDd0FBQVUrQVRjdUFTY09BUWNlQVRjdUFTYytBVGNlQVJjT0FTVXlQd0UyTWg4QkZqSTJKaWNESmlJSEF3WVVGZ0lBdVBnRkJmaTR1ZmNGQmZpNG04MEVCTXljbTgwRUE4Nyt0UXNHbEFZS0JwTUlGUTBCQTZRTEtncWxBd3cxQmZpNHVQZ0ZCZmk0dVBoRUJNeWNtODBFQk0yYm5NeUlCNVFGQlpRSERSTUpBYU1hR3Y1ZENCUU5BQVFBVnYvVEE2d0RLZ0F0QUdZQWNnQitBQUFsTmpjK0FUYzJOeVkyTnlZbkJpWTNOU1luQndZaUx3RUhGUllHSnlNSEZ4WVVEd0VXRnpNMkZnY1dGejRCQnlZbk56WW1Ed0VtSnpjMk5DOEJOamNYRmpZdkFUWTNGeFl5UHdFV0Z3Y0dGajhCRmhjSEJoUWZBUVlISnlZR0h3RUdCeWNtSWc4QkV6NEJOeTRCSnc0QkJ4NEJGeTRCSno0Qk54NEJGdzRCQW9ZUER3SmxUUWNHTndJNEJBWlNhUUlMREFJNmx6b0dFd0pyVXdvSEJqMDlBd1VGQkZKckFRNE9PSkdzUXpzQ0FUb3ZNU01SSnlFaEtROGdPQzg2QVFNNFBpVWdVeUFpUURjQ0FUc3VMQ01PSGlJaUhCRWxKUzg2QVFJOFJCa2dVeUFjWHk4K0FRRStMeTgrQVFFK0wwWmRBZ0pkUmtaZEFnSmRHd1lIVFdVQ0R3ODVrVGdPRGdGclVnUUZCUU05UFFjSUNsTnJBaE1HT3BjNUF3d0xBbWxTQmdRNEFuNE9JeXd2T2dFQ04wQWlJRk1nSlQ0NEF3RTZMemdnRHlraElTY1JJekV2T2dFQ08wTWNJRk1nR1VROEFnRTdMaVVsRVJ3aUloOEJQd0UrTHk4K0FRRStMeTgrT0FKZFJrWmRBZ0pkUmtaZEFBQUFBQU1BUC8rL0E4RURRUUFVQUNBQUxRQUFCVEkyTndFMk5DWWlCd0VPQVJVVUZoY0ZFeDRCQXlVbU5EY2xOajhCQndZSEF5SW5Bd0UrQVRjSEJnY0RCZ0pYRnlJTUFSa01HQ3NlL1I4Y0pDZ2ZBVFZhQ1J4ci90Z0tDUUpFR1JreExoY1NtQVFEV2dFbUVpZ1JGd3dLMndSQkpSOEMzUjRyR0F6KzVRb2hGeDBjQ1ZyK3ppRXBBYjFhQXdnRTJ3b01GeVVURXYxNUNnRW9BU2NTTUJZeEdScjl2QWtBQkFCTC84c0R0UU0xQUFzQUZ3QWdBRGtBQUFVK0FUY3VBU2NPQVFjZUFUY3VBU2MrQVRjZUFSY09BUU15TmpRbUlnWVVGZ016UGdFMEppc0JOVFFtS3dFaUJoUVdPd0VWSXlJR0ZCWUNBTGo0QlFYNHVMbjNCUVg0dUp2TkJBVE1uSnZOQkFQT254Z2ZIekFmSURDdURoRVJEalVSRUZFTkVoSU5MalVPRVJFMUJmaTR1UGdGQmZpNHVQaEVCTXljbTgwRUJNMmJuTXdDQVNBdklDQXZJUDU3QVJBYUVkb1NGUkVhRWNVUkdoQUFBQUFBQkFCTC84c0R0UU0xQUFzQUZ3QThBRVVBQUFVK0FUY3VBU2NPQVFjZUFUY3VBU2MrQVRjZUFSY09BUU0rQVQwQk5EWTNQZ0UzTGdFT0FRY0dGUlFXTXpJMk56WTNIZ0VWRkFZSERnRWRBUlFYUGdFMEppSUdGQllDQUxqNEJRWDR1TG4zQlFYNHVKdk5CQVRNbkp2TkJBUE9wQkFURlJZZ0p3RUNUbkJGQ1FRU0N4SVBDUlVySFNNYkhCZ2VJUk1iR2ljYkd6VUYrTGk0K0FVRitMaTQrRVFFekp5YnpRUUV6WnVjekFFUEFSRU5CUkViRHhNdkpUWTRBU3NlQ3dzT0R4RU1KUUVCSFJrVkhoSVFKeDhHSW9BQkdTWVpHU1laQUFBQUFBTUEwZi9MQXk4RE5RQVVBQndBS3dBQUFTSUdCeFVHRlJFVUZqTWhNalkxRVRRbk5TNEJCejRCTWhZWEZTRUZNaFlWRVJRR0l5RUdOUkUwTmpNQ0FGMkZBMG93TUFHZU1EQktBNFg5QWxxSVdnTCt3QUZ0RHc0T0QvNW1IUTRQQXpXQmcySUpXLzdGTkRFeE5BRTdXd2xpZzRIN1dsOWZXbWxCRGhMK3ZCSVBBU0lCUkJJT0FBQUdBR1FCTGdPZEFkTUFDQUFTQUJzQUpRQXVBRGdBQUFFZUFSUUdJaVkwTmpjT0FSUVdNalkwSmljRkhnRVVCaUltTkRZM0RnRVVGakkyTkNZbkJSNEJGQVlpSmpRMk53NEJGQll5TmpRbUp3SUFGQm9hS0JvYUZDTXZMMFl2THlQK3RoTWJHeWNhR2hRa0xpNUhMeThqQXBVVUdob25HeHNUSXk4dlJ5NHVKQUd2QVJvb0dob29HaVVCTDBZdkwwWXZBU1FCR2lnYUdpZ2FKUUV2Umk4dlJpOEJKQUVhS0JvYUtCb2xBUzlHTHk5R0x3RUFBQUFBQWdDRC85c0RmUU1sQUNFQU5BQUFGejRCTnpVK0FUY2VBUmN5UGdJM0VTNEJJdzRCQnk0Qkp5SU9BZ2NSSGdFQkxnRW5JZ1lIRVQ0Qk14NEJGelkzRVE0QnBBNFNBUWc2TUhPNGJURTFMUm9CQVJrVEQwQTNicmQwTVRVdEdnRUJFZ0k1WjdsNEpEd1NCRFl5YnJoelJpd0ZOU1VCRWc3dUJBOEJCVVFGQ3hVa0hRRzBFUk1CRUFFRlJBVUxGU1FkL1RnT0VnRVZCVVFGQ0FnQmt3c1dCRVFGQVEzK2J3c1dBQUFBQUFJQUMvKzlBL1VEUXdBaEFEa0FBQk1lQVRNMk53RTJNaGNCRmhjeU5qY21Md0UxTkNZbkl3NEJIUUVuSmlJSEFRWVRGQllYTXhFME5qY3pIZ0VWRVRNK0FUVVJBU1lpQndFTEFSUVFFZzBCb2djUUJ3R2lEUklRRkFFQkRKVVFEamtPRWFvWE9CZitTd3g2TXkydUVnK1hEeEt0TGpMK2xBY1BCLzZWQVlNUEVnRU9BWDBIQi82RERnRVNEeE1LaC8wT0VBRUJFQTZTbXhVVi9uTUsvb1l0TVFFQk1ROFJBUUVSRC83UEFURXRBVGtCU0FjSC9yWUFBQUFBQWdCVy85TURyQU1xQURnQVJBQUFCU1luTnpZbUR3RW1KemMyTkM4Qk5qY1hGall2QVRZM0Z4WXlQd0VXRndjR0ZqOEJGaGNIQmhRZkFRWUhKeVlHSHdFR0J5Y21JZzhCTno0Qk55NEJKdzRCQng0QkFhRkRPd0lCT2k4eEl4RW5JU0VwRHlBNEx6b0JBemcrSlNCVElDSkFOd0lCT3k0c0l3NGVJaUljRVNVbEx6b0JBanhFR1NCVElCeGZUbWNDQW1kT1RtY0NBbWNzRGlNc0x6b0JBamRBSWlCVElDVStPQU1CT2k4NElBOHBJU0VuRVNNeEx6b0JBanRESENCVElCbEVQQUlCT3k0bEpSRWNJaUlmOWdKblRrNW5BZ0puVGs1bkFBTUFTLy9MQTdVRE5RQUxBQlFBTFFBQUJUNEJOeTRCSnc0QkJ4NEJFeUltTkRZeUhnRUdBeTRCTkRZN0FUVWpJaVkwTmpzQk1oWWRBVE15RmhRR0J3SUF1UGdGQmZpNHVmY0ZCZmkwRnlBZk1COEJJVjRPRVJFT05TNE5FaElOVVJBUk5RNFJFUTQxQmZpNHVQZ0ZCZmk0dVBnQ1NTQXZJQ0F2SVA1N0FSQWFFY1VSR2hFVkV0b1JHaEFCQUFBQUFBTUFTLy9MQTdVRE5RQUxBREFBT1FBQUJUNEJOeTRCSnc0QkJ4NEJFeUk5QVRRMk56NEJOVFFtSndZSERnRWpJaVluTkRjK0FoWVhEZ0VIRGdFZEFSUUdCeUltTkRZeUZnNEJBZ0M0K0FVRitMaTU5d1VGK0xBa0h4a2VIQ1FmTFJVS0VSSUxFd0VFQ1VsMlVnSUJLU0VYR0JJUUV4d2NKeHdCSERVRitMaTQrQVVGK0xpNCtBRlRJd1loS1JFVElCWWFIZ0VDSmcwUkVBOExDeUF0QVRzNEp6RVZEeHdUQlE0U2dSb3BHUmtwR2dBQUFBTUFaQUV1QTUwQjB3QUpBQk1BSFFBQUFRNEJGQll5TmpRbUp5RU9BUlFXTWpZMEppY2hEZ0VVRmpJMk5DWW5BZ0FqTHk5R0x5OGovcllrTGk1SEx5OGpBcFVqTHk5SExpNGtBZE1CTDBZdkwwWXZBUUV2Umk4dlJpOEJBUzlHTHk5R0x3RUFBQUFBQmdCUUFCTURzQUxzQUJnQUlRQTVBRUlBV3dCa0FBQUJNalkzTXpJMk5DWXJBUzRCSWdZSElTSU9BUll6SVI0Qk55NEJORFl5RmhRR0JTSUdGQllYTXg0Qk1qWTNJVDRDSmljaExnRWlCZ2NYSWlZME5oNEJGQVlCUGdFM016STJOQ1luSXk0QklnWUhJUTRCSGdFeklSNEJOeUltTkRZeUhnRUdBcG9oTkF5VURSTVREWlFNTTBRMEMvNDZEeE1CRlE0QnhnczBJaFljSFNvY0hQM0NEUk1URFprTE5FUTBDd0hCRHhNQkZRNytQd3MwUkRNTVlSVWRIU3NjSEFFWklqTUxsUTBURXcyVkN6UkROQXYrT2c0VkFSTVBBY1lMTkNJVkhSd3JIQUVlQWg4bEh4UWRGQjRtSmg0VUhSUWZKVFFCSENzZEhDd2NzaE1lRXdFZUppVWZBUk1kRkFFZUpTVWVWUjBxSFFFY0t4eit4UUVsSHhNZUV3RWZKQ1FmQVJRZEV4OGxOQjBySEJ3ckhRQUFBQVlBVVFCSEE3QUN1UUFJQUJRQUhRQXBBRElBUGdBQUV6NEJOQ1lPQVJRV055RXlOalFtSnlFT0FSUVdBekkyTkNZaUJoUVdOeUUrQVM0Qkp5RU9BUlFXQXo0Qk5DWU9BUlFXTnlFeU5qUW1KeUVPQVJRV2hoWWdJQzBlSHRVQ1NROFRFdy85dHc4VEU2OFdJQ0F0SGg3VkFra09GUUVURC8yM0R4TVRyeGNmSUMwZUh0VUNTUThURXcvOXR3OFRFd0pOQVI4c0lBRWVMaDRURXg0VEFRRVRIaFArNlNBc0lCOHVIaElCRkIwVEFRRVRIaFArNlFFZUxTQUJIaTRlRXhNZUV3RUJFeDRUQUFBQUFBTUFrZ0NsQTIwQ1d3QU1BQmtBSmdBQUV6NEJNeUV5RmhRR0J5RWlKaFUrQVRjaEhnRVVCZ2NoTGdFVlBnRTNJUjRCRkFZaklTSW1rZ0VVRUFLU0VCUVVFUDF1RHhZQkZCQUNraEFVRkJEOWJnOFdBUlFRQXBJUUZCUVEvVzRQRmdJM0R4VVZIeFFCRnFnUUZBRUJGQ0FVQVFFVnFCQVVBUUVVSHhVVkFBQUFBZ0FFLzg4RC9BTVlBQjBBT3dBQUFTTXVBU2NPQVFjR0hnRTJOejRCTng0QkZ5TWlCaDhCRmpJL0FUWW1CVE1lQVJjK0FUYzJMZ0VHQnc0QkJ5NEJKek0rQVM4QkxnRVBBUVlXQTlvNEZlaWxYNk03Q3dJWkdnc3lpVTJId1JNOUZnc01YQW9hQ2wwTUMvdzFPQlhvcFYrak93c0NHQnNLTUlsUWlNQVRQUllMREZ3S0dncGREQXNCbjZIVUJBRk9SQTBkRVFRTU9UNEJBNnFHR1JHRURnNkRFaGxZb2RNRUFVNUREaDBSQkF3NFB3RUNxb1lCR0JLRERnRVBneEVaQUFBQUFBRUFhdiszQTUwRFVBQXpBQUFKQVFZdUFqY0JQZ0VYRmdZSEFRWXVBamNCUGdFbUJnY0JEZ0VYRmpZM0FUWTBKeTRCQndFR0ZoY2VBVGNCTmk0QkJnTW0vc1Uva0cwRFBBR3VKbDRsSWdZbC9sd1FJaGNERHdFbENnRVRHQXIrMlNBQkhpQlRJZ0dtUERVMWpELytVRTRFU0V2RFV3RTlDZ0VUR2dGdy9zVTlCRzJQUUFHdEpnY2pKVjRtL2x3UUJCY2hFUUVsQ2hnVEFRcisyaUpWSGlBQ0lRR21Qb3MyTkFFOC9sQlR3MHRJQkU0QlBRb2NFd0VBQUFBQUF3QUFBQzhFQUFLeUFBc0FGd0FnQUFBbE5pUTNKaVFuQmdRSEZnUTNMZ0VuUGdFM0hnRVhEZ0VuTWpZMEppSUdGQllDQU9jQkZRUUUvdXJtNWY3cEJBUUJHT1JhZHdJQ2QxcGFkd0lDZDFvZ0xDdEJMQ3d2RGU1SFJ1NE5EZTVHUis1aUEzZFpXbllDQW5aYVdYZUVMRUFySzBBc0FBQUFBUUNNQUs4RGRBSlJBQkFBQURjR0ZCWXlOd2tCRmpJMk5DY0JKaUlIbHdzV0lnc0JNUUV4Q3lJV0MvNjBEQ0lNOFFvakZRc0JPUDdJQ3hVakNnRlVEQXdBQUFBQkFJd0FyZ04wQWxJQUVRQUFKVFkzQVRZMEpnWUhDUUV1QVFZVUZ3RVdBZ0FSREFGTUN4Y2dEUDdQL3M4TUlCY0xBVXdNcmdFTUFWUUxJQmdCQy83SUFUZ0xBUmdnRFA2dERBQUFBUUV2QUF3QzBRTDBBQkFBQUNVV01qWTBKd2tCTmpRbUlnY0JCaFFYQW84TEloVUwvc2dCT0FzVklndityQXdNRndzV0lRd0JNUUV4RENFV0MvNjBEQ0lNQUFBQkFTNEFEQUxSQXZRQUVRQUFKVEkzQVRZMEp3RW1JZ1lXRndrQkJoUVdBVllRREFGVERBeityUXdnR0FFTEFUait5QXNXREFzQlRBMGhEQUZMREJjZ0RQN1AvczhMSWhZQUFBQUFBUUM3LytzRFJRTVZBQndBQUFVeU5qVVJKeDhCRmpJMk5DY0JKaUlIQVFZVUZqSS9BZ2NSRkJZQ0FCRVZBNEJpQ3lBVkRQN2tEU0FNL3VNTUZTQUxZb0FERlJVVkVRSTBYSTFnQ2hVZkRRRWREUTMrNHcwZkZRcGdqVno5ekJFVkFBQUFBQUVBdS8vckEwVURGUUFjQUFBQklnWVZFUmN2QVNZaUJoUVhBUll5TndFMk5DWWlEd0kzRVRRbUFnQVJGUU9BWWdzZ0ZRd0JIQTBnREFFZERCVWdDMktBQXhVREZSVVIvY3hjaldBS0ZSOE4vdU1ORFFFZERSOFZDbUNOWEFJMEVSVUFBQUFCQUhJQU93T09Bc1lBSEFBQUV4UVhBUll5TmpRdkFoY2hNalkwSmlNaEJ6OEJOaTRDQndFR2NnMEJIUTBmRlFwZ2tXZ0NIaEVWRlJIOTRtZVFZQXNCRlI4Ty91UU5BWUFRRGY3a0RCVWdDMktEQmhVaUZRYURZZ3NnRlFFTy91VU5BQUFBQVFCeUFEc0RqZ0xHQUJ3QUFBRTBKd0VtRGdFVUh3SW5JU0lHRkJZeklUY1BBUVlVRmpJM0FUWURqZzMrNUE0ZkZRcGdrV2o5NGhFVkZSRUNIbWlSWUFvVkh3MEJIUTBCZ0JBTkFSc09BUlVnQzJLREJoVWlGUWFEWWdzZ0ZRd0JIQTBBQUFFQkhnQUhBdG9DM3dBR0FBQWxFeU1SSXhFakFmemVrWnVRQndFb0FiRCtVQUFBQUFRQURmLzNBL01EQ1FBWkFDNEFSUUJiQUFBRk1qWTFFVFFtSXlJR0R3RUdLd0VtSFFFVU56TXlId0VlQVNVV05qYytBVFFtSnk0QkRnRVhIZ0VVQmdjR0ZnVWlMd0V1QVNzQkJqMEJORHNCTWpZL0FUWXlGUkVVTnhZMk56NEJOQ1luTGdFSERnRVhIZ0VVQmdjR0ZnSDJGaHdjRnc4YUVja0VCMzliVzM4SEJNa1FHd0dDRFJzS0tpOHVLd29iR1FNSkpDZ29KQWtEL29FREJMNElEZ2lQR1JtUENBNEl2Z01LMmd3YUNob2NIUmtLR2d3T0F3b1RGUllTQ2dNSkhCWUNxeGNlRHhDeUJBRmdxMkFCQkxRT0RsY0lCZzA3bDZhWFBBMEZFUnNQTklHUWdqTU9IQVlFcXdjRkFScTFHUVFJckFNRy9iQUdjQWdGRFNKZFpsMGpEQVVIQ2gwT0drZE9SeG9PSEFBQUJnQTUvOThEMGdNaUFDUUFUQUJRQUdJQVpnQnlBQUFCTkRFbUx3RXVBUWNoSmdZUEFnWVZIZ0VYTXpJMk54NEJOelkzSGdFek1SWTNQZ0VIQmlzQklpWXZBUWNHQndZSElpWXZBUWNPQVNzQkxnRTlBVFEvQWpZM0lUSVdId0lXQmdjbUp3Y1hJd1lIRlNFMUppY1JGQll6SVRJMk5SRWxKaWNIQVNFaUpqUTJOeUVlQVJRR0E3NEJBa3dMTkNIOTVDQXlDMU1CQ1FGaVN3Y29SeG96ampzTUNocEhLQzRwT2krTUZ4a0VHQ29QT0RnR0NCMG1GeW9QT1RnUUtoY0dMRG9GQWxJRkRnSW5Cd3dEVEFJTUhOb0NBZ1B4QWg4ai9aWW5JaDhYQXBBWEgvMy9BZ0VEQVd2K1BCQVdGaEFCeEJBV0ZnSVVBUVVFd1I4a0FRRWlIOGdGSEI1Tlp3TWlJRHNNTUFzTUlDRUJGaUY1V2d3VUUwUkVDQVlZQVJRVFJFVVNGUUk5TGdFU0VRWEhEZ0VLQjhNR0tFbHJBUUVDQ2c4RzRPRUhFdjcwRnhzYkZ3RUtCd0VCQWdFQUZSOFVBUUVVSHhVQUFBQUZBRUQvNEFQQUF5QUFDd0FmQURNQVNBQmRBQUFCSVNJbU5EWXpJVElXRkFZREl5SW1ORFk3QVRJMlBRRTBOaklXSFFFT0FRVWpMZ0VuTlRRMk1oWWRBUlFXT3dFeUZoUUdBeUltUFFFK0FUY3pNaFlVQmlzQklnWWRBUlFHSVNJbVBRRTBKaXNCSWlZME5qc0JIZ0VYRlJRR0E2RDh3QTRTRWc0RFFBNFNFbTdBRGhJU0RzQU9FaEljRWdFMi9mZWdLVFlCRWh3U0VnNmdEaElTN2c0U0FUWXBvQTRTRWc2Z0RoSVNBdklPRWhJT3dBNFNFZzdBS1RZQkVnRmdFaHdTRWh3Uy9vQVNIQklTRHFBT0VoSU9vQ2syQVFFMkthQU9FaElPb0E0U0Vod1NBaUFTRHFBcE5nRVNIQklTRHFBT0VoSU9vQTRTRWh3U0FUWXBvQTRTQUFBQUFBRUFNZi8yQTg4RENRQWdBQUFGTWpZOUFUTTJGaGNlQVRjeU5qYzJBaWNqTlRRbUl5SUdCd0VHRkJjQkhnRUIxUlljRFh1bk53d2JEaElaQVFIVjVnMGNGdzhhRWY2dUZ4Y0JVaEFiQ1J3V3BBRlFaeFFOQVIwYzhBRVFBNklXSGc4US9zUVlMQmord1E0T0FBRUFNZi8yQTg4RENRQWdBQUFGTWpZM0FUWTBKd0V1QVNNaUJoMEJJd1lDRng0Qk14WTJOejRCRnpNVkZCWUNLdzhjRUFGU0Z4ZityaElaRHhjY0RlYlZBUUVaRWc0YkN6aW5ldzBjQ1E0T0FUOFlMQmdCUEJBUEhoZWlBdjd3OEJ3ZEFRMFRhRkFCcEJZY0FBUUFDUC9uQS9nREdRQWJBQ2NBTlFCRUFBQVhJVFkzRVNZckFTSW1Md0V1QVNzQklnWVBBUTRCS3dFaUJ4RVdKUzRCSno0Qk54NEJGdzRCRXlJbU5UUStBVEllQVJVT0FRY0JNajRDTkM0Q0l3NEJCeDRCandMaWhnRUJobVFZR2cwakR5Y2hxeUFvRHlNTkdoaGhoZ0VCQWZka2d3TURnMlJrZ3dNRGc5QVhIZzRaSEJrT0FSNFcvc3dpUFRBYUdqQTlJa2hmQWdKZkdRR0VBY0dFRFJBbUVoTVRFaVlRRFlUK1A0U0lBNFJrWklRQ0FvUmtaSVFCVVI0V0R4Z09EaGdQRmg0Qi91OFpNRDVFUGpBWkFsOUlTR0FBQXdBUi85c0Q3d01sQUNVQUxnQTNBQUFUSGdFN0FSTWVBVE1oTWpZMEppTWhMZ0V2QVNFeU5qOEJOamN1QVNNaEp5NEJLd0VpQmdFZUFUSTJOQ1lpQmdVVUZqSTJOQ1lpQmhFQkVnMlJSUVl5THdIMERSSVNEZjRURWhZREJ3SWdMeklISWdFQkFSVVIvVVFJQXhrZ2x3MFNBVGdCSnpvcEtUb25BWkFvT3lnb095Z0RCUTBUL2lrdU5SSWNFZ0VYRkMwMUx1TUtCaEFUTnhnWkUvME9IaWNvT2lnbkhoNG5KenduSndBQUFBQUVBQkwvMndQdkF5VUFKQUFyQURRQVBRQUFKU0V5TmpRbUl5RXVBUzhCSVRJMlB3RTJOeTRCSXlFbkxnRXJBU0lHRkJZN0FSTWVBUUVIRGdFaklTY1RNalkwSmlJR0ZCWWhNalkwSmlJR0ZCWUJiZ0gwRFJJU0RmNFRFaFlEQndJZ0x6SUhJZ0VCQVJVUi9VUUlBeGtnbHcwU0VnMlJSUVl5QW1jZkFoWVQvZDRsZXh3cEtUb25Kd0d1SGlnb095Z29xeEljRWdFWEZDMDFMdU1LQmhBVE54Z1pFeG9UL2lrdU5RSFJ6UlFYK1AxZktEb29KenduSnp3bkp6d25BQUFEQUVuL3lRTzNBemNBRkFBZ0FDd0FBQUVXRkE4QkJpSXZBU1kwTmpJZkFSWXlQd0UyTWdNK0FUY3VBU2NPQVFjZUFSY3VBU2MrQVRjZUFSY09BUUxGQ1FuMENoa0phQWtUR1FvN0NSa0t5QW9adkp2UEJBVFBtNXZQQkFUUG03cjRCUVg0dXJyNEJRWDRBaFFLR1FyMENRbG5DaGtUQ2pvS0NzZ0ovZlVFejV1Ynp3UUV6NXViejAwRitMcTYrQVVGK0xxNitBQUFBQUVBUy8vTEE3VUROUUFMQUFBRlBnRTNMZ0VuRGdFSEhnRUNBTGo0QlFYNHVMbjNCUVg0TlFYNHVMajRCUVg0dUxqNEFBQUZBQUFBRmdRQUFyNEFDd0FjQUMwQU5nQThBQUFsRmpJK0FTY0JKZzRDRndFK0FUY21KQ2NHQnhjMk14NEJGeFFQQVRZM0p3WWpMZ0VuTkRjbkRnRUhGZ1FCTGdNaklnY1hKeDRCRnpNbkF5UUpGeEFCQ2YyUkNCZ1FBUWtDa2xoZ0FRUCs2K2hmVW1JbUtWbDFBaEcvYUZaaUt6RlpkUUlXZ2wxbUFRUUJGZ0ZkQVJFaUt4Z0hCNFR0QWtNekQ0WWZDUkVYQ1FKdkNBRVFHQWo5K3p0N0kwYnFEUUVjWVJFQ2RGb3JKTzBCSDJNV0FuWlhNeXFEUEg4bFJlb0JOeGdySWhFQmd3OHlRd0dHQUFBRkFBQUFHQVFBQXJzQUN3QWRBQzhBTndBL0FBQWxGajRCTkNjQkpnNENGeVVHQnhjMk14NEJGeFFHQnhjK0FUY21KQU0yTnljR0J5NEJKejRCTnljT0FRY1dCQ1UyTlM0Qkp3WUhFelkzQVFZVkhnRURId29XRVFqOWxna1hFQUVJQVV0Z1VEQTlROEQ3QkZsT0xsaGhBUVArN09sblZqQkNTOEQ3QkFGZVVpNWRaZ0VFQVJZQnBCRUNkVmdzSlZFeEt2N3JGUUowSVFrQkVCY0pBbW9JQVJBWENSUUJIVEFURE1rdEdXTXhMang4STBicS9aUUJIakVWQVF2Rk1oWm9NeTQ4ZnlSRjY5OG1LMWwwQWdFUS9uTUJGUUVWS2pKWGRRQUFCQUFBQUM4RUFBS3hBQXNBRndBakFDd0FBQ1UySkRjbUpDY0dCQWNXQkRjdUFTYytBVGNlQVJjT0FTYytBVGN1QVNjT0FRY2VBVGN1QVRRMk1oWVVCZ0lBNXdFVkJBVCs2K2ZrL3VnRUJBRVk1TDc4QkFUOHZyMzlCQVQ5dlZwMkFnSjJXbHAzQVFKMldoNG9LRHduSnk4TTdrZEc3ZzBON2taSDdpOEx5RE10ekEwTnpDMHp5Q2tDZUZoYWRRSUNkVnBZZUlvQkp6c29LRHNuQUFBQUFBRUFnLy9iQTMwREpRQWhBQUFYUGdFM05UNEJOeDRCRnpJK0FqY1JMZ0VqRGdFSExnRW5JZzRDQnhFZUFhUU9FZ0VJT2pCenVHMHhOUzBhQVFFWkV3OUFOMjYzZERFMUxSb0JBUklsQVJJTzdnUVBBUVZFQlFzVkpCMEJ0QkVUQVJBQkJVUUZDeFVrSGYwNERoSUFBQUFDQUZYL3d3T3JBendBTWdCQUFBQVREZ0VIRmhjV0J3NEJGUlFYRmdjT0FSVVVIZ0VPQVJVVUZqc0JIZ0VWRGdFSEZCWXpNalkzUGdFM1BnRTNOQ1luSXlJQkxnRW5JeDRCQnc0QkJ6TStBZHdhS0FFQkNnUUhGQjBQQndzUEVna1RGZ3NxSVprZEl3UkFCQ0lhRmgwTU1YUXpLaWtCcnBrOFZRS3JBV2hTVFRvM0FRTXhIajlLWUFNekJpSWZHUTBKQXdra0doNFRDZ2NJSWhZUEhSQVJIUklnTEFFYkdDK0hQQjhoSFJsZW0wSTJia3Q2bXdUKzYyT0dBeXQ4U2xGMUl3S0ZBQUFBQUFNQVBQK2RBOFFEWXdBd0FHa0Fkd0FBQVNNaUJnY09BUWNXRnc0QkZCY09BUlVVRndZVkhnRVhNellYRGdFSEhnRVhNalkzUGdFM016NEJOeTRCSnlNdUFRY3pIZ0VYRmdZSERnRUhEZ0VuSWljK0FUY3VBU3NCTGdFMUpqWTNOalFuTGdFMU5EYzJOVFFuTGdFMUpqYzJOVFFuTGdFMU5EYytBUVVlQVJjT0FRY2pQZ0UxTkNZbkFaNDdLVUlZTERNQkFRUVdHQW9QRVE0VEFUOHhvaEVCQlVBRUFUVXNIeThVSm1aTVVWSnJBZ0oxV0kwclpYWThpYUlDQVNVck1uWXlEQklLSVFFRlFBUUJNeWVaRlJzQkN3MEdCQXNKSFEwRENRZ0JMZ29DQ0FRdkV6b0J1RHRTQVFGSk5DY1lGaW9uQTJNRkJnczVLQkFQRUM4MUZ3OHFGeUVaR3lneFFBSUJEaVdKUkMwNEFTTW9TcFJiQTVkd2I1WURGeGxCQTRkdlJHazVRSjVmR1JBQkpUZUdOU1VwQVJzV0R4Y01CZzBGRHhjTkhoWUpDd1VFRVJRTEloY0ZDZ01GRWhBSElRd0ZCVEFEY1ZSVmNnSXRZVGc4WnlnQUFBQUFBZ0JWLzhRRHF3TTlBRElBUUFBQUJUNEJOeVluSmpjK0FUYzBKeVkzUGdFMU5DNEJQZ0UxTkNZbkl5SW1KejRCTnpRbUl5SUdCdzRCQnc0QkZSUVdGek15QVI0QkZ6TXVBVGMrQVRjakRnRURJeHNvQVFFS0JRZ1VIQUVQQ0F3UEVnb1NGZ3NxSVprZUlnRUZRQVFpR2hZZERERjBNeW9xcnBrOFZQMVdBV2hTVFRvM0FRTXhIajlLWURNR0loOFlEZ2tEQ1NRYUhoTUtCd2dpRmc4ZEVCRWRFaUFyQVJ3WUw0YzhIaUlkR1Y2Y1FUWnVUSG1iQkFFVlk0WURLM3RMVVhVakFvVUFBQUFCQUZiLzl3T3FBd2tBRndBQUJUSTJOellTTnk0Qkp5SUdCeTRCSXc0QkJ4WVNGeDRCQWdBSEVRZTQwUUlEaG1vOVhSMGRYanhxaGdNQzBMa0hFUWtIQkhRQkI0cHpqUUpBTnpkQUFvMXppdjczY2dRSEFBQUFBd0E4LzUwRHhBTmpBREVBYWdCNEFBQUZNekkyTno0Qk55WW5QZ0UwSno0Qk5UUW1KelkxTGdFbkl5SW5QZ0UzTGdFbklnWUhEZ0VISXc0QkJ4NEJGek1lQVRjbkxnRW5KalkzUGdFM1BnRVhNaGNPQVFjZUFUc0JIZ0VWRmdZSEJoUVhIZ0VWRkFjR0ZRWVhIZ0VWRmdjR0ZSUVhIZ0VWRkFjT0FTVXVBU2MrQVRjekRnRVZGQllYQW1JN0tVSVlMRE1CQVFRV0dBb1BFUWNIRXdFL01hSVJBUVZBQkFFMUxCOHZGQ1ptVEZGU2F3SUNkVmlOSzJWMlBJbWlBZ0VsS3pKMk1nd1NDaUVCQlVBRUFUTW5tUlViQVFzTkJnUUxDUjBNQVFNSkNBRXVDZ0lJQkM4VE92NUlPMUlCQVVrMEp4Z1dLaWRqQlFZTE9TZ1FEeEF2TmhZUEtoZ1BIZ3diS0RGQUFnMGxpVVF0T0FFaktFcVVXd09XY1crV0F4Y1pRUUVDaDI5RWFUbEFubDhaRUFFbE5vYzFKU2tCR3hZUEZ3d0dEUVVQRnd3ZkZna0xCQVVSRkFzaUZ3VUtBd1VTRUFjaERBVUZNQU54VkZWeUFpMWhPRHhuS0FBQ0FGYi85d09xQXdrQUZnQXdBQUFURmhJWEhnRXlOamMyRWpjdUFTY2lCZ2N1QVNNT0FSYytBVGNlQVJjZUFUSTJOejRCTng0QkZ3NEJCd1lpSnk0QlZnTFN0d2NSRGhFSHQ5SUNBNFpxUFYwZEhWNDhhb1pDQWw5Tk8wb1ZDQTRPRFFrVlNqdE5Yd0lGeklzSEJRYUx6QUlIaXY3NmRRUUhCd1IxQVFhS2M0MENNeXdzTXdLTmMxWm1BUUU2SWd3S0Nnd2lPZ0VCWmxaNjdWd0ZCVnp0QUFBQUFBUUFLUC9EQTlnRFBRQVlBQ0VBS2dBekFBQUZNalkvQVNFeU5qVVJOQ1luSVE0QkZSRVVGanNCRlJRV0V3NEJJaVkwTmpJV0Z3NEJJaVkwTmpJV0Z3NEJJaVkwTmpJV0FTWU5GZytiQVNGZ1pHUmcvZGhnWkdSZ0ZCUlpBU1UxSkNNMkpkY0JKVFFsSkRVbDF3RWtOU1FrTlNROURnNk5aVjhCU0Y5bEFRRmxYLzY0WDJWOEZSY0IveHNrSkRVbEpSb2JKQ1ExSlNVYUd5UWtOU1VsQUFBQ0FDYi9td1BhQTJVQUlnQXNBQUFYQVNjbU53RStBVElXRndFV0ZBOEJBVFkxRVRZbUp3RXVBU0lHQndFT0FSY1JGQmNoTWpjQkppSUhBUll4QVJUb0RRNEJiaEFZR1JZUkFXOEhCK1lCRWdvQkVSZitweGdxTGlvWC9xWVhFUUY2QXJJL0dmNkxHelFiL29rVkh3RVI0UkFMQVJ3TkRRME4vdVFGRHdmaC92QVNMQUd5SWlvVEFRc1RGaFlUL3ZVVEtpTCtUaTFZRndGeEd4ditqUlVBQlFBbS81VUQyZ05yQUJNQUl3QXBBREFBT2dBQUZ5RXlOUkUySmljQkxnRWlCZ2NCRGdFWEVSUUJMZ0VpQmc4QkxRRStBVElXRncwQ0VUY1hCeVlCRVJRSEp6Y1dBU0lqQVRZeUZ3RWlJNjBDcG9ZQkdCNyt0UmNyTGlvWC9yVWVHUUVDTXhZdExTd1dIUDcvQVVJUEZ4c1dEd0ZEL3dEOThnSDI4UVlETUFYdzlBSDlFd1FGQVNzYk1oc0JLZ1VGYTRVQnFpMDJGd0VFRXhZV0UvNzhGell0L2xhRkFac1dGQlFXRy8zN0RBME5EUHo4K3dHMkRQVHNEQUhJL2tvUkRlM3hCUDRCQVNZY0hQN2FBQUFBQUFJQTF2L09BeW9ETWdBVUFCd0FBQUVpQmdjVkJoVVJGQll6SVRJMk5SRTBKelV1QVFjK0FUSVdGeFVoQWdCZGhRTkZLeW9CcWlvclJRT0YvUUphaUZvQy9zQURNb0dEWndkUy9ya3VLeXN1QVVoU0IyYURnZnRhWDE5YWJ3QUFBQU1BUWYvVUE3NERMQUFIQUJRQUlBQUFCUkVuSmljUkZ4WWxNajhCRVFZUEFRWVhFUlFXQlRZL0FUWTFFU1luSWc4QkFuSFVDdzNZQ3Y0TUR4VzBEQXpMSndFYUFsQUdCK0FsQVRBUEZMNHNBczJCQndQOUtYa0ZDZ3RoQXRjRkIzVVZLdjJ1R0JrTUFRVi9GU29DVXpBQkMya0FBZ0ZmLzdvQ29RTkdBQk1BSEFBQUJUSTJOeEUrQVRjdUFTY09BUWNlQVJjUkhnRURMZ0UwTmpJV0ZBWUNBQTRaQVRaQ0FRSmFSVVZhQWdGRE5RRVpJQmNmSHk0ZkgwWmtZQUdLRDFVNFJWc0NBbHRGT1ZVTy9uWmdZd0xnQVNBdUh4OHVJQUFBQUFBREFHZi95d09aQXpVQUZRQWVBRGdBQUNVeU5qYzFQZ0UzTkM0Q0l3NEJCeDRCRnhVZUFRTWlKalEyTWhZVUJoTStBVGN1QVNjVkhnRVhEZ0VITGdFblBnRTNOUTRCQng0QkFnQU9HUUUyUWdFWUxqc2dSVm9DQVVNMUFSa2dGeDhmTGg4ZkY4VFVBUWpGWVVTSkJnS25sWlduQWdhSlJHSEZDQUhVYW1SZnlnOVZPU0E3TGhnQ1cwUTZWQS9LWDJRQ0lTQXVJQ0F1SVAxQUEyeExWMkVCUXdFN01EUkdBZ0ZITkRBN0FVTUJZVmRMYkFBQ0FFdi95d08xQXpVQUN3QVhBQUFGUGdFM0xnRW5EZ0VISGdFVExnRW5QZ0UzSGdFWERnRUNBTGo0QlFYNHVMbjNCUVg0dURkTUFRRk1OemhMQVFGTE5RWDR1TGo0QlFYNHVMajRBU3dCU3pnM1N3RUJTemM0U3dBQUFBRUFQLysvQThFRFFRQWZBQUFGTWpZM0FUWTBKaUlIQVE0QkZSUVdId0VXTmpjQk5oWUhBUTRCSHdFZUFRSlhGeUlNQVJrTUdDc2UvUjhjSkNnZjZCUWJEZ0hXQ1E0SC9rb01CQWREQ1J4QkpSOEMzUjRyR0F6KzVRb2hGeDBjQ1VZR0F3MEJ0d2NPQ2Y0b0RCd1Y0aUVwQUFBQUF3QUcvL1VEK2dNTEFBd0FHQUFzQUFBWElUSTNFU1luSVNJSEVSWXpFeTRCSno0Qk54NEJGdzRCQXk0QlBRRTNOak15SHdFM05qSWZBUlVVQmdlTkF1YUdBUUdHL1JxR0FRR0d1eTA4QVFFOExTdzhBUUU4NWg4amd4MGVJQjFTelNCSklNVWpId3FFQWd5RUFZWDk5SVVCZ1FFN0xTMDhBUUU4TFMwNy9zTUJJeDhiY2hvYlNiWWJITFpESHlJQkFBQUFBQVFBQVAvQUJBQURBZ0FPQUJvQUl3QTZBQUFUTkRZeklUVTBJeUVpRlJFVU93RVhJVEkxRVRRaklTSVhFUVlCTGdFME5qSVdGQVlESWlZOUFUYytBVElXSHdFM1BnRXlGaDhCRlE0Qkk0MVZVd0lKZWYyMWVub1RyZ0pMZW5yOXRYb0JBUUVQSnpJeVRETXp2aHNjUXhva0tDY2FKWDhmTURJeEgyTUJIQm9CMlZOVUNuaDQvbWgzdTNnQm5IZDMvbVI0QVVvQk0wd3pNMHd6L3ZNZEdpQStGeHdjR0NCeUhTTWlIbDVSR2gwQUJBQUEvOEFFQUFNQ0FCTUFJUUF6QUR3QUFEY3pGUVl6SVRJMUVUUXJBVFUwSXlFaUZSRVVOeUluRVRZM0lSWVhGU0VpRnhFVE5qTWhNaGNSSnk0QkR3RW5KaU1pRHdFM1BnRTBKaUlHRkJaNlNBRjZBa3Q2ZWtoNS9iVjZlenNDQWpzQ1NUc0IvanQ2QVQ0Qk93SkpPd0tPR2tBYnJrVVpIQmtaWmRJbU5EUk5Nek43UTNoNEFaeDNQM2g0L21oM1BqMEJrVHdCQVR3OGQvN2xBUmM5UGY2OWhoY0JHSm8vRmhaWXFRRTBUVFEwVFRRQUFnQkwvOHNEdFFNMUFBc0FJQUFBQlQ0Qk55NEJKdzRCQng0Qk55SW1ORGNUTmpJWEV4WVVCaUl2QVNZaUR3RUdBZ0M0K0FVRitMaTU5d1VGK0E0S0RBT2ZDaWtKbndRTUZRZVBCUW9GandjMUJmaTR1UGdGQmZpNHVQalZEQk1JQVpVWkdmNXJDQk1NQm84R0JvOEdBQVVBZVAvRUE0Y0RQQUFJQUJRQU5RQkJBRWdBQUFFUkxnRW5EZ0VIRlFFV01qWTBKd0VtSWdZVUZ4TU9BUlFXTXlFeU5qUW1KeU0xTmpjbkJnY3VBU2MxTkNZaUJoMEJIZ0VYRlFFMEppSUdCeFVVQnhjMk5RY25GUjRCRnpJQ2FnRkdPemxIQVFIb0Noc1RDdjAwQ2hzVUNwNE5FeE1OQVpBTkV4TU5wMUk3TGpWTFpud0NFUjBSQW9wM0FVTVJIQkVCQlRVUDU3MEJSam9qQWF3QkJqMU1BUUZLT2dmOWNnb1VHZ3NDekFvVUd3cjlGd0VUR2hNVEdoTUJYZ2NxTGlNQkFueGtaQThSRVE5a2Q1b01YZ0hmRHhFUkQyUVpHRFF2Tm5xOVF6eE5BUUFBQUFNQUFQLzRCQUFEQkFBWkFDNEFSQUFBQlRJMk5SRTBKaWNpQmc4QkJpc0JJZ2NWRmhjek1oOEJIZ0VsRmpZM1BnRTBKaWN1QVE0QkZ4NEJGQVlIQmhZbkZqWTNQZ0UwSmljdUFRY09BUmNlQVJRR0J3WVdBZHNYR3h3V0VCa1J1d1VHZjFzQkFWdC9CZ1c3RHh3QnF3d2JDaW91TGlvS0d4a0RDaU1uSnlRSkJKNExHd29aSEIwWUNob01EZ1FMRWhVVkV3a0RDQndXQXFZV0hRRVBFTEVFWUtWZ0FRU3pEZzFYQ1FZTk81YWxsVHdNQmhFY0RqT0Jqb0V6RGh4cUJ3VU1JbHhtWENJTkJRZ0tIQThaUmsxSEdnNGNBQUFBQUFJQWhQK3hBMzBEVGdBTEFDNEFBQUUrQVRJV0Z6VTBKaUlHRlJjUkJ6OEJQZ0VXRkE4QkJpSXZBU1kwTmpJZkFTY1JJeVlWRVJRM0lUSW5FVFlqQWQ0QkV4d1RBUlFjRkVVQ0cwRUpIUklMa0EwYURaQUxFaHdLWFFQVGhvWUI3SWNCQVljQ1dBMFRFdzNWRGhNVERycis4VDRkUlFvQkVoc0tqQXdNakFvYkVndGlQZ0VQQVlYK1I0VUJoQUc1aEFBQUFBQURBSklBcFFOdUFsc0FBQUFNQUI0QUFCTXpJVElWRVJRaklTSTFFVFFGTno0QkhnRVZFUlFPQVNZdkFTWTlBVFNTU1FGdVNVbitra2tDTTIwSkZCUUxDeFFVQ1cwT0FsdEovdHhKU1FFa1NZZFlCZ01KRWd2KzRnc1NDUUlIV0FzUmNCRUFBZ0NFLzV3RGZRTmtBQm9BTGdBQUFUNEJQUUVuRnhZeU5qUXZBU1lpRHdFT0FSWXlQd0VIRlJRV0F5RTJKeEUyS3dFUkRnRWlKalVSSXlJVkVSUUNBQTRVQWwwS0d4SUtrUXdhREpFSkFSRWNDbDRERk9nQjdJY0JBWWZLQVJra0djdUdBaDRCRWc2SFAyTUtFUm9KakF3TWpBa2FFUXBrUUljT0V2MTlBWVFCbW9YK3pSSVlHQklCTTRYK1pvVUFBd0JGLytRRHV3TWNBQndBS2dBNEFBQTNNekk5QVQ0Qk54NEJGeFVVT3dFeU5qMEJMZ0VuSXc0QkJ4VVVGaGN6TWpZOUFUUW1KeU1HQnhVV0lUTXlQUUUwSnlNT0FSMEJGQlpsRndzQ3phcXJ6QUlMRnc0U0ErdStIcjdyQXhLSktTY3JLeWNwS3dFQkFrTW9MUzBvS0NvcWpndnhtN01CQWJPYjhRc1FEZSt1MFFNRDBhN3ZEUkNxS0NXNUppY0JBU3Y4TEN6OEt3RUJKeWE1SlNnQUFBVUFoUCt2QTN3RFVRQWZBQ2tBTmdCREFFOEFBQnNCSGdFeklUSTJOeE16TWpZMEppY2pOUzRCS3dFaUJnY1ZJdzRCRkJZek56UTJPd0V5RmgwQkl4TXVBVFVUUGdFeUZoVUREZ0VGTGdFMUF6UTJNaFlWRXhRR053NEJJaVluRVQ0Qk1oWVYxUnNDTFNnQmNpZ3RBaHd4RFJJU0RiQUJNeXVkS2pNQnJ3NFNFZzdwR0JTT0ZCam0vZ3dRRWdFUUdCQVRBUS8rM2d3UEZCRVlFQklQbkFFUkdCQUJBUkFZRWdKMC9ZNHBLaW9wQW5JU0hCSUJQU3d6TXl3OUFSSWNFbjRTRnhjU1BmMVJBUklPQWZFTkVoSU4vZzRPRVFFQkVRNEI4ZzBTRWczK0R3NFNJQTRTRWc0QjhRMFNFZzBBQUFJQUhQKzVCQWtET3dCQkFGd0FBQ1UxTXpJK0FqY3VBUzhCTnpZMUxnRW5JZ1lQQVNjbURnSWZBUWNPQVFjVUhnSTdBUlVqTGdFblBnRTNKajRDRno0Qk54NEJGeFFISGdFWERnRUhCUlkvQVRZMEppSVBBVGNSTkNZaUJoVVJGeWNtRGdFVUh3RVdBb25PRmlnZkVBRUJMaVk2QmdFRGVGczJYaDRjTVJZcUl4TUJBVGNwTXdFU0l5c1p3c0pSYWdJQlVVQUJJRDVMSlNkNlMzaWZBd0U4VEFFQ1pFeit1ZzBNa1FvU0d3cGRBaFFjRkFOZUNod1FDcEFOcDBVUUlDZ1dKem9KRGpzS0NsdDRBak11S2c0R0NCc25GamtNQzBBckdDd2lFa1VDYTFCRlpCQW5SREFPQ3pwRkFRT2ZlQTBORDE1QVRHVUM3UUVNakFrYkVBcGpRQUZLRGhNVER2NjJRR01MQVJBYkNZd01BQUlBSEFBREJBb0RPd0FnQUR3QUFDVVZEZ0VtSnpVaExnRW5QZ0UzSmo0Q0Z6NEJOeDRCRnhRSEhnRVhEZ0VIQVNZUEFRWVVGakkvQWdjVkhnRXlOamMxSnhjV01qWTBMd0VtQWpZQkpDTUIvdXhRYXdJQlVVQUJJVDVLSmlaN1MzaWZBd0k5U3dJQ1pVeit1Z3dOa0FvUkhBbEJIUU1CRXgwVEFRTmVDaHNSQ3BFTXAzc1VGUlVVZXdKclVFVmtFQ2RFTUE0TE9rVUJBNTk0RFEwUFhrQk1aUUlCYWdFTWpBa2JFUXRFSDBDMkRoTVREclpBWXdzUkd3bU1EQUFBQUFJQUhBQUlCQW9ET3dBL0FGb0FBQ1UxTXo0Qk55NEJMd0UzTmpVdUFTY2lCZzhCSnlZT0FoOEJCdzRCRlJRZUFqc0JGU011QVNjK0FUY21QZ0lYUGdFM0hnRVhGQWNlQVJjT0FRY0JOaDhCRmhRR0lpOEJGeEVPQVNJbUp4RTNCd1lpSmpRL0FUWUNpczB2UGdFQkxpVTZCUUVDZVZvM1hoNGNNUlVySXhNQkFqY3FNeElpTEJqRHcxQnJBZ0ZSUUFFaFBrb21KbnRMZUo4REFqMUxBZ0psVFA2NkRReVJDaEViQ2w0REFSTWRFd0VEWGdrY0VRcVFEYWRGQVQ0dkp6b0pEanNLQ2x0NEFqTXVLZzRHQ0JzbkZqa01DMEFyR0N3aUVrVUNhMUJGWkJBblJEQU9DenBGQVFPZmVBME5EMTVBVEdVQ0FXb0JESXdKR3hFTFkwRCt0ZzRURXc0QlNrQmpDeEViQ1l3TUFBQUFBQUlBSFArNUJBa0RPd0FqQUQ0QUFDVTFOQzRCSWc0QkhRRWhMZ0VuUGdFM0pqNENGejRCTng0QkZ4UUhIZ0VYRGdFSEJSWS9BVFkwSmlJUEFUYzFOQ1lpQmgwQkZ5Y21EZ0VVSHdFV0FqME1GQmdVRFA3MFVXb0NBVkZBQVNBK1N5VW5la3Q0bndNQlBFd0JBbVJNL3JvTkRKRUtFaHNLWFFJVUhCUURYZ29jRUFxUURhZnhEQlFNREJRTThRSnJVRVZrRUNkRU1BNExPa1VCQTU5NERRMFBYa0JNWlFMdEFReU1DUnNRQ21OQVR3NFRFdzVQUUdNTEFSQWJDWXdNQUFBQUVnRGVBQUVBQUFBQUFBQUFFd0FvQUFFQUFBQUFBQUVBQ0FCT0FBRUFBQUFBQUFJQUJ3Qm5BQUVBQUFBQUFBTUFGUUNiQUFFQUFBQUFBQVFBQ0FEREFBRUFBQUFBQUFVQU93RkVBQUVBQUFBQUFBWUFDQUdTQUFFQUFBQUFBQW9BS3dIekFBRUFBQUFBQUFzQUV3SkhBQU1BQVFRSkFBQUFKZ0FBQUFNQUFRUUpBQUVBRUFBOEFBTUFBUVFKQUFJQURnQlhBQU1BQVFRSkFBTUFLZ0J2QUFNQUFRUUpBQVFBRUFDeEFBTUFBUVFKQUFVQWRnRE1BQU1BQVFRSkFBWUFFQUdBQUFNQUFRUUpBQW9BVmdHYkFBTUFBUVFKQUFzQUpnSWZBRU1BY2dCbEFHRUFkQUJsQUdRQUlBQmlBSGtBSUFCcEFHTUFid0J1QUdZQWJ3QnVBSFFBQUVOeVpXRjBaV1FnWW5rZ2FXTnZibVp2Ym5RQUFIVUFiZ0JwQUdrQVl3QnZBRzRBY3dBQWRXNXBhV052Ym5NQUFGSUFaUUJuQUhVQWJBQmhBSElBQUZKbFozVnNZWElBQUhVQWJnQnBBR2tBWXdCdkFHNEFjd0E2QUZZQVpRQnlBSE1BYVFCdkFHNEFJQUF4QUM0QU1BQXdBQUIxYm1scFkyOXVjenBXWlhKemFXOXVJREV1TURBQUFIVUFiZ0JwQUdrQVl3QnZBRzRBY3dBQWRXNXBhV052Ym5NQUFGWUFaUUJ5QUhNQWFRQnZBRzRBSUFBeEFDNEFNQUF3QURzQVNnQmhBRzRBZFFCaEFISUFlUUFnQURNQUxBQWdBRElBTUFBeUFEQUFPd0JHQUc4QWJnQjBBRU1BY2dCbEFHRUFkQUJ2QUhJQUlBQXhBRElBTGdBd0FDNEFNQUF1QURJQU5RQXpBRFVBSUFBMkFEUUFMUUJpQUdrQWRBQUFWbVZ5YzJsdmJpQXhMakF3TzBwaGJuVmhjbmtnTXl3Z01qQXlNRHRHYjI1MFEzSmxZWFJ2Y2lBeE1pNHdMakF1TWpVek5TQTJOQzFpYVhRQUFIVUFiZ0JwQUdrQVl3QnZBRzRBY3dBQWRXNXBhV052Ym5NQUFFY0FaUUJ1QUdVQWNnQmhBSFFBWlFCa0FDQUFZZ0I1QUNBQWN3QjJBR2NBTWdCMEFIUUFaZ0FnQUdZQWNnQnZBRzBBSUFCR0FHOEFiZ0IwQUdVQWJBQnNBRzhBSUFCd0FISUFid0JxQUdVQVl3QjBBQzRBQUVkbGJtVnlZWFJsWkNCaWVTQnpkbWN5ZEhSbUlHWnliMjBnUm05dWRHVnNiRzhnY0hKdmFtVmpkQzRBQUdnQWRBQjBBSEFBT2dBdkFDOEFaZ0J2QUc0QWRBQmxBR3dBYkFCdkFDNEFZd0J2QUcwQUFHaDBkSEE2THk5bWIyNTBaV3hzYnk1amIyMEFBQUFBQUFJQUFBQUFBQUFBQ1FBQkFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFoZ0FBQVFJQUFnRURBUVFCQlFFR0FRY0JDQUVKQVFvQkN3RU1BUTBCRGdFUEFSQUJFUUVTQVJNQkZBRVZBUllCRndFWUFSa0JHZ0ViQVJ3QkhRRWVBUjhCSUFFaEFTSUJJd0VrQVNVQkpnRW5BQTRBN3dFb0FTa0JLZ0VyQVN3QkxRRXVBUzhCTUFFeEFUSUJNd0UwQVRVQk5nRTNBVGdCT1FFNkFUc0JQQUU5QVQ0QlB3RkFBVUVCUWdGREFVUUJSUUZHQVVjQlNBRkpBVW9CU3dGTUFVMEJUZ0ZQQVZBQlVRRlNBVk1CVkFGVkFWWUJWd0ZZQVZrQldnRmJBVndCWFFGZUFWOEJZQUZoQVdJQll3RmtBV1VCWmdGbkFXZ0JhUUZxQVdzQmJBRnRBVzRCYndGd0FYRUJjZ0Z6QVhRQmRRRjJBWGNCZUFGNUFYb0Jld0Y4QVgwQmZnRi9BWUFCZ1FHQ0FZTUhkVzVwTURBd01BZGpiMjUwWVdOMEJuQmxjbk52Ymdsd1pYSnpiMjVoWkdRTlkyOXVkR0ZqZEdacGJHeGxaQXh3WlhKemIyNW1hV3hzWldRUGNHVnljMjl1WVdSa1ptbHNiR1ZrQlhCb2IyNWxCV1Z0WVdsc0NtTm9ZWFJpZFdKaWJHVUpZMmhoZEdKdmVHVnpDM0JvYjI1bFptbHNiR1ZrQzJWdFlXbHNabWxzYkdWa0VHTm9ZWFJpZFdKaWJHVm1hV3hzWldRUFkyaGhkR0p2ZUdWelptbHNiR1ZrQlhkbGFXSnZCbmRsYVhocGJndHdaVzVuZVc5MWNYVmhiZ1JqYUdGMEFuRnhDSFpwWkdWdlkyRnRCbU5oYldWeVlRTnRhV01JYkc5allYUnBiMjRKYldsalptbHNiR1ZrRG14dlkyRjBhVzl1Wm1sc2JHVmtCbTFwWTI5bVpnVnBiV0ZuWlFOdFlYQUhZMjl0Y0c5elpRVjBjbUZ6YUFaMWNHeHZZV1FJWkc5M2JteHZZV1FGWTJ4dmMyVUVjbVZrYndSMWJtUnZCM0psWm5KbGMyZ0VjM1JoY2d0M2FHbDBaV05wY21Oc1pRVmpiR1ZoY2cxeVpXWnlaWE5vWm1sc2JHVmtDbk4wWVhKbWFXeHNaV1FLY0d4MWMyWnBiR3hsWkF0dGFXNTFjMlpwYkd4bFpBeGphWEpqYkdWbWFXeHNaV1FPWTJobFkydGliM2htYVd4c1pXUUtZMnh2YzJWbGJYQjBlUXh5WldaeVpYTm9aVzF3ZEhrR2NtVnNiMkZrQ0hOMFlYSm9ZV3htREhOd2FXNXVaWEpqZVdOc1pRWnpaV0Z5WTJnSmNHeDFjMlZ0Y0hSNUIyWnZjbmRoY21RRVltRmphdzVqYUdWamEyMWhjbXRsYlhCMGVRUm9iMjFsQ0c1aGRtbG5ZWFJsQkdkbFlYSUtjR0Z3WlhKd2JHRnVaUVJwYm1adkJHaGxiSEFHYkc5amEyVmtCRzF2Y21VRVpteGhad3BvYjIxbFptbHNiR1ZrQ21kbFlYSm1hV3hzWldRS2FXNW1iMlpwYkd4bFpBcG9aV3h3Wm1sc2JHVmtDbTF2Y21WbWFXeHNaV1FJYzJWMGRHbHVaM01FYkdsemRBUmlZWEp6Qkd4dmIzQUpjR0Z3WlhKamJHbHdDV1Y1WldacGJHeGxaQXgxY0hkaGNtUnpZWEp5YjNjT1pHOTNibmRoY21SellYSnliM2NPYkdWbWRIZGhjbVJ6WVhKeWIzY1BjbWxuYUhSM1lYSmtjMkZ5Y205M0MyRnljbTkzZEdocGJuVndEV0Z5Y205M2RHaHBibVJ2ZDI0TllYSnliM2QwYUdsdWJHVm1kQTVoY25KdmQzUm9hVzV5YVdkb2RBaHdkV3hzWkc5M2JnVnpiM1Z1WkFSemFHOXdCSE5qWVc0S2RXNWtiMlpwYkd4bFpBcHlaV1J2Wm1sc2JHVmtER05oYldWeVlXWnBiR3hsWkFwallYSjBabWxzYkdWa0JHTmhjblFJWTJobFkydGliM2dSYzIxaGJHeGphWEpqYkdWbWFXeHNaV1FPWlhsbGMyeGhjMmhtYVd4c1pXUUlaWGxsYzJ4aGMyZ0RaWGxsQ21ac1lXZG1hV3hzWldRVmFHRnVaSFJvZFcxaWMyUnZkMjVmWm1sc2JHVmtEbWhoYm1SMGFIVnRZbk5rYjNkdUVtaGhibVIwYUhWdFluTjFjR1pwYkd4bFpBdG9aV0Z5ZEdacGJHeGxaQXhvWVc1a2RHaDFiV0p6ZFhBT1lteGhZMnRvWldGeWRITjFhWFFLWTJoaGRHWnBiR3hsWkE1dFlXbHNiM0JsYm1acGJHeGxaQWh0WVdsc2IzQmxiZ3hzYjJOclpXUm1hV3hzWldRSmJXRndabWxzYkdWa0JtMWhjSEJwYmcxdFlYQndhVzVsYkd4cGNITmxDM050WVd4c1kybHlZMnhsRUhCaGNHVnljR3hoYm1WbWFXeHNaV1FMYVcxaFoyVm1hV3hzWldRTWFXMWhaMlZ6Wm1sc2JHVmtCbWx0WVdkbGN3NXVZWFpwWjJGMFpXWnBiR3hsWkE1dGFXTnpiR0Z6YUdacGJHeGxaQXR6YjNWdVpHWnBiR3hsWkE1a2IzZHViRzloWkdacGJHeGxaQTUyYVdSbGIyTmhiV1pwYkd4bFpBeDFjR3h2WVdSbWFXeHNaV1FLYUdWaFpIQm9iMjVsY3d0MGNtRnphR1pwYkd4bFpBMWpiRzkxWkdSdmQyNXNiMkZrRVdOc2IzVmtkWEJzYjJGa1ptbHNiR1ZrQzJOc2IzVmtkWEJzYjJGa0UyTnNiM1ZrWkc5M2JteHZZV1JtYVd4c1pXUUhkVzVwTURBd09RQUFBQUFCLy84QUFnQUJBQUFBREFBQUFCWUFBQUFDQUFFQUFRQ0ZBQUVBQkFBQUFBSUFBQUFBQUFBQUFRQUFBQURWcENjSUFBQUFBTm94RTNNQUFBQUEyalNwVUE9PScpXCJcclxuXHR9KTtcclxuXHQvLyAjZW5kaWZcclxuXHJcblx0LyoqXHJcblx0ICogSWNvbnMg5Zu+5qCHXHJcblx0ICogQGRlc2NyaXB0aW9uIOeUqOS6juWxleekuiBpY29ucyDlm77moIdcclxuXHQgKiBAdHV0b3JpYWwgaHR0cHM6Ly9leHQuZGNsb3VkLm5ldC5jbi9wbHVnaW4/aWQ9MjhcclxuXHQgKiBAcHJvcGVydHkge051bWJlcn0gc2l6ZSDlm77moIflpKflsI9cclxuXHQgKiBAcHJvcGVydHkge1N0cmluZ30gdHlwZSDlm77moIflm77moYjvvIzlj4LogIPnpLrkvotcclxuXHQgKiBAcHJvcGVydHkge1N0cmluZ30gY29sb3Ig5Zu+5qCH6aKc6ImyXHJcblx0ICogQGV2ZW50IHtGdW5jdGlvbn0gY2xpY2sg54K55Ye7IEljb24g6Kem5Y+R5LqL5Lu2XHJcblx0ICovXHJcblx0ZXhwb3J0IGRlZmF1bHQge1xyXG5cdFx0bmFtZTogJ1VuaUljb25zJyxcclxuXHRcdGVtaXRzOlsnY2xpY2snXSxcclxuXHRcdHByb3BzOiB7XHJcblx0XHRcdHR5cGU6IHtcclxuXHRcdFx0XHR0eXBlOiBTdHJpbmcsXHJcblx0XHRcdFx0ZGVmYXVsdDogJydcclxuXHRcdFx0fSxcclxuXHRcdFx0Y29sb3I6IHtcclxuXHRcdFx0XHR0eXBlOiBTdHJpbmcsXHJcblx0XHRcdFx0ZGVmYXVsdDogJyMzMzMzMzMnXHJcblx0XHRcdH0sXHJcblx0XHRcdHNpemU6IHtcclxuXHRcdFx0XHR0eXBlOiBbTnVtYmVyLCBTdHJpbmddLFxyXG5cdFx0XHRcdGRlZmF1bHQ6IDE2XHJcblx0XHRcdH0sXG5cdFx0XHRmb250RmFtaWx5Ontcblx0XHRcdFx0dHlwZTogU3RyaW5nLFxuXHRcdFx0XHRkZWZhdWx0OiAnJ1xuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdGRhdGEoKSB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0aWNvbnM6IGljb25zXHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRtZXRob2RzOiB7XHJcblx0XHRcdF9vbkNsaWNrKCkge1xyXG5cdFx0XHRcdHRoaXMuJGVtaXQoJ2NsaWNrJylcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgbGFuZz1cInNjc3NcIiBzY29wZWQ+XHJcblx0LyogI2lmbmRlZiBBUFAtTlZVRSAqL1xyXG5cdEBmb250LWZhY2Uge1xyXG5cdFx0Zm9udC1mYW1pbHk6IHVuaWljb25zO1xyXG5cdFx0c3JjOiB1cmwoJy4vdW5pLnR0ZicpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcclxuXHR9XHJcblxyXG5cdC8qICNlbmRpZiAqL1xyXG5cclxuXHQudW5pLWljb25zIHtcclxuXHRcdGZvbnQtZmFtaWx5OiB1bmlpY29ucztcclxuXHRcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHR9XHJcbjwvc3R5bGU+XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///15\n");

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

/***/ 17:
/*!****************************************************************************************************!*\
  !*** /Users/tongjie/Desktop/QNRTC-Uniapp/demo/uni_modules/uni-icons/components/uni-icons/icons.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\nvar _default = {\n  \"pulldown\": \"\\uE588\",\n  \"refreshempty\": \"\\uE461\",\n  \"back\": \"\\uE471\",\n  \"forward\": \"\\uE470\",\n  \"more\": \"\\uE507\",\n  \"more-filled\": \"\\uE537\",\n  \"scan\": \"\\uE612\",\n  \"qq\": \"\\uE264\",\n  \"weibo\": \"\\uE260\",\n  \"weixin\": \"\\uE261\",\n  \"pengyouquan\": \"\\uE262\",\n  \"loop\": \"\\uE565\",\n  \"refresh\": \"\\uE407\",\n  \"refresh-filled\": \"\\uE437\",\n  \"arrowthindown\": \"\\uE585\",\n  \"arrowthinleft\": \"\\uE586\",\n  \"arrowthinright\": \"\\uE587\",\n  \"arrowthinup\": \"\\uE584\",\n  \"undo-filled\": \"\\uE7D6\",\n  \"undo\": \"\\uE406\",\n  \"redo\": \"\\uE405\",\n  \"redo-filled\": \"\\uE7D9\",\n  \"bars\": \"\\uE563\",\n  \"chatboxes\": \"\\uE203\",\n  \"camera\": \"\\uE301\",\n  \"chatboxes-filled\": \"\\uE233\",\n  \"camera-filled\": \"\\uE7EF\",\n  \"cart-filled\": \"\\uE7F4\",\n  \"cart\": \"\\uE7F5\",\n  \"checkbox-filled\": \"\\uE442\",\n  \"checkbox\": \"\\uE7FA\",\n  \"arrowleft\": \"\\uE582\",\n  \"arrowdown\": \"\\uE581\",\n  \"arrowright\": \"\\uE583\",\n  \"smallcircle-filled\": \"\\uE801\",\n  \"arrowup\": \"\\uE580\",\n  \"circle\": \"\\uE411\",\n  \"eye-filled\": \"\\uE568\",\n  \"eye-slash-filled\": \"\\uE822\",\n  \"eye-slash\": \"\\uE823\",\n  \"eye\": \"\\uE824\",\n  \"flag-filled\": \"\\uE825\",\n  \"flag\": \"\\uE508\",\n  \"gear-filled\": \"\\uE532\",\n  \"reload\": \"\\uE462\",\n  \"gear\": \"\\uE502\",\n  \"hand-thumbsdown-filled\": \"\\uE83B\",\n  \"hand-thumbsdown\": \"\\uE83C\",\n  \"hand-thumbsup-filled\": \"\\uE83D\",\n  \"heart-filled\": \"\\uE83E\",\n  \"hand-thumbsup\": \"\\uE83F\",\n  \"heart\": \"\\uE840\",\n  \"home\": \"\\uE500\",\n  \"info\": \"\\uE504\",\n  \"home-filled\": \"\\uE530\",\n  \"info-filled\": \"\\uE534\",\n  \"circle-filled\": \"\\uE441\",\n  \"chat-filled\": \"\\uE847\",\n  \"chat\": \"\\uE263\",\n  \"mail-open-filled\": \"\\uE84D\",\n  \"email-filled\": \"\\uE231\",\n  \"mail-open\": \"\\uE84E\",\n  \"email\": \"\\uE201\",\n  \"checkmarkempty\": \"\\uE472\",\n  \"list\": \"\\uE562\",\n  \"locked-filled\": \"\\uE856\",\n  \"locked\": \"\\uE506\",\n  \"map-filled\": \"\\uE85C\",\n  \"map-pin\": \"\\uE85E\",\n  \"map-pin-ellipse\": \"\\uE864\",\n  \"map\": \"\\uE364\",\n  \"minus-filled\": \"\\uE440\",\n  \"mic-filled\": \"\\uE332\",\n  \"minus\": \"\\uE410\",\n  \"micoff\": \"\\uE360\",\n  \"mic\": \"\\uE302\",\n  \"clear\": \"\\uE434\",\n  \"smallcircle\": \"\\uE868\",\n  \"close\": \"\\uE404\",\n  \"closeempty\": \"\\uE460\",\n  \"paperclip\": \"\\uE567\",\n  \"paperplane\": \"\\uE503\",\n  \"paperplane-filled\": \"\\uE86E\",\n  \"person-filled\": \"\\uE131\",\n  \"contact-filled\": \"\\uE130\",\n  \"person\": \"\\uE101\",\n  \"contact\": \"\\uE100\",\n  \"images-filled\": \"\\uE87A\",\n  \"phone\": \"\\uE200\",\n  \"images\": \"\\uE87B\",\n  \"image\": \"\\uE363\",\n  \"image-filled\": \"\\uE877\",\n  \"location-filled\": \"\\uE333\",\n  \"location\": \"\\uE303\",\n  \"plus-filled\": \"\\uE439\",\n  \"plus\": \"\\uE409\",\n  \"plusempty\": \"\\uE468\",\n  \"help-filled\": \"\\uE535\",\n  \"help\": \"\\uE505\",\n  \"navigate-filled\": \"\\uE884\",\n  \"navigate\": \"\\uE501\",\n  \"mic-slash-filled\": \"\\uE892\",\n  \"search\": \"\\uE466\",\n  \"settings\": \"\\uE560\",\n  \"sound\": \"\\uE590\",\n  \"sound-filled\": \"\\uE8A1\",\n  \"spinner-cycle\": \"\\uE465\",\n  \"download-filled\": \"\\uE8A4\",\n  \"personadd-filled\": \"\\uE132\",\n  \"videocam-filled\": \"\\uE8AF\",\n  \"personadd\": \"\\uE102\",\n  \"upload\": \"\\uE402\",\n  \"upload-filled\": \"\\uE8B1\",\n  \"starhalf\": \"\\uE463\",\n  \"star-filled\": \"\\uE438\",\n  \"star\": \"\\uE408\",\n  \"trash\": \"\\uE401\",\n  \"phone-filled\": \"\\uE230\",\n  \"compose\": \"\\uE400\",\n  \"videocam\": \"\\uE300\",\n  \"trash-filled\": \"\\uE8DC\",\n  \"download\": \"\\uE403\",\n  \"chatbubble-filled\": \"\\uE232\",\n  \"chatbubble\": \"\\uE202\",\n  \"cloud-download\": \"\\uE8E4\",\n  \"cloud-upload-filled\": \"\\uE8E5\",\n  \"cloud-upload\": \"\\uE8E6\",\n  \"cloud-download-filled\": \"\\uE8E9\",\n  \"headphones\": \"\\uE8BF\",\n  \"shop\": \"\\uE609\"\n};\nexports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vdW5pX21vZHVsZXMvdW5pLWljb25zL2NvbXBvbmVudHMvdW5pLWljb25zL2ljb25zLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztlQUFlO0VBQ2QsVUFBVSxFQUFFLFFBQVE7RUFDcEIsY0FBYyxFQUFFLFFBQVE7RUFDeEIsTUFBTSxFQUFFLFFBQVE7RUFDaEIsU0FBUyxFQUFFLFFBQVE7RUFDbkIsTUFBTSxFQUFFLFFBQVE7RUFDaEIsYUFBYSxFQUFFLFFBQVE7RUFDdkIsTUFBTSxFQUFFLFFBQVE7RUFDaEIsSUFBSSxFQUFFLFFBQVE7RUFDZCxPQUFPLEVBQUUsUUFBUTtFQUNqQixRQUFRLEVBQUUsUUFBUTtFQUNsQixhQUFhLEVBQUUsUUFBUTtFQUN2QixNQUFNLEVBQUUsUUFBUTtFQUNoQixTQUFTLEVBQUUsUUFBUTtFQUNuQixnQkFBZ0IsRUFBRSxRQUFRO0VBQzFCLGVBQWUsRUFBRSxRQUFRO0VBQ3pCLGVBQWUsRUFBRSxRQUFRO0VBQ3pCLGdCQUFnQixFQUFFLFFBQVE7RUFDMUIsYUFBYSxFQUFFLFFBQVE7RUFDdkIsYUFBYSxFQUFFLFFBQVE7RUFDdkIsTUFBTSxFQUFFLFFBQVE7RUFDaEIsTUFBTSxFQUFFLFFBQVE7RUFDaEIsYUFBYSxFQUFFLFFBQVE7RUFDdkIsTUFBTSxFQUFFLFFBQVE7RUFDaEIsV0FBVyxFQUFFLFFBQVE7RUFDckIsUUFBUSxFQUFFLFFBQVE7RUFDbEIsa0JBQWtCLEVBQUUsUUFBUTtFQUM1QixlQUFlLEVBQUUsUUFBUTtFQUN6QixhQUFhLEVBQUUsUUFBUTtFQUN2QixNQUFNLEVBQUUsUUFBUTtFQUNoQixpQkFBaUIsRUFBRSxRQUFRO0VBQzNCLFVBQVUsRUFBRSxRQUFRO0VBQ3BCLFdBQVcsRUFBRSxRQUFRO0VBQ3JCLFdBQVcsRUFBRSxRQUFRO0VBQ3JCLFlBQVksRUFBRSxRQUFRO0VBQ3RCLG9CQUFvQixFQUFFLFFBQVE7RUFDOUIsU0FBUyxFQUFFLFFBQVE7RUFDbkIsUUFBUSxF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RUFDeEIsVUFBVSxFQUFFLFFBQVE7RUFDcEIsbUJBQW1CLEVBQUUsUUFBUTtFQUM3QixZQUFZLEVBQUUsUUFBUTtFQUN0QixnQkFBZ0IsRUFBRSxRQUFRO0VBQzFCLHFCQUFxQixFQUFFLFFBQVE7RUFDL0IsY0FBYyxFQUFFLFFBQVE7RUFDeEIsdUJBQXVCLEVBQUUsUUFBUTtFQUNqQyxZQUFZLEVBQUMsUUFBUTtFQUNyQixNQUFNLEVBQUM7QUFDUixDQUFDO0FBQUEiLCJmaWxlIjoiMTcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCB7XG5cdFwicHVsbGRvd25cIjogXCJcXHVlNTg4XCIsXG5cdFwicmVmcmVzaGVtcHR5XCI6IFwiXFx1ZTQ2MVwiLFxuXHRcImJhY2tcIjogXCJcXHVlNDcxXCIsXG5cdFwiZm9yd2FyZFwiOiBcIlxcdWU0NzBcIixcblx0XCJtb3JlXCI6IFwiXFx1ZTUwN1wiLFxuXHRcIm1vcmUtZmlsbGVkXCI6IFwiXFx1ZTUzN1wiLFxuXHRcInNjYW5cIjogXCJcXHVlNjEyXCIsXG5cdFwicXFcIjogXCJcXHVlMjY0XCIsXG5cdFwid2VpYm9cIjogXCJcXHVlMjYwXCIsXG5cdFwid2VpeGluXCI6IFwiXFx1ZTI2MVwiLFxuXHRcInBlbmd5b3VxdWFuXCI6IFwiXFx1ZTI2MlwiLFxuXHRcImxvb3BcIjogXCJcXHVlNTY1XCIsXG5cdFwicmVmcmVzaFwiOiBcIlxcdWU0MDdcIixcblx0XCJyZWZyZXNoLWZpbGxlZFwiOiBcIlxcdWU0MzdcIixcblx0XCJhcnJvd3RoaW5kb3duXCI6IFwiXFx1ZTU4NVwiLFxuXHRcImFycm93dGhpbmxlZnRcIjogXCJcXHVlNTg2XCIsXG5cdFwiYXJyb3d0aGlucmlnaHRcIjogXCJcXHVlNTg3XCIsXG5cdFwiYXJyb3d0aGludXBcIjogXCJcXHVlNTg0XCIsXG5cdFwidW5kby1maWxsZWRcIjogXCJcXHVlN2Q2XCIsXG5cdFwidW5kb1wiOiBcIlxcdWU0MDZcIixcblx0XCJyZWRvXCI6IFwiXFx1ZTQwNVwiLFxuXHRcInJlZG8tZmlsbGVkXCI6IFwiXFx1ZTdkOVwiLFxuXHRcImJhcnNcIjogXCJcXHVlNTYzXCIsXG5cdFwiY2hhdGJveGVzXCI6IFwiXFx1ZTIwM1wiLFxuXHRcImNhbWVyYVwiOiBcIlxcdWUzMDFcIixcblx0XCJjaGF0Ym94ZXMtZmlsbGVkXCI6IFwiXFx1ZTIzM1wiLFxuXHRcImNhbWVyYS1maWxsZWRcIjogXCJcXHVlN2VmXCIsXG5cdFwiY2FydC1maWxsZWRcIjogXCJcXHVlN2Y0XCIsXG5cdFwiY2FydFwiOiBcIlxcdWU3ZjVcIixcblx0XCJjaGVja2JveC1maWxsZWRcIjogXCJcXHVlNDQyXCIsXG5cdFwiY2hlY2tib3hcIjogXCJcXHVlN2ZhXCIsXG5cdFwiYXJyb3dsZWZ0XCI6IFwiXFx1ZTU4MlwiLFxuXHRcImFycm93ZG93blwiOiBcIlxcdWU1ODFcIixcblx0XCJhcnJvd3JpZ2h0XCI6IFwiXFx1ZTU4M1wiLFxuXHRcInNtYWxsY2lyY2xlLWZpbGxlZFwiOiBcIlxcdWU4MDFcIixcblx0XCJhcnJvd3VwXCI6IFwiXFx1ZTU4MFwiLFxuXHRcImNpcmNsZVwiOiBcIlxcdWU0MTFcIixcblx0XCJleWUtZmlsbGVkXCI6IFwiXFx1ZTU2OFwiLFxuXHRcImV5ZS1zbGFzaC1maWxsZWRcIjogXCJcXHVlODIyXCIsXG5cdFwiZXllLXNsYXNoXCI6IFwiXFx1ZTgyM1wiLFxuXHRcImV5ZVwiOiBcIlxcdWU4MjRcIixcblx0XCJmbGFnLWZpbGxlZFwiOiBcIlxcdWU4MjVcIixcblx0XCJmbGFnXCI6IFwiXFx1ZTUwOFwiLFxuXHRcImdlYXItZmlsbGVkXCI6IFwiXFx1ZTUzMlwiLFxuXHRcInJlbG9hZFwiOiBcIlxcdWU0NjJcIixcblx0XCJnZWFyXCI6IFwiXFx1ZTUwMlwiLFxuXHRcImhhbmQtdGh1bWJzZG93bi1maWxsZWRcIjogXCJcXHVlODNiXCIsXG5cdFwiaGFuZC10aHVtYnNkb3duXCI6IFwiXFx1ZTgzY1wiLFxuXHRcImhhbmQtdGh1bWJzdXAtZmlsbGVkXCI6IFwiXFx1ZTgzZFwiLFxuXHRcImhlYXJ0LWZpbGxlZFwiOiBcIlxcdWU4M2VcIixcblx0XCJoYW5kLXRodW1ic3VwXCI6IFwiXFx1ZTgzZlwiLFxuXHRcImhlYXJ0XCI6IFwiXFx1ZTg0MFwiLFxuXHRcImhvbWVcIjogXCJcXHVlNTAwXCIsXG5cdFwiaW5mb1wiOiBcIlxcdWU1MDRcIixcblx0XCJob21lLWZpbGxlZFwiOiBcIlxcdWU1MzBcIixcblx0XCJpbmZvLWZpbGxlZFwiOiBcIlxcdWU1MzRcIixcblx0XCJjaXJjbGUtZmlsbGVkXCI6IFwiXFx1ZTQ0MVwiLFxuXHRcImNoYXQtZmlsbGVkXCI6IFwiXFx1ZTg0N1wiLFxuXHRcImNoYXRcIjogXCJcXHVlMjYzXCIsXG5cdFwibWFpbC1vcGVuLWZpbGxlZFwiOiBcIlxcdWU4NGRcIixcblx0XCJlbWFpbC1maWxsZWRcIjogXCJcXHVlMjMxXCIsXG5cdFwibWFpbC1vcGVuXCI6IFwiXFx1ZTg0ZVwiLFxuXHRcImVtYWlsXCI6IFwiXFx1ZTIwMVwiLFxuXHRcImNoZWNrbWFya2VtcHR5XCI6IFwiXFx1ZTQ3MlwiLFxuXHRcImxpc3RcIjogXCJcXHVlNTYyXCIsXG5cdFwibG9ja2VkLWZpbGxlZFwiOiBcIlxcdWU4NTZcIixcblx0XCJsb2NrZWRcIjogXCJcXHVlNTA2XCIsXG5cdFwibWFwLWZpbGxlZFwiOiBcIlxcdWU4NWNcIixcblx0XCJtYXAtcGluXCI6IFwiXFx1ZTg1ZVwiLFxuXHRcIm1hcC1waW4tZWxsaXBzZVwiOiBcIlxcdWU4NjRcIixcblx0XCJtYXBcIjogXCJcXHVlMzY0XCIsXG5cdFwibWludXMtZmlsbGVkXCI6IFwiXFx1ZTQ0MFwiLFxuXHRcIm1pYy1maWxsZWRcIjogXCJcXHVlMzMyXCIsXG5cdFwibWludXNcIjogXCJcXHVlNDEwXCIsXG5cdFwibWljb2ZmXCI6IFwiXFx1ZTM2MFwiLFxuXHRcIm1pY1wiOiBcIlxcdWUzMDJcIixcblx0XCJjbGVhclwiOiBcIlxcdWU0MzRcIixcblx0XCJzbWFsbGNpcmNsZVwiOiBcIlxcdWU4NjhcIixcblx0XCJjbG9zZVwiOiBcIlxcdWU0MDRcIixcblx0XCJjbG9zZWVtcHR5XCI6IFwiXFx1ZTQ2MFwiLFxuXHRcInBhcGVyY2xpcFwiOiBcIlxcdWU1NjdcIixcblx0XCJwYXBlcnBsYW5lXCI6IFwiXFx1ZTUwM1wiLFxuXHRcInBhcGVycGxhbmUtZmlsbGVkXCI6IFwiXFx1ZTg2ZVwiLFxuXHRcInBlcnNvbi1maWxsZWRcIjogXCJcXHVlMTMxXCIsXG5cdFwiY29udGFjdC1maWxsZWRcIjogXCJcXHVlMTMwXCIsXG5cdFwicGVyc29uXCI6IFwiXFx1ZTEwMVwiLFxuXHRcImNvbnRhY3RcIjogXCJcXHVlMTAwXCIsXG5cdFwiaW1hZ2VzLWZpbGxlZFwiOiBcIlxcdWU4N2FcIixcblx0XCJwaG9uZVwiOiBcIlxcdWUyMDBcIixcblx0XCJpbWFnZXNcIjogXCJcXHVlODdiXCIsXG5cdFwiaW1hZ2VcIjogXCJcXHVlMzYzXCIsXG5cdFwiaW1hZ2UtZmlsbGVkXCI6IFwiXFx1ZTg3N1wiLFxuXHRcImxvY2F0aW9uLWZpbGxlZFwiOiBcIlxcdWUzMzNcIixcblx0XCJsb2NhdGlvblwiOiBcIlxcdWUzMDNcIixcblx0XCJwbHVzLWZpbGxlZFwiOiBcIlxcdWU0MzlcIixcblx0XCJwbHVzXCI6IFwiXFx1ZTQwOVwiLFxuXHRcInBsdXNlbXB0eVwiOiBcIlxcdWU0NjhcIixcblx0XCJoZWxwLWZpbGxlZFwiOiBcIlxcdWU1MzVcIixcblx0XCJoZWxwXCI6IFwiXFx1ZTUwNVwiLFxuXHRcIm5hdmlnYXRlLWZpbGxlZFwiOiBcIlxcdWU4ODRcIixcblx0XCJuYXZpZ2F0ZVwiOiBcIlxcdWU1MDFcIixcblx0XCJtaWMtc2xhc2gtZmlsbGVkXCI6IFwiXFx1ZTg5MlwiLFxuXHRcInNlYXJjaFwiOiBcIlxcdWU0NjZcIixcblx0XCJzZXR0aW5nc1wiOiBcIlxcdWU1NjBcIixcblx0XCJzb3VuZFwiOiBcIlxcdWU1OTBcIixcblx0XCJzb3VuZC1maWxsZWRcIjogXCJcXHVlOGExXCIsXG5cdFwic3Bpbm5lci1jeWNsZVwiOiBcIlxcdWU0NjVcIixcblx0XCJkb3dubG9hZC1maWxsZWRcIjogXCJcXHVlOGE0XCIsXG5cdFwicGVyc29uYWRkLWZpbGxlZFwiOiBcIlxcdWUxMzJcIixcblx0XCJ2aWRlb2NhbS1maWxsZWRcIjogXCJcXHVlOGFmXCIsXG5cdFwicGVyc29uYWRkXCI6IFwiXFx1ZTEwMlwiLFxuXHRcInVwbG9hZFwiOiBcIlxcdWU0MDJcIixcblx0XCJ1cGxvYWQtZmlsbGVkXCI6IFwiXFx1ZThiMVwiLFxuXHRcInN0YXJoYWxmXCI6IFwiXFx1ZTQ2M1wiLFxuXHRcInN0YXItZmlsbGVkXCI6IFwiXFx1ZTQzOFwiLFxuXHRcInN0YXJcIjogXCJcXHVlNDA4XCIsXG5cdFwidHJhc2hcIjogXCJcXHVlNDAxXCIsXG5cdFwicGhvbmUtZmlsbGVkXCI6IFwiXFx1ZTIzMFwiLFxuXHRcImNvbXBvc2VcIjogXCJcXHVlNDAwXCIsXG5cdFwidmlkZW9jYW1cIjogXCJcXHVlMzAwXCIsXG5cdFwidHJhc2gtZmlsbGVkXCI6IFwiXFx1ZThkY1wiLFxuXHRcImRvd25sb2FkXCI6IFwiXFx1ZTQwM1wiLFxuXHRcImNoYXRidWJibGUtZmlsbGVkXCI6IFwiXFx1ZTIzMlwiLFxuXHRcImNoYXRidWJibGVcIjogXCJcXHVlMjAyXCIsXG5cdFwiY2xvdWQtZG93bmxvYWRcIjogXCJcXHVlOGU0XCIsXG5cdFwiY2xvdWQtdXBsb2FkLWZpbGxlZFwiOiBcIlxcdWU4ZTVcIixcblx0XCJjbG91ZC11cGxvYWRcIjogXCJcXHVlOGU2XCIsXG5cdFwiY2xvdWQtZG93bmxvYWQtZmlsbGVkXCI6IFwiXFx1ZThlOVwiLFxuXHRcImhlYWRwaG9uZXNcIjpcIlxcdWU4YmZcIixcblx0XCJzaG9wXCI6XCJcXHVlNjA5XCJcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///17\n");

/***/ }),

/***/ 18:
/*!*******************************************************************************************************************************************************************!*\
  !*** /Users/tongjie/Desktop/QNRTC-Uniapp/demo/uni_modules/uni-icons/components/uni-icons/uni-icons.vue?vue&type=style&index=0&id=a2e81f6e&lang=scss&scoped=true& ***!
  \*******************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_11_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_11_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_icons_vue_vue_type_style_index_0_id_a2e81f6e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--11-oneOf-0-1!../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--11-oneOf-0-2!../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--11-oneOf-0-3!../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--11-oneOf-0-4!../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./uni-icons.vue?vue&type=style&index=0&id=a2e81f6e&lang=scss&scoped=true& */ 19);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_11_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_11_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_icons_vue_vue_type_style_index_0_id_a2e81f6e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_11_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_11_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_icons_vue_vue_type_style_index_0_id_a2e81f6e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_11_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_11_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_icons_vue_vue_type_style_index_0_id_a2e81f6e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_11_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_11_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_icons_vue_vue_type_style_index_0_id_a2e81f6e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_11_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_11_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_icons_vue_vue_type_style_index_0_id_a2e81f6e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 19:
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--11-oneOf-0-1!./node_modules/postcss-loader/src??ref--11-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--11-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--11-oneOf-0-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!/Users/tongjie/Desktop/QNRTC-Uniapp/demo/uni_modules/uni-icons/components/uni-icons/uni-icons.vue?vue&type=style&index=0&id=a2e81f6e&lang=scss&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  ".uni-icons": {
    "": {
      "fontFamily": [
        "uniicons",
        0,
        0,
        16
      ],
      "textDecoration": [
        "none",
        0,
        0,
        16
      ],
      "textAlign": [
        "center",
        0,
        0,
        16
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

/***/ 21:
/*!**********************************************************************************************************************************************!*\
  !*** /Users/tongjie/Desktop/QNRTC-Uniapp/demo/uni_modules/uni-easyinput/components/uni-easyinput/uni-easyinput.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_easyinput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib??ref--5-0!../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--5-1!../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./uni-easyinput.vue?vue&type=script&lang=js& */ 22);\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_easyinput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_easyinput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_easyinput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_easyinput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_easyinput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXFrQixDQUFnQiw2akJBQUcsRUFBQyIsImZpbGUiOiIyMS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS01LTAhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTUtMSEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi91bmktZWFzeWlucHV0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTUtMCEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNS0xIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3VuaS1lYXN5aW5wdXQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///21\n");

/***/ }),

/***/ 22:
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--5-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--5-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!/Users/tongjie/Desktop/QNRTC-Uniapp/demo/uni_modules/uni-easyinput/components/uni-easyinput/uni-easyinput.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n// import {\n// \tdebounce,\n// \tthrottle\n// } from './common.js'\n/**\n * Easyinput 输入框\n * @description 此组件可以实现表单的输入与校验，包括 \"text\" 和 \"textarea\" 类型。\n * @tutorial https://ext.dcloud.net.cn/plugin?id=3455\n * @property {String}\tvalue\t输入内容\n * @property {String }\ttype\t输入框的类型（默认text） password/text/textarea/..\n * \t@value text\t\t\t文本输入键盘\n * \t@value textarea\t多行文本输入键盘\n * \t@value password\t密码输入键盘\n * \t@value number\t\t数字输入键盘，注意iOS上app-vue弹出的数字键盘并非9宫格方式\n * \t@value idcard\t\t身份证输入键盘，信、支付宝、百度、QQ小程序\n * \t@value digit\t\t带小数点的数字键盘\t，App的nvue页面、微信、支付宝、百度、头条、QQ小程序支持\n * @property {Boolean}\tclearable\t是否显示右侧清空内容的图标控件，点击可清空输入框内容（默认true）\n * @property {Boolean}\tautoHeight\t是否自动增高输入区域，type为textarea时有效（默认true）\n * @property {String }\tplaceholder\t输入框的提示文字\n * @property {String }\tplaceholderStyle\tplaceholder的样式(内联样式，字符串)，如\"color: #ddd\"\n * @property {Boolean}\tfocus\t是否自动获得焦点（默认false）\n * @property {Boolean}\tdisabled\t是否禁用（默认false）\n * @property {Number }\tmaxlength\t最大输入长度，设置为 -1 的时候不限制最大长度（默认140）\n * @property {String }\tconfirmType\t设置键盘右下角按钮的文字，仅在type=\"text\"时生效（默认done）\n * @property {Number }\tclearSize\t清除图标的大小，单位px（默认15）\n * @property {String}\tprefixIcon\t输入框头部图标\n * @property {String}\tsuffixIcon\t输入框尾部图标\n * @property {Boolean}\ttrim\t是否自动去除两端的空格\n * @value both\t去除两端空格\n * @value left\t去除左侧空格\n * @value right\t去除右侧空格\n * @value start\t去除左侧空格\n * @value end\t\t去除右侧空格\n * @value all\t\t去除全部空格\n * @value none\t不去除空格\n * @property {Boolean}\tinputBorder\t是否显示input输入框的边框（默认true）\n * @property {Boolean}\tpasswordIcon\ttype=password时是否显示小眼睛图标\n * @property {Object}\tstyles\t自定义颜色\n * @event {Function}\tinput\t输入框内容发生变化时触发\n * @event {Function}\tfocus\t输入框获得焦点时触发\n * @event {Function}\tblur\t输入框失去焦点时触发\n * @event {Function}\tconfirm\t点击完成按钮时触发\n * @event {Function}\ticonClick\t点击图标时触发\n * @example <uni-easyinput v-model=\"mobile\"></uni-easyinput>\n */\nvar _default2 = {\n  name: 'uni-easyinput',\n  emits: ['click', 'iconClick', 'update:modelValue', 'input', 'focus', 'blur', 'confirm'],\n  model: {\n    prop: 'modelValue',\n    event: 'update:modelValue'\n  },\n  props: {\n    name: String,\n    value: [Number, String],\n    modelValue: [Number, String],\n    type: {\n      type: String,\n      default: 'text'\n    },\n    clearable: {\n      type: Boolean,\n      default: true\n    },\n    autoHeight: {\n      type: Boolean,\n      default: false\n    },\n    placeholder: String,\n    placeholderStyle: String,\n    focus: {\n      type: Boolean,\n      default: false\n    },\n    disabled: {\n      type: Boolean,\n      default: false\n    },\n    maxlength: {\n      type: [Number, String],\n      default: 140\n    },\n    confirmType: {\n      type: String,\n      default: 'done'\n    },\n    clearSize: {\n      type: [Number, String],\n      default: 15\n    },\n    inputBorder: {\n      type: Boolean,\n      default: true\n    },\n    prefixIcon: {\n      type: String,\n      default: ''\n    },\n    suffixIcon: {\n      type: String,\n      default: ''\n    },\n    trim: {\n      type: [Boolean, String],\n      default: true\n    },\n    passwordIcon: {\n      type: Boolean,\n      default: true\n    },\n    styles: {\n      type: Object,\n      default: function _default() {\n        return {\n          color: '#333',\n          disableColor: '#eee',\n          borderColor: '#e5e5e5'\n        };\n      }\n    },\n    errorMessage: {\n      type: [String, Boolean],\n      default: ''\n    }\n  },\n  data: function data() {\n    return {\n      focused: false,\n      errMsg: '',\n      val: '',\n      showMsg: '',\n      border: false,\n      isFirstBorder: false,\n      showClearIcon: false,\n      showPassword: false\n    };\n  },\n  computed: {\n    msg: function msg() {\n      return this.errorMessage || this.errMsg;\n    },\n    // 因为uniapp的input组件的maxlength组件必须要数值，这里转为数值，给用户可以传入字符串数值\n    inputMaxlength: function inputMaxlength() {\n      return Number(this.maxlength);\n    }\n  },\n  watch: {\n    value: function value(newVal) {\n      if (this.errMsg) this.errMsg = '';\n      this.val = newVal;\n      // fix by mehaotian is_reset 在 uni-forms 中定义\n      if (this.form && this.formItem && !this.is_reset) {\n        this.is_reset = false;\n        this.formItem.setValue(newVal);\n      }\n    },\n    modelValue: function modelValue(newVal) {\n      if (this.errMsg) this.errMsg = '';\n      this.val = newVal;\n      if (this.form && this.formItem && !this.is_reset) {\n        this.is_reset = false;\n        this.formItem.setValue(newVal);\n      }\n    },\n    focus: function focus(newVal) {\n      var _this = this;\n      this.$nextTick(function () {\n        _this.focused = _this.focus;\n      });\n    }\n  },\n  created: function created() {\n    if (!this.value) {\n      this.val = this.modelValue;\n    }\n    if (!this.modelValue) {\n      this.val = this.value;\n    }\n    this.form = this.getForm('uniForms');\n    this.formItem = this.getForm('uniFormsItem');\n    if (this.form && this.formItem) {\n      if (this.formItem.name) {\n        if (!this.is_reset) {\n          this.is_reset = false;\n          this.formItem.setValue(this.val);\n        }\n        this.rename = this.formItem.name;\n        this.form.inputChildrens.push(this);\n      }\n    }\n  },\n  mounted: function mounted() {\n    var _this2 = this;\n    // this.onInput = throttle(this.input, 500)\n    this.$nextTick(function () {\n      // setTimeout(()=>{\n      // },1000)\n      _this2.focused = _this2.focus;\n    });\n  },\n  methods: {\n    /**\n     * 初始化变量值\n     */\n    init: function init() {},\n    onClickIcon: function onClickIcon(type) {\n      this.$emit('iconClick', type);\n    },\n    /**\n     * 获取父元素实例\n     */\n    getForm: function getForm() {\n      var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'uniForms';\n      var parent = this.$parent;\n      var parentName = parent.$options.name;\n      while (parentName !== name) {\n        parent = parent.$parent;\n        if (!parent) return false;\n        parentName = parent.$options.name;\n      }\n      return parent;\n    },\n    onEyes: function onEyes() {\n      this.showPassword = !this.showPassword;\n    },\n    onInput: function onInput(event) {\n      var value = event.detail.value;\n      // 判断是否去除空格\n      if (this.trim) {\n        if (typeof this.trim === 'boolean' && this.trim) {\n          value = this.trimStr(value);\n        }\n        if (typeof this.trim === 'string') {\n          value = this.trimStr(value, this.trim);\n        }\n      }\n      ;\n      if (this.errMsg) this.errMsg = '';\n      this.val = value;\n      // TODO 兼容 vue2\n      this.$emit('input', value);\n      // TODO　兼容　vue3\n      this.$emit('update:modelValue', value);\n    },\n    onFocus: function onFocus(event) {\n      // this.focused = true;\n      this.$emit('focus', event);\n    },\n    onBlur: function onBlur(event) {\n      var value = event.detail.value;\n      // setTimeout(() => {\n      // this.focused = false;\n      // }, 100);\n      this.$emit('blur', event);\n    },\n    onConfirm: function onConfirm(e) {\n      this.$emit('confirm', e.detail.value);\n    },\n    onClear: function onClear(event) {\n      this.val = '';\n      // TODO 兼容 vue2\n      this.$emit('input', '');\n      // TODO 兼容 vue2\n      // TODO　兼容　vue3\n      this.$emit('update:modelValue', '');\n    },\n    fieldClick: function fieldClick() {\n      this.$emit('click');\n    },\n    trimStr: function trimStr(str) {\n      var pos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'both';\n      if (pos === 'both') {\n        return str.trim();\n      } else if (pos === 'left') {\n        return str.trimLeft();\n      } else if (pos === 'right') {\n        return str.trimRight();\n      } else if (pos === 'start') {\n        return str.trimStart();\n      } else if (pos === 'end') {\n        return str.trimEnd();\n      } else if (pos === 'all') {\n        return str.replace(/\\s+/g, '');\n      } else if (pos === 'none') {\n        return str;\n      }\n      return str;\n    }\n  }\n};\nexports.default = _default2;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vdW5pX21vZHVsZXMvdW5pLWVhc3lpbnB1dC9jb21wb25lbnRzL3VuaS1lYXN5aW5wdXQvdW5pLWVhc3lpbnB1dC52dWUiXSwibmFtZXMiOlsibmFtZSIsImVtaXRzIiwibW9kZWwiLCJwcm9wIiwiZXZlbnQiLCJwcm9wcyIsInZhbHVlIiwibW9kZWxWYWx1ZSIsInR5cGUiLCJkZWZhdWx0IiwiY2xlYXJhYmxlIiwiYXV0b0hlaWdodCIsInBsYWNlaG9sZGVyIiwicGxhY2Vob2xkZXJTdHlsZSIsImZvY3VzIiwiZGlzYWJsZWQiLCJtYXhsZW5ndGgiLCJjb25maXJtVHlwZSIsImNsZWFyU2l6ZSIsImlucHV0Qm9yZGVyIiwicHJlZml4SWNvbiIsInN1ZmZpeEljb24iLCJ0cmltIiwicGFzc3dvcmRJY29uIiwic3R5bGVzIiwiY29sb3IiLCJkaXNhYmxlQ29sb3IiLCJib3JkZXJDb2xvciIsImVycm9yTWVzc2FnZSIsImRhdGEiLCJmb2N1c2VkIiwiZXJyTXNnIiwidmFsIiwic2hvd01zZyIsImJvcmRlciIsImlzRmlyc3RCb3JkZXIiLCJzaG93Q2xlYXJJY29uIiwic2hvd1Bhc3N3b3JkIiwiY29tcHV0ZWQiLCJtc2ciLCJpbnB1dE1heGxlbmd0aCIsIndhdGNoIiwiY3JlYXRlZCIsIm1vdW50ZWQiLCJtZXRob2RzIiwiaW5pdCIsIm9uQ2xpY2tJY29uIiwiZ2V0Rm9ybSIsInBhcmVudCIsInBhcmVudE5hbWUiLCJvbkV5ZXMiLCJvbklucHV0Iiwib25Gb2N1cyIsIm9uQmx1ciIsIm9uQ29uZmlybSIsIm9uQ2xlYXIiLCJmaWVsZENsaWNrIiwidHJpbVN0ciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBeENBLGdCQTBDQTtFQUNBQTtFQUNBQztFQUNBQztJQUNBQztJQUNBQztFQUNBO0VBQ0FDO0lBQ0FMO0lBQ0FNO0lBQ0FDO0lBQ0FDO01BQ0FBO01BQ0FDO0lBQ0E7SUFDQUM7TUFDQUY7TUFDQUM7SUFDQTtJQUNBRTtNQUNBSDtNQUNBQztJQUNBO0lBQ0FHO0lBQ0FDO0lBQ0FDO01BQ0FOO01BQ0FDO0lBQ0E7SUFDQU07TUFDQVA7TUFDQUM7SUFDQTtJQUNBTztNQUNBUjtNQUNBQztJQUNBO0lBQ0FRO01BQ0FUO01BQ0FDO0lBQ0E7SUFDQVM7TUFDQVY7TUFDQUM7SUFDQTtJQUNBVTtNQUNBWDtNQUNBQztJQUNBO0lBQ0FXO01BQ0FaO01BQ0FDO0lBQ0E7SUFDQVk7TUFDQWI7TUFDQUM7SUFDQTtJQUNBYTtNQUNBZDtNQUNBQztJQUNBO0lBQ0FjO01BQ0FmO01BQ0FDO0lBQ0E7SUFDQWU7TUFDQWhCO01BQ0FDO1FBQ0E7VUFDQWdCO1VBQ0FDO1VBQ0FDO1FBQ0E7TUFDQTtJQUNBO0lBQ0FDO01BQ0FwQjtNQUNBQztJQUNBO0VBQ0E7RUFDQW9CO0lBQ0E7TUFDQUM7TUFDQUM7TUFDQUM7TUFDQUM7TUFDQUM7TUFDQUM7TUFDQUM7TUFDQUM7SUFDQTtFQUNBO0VBQ0FDO0lBQ0FDO01BQ0E7SUFDQTtJQUNBO0lBQ0FDO01BQ0E7SUFDQTtFQUNBO0VBQ0FDO0lBQ0FuQztNQUNBO01BQ0E7TUFDQTtNQUNBO1FBQ0E7UUFDQTtNQUNBO0lBQ0E7SUFDQUM7TUFDQTtNQUNBO01BQ0E7UUFDQTtRQUNBO01BQ0E7SUFDQTtJQUNBTztNQUFBO01BQ0E7UUFDQTtNQUNBO0lBQ0E7RUFDQTtFQUNBNEI7SUFDQTtNQUNBO0lBQ0E7SUFDQTtNQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7TUFDQTtRQUNBO1VBQ0E7VUFDQTtRQUNBO1FBQ0E7UUFDQTtNQUNBO0lBQ0E7RUFDQTtFQUNBQztJQUFBO0lBQ0E7SUFDQTtNQUNBO01BQ0E7TUFDQTtJQUNBO0VBQ0E7RUFDQUM7SUFDQTtBQUNBO0FBQ0E7SUFDQUMsdUJBRUE7SUFDQUM7TUFDQTtJQUNBO0lBQ0E7QUFDQTtBQUNBO0lBQ0FDO01BQUE7TUFDQTtNQUNBO01BQ0E7UUFDQUM7UUFDQTtRQUNBQztNQUNBO01BQ0E7SUFDQTtJQUVBQztNQUNBO0lBQ0E7SUFDQUM7TUFDQTtNQUNBO01BQ0E7UUFDQTtVQUNBN0M7UUFDQTtRQUNBO1VBQ0FBO1FBQ0E7TUFDQTtNQUFBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO0lBQ0E7SUFFQThDO01BQ0E7TUFDQTtJQUNBO0lBQ0FDO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtJQUNBO0lBQ0FDO01BQ0E7SUFDQTtJQUNBQztNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtJQUNBO0lBQ0FDO01BQ0E7SUFDQTtJQUNBQztNQUFBO01BQ0E7UUFDQTtNQUNBO1FBQ0E7TUFDQTtRQUNBO01BQ0E7UUFDQTtNQUNBO1FBQ0E7TUFDQTtRQUNBO01BQ0E7UUFDQTtNQUNBO01BQ0E7SUFDQTtFQUNBO0FBQ0E7QUFBQSIsImZpbGUiOiIyMi5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cclxuXHQ8dmlldyBjbGFzcz1cInVuaS1lYXN5aW5wdXRcIiA6Y2xhc3M9XCJ7J3VuaS1lYXN5aW5wdXQtZXJyb3InOm1zZ31cIiA6c3R5bGU9XCJ7Y29sb3I6aW5wdXRCb3JkZXIgJiYgbXNnPycjZGQ1MjRkJzpzdHlsZXMuY29sb3J9XCI+XHJcblx0XHQ8dmlldyBjbGFzcz1cInVuaS1lYXN5aW5wdXRfX2NvbnRlbnRcIiA6Y2xhc3M9XCJ7J2lzLWlucHV0LWJvcmRlcic6aW5wdXRCb3JkZXIgLCdpcy1pbnB1dC1lcnJvci1ib3JkZXInOmlucHV0Qm9yZGVyICYmIG1zZywnaXMtdGV4dGFyZWEnOnR5cGU9PT0ndGV4dGFyZWEnLCdpcy1kaXNhYmxlZCc6ZGlzYWJsZWR9XCJcclxuXHRcdCA6c3R5bGU9XCJ7J2JvcmRlci1jb2xvcic6aW5wdXRCb3JkZXIgJiYgbXNnPycjZGQ1MjRkJzpzdHlsZXMuYm9yZGVyQ29sb3IsJ2JhY2tncm91bmQtY29sb3InOmRpc2FibGVkP3N0eWxlcy5kaXNhYmxlQ29sb3I6Jyd9XCI+XHJcblx0XHRcdDx1bmktaWNvbnMgdi1pZj1cInByZWZpeEljb25cIiBjbGFzcz1cImNvbnRlbnQtY2xlYXItaWNvblwiIDp0eXBlPVwicHJlZml4SWNvblwiIGNvbG9yPVwiI2MwYzRjY1wiIEBjbGljaz1cIm9uQ2xpY2tJY29uKCdwcmVmaXgnKVwiPjwvdW5pLWljb25zPlxyXG5cdFx0XHQ8dGV4dGFyZWEgdi1pZj1cInR5cGUgPT09ICd0ZXh0YXJlYSdcIiBjbGFzcz1cInVuaS1lYXN5aW5wdXRfX2NvbnRlbnQtdGV4dGFyZWFcIiA6Y2xhc3M9XCJ7J2lucHV0LXBhZGRpbmcnOmlucHV0Qm9yZGVyfVwiXHJcblx0XHRcdCA6bmFtZT1cIm5hbWVcIiA6dmFsdWU9XCJ2YWxcIiA6cGxhY2Vob2xkZXI9XCJwbGFjZWhvbGRlclwiIDpwbGFjZWhvbGRlclN0eWxlPVwicGxhY2Vob2xkZXJTdHlsZVwiIDpkaXNhYmxlZD1cImRpc2FibGVkXCJcclxuXHRcdFx0IDptYXhsZW5ndGg9XCJpbnB1dE1heGxlbmd0aFwiIDpmb2N1cz1cImZvY3VzZWRcIiA6YXV0b0hlaWdodD1cImF1dG9IZWlnaHRcIiBAaW5wdXQ9XCJvbklucHV0XCIgQGJsdXI9XCJvbkJsdXJcIiAgQGZvY3VzPVwib25Gb2N1c1wiXHJcblx0XHRcdCBAY29uZmlybT1cIm9uQ29uZmlybVwiPjwvdGV4dGFyZWE+XHJcblx0XHRcdDxpbnB1dCB2LWVsc2UgOnR5cGU9XCJ0eXBlID09PSAncGFzc3dvcmQnPyd0ZXh0Jzp0eXBlXCIgY2xhc3M9XCJ1bmktZWFzeWlucHV0X19jb250ZW50LWlucHV0XCIgOnN0eWxlPVwie1xyXG5cdFx0XHRcdCAncGFkZGluZy1yaWdodCc6dHlwZSA9PT0gJ3Bhc3N3b3JkJyB8fGNsZWFyYWJsZSB8fCBwcmVmaXhJY29uPycnOicxMHB4JyxcclxuXHRcdFx0XHQgJ3BhZGRpbmctbGVmdCc6cHJlZml4SWNvbj8nJzonMTBweCdcclxuXHRcdFx0IH1cIlxyXG5cdFx0XHQgOm5hbWU9XCJuYW1lXCIgOnZhbHVlPVwidmFsXCIgOnBhc3N3b3JkPVwiIXNob3dQYXNzd29yZCAmJiB0eXBlID09PSAncGFzc3dvcmQnXCIgOnBsYWNlaG9sZGVyPVwicGxhY2Vob2xkZXJcIlxyXG5cdFx0XHQgOnBsYWNlaG9sZGVyU3R5bGU9XCJwbGFjZWhvbGRlclN0eWxlXCIgOmRpc2FibGVkPVwiZGlzYWJsZWRcIiA6bWF4bGVuZ3RoPVwiaW5wdXRNYXhsZW5ndGhcIiA6Zm9jdXM9XCJmb2N1c2VkXCIgOmNvbmZpcm1UeXBlPVwiY29uZmlybVR5cGVcIiBAZm9jdXM9XCJvbkZvY3VzXCJcclxuXHRcdFx0IEBibHVyPVwib25CbHVyXCIgQGlucHV0PVwib25JbnB1dFwiIEBjb25maXJtPVwib25Db25maXJtXCIgLz5cclxuXHRcdFx0PHRlbXBsYXRlIHYtaWY9XCJ0eXBlID09PSAncGFzc3dvcmQnICYmIHBhc3N3b3JkSWNvblwiID5cclxuXHRcdFx0XHQ8dW5pLWljb25zIHYtaWY9XCJ2YWwgIT0gJycgXCIgY2xhc3M9XCJjb250ZW50LWNsZWFyLWljb25cIiA6Y2xhc3M9XCJ7J2lzLXRleHRhcmVhLWljb24nOnR5cGU9PT0ndGV4dGFyZWEnfVwiIDp0eXBlPVwic2hvd1Bhc3N3b3JkPydleWUtc2xhc2gtZmlsbGVkJzonZXllLWZpbGxlZCdcIlxyXG5cdFx0XHRcdCA6c2l6ZT1cIjE4XCIgY29sb3I9XCIjYzBjNGNjXCIgQGNsaWNrPVwib25FeWVzXCI+PC91bmktaWNvbnM+XHJcblx0XHRcdDwvdGVtcGxhdGU+XHJcblx0XHRcdDx0ZW1wbGF0ZSB2LWVsc2UtaWY9XCJzdWZmaXhJY29uXCI+XHJcblx0XHRcdFx0PHVuaS1pY29ucyB2LWlmPVwic3VmZml4SWNvblwiIGNsYXNzPVwiY29udGVudC1jbGVhci1pY29uXCIgOnR5cGU9XCJzdWZmaXhJY29uXCIgY29sb3I9XCIjYzBjNGNjXCIgQGNsaWNrPVwib25DbGlja0ljb24oJ3N1ZmZpeCcpXCI+PC91bmktaWNvbnM+XHJcblx0XHRcdDwvdGVtcGxhdGU+XHJcblx0XHRcdDx0ZW1wbGF0ZSB2LWVsc2U+XHJcblx0XHRcdFx0PHVuaS1pY29ucyBjbGFzcz1cImNvbnRlbnQtY2xlYXItaWNvblwiIDpjbGFzcz1cInsnaXMtdGV4dGFyZWEtaWNvbic6dHlwZT09PSd0ZXh0YXJlYSd9XCIgdHlwZT1cImNsZWFyXCIgOnNpemU9XCJjbGVhclNpemVcIlxyXG5cdFx0XHRcdCB2LWlmPVwiY2xlYXJhYmxlICYmIHZhbCAmJiAhZGlzYWJsZWRcIiBjb2xvcj1cIiNjMGM0Y2NcIiBAY2xpY2s9XCJvbkNsZWFyXCI+PC91bmktaWNvbnM+XHJcblx0XHRcdDwvdGVtcGxhdGU+XG5cdFx0XHQ8c2xvdCBuYW1lPVwicmlnaHRcIj48L3Nsb3Q+XHJcblx0XHQ8L3ZpZXc+XHJcblx0PC92aWV3PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cblx0Ly8gaW1wb3J0IHtcblx0Ly8gXHRkZWJvdW5jZSxcblx0Ly8gXHR0aHJvdHRsZVxuXHQvLyB9IGZyb20gJy4vY29tbW9uLmpzJ1xyXG5cdC8qKlxyXG5cdCAqIEVhc3lpbnB1dCDovpPlhaXmoYZcclxuXHQgKiBAZGVzY3JpcHRpb24g5q2k57uE5Lu25Y+v5Lul5a6e546w6KGo5Y2V55qE6L6T5YWl5LiO5qCh6aqM77yM5YyF5ousIFwidGV4dFwiIOWSjCBcInRleHRhcmVhXCIg57G75Z6L44CCXHJcblx0ICogQHR1dG9yaWFsIGh0dHBzOi8vZXh0LmRjbG91ZC5uZXQuY24vcGx1Z2luP2lkPTM0NTVcclxuXHQgKiBAcHJvcGVydHkge1N0cmluZ31cdHZhbHVlXHTovpPlhaXlhoXlrrlcclxuXHQgKiBAcHJvcGVydHkge1N0cmluZyB9XHR0eXBlXHTovpPlhaXmoYbnmoTnsbvlnovvvIjpu5jorqR0ZXh077yJIHBhc3N3b3JkL3RleHQvdGV4dGFyZWEvLi5cclxuXHQgKiBcdEB2YWx1ZSB0ZXh0XHRcdFx05paH5pys6L6T5YWl6ZSu55uYXHJcblx0ICogXHRAdmFsdWUgdGV4dGFyZWFcdOWkmuihjOaWh+acrOi+k+WFpemUruebmFxyXG5cdCAqIFx0QHZhbHVlIHBhc3N3b3JkXHTlr4bnoIHovpPlhaXplK7nm5hcclxuXHQgKiBcdEB2YWx1ZSBudW1iZXJcdFx05pWw5a2X6L6T5YWl6ZSu55uY77yM5rOo5oSPaU9T5LiKYXBwLXZ1ZeW8ueWHuueahOaVsOWtl+mUruebmOW5tumdnjnlrqvmoLzmlrnlvI9cclxuXHQgKiBcdEB2YWx1ZSBpZGNhcmRcdFx06Lqr5Lu96K+B6L6T5YWl6ZSu55uY77yM5L+h44CB5pSv5LuY5a6d44CB55m+5bqm44CBUVHlsI/nqIvluo9cclxuXHQgKiBcdEB2YWx1ZSBkaWdpdFx0XHTluKblsI/mlbDngrnnmoTmlbDlrZfplK7nm5hcdO+8jEFwcOeahG52dWXpobXpnaLjgIHlvq7kv6HjgIHmlK/ku5jlrp3jgIHnmb7luqbjgIHlpLTmnaHjgIFRUeWwj+eoi+W6j+aUr+aMgVxyXG5cdCAqIEBwcm9wZXJ0eSB7Qm9vbGVhbn1cdGNsZWFyYWJsZVx05piv5ZCm5pi+56S65Y+z5L6n5riF56m65YaF5a6555qE5Zu+5qCH5o6n5Lu277yM54K55Ye75Y+v5riF56m66L6T5YWl5qGG5YaF5a6577yI6buY6K6kdHJ1Ze+8iVxyXG5cdCAqIEBwcm9wZXJ0eSB7Qm9vbGVhbn1cdGF1dG9IZWlnaHRcdOaYr+WQpuiHquWKqOWinumrmOi+k+WFpeWMuuWfn++8jHR5cGXkuLp0ZXh0YXJlYeaXtuacieaViO+8iOm7mOiupHRydWXvvIlcclxuXHQgKiBAcHJvcGVydHkge1N0cmluZyB9XHRwbGFjZWhvbGRlclx06L6T5YWl5qGG55qE5o+Q56S65paH5a2XXHJcblx0ICogQHByb3BlcnR5IHtTdHJpbmcgfVx0cGxhY2Vob2xkZXJTdHlsZVx0cGxhY2Vob2xkZXLnmoTmoLflvI8o5YaF6IGU5qC35byP77yM5a2X56ym5LiyKe+8jOWmglwiY29sb3I6ICNkZGRcIlxyXG5cdCAqIEBwcm9wZXJ0eSB7Qm9vbGVhbn1cdGZvY3VzXHTmmK/lkKboh6rliqjojrflvpfnhKbngrnvvIjpu5jorqRmYWxzZe+8iVxyXG5cdCAqIEBwcm9wZXJ0eSB7Qm9vbGVhbn1cdGRpc2FibGVkXHTmmK/lkKbnpoHnlKjvvIjpu5jorqRmYWxzZe+8iVxyXG5cdCAqIEBwcm9wZXJ0eSB7TnVtYmVyIH1cdG1heGxlbmd0aFx05pyA5aSn6L6T5YWl6ZW/5bqm77yM6K6+572u5Li6IC0xIOeahOaXtuWAmeS4jemZkOWItuacgOWkp+mVv+W6pu+8iOm7mOiupDE0MO+8iVxyXG5cdCAqIEBwcm9wZXJ0eSB7U3RyaW5nIH1cdGNvbmZpcm1UeXBlXHTorr7nva7plK7nm5jlj7PkuIvop5LmjInpkq7nmoTmloflrZfvvIzku4XlnKh0eXBlPVwidGV4dFwi5pe255Sf5pWI77yI6buY6K6kZG9uZe+8iVxyXG5cdCAqIEBwcm9wZXJ0eSB7TnVtYmVyIH1cdGNsZWFyU2l6ZVx05riF6Zmk5Zu+5qCH55qE5aSn5bCP77yM5Y2V5L2NcHjvvIjpu5jorqQxNe+8iVxyXG5cdCAqIEBwcm9wZXJ0eSB7U3RyaW5nfVx0cHJlZml4SWNvblx06L6T5YWl5qGG5aS06YOo5Zu+5qCHXHJcblx0ICogQHByb3BlcnR5IHtTdHJpbmd9XHRzdWZmaXhJY29uXHTovpPlhaXmoYblsL7pg6jlm77moIdcclxuXHQgKiBAcHJvcGVydHkge0Jvb2xlYW59XHR0cmltXHTmmK/lkKboh6rliqjljrvpmaTkuKTnq6/nmoTnqbrmoLxcclxuXHQgKiBAdmFsdWUgYm90aFx05Y676Zmk5Lik56uv56m65qC8XHJcblx0ICogQHZhbHVlIGxlZnRcdOWOu+mZpOW3puS+p+epuuagvFxyXG5cdCAqIEB2YWx1ZSByaWdodFx05Y676Zmk5Y+z5L6n56m65qC8XHJcblx0ICogQHZhbHVlIHN0YXJ0XHTljrvpmaTlt6bkvqfnqbrmoLxcclxuXHQgKiBAdmFsdWUgZW5kXHRcdOWOu+mZpOWPs+S+p+epuuagvFxyXG5cdCAqIEB2YWx1ZSBhbGxcdFx05Y676Zmk5YWo6YOo56m65qC8XHJcblx0ICogQHZhbHVlIG5vbmVcdOS4jeWOu+mZpOepuuagvFxyXG5cdCAqIEBwcm9wZXJ0eSB7Qm9vbGVhbn1cdGlucHV0Qm9yZGVyXHTmmK/lkKbmmL7npLppbnB1dOi+k+WFpeahhueahOi+ueahhu+8iOm7mOiupHRydWXvvIlcclxuXHQgKiBAcHJvcGVydHkge0Jvb2xlYW59XHRwYXNzd29yZEljb25cdHR5cGU9cGFzc3dvcmTml7bmmK/lkKbmmL7npLrlsI/nnLznnZvlm77moIdcclxuXHQgKiBAcHJvcGVydHkge09iamVjdH1cdHN0eWxlc1x06Ieq5a6a5LmJ6aKc6ImyXHJcblx0ICogQGV2ZW50IHtGdW5jdGlvbn1cdGlucHV0XHTovpPlhaXmoYblhoXlrrnlj5HnlJ/lj5jljJbml7bop6blj5FcclxuXHQgKiBAZXZlbnQge0Z1bmN0aW9ufVx0Zm9jdXNcdOi+k+WFpeahhuiOt+W+l+eEpueCueaXtuinpuWPkVxyXG5cdCAqIEBldmVudCB7RnVuY3Rpb259XHRibHVyXHTovpPlhaXmoYblpLHljrvnhKbngrnml7bop6blj5FcclxuXHQgKiBAZXZlbnQge0Z1bmN0aW9ufVx0Y29uZmlybVx054K55Ye75a6M5oiQ5oyJ6ZKu5pe26Kem5Y+RXHJcblx0ICogQGV2ZW50IHtGdW5jdGlvbn1cdGljb25DbGlja1x054K55Ye75Zu+5qCH5pe26Kem5Y+RXHJcblx0ICogQGV4YW1wbGUgPHVuaS1lYXN5aW5wdXQgdi1tb2RlbD1cIm1vYmlsZVwiPjwvdW5pLWVhc3lpbnB1dD5cclxuXHQgKi9cclxuXHJcblx0ZXhwb3J0IGRlZmF1bHQge1xyXG5cdFx0bmFtZTogJ3VuaS1lYXN5aW5wdXQnLFxyXG5cdFx0ZW1pdHM6WydjbGljaycsJ2ljb25DbGljaycsJ3VwZGF0ZTptb2RlbFZhbHVlJywnaW5wdXQnLCdmb2N1cycsJ2JsdXInLCdjb25maXJtJ10sXHJcblx0XHRtb2RlbDp7XHJcblx0XHRcdHByb3A6J21vZGVsVmFsdWUnLFxyXG5cdFx0XHRldmVudDondXBkYXRlOm1vZGVsVmFsdWUnXHJcblx0XHR9LFxyXG5cdFx0cHJvcHM6IHtcclxuXHRcdFx0bmFtZTogU3RyaW5nLFxyXG5cdFx0XHR2YWx1ZTogW051bWJlciwgU3RyaW5nXSxcclxuXHRcdFx0bW9kZWxWYWx1ZTogW051bWJlciwgU3RyaW5nXSxcclxuXHRcdFx0dHlwZToge1xyXG5cdFx0XHRcdHR5cGU6IFN0cmluZyxcclxuXHRcdFx0XHRkZWZhdWx0OiAndGV4dCdcclxuXHRcdFx0fSxcclxuXHRcdFx0Y2xlYXJhYmxlOiB7XHJcblx0XHRcdFx0dHlwZTogQm9vbGVhbixcclxuXHRcdFx0XHRkZWZhdWx0OiB0cnVlXHJcblx0XHRcdH0sXHJcblx0XHRcdGF1dG9IZWlnaHQ6IHtcclxuXHRcdFx0XHR0eXBlOiBCb29sZWFuLFxyXG5cdFx0XHRcdGRlZmF1bHQ6IGZhbHNlXHJcblx0XHRcdH0sXHJcblx0XHRcdHBsYWNlaG9sZGVyOiBTdHJpbmcsXHJcblx0XHRcdHBsYWNlaG9sZGVyU3R5bGU6IFN0cmluZyxcclxuXHRcdFx0Zm9jdXM6IHtcclxuXHRcdFx0XHR0eXBlOiBCb29sZWFuLFxyXG5cdFx0XHRcdGRlZmF1bHQ6IGZhbHNlXHJcblx0XHRcdH0sXHJcblx0XHRcdGRpc2FibGVkOiB7XHJcblx0XHRcdFx0dHlwZTogQm9vbGVhbixcclxuXHRcdFx0XHRkZWZhdWx0OiBmYWxzZVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRtYXhsZW5ndGg6IHtcclxuXHRcdFx0XHR0eXBlOiBbTnVtYmVyLCBTdHJpbmddLFxyXG5cdFx0XHRcdGRlZmF1bHQ6IDE0MFxyXG5cdFx0XHR9LFxyXG5cdFx0XHRjb25maXJtVHlwZToge1xyXG5cdFx0XHRcdHR5cGU6IFN0cmluZyxcclxuXHRcdFx0XHRkZWZhdWx0OiAnZG9uZSdcclxuXHRcdFx0fSxcclxuXHRcdFx0Y2xlYXJTaXplOiB7XHJcblx0XHRcdFx0dHlwZTogW051bWJlciwgU3RyaW5nXSxcclxuXHRcdFx0XHRkZWZhdWx0OiAxNVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRpbnB1dEJvcmRlcjoge1xyXG5cdFx0XHRcdHR5cGU6IEJvb2xlYW4sXHJcblx0XHRcdFx0ZGVmYXVsdDogdHJ1ZVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRwcmVmaXhJY29uOiB7XHJcblx0XHRcdFx0dHlwZTogU3RyaW5nLFxyXG5cdFx0XHRcdGRlZmF1bHQ6ICcnXHJcblx0XHRcdH0sXHJcblx0XHRcdHN1ZmZpeEljb246IHtcclxuXHRcdFx0XHR0eXBlOiBTdHJpbmcsXHJcblx0XHRcdFx0ZGVmYXVsdDogJydcclxuXHRcdFx0fSxcclxuXHRcdFx0dHJpbToge1xyXG5cdFx0XHRcdHR5cGU6IFtCb29sZWFuLCBTdHJpbmddLFxyXG5cdFx0XHRcdGRlZmF1bHQ6IHRydWVcclxuXHRcdFx0fSxcclxuXHRcdFx0cGFzc3dvcmRJY29uOntcclxuXHRcdFx0XHR0eXBlOiBCb29sZWFuLFxyXG5cdFx0XHRcdGRlZmF1bHQ6IHRydWVcclxuXHRcdFx0fSxcclxuXHRcdFx0c3R5bGVzOiB7XHJcblx0XHRcdFx0dHlwZTogT2JqZWN0LFxyXG5cdFx0XHRcdGRlZmF1bHQgKCkge1xyXG5cdFx0XHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHRcdFx0Y29sb3I6ICcjMzMzJyxcclxuXHRcdFx0XHRcdFx0ZGlzYWJsZUNvbG9yOiAnI2VlZScsXHJcblx0XHRcdFx0XHRcdGJvcmRlckNvbG9yOiAnI2U1ZTVlNSdcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblx0XHRcdGVycm9yTWVzc2FnZTp7XHJcblx0XHRcdFx0dHlwZTpbU3RyaW5nLEJvb2xlYW5dLFxyXG5cdFx0XHRcdGRlZmF1bHQ6JydcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdGRhdGEoKSB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Zm9jdXNlZDogZmFsc2UsXHJcblx0XHRcdFx0ZXJyTXNnOiAnJyxcclxuXHRcdFx0XHR2YWw6ICcnLFxyXG5cdFx0XHRcdHNob3dNc2c6ICcnLFxyXG5cdFx0XHRcdGJvcmRlcjogZmFsc2UsXHJcblx0XHRcdFx0aXNGaXJzdEJvcmRlcjogZmFsc2UsXHJcblx0XHRcdFx0c2hvd0NsZWFySWNvbjogZmFsc2UsXHJcblx0XHRcdFx0c2hvd1Bhc3N3b3JkOiBmYWxzZVxyXG5cdFx0XHR9O1xyXG5cdFx0fSxcclxuXHRcdGNvbXB1dGVkOiB7XHJcblx0XHRcdG1zZygpIHtcclxuXHRcdFx0XHRyZXR1cm4gdGhpcy5lcnJvck1lc3NhZ2UgfHwgdGhpcy5lcnJNc2c7XHJcblx0XHRcdH0sXHJcblx0XHRcdC8vIOWboOS4unVuaWFwcOeahGlucHV057uE5Lu255qEbWF4bGVuZ3Ro57uE5Lu25b+F6aG76KaB5pWw5YC877yM6L+Z6YeM6L2s5Li65pWw5YC877yM57uZ55So5oi35Y+v5Lul5Lyg5YWl5a2X56ym5Liy5pWw5YC8XHJcblx0XHRcdGlucHV0TWF4bGVuZ3RoKCkge1xyXG5cdFx0XHRcdHJldHVybiBOdW1iZXIodGhpcy5tYXhsZW5ndGgpO1xyXG5cdFx0XHR9LFxyXG5cdFx0fSxcclxuXHRcdHdhdGNoOiB7XHJcblx0XHRcdHZhbHVlKG5ld1ZhbCkge1xyXG5cdFx0XHRcdGlmICh0aGlzLmVyck1zZykgdGhpcy5lcnJNc2cgPSAnJ1xyXG5cdFx0XHRcdHRoaXMudmFsID0gbmV3VmFsXG5cdFx0XHRcdC8vIGZpeCBieSBtZWhhb3RpYW4gaXNfcmVzZXQg5ZyoIHVuaS1mb3JtcyDkuK3lrprkuYlcclxuXHRcdFx0XHRpZiAodGhpcy5mb3JtICYmIHRoaXMuZm9ybUl0ZW0gJiYhdGhpcy5pc19yZXNldCkge1xyXG5cdFx0XHRcdFx0dGhpcy5pc19yZXNldCA9IGZhbHNlXHJcblx0XHRcdFx0XHR0aGlzLmZvcm1JdGVtLnNldFZhbHVlKG5ld1ZhbClcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblx0XHRcdG1vZGVsVmFsdWUobmV3VmFsKSB7XHJcblx0XHRcdFx0aWYgKHRoaXMuZXJyTXNnKSB0aGlzLmVyck1zZyA9ICcnXHJcblx0XHRcdFx0dGhpcy52YWwgPSBuZXdWYWxcclxuXHRcdFx0XHRpZiAodGhpcy5mb3JtICYmIHRoaXMuZm9ybUl0ZW0gJiYhdGhpcy5pc19yZXNldCkge1xyXG5cdFx0XHRcdFx0dGhpcy5pc19yZXNldCA9IGZhbHNlXHJcblx0XHRcdFx0XHR0aGlzLmZvcm1JdGVtLnNldFZhbHVlKG5ld1ZhbClcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblx0XHRcdGZvY3VzKG5ld1ZhbCkge1xyXG5cdFx0XHRcdHRoaXMuJG5leHRUaWNrKCgpID0+IHtcclxuXHRcdFx0XHRcdHRoaXMuZm9jdXNlZCA9IHRoaXMuZm9jdXNcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0Y3JlYXRlZCgpIHtcclxuXHRcdFx0aWYoIXRoaXMudmFsdWUpe1xyXG5cdFx0XHRcdHRoaXMudmFsID0gdGhpcy5tb2RlbFZhbHVlXHJcblx0XHRcdH1cclxuXHRcdFx0aWYoIXRoaXMubW9kZWxWYWx1ZSl7XHJcblx0XHRcdFx0dGhpcy52YWwgPSB0aGlzLnZhbHVlXHJcblx0XHRcdH1cclxuXHRcdFx0dGhpcy5mb3JtID0gdGhpcy5nZXRGb3JtKCd1bmlGb3JtcycpXHJcblx0XHRcdHRoaXMuZm9ybUl0ZW0gPSB0aGlzLmdldEZvcm0oJ3VuaUZvcm1zSXRlbScpXHJcblx0XHRcdGlmICh0aGlzLmZvcm0gJiYgdGhpcy5mb3JtSXRlbSkge1xyXG5cdFx0XHRcdGlmICh0aGlzLmZvcm1JdGVtLm5hbWUpIHtcblx0XHRcdFx0XHRpZighdGhpcy5pc19yZXNldCl7XG5cdFx0XHRcdFx0XHR0aGlzLmlzX3Jlc2V0ID0gZmFsc2Vcblx0XHRcdFx0XHRcdHRoaXMuZm9ybUl0ZW0uc2V0VmFsdWUodGhpcy52YWwpXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0dGhpcy5yZW5hbWUgPSB0aGlzLmZvcm1JdGVtLm5hbWVcclxuXHRcdFx0XHRcdHRoaXMuZm9ybS5pbnB1dENoaWxkcmVucy5wdXNoKHRoaXMpXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0bW91bnRlZCgpIHtcclxuXHRcdFx0Ly8gdGhpcy5vbklucHV0ID0gdGhyb3R0bGUodGhpcy5pbnB1dCwgNTAwKVxyXG5cdFx0XHR0aGlzLiRuZXh0VGljaygoKSA9PiB7XHJcblx0XHRcdFx0Ly8gc2V0VGltZW91dCgoKT0+e1xyXG5cdFx0XHRcdC8vIH0sMTAwMClcclxuXHRcdFx0XHR0aGlzLmZvY3VzZWQgPSB0aGlzLmZvY3VzXHJcblx0XHRcdH0pXHJcblx0XHR9LFxyXG5cdFx0bWV0aG9kczoge1xyXG5cdFx0XHQvKipcclxuXHRcdFx0ICog5Yid5aeL5YyW5Y+Y6YeP5YC8XHJcblx0XHRcdCAqL1xyXG5cdFx0XHRpbml0KCkge1xyXG5cclxuXHRcdFx0fSxcclxuXHRcdFx0b25DbGlja0ljb24odHlwZSkge1xyXG5cdFx0XHRcdHRoaXMuJGVtaXQoJ2ljb25DbGljaycsIHR5cGUpXHJcblx0XHRcdH0sXHJcblx0XHRcdC8qKlxyXG5cdFx0XHQgKiDojrflj5bniLblhYPntKDlrp7kvotcclxuXHRcdFx0ICovXHJcblx0XHRcdGdldEZvcm0obmFtZSA9ICd1bmlGb3JtcycpIHtcclxuXHRcdFx0XHRsZXQgcGFyZW50ID0gdGhpcy4kcGFyZW50O1xyXG5cdFx0XHRcdGxldCBwYXJlbnROYW1lID0gcGFyZW50LiRvcHRpb25zLm5hbWU7XHJcblx0XHRcdFx0d2hpbGUgKHBhcmVudE5hbWUgIT09IG5hbWUpIHtcclxuXHRcdFx0XHRcdHBhcmVudCA9IHBhcmVudC4kcGFyZW50O1xyXG5cdFx0XHRcdFx0aWYgKCFwYXJlbnQpIHJldHVybiBmYWxzZTtcclxuXHRcdFx0XHRcdHBhcmVudE5hbWUgPSBwYXJlbnQuJG9wdGlvbnMubmFtZTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0cmV0dXJuIHBhcmVudDtcclxuXHRcdFx0fSxcclxuXHJcblx0XHRcdG9uRXllcygpIHtcclxuXHRcdFx0XHR0aGlzLnNob3dQYXNzd29yZCA9ICF0aGlzLnNob3dQYXNzd29yZFxyXG5cdFx0XHR9LFxyXG5cdFx0XHRvbklucHV0KGV2ZW50KSB7XHJcblx0XHRcdFx0bGV0IHZhbHVlID0gZXZlbnQuZGV0YWlsLnZhbHVlO1xyXG5cdFx0XHRcdC8vIOWIpOaWreaYr+WQpuWOu+mZpOepuuagvFxyXG5cdFx0XHRcdGlmICh0aGlzLnRyaW0pIHtcclxuXHRcdFx0XHRcdGlmICh0eXBlb2YodGhpcy50cmltKSA9PT0gJ2Jvb2xlYW4nICYmIHRoaXMudHJpbSkge1xyXG5cdFx0XHRcdFx0XHR2YWx1ZSA9IHRoaXMudHJpbVN0cih2YWx1ZSlcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGlmICh0eXBlb2YodGhpcy50cmltKSA9PT0gJ3N0cmluZycpIHtcclxuXHRcdFx0XHRcdFx0dmFsdWUgPSB0aGlzLnRyaW1TdHIodmFsdWUsIHRoaXMudHJpbSlcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9O1xyXG5cdFx0XHRcdGlmICh0aGlzLmVyck1zZykgdGhpcy5lcnJNc2cgPSAnJ1xyXG5cdFx0XHRcdHRoaXMudmFsID0gdmFsdWVcclxuXHRcdFx0XHQvLyBUT0RPIOWFvOWuuSB2dWUyXHJcblx0XHRcdFx0dGhpcy4kZW1pdCgnaW5wdXQnLCB2YWx1ZSk7XHJcblx0XHRcdFx0Ly8gVE9ET+OAgOWFvOWuueOAgHZ1ZTNcclxuXHRcdFx0XHR0aGlzLiRlbWl0KCd1cGRhdGU6bW9kZWxWYWx1ZScsdmFsdWUpXHJcblx0XHRcdH0sXHJcblxyXG5cdFx0XHRvbkZvY3VzKGV2ZW50KSB7XHJcblx0XHRcdFx0Ly8gdGhpcy5mb2N1c2VkID0gdHJ1ZTtcclxuXHRcdFx0XHR0aGlzLiRlbWl0KCdmb2N1cycsIGV2ZW50KTtcclxuXHRcdFx0fSxcclxuXHRcdFx0b25CbHVyKGV2ZW50KSB7XHJcblx0XHRcdFx0bGV0IHZhbHVlID0gZXZlbnQuZGV0YWlsLnZhbHVlO1xyXG5cdFx0XHRcdC8vIHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0XHRcdC8vIHRoaXMuZm9jdXNlZCA9IGZhbHNlO1xyXG5cdFx0XHRcdC8vIH0sIDEwMCk7XHJcblx0XHRcdFx0dGhpcy4kZW1pdCgnYmx1cicsIGV2ZW50KTtcclxuXHRcdFx0fSxcclxuXHRcdFx0b25Db25maXJtKGUpIHtcclxuXHRcdFx0XHR0aGlzLiRlbWl0KCdjb25maXJtJywgZS5kZXRhaWwudmFsdWUpO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRvbkNsZWFyKGV2ZW50KSB7XHJcblx0XHRcdFx0dGhpcy52YWwgPSAnJztcclxuXHRcdFx0XHQvLyBUT0RPIOWFvOWuuSB2dWUyXHJcblx0XHRcdFx0dGhpcy4kZW1pdCgnaW5wdXQnLCAnJyk7XHJcblx0XHRcdFx0Ly8gVE9ETyDlhbzlrrkgdnVlMlxyXG5cdFx0XHRcdC8vIFRPRE/jgIDlhbzlrrnjgIB2dWUzXHJcblx0XHRcdFx0dGhpcy4kZW1pdCgndXBkYXRlOm1vZGVsVmFsdWUnLCcnKVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRmaWVsZENsaWNrKCkge1xyXG5cdFx0XHRcdHRoaXMuJGVtaXQoJ2NsaWNrJyk7XHJcblx0XHRcdH0sXHJcblx0XHRcdHRyaW1TdHIoc3RyLCBwb3MgPSAnYm90aCcpIHtcclxuXHRcdFx0XHRpZiAocG9zID09PSAnYm90aCcpIHtcclxuXHRcdFx0XHRcdHJldHVybiBzdHIudHJpbSgpO1xyXG5cdFx0XHRcdH0gZWxzZSBpZiAocG9zID09PSAnbGVmdCcpIHtcclxuXHRcdFx0XHRcdHJldHVybiBzdHIudHJpbUxlZnQoKTtcclxuXHRcdFx0XHR9IGVsc2UgaWYgKHBvcyA9PT0gJ3JpZ2h0Jykge1xyXG5cdFx0XHRcdFx0cmV0dXJuIHN0ci50cmltUmlnaHQoKTtcclxuXHRcdFx0XHR9IGVsc2UgaWYgKHBvcyA9PT0gJ3N0YXJ0Jykge1xyXG5cdFx0XHRcdFx0cmV0dXJuIHN0ci50cmltU3RhcnQoKVxyXG5cdFx0XHRcdH0gZWxzZSBpZiAocG9zID09PSAnZW5kJykge1xyXG5cdFx0XHRcdFx0cmV0dXJuIHN0ci50cmltRW5kKClcclxuXHRcdFx0XHR9IGVsc2UgaWYgKHBvcyA9PT0gJ2FsbCcpIHtcclxuXHRcdFx0XHRcdHJldHVybiBzdHIucmVwbGFjZSgvXFxzKy9nLCAnJyk7XHJcblx0XHRcdFx0fSBlbHNlIGlmIChwb3MgPT09ICdub25lJykge1xyXG5cdFx0XHRcdFx0cmV0dXJuIHN0cjtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0cmV0dXJuIHN0cjtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH07XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIGxhbmc9XCJzY3NzXCIgc2NvcGVkPlxyXG5cdC51bmktZWFzeWlucHV0IHtcclxuXHRcdC8qICNpZm5kZWYgQVBQLU5WVUUgKi9cclxuXHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0LyogI2VuZGlmICovXHJcblx0XHRmbGV4OiAxO1xyXG5cdFx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdFx0dGV4dC1hbGlnbjogbGVmdDtcclxuXHRcdGNvbG9yOiAjMzMzO1xyXG5cdFx0Zm9udC1zaXplOiAxNHB4O1xuXHR9XHJcblxyXG5cdC51bmktZWFzeWlucHV0X19jb250ZW50IHtcclxuXHRcdGZsZXg6IDE7XHJcblx0XHQvKiAjaWZuZGVmIEFQUC1OVlVFICovXHJcblx0XHR3aWR0aDogMTAwJTtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xuXHRcdG1pbi1oZWlnaHQ6IDM2cHg7XHJcblx0XHQvKiAjZW5kaWYgKi9cblx0XHRmbGV4LWRpcmVjdGlvbjogcm93O1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0fVxyXG5cclxuXHQudW5pLWVhc3lpbnB1dF9fY29udGVudC1pbnB1dCB7XHJcblx0XHQvKiAjaWZuZGVmIEFQUC1OVlVFICovXHJcblx0XHR3aWR0aDogYXV0bztcclxuXHRcdC8qICNlbmRpZiAqL1xyXG5cdFx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdFx0b3ZlcmZsb3c6IGhpZGRlbjtcclxuXHRcdGZsZXg6IDE7XHJcblx0XHRsaW5lLWhlaWdodDogMTtcclxuXHRcdGZvbnQtc2l6ZTogMTRweDtcclxuXHR9XHJcblxyXG5cdC5pcy10ZXh0YXJlYSB7XHJcblx0XHRhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuXHR9XHJcblxyXG5cdC5pcy10ZXh0YXJlYS1pY29uIHtcclxuXHRcdG1hcmdpbi10b3A6IDVweDtcclxuXHR9XHJcblxyXG5cdC51bmktZWFzeWlucHV0X19jb250ZW50LXRleHRhcmVhIHtcclxuXHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRcdG92ZXJmbG93OiBoaWRkZW47XHJcblx0XHRmbGV4OiAxO1xyXG5cdFx0bGluZS1oZWlnaHQ6IDEuNTtcclxuXHRcdGZvbnQtc2l6ZTogMTRweDtcclxuXHRcdHBhZGRpbmctdG9wOiA2cHg7XHJcblx0XHRwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuXHRcdGhlaWdodDogODBweDtcclxuXHRcdC8qICNpZm5kZWYgQVBQLU5WVUUgKi9cclxuXHRcdG1pbi1oZWlnaHQ6IDgwcHg7XHJcblx0XHR3aWR0aDogYXV0bztcclxuXHRcdC8qICNlbmRpZiAqL1xyXG5cdH1cclxuXHJcblx0LmlucHV0LXBhZGRpbmcge1xyXG5cdFx0cGFkZGluZy1sZWZ0OiAxMHB4O1xyXG5cdH1cclxuXHJcblx0LmNvbnRlbnQtY2xlYXItaWNvbiB7XHJcblx0XHRwYWRkaW5nOiAwIDVweDtcclxuXHR9XHJcblxyXG5cdC5sYWJlbC1pY29uIHtcclxuXHRcdG1hcmdpbi1yaWdodDogNXB4O1xyXG5cdFx0bWFyZ2luLXRvcDogLTFweDtcclxuXHR9XHJcblxyXG5cdC8vIOaYvuekuui+ueahhlxyXG5cdC5pcy1pbnB1dC1ib3JkZXIge1xyXG5cdFx0LyogI2lmbmRlZiBBUFAtTlZVRSAqL1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcblx0XHQvKiAjZW5kaWYgKi9cclxuXHRcdGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0Ym9yZGVyOiAxcHggc29saWQgJHVuaS1ib3JkZXItY29sb3I7XHJcblx0XHRib3JkZXItcmFkaXVzOiA0cHg7XHJcblx0fVxyXG5cclxuXHQudW5pLWVhc3lpbnB1dF9fcmlnaHQge1xyXG5cdFx0Ly8gbWFyZ2luLWxlZnQ6IDVweDtcclxuXHR9XHJcblxyXG5cdC8vIOW/heWhq1xyXG5cdC5pcy1yZXF1aXJlZCB7XHJcblx0XHRjb2xvcjogJHVuaS1jb2xvci1lcnJvcjtcclxuXHR9XHJcblxyXG5cdC51bmktZXJyb3ItbWVzc2FnZSB7XHJcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHRib3R0b206IC0xN3B4O1xyXG5cdFx0bGVmdDogMDtcclxuXHRcdGxpbmUtaGVpZ2h0OiAxMnB4O1xyXG5cdFx0Y29sb3I6ICR1bmktY29sb3ItZXJyb3I7XHJcblx0XHRmb250LXNpemU6IDEycHg7XHJcblx0XHR0ZXh0LWFsaWduOiBsZWZ0O1xyXG5cdH1cclxuXHJcblx0LnVuaS1lcnJvci1tc2ctLWJvZWRlciB7XHJcblx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0XHRib3R0b206IDA7XHJcblx0XHRsaW5lLWhlaWdodDogMjJweDtcclxuXHR9XHJcblxyXG5cdC5pcy1pbnB1dC1lcnJvci1ib3JkZXIge1xyXG5cdFx0Ym9yZGVyLWNvbG9yOiAkdW5pLWNvbG9yLWVycm9yO1xyXG5cdH1cclxuXHJcblx0LnVuaS1lYXN5aW5wdXQtLWJvcmRlciB7XHJcblx0XHRtYXJnaW4tYm90dG9tOiAwO1xyXG5cdFx0cGFkZGluZzogMTBweCAxNXB4O1xyXG5cdFx0Ly8gcGFkZGluZy1ib3R0b206IDA7XHJcblx0XHRib3JkZXItdG9wOiAxcHggI2VlZSBzb2xpZDtcclxuXHR9XHJcblxyXG5cdC51bmktZWFzeWlucHV0LWVycm9yIHtcclxuXHRcdHBhZGRpbmctYm90dG9tOiAwO1xyXG5cdH1cclxuXHJcblx0LmlzLWZpcnN0LWJvcmRlciB7XHJcblx0XHQvKiAjaWZuZGVmIEFQUC1OVlVFICovXHJcblx0XHRib3JkZXI6IG5vbmU7XHJcblx0XHQvKiAjZW5kaWYgKi9cclxuXHRcdC8qICNpZmRlZiBBUFAtTlZVRSAqL1xyXG5cdFx0Ym9yZGVyLXdpZHRoOiAwO1xyXG5cdFx0LyogI2VuZGlmICovXHJcblx0fVxyXG5cclxuXHQuaXMtZGlzYWJsZWQge1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI2VlZTtcclxuXHR9XHJcbjwvc3R5bGU+XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///22\n");

/***/ }),

/***/ 221:
/*!****************************************************************************************************************!*\
  !*** /Users/tongjie/Desktop/QNRTC-Uniapp/demo/js_sdk/QNRTC-UniPlugin-JS/QNRTC-UniPlugin-JS/RTCIndex.native.js ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {\n  if (k2 === undefined) k2 = k;\n  var desc = Object.getOwnPropertyDescriptor(m, k);\n  if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n    desc = {\n      enumerable: true,\n      get: function get() {\n        return m[k];\n      }\n    };\n  }\n  Object.defineProperty(o, k2, desc);\n} : function (o, m, k, k2) {\n  if (k2 === undefined) k2 = k;\n  o[k2] = m[k];\n});\nvar __exportStar = this && this.__exportStar || function (m, exports) {\n  for (var p in m) {\n    if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n  }\n};\nexports.__esModule = true;\n__exportStar(__webpack_require__(/*! ./class/RTCEngine */ 222), exports);\n__exportStar(__webpack_require__(/*! ./enum/RTCEnum */ 224), exports);\n__exportStar(__webpack_require__(/*! ./interface/RTCInterface */ 233), exports);\n__exportStar(__webpack_require__(/*! ./event/RTCEvent */ 241), exports);\n__exportStar(__webpack_require__(/*! ./class/RTCClient */ 225), exports);\n__exportStar(__webpack_require__(/*! ./class/RTCCameraVideoTrack */ 231), exports);\n__exportStar(__webpack_require__(/*! ./class/RTCLocalAudioTrack */ 235), exports);\n__exportStar(__webpack_require__(/*! ./class/RTCLocalTrack */ 230), exports);\n__exportStar(__webpack_require__(/*! ./class/RTCLocalVideoTrack */ 232), exports);\n__exportStar(__webpack_require__(/*! ./class/RTCMicrophoneAudioTrack */ 234), exports);\n__exportStar(__webpack_require__(/*! ./class/RTCRemoteAudioTrack */ 229), exports);\n__exportStar(__webpack_require__(/*! ./class/RTCRemoteTrack */ 227), exports);\n__exportStar(__webpack_require__(/*! ./class/RTCRemoteVideoTrack */ 226), exports);\n__exportStar(__webpack_require__(/*! ./class/RTCScreenVideoTrack */ 240), exports);\n__exportStar(__webpack_require__(/*! ./class/RTCTrack */ 228), exports);\n__exportStar(__webpack_require__(/*! ./class/RTCAudioMixer */ 236), exports);\n__exportStar(__webpack_require__(/*! ./preset/RTCPreset */ 223), exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vanNfc2RrL1FOUlRDLVVuaVBsdWdpbi1KUy9RTlJUQy1VbmlQbHVnaW4tSlMvUlRDSW5kZXgubmF0aXZlLmpzIl0sIm5hbWVzIjpbIl9fY3JlYXRlQmluZGluZyIsIk9iamVjdCIsImNyZWF0ZSIsIm8iLCJtIiwiayIsImsyIiwidW5kZWZpbmVkIiwiZGVzYyIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsIl9fZXNNb2R1bGUiLCJ3cml0YWJsZSIsImNvbmZpZ3VyYWJsZSIsImVudW1lcmFibGUiLCJnZXQiLCJkZWZpbmVQcm9wZXJ0eSIsIl9fZXhwb3J0U3RhciIsImV4cG9ydHMiLCJwIiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwicmVxdWlyZSJdLCJtYXBwaW5ncyI6IkFBQWE7O0FBQ2IsSUFBSUEsZUFBZSxHQUFJLElBQUksSUFBSSxJQUFJLENBQUNBLGVBQWUsS0FBTUMsTUFBTSxDQUFDQyxNQUFNLEdBQUksVUFBU0MsQ0FBQyxFQUFFQyxDQUFDLEVBQUVDLENBQUMsRUFBRUMsRUFBRSxFQUFFO0VBQzVGLElBQUlBLEVBQUUsS0FBS0MsU0FBUyxFQUFFRCxFQUFFLEdBQUdELENBQUM7RUFDNUIsSUFBSUcsSUFBSSxHQUFHUCxNQUFNLENBQUNRLHdCQUF3QixDQUFDTCxDQUFDLEVBQUVDLENBQUMsQ0FBQztFQUNoRCxJQUFJLENBQUNHLElBQUksS0FBSyxLQUFLLElBQUlBLElBQUksR0FBRyxDQUFDSixDQUFDLENBQUNNLFVBQVUsR0FBR0YsSUFBSSxDQUFDRyxRQUFRLElBQUlILElBQUksQ0FBQ0ksWUFBWSxDQUFDLEVBQUU7SUFDakZKLElBQUksR0FBRztNQUFFSyxVQUFVLEVBQUUsSUFBSTtNQUFFQyxHQUFHLEVBQUUsZUFBVztRQUFFLE9BQU9WLENBQUMsQ0FBQ0MsQ0FBQyxDQUFDO01BQUU7SUFBRSxDQUFDO0VBQy9EO0VBQ0FKLE1BQU0sQ0FBQ2MsY0FBYyxDQUFDWixDQUFDLEVBQUVHLEVBQUUsRUFBRUUsSUFBSSxDQUFDO0FBQ3RDLENBQUMsR0FBSyxVQUFTTCxDQUFDLEVBQUVDLENBQUMsRUFBRUMsQ0FBQyxFQUFFQyxFQUFFLEVBQUU7RUFDeEIsSUFBSUEsRUFBRSxLQUFLQyxTQUFTLEVBQUVELEVBQUUsR0FBR0QsQ0FBQztFQUM1QkYsQ0FBQyxDQUFDRyxFQUFFLENBQUMsR0FBR0YsQ0FBQyxDQUFDQyxDQUFDLENBQUM7QUFDaEIsQ0FBRSxDQUFDO0FBQ0gsSUFBSVcsWUFBWSxHQUFJLElBQUksSUFBSSxJQUFJLENBQUNBLFlBQVksSUFBSyxVQUFTWixDQUFDLEVBQUVhLE9BQU8sRUFBRTtFQUNuRSxLQUFLLElBQUlDLENBQUMsSUFBSWQsQ0FBQztJQUFFLElBQUljLENBQUMsS0FBSyxTQUFTLElBQUksQ0FBQ2pCLE1BQU0sQ0FBQ2tCLFNBQVMsQ0FBQ0MsY0FBYyxDQUFDQyxJQUFJLENBQUNKLE9BQU8sRUFBRUMsQ0FBQyxDQUFDLEVBQUVsQixlQUFlLENBQUNpQixPQUFPLEVBQUViLENBQUMsRUFBRWMsQ0FBQyxDQUFDO0VBQUM7QUFDOUgsQ0FBQztBQUNERCxPQUFPLENBQUNQLFVBQVUsR0FBRyxJQUFJO0FBQ3pCTSxZQUFZLENBQUNNLG1CQUFPLENBQUMsNEJBQW1CLENBQUMsRUFBRUwsT0FBTyxDQUFDO0FBQ25ERCxZQUFZLENBQUNNLG1CQUFPLENBQUMseUJBQWdCLENBQUMsRUFBRUwsT0FBTyxDQUFDO0FBQ2hERCxZQUFZLENBQUNNLG1CQUFPLENBQUMsbUNBQTBCLENBQUMsRUFBRUwsT0FBTyxDQUFDO0FBQzFERCxZQUFZLENBQUNNLG1CQUFPLENBQUMsMkJBQWtCLENBQUMsRUFBRUwsT0FBTyxDQUFDO0FBQ2xERCxZQUFZLENBQUNNLG1CQUFPLENBQUMsNEJBQW1CLENBQUMsRUFBRUwsT0FBTyxDQUFDO0FBQ25ERCxZQUFZLENBQUNNLG1CQUFPLENBQUMsc0NBQTZCLENBQUMsRUFBRUwsT0FBTyxDQUFDO0FBQzdERCxZQUFZLENBQUNNLG1CQUFPLENBQUMscUNBQTRCLENBQUMsRUFBRUwsT0FBTyxDQUFDO0FBQzVERCxZQUFZLENBQUNNLG1CQUFPLENBQUMsZ0NBQXVCLENBQUMsRUFBRUwsT0FBTyxDQUFDO0FBQ3ZERCxZQUFZLENBQUNNLG1CQUFPLENBQUMscUNBQTRCLENBQUMsRUFBRUwsT0FBTyxDQUFDO0FBQzVERCxZQUFZLENBQUNNLG1CQUFPLENBQUMsMENBQWlDLENBQUMsRUFBRUwsT0FBTyxDQUFDO0FBQ2pFRCxZQUFZLENBQUNNLG1CQUFPLENBQUMsc0NBQTZCLENBQUMsRUFBRUwsT0FBTyxDQUFDO0FBQzdERCxZQUFZLENBQUNNLG1CQUFPLENBQUMsaUNBQXdCLENBQUMsRUFBRUwsT0FBTyxDQUFDO0FBQ3hERCxZQUFZLENBQUNNLG1CQUFPLENBQUMsc0NBQTZCLENBQUMsRUFBRUwsT0FBTyxDQUFDO0FBQzdERCxZQUFZLENBQUNNLG1CQUFPLENBQUMsc0NBQTZCLENBQUMsRUFBRUwsT0FBTyxDQUFDO0FBQzdERCxZQUFZLENBQUNNLG1CQUFPLENBQUMsMkJBQWtCLENBQUMsRUFBRUwsT0FBTyxDQUFDO0FBQ2xERCxZQUFZLENBQUNNLG1CQUFPLENBQUMsZ0NBQXVCLENBQUMsRUFBRUwsT0FBTyxDQUFDO0FBQ3ZERCxZQUFZLENBQUNNLG1CQUFPLENBQUMsNkJBQW9CLENBQUMsRUFBRUwsT0FBTyxDQUFDIiwiZmlsZSI6IjIyMS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xudmFyIF9fY3JlYXRlQmluZGluZyA9ICh0aGlzICYmIHRoaXMuX19jcmVhdGVCaW5kaW5nKSB8fCAoT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XG4gICAgdmFyIGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG0sIGspO1xuICAgIGlmICghZGVzYyB8fCAoXCJnZXRcIiBpbiBkZXNjID8gIW0uX19lc01vZHVsZSA6IGRlc2Mud3JpdGFibGUgfHwgZGVzYy5jb25maWd1cmFibGUpKSB7XG4gICAgICBkZXNjID0geyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uKCkgeyByZXR1cm4gbVtrXTsgfSB9O1xuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgazIsIGRlc2MpO1xufSkgOiAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xuICAgIG9bazJdID0gbVtrXTtcbn0pKTtcbnZhciBfX2V4cG9ydFN0YXIgPSAodGhpcyAmJiB0aGlzLl9fZXhwb3J0U3RhcikgfHwgZnVuY3Rpb24obSwgZXhwb3J0cykge1xuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKHAgIT09IFwiZGVmYXVsdFwiICYmICFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoZXhwb3J0cywgcCkpIF9fY3JlYXRlQmluZGluZyhleHBvcnRzLCBtLCBwKTtcbn07XG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuX19leHBvcnRTdGFyKHJlcXVpcmUoXCIuL2NsYXNzL1JUQ0VuZ2luZVwiKSwgZXhwb3J0cyk7XG5fX2V4cG9ydFN0YXIocmVxdWlyZShcIi4vZW51bS9SVENFbnVtXCIpLCBleHBvcnRzKTtcbl9fZXhwb3J0U3RhcihyZXF1aXJlKFwiLi9pbnRlcmZhY2UvUlRDSW50ZXJmYWNlXCIpLCBleHBvcnRzKTtcbl9fZXhwb3J0U3RhcihyZXF1aXJlKFwiLi9ldmVudC9SVENFdmVudFwiKSwgZXhwb3J0cyk7XG5fX2V4cG9ydFN0YXIocmVxdWlyZShcIi4vY2xhc3MvUlRDQ2xpZW50XCIpLCBleHBvcnRzKTtcbl9fZXhwb3J0U3RhcihyZXF1aXJlKFwiLi9jbGFzcy9SVENDYW1lcmFWaWRlb1RyYWNrXCIpLCBleHBvcnRzKTtcbl9fZXhwb3J0U3RhcihyZXF1aXJlKFwiLi9jbGFzcy9SVENMb2NhbEF1ZGlvVHJhY2tcIiksIGV4cG9ydHMpO1xuX19leHBvcnRTdGFyKHJlcXVpcmUoXCIuL2NsYXNzL1JUQ0xvY2FsVHJhY2tcIiksIGV4cG9ydHMpO1xuX19leHBvcnRTdGFyKHJlcXVpcmUoXCIuL2NsYXNzL1JUQ0xvY2FsVmlkZW9UcmFja1wiKSwgZXhwb3J0cyk7XG5fX2V4cG9ydFN0YXIocmVxdWlyZShcIi4vY2xhc3MvUlRDTWljcm9waG9uZUF1ZGlvVHJhY2tcIiksIGV4cG9ydHMpO1xuX19leHBvcnRTdGFyKHJlcXVpcmUoXCIuL2NsYXNzL1JUQ1JlbW90ZUF1ZGlvVHJhY2tcIiksIGV4cG9ydHMpO1xuX19leHBvcnRTdGFyKHJlcXVpcmUoXCIuL2NsYXNzL1JUQ1JlbW90ZVRyYWNrXCIpLCBleHBvcnRzKTtcbl9fZXhwb3J0U3RhcihyZXF1aXJlKFwiLi9jbGFzcy9SVENSZW1vdGVWaWRlb1RyYWNrXCIpLCBleHBvcnRzKTtcbl9fZXhwb3J0U3RhcihyZXF1aXJlKFwiLi9jbGFzcy9SVENTY3JlZW5WaWRlb1RyYWNrXCIpLCBleHBvcnRzKTtcbl9fZXhwb3J0U3RhcihyZXF1aXJlKFwiLi9jbGFzcy9SVENUcmFja1wiKSwgZXhwb3J0cyk7XG5fX2V4cG9ydFN0YXIocmVxdWlyZShcIi4vY2xhc3MvUlRDQXVkaW9NaXhlclwiKSwgZXhwb3J0cyk7XG5fX2V4cG9ydFN0YXIocmVxdWlyZShcIi4vcHJlc2V0L1JUQ1ByZXNldFwiKSwgZXhwb3J0cyk7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///221\n");

/***/ }),

/***/ 222:
/*!****************************************************************************************************************!*\
  !*** /Users/tongjie/Desktop/QNRTC-Uniapp/demo/js_sdk/QNRTC-UniPlugin-JS/QNRTC-UniPlugin-JS/class/RTCEngine.js ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__webpack_provided_uni_dot_requireNativePlugin, __f__) {\n\nvar __assign = this && this.__assign || function () {\n  __assign = Object.assign || function (t) {\n    for (var s, i = 1, n = arguments.length; i < n; i++) {\n      s = arguments[i];\n      for (var p in s) {\n        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];\n      }\n    }\n    return t;\n  };\n  return __assign.apply(this, arguments);\n};\nexports.__esModule = true;\nexports.QNRTC = void 0;\nvar RTCPreset_1 = __webpack_require__(/*! ../preset/RTCPreset */ 223);\nvar RTCClient_1 = __webpack_require__(/*! ./RTCClient */ 225);\nvar RTCCameraVideoTrack_1 = __webpack_require__(/*! ./RTCCameraVideoTrack */ 231);\nvar RTCMicrophoneAudioTrack_1 = __webpack_require__(/*! ./RTCMicrophoneAudioTrack */ 234);\nvar RTCScreenVideoTrack_1 = __webpack_require__(/*! ./RTCScreenVideoTrack */ 240);\nvar QNRtcEngine = __webpack_provided_uni_dot_requireNativePlugin('QNRTC-UniPlugin-QNRtcEngine');\nvar QNEvent = __webpack_provided_uni_dot_requireNativePlugin('globalEvent');\nvar QNRtcTrack = __webpack_provided_uni_dot_requireNativePlugin('QNRTC-UniPlugin-QNRtcTrack');\nvar QNRTCClientPlugin = __webpack_provided_uni_dot_requireNativePlugin('QNRTC-UniPlugin-QNRtcClient');\nvar QNRtcAudioMixer = __webpack_provided_uni_dot_requireNativePlugin('QNRTC-UniPlugin-QNRtcAudioMixer');\nvar QNRtcAudioMusicMixer = __webpack_provided_uni_dot_requireNativePlugin('QNRTC-UniPlugin-QNRtcAudioMusicMixer');\nvar QNRtcAudioEffectMixer = __webpack_provided_uni_dot_requireNativePlugin('QNRTC-UniPlugin-QNRtcAudioMusicMixer');\nvar QNRTC = function () {\n  function QNRTC() {}\n  QNRTC.on = function (name, listener) {\n    QNEvent.addEventListener(name, listener);\n  };\n  QNRTC.off = function (name, listener) {\n    QNEvent.removeEventListener(name, listener);\n  };\n  QNRTC.requestPermission = function (callback) {\n    return QNRtcTrack.requestPermission(callback);\n  };\n  QNRTC.isScreenCaptureSupported = function () {\n    return QNRtcTrack.isScreenCaptureSupported();\n  };\n  QNRTC.init = function (config) {\n    var _config = __assign(__assign({}, RTCPreset_1.QNRTCConfigurationPreset), config);\n    try {\n      QNRtcEngine.initDelegate();\n    } catch (e) {}\n    QNRtcTrack.initDelegate();\n    QNRTCClientPlugin.initDelegate();\n    QNRtcAudioMixer.initDelegate();\n    QNRtcAudioMusicMixer.initDelegate();\n    QNRtcAudioEffectMixer.initDelegate();\n    return QNRtcEngine.configRTC(_config);\n  };\n  QNRTC.configRTC = function (config) {\n    __f__(\"log\", \"啊啊啊啊啊啊啊啊啊啊啊是\", \" at js_sdk/QNRTC-UniPlugin-JS/QNRTC-UniPlugin-JS/class/RTCEngine.js:56\");\n    var _config = __assign(__assign({}, RTCPreset_1.QNRTCConfigurationPreset), config);\n    try {\n      QNRtcEngine.initDelegate();\n    } catch (e) {}\n    QNRtcTrack.initDelegate();\n    QNRTCClientPlugin.initDelegate();\n    return QNRtcEngine.configRTC(_config);\n  };\n  QNRTC.deinit = function () {\n    return QNRtcEngine.deinit();\n  };\n  QNRTC.createClient = function (config) {\n    var _config = __assign(__assign({}, RTCPreset_1.QNClientConfigPreset), config);\n    QNRtcEngine.createClient(_config);\n    return new RTCClient_1.QNRTCClient();\n  };\n  QNRTC.createMicrophoneAudioTrack = function (config) {\n    var _config = __assign(__assign({}, RTCPreset_1.QNMicrophoneAudioTrackConfigPreset), config);\n    var result = QNRtcEngine.createMicrophoneAudioTrack(_config);\n    return new RTCMicrophoneAudioTrack_1.QNMicrophoneAudioTrack(__assign({\n      trackID: '',\n      raw: result,\n      userID: ''\n    }, result));\n  };\n  QNRTC.createCameraVideoTrack = function (config) {\n    var _config = __assign(__assign({}, RTCPreset_1.QNCameraVideoTrackConfigPreset), config);\n    var result = QNRtcEngine.createCameraVideoTrack(_config);\n    return new RTCCameraVideoTrack_1.QNCameraVideoTrack(__assign({\n      trackID: '',\n      raw: result,\n      userID: ''\n    }, result));\n  };\n  QNRTC.createScreenVideoTrack = function (config) {\n    var _config = __assign(__assign({}, RTCPreset_1.QNScreenVideoTrackConfigPreset), config);\n    var result = QNRtcEngine.createScreenVideoTrack(_config);\n    return new RTCScreenVideoTrack_1.QNScreenVideoTrack(__assign({\n      trackID: '',\n      raw: result,\n      userID: ''\n    }, result));\n  };\n  QNRTC.setAudioScene = function (audioScene) {\n    return QNRtcEngine.setAudioScene(audioScene);\n  };\n  QNRTC.setAudioRouteToSpeakerphone = function (audioRouteToSpeakerphone) {\n    return QNRtcEngine.setAudioRouteToSpeakerphone(audioRouteToSpeakerphone);\n  };\n  QNRTC.setSpeakerphoneMuted = function (muted) {\n    return QNRtcEngine.setSpeakerphoneMuted(muted);\n  };\n  QNRTC.enableFileLogging = function () {\n    return QNRtcEngine.enableFileLogging();\n  };\n  QNRTC.setLogConfig = function () {};\n  QNRTC.uploadLog = function () {};\n  return QNRTC;\n}();\nexports.QNRTC = QNRTC;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/uni-app-plus-nvue/dist/require-native-plugin.js */ 54)[\"default\"], __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 93)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vanNfc2RrL1FOUlRDLVVuaVBsdWdpbi1KUy9RTlJUQy1VbmlQbHVnaW4tSlMvY2xhc3MvUlRDRW5naW5lLmpzIl0sIm5hbWVzIjpbIl9fYXNzaWduIiwiT2JqZWN0IiwiYXNzaWduIiwidCIsInMiLCJpIiwibiIsImFyZ3VtZW50cyIsImxlbmd0aCIsInAiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJhcHBseSIsImV4cG9ydHMiLCJfX2VzTW9kdWxlIiwiUU5SVEMiLCJSVENQcmVzZXRfMSIsInJlcXVpcmUiLCJSVENDbGllbnRfMSIsIlJUQ0NhbWVyYVZpZGVvVHJhY2tfMSIsIlJUQ01pY3JvcGhvbmVBdWRpb1RyYWNrXzEiLCJSVENTY3JlZW5WaWRlb1RyYWNrXzEiLCJRTlJ0Y0VuZ2luZSIsInVuaSIsIlFORXZlbnQiLCJRTlJ0Y1RyYWNrIiwiUU5SVENDbGllbnRQbHVnaW4iLCJRTlJ0Y0F1ZGlvTWl4ZXIiLCJRTlJ0Y0F1ZGlvTXVzaWNNaXhlciIsIlFOUnRjQXVkaW9FZmZlY3RNaXhlciIsIm9uIiwibmFtZSIsImxpc3RlbmVyIiwiYWRkRXZlbnRMaXN0ZW5lciIsIm9mZiIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJyZXF1ZXN0UGVybWlzc2lvbiIsImNhbGxiYWNrIiwiaXNTY3JlZW5DYXB0dXJlU3VwcG9ydGVkIiwiaW5pdCIsImNvbmZpZyIsIl9jb25maWciLCJRTlJUQ0NvbmZpZ3VyYXRpb25QcmVzZXQiLCJpbml0RGVsZWdhdGUiLCJlIiwiY29uZmlnUlRDIiwiZGVpbml0IiwiY3JlYXRlQ2xpZW50IiwiUU5DbGllbnRDb25maWdQcmVzZXQiLCJRTlJUQ0NsaWVudCIsImNyZWF0ZU1pY3JvcGhvbmVBdWRpb1RyYWNrIiwiUU5NaWNyb3Bob25lQXVkaW9UcmFja0NvbmZpZ1ByZXNldCIsInJlc3VsdCIsIlFOTWljcm9waG9uZUF1ZGlvVHJhY2siLCJ0cmFja0lEIiwicmF3IiwidXNlcklEIiwiY3JlYXRlQ2FtZXJhVmlkZW9UcmFjayIsIlFOQ2FtZXJhVmlkZW9UcmFja0NvbmZpZ1ByZXNldCIsIlFOQ2FtZXJhVmlkZW9UcmFjayIsImNyZWF0ZVNjcmVlblZpZGVvVHJhY2siLCJRTlNjcmVlblZpZGVvVHJhY2tDb25maWdQcmVzZXQiLCJRTlNjcmVlblZpZGVvVHJhY2siLCJzZXRBdWRpb1NjZW5lIiwiYXVkaW9TY2VuZSIsInNldEF1ZGlvUm91dGVUb1NwZWFrZXJwaG9uZSIsImF1ZGlvUm91dGVUb1NwZWFrZXJwaG9uZSIsInNldFNwZWFrZXJwaG9uZU11dGVkIiwibXV0ZWQiLCJlbmFibGVGaWxlTG9nZ2luZyIsInNldExvZ0NvbmZpZyIsInVwbG9hZExvZyJdLCJtYXBwaW5ncyI6IkFBQUEsNkZBQWE7O0FBQ2IsSUFBSUEsUUFBUSxHQUFJLElBQUksSUFBSSxJQUFJLENBQUNBLFFBQVEsSUFBSyxZQUFZO0VBQ2xEQSxRQUFRLEdBQUdDLE1BQU0sQ0FBQ0MsTUFBTSxJQUFJLFVBQVNDLENBQUMsRUFBRTtJQUNwQyxLQUFLLElBQUlDLENBQUMsRUFBRUMsQ0FBQyxHQUFHLENBQUMsRUFBRUMsQ0FBQyxHQUFHQyxTQUFTLENBQUNDLE1BQU0sRUFBRUgsQ0FBQyxHQUFHQyxDQUFDLEVBQUVELENBQUMsRUFBRSxFQUFFO01BQ2pERCxDQUFDLEdBQUdHLFNBQVMsQ0FBQ0YsQ0FBQyxDQUFDO01BQ2hCLEtBQUssSUFBSUksQ0FBQyxJQUFJTCxDQUFDO1FBQUUsSUFBSUgsTUFBTSxDQUFDUyxTQUFTLENBQUNDLGNBQWMsQ0FBQ0MsSUFBSSxDQUFDUixDQUFDLEVBQUVLLENBQUMsQ0FBQyxFQUMzRE4sQ0FBQyxDQUFDTSxDQUFDLENBQUMsR0FBR0wsQ0FBQyxDQUFDSyxDQUFDLENBQUM7TUFBQztJQUNwQjtJQUNBLE9BQU9OLENBQUM7RUFDWixDQUFDO0VBQ0QsT0FBT0gsUUFBUSxDQUFDYSxLQUFLLENBQUMsSUFBSSxFQUFFTixTQUFTLENBQUM7QUFDMUMsQ0FBQztBQUNETyxPQUFPLENBQUNDLFVBQVUs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Q0MsS0FBSyxDQUFDO0VBQ2xELENBQUM7RUFDRHJELEtBQUssQ0FBQ3NELGlCQUFpQixHQUFHLFlBQVk7SUFDbEMsT0FBTy9DLFdBQVcsQ0FBQytDLGlCQUFpQixFQUFFO0VBQzFDLENBQUM7RUFDRHRELEtBQUssQ0FBQ3VELFlBQVksR0FBRyxZQUFZLENBQUUsQ0FBQztFQUNwQ3ZELEtBQUssQ0FBQ3dELFNBQVMsR0FBRyxZQUFZLENBQUUsQ0FBQztFQUNqQyxPQUFPeEQsS0FBSztBQUNoQixDQUFDLEVBQUc7QUFDSkYsT0FBTyxDQUFDRSxLQUFLLEdBQUdBLEtBQUssQyIsImZpbGUiOiIyMjIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IGZ1bmN0aW9uICgpIHtcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXG4gICAgICAgICAgICAgICAgdFtwXSA9IHNbcF07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHQ7XG4gICAgfTtcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn07XG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5RTlJUQyA9IHZvaWQgMDtcbnZhciBSVENQcmVzZXRfMSA9IHJlcXVpcmUoXCIuLi9wcmVzZXQvUlRDUHJlc2V0XCIpO1xudmFyIFJUQ0NsaWVudF8xID0gcmVxdWlyZShcIi4vUlRDQ2xpZW50XCIpO1xudmFyIFJUQ0NhbWVyYVZpZGVvVHJhY2tfMSA9IHJlcXVpcmUoXCIuL1JUQ0NhbWVyYVZpZGVvVHJhY2tcIik7XG52YXIgUlRDTWljcm9waG9uZUF1ZGlvVHJhY2tfMSA9IHJlcXVpcmUoXCIuL1JUQ01pY3JvcGhvbmVBdWRpb1RyYWNrXCIpO1xudmFyIFJUQ1NjcmVlblZpZGVvVHJhY2tfMSA9IHJlcXVpcmUoXCIuL1JUQ1NjcmVlblZpZGVvVHJhY2tcIik7XG52YXIgUU5SdGNFbmdpbmUgPSB1bmkucmVxdWlyZU5hdGl2ZVBsdWdpbignUU5SVEMtVW5pUGx1Z2luLVFOUnRjRW5naW5lJyk7XG52YXIgUU5FdmVudCA9IHVuaS5yZXF1aXJlTmF0aXZlUGx1Z2luKCdnbG9iYWxFdmVudCcpO1xudmFyIFFOUnRjVHJhY2sgPSB1bmkucmVxdWlyZU5hdGl2ZVBsdWdpbignUU5SVEMtVW5pUGx1Z2luLVFOUnRjVHJhY2snKTtcbnZhciBRTlJUQ0NsaWVudFBsdWdpbiA9IHVuaS5yZXF1aXJlTmF0aXZlUGx1Z2luKCdRTlJUQy1VbmlQbHVnaW4tUU5SdGNDbGllbnQnKTtcbnZhciBRTlJ0Y0F1ZGlvTWl4ZXIgPSB1bmkucmVxdWlyZU5hdGl2ZVBsdWdpbignUU5SVEMtVW5pUGx1Z2luLVFOUnRjQXVkaW9NaXhlcicpO1xudmFyIFFOUnRjQXVkaW9NdXNpY01peGVyID0gdW5pLnJlcXVpcmVOYXRpdmVQbHVnaW4oJ1FOUlRDLVVuaVBsdWdpbi1RTlJ0Y0F1ZGlvTXVzaWNNaXhlcicpO1xudmFyIFFOUnRjQXVkaW9FZmZlY3RNaXhlciA9IHVuaS5yZXF1aXJlTmF0aXZlUGx1Z2luKCdRTlJUQy1VbmlQbHVnaW4tUU5SdGNBdWRpb011c2ljTWl4ZXInKTtcbnZhciBRTlJUQyA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gUU5SVEMoKSB7XG4gICAgfVxuICAgIFFOUlRDLm9uID0gZnVuY3Rpb24gKG5hbWUsIGxpc3RlbmVyKSB7XG4gICAgICAgIFFORXZlbnQuYWRkRXZlbnRMaXN0ZW5lcihuYW1lLCBsaXN0ZW5lcik7XG4gICAgfTtcbiAgICBRTlJUQy5vZmYgPSBmdW5jdGlvbiAobmFtZSwgbGlzdGVuZXIpIHtcbiAgICAgICAgUU5FdmVudC5yZW1vdmVFdmVudExpc3RlbmVyKG5hbWUsIGxpc3RlbmVyKTtcbiAgICB9O1xuICAgIFFOUlRDLnJlcXVlc3RQZXJtaXNzaW9uID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgICAgIHJldHVybiBRTlJ0Y1RyYWNrLnJlcXVlc3RQZXJtaXNzaW9uKGNhbGxiYWNrKTtcbiAgICB9O1xuICAgIFFOUlRDLmlzU2NyZWVuQ2FwdHVyZVN1cHBvcnRlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIFFOUnRjVHJhY2suaXNTY3JlZW5DYXB0dXJlU3VwcG9ydGVkKCk7XG4gICAgfTtcbiAgICBRTlJUQy5pbml0ID0gZnVuY3Rpb24gKGNvbmZpZykge1xuICAgICAgICB2YXIgX2NvbmZpZyA9IF9fYXNzaWduKF9fYXNzaWduKHt9LCBSVENQcmVzZXRfMS5RTlJUQ0NvbmZpZ3VyYXRpb25QcmVzZXQpLCBjb25maWcpO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgUU5SdGNFbmdpbmUuaW5pdERlbGVnYXRlKCk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGUpIHsgfVxuICAgICAgICBRTlJ0Y1RyYWNrLmluaXREZWxlZ2F0ZSgpO1xuICAgICAgICBRTlJUQ0NsaWVudFBsdWdpbi5pbml0RGVsZWdhdGUoKTtcbiAgICAgICAgUU5SdGNBdWRpb01peGVyLmluaXREZWxlZ2F0ZSgpO1xuICAgICAgICBRTlJ0Y0F1ZGlvTXVzaWNNaXhlci5pbml0RGVsZWdhdGUoKTtcbiAgICAgICAgUU5SdGNBdWRpb0VmZmVjdE1peGVyLmluaXREZWxlZ2F0ZSgpO1xuICAgICAgICByZXR1cm4gUU5SdGNFbmdpbmUuY29uZmlnUlRDKF9jb25maWcpO1xuICAgIH07XG4gICAgUU5SVEMuY29uZmlnUlRDID0gZnVuY3Rpb24gKGNvbmZpZykge1xuXHRcdGNvbnNvbGUubG9nKFwi5ZWK5ZWK5ZWK5ZWK5ZWK5ZWK5ZWK5ZWK5ZWK5ZWK5ZWK5pivXCIpXG4gICAgICAgIHZhciBfY29uZmlnID0gX19hc3NpZ24oX19hc3NpZ24oe30sIFJUQ1ByZXNldF8xLlFOUlRDQ29uZmlndXJhdGlvblByZXNldCksIGNvbmZpZyk7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBRTlJ0Y0VuZ2luZS5pbml0RGVsZWdhdGUoKTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZSkgeyB9XG4gICAgICAgIFFOUnRjVHJhY2suaW5pdERlbGVnYXRlKCk7XG4gICAgICAgIFFOUlRDQ2xpZW50UGx1Z2luLmluaXREZWxlZ2F0ZSgpO1xuICAgICAgICByZXR1cm4gUU5SdGNFbmdpbmUuY29uZmlnUlRDKF9jb25maWcpO1xuICAgIH07XG4gICAgUU5SVEMuZGVpbml0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gUU5SdGNFbmdpbmUuZGVpbml0KCk7XG4gICAgfTtcbiAgICBRTlJUQy5jcmVhdGVDbGllbnQgPSBmdW5jdGlvbiAoY29uZmlnKSB7XG4gICAgICAgIHZhciBfY29uZmlnID0gX19hc3NpZ24oX19hc3NpZ24oe30sIFJUQ1ByZXNldF8xLlFOQ2xpZW50Q29uZmlnUHJlc2V0KSwgY29uZmlnKTtcbiAgICAgICAgUU5SdGNFbmdpbmUuY3JlYXRlQ2xpZW50KF9jb25maWcpO1xuICAgICAgICByZXR1cm4gbmV3IFJUQ0NsaWVudF8xLlFOUlRDQ2xpZW50KCk7XG4gICAgfTtcbiAgICBRTlJUQy5jcmVhdGVNaWNyb3Bob25lQXVkaW9UcmFjayA9IGZ1bmN0aW9uIChjb25maWcpIHtcbiAgICAgICAgdmFyIF9jb25maWcgPSBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgUlRDUHJlc2V0XzEuUU5NaWNyb3Bob25lQXVkaW9UcmFja0NvbmZpZ1ByZXNldCksIGNvbmZpZyk7XG4gICAgICAgIHZhciByZXN1bHQgPSBRTlJ0Y0VuZ2luZS5jcmVhdGVNaWNyb3Bob25lQXVkaW9UcmFjayhfY29uZmlnKTtcbiAgICAgICAgcmV0dXJuIG5ldyBSVENNaWNyb3Bob25lQXVkaW9UcmFja18xLlFOTWljcm9waG9uZUF1ZGlvVHJhY2soX19hc3NpZ24oeyB0cmFja0lEOiAnJywgcmF3OiByZXN1bHQsIHVzZXJJRDogJycgfSwgcmVzdWx0KSk7XG4gICAgfTtcbiAgICBRTlJUQy5jcmVhdGVDYW1lcmFWaWRlb1RyYWNrID0gZnVuY3Rpb24gKGNvbmZpZykge1xuICAgICAgICB2YXIgX2NvbmZpZyA9IF9fYXNzaWduKF9fYXNzaWduKHt9LCBSVENQcmVzZXRfMS5RTkNhbWVyYVZpZGVvVHJhY2tDb25maWdQcmVzZXQpLCBjb25maWcpO1xuICAgICAgICB2YXIgcmVzdWx0ID0gUU5SdGNFbmdpbmUuY3JlYXRlQ2FtZXJhVmlkZW9UcmFjayhfY29uZmlnKTtcbiAgICAgICAgcmV0dXJuIG5ldyBSVENDYW1lcmFWaWRlb1RyYWNrXzEuUU5DYW1lcmFWaWRlb1RyYWNrKF9fYXNzaWduKHsgdHJhY2tJRDogJycsIHJhdzogcmVzdWx0LCB1c2VySUQ6ICcnIH0sIHJlc3VsdCkpO1xuICAgIH07XG4gICAgUU5SVEMuY3JlYXRlU2NyZWVuVmlkZW9UcmFjayA9IGZ1bmN0aW9uIChjb25maWcpIHtcbiAgICAgICAgdmFyIF9jb25maWcgPSBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgUlRDUHJlc2V0XzEuUU5TY3JlZW5WaWRlb1RyYWNrQ29uZmlnUHJlc2V0KSwgY29uZmlnKTtcbiAgICAgICAgdmFyIHJlc3VsdCA9IFFOUnRjRW5naW5lLmNyZWF0ZVNjcmVlblZpZGVvVHJhY2soX2NvbmZpZyk7XG4gICAgICAgIHJldHVybiBuZXcgUlRDU2NyZWVuVmlkZW9UcmFja18xLlFOU2NyZWVuVmlkZW9UcmFjayhfX2Fzc2lnbih7IHRyYWNrSUQ6ICcnLCByYXc6IHJlc3VsdCwgdXNlcklEOiAnJyB9LCByZXN1bHQpKTtcbiAgICB9O1xuICAgIFFOUlRDLnNldEF1ZGlvU2NlbmUgPSBmdW5jdGlvbiAoYXVkaW9TY2VuZSkge1xuICAgICAgICByZXR1cm4gUU5SdGNFbmdpbmUuc2V0QXVkaW9TY2VuZShhdWRpb1NjZW5lKTtcbiAgICB9O1xuICAgIFFOUlRDLnNldEF1ZGlvUm91dGVUb1NwZWFrZXJwaG9uZSA9IGZ1bmN0aW9uIChhdWRpb1JvdXRlVG9TcGVha2VycGhvbmUpIHtcbiAgICAgICAgcmV0dXJuIFFOUnRjRW5naW5lLnNldEF1ZGlvUm91dGVUb1NwZWFrZXJwaG9uZShhdWRpb1JvdXRlVG9TcGVha2VycGhvbmUpO1xuICAgIH07XG4gICAgUU5SVEMuc2V0U3BlYWtlcnBob25lTXV0ZWQgPSBmdW5jdGlvbiAobXV0ZWQpIHtcbiAgICAgICAgcmV0dXJuIFFOUnRjRW5naW5lLnNldFNwZWFrZXJwaG9uZU11dGVkKG11dGVkKTtcbiAgICB9O1xuICAgIFFOUlRDLmVuYWJsZUZpbGVMb2dnaW5nID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gUU5SdGNFbmdpbmUuZW5hYmxlRmlsZUxvZ2dpbmcoKTtcbiAgICB9O1xuICAgIFFOUlRDLnNldExvZ0NvbmZpZyA9IGZ1bmN0aW9uICgpIHsgfTtcbiAgICBRTlJUQy51cGxvYWRMb2cgPSBmdW5jdGlvbiAoKSB7IH07XG4gICAgcmV0dXJuIFFOUlRDO1xufSgpKTtcbmV4cG9ydHMuUU5SVEMgPSBRTlJUQztcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///222\n");

/***/ }),

/***/ 223:
/*!*****************************************************************************************************************!*\
  !*** /Users/tongjie/Desktop/QNRTC-Uniapp/demo/js_sdk/QNRTC-UniPlugin-JS/QNRTC-UniPlugin-JS/preset/RTCPreset.js ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nexports.__esModule = true;\nexports.QNClientConfigPreset = exports.QNCustomVideoTrackConfigPreset = exports.QNScreenVideoTrackConfigPreset = exports.QNCameraVideoTrackConfigPreset = exports.QNCustomAudioTrackConfigPreset = exports.QNMicrophoneAudioTrackConfigPreset = exports.QNRTCConfigurationPreset = void 0;\nvar RTCEnum_1 = __webpack_require__(/*! ../enum/RTCEnum */ 224);\nexports.QNRTCConfigurationPreset = {\n  policy: RTCEnum_1.QNRTCPolicy.forceUDP,\n  stereo: false,\n  logLevel: RTCEnum_1.QNRTCLogLevel.info,\n  bwePolicy: RTCEnum_1.QNRTCBwePolicy.TCC,\n  allowAudioMixWithOthers: true,\n  hWCodecEnabled: true,\n  maintainResolution: false,\n  fieldTrials: '',\n  encoderQualityMode: false,\n  isAEC3Enabled: true,\n  audioScene: RTCEnum_1.QNAudioScene.DEFAULT,\n  defaultAudioRouteToSpeakerphone: true,\n  reconnectionTimeout: 30000\n};\nexports.QNMicrophoneAudioTrackConfigPreset = {\n  tag: '',\n  bitrate: 24,\n  BitsPerSample: 16,\n  ChannelCount: 1,\n  SampleRate: 16000,\n  communicationModeOn: true\n};\nexports.QNCustomAudioTrackConfigPreset = {\n  tag: '',\n  bitrate: 24,\n  BitsPerSample: 16,\n  ChannelCount: 1,\n  SampleRate: 16000\n};\nexports.QNCameraVideoTrackConfigPreset = {\n  tag: '',\n  bitrate: 800,\n  width: 640,\n  height: 480,\n  multiStreamEnable: false,\n  cameraFacing: RTCEnum_1.QNRTCCameraFacing.front,\n  frameRate: 20,\n  captureWidth: 640,\n  captureHeight: 480,\n  captureFrameRate: 20,\n  sessionPreset: RTCEnum_1.QNSessionPresetType.AVCaptureSessionPreset640x480\n};\nexports.QNScreenVideoTrackConfigPreset = {\n  tag: '',\n  bitrate: 800,\n  width: 640,\n  height: 480,\n  multiStreamEnable: false,\n  frameRate: 20\n};\nexports.QNCustomVideoTrackConfigPreset = {\n  tag: '',\n  bitrate: 800,\n  width: 640,\n  height: 480,\n  multiStreamEnable: false,\n  frameRate: 20\n};\nexports.QNClientConfigPreset = {\n  mode: RTCEnum_1.QNClientMode.RTC,\n  role: RTCEnum_1.QNClientRole.BROADCASTER\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vanNfc2RrL1FOUlRDLVVuaVBsdWdpbi1KUy9RTlJUQy1VbmlQbHVnaW4tSlMvcHJlc2V0L1JUQ1ByZXNldC5qcyJdLCJuYW1lcyI6WyJleHBvcnRzIiwiX19lc01vZHVsZSIsIlFOQ2xpZW50Q29uZmlnUHJlc2V0IiwiUU5DdXN0b21WaWRlb1RyYWNrQ29uZmlnUHJlc2V0IiwiUU5TY3JlZW5WaWRlb1RyYWNrQ29uZmlnUHJlc2V0IiwiUU5DYW1lcmFWaWRlb1RyYWNrQ29uZmlnUHJlc2V0IiwiUU5DdXN0b21BdWRpb1RyYWNrQ29uZmlnUHJlc2V0IiwiUU5NaWNyb3Bob25lQXVkaW9UcmFja0NvbmZpZ1ByZXNldCIsIlFOUlRDQ29uZmlndXJhdGlvblByZXNldCIsIlJUQ0VudW1fMSIsInJlcXVpcmUiLCJwb2xpY3kiLCJRTlJUQ1BvbGljeSIsImZvcmNlVURQIiwic3RlcmVvIiwibG9nTGV2ZWwiLCJRTlJUQ0xvZ0xldmVsIiwiaW5mbyIsImJ3ZVBvbGljeSIsIlFOUlRDQndlUG9saWN5IiwiVENDIiwiYWxsb3dBdWRpb01peFdpdGhPdGhlcnMiLCJoV0NvZGVjRW5hYmxlZCIsIm1haW50YWluUmVzb2x1dGlvbiIsImZpZWxkVHJpYWxzIiwiZW5jb2RlclF1YWxpdHlNb2RlIiwiaXNBRUMzRW5hYmxlZCIsImF1ZGlvU2NlbmUiLCJRTkF1ZGlvU2NlbmUiLCJERUZBVUxUIiwiZGVmYXVsdEF1ZGlvUm91dGVUb1NwZWFrZXJwaG9uZSIsInJlY29ubmVjdGlvblRpbWVvdXQiLCJ0YWciLCJiaXRyYXRlIiwiQml0c1BlclNhbXBsZSIsIkNoYW5uZWxDb3VudCIsIlNhbXBsZVJhdGUiLCJjb21tdW5pY2F0aW9uTW9kZU9uIiwid2lkdGgiLCJoZWlnaHQiLCJtdWx0aVN0cmVhbUVuYWJsZSIsImNhbWVyYUZhY2luZyIsIlFOUlRDQ2FtZXJhRmFjaW5nIiwiZnJvbnQiLCJmcmFtZVJhdGUiLCJjYXB0dXJlV2lkdGgiLCJjYXB0dXJlSGVpZ2h0IiwiY2FwdHVyZUZyYW1lUmF0ZSIsInNlc3Npb25QcmVzZXQiLCJRTlNlc3Npb25QcmVzZXRUeXBlIiwiQVZDYXB0dXJlU2Vzc2lvblByZXNldDY0MHg0ODAiLCJtb2RlIiwiUU5DbGllbnRNb2RlIiwiUlRDIiwicm9sZSIsIlFOQ2xpZW50Um9sZSIsIkJST0FEQ0FTVEVSIl0sIm1hcHBpbmdzIjoiQUFBYTs7QUFDYkEsT0FBTyxDQUFDQyxVQUFVLEdBQUcsSUFBSTtBQUN6QkQsT0FBTyxDQUFDRSxvQkFBb0IsR0FBR0YsT0FBTyxDQUFDRyw4QkFBOEIsR0FBR0gsT0FBTyxDQUFDSSw4QkFBOEIsR0FBR0osT0FBTyxDQUFDSyw4QkFBOEIsR0FBR0wsT0FBTyxDQUFDTSw4QkFBOEIsR0FBR04sT0FBTyxDQUFDTyxrQ0FBa0MsR0FBR1AsT0FBTyxDQUFDUSx3QkFBd0IsR0FBRyxLQUFLLENBQUM7QUFDelIsSUFBSUMsU0FBUyxHQUFHQyxtQkFBTyxDQUFDLDBCQUFpQixDQUFDO0FBQzFDVixPQUFPLENBQUNRLHdCQUF3QixHQUFHO0VBQy9CRyxNQUFNLEVBQUVGLFNBQVMsQ0FBQ0csV0FBVyxDQUFDQyxRQUFRO0VBQ3RDQyxNQUFNLEVBQUUsS0FBSztFQUNiQyxRQUFRLEVBQUVOLFNBQVMsQ0FBQ08sYUFBYSxDQUFDQyxJQUFJO0VBQ3RDQyxTQUFTLEVBQUVULFNBQVMsQ0FBQ1UsY0FBYyxDQUFDQyxHQUFHO0VBQ3ZDQyx1QkFBdUIsRUFBRSxJQUFJO0VBQzdCQyxjQUFjLEVBQUUsSUFBSTtFQUNwQkMsa0JBQWtCLEVBQUUsS0FBSztFQUN6QkMsV0FBVyxFQUFFLEVBQUU7RUFDZkMsa0JBQWtCLEVBQUUsS0FBSztFQUN6QkMsYUFBYSxFQUFFLElBQUk7RUFDbkJDLFVBQVUsRUFBRWxCLFNBQVMsQ0FBQ21CLFlBQVksQ0FBQ0MsT0FBTztFQUMxQ0MsK0JBQStCLEVBQUUsSUFBSTtFQUNyQ0MsbUJBQW1CLEVBQUU7QUFDekIsQ0FBQztBQUNEL0IsT0FBTyxDQUFDTyxrQ0FBa0MsR0FBRztFQUN6Q3lCLEdBQUcsRUFBRSxFQUFFO0VBQ1BDLE9BQU8sRUFBRSxFQUFFO0VBQ1hDLGFBQWEsRUFBRSxFQUFFO0VBQ2pCQyxZQUFZLEVBQUUsQ0FBQztFQUNmQyxVQUFVLEVBQUUsS0FBSztFQUNqQkMsbUJBQW1CLEVBQUU7QUFDekIsQ0FBQztBQUNEckMsT0FBTyxDQUFDTSw4QkFBOEIsR0FBRztFQUNyQzBCLEdBQUcsRUFBRSxFQUFFO0VBQ1BDLE9BQU8sRUFBRSxFQUFFO0VBQ1hDLGFBQWEsRUFBRSxFQUFFO0VBQ2pCQyxZQUFZLEVBQUUsQ0FBQztFQUNmQyxVQUFVLEVBQUU7QUFDaEIsQ0FBQztBQUNEcEMsT0FBTyxDQUFDSyw4QkFBOEIsR0FBRztFQUNyQzJCLEdBQUcsRUFBRSxFQUFFO0VBQ1BDLE9BQU8sRUFBRSxHQUFHO0VBQ1pLLEtBQUssRUFBRSxHQUFHO0VBQ1ZDLE1BQU0sRUFBRSxHQUFHO0VBQ1hDLGlCQUFpQixFQUFFLEtBQUs7RUFDeEJDLFlBQVksRUFBRWhDLFNBQVMsQ0FBQ2lDLGlCQUFpQixDQUFDQyxLQUFLO0VBQy9DQyxTQUFTLEVBQUUsRUFBRTtFQUNiQyxZQUFZLEVBQUUsR0FBRztFQUNqQkMsYUFBYSxFQUFFLEdBQUc7RUFDbEJDLGdCQUFnQixFQUFFLEVBQUU7RUFDcEJDLGFBQWEsRUFBRXZDLFNBQVMsQ0FBQ3dDLG1CQUFtQixDQUFDQztBQUNqRCxDQUFDO0FBQ0RsRCxPQUFPLENBQUNJLDhCQUE4QixHQUFHO0VBQ3JDNEIsR0FBRyxFQUFFLEVBQUU7RUFDUEMsT0FBTyxFQUFFLEdBQUc7RUFDWkssS0FBSyxFQUFFLEdBQUc7RUFDVkMsTUFBTSxFQUFFLEdBQUc7RUFDWEMsaUJBQWlCLEVBQUUsS0FBSztFQUN4QkksU0FBUyxFQUFFO0FBQ2YsQ0FBQztBQUNENUMsT0FBTyxDQUFDRyw4QkFBOEIsR0FBRztFQUNyQzZCLEdBQUcsRUFBRSxFQUFFO0VBQ1BDLE9BQU8sRUFBRSxHQUFHO0VBQ1pLLEtBQUssRUFBRSxHQUFHO0VBQ1ZDLE1BQU0sRUFBRSxHQUFHO0VBQ1hDLGlCQUFpQixFQUFFLEtBQUs7RUFDeEJJLFNBQVMsRUFBRTtBQUNmLENBQUM7QUFDRDVDLE9BQU8sQ0FBQ0Usb0JBQW9CLEdBQUc7RUFDM0JpRCxJQUFJLEVBQUUxQyxTQUFTLENBQUMyQyxZQUFZLENBQUNDLEdBQUc7RUFDaENDLElBQUksRUFBRTdDLFNBQVMsQ0FBQzhDLFlBQVksQ0FBQ0M7QUFDakMsQ0FBQyIsImZpbGUiOiIyMjMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLlFOQ2xpZW50Q29uZmlnUHJlc2V0ID0gZXhwb3J0cy5RTkN1c3RvbVZpZGVvVHJhY2tDb25maWdQcmVzZXQgPSBleHBvcnRzLlFOU2NyZWVuVmlkZW9UcmFja0NvbmZpZ1ByZXNldCA9IGV4cG9ydHMuUU5DYW1lcmFWaWRlb1RyYWNrQ29uZmlnUHJlc2V0ID0gZXhwb3J0cy5RTkN1c3RvbUF1ZGlvVHJhY2tDb25maWdQcmVzZXQgPSBleHBvcnRzLlFOTWljcm9waG9uZUF1ZGlvVHJhY2tDb25maWdQcmVzZXQgPSBleHBvcnRzLlFOUlRDQ29uZmlndXJhdGlvblByZXNldCA9IHZvaWQgMDtcbnZhciBSVENFbnVtXzEgPSByZXF1aXJlKFwiLi4vZW51bS9SVENFbnVtXCIpO1xuZXhwb3J0cy5RTlJUQ0NvbmZpZ3VyYXRpb25QcmVzZXQgPSB7XG4gICAgcG9saWN5OiBSVENFbnVtXzEuUU5SVENQb2xpY3kuZm9yY2VVRFAsXG4gICAgc3RlcmVvOiBmYWxzZSxcbiAgICBsb2dMZXZlbDogUlRDRW51bV8xLlFOUlRDTG9nTGV2ZWwuaW5mbyxcbiAgICBid2VQb2xpY3k6IFJUQ0VudW1fMS5RTlJUQ0J3ZVBvbGljeS5UQ0MsXG4gICAgYWxsb3dBdWRpb01peFdpdGhPdGhlcnM6IHRydWUsXG4gICAgaFdDb2RlY0VuYWJsZWQ6IHRydWUsXG4gICAgbWFpbnRhaW5SZXNvbHV0aW9uOiBmYWxzZSxcbiAgICBmaWVsZFRyaWFsczogJycsXG4gICAgZW5jb2RlclF1YWxpdHlNb2RlOiBmYWxzZSxcbiAgICBpc0FFQzNFbmFibGVkOiB0cnVlLFxuICAgIGF1ZGlvU2NlbmU6IFJUQ0VudW1fMS5RTkF1ZGlvU2NlbmUuREVGQVVMVCxcbiAgICBkZWZhdWx0QXVkaW9Sb3V0ZVRvU3BlYWtlcnBob25lOiB0cnVlLFxuICAgIHJlY29ubmVjdGlvblRpbWVvdXQ6IDMwMDAwXG59O1xuZXhwb3J0cy5RTk1pY3JvcGhvbmVBdWRpb1RyYWNrQ29uZmlnUHJlc2V0ID0ge1xuICAgIHRhZzogJycsXG4gICAgYml0cmF0ZTogMjQsXG4gICAgQml0c1BlclNhbXBsZTogMTYsXG4gICAgQ2hhbm5lbENvdW50OiAxLFxuICAgIFNhbXBsZVJhdGU6IDE2MDAwLFxuICAgIGNvbW11bmljYXRpb25Nb2RlT246IHRydWVcbn07XG5leHBvcnRzLlFOQ3VzdG9tQXVkaW9UcmFja0NvbmZpZ1ByZXNldCA9IHtcbiAgICB0YWc6ICcnLFxuICAgIGJpdHJhdGU6IDI0LFxuICAgIEJpdHNQZXJTYW1wbGU6IDE2LFxuICAgIENoYW5uZWxDb3VudDogMSxcbiAgICBTYW1wbGVSYXRlOiAxNjAwMFxufTtcbmV4cG9ydHMuUU5DYW1lcmFWaWRlb1RyYWNrQ29uZmlnUHJlc2V0ID0ge1xuICAgIHRhZzogJycsXG4gICAgYml0cmF0ZTogODAwLFxuICAgIHdpZHRoOiA2NDAsXG4gICAgaGVpZ2h0OiA0ODAsXG4gICAgbXVsdGlTdHJlYW1FbmFibGU6IGZhbHNlLFxuICAgIGNhbWVyYUZhY2luZzogUlRDRW51bV8xLlFOUlRDQ2FtZXJhRmFjaW5nLmZyb250LFxuICAgIGZyYW1lUmF0ZTogMjAsXG4gICAgY2FwdHVyZVdpZHRoOiA2NDAsXG4gICAgY2FwdHVyZUhlaWdodDogNDgwLFxuICAgIGNhcHR1cmVGcmFtZVJhdGU6IDIwLFxuICAgIHNlc3Npb25QcmVzZXQ6IFJUQ0VudW1fMS5RTlNlc3Npb25QcmVzZXRUeXBlLkFWQ2FwdHVyZVNlc3Npb25QcmVzZXQ2NDB4NDgwXG59O1xuZXhwb3J0cy5RTlNjcmVlblZpZGVvVHJhY2tDb25maWdQcmVzZXQgPSB7XG4gICAgdGFnOiAnJyxcbiAgICBiaXRyYXRlOiA4MDAsXG4gICAgd2lkdGg6IDY0MCxcbiAgICBoZWlnaHQ6IDQ4MCxcbiAgICBtdWx0aVN0cmVhbUVuYWJsZTogZmFsc2UsXG4gICAgZnJhbWVSYXRlOiAyMFxufTtcbmV4cG9ydHMuUU5DdXN0b21WaWRlb1RyYWNrQ29uZmlnUHJlc2V0ID0ge1xuICAgIHRhZzogJycsXG4gICAgYml0cmF0ZTogODAwLFxuICAgIHdpZHRoOiA2NDAsXG4gICAgaGVpZ2h0OiA0ODAsXG4gICAgbXVsdGlTdHJlYW1FbmFibGU6IGZhbHNlLFxuICAgIGZyYW1lUmF0ZTogMjBcbn07XG5leHBvcnRzLlFOQ2xpZW50Q29uZmlnUHJlc2V0ID0ge1xuICAgIG1vZGU6IFJUQ0VudW1fMS5RTkNsaWVudE1vZGUuUlRDLFxuICAgIHJvbGU6IFJUQ0VudW1fMS5RTkNsaWVudFJvbGUuQlJPQURDQVNURVJcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///223\n");

/***/ }),

/***/ 224:
/*!*************************************************************************************************************!*\
  !*** /Users/tongjie/Desktop/QNRTC-Uniapp/demo/js_sdk/QNRTC-UniPlugin-JS/QNRTC-UniPlugin-JS/enum/RTCEnum.js ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nexports.__esModule = true;\nexports.QNVideoFormatDefault = exports.QNDegradationPreference = exports.QNMediaRelayState = exports.QNClientMode = exports.QNClientRole = exports.QNAudioScene = exports.QNVideoFrameType = exports.QNAudioMusicMixerState = exports.QNAudioMixerState = exports.QNSessionPresetType = exports.QNVideoFillModeType = exports.QNAVCaptureVideoOrientation = exports.QNVideoWaterMarkSize = exports.QNAudioDevice = exports.QNLiveStreamingErrorInfoCode = exports.QNLiveStreamingErrorInfoType = exports.QNConnectionDisconnectedReason = exports.QNNetworkGrade = exports.QNTrackProfile = exports.QNRenderMode = exports.QNConnectionState = exports.QNRTCLogLevel = exports.QNRTCTrackKind = exports.QNRTCBwePolicy = exports.QNRTCPolicy = exports.QNRTCCameraFacing = void 0;\nvar QNRTCCameraFacing;\n(function (QNRTCCameraFacing) {\n  QNRTCCameraFacing[\"back\"] = \"back\";\n  QNRTCCameraFacing[\"front\"] = \"front\";\n})(QNRTCCameraFacing = exports.QNRTCCameraFacing || (exports.QNRTCCameraFacing = {}));\nvar QNRTCPolicy;\n(function (QNRTCPolicy) {\n  QNRTCPolicy[\"forceUDP\"] = \"forceUDP\";\n  QNRTCPolicy[\"forceTCP\"] = \"forceTCP\";\n  QNRTCPolicy[\"preferUDP\"] = \"preferUDP\";\n})(QNRTCPolicy = exports.QNRTCPolicy || (exports.QNRTCPolicy = {}));\nvar QNRTCBwePolicy;\n(function (QNRTCBwePolicy) {\n  QNRTCBwePolicy[\"TCC\"] = \"TCC\";\n  QNRTCBwePolicy[\"GCC\"] = \"GCC\";\n})(QNRTCBwePolicy = exports.QNRTCBwePolicy || (exports.QNRTCBwePolicy = {}));\nvar QNRTCTrackKind;\n(function (QNRTCTrackKind) {\n  QNRTCTrackKind[\"audio\"] = \"audio\";\n  QNRTCTrackKind[\"video\"] = \"video\";\n})(QNRTCTrackKind = exports.QNRTCTrackKind || (exports.QNRTCTrackKind = {}));\nvar QNRTCLogLevel;\n(function (QNRTCLogLevel) {\n  QNRTCLogLevel[\"verbose\"] = \"verbose\";\n  QNRTCLogLevel[\"info\"] = \"info\";\n  QNRTCLogLevel[\"warning\"] = \"warning\";\n  QNRTCLogLevel[\"error\"] = \"error\";\n  QNRTCLogLevel[\"none\"] = \"none\";\n})(QNRTCLogLevel = exports.QNRTCLogLevel || (exports.QNRTCLogLevel = {}));\nvar QNConnectionState;\n(function (QNConnectionState) {\n  QNConnectionState[\"DISCONNECTED\"] = \"DISCONNECTED\";\n  QNConnectionState[\"CONNECTING\"] = \"CONNECTING\";\n  QNConnectionState[\"CONNECTED\"] = \"CONNECTED\";\n  QNConnectionState[\"RECONNECTING\"] = \"RECONNECTING\";\n  QNConnectionState[\"RECONNECTED\"] = \"RECONNECTED\";\n})(QNConnectionState = exports.QNConnectionState || (exports.QNConnectionState = {}));\nvar QNRenderMode;\n(function (QNRenderMode) {\n  QNRenderMode[\"FILL\"] = \"FILL\";\n  QNRenderMode[\"ASPECT_FILL\"] = \"ASPECT_FILL\";\n  QNRenderMode[\"ASPECT_FIT\"] = \"ASPECT_FIT\";\n})(QNRenderMode = exports.QNRenderMode || (exports.QNRenderMode = {}));\nvar QNTrackProfile;\n(function (QNTrackProfile) {\n  QNTrackProfile[\"LOW\"] = \"LOW\";\n  QNTrackProfile[\"MEDIUM\"] = \"MEDIUM\";\n  QNTrackProfile[\"HIGH\"] = \"HIGH\";\n})(QNTrackProfile = exports.QNTrackProfile || (exports.QNTrackProfile = {}));\nvar QNNetworkGrade;\n(function (QNNetworkGrade) {\n  QNNetworkGrade[\"INVALID\"] = \"INVALID\";\n  QNNetworkGrade[\"EXCELLENT\"] = \"EXCELLENT\";\n  QNNetworkGrade[\"GOOD\"] = \"GOOD\";\n  QNNetworkGrade[\"FAIR\"] = \"FAIR\";\n  QNNetworkGrade[\"POOR\"] = \"POOR\";\n})(QNNetworkGrade = exports.QNNetworkGrade || (exports.QNNetworkGrade = {}));\nvar QNConnectionDisconnectedReason;\n(function (QNConnectionDisconnectedReason) {\n  QNConnectionDisconnectedReason[\"LEAVE\"] = \"LEAVE\";\n  QNConnectionDisconnectedReason[\"KICKED_OUT\"] = \"KICKED_OUT\";\n  QNConnectionDisconnectedReason[\"ROOM_CLOSED\"] = \"ROOM_CLOSED\";\n  QNConnectionDisconnectedReason[\"ROOM_FULL\"] = \"ROOM_FULL\";\n  QNConnectionDisconnectedReason[\"ERROR\"] = \"ERROR\";\n})(QNConnectionDisconnectedReason = exports.QNConnectionDisconnectedReason || (exports.QNConnectionDisconnectedReason = {}));\nvar QNLiveStreamingErrorInfoType;\n(function (QNLiveStreamingErrorInfoType) {\n  QNLiveStreamingErrorInfoType[\"START\"] = \"START\";\n  QNLiveStreamingErrorInfoType[\"STOP\"] = \"STOP\";\n  QNLiveStreamingErrorInfoType[\"UPDATE\"] = \"UPDATE\";\n})(QNLiveStreamingErrorInfoType = exports.QNLiveStreamingErrorInfoType || (exports.QNLiveStreamingErrorInfoType = {}));\nvar QNLiveStreamingErrorInfoCode;\n(function (QNLiveStreamingErrorInfoCode) {\n  QNLiveStreamingErrorInfoCode[\"ERROR_NO_PERMISSION\"] = \"ERROR_NO_PERMISSION\";\n  QNLiveStreamingErrorInfoCode[\"ERROR_INVALID_STATE\"] = \"ERROR_INVALID_STATE\";\n  QNLiveStreamingErrorInfoCode[\"ERROR_INVALID_PARAMETER\"] = \"ERROR_INVALID_PARAMETER\";\n  QNLiveStreamingErrorInfoCode[\"ERROR_SIGNAL_TIMEOUT\"] = \"ERROR_SIGNAL_TIMEOUT\";\n  QNLiveStreamingErrorInfoCode[\"SERVER_ERROR\"] = \"SERVER_ERROR\";\n})(QNLiveStreamingErrorInfoCode = exports.QNLiveStreamingErrorInfoCode || (exports.QNLiveStreamingErrorInfoCode = {}));\nvar QNAudioDevice;\n(function (QNAudioDevice) {\n  QNAudioDevice[\"SPEAKER_PHONE\"] = \"SPEAKER_PHONE\";\n  QNAudioDevice[\"EARPIECE\"] = \"EARPIECE\";\n  QNAudioDevice[\"WIRED_HEADSET\"] = \"WIRED_HEADSET\";\n  QNAudioDevice[\"BLUETOOTH\"] = \"BLUETOOTH\";\n  QNAudioDevice[\"NONE\"] = \"NONE\";\n})(QNAudioDevice = exports.QNAudioDevice || (exports.QNAudioDevice = {}));\nvar QNVideoWaterMarkSize;\n(function (QNVideoWaterMarkSize) {\n  QNVideoWaterMarkSize[\"LARGE\"] = \"LARGE\";\n  QNVideoWaterMarkSize[\"MEDIUM\"] = \"MEDIUM\";\n  QNVideoWaterMarkSize[\"SMALL\"] = \"SMALL\";\n})(QNVideoWaterMarkSize = exports.QNVideoWaterMarkSize || (exports.QNVideoWaterMarkSize = {}));\nvar QNAVCaptureVideoOrientation;\n(function (QNAVCaptureVideoOrientation) {\n  QNAVCaptureVideoOrientation[\"AVCaptureVideoOrientationPortrait\"] = \"AVCaptureVideoOrientationPortrait\";\n  QNAVCaptureVideoOrientation[\"AVCaptureVideoOrientationLandscapeRight\"] = \"AVCaptureVideoOrientationLandscapeRight\";\n  QNAVCaptureVideoOrientation[\"AVCaptureVideoOrientationLandscapeLeft\"] = \"AVCaptureVideoOrientationLandscapeLeft\";\n})(QNAVCaptureVideoOrientation = exports.QNAVCaptureVideoOrientation || (exports.QNAVCaptureVideoOrientation = {}));\nvar QNVideoFillModeType;\n(function (QNVideoFillModeType) {\n  QNVideoFillModeType[\"QNVideoFillModeNone\"] = \"QNVideoFillModeNone\";\n  QNVideoFillModeType[\"QNVideoFillModeStretch\"] = \"QNVideoFillModeStretch\";\n  QNVideoFillModeType[\"QNVideoFillModePreserveAspectRatio\"] = \"QNVideoFillModePreserveAspectRatio\";\n  QNVideoFillModeType[\"QNVideoFillModePreserveAspectRatioAndFill\"] = \"QNVideoFillModePreserveAspectRatioAndFill\";\n})(QNVideoFillModeType = exports.QNVideoFillModeType || (exports.QNVideoFillModeType = {}));\nvar QNSessionPresetType;\n(function (QNSessionPresetType) {\n  QNSessionPresetType[\"AVCaptureSessionPreset352x288\"] = \"AVCaptureSessionPreset352x288\";\n  QNSessionPresetType[\"AVCaptureSessionPreset640x480\"] = \"AVCaptureSessionPreset640x480\";\n  QNSessionPresetType[\"AVCaptureSessionPreset1280x720\"] = \"AVCaptureSessionPreset1280x720\";\n  QNSessionPresetType[\"AVCaptureSessionPreset1920x1080\"] = \"AVCaptureSessionPreset1920x1080\";\n  QNSessionPresetType[\"AVCaptureSessionPreset3840x2160\"] = \"AVCaptureSessionPreset3840x2160\";\n  QNSessionPresetType[\"AVCaptureSessionPresetiFrame960x540\"] = \"AVCaptureSessionPresetiFrame960x540\";\n  QNSessionPresetType[\"AVCaptureSessionPresetiFrame1280x720\"] = \"AVCaptureSessionPresetiFrame1280x720\";\n})(QNSessionPresetType = exports.QNSessionPresetType || (exports.QNSessionPresetType = {}));\nvar QNAudioMixerState;\n(function (QNAudioMixerState) {\n  QNAudioMixerState[\"MIXING\"] = \"MIXING\";\n  QNAudioMixerState[\"PAUSED\"] = \"PAUSED\";\n  QNAudioMixerState[\"STOPPED\"] = \"STOPPED\";\n  QNAudioMixerState[\"COMPLETED\"] = \"COMPLETED\";\n})(QNAudioMixerState = exports.QNAudioMixerState || (exports.QNAudioMixerState = {}));\nvar QNAudioMusicMixerState;\n(function (QNAudioMusicMixerState) {\n  QNAudioMusicMixerState[\"IDLE\"] = \"IDLE\";\n  QNAudioMusicMixerState[\"MIXING\"] = \"MIXING\";\n  QNAudioMusicMixerState[\"PAUSED\"] = \"PAUSED\";\n  QNAudioMusicMixerState[\"STOPPED\"] = \"STOPPED\";\n  QNAudioMusicMixerState[\"COMPLETED\"] = \"COMPLETED\";\n})(QNAudioMusicMixerState = exports.QNAudioMusicMixerState || (exports.QNAudioMusicMixerState = {}));\nvar QNVideoFrameType;\n(function (QNVideoFrameType) {\n  QNVideoFrameType[\"YUV_NV21\"] = \"YUV_NV21\";\n  QNVideoFrameType[\"TEXTURE_RGB\"] = \"TEXTURE_RGB\";\n  QNVideoFrameType[\"TEXTURE_OES\"] = \"TEXTURE_OES\";\n})(QNVideoFrameType = exports.QNVideoFrameType || (exports.QNVideoFrameType = {}));\nvar QNAudioScene;\n(function (QNAudioScene) {\n  QNAudioScene[\"DEFAULT\"] = \"DEFAULT\";\n  QNAudioScene[\"VOICE_CHAT\"] = \"VOICE_CHAT\";\n  QNAudioScene[\"SOUND_EQUALIZE\"] = \"SOUND_EQUALIZE\";\n})(QNAudioScene = exports.QNAudioScene || (exports.QNAudioScene = {}));\nvar QNClientRole;\n(function (QNClientRole) {\n  QNClientRole[\"BROADCASTER\"] = \"BROADCASTER\";\n  QNClientRole[\"AUDIENCE\"] = \"AUDIENCE\";\n})(QNClientRole = exports.QNClientRole || (exports.QNClientRole = {}));\nvar QNClientMode;\n(function (QNClientMode) {\n  QNClientMode[\"RTC\"] = \"RTC\";\n  QNClientMode[\"LIVE\"] = \"LIVE\";\n})(QNClientMode = exports.QNClientMode || (exports.QNClientMode = {}));\nvar QNMediaRelayState;\n(function (QNMediaRelayState) {\n  QNMediaRelayState[\"UNKNOWN\"] = \"UNKNOWN\";\n  QNMediaRelayState[\"SUCCESS\"] = \"SUCCESS\";\n  QNMediaRelayState[\"STOPPED\"] = \"STOPPED\";\n  QNMediaRelayState[\"INVALID_TOKEN\"] = \"INVALID_TOKEN\";\n  QNMediaRelayState[\"NO_ROOM\"] = \"NO_ROOM\";\n  QNMediaRelayState[\"ROOM_CLOSED\"] = \"ROOM_CLOSED\";\n  QNMediaRelayState[\"PLAYER_EXISTED\"] = \"PLAYER_EXISTED\";\n})(QNMediaRelayState = exports.QNMediaRelayState || (exports.QNMediaRelayState = {}));\nvar QNDegradationPreference;\n(function (QNDegradationPreference) {\n  QNDegradationPreference[\"DEFAULT\"] = \"DEFAULT\";\n  QNDegradationPreference[\"MAINTAIN_FRAMERATE\"] = \"MAINTAIN_FRAMERATE\";\n  QNDegradationPreference[\"MAINTAIN_RESOLUTION\"] = \"MAINTAIN_RESOLUTION\";\n  QNDegradationPreference[\"BALANCED\"] = \"BALANCED\";\n  QNDegradationPreference[\"ADAPT_BITRATE_ONLY\"] = \"ADAPT_BITRATE_ONLY\";\n})(QNDegradationPreference = exports.QNDegradationPreference || (exports.QNDegradationPreference = {}));\nvar QNVideoFormatDefault;\n(function (QNVideoFormatDefault) {\n  QNVideoFormatDefault[\"VIDEO_320x180_15\"] = \"VIDEO_320x180_15\";\n  QNVideoFormatDefault[\"VIDEO_320x240_15\"] = \"VIDEO_320x240_15\";\n  QNVideoFormatDefault[\"VIDEO_640x360_15\"] = \"VIDEO_640x360_15\";\n  QNVideoFormatDefault[\"VIDEO_640x360_30\"] = \"VIDEO_640x360_30\";\n  QNVideoFormatDefault[\"VIDEO_640x480_15\"] = \"VIDEO_640x480_15\";\n  QNVideoFormatDefault[\"VIDEO_640x480_30\"] = \"VIDEO_640x480_30\";\n  QNVideoFormatDefault[\"VIDEO_960x540_15\"] = \"VIDEO_960x540_15\";\n  QNVideoFormatDefault[\"VIDEO_960x540_30\"] = \"VIDEO_960x540_30\";\n  QNVideoFormatDefault[\"VIDEO_960x720_15\"] = \"VIDEO_960x720_15\";\n  QNVideoFormatDefault[\"VIDEO_960x720_30\"] = \"VIDEO_960x720_30\";\n  QNVideoFormatDefault[\"VIDEO_1280x720_15\"] = \"VIDEO_1280x720_15\";\n  QNVideoFormatDefault[\"VIDEO_1280x720_30\"] = \"VIDEO_1280x720_30\";\n})(QNVideoFormatDefault = exports.QNVideoFormatDefault || (exports.QNVideoFormatDefault = {}));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vanNfc2RrL1FOUlRDLVVuaVBsdWdpbi1KUy9RTlJUQy1VbmlQbHVnaW4tSlMvZW51bS9SVENFbnVtLmpzIl0sIm5hbWVzIjpbImV4cG9ydHMiLCJfX2VzTW9kdWxlIiwiUU5WaWRlb0Zvcm1hdERlZmF1bHQiLCJRTkRlZ3JhZGF0aW9uUHJlZmVyZW5jZSIsIlFOTWVkaWFSZWxheVN0YXRlIiwiUU5DbGllbnRNb2RlIiwiUU5DbGllbnRSb2xlIiwiUU5BdWRpb1NjZW5lIiwiUU5WaWRlb0ZyYW1lVHlwZSIsIlFOQXVkaW9NdXNpY01peGVyU3RhdGUiLCJRTkF1ZGlvTWl4ZXJTdGF0ZSIsIlFOU2Vzc2lvblByZXNldFR5cGUiLCJRTlZpZGVvRmlsbE1vZGVUeXBlIiwiUU5BVkNhcHR1cmVWaWRlb09yaWVudGF0aW9uIiwiUU5WaWRlb1dhdGVyTWFya1NpemUiLCJRTkF1ZGlvRGV2aWNlIiwiUU5MaXZlU3RyZWFtaW5nRXJyb3JJbmZvQ29kZSIsIlFOTGl2ZVN0cmVhbWluZ0Vycm9ySW5mb1R5cGUiLCJRTkNvbm5lY3Rpb25EaXNjb25uZWN0ZWRSZWFzb24iLCJRTk5ldHdvcmtHcmFkZSIsIlFOVHJhY2tQcm9maWxlIiwiUU5SZW5kZXJNb2RlIiwiUU5Db25uZWN0aW9uU3RhdGUiLCJRTlJUQ0xvZ0xldmVsIiwiUU5SVENUcmFja0tpbmQiLCJRTlJUQ0J3ZVBvbGljeSIsIlFOUlRDUG9saWN5IiwiUU5SVENDYW1lcmFGYWNpbmciXSwibWFwcGluZ3MiOiJBQUFhOztBQUNiQSxPQUFPLENBQUNDLFVBQVUsR0FBRyxJQUFJO0FBQ3pCRCxPQUFPLENBQUNFLG9CQUFvQixHQUFHRixPQUFPLENBQUNHLHVCQUF1QixHQUFHSCxPQUFPLENBQUNJLGlCQUFpQixHQUFHSixPQUFPLENBQUNLLFlBQVksR0FBR0wsT0FBTyxDQUFDTSxZQUFZLEdBQUdOLE9BQU8sQ0FBQ08sWUFBWSxHQUFHUCxPQUFPLENBQUNRLGdCQUFnQixHQUFHUixPQUFPLENBQUNT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N0RBLG9CQUFvQixDQUFDLGtCQUFrQixDQUFDLEdBQUcsa0JBQWtCO0VBQzdEQSxvQkFBb0IsQ0FBQyxrQkFBa0IsQ0FBQyxHQUFHLGtCQUFrQjtFQUM3REEsb0JBQW9CLENBQUMsa0JBQWtCLENBQUMsR0FBRyxrQkFBa0I7RUFDN0RBLG9CQUFvQixDQUFDLGtCQUFrQixDQUFDLEdBQUcsa0JBQWtCO0VBQzdEQSxvQkFBb0IsQ0FBQyxtQkFBbUIsQ0FBQyxHQUFHLG1CQUFtQjtFQUMvREEsb0JBQW9CLENBQUMsbUJBQW1CLENBQUMsR0FBRyxtQkFBbUI7QUFDbkUsQ0FBQyxFQUFFQSxvQkFBb0IsR0FBR0YsT0FBTyxDQUFDRSxvQkFBb0IsS0FBS0YsT0FBTyxDQUFDRSxvQkFBb0IsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDIiwiZmlsZSI6IjIyNC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuUU5WaWRlb0Zvcm1hdERlZmF1bHQgPSBleHBvcnRzLlFORGVncmFkYXRpb25QcmVmZXJlbmNlID0gZXhwb3J0cy5RTk1lZGlhUmVsYXlTdGF0ZSA9IGV4cG9ydHMuUU5DbGllbnRNb2RlID0gZXhwb3J0cy5RTkNsaWVudFJvbGUgPSBleHBvcnRzLlFOQXVkaW9TY2VuZSA9IGV4cG9ydHMuUU5WaWRlb0ZyYW1lVHlwZSA9IGV4cG9ydHMuUU5BdWRpb011c2ljTWl4ZXJTdGF0ZSA9IGV4cG9ydHMuUU5BdWRpb01peGVyU3RhdGUgPSBleHBvcnRzLlFOU2Vzc2lvblByZXNldFR5cGUgPSBleHBvcnRzLlFOVmlkZW9GaWxsTW9kZVR5cGUgPSBleHBvcnRzLlFOQVZDYXB0dXJlVmlkZW9PcmllbnRhdGlvbiA9IGV4cG9ydHMuUU5WaWRlb1dhdGVyTWFya1NpemUgPSBleHBvcnRzLlFOQXVkaW9EZXZpY2UgPSBleHBvcnRzLlFOTGl2ZVN0cmVhbWluZ0Vycm9ySW5mb0NvZGUgPSBleHBvcnRzLlFOTGl2ZVN0cmVhbWluZ0Vycm9ySW5mb1R5cGUgPSBleHBvcnRzLlFOQ29ubmVjdGlvbkRpc2Nvbm5lY3RlZFJlYXNvbiA9IGV4cG9ydHMuUU5OZXR3b3JrR3JhZGUgPSBleHBvcnRzLlFOVHJhY2tQcm9maWxlID0gZXhwb3J0cy5RTlJlbmRlck1vZGUgPSBleHBvcnRzLlFOQ29ubmVjdGlvblN0YXRlID0gZXhwb3J0cy5RTlJUQ0xvZ0xldmVsID0gZXhwb3J0cy5RTlJUQ1RyYWNrS2luZCA9IGV4cG9ydHMuUU5SVENCd2VQb2xpY3kgPSBleHBvcnRzLlFOUlRDUG9saWN5ID0gZXhwb3J0cy5RTlJUQ0NhbWVyYUZhY2luZyA9IHZvaWQgMDtcbnZhciBRTlJUQ0NhbWVyYUZhY2luZztcbihmdW5jdGlvbiAoUU5SVENDYW1lcmFGYWNpbmcpIHtcbiAgICBRTlJUQ0NhbWVyYUZhY2luZ1tcImJhY2tcIl0gPSBcImJhY2tcIjtcbiAgICBRTlJUQ0NhbWVyYUZhY2luZ1tcImZyb250XCJdID0gXCJmcm9udFwiO1xufSkoUU5SVENDYW1lcmFGYWNpbmcgPSBleHBvcnRzLlFOUlRDQ2FtZXJhRmFjaW5nIHx8IChleHBvcnRzLlFOUlRDQ2FtZXJhRmFjaW5nID0ge30pKTtcbnZhciBRTlJUQ1BvbGljeTtcbihmdW5jdGlvbiAoUU5SVENQb2xpY3kpIHtcbiAgICBRTlJUQ1BvbGljeVtcImZvcmNlVURQXCJdID0gXCJmb3JjZVVEUFwiO1xuICAgIFFOUlRDUG9saWN5W1wiZm9yY2VUQ1BcIl0gPSBcImZvcmNlVENQXCI7XG4gICAgUU5SVENQb2xpY3lbXCJwcmVmZXJVRFBcIl0gPSBcInByZWZlclVEUFwiO1xufSkoUU5SVENQb2xpY3kgPSBleHBvcnRzLlFOUlRDUG9saWN5IHx8IChleHBvcnRzLlFOUlRDUG9saWN5ID0ge30pKTtcbnZhciBRTlJUQ0J3ZVBvbGljeTtcbihmdW5jdGlvbiAoUU5SVENCd2VQb2xpY3kpIHtcbiAgICBRTlJUQ0J3ZVBvbGljeVtcIlRDQ1wiXSA9IFwiVENDXCI7XG4gICAgUU5SVENCd2VQb2xpY3lbXCJHQ0NcIl0gPSBcIkdDQ1wiO1xufSkoUU5SVENCd2VQb2xpY3kgPSBleHBvcnRzLlFOUlRDQndlUG9saWN5IHx8IChleHBvcnRzLlFOUlRDQndlUG9saWN5ID0ge30pKTtcbnZhciBRTlJUQ1RyYWNrS2luZDtcbihmdW5jdGlvbiAoUU5SVENUcmFja0tpbmQpIHtcbiAgICBRTlJUQ1RyYWNrS2luZFtcImF1ZGlvXCJdID0gXCJhdWRpb1wiO1xuICAgIFFOUlRDVHJhY2tLaW5kW1widmlkZW9cIl0gPSBcInZpZGVvXCI7XG59KShRTlJUQ1RyYWNrS2luZCA9IGV4cG9ydHMuUU5SVENUcmFja0tpbmQgfHwgKGV4cG9ydHMuUU5SVENUcmFja0tpbmQgPSB7fSkpO1xudmFyIFFOUlRDTG9nTGV2ZWw7XG4oZnVuY3Rpb24gKFFOUlRDTG9nTGV2ZWwpIHtcbiAgICBRTlJUQ0xvZ0xldmVsW1widmVyYm9zZVwiXSA9IFwidmVyYm9zZVwiO1xuICAgIFFOUlRDTG9nTGV2ZWxbXCJpbmZvXCJdID0gXCJpbmZvXCI7XG4gICAgUU5SVENMb2dMZXZlbFtcIndhcm5pbmdcIl0gPSBcIndhcm5pbmdcIjtcbiAgICBRTlJUQ0xvZ0xldmVsW1wiZXJyb3JcIl0gPSBcImVycm9yXCI7XG4gICAgUU5SVENMb2dMZXZlbFtcIm5vbmVcIl0gPSBcIm5vbmVcIjtcbn0pKFFOUlRDTG9nTGV2ZWwgPSBleHBvcnRzLlFOUlRDTG9nTGV2ZWwgfHwgKGV4cG9ydHMuUU5SVENMb2dMZXZlbCA9IHt9KSk7XG52YXIgUU5Db25uZWN0aW9uU3RhdGU7XG4oZnVuY3Rpb24gKFFOQ29ubmVjdGlvblN0YXRlKSB7XG4gICAgUU5Db25uZWN0aW9uU3RhdGVbXCJESVNDT05ORUNURURcIl0gPSBcIkRJU0NPTk5FQ1RFRFwiO1xuICAgIFFOQ29ubmVjdGlvblN0YXRlW1wiQ09OTkVDVElOR1wiXSA9IFwiQ09OTkVDVElOR1wiO1xuICAgIFFOQ29ubmVjdGlvblN0YXRlW1wiQ09OTkVDVEVEXCJdID0gXCJDT05ORUNURURcIjtcbiAgICBRTkNvbm5lY3Rpb25TdGF0ZVtcIlJFQ09OTkVDVElOR1wiXSA9IFwiUkVDT05ORUNUSU5HXCI7XG4gICAgUU5Db25uZWN0aW9uU3RhdGVbXCJSRUNPTk5FQ1RFRFwiXSA9IFwiUkVDT05ORUNURURcIjtcbn0pKFFOQ29ubmVjdGlvblN0YXRlID0gZXhwb3J0cy5RTkNvbm5lY3Rpb25TdGF0ZSB8fCAoZXhwb3J0cy5RTkNvbm5lY3Rpb25TdGF0ZSA9IHt9KSk7XG52YXIgUU5SZW5kZXJNb2RlO1xuKGZ1bmN0aW9uIChRTlJlbmRlck1vZGUpIHtcbiAgICBRTlJlbmRlck1vZGVbXCJGSUxMXCJdID0gXCJGSUxMXCI7XG4gICAgUU5SZW5kZXJNb2RlW1wiQVNQRUNUX0ZJTExcIl0gPSBcIkFTUEVDVF9GSUxMXCI7XG4gICAgUU5SZW5kZXJNb2RlW1wiQVNQRUNUX0ZJVFwiXSA9IFwiQVNQRUNUX0ZJVFwiO1xufSkoUU5SZW5kZXJNb2RlID0gZXhwb3J0cy5RTlJlbmRlck1vZGUgfHwgKGV4cG9ydHMuUU5SZW5kZXJNb2RlID0ge30pKTtcbnZhciBRTlRyYWNrUHJvZmlsZTtcbihmdW5jdGlvbiAoUU5UcmFja1Byb2ZpbGUpIHtcbiAgICBRTlRyYWNrUHJvZmlsZVtcIkxPV1wiXSA9IFwiTE9XXCI7XG4gICAgUU5UcmFja1Byb2ZpbGVbXCJNRURJVU1cIl0gPSBcIk1FRElVTVwiO1xuICAgIFFOVHJhY2tQcm9maWxlW1wiSElHSFwiXSA9IFwiSElHSFwiO1xufSkoUU5UcmFja1Byb2ZpbGUgPSBleHBvcnRzLlFOVHJhY2tQcm9maWxlIHx8IChleHBvcnRzLlFOVHJhY2tQcm9maWxlID0ge30pKTtcbnZhciBRTk5ldHdvcmtHcmFkZTtcbihmdW5jdGlvbiAoUU5OZXR3b3JrR3JhZGUpIHtcbiAgICBRTk5ldHdvcmtHcmFkZVtcIklOVkFMSURcIl0gPSBcIklOVkFMSURcIjtcbiAgICBRTk5ldHdvcmtHcmFkZVtcIkVYQ0VMTEVOVFwiXSA9IFwiRVhDRUxMRU5UXCI7XG4gICAgUU5OZXR3b3JrR3JhZGVbXCJHT09EXCJdID0gXCJHT09EXCI7XG4gICAgUU5OZXR3b3JrR3JhZGVbXCJGQUlSXCJdID0gXCJGQUlSXCI7XG4gICAgUU5OZXR3b3JrR3JhZGVbXCJQT09SXCJdID0gXCJQT09SXCI7XG59KShRTk5ldHdvcmtHcmFkZSA9IGV4cG9ydHMuUU5OZXR3b3JrR3JhZGUgfHwgKGV4cG9ydHMuUU5OZXR3b3JrR3JhZGUgPSB7fSkpO1xudmFyIFFOQ29ubmVjdGlvbkRpc2Nvbm5lY3RlZFJlYXNvbjtcbihmdW5jdGlvbiAoUU5Db25uZWN0aW9uRGlzY29ubmVjdGVkUmVhc29uKSB7XG4gICAgUU5Db25uZWN0aW9uRGlzY29ubmVjdGVkUmVhc29uW1wiTEVBVkVcIl0gPSBcIkxFQVZFXCI7XG4gICAgUU5Db25uZWN0aW9uRGlzY29ubmVjdGVkUmVhc29uW1wiS0lDS0VEX09VVFwiXSA9IFwiS0lDS0VEX09VVFwiO1xuICAgIFFOQ29ubmVjdGlvbkRpc2Nvbm5lY3RlZFJlYXNvbltcIlJPT01fQ0xPU0VEXCJdID0gXCJST09NX0NMT1NFRFwiO1xuICAgIFFOQ29ubmVjdGlvbkRpc2Nvbm5lY3RlZFJlYXNvbltcIlJPT01fRlVMTFwiXSA9IFwiUk9PTV9GVUxMXCI7XG4gICAgUU5Db25uZWN0aW9uRGlzY29ubmVjdGVkUmVhc29uW1wiRVJST1JcIl0gPSBcIkVSUk9SXCI7XG59KShRTkNvbm5lY3Rpb25EaXNjb25uZWN0ZWRSZWFzb24gPSBleHBvcnRzLlFOQ29ubmVjdGlvbkRpc2Nvbm5lY3RlZFJlYXNvbiB8fCAoZXhwb3J0cy5RTkNvbm5lY3Rpb25EaXNjb25uZWN0ZWRSZWFzb24gPSB7fSkpO1xudmFyIFFOTGl2ZVN0cmVhbWluZ0Vycm9ySW5mb1R5cGU7XG4oZnVuY3Rpb24gKFFOTGl2ZVN0cmVhbWluZ0Vycm9ySW5mb1R5cGUpIHtcbiAgICBRTkxpdmVTdHJlYW1pbmdFcnJvckluZm9UeXBlW1wiU1RBUlRcIl0gPSBcIlNUQVJUXCI7XG4gICAgUU5MaXZlU3RyZWFtaW5nRXJyb3JJbmZvVHlwZVtcIlNUT1BcIl0gPSBcIlNUT1BcIjtcbiAgICBRTkxpdmVTdHJlYW1pbmdFcnJvckluZm9UeXBlW1wiVVBEQVRFXCJdID0gXCJVUERBVEVcIjtcbn0pKFFOTGl2ZVN0cmVhbWluZ0Vycm9ySW5mb1R5cGUgPSBleHBvcnRzLlFOTGl2ZVN0cmVhbWluZ0Vycm9ySW5mb1R5cGUgfHwgKGV4cG9ydHMuUU5MaXZlU3RyZWFtaW5nRXJyb3JJbmZvVHlwZSA9IHt9KSk7XG52YXIgUU5MaXZlU3RyZWFtaW5nRXJyb3JJbmZvQ29kZTtcbihmdW5jdGlvbiAoUU5MaXZlU3RyZWFtaW5nRXJyb3JJbmZvQ29kZSkge1xuICAgIFFOTGl2ZVN0cmVhbWluZ0Vycm9ySW5mb0NvZGVbXCJFUlJPUl9OT19QRVJNSVNTSU9OXCJdID0gXCJFUlJPUl9OT19QRVJNSVNTSU9OXCI7XG4gICAgUU5MaXZlU3RyZWFtaW5nRXJyb3JJbmZvQ29kZVtcIkVSUk9SX0lOVkFMSURfU1RBVEVcIl0gPSBcIkVSUk9SX0lOVkFMSURfU1RBVEVcIjtcbiAgICBRTkxpdmVTdHJlYW1pbmdFcnJvckluZm9Db2RlW1wiRVJST1JfSU5WQUxJRF9QQVJBTUVURVJcIl0gPSBcIkVSUk9SX0lOVkFMSURfUEFSQU1FVEVSXCI7XG4gICAgUU5MaXZlU3RyZWFtaW5nRXJyb3JJbmZvQ29kZVtcIkVSUk9SX1NJR05BTF9USU1FT1VUXCJdID0gXCJFUlJPUl9TSUdOQUxfVElNRU9VVFwiO1xuICAgIFFOTGl2ZVN0cmVhbWluZ0Vycm9ySW5mb0NvZGVbXCJTRVJWRVJfRVJST1JcIl0gPSBcIlNFUlZFUl9FUlJPUlwiO1xufSkoUU5MaXZlU3RyZWFtaW5nRXJyb3JJbmZvQ29kZSA9IGV4cG9ydHMuUU5MaXZlU3RyZWFtaW5nRXJyb3JJbmZvQ29kZSB8fCAoZXhwb3J0cy5RTkxpdmVTdHJlYW1pbmdFcnJvckluZm9Db2RlID0ge30pKTtcbnZhciBRTkF1ZGlvRGV2aWNlO1xuKGZ1bmN0aW9uIChRTkF1ZGlvRGV2aWNlKSB7XG4gICAgUU5BdWRpb0RldmljZVtcIlNQRUFLRVJfUEhPTkVcIl0gPSBcIlNQRUFLRVJfUEhPTkVcIjtcbiAgICBRTkF1ZGlvRGV2aWNlW1wiRUFSUElFQ0VcIl0gPSBcIkVBUlBJRUNFXCI7XG4gICAgUU5BdWRpb0RldmljZVtcIldJUkVEX0hFQURTRVRcIl0gPSBcIldJUkVEX0hFQURTRVRcIjtcbiAgICBRTkF1ZGlvRGV2aWNlW1wiQkxVRVRPT1RIXCJdID0gXCJCTFVFVE9PVEhcIjtcbiAgICBRTkF1ZGlvRGV2aWNlW1wiTk9ORVwiXSA9IFwiTk9ORVwiO1xufSkoUU5BdWRpb0RldmljZSA9IGV4cG9ydHMuUU5BdWRpb0RldmljZSB8fCAoZXhwb3J0cy5RTkF1ZGlvRGV2aWNlID0ge30pKTtcbnZhciBRTlZpZGVvV2F0ZXJNYXJrU2l6ZTtcbihmdW5jdGlvbiAoUU5WaWRlb1dhdGVyTWFya1NpemUpIHtcbiAgICBRTlZpZGVvV2F0ZXJNYXJrU2l6ZVtcIkxBUkdFXCJdID0gXCJMQVJHRVwiO1xuICAgIFFOVmlkZW9XYXRlck1hcmtTaXplW1wiTUVESVVNXCJdID0gXCJNRURJVU1cIjtcbiAgICBRTlZpZGVvV2F0ZXJNYXJrU2l6ZVtcIlNNQUxMXCJdID0gXCJTTUFMTFwiO1xufSkoUU5WaWRlb1dhdGVyTWFya1NpemUgPSBleHBvcnRzLlFOVmlkZW9XYXRlck1hcmtTaXplIHx8IChleHBvcnRzLlFOVmlkZW9XYXRlck1hcmtTaXplID0ge30pKTtcbnZhciBRTkFWQ2FwdHVyZVZpZGVvT3JpZW50YXRpb247XG4oZnVuY3Rpb24gKFFOQVZDYXB0dXJlVmlkZW9PcmllbnRhdGlvbikge1xuICAgIFFOQVZDYXB0dXJlVmlkZW9PcmllbnRhdGlvbltcIkFWQ2FwdHVyZVZpZGVvT3JpZW50YXRpb25Qb3J0cmFpdFwiXSA9IFwiQVZDYXB0dXJlVmlkZW9PcmllbnRhdGlvblBvcnRyYWl0XCI7XG4gICAgUU5BVkNhcHR1cmVWaWRlb09yaWVudGF0aW9uW1wiQVZDYXB0dXJlVmlkZW9PcmllbnRhdGlvbkxhbmRzY2FwZVJpZ2h0XCJdID0gXCJBVkNhcHR1cmVWaWRlb09yaWVudGF0aW9uTGFuZHNjYXBlUmlnaHRcIjtcbiAgICBRTkFWQ2FwdHVyZVZpZGVvT3JpZW50YXRpb25bXCJBVkNhcHR1cmVWaWRlb09yaWVudGF0aW9uTGFuZHNjYXBlTGVmdFwiXSA9IFwiQVZDYXB0dXJlVmlkZW9PcmllbnRhdGlvbkxhbmRzY2FwZUxlZnRcIjtcbn0pKFFOQVZDYXB0dXJlVmlkZW9PcmllbnRhdGlvbiA9IGV4cG9ydHMuUU5BVkNhcHR1cmVWaWRlb09yaWVudGF0aW9uIHx8IChleHBvcnRzLlFOQVZDYXB0dXJlVmlkZW9PcmllbnRhdGlvbiA9IHt9KSk7XG52YXIgUU5WaWRlb0ZpbGxNb2RlVHlwZTtcbihmdW5jdGlvbiAoUU5WaWRlb0ZpbGxNb2RlVHlwZSkge1xuICAgIFFOVmlkZW9GaWxsTW9kZVR5cGVbXCJRTlZpZGVvRmlsbE1vZGVOb25lXCJdID0gXCJRTlZpZGVvRmlsbE1vZGVOb25lXCI7XG4gICAgUU5WaWRlb0ZpbGxNb2RlVHlwZVtcIlFOVmlkZW9GaWxsTW9kZVN0cmV0Y2hcIl0gPSBcIlFOVmlkZW9GaWxsTW9kZVN0cmV0Y2hcIjtcbiAgICBRTlZpZGVvRmlsbE1vZGVUeXBlW1wiUU5WaWRlb0ZpbGxNb2RlUHJlc2VydmVBc3BlY3RSYXRpb1wiXSA9IFwiUU5WaWRlb0ZpbGxNb2RlUHJlc2VydmVBc3BlY3RSYXRpb1wiO1xuICAgIFFOVmlkZW9GaWxsTW9kZVR5cGVbXCJRTlZpZGVvRmlsbE1vZGVQcmVzZXJ2ZUFzcGVjdFJhdGlvQW5kRmlsbFwiXSA9IFwiUU5WaWRlb0ZpbGxNb2RlUHJlc2VydmVBc3BlY3RSYXRpb0FuZEZpbGxcIjtcbn0pKFFOVmlkZW9GaWxsTW9kZVR5cGUgPSBleHBvcnRzLlFOVmlkZW9GaWxsTW9kZVR5cGUgfHwgKGV4cG9ydHMuUU5WaWRlb0ZpbGxNb2RlVHlwZSA9IHt9KSk7XG52YXIgUU5TZXNzaW9uUHJlc2V0VHlwZTtcbihmdW5jdGlvbiAoUU5TZXNzaW9uUHJlc2V0VHlwZSkge1xuICAgIFFOU2Vzc2lvblByZXNldFR5cGVbXCJBVkNhcHR1cmVTZXNzaW9uUHJlc2V0MzUyeDI4OFwiXSA9IFwiQVZDYXB0dXJlU2Vzc2lvblByZXNldDM1MngyODhcIjtcbiAgICBRTlNlc3Npb25QcmVzZXRUeXBlW1wiQVZDYXB0dXJlU2Vzc2lvblByZXNldDY0MHg0ODBcIl0gPSBcIkFWQ2FwdHVyZVNlc3Npb25QcmVzZXQ2NDB4NDgwXCI7XG4gICAgUU5TZXNzaW9uUHJlc2V0VHlwZVtcIkFWQ2FwdHVyZVNlc3Npb25QcmVzZXQxMjgweDcyMFwiXSA9IFwiQVZDYXB0dXJlU2Vzc2lvblByZXNldDEyODB4NzIwXCI7XG4gICAgUU5TZXNzaW9uUHJlc2V0VHlwZVtcIkFWQ2FwdHVyZVNlc3Npb25QcmVzZXQxOTIweDEwODBcIl0gPSBcIkFWQ2FwdHVyZVNlc3Npb25QcmVzZXQxOTIweDEwODBcIjtcbiAgICBRTlNlc3Npb25QcmVzZXRUeXBlW1wiQVZDYXB0dXJlU2Vzc2lvblByZXNldDM4NDB4MjE2MFwiXSA9IFwiQVZDYXB0dXJlU2Vzc2lvblByZXNldDM4NDB4MjE2MFwiO1xuICAgIFFOU2Vzc2lvblByZXNldFR5cGVbXCJBVkNhcHR1cmVTZXNzaW9uUHJlc2V0aUZyYW1lOTYweDU0MFwiXSA9IFwiQVZDYXB0dXJlU2Vzc2lvblByZXNldGlGcmFtZTk2MHg1NDBcIjtcbiAgICBRTlNlc3Npb25QcmVzZXRUeXBlW1wiQVZDYXB0dXJlU2Vzc2lvblByZXNldGlGcmFtZTEyODB4NzIwXCJdID0gXCJBVkNhcHR1cmVTZXNzaW9uUHJlc2V0aUZyYW1lMTI4MHg3MjBcIjtcbn0pKFFOU2Vzc2lvblByZXNldFR5cGUgPSBleHBvcnRzLlFOU2Vzc2lvblByZXNldFR5cGUgfHwgKGV4cG9ydHMuUU5TZXNzaW9uUHJlc2V0VHlwZSA9IHt9KSk7XG52YXIgUU5BdWRpb01peGVyU3RhdGU7XG4oZnVuY3Rpb24gKFFOQXVkaW9NaXhlclN0YXRlKSB7XG4gICAgUU5BdWRpb01peGVyU3RhdGVbXCJNSVhJTkdcIl0gPSBcIk1JWElOR1wiO1xuICAgIFFOQXVkaW9NaXhlclN0YXRlW1wiUEFVU0VEXCJdID0gXCJQQVVTRURcIjtcbiAgICBRTkF1ZGlvTWl4ZXJTdGF0ZVtcIlNUT1BQRURcIl0gPSBcIlNUT1BQRURcIjtcbiAgICBRTkF1ZGlvTWl4ZXJTdGF0ZVtcIkNPTVBMRVRFRFwiXSA9IFwiQ09NUExFVEVEXCI7XG59KShRTkF1ZGlvTWl4ZXJTdGF0ZSA9IGV4cG9ydHMuUU5BdWRpb01peGVyU3RhdGUgfHwgKGV4cG9ydHMuUU5BdWRpb01peGVyU3RhdGUgPSB7fSkpO1xudmFyIFFOQXVkaW9NdXNpY01peGVyU3RhdGU7XG4oZnVuY3Rpb24gKFFOQXVkaW9NdXNpY01peGVyU3RhdGUpIHtcbiAgICBRTkF1ZGlvTXVzaWNNaXhlclN0YXRlW1wiSURMRVwiXSA9IFwiSURMRVwiO1xuICAgIFFOQXVkaW9NdXNpY01peGVyU3RhdGVbXCJNSVhJTkdcIl0gPSBcIk1JWElOR1wiO1xuICAgIFFOQXVkaW9NdXNpY01peGVyU3RhdGVbXCJQQVVTRURcIl0gPSBcIlBBVVNFRFwiO1xuICAgIFFOQXVkaW9NdXNpY01peGVyU3RhdGVbXCJTVE9QUEVEXCJdID0gXCJTVE9QUEVEXCI7XG4gICAgUU5BdWRpb011c2ljTWl4ZXJTdGF0ZVtcIkNPTVBMRVRFRFwiXSA9IFwiQ09NUExFVEVEXCI7XG59KShRTkF1ZGlvTXVzaWNNaXhlclN0YXRlID0gZXhwb3J0cy5RTkF1ZGlvTXVzaWNNaXhlclN0YXRlIHx8IChleHBvcnRzLlFOQXVkaW9NdXNpY01peGVyU3RhdGUgPSB7fSkpO1xudmFyIFFOVmlkZW9GcmFtZVR5cGU7XG4oZnVuY3Rpb24gKFFOVmlkZW9GcmFtZVR5cGUpIHtcbiAgICBRTlZpZGVvRnJhbWVUeXBlW1wiWVVWX05WMjFcIl0gPSBcIllVVl9OVjIxXCI7XG4gICAgUU5WaWRlb0ZyYW1lVHlwZVtcIlRFWFRVUkVfUkdCXCJdID0gXCJURVhUVVJFX1JHQlwiO1xuICAgIFFOVmlkZW9GcmFtZVR5cGVbXCJURVhUVVJFX09FU1wiXSA9IFwiVEVYVFVSRV9PRVNcIjtcbn0pKFFOVmlkZW9GcmFtZVR5cGUgPSBleHBvcnRzLlFOVmlkZW9GcmFtZVR5cGUgfHwgKGV4cG9ydHMuUU5WaWRlb0ZyYW1lVHlwZSA9IHt9KSk7XG52YXIgUU5BdWRpb1NjZW5lO1xuKGZ1bmN0aW9uIChRTkF1ZGlvU2NlbmUpIHtcbiAgICBRTkF1ZGlvU2NlbmVbXCJERUZBVUxUXCJdID0gXCJERUZBVUxUXCI7XG4gICAgUU5BdWRpb1NjZW5lW1wiVk9JQ0VfQ0hBVFwiXSA9IFwiVk9JQ0VfQ0hBVFwiO1xuICAgIFFOQXVkaW9TY2VuZVtcIlNPVU5EX0VRVUFMSVpFXCJdID0gXCJTT1VORF9FUVVBTElaRVwiO1xufSkoUU5BdWRpb1NjZW5lID0gZXhwb3J0cy5RTkF1ZGlvU2NlbmUgfHwgKGV4cG9ydHMuUU5BdWRpb1NjZW5lID0ge30pKTtcbnZhciBRTkNsaWVudFJvbGU7XG4oZnVuY3Rpb24gKFFOQ2xpZW50Um9sZSkge1xuICAgIFFOQ2xpZW50Um9sZVtcIkJST0FEQ0FTVEVSXCJdID0gXCJCUk9BRENBU1RFUlwiO1xuICAgIFFOQ2xpZW50Um9sZVtcIkFVRElFTkNFXCJdID0gXCJBVURJRU5DRVwiO1xufSkoUU5DbGllbnRSb2xlID0gZXhwb3J0cy5RTkNsaWVudFJvbGUgfHwgKGV4cG9ydHMuUU5DbGllbnRSb2xlID0ge30pKTtcbnZhciBRTkNsaWVudE1vZGU7XG4oZnVuY3Rpb24gKFFOQ2xpZW50TW9kZSkge1xuICAgIFFOQ2xpZW50TW9kZVtcIlJUQ1wiXSA9IFwiUlRDXCI7XG4gICAgUU5DbGllbnRNb2RlW1wiTElWRVwiXSA9IFwiTElWRVwiO1xufSkoUU5DbGllbnRNb2RlID0gZXhwb3J0cy5RTkNsaWVudE1vZGUgfHwgKGV4cG9ydHMuUU5DbGllbnRNb2RlID0ge30pKTtcbnZhciBRTk1lZGlhUmVsYXlTdGF0ZTtcbihmdW5jdGlvbiAoUU5NZWRpYVJlbGF5U3RhdGUpIHtcbiAgICBRTk1lZGlhUmVsYXlTdGF0ZVtcIlVOS05PV05cIl0gPSBcIlVOS05PV05cIjtcbiAgICBRTk1lZGlhUmVsYXlTdGF0ZVtcIlNVQ0NFU1NcIl0gPSBcIlNVQ0NFU1NcIjtcbiAgICBRTk1lZGlhUmVsYXlTdGF0ZVtcIlNUT1BQRURcIl0gPSBcIlNUT1BQRURcIjtcbiAgICBRTk1lZGlhUmVsYXlTdGF0ZVtcIklOVkFMSURfVE9LRU5cIl0gPSBcIklOVkFMSURfVE9LRU5cIjtcbiAgICBRTk1lZGlhUmVsYXlTdGF0ZVtcIk5PX1JPT01cIl0gPSBcIk5PX1JPT01cIjtcbiAgICBRTk1lZGlhUmVsYXlTdGF0ZVtcIlJPT01fQ0xPU0VEXCJdID0gXCJST09NX0NMT1NFRFwiO1xuICAgIFFOTWVkaWFSZWxheVN0YXRlW1wiUExBWUVSX0VYSVNURURcIl0gPSBcIlBMQVlFUl9FWElTVEVEXCI7XG59KShRTk1lZGlhUmVsYXlTdGF0ZSA9IGV4cG9ydHMuUU5NZWRpYVJlbGF5U3RhdGUgfHwgKGV4cG9ydHMuUU5NZWRpYVJlbGF5U3RhdGUgPSB7fSkpO1xudmFyIFFORGVncmFkYXRpb25QcmVmZXJlbmNlO1xuKGZ1bmN0aW9uIChRTkRlZ3JhZGF0aW9uUHJlZmVyZW5jZSkge1xuICAgIFFORGVncmFkYXRpb25QcmVmZXJlbmNlW1wiREVGQVVMVFwiXSA9IFwiREVGQVVMVFwiO1xuICAgIFFORGVncmFkYXRpb25QcmVmZXJlbmNlW1wiTUFJTlRBSU5fRlJBTUVSQVRFXCJdID0gXCJNQUlOVEFJTl9GUkFNRVJBVEVcIjtcbiAgICBRTkRlZ3JhZGF0aW9uUHJlZmVyZW5jZVtcIk1BSU5UQUlOX1JFU09MVVRJT05cIl0gPSBcIk1BSU5UQUlOX1JFU09MVVRJT05cIjtcbiAgICBRTkRlZ3JhZGF0aW9uUHJlZmVyZW5jZVtcIkJBTEFOQ0VEXCJdID0gXCJCQUxBTkNFRFwiO1xuICAgIFFORGVncmFkYXRpb25QcmVmZXJlbmNlW1wiQURBUFRfQklUUkFURV9PTkxZXCJdID0gXCJBREFQVF9CSVRSQVRFX09OTFlcIjtcbn0pKFFORGVncmFkYXRpb25QcmVmZXJlbmNlID0gZXhwb3J0cy5RTkRlZ3JhZGF0aW9uUHJlZmVyZW5jZSB8fCAoZXhwb3J0cy5RTkRlZ3JhZGF0aW9uUHJlZmVyZW5jZSA9IHt9KSk7XG52YXIgUU5WaWRlb0Zvcm1hdERlZmF1bHQ7XG4oZnVuY3Rpb24gKFFOVmlkZW9Gb3JtYXREZWZhdWx0KSB7XG4gICAgUU5WaWRlb0Zvcm1hdERlZmF1bHRbXCJWSURFT18zMjB4MTgwXzE1XCJdID0gXCJWSURFT18zMjB4MTgwXzE1XCI7XG4gICAgUU5WaWRlb0Zvcm1hdERlZmF1bHRbXCJWSURFT18zMjB4MjQwXzE1XCJdID0gXCJWSURFT18zMjB4MjQwXzE1XCI7XG4gICAgUU5WaWRlb0Zvcm1hdERlZmF1bHRbXCJWSURFT182NDB4MzYwXzE1XCJdID0gXCJWSURFT182NDB4MzYwXzE1XCI7XG4gICAgUU5WaWRlb0Zvcm1hdERlZmF1bHRbXCJWSURFT182NDB4MzYwXzMwXCJdID0gXCJWSURFT182NDB4MzYwXzMwXCI7XG4gICAgUU5WaWRlb0Zvcm1hdERlZmF1bHRbXCJWSURFT182NDB4NDgwXzE1XCJdID0gXCJWSURFT182NDB4NDgwXzE1XCI7XG4gICAgUU5WaWRlb0Zvcm1hdERlZmF1bHRbXCJWSURFT182NDB4NDgwXzMwXCJdID0gXCJWSURFT182NDB4NDgwXzMwXCI7XG4gICAgUU5WaWRlb0Zvcm1hdERlZmF1bHRbXCJWSURFT185NjB4NTQwXzE1XCJdID0gXCJWSURFT185NjB4NTQwXzE1XCI7XG4gICAgUU5WaWRlb0Zvcm1hdERlZmF1bHRbXCJWSURFT185NjB4NTQwXzMwXCJdID0gXCJWSURFT185NjB4NTQwXzMwXCI7XG4gICAgUU5WaWRlb0Zvcm1hdERlZmF1bHRbXCJWSURFT185NjB4NzIwXzE1XCJdID0gXCJWSURFT185NjB4NzIwXzE1XCI7XG4gICAgUU5WaWRlb0Zvcm1hdERlZmF1bHRbXCJWSURFT185NjB4NzIwXzMwXCJdID0gXCJWSURFT185NjB4NzIwXzMwXCI7XG4gICAgUU5WaWRlb0Zvcm1hdERlZmF1bHRbXCJWSURFT18xMjgweDcyMF8xNVwiXSA9IFwiVklERU9fMTI4MHg3MjBfMTVcIjtcbiAgICBRTlZpZGVvRm9ybWF0RGVmYXVsdFtcIlZJREVPXzEyODB4NzIwXzMwXCJdID0gXCJWSURFT18xMjgweDcyMF8zMFwiO1xufSkoUU5WaWRlb0Zvcm1hdERlZmF1bHQgPSBleHBvcnRzLlFOVmlkZW9Gb3JtYXREZWZhdWx0IHx8IChleHBvcnRzLlFOVmlkZW9Gb3JtYXREZWZhdWx0ID0ge30pKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///224\n");

/***/ }),

/***/ 225:
/*!****************************************************************************************************************!*\
  !*** /Users/tongjie/Desktop/QNRTC-Uniapp/demo/js_sdk/QNRTC-UniPlugin-JS/QNRTC-UniPlugin-JS/class/RTCClient.js ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__webpack_provided_uni_dot_requireNativePlugin) {\n\nvar __assign = this && this.__assign || function () {\n  __assign = Object.assign || function (t) {\n    for (var s, i = 1, n = arguments.length; i < n; i++) {\n      s = arguments[i];\n      for (var p in s) {\n        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];\n      }\n    }\n    return t;\n  };\n  return __assign.apply(this, arguments);\n};\nexports.__esModule = true;\nexports.QNRTCClient = void 0;\nvar RTCEnum_1 = __webpack_require__(/*! ../enum/RTCEnum */ 224);\nvar RTCRemoteVideoTrack_1 = __webpack_require__(/*! ./RTCRemoteVideoTrack */ 226);\nvar RTCRemoteAudioTrack_1 = __webpack_require__(/*! ./RTCRemoteAudioTrack */ 229);\nvar RTCLocalTrack_1 = __webpack_require__(/*! ./RTCLocalTrack */ 230);\nvar RTCClient = __webpack_provided_uni_dot_requireNativePlugin('QNRTC-UniPlugin-QNRtcClient');\nvar QNEvent = __webpack_provided_uni_dot_requireNativePlugin('globalEvent');\nvar QNRTCClient = function () {\n  function QNRTCClient() {\n    this.variationList = ['onUserPublished', 'onUserUnpublished', 'onVideoSubscribed', 'onAudioSubscribed'];\n  }\n  QNRTCClient.prototype.transformRemoteRTCTrack = function (trackList) {\n    var result = [];\n    for (var _i = 0, trackList_1 = trackList; _i < trackList_1.length; _i++) {\n      var i = trackList_1[_i];\n      var config = __assign({\n        identifyID: i.trackID,\n        raw: i\n      }, i);\n      if (i.kind === RTCEnum_1.QNRTCTrackKind.audio) {\n        result.push(new RTCRemoteAudioTrack_1.QNRemoteAudioTrack(config));\n      } else {\n        result.push(new RTCRemoteVideoTrack_1.QNRemoteVideoTrack(config));\n      }\n    }\n    return result;\n  };\n  QNRTCClient.prototype.transformLocalRTCTrack = function (trackList) {\n    var result = [];\n    for (var _i = 0, trackList_2 = trackList; _i < trackList_2.length; _i++) {\n      var i = trackList_2[_i];\n      var config = __assign({\n        identifyID: i.trackID,\n        userID: '',\n        raw: i\n      }, i);\n      if (i.kind === RTCEnum_1.QNRTCTrackKind.audio) {\n        result.push(new RTCLocalTrack_1.QNLocalTrack(config));\n      } else {\n        result.push(new RTCLocalTrack_1.QNLocalTrack(config));\n      }\n    }\n    return result;\n  };\n  QNRTCClient.prototype.createRemoteTrackDataCallback = function (listener) {\n    var _this = this;\n    var variationCallback = function variationCallback(params) {\n      var result = _this.transformRemoteRTCTrack(params.trackList);\n      var callbackData = {\n        remoteUserID: params.remoteUserID,\n        trackList: result\n      };\n      var callback = listener;\n      callback(callbackData);\n    };\n    return variationCallback;\n  };\n  QNRTCClient.prototype.on = function (name, listener) {\n    if (this.variationList.some(function (item) {\n      return item === name;\n    })) {\n      var callback = this.createRemoteTrackDataCallback(listener);\n      QNEvent.addEventListener(name, callback);\n    } else {\n      QNEvent.addEventListener(name, listener);\n    }\n  };\n  QNRTCClient.prototype.off = function (name, listener) {\n    QNEvent.removeEventListener(name, listener);\n  };\n  QNRTCClient.prototype.join = function (token, userData) {\n    RTCClient.join(token, userData !== null && userData !== void 0 ? userData : '');\n  };\n  QNRTCClient.prototype.leave = function () {\n    RTCClient.leave();\n  };\n  QNRTCClient.prototype.publish = function (tracks, callback) {\n    RTCClient.publish(tracks, function (_a) {\n      var onPublished = _a.onPublished,\n        data = _a.data,\n        error = _a.error;\n      if (onPublished) {\n        var _loop_1 = function _loop_1(key) {\n          var index = tracks.findIndex(function (item) {\n            return item.identifyID === key;\n          });\n          if (index >= 0) {\n            tracks[index].trackID = data[key];\n          }\n        };\n        for (var key in data) {\n          _loop_1(key);\n        }\n      }\n      callback(onPublished, error);\n    });\n  };\n  QNRTCClient.prototype.unpublish = function (tracks) {\n    RTCClient.unpublish(tracks);\n  };\n  QNRTCClient.prototype.subscribe = function (tracks) {\n    RTCClient.subscribe(tracks);\n  };\n  QNRTCClient.prototype.unsubscribe = function (tracks) {\n    RTCClient.unsubscribe(tracks);\n  };\n  QNRTCClient.prototype.getSubscribedTracks = function (userID) {\n    var remoteTrack = RTCClient.getSubscribedTracks(userID);\n    return this.transformRemoteRTCTrack(remoteTrack);\n  };\n  QNRTCClient.prototype.getLocalAudioTrackStats = function () {\n    return RTCClient.getLocalAudioTrackStats();\n  };\n  QNRTCClient.prototype.getLocalVideoTrackStats = function () {\n    return RTCClient.getLocalVideoTrackStats();\n  };\n  QNRTCClient.prototype.getRemoteAudioTrackStats = function () {\n    return RTCClient.getRemoteAudioTrackStats();\n  };\n  QNRTCClient.prototype.getRemoteVideoTrackStats = function () {\n    return RTCClient.getRemoteVideoTrackStats();\n  };\n  QNRTCClient.prototype.getUserNetworkQuality = function (userID) {\n    return RTCClient.getUserNetworkQuality(userID);\n  };\n  QNRTCClient.prototype.getRemoteUsers = function () {\n    var remoteUser = RTCClient.getRemoteUsers();\n    var result = [];\n    for (var _i = 0, remoteUser_1 = remoteUser; _i < remoteUser_1.length; _i++) {\n      var i = remoteUser_1[_i];\n      var audioTracks = this.transformRemoteRTCTrack(i.audioTracks);\n      var videoTracks = this.transformRemoteRTCTrack(i.videoTracks);\n      result.push({\n        userID: i.userID,\n        videoTracks: videoTracks,\n        audioTracks: audioTracks,\n        userData: i.userData\n      });\n    }\n    return result;\n  };\n  QNRTCClient.prototype.getPublishedTracks = function () {\n    var locakTrack = RTCClient.getPublishedTracks();\n    return this.transformLocalRTCTrack(locakTrack);\n  };\n  QNRTCClient.prototype.sendMessage = function (message, users, messageId) {\n    RTCClient.sendMessage(message, users, messageId);\n  };\n  QNRTCClient.prototype.getConnectionState = function () {\n    return RTCClient.getConnectionState();\n  };\n  QNRTCClient.prototype.setAutoSubscribe = function (autoSubscribe) {\n    RTCClient.setAutoSubscribe(autoSubscribe);\n  };\n  QNRTCClient.prototype.startLiveStreamingWithDirect = function (config) {\n    RTCClient.startLiveStreamingWithDirect(config);\n  };\n  QNRTCClient.prototype.startLiveStreamingWithTranscoding = function (config) {\n    !config.watermarks && (config.watermarks = []);\n    !config.background && (config.background = {});\n    RTCClient.startLiveStreamingWithTranscoding(config);\n  };\n  QNRTCClient.prototype.stopLiveStreamingWithDirect = function (config) {\n    RTCClient.stopLiveStreamingWithDirect(config);\n  };\n  QNRTCClient.prototype.stopLiveStreamingWithTranscoding = function (config) {\n    RTCClient.stopLiveStreamingWithTranscoding(config);\n  };\n  QNRTCClient.prototype.setTranscodingLiveStreamingTracks = function (streamID, transcodingTracks) {\n    RTCClient.setTranscodingLiveStreamingTracks(streamID, transcodingTracks);\n  };\n  QNRTCClient.prototype.removeTranscodingLiveStreamingTracks = function (streamID, transcodingTracks) {\n    RTCClient.removeTranscodingLiveStreamingTracks(streamID, transcodingTracks);\n  };\n  QNRTCClient.prototype.setClientRole = function (clientRole, callback) {\n    RTCClient.setClientRole(clientRole, callback);\n  };\n  QNRTCClient.prototype.startMediaRelay = function (configuration, callback) {\n    RTCClient.startMediaRelay(configuration, callback);\n  };\n  QNRTCClient.prototype.updateMediaRelay = function (configuration, callback) {\n    RTCClient.updateMediaRelay(configuration, callback);\n  };\n  QNRTCClient.prototype.stopMediaRelay = function (callback) {\n    RTCClient.stopMediaRelay(callback);\n  };\n  return QNRTCClient;\n}();\nexports.QNRTCClient = QNRTCClient;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/uni-app-plus-nvue/dist/require-native-plugin.js */ 54)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vanNfc2RrL1FOUlRDLVVuaVBsdWdpbi1KUy9RTlJUQy1VbmlQbHVnaW4tSlMvY2xhc3MvUlRDQ2xpZW50LmpzIl0sIm5hbWVzIjpbIl9fYXNzaWduIiwiT2JqZWN0IiwiYXNzaWduIiwidCIsInMiLCJpIiwibiIsImFyZ3VtZW50cyIsImxlbmd0aCIsInAiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJhcHBseSIsImV4cG9ydHMiLCJfX2VzTW9kdWxlIiwiUU5SVENDbGllbnQiLCJSVENFbnVtXzEiLCJyZXF1aXJlIiwiUlRDUmVtb3RlVmlkZW9UcmFja18xIiwiUlRDUmVtb3RlQXVkaW9UcmFja18xIiwiUlRDTG9jYWxUcmFja18xIiwiUlRDQ2xpZW50IiwidW5pIiwiUU5FdmVudCIsInZhcmlhdGlvbkxpc3QiLCJ0cmFuc2Zvcm1SZW1vdGVSVENUcmFjayIsInRyYWNrTGlzdCIsInJlc3VsdCIsIl9pIiwidHJhY2tMaXN0XzEiLCJjb25maWciLCJpZGVudGlmeUlEIiwidHJhY2tJRCIsInJhdyIsImtpbmQiLCJRTlJUQ1RyYWNrS2luZCIsImF1ZGlvIiwicHVzaCIsIlFOUmVtb3RlQXVkaW9UcmFjayIsIlFOUmVtb3RlVmlkZW9UcmFjayIsInRyYW5zZm9ybUxvY2FsUlRDVHJhY2siLCJ0cmFja0xpc3RfMiIsInVzZXJJRCIsIlFOTG9jYWxUcmFjayIsImNyZWF0ZVJlbW90ZVRyYWNrRGF0YUNhbGxiYWNrIiwibGlzdGVuZXIiLCJfdGhpcyIsInZhcmlhdGlvbkNhbGxiYWNrIiwicGFyYW1zIiwiY2FsbGJhY2tEYXRhIiwicmVtb3RlVXNlcklEIiwiY2FsbGJhY2siLCJvbiIsIm5hbWUiLCJzb21lIiwiaXRlbSIsImFkZEV2ZW50TGlzdGVuZXIiLCJvZmYiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiam9pbiIsInRva2VuIiwidXNlckRhdGEiLCJsZWF2ZSIsInB1Ymxpc2giLCJ0cmFja3MiLCJfYSIsIm9uUHVibGlzaGVkIiwiZGF0YSIsImVycm9yIiwiX2xvb3BfMSIsImtleSIsImluZGV4IiwiZmluZEluZGV4IiwidW5wdWJsaXNoIiwic3Vic2NyaWJlIiwidW5zdWJzY3JpYmUiLCJnZXRTdWJzY3JpYmVkVHJhY2tzIiwicmVtb3RlVHJhY2siLCJnZXRMb2NhbEF1ZGlvVHJhY2tTdGF0cyIsImdldExvY2FsVmlkZW9UcmFja1N0YXRzIiwiZ2V0UmVtb3RlQXVkaW9UcmFja1N0YXRzIiwiZ2V0UmVtb3RlVmlkZW9UcmFja1N0YXRzIiwiZ2V0VXNlck5ldHdvcmtRdWFsaXR5IiwiZ2V0UmVtb3RlVXNlcnMiLCJyZW1vdGVVc2VyIiwicmVtb3RlVXNlcl8xIiwiYXVkaW9UcmFja3MiLCJ2aWRlb1RyYWNrcyIsImdldFB1Ymxpc2hlZFRyYWNrcyIsImxvY2FrVHJhY2siLCJzZW5kTWVzc2FnZSIsIm1lc3NhZ2UiLCJ1c2VycyIsIm1lc3NhZ2VJZCIsImdldENvbm5lY3Rpb25TdGF0ZSIsInNldEF1dG9TdWJzY3JpYmUiLCJhdXRvU3Vic2NyaWJlIiwic3RhcnRMaXZlU3RyZWFtaW5nV2l0aERpcmVjdCIsInN0YXJ0TGl2ZVN0cmVhbWluZ1dpdGhUcmFuc2NvZGluZyIsIndhdGVybWFya3MiLCJiYWNrZ3JvdW5kIiwic3RvcExpdmVTdHJlYW1pbmdXaXRoRGlyZWN0Iiwic3RvcExpdmVTdHJlYW1pbmdXaXRoVHJhbnNjb2RpbmciLCJzZXRUcmFuc2NvZGluZ0xpdmVTdHJlYW1pbmdUcmFja3MiLCJzdHJlYW1JRCIsInRyYW5zY29kaW5nVHJhY2tzIiwicmVtb3ZlVHJhbnNjb2RpbmdMaXZlU3RyZWFtaW5nVHJhY2tzIiwic2V0Q2xpZW50Um9sZSIsImNsaWVudFJvbGUiLCJzdGFydE1lZGlhUmVsYXkiLCJjb25maWd1cmF0aW9uIiwidXBkYXRlTWVkaWFSZWxheSIsInN0b3BNZWRpYVJlbGF5Il0sIm1hcHBpbmdzIjoiQUFBQSxzRkFBYTs7QUFDYixJQUFJQSxRQUFRLEdBQUksSUFBSSxJQUFJLElBQUksQ0FBQ0Es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QztFQUNqRCxDQUFDO0VBQ0RwQyxXQUFXLENBQUNOLFNBQVMsQ0FBQ29HLGVBQWUsR0FBRyxVQUFVQyxhQUFhLEVBQUUzRCxRQUFRLEVBQUU7SUFDdkU5QixTQUFTLENBQUN3RixlQUFlLENBQUNDLGFBQWEsRUFBRTNELFFBQVEsQ0FBQztFQUN0RCxDQUFDO0VBQ0RwQyxXQUFXLENBQUNOLFNBQVMsQ0FBQ3NHLGdCQUFnQixHQUFHLFVBQVVELGFBQWEsRUFBRTNELFFBQVEsRUFBRTtJQUN4RTlCLFNBQVMsQ0FBQzBGLGdCQUFnQixDQUFDRCxhQUFhLEVBQUUzRCxRQUFRLENBQUM7RUFDdkQsQ0FBQztFQUNEcEMsV0FBVyxDQUFDTixTQUFTLENBQUN1RyxjQUFjLEdBQUcsVUFBVTdELFFBQVEsRUFBRTtJQUN2RDlCLFNBQVMsQ0FBQzJGLGNBQWMsQ0FBQzdELFFBQVEsQ0FBQztFQUN0QyxDQUFDO0VBQ0QsT0FBT3BDLFdBQVc7QUFDdEIsQ0FBQyxFQUFHO0FBQ0pGLE9BQU8sQ0FBQ0UsV0FBVyxHQUFHQSxXQUFXLEMiLCJmaWxlIjoiMjI1LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBmdW5jdGlvbiAoKSB7XG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKVxuICAgICAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0O1xuICAgIH07XG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59O1xuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuUU5SVENDbGllbnQgPSB2b2lkIDA7XG52YXIgUlRDRW51bV8xID0gcmVxdWlyZShcIi4uL2VudW0vUlRDRW51bVwiKTtcbnZhciBSVENSZW1vdGVWaWRlb1RyYWNrXzEgPSByZXF1aXJlKFwiLi9SVENSZW1vdGVWaWRlb1RyYWNrXCIpO1xudmFyIFJUQ1JlbW90ZUF1ZGlvVHJhY2tfMSA9IHJlcXVpcmUoXCIuL1JUQ1JlbW90ZUF1ZGlvVHJhY2tcIik7XG52YXIgUlRDTG9jYWxUcmFja18xID0gcmVxdWlyZShcIi4vUlRDTG9jYWxUcmFja1wiKTtcbnZhciBSVENDbGllbnQgPSB1bmkucmVxdWlyZU5hdGl2ZVBsdWdpbignUU5SVEMtVW5pUGx1Z2luLVFOUnRjQ2xpZW50Jyk7XG52YXIgUU5FdmVudCA9IHVuaS5yZXF1aXJlTmF0aXZlUGx1Z2luKCdnbG9iYWxFdmVudCcpO1xudmFyIFFOUlRDQ2xpZW50ID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBRTlJUQ0NsaWVudCgpIHtcbiAgICAgICAgdGhpcy52YXJpYXRpb25MaXN0ID0gW1xuICAgICAgICAgICAgJ29uVXNlclB1Ymxpc2hlZCcsXG4gICAgICAgICAgICAnb25Vc2VyVW5wdWJsaXNoZWQnLFxuICAgICAgICAgICAgJ29uVmlkZW9TdWJzY3JpYmVkJyxcbiAgICAgICAgICAgICdvbkF1ZGlvU3Vic2NyaWJlZCcsXG4gICAgICAgIF07XG4gICAgfVxuICAgIFFOUlRDQ2xpZW50LnByb3RvdHlwZS50cmFuc2Zvcm1SZW1vdGVSVENUcmFjayA9IGZ1bmN0aW9uICh0cmFja0xpc3QpIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IFtdO1xuICAgICAgICBmb3IgKHZhciBfaSA9IDAsIHRyYWNrTGlzdF8xID0gdHJhY2tMaXN0OyBfaSA8IHRyYWNrTGlzdF8xLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgdmFyIGkgPSB0cmFja0xpc3RfMVtfaV07XG4gICAgICAgICAgICB2YXIgY29uZmlnID0gX19hc3NpZ24oeyBpZGVudGlmeUlEOiBpLnRyYWNrSUQsIHJhdzogaSB9LCBpKTtcbiAgICAgICAgICAgIGlmIChpLmtpbmQgPT09IFJUQ0VudW1fMS5RTlJUQ1RyYWNrS2luZC5hdWRpbykge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKG5ldyBSVENSZW1vdGVBdWRpb1RyYWNrXzEuUU5SZW1vdGVBdWRpb1RyYWNrKGNvbmZpZykpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0LnB1c2gobmV3IFJUQ1JlbW90ZVZpZGVvVHJhY2tfMS5RTlJlbW90ZVZpZGVvVHJhY2soY29uZmlnKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xuICAgIFFOUlRDQ2xpZW50LnByb3RvdHlwZS50cmFuc2Zvcm1Mb2NhbFJUQ1RyYWNrID0gZnVuY3Rpb24gKHRyYWNrTGlzdCkge1xuICAgICAgICB2YXIgcmVzdWx0ID0gW107XG4gICAgICAgIGZvciAodmFyIF9pID0gMCwgdHJhY2tMaXN0XzIgPSB0cmFja0xpc3Q7IF9pIDwgdHJhY2tMaXN0XzIubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICB2YXIgaSA9IHRyYWNrTGlzdF8yW19pXTtcbiAgICAgICAgICAgIHZhciBjb25maWcgPSBfX2Fzc2lnbih7IGlkZW50aWZ5SUQ6IGkudHJhY2tJRCwgdXNlcklEOiAnJywgcmF3OiBpIH0sIGkpO1xuICAgICAgICAgICAgaWYgKGkua2luZCA9PT0gUlRDRW51bV8xLlFOUlRDVHJhY2tLaW5kLmF1ZGlvKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0LnB1c2gobmV3IFJUQ0xvY2FsVHJhY2tfMS5RTkxvY2FsVHJhY2soY29uZmlnKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXN1bHQucHVzaChuZXcgUlRDTG9jYWxUcmFja18xLlFOTG9jYWxUcmFjayhjb25maWcpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH07XG4gICAgUU5SVENDbGllbnQucHJvdG90eXBlLmNyZWF0ZVJlbW90ZVRyYWNrRGF0YUNhbGxiYWNrID0gZnVuY3Rpb24gKGxpc3RlbmVyKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciB2YXJpYXRpb25DYWxsYmFjayA9IGZ1bmN0aW9uIChwYXJhbXMpIHtcbiAgICAgICAgICAgIHZhciByZXN1bHQgPSBfdGhpcy50cmFuc2Zvcm1SZW1vdGVSVENUcmFjayhwYXJhbXMudHJhY2tMaXN0KTtcbiAgICAgICAgICAgIHZhciBjYWxsYmFja0RhdGEgPSB7XG4gICAgICAgICAgICAgICAgcmVtb3RlVXNlcklEOiBwYXJhbXMucmVtb3RlVXNlcklELFxuICAgICAgICAgICAgICAgIHRyYWNrTGlzdDogcmVzdWx0XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgdmFyIGNhbGxiYWNrID0gbGlzdGVuZXI7XG4gICAgICAgICAgICBjYWxsYmFjayhjYWxsYmFja0RhdGEpO1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gdmFyaWF0aW9uQ2FsbGJhY2s7XG4gICAgfTtcbiAgICBRTlJUQ0NsaWVudC5wcm90b3R5cGUub24gPSBmdW5jdGlvbiAobmFtZSwgbGlzdGVuZXIpIHtcbiAgICAgICAgaWYgKHRoaXMudmFyaWF0aW9uTGlzdC5zb21lKGZ1bmN0aW9uIChpdGVtKSB7IHJldHVybiBpdGVtID09PSBuYW1lOyB9KSkge1xuICAgICAgICAgICAgdmFyIGNhbGxiYWNrID0gdGhpcy5jcmVhdGVSZW1vdGVUcmFja0RhdGFDYWxsYmFjayhsaXN0ZW5lcik7XG4gICAgICAgICAgICBRTkV2ZW50LmFkZEV2ZW50TGlzdGVuZXIobmFtZSwgY2FsbGJhY2spO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgUU5FdmVudC5hZGRFdmVudExpc3RlbmVyKG5hbWUsIGxpc3RlbmVyKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgUU5SVENDbGllbnQucHJvdG90eXBlLm9mZiA9IGZ1bmN0aW9uIChuYW1lLCBsaXN0ZW5lcikge1xuICAgICAgICBRTkV2ZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIobmFtZSwgbGlzdGVuZXIpO1xuICAgIH07XG4gICAgUU5SVENDbGllbnQucHJvdG90eXBlLmpvaW4gPSBmdW5jdGlvbiAodG9rZW4sIHVzZXJEYXRhKSB7XG4gICAgICAgIFJUQ0NsaWVudC5qb2luKHRva2VuLCB1c2VyRGF0YSAhPT0gbnVsbCAmJiB1c2VyRGF0YSAhPT0gdm9pZCAwID8gdXNlckRhdGEgOiAnJyk7XG4gICAgfTtcbiAgICBRTlJUQ0NsaWVudC5wcm90b3R5cGUubGVhdmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIFJUQ0NsaWVudC5sZWF2ZSgpO1xuICAgIH07XG4gICAgUU5SVENDbGllbnQucHJvdG90eXBlLnB1Ymxpc2ggPSBmdW5jdGlvbiAodHJhY2tzLCBjYWxsYmFjaykge1xuICAgICAgICBSVENDbGllbnQucHVibGlzaCh0cmFja3MsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgdmFyIG9uUHVibGlzaGVkID0gX2Eub25QdWJsaXNoZWQsIGRhdGEgPSBfYS5kYXRhLCBlcnJvciA9IF9hLmVycm9yO1xuICAgICAgICAgICAgaWYgKG9uUHVibGlzaGVkKSB7XG4gICAgICAgICAgICAgICAgdmFyIF9sb29wXzEgPSBmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBpbmRleCA9IHRyYWNrcy5maW5kSW5kZXgoZnVuY3Rpb24gKGl0ZW0pIHsgcmV0dXJuIGl0ZW0uaWRlbnRpZnlJRCA9PT0ga2V5OyB9KTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGluZGV4ID49IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYWNrc1tpbmRleF0udHJhY2tJRCA9IGRhdGFba2V5XTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgZm9yICh2YXIga2V5IGluIGRhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgX2xvb3BfMShrZXkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhbGxiYWNrKG9uUHVibGlzaGVkLCBlcnJvcik7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgUU5SVENDbGllbnQucHJvdG90eXBlLnVucHVibGlzaCA9IGZ1bmN0aW9uICh0cmFja3MpIHtcbiAgICAgICAgUlRDQ2xpZW50LnVucHVibGlzaCh0cmFja3MpO1xuICAgIH07XG4gICAgUU5SVENDbGllbnQucHJvdG90eXBlLnN1YnNjcmliZSA9IGZ1bmN0aW9uICh0cmFja3MpIHtcbiAgICAgICAgUlRDQ2xpZW50LnN1YnNjcmliZSh0cmFja3MpO1xuICAgIH07XG4gICAgUU5SVENDbGllbnQucHJvdG90eXBlLnVuc3Vic2NyaWJlID0gZnVuY3Rpb24gKHRyYWNrcykge1xuICAgICAgICBSVENDbGllbnQudW5zdWJzY3JpYmUodHJhY2tzKTtcbiAgICB9O1xuICAgIFFOUlRDQ2xpZW50LnByb3RvdHlwZS5nZXRTdWJzY3JpYmVkVHJhY2tzID0gZnVuY3Rpb24gKHVzZXJJRCkge1xuICAgICAgICB2YXIgcmVtb3RlVHJhY2sgPSBSVENDbGllbnQuZ2V0U3Vic2NyaWJlZFRyYWNrcyh1c2VySUQpO1xuICAgICAgICByZXR1cm4gdGhpcy50cmFuc2Zvcm1SZW1vdGVSVENUcmFjayhyZW1vdGVUcmFjayk7XG4gICAgfTtcbiAgICBRTlJUQ0NsaWVudC5wcm90b3R5cGUuZ2V0TG9jYWxBdWRpb1RyYWNrU3RhdHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBSVENDbGllbnQuZ2V0TG9jYWxBdWRpb1RyYWNrU3RhdHMoKTtcbiAgICB9O1xuICAgIFFOUlRDQ2xpZW50LnByb3RvdHlwZS5nZXRMb2NhbFZpZGVvVHJhY2tTdGF0cyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIFJUQ0NsaWVudC5nZXRMb2NhbFZpZGVvVHJhY2tTdGF0cygpO1xuICAgIH07XG4gICAgUU5SVENDbGllbnQucHJvdG90eXBlLmdldFJlbW90ZUF1ZGlvVHJhY2tTdGF0cyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIFJUQ0NsaWVudC5nZXRSZW1vdGVBdWRpb1RyYWNrU3RhdHMoKTtcbiAgICB9O1xuICAgIFFOUlRDQ2xpZW50LnByb3RvdHlwZS5nZXRSZW1vdGVWaWRlb1RyYWNrU3RhdHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBSVENDbGllbnQuZ2V0UmVtb3RlVmlkZW9UcmFja1N0YXRzKCk7XG4gICAgfTtcbiAgICBRTlJUQ0NsaWVudC5wcm90b3R5cGUuZ2V0VXNlck5ldHdvcmtRdWFsaXR5ID0gZnVuY3Rpb24gKHVzZXJJRCkge1xuICAgICAgICByZXR1cm4gUlRDQ2xpZW50LmdldFVzZXJOZXR3b3JrUXVhbGl0eSh1c2VySUQpO1xuICAgIH07XG4gICAgUU5SVENDbGllbnQucHJvdG90eXBlLmdldFJlbW90ZVVzZXJzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgcmVtb3RlVXNlciA9IFJUQ0NsaWVudC5nZXRSZW1vdGVVc2VycygpO1xuICAgICAgICB2YXIgcmVzdWx0ID0gW107XG4gICAgICAgIGZvciAodmFyIF9pID0gMCwgcmVtb3RlVXNlcl8xID0gcmVtb3RlVXNlcjsgX2kgPCByZW1vdGVVc2VyXzEubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICB2YXIgaSA9IHJlbW90ZVVzZXJfMVtfaV07XG4gICAgICAgICAgICB2YXIgYXVkaW9UcmFja3MgPSB0aGlzLnRyYW5zZm9ybVJlbW90ZVJUQ1RyYWNrKGkuYXVkaW9UcmFja3MpO1xuICAgICAgICAgICAgdmFyIHZpZGVvVHJhY2tzID0gdGhpcy50cmFuc2Zvcm1SZW1vdGVSVENUcmFjayhpLnZpZGVvVHJhY2tzKTtcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHtcbiAgICAgICAgICAgICAgICB1c2VySUQ6IGkudXNlcklELFxuICAgICAgICAgICAgICAgIHZpZGVvVHJhY2tzOiB2aWRlb1RyYWNrcyxcbiAgICAgICAgICAgICAgICBhdWRpb1RyYWNrczogYXVkaW9UcmFja3MsXG4gICAgICAgICAgICAgICAgdXNlckRhdGE6IGkudXNlckRhdGFcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfTtcbiAgICBRTlJUQ0NsaWVudC5wcm90b3R5cGUuZ2V0UHVibGlzaGVkVHJhY2tzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgbG9jYWtUcmFjayA9IFJUQ0NsaWVudC5nZXRQdWJsaXNoZWRUcmFja3MoKTtcbiAgICAgICAgcmV0dXJuIHRoaXMudHJhbnNmb3JtTG9jYWxSVENUcmFjayhsb2Nha1RyYWNrKTtcbiAgICB9O1xuICAgIFFOUlRDQ2xpZW50LnByb3RvdHlwZS5zZW5kTWVzc2FnZSA9IGZ1bmN0aW9uIChtZXNzYWdlLCB1c2VycywgbWVzc2FnZUlkKSB7XG4gICAgICAgIFJUQ0NsaWVudC5zZW5kTWVzc2FnZShtZXNzYWdlLCB1c2VycywgbWVzc2FnZUlkKTtcbiAgICB9O1xuICAgIFFOUlRDQ2xpZW50LnByb3RvdHlwZS5nZXRDb25uZWN0aW9uU3RhdGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBSVENDbGllbnQuZ2V0Q29ubmVjdGlvblN0YXRlKCk7XG4gICAgfTtcbiAgICBRTlJUQ0NsaWVudC5wcm90b3R5cGUuc2V0QXV0b1N1YnNjcmliZSA9IGZ1bmN0aW9uIChhdXRvU3Vic2NyaWJlKSB7XG4gICAgICAgIFJUQ0NsaWVudC5zZXRBdXRvU3Vic2NyaWJlKGF1dG9TdWJzY3JpYmUpO1xuICAgIH07XG4gICAgUU5SVENDbGllbnQucHJvdG90eXBlLnN0YXJ0TGl2ZVN0cmVhbWluZ1dpdGhEaXJlY3QgPSBmdW5jdGlvbiAoY29uZmlnKSB7XG4gICAgICAgIFJUQ0NsaWVudC5zdGFydExpdmVTdHJlYW1pbmdXaXRoRGlyZWN0KGNvbmZpZyk7XG4gICAgfTtcbiAgICBRTlJUQ0NsaWVudC5wcm90b3R5cGUuc3RhcnRMaXZlU3RyZWFtaW5nV2l0aFRyYW5zY29kaW5nID0gZnVuY3Rpb24gKGNvbmZpZykge1xuICAgICAgICAhY29uZmlnLndhdGVybWFya3MgJiYgKGNvbmZpZy53YXRlcm1hcmtzID0gW10pO1xuICAgICAgICAhY29uZmlnLmJhY2tncm91bmQgJiYgKGNvbmZpZy5iYWNrZ3JvdW5kID0ge30pO1xuICAgICAgICBSVENDbGllbnQuc3RhcnRMaXZlU3RyZWFtaW5nV2l0aFRyYW5zY29kaW5nKGNvbmZpZyk7XG4gICAgfTtcbiAgICBRTlJUQ0NsaWVudC5wcm90b3R5cGUuc3RvcExpdmVTdHJlYW1pbmdXaXRoRGlyZWN0ID0gZnVuY3Rpb24gKGNvbmZpZykge1xuICAgICAgICBSVENDbGllbnQuc3RvcExpdmVTdHJlYW1pbmdXaXRoRGlyZWN0KGNvbmZpZyk7XG4gICAgfTtcbiAgICBRTlJUQ0NsaWVudC5wcm90b3R5cGUuc3RvcExpdmVTdHJlYW1pbmdXaXRoVHJhbnNjb2RpbmcgPSBmdW5jdGlvbiAoY29uZmlnKSB7XG4gICAgICAgIFJUQ0NsaWVudC5zdG9wTGl2ZVN0cmVhbWluZ1dpdGhUcmFuc2NvZGluZyhjb25maWcpO1xuICAgIH07XG4gICAgUU5SVENDbGllbnQucHJvdG90eXBlLnNldFRyYW5zY29kaW5nTGl2ZVN0cmVhbWluZ1RyYWNrcyA9IGZ1bmN0aW9uIChzdHJlYW1JRCwgdHJhbnNjb2RpbmdUcmFja3MpIHtcbiAgICAgICAgUlRDQ2xpZW50LnNldFRyYW5zY29kaW5nTGl2ZVN0cmVhbWluZ1RyYWNrcyhzdHJlYW1JRCwgdHJhbnNjb2RpbmdUcmFja3MpO1xuICAgIH07XG4gICAgUU5SVENDbGllbnQucHJvdG90eXBlLnJlbW92ZVRyYW5zY29kaW5nTGl2ZVN0cmVhbWluZ1RyYWNrcyA9IGZ1bmN0aW9uIChzdHJlYW1JRCwgdHJhbnNjb2RpbmdUcmFja3MpIHtcbiAgICAgICAgUlRDQ2xpZW50LnJlbW92ZVRyYW5zY29kaW5nTGl2ZVN0cmVhbWluZ1RyYWNrcyhzdHJlYW1JRCwgdHJhbnNjb2RpbmdUcmFja3MpO1xuICAgIH07XG4gICAgUU5SVENDbGllbnQucHJvdG90eXBlLnNldENsaWVudFJvbGUgPSBmdW5jdGlvbiAoY2xpZW50Um9sZSwgY2FsbGJhY2spIHtcbiAgICAgICAgUlRDQ2xpZW50LnNldENsaWVudFJvbGUoY2xpZW50Um9sZSwgY2FsbGJhY2spO1xuICAgIH07XG4gICAgUU5SVENDbGllbnQucHJvdG90eXBlLnN0YXJ0TWVkaWFSZWxheSA9IGZ1bmN0aW9uIChjb25maWd1cmF0aW9uLCBjYWxsYmFjaykge1xuICAgICAgICBSVENDbGllbnQuc3RhcnRNZWRpYVJlbGF5KGNvbmZpZ3VyYXRpb24sIGNhbGxiYWNrKTtcbiAgICB9O1xuICAgIFFOUlRDQ2xpZW50LnByb3RvdHlwZS51cGRhdGVNZWRpYVJlbGF5ID0gZnVuY3Rpb24gKGNvbmZpZ3VyYXRpb24sIGNhbGxiYWNrKSB7XG4gICAgICAgIFJUQ0NsaWVudC51cGRhdGVNZWRpYVJlbGF5KGNvbmZpZ3VyYXRpb24sIGNhbGxiYWNrKTtcbiAgICB9O1xuICAgIFFOUlRDQ2xpZW50LnByb3RvdHlwZS5zdG9wTWVkaWFSZWxheSA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgICAgICBSVENDbGllbnQuc3RvcE1lZGlhUmVsYXkoY2FsbGJhY2spO1xuICAgIH07XG4gICAgcmV0dXJuIFFOUlRDQ2xpZW50O1xufSgpKTtcbmV4cG9ydHMuUU5SVENDbGllbnQgPSBRTlJUQ0NsaWVudDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///225\n");

/***/ }),

/***/ 226:
/*!**************************************************************************************************************************!*\
  !*** /Users/tongjie/Desktop/QNRTC-Uniapp/demo/js_sdk/QNRTC-UniPlugin-JS/QNRTC-UniPlugin-JS/class/RTCRemoteVideoTrack.js ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__webpack_provided_uni_dot_requireNativePlugin) {\n\nvar __extends = this && this.__extends || function () {\n  var _extendStatics = function extendStatics(d, b) {\n    _extendStatics = Object.setPrototypeOf || {\n      __proto__: []\n    } instanceof Array && function (d, b) {\n      d.__proto__ = b;\n    } || function (d, b) {\n      for (var p in b) {\n        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];\n      }\n    };\n    return _extendStatics(d, b);\n  };\n  return function (d, b) {\n    if (typeof b !== \"function\" && b !== null) throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\n    _extendStatics(d, b);\n    function __() {\n      this.constructor = d;\n    }\n    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n  };\n}();\nvar __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {\n  function adopt(value) {\n    return value instanceof P ? value : new P(function (resolve) {\n      resolve(value);\n    });\n  }\n  return new (P || (P = Promise))(function (resolve, reject) {\n    function fulfilled(value) {\n      try {\n        step(generator.next(value));\n      } catch (e) {\n        reject(e);\n      }\n    }\n    function rejected(value) {\n      try {\n        step(generator[\"throw\"](value));\n      } catch (e) {\n        reject(e);\n      }\n    }\n    function step(result) {\n      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);\n    }\n    step((generator = generator.apply(thisArg, _arguments || [])).next());\n  });\n};\nvar __generator = this && this.__generator || function (thisArg, body) {\n  var _ = {\n      label: 0,\n      sent: function sent() {\n        if (t[0] & 1) throw t[1];\n        return t[1];\n      },\n      trys: [],\n      ops: []\n    },\n    f,\n    y,\n    t,\n    g;\n  return g = {\n    next: verb(0),\n    \"throw\": verb(1),\n    \"return\": verb(2)\n  }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function () {\n    return this;\n  }), g;\n  function verb(n) {\n    return function (v) {\n      return step([n, v]);\n    };\n  }\n  function step(op) {\n    if (f) throw new TypeError(\"Generator is already executing.\");\n    while (g && (g = 0, op[0] && (_ = 0)), _) {\n      try {\n        if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n        if (y = 0, t) op = [op[0] & 2, t.value];\n        switch (op[0]) {\n          case 0:\n          case 1:\n            t = op;\n            break;\n          case 4:\n            _.label++;\n            return {\n              value: op[1],\n              done: false\n            };\n          case 5:\n            _.label++;\n            y = op[1];\n            op = [0];\n            continue;\n          case 7:\n            op = _.ops.pop();\n            _.trys.pop();\n            continue;\n          default:\n            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {\n              _ = 0;\n              continue;\n            }\n            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {\n              _.label = op[1];\n              break;\n            }\n            if (op[0] === 6 && _.label < t[1]) {\n              _.label = t[1];\n              t = op;\n              break;\n            }\n            if (t && _.label < t[2]) {\n              _.label = t[2];\n              _.ops.push(op);\n              break;\n            }\n            if (t[2]) _.ops.pop();\n            _.trys.pop();\n            continue;\n        }\n        op = body.call(thisArg, _);\n      } catch (e) {\n        op = [6, e];\n        y = 0;\n      } finally {\n        f = t = 0;\n      }\n    }\n    if (op[0] & 5) throw op[1];\n    return {\n      value: op[0] ? op[1] : void 0,\n      done: true\n    };\n  }\n};\nexports.__esModule = true;\nexports.QNRemoteVideoTrack = void 0;\nvar RTCRemoteTrack_1 = __webpack_require__(/*! ./RTCRemoteTrack */ 227);\nvar QNRtcTrack = __webpack_provided_uni_dot_requireNativePlugin('QNRTC-UniPlugin-QNRtcTrack');\nvar QNEvent = __webpack_provided_uni_dot_requireNativePlugin('globalEvent');\nvar QNRemoteVideoTrack = function (_super) {\n  __extends(QNRemoteVideoTrack, _super);\n  function QNRemoteVideoTrack() {\n    return _super !== null && _super.apply(this, arguments) || this;\n  }\n  QNRemoteVideoTrack.prototype.setProfile = function (profile) {\n    return QNRtcTrack.setProfile(this.identifyID, profile);\n  };\n  QNRemoteVideoTrack.prototype.isMultiProfileEnabled = function () {\n    return QNRtcTrack.isMultiProfileEnabled(this.identifyID);\n  };\n  QNRemoteVideoTrack.prototype.getProfile = function () {\n    return QNRtcTrack.getProfile(this.identifyID);\n  };\n  QNRemoteVideoTrack.prototype.takeVideoSnapshot = function () {\n    return __awaiter(this, void 0, void 0, function () {\n      var platform;\n      var _this = this;\n      return __generator(this, function (_a) {\n        platform = uni.getSystemInfoSync().platform;\n        if (platform === 'ios') {\n          return [2, new Promise(function (resolve, reject) {\n            QNRtcTrack.takeVideoSnapshot(_this.identifyID);\n            var listener = function listener(param) {\n              QNEvent.removeEventListener('onLocalVideoFrame', listener);\n              resolve({\n                base64: _this.trimBase64(param.data)\n              });\n            };\n            QNEvent.addEventListener('onLocalVideoFrame', listener);\n            setTimeout(function () {\n              QNEvent.removeEventListener('onLocalVideoFrame', listener);\n              reject();\n            }, 5000);\n          })];\n        } else if (platform === 'android') {\n          return [2, new Promise(function (resolve, reject) {\n            QNRtcTrack.takeVideoSnapshot(_this.trackID, function (data) {\n              resolve(data);\n            });\n          })];\n        }\n        return [2];\n      });\n    });\n  };\n  QNRemoteVideoTrack.prototype.trimBase64 = function (base64) {\n    if (!base64) {\n      return '';\n    }\n    return base64.replace(/\\r|\\n/g, '');\n  };\n  return QNRemoteVideoTrack;\n}(RTCRemoteTrack_1.QNRemoteTrack);\nexports.QNRemoteVideoTrack = QNRemoteVideoTrack;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/uni-app-plus-nvue/dist/require-native-plugin.js */ 54)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vanNfc2RrL1FOUlRDLVVuaVBsdWdpbi1KUy9RTlJUQy1VbmlQbHVnaW4tSlMvY2xhc3MvUlRDUmVtb3RlVmlkZW9UcmFjay5qcyJdLCJuYW1lcyI6WyJfX2V4dGVuZHMiLCJleHRlbmRTdGF0aWNzIiwiZCIsImIiLCJPYmplY3QiLCJzZXRQcm90b3R5cGVPZiIsIl9fcHJvdG9fXyIsIkFycmF5IiwicCIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsIlR5cGVFcnJvciIsIlN0cmluZyIsIl9fIiwiY29uc3RydWN0b3IiLCJjcmVhdGUiLCJfX2F3YWl0ZXIiLCJ0aGlzQXJnIiwiX2FyZ3VtZW50cyIsIlAiLCJnZW5lcmF0b3IiLCJhZG9wdCIsInZhbHVlIiwicmVzb2x2ZSIsIlByb21pc2UiLCJyZWplY3QiLCJmdWxmaWxsZWQiLCJzdGVwIiwibmV4dCIsImUiLCJyZWplY3RlZCIsInJlc3VsdCIsImRvbmUiLCJ0aGVuIiwiYXBwbHkiLCJfX2dlbmVyYXRvciIsImJvZHkiLCJfIiwibGFiZWwiLCJzZW50IiwidCIsInRyeXMiLCJvcHMiLCJmIiwieSIsImciLCJ2ZXJiIiwiU3ltYm9sIiwiaXRlcmF0b3IiLCJuIiwidiIsIm9wIiwicG9wIiwibGVuZ3RoIiwicHVzaCIsImV4cG9ydHMiLCJfX2VzTW9kdWxlIiwiUU5SZW1vdGVWaWRlb1RyYWNrIiwiUlRDUmVtb3RlVHJhY2tfMSIsInJlcXVpcmUiLCJRTlJ0Y1RyYWNrIiwidW5pIiwiUU5FdmVudCIsIl9zdXBlciIsImFyZ3VtZW50cyIsInNldFByb2ZpbGUiLCJwcm9maWxlIiwiaWRlbnRpZnlJRCIsImlzTXVsdGlQcm9maWxlRW5hYmxlZCIsImdldFByb2ZpbGUiLCJ0YWtlVmlkZW9TbmFwc2hvdCIsInBsYXRmb3JtIiwiX3RoaXMiLCJfYSIsImdldFN5c3RlbUluZm9TeW5jIiwibGlzdGVuZXIiLCJwYXJhbSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJiYXNlNjQiLCJ0cmltQmFzZTY0IiwiZGF0YSIsImFkZEV2ZW50TGlzdGVuZXIiLCJzZXRUaW1lb3V0IiwidHJhY2tJRCIsInJlcGxhY2UiLCJRTlJlbW90ZVRyYWNrIl0sIm1hcHBpbmdzIjoiQUFBQSxzRkFBYTs7QUFDYixJQUFJQSxTQUFTLEdBQUksSUFBSSxJQUFJLElBQUksQ0FBQ0EsU0FBUyxJQUFNLFlBQVk7RUFDckQsSUFBSUMsY0FBYSxHQUFHLHVCQUFVQyxDQUFDLEVBQUVDLENBQUMsRUFBRTtJQUNoQ0YsY0FBYSxHQUFHRyxNQUFNLENBQUNDLGNBQWMsSUFDaEM7TUFBRUMsU0FBUyxFQUFFO0lBQUcsQ0FBQyxZQUFZQyxLQUFLLElBQUksVUFBVUwsQ0FBQyxFQUFFQyxDQUFDLEVBQUU7TUFBRUQsQ0FBQyxDQUFDSSxTQUFTLEdBQUdILENBQUM7SUFBRSxDQUFFLElBQzVFLFVBQVVELENBQUMsRUFBRUMsQ0FBQyxFQUFFO01BQUUsS0FBSyxJQUFJSyxDQUFDLElBQUlMLENBQUM7UUFBRSxJQUFJQyxNQUFNLENBQUNLLFNBQVMsQ0FBQ0MsY0FBYyxDQUFDQyxJQUFJLENBQUNSLENBQUMsRUFBRUssQ0FBQyxDQUFDLEVBQUVOLENBQUMsQ0FBQ00sQ0FBQyxDQUFDLEdBQUdMLENBQUMsQ0FBQ0ssQ0FBQyxDQUFDO01BQUM7SUFBQyxDQUFDO0lBQ3JHLE9BQU9QLGNBQWEsQ0FBQ0MsQ0FBQyxFQUFFQyxDQUFDLENBQUM7RUFDOUIsQ0FBQztFQUNELE9BQU8sVUFBVUQsQ0FBQyxFQUFFQyxDQUFDLEVBQUU7SUFDbkIsSUFBSSxPQUFPQSxDQUFDLEtBQUssVUFBVSxJQUFJQSxDQUFDLEtBQUssSUFBSSxFQUNyQyxNQUFNLElBQUlTLFNBQVMsQ0FBQyxzQkFBc0IsR0FBR0MsTUFBTSxDQUFDVixDQUFDLENBQUMsR0FBRywrQkFBK0IsQ0FBQztJQUM3RkYsY0FBYSxDQUFDQyxDQUFDLEVBQUVDLENBQUMsQ0FBQztJQUNuQixTQUFTVyxFQUFFLEdBQUc7TUFBRSxJQUFJLENBQUNDLFdBQVcsR0FBR2IsQ0FBQztJ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QUM7TUFDZCxDQUFDLENBQUM7SUFDTixDQUFDLENBQUM7RUFDTixDQUFDO0VBQ0R2QixrQkFBa0IsQ0FBQ2pELFNBQVMsQ0FBQ3VFLFVBQVUsR0FBRyxVQUFVRCxNQUFNLEVBQUU7SUFDeEQsSUFBSSxDQUFDQSxNQUFNLEVBQUU7TUFDVCxPQUFPLEVBQUU7SUFDYjtJQUNBLE9BQU9BLE1BQU0sQ0FBQ00sT0FBTyxDQUFDLFFBQVEsRUFBRSxFQUFFLENBQUM7RUFDdkMsQ0FBQztFQUNELE9BQU8zQixrQkFBa0I7QUFDN0IsQ0FBQyxDQUFDQyxnQkFBZ0IsQ0FBQzJCLGFBQWEsQ0FBRTtBQUNsQzlCLE9BQU8sQ0FBQ0Usa0JBQWtCLEdBQUdBLGtCQUFrQixDIiwiZmlsZSI6IjIyNi5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBiICE9PSBcImZ1bmN0aW9uXCIgJiYgYiAhPT0gbnVsbClcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDbGFzcyBleHRlbmRzIHZhbHVlIFwiICsgU3RyaW5nKGIpICsgXCIgaXMgbm90IGEgY29uc3RydWN0b3Igb3IgbnVsbFwiKTtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xudmFyIF9fZ2VuZXJhdG9yID0gKHRoaXMgJiYgdGhpcy5fX2dlbmVyYXRvcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIGJvZHkpIHtcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xuICAgICAgICB3aGlsZSAoZyAmJiAoZyA9IDAsIG9wWzBdICYmIChfID0gMCkpLCBfKSB0cnkge1xuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XG4gICAgfVxufTtcbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLlFOUmVtb3RlVmlkZW9UcmFjayA9IHZvaWQgMDtcbnZhciBSVENSZW1vdGVUcmFja18xID0gcmVxdWlyZShcIi4vUlRDUmVtb3RlVHJhY2tcIik7XG52YXIgUU5SdGNUcmFjayA9IHVuaS5yZXF1aXJlTmF0aXZlUGx1Z2luKCdRTlJUQy1VbmlQbHVnaW4tUU5SdGNUcmFjaycpO1xudmFyIFFORXZlbnQgPSB1bmkucmVxdWlyZU5hdGl2ZVBsdWdpbignZ2xvYmFsRXZlbnQnKTtcbnZhciBRTlJlbW90ZVZpZGVvVHJhY2sgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhRTlJlbW90ZVZpZGVvVHJhY2ssIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gUU5SZW1vdGVWaWRlb1RyYWNrKCkge1xuICAgICAgICByZXR1cm4gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gICAgfVxuICAgIFFOUmVtb3RlVmlkZW9UcmFjay5wcm90b3R5cGUuc2V0UHJvZmlsZSA9IGZ1bmN0aW9uIChwcm9maWxlKSB7XG4gICAgICAgIHJldHVybiBRTlJ0Y1RyYWNrLnNldFByb2ZpbGUodGhpcy5pZGVudGlmeUlELCBwcm9maWxlKTtcbiAgICB9O1xuICAgIFFOUmVtb3RlVmlkZW9UcmFjay5wcm90b3R5cGUuaXNNdWx0aVByb2ZpbGVFbmFibGVkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gUU5SdGNUcmFjay5pc011bHRpUHJvZmlsZUVuYWJsZWQodGhpcy5pZGVudGlmeUlEKTtcbiAgICB9O1xuICAgIFFOUmVtb3RlVmlkZW9UcmFjay5wcm90b3R5cGUuZ2V0UHJvZmlsZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIFFOUnRjVHJhY2suZ2V0UHJvZmlsZSh0aGlzLmlkZW50aWZ5SUQpO1xuICAgIH07XG4gICAgUU5SZW1vdGVWaWRlb1RyYWNrLnByb3RvdHlwZS50YWtlVmlkZW9TbmFwc2hvdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIHBsYXRmb3JtO1xuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICBwbGF0Zm9ybSA9IHVuaS5nZXRTeXN0ZW1JbmZvU3luYygpLnBsYXRmb3JtO1xuICAgICAgICAgICAgICAgIGlmIChwbGF0Zm9ybSA9PT0gJ2lvcycpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyLCBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUU5SdGNUcmFjay50YWtlVmlkZW9TbmFwc2hvdChfdGhpcy5pZGVudGlmeUlEKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbGlzdGVuZXIgPSBmdW5jdGlvbiAocGFyYW0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUU5FdmVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdvbkxvY2FsVmlkZW9GcmFtZScsIGxpc3RlbmVyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh7IGJhc2U2NDogX3RoaXMudHJpbUJhc2U2NChwYXJhbS5kYXRhKSB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFFORXZlbnQuYWRkRXZlbnRMaXN0ZW5lcignb25Mb2NhbFZpZGVvRnJhbWUnLCBsaXN0ZW5lcik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFFORXZlbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignb25Mb2NhbFZpZGVvRnJhbWUnLCBsaXN0ZW5lcik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIDUwMDApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChwbGF0Zm9ybSA9PT0gJ2FuZHJvaWQnKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiwgbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFFOUnRjVHJhY2sudGFrZVZpZGVvU25hcHNob3QoX3RoaXMudHJhY2tJRCwgZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShkYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIFsyXTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIFFOUmVtb3RlVmlkZW9UcmFjay5wcm90b3R5cGUudHJpbUJhc2U2NCA9IGZ1bmN0aW9uIChiYXNlNjQpIHtcbiAgICAgICAgaWYgKCFiYXNlNjQpIHtcbiAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYmFzZTY0LnJlcGxhY2UoL1xccnxcXG4vZywgJycpO1xuICAgIH07XG4gICAgcmV0dXJuIFFOUmVtb3RlVmlkZW9UcmFjaztcbn0oUlRDUmVtb3RlVHJhY2tfMS5RTlJlbW90ZVRyYWNrKSk7XG5leHBvcnRzLlFOUmVtb3RlVmlkZW9UcmFjayA9IFFOUmVtb3RlVmlkZW9UcmFjaztcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///226\n");

/***/ }),

/***/ 227:
/*!*********************************************************************************************************************!*\
  !*** /Users/tongjie/Desktop/QNRTC-Uniapp/demo/js_sdk/QNRTC-UniPlugin-JS/QNRTC-UniPlugin-JS/class/RTCRemoteTrack.js ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__webpack_provided_uni_dot_requireNativePlugin) {\n\nvar __extends = this && this.__extends || function () {\n  var _extendStatics = function extendStatics(d, b) {\n    _extendStatics = Object.setPrototypeOf || {\n      __proto__: []\n    } instanceof Array && function (d, b) {\n      d.__proto__ = b;\n    } || function (d, b) {\n      for (var p in b) {\n        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];\n      }\n    };\n    return _extendStatics(d, b);\n  };\n  return function (d, b) {\n    if (typeof b !== \"function\" && b !== null) throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\n    _extendStatics(d, b);\n    function __() {\n      this.constructor = d;\n    }\n    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n  };\n}();\nexports.__esModule = true;\nexports.QNRemoteTrack = void 0;\nvar RTCTrack_1 = __webpack_require__(/*! ./RTCTrack */ 228);\nvar QNRtcTrack = __webpack_provided_uni_dot_requireNativePlugin('QNRTC-UniPlugin-QNRtcTrack');\nvar QNRemoteTrack = function (_super) {\n  __extends(QNRemoteTrack, _super);\n  function QNRemoteTrack() {\n    return _super !== null && _super.apply(this, arguments) || this;\n  }\n  QNRemoteTrack.prototype.isSubscribed = function () {\n    return QNRtcTrack.isSubscribed(this.identifyID);\n  };\n  return QNRemoteTrack;\n}(RTCTrack_1.QNTrack);\nexports.QNRemoteTrack = QNRemoteTrack;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/uni-app-plus-nvue/dist/require-native-plugin.js */ 54)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vanNfc2RrL1FOUlRDLVVuaVBsdWdpbi1KUy9RTlJUQy1VbmlQbHVnaW4tSlMvY2xhc3MvUlRDUmVtb3RlVHJhY2suanMiXSwibmFtZXMiOlsiX19leHRlbmRzIiwiZXh0ZW5kU3RhdGljcyIsImQiLCJiIiwiT2JqZWN0Iiwic2V0UHJvdG90eXBlT2YiLCJfX3Byb3RvX18iLCJBcnJheSIsInAiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJUeXBlRXJyb3IiLCJTdHJpbmciLCJfXyIsImNvbnN0cnVjdG9yIiwiY3JlYXRlIiwiZXhwb3J0cyIsIl9fZXNNb2R1bGUiLCJRTlJlbW90ZVRyYWNrIiwiUlRDVHJhY2tfMSIsInJlcXVpcmUiLCJRTlJ0Y1RyYWNrIiwidW5pIiwiX3N1cGVyIiwiYXBwbHkiLCJhcmd1bWVudHMiLCJpc1N1YnNjcmliZWQiLCJpZGVudGlmeUlEIiwiUU5UcmFjayJdLCJtYXBwaW5ncyI6IkFBQUEsc0ZBQWE7O0FBQ2IsSUFBSUEsU0FBUyxHQUFJLElBQUksSUFBSSxJQUFJLENBQUNBLFNBQVMsSUFBTSxZQUFZO0VBQ3JELElBQUlDLGNBQWEsR0FBRyx1QkFBVUMsQ0FBQyxFQUFFQyxDQUFDLEVBQUU7SUFDaENGLGNBQWEsR0FBR0csTUFBTSxDQUFDQyxjQUFjLElBQ2hDO01BQUVDLFNBQVMsRUFBRTtJQUFHLENBQUMsWUFBWUMsS0FBSyxJQUFJLFVBQVVMLENBQUMsRUFBRUMsQ0FBQyxFQUFFO01BQUVELENBQUMsQ0FBQ0ksU0FBUyxHQUFHSCxDQUFDO0lBQUUsQ0FBRSxJQUM1RSxVQUFVRCxDQUFDLEVBQUVDLENBQUMsRUFBRTtNQUFFLEtBQUssSUFBSUssQ0FBQyxJQUFJTCxDQUFDO1FBQUUsSUFBSUMsTUFBTSxDQUFDSyxTQUFTLENBQUNDLGNBQWMsQ0FBQ0MsSUFBSSxDQUFDUixDQUFDLEVBQUVLLENBQUMsQ0FBQyxFQUFFTixDQUFDLENBQUNNLENBQUMsQ0FBQyxHQUFHTCxDQUFDLENBQUNLLENBQUMsQ0FBQztNQUFDO0lBQUMsQ0FBQztJQUNyRyxPQUFPUCxjQUFhLENBQUNDLENBQUMsRUFBRUMsQ0FBQyxDQUFDO0VBQzlCLENBQUM7RUFDRCxPQUFPLFVBQVVELENBQUMsRUFBRUMsQ0FBQyxFQUFFO0lBQ25CLElBQUksT0FBT0EsQ0FBQyxLQUFLLFVBQVUsSUFBSUEsQ0FBQyxLQUFLLElBQUksRUFDckMsTUFBTSxJQUFJUyxTQUFTLENBQUMsc0JBQXNCLEdBQUdDLE1BQU0sQ0FBQ1YsQ0FBQyxDQUFDLEdBQUcsK0JBQStCLENBQUM7SUFDN0ZGLGNBQWEsQ0FBQ0MsQ0FBQyxFQUFFQyxDQUFDLENBQUM7SUFDbkIsU0FBU1csRUFBRSxHQUFHO01BQUUsSUFBSSxDQUFDQyxXQUFXLEdBQUdiLENBQUM7SUFBRTtJQUN0Q0EsQ0FBQyxDQUFDTyxTQUFTLEdBQUdOLENBQUMsS0FBSyxJQUFJLEdBQUdDLE1BQU0sQ0FBQ1ksTUFBTSxDQUFDYixDQUFDLENBQUMsSUFBSVcsRUFBRSxDQUFDTCxTQUFTLEdBQUdOLENBQUMsQ0FBQ00sU0FBUyxFQUFFLElBQUlLLEVBQUUsRUFBRSxDQUFDO0VBQ3hGLENBQUM7QUFDTCxDQUFDLEVBQUc7QUFDSkcsT0FBTyxDQUFDQyxVQUFVLEdBQUcsSUFBSTtBQUN6QkQsT0FBTyxDQUFDRSxhQUFhLEdBQUcsS0FBSyxDQUFDO0FBQzlCLElBQUlDLFVBQVUsR0FBR0MsbUJBQU8sQ0FBQyxxQkFBWSxDQUFDO0FBQ3RDLElBQUlDLFVBQVUsR0FBR0MsOENBQXVCLENBQUMsNEJBQTRCLENBQUM7QUFDdEUsSUFBSUosYUFBYSxHQUFJLFVBQVVLLE1BQU0sRUFBRTtFQUNuQ3hCLFNBQVMsQ0FBQ21CLGFBQWEsRUFBRUssTUFBTSxDQUFDO0VBQ2hDLFNBQVNMLGFBQWEsR0FBRztJQUNyQixPQUFPSyxNQUFNLEtBQUssSUFBSSxJQUFJQSxNQUFNLENBQUNDLEtBQUssQ0FBQyxJQUFJLEVBQUVDLFNBQVMsQ0FBQyxJQUFJLElBQUk7RUFDbkU7RUFDQVAsYUFBYSxDQUFDVixTQUFTLENBQUNrQixZQUFZLEdBQUcsWUFBWTtJQUMvQyxPQUFPTCxVQUFVLENBQUNLLFlBQVksQ0FBQyxJQUFJLENBQUNDLFVBQVUsQ0FBQztFQUNuRCxDQUFDO0VBQ0QsT0FBT1QsYUFBYTtBQUN4QixDQUFDLENBQUNDLFVBQVUsQ0FBQ1MsT0FBTyxDQUFFO0FBQ3RCWixPQUFPLENBQUNFLGFBQWEsR0FBR0EsYUFBYSxDIiwiZmlsZSI6IjIyNy5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBiICE9PSBcImZ1bmN0aW9uXCIgJiYgYiAhPT0gbnVsbClcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDbGFzcyBleHRlbmRzIHZhbHVlIFwiICsgU3RyaW5nKGIpICsgXCIgaXMgbm90IGEgY29uc3RydWN0b3Igb3IgbnVsbFwiKTtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLlFOUmVtb3RlVHJhY2sgPSB2b2lkIDA7XG52YXIgUlRDVHJhY2tfMSA9IHJlcXVpcmUoXCIuL1JUQ1RyYWNrXCIpO1xudmFyIFFOUnRjVHJhY2sgPSB1bmkucmVxdWlyZU5hdGl2ZVBsdWdpbignUU5SVEMtVW5pUGx1Z2luLVFOUnRjVHJhY2snKTtcbnZhciBRTlJlbW90ZVRyYWNrID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoUU5SZW1vdGVUcmFjaywgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBRTlJlbW90ZVRyYWNrKCkge1xuICAgICAgICByZXR1cm4gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gICAgfVxuICAgIFFOUmVtb3RlVHJhY2sucHJvdG90eXBlLmlzU3Vic2NyaWJlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIFFOUnRjVHJhY2suaXNTdWJzY3JpYmVkKHRoaXMuaWRlbnRpZnlJRCk7XG4gICAgfTtcbiAgICByZXR1cm4gUU5SZW1vdGVUcmFjaztcbn0oUlRDVHJhY2tfMS5RTlRyYWNrKSk7XG5leHBvcnRzLlFOUmVtb3RlVHJhY2sgPSBRTlJlbW90ZVRyYWNrO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///227\n");

/***/ }),

/***/ 228:
/*!***************************************************************************************************************!*\
  !*** /Users/tongjie/Desktop/QNRTC-Uniapp/demo/js_sdk/QNRTC-UniPlugin-JS/QNRTC-UniPlugin-JS/class/RTCTrack.js ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__webpack_provided_uni_dot_requireNativePlugin) {\n\nvar __rest = this && this.__rest || function (s, e) {\n  var t = {};\n  for (var p in s) {\n    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];\n  }\n  if (s != null && typeof Object.getOwnPropertySymbols === \"function\") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {\n    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];\n  }\n  return t;\n};\nexports.__esModule = true;\nexports.QNTrack = void 0;\nvar RTCEnum_1 = __webpack_require__(/*! ../enum/RTCEnum */ 224);\nvar QNRtcTrack = __webpack_provided_uni_dot_requireNativePlugin('QNRTC-UniPlugin-QNRtcTrack');\nvar QNEvent = __webpack_provided_uni_dot_requireNativePlugin('globalEvent');\nvar QNTrack = function () {\n  function QNTrack(_a) {\n    var identifyID = _a.identifyID,\n      kind = _a.kind,\n      tag = _a.tag,\n      trackID = _a.trackID,\n      raw = _a.raw,\n      userID = _a.userID;\n    this.getMuted = this.isMuted;\n    this.identifyID = identifyID;\n    this.kind = kind;\n    this.tag = tag;\n    this.trackID = trackID;\n    this.raw = raw;\n    this.userID = userID;\n  }\n  QNTrack.prototype.on = function (name, listener) {\n    var _this = this;\n    var _listener = function _listener(params) {\n      var trackID = params.trackID,\n        arguv = __rest(params, [\"trackID\"]);\n      if (trackID && trackID === _this.trackID) {\n        listener(arguv);\n      }\n    };\n    QNEvent.addEventListener(name, _listener);\n  };\n  QNTrack.prototype.off = function (name, listener) {\n    QNEvent.removeEventListener(name, listener);\n  };\n  QNTrack.prototype.getTrackID = function () {\n    return this.trackID;\n  };\n  QNTrack.prototype.getUserID = function () {\n    return this.userID;\n  };\n  QNTrack.prototype.getTag = function () {\n    return this.tag;\n  };\n  QNTrack.prototype.isAudio = function () {\n    return this.kind === RTCEnum_1.QNRTCTrackKind.audio;\n  };\n  QNTrack.prototype.isVideo = function () {\n    return this.kind === RTCEnum_1.QNRTCTrackKind.video;\n  };\n  QNTrack.prototype.isMuted = function () {\n    return QNRtcTrack.getMuted(this.identifyID);\n  };\n  return QNTrack;\n}();\nexports.QNTrack = QNTrack;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/uni-app-plus-nvue/dist/require-native-plugin.js */ 54)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vanNfc2RrL1FOUlRDLVVuaVBsdWdpbi1KUy9RTlJUQy1VbmlQbHVnaW4tSlMvY2xhc3MvUlRDVHJhY2suanMiXSwibmFtZXMiOlsiX19yZXN0IiwicyIsImUiLCJ0IiwicCIsIk9iamVjdCIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsImluZGV4T2YiLCJnZXRPd25Qcm9wZXJ0eVN5bWJvbHMiLCJpIiwibGVuZ3RoIiwicHJvcGVydHlJc0VudW1lcmFibGUiLCJleHBvcnRzIiwiX19lc01vZHVsZSIsIlFOVHJhY2siLCJSVENFbnVtXzEiLCJyZXF1aXJlIiwiUU5SdGNUcmFjayIsInVuaSIsIlFORXZlbnQiLCJfYSIsImlkZW50aWZ5SUQiLCJraW5kIiwidGFnIiwidHJhY2tJRCIsInJhdyIsInVzZXJJRCIsImdldE11dGVkIiwiaXNNdXRlZCIsIm9uIiwibmFtZSIsImxpc3RlbmVyIiwiX3RoaXMiLCJfbGlzdGVuZXIiLCJwYXJhbXMiLCJhcmd1diIsImFkZEV2ZW50TGlzdGVuZXIiLCJvZmYiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiZ2V0VHJhY2tJRCIsImdldFVzZXJJRCIsImdldFRhZyIsImlzQXVkaW8iLCJRTlJUQ1RyYWNrS2luZCIsImF1ZGlvIiwiaXNWaWRlbyIsInZpZGVvIl0sIm1hcHBpbmdzIjoiQUFBQSxzRkFBYTs7QUFDYixJQUFJQSxNQUFNLEdBQUksSUFBSSxJQUFJLElBQUksQ0FBQ0EsTUFBTSxJQUFLLFVBQVVDLENBQUMsRUFBRUMsQ0FBQyxFQUFFO0VBQ2xELElBQUlDLENBQUMsR0FBRyxDQUFDLENBQUM7RUFDVixLQUFLLElBQUlDLENBQUMsSUFBSUgsQ0FBQztJQUFFLElBQUlJLE1BQU0sQ0FBQ0MsU0FBUyxDQUFDQyxjQUFjLENBQUNDLElBQUksQ0FBQ1AsQ0FBQyxFQUFFRyxDQUFDLENBQUMsSUFBSUYsQ0FBQyxDQUFDTyxPQUFPLENBQUNMLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFD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TyxDQUFDVixTQUFTLENBQUNtQyxVQUFVLEdBQUcsWUFBWTtJQUN2QyxPQUFPLElBQUksQ0FBQ2YsT0FBTztFQUN2QixDQUFDO0VBQ0RWLE9BQU8sQ0FBQ1YsU0FBUyxDQUFDb0MsU0FBUyxHQUFHLFlBQVk7SUFDdEMsT0FBTyxJQUFJLENBQUNkLE1BQU07RUFDdEIsQ0FBQztFQUNEWixPQUFPLENBQUNWLFNBQVMsQ0FBQ3FDLE1BQU0sR0FBRyxZQUFZO0lBQ25DLE9BQU8sSUFBSSxDQUFDbEIsR0FBRztFQUNuQixDQUFDO0VBQ0RULE9BQU8sQ0FBQ1YsU0FBUyxDQUFDc0MsT0FBTyxHQUFHLFlBQVk7SUFDcEMsT0FBTyxJQUFJLENBQUNwQixJQUFJLEtBQUtQLFNBQVMsQ0FBQzRCLGNBQWMsQ0FBQ0MsS0FBSztFQUN2RCxDQUFDO0VBQ0Q5QixPQUFPLENBQUNWLFNBQVMsQ0FBQ3lDLE9BQU8sR0FBRyxZQUFZO0lBQ3BDLE9BQU8sSUFBSSxDQUFDdkIsSUFBSSxLQUFLUCxTQUFTLENBQUM0QixjQUFjLENBQUNHLEtBQUs7RUFDdkQsQ0FBQztFQUNEaEMsT0FBTyxDQUFDVixTQUFTLENBQUN3QixPQUFPLEdBQUcsWUFBWTtJQUNwQyxPQUFPWCxVQUFVLENBQUNVLFFBQVEsQ0FBQyxJQUFJLENBQUNOLFVBQVUsQ0FBQztFQUMvQyxDQUFDO0VBQ0QsT0FBT1AsT0FBTztBQUNsQixDQUFDLEVBQUc7QUFDSkYsT0FBTyxDQUFDRSxPQUFPLEdBQUdBLE9BQU8sQyIsImZpbGUiOiIyMjguanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbnZhciBfX3Jlc3QgPSAodGhpcyAmJiB0aGlzLl9fcmVzdCkgfHwgZnVuY3Rpb24gKHMsIGUpIHtcbiAgICB2YXIgdCA9IHt9O1xuICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKVxuICAgICAgICB0W3BdID0gc1twXTtcbiAgICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChlLmluZGV4T2YocFtpXSkgPCAwICYmIE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzLCBwW2ldKSlcbiAgICAgICAgICAgICAgICB0W3BbaV1dID0gc1twW2ldXTtcbiAgICAgICAgfVxuICAgIHJldHVybiB0O1xufTtcbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLlFOVHJhY2sgPSB2b2lkIDA7XG52YXIgUlRDRW51bV8xID0gcmVxdWlyZShcIi4uL2VudW0vUlRDRW51bVwiKTtcbnZhciBRTlJ0Y1RyYWNrID0gdW5pLnJlcXVpcmVOYXRpdmVQbHVnaW4oJ1FOUlRDLVVuaVBsdWdpbi1RTlJ0Y1RyYWNrJyk7XG52YXIgUU5FdmVudCA9IHVuaS5yZXF1aXJlTmF0aXZlUGx1Z2luKCdnbG9iYWxFdmVudCcpO1xudmFyIFFOVHJhY2sgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFFOVHJhY2soX2EpIHtcbiAgICAgICAgdmFyIGlkZW50aWZ5SUQgPSBfYS5pZGVudGlmeUlELCBraW5kID0gX2Eua2luZCwgdGFnID0gX2EudGFnLCB0cmFja0lEID0gX2EudHJhY2tJRCwgcmF3ID0gX2EucmF3LCB1c2VySUQgPSBfYS51c2VySUQ7XG4gICAgICAgIHRoaXMuZ2V0TXV0ZWQgPSB0aGlzLmlzTXV0ZWQ7XG4gICAgICAgIHRoaXMuaWRlbnRpZnlJRCA9IGlkZW50aWZ5SUQ7XG4gICAgICAgIHRoaXMua2luZCA9IGtpbmQ7XG4gICAgICAgIHRoaXMudGFnID0gdGFnO1xuICAgICAgICB0aGlzLnRyYWNrSUQgPSB0cmFja0lEO1xuICAgICAgICB0aGlzLnJhdyA9IHJhdztcbiAgICAgICAgdGhpcy51c2VySUQgPSB1c2VySUQ7XG4gICAgfVxuICAgIFFOVHJhY2sucHJvdG90eXBlLm9uID0gZnVuY3Rpb24gKG5hbWUsIGxpc3RlbmVyKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciBfbGlzdGVuZXIgPSBmdW5jdGlvbiAocGFyYW1zKSB7XG4gICAgICAgICAgICB2YXIgdHJhY2tJRCA9IHBhcmFtcy50cmFja0lELCBhcmd1diA9IF9fcmVzdChwYXJhbXMsIFtcInRyYWNrSURcIl0pO1xuICAgICAgICAgICAgaWYgKHRyYWNrSUQgJiYgdHJhY2tJRCA9PT0gX3RoaXMudHJhY2tJRCkge1xuICAgICAgICAgICAgICAgIGxpc3RlbmVyKGFyZ3V2KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgUU5FdmVudC5hZGRFdmVudExpc3RlbmVyKG5hbWUsIF9saXN0ZW5lcik7XG4gICAgfTtcbiAgICBRTlRyYWNrLnByb3RvdHlwZS5vZmYgPSBmdW5jdGlvbiAobmFtZSwgbGlzdGVuZXIpIHtcbiAgICAgICAgUU5FdmVudC5yZW1vdmVFdmVudExpc3RlbmVyKG5hbWUsIGxpc3RlbmVyKTtcbiAgICB9O1xuICAgIFFOVHJhY2sucHJvdG90eXBlLmdldFRyYWNrSUQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRyYWNrSUQ7XG4gICAgfTtcbiAgICBRTlRyYWNrLnByb3RvdHlwZS5nZXRVc2VySUQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnVzZXJJRDtcbiAgICB9O1xuICAgIFFOVHJhY2sucHJvdG90eXBlLmdldFRhZyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudGFnO1xuICAgIH07XG4gICAgUU5UcmFjay5wcm90b3R5cGUuaXNBdWRpbyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMua2luZCA9PT0gUlRDRW51bV8xLlFOUlRDVHJhY2tLaW5kLmF1ZGlvO1xuICAgIH07XG4gICAgUU5UcmFjay5wcm90b3R5cGUuaXNWaWRlbyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMua2luZCA9PT0gUlRDRW51bV8xLlFOUlRDVHJhY2tLaW5kLnZpZGVvO1xuICAgIH07XG4gICAgUU5UcmFjay5wcm90b3R5cGUuaXNNdXRlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIFFOUnRjVHJhY2suZ2V0TXV0ZWQodGhpcy5pZGVudGlmeUlEKTtcbiAgICB9O1xuICAgIHJldHVybiBRTlRyYWNrO1xufSgpKTtcbmV4cG9ydHMuUU5UcmFjayA9IFFOVHJhY2s7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///228\n");

/***/ }),

/***/ 229:
/*!**************************************************************************************************************************!*\
  !*** /Users/tongjie/Desktop/QNRTC-Uniapp/demo/js_sdk/QNRTC-UniPlugin-JS/QNRTC-UniPlugin-JS/class/RTCRemoteAudioTrack.js ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__webpack_provided_uni_dot_requireNativePlugin) {\n\nvar __extends = this && this.__extends || function () {\n  var _extendStatics = function extendStatics(d, b) {\n    _extendStatics = Object.setPrototypeOf || {\n      __proto__: []\n    } instanceof Array && function (d, b) {\n      d.__proto__ = b;\n    } || function (d, b) {\n      for (var p in b) {\n        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];\n      }\n    };\n    return _extendStatics(d, b);\n  };\n  return function (d, b) {\n    if (typeof b !== \"function\" && b !== null) throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\n    _extendStatics(d, b);\n    function __() {\n      this.constructor = d;\n    }\n    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n  };\n}();\nexports.__esModule = true;\nexports.QNRemoteAudioTrack = void 0;\nvar RTCRemoteTrack_1 = __webpack_require__(/*! ./RTCRemoteTrack */ 227);\nvar QNRtcTrack = __webpack_provided_uni_dot_requireNativePlugin('QNRTC-UniPlugin-QNRtcTrack');\nvar QNRemoteAudioTrack = function (_super) {\n  __extends(QNRemoteAudioTrack, _super);\n  function QNRemoteAudioTrack() {\n    return _super !== null && _super.apply(this, arguments) || this;\n  }\n  QNRemoteAudioTrack.prototype.setRemoteVolume = function (volume) {\n    return QNRtcTrack.setRemoteVolume(this.identifyID, volume);\n  };\n  QNRemoteAudioTrack.prototype.getRemoteVolume = function () {\n    return QNRtcTrack.getRemoteVolume(this.identifyID);\n  };\n  return QNRemoteAudioTrack;\n}(RTCRemoteTrack_1.QNRemoteTrack);\nexports.QNRemoteAudioTrack = QNRemoteAudioTrack;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/uni-app-plus-nvue/dist/require-native-plugin.js */ 54)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vanNfc2RrL1FOUlRDLVVuaVBsdWdpbi1KUy9RTlJUQy1VbmlQbHVnaW4tSlMvY2xhc3MvUlRDUmVtb3RlQXVkaW9UcmFjay5qcyJdLCJuYW1lcyI6WyJfX2V4dGVuZHMiLCJleHRlbmRTdGF0aWNzIiwiZCIsImIiLCJPYmplY3QiLCJzZXRQcm90b3R5cGVPZiIsIl9fcHJvdG9fXyIsIkFycmF5IiwicCIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsIlR5cGVFcnJvciIsIlN0cmluZyIsIl9fIiwiY29uc3RydWN0b3IiLCJjcmVhdGUiLCJleHBvcnRzIiwiX19lc01vZHVsZSIsIlFOUmVtb3RlQXVkaW9UcmFjayIsIlJUQ1JlbW90ZVRyYWNrXzEiLCJyZXF1aXJlIiwiUU5SdGNUcmFjayIsInVuaSIsIl9zdXBlciIsImFwcGx5IiwiYXJndW1lbnRzIiwic2V0UmVtb3RlVm9sdW1lIiwidm9sdW1lIiwiaWRlbnRpZnlJRCIsImdldFJlbW90ZVZvbHVtZSIsIlFOUmVtb3RlVHJhY2siXSwibWFwcGluZ3MiOiJBQUFBLHNGQUFhOztBQUNiLElBQUlBLFNBQVMsR0FBSSxJQUFJLElBQUksSUFBSSxDQUFDQSxTQUFTLElBQU0sWUFBWTtFQUNyRCxJQUFJQyxjQUFhLEdBQUcsdUJBQVVDLENBQUMsRUFBRUMsQ0FBQyxFQUFFO0lBQ2hDRixjQUFhLEdBQUdHLE1BQU0sQ0FBQ0MsY0FBYyxJQUNoQztNQUFFQyxTQUFTLEVBQUU7SUFBRyxDQUFDLFlBQVlDLEtBQUssSUFBSSxVQUFVTCxDQUFDLEVBQUVDLENBQUMsRUFBRTtNQUFFRCxDQUFDLENBQUNJLFNBQVMsR0FBR0gsQ0FBQztJQUFFLENBQUUsSUFDNUUsVUFBVUQsQ0FBQyxFQUFFQyxDQUFDLEVBQUU7TUFBRSxLQUFLLElBQUlLLENBQUMsSUFBSUwsQ0FBQztRQUFFLElBQUlDLE1BQU0sQ0FBQ0ssU0FBUyxDQUFDQyxjQUFjLENBQUNDLElBQUksQ0FBQ1IsQ0FBQyxFQUFFSyxDQUFDLENBQUMsRUFBRU4sQ0FBQyxDQUFDTSxDQUFDLENBQUMsR0FBR0wsQ0FBQyxDQUFDSyxDQUFDLENBQUM7TUFBQztJQUFDLENBQUM7SUFDckcsT0FBT1AsY0FBYSxDQUFDQyxDQUFDLEVBQUVDLENBQUMsQ0FBQztFQUM5QixDQUFDO0VBQ0QsT0FBTyxVQUFVRCxDQUFDLEVBQUVDLENBQUMsRUFBRTtJQUNuQixJQUFJLE9BQU9BLENBQUMsS0FBSyxVQUFVLElBQUlBLENBQUMsS0FBSyxJQUFJLEVBQ3JDLE1BQU0sSUFBSVMsU0FBUyxDQUFDLHNCQUFzQixHQUFHQyxNQUFNLENBQUNWLENBQUMsQ0FBQyxHQUFHLCtCQUErQixDQUFDO0lBQzdGRixjQUFhLENBQUNDLENBQUMsRUFBRUMsQ0FBQyxDQUFDO0lBQ25CLFNBQVNXLEVBQUUsR0FBRztNQUFFLElBQUksQ0FBQ0MsV0FBVyxHQUFHYixDQUFDO0lBQUU7SUFDdENBLENBQUMsQ0FBQ08sU0FBUyxHQUFHTixDQUFDLEtBQUssSUFBSSxHQUFHQyxNQUFNLENBQUNZLE1BQU0sQ0FBQ2IsQ0FBQyxDQUFDLElBQUlXLEVBQUUsQ0FBQ0wsU0FBUyxHQUFHTixDQUFDLENBQUNNLFNBQVMsRUFBRSxJQUFJSyxFQUFFLEVBQUUsQ0FBQztFQUN4RixDQUFDO0FBQ0wsQ0FBQyxFQUFHO0FBQ0pHLE9BQU8sQ0FBQ0MsVUFBVSxHQUFHLElBQUk7QUFDekJELE9BQU8sQ0FBQ0Usa0JBQWtCLEdBQUcsS0FBSyxDQUFDO0FBQ25DLElBQUlDLGdCQUFnQixHQUFHQyxtQkFBTyxDQUFDLDJCQUFrQixDQUFDO0FBQ2xELElBQUlDLFVBQVUsR0FBR0MsOENBQXVCLENBQUMsNEJBQTRCLENBQUM7QUFDdEUsSUFBSUosa0JBQWtCLEdBQUksVUFBVUssTUFBTSxFQUFFO0VBQ3hDeEIsU0FBUyxDQUFDbUIsa0JBQWtCLEVBQUVLLE1BQU0sQ0FBQztFQUNyQyxTQUFTTCxrQkFBa0IsR0FBRztJQUMxQixPQUFPSyxNQUFNLEtBQUssSUFBSSxJQUFJQSxNQUFNLENBQUNDLEtBQUssQ0FBQyxJQUFJLEVBQUVDLFNBQVMsQ0FBQyxJQUFJLElBQUk7RUFDbkU7RUFDQVAsa0JBQWtCLENBQUNWLFNBQVMsQ0FBQ2tCLGVBQWUsR0FBRyxVQUFVQyxNQUFNLEVBQUU7SUFDN0QsT0FBT04sVUFBVSxDQUFDSyxlQUFlLENBQUMsSUFBSSxDQUFDRSxVQUFVLEVBQUVELE1BQU0sQ0FBQztFQUM5RCxDQUFDO0VBQ0RULGtCQUFrQixDQUFDVixTQUFTLENBQUNxQixlQUFlLEdBQUcsWUFBWTtJQUN2RCxPQUFPUixVQUFVLENBQUNRLGVBQWUsQ0FBQyxJQUFJLENBQUNELFVBQVUsQ0FBQztFQUN0RCxDQUFDO0VBQ0QsT0FBT1Ysa0JBQWtCO0FBQzdCLENBQUMsQ0FBQ0MsZ0JBQWdCLENBQUNXLGFBQWEsQ0FBRTtBQUNsQ2QsT0FBTyxDQUFDRSxrQkFBa0IsR0FBR0Esa0JBQWtCLEMiLCJmaWxlIjoiMjI5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYiwgcCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICB9O1xuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBpZiAodHlwZW9mIGIgIT09IFwiZnVuY3Rpb25cIiAmJiBiICE9PSBudWxsKVxuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNsYXNzIGV4dGVuZHMgdmFsdWUgXCIgKyBTdHJpbmcoYikgKyBcIiBpcyBub3QgYSBjb25zdHJ1Y3RvciBvciBudWxsXCIpO1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuUU5SZW1vdGVBdWRpb1RyYWNrID0gdm9pZCAwO1xudmFyIFJUQ1JlbW90ZVRyYWNrXzEgPSByZXF1aXJlKFwiLi9SVENSZW1vdGVUcmFja1wiKTtcbnZhciBRTlJ0Y1RyYWNrID0gdW5pLnJlcXVpcmVOYXRpdmVQbHVnaW4oJ1FOUlRDLVVuaVBsdWdpbi1RTlJ0Y1RyYWNrJyk7XG52YXIgUU5SZW1vdGVBdWRpb1RyYWNrID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoUU5SZW1vdGVBdWRpb1RyYWNrLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIFFOUmVtb3RlQXVkaW9UcmFjaygpIHtcbiAgICAgICAgcmV0dXJuIF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICAgIH1cbiAgICBRTlJlbW90ZUF1ZGlvVHJhY2sucHJvdG90eXBlLnNldFJlbW90ZVZvbHVtZSA9IGZ1bmN0aW9uICh2b2x1bWUpIHtcbiAgICAgICAgcmV0dXJuIFFOUnRjVHJhY2suc2V0UmVtb3RlVm9sdW1lKHRoaXMuaWRlbnRpZnlJRCwgdm9sdW1lKTtcbiAgICB9O1xuICAgIFFOUmVtb3RlQXVkaW9UcmFjay5wcm90b3R5cGUuZ2V0UmVtb3RlVm9sdW1lID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gUU5SdGNUcmFjay5nZXRSZW1vdGVWb2x1bWUodGhpcy5pZGVudGlmeUlEKTtcbiAgICB9O1xuICAgIHJldHVybiBRTlJlbW90ZUF1ZGlvVHJhY2s7XG59KFJUQ1JlbW90ZVRyYWNrXzEuUU5SZW1vdGVUcmFjaykpO1xuZXhwb3J0cy5RTlJlbW90ZUF1ZGlvVHJhY2sgPSBRTlJlbW90ZUF1ZGlvVHJhY2s7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///229\n");

/***/ }),

/***/ 23:
/*!*******************************************************************************************************************************************************************************!*\
  !*** /Users/tongjie/Desktop/QNRTC-Uniapp/demo/uni_modules/uni-easyinput/components/uni-easyinput/uni-easyinput.vue?vue&type=style&index=0&id=abe12412&lang=scss&scoped=true& ***!
  \*******************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_11_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_11_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_easyinput_vue_vue_type_style_index_0_id_abe12412_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--11-oneOf-0-1!../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--11-oneOf-0-2!../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--11-oneOf-0-3!../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--11-oneOf-0-4!../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./uni-easyinput.vue?vue&type=style&index=0&id=abe12412&lang=scss&scoped=true& */ 24);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_11_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_11_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_easyinput_vue_vue_type_style_index_0_id_abe12412_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_11_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_11_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_easyinput_vue_vue_type_style_index_0_id_abe12412_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_11_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_11_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_easyinput_vue_vue_type_style_index_0_id_abe12412_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_11_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_11_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_easyinput_vue_vue_type_style_index_0_id_abe12412_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_11_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_11_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_easyinput_vue_vue_type_style_index_0_id_abe12412_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 230:
/*!********************************************************************************************************************!*\
  !*** /Users/tongjie/Desktop/QNRTC-Uniapp/demo/js_sdk/QNRTC-UniPlugin-JS/QNRTC-UniPlugin-JS/class/RTCLocalTrack.js ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__webpack_provided_uni_dot_requireNativePlugin) {\n\nvar __extends = this && this.__extends || function () {\n  var _extendStatics = function extendStatics(d, b) {\n    _extendStatics = Object.setPrototypeOf || {\n      __proto__: []\n    } instanceof Array && function (d, b) {\n      d.__proto__ = b;\n    } || function (d, b) {\n      for (var p in b) {\n        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];\n      }\n    };\n    return _extendStatics(d, b);\n  };\n  return function (d, b) {\n    if (typeof b !== \"function\" && b !== null) throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\n    _extendStatics(d, b);\n    function __() {\n      this.constructor = d;\n    }\n    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n  };\n}();\nexports.__esModule = true;\nexports.QNLocalTrack = void 0;\nvar RTCTrack_1 = __webpack_require__(/*! ./RTCTrack */ 228);\nvar QNRtcTrack = __webpack_provided_uni_dot_requireNativePlugin('QNRTC-UniPlugin-QNRtcTrack');\nvar QNLocalTrack = function (_super) {\n  __extends(QNLocalTrack, _super);\n  function QNLocalTrack() {\n    return _super !== null && _super.apply(this, arguments) || this;\n  }\n  QNLocalTrack.prototype.setMuted = function (muted) {\n    QNRtcTrack.setMuted(this.identifyID, muted);\n  };\n  QNLocalTrack.prototype.destroy = function () {\n    QNRtcTrack.destroy(this.identifyID);\n  };\n  return QNLocalTrack;\n}(RTCTrack_1.QNTrack);\nexports.QNLocalTrack = QNLocalTrack;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/uni-app-plus-nvue/dist/require-native-plugin.js */ 54)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vanNfc2RrL1FOUlRDLVVuaVBsdWdpbi1KUy9RTlJUQy1VbmlQbHVnaW4tSlMvY2xhc3MvUlRDTG9jYWxUcmFjay5qcyJdLCJuYW1lcyI6WyJfX2V4dGVuZHMiLCJleHRlbmRTdGF0aWNzIiwiZCIsImIiLCJPYmplY3QiLCJzZXRQcm90b3R5cGVPZiIsIl9fcHJvdG9fXyIsIkFycmF5IiwicCIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsIlR5cGVFcnJvciIsIlN0cmluZyIsIl9fIiwiY29uc3RydWN0b3IiLCJjcmVhdGUiLCJleHBvcnRzIiwiX19lc01vZHVsZSIsIlFOTG9jYWxUcmFjayIsIlJUQ1RyYWNrXzEiLCJyZXF1aXJlIiwiUU5SdGNUcmFjayIsInVuaSIsIl9zdXBlciIsImFwcGx5IiwiYXJndW1lbnRzIiwic2V0TXV0ZWQiLCJtdXRlZCIsImlkZW50aWZ5SUQiLCJkZXN0cm95IiwiUU5UcmFjayJdLCJtYXBwaW5ncyI6IkFBQUEsc0ZBQWE7O0FBQ2IsSUFBSUEsU0FBUyxHQUFJLElBQUksSUFBSSxJQUFJLENBQUNBLFNBQVMsSUFBTSxZQUFZO0VBQ3JELElBQUlDLGNBQWEsR0FBRyx1QkFBVUMsQ0FBQyxFQUFFQyxDQUFDLEVBQUU7SUFDaENGLGNBQWEsR0FBR0csTUFBTSxDQUFDQyxjQUFjLElBQ2hDO01BQUVDLFNBQVMsRUFBRTtJQUFHLENBQUMsWUFBWUMsS0FBSyxJQUFJLFVBQVVMLENBQUMsRUFBRUMsQ0FBQyxFQUFFO01BQUVELENBQUMsQ0FBQ0ksU0FBUyxHQUFHSCxDQUFDO0lBQUUsQ0FBRSxJQUM1RSxVQUFVRCxDQUFDLEVBQUVDLENBQUMsRUFBRTtNQUFFLEtBQUssSUFBSUssQ0FBQyxJQUFJTCxDQUFDO1FBQUUsSUFBSUMsTUFBTSxDQUFDSyxTQUFTLENBQUNDLGNBQWMsQ0FBQ0MsSUFBSSxDQUFDUixDQUFDLEVBQUVLLENBQUMsQ0FBQyxFQUFFTixDQUFDLENBQUNNLENBQUMsQ0FBQyxHQUFHTCxDQUFDLENBQUNLLENBQUMsQ0FBQztNQUFDO0lBQUMsQ0FBQztJQUNyRyxPQUFPUCxjQUFhLENBQUNDLENBQUMsRUFBRUMsQ0FBQyxDQUFDO0VBQzlCLENBQUM7RUFDRCxPQUFPLFVBQVVELENBQUMsRUFBRUMsQ0FBQyxFQUFFO0lBQ25CLElBQUksT0FBT0EsQ0FBQyxLQUFLLFVBQVUsSUFBSUEsQ0FBQyxLQUFLLElBQUksRUFDckMsTUFBTSxJQUFJUyxTQUFTLENBQUMsc0JBQXNCLEdBQUdDLE1BQU0sQ0FBQ1YsQ0FBQyxDQUFDLEdBQUcsK0JBQStCLENBQUM7SUFDN0ZGLGNBQWEsQ0FBQ0MsQ0FBQyxFQUFFQyxDQUFDLENBQUM7SUFDbkIsU0FBU1csRUFBRSxHQUFHO01BQUUsSUFBSSxDQUFDQyxXQUFXLEdBQUdiLENBQUM7SUFBRTtJQUN0Q0EsQ0FBQyxDQUFDTyxTQUFTLEdBQUdOLENBQUMsS0FBSyxJQUFJLEdBQUdDLE1BQU0sQ0FBQ1ksTUFBTSxDQUFDYixDQUFDLENBQUMsSUFBSVcsRUFBRSxDQUFDTCxTQUFTLEdBQUdOLENBQUMsQ0FBQ00sU0FBUyxFQUFFLElBQUlLLEVBQUUsRUFBRSxDQUFDO0VBQ3hGLENBQUM7QUFDTCxDQUFDLEVBQUc7QUFDSkcsT0FBTyxDQUFDQyxVQUFVLEdBQUcsSUFBSTtBQUN6QkQsT0FBTyxDQUFDRSxZQUFZLEdBQUcsS0FBSyxDQUFDO0FBQzdCLElBQUlDLFVBQVUsR0FBR0MsbUJBQU8sQ0FBQyxxQkFBWSxDQUFDO0FBQ3RDLElBQUlDLFVBQVUsR0FBR0MsOENBQXVCLENBQUMsNEJBQTRCLENBQUM7QUFDdEUsSUFBSUosWUFBWSxHQUFJLFVBQVVLLE1BQU0sRUFBRTtFQUNsQ3hCLFNBQVMsQ0FBQ21CLFlBQVksRUFBRUssTUFBTSxDQUFDO0VBQy9CLFNBQVNMLFlBQVksR0FBRztJQUNwQixPQUFPSyxNQUFNLEtBQUssSUFBSSxJQUFJQSxNQUFNLENBQUNDLEtBQUssQ0FBQyxJQUFJLEVBQUVDLFNBQVMsQ0FBQyxJQUFJLElBQUk7RUFDbkU7RUFDQVAsWUFBWSxDQUFDVixTQUFTLENBQUNrQixRQUFRLEdBQUcsVUFBVUMsS0FBSyxFQUFFO0lBQy9DTixVQUFVLENBQUNLLFFBQVEsQ0FBQyxJQUFJLENBQUNFLFVBQVUsRUFBRUQsS0FBSyxDQUFDO0VBQy9DLENBQUM7RUFDRFQsWUFBWSxDQUFDVixTQUFTLENBQUNxQixPQUFPLEdBQUcsWUFBWTtJQUN6Q1IsVUFBVSxDQUFDUSxPQUFPLENBQUMsSUFBSSxDQUFDRCxVQUFVLENBQUM7RUFDdkMsQ0FBQztFQUNELE9BQU9WLFlBQVk7QUFDdkIsQ0FBQyxDQUFDQyxVQUFVLENBQUNXLE9BQU8sQ0FBRTtBQUN0QmQsT0FBTyxDQUFDRSxZQUFZLEdBQUdBLFlBQVksQyIsImZpbGUiOiIyMzAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChiLCBwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgIH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgYiAhPT0gXCJmdW5jdGlvblwiICYmIGIgIT09IG51bGwpXG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2xhc3MgZXh0ZW5kcyB2YWx1ZSBcIiArIFN0cmluZyhiKSArIFwiIGlzIG5vdCBhIGNvbnN0cnVjdG9yIG9yIG51bGxcIik7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5RTkxvY2FsVHJhY2sgPSB2b2lkIDA7XG52YXIgUlRDVHJhY2tfMSA9IHJlcXVpcmUoXCIuL1JUQ1RyYWNrXCIpO1xudmFyIFFOUnRjVHJhY2sgPSB1bmkucmVxdWlyZU5hdGl2ZVBsdWdpbignUU5SVEMtVW5pUGx1Z2luLVFOUnRjVHJhY2snKTtcbnZhciBRTkxvY2FsVHJhY2sgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhRTkxvY2FsVHJhY2ssIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gUU5Mb2NhbFRyYWNrKCkge1xuICAgICAgICByZXR1cm4gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gICAgfVxuICAgIFFOTG9jYWxUcmFjay5wcm90b3R5cGUuc2V0TXV0ZWQgPSBmdW5jdGlvbiAobXV0ZWQpIHtcbiAgICAgICAgUU5SdGNUcmFjay5zZXRNdXRlZCh0aGlzLmlkZW50aWZ5SUQsIG11dGVkKTtcbiAgICB9O1xuICAgIFFOTG9jYWxUcmFjay5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgUU5SdGNUcmFjay5kZXN0cm95KHRoaXMuaWRlbnRpZnlJRCk7XG4gICAgfTtcbiAgICByZXR1cm4gUU5Mb2NhbFRyYWNrO1xufShSVENUcmFja18xLlFOVHJhY2spKTtcbmV4cG9ydHMuUU5Mb2NhbFRyYWNrID0gUU5Mb2NhbFRyYWNrO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///230\n");

/***/ }),

/***/ 231:
/*!**************************************************************************************************************************!*\
  !*** /Users/tongjie/Desktop/QNRTC-Uniapp/demo/js_sdk/QNRTC-UniPlugin-JS/QNRTC-UniPlugin-JS/class/RTCCameraVideoTrack.js ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__webpack_provided_uni_dot_requireNativePlugin) {\n\nvar __extends = this && this.__extends || function () {\n  var _extendStatics = function extendStatics(d, b) {\n    _extendStatics = Object.setPrototypeOf || {\n      __proto__: []\n    } instanceof Array && function (d, b) {\n      d.__proto__ = b;\n    } || function (d, b) {\n      for (var p in b) {\n        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];\n      }\n    };\n    return _extendStatics(d, b);\n  };\n  return function (d, b) {\n    if (typeof b !== \"function\" && b !== null) throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\n    _extendStatics(d, b);\n    function __() {\n      this.constructor = d;\n    }\n    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n  };\n}();\nvar __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {\n  function adopt(value) {\n    return value instanceof P ? value : new P(function (resolve) {\n      resolve(value);\n    });\n  }\n  return new (P || (P = Promise))(function (resolve, reject) {\n    function fulfilled(value) {\n      try {\n        step(generator.next(value));\n      } catch (e) {\n        reject(e);\n      }\n    }\n    function rejected(value) {\n      try {\n        step(generator[\"throw\"](value));\n      } catch (e) {\n        reject(e);\n      }\n    }\n    function step(result) {\n      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);\n    }\n    step((generator = generator.apply(thisArg, _arguments || [])).next());\n  });\n};\nvar __generator = this && this.__generator || function (thisArg, body) {\n  var _ = {\n      label: 0,\n      sent: function sent() {\n        if (t[0] & 1) throw t[1];\n        return t[1];\n      },\n      trys: [],\n      ops: []\n    },\n    f,\n    y,\n    t,\n    g;\n  return g = {\n    next: verb(0),\n    \"throw\": verb(1),\n    \"return\": verb(2)\n  }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function () {\n    return this;\n  }), g;\n  function verb(n) {\n    return function (v) {\n      return step([n, v]);\n    };\n  }\n  function step(op) {\n    if (f) throw new TypeError(\"Generator is already executing.\");\n    while (g && (g = 0, op[0] && (_ = 0)), _) {\n      try {\n        if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n        if (y = 0, t) op = [op[0] & 2, t.value];\n        switch (op[0]) {\n          case 0:\n          case 1:\n            t = op;\n            break;\n          case 4:\n            _.label++;\n            return {\n              value: op[1],\n              done: false\n            };\n          case 5:\n            _.label++;\n            y = op[1];\n            op = [0];\n            continue;\n          case 7:\n            op = _.ops.pop();\n            _.trys.pop();\n            continue;\n          default:\n            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {\n              _ = 0;\n              continue;\n            }\n            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {\n              _.label = op[1];\n              break;\n            }\n            if (op[0] === 6 && _.label < t[1]) {\n              _.label = t[1];\n              t = op;\n              break;\n            }\n            if (t && _.label < t[2]) {\n              _.label = t[2];\n              _.ops.push(op);\n              break;\n            }\n            if (t[2]) _.ops.pop();\n            _.trys.pop();\n            continue;\n        }\n        op = body.call(thisArg, _);\n      } catch (e) {\n        op = [6, e];\n        y = 0;\n      } finally {\n        f = t = 0;\n      }\n    }\n    if (op[0] & 5) throw op[1];\n    return {\n      value: op[0] ? op[1] : void 0,\n      done: true\n    };\n  }\n};\nexports.__esModule = true;\nexports.QNCameraVideoTrack = void 0;\nvar RTCLocalVideoTrack_1 = __webpack_require__(/*! ./RTCLocalVideoTrack */ 232);\nvar QNRtcTrack = __webpack_provided_uni_dot_requireNativePlugin('QNRTC-UniPlugin-QNRtcTrack');\nvar QNEvent = __webpack_provided_uni_dot_requireNativePlugin('globalEvent');\nvar QNCameraVideoTrack = function (_super) {\n  __extends(QNCameraVideoTrack, _super);\n  function QNCameraVideoTrack() {\n    return _super !== null && _super.apply(this, arguments) || this;\n  }\n  QNCameraVideoTrack.prototype.setSessionPreset = function (sessionPreset) {\n    return QNRtcTrack.setSessionPreset(this.identifyID, sessionPreset);\n  };\n  QNCameraVideoTrack.prototype.startCapture = function () {\n    return QNRtcTrack.startCapture(this.identifyID);\n  };\n  QNCameraVideoTrack.prototype.stopCapture = function () {\n    return QNRtcTrack.stopCapture(this.identifyID);\n  };\n  QNCameraVideoTrack.prototype.switchCamera = function () {\n    return QNRtcTrack.switchCamera(this.identifyID);\n  };\n  QNCameraVideoTrack.prototype.turnLightOn = function () {\n    return QNRtcTrack.turnLightOn(this.identifyID);\n  };\n  QNCameraVideoTrack.prototype.turnLightOff = function () {\n    return QNRtcTrack.turnLightOff(this.identifyID);\n  };\n  QNCameraVideoTrack.prototype.manualFocus = function (x, y) {\n    return QNRtcTrack.manualFocus(this.identifyID, x, y);\n  };\n  QNCameraVideoTrack.prototype.setExposureCompensation = function (value) {\n    return QNRtcTrack.setExposureCompensation(this.identifyID, value);\n  };\n  QNCameraVideoTrack.prototype.getMaxExposureCompensation = function () {\n    return QNRtcTrack.getMaxExposureCompensation(this.identifyID);\n  };\n  QNCameraVideoTrack.prototype.getMinExposureCompensation = function () {\n    return QNRtcTrack.getMinExposureCompensation(this.identifyID);\n  };\n  QNCameraVideoTrack.prototype.setVideoOrientation = function (videoOrientation) {\n    return QNRtcTrack.setVideoOrientation(this.identifyID, videoOrientation);\n  };\n  QNCameraVideoTrack.prototype.getVideoOrientation = function () {\n    return QNRtcTrack.getVideoOrientation(this.identifyID);\n  };\n  QNCameraVideoTrack.prototype.setZoom = function (zoom) {\n    return QNRtcTrack.setZoom(this.identifyID, zoom);\n  };\n  QNCameraVideoTrack.prototype.getZooms = function () {\n    return QNRtcTrack.getZooms(this.identifyID);\n  };\n  QNCameraVideoTrack.prototype.setPreviewEnabled = function (isEnabled) {\n    return QNRtcTrack.setPreviewEnabled(this.identifyID, isEnabled);\n  };\n  QNCameraVideoTrack.prototype.setBeauty = function (beautySetting) {\n    return QNRtcTrack.setBeauty(this.identifyID, beautySetting);\n  };\n  QNCameraVideoTrack.prototype.previewMirrorFrontFacing = function (previewMirrorFrontFacing) {\n    return QNRtcTrack.previewMirrorFrontFacing(this.identifyID, previewMirrorFrontFacing);\n  };\n  QNCameraVideoTrack.prototype.previewMirrorRearFacing = function (previewMirrorRearFacing) {\n    return QNRtcTrack.previewMirrorRearFacing(this.identifyID, previewMirrorRearFacing);\n  };\n  QNCameraVideoTrack.prototype.encodeMirrorFrontFacing = function (encodeMirrorFrontFacing) {\n    return QNRtcTrack.encodeMirrorFrontFacing(this.identifyID, encodeMirrorFrontFacing);\n  };\n  QNCameraVideoTrack.prototype.encodeMirrorRearFacing = function (encodeMirrorRearFacing) {\n    return QNRtcTrack.encodeMirrorRearFacing(this.identifyID, encodeMirrorRearFacing);\n  };\n  QNCameraVideoTrack.prototype.pushImage = function (image) {\n    return QNRtcTrack.pushImage(this.identifyID, image);\n  };\n  QNCameraVideoTrack.prototype.setWaterMark = function (waterMark) {\n    return QNRtcTrack.setWaterMark(this.identifyID, waterMark);\n  };\n  QNCameraVideoTrack.prototype.clearWaterMark = function () {\n    return QNRtcTrack.clearWaterMark(this.identifyID);\n  };\n  QNCameraVideoTrack.prototype.takeVideoSnapshot = function () {\n    return __awaiter(this, void 0, void 0, function () {\n      var platform;\n      var _this = this;\n      return __generator(this, function (_a) {\n        platform = uni.getSystemInfoSync().platform;\n        if (platform === 'ios') {\n          return [2, new Promise(function (resolve, reject) {\n            QNRtcTrack.takeVideoSnapshot(_this.identifyID);\n            var listener = function listener(param) {\n              QNEvent.removeEventListener('onLocalVideoFrame', listener);\n              resolve({\n                base64: _this.trimBase64(param.data)\n              });\n            };\n            QNEvent.addEventListener('onLocalVideoFrame', listener);\n            setTimeout(function () {\n              QNEvent.removeEventListener('onLocalVideoFrame', listener);\n              reject();\n            }, 5000);\n          })];\n        } else if (platform === 'android') {\n          return [2, new Promise(function (resolve, reject) {\n            QNRtcTrack.takeVideoSnapshot(_this.getTrackID(), function (data) {\n              resolve(data);\n            });\n          })];\n        }\n        return [2];\n      });\n    });\n  };\n  QNCameraVideoTrack.prototype.trimBase64 = function (base64) {\n    if (!base64) {\n      return '';\n    }\n    return base64.replace(/\\r|\\n/g, '');\n  };\n  return QNCameraVideoTrack;\n}(RTCLocalVideoTrack_1.QNLocalVideoTrack);\nexports.QNCameraVideoTrack = QNCameraVideoTrack;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/uni-app-plus-nvue/dist/require-native-plugin.js */ 54)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vanNfc2RrL1FOUlRDLVVuaVBsdWdpbi1KUy9RTlJUQy1VbmlQbHVnaW4tSlMvY2xhc3MvUlRDQ2FtZXJhVmlkZW9UcmFjay5qcyJdLCJuYW1lcyI6WyJfX2V4dGVuZHMiLCJleHRlbmRTdGF0aWNzIiwiZCIsImIiLCJPYmplY3QiLCJzZXRQcm90b3R5cGVPZiIsIl9fcHJvdG9fXyIsIkFycmF5IiwicCIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsIlR5cGVFcnJvciIsIlN0cmluZyIsIl9fIiwiY29uc3RydWN0b3IiLCJjcmVhdGUiLCJfX2F3YWl0ZXIiLCJ0aGlzQXJnIiwiX2FyZ3VtZW50cyIsIlAiLCJnZW5lcmF0b3IiLCJhZG9wdCIsInZhbHVlIiwicmVzb2x2ZSIsIlByb21pc2UiLCJyZWplY3QiLCJmdWxmaWxsZWQiLCJzdGVwIiwibmV4dCIsImUiLCJyZWplY3RlZCIsInJlc3VsdCIsImRvbmUiLCJ0aGVuIiwiYXBwbHkiLCJfX2dlbmVyYXRvciIsImJvZHkiLCJfIiwibGFiZWwiLCJzZW50IiwidCIsInRyeXMiLCJvcHMiLCJmIiwieSIsImciLCJ2ZXJiIiwiU3ltYm9sIiwiaXRlcmF0b3IiLCJuIiwidiIsIm9wIiwicG9wIiwibGVuZ3RoIiwicHVzaCIsImV4cG9ydHMiLCJfX2VzTW9kdWxlIiwiUU5DYW1lcmFWaWRlb1RyYWNrIiwiUlRDTG9jYWxWaWRlb1RyYWNrXzEiLCJyZXF1aXJlIiwiUU5SdGNUcmFjayIsInVuaSIsIlFORXZlbnQiLCJfc3VwZXIiLCJhcmd1bWVudHMiLCJzZXRTZXNzaW9uUHJlc2V0Iiwic2Vzc2lvblByZXNldCIsImlkZW50aWZ5SUQiLCJzdGFydENhcHR1cmUiLCJzdG9wQ2FwdHVyZSIsInN3aXRjaENhbWVyYSIsInR1cm5MaWdodE9uIiwidHVybkxpZ2h0T2ZmIiwibWFudWFsRm9jdXMiLCJ4Iiwic2V0RXhwb3N1cmVDb21wZW5zYXRpb24iLCJnZXRNYXhFeHBvc3VyZUNvbXBlbnNhdGlvbiIsImdldE1pbkV4cG9zdXJlQ29tcGVuc2F0aW9uIiwic2V0VmlkZW9PcmllbnRhdGlvbiIsInZpZGVvT3JpZW50YXRpb24iLCJnZXRWaWRlb09yaWVudGF0aW9uIiwic2V0Wm9vbSIsInpvb20iLCJnZXRab29tcyIsInNldFByZXZpZXdFbmFibGVkIiwiaXNFbmFibGVkIiwic2V0QmVhdXR5IiwiYmVhdXR5U2V0dGluZyIsInByZXZpZXdNaXJyb3JGcm9udEZhY2luZyIsInByZXZpZXdNaXJyb3JSZWFyRmFjaW5nIiwiZW5jb2RlTWlycm9yRnJvbnRGYWNpbmciLCJlbmNvZGVNaXJyb3JSZWFyRmFjaW5nIiwicHVzaEltYWdlIiwiaW1hZ2UiLCJzZXRXYXRlck1hcmsiLCJ3YXRlck1hcmsiLCJjbGVhcldhdGVyTWFyayIsInRha2VWaWRlb1NuYXBzaG90IiwicGxhdGZvcm0iLCJfdGhpcyIsIl9hIiwiZ2V0U3lzdGVtSW5mb1N5bmMiLCJsaXN0ZW5lciIsInBhcmFtIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImJhc2U2NCIsInRyaW1CYXNlNjQiLCJkYXRhIiwiYWRkRXZlbnRMaXN0ZW5lciIsInNldFRpbWVvdXQiLCJnZXRUcmFja0lEIiwicmVwbGFjZSIsIlFOTG9jYWxWaWRlb1RyYWNrIl0sIm1hcHBpbmdzIjoiQUFBQSxzRkFBYTs7QUFDYixJQUFJQSxTQUFTLEdBQUksSUFBSSxJQUFJLElBQUksQ0FBQ0EsU0FBUyxJQUFNLFlBQVk7RUFDckQsSUFBSUMsY0FBYSxHQUFHLHVCQUFVQyxDQUFDLEVBQUVDLENBQUMsRUFBRTtJQUNoQ0YsY0FBYSxHQUFHRyxNQUFNLENBQUNDLGNBQWMsSUFDaEM7TUFBRUMsU0FBUyxFQUFFO0lBQUcsQ0FBQyxZQUFZQyxLQUFLLElBQUksVUFBVUwsQ0FBQyxFQUFFQyxDQUFDLEVBQUU7TUFBRUQsQ0FBQyxDQUFDSSxTQUFTLEdBQUdILENBQUM7SUFBRSxDQUFFLElBQzVFLFVBQVVELENBQUMsRUFBRUMsQ0FBQyxFQUFFO01BQUUsS0FBSyxJQUFJ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QyxtQkFBbUIsRUFBRU4sUUFBUSxDQUFDO1lBQ3ZETyxVQUFVLENBQUMsWUFBWTtjQUNuQi9DLE9BQU8sQ0FBQzBDLG1CQUFtQixDQUFDLG1CQUFtQixFQUFFRixRQUFRLENBQUM7Y0FDMUQ3RSxNQUFNLEVBQUU7WUFDWixDQUFDLEVBQUUsSUFBSSxDQUFDO1VBQ1osQ0FBQyxDQUFDLENBQUM7UUFDWCxDQUFDLE1BQ0ksSUFBSXlFLFFBQVEsS0FBSyxTQUFTLEVBQUU7VUFDN0IsT0FBTyxDQUFDLENBQUMsRUFBRSxJQUFJMUUsT0FBTyxDQUFDLFVBQVVELE9BQU8sRUFBRUUsTUFBTSxFQUFFO1lBQzFDbUMsVUFBVSxDQUFDcUMsaUJBQWlCLENBQUNFLEtBQUssQ0FBQ1csVUFBVSxFQUFFLEVBQUUsVUFBVUgsSUFBSSxFQUFFO2NBQzdEcEYsT0FBTyxDQUFDb0YsSUFBSSxDQUFDO1lBQ2pCLENBQUMsQ0FBQztVQUNOLENBQUMsQ0FBQyxDQUFDO1FBQ1g7UUFDQSxPQUFPLENBQUMsQ0FBQyxDQUFDO01BQ2QsQ0FBQyxDQUFDO0lBQ04sQ0FBQyxDQUFDO0VBQ04sQ0FBQztFQUNEbEQsa0JBQWtCLENBQUNqRCxTQUFTLENBQUNrRyxVQUFVLEdBQUcsVUFBVUQsTUFBTSxFQUFFO0lBQ3hELElBQUksQ0FBQ0EsTUFBTSxFQUFFO01BQ1QsT0FBTyxFQUFFO0lBQ2I7SUFDQSxPQUFPQSxNQUFNLENBQUNNLE9BQU8sQ0FBQyxRQUFRLEVBQUUsRUFBRSxDQUFDO0VBQ3ZDLENBQUM7RUFDRCxPQUFPdEQsa0JBQWtCO0FBQzdCLENBQUMsQ0FBQ0Msb0JBQW9CLENBQUNzRCxpQkFBaUIsQ0FBRTtBQUMxQ3pELE9BQU8sQ0FBQ0Usa0JBQWtCLEdBQUdBLGtCQUFrQixDIiwiZmlsZSI6IjIzMS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBiICE9PSBcImZ1bmN0aW9uXCIgJiYgYiAhPT0gbnVsbClcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDbGFzcyBleHRlbmRzIHZhbHVlIFwiICsgU3RyaW5nKGIpICsgXCIgaXMgbm90IGEgY29uc3RydWN0b3Igb3IgbnVsbFwiKTtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xudmFyIF9fZ2VuZXJhdG9yID0gKHRoaXMgJiYgdGhpcy5fX2dlbmVyYXRvcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIGJvZHkpIHtcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xuICAgICAgICB3aGlsZSAoZyAmJiAoZyA9IDAsIG9wWzBdICYmIChfID0gMCkpLCBfKSB0cnkge1xuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XG4gICAgfVxufTtcbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLlFOQ2FtZXJhVmlkZW9UcmFjayA9IHZvaWQgMDtcbnZhciBSVENMb2NhbFZpZGVvVHJhY2tfMSA9IHJlcXVpcmUoXCIuL1JUQ0xvY2FsVmlkZW9UcmFja1wiKTtcbnZhciBRTlJ0Y1RyYWNrID0gdW5pLnJlcXVpcmVOYXRpdmVQbHVnaW4oJ1FOUlRDLVVuaVBsdWdpbi1RTlJ0Y1RyYWNrJyk7XG52YXIgUU5FdmVudCA9IHVuaS5yZXF1aXJlTmF0aXZlUGx1Z2luKCdnbG9iYWxFdmVudCcpO1xudmFyIFFOQ2FtZXJhVmlkZW9UcmFjayA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKFFOQ2FtZXJhVmlkZW9UcmFjaywgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBRTkNhbWVyYVZpZGVvVHJhY2soKSB7XG4gICAgICAgIHJldHVybiBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgICB9XG4gICAgUU5DYW1lcmFWaWRlb1RyYWNrLnByb3RvdHlwZS5zZXRTZXNzaW9uUHJlc2V0ID0gZnVuY3Rpb24gKHNlc3Npb25QcmVzZXQpIHtcbiAgICAgICAgcmV0dXJuIFFOUnRjVHJhY2suc2V0U2Vzc2lvblByZXNldCh0aGlzLmlkZW50aWZ5SUQsIHNlc3Npb25QcmVzZXQpO1xuICAgIH07XG4gICAgUU5DYW1lcmFWaWRlb1RyYWNrLnByb3RvdHlwZS5zdGFydENhcHR1cmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBRTlJ0Y1RyYWNrLnN0YXJ0Q2FwdHVyZSh0aGlzLmlkZW50aWZ5SUQpO1xuICAgIH07XG4gICAgUU5DYW1lcmFWaWRlb1RyYWNrLnByb3RvdHlwZS5zdG9wQ2FwdHVyZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIFFOUnRjVHJhY2suc3RvcENhcHR1cmUodGhpcy5pZGVudGlmeUlEKTtcbiAgICB9O1xuICAgIFFOQ2FtZXJhVmlkZW9UcmFjay5wcm90b3R5cGUuc3dpdGNoQ2FtZXJhID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gUU5SdGNUcmFjay5zd2l0Y2hDYW1lcmEodGhpcy5pZGVudGlmeUlEKTtcbiAgICB9O1xuICAgIFFOQ2FtZXJhVmlkZW9UcmFjay5wcm90b3R5cGUudHVybkxpZ2h0T24gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBRTlJ0Y1RyYWNrLnR1cm5MaWdodE9uKHRoaXMuaWRlbnRpZnlJRCk7XG4gICAgfTtcbiAgICBRTkNhbWVyYVZpZGVvVHJhY2sucHJvdG90eXBlLnR1cm5MaWdodE9mZiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIFFOUnRjVHJhY2sudHVybkxpZ2h0T2ZmKHRoaXMuaWRlbnRpZnlJRCk7XG4gICAgfTtcbiAgICBRTkNhbWVyYVZpZGVvVHJhY2sucHJvdG90eXBlLm1hbnVhbEZvY3VzID0gZnVuY3Rpb24gKHgsIHkpIHtcbiAgICAgICAgcmV0dXJuIFFOUnRjVHJhY2subWFudWFsRm9jdXModGhpcy5pZGVudGlmeUlELCB4LCB5KTtcbiAgICB9O1xuICAgIFFOQ2FtZXJhVmlkZW9UcmFjay5wcm90b3R5cGUuc2V0RXhwb3N1cmVDb21wZW5zYXRpb24gPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIFFOUnRjVHJhY2suc2V0RXhwb3N1cmVDb21wZW5zYXRpb24odGhpcy5pZGVudGlmeUlELCB2YWx1ZSk7XG4gICAgfTtcbiAgICBRTkNhbWVyYVZpZGVvVHJhY2sucHJvdG90eXBlLmdldE1heEV4cG9zdXJlQ29tcGVuc2F0aW9uID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gUU5SdGNUcmFjay5nZXRNYXhFeHBvc3VyZUNvbXBlbnNhdGlvbih0aGlzLmlkZW50aWZ5SUQpO1xuICAgIH07XG4gICAgUU5DYW1lcmFWaWRlb1RyYWNrLnByb3RvdHlwZS5nZXRNaW5FeHBvc3VyZUNvbXBlbnNhdGlvbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIFFOUnRjVHJhY2suZ2V0TWluRXhwb3N1cmVDb21wZW5zYXRpb24odGhpcy5pZGVudGlmeUlEKTtcbiAgICB9O1xuICAgIFFOQ2FtZXJhVmlkZW9UcmFjay5wcm90b3R5cGUuc2V0VmlkZW9PcmllbnRhdGlvbiA9IGZ1bmN0aW9uICh2aWRlb09yaWVudGF0aW9uKSB7XG4gICAgICAgIHJldHVybiBRTlJ0Y1RyYWNrLnNldFZpZGVvT3JpZW50YXRpb24odGhpcy5pZGVudGlmeUlELCB2aWRlb09yaWVudGF0aW9uKTtcbiAgICB9O1xuICAgIFFOQ2FtZXJhVmlkZW9UcmFjay5wcm90b3R5cGUuZ2V0VmlkZW9PcmllbnRhdGlvbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIFFOUnRjVHJhY2suZ2V0VmlkZW9PcmllbnRhdGlvbih0aGlzLmlkZW50aWZ5SUQpO1xuICAgIH07XG4gICAgUU5DYW1lcmFWaWRlb1RyYWNrLnByb3RvdHlwZS5zZXRab29tID0gZnVuY3Rpb24gKHpvb20pIHtcbiAgICAgICAgcmV0dXJuIFFOUnRjVHJhY2suc2V0Wm9vbSh0aGlzLmlkZW50aWZ5SUQsIHpvb20pO1xuICAgIH07XG4gICAgUU5DYW1lcmFWaWRlb1RyYWNrLnByb3RvdHlwZS5nZXRab29tcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIFFOUnRjVHJhY2suZ2V0Wm9vbXModGhpcy5pZGVudGlmeUlEKTtcbiAgICB9O1xuICAgIFFOQ2FtZXJhVmlkZW9UcmFjay5wcm90b3R5cGUuc2V0UHJldmlld0VuYWJsZWQgPSBmdW5jdGlvbiAoaXNFbmFibGVkKSB7XG4gICAgICAgIHJldHVybiBRTlJ0Y1RyYWNrLnNldFByZXZpZXdFbmFibGVkKHRoaXMuaWRlbnRpZnlJRCwgaXNFbmFibGVkKTtcbiAgICB9O1xuICAgIFFOQ2FtZXJhVmlkZW9UcmFjay5wcm90b3R5cGUuc2V0QmVhdXR5ID0gZnVuY3Rpb24gKGJlYXV0eVNldHRpbmcpIHtcbiAgICAgICAgcmV0dXJuIFFOUnRjVHJhY2suc2V0QmVhdXR5KHRoaXMuaWRlbnRpZnlJRCwgYmVhdXR5U2V0dGluZyk7XG4gICAgfTtcbiAgICBRTkNhbWVyYVZpZGVvVHJhY2sucHJvdG90eXBlLnByZXZpZXdNaXJyb3JGcm9udEZhY2luZyA9IGZ1bmN0aW9uIChwcmV2aWV3TWlycm9yRnJvbnRGYWNpbmcpIHtcbiAgICAgICAgcmV0dXJuIFFOUnRjVHJhY2sucHJldmlld01pcnJvckZyb250RmFjaW5nKHRoaXMuaWRlbnRpZnlJRCwgcHJldmlld01pcnJvckZyb250RmFjaW5nKTtcbiAgICB9O1xuICAgIFFOQ2FtZXJhVmlkZW9UcmFjay5wcm90b3R5cGUucHJldmlld01pcnJvclJlYXJGYWNpbmcgPSBmdW5jdGlvbiAocHJldmlld01pcnJvclJlYXJGYWNpbmcpIHtcbiAgICAgICAgcmV0dXJuIFFOUnRjVHJhY2sucHJldmlld01pcnJvclJlYXJGYWNpbmcodGhpcy5pZGVudGlmeUlELCBwcmV2aWV3TWlycm9yUmVhckZhY2luZyk7XG4gICAgfTtcbiAgICBRTkNhbWVyYVZpZGVvVHJhY2sucHJvdG90eXBlLmVuY29kZU1pcnJvckZyb250RmFjaW5nID0gZnVuY3Rpb24gKGVuY29kZU1pcnJvckZyb250RmFjaW5nKSB7XG4gICAgICAgIHJldHVybiBRTlJ0Y1RyYWNrLmVuY29kZU1pcnJvckZyb250RmFjaW5nKHRoaXMuaWRlbnRpZnlJRCwgZW5jb2RlTWlycm9yRnJvbnRGYWNpbmcpO1xuICAgIH07XG4gICAgUU5DYW1lcmFWaWRlb1RyYWNrLnByb3RvdHlwZS5lbmNvZGVNaXJyb3JSZWFyRmFjaW5nID0gZnVuY3Rpb24gKGVuY29kZU1pcnJvclJlYXJGYWNpbmcpIHtcbiAgICAgICAgcmV0dXJuIFFOUnRjVHJhY2suZW5jb2RlTWlycm9yUmVhckZhY2luZyh0aGlzLmlkZW50aWZ5SUQsIGVuY29kZU1pcnJvclJlYXJGYWNpbmcpO1xuICAgIH07XG4gICAgUU5DYW1lcmFWaWRlb1RyYWNrLnByb3RvdHlwZS5wdXNoSW1hZ2UgPSBmdW5jdGlvbiAoaW1hZ2UpIHtcbiAgICAgICAgcmV0dXJuIFFOUnRjVHJhY2sucHVzaEltYWdlKHRoaXMuaWRlbnRpZnlJRCwgaW1hZ2UpO1xuICAgIH07XG4gICAgUU5DYW1lcmFWaWRlb1RyYWNrLnByb3RvdHlwZS5zZXRXYXRlck1hcmsgPSBmdW5jdGlvbiAod2F0ZXJNYXJrKSB7XG4gICAgICAgIHJldHVybiBRTlJ0Y1RyYWNrLnNldFdhdGVyTWFyayh0aGlzLmlkZW50aWZ5SUQsIHdhdGVyTWFyayk7XG4gICAgfTtcbiAgICBRTkNhbWVyYVZpZGVvVHJhY2sucHJvdG90eXBlLmNsZWFyV2F0ZXJNYXJrID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gUU5SdGNUcmFjay5jbGVhcldhdGVyTWFyayh0aGlzLmlkZW50aWZ5SUQpO1xuICAgIH07XG4gICAgUU5DYW1lcmFWaWRlb1RyYWNrLnByb3RvdHlwZS50YWtlVmlkZW9TbmFwc2hvdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIHBsYXRmb3JtO1xuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICBwbGF0Zm9ybSA9IHVuaS5nZXRTeXN0ZW1JbmZvU3luYygpLnBsYXRmb3JtO1xuICAgICAgICAgICAgICAgIGlmIChwbGF0Zm9ybSA9PT0gJ2lvcycpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyLCBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUU5SdGNUcmFjay50YWtlVmlkZW9TbmFwc2hvdChfdGhpcy5pZGVudGlmeUlEKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbGlzdGVuZXIgPSBmdW5jdGlvbiAocGFyYW0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUU5FdmVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdvbkxvY2FsVmlkZW9GcmFtZScsIGxpc3RlbmVyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh7IGJhc2U2NDogX3RoaXMudHJpbUJhc2U2NChwYXJhbS5kYXRhKSB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFFORXZlbnQuYWRkRXZlbnRMaXN0ZW5lcignb25Mb2NhbFZpZGVvRnJhbWUnLCBsaXN0ZW5lcik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFFORXZlbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignb25Mb2NhbFZpZGVvRnJhbWUnLCBsaXN0ZW5lcik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIDUwMDApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChwbGF0Zm9ybSA9PT0gJ2FuZHJvaWQnKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiwgbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFFOUnRjVHJhY2sudGFrZVZpZGVvU25hcHNob3QoX3RoaXMuZ2V0VHJhY2tJRCgpLCBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKGRhdGEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gWzJdO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgUU5DYW1lcmFWaWRlb1RyYWNrLnByb3RvdHlwZS50cmltQmFzZTY0ID0gZnVuY3Rpb24gKGJhc2U2NCkge1xuICAgICAgICBpZiAoIWJhc2U2NCkge1xuICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBiYXNlNjQucmVwbGFjZSgvXFxyfFxcbi9nLCAnJyk7XG4gICAgfTtcbiAgICByZXR1cm4gUU5DYW1lcmFWaWRlb1RyYWNrO1xufShSVENMb2NhbFZpZGVvVHJhY2tfMS5RTkxvY2FsVmlkZW9UcmFjaykpO1xuZXhwb3J0cy5RTkNhbWVyYVZpZGVvVHJhY2sgPSBRTkNhbWVyYVZpZGVvVHJhY2s7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///231\n");

/***/ }),

/***/ 232:
/*!*************************************************************************************************************************!*\
  !*** /Users/tongjie/Desktop/QNRTC-Uniapp/demo/js_sdk/QNRTC-UniPlugin-JS/QNRTC-UniPlugin-JS/class/RTCLocalVideoTrack.js ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__webpack_provided_uni_dot_requireNativePlugin) {\n\nvar __extends = this && this.__extends || function () {\n  var _extendStatics = function extendStatics(d, b) {\n    _extendStatics = Object.setPrototypeOf || {\n      __proto__: []\n    } instanceof Array && function (d, b) {\n      d.__proto__ = b;\n    } || function (d, b) {\n      for (var p in b) {\n        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];\n      }\n    };\n    return _extendStatics(d, b);\n  };\n  return function (d, b) {\n    if (typeof b !== \"function\" && b !== null) throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\n    _extendStatics(d, b);\n    function __() {\n      this.constructor = d;\n    }\n    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n  };\n}();\nexports.__esModule = true;\nexports.QNLocalVideoTrack = void 0;\nvar RTCLocalTrack_1 = __webpack_require__(/*! ./RTCLocalTrack */ 230);\nvar RTCInterface_1 = __webpack_require__(/*! ../interface/RTCInterface */ 233);\nvar QNRtcTrack = __webpack_provided_uni_dot_requireNativePlugin('QNRTC-UniPlugin-QNRtcTrack');\nvar isQNVideoEncoderConfig = function isQNVideoEncoderConfig(preset) {\n  return preset.prefer !== undefined;\n};\nvar isQNVideoFormatDefault = function isQNVideoFormatDefault(preset) {\n  return preset in RTCInterface_1.QNVideoFormatDefault;\n};\nvar QNLocalVideoTrack = function (_super) {\n  __extends(QNLocalVideoTrack, _super);\n  function QNLocalVideoTrack() {\n    return _super !== null && _super.apply(this, arguments) || this;\n  }\n  QNLocalVideoTrack.prototype.sendSEI = function (message, repeatCount, uuid) {\n    return QNRtcTrack.sendSEI(this.identifyID, message, repeatCount, uuid);\n  };\n  QNLocalVideoTrack.prototype.setVideoEncoderConfig = function (preset, prefer) {\n    if (isQNVideoEncoderConfig(preset)) {\n      QNRtcTrack.setVideoEncoderConfig(this.identifyID, preset);\n    } else if (isQNVideoFormatDefault(preset)) {\n      if (prefer === undefined) {\n        QNRtcTrack.setVideoEncoderConfigPreset(this.identifyID, preset);\n      } else {\n        QNRtcTrack.setVideoEncoderConfigPreset(this.identifyID, preset, prefer);\n      }\n    }\n  };\n  return QNLocalVideoTrack;\n}(RTCLocalTrack_1.QNLocalTrack);\nexports.QNLocalVideoTrack = QNLocalVideoTrack;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/uni-app-plus-nvue/dist/require-native-plugin.js */ 54)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vanNfc2RrL1FOUlRDLVVuaVBsdWdpbi1KUy9RTlJUQy1VbmlQbHVnaW4tSlMvY2xhc3MvUlRDTG9jYWxWaWRlb1RyYWNrLmpzIl0sIm5hbWVzIjpbIl9fZXh0ZW5kcyIsImV4dGVuZFN0YXRpY3MiLCJkIiwiYiIsIk9iamVjdCIsInNldFByb3RvdHlwZU9mIiwiX19wcm90b19fIiwiQXJyYXkiLCJwIiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwiVHlwZUVycm9yIiwiU3RyaW5nIiwiX18iLCJjb25zdHJ1Y3RvciIsImNyZWF0ZSIsImV4cG9ydHMiLCJfX2VzTW9kdWxlIiwiUU5Mb2NhbFZpZGVvVHJhY2siLCJSVENMb2NhbFRyYWNrXzEiLCJyZXF1aXJlIiwiUlRDSW50ZXJmYWNlXzEiLCJRTlJ0Y1RyYWNrIiwidW5pIiwiaXNRTlZpZGVvRW5jb2RlckNvbmZpZyIsInByZXNldCIsInByZWZlciIsInVuZGVmaW5lZCIsImlzUU5WaWRlb0Zvcm1hdERlZmF1bHQiLCJRTlZpZGVvRm9ybWF0RGVmYXVsdCIsIl9zdXBlciIsImFwcGx5IiwiYXJndW1lbnRzIiwic2VuZFNFSSIsIm1lc3NhZ2UiLCJyZXBlYXRDb3VudCIsInV1aWQiLCJpZGVudGlmeUlEIiwic2V0VmlkZW9FbmNvZGVyQ29uZmlnIiwic2V0VmlkZW9FbmNvZGVyQ29uZmlnUHJlc2V0IiwiUU5Mb2NhbFRyYWNrIl0sIm1hcHBpbmdzIjoiQUFBQSxzRkFBYTs7QUFDYixJQUFJQSxTQUFTLEdBQUksSUFBSSxJQUFJLElBQUksQ0FBQ0EsU0FBUyxJQUFNLFlBQVk7RUFDckQsSUFBSUMsY0FBYSxHQUFHLHVCQUFVQyxDQUFDLEVBQUVDLENBQUMsRUFBRTtJQUNoQ0YsY0FBYSxHQUFHRyxNQUFNLENBQUNDLGNBQWMsSUFDaEM7TUFBRUMsU0FBUyxFQUFFO0lBQUcsQ0FBQyxZQUFZQyxLQUFLLElBQUksVUFBVUwsQ0FBQyxFQUFFQyxDQUFDLEVBQUU7TUFBRUQs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dEJMLFVBQVUsQ0FBQ2lCLDJCQUEyQixDQUFDLElBQUksQ0FBQ0YsVUFBVSxFQUFFWixNQUFNLENBQUM7TUFDbkUsQ0FBQyxNQUNJO1FBQ0RILFVBQVUsQ0FBQ2lCLDJCQUEyQixDQUFDLElBQUksQ0FBQ0YsVUFBVSxFQUFFWixNQUFNLEVBQUVDLE1BQU0sQ0FBQztNQUMzRTtJQUNKO0VBQ0osQ0FBQztFQUNELE9BQU9SLGlCQUFpQjtBQUM1QixDQUFDLENBQUNDLGVBQWUsQ0FBQ3FCLFlBQVksQ0FBRTtBQUNoQ3hCLE9BQU8sQ0FBQ0UsaUJBQWlCLEdBQUdBLGlCQUFpQixDIiwiZmlsZSI6IjIzMi5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBiICE9PSBcImZ1bmN0aW9uXCIgJiYgYiAhPT0gbnVsbClcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDbGFzcyBleHRlbmRzIHZhbHVlIFwiICsgU3RyaW5nKGIpICsgXCIgaXMgbm90IGEgY29uc3RydWN0b3Igb3IgbnVsbFwiKTtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLlFOTG9jYWxWaWRlb1RyYWNrID0gdm9pZCAwO1xudmFyIFJUQ0xvY2FsVHJhY2tfMSA9IHJlcXVpcmUoXCIuL1JUQ0xvY2FsVHJhY2tcIik7XG52YXIgUlRDSW50ZXJmYWNlXzEgPSByZXF1aXJlKFwiLi4vaW50ZXJmYWNlL1JUQ0ludGVyZmFjZVwiKTtcbnZhciBRTlJ0Y1RyYWNrID0gdW5pLnJlcXVpcmVOYXRpdmVQbHVnaW4oJ1FOUlRDLVVuaVBsdWdpbi1RTlJ0Y1RyYWNrJyk7XG52YXIgaXNRTlZpZGVvRW5jb2RlckNvbmZpZyA9IGZ1bmN0aW9uIChwcmVzZXQpIHtcbiAgICByZXR1cm4gcHJlc2V0LnByZWZlciAhPT0gdW5kZWZpbmVkO1xufTtcbnZhciBpc1FOVmlkZW9Gb3JtYXREZWZhdWx0ID0gZnVuY3Rpb24gKHByZXNldCkge1xuICAgIHJldHVybiBwcmVzZXQgaW4gUlRDSW50ZXJmYWNlXzEuUU5WaWRlb0Zvcm1hdERlZmF1bHQ7XG59O1xudmFyIFFOTG9jYWxWaWRlb1RyYWNrID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoUU5Mb2NhbFZpZGVvVHJhY2ssIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gUU5Mb2NhbFZpZGVvVHJhY2soKSB7XG4gICAgICAgIHJldHVybiBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgICB9XG4gICAgUU5Mb2NhbFZpZGVvVHJhY2sucHJvdG90eXBlLnNlbmRTRUkgPSBmdW5jdGlvbiAobWVzc2FnZSwgcmVwZWF0Q291bnQsIHV1aWQpIHtcbiAgICAgICAgcmV0dXJuIFFOUnRjVHJhY2suc2VuZFNFSSh0aGlzLmlkZW50aWZ5SUQsIG1lc3NhZ2UsIHJlcGVhdENvdW50LCB1dWlkKTtcbiAgICB9O1xuICAgIFFOTG9jYWxWaWRlb1RyYWNrLnByb3RvdHlwZS5zZXRWaWRlb0VuY29kZXJDb25maWcgPSBmdW5jdGlvbiAocHJlc2V0LCBwcmVmZXIpIHtcbiAgICAgICAgaWYgKGlzUU5WaWRlb0VuY29kZXJDb25maWcocHJlc2V0KSkge1xuICAgICAgICAgICAgUU5SdGNUcmFjay5zZXRWaWRlb0VuY29kZXJDb25maWcodGhpcy5pZGVudGlmeUlELCBwcmVzZXQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGlzUU5WaWRlb0Zvcm1hdERlZmF1bHQocHJlc2V0KSkge1xuICAgICAgICAgICAgaWYgKHByZWZlciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgUU5SdGNUcmFjay5zZXRWaWRlb0VuY29kZXJDb25maWdQcmVzZXQodGhpcy5pZGVudGlmeUlELCBwcmVzZXQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgUU5SdGNUcmFjay5zZXRWaWRlb0VuY29kZXJDb25maWdQcmVzZXQodGhpcy5pZGVudGlmeUlELCBwcmVzZXQsIHByZWZlcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiBRTkxvY2FsVmlkZW9UcmFjaztcbn0oUlRDTG9jYWxUcmFja18xLlFOTG9jYWxUcmFjaykpO1xuZXhwb3J0cy5RTkxvY2FsVmlkZW9UcmFjayA9IFFOTG9jYWxWaWRlb1RyYWNrO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///232\n");

/***/ }),

/***/ 233:
/*!***********************************************************************************************************************!*\
  !*** /Users/tongjie/Desktop/QNRTC-Uniapp/demo/js_sdk/QNRTC-UniPlugin-JS/QNRTC-UniPlugin-JS/interface/RTCInterface.js ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {\n  if (k2 === undefined) k2 = k;\n  var desc = Object.getOwnPropertyDescriptor(m, k);\n  if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n    desc = {\n      enumerable: true,\n      get: function get() {\n        return m[k];\n      }\n    };\n  }\n  Object.defineProperty(o, k2, desc);\n} : function (o, m, k, k2) {\n  if (k2 === undefined) k2 = k;\n  o[k2] = m[k];\n});\nvar __exportStar = this && this.__exportStar || function (m, exports) {\n  for (var p in m) {\n    if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n  }\n};\nexports.__esModule = true;\n__exportStar(__webpack_require__(/*! ../enum/RTCEnum */ 224), exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vanNfc2RrL1FOUlRDLVVuaVBsdWdpbi1KUy9RTlJUQy1VbmlQbHVnaW4tSlMvaW50ZXJmYWNlL1JUQ0ludGVyZmFjZS5qcyJdLCJuYW1lcyI6WyJfX2NyZWF0ZUJpbmRpbmciLCJPYmplY3QiLCJjcmVhdGUiLCJvIiwibSIsImsiLCJrMiIsInVuZGVmaW5lZCIsImRlc2MiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJfX2VzTW9kdWxlIiwid3JpdGFibGUiLCJjb25maWd1cmFibGUiLCJlbnVtZXJhYmxlIiwiZ2V0IiwiZGVmaW5lUHJvcGVydHkiLCJfX2V4cG9ydFN0YXIiLCJleHBvcnRzIiwicCIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsInJlcXVpcmUiXSwibWFwcGluZ3MiOiJBQUFhOztBQUNiLElBQUlBLGVBQWUsR0FBSSxJQUFJLElBQUksSUFBSSxDQUFDQSxlQUFlLEtBQU1DLE1BQU0sQ0FBQ0MsTUFBTSxHQUFJLFVBQVNDLENBQUMsRUFBRUMsQ0FBQyxFQUFFQyxDQUFDLEVBQUVDLEVBQUUsRUFBRTtFQUM1RixJQUFJQSxFQUFFLEtBQUtDLFNBQVMsRUFBRUQsRUFBRSxHQUFHRCxDQUFDO0VBQzVCLElBQUlHLElBQUksR0FBR1AsTUFBTSxDQUFDUSx3QkFBd0IsQ0FBQ0wsQ0FBQyxFQUFFQyxDQUFDLENBQUM7RUFDaEQsSUFBSSxDQUFDRyxJQUFJLEtBQUssS0FBSyxJQUFJQSxJQUFJLEdBQUcsQ0FBQ0osQ0FBQyxDQUFDTSxVQUFVLEdBQUdGLElBQUksQ0FBQ0csUUFBUSxJQUFJSCxJQUFJLENBQUNJLFlBQVksQ0FBQyxFQUFFO0lBQ2pGSixJQUFJLEdBQUc7TUFBRUssVUFBVSxFQUFFLElBQUk7TUFBRUMsR0FBRyxFQUFFLGVBQVc7UUFBRSxPQUFPVixDQUFDLENBQUNDLENBQUMsQ0FBQztNQUFFO0lBQUUsQ0FBQztFQUMvRDtFQUNBSixNQUFNLENBQUNjLGNBQWMsQ0FBQ1osQ0FBQyxFQUFFRyxFQUFFLEVBQUVFLElBQUksQ0FBQztBQUN0QyxDQUFDLEdBQUssVUFBU0wsQ0FBQyxFQUFFQyxDQUFDLEVBQUVDLENBQUMsRUFBRUMsRUFBRSxFQUFFO0VBQ3hCLElBQUlBLEVBQUUsS0FBS0MsU0FBUyxFQUFFRCxFQUFFLEdBQUdELENBQUM7RUFDNUJGLENBQUMsQ0FBQ0csRUFBRSxDQUFDLEdBQUdGLENBQUMsQ0FBQ0MsQ0FBQyxDQUFDO0FBQ2hCLENBQUUsQ0FBQztBQUNILElBQUlXLFlBQVksR0FBSSxJQUFJLElBQUksSUFBSSxDQUFDQSxZQUFZLElBQUssVUFBU1osQ0FBQyxFQUFFYSxPQUFPLEVBQUU7RUFDbkUsS0FBSyxJQUFJQyxDQUFDLElBQUlkLENBQUM7SUFBRSxJQUFJYyxDQUFDLEtBQUssU0FBUyxJQUFJLENBQUNqQixNQUFNLENBQUNrQixTQUFTLENBQUNDLGNBQWMsQ0FBQ0MsSUFBSSxDQUFDSixPQUFPLEVBQUVDLENBQUMsQ0FBQyxFQUFFbEIsZUFBZSxDQUFDaUIsT0FBTyxFQUFFYixDQUFDLEVBQUVjLENBQUMsQ0FBQztFQUFDO0FBQzlILENBQUM7QUFDREQsT0FBTyxDQUFDUCxVQUFVLEdBQUcsSUFBSTtBQUN6Qk0sWUFBWSxDQUFDTSxtQkFBTyxDQUFDLDBCQUFpQixDQUFDLEVBQUVMLE9BQU8sQ0FBQyIsImZpbGUiOiIyMzMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2NyZWF0ZUJpbmRpbmcgPSAodGhpcyAmJiB0aGlzLl9fY3JlYXRlQmluZGluZykgfHwgKE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xuICAgIHZhciBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihtLCBrKTtcbiAgICBpZiAoIWRlc2MgfHwgKFwiZ2V0XCIgaW4gZGVzYyA/ICFtLl9fZXNNb2R1bGUgOiBkZXNjLndyaXRhYmxlIHx8IGRlc2MuY29uZmlndXJhYmxlKSkge1xuICAgICAgZGVzYyA9IHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbigpIHsgcmV0dXJuIG1ba107IH0gfTtcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIGsyLCBkZXNjKTtcbn0pIDogKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcbiAgICBvW2syXSA9IG1ba107XG59KSk7XG52YXIgX19leHBvcnRTdGFyID0gKHRoaXMgJiYgdGhpcy5fX2V4cG9ydFN0YXIpIHx8IGZ1bmN0aW9uKG0sIGV4cG9ydHMpIHtcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmIChwICE9PSBcImRlZmF1bHRcIiAmJiAhT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGV4cG9ydHMsIHApKSBfX2NyZWF0ZUJpbmRpbmcoZXhwb3J0cywgbSwgcCk7XG59O1xuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbl9fZXhwb3J0U3RhcihyZXF1aXJlKFwiLi4vZW51bS9SVENFbnVtXCIpLCBleHBvcnRzKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///233\n");

/***/ }),

/***/ 234:
/*!******************************************************************************************************************************!*\
  !*** /Users/tongjie/Desktop/QNRTC-Uniapp/demo/js_sdk/QNRTC-UniPlugin-JS/QNRTC-UniPlugin-JS/class/RTCMicrophoneAudioTrack.js ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__webpack_provided_uni_dot_requireNativePlugin) {\n\nvar __extends = this && this.__extends || function () {\n  var _extendStatics = function extendStatics(d, b) {\n    _extendStatics = Object.setPrototypeOf || {\n      __proto__: []\n    } instanceof Array && function (d, b) {\n      d.__proto__ = b;\n    } || function (d, b) {\n      for (var p in b) {\n        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];\n      }\n    };\n    return _extendStatics(d, b);\n  };\n  return function (d, b) {\n    if (typeof b !== \"function\" && b !== null) throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\n    _extendStatics(d, b);\n    function __() {\n      this.constructor = d;\n    }\n    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n  };\n}();\nexports.__esModule = true;\nexports.QNMicrophoneAudioTrack = void 0;\nvar RTCLocalAudioTrack_1 = __webpack_require__(/*! ./RTCLocalAudioTrack */ 235);\nvar RTCAudioMixer_1 = __webpack_require__(/*! ../class/RTCAudioMixer */ 236);\nvar RTCAudioMusicMixer_1 = __webpack_require__(/*! ../class/RTCAudioMusicMixer */ 237);\nvar RTCAudioEffectMixer_1 = __webpack_require__(/*! ../class/RTCAudioEffectMixer */ 238);\nvar QNRtcTrack = __webpack_provided_uni_dot_requireNativePlugin('QNRTC-UniPlugin-QNRtcTrack');\nvar QNMicrophoneAudioTrack = function (_super) {\n  __extends(QNMicrophoneAudioTrack, _super);\n  function QNMicrophoneAudioTrack() {\n    return _super !== null && _super.apply(this, arguments) || this;\n  }\n  QNMicrophoneAudioTrack.prototype.createAudioMixer = function (url) {\n    QNRtcTrack.createAudioMixer(url);\n    return new RTCAudioMixer_1.QNAudioMixer(this.identifyID, url);\n  };\n  QNMicrophoneAudioTrack.prototype.createAudioMusicMixer = function (url) {\n    QNRtcTrack.createAudioMusicMixer(url);\n    return new RTCAudioMusicMixer_1.QNAudioMusicMixer();\n  };\n  QNMicrophoneAudioTrack.prototype.createAudioEffectMixer = function () {\n    QNRtcTrack.createAudioEffectMixer();\n    return new RTCAudioEffectMixer_1.QNAudioEffectMixer();\n  };\n  return QNMicrophoneAudioTrack;\n}(RTCLocalAudioTrack_1.QNLocalAudioTrack);\nexports.QNMicrophoneAudioTrack = QNMicrophoneAudioTrack;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/uni-app-plus-nvue/dist/require-native-plugin.js */ 54)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vanNfc2RrL1FOUlRDLVVuaVBsdWdpbi1KUy9RTlJUQy1VbmlQbHVnaW4tSlMvY2xhc3MvUlRDTWljcm9waG9uZUF1ZGlvVHJhY2suanMiXSwibmFtZXMiOlsiX19leHRlbmRzIiwiZXh0ZW5kU3RhdGljcyIsImQiLCJiIiwiT2JqZWN0Iiwic2V0UHJvdG90eXBlT2YiLCJfX3Byb3RvX18iLCJBcnJheSIsInAiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJUeXBlRXJyb3IiLCJTdHJpbmciLCJfXyIsImNvbnN0cnVjdG9yIiwiY3JlYXRlIiwiZXhwb3J0cyIsIl9fZXNNb2R1bGUiLCJRTk1pY3JvcGhvbmVBdWRpb1RyYWNrIiwiUlRDTG9jYWxBdWRpb1RyYWNrXzEiLCJyZXF1aXJlIiwiUlRDQXVkaW9NaXhlcl8xIiwiUlRDQXVkaW9NdXNpY01peGVyXzEiLCJSVENBdWRpb0VmZmVjdE1peGVyXzEiLCJRTlJ0Y1RyYWNrIiwidW5pIiwiX3N1cGVyIiwiYXBwbHkiLCJhcmd1bWVudHMiLCJjcmVhdGVBdWRpb01peGVyIiwidXJsIiwiUU5BdWRpb01peGVyIiwiaWRlbnRpZnlJRCIsImNyZWF0ZUF1ZGlvTXVzaWNNaXhlciIsIlFOQXVkaW9NdXNpY01peGVyIiwiY3JlYXRlQXVkaW9FZmZlY3RNaXhlciIsIlFOQXVkaW9FZmZlY3RNaXhlciIsIlFOTG9jYWxBdWRpb1RyYWNrIl0sIm1hcHBpbmdzIjoiQUFBQSxzRkFBYTs7QUFDYixJQUFJQSxTQUFTLEdBQUksSUFBSSxJQUFJLElBQUksQ0FBQ0EsU0FBUyxJQUFNLFlBQVk7RUFDckQsSUFBSUMsY0FBYSxHQUFHLHVCQUFVQyxDQUFDLEVBQUVDLENBQUMsRUFBRTtJQUNoQ0YsY0FBYSxHQUFHRyxNQUFNLENBQUNDLGNBQWMsSUFDaEM7TUFBRUMsU0FBUyxFQUFFO0lBQUcsQ0FBQyxZQUFZQyxLQUFLLElBQUksVUFBVUwsQ0FBQyxFQUFFQyxDQUFDLEVBQUU7TUFBRUQs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c0JBQXNCLEdBQUdBLHNCQUFzQixDIiwiZmlsZSI6IjIzNC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBiICE9PSBcImZ1bmN0aW9uXCIgJiYgYiAhPT0gbnVsbClcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDbGFzcyBleHRlbmRzIHZhbHVlIFwiICsgU3RyaW5nKGIpICsgXCIgaXMgbm90IGEgY29uc3RydWN0b3Igb3IgbnVsbFwiKTtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLlFOTWljcm9waG9uZUF1ZGlvVHJhY2sgPSB2b2lkIDA7XG52YXIgUlRDTG9jYWxBdWRpb1RyYWNrXzEgPSByZXF1aXJlKFwiLi9SVENMb2NhbEF1ZGlvVHJhY2tcIik7XG52YXIgUlRDQXVkaW9NaXhlcl8xID0gcmVxdWlyZShcIi4uL2NsYXNzL1JUQ0F1ZGlvTWl4ZXJcIik7XG52YXIgUlRDQXVkaW9NdXNpY01peGVyXzEgPSByZXF1aXJlKFwiLi4vY2xhc3MvUlRDQXVkaW9NdXNpY01peGVyXCIpO1xudmFyIFJUQ0F1ZGlvRWZmZWN0TWl4ZXJfMSA9IHJlcXVpcmUoXCIuLi9jbGFzcy9SVENBdWRpb0VmZmVjdE1peGVyXCIpO1xudmFyIFFOUnRjVHJhY2sgPSB1bmkucmVxdWlyZU5hdGl2ZVBsdWdpbignUU5SVEMtVW5pUGx1Z2luLVFOUnRjVHJhY2snKTtcbnZhciBRTk1pY3JvcGhvbmVBdWRpb1RyYWNrID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoUU5NaWNyb3Bob25lQXVkaW9UcmFjaywgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBRTk1pY3JvcGhvbmVBdWRpb1RyYWNrKCkge1xuICAgICAgICByZXR1cm4gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gICAgfVxuICAgIFFOTWljcm9waG9uZUF1ZGlvVHJhY2sucHJvdG90eXBlLmNyZWF0ZUF1ZGlvTWl4ZXIgPSBmdW5jdGlvbiAodXJsKSB7XG4gICAgICAgIFFOUnRjVHJhY2suY3JlYXRlQXVkaW9NaXhlcih1cmwpO1xuICAgICAgICByZXR1cm4gbmV3IFJUQ0F1ZGlvTWl4ZXJfMS5RTkF1ZGlvTWl4ZXIodGhpcy5pZGVudGlmeUlELCB1cmwpO1xuICAgIH07XG4gICAgUU5NaWNyb3Bob25lQXVkaW9UcmFjay5wcm90b3R5cGUuY3JlYXRlQXVkaW9NdXNpY01peGVyID0gZnVuY3Rpb24gKHVybCkge1xuICAgICAgICBRTlJ0Y1RyYWNrLmNyZWF0ZUF1ZGlvTXVzaWNNaXhlcih1cmwpO1xuICAgICAgICByZXR1cm4gbmV3IFJUQ0F1ZGlvTXVzaWNNaXhlcl8xLlFOQXVkaW9NdXNpY01peGVyKCk7XG4gICAgfTtcbiAgICBRTk1pY3JvcGhvbmVBdWRpb1RyYWNrLnByb3RvdHlwZS5jcmVhdGVBdWRpb0VmZmVjdE1peGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBRTlJ0Y1RyYWNrLmNyZWF0ZUF1ZGlvRWZmZWN0TWl4ZXIoKTtcbiAgICAgICAgcmV0dXJuIG5ldyBSVENBdWRpb0VmZmVjdE1peGVyXzEuUU5BdWRpb0VmZmVjdE1peGVyKCk7XG4gICAgfTtcbiAgICByZXR1cm4gUU5NaWNyb3Bob25lQXVkaW9UcmFjaztcbn0oUlRDTG9jYWxBdWRpb1RyYWNrXzEuUU5Mb2NhbEF1ZGlvVHJhY2spKTtcbmV4cG9ydHMuUU5NaWNyb3Bob25lQXVkaW9UcmFjayA9IFFOTWljcm9waG9uZUF1ZGlvVHJhY2s7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///234\n");

/***/ }),

/***/ 235:
/*!*************************************************************************************************************************!*\
  !*** /Users/tongjie/Desktop/QNRTC-Uniapp/demo/js_sdk/QNRTC-UniPlugin-JS/QNRTC-UniPlugin-JS/class/RTCLocalAudioTrack.js ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__webpack_provided_uni_dot_requireNativePlugin) {\n\nvar __extends = this && this.__extends || function () {\n  var _extendStatics = function extendStatics(d, b) {\n    _extendStatics = Object.setPrototypeOf || {\n      __proto__: []\n    } instanceof Array && function (d, b) {\n      d.__proto__ = b;\n    } || function (d, b) {\n      for (var p in b) {\n        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];\n      }\n    };\n    return _extendStatics(d, b);\n  };\n  return function (d, b) {\n    if (typeof b !== \"function\" && b !== null) throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\n    _extendStatics(d, b);\n    function __() {\n      this.constructor = d;\n    }\n    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n  };\n}();\nexports.__esModule = true;\nexports.QNLocalAudioTrack = void 0;\nvar RTCLocalTrack_1 = __webpack_require__(/*! ./RTCLocalTrack */ 230);\nvar QNRtcTrack = __webpack_provided_uni_dot_requireNativePlugin('QNRTC-UniPlugin-QNRtcTrack');\nvar QNLocalAudioTrack = function (_super) {\n  __extends(QNLocalAudioTrack, _super);\n  function QNLocalAudioTrack() {\n    return _super !== null && _super.apply(this, arguments) || this;\n  }\n  QNLocalAudioTrack.prototype.setVolume = function (volume) {\n    return QNRtcTrack.setVolume(this.identifyID, volume);\n  };\n  QNLocalAudioTrack.prototype.getVolumeLevel = function () {\n    return QNRtcTrack.getVolumeLevel(this.identifyID);\n  };\n  return QNLocalAudioTrack;\n}(RTCLocalTrack_1.QNLocalTrack);\nexports.QNLocalAudioTrack = QNLocalAudioTrack;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/uni-app-plus-nvue/dist/require-native-plugin.js */ 54)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vanNfc2RrL1FOUlRDLVVuaVBsdWdpbi1KUy9RTlJUQy1VbmlQbHVnaW4tSlMvY2xhc3MvUlRDTG9jYWxBdWRpb1RyYWNrLmpzIl0sIm5hbWVzIjpbIl9fZXh0ZW5kcyIsImV4dGVuZFN0YXRpY3MiLCJkIiwiYiIsIk9iamVjdCIsInNldFByb3RvdHlwZU9mIiwiX19wcm90b19fIiwiQXJyYXkiLCJwIiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwiVHlwZUVycm9yIiwiU3RyaW5nIiwiX18iLCJjb25zdHJ1Y3RvciIsImNyZWF0ZSIsImV4cG9ydHMiLCJfX2VzTW9kdWxlIiwiUU5Mb2NhbEF1ZGlvVHJhY2siLCJSVENMb2NhbFRyYWNrXzEiLCJyZXF1aXJlIiwiUU5SdGNUcmFjayIsInVuaSIsIl9zdXBlciIsImFwcGx5IiwiYXJndW1lbnRzIiwic2V0Vm9sdW1lIiwidm9sdW1lIiwiaWRlbnRpZnlJRCIsImdldFZvbHVtZUxldmVsIiwiUU5Mb2NhbFRyYWNrIl0sIm1hcHBpbmdzIjoiQUFBQSxzRkFBYTs7QUFDYixJQUFJQSxTQUFTLEdBQUksSUFBSSxJQUFJLElBQUksQ0FBQ0EsU0FBUyxJQUFNLFlBQVk7RUFDckQsSUFBSUMsY0FBYSxHQUFHLHVCQUFVQyxDQUFDLEVBQUVDLENBQUMsRUFBRTtJQUNoQ0YsY0FBYSxHQUFHRyxNQUFNLENBQUNDLGNBQWMsSUFDaEM7TUFBRUMsU0FBUyxFQUFFO0lBQUcsQ0FBQyxZQUFZQyxLQUFLLElBQUksVUFBVUwsQ0FBQyxFQUFFQyxDQUFDLEVBQUU7TUFBRUQsQ0FBQyxDQUFDSSxTQUFTLEdBQUdILENBQUM7SUFBRSxDQUFFLElBQzVFLFVBQVVELENBQUMsRUFBRUMsQ0FBQyxFQUFFO01BQUUsS0FBSyxJQUFJSyxDQUFDLElBQUlMLENBQUM7UUFBRSxJQUFJQyxNQUFNLENBQUNLLFNBQVMsQ0FBQ0MsY0FBYyxDQUFDQyxJQUFJLENBQUNSLENBQUMsRUFBRUssQ0FBQyxDQUFDLEVBQUVOLENBQUMsQ0FBQ00sQ0FBQyxDQUFDLEdBQUdMLENBQUMsQ0FBQ0ssQ0FBQyxDQUFDO01BQUM7SUFBQyxDQUFDO0lBQ3JHLE9BQU9QLGNBQWEsQ0FBQ0MsQ0FBQyxFQUFFQyxDQUFDLENBQUM7RUFDOUIsQ0FBQztFQUNELE9BQU8sVUFBVUQsQ0FBQyxFQUFFQyxDQUFDLEVBQUU7SUFDbkIsSUFBSSxPQUFPQSxDQUFDLEtBQUssVUFBVSxJQUFJQSxDQUFDLEtBQUssSUFBSSxFQUNyQyxNQUFNLElBQUlTLFNBQVMsQ0FBQyxzQkFBc0IsR0FBR0MsTUFBTSxDQUFDVixDQUFDLENBQUMsR0FBRywrQkFBK0IsQ0FBQztJQUM3RkYsY0FBYSxDQUFDQyxDQUFDLEVBQUVDLENBQUMsQ0FBQztJQUNuQixTQUFTVyxFQUFFLEdBQUc7TUFBRSxJQUFJLENBQUNDLFdBQVcsR0FBR2IsQ0FBQztJQUFFO0lBQ3RDQSxDQUFDLENBQUNPLFNBQVMsR0FBR04sQ0FBQyxLQUFLLElBQUksR0FBR0MsTUFBTSxDQUFDWSxNQUFNLENBQUNiLENBQUMsQ0FBQyxJQUFJVyxFQUFFLENBQUNMLFNBQVMsR0FBR04sQ0FBQyxDQUFDTSxTQUFTLEVBQUUsSUFBSUssRUFBRSxFQUFFLENBQUM7RUFDeEYsQ0FBQztBQUNMLENBQUMsRUFBRztBQUNKRyxPQUFPLENBQUNDLFVBQVUsR0FBRyxJQUFJO0FBQ3pCRCxPQUFPLENBQUNFLGlCQUFpQixHQUFHLEtBQUssQ0FBQztBQUNsQyxJQUFJQyxlQUFlLEdBQUdDLG1CQUFPLENBQUMsMEJBQWlCLENBQUM7QUFDaEQsSUFBSUMsVUFBVSxHQUFHQyw4Q0FBdUIsQ0FBQyw0QkFBNEIsQ0FBQztBQUN0RSxJQUFJSixpQkFBaUIsR0FBSSxVQUFVSyxNQUFNLEVBQUU7RUFDdkN4QixTQUFTLENBQUNtQixpQkFBaUIsRUFBRUssTUFBTSxDQUFDO0VBQ3BDLFNBQVNMLGlCQUFpQixHQUFHO0lBQ3pCLE9BQU9LLE1BQU0sS0FBSyxJQUFJLElBQUlBLE1BQU0sQ0FBQ0MsS0FBSyxDQUFDLElBQUksRUFBRUMsU0FBUyxDQUFDLElBQUksSUFBSTtFQUNuRTtFQUNBUCxpQkFBaUIsQ0FBQ1YsU0FBUyxDQUFDa0IsU0FBUyxHQUFHLFVBQVVDLE1BQU0sRUFBRTtJQUN0RCxPQUFPTixVQUFVLENBQUNLLFNBQVMsQ0FBQyxJQUFJLENBQUNFLFVBQVUsRUFBRUQsTUFBTSxDQUFDO0VBQ3hELENBQUM7RUFDRFQsaUJBQWlCLENBQUNWLFNBQVMsQ0FBQ3FCLGNBQWMsR0FBRyxZQUFZO0lBQ3JELE9BQU9SLFVBQVUsQ0FBQ1EsY0FBYyxDQUFDLElBQUksQ0FBQ0QsVUFBVSxDQUFDO0VBQ3JELENBQUM7RUFDRCxPQUFPVixpQkFBaUI7QUFDNUIsQ0FBQyxDQUFDQyxlQUFlLENBQUNXLFlBQVksQ0FBRTtBQUNoQ2QsT0FBTyxDQUFDRSxpQkFBaUIsR0FBR0EsaUJBQWlCLEMiLCJmaWxlIjoiMjM1LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYiwgcCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICB9O1xuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBpZiAodHlwZW9mIGIgIT09IFwiZnVuY3Rpb25cIiAmJiBiICE9PSBudWxsKVxuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNsYXNzIGV4dGVuZHMgdmFsdWUgXCIgKyBTdHJpbmcoYikgKyBcIiBpcyBub3QgYSBjb25zdHJ1Y3RvciBvciBudWxsXCIpO1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuUU5Mb2NhbEF1ZGlvVHJhY2sgPSB2b2lkIDA7XG52YXIgUlRDTG9jYWxUcmFja18xID0gcmVxdWlyZShcIi4vUlRDTG9jYWxUcmFja1wiKTtcbnZhciBRTlJ0Y1RyYWNrID0gdW5pLnJlcXVpcmVOYXRpdmVQbHVnaW4oJ1FOUlRDLVVuaVBsdWdpbi1RTlJ0Y1RyYWNrJyk7XG52YXIgUU5Mb2NhbEF1ZGlvVHJhY2sgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhRTkxvY2FsQXVkaW9UcmFjaywgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBRTkxvY2FsQXVkaW9UcmFjaygpIHtcbiAgICAgICAgcmV0dXJuIF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICAgIH1cbiAgICBRTkxvY2FsQXVkaW9UcmFjay5wcm90b3R5cGUuc2V0Vm9sdW1lID0gZnVuY3Rpb24gKHZvbHVtZSkge1xuICAgICAgICByZXR1cm4gUU5SdGNUcmFjay5zZXRWb2x1bWUodGhpcy5pZGVudGlmeUlELCB2b2x1bWUpO1xuICAgIH07XG4gICAgUU5Mb2NhbEF1ZGlvVHJhY2sucHJvdG90eXBlLmdldFZvbHVtZUxldmVsID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gUU5SdGNUcmFjay5nZXRWb2x1bWVMZXZlbCh0aGlzLmlkZW50aWZ5SUQpO1xuICAgIH07XG4gICAgcmV0dXJuIFFOTG9jYWxBdWRpb1RyYWNrO1xufShSVENMb2NhbFRyYWNrXzEuUU5Mb2NhbFRyYWNrKSk7XG5leHBvcnRzLlFOTG9jYWxBdWRpb1RyYWNrID0gUU5Mb2NhbEF1ZGlvVHJhY2s7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///235\n");

/***/ }),

/***/ 236:
/*!********************************************************************************************************************!*\
  !*** /Users/tongjie/Desktop/QNRTC-Uniapp/demo/js_sdk/QNRTC-UniPlugin-JS/QNRTC-UniPlugin-JS/class/RTCAudioMixer.js ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__webpack_provided_uni_dot_requireNativePlugin) {\n\nexports.__esModule = true;\nexports.QNAudioMixer = void 0;\nvar QNRtcAudioMixer = __webpack_provided_uni_dot_requireNativePlugin('QNRTC-UniPlugin-QNRtcAudioMixer');\nvar QNEvent = __webpack_provided_uni_dot_requireNativePlugin('globalEvent');\nvar QNAudioMixer = function () {\n  function QNAudioMixer(identifyID, url) {\n    this.variationList = ['onStateChanged'];\n    this.identifyID = identifyID;\n    this.url = url;\n  }\n  QNAudioMixer.prototype.createAudioMixerCallback = function (name, listener) {\n    if (name === 'onStateChanged') {\n      var variationCallback = function variationCallback(params) {\n        if (params.state) {\n          listener(params);\n        }\n      };\n      return variationCallback;\n    }\n  };\n  QNAudioMixer.prototype.on = function (name, listener) {\n    if (this.variationList.some(function (item) {\n      return item === name;\n    })) {\n      var callback = this.createAudioMixerCallback(name, listener);\n      QNEvent.addEventListener(name, callback);\n    } else {\n      QNEvent.addEventListener(name, listener);\n    }\n  };\n  QNAudioMixer.prototype.off = function (name, listener) {\n    QNEvent.removeEventListener(name, listener);\n  };\n  QNAudioMixer.prototype.start = function (loopTimes) {\n    QNRtcAudioMixer.start(this.identifyID, loopTimes);\n  };\n  QNAudioMixer.prototype.stop = function () {\n    QNRtcAudioMixer.stop(this.identifyID);\n  };\n  QNAudioMixer.prototype.resume = function () {\n    QNRtcAudioMixer.resume(this.identifyID);\n  };\n  QNAudioMixer.prototype.pause = function () {\n    QNRtcAudioMixer.pause(this.identifyID);\n  };\n  QNAudioMixer.prototype.seekTo = function (timeUs) {\n    QNRtcAudioMixer.seekTo(this.identifyID, timeUs);\n  };\n  QNAudioMixer.prototype.setMixingVolume = function (microphoneVolume, musicVolume) {\n    QNRtcAudioMixer.setMixingVolume(this.identifyID, microphoneVolume, musicVolume);\n  };\n  QNAudioMixer.prototype.setPlayingVolume = function (volume) {\n    QNRtcAudioMixer.setPlayingVolume(this.identifyID, volume);\n  };\n  QNAudioMixer.prototype.getDuration = function () {\n    return QNRtcAudioMixer.getDuration(this.identifyID);\n  };\n  QNAudioMixer.prototype.getCurrentPosition = function () {\n    return QNRtcAudioMixer.getCurrentPosition(this.identifyID);\n  };\n  QNAudioMixer.prototype.setPlayBack = function (playBack) {\n    QNRtcAudioMixer.setPlayBack(this.identifyID, playBack);\n  };\n  return QNAudioMixer;\n}();\nexports.QNAudioMixer = QNAudioMixer;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/uni-app-plus-nvue/dist/require-native-plugin.js */ 54)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vanNfc2RrL1FOUlRDLVVuaVBsdWdpbi1KUy9RTlJUQy1VbmlQbHVnaW4tSlMvY2xhc3MvUlRDQXVkaW9NaXhlci5qcyJdLCJuYW1lcyI6WyJleHBvcnRzIiwiX19lc01vZHVsZSIsIlFOQXVkaW9NaXhlciIsIlFOUnRjQXVkaW9NaXhlciIsInVuaSIsIlFORXZlbnQiLCJpZGVudGlmeUlEIiwidXJsIiwidmFyaWF0aW9uTGlzdCIsInByb3RvdHlwZSIsImNyZWF0ZUF1ZGlvTWl4ZXJDYWxsYmFjayIsIm5hbWUiLCJsaXN0ZW5lciIsInZhcmlhdGlvbkNhbGxiYWNrIiwicGFyYW1zIiwic3RhdGUiLCJvbiIsInNvbWUiLCJpdGVtIiwiY2FsbGJhY2siLCJhZGRFdmVudExpc3RlbmVyIiwib2ZmIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInN0YXJ0IiwibG9vcFRpbWVzIiwic3RvcCIsInJlc3VtZSIsInBhdXNlIiwic2Vla1RvIiwidGltZVVzIiwic2V0TWl4aW5nVm9sdW1lIiwibWljcm9waG9uZVZvbHVtZSIsIm11c2ljVm9sdW1lIiwic2V0UGxheWluZ1ZvbHVtZSIsInZvbHVtZSIsImdldER1cmF0aW9uIiwiZ2V0Q3VycmVudFBvc2l0aW9uIiwic2V0UGxheUJhY2siLCJwbGF5QmFjayJdLCJtYXBwaW5ncyI6IkFBQUEsc0ZBQWE7O0FBQ2JBLE9BQU8sQ0FBQ0MsVUFBVSxHQUFHLElBQUk7QUFDekJELE9BQU8sQ0FBQ0UsWUFBWSxHQUFHLEtBQUssQ0FBQztBQUM3QixJQUFJQyxlQUFlLEdBQUdDLDhDQUF1QixDQUFDLGlDQUFpQyxDQUFDO0FBQ2hGLElBQUlDLE9BQU8sR0FBR0QsOENBQXVCLENBQUMsYUFBYSxDQUFDO0FBQ3BELElBQUlGLFlBQVksR0FBSSxZQUFZO0VBQzVCLFNBQVNBLFlBQVksQ0FBQ0ksVUFBVSxFQUFFQyxHQUFHLEVBQUU7SUFDbkMsSUFBSSxDQUFDQyxhQUFhLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQztJQUN2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VUFBVSxDQUFDO0VBQ3ZELENBQUM7RUFDREosWUFBWSxDQUFDTyxTQUFTLENBQUMyQixrQkFBa0IsR0FBRyxZQUFZO0lBQ3BELE9BQU9qQyxlQUFlLENBQUNpQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUM5QixVQUFVLENBQUM7RUFDOUQsQ0FBQztFQUNESixZQUFZLENBQUNPLFNBQVMsQ0FBQzRCLFdBQVcsR0FBRyxVQUFVQyxRQUFRLEVBQUU7SUFDckRuQyxlQUFlLENBQUNrQyxXQUFXLENBQUMsSUFBSSxDQUFDL0IsVUFBVSxFQUFFZ0MsUUFBUSxDQUFDO0VBQzFELENBQUM7RUFDRCxPQUFPcEMsWUFBWTtBQUN2QixDQUFDLEVBQUc7QUFDSkYsT0FBTyxDQUFDRSxZQUFZLEdBQUdBLFlBQVksQyIsImZpbGUiOiIyMzYuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLlFOQXVkaW9NaXhlciA9IHZvaWQgMDtcbnZhciBRTlJ0Y0F1ZGlvTWl4ZXIgPSB1bmkucmVxdWlyZU5hdGl2ZVBsdWdpbignUU5SVEMtVW5pUGx1Z2luLVFOUnRjQXVkaW9NaXhlcicpO1xudmFyIFFORXZlbnQgPSB1bmkucmVxdWlyZU5hdGl2ZVBsdWdpbignZ2xvYmFsRXZlbnQnKTtcbnZhciBRTkF1ZGlvTWl4ZXIgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFFOQXVkaW9NaXhlcihpZGVudGlmeUlELCB1cmwpIHtcbiAgICAgICAgdGhpcy52YXJpYXRpb25MaXN0ID0gWydvblN0YXRlQ2hhbmdlZCddO1xuICAgICAgICB0aGlzLmlkZW50aWZ5SUQgPSBpZGVudGlmeUlEO1xuICAgICAgICB0aGlzLnVybCA9IHVybDtcbiAgICB9XG4gICAgUU5BdWRpb01peGVyLnByb3RvdHlwZS5jcmVhdGVBdWRpb01peGVyQ2FsbGJhY2sgPSBmdW5jdGlvbiAobmFtZSwgbGlzdGVuZXIpIHtcbiAgICAgICAgaWYgKG5hbWUgPT09ICdvblN0YXRlQ2hhbmdlZCcpIHtcbiAgICAgICAgICAgIHZhciB2YXJpYXRpb25DYWxsYmFjayA9IGZ1bmN0aW9uIChwYXJhbXMpIHtcbiAgICAgICAgICAgICAgICBpZiAocGFyYW1zLnN0YXRlKSB7XG4gICAgICAgICAgICAgICAgICAgIGxpc3RlbmVyKHBhcmFtcyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHJldHVybiB2YXJpYXRpb25DYWxsYmFjaztcbiAgICAgICAgfVxuICAgIH07XG4gICAgUU5BdWRpb01peGVyLnByb3RvdHlwZS5vbiA9IGZ1bmN0aW9uIChuYW1lLCBsaXN0ZW5lcikge1xuICAgICAgICBpZiAodGhpcy52YXJpYXRpb25MaXN0LnNvbWUoZnVuY3Rpb24gKGl0ZW0pIHsgcmV0dXJuIGl0ZW0gPT09IG5hbWU7IH0pKSB7XG4gICAgICAgICAgICB2YXIgY2FsbGJhY2sgPSB0aGlzLmNyZWF0ZUF1ZGlvTWl4ZXJDYWxsYmFjayhuYW1lLCBsaXN0ZW5lcik7XG4gICAgICAgICAgICBRTkV2ZW50LmFkZEV2ZW50TGlzdGVuZXIobmFtZSwgY2FsbGJhY2spO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgUU5FdmVudC5hZGRFdmVudExpc3RlbmVyKG5hbWUsIGxpc3RlbmVyKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgUU5BdWRpb01peGVyLnByb3RvdHlwZS5vZmYgPSBmdW5jdGlvbiAobmFtZSwgbGlzdGVuZXIpIHtcbiAgICAgICAgUU5FdmVudC5yZW1vdmVFdmVudExpc3RlbmVyKG5hbWUsIGxpc3RlbmVyKTtcbiAgICB9O1xuICAgIFFOQXVkaW9NaXhlci5wcm90b3R5cGUuc3RhcnQgPSBmdW5jdGlvbiAobG9vcFRpbWVzKSB7XG4gICAgICAgIFFOUnRjQXVkaW9NaXhlci5zdGFydCh0aGlzLmlkZW50aWZ5SUQsIGxvb3BUaW1lcyk7XG4gICAgfTtcbiAgICBRTkF1ZGlvTWl4ZXIucHJvdG90eXBlLnN0b3AgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIFFOUnRjQXVkaW9NaXhlci5zdG9wKHRoaXMuaWRlbnRpZnlJRCk7XG4gICAgfTtcbiAgICBRTkF1ZGlvTWl4ZXIucHJvdG90eXBlLnJlc3VtZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgUU5SdGNBdWRpb01peGVyLnJlc3VtZSh0aGlzLmlkZW50aWZ5SUQpO1xuICAgIH07XG4gICAgUU5BdWRpb01peGVyLnByb3RvdHlwZS5wYXVzZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgUU5SdGNBdWRpb01peGVyLnBhdXNlKHRoaXMuaWRlbnRpZnlJRCk7XG4gICAgfTtcbiAgICBRTkF1ZGlvTWl4ZXIucHJvdG90eXBlLnNlZWtUbyA9IGZ1bmN0aW9uICh0aW1lVXMpIHtcbiAgICAgICAgUU5SdGNBdWRpb01peGVyLnNlZWtUbyh0aGlzLmlkZW50aWZ5SUQsIHRpbWVVcyk7XG4gICAgfTtcbiAgICBRTkF1ZGlvTWl4ZXIucHJvdG90eXBlLnNldE1peGluZ1ZvbHVtZSA9IGZ1bmN0aW9uIChtaWNyb3Bob25lVm9sdW1lLCBtdXNpY1ZvbHVtZSkge1xuICAgICAgICBRTlJ0Y0F1ZGlvTWl4ZXIuc2V0TWl4aW5nVm9sdW1lKHRoaXMuaWRlbnRpZnlJRCwgbWljcm9waG9uZVZvbHVtZSwgbXVzaWNWb2x1bWUpO1xuICAgIH07XG4gICAgUU5BdWRpb01peGVyLnByb3RvdHlwZS5zZXRQbGF5aW5nVm9sdW1lID0gZnVuY3Rpb24gKHZvbHVtZSkge1xuICAgICAgICBRTlJ0Y0F1ZGlvTWl4ZXIuc2V0UGxheWluZ1ZvbHVtZSh0aGlzLmlkZW50aWZ5SUQsIHZvbHVtZSk7XG4gICAgfTtcbiAgICBRTkF1ZGlvTWl4ZXIucHJvdG90eXBlLmdldER1cmF0aW9uID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gUU5SdGNBdWRpb01peGVyLmdldER1cmF0aW9uKHRoaXMuaWRlbnRpZnlJRCk7XG4gICAgfTtcbiAgICBRTkF1ZGlvTWl4ZXIucHJvdG90eXBlLmdldEN1cnJlbnRQb3NpdGlvbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIFFOUnRjQXVkaW9NaXhlci5nZXRDdXJyZW50UG9zaXRpb24odGhpcy5pZGVudGlmeUlEKTtcbiAgICB9O1xuICAgIFFOQXVkaW9NaXhlci5wcm90b3R5cGUuc2V0UGxheUJhY2sgPSBmdW5jdGlvbiAocGxheUJhY2spIHtcbiAgICAgICAgUU5SdGNBdWRpb01peGVyLnNldFBsYXlCYWNrKHRoaXMuaWRlbnRpZnlJRCwgcGxheUJhY2spO1xuICAgIH07XG4gICAgcmV0dXJuIFFOQXVkaW9NaXhlcjtcbn0oKSk7XG5leHBvcnRzLlFOQXVkaW9NaXhlciA9IFFOQXVkaW9NaXhlcjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///236\n");

/***/ }),

/***/ 237:
/*!*************************************************************************************************************************!*\
  !*** /Users/tongjie/Desktop/QNRTC-Uniapp/demo/js_sdk/QNRTC-UniPlugin-JS/QNRTC-UniPlugin-JS/class/RTCAudioMusicMixer.js ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__webpack_provided_uni_dot_requireNativePlugin) {\n\nexports.__esModule = true;\nexports.QNAudioMusicMixer = void 0;\nvar QNRtcAudioMusicMixer = __webpack_provided_uni_dot_requireNativePlugin('QNRTC-UniPlugin-QNRtcAudioMusicMixer');\nvar QNEvent = __webpack_provided_uni_dot_requireNativePlugin('globalEvent');\nvar QNAudioMusicMixer = function () {\n  function QNAudioMusicMixer() {\n    this.variationList = ['onStateChanged'];\n    this.eventMap = {\n      onStateChanged: 'onMusicStateChanged',\n      onMixing: 'onMusicMixing',\n      onError: 'onMusicError'\n    };\n  }\n  QNAudioMusicMixer.prototype.createAudioMusicMixerCallback = function (name, listener) {\n    if (name === 'onStateChanged') {\n      var variationCallback = function variationCallback(params) {\n        if (params.state) {\n          listener(params);\n        }\n      };\n      return variationCallback;\n    }\n  };\n  QNAudioMusicMixer.prototype.on = function (name, listener) {\n    if (this.variationList.some(function (item) {\n      return item === name;\n    })) {\n      var callback = this.createAudioMusicMixerCallback(name, listener);\n      QNEvent.addEventListener(this.eventMap[name], callback);\n    } else {\n      QNEvent.addEventListener(this.eventMap[name], listener);\n    }\n  };\n  QNAudioMusicMixer.prototype.off = function (name, listener) {\n    QNEvent.removeEventListener(this.eventMap[name], listener);\n  };\n  QNAudioMusicMixer.prototype.setPublishEnabled = function (enabled) {\n    QNRtcAudioMusicMixer.setPublishEnabled(enabled);\n  };\n  QNAudioMusicMixer.prototype.isPublishEnabled = function () {\n    return QNRtcAudioMusicMixer.isPublishEnabled();\n  };\n  QNAudioMusicMixer.prototype.getDuration = function (filePath) {\n    return QNRtcAudioMusicMixer.getDuration(filePath);\n  };\n  QNAudioMusicMixer.prototype.start = function (loopCount) {\n    if (loopCount === void 0) {\n      loopCount = 1;\n    }\n    QNRtcAudioMusicMixer.start(loopCount);\n  };\n  QNAudioMusicMixer.prototype.stop = function () {\n    QNRtcAudioMusicMixer.stop();\n  };\n  QNAudioMusicMixer.prototype.resume = function () {\n    QNRtcAudioMusicMixer.resume();\n  };\n  QNAudioMusicMixer.prototype.pause = function () {\n    QNRtcAudioMusicMixer.pause();\n  };\n  QNAudioMusicMixer.prototype.getCurrentPosition = function () {\n    return QNRtcAudioMusicMixer.getCurrentPosition();\n  };\n  QNAudioMusicMixer.prototype.seekTo = function (timeUs) {\n    QNRtcAudioMusicMixer.seekTo(timeUs);\n  };\n  QNAudioMusicMixer.prototype.setMusicVolume = function (musicVolume) {\n    QNRtcAudioMusicMixer.setMusicVolume(musicVolume);\n  };\n  QNAudioMusicMixer.prototype.getMusicVolume = function () {\n    return QNRtcAudioMusicMixer.getMusicVolume();\n  };\n  QNAudioMusicMixer.prototype.setStartPosition = function (position) {\n    QNRtcAudioMusicMixer.setStartPosition(position);\n  };\n  QNAudioMusicMixer.prototype.getStartPosition = function () {\n    return QNRtcAudioMusicMixer.getStartPosition();\n  };\n  return QNAudioMusicMixer;\n}();\nexports.QNAudioMusicMixer = QNAudioMusicMixer;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/uni-app-plus-nvue/dist/require-native-plugin.js */ 54)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vanNfc2RrL1FOUlRDLVVuaVBsdWdpbi1KUy9RTlJUQy1VbmlQbHVnaW4tSlMvY2xhc3MvUlRDQXVkaW9NdXNpY01peGVyLmpzIl0sIm5hbWVzIjpbImV4cG9ydHMiLCJfX2VzTW9kdWxlIiwiUU5BdWRpb011c2ljTWl4ZXIiLCJRTlJ0Y0F1ZGlvTXVzaWNNaXhlciIsInVuaSIsIlFORXZlbnQiLCJ2YXJpYXRpb25MaXN0IiwiZXZlbnRNYXAiLCJvblN0YXRlQ2hhbmdlZCIsIm9uTWl4aW5nIiwib25FcnJvciIsInByb3RvdHlwZSIsImNyZWF0ZUF1ZGlvTXVzaWNNaXhlckNhbGxiYWNrIiwibmFtZSIsImxpc3RlbmVyIiwidmFyaWF0aW9uQ2FsbGJhY2siLCJwYXJhbXMiLCJzdGF0ZSIsIm9uIiwic29tZSIsIml0ZW0iLCJjYWxsYmFjayIsImFkZEV2ZW50TGlzdGVuZXIiLCJvZmYiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwic2V0UHVibGlzaEVuYWJsZWQiLCJlbmFibGVkIiwiaXNQdWJsaXNoRW5hYmxlZCIsImdldER1cmF0aW9uIiwiZmlsZVBhdGgiLCJzdGFydCIsImxvb3BDb3VudCIsInN0b3AiLCJyZXN1bWUiLCJwYXVzZSIsImdldEN1cnJlbnRQb3NpdGlvbiIsInNlZWtUbyIsInRpbWVVcyIsInNldE11c2ljVm9sdW1lIiwibXVzaWNWb2x1bWUiLCJnZXRNdXNpY1ZvbHVtZSIsInNldFN0YXJ0UG9zaXRpb24iLCJwb3NpdGlvbiIsImdldFN0YXJ0UG9zaXRpb24iXSwibWFwcGluZ3MiOiJBQUFBLHNGQUFhOztBQUNiQSxPQUFPLENBQUNDLFVBQVUsR0FBRyxJQUFJO0FBQ3pCRCxPQUFPLENBQUNFLGlCQUFpQixHQUFHLEtBQUssQ0FBQztBQUNsQyxJQUFJQyxvQkFBb0IsR0FBR0MsOENBQXVCLENBQUMsc0NBQXNDLENBQUM7QUFDMUYsSUFBSUMsT0FBTyxHQUFHRCw4Q0FBdUIsQ0FBQyxhQUFhLENBQUM7QUFDcEQsSUFBSUYs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QUssRUFBRTtFQUNoQyxDQUFDO0VBQ0RoQyxpQkFBaUIsQ0FBQ1MsU0FBUyxDQUFDd0Isa0JBQWtCLEdBQUcsWUFBWTtJQUN6RCxPQUFPaEMsb0JBQW9CLENBQUNnQyxrQkFBa0IsRUFBRTtFQUNwRCxDQUFDO0VBQ0RqQyxpQkFBaUIsQ0FBQ1MsU0FBUyxDQUFDeUIsTUFBTSxHQUFHLFVBQVVDLE1BQU0sRUFBRTtJQUNuRGxDLG9CQUFvQixDQUFDaUMsTUFBTSxDQUFDQyxNQUFNLENBQUM7RUFDdkMsQ0FBQztFQUNEbkMsaUJBQWlCLENBQUNTLFNBQVMsQ0FBQzJCLGNBQWMsR0FBRyxVQUFVQyxXQUFXLEVBQUU7SUFDaEVwQyxvQkFBb0IsQ0FBQ21DLGNBQWMsQ0FBQ0MsV0FBVyxDQUFDO0VBQ3BELENBQUM7RUFDRHJDLGlCQUFpQixDQUFDUyxTQUFTLENBQUM2QixjQUFjLEdBQUcsWUFBWTtJQUNyRCxPQUFPckMsb0JBQW9CLENBQUNxQyxjQUFjLEVBQUU7RUFDaEQsQ0FBQztFQUNEdEMsaUJBQWlCLENBQUNTLFNBQVMsQ0FBQzhCLGdCQUFnQixHQUFHLFVBQVVDLFFBQVEsRUFBRTtJQUMvRHZDLG9CQUFvQixDQUFDc0MsZ0JBQWdCLENBQUNDLFFBQVEsQ0FBQztFQUNuRCxDQUFDO0VBQ0R4QyxpQkFBaUIsQ0FBQ1MsU0FBUyxDQUFDZ0MsZ0JBQWdCLEdBQUcsWUFBWTtJQUN2RCxPQUFPeEMsb0JBQW9CLENBQUN3QyxnQkFBZ0IsRUFBRTtFQUNsRCxDQUFDO0VBQ0QsT0FBT3pDLGlCQUFpQjtBQUM1QixDQUFDLEVBQUc7QUFDSkYsT0FBTyxDQUFDRSxpQkFBaUIsR0FBR0EsaUJBQWlCLEMiLCJmaWxlIjoiMjM3LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5RTkF1ZGlvTXVzaWNNaXhlciA9IHZvaWQgMDtcbnZhciBRTlJ0Y0F1ZGlvTXVzaWNNaXhlciA9IHVuaS5yZXF1aXJlTmF0aXZlUGx1Z2luKCdRTlJUQy1VbmlQbHVnaW4tUU5SdGNBdWRpb011c2ljTWl4ZXInKTtcbnZhciBRTkV2ZW50ID0gdW5pLnJlcXVpcmVOYXRpdmVQbHVnaW4oJ2dsb2JhbEV2ZW50Jyk7XG52YXIgUU5BdWRpb011c2ljTWl4ZXIgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFFOQXVkaW9NdXNpY01peGVyKCkge1xuICAgICAgICB0aGlzLnZhcmlhdGlvbkxpc3QgPSBbJ29uU3RhdGVDaGFuZ2VkJ107XG4gICAgICAgIHRoaXMuZXZlbnRNYXAgPSB7XG4gICAgICAgICAgICBvblN0YXRlQ2hhbmdlZDogJ29uTXVzaWNTdGF0ZUNoYW5nZWQnLFxuICAgICAgICAgICAgb25NaXhpbmc6ICdvbk11c2ljTWl4aW5nJyxcbiAgICAgICAgICAgIG9uRXJyb3I6ICdvbk11c2ljRXJyb3InXG4gICAgICAgIH07XG4gICAgfVxuICAgIFFOQXVkaW9NdXNpY01peGVyLnByb3RvdHlwZS5jcmVhdGVBdWRpb011c2ljTWl4ZXJDYWxsYmFjayA9IGZ1bmN0aW9uIChuYW1lLCBsaXN0ZW5lcikge1xuICAgICAgICBpZiAobmFtZSA9PT0gJ29uU3RhdGVDaGFuZ2VkJykge1xuICAgICAgICAgICAgdmFyIHZhcmlhdGlvbkNhbGxiYWNrID0gZnVuY3Rpb24gKHBhcmFtcykge1xuICAgICAgICAgICAgICAgIGlmIChwYXJhbXMuc3RhdGUpIHtcbiAgICAgICAgICAgICAgICAgICAgbGlzdGVuZXIocGFyYW1zKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgcmV0dXJuIHZhcmlhdGlvbkNhbGxiYWNrO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBRTkF1ZGlvTXVzaWNNaXhlci5wcm90b3R5cGUub24gPSBmdW5jdGlvbiAobmFtZSwgbGlzdGVuZXIpIHtcbiAgICAgICAgaWYgKHRoaXMudmFyaWF0aW9uTGlzdC5zb21lKGZ1bmN0aW9uIChpdGVtKSB7IHJldHVybiBpdGVtID09PSBuYW1lOyB9KSkge1xuICAgICAgICAgICAgdmFyIGNhbGxiYWNrID0gdGhpcy5jcmVhdGVBdWRpb011c2ljTWl4ZXJDYWxsYmFjayhuYW1lLCBsaXN0ZW5lcik7XG4gICAgICAgICAgICBRTkV2ZW50LmFkZEV2ZW50TGlzdGVuZXIodGhpcy5ldmVudE1hcFtuYW1lXSwgY2FsbGJhY2spO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgUU5FdmVudC5hZGRFdmVudExpc3RlbmVyKHRoaXMuZXZlbnRNYXBbbmFtZV0sIGxpc3RlbmVyKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgUU5BdWRpb011c2ljTWl4ZXIucHJvdG90eXBlLm9mZiA9IGZ1bmN0aW9uIChuYW1lLCBsaXN0ZW5lcikge1xuICAgICAgICBRTkV2ZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIodGhpcy5ldmVudE1hcFtuYW1lXSwgbGlzdGVuZXIpO1xuICAgIH07XG4gICAgUU5BdWRpb011c2ljTWl4ZXIucHJvdG90eXBlLnNldFB1Ymxpc2hFbmFibGVkID0gZnVuY3Rpb24gKGVuYWJsZWQpIHtcbiAgICAgICAgUU5SdGNBdWRpb011c2ljTWl4ZXIuc2V0UHVibGlzaEVuYWJsZWQoZW5hYmxlZCk7XG4gICAgfTtcbiAgICBRTkF1ZGlvTXVzaWNNaXhlci5wcm90b3R5cGUuaXNQdWJsaXNoRW5hYmxlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIFFOUnRjQXVkaW9NdXNpY01peGVyLmlzUHVibGlzaEVuYWJsZWQoKTtcbiAgICB9O1xuICAgIFFOQXVkaW9NdXNpY01peGVyLnByb3RvdHlwZS5nZXREdXJhdGlvbiA9IGZ1bmN0aW9uIChmaWxlUGF0aCkge1xuICAgICAgICByZXR1cm4gUU5SdGNBdWRpb011c2ljTWl4ZXIuZ2V0RHVyYXRpb24oZmlsZVBhdGgpO1xuICAgIH07XG4gICAgUU5BdWRpb011c2ljTWl4ZXIucHJvdG90eXBlLnN0YXJ0ID0gZnVuY3Rpb24gKGxvb3BDb3VudCkge1xuICAgICAgICBpZiAobG9vcENvdW50ID09PSB2b2lkIDApIHsgbG9vcENvdW50ID0gMTsgfVxuICAgICAgICBRTlJ0Y0F1ZGlvTXVzaWNNaXhlci5zdGFydChsb29wQ291bnQpO1xuICAgIH07XG4gICAgUU5BdWRpb011c2ljTWl4ZXIucHJvdG90eXBlLnN0b3AgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIFFOUnRjQXVkaW9NdXNpY01peGVyLnN0b3AoKTtcbiAgICB9O1xuICAgIFFOQXVkaW9NdXNpY01peGVyLnByb3RvdHlwZS5yZXN1bWUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIFFOUnRjQXVkaW9NdXNpY01peGVyLnJlc3VtZSgpO1xuICAgIH07XG4gICAgUU5BdWRpb011c2ljTWl4ZXIucHJvdG90eXBlLnBhdXNlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBRTlJ0Y0F1ZGlvTXVzaWNNaXhlci5wYXVzZSgpO1xuICAgIH07XG4gICAgUU5BdWRpb011c2ljTWl4ZXIucHJvdG90eXBlLmdldEN1cnJlbnRQb3NpdGlvbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIFFOUnRjQXVkaW9NdXNpY01peGVyLmdldEN1cnJlbnRQb3NpdGlvbigpO1xuICAgIH07XG4gICAgUU5BdWRpb011c2ljTWl4ZXIucHJvdG90eXBlLnNlZWtUbyA9IGZ1bmN0aW9uICh0aW1lVXMpIHtcbiAgICAgICAgUU5SdGNBdWRpb011c2ljTWl4ZXIuc2Vla1RvKHRpbWVVcyk7XG4gICAgfTtcbiAgICBRTkF1ZGlvTXVzaWNNaXhlci5wcm90b3R5cGUuc2V0TXVzaWNWb2x1bWUgPSBmdW5jdGlvbiAobXVzaWNWb2x1bWUpIHtcbiAgICAgICAgUU5SdGNBdWRpb011c2ljTWl4ZXIuc2V0TXVzaWNWb2x1bWUobXVzaWNWb2x1bWUpO1xuICAgIH07XG4gICAgUU5BdWRpb011c2ljTWl4ZXIucHJvdG90eXBlLmdldE11c2ljVm9sdW1lID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gUU5SdGNBdWRpb011c2ljTWl4ZXIuZ2V0TXVzaWNWb2x1bWUoKTtcbiAgICB9O1xuICAgIFFOQXVkaW9NdXNpY01peGVyLnByb3RvdHlwZS5zZXRTdGFydFBvc2l0aW9uID0gZnVuY3Rpb24gKHBvc2l0aW9uKSB7XG4gICAgICAgIFFOUnRjQXVkaW9NdXNpY01peGVyLnNldFN0YXJ0UG9zaXRpb24ocG9zaXRpb24pO1xuICAgIH07XG4gICAgUU5BdWRpb011c2ljTWl4ZXIucHJvdG90eXBlLmdldFN0YXJ0UG9zaXRpb24gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBRTlJ0Y0F1ZGlvTXVzaWNNaXhlci5nZXRTdGFydFBvc2l0aW9uKCk7XG4gICAgfTtcbiAgICByZXR1cm4gUU5BdWRpb011c2ljTWl4ZXI7XG59KCkpO1xuZXhwb3J0cy5RTkF1ZGlvTXVzaWNNaXhlciA9IFFOQXVkaW9NdXNpY01peGVyO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///237\n");

/***/ }),

/***/ 238:
/*!**************************************************************************************************************************!*\
  !*** /Users/tongjie/Desktop/QNRTC-Uniapp/demo/js_sdk/QNRTC-UniPlugin-JS/QNRTC-UniPlugin-JS/class/RTCAudioEffectMixer.js ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__webpack_provided_uni_dot_requireNativePlugin) {\n\nexports.__esModule = true;\nexports.QNAudioEffectMixer = void 0;\nvar RTCAudioEffect_1 = __webpack_require__(/*! ./RTCAudioEffect */ 239);\nvar QNRtcAudioEffectMixer = __webpack_provided_uni_dot_requireNativePlugin('QNRTC-UniPlugin-QNRtcAudioEffectMixer');\nvar QNEvent = __webpack_provided_uni_dot_requireNativePlugin('globalEvent');\nvar QNAudioEffectMixer = function () {\n  function QNAudioEffectMixer() {\n    this.eventMap = {\n      onEffectFinished: 'onEffectFinished',\n      onEffectError: 'onEffectEffectError',\n      onError: 'onEffectError'\n    };\n  }\n  QNAudioEffectMixer.prototype.on = function (name, listener) {\n    QNEvent.addEventListener(this.eventMap[name], listener);\n  };\n  QNAudioEffectMixer.prototype.off = function (name, listener) {\n    QNEvent.removeEventListener(name, listener);\n  };\n  QNAudioEffectMixer.prototype.createAudioEffect = function (effectID, filePath) {\n    QNRtcAudioEffectMixer.createAudioEffect(effectID, filePath);\n    return new RTCAudioEffect_1.QNAudioEffect(effectID, filePath);\n  };\n  QNAudioEffectMixer.prototype.start = function (effectID) {\n    QNRtcAudioEffectMixer.start(effectID);\n  };\n  QNAudioEffectMixer.prototype.setPublishEnabled = function (effectID, enabled) {\n    QNRtcAudioEffectMixer.setPublishEnabled(effectID, enabled);\n  };\n  QNAudioEffectMixer.prototype.isPublishEnabled = function (effectID) {\n    return QNRtcAudioEffectMixer.isPublishEnabled(effectID);\n  };\n  QNAudioEffectMixer.prototype.stop = function (effectID) {\n    QNRtcAudioEffectMixer.stop(effectID);\n  };\n  QNAudioEffectMixer.prototype.resume = function (effectID) {\n    QNRtcAudioEffectMixer.resume(effectID);\n  };\n  QNAudioEffectMixer.prototype.pause = function (effectID) {\n    QNRtcAudioEffectMixer.pause(effectID);\n  };\n  QNAudioEffectMixer.prototype.stopAll = function () {\n    QNRtcAudioEffectMixer.stopAll();\n  };\n  QNAudioEffectMixer.prototype.pauseAll = function () {\n    QNRtcAudioEffectMixer.pauseAll();\n  };\n  QNAudioEffectMixer.prototype.resumeAll = function () {\n    QNRtcAudioEffectMixer.resumeAll();\n  };\n  QNAudioEffectMixer.prototype.getCurrentPosition = function (effectID) {\n    return QNRtcAudioEffectMixer.getCurrentPosition(effectID);\n  };\n  QNAudioEffectMixer.prototype.setVolume = function (effectID, volume) {\n    QNRtcAudioEffectMixer.setVolume(effectID, volume);\n  };\n  QNAudioEffectMixer.prototype.getVolume = function (effectID) {\n    return QNRtcAudioEffectMixer.getVolume(effectID);\n  };\n  QNAudioEffectMixer.prototype.setAllEffectsVolume = function (volume) {\n    QNRtcAudioEffectMixer.setAllEffectsVolume(volume);\n  };\n  return QNAudioEffectMixer;\n}();\nexports.QNAudioEffectMixer = QNAudioEffectMixer;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/uni-app-plus-nvue/dist/require-native-plugin.js */ 54)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vanNfc2RrL1FOUlRDLVVuaVBsdWdpbi1KUy9RTlJUQy1VbmlQbHVnaW4tSlMvY2xhc3MvUlRDQXVkaW9FZmZlY3RNaXhlci5qcyJdLCJuYW1lcyI6WyJleHBvcnRzIiwiX19lc01vZHVsZSIsIlFOQXVkaW9FZmZlY3RNaXhlciIsIlJUQ0F1ZGlvRWZmZWN0XzEiLCJyZXF1aXJlIiwiUU5SdGNBdWRpb0VmZmVjdE1peGVyIiwidW5pIiwiUU5FdmVudCIsImV2ZW50TWFwIiwib25FZmZlY3RGaW5pc2hlZCIsIm9uRWZmZWN0RXJyb3IiLCJvbkVycm9yIiwicHJvdG90eXBlIiwib24iLCJuYW1lIiwibGlzdGVuZXIiLCJhZGRFdmVudExpc3RlbmVyIiwib2ZmIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImNyZWF0ZUF1ZGlvRWZmZWN0IiwiZWZmZWN0SUQiLCJmaWxlUGF0aCIsIlFOQXVkaW9FZmZlY3QiLCJzdGFydCIsInNldFB1Ymxpc2hFbmFibGVkIiwiZW5hYmxlZCIsImlzUHVibGlzaEVuYWJsZWQiLCJzdG9wIiwicmVzdW1lIiwicGF1c2UiLCJzdG9wQWxsIiwicGF1c2VBbGwiLCJyZXN1bWVBbGwiLCJnZXRDdXJyZW50UG9zaXRpb24iLCJzZXRWb2x1bWUiLCJ2b2x1bWUiLCJnZXRWb2x1bWUiLCJzZXRBbGxFZmZlY3RzVm9sdW1lIl0sIm1hcHBpbmdzIjoiQUFBQSxzRkFBYTs7QUFDYkEsT0FBTyxDQUFDQyxVQUFVLEdBQUcsSUFBSTtBQUN6QkQsT0FBTyxDQUFDRSxrQkFBa0IsR0FBRyxLQUFLLENBQUM7QUFDbkMsSUFBSUMsZ0JBQWdCLEdBQUdDLG1CQUFPLENBQUMsMkJBQWtCLENBQUM7QUFDbEQsSUFBSUMscUJBQXFCLEdBQUdDLDhDQUF1QixDQUFDLHVDQUF1QyxDQUFDO0FBQzVGLElBQUlDLE9BQU8sR0FBR0QsOENBQXVCLENBQUMsYUFBYSxDQUFDO0FBQ3BELElBQUlKLGtCQUFrQixHQUFJLFlBQVk7RUFDbEMsU0FBU0Es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RUFBRWUsTUFBTSxDQUFDO0VBQ3JELENBQUM7RUFDRGpDLGtCQUFrQixDQUFDVSxTQUFTLENBQUN3QixTQUFTLEdBQUcsVUFBVWhCLFFBQVEsRUFBRTtJQUN6RCxPQUFPZixxQkFBcUIsQ0FBQytCLFNBQVMsQ0FBQ2hCLFFBQVEsQ0FBQztFQUNwRCxDQUFDO0VBQ0RsQixrQkFBa0IsQ0FBQ1UsU0FBUyxDQUFDeUIsbUJBQW1CLEdBQUcsVUFBVUYsTUFBTSxFQUFFO0lBQ2pFOUIscUJBQXFCLENBQUNnQyxtQkFBbUIsQ0FBQ0YsTUFBTSxDQUFDO0VBQ3JELENBQUM7RUFDRCxPQUFPakMsa0JBQWtCO0FBQzdCLENBQUMsRUFBRztBQUNKRixPQUFPLENBQUNFLGtCQUFrQixHQUFHQSxrQkFBa0IsQyIsImZpbGUiOiIyMzguanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLlFOQXVkaW9FZmZlY3RNaXhlciA9IHZvaWQgMDtcbnZhciBSVENBdWRpb0VmZmVjdF8xID0gcmVxdWlyZShcIi4vUlRDQXVkaW9FZmZlY3RcIik7XG52YXIgUU5SdGNBdWRpb0VmZmVjdE1peGVyID0gdW5pLnJlcXVpcmVOYXRpdmVQbHVnaW4oJ1FOUlRDLVVuaVBsdWdpbi1RTlJ0Y0F1ZGlvRWZmZWN0TWl4ZXInKTtcbnZhciBRTkV2ZW50ID0gdW5pLnJlcXVpcmVOYXRpdmVQbHVnaW4oJ2dsb2JhbEV2ZW50Jyk7XG52YXIgUU5BdWRpb0VmZmVjdE1peGVyID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBRTkF1ZGlvRWZmZWN0TWl4ZXIoKSB7XG4gICAgICAgIHRoaXMuZXZlbnRNYXAgPSB7XG4gICAgICAgICAgICBvbkVmZmVjdEZpbmlzaGVkOiAnb25FZmZlY3RGaW5pc2hlZCcsXG4gICAgICAgICAgICBvbkVmZmVjdEVycm9yOiAnb25FZmZlY3RFZmZlY3RFcnJvcicsXG4gICAgICAgICAgICBvbkVycm9yOiAnb25FZmZlY3RFcnJvcidcbiAgICAgICAgfTtcbiAgICB9XG4gICAgUU5BdWRpb0VmZmVjdE1peGVyLnByb3RvdHlwZS5vbiA9IGZ1bmN0aW9uIChuYW1lLCBsaXN0ZW5lcikge1xuICAgICAgICBRTkV2ZW50LmFkZEV2ZW50TGlzdGVuZXIodGhpcy5ldmVudE1hcFtuYW1lXSwgbGlzdGVuZXIpO1xuICAgIH07XG4gICAgUU5BdWRpb0VmZmVjdE1peGVyLnByb3RvdHlwZS5vZmYgPSBmdW5jdGlvbiAobmFtZSwgbGlzdGVuZXIpIHtcbiAgICAgICAgUU5FdmVudC5yZW1vdmVFdmVudExpc3RlbmVyKG5hbWUsIGxpc3RlbmVyKTtcbiAgICB9O1xuICAgIFFOQXVkaW9FZmZlY3RNaXhlci5wcm90b3R5cGUuY3JlYXRlQXVkaW9FZmZlY3QgPSBmdW5jdGlvbiAoZWZmZWN0SUQsIGZpbGVQYXRoKSB7XG4gICAgICAgIFFOUnRjQXVkaW9FZmZlY3RNaXhlci5jcmVhdGVBdWRpb0VmZmVjdChlZmZlY3RJRCwgZmlsZVBhdGgpO1xuICAgICAgICByZXR1cm4gbmV3IFJUQ0F1ZGlvRWZmZWN0XzEuUU5BdWRpb0VmZmVjdChlZmZlY3RJRCwgZmlsZVBhdGgpO1xuICAgIH07XG4gICAgUU5BdWRpb0VmZmVjdE1peGVyLnByb3RvdHlwZS5zdGFydCA9IGZ1bmN0aW9uIChlZmZlY3RJRCkge1xuICAgICAgICBRTlJ0Y0F1ZGlvRWZmZWN0TWl4ZXIuc3RhcnQoZWZmZWN0SUQpO1xuICAgIH07XG4gICAgUU5BdWRpb0VmZmVjdE1peGVyLnByb3RvdHlwZS5zZXRQdWJsaXNoRW5hYmxlZCA9IGZ1bmN0aW9uIChlZmZlY3RJRCwgZW5hYmxlZCkge1xuICAgICAgICBRTlJ0Y0F1ZGlvRWZmZWN0TWl4ZXIuc2V0UHVibGlzaEVuYWJsZWQoZWZmZWN0SUQsIGVuYWJsZWQpO1xuICAgIH07XG4gICAgUU5BdWRpb0VmZmVjdE1peGVyLnByb3RvdHlwZS5pc1B1Ymxpc2hFbmFibGVkID0gZnVuY3Rpb24gKGVmZmVjdElEKSB7XG4gICAgICAgIHJldHVybiBRTlJ0Y0F1ZGlvRWZmZWN0TWl4ZXIuaXNQdWJsaXNoRW5hYmxlZChlZmZlY3RJRCk7XG4gICAgfTtcbiAgICBRTkF1ZGlvRWZmZWN0TWl4ZXIucHJvdG90eXBlLnN0b3AgPSBmdW5jdGlvbiAoZWZmZWN0SUQpIHtcbiAgICAgICAgUU5SdGNBdWRpb0VmZmVjdE1peGVyLnN0b3AoZWZmZWN0SUQpO1xuICAgIH07XG4gICAgUU5BdWRpb0VmZmVjdE1peGVyLnByb3RvdHlwZS5yZXN1bWUgPSBmdW5jdGlvbiAoZWZmZWN0SUQpIHtcbiAgICAgICAgUU5SdGNBdWRpb0VmZmVjdE1peGVyLnJlc3VtZShlZmZlY3RJRCk7XG4gICAgfTtcbiAgICBRTkF1ZGlvRWZmZWN0TWl4ZXIucHJvdG90eXBlLnBhdXNlID0gZnVuY3Rpb24gKGVmZmVjdElEKSB7XG4gICAgICAgIFFOUnRjQXVkaW9FZmZlY3RNaXhlci5wYXVzZShlZmZlY3RJRCk7XG4gICAgfTtcbiAgICBRTkF1ZGlvRWZmZWN0TWl4ZXIucHJvdG90eXBlLnN0b3BBbGwgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIFFOUnRjQXVkaW9FZmZlY3RNaXhlci5zdG9wQWxsKCk7XG4gICAgfTtcbiAgICBRTkF1ZGlvRWZmZWN0TWl4ZXIucHJvdG90eXBlLnBhdXNlQWxsID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBRTlJ0Y0F1ZGlvRWZmZWN0TWl4ZXIucGF1c2VBbGwoKTtcbiAgICB9O1xuICAgIFFOQXVkaW9FZmZlY3RNaXhlci5wcm90b3R5cGUucmVzdW1lQWxsID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBRTlJ0Y0F1ZGlvRWZmZWN0TWl4ZXIucmVzdW1lQWxsKCk7XG4gICAgfTtcbiAgICBRTkF1ZGlvRWZmZWN0TWl4ZXIucHJvdG90eXBlLmdldEN1cnJlbnRQb3NpdGlvbiA9IGZ1bmN0aW9uIChlZmZlY3RJRCkge1xuICAgICAgICByZXR1cm4gUU5SdGNBdWRpb0VmZmVjdE1peGVyLmdldEN1cnJlbnRQb3NpdGlvbihlZmZlY3RJRCk7XG4gICAgfTtcbiAgICBRTkF1ZGlvRWZmZWN0TWl4ZXIucHJvdG90eXBlLnNldFZvbHVtZSA9IGZ1bmN0aW9uIChlZmZlY3RJRCwgdm9sdW1lKSB7XG4gICAgICAgIFFOUnRjQXVkaW9FZmZlY3RNaXhlci5zZXRWb2x1bWUoZWZmZWN0SUQsIHZvbHVtZSk7XG4gICAgfTtcbiAgICBRTkF1ZGlvRWZmZWN0TWl4ZXIucHJvdG90eXBlLmdldFZvbHVtZSA9IGZ1bmN0aW9uIChlZmZlY3RJRCkge1xuICAgICAgICByZXR1cm4gUU5SdGNBdWRpb0VmZmVjdE1peGVyLmdldFZvbHVtZShlZmZlY3RJRCk7XG4gICAgfTtcbiAgICBRTkF1ZGlvRWZmZWN0TWl4ZXIucHJvdG90eXBlLnNldEFsbEVmZmVjdHNWb2x1bWUgPSBmdW5jdGlvbiAodm9sdW1lKSB7XG4gICAgICAgIFFOUnRjQXVkaW9FZmZlY3RNaXhlci5zZXRBbGxFZmZlY3RzVm9sdW1lKHZvbHVtZSk7XG4gICAgfTtcbiAgICByZXR1cm4gUU5BdWRpb0VmZmVjdE1peGVyO1xufSgpKTtcbmV4cG9ydHMuUU5BdWRpb0VmZmVjdE1peGVyID0gUU5BdWRpb0VmZmVjdE1peGVyO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///238\n");

/***/ }),

/***/ 239:
/*!*********************************************************************************************************************!*\
  !*** /Users/tongjie/Desktop/QNRTC-Uniapp/demo/js_sdk/QNRTC-UniPlugin-JS/QNRTC-UniPlugin-JS/class/RTCAudioEffect.js ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__webpack_provided_uni_dot_requireNativePlugin) {\n\nexports.__esModule = true;\nexports.QNAudioEffect = void 0;\nvar QNRtcAudioEffect = __webpack_provided_uni_dot_requireNativePlugin('QNRTC-UniPlugin-QNRtcAudioEffect');\nvar QNAudioEffect = function () {\n  function QNAudioEffect(effectID, filePath) {\n    this.effectID = effectID;\n    this.filePath = filePath;\n  }\n  QNAudioEffect.getDuration = function (filePath) {\n    return QNRtcAudioEffect.getDuration(filePath);\n  };\n  QNAudioEffect.prototype.getID = function () {\n    return QNRtcAudioEffect.getID(this.effectID);\n  };\n  QNAudioEffect.prototype.getFilePath = function () {\n    return QNRtcAudioEffect.getFilePath(this.effectID);\n  };\n  QNAudioEffect.prototype.setStartPosition = function (position) {\n    QNRtcAudioEffect.setStartPosition(this.effectID, position);\n  };\n  QNAudioEffect.prototype.getStartPosition = function () {\n    return QNRtcAudioEffect.getStartPosition(this.effectID);\n  };\n  QNAudioEffect.prototype.setLoopCount = function (loopCount) {\n    QNRtcAudioEffect.setLoopCount(this.effectID, loopCount);\n  };\n  QNAudioEffect.prototype.getLoopCount = function () {\n    return QNRtcAudioEffect.getLoopCount(this.effectID);\n  };\n  return QNAudioEffect;\n}();\nexports.QNAudioEffect = QNAudioEffect;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/uni-app-plus-nvue/dist/require-native-plugin.js */ 54)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vanNfc2RrL1FOUlRDLVVuaVBsdWdpbi1KUy9RTlJUQy1VbmlQbHVnaW4tSlMvY2xhc3MvUlRDQXVkaW9FZmZlY3QuanMiXSwibmFtZXMiOlsiZXhwb3J0cyIsIl9fZXNNb2R1bGUiLCJRTkF1ZGlvRWZmZWN0IiwiUU5SdGNBdWRpb0VmZmVjdCIsInVuaSIsImVmZmVjdElEIiwiZmlsZVBhdGgiLCJnZXREdXJhdGlvbiIsInByb3RvdHlwZSIsImdldElEIiwiZ2V0RmlsZVBhdGgiLCJzZXRTdGFydFBvc2l0aW9uIiwicG9zaXRpb24iLCJnZXRTdGFydFBvc2l0aW9uIiwic2V0TG9vcENvdW50IiwibG9vcENvdW50IiwiZ2V0TG9vcENvdW50Il0sIm1hcHBpbmdzIjoiQUFBQSxzRkFBYTs7QUFDYkEsT0FBTyxDQUFDQyxVQUFVLEdBQUcsSUFBSTtBQUN6QkQsT0FBTyxDQUFDRSxhQUFhLEdBQUcsS0FBSyxDQUFDO0FBQzlCLElBQUlDLGdCQUFnQixHQUFHQyw4Q0FBdUIsQ0FBQyxrQ0FBa0MsQ0FBQztBQUNsRixJQUFJRixhQUFhLEdBQUksWUFBWTtFQUM3QixTQUFTQSxhQUFhLENBQUNHLFFBQVEsRUFBRUMsUUFBUSxFQUFFO0lBQ3ZDLElBQUksQ0FBQ0QsUUFBUSxHQUFHQSxRQUFRO0lBQ3hCLElBQUksQ0FBQ0MsUUFBUSxHQUFHQSxRQUFRO0VBQzVCO0VBQ0FKLGFBQWEsQ0FBQ0ssV0FBVyxHQUFHLFVBQVVELFFBQVEsRUFBRTtJQUM1QyxPQUFPSCxnQkFBZ0IsQ0FBQ0ksV0FBVyxDQUFDRCxRQUFRLENBQUM7RUFDakQsQ0FBQztFQUNESixhQUFhLENBQUNNLFNBQVMsQ0FBQ0MsS0FBSyxHQUFHLFlBQVk7SUFDeEMsT0FBT04sZ0JBQWdCLENBQUNNLEtBQUssQ0FBQyxJQUFJLENBQUNKLFFBQVEsQ0FBQztFQUNoRCxDQUFDO0VBQ0RILGFBQWEsQ0FBQ00sU0FBUyxDQUFDRSxXQUFXLEdBQUcsWUFBWTtJQUM5QyxPQUFPUCxnQkFBZ0IsQ0FBQ08sV0FBVyxDQUFDLElBQUksQ0FBQ0wsUUFBUSxDQUFDO0VBQ3RELENBQUM7RUFDREgsYUFBYSxDQUFDTSxTQUFTLENBQUNHLGdCQUFnQixHQUFHLFVBQVVDLFFBQVEsRUFBRTtJQUMzRFQsZ0JBQWdCLENBQUNRLGdCQUFnQixDQUFDLElBQUksQ0FBQ04sUUFBUSxFQUFFTyxRQUFRLENBQUM7RUFDOUQsQ0FBQztFQUNEVixhQUFhLENBQUNNLFNBQVMsQ0FBQ0ssZ0JBQWdCLEdBQUcsWUFBWTtJQUNuRCxPQUFPVixnQkFBZ0IsQ0FBQ1UsZ0JBQWdCLENBQUMsSUFBSSxDQUFDUixRQUFRLENBQUM7RUFDM0QsQ0FBQztFQUNESCxhQUFhLENBQUNNLFNBQVMsQ0FBQ00sWUFBWSxHQUFHLFVBQVVDLFNBQVMsRUFBRTtJQUN4RFosZ0JBQWdCLENBQUNXLFlBQVksQ0FBQyxJQUFJLENBQUNULFFBQVEsRUFBRVUsU0FBUyxDQUFDO0VBQzNELENBQUM7RUFDRGIsYUFBYSxDQUFDTSxTQUFTLENBQUNRLFlBQVksR0FBRyxZQUFZO0lBQy9DLE9BQU9iLGdCQUFnQixDQUFDYSxZQUFZLENBQUMsSUFBSSxDQUFDWCxRQUFRLENBQUM7RUFDdkQsQ0FBQztFQUNELE9BQU9ILGFBQWE7QUFDeEIsQ0FBQyxFQUFHO0FBQ0pGLE9BQU8sQ0FBQ0UsYUFBYSxHQUFHQSxhQUFhLEMiLCJmaWxlIjoiMjM5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5RTkF1ZGlvRWZmZWN0ID0gdm9pZCAwO1xudmFyIFFOUnRjQXVkaW9FZmZlY3QgPSB1bmkucmVxdWlyZU5hdGl2ZVBsdWdpbignUU5SVEMtVW5pUGx1Z2luLVFOUnRjQXVkaW9FZmZlY3QnKTtcbnZhciBRTkF1ZGlvRWZmZWN0ID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBRTkF1ZGlvRWZmZWN0KGVmZmVjdElELCBmaWxlUGF0aCkge1xuICAgICAgICB0aGlzLmVmZmVjdElEID0gZWZmZWN0SUQ7XG4gICAgICAgIHRoaXMuZmlsZVBhdGggPSBmaWxlUGF0aDtcbiAgICB9XG4gICAgUU5BdWRpb0VmZmVjdC5nZXREdXJhdGlvbiA9IGZ1bmN0aW9uIChmaWxlUGF0aCkge1xuICAgICAgICByZXR1cm4gUU5SdGNBdWRpb0VmZmVjdC5nZXREdXJhdGlvbihmaWxlUGF0aCk7XG4gICAgfTtcbiAgICBRTkF1ZGlvRWZmZWN0LnByb3RvdHlwZS5nZXRJRCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIFFOUnRjQXVkaW9FZmZlY3QuZ2V0SUQodGhpcy5lZmZlY3RJRCk7XG4gICAgfTtcbiAgICBRTkF1ZGlvRWZmZWN0LnByb3RvdHlwZS5nZXRGaWxlUGF0aCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIFFOUnRjQXVkaW9FZmZlY3QuZ2V0RmlsZVBhdGgodGhpcy5lZmZlY3RJRCk7XG4gICAgfTtcbiAgICBRTkF1ZGlvRWZmZWN0LnByb3RvdHlwZS5zZXRTdGFydFBvc2l0aW9uID0gZnVuY3Rpb24gKHBvc2l0aW9uKSB7XG4gICAgICAgIFFOUnRjQXVkaW9FZmZlY3Quc2V0U3RhcnRQb3NpdGlvbih0aGlzLmVmZmVjdElELCBwb3NpdGlvbik7XG4gICAgfTtcbiAgICBRTkF1ZGlvRWZmZWN0LnByb3RvdHlwZS5nZXRTdGFydFBvc2l0aW9uID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gUU5SdGNBdWRpb0VmZmVjdC5nZXRTdGFydFBvc2l0aW9uKHRoaXMuZWZmZWN0SUQpO1xuICAgIH07XG4gICAgUU5BdWRpb0VmZmVjdC5wcm90b3R5cGUuc2V0TG9vcENvdW50ID0gZnVuY3Rpb24gKGxvb3BDb3VudCkge1xuICAgICAgICBRTlJ0Y0F1ZGlvRWZmZWN0LnNldExvb3BDb3VudCh0aGlzLmVmZmVjdElELCBsb29wQ291bnQpO1xuICAgIH07XG4gICAgUU5BdWRpb0VmZmVjdC5wcm90b3R5cGUuZ2V0TG9vcENvdW50ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gUU5SdGNBdWRpb0VmZmVjdC5nZXRMb29wQ291bnQodGhpcy5lZmZlY3RJRCk7XG4gICAgfTtcbiAgICByZXR1cm4gUU5BdWRpb0VmZmVjdDtcbn0oKSk7XG5leHBvcnRzLlFOQXVkaW9FZmZlY3QgPSBRTkF1ZGlvRWZmZWN0O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///239\n");

/***/ }),

/***/ 24:
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--11-oneOf-0-1!./node_modules/postcss-loader/src??ref--11-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--11-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--11-oneOf-0-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!/Users/tongjie/Desktop/QNRTC-Uniapp/demo/uni_modules/uni-easyinput/components/uni-easyinput/uni-easyinput.vue?vue&type=style&index=0&id=abe12412&lang=scss&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  ".uni-easyinput": {
    "": {
      "flex": [
        1,
        0,
        0,
        16
      ],
      "position": [
        "relative",
        0,
        0,
        16
      ],
      "textAlign": [
        "left",
        0,
        0,
        16
      ],
      "color": [
        "#333333",
        0,
        0,
        16
      ],
      "fontSize": [
        "14",
        0,
        0,
        16
      ]
    }
  },
  ".uni-easyinput__content": {
    "": {
      "flex": [
        1,
        0,
        0,
        17
      ],
      "flexDirection": [
        "row",
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
  ".uni-easyinput__content-input": {
    "": {
      "position": [
        "relative",
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
      ],
      "lineHeight": [
        1,
        0,
        0,
        18
      ],
      "fontSize": [
        "14",
        0,
        0,
        18
      ]
    }
  },
  ".is-textarea": {
    "": {
      "alignItems": [
        "flex-start",
        0,
        0,
        19
      ]
    }
  },
  ".is-textarea-icon": {
    "": {
      "marginTop": [
        "5",
        0,
        0,
        20
      ]
    }
  },
  ".uni-easyinput__content-textarea": {
    "": {
      "position": [
        "relative",
        0,
        0,
        21
      ],
      "overflow": [
        "hidden",
        0,
        0,
        21
      ],
      "flex": [
        1,
        0,
        0,
        21
      ],
      "lineHeight": [
        1.5,
        0,
        0,
        21
      ],
      "fontSize": [
        "14",
        0,
        0,
        21
      ],
      "paddingTop": [
        "6",
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
      "height": [
        "80",
        0,
        0,
        21
      ]
    }
  },
  ".input-padding": {
    "": {
      "paddingLeft": [
        "10",
        0,
        0,
        22
      ]
    }
  },
  ".content-clear-icon": {
    "": {
      "paddingTop": [
        0,
        0,
        0,
        23
      ],
      "paddingRight": [
        "5",
        0,
        0,
        23
      ],
      "paddingBottom": [
        0,
        0,
        0,
        23
      ],
      "paddingLeft": [
        "5",
        0,
        0,
        23
      ]
    }
  },
  ".label-icon": {
    "": {
      "marginRight": [
        "5",
        0,
        0,
        24
      ],
      "marginTop": [
        "-1",
        0,
        0,
        24
      ]
    }
  },
  ".is-input-border": {
    "": {
      "flexDirection": [
        "row",
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
      "borderWidth": [
        "1",
        0,
        0,
        25
      ],
      "borderStyle": [
        "solid",
        0,
        0,
        25
      ],
      "borderColor": [
        "#c8c7cc",
        0,
        0,
        25
      ],
      "borderRadius": [
        "4",
        0,
        0,
        25
      ]
    }
  },
  ".is-required": {
    "": {
      "color": [
        "#dd524d",
        0,
        0,
        26
      ]
    }
  },
  ".uni-error-message": {
    "": {
      "position": [
        "absolute",
        0,
        0,
        27
      ],
      "bottom": [
        "-17",
        0,
        0,
        27
      ],
      "left": [
        0,
        0,
        0,
        27
      ],
      "lineHeight": [
        "12",
        0,
        0,
        27
      ],
      "color": [
        "#dd524d",
        0,
        0,
        27
      ],
      "fontSize": [
        "12",
        0,
        0,
        27
      ],
      "textAlign": [
        "left",
        0,
        0,
        27
      ]
    }
  },
  ".uni-error-msg--boeder": {
    "": {
      "position": [
        "relative",
        0,
        0,
        28
      ],
      "bottom": [
        0,
        0,
        0,
        28
      ],
      "lineHeight": [
        "22",
        0,
        0,
        28
      ]
    }
  },
  ".is-input-error-border": {
    "": {
      "borderColor": [
        "#dd524d",
        0,
        0,
        29
      ]
    }
  },
  ".uni-easyinput--border": {
    "": {
      "marginBottom": [
        0,
        0,
        0,
        30
      ],
      "paddingTop": [
        "10",
        0,
        0,
        30
      ],
      "paddingRight": [
        "15",
        0,
        0,
        30
      ],
      "paddingBottom": [
        "10",
        0,
        0,
        30
      ],
      "paddingLeft": [
        "15",
        0,
        0,
        30
      ],
      "borderTopWidth": [
        "1",
        0,
        0,
        30
      ],
      "borderTopStyle": [
        "solid",
        0,
        0,
        30
      ],
      "borderTopColor": [
        "#eeeeee",
        0,
        0,
        30
      ]
    }
  },
  ".uni-easyinput-error": {
    "": {
      "paddingBottom": [
        0,
        0,
        0,
        31
      ]
    }
  },
  ".is-first-border": {
    "": {
      "borderWidth": [
        0,
        0,
        0,
        32
      ]
    }
  },
  ".is-disabled": {
    "": {
      "backgroundColor": [
        "#eeeeee",
        0,
        0,
        33
      ]
    }
  },
  "@VERSION": 2
}

/***/ }),

/***/ 240:
/*!**************************************************************************************************************************!*\
  !*** /Users/tongjie/Desktop/QNRTC-Uniapp/demo/js_sdk/QNRTC-UniPlugin-JS/QNRTC-UniPlugin-JS/class/RTCScreenVideoTrack.js ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__webpack_provided_uni_dot_requireNativePlugin) {\n\nvar __extends = this && this.__extends || function () {\n  var _extendStatics = function extendStatics(d, b) {\n    _extendStatics = Object.setPrototypeOf || {\n      __proto__: []\n    } instanceof Array && function (d, b) {\n      d.__proto__ = b;\n    } || function (d, b) {\n      for (var p in b) {\n        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];\n      }\n    };\n    return _extendStatics(d, b);\n  };\n  return function (d, b) {\n    if (typeof b !== \"function\" && b !== null) throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\n    _extendStatics(d, b);\n    function __() {\n      this.constructor = d;\n    }\n    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n  };\n}();\nexports.__esModule = true;\nexports.QNScreenVideoTrack = void 0;\nvar RTCLocalVideoTrack_1 = __webpack_require__(/*! ./RTCLocalVideoTrack */ 232);\nvar QNRtcTrack = __webpack_provided_uni_dot_requireNativePlugin('QNRTC-UniPlugin-QNRtcTrack');\nvar QNScreenVideoTrack = function (_super) {\n  __extends(QNScreenVideoTrack, _super);\n  function QNScreenVideoTrack() {\n    return _super !== null && _super.apply(this, arguments) || this;\n  }\n  QNScreenVideoTrack.prototype.setScreenRecorderFrameRate = function (screenRecorderFrameRate) {\n    return QNRtcTrack.setScreenRecorderFrameRate(this.identifyID, screenRecorderFrameRate);\n  };\n  QNScreenVideoTrack.requestPermission = function (callback) {\n    return QNRtcTrack.requestPermission(callback);\n  };\n  QNScreenVideoTrack.isScreenCaptureSupported = function () {\n    return QNRtcTrack.isScreenCaptureSupported() === 1;\n  };\n  return QNScreenVideoTrack;\n}(RTCLocalVideoTrack_1.QNLocalVideoTrack);\nexports.QNScreenVideoTrack = QNScreenVideoTrack;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/uni-app-plus-nvue/dist/require-native-plugin.js */ 54)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vanNfc2RrL1FOUlRDLVVuaVBsdWdpbi1KUy9RTlJUQy1VbmlQbHVnaW4tSlMvY2xhc3MvUlRDU2NyZWVuVmlkZW9UcmFjay5qcyJdLCJuYW1lcyI6WyJfX2V4dGVuZHMiLCJleHRlbmRTdGF0aWNzIiwiZCIsImIiLCJPYmplY3QiLCJzZXRQcm90b3R5cGVPZiIsIl9fcHJvdG9fXyIsIkFycmF5IiwicCIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsIlR5cGVFcnJvciIsIlN0cmluZyIsIl9fIiwiY29uc3RydWN0b3IiLCJjcmVhdGUiLCJleHBvcnRzIiwiX19lc01vZHVsZSIsIlFOU2NyZWVuVmlkZW9UcmFjayIsIlJUQ0xvY2FsVmlkZW9UcmFja18xIiwicmVxdWlyZSIsIlFOUnRjVHJhY2siLCJ1bmkiLCJfc3VwZXIiLCJhcHBseSIsImFyZ3VtZW50cyIsInNldFNjcmVlblJlY29yZGVyRnJhbWVSYXRlIiwic2NyZWVuUmVjb3JkZXJGcmFtZVJhdGUiLCJpZGVudGlmeUlEIiwicmVxdWVzdFBlcm1pc3Npb24iLCJjYWxsYmFjayIsImlzU2NyZWVuQ2FwdHVyZVN1cHBvcnRlZCIsIlFOTG9jYWxWaWRlb1RyYWNrIl0sIm1hcHBpbmdzIjoiQUFBQSxzRkFBYTs7QUFDYixJQUFJQSxTQUFTLEdBQUksSUFBSSxJQUFJLElBQUksQ0FBQ0EsU0FBUyxJQUFNLFlBQVk7RUFDckQsSUFBSUMsY0FBYSxHQUFHLHVCQUFVQyxDQUFDLEVBQUVDLENBQUMsRUFBRTtJQUNoQ0YsY0FBYSxHQUFHRyxNQUFNLENBQUNDLGNBQWMsSUFDaEM7TUFBRUMsU0FBUyxFQUFFO0lBQUcsQ0FBQyxZQUFZQyxLQUFLLElBQUksVUFBVUwsQ0FBQyxFQUFFQyxDQUFDLEVBQUU7TUFBRUQsQ0FBQyxDQUFDSSxTQUFTLEdBQUdILENBQUM7SUFBRSxDQUFFLElBQzVFLFVBQVVELENBQUMsRUFBRUMsQ0FBQyxFQUFFO01BQUUsS0FBSyxJQUFJSyxDQUFDLElBQUlMLENBQUM7UUFBRSxJQUFJQyxNQUFNLENBQUNLLFNBQVMsQ0FBQ0MsY0FBYyxDQUFDQyxJQUFJLENBQUNSLENBQUMsRUFBRUssQ0FBQyxDQUFDLEVBQUVOLENBQUMsQ0FBQ00sQ0FBQyxDQUFDLEdBQUdMLENBQUMsQ0FBQ0ssQ0FBQyxDQUFDO01BQUM7SUFBQyxDQUFDO0lBQ3JHLE9BQU9QLGNBQWEsQ0FBQ0MsQ0FBQyxFQUFFQyxDQUFDLENBQUM7RUFDOUIsQ0FBQztFQUNELE9BQU8sVUFBVUQsQ0FBQyxFQUFFQyxDQUFDLEVBQUU7SUFDbkIsSUFBSSxPQUFPQSxDQUFDLEtBQUssVUFBVSxJQUFJQSxDQUFDLEtBQUssSUFBSSxFQUNyQyxNQUFNLElBQUlTLFNBQVMsQ0FBQyxzQkFBc0IsR0FBR0MsTUFBTSxDQUFDVixDQUFDLENBQUMsR0FBRywrQkFBK0IsQ0FBQztJQUM3RkYsY0FBYSxDQUFDQyxDQUFDLEVBQUVDLENBQUMsQ0FBQztJQUNuQixTQUFTVyxFQUFFLEdBQUc7TUFBRSxJQUFJLENBQUNDLFdBQVcsR0FBR2IsQ0FBQztJQUFFO0lBQ3RDQSxDQUFDLENBQUNPLFNBQVMsR0FBR04sQ0FBQyxLQUFLLElBQUksR0FBR0MsTUFBTSxDQUFDWSxNQUFNLENBQUNiLENBQUMsQ0FBQyxJQUFJVyxFQUFFLENBQUNMLFNBQVMsR0FBR04sQ0FBQyxDQUFDTSxTQUFTLEVBQUUsSUFBSUssRUFBRSxFQUFFLENBQUM7RUFDeEYsQ0FBQztBQUNMLENBQUMsRUFBRztBQUNKRyxPQUFPLENBQUNDLFVBQVUsR0FBRyxJQUFJO0FBQ3pCRCxPQUFPLENBQUNFLGtCQUFrQixHQUFHLEtBQUssQ0FBQztBQUNuQyxJQUFJQyxvQkFBb0IsR0FBR0MsbUJBQU8sQ0FBQywrQkFBc0IsQ0FBQztBQUMxRCxJQUFJQyxVQUFVLEdBQUdDLDhDQUF1QixDQUFDLDRCQUE0QixDQUFDO0FBQ3RFLElBQUlKLGtCQUFrQixHQUFJLFVBQVVLLE1BQU0sRUFBRTtFQUN4Q3hCLFNBQVMsQ0FBQ21CLGtCQUFrQixFQUFFSyxNQUFNLENBQUM7RUFDckMsU0FBU0wsa0JBQWtCLEdBQUc7SUFDMUIsT0FBT0ssTUFBTSxLQUFLLElBQUksSUFBSUEsTUFBTSxDQUFDQyxLQUFLLENBQUMsSUFBSSxFQUFFQyxTQUFTLENBQUMsSUFBSSxJQUFJO0VBQ25FO0VBQ0FQLGtCQUFrQixDQUFDVixTQUFTLENBQUNrQiwwQkFBMEIsR0FBRyxVQUFVQyx1QkFBdUIsRUFBRTtJQUN6RixPQUFPTixVQUFVLENBQUNLLDBCQUEwQixDQUFDLElBQUksQ0FBQ0UsVUFBVSxFQUFFRCx1QkFBdUIsQ0FBQztFQUMxRixDQUFDO0VBQ0RULGtCQUFrQixDQUFDVyxpQkFBaUIsR0FBRyxVQUFVQyxRQUFRLEVBQUU7SUFDdkQsT0FBT1QsVUFBVSxDQUFDUSxpQkFBaUIsQ0FBQ0MsUUFBUSxDQUFDO0VBQ2pELENBQUM7RUFDRFosa0JBQWtCLENBQUNhLHdCQUF3QixHQUFHLFlBQVk7SUFDdEQsT0FBT1YsVUFBVSxDQUFDVSx3QkFBd0IsRUFBRSxLQUFLLENBQUM7RUFDdEQsQ0FBQztFQUNELE9BQU9iLGtCQUFrQjtBQUM3QixDQUFDLENBQUNDLG9CQUFvQixDQUFDYSxpQkFBaUIsQ0FBRTtBQUMxQ2hCLE9BQU8sQ0FBQ0Usa0JBQWtCLEdBQUdBLGtCQUFrQixDIiwiZmlsZSI6IjI0MC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBiICE9PSBcImZ1bmN0aW9uXCIgJiYgYiAhPT0gbnVsbClcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDbGFzcyBleHRlbmRzIHZhbHVlIFwiICsgU3RyaW5nKGIpICsgXCIgaXMgbm90IGEgY29uc3RydWN0b3Igb3IgbnVsbFwiKTtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLlFOU2NyZWVuVmlkZW9UcmFjayA9IHZvaWQgMDtcbnZhciBSVENMb2NhbFZpZGVvVHJhY2tfMSA9IHJlcXVpcmUoXCIuL1JUQ0xvY2FsVmlkZW9UcmFja1wiKTtcbnZhciBRTlJ0Y1RyYWNrID0gdW5pLnJlcXVpcmVOYXRpdmVQbHVnaW4oJ1FOUlRDLVVuaVBsdWdpbi1RTlJ0Y1RyYWNrJyk7XG52YXIgUU5TY3JlZW5WaWRlb1RyYWNrID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoUU5TY3JlZW5WaWRlb1RyYWNrLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIFFOU2NyZWVuVmlkZW9UcmFjaygpIHtcbiAgICAgICAgcmV0dXJuIF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICAgIH1cbiAgICBRTlNjcmVlblZpZGVvVHJhY2sucHJvdG90eXBlLnNldFNjcmVlblJlY29yZGVyRnJhbWVSYXRlID0gZnVuY3Rpb24gKHNjcmVlblJlY29yZGVyRnJhbWVSYXRlKSB7XG4gICAgICAgIHJldHVybiBRTlJ0Y1RyYWNrLnNldFNjcmVlblJlY29yZGVyRnJhbWVSYXRlKHRoaXMuaWRlbnRpZnlJRCwgc2NyZWVuUmVjb3JkZXJGcmFtZVJhdGUpO1xuICAgIH07XG4gICAgUU5TY3JlZW5WaWRlb1RyYWNrLnJlcXVlc3RQZXJtaXNzaW9uID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgICAgIHJldHVybiBRTlJ0Y1RyYWNrLnJlcXVlc3RQZXJtaXNzaW9uKGNhbGxiYWNrKTtcbiAgICB9O1xuICAgIFFOU2NyZWVuVmlkZW9UcmFjay5pc1NjcmVlbkNhcHR1cmVTdXBwb3J0ZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBRTlJ0Y1RyYWNrLmlzU2NyZWVuQ2FwdHVyZVN1cHBvcnRlZCgpID09PSAxO1xuICAgIH07XG4gICAgcmV0dXJuIFFOU2NyZWVuVmlkZW9UcmFjaztcbn0oUlRDTG9jYWxWaWRlb1RyYWNrXzEuUU5Mb2NhbFZpZGVvVHJhY2spKTtcbmV4cG9ydHMuUU5TY3JlZW5WaWRlb1RyYWNrID0gUU5TY3JlZW5WaWRlb1RyYWNrO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///240\n");

/***/ }),

/***/ 241:
/*!***************************************************************************************************************!*\
  !*** /Users/tongjie/Desktop/QNRTC-Uniapp/demo/js_sdk/QNRTC-UniPlugin-JS/QNRTC-UniPlugin-JS/event/RTCEvent.js ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nexports.__esModule = true;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vanNfc2RrL1FOUlRDLVVuaVBsdWdpbi1KUy9RTlJUQy1VbmlQbHVnaW4tSlMvZXZlbnQvUlRDRXZlbnQuanMiXSwibmFtZXMiOlsiZXhwb3J0cyIsIl9fZXNNb2R1bGUiXSwibWFwcGluZ3MiOiJBQUFhOztBQUNiQSxPQUFPLENBQUNDLFVBQVUsR0FBRyxJQUFJIiwiZmlsZSI6IjI0MS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///241\n");

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
        "800upx",
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
        "800upx",
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

/***/ 330:
/*!**************************************************************************************************!*\
  !*** /Users/tongjie/Desktop/QNRTC-Uniapp/demo/main.js?{"page":"pages%2Fgroup-to-group%2Findex"} ***!
  \**************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var uni_app_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uni-app-style */ 1);\n/* harmony import */ var uni_app_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uni_app_style__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var uni_polyfill__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! uni-polyfill */ 4);\n/* harmony import */ var uni_polyfill__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(uni_polyfill__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _pages_group_to_group_index_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/group-to-group/index.nvue?mpType=page */ 331);\n\n        \n        \n        \n        \n        _pages_group_to_group_index_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__[\"default\"].mpType = 'page'\n        _pages_group_to_group_index_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__[\"default\"].route = 'pages/group-to-group/index'\n        _pages_group_to_group_index_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__[\"default\"].el = '#root'\n        new Vue(_pages_group_to_group_index_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__[\"default\"])\n        //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBRUEsUUFBOEI7QUFDOUIsUUFBNkI7QUFDN0IsUUFBdUU7QUFDdkUsUUFBUSxvRkFBRztBQUNYLFFBQVEsb0ZBQUc7QUFDWCxRQUFRLG9GQUFHO0FBQ1gsZ0JBQWdCLG9GQUFHIiwiZmlsZSI6IjMzMC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgICAgICBcbiAgICAgICAgaW1wb3J0ICd1bmktYXBwLXN0eWxlJ1xuICAgICAgICBpbXBvcnQgJ3VuaS1wb2x5ZmlsbCdcbiAgICAgICAgaW1wb3J0IEFwcCBmcm9tICcuL3BhZ2VzL2dyb3VwLXRvLWdyb3VwL2luZGV4Lm52dWU/bXBUeXBlPXBhZ2UnXG4gICAgICAgIEFwcC5tcFR5cGUgPSAncGFnZSdcbiAgICAgICAgQXBwLnJvdXRlID0gJ3BhZ2VzL2dyb3VwLXRvLWdyb3VwL2luZGV4J1xuICAgICAgICBBcHAuZWwgPSAnI3Jvb3QnXG4gICAgICAgIG5ldyBWdWUoQXBwKVxuICAgICAgICAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///330\n");

/***/ }),

/***/ 331:
/*!********************************************************************************************!*\
  !*** /Users/tongjie/Desktop/QNRTC-Uniapp/demo/pages/group-to-group/index.nvue?mpType=page ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_nvue_vue_type_template_id_c9d39452_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.nvue?vue&type=template&id=c9d39452&mpType=page */ 332);\n/* harmony import */ var _index_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.nvue?vue&type=script&lang=js&mpType=page */ 341);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 20);\n\nvar renderjs\n\n\nfunction injectStyles (context) {\n  \n  if(!this.options.style){\n          this.options.style = {}\n      }\n      if(Vue.prototype.__merge_style && Vue.prototype.__$appStyle__){\n        Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style)\n      }\n      if(Vue.prototype.__merge_style){\n                Vue.prototype.__merge_style(__webpack_require__(/*! ./index.nvue?vue&type=style&index=0&lang=css&mpType=page */ 343).default, this.options.style)\n            }else{\n                Object.assign(this.options.style,__webpack_require__(/*! ./index.nvue?vue&type=style&index=0&lang=css&mpType=page */ 343).default)\n            }\n\n}\n\n/* normalize component */\n\nvar component = Object(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _index_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _index_nvue_vue_type_template_id_c9d39452_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _index_nvue_vue_type_template_id_c9d39452_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  \"953bc116\",\n  false,\n  _index_nvue_vue_type_template_id_c9d39452_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ninjectStyles.call(component)\ncomponent.options.__file = \"pages/group-to-group/index.nvue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBOEg7QUFDOUg7QUFDcUU7QUFDTDtBQUNoRTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxtQkFBTyxDQUFDLG1FQUEwRDtBQUM5RyxhQUFhO0FBQ2IsaURBQWlELG1CQUFPLENBQUMsbUVBQTBEO0FBQ25IOztBQUVBOztBQUVBO0FBQ2dOO0FBQ2hOLGdCQUFnQixpTkFBVTtBQUMxQixFQUFFLHVGQUFNO0FBQ1IsRUFBRSw0RkFBTTtBQUNSLEVBQUUscUdBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsZ0dBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDZSxnRiIsImZpbGUiOiIzMzEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IGZyb20gXCIuL2luZGV4Lm52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9YzlkMzk0NTImbXBUeXBlPXBhZ2VcIlxudmFyIHJlbmRlcmpzXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL2luZGV4Lm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIlxuZXhwb3J0ICogZnJvbSBcIi4vaW5kZXgubnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiXG5mdW5jdGlvbiBpbmplY3RTdHlsZXMgKGNvbnRleHQpIHtcbiAgXG4gIGlmKCF0aGlzLm9wdGlvbnMuc3R5bGUpe1xuICAgICAgICAgIHRoaXMub3B0aW9ucy5zdHlsZSA9IHt9XG4gICAgICB9XG4gICAgICBpZihWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUgJiYgVnVlLnByb3RvdHlwZS5fXyRhcHBTdHlsZV9fKXtcbiAgICAgICAgVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlKFZ1ZS5wcm90b3R5cGUuX18kYXBwU3R5bGVfXywgdGhpcy5vcHRpb25zLnN0eWxlKVxuICAgICAgfVxuICAgICAgaWYoVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlKXtcbiAgICAgICAgICAgICAgICBWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUocmVxdWlyZShcIi4vaW5kZXgubnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJm1wVHlwZT1wYWdlXCIpLmRlZmF1bHQsIHRoaXMub3B0aW9ucy5zdHlsZSlcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24odGhpcy5vcHRpb25zLnN0eWxlLHJlcXVpcmUoXCIuL2luZGV4Lm52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZtcFR5cGU9cGFnZVwiKS5kZWZhdWx0KVxuICAgICAgICAgICAgfVxuXG59XG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBcIjk1M2JjMTE2XCIsXG4gIGZhbHNlLFxuICBjb21wb25lbnRzLFxuICByZW5kZXJqc1xuKVxuXG5pbmplY3RTdHlsZXMuY2FsbChjb21wb25lbnQpXG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInBhZ2VzL2dyb3VwLXRvLWdyb3VwL2luZGV4Lm52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///331\n");

/***/ }),

/***/ 332:
/*!**************************************************************************************************************************!*\
  !*** /Users/tongjie/Desktop/QNRTC-Uniapp/demo/pages/group-to-group/index.nvue?vue&type=template&id=c9d39452&mpType=page ***!
  \**************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_template_id_c9d39452_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.js!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-0!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./index.nvue?vue&type=template&id=c9d39452&mpType=page */ 333);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_template_id_c9d39452_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_template_id_c9d39452_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_template_id_c9d39452_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_template_id_c9d39452_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 333:
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!/Users/tongjie/Desktop/QNRTC-Uniapp/demo/pages/group-to-group/index.nvue?vue&type=template&id=c9d39452&mpType=page ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
    uniTag: __webpack_require__(/*! @/uni_modules/uni-tag/components/uni-tag/uni-tag.vue */ 334)
      .default,
    uniEasyinput:
      __webpack_require__(/*! @/uni_modules/uni-easyinput/components/uni-easyinput/uni-easyinput.vue */ 8)
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
        [
          _c(
            "view",
            { staticClass: ["wrap", "flex"] },
            [
              _c(
                "view",
                { staticClass: ["flex-row", "margin-bottom-sm"] },
                [
                  _c(
                    "u-text",
                    {
                      staticClass: ["title"],
                      appendAsTree: true,
                      attrs: { append: "tree" },
                    },
                    [_vm._v("房间状态：")]
                  ),
                  _vm.connectionState === "CONNECTING"
                    ? _c("uni-tag", {
                        attrs: { text: "连接中", type: "error" },
                      })
                    : _vm.connectionState === "RECONNECTING"
                    ? _c("uni-tag", {
                        attrs: { text: "重连中", type: "error" },
                      })
                    : _vm.connectionState === "CONNECTED" ||
                      _vm.connectionState === "RECONNECTED"
                    ? _c("uni-tag", {
                        attrs: { text: "连接成功", type: "success" },
                      })
                    : _c("uni-tag", {
                        attrs: { text: "未连接", type: "warning" },
                      }),
                ],
                1
              ),
              _c("uni-easyinput", {
                staticClass: ["margin-bottom-sm"],
                attrs: { placeholder: "请输入自定义消息" },
                model: {
                  value: _vm.message,
                  callback: function ($$v) {
                    _vm.message = $$v
                  },
                  expression: "message",
                },
              }),
              _c(
                "button",
                {
                  staticStyle: { marginBottom: "30upx" },
                  attrs: { type: "primary" },
                  on: { click: _vm.handleSendMessage },
                },
                [_vm._v("发送自定义消息")]
              ),
              _c(
                "u-text",
                {
                  staticClass: ["title"],
                  appendAsTree: true,
                  attrs: { append: "tree" },
                },
                [_vm._v("远端用户列表：")]
              ),
              _c(
                "view",
                { staticClass: ["table"] },
                [
                  _c("view", { staticClass: ["th"] }, [
                    _c(
                      "u-text",
                      {
                        staticClass: ["tr"],
                        appendAsTree: true,
                        attrs: { append: "tree" },
                      },
                      [_vm._v("用户ID")]
                    ),
                    _c(
                      "u-text",
                      {
                        staticClass: ["tr"],
                        appendAsTree: true,
                        attrs: { append: "tree" },
                      },
                      [_vm._v("上行")]
                    ),
                    _c(
                      "u-text",
                      {
                        staticClass: ["tr"],
                        appendAsTree: true,
                        attrs: { append: "tree" },
                      },
                      [_vm._v("下行")]
                    ),
                  ]),
                  _vm._l(_vm.remoteUsers, function (item, index) {
                    return _c(
                      "view",
                      { key: item.userID, staticClass: ["td"] },
                      [
                        _c(
                          "u-text",
                          {
                            staticClass: ["tr"],
                            appendAsTree: true,
                            attrs: { append: "tree" },
                          },
                          [_vm._v(_vm._s(item.userID))]
                        ),
                        _c(
                          "u-text",
                          {
                            staticClass: ["tr"],
                            appendAsTree: true,
                            attrs: { append: "tree" },
                          },
                          [
                            _vm._v(
                              _vm._s(item.networkQuality.uplinkNetworkGrade)
                            ),
                          ]
                        ),
                        _c(
                          "u-text",
                          {
                            staticClass: ["tr"],
                            appendAsTree: true,
                            attrs: { append: "tree" },
                          },
                          [
                            _vm._v(
                              _vm._s(item.networkQuality.downlinkNetworkGrade)
                            ),
                          ]
                        ),
                      ]
                    )
                  }),
                ],
                2
              ),
              _c(
                "u-text",
                {
                  staticClass: ["title"],
                  appendAsTree: true,
                  attrs: { append: "tree" },
                },
                [_vm._v("订阅的track列表：")]
              ),
              _c(
                "view",
                { staticClass: ["table"] },
                [
                  _c("view", { staticClass: ["th"] }, [
                    _c(
                      "u-text",
                      {
                        staticClass: ["tr"],
                        appendAsTree: true,
                        attrs: { append: "tree" },
                      },
                      [_vm._v("用户ID")]
                    ),
                    _c(
                      "u-text",
                      {
                        staticClass: ["tr"],
                        appendAsTree: true,
                        attrs: { append: "tree" },
                      },
                      [_vm._v("轨道ID")]
                    ),
                    _c(
                      "u-text",
                      {
                        staticClass: ["tr"],
                        appendAsTree: true,
                        attrs: { append: "tree" },
                      },
                      [_vm._v("类型")]
                    ),
                  ]),
                  _vm._l(_vm.subscribedTracks, function (item, index) {
                    return _c(
                      "view",
                      { key: item.trackID, staticClass: ["td"] },
                      [
                        _c(
                          "u-text",
                          {
                            staticClass: ["tr"],
                            appendAsTree: true,
                            attrs: { append: "tree" },
                          },
                          [_vm._v(_vm._s(item.userID))]
                        ),
                        _c(
                          "u-text",
                          {
                            staticClass: ["tr"],
                            appendAsTree: true,
                            attrs: { append: "tree" },
                          },
                          [_vm._v(_vm._s(item.trackID))]
                        ),
                        _c(
                          "u-text",
                          {
                            staticClass: ["tr"],
                            appendAsTree: true,
                            attrs: { append: "tree" },
                          },
                          [
                            _vm._v(
                              _vm._s(item.kind === "audio" ? "音频" : "视频")
                            ),
                          ]
                        ),
                      ]
                    )
                  }),
                ],
                2
              ),
              _c(
                "u-text",
                {
                  staticClass: ["title"],
                  appendAsTree: true,
                  attrs: { append: "tree" },
                },
                [_vm._v("发布的track列表：")]
              ),
              _c(
                "view",
                { staticClass: ["table"] },
                [
                  _c("view", { staticClass: ["th"] }, [
                    _c(
                      "u-text",
                      {
                        staticClass: ["tr"],
                        appendAsTree: true,
                        attrs: { append: "tree" },
                      },
                      [_vm._v("轨道ID")]
                    ),
                    _c(
                      "u-text",
                      {
                        staticClass: ["tr"],
                        appendAsTree: true,
                        attrs: { append: "tree" },
                      },
                      [_vm._v("类型")]
                    ),
                  ]),
                  _vm._l(_vm.publishedTracks, function (item, index) {
                    return _c(
                      "view",
                      { key: item.trackID, staticClass: ["td"] },
                      [
                        _c(
                          "u-text",
                          {
                            staticClass: ["tr"],
                            appendAsTree: true,
                            attrs: { append: "tree" },
                          },
                          [_vm._v(_vm._s(item.trackID))]
                        ),
                        _c(
                          "u-text",
                          {
                            staticClass: ["tr"],
                            appendAsTree: true,
                            attrs: { append: "tree" },
                          },
                          [
                            _vm._v(
                              _vm._s(item.kind === "audio" ? "音频" : "视频")
                            ),
                          ]
                        ),
                      ]
                    )
                  }),
                ],
                2
              ),
            ],
            1
          ),
          _c(
            "u-text",
            {
              staticClass: ["title", "margin-left-sm"],
              staticStyle: { marginBottom: "20upx" },
              appendAsTree: true,
              attrs: { append: "tree" },
            },
            [_vm._v("本地track：")]
          ),
          _vm._l(_vm.localTracks, function (item, index) {
            return _c(
              "view",
              { key: index, staticClass: ["track-item-wrap"] },
              [
                item.kind === "video"
                  ? _c("QNRTC-UniPlugin-SurfaceView", {
                      staticClass: ["track-video"],
                      attrs: {
                        local: 0,
                        identifyID: item.identifyID,
                        trackID: item.trackID,
                      },
                    })
                  : _vm._e(),
                _c(
                  "view",
                  { staticClass: ["track-info-wrap"] },
                  [
                    index === 0
                      ? _c(
                          "button",
                          {
                            staticStyle: {
                              width: "100upx",
                              marginTop: "20upx",
                              marginBottom: "10upx",
                            },
                            attrs: { size: "mini", type: "primary" },
                            on: {
                              click: function ($event) {
                                _vm.takeLocalVideoSnapshot(item)
                              },
                            },
                          },
                          [_vm._v("截图")]
                        )
                      : _vm._e(),
                    _c(
                      "u-text",
                      {
                        staticClass: ["track-info-item"],
                        appendAsTree: true,
                        attrs: { append: "tree" },
                      },
                      [_vm._v("轨道ID：" + _vm._s(item.trackID))]
                    ),
                    _c(
                      "u-text",
                      {
                        staticClass: ["track-info-item"],
                        appendAsTree: true,
                        attrs: { append: "tree" },
                      },
                      [_vm._v("用户ID：自己")]
                    ),
                    _c(
                      "u-text",
                      {
                        staticClass: ["track-info-item"],
                        appendAsTree: true,
                        attrs: { append: "tree" },
                      },
                      [_vm._v("类型：" + _vm._s(item.kind))]
                    ),
                    item.trackID
                      ? _c("view", [
                          _vm.localVideoTrackStats[item.trackID] &&
                          item.kind === "video" &&
                          _vm.localVideoTrackStats[item.trackID][0]
                            ? _c(
                                "u-text",
                                {
                                  staticClass: ["track-info-item"],
                                  appendAsTree: true,
                                  attrs: { append: "tree" },
                                },
                                [
                                  _vm._v(
                                    "上行帧率：" +
                                      _vm._s(
                                        _vm.localVideoTrackStats[
                                          item.trackID
                                        ][0].uplinkFrameRate
                                      )
                                  ),
                                ]
                              )
                            : _vm._e(),
                          _vm.localVideoTrackStats[item.trackID] &&
                          item.kind === "video" &&
                          _vm.localVideoTrackStats[item.trackID][0]
                            ? _c(
                                "u-text",
                                {
                                  staticClass: ["track-info-item"],
                                  appendAsTree: true,
                                  attrs: { append: "tree" },
                                },
                                [
                                  _vm._v(
                                    "上行丢包率：" +
                                      _vm._s(
                                        _vm.localVideoTrackStats[
                                          item.trackID
                                        ][0].uplinkLostRate.toFixed(5)
                                      )
                                  ),
                                ]
                              )
                            : _vm._e(),
                          _vm.localVideoTrackStats[item.trackID] &&
                          item.kind === "video" &&
                          _vm.localVideoTrackStats[item.trackID][0]
                            ? _c(
                                "u-text",
                                {
                                  staticClass: ["track-info-item"],
                                  appendAsTree: true,
                                  attrs: { append: "tree" },
                                },
                                [
                                  _vm._v(
                                    "上行码率：" +
                                      _vm._s(
                                        _vm.localVideoTrackStats[
                                          item.trackID
                                        ][0].uplinkBitrate.toFixed(5)
                                      )
                                  ),
                                ]
                              )
                            : _vm._e(),
                          _vm.localVideoTrackStats[item.trackID] &&
                          item.kind === "video" &&
                          _vm.localVideoTrackStats[item.trackID][0]
                            ? _c(
                                "u-text",
                                {
                                  staticClass: ["track-info-item"],
                                  appendAsTree: true,
                                  attrs: { append: "tree" },
                                },
                                [
                                  _vm._v(
                                    "质量：" +
                                      _vm._s(
                                        _vm.localVideoTrackStats[
                                          item.trackID
                                        ][0].profile
                                      )
                                  ),
                                ]
                              )
                            : _vm._e(),
                          _vm.localVideoTrackStats[item.trackID] &&
                          item.kind === "video" &&
                          _vm.localVideoTrackStats[item.trackID][0]
                            ? _c(
                                "u-text",
                                {
                                  staticClass: ["track-info-item"],
                                  appendAsTree: true,
                                  attrs: { append: "tree" },
                                },
                                [
                                  _vm._v(
                                    "上行RTT：" +
                                      _vm._s(
                                        _vm.localVideoTrackStats[
                                          item.trackID
                                        ][0].uplinkRTT.toFixed(5)
                                      )
                                  ),
                                ]
                              )
                            : _vm._e(),
                          _vm.localVideoTrackStats[item.trackID] &&
                          item.kind === "video" &&
                          _vm.localVideoTrackStats[item.trackID][0]
                            ? _c(
                                "u-text",
                                {
                                  staticClass: ["track-info-item"],
                                  appendAsTree: true,
                                  attrs: { append: "tree" },
                                },
                                [
                                  _vm._v(
                                    "上行视频帧宽度：" +
                                      _vm._s(
                                        _vm.localVideoTrackStats[
                                          item.trackID
                                        ][0].uplinkFrameWidth
                                      )
                                  ),
                                ]
                              )
                            : _vm._e(),
                          _vm.localVideoTrackStats[item.trackID] &&
                          item.kind === "video" &&
                          _vm.localVideoTrackStats[item.trackID][0]
                            ? _c(
                                "u-text",
                                {
                                  staticClass: ["track-info-item"],
                                  appendAsTree: true,
                                  attrs: { append: "tree" },
                                },
                                [
                                  _vm._v(
                                    "上行视频帧高度：" +
                                      _vm._s(
                                        _vm.localVideoTrackStats[
                                          item.trackID
                                        ][0].uplinkFrameHeight
                                      )
                                  ),
                                ]
                              )
                            : _vm._e(),
                          _vm.localVideoTrackStats[item.trackID] &&
                          item.kind === "video" &&
                          _vm.localVideoTrackStats[item.trackID][0]
                            ? _c(
                                "u-text",
                                {
                                  staticClass: ["track-info-item"],
                                  appendAsTree: true,
                                  attrs: { append: "tree" },
                                },
                                [
                                  _vm._v(
                                    "采集视频帧率：" +
                                      _vm._s(
                                        _vm.localVideoTrackStats[
                                          item.trackID
                                        ][0].captureFrameRate
                                      )
                                  ),
                                ]
                              )
                            : _vm._e(),
                          _vm.localVideoTrackStats[item.trackID] &&
                          item.kind === "video" &&
                          _vm.localVideoTrackStats[item.trackID][0]
                            ? _c(
                                "u-text",
                                {
                                  staticClass: ["track-info-item"],
                                  appendAsTree: true,
                                  attrs: { append: "tree" },
                                },
                                [
                                  _vm._v(
                                    "采集视频帧宽度：" +
                                      _vm._s(
                                        _vm.localVideoTrackStats[
                                          item.trackID
                                        ][0].captureFrameWidth
                                      )
                                  ),
                                ]
                              )
                            : _vm._e(),
                          _vm.localVideoTrackStats[item.trackID] &&
                          item.kind === "video" &&
                          _vm.localVideoTrackStats[item.trackID][0]
                            ? _c(
                                "u-text",
                                {
                                  staticClass: ["track-info-item"],
                                  appendAsTree: true,
                                  attrs: { append: "tree" },
                                },
                                [
                                  _vm._v(
                                    "采集视频帧高度：" +
                                      _vm._s(
                                        _vm.localVideoTrackStats[
                                          item.trackID
                                        ][0].captureFrameHeight
                                      )
                                  ),
                                ]
                              )
                            : _vm._e(),
                          _vm.localVideoTrackStats[item.trackID] &&
                          item.kind === "video" &&
                          _vm.localVideoTrackStats[item.trackID][0]
                            ? _c(
                                "u-text",
                                {
                                  staticClass: ["track-info-item"],
                                  appendAsTree: true,
                                  attrs: { append: "tree" },
                                },
                                [
                                  _vm._v(
                                    "期望视频帧率：" +
                                      _vm._s(
                                        _vm.localVideoTrackStats[
                                          item.trackID
                                        ][0].targetFrameRate
                                      )
                                  ),
                                ]
                              )
                            : _vm._e(),
                          _vm.localVideoTrackStats[item.trackID] &&
                          item.kind === "video" &&
                          _vm.localVideoTrackStats[item.trackID][0]
                            ? _c(
                                "u-text",
                                {
                                  staticClass: ["track-info-item"],
                                  appendAsTree: true,
                                  attrs: { append: "tree" },
                                },
                                [
                                  _vm._v(
                                    "期望视频帧宽度：" +
                                      _vm._s(
                                        _vm.localVideoTrackStats[
                                          item.trackID
                                        ][0].targetFrameWidth
                                      )
                                  ),
                                ]
                              )
                            : _vm._e(),
                          _vm.localVideoTrackStats[item.trackID] &&
                          item.kind === "video" &&
                          _vm.localVideoTrackStats[item.trackID][0]
                            ? _c(
                                "u-text",
                                {
                                  staticClass: ["track-info-item"],
                                  appendAsTree: true,
                                  attrs: { append: "tree" },
                                },
                                [
                                  _vm._v(
                                    "期望视频帧高度：" +
                                      _vm._s(
                                        _vm.localVideoTrackStats[
                                          item.trackID
                                        ][0].targetFrameHeight
                                      )
                                  ),
                                ]
                              )
                            : _vm._e(),
                          _vm.localAudioTrackStats[item.trackID] &&
                          item.kind === "audio"
                            ? _c(
                                "u-text",
                                {
                                  staticClass: ["track-info-item"],
                                  appendAsTree: true,
                                  attrs: { append: "tree" },
                                },
                                [
                                  _vm._v(
                                    "上行RTT：" +
                                      _vm._s(
                                        _vm.localAudioTrackStats[item.trackID]
                                          .uplinkRTT
                                      )
                                  ),
                                ]
                              )
                            : _vm._e(),
                          _vm.localAudioTrackStats[item.trackID] &&
                          item.kind === "audio"
                            ? _c(
                                "u-text",
                                {
                                  staticClass: ["track-info-item"],
                                  appendAsTree: true,
                                  attrs: { append: "tree" },
                                },
                                [
                                  _vm._v(
                                    "上行丢包率：" +
                                      _vm._s(
                                        _vm.localAudioTrackStats[
                                          item.trackID
                                        ].uplinkLostRate.toFixed(5)
                                      )
                                  ),
                                ]
                              )
                            : _vm._e(),
                          _vm.localAudioTrackStats[item.trackID] &&
                          item.kind === "audio"
                            ? _c(
                                "u-text",
                                {
                                  staticClass: ["track-info-item"],
                                  appendAsTree: true,
                                  attrs: { append: "tree" },
                                },
                                [
                                  _vm._v(
                                    "下行码率：" +
                                      _vm._s(
                                        _vm.localAudioTrackStats[
                                          item.trackID
                                        ].uplinkBitrate.toFixed(5)
                                      )
                                  ),
                                ]
                              )
                            : _vm._e(),
                        ])
                      : _vm._e(),
                  ],
                  1
                ),
              ],
              1
            )
          }),
          _c(
            "u-text",
            {
              staticClass: [
                "title",
                "margin-left-sm",
                "margin-top-sm",
                "margin-bottom-sm",
              ],
              appendAsTree: true,
              attrs: { append: "tree" },
            },
            [_vm._v("远端track：")]
          ),
          _vm._l(_vm.remoteTracks, function (item, index) {
            return _c(
              "view",
              { key: _vm.trackID, staticClass: ["track-item-wrap"] },
              [
                item.kind === "video"
                  ? _c("QNRTC-UniPlugin-SurfaceView", {
                      staticClass: ["track-video"],
                      attrs: {
                        local: 1,
                        identifyID: item.identifyID,
                        userID: item.userID,
                        trackID: item.trackID,
                      },
                    })
                  : _vm._e(),
                _c(
                  "view",
                  { staticClass: ["track-info-wrap"] },
                  [
                    item.kind === "video"
                      ? _c(
                          "button",
                          {
                            staticStyle: {
                              width: "100upx",
                              marginTop: "20upx",
                              marginBottom: "10upx",
                            },
                            attrs: { size: "mini", type: "primary" },
                            on: {
                              click: function ($event) {
                                _vm.takeRemoteVideoSnapshot(item)
                              },
                            },
                          },
                          [_vm._v("截图")]
                        )
                      : _vm._e(),
                    _c(
                      "u-text",
                      {
                        staticClass: ["track-info-item"],
                        appendAsTree: true,
                        attrs: { append: "tree" },
                      },
                      [_vm._v("轨道ID：" + _vm._s(item.trackID))]
                    ),
                    _c(
                      "u-text",
                      {
                        staticClass: ["track-info-item"],
                        appendAsTree: true,
                        attrs: { append: "tree" },
                      },
                      [_vm._v("用户ID：" + _vm._s(item.userID))]
                    ),
                    _c(
                      "u-text",
                      {
                        staticClass: ["track-info-item"],
                        appendAsTree: true,
                        attrs: { append: "tree" },
                      },
                      [_vm._v("类型：" + _vm._s(item.kind))]
                    ),
                    item.trackID
                      ? _c("view", [
                          _vm.remoteAudioTrackStats[item.trackID] &&
                          item.kind === "audio"
                            ? _c(
                                "u-text",
                                {
                                  staticClass: ["track-info-item"],
                                  appendAsTree: true,
                                  attrs: { append: "tree" },
                                },
                                [
                                  _vm._v(
                                    "下行丢包率：" +
                                      _vm._s(
                                        _vm.remoteAudioTrackStats[
                                          item.trackID
                                        ].downlinkLostRate.toFixed(5)
                                      )
                                  ),
                                ]
                              )
                            : _vm._e(),
                          _vm.remoteAudioTrackStats[item.trackID] &&
                          item.kind === "audio"
                            ? _c(
                                "u-text",
                                {
                                  staticClass: ["track-info-item"],
                                  appendAsTree: true,
                                  attrs: { append: "tree" },
                                },
                                [
                                  _vm._v(
                                    "下行码率：" +
                                      _vm._s(
                                        _vm.remoteAudioTrackStats[
                                          item.trackID
                                        ].downlinkBitrate.toFixed(5)
                                      )
                                  ),
                                ]
                              )
                            : _vm._e(),
                          _vm.remoteAudioTrackStats[item.trackID] &&
                          item.kind === "audio"
                            ? _c(
                                "u-text",
                                {
                                  staticClass: ["track-info-item"],
                                  appendAsTree: true,
                                  attrs: { append: "tree" },
                                },
                                [
                                  _vm._v(
                                    "上行RTT：" +
                                      _vm._s(
                                        _vm.remoteAudioTrackStats[item.trackID]
                                          .uplinkRTT
                                      )
                                  ),
                                ]
                              )
                            : _vm._e(),
                          _vm.remoteAudioTrackStats[item.trackID] &&
                          item.kind === "audio"
                            ? _c(
                                "u-text",
                                {
                                  staticClass: ["track-info-item"],
                                  appendAsTree: true,
                                  attrs: { append: "tree" },
                                },
                                [
                                  _vm._v(
                                    "上行丢包率：" +
                                      _vm._s(
                                        _vm.remoteAudioTrackStats[item.trackID]
                                          .uplinkLostRate
                                      )
                                  ),
                                ]
                              )
                            : _vm._e(),
                          _vm.remoteVideoTrackStats[item.trackID] &&
                          item.kind === "video"
                            ? _c(
                                "u-text",
                                {
                                  staticClass: ["track-info-item"],
                                  appendAsTree: true,
                                  attrs: { append: "tree" },
                                },
                                [
                                  _vm._v(
                                    "上行丢包率：" +
                                      _vm._s(
                                        _vm.remoteVideoTrackStats[item.trackID]
                                          .uplinkLostRate
                                      )
                                  ),
                                ]
                              )
                            : _vm._e(),
                          _vm.remoteVideoTrackStats[item.trackID] &&
                          item.kind === "video"
                            ? _c(
                                "u-text",
                                {
                                  staticClass: ["track-info-item"],
                                  appendAsTree: true,
                                  attrs: { append: "tree" },
                                },
                                [
                                  _vm._v(
                                    "上行视频帧宽度：" +
                                      _vm._s(
                                        _vm.remoteVideoTrackStats[item.trackID]
                                          .uplinkFrameWidth
                                      )
                                  ),
                                ]
                              )
                            : _vm._e(),
                          _vm.remoteVideoTrackStats[item.trackID] &&
                          item.kind === "video"
                            ? _c(
                                "u-text",
                                {
                                  staticClass: ["track-info-item"],
                                  appendAsTree: true,
                                  attrs: { append: "tree" },
                                },
                                [
                                  _vm._v(
                                    "上行视频帧高度：" +
                                      _vm._s(
                                        _vm.remoteVideoTrackStats[item.trackID]
                                          .uplinkFrameHeight
                                      )
                                  ),
                                ]
                              )
                            : _vm._e(),
                          _vm.remoteVideoTrackStats[item.trackID] &&
                          item.kind === "video"
                            ? _c(
                                "u-text",
                                {
                                  staticClass: ["track-info-item"],
                                  appendAsTree: true,
                                  attrs: { append: "tree" },
                                },
                                [
                                  _vm._v(
                                    "下行丢包率：" +
                                      _vm._s(
                                        _vm.remoteVideoTrackStats[item.trackID]
                                          .downlinkLostRate
                                      )
                                  ),
                                ]
                              )
                            : _vm._e(),
                          _vm.remoteVideoTrackStats[item.trackID] &&
                          item.kind === "video"
                            ? _c(
                                "u-text",
                                {
                                  staticClass: ["track-info-item"],
                                  appendAsTree: true,
                                  attrs: { append: "tree" },
                                },
                                [
                                  _vm._v(
                                    "下行码率：" +
                                      _vm._s(
                                        _vm.remoteVideoTrackStats[
                                          item.trackID
                                        ].downlinkBitrate.toFixed(5)
                                      )
                                  ),
                                ]
                              )
                            : _vm._e(),
                          _vm.remoteVideoTrackStats[item.trackID] &&
                          item.kind === "video"
                            ? _c(
                                "u-text",
                                {
                                  staticClass: ["track-info-item"],
                                  appendAsTree: true,
                                  attrs: { append: "tree" },
                                },
                                [
                                  _vm._v(
                                    "上行RTT：" +
                                      _vm._s(
                                        _vm.remoteVideoTrackStats[item.trackID]
                                          .uplinkRTT
                                      )
                                  ),
                                ]
                              )
                            : _vm._e(),
                          _vm.remoteVideoTrackStats[item.trackID] &&
                          item.kind === "video"
                            ? _c(
                                "u-text",
                                {
                                  staticClass: ["track-info-item"],
                                  appendAsTree: true,
                                  attrs: { append: "tree" },
                                },
                                [
                                  _vm._v(
                                    "质量等级：" +
                                      _vm._s(
                                        _vm.remoteVideoTrackStats[item.trackID]
                                          .profile
                                      )
                                  ),
                                ]
                              )
                            : _vm._e(),
                          _vm.remoteVideoTrackStats[item.trackID] &&
                          item.kind === "video"
                            ? _c(
                                "u-text",
                                {
                                  staticClass: ["track-info-item"],
                                  appendAsTree: true,
                                  attrs: { append: "tree" },
                                },
                                [
                                  _vm._v(
                                    "下行帧率：" +
                                      _vm._s(
                                        _vm.remoteVideoTrackStats[item.trackID]
                                          .downlinkFrameRate
                                      )
                                  ),
                                ]
                              )
                            : _vm._e(),
                        ])
                      : _vm._e(),
                  ],
                  1
                ),
              ],
              1
            )
          }),
        ],
        2
      ),
    ]
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 334:
/*!***************************************************************************************************!*\
  !*** /Users/tongjie/Desktop/QNRTC-Uniapp/demo/uni_modules/uni-tag/components/uni-tag/uni-tag.vue ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _uni_tag_vue_vue_type_template_id_1516016e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./uni-tag.vue?vue&type=template&id=1516016e&scoped=true& */ 335);\n/* harmony import */ var _uni_tag_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./uni-tag.vue?vue&type=script&lang=js& */ 337);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _uni_tag_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _uni_tag_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 20);\n\nvar renderjs\n\n\nfunction injectStyles (context) {\n  \n  if(!this.options.style){\n          this.options.style = {}\n      }\n      if(Vue.prototype.__merge_style && Vue.prototype.__$appStyle__){\n        Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style)\n      }\n      if(Vue.prototype.__merge_style){\n                Vue.prototype.__merge_style(__webpack_require__(/*! ./uni-tag.vue?vue&type=style&index=0&id=1516016e&lang=scss&scoped=true& */ 339).default, this.options.style)\n            }else{\n                Object.assign(this.options.style,__webpack_require__(/*! ./uni-tag.vue?vue&type=style&index=0&id=1516016e&lang=scss&scoped=true& */ 339).default)\n            }\n\n}\n\n/* normalize component */\n\nvar component = Object(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _uni_tag_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _uni_tag_vue_vue_type_template_id_1516016e_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _uni_tag_vue_vue_type_template_id_1516016e_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"1516016e\",\n  \"60cab02a\",\n  false,\n  _uni_tag_vue_vue_type_template_id_1516016e_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ninjectStyles.call(component)\ncomponent.options.__file = \"uni_modules/uni-tag/components/uni-tag/uni-tag.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBZ0k7QUFDaEk7QUFDMkQ7QUFDTDtBQUN0RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxtQkFBTyxDQUFDLGtGQUF5RTtBQUM3SCxhQUFhO0FBQ2IsaURBQWlELG1CQUFPLENBQUMsa0ZBQXlFO0FBQ2xJOztBQUVBOztBQUVBO0FBQ3NOO0FBQ3ROLGdCQUFnQixpTkFBVTtBQUMxQixFQUFFLDZFQUFNO0FBQ1IsRUFBRSw4RkFBTTtBQUNSLEVBQUUsdUdBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsa0dBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDZSxnRiIsImZpbGUiOiIzMzQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IGZyb20gXCIuL3VuaS10YWcudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTE1MTYwMTZlJnNjb3BlZD10cnVlJlwiXG52YXIgcmVuZGVyanNcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vdW5pLXRhZy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL3VuaS10YWcudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5mdW5jdGlvbiBpbmplY3RTdHlsZXMgKGNvbnRleHQpIHtcbiAgXG4gIGlmKCF0aGlzLm9wdGlvbnMuc3R5bGUpe1xuICAgICAgICAgIHRoaXMub3B0aW9ucy5zdHlsZSA9IHt9XG4gICAgICB9XG4gICAgICBpZihWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUgJiYgVnVlLnByb3RvdHlwZS5fXyRhcHBTdHlsZV9fKXtcbiAgICAgICAgVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlKFZ1ZS5wcm90b3R5cGUuX18kYXBwU3R5bGVfXywgdGhpcy5vcHRpb25zLnN0eWxlKVxuICAgICAgfVxuICAgICAgaWYoVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlKXtcbiAgICAgICAgICAgICAgICBWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUocmVxdWlyZShcIi4vdW5pLXRhZy52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0xNTE2MDE2ZSZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIpLmRlZmF1bHQsIHRoaXMub3B0aW9ucy5zdHlsZSlcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24odGhpcy5vcHRpb25zLnN0eWxlLHJlcXVpcmUoXCIuL3VuaS10YWcudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MTUxNjAxNmUmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiKS5kZWZhdWx0KVxuICAgICAgICAgICAgfVxuXG59XG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcIjE1MTYwMTZlXCIsXG4gIFwiNjBjYWIwMmFcIixcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmluamVjdFN0eWxlcy5jYWxsKGNvbXBvbmVudClcbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwidW5pX21vZHVsZXMvdW5pLXRhZy9jb21wb25lbnRzL3VuaS10YWcvdW5pLXRhZy52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///334\n");

/***/ }),

/***/ 335:
/*!**********************************************************************************************************************************************!*\
  !*** /Users/tongjie/Desktop/QNRTC-Uniapp/demo/uni_modules/uni-tag/components/uni-tag/uni-tag.vue?vue&type=template&id=1516016e&scoped=true& ***!
  \**********************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_tag_vue_vue_type_template_id_1516016e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-0!../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./uni-tag.vue?vue&type=template&id=1516016e&scoped=true& */ 336);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_tag_vue_vue_type_template_id_1516016e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_tag_vue_vue_type_template_id_1516016e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_tag_vue_vue_type_template_id_1516016e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_tag_vue_vue_type_template_id_1516016e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 336:
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!/Users/tongjie/Desktop/QNRTC-Uniapp/demo/uni_modules/uni-tag/components/uni-tag/uni-tag.vue?vue&type=template&id=1516016e&scoped=true& ***!
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
  return _vm.text
    ? _c(
        "u-text",
        {
          staticClass: ["uni-tag"],
          class: _vm.classes,
          style: _vm.customStyle,
          appendAsTree: true,
          attrs: { append: "tree" },
          on: { click: _vm.onClick },
        },
        [_vm._v(_vm._s(_vm.text))]
      )
    : _vm._e()
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 337:
/*!****************************************************************************************************************************!*\
  !*** /Users/tongjie/Desktop/QNRTC-Uniapp/demo/uni_modules/uni-tag/components/uni-tag/uni-tag.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_tag_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib??ref--5-0!../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--5-1!../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./uni-tag.vue?vue&type=script&lang=js& */ 338);\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_tag_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_tag_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_tag_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_tag_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_tag_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQStqQixDQUFnQix1akJBQUcsRUFBQyIsImZpbGUiOiIzMzcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNS0wIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS01LTEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vdW5pLXRhZy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS01LTAhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTUtMSEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi91bmktdGFnLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///337\n");

/***/ }),

/***/ 338:
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--5-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--5-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!/Users/tongjie/Desktop/QNRTC-Uniapp/demo/uni_modules/uni-tag/components/uni-tag/uni-tag.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n//\n//\n//\n//\n/**\n * Tag 标签\n * @description 用于展示1个或多个文字标签，可点击切换选中、不选中的状态\n * @tutorial https://ext.dcloud.net.cn/plugin?id=35\n * @property {String} text 标签内容\n * @property {String} size = [normal|small] 大小尺寸\n * \t@value normal 正常\n * \t@value small 小尺寸\n * @property {String} type = [default|primary|success｜warning｜error｜royal]  颜色类型\n * \t@value default 灰色\n * \t@value primary 蓝色\n * \t@value success 绿色\n * \t@value warning 黄色\n * \t@value error 红色\n * \t@value royal 紫色\n * @property {Boolean} disabled = [true|false] 是否为禁用状态\n * @property {Boolean} inverted = [true|false] 是否无需背景颜色（空心标签）\n * @property {Boolean} circle = [true|false] 是否为圆角\n * @event {Function} click 点击 Tag 触发事件\n */\nvar _default = {\n  name: \"UniTag\",\n  emits: ['click'],\n  props: {\n    type: {\n      // 标签类型default、primary、success、warning、error、royal\n      type: String,\n      default: \"default\"\n    },\n    size: {\n      // 标签大小 normal, small\n      type: String,\n      default: \"normal\"\n    },\n    // 标签内容\n    text: {\n      type: String,\n      default: \"\"\n    },\n    disabled: {\n      // 是否为禁用状态\n      type: [Boolean, String],\n      default: false\n    },\n    inverted: {\n      // 是否为空心\n      type: [Boolean, String],\n      default: false\n    },\n    circle: {\n      // 是否为圆角样式\n      type: [Boolean, String],\n      default: false\n    },\n    mark: {\n      // 是否为标记样式\n      type: [Boolean, String],\n      default: false\n    },\n    customStyle: {\n      type: String,\n      default: ''\n    }\n  },\n  computed: {\n    classes: function classes() {\n      var type = this.type,\n        disabled = this.disabled,\n        inverted = this.inverted,\n        circle = this.circle,\n        mark = this.mark,\n        size = this.size,\n        isTrue = this.isTrue;\n      var classArr = ['uni-tag--' + type, isTrue(disabled) ? 'uni-tag--disabled' : '', isTrue(inverted) ? type + '-uni-tag--inverted' : '', isTrue(circle) ? 'uni-tag--circle' : '', isTrue(mark) ? 'uni-tag--mark' : '', 'uni-tag--' + size,\n      // type === 'default' ? 'uni-tag--default' : 'uni-tag-text',\n      isTrue(inverted) ? 'uni-tag-text--' + type : '', size === 'small' ? 'uni-tag-text--small' : ''];\n      return classArr.join(' ');\n    }\n  },\n  methods: {\n    isTrue: function isTrue(value) {\n      return value === true || value === 'true';\n    },\n    onClick: function onClick() {\n      if (this.isTrue(this.disabled)) return;\n      this.$emit(\"click\");\n    }\n  }\n};\nexports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vdW5pX21vZHVsZXMvdW5pLXRhZy9jb21wb25lbnRzL3VuaS10YWcvdW5pLXRhZy52dWUiXSwibmFtZXMiOlsibmFtZSIsImVtaXRzIiwicHJvcHMiLCJ0eXBlIiwiZGVmYXVsdCIsInNpemUiLCJ0ZXh0IiwiZGlzYWJsZWQiLCJpbnZlcnRlZCIsImNpcmNsZSIsIm1hcmsiLCJjdXN0b21TdHlsZSIsImNvbXB1dGVkIiwiY2xhc3NlcyIsImlzVHJ1ZSIsIm1ldGhvZHMiLCJvbkNsaWNrIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQW5CQSxlQXFCQTtFQUNBQTtFQUNBQztFQUNBQztJQUNBQztNQUNBO01BQ0FBO01BQ0FDO0lBQ0E7SUFDQUM7TUFDQTtNQUNBRjtNQUNBQztJQUNBO0lBQ0E7SUFDQUU7TUFDQUg7TUFDQUM7SUFDQTtJQUNBRztNQUNBO01BQ0FKO01BQ0FDO0lBQ0E7SUFDQUk7TUFDQTtNQUNBTDtNQUNBQztJQUNBO0lBQ0FLO01BQ0E7TUFDQU47TUFDQUM7SUFDQTtJQUNBTTtNQUNBO01BQ0FQO01BQ0FDO0lBQ0E7SUFDQU87TUFDQVI7TUFDQUM7SUFDQTtFQUNBO0VBQ0FRO0lBQ0FDO01BQ0E7UUFBQU47UUFBQUM7UUFBQUM7UUFBQUM7UUFBQUw7UUFBQVM7TUFDQSxnQkFDQSxvQkFDQUEsNkNBQ0FBLHFEQUNBQSx5Q0FDQUEscUNBQ0E7TUFDQTtNQUNBQSxpREFDQVQsOENBQ0E7TUFDQTtJQUNBO0VBQ0E7RUFDQVU7SUFDQUQ7TUFDQTtJQUNBO0lBQ0FFO01BQ0E7TUFDQTtJQUNBO0VBQ0E7QUFDQTtBQUFBIiwiZmlsZSI6IjMzOC5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cclxuXHQ8dGV4dCBjbGFzcz1cInVuaS10YWdcIiB2LWlmPVwidGV4dFwiIDpjbGFzcz1cImNsYXNzZXNcIiA6c3R5bGU9XCJjdXN0b21TdHlsZVwiIEBjbGljaz1cIm9uQ2xpY2tcIiA+PHNsb3QvPnt7dGV4dH19PHNsb3QgbmFtZT1cInJpZ2h0XCIgLz48L3RleHQ+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5cdC8qKlxyXG5cdCAqIFRhZyDmoIfnrb5cclxuXHQgKiBAZGVzY3JpcHRpb24g55So5LqO5bGV56S6MeS4quaIluWkmuS4quaWh+Wtl+agh+etvu+8jOWPr+eCueWHu+WIh+aNoumAieS4reOAgeS4jemAieS4reeahOeKtuaAgVxyXG5cdCAqIEB0dXRvcmlhbCBodHRwczovL2V4dC5kY2xvdWQubmV0LmNuL3BsdWdpbj9pZD0zNVxyXG5cdCAqIEBwcm9wZXJ0eSB7U3RyaW5nfSB0ZXh0IOagh+etvuWGheWuuVxyXG5cdCAqIEBwcm9wZXJ0eSB7U3RyaW5nfSBzaXplID0gW25vcm1hbHxzbWFsbF0g5aSn5bCP5bC65a+4XHJcblx0ICogXHRAdmFsdWUgbm9ybWFsIOato+W4uFxyXG5cdCAqIFx0QHZhbHVlIHNtYWxsIOWwj+WwuuWvuFxyXG5cdCAqIEBwcm9wZXJ0eSB7U3RyaW5nfSB0eXBlID0gW2RlZmF1bHR8cHJpbWFyeXxzdWNjZXNz772cd2FybmluZ++9nGVycm9y772ccm95YWxdICDpopzoibLnsbvlnotcclxuXHQgKiBcdEB2YWx1ZSBkZWZhdWx0IOeBsOiJslxyXG5cdCAqIFx0QHZhbHVlIHByaW1hcnkg6JOd6ImyXHJcblx0ICogXHRAdmFsdWUgc3VjY2VzcyDnu7/oibJcclxuXHQgKiBcdEB2YWx1ZSB3YXJuaW5nIOm7hOiJslxyXG5cdCAqIFx0QHZhbHVlIGVycm9yIOe6ouiJslxyXG5cdCAqIFx0QHZhbHVlIHJveWFsIOe0q+iJslxyXG5cdCAqIEBwcm9wZXJ0eSB7Qm9vbGVhbn0gZGlzYWJsZWQgPSBbdHJ1ZXxmYWxzZV0g5piv5ZCm5Li656aB55So54q25oCBXHJcblx0ICogQHByb3BlcnR5IHtCb29sZWFufSBpbnZlcnRlZCA9IFt0cnVlfGZhbHNlXSDmmK/lkKbml6DpnIDog4zmma/popzoibLvvIjnqbrlv4PmoIfnrb7vvIlcclxuXHQgKiBAcHJvcGVydHkge0Jvb2xlYW59IGNpcmNsZSA9IFt0cnVlfGZhbHNlXSDmmK/lkKbkuLrlnIbop5JcclxuXHQgKiBAZXZlbnQge0Z1bmN0aW9ufSBjbGljayDngrnlh7sgVGFnIOinpuWPkeS6i+S7tlxyXG5cdCAqL1xyXG5cclxuXHRleHBvcnQgZGVmYXVsdCB7XHJcblx0XHRuYW1lOiBcIlVuaVRhZ1wiLFxyXG5cdFx0ZW1pdHM6WydjbGljayddLFxyXG5cdFx0cHJvcHM6IHtcclxuXHRcdFx0dHlwZToge1xyXG5cdFx0XHRcdC8vIOagh+etvuexu+Wei2RlZmF1bHTjgIFwcmltYXJ544CBc3VjY2Vzc+OAgXdhcm5pbmfjgIFlcnJvcuOAgXJveWFsXHJcblx0XHRcdFx0dHlwZTogU3RyaW5nLFxyXG5cdFx0XHRcdGRlZmF1bHQ6IFwiZGVmYXVsdFwiXHJcblx0XHRcdH0sXHJcblx0XHRcdHNpemU6IHtcclxuXHRcdFx0XHQvLyDmoIfnrb7lpKflsI8gbm9ybWFsLCBzbWFsbFxyXG5cdFx0XHRcdHR5cGU6IFN0cmluZyxcclxuXHRcdFx0XHRkZWZhdWx0OiBcIm5vcm1hbFwiXHJcblx0XHRcdH0sXHJcblx0XHRcdC8vIOagh+etvuWGheWuuVxyXG5cdFx0XHR0ZXh0OiB7XHJcblx0XHRcdFx0dHlwZTogU3RyaW5nLFxyXG5cdFx0XHRcdGRlZmF1bHQ6IFwiXCJcclxuXHRcdFx0fSxcclxuXHRcdFx0ZGlzYWJsZWQ6IHtcclxuXHRcdFx0XHQvLyDmmK/lkKbkuLrnpoHnlKjnirbmgIFcclxuXHRcdFx0XHR0eXBlOiBbQm9vbGVhbiwgU3RyaW5nXSxcclxuXHRcdFx0XHRkZWZhdWx0OiBmYWxzZVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRpbnZlcnRlZDoge1xyXG5cdFx0XHRcdC8vIOaYr+WQpuS4uuepuuW/g1xyXG5cdFx0XHRcdHR5cGU6IFtCb29sZWFuLCBTdHJpbmddLFxyXG5cdFx0XHRcdGRlZmF1bHQ6IGZhbHNlXHJcblx0XHRcdH0sXHJcblx0XHRcdGNpcmNsZToge1xyXG5cdFx0XHRcdC8vIOaYr+WQpuS4uuWchuinkuagt+W8j1xyXG5cdFx0XHRcdHR5cGU6IFtCb29sZWFuLCBTdHJpbmddLFxyXG5cdFx0XHRcdGRlZmF1bHQ6IGZhbHNlXHJcblx0XHRcdH0sXHJcblx0XHRcdG1hcms6IHtcclxuXHRcdFx0XHQvLyDmmK/lkKbkuLrmoIforrDmoLflvI9cclxuXHRcdFx0XHR0eXBlOiBbQm9vbGVhbiwgU3RyaW5nXSxcclxuXHRcdFx0XHRkZWZhdWx0OiBmYWxzZVxyXG5cdFx0XHR9LFxuXHRcdFx0Y3VzdG9tU3R5bGU6IHtcblx0XHRcdFx0dHlwZTogU3RyaW5nLFxuXHRcdFx0XHRkZWZhdWx0OiAnJ1xuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdGNvbXB1dGVkOiB7XHJcblx0XHRcdGNsYXNzZXMoKSB7XG5cdFx0XHRcdGNvbnN0IHsgdHlwZSwgZGlzYWJsZWQsIGludmVydGVkLCBjaXJjbGUsIG1hcmssIHNpemUsIGlzVHJ1ZSB9ID0gdGhpc1xyXG5cdFx0XHRcdGNvbnN0IGNsYXNzQXJyID0gW1xuXHRcdFx0XHRcdCd1bmktdGFnLS0nICsgdHlwZSxcclxuXHRcdFx0XHRcdGlzVHJ1ZShkaXNhYmxlZCkgPyAndW5pLXRhZy0tZGlzYWJsZWQnIDogJycsXHJcblx0XHRcdFx0XHRpc1RydWUoaW52ZXJ0ZWQpID8gdHlwZSArICctdW5pLXRhZy0taW52ZXJ0ZWQnIDogJycsXHJcblx0XHRcdFx0XHRpc1RydWUoY2lyY2xlKSA/ICd1bmktdGFnLS1jaXJjbGUnIDogJycsXHJcblx0XHRcdFx0XHRpc1RydWUobWFyaykgPyAndW5pLXRhZy0tbWFyaycgOiAnJyxcclxuXHRcdFx0XHRcdCd1bmktdGFnLS0nICsgc2l6ZSxcclxuXHRcdFx0XHRcdC8vIHR5cGUgPT09ICdkZWZhdWx0JyA/ICd1bmktdGFnLS1kZWZhdWx0JyA6ICd1bmktdGFnLXRleHQnLFxyXG5cdFx0XHRcdFx0aXNUcnVlKGludmVydGVkKSA/ICd1bmktdGFnLXRleHQtLScgKyB0eXBlIDogJycsXHJcblx0XHRcdFx0XHRzaXplID09PSAnc21hbGwnID8gJ3VuaS10YWctdGV4dC0tc21hbGwnIDogJydcclxuXHRcdFx0XHRdXG5cdFx0XHRcdHJldHVybiBjbGFzc0Fyci5qb2luKCcgJylcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdG1ldGhvZHM6IHtcblx0XHRcdGlzVHJ1ZSh2YWx1ZSkge1xuXHRcdFx0XHRyZXR1cm4gdmFsdWUgPT09IHRydWUgfHwgdmFsdWUgPT09ICd0cnVlJ1xuXHRcdFx0fSxcclxuXHRcdFx0b25DbGljaygpIHtcclxuXHRcdFx0XHRpZiAodGhpcy5pc1RydWUodGhpcy5kaXNhYmxlZCkpIHJldHVyblxyXG5cdFx0XHRcdHRoaXMuJGVtaXQoXCJjbGlja1wiKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH07XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIGxhbmc9XCJzY3NzXCIgc2NvcGVkPlxyXG5cdCR0YWctcGQ6IDBweCAxNnB4O1xyXG5cdCR0YWctc21hbGwtcGQ6IDBweCA4cHg7XG5cdCR1bmktY29sb3Itcm95YWw6ICM0MzM1ZDY7XG5cclxuXHJcblx0LnVuaS10YWcge1xyXG5cdFx0LyogI2lmbmRlZiBBUFAtTlZVRSAqL1xuXHRcdGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XHJcblx0XHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cdFx0LyogI2VuZGlmICovXHJcblx0XHRwYWRkaW5nOiAkdGFnLXBkO1xyXG5cdFx0bGluZS1oZWlnaHQ6IDMwcHg7XHJcblx0XHRjb2xvcjogJHVuaS10ZXh0LWNvbG9yO1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogJHVuaS1ib3JkZXItcmFkaXVzLWJhc2U7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAkdW5pLWJnLWNvbG9yLWdyZXk7XHJcblx0XHRib3JkZXItd2lkdGg6IDFycHg7XHJcblx0XHRib3JkZXItc3R5bGU6IHNvbGlkO1xyXG5cdFx0Ym9yZGVyLWNvbG9yOiAkdW5pLWJnLWNvbG9yLWdyZXk7XHJcblx0XHQvKiAjaWZkZWYgSDUgKi9cclxuXHRcdGN1cnNvcjogcG9pbnRlcjtcclxuXHRcdC8qICNlbmRpZiAqL1xyXG5cdH1cclxuXHJcblx0LnVuaS10YWctLWNpcmNsZSB7XHJcblx0XHRib3JkZXItcmFkaXVzOiAxNXB4O1xyXG5cdH1cclxuXHJcblx0LnVuaS10YWctLW1hcmsge1xyXG5cdFx0Ym9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMDtcclxuXHRcdGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDA7XHJcblx0XHRib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTVweDtcclxuXHRcdGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxNXB4O1xyXG5cdH1cclxuXHJcblx0LnVuaS10YWctLWRpc2FibGVkIHtcclxuXHRcdG9wYWNpdHk6IDAuNTtcclxuXHRcdC8qICNpZmRlZiBINSAqL1xyXG5cdFx0Y3Vyc29yOiBub3QtYWxsb3dlZDtcclxuXHRcdC8qICNlbmRpZiAqL1xyXG5cclxuXHR9XHJcblxyXG5cdC51bmktdGFnLS1zbWFsbCB7XHJcblx0XHRoZWlnaHQ6IDIwcHg7XHJcblx0XHRwYWRkaW5nOiAkdGFnLXNtYWxsLXBkO1xyXG5cdFx0bGluZS1oZWlnaHQ6IDIwcHg7XHJcblx0XHRmb250LXNpemU6ICR1bmktZm9udC1zaXplLXNtO1xyXG5cdH1cclxuXHJcblx0LnVuaS10YWctLWRlZmF1bHQge1xyXG5cdFx0Y29sb3I6ICR1bmktdGV4dC1jb2xvcjtcclxuXHRcdGZvbnQtc2l6ZTogJHVuaS1mb250LXNpemUtYmFzZTtcclxuXHR9XHJcblxyXG5cdC51bmktdGFnLS1yb3lhbCB7XHJcblx0XHRjb2xvcjogJHVuaS10ZXh0LWNvbG9yO1xyXG5cdFx0Zm9udC1zaXplOiAkdW5pLWZvbnQtc2l6ZS1iYXNlO1xyXG5cdH1cclxuXHJcblx0LnVuaS10YWctdGV4dC0tc21hbGwge1xyXG5cdFx0Zm9udC1zaXplOiAkdW5pLWZvbnQtc2l6ZS1zbTtcclxuXHR9XHJcblxyXG5cdC51bmktdGFnLXRleHQge1xyXG5cdFx0Y29sb3I6ICR1bmktdGV4dC1jb2xvci1pbnZlcnNlO1xyXG5cdFx0Zm9udC1zaXplOiAkdW5pLWZvbnQtc2l6ZS1iYXNlO1xyXG5cdH1cclxuXHJcblx0LnVuaS10YWctdGV4dC0tcHJpbWFyeSB7XHJcblx0XHRjb2xvcjogJHVuaS1jb2xvci1wcmltYXJ5O1xyXG5cdH1cclxuXHJcblx0LnVuaS10YWctdGV4dC0tc3VjY2VzcyB7XHJcblx0XHRjb2xvcjogJHVuaS1jb2xvci1zdWNjZXNzO1xyXG5cdH1cclxuXHJcblx0LnVuaS10YWctdGV4dC0td2FybmluZyB7XHJcblx0XHRjb2xvcjogJHVuaS1jb2xvci13YXJuaW5nO1xyXG5cdH1cclxuXHJcblx0LnVuaS10YWctdGV4dC0tZXJyb3Ige1xyXG5cdFx0Y29sb3I6ICR1bmktY29sb3ItZXJyb3I7XHJcblx0fVxyXG5cclxuXHQudW5pLXRhZy10ZXh0LS1yb3lhbCB7XHJcblx0XHRjb2xvcjogJHVuaS1jb2xvci1yb3lhbDtcclxuXHR9XHJcblxyXG5cclxuXHQudW5pLXRhZy0tcHJpbWFyeSB7XHJcblx0XHRjb2xvcjogJHVuaS10ZXh0LWNvbG9yLWludmVyc2U7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAkdW5pLWNvbG9yLXByaW1hcnk7XHJcblx0XHRib3JkZXItd2lkdGg6IDFycHg7XHJcblx0XHRib3JkZXItc3R5bGU6IHNvbGlkO1xyXG5cdFx0Ym9yZGVyLWNvbG9yOiAkdW5pLWNvbG9yLXByaW1hcnk7XHJcblx0fVxyXG5cclxuXHQucHJpbWFyeS11bmktdGFnLS1pbnZlcnRlZCB7XHJcblx0XHRjb2xvcjogJHVuaS1jb2xvci1wcmltYXJ5O1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogJHVuaS1iZy1jb2xvcjtcclxuXHRcdGJvcmRlci13aWR0aDogMXJweDtcclxuXHRcdGJvcmRlci1zdHlsZTogc29saWQ7XHJcblx0XHRib3JkZXItY29sb3I6ICR1bmktY29sb3ItcHJpbWFyeTtcclxuXHR9XHJcblxyXG5cdC51bmktdGFnLS1zdWNjZXNzIHtcclxuXHRcdGNvbG9yOiAkdW5pLXRleHQtY29sb3ItaW52ZXJzZTtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICR1bmktY29sb3Itc3VjY2VzcztcclxuXHRcdGJvcmRlci13aWR0aDogMXJweDtcclxuXHRcdGJvcmRlci1zdHlsZTogc29saWQ7XHJcblx0XHRib3JkZXItY29sb3I6ICR1bmktY29sb3Itc3VjY2VzcztcclxuXHR9XHJcblxyXG5cdC5zdWNjZXNzLXVuaS10YWctLWludmVydGVkIHtcclxuXHRcdGNvbG9yOiAkdW5pLWNvbG9yLXN1Y2Nlc3M7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAkdW5pLWJnLWNvbG9yO1xyXG5cdFx0Ym9yZGVyLXdpZHRoOiAxcnB4O1xyXG5cdFx0Ym9yZGVyLXN0eWxlOiBzb2xpZDtcclxuXHRcdGJvcmRlci1jb2xvcjogJHVuaS1jb2xvci1zdWNjZXNzO1xyXG5cdH1cclxuXHJcblx0LnVuaS10YWctLXdhcm5pbmcge1xyXG5cdFx0Y29sb3I6ICR1bmktdGV4dC1jb2xvci1pbnZlcnNlO1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogJHVuaS1jb2xvci13YXJuaW5nO1xyXG5cdFx0Ym9yZGVyLXdpZHRoOiAxcnB4O1xyXG5cdFx0Ym9yZGVyLXN0eWxlOiBzb2xpZDtcclxuXHRcdGJvcmRlci1jb2xvcjogJHVuaS1jb2xvci13YXJuaW5nO1xyXG5cdH1cclxuXHJcblx0Lndhcm5pbmctdW5pLXRhZy0taW52ZXJ0ZWQge1xyXG5cdFx0Y29sb3I6ICR1bmktY29sb3Itd2FybmluZztcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICR1bmktYmctY29sb3I7XHJcblx0XHRib3JkZXItd2lkdGg6IDFycHg7XHJcblx0XHRib3JkZXItc3R5bGU6IHNvbGlkO1xyXG5cdFx0Ym9yZGVyLWNvbG9yOiAkdW5pLWNvbG9yLXdhcm5pbmc7XHJcblx0fVxyXG5cclxuXHQudW5pLXRhZy0tZXJyb3Ige1xyXG5cdFx0Y29sb3I6ICR1bmktdGV4dC1jb2xvci1pbnZlcnNlO1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogJHVuaS1jb2xvci1lcnJvcjtcclxuXHRcdGJvcmRlci13aWR0aDogMXJweDtcclxuXHRcdGJvcmRlci1zdHlsZTogc29saWQ7XHJcblx0XHRib3JkZXItY29sb3I6ICR1bmktY29sb3ItZXJyb3I7XHJcblx0fVxyXG5cclxuXHQuZXJyb3ItdW5pLXRhZy0taW52ZXJ0ZWQge1xyXG5cdFx0Y29sb3I6ICR1bmktY29sb3ItZXJyb3I7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAkdW5pLWJnLWNvbG9yO1xyXG5cdFx0Ym9yZGVyLXdpZHRoOiAxcnB4O1xyXG5cdFx0Ym9yZGVyLXN0eWxlOiBzb2xpZDtcclxuXHRcdGJvcmRlci1jb2xvcjogJHVuaS1jb2xvci1lcnJvcjtcclxuXHR9XHJcblxyXG5cdC51bmktdGFnLS1yb3lhbCB7XHJcblx0XHRjb2xvcjogJHVuaS10ZXh0LWNvbG9yLWludmVyc2U7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAkdW5pLWNvbG9yLXJveWFsO1xyXG5cdFx0Ym9yZGVyLXdpZHRoOiAxcnB4O1xyXG5cdFx0Ym9yZGVyLXN0eWxlOiBzb2xpZDtcclxuXHRcdGJvcmRlci1jb2xvcjogJHVuaS1jb2xvci1yb3lhbDtcclxuXHR9XHJcblxyXG5cdC5yb3lhbC11bmktdGFnLS1pbnZlcnRlZCB7XHJcblx0XHRjb2xvcjogJHVuaS1jb2xvci1yb3lhbDtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICR1bmktYmctY29sb3I7XHJcblx0XHRib3JkZXItd2lkdGg6IDFycHg7XHJcblx0XHRib3JkZXItc3R5bGU6IHNvbGlkO1xyXG5cdFx0Ym9yZGVyLWNvbG9yOiAkdW5pLWNvbG9yLXJveWFsO1xyXG5cdH1cclxuXHJcblx0LnVuaS10YWctLWludmVydGVkIHtcclxuXHRcdGNvbG9yOiAkdW5pLXRleHQtY29sb3I7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAkdW5pLWJnLWNvbG9yO1xyXG5cdFx0Ym9yZGVyLXdpZHRoOiAxcnB4O1xyXG5cdFx0Ym9yZGVyLXN0eWxlOiBzb2xpZDtcclxuXHRcdGJvcmRlci1jb2xvcjogJHVuaS1iZy1jb2xvci1ncmV5O1xyXG5cdH1cclxuPC9zdHlsZT5cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///338\n");

/***/ }),

/***/ 339:
/*!*************************************************************************************************************************************************************!*\
  !*** /Users/tongjie/Desktop/QNRTC-Uniapp/demo/uni_modules/uni-tag/components/uni-tag/uni-tag.vue?vue&type=style&index=0&id=1516016e&lang=scss&scoped=true& ***!
  \*************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_11_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_11_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_tag_vue_vue_type_style_index_0_id_1516016e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--11-oneOf-0-1!../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--11-oneOf-0-2!../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--11-oneOf-0-3!../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--11-oneOf-0-4!../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./uni-tag.vue?vue&type=style&index=0&id=1516016e&lang=scss&scoped=true& */ 340);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_11_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_11_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_tag_vue_vue_type_style_index_0_id_1516016e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_11_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_11_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_tag_vue_vue_type_style_index_0_id_1516016e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_11_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_11_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_tag_vue_vue_type_style_index_0_id_1516016e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_11_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_11_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_tag_vue_vue_type_style_index_0_id_1516016e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_11_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_11_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_tag_vue_vue_type_style_index_0_id_1516016e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 340:
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--11-oneOf-0-1!./node_modules/postcss-loader/src??ref--11-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--11-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--11-oneOf-0-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!/Users/tongjie/Desktop/QNRTC-Uniapp/demo/uni_modules/uni-tag/components/uni-tag/uni-tag.vue?vue&type=style&index=0&id=1516016e&lang=scss&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  ".uni-tag": {
    "": {
      "paddingTop": [
        "0",
        0,
        0,
        16
      ],
      "paddingRight": [
        "16",
        0,
        0,
        16
      ],
      "paddingBottom": [
        "0",
        0,
        0,
        16
      ],
      "paddingLeft": [
        "16",
        0,
        0,
        16
      ],
      "lineHeight": [
        "30",
        0,
        0,
        16
      ],
      "color": [
        "#333333",
        0,
        0,
        16
      ],
      "borderRadius": [
        "3",
        0,
        0,
        16
      ],
      "backgroundColor": [
        "#f8f8f8",
        0,
        0,
        16
      ],
      "borderWidth": [
        "1rpx",
        0,
        0,
        16
      ],
      "borderStyle": [
        "solid",
        0,
        0,
        16
      ],
      "borderColor": [
        "#f8f8f8",
        0,
        0,
        16
      ]
    }
  },
  ".uni-tag--circle": {
    "": {
      "borderRadius": [
        "15",
        0,
        0,
        17
      ]
    }
  },
  ".uni-tag--mark": {
    "": {
      "borderTopLeftRadius": [
        0,
        0,
        0,
        18
      ],
      "borderBottomLeftRadius": [
        0,
        0,
        0,
        18
      ],
      "borderTopRightRadius": [
        "15",
        0,
        0,
        18
      ],
      "borderBottomRightRadius": [
        "15",
        0,
        0,
        18
      ]
    }
  },
  ".uni-tag--disabled": {
    "": {
      "opacity": [
        0.5,
        0,
        0,
        19
      ]
    }
  },
  ".uni-tag--small": {
    "": {
      "height": [
        "20",
        0,
        0,
        20
      ],
      "paddingTop": [
        "0",
        0,
        0,
        20
      ],
      "paddingRight": [
        "8",
        0,
        0,
        20
      ],
      "paddingBottom": [
        "0",
        0,
        0,
        20
      ],
      "paddingLeft": [
        "8",
        0,
        0,
        20
      ],
      "lineHeight": [
        "20",
        0,
        0,
        20
      ],
      "fontSize": [
        "12",
        0,
        0,
        20
      ]
    }
  },
  ".uni-tag--default": {
    "": {
      "color": [
        "#333333",
        0,
        0,
        21
      ],
      "fontSize": [
        "14",
        0,
        0,
        21
      ]
    }
  },
  ".uni-tag--royal": {
    "": {
      "color": [
        "#ffffff",
        0,
        0,
        38
      ],
      "fontSize": [
        "14",
        0,
        0,
        22
      ],
      "backgroundColor": [
        "#4335d6",
        0,
        0,
        38
      ],
      "borderWidth": [
        "1rpx",
        0,
        0,
        38
      ],
      "borderStyle": [
        "solid",
        0,
        0,
        38
      ],
      "borderColor": [
        "#4335d6",
        0,
        0,
        38
      ]
    }
  },
  ".uni-tag-text--small": {
    "": {
      "fontSize": [
        "12",
        0,
        0,
        23
      ]
    }
  },
  ".uni-tag-text": {
    "": {
      "color": [
        "#ffffff",
        0,
        0,
        24
      ],
      "fontSize": [
        "14",
        0,
        0,
        24
      ]
    }
  },
  ".uni-tag-text--primary": {
    "": {
      "color": [
        "#007aff",
        0,
        0,
        25
      ]
    }
  },
  ".uni-tag-text--success": {
    "": {
      "color": [
        "#4cd964",
        0,
        0,
        26
      ]
    }
  },
  ".uni-tag-text--warning": {
    "": {
      "color": [
        "#f0ad4e",
        0,
        0,
        27
      ]
    }
  },
  ".uni-tag-text--error": {
    "": {
      "color": [
        "#dd524d",
        0,
        0,
        28
      ]
    }
  },
  ".uni-tag-text--royal": {
    "": {
      "color": [
        "#4335d6",
        0,
        0,
        29
      ]
    }
  },
  ".uni-tag--primary": {
    "": {
      "color": [
        "#ffffff",
        0,
        0,
        30
      ],
      "backgroundColor": [
        "#007aff",
        0,
        0,
        30
      ],
      "borderWidth": [
        "1rpx",
        0,
        0,
        30
      ],
      "borderStyle": [
        "solid",
        0,
        0,
        30
      ],
      "borderColor": [
        "#007aff",
        0,
        0,
        30
      ]
    }
  },
  ".primary-uni-tag--inverted": {
    "": {
      "color": [
        "#007aff",
        0,
        0,
        31
      ],
      "backgroundColor": [
        "#ffffff",
        0,
        0,
        31
      ],
      "borderWidth": [
        "1rpx",
        0,
        0,
        31
      ],
      "borderStyle": [
        "solid",
        0,
        0,
        31
      ],
      "borderColor": [
        "#007aff",
        0,
        0,
        31
      ]
    }
  },
  ".uni-tag--success": {
    "": {
      "color": [
        "#ffffff",
        0,
        0,
        32
      ],
      "backgroundColor": [
        "#4cd964",
        0,
        0,
        32
      ],
      "borderWidth": [
        "1rpx",
        0,
        0,
        32
      ],
      "borderStyle": [
        "solid",
        0,
        0,
        32
      ],
      "borderColor": [
        "#4cd964",
        0,
        0,
        32
      ]
    }
  },
  ".success-uni-tag--inverted": {
    "": {
      "color": [
        "#4cd964",
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
      "borderWidth": [
        "1rpx",
        0,
        0,
        33
      ],
      "borderStyle": [
        "solid",
        0,
        0,
        33
      ],
      "borderColor": [
        "#4cd964",
        0,
        0,
        33
      ]
    }
  },
  ".uni-tag--warning": {
    "": {
      "color": [
        "#ffffff",
        0,
        0,
        34
      ],
      "backgroundColor": [
        "#f0ad4e",
        0,
        0,
        34
      ],
      "borderWidth": [
        "1rpx",
        0,
        0,
        34
      ],
      "borderStyle": [
        "solid",
        0,
        0,
        34
      ],
      "borderColor": [
        "#f0ad4e",
        0,
        0,
        34
      ]
    }
  },
  ".warning-uni-tag--inverted": {
    "": {
      "color": [
        "#f0ad4e",
        0,
        0,
        35
      ],
      "backgroundColor": [
        "#ffffff",
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
      ],
      "borderColor": [
        "#f0ad4e",
        0,
        0,
        35
      ]
    }
  },
  ".uni-tag--error": {
    "": {
      "color": [
        "#ffffff",
        0,
        0,
        36
      ],
      "backgroundColor": [
        "#dd524d",
        0,
        0,
        36
      ],
      "borderWidth": [
        "1rpx",
        0,
        0,
        36
      ],
      "borderStyle": [
        "solid",
        0,
        0,
        36
      ],
      "borderColor": [
        "#dd524d",
        0,
        0,
        36
      ]
    }
  },
  ".error-uni-tag--inverted": {
    "": {
      "color": [
        "#dd524d",
        0,
        0,
        37
      ],
      "backgroundColor": [
        "#ffffff",
        0,
        0,
        37
      ],
      "borderWidth": [
        "1rpx",
        0,
        0,
        37
      ],
      "borderStyle": [
        "solid",
        0,
        0,
        37
      ],
      "borderColor": [
        "#dd524d",
        0,
        0,
        37
      ]
    }
  },
  ".royal-uni-tag--inverted": {
    "": {
      "color": [
        "#4335d6",
        0,
        0,
        39
      ],
      "backgroundColor": [
        "#ffffff",
        0,
        0,
        39
      ],
      "borderWidth": [
        "1rpx",
        0,
        0,
        39
      ],
      "borderStyle": [
        "solid",
        0,
        0,
        39
      ],
      "borderColor": [
        "#4335d6",
        0,
        0,
        39
      ]
    }
  },
  ".uni-tag--inverted": {
    "": {
      "color": [
        "#333333",
        0,
        0,
        40
      ],
      "backgroundColor": [
        "#ffffff",
        0,
        0,
        40
      ],
      "borderWidth": [
        "1rpx",
        0,
        0,
        40
      ],
      "borderStyle": [
        "solid",
        0,
        0,
        40
      ],
      "borderColor": [
        "#f8f8f8",
        0,
        0,
        40
      ]
    }
  },
  "@VERSION": 2
}

/***/ }),

/***/ 341:
/*!********************************************************************************************************************!*\
  !*** /Users/tongjie/Desktop/QNRTC-Uniapp/demo/pages/group-to-group/index.nvue?vue&type=script&lang=js&mpType=page ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib??ref--5-0!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--5-1!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./index.nvue?vue&type=script&lang=js&mpType=page */ 342);\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXVqQixDQUFnQixpa0JBQUcsRUFBQyIsImZpbGUiOiIzNDEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNS0wIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS01LTEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgubnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNS0wIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS01LTEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgubnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///341\n");

/***/ }),

/***/ 342:
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--5-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--5-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!/Users/tongjie/Desktop/QNRTC-Uniapp/demo/pages/group-to-group/index.nvue?vue&type=script&lang=js&mpType=page ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 16);\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\nvar _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ 55));\nvar _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ 62));\nvar _toConsumableArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ 58));\nvar _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ 63));\nvar _RTCIndexNative = __webpack_require__(/*! @/js_sdk/QNRTC-UniPlugin-JS/QNRTC-UniPlugin-JS/RTCIndex.native.js */ 221);\nvar _vuex = __webpack_require__(/*! vuex */ 78);\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== \"undefined\" && o[Symbol.iterator] || o[\"@@iterator\"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\nvar _default = {\n  computed: _objectSpread({}, (0, _vuex.mapState)(['captureHeight', 'captureWidth', 'encodeWidth', 'encodeHeight', 'platform', 'multiStreamEnable', 'token', 'policy', 'logLevel', 'stereo', 'bwePolicy', 'allowAudioMixWithOthers', 'hWCodecEnabled', 'maintainResolution', 'fieldTrials', 'encoderQualityMode', 'isAEC3Enabled', 'multiStreamEnable', 'audioScene', 'defaultAudioRouteToSpeakerphone', 'reconnectionTimeout', 'clientRole', 'clientMode'])),\n  data: function data() {\n    return {\n      remoteTracks: [],\n      publishedTracks: [],\n      localVideoTrackStats: {},\n      localAudioTrackStats: {},\n      localTracks: [],\n      client: null,\n      connectionState: '',\n      message: '',\n      subscribedTracks: [],\n      remoteUsers: [],\n      remoteVideoTrackStats: [],\n      remoteAudioTrackStats: []\n    };\n  },\n  onBackPress: function onBackPress() {\n    this.client.leave();\n    _RTCIndexNative.QNRTC.deinit();\n    __f__(\"log\", '执行onUnload', \" at pages/group-to-group/index.nvue:367\");\n  },\n  onUnload: function onUnload() {\n    this.client.leave();\n    _RTCIndexNative.QNRTC.deinit();\n  },\n  onLoad: function onLoad() {\n    var _this = this;\n    this.handleJoinRoom();\n    setInterval(function () {\n      if (_this.client) {\n        _this.connectionState = _this.client.getConnectionState();\n        _this.remoteUsers = _this.client.getRemoteUsers();\n        _this.subscribedTracks = [];\n        var _iterator = _createForOfIteratorHelper(_this.remoteUsers),\n          _step;\n        try {\n          for (_iterator.s(); !(_step = _iterator.n()).done;) {\n            var _this$subscribedTrack;\n            var i = _step.value;\n            (_this$subscribedTrack = _this.subscribedTracks).push.apply(_this$subscribedTrack, (0, _toConsumableArray2.default)(_this.client.getSubscribedTracks(i.userID)));\n            var networkQuality = _this.client.getUserNetworkQuality(i.userID);\n            _this.$set(i, 'networkQuality', networkQuality);\n          }\n        } catch (err) {\n          _iterator.e(err);\n        } finally {\n          _iterator.f();\n        }\n        _this.remoteVideoTrackStats = _this.client.getRemoteVideoTrackStats();\n        var _iterator2 = _createForOfIteratorHelper(_this.remoteTracks),\n          _step2;\n        try {\n          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {\n            var _i = _step2.value;\n            for (var key in _this.remoteVideoTrackStats) {\n              if (_i.trackID === key) {\n                _i.stats = _this.remoteVideoTrackStats[key];\n              }\n            }\n          }\n        } catch (err) {\n          _iterator2.e(err);\n        } finally {\n          _iterator2.f();\n        }\n        _this.remoteAudioTrackStats = _this.client.getRemoteAudioTrackStats();\n        var _iterator3 = _createForOfIteratorHelper(_this.remoteTracks),\n          _step3;\n        try {\n          for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {\n            var _i2 = _step3.value;\n            for (var _key in _this.remoteAudioTrackStats) {\n              if (_i2.trackID === _key) {\n                _i2.stats = _this.remoteAudioTrackStats[_key];\n              }\n            }\n          }\n        } catch (err) {\n          _iterator3.e(err);\n        } finally {\n          _iterator3.f();\n        }\n        _this.publishedTracks = _this.client.getPublishedTracks();\n        _this.localAudioTrackStats = _this.client.getLocalAudioTrackStats();\n        _this.localVideoTrackStats = _this.client.getLocalVideoTrackStats();\n      }\n    }, 1000);\n  },\n  methods: {\n    saveBaseImgFile: function saveBaseImgFile(base64) {\n      var bitmap = new plus.nativeObj.Bitmap('base64');\n      bitmap.loadBase64Data(base64, function () {\n        var url = '_doc/' + new Date().getTime() + '.png';\n        __f__(\"log\", 'saveHeadImgFile', url, \" at pages/group-to-group/index.nvue:412\");\n        bitmap.save(url, {\n          overwrite: true // 是否覆盖\n          // quality: 'quality'  // 图片清晰度\n        }, function (i) {\n          uni.saveImageToPhotosAlbum({\n            filePath: url,\n            success: function success() {\n              uni.showToast({\n                title: '图片保存成功',\n                icon: 'none'\n              });\n              bitmap.clear();\n            }\n          });\n        }, function (e) {\n          uni.showToast({\n            title: '图片保存失败',\n            icon: 'none'\n          });\n          __f__(\"log\", e, \" at pages/group-to-group/index.nvue:436\");\n          bitmap.clear();\n        });\n      }, function (e) {\n        uni.showToast({\n          title: '图片保存失败',\n          icon: 'none'\n        });\n        bitmap.clear();\n      });\n    },\n    takeLocalVideoSnapshot: function takeLocalVideoSnapshot() {\n      var _this2 = this;\n      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {\n        var _yield$_this2$cameraV, base64, rotate;\n        return _regenerator.default.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                _context.next = 2;\n                return _this2.cameraVideoTrack.takeVideoSnapshot();\n              case 2:\n                _yield$_this2$cameraV = _context.sent;\n                base64 = _yield$_this2$cameraV.base64;\n                rotate = _yield$_this2$cameraV.rotate;\n                _this2.saveBaseImgFile(base64);\n              case 6:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee);\n      }))();\n    },\n    takeRemoteVideoSnapshot: function takeRemoteVideoSnapshot(item) {\n      var _this3 = this;\n      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2() {\n        var _yield$item$takeVideo, base64, rotate;\n        return _regenerator.default.wrap(function _callee2$(_context2) {\n          while (1) {\n            switch (_context2.prev = _context2.next) {\n              case 0:\n                _context2.next = 2;\n                return item.takeVideoSnapshot();\n              case 2:\n                _yield$item$takeVideo = _context2.sent;\n                base64 = _yield$item$takeVideo.base64;\n                rotate = _yield$item$takeVideo.rotate;\n                _this3.saveBaseImgFile(base64);\n              case 6:\n              case \"end\":\n                return _context2.stop();\n            }\n          }\n        }, _callee2);\n      }))();\n    },\n    handleSendMessage: function handleSendMessage() {\n      this.client.sendMessage(this.message, [], Math.random() + 'messageID');\n    },\n    handleJoinRoom: function handleJoinRoom() {\n      var _this4 = this;\n      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee3() {\n        var cameraVideoTrack, microphoneAudioTrack, screenVideoTrack;\n        return _regenerator.default.wrap(function _callee3$(_context3) {\n          while (1) {\n            switch (_context3.prev = _context3.next) {\n              case 0:\n                if (!(_this4.connectionState === 'CONNECTED')) {\n                  _context3.next = 3;\n                  break;\n                }\n                uni.showModal({\n                  content: '已经加入房间'\n                });\n                return _context3.abrupt(\"return\", false);\n              case 3:\n                _RTCIndexNative.QNRTC.configRTC({\n                  policy: _this4.policy,\n                  logLevel: _this4.logLevel,\n                  stereo: _this4.stereo === 1,\n                  bwePolicy: _this4.bwePolicy,\n                  allowAudioMixWithOthers: _this4.allowAudioMixWithOthers === 1,\n                  hWCodecEnabled: _this4.hWCodecEnabled === 1,\n                  maintainResolution: _this4.maintainResolution === 1,\n                  fieldTrials: _this4.fieldTrials,\n                  encoderQualityMode: _this4.encoderQualityMode === 1,\n                  isAEC3Enabled: _this4.isAEC3Enabled === 1,\n                  audioScene: _this4.audioScene,\n                  defaultAudioRouteToSpeakerphone: _this4.defaultAudioRouteToSpeakerphone,\n                  reconnectionTimeout: _this4.reconnectionTimeout\n                });\n                _this4.client = _RTCIndexNative.QNRTC.createClient({\n                  mode: _this4.clientMode,\n                  role: _this4.clientRole\n                });\n                _this4.client.setAutoSubscribe(true);\n                cameraVideoTrack = _RTCIndexNative.QNRTC.createCameraVideoTrack({\n                  multiStreamEnable: _this4.multiStreamEnable === 1,\n                  width: _this4.encodeWidth * 1,\n                  height: _this4.encodeHeight * 1,\n                  captureHeight: _this4.captureHeight * 1,\n                  captureWidth: _this4.captureWidth * 1\n                });\n                _this4.localTracks.push(cameraVideoTrack);\n                _this4.cameraVideoTrack = cameraVideoTrack;\n                microphoneAudioTrack = _RTCIndexNative.QNRTC.createMicrophoneAudioTrack();\n                _this4.localTracks.push(microphoneAudioTrack);\n                if (_RTCIndexNative.QNRTC.isScreenCaptureSupported()) {\n                  if (_this4.platform === 'android') {\n                    _RTCIndexNative.QNRTC.requestPermission(function (result) {\n                      if (result) {\n                        var screenVideoTrack = _RTCIndexNative.QNRTC.createScreenVideoTrack();\n                        _this4.localTracks.push(screenVideoTrack);\n                        _this4.client.join(_this4.token);\n                      } else {\n                        uni.showModal({\n                          content: '无法录屏'\n                        });\n                        _this4.client.join(_this4.token);\n                      }\n                    });\n                  } else {\n                    screenVideoTrack = _RTCIndexNative.QNRTC.createScreenVideoTrack();\n                    _this4.localTracks.push(screenVideoTrack);\n                    _this4.client.join(_this4.token);\n                  }\n                } else {\n                  _this4.client.join(_this4.token);\n                }\n                _this4.client.on('onConnectionStateChanged', function (_ref) {\n                  var state = _ref.state,\n                    info = _ref.info;\n                  if (state === 'CONNECTED') {\n                    _this4.client.publish(_this4.localTracks, function (onPublished, error) {\n                      if (onPublished) {\n                        uni.showModal({\n                          content: '发布成功'\n                        });\n                      } else {\n                        uni.showModal({\n                          content: error.message\n                        });\n                      }\n                    });\n                  } else if (state === 'DISCONNECTED') {\n                    if (info.reason === 'KICKED_OUT') {\n                      uni.showModal({\n                        content: '被踢出房间',\n                        success: function success(res) {\n                          uni.navigateBack();\n                        }\n                      });\n                    } else if (info.reason === 'ROOM_CLOSED') {\n                      uni.showModal({\n                        content: '房间被关闭',\n                        success: function success(res) {\n                          uni.navigateBack();\n                        }\n                      });\n                    } else if (info.reason === 'ROOM_FULL') {\n                      uni.showModal({\n                        content: '房间人数已满',\n                        success: function success(res) {\n                          uni.navigateBack();\n                        }\n                      });\n                    }\n                  } else if (state === 'RECONNECTING') {\n                    uni.showLoading({\n                      mask: true,\n                      title: '重连中'\n                    });\n                  } else if (state === 'RECONNECTED') {\n                    uni.hideLoading();\n                    uni.showModal({\n                      content: '重连成功'\n                    });\n                  }\n                });\n                _this4.client.on('onAudioSubscribed', function (params) {\n                  __f__(\"log\", '用户订阅成功', \" at pages/group-to-group/index.nvue:570\");\n                  var _iterator4 = _createForOfIteratorHelper(params.trackList),\n                    _step4;\n                  try {\n                    for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {\n                      var i = _step4.value;\n                      _this4.remoteTracks.push(i);\n                    }\n                  } catch (err) {\n                    _iterator4.e(err);\n                  } finally {\n                    _iterator4.f();\n                  }\n                });\n                _this4.client.on('onVideoSubscribed', function (params) {\n                  __f__(\"log\", '用户订阅成功', \" at pages/group-to-group/index.nvue:576\");\n                  var _iterator5 = _createForOfIteratorHelper(params.trackList),\n                    _step5;\n                  try {\n                    for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {\n                      var i = _step5.value;\n                      _this4.remoteTracks.push(i);\n                    }\n                  } catch (err) {\n                    _iterator5.e(err);\n                  } finally {\n                    _iterator5.f();\n                  }\n                });\n                _this4.client.on('onUserPublished', function (params) {\n                  __f__(\"log\", '用户发布', params, \" at pages/group-to-group/index.nvue:582\");\n                  _this4.client.subscribe(params.trackList);\n                });\n                _this4.client.on('onUserUnpublished', function (params) {\n                  __f__(\"log\", '用户取消发布', params, \" at pages/group-to-group/index.nvue:586\");\n                  var _iterator6 = _createForOfIteratorHelper(params.trackList),\n                    _step6;\n                  try {\n                    var _loop = function _loop() {\n                      var i = _step6.value;\n                      var index = _this4.remoteTracks.findIndex(function (item) {\n                        return item.trackID === i.trackID;\n                      });\n                      if (index >= 0) {\n                        _this4.remoteTracks.splice(index, 1);\n                      }\n                    };\n                    for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {\n                      _loop();\n                    }\n                  } catch (err) {\n                    _iterator6.e(err);\n                  } finally {\n                    _iterator6.f();\n                  }\n                });\n                _this4.client.on('onMessageReceived', function (params) {\n                  __f__(\"log\", '接收到消息', params, \" at pages/group-to-group/index.nvue:595\");\n                  uni.showModal({\n                    content: \"\".concat(params.userId, \"\\u8BF4\\uFF1A\").concat(params.content)\n                  });\n                });\n                _this4.client.on('onUserReconnecting', function (params) {\n                  __f__(\"log\", '用户重连中', params, \" at pages/group-to-group/index.nvue:601\");\n                });\n                _this4.client.on('onUserReconnected', function (params) {\n                  __f__(\"log\", '用户重连成功', params, \" at pages/group-to-group/index.nvue:604\");\n                });\n                _this4.client.on('onUserLeft', function (params) {\n                  __f__(\"log\", '用户离开房间', params, \" at pages/group-to-group/index.nvue:607\");\n                });\n              case 21:\n              case \"end\":\n                return _context3.stop();\n            }\n          }\n        }, _callee3);\n      }))();\n    }\n  }\n};\nexports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 93)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvZ3JvdXAtdG8tZ3JvdXAvaW5kZXgubnZ1ZSJdLCJuYW1lcyI6WyJjb21wdXRlZCIsImRhdGEiLCJyZW1vdGVUcmFja3MiLCJwdWJsaXNoZWRUcmFja3MiLCJsb2NhbFZpZGVvVHJhY2tTdGF0cyIsImxvY2FsQXVkaW9UcmFja1N0YXRzIiwibG9jYWxUcmFja3MiLCJjbGllbnQiLCJjb25uZWN0aW9uU3RhdGUiLCJtZXNzYWdlIiwic3Vic2NyaWJlZFRyYWNrcyIsInJlbW90ZVVzZXJzIiwicmVtb3RlVmlkZW9UcmFja1N0YXRzIiwicmVtb3RlQXVkaW9UcmFja1N0YXRzIiwib25CYWNrUHJlc3MiLCJRTlJUQyIsIm9uVW5sb2FkIiwib25Mb2FkIiwic2V0SW50ZXJ2YWwiLCJpIiwibWV0aG9kcyIsInNhdmVCYXNlSW1nRmlsZSIsImJpdG1hcCIsImJhc2U2NCIsInVybCIsIm92ZXJ3cml0ZSIsInVuaSIsImZpbGVQYXRoIiwic3VjY2VzcyIsInRpdGxlIiwiaWNvbiIsInRha2VMb2NhbFZpZGVvU25hcHNob3QiLCJyb3RhdGUiLCJ0YWtlUmVtb3RlVmlkZW9TbmFwc2hvdCIsIml0ZW0iLCJoYW5kbGVTZW5kTWVzc2FnZSIsImhhbmRsZUpvaW5Sb29tIiwiY29udGVudCIsInBvbGljeSIsImxvZ0xldmVsIiwic3RlcmVvIiwiYndlUG9saWN5IiwiYWxsb3dBdWRpb01peFdpdGhPdGhlcnMiLCJoV0NvZGVjRW5hYmxlZCIsIm1haW50YWluUmVzb2x1dGlvbiIsImZpZWxkVHJpYWxzIiwiZW5jb2RlclF1YWxpdHlNb2RlIiwiaXNBRUMzRW5hYmxlZCIsImF1ZGlvU2NlbmUiLCJkZWZhdWx0QXVkaW9Sb3V0ZVRvU3BlYWtlcnBob25lIiwicmVjb25uZWN0aW9uVGltZW91dCIsIm1vZGUiLCJyb2xlIiwiY2FtZXJhVmlkZW9UcmFjayIsIm11bHRpU3RyZWFtRW5hYmxlIiwid2lkdGgiLCJoZWlnaHQiLCJjYXB0dXJlSGVpZ2h0IiwiY2FwdHVyZVdpZHRoIiwibWljcm9waG9uZUF1ZGlvVHJhY2siLCJzY3JlZW5WaWRlb1RyYWNrIiwiaW5mbyIsIm1hc2siLCJwYXJhbXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBMFRBO0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFDQTtFQUNBQSw0QkFDQSxxQkFDQSxpQkFDQSxnQkFDQSxlQUNBLGdCQUNBLFlBQ0EscUJBQ0EsU0FDQSxVQUNBLFlBQ0EsVUFDQSxhQUNBLDJCQUNBLGtCQUNBLHNCQUNBLGVBQ0Esc0JBQ0EsaUJBQ0EscUJBQ0EsY0FDQSxtQ0FDQSx1QkFDQSxjQUNBLGFBQ0EsRUFDQTtFQUNBQztJQUNBO01BQ0FDO01BQ0FDO01BQ0FDO01BQ0FDO01BQ0FDO01BQ0FDO01BQ0FDO01BQ0FDO01BQ0FDO01BQ0FDO01BQ0FDO01BQ0FDO0lBQ0E7RUFDQTtFQUNBQztJQUNBO0lBQ0FDO0lBQ0E7RUFDQTtFQUNBQztJQUNBO0lBQ0FEO0VBQ0E7RUFDQUU7SUFBQTtJQUNBO0lBQ0FDO01BQ0E7UUFDQTtRQUNBO1FBQ0E7UUFBQSwyQ0FDQTtVQUFBO1FBQUE7VUFBQTtZQUFBO1lBQUE7WUFDQTtZQUNBO1lBQ0E7VUFDQTtRQUFBO1VBQUE7UUFBQTtVQUFBO1FBQUE7UUFDQTtRQUFBLDRDQUNBO1VBQUE7UUFBQTtVQUFBO1lBQUE7WUFDQTtjQUNBO2dCQUNBQztjQUNBO1lBQUE7VUFDQTtRQUFBO1VBQUE7UUFBQTtVQUFBO1FBQUE7UUFDQTtRQUFBLDRDQUNBO1VBQUE7UUFBQTtVQUFBO1lBQUE7WUFDQTtjQUNBO2dCQUNBQTtjQUNBO1lBQUE7VUFDQTtRQUFBO1VBQUE7UUFBQTtVQUFBO1FBQUE7UUFDQTtRQUNBO1FBQ0E7TUFDQTtJQUNBO0VBQ0E7RUFDQUM7SUFDQUM7TUFDQTtNQUNBQyxzQkFDQUMsUUFDQTtRQUNBO1FBQ0E7UUFDQUQsWUFDQUUsS0FDQTtVQUNBQztVQUNBO1FBQ0EsR0FDQTtVQUNBQztZQUNBQztZQUNBQztjQUNBRjtnQkFDQUc7Z0JBQ0FDO2NBQ0E7Y0FDQVI7WUFDQTtVQUNBO1FBQ0EsR0FDQTtVQUNBSTtZQUNBRztZQUNBQztVQUNBO1VBQ0E7VUFDQVI7UUFDQSxFQUNBO01BQ0EsR0FDQTtRQUNBSTtVQUNBRztVQUNBQztRQUNBO1FBQ0FSO01BQ0EsRUFDQTtJQUNBO0lBQ0FTO01BQUE7TUFBQTtRQUFBO1FBQUE7VUFBQTtZQUFBO2NBQUE7Z0JBQUE7Z0JBQUEsT0FDQTtjQUFBO2dCQUFBO2dCQUFBUjtnQkFBQVM7Z0JBQ0E7Y0FBQTtjQUFBO2dCQUFBO1lBQUE7VUFBQTtRQUFBO01BQUE7SUFDQTtJQUNBQztNQUFBO01BQUE7UUFBQTtRQUFBO1VBQUE7WUFBQTtjQUFBO2dCQUFBO2dCQUFBLE9BQ0FDO2NBQUE7Z0JBQUE7Z0JBQUFYO2dCQUFBUztnQkFDQTtjQUFBO2NBQUE7Z0JBQUE7WUFBQTtVQUFBO1FBQUE7TUFBQTtJQUNBO0lBQ0FHO01BQ0E7SUFDQTtJQUNBQztNQUFBO01BQUE7UUFBQTtRQUFBO1VBQUE7WUFBQTtjQUFBO2dCQUFBLE1BQ0E7a0JBQUE7a0JBQUE7Z0JBQUE7Z0JBQ0FWO2tCQUNBVztnQkFDQTtnQkFBQSxrQ0FDQTtjQUFBO2dCQUVBdEI7a0JBQ0F1QjtrQkFDQUM7a0JBQ0FDO2tCQUNBQztrQkFDQUM7a0JBQ0FDO2tCQUNBQztrQkFDQUM7a0JBQ0FDO2tCQUNBQztrQkFDQUM7a0JBQ0FDO2tCQUNBQztnQkFDQTtnQkFDQTtrQkFDQUM7a0JBQ0FDO2dCQUNBO2dCQUNBO2dCQUNBQztrQkFDQUM7a0JBQ0FDO2tCQUNBQztrQkFDQUM7a0JBQ0FDO2dCQUNBO2dCQUNBO2dCQUNBO2dCQUNBQztnQkFDQTtnQkFDQTtrQkFDQTtvQkFDQTVDO3NCQUNBO3dCQUNBO3dCQUNBO3dCQUNBO3NCQUNBO3dCQUNBVzswQkFDQVc7d0JBQ0E7d0JBQ0E7c0JBQ0E7b0JBQ0E7a0JBQ0E7b0JBQ0F1QjtvQkFDQTtvQkFDQTtrQkFDQTtnQkFDQTtrQkFDQTtnQkFDQTtnQkFDQTtrQkFBQTtvQkFBQUM7a0JBQ0E7b0JBQ0E7c0JBQ0E7d0JBQ0FuQzswQkFDQVc7d0JBQ0E7c0JBQ0E7d0JBQ0FYOzBCQUNBVzt3QkFDQTtzQkFDQTtvQkFDQTtrQkFDQTtvQkFDQTtzQkFDQVg7d0JBQ0FXO3dCQUNBVDswQkFDQUY7d0JBQ0E7c0JBQ0E7b0JBQ0E7c0JBQ0FBO3dCQUNBVzt3QkFDQVQ7MEJBQ0FGO3dCQUNBO3NCQUNBO29CQUNBO3NCQUNBQTt3QkFDQVc7d0JBQ0FUOzBCQUNBRjt3QkFDQTtzQkFDQTtvQkFDQTtrQkFDQTtvQkFDQUE7c0JBQ0FvQztzQkFDQWpDO29CQUNBO2tCQUNBO29CQUNBSDtvQkFDQUE7c0JBQ0FXO29CQUNBO2tCQUNBO2dCQUNBO2dCQUNBO2tCQUNBO2tCQUFBLDRDQUNBMEI7b0JBQUE7a0JBQUE7b0JBQUE7c0JBQUE7c0JBQ0E7b0JBQ0E7a0JBQUE7b0JBQUE7a0JBQUE7b0JBQUE7a0JBQUE7Z0JBQ0E7Z0JBQ0E7a0JBQ0E7a0JBQUEsNENBQ0FBO29CQUFBO2tCQUFBO29CQUFBO3NCQUFBO3NCQUNBO29CQUNBO2tCQUFBO29CQUFBO2tCQUFBO29CQUFBO2tCQUFBO2dCQUNBO2dCQUNBO2tCQUNBO2tCQUNBO2dCQUNBO2dCQUNBO2tCQUNBO2tCQUFBLDRDQUNBQTtvQkFBQTtrQkFBQTtvQkFBQTtzQkFBQTtzQkFDQTt3QkFBQTtzQkFBQTtzQkFDQTt3QkFDQTtzQkFDQTtvQkFBQTtvQkFKQTtzQkFBQTtvQkFLQTtrQkFBQTtvQkFBQTtrQkFBQTtvQkFBQTtrQkFBQTtnQkFDQTtnQkFDQTtrQkFDQTtrQkFDQXJDO29CQUNBVztrQkFDQTtnQkFDQTtnQkFDQTtrQkFDQTtnQkFDQTtnQkFDQTtrQkFDQTtnQkFDQTtnQkFDQTtrQkFDQTtnQkFDQTtjQUFBO2NBQUE7Z0JBQUE7WUFBQTtVQUFBO1FBQUE7TUFBQTtJQUNBO0VBQ0E7QUFDQTtBQUFBLDJCIiwiZmlsZSI6IjM0Mi5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cclxuICA8dmlldz5cclxuICAgIDx2aWV3IGNsYXNzPVwid3JhcCBmbGV4XCI+XHJcbiAgICAgIDx2aWV3IGNsYXNzPVwiZmxleC1yb3cgbWFyZ2luLWJvdHRvbS1zbVwiPlxyXG4gICAgICAgIDx0ZXh0IGNsYXNzPVwidGl0bGVcIj7miL/pl7TnirbmgIHvvJo8L3RleHQ+XHJcbiAgICAgICAgPHVuaS10YWcgdi1pZj1cImNvbm5lY3Rpb25TdGF0ZSA9PT0gJ0NPTk5FQ1RJTkcnXCIgdGV4dD1cIui/nuaOpeS4rVwiIHR5cGU9XCJlcnJvclwiPjwvdW5pLXRhZz5cclxuICAgICAgICA8dW5pLXRhZ1xyXG4gICAgICAgICAgdi1lbHNlLWlmPVwiY29ubmVjdGlvblN0YXRlID09PSAnUkVDT05ORUNUSU5HJ1wiXHJcbiAgICAgICAgICB0ZXh0PVwi6YeN6L+e5LitXCJcclxuICAgICAgICAgIHR5cGU9XCJlcnJvclwiXHJcbiAgICAgICAgPjwvdW5pLXRhZz5cclxuICAgICAgICA8dW5pLXRhZ1xyXG4gICAgICAgICAgdi1lbHNlLWlmPVwiY29ubmVjdGlvblN0YXRlID09PSAnQ09OTkVDVEVEJyB8fCBjb25uZWN0aW9uU3RhdGUgPT09ICdSRUNPTk5FQ1RFRCdcIlxyXG4gICAgICAgICAgdGV4dD1cIui/nuaOpeaIkOWKn1wiXHJcbiAgICAgICAgICB0eXBlPVwic3VjY2Vzc1wiXHJcbiAgICAgICAgPjwvdW5pLXRhZz5cclxuICAgICAgICA8dW5pLXRhZyB2LWVsc2UgdGV4dD1cIuacqui/nuaOpVwiIHR5cGU9XCJ3YXJuaW5nXCI+PC91bmktdGFnPlxyXG4gICAgICA8L3ZpZXc+XHJcbiAgICAgIDx1bmktZWFzeWlucHV0XHJcbiAgICAgICAgY2xhc3M9XCJtYXJnaW4tYm90dG9tLXNtXCJcclxuICAgICAgICB2LW1vZGVsPVwibWVzc2FnZVwiXHJcbiAgICAgICAgcGxhY2Vob2xkZXI9XCLor7fovpPlhaXoh6rlrprkuYnmtojmga9cIlxyXG4gICAgICA+PC91bmktZWFzeWlucHV0PlxyXG4gICAgICA8YnV0dG9uIHR5cGU9XCJwcmltYXJ5XCIgc3R5bGU9XCJtYXJnaW4tYm90dG9tOiAzMHVweFwiIEBjbGljaz1cImhhbmRsZVNlbmRNZXNzYWdlXCI+XHJcbiAgICAgICAg5Y+R6YCB6Ieq5a6a5LmJ5raI5oGvXHJcbiAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8dGV4dCBjbGFzcz1cInRpdGxlXCI+6L+c56uv55So5oi35YiX6KGo77yaPC90ZXh0PlxyXG4gICAgICA8dmlldyBjbGFzcz1cInRhYmxlXCI+XHJcbiAgICAgICAgPHZpZXcgY2xhc3M9XCJ0aFwiPlxyXG4gICAgICAgICAgPHRleHQgY2xhc3M9XCJ0clwiPueUqOaIt0lEPC90ZXh0PlxyXG4gICAgICAgICAgPHRleHQgY2xhc3M9XCJ0clwiPuS4iuihjDwvdGV4dD5cclxuICAgICAgICAgIDx0ZXh0IGNsYXNzPVwidHJcIj7kuIvooYw8L3RleHQ+XHJcbiAgICAgICAgPC92aWV3PlxyXG4gICAgICAgIDx2aWV3IGNsYXNzPVwidGRcIiB2LWZvcj1cIihpdGVtLCBpbmRleCkgaW4gcmVtb3RlVXNlcnNcIiA6a2V5PVwiaXRlbS51c2VySURcIj5cclxuICAgICAgICAgIDx0ZXh0IGNsYXNzPVwidHJcIj57eyBpdGVtLnVzZXJJRCB9fTwvdGV4dD5cclxuICAgICAgICAgIDx0ZXh0IGNsYXNzPVwidHJcIj57eyBpdGVtLm5ldHdvcmtRdWFsaXR5LnVwbGlua05ldHdvcmtHcmFkZSB9fTwvdGV4dD5cclxuICAgICAgICAgIDx0ZXh0IGNsYXNzPVwidHJcIj57eyBpdGVtLm5ldHdvcmtRdWFsaXR5LmRvd25saW5rTmV0d29ya0dyYWRlIH19PC90ZXh0PlxyXG4gICAgICAgIDwvdmlldz5cclxuICAgICAgPC92aWV3PlxyXG4gICAgICA8dGV4dCBjbGFzcz1cInRpdGxlXCI+6K6i6ZiF55qEdHJhY2vliJfooajvvJo8L3RleHQ+XHJcbiAgICAgIDx2aWV3IGNsYXNzPVwidGFibGVcIj5cclxuICAgICAgICA8dmlldyBjbGFzcz1cInRoXCI+XHJcbiAgICAgICAgICA8dGV4dCBjbGFzcz1cInRyXCI+55So5oi3SUQ8L3RleHQ+XHJcbiAgICAgICAgICA8dGV4dCBjbGFzcz1cInRyXCI+6L2o6YGTSUQ8L3RleHQ+XHJcbiAgICAgICAgICA8dGV4dCBjbGFzcz1cInRyXCI+57G75Z6LPC90ZXh0PlxyXG4gICAgICAgIDwvdmlldz5cclxuICAgICAgICA8dmlldyBjbGFzcz1cInRkXCIgdi1mb3I9XCIoaXRlbSwgaW5kZXgpIGluIHN1YnNjcmliZWRUcmFja3NcIiA6a2V5PVwiaXRlbS50cmFja0lEXCI+XHJcbiAgICAgICAgICA8dGV4dCBjbGFzcz1cInRyXCI+e3sgaXRlbS51c2VySUQgfX08L3RleHQ+XHJcbiAgICAgICAgICA8dGV4dCBjbGFzcz1cInRyXCI+e3sgaXRlbS50cmFja0lEIH19PC90ZXh0PlxyXG4gICAgICAgICAgPHRleHQgY2xhc3M9XCJ0clwiPnt7IGl0ZW0ua2luZCA9PT0gJ2F1ZGlvJyA/ICfpn7PpopEnIDogJ+inhumikScgfX08L3RleHQ+XHJcbiAgICAgICAgPC92aWV3PlxyXG4gICAgICA8L3ZpZXc+XHJcbiAgICAgIDx0ZXh0IGNsYXNzPVwidGl0bGVcIj7lj5HluIPnmoR0cmFja+WIl+ihqO+8mjwvdGV4dD5cclxuICAgICAgPHZpZXcgY2xhc3M9XCJ0YWJsZVwiPlxyXG4gICAgICAgIDx2aWV3IGNsYXNzPVwidGhcIj5cclxuICAgICAgICAgIDx0ZXh0IGNsYXNzPVwidHJcIj7ovajpgZNJRDwvdGV4dD5cclxuICAgICAgICAgIDx0ZXh0IGNsYXNzPVwidHJcIj7nsbvlnos8L3RleHQ+XHJcbiAgICAgICAgPC92aWV3PlxyXG4gICAgICAgIDx2aWV3IGNsYXNzPVwidGRcIiB2LWZvcj1cIihpdGVtLCBpbmRleCkgaW4gcHVibGlzaGVkVHJhY2tzXCIgOmtleT1cIml0ZW0udHJhY2tJRFwiPlxyXG4gICAgICAgICAgPHRleHQgY2xhc3M9XCJ0clwiPnt7IGl0ZW0udHJhY2tJRCB9fTwvdGV4dD5cclxuICAgICAgICAgIDx0ZXh0IGNsYXNzPVwidHJcIj57eyBpdGVtLmtpbmQgPT09ICdhdWRpbycgPyAn6Z+z6aKRJyA6ICfop4bpopEnIH19PC90ZXh0PlxyXG4gICAgICAgIDwvdmlldz5cclxuICAgICAgPC92aWV3PlxyXG4gICAgPC92aWV3PlxyXG4gICAgPHRleHQgY2xhc3M9XCJ0aXRsZSBtYXJnaW4tbGVmdC1zbVwiIHN0eWxlPVwibWFyZ2luLWJvdHRvbTogMjB1cHhcIj7mnKzlnLB0cmFja++8mjwvdGV4dD5cclxuICAgIDx2aWV3IGNsYXNzPVwidHJhY2staXRlbS13cmFwXCIgdi1mb3I9XCIoaXRlbSwgaW5kZXgpIGluIGxvY2FsVHJhY2tzXCIgOmtleT1cImluZGV4XCI+XHJcbiAgICAgIDxRTlJUQy1VbmlQbHVnaW4tU3VyZmFjZVZpZXdcclxuICAgICAgICBjbGFzcz1cInRyYWNrLXZpZGVvXCJcclxuICAgICAgICB2LWlmPVwiaXRlbS5raW5kID09PSAndmlkZW8nXCJcclxuICAgICAgICA6bG9jYWw9XCIwXCJcclxuICAgICAgICA6aWRlbnRpZnlJRD1cIml0ZW0uaWRlbnRpZnlJRFwiXHJcbiAgICAgICAgOnRyYWNrSUQ9XCJpdGVtLnRyYWNrSURcIlxyXG4gICAgICA+PC9RTlJUQy1VbmlQbHVnaW4tU3VyZmFjZVZpZXc+XHJcbiAgICAgIDx2aWV3IGNsYXNzPVwidHJhY2staW5mby13cmFwXCI+XHJcbiAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgdi1pZj1cImluZGV4ID09PSAwXCJcclxuICAgICAgICAgIHN0eWxlPVwid2lkdGg6IDEwMHVweDsgbWFyZ2luLXRvcDogMjB1cHg7IG1hcmdpbi1ib3R0b206IDEwdXB4XCJcclxuICAgICAgICAgIHNpemU9XCJtaW5pXCJcclxuICAgICAgICAgIHR5cGU9XCJwcmltYXJ5XCJcclxuICAgICAgICAgIEBjbGljaz1cInRha2VMb2NhbFZpZGVvU25hcHNob3QoaXRlbSlcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIOaIquWbvlxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDx0ZXh0IGNsYXNzPVwidHJhY2staW5mby1pdGVtXCI+6L2o6YGTSUTvvJp7eyBpdGVtLnRyYWNrSUQgfX08L3RleHQ+XHJcbiAgICAgICAgPHRleHQgY2xhc3M9XCJ0cmFjay1pbmZvLWl0ZW1cIj7nlKjmiLdJRO+8muiHquW3sTwvdGV4dD5cclxuICAgICAgICA8dGV4dCBjbGFzcz1cInRyYWNrLWluZm8taXRlbVwiPuexu+Wei++8mnt7IGl0ZW0ua2luZCB9fTwvdGV4dD5cclxuICAgICAgICA8dmlldyB2LWlmPVwiaXRlbS50cmFja0lEXCI+XHJcbiAgICAgICAgICA8dGV4dFxyXG4gICAgICAgICAgICBjbGFzcz1cInRyYWNrLWluZm8taXRlbVwiXHJcbiAgICAgICAgICAgIHYtaWY9XCJcclxuICAgICAgICAgICAgICBsb2NhbFZpZGVvVHJhY2tTdGF0c1tpdGVtLnRyYWNrSURdICYmXHJcbiAgICAgICAgICAgICAgaXRlbS5raW5kID09PSAndmlkZW8nICYmXHJcbiAgICAgICAgICAgICAgbG9jYWxWaWRlb1RyYWNrU3RhdHNbaXRlbS50cmFja0lEXVswXVxyXG4gICAgICAgICAgICBcIlxyXG4gICAgICAgICAgICA+5LiK6KGM5bin546H77yae3sgbG9jYWxWaWRlb1RyYWNrU3RhdHNbaXRlbS50cmFja0lEXVswXS51cGxpbmtGcmFtZVJhdGUgfX08L3RleHRcclxuICAgICAgICAgID5cclxuICAgICAgICAgIDx0ZXh0XHJcbiAgICAgICAgICAgIGNsYXNzPVwidHJhY2staW5mby1pdGVtXCJcclxuICAgICAgICAgICAgdi1pZj1cIlxyXG4gICAgICAgICAgICAgIGxvY2FsVmlkZW9UcmFja1N0YXRzW2l0ZW0udHJhY2tJRF0gJiZcclxuICAgICAgICAgICAgICBpdGVtLmtpbmQgPT09ICd2aWRlbycgJiZcclxuICAgICAgICAgICAgICBsb2NhbFZpZGVvVHJhY2tTdGF0c1tpdGVtLnRyYWNrSURdWzBdXHJcbiAgICAgICAgICAgIFwiXHJcbiAgICAgICAgICAgID7kuIrooYzkuKLljIXnjofvvJp7eyBsb2NhbFZpZGVvVHJhY2tTdGF0c1tpdGVtLnRyYWNrSURdWzBdLnVwbGlua0xvc3RSYXRlLnRvRml4ZWQoNSkgfX08L3RleHRcclxuICAgICAgICAgID5cclxuICAgICAgICAgIDx0ZXh0XHJcbiAgICAgICAgICAgIGNsYXNzPVwidHJhY2staW5mby1pdGVtXCJcclxuICAgICAgICAgICAgdi1pZj1cIlxyXG4gICAgICAgICAgICAgIGxvY2FsVmlkZW9UcmFja1N0YXRzW2l0ZW0udHJhY2tJRF0gJiZcclxuICAgICAgICAgICAgICBpdGVtLmtpbmQgPT09ICd2aWRlbycgJiZcclxuICAgICAgICAgICAgICBsb2NhbFZpZGVvVHJhY2tTdGF0c1tpdGVtLnRyYWNrSURdWzBdXHJcbiAgICAgICAgICAgIFwiXHJcbiAgICAgICAgICAgID7kuIrooYznoIHnjofvvJp7eyBsb2NhbFZpZGVvVHJhY2tTdGF0c1tpdGVtLnRyYWNrSURdWzBdLnVwbGlua0JpdHJhdGUudG9GaXhlZCg1KSB9fTwvdGV4dFxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgPHRleHRcclxuICAgICAgICAgICAgY2xhc3M9XCJ0cmFjay1pbmZvLWl0ZW1cIlxyXG4gICAgICAgICAgICB2LWlmPVwiXHJcbiAgICAgICAgICAgICAgbG9jYWxWaWRlb1RyYWNrU3RhdHNbaXRlbS50cmFja0lEXSAmJlxyXG4gICAgICAgICAgICAgIGl0ZW0ua2luZCA9PT0gJ3ZpZGVvJyAmJlxyXG4gICAgICAgICAgICAgIGxvY2FsVmlkZW9UcmFja1N0YXRzW2l0ZW0udHJhY2tJRF1bMF1cclxuICAgICAgICAgICAgXCJcclxuICAgICAgICAgICAgPui0qOmHj++8mnt7IGxvY2FsVmlkZW9UcmFja1N0YXRzW2l0ZW0udHJhY2tJRF1bMF0ucHJvZmlsZSB9fTwvdGV4dFxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICA8dGV4dFxyXG4gICAgICAgICAgICBjbGFzcz1cInRyYWNrLWluZm8taXRlbVwiXHJcbiAgICAgICAgICAgIHYtaWY9XCJcclxuICAgICAgICAgICAgICBsb2NhbFZpZGVvVHJhY2tTdGF0c1tpdGVtLnRyYWNrSURdICYmXHJcbiAgICAgICAgICAgICAgaXRlbS5raW5kID09PSAndmlkZW8nICYmXHJcbiAgICAgICAgICAgICAgbG9jYWxWaWRlb1RyYWNrU3RhdHNbaXRlbS50cmFja0lEXVswXVxyXG4gICAgICAgICAgICBcIlxyXG4gICAgICAgICAgICA+5LiK6KGMUlRU77yae3sgbG9jYWxWaWRlb1RyYWNrU3RhdHNbaXRlbS50cmFja0lEXVswXS51cGxpbmtSVFQudG9GaXhlZCg1KSB9fTwvdGV4dFxyXG4gICAgICAgICAgPlxyXG5cdFx0ICA8dGV4dFxyXG4gICAgICAgICAgICBjbGFzcz1cInRyYWNrLWluZm8taXRlbVwiXHJcbiAgICAgICAgICAgIHYtaWY9XCJcclxuICAgICAgICAgICAgICBsb2NhbFZpZGVvVHJhY2tTdGF0c1tpdGVtLnRyYWNrSURdICYmXHJcbiAgICAgICAgICAgICAgaXRlbS5raW5kID09PSAndmlkZW8nICYmXHJcbiAgICAgICAgICAgICAgbG9jYWxWaWRlb1RyYWNrU3RhdHNbaXRlbS50cmFja0lEXVswXVxyXG4gICAgICAgICAgICBcIlxyXG4gICAgICAgICAgICA+5LiK6KGM6KeG6aKR5bin5a695bqm77yae3sgbG9jYWxWaWRlb1RyYWNrU3RhdHNbaXRlbS50cmFja0lEXVswXS51cGxpbmtGcmFtZVdpZHRoIH19PC90ZXh0XHJcbiAgICAgICAgICA+XHJcblx0XHQgIDx0ZXh0XHJcbiAgICAgICAgICAgIGNsYXNzPVwidHJhY2staW5mby1pdGVtXCJcclxuICAgICAgICAgICAgdi1pZj1cIlxyXG4gICAgICAgICAgICAgIGxvY2FsVmlkZW9UcmFja1N0YXRzW2l0ZW0udHJhY2tJRF0gJiZcclxuICAgICAgICAgICAgICBpdGVtLmtpbmQgPT09ICd2aWRlbycgJiZcclxuICAgICAgICAgICAgICBsb2NhbFZpZGVvVHJhY2tTdGF0c1tpdGVtLnRyYWNrSURdWzBdXHJcbiAgICAgICAgICAgIFwiXHJcbiAgICAgICAgICAgID7kuIrooYzop4bpopHluKfpq5jluqbvvJp7eyBsb2NhbFZpZGVvVHJhY2tTdGF0c1tpdGVtLnRyYWNrSURdWzBdLnVwbGlua0ZyYW1lSGVpZ2h0IH19PC90ZXh0XHJcbiAgICAgICAgICA+XHJcblx0XHQgIDx0ZXh0XHJcbiAgICAgICAgICAgIGNsYXNzPVwidHJhY2staW5mby1pdGVtXCJcclxuICAgICAgICAgICAgdi1pZj1cIlxyXG4gICAgICAgICAgICAgIGxvY2FsVmlkZW9UcmFja1N0YXRzW2l0ZW0udHJhY2tJRF0gJiZcclxuICAgICAgICAgICAgICBpdGVtLmtpbmQgPT09ICd2aWRlbycgJiZcclxuICAgICAgICAgICAgICBsb2NhbFZpZGVvVHJhY2tTdGF0c1tpdGVtLnRyYWNrSURdWzBdXHJcbiAgICAgICAgICAgIFwiXHJcbiAgICAgICAgICAgID7ph4fpm4bop4bpopHluKfnjofvvJp7eyBsb2NhbFZpZGVvVHJhY2tTdGF0c1tpdGVtLnRyYWNrSURdWzBdLmNhcHR1cmVGcmFtZVJhdGUgfX08L3RleHRcclxuICAgICAgICAgID5cclxuXHRcdCAgPHRleHRcclxuICAgICAgICAgICAgY2xhc3M9XCJ0cmFjay1pbmZvLWl0ZW1cIlxyXG4gICAgICAgICAgICB2LWlmPVwiXHJcbiAgICAgICAgICAgICAgbG9jYWxWaWRlb1RyYWNrU3RhdHNbaXRlbS50cmFja0lEXSAmJlxyXG4gICAgICAgICAgICAgIGl0ZW0ua2luZCA9PT0gJ3ZpZGVvJyAmJlxyXG4gICAgICAgICAgICAgIGxvY2FsVmlkZW9UcmFja1N0YXRzW2l0ZW0udHJhY2tJRF1bMF1cclxuICAgICAgICAgICAgXCJcclxuICAgICAgICAgICAgPumHh+mbhuinhumikeW4p+WuveW6pu+8mnt7IGxvY2FsVmlkZW9UcmFja1N0YXRzW2l0ZW0udHJhY2tJRF1bMF0uY2FwdHVyZUZyYW1lV2lkdGggfX08L3RleHRcclxuICAgICAgICAgID5cclxuXHRcdCAgPHRleHRcclxuICAgICAgICAgICAgY2xhc3M9XCJ0cmFjay1pbmZvLWl0ZW1cIlxyXG4gICAgICAgICAgICB2LWlmPVwiXHJcbiAgICAgICAgICAgICAgbG9jYWxWaWRlb1RyYWNrU3RhdHNbaXRlbS50cmFja0lEXSAmJlxyXG4gICAgICAgICAgICAgIGl0ZW0ua2luZCA9PT0gJ3ZpZGVvJyAmJlxyXG4gICAgICAgICAgICAgIGxvY2FsVmlkZW9UcmFja1N0YXRzW2l0ZW0udHJhY2tJRF1bMF1cclxuICAgICAgICAgICAgXCJcclxuICAgICAgICAgICAgPumHh+mbhuinhumikeW4p+mrmOW6pu+8mnt7IGxvY2FsVmlkZW9UcmFja1N0YXRzW2l0ZW0udHJhY2tJRF1bMF0uY2FwdHVyZUZyYW1lSGVpZ2h0IH19PC90ZXh0XHJcbiAgICAgICAgICA+XHJcblx0XHQgIDx0ZXh0XHJcbiAgICAgICAgICAgIGNsYXNzPVwidHJhY2staW5mby1pdGVtXCJcclxuICAgICAgICAgICAgdi1pZj1cIlxyXG4gICAgICAgICAgICAgIGxvY2FsVmlkZW9UcmFja1N0YXRzW2l0ZW0udHJhY2tJRF0gJiZcclxuICAgICAgICAgICAgICBpdGVtLmtpbmQgPT09ICd2aWRlbycgJiZcclxuICAgICAgICAgICAgICBsb2NhbFZpZGVvVHJhY2tTdGF0c1tpdGVtLnRyYWNrSURdWzBdXHJcbiAgICAgICAgICAgIFwiXHJcbiAgICAgICAgICAgID7mnJ/mnJvop4bpopHluKfnjofvvJp7eyBsb2NhbFZpZGVvVHJhY2tTdGF0c1tpdGVtLnRyYWNrSURdWzBdLnRhcmdldEZyYW1lUmF0ZSB9fTwvdGV4dFxyXG4gICAgICAgICAgPlxyXG5cdFx0ICA8dGV4dFxyXG4gICAgICAgICAgICBjbGFzcz1cInRyYWNrLWluZm8taXRlbVwiXHJcbiAgICAgICAgICAgIHYtaWY9XCJcclxuICAgICAgICAgICAgICBsb2NhbFZpZGVvVHJhY2tTdGF0c1tpdGVtLnRyYWNrSURdICYmXHJcbiAgICAgICAgICAgICAgaXRlbS5raW5kID09PSAndmlkZW8nICYmXHJcbiAgICAgICAgICAgICAgbG9jYWxWaWRlb1RyYWNrU3RhdHNbaXRlbS50cmFja0lEXVswXVxyXG4gICAgICAgICAgICBcIlxyXG4gICAgICAgICAgICA+5pyf5pyb6KeG6aKR5bin5a695bqm77yae3sgbG9jYWxWaWRlb1RyYWNrU3RhdHNbaXRlbS50cmFja0lEXVswXS50YXJnZXRGcmFtZVdpZHRoIH19PC90ZXh0XHJcbiAgICAgICAgICA+XHJcblx0XHQgIDx0ZXh0XHJcbiAgICAgICAgICAgIGNsYXNzPVwidHJhY2staW5mby1pdGVtXCJcclxuICAgICAgICAgICAgdi1pZj1cIlxyXG4gICAgICAgICAgICAgIGxvY2FsVmlkZW9UcmFja1N0YXRzW2l0ZW0udHJhY2tJRF0gJiZcclxuICAgICAgICAgICAgICBpdGVtLmtpbmQgPT09ICd2aWRlbycgJiZcclxuICAgICAgICAgICAgICBsb2NhbFZpZGVvVHJhY2tTdGF0c1tpdGVtLnRyYWNrSURdWzBdXHJcbiAgICAgICAgICAgIFwiXHJcbiAgICAgICAgICAgID7mnJ/mnJvop4bpopHluKfpq5jluqbvvJp7eyBsb2NhbFZpZGVvVHJhY2tTdGF0c1tpdGVtLnRyYWNrSURdWzBdLnRhcmdldEZyYW1lSGVpZ2h0IH19PC90ZXh0XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICA8dGV4dFxyXG4gICAgICAgICAgICBjbGFzcz1cInRyYWNrLWluZm8taXRlbVwiXHJcbiAgICAgICAgICAgIHYtaWY9XCJsb2NhbEF1ZGlvVHJhY2tTdGF0c1tpdGVtLnRyYWNrSURdICYmIGl0ZW0ua2luZCA9PT0gJ2F1ZGlvJ1wiXHJcbiAgICAgICAgICAgID7kuIrooYxSVFTvvJp7eyBsb2NhbEF1ZGlvVHJhY2tTdGF0c1tpdGVtLnRyYWNrSURdLnVwbGlua1JUVCB9fTwvdGV4dFxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgPHRleHRcclxuICAgICAgICAgICAgY2xhc3M9XCJ0cmFjay1pbmZvLWl0ZW1cIlxyXG4gICAgICAgICAgICB2LWlmPVwibG9jYWxBdWRpb1RyYWNrU3RhdHNbaXRlbS50cmFja0lEXSAmJiBpdGVtLmtpbmQgPT09ICdhdWRpbydcIlxyXG4gICAgICAgICAgICA+5LiK6KGM5Lii5YyF546H77yae3sgbG9jYWxBdWRpb1RyYWNrU3RhdHNbaXRlbS50cmFja0lEXS51cGxpbmtMb3N0UmF0ZS50b0ZpeGVkKDUpIH19PC90ZXh0XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICA8dGV4dFxyXG4gICAgICAgICAgICBjbGFzcz1cInRyYWNrLWluZm8taXRlbVwiXHJcbiAgICAgICAgICAgIHYtaWY9XCJsb2NhbEF1ZGlvVHJhY2tTdGF0c1tpdGVtLnRyYWNrSURdICYmIGl0ZW0ua2luZCA9PT0gJ2F1ZGlvJ1wiXHJcbiAgICAgICAgICAgID7kuIvooYznoIHnjofvvJp7eyBsb2NhbEF1ZGlvVHJhY2tTdGF0c1tpdGVtLnRyYWNrSURdLnVwbGlua0JpdHJhdGUudG9GaXhlZCg1KSB9fTwvdGV4dFxyXG4gICAgICAgICAgPlxyXG4gICAgICAgIDwvdmlldz5cclxuICAgICAgPC92aWV3PlxyXG4gICAgPC92aWV3PlxyXG4gICAgPHRleHQgY2xhc3M9XCJ0aXRsZSBtYXJnaW4tbGVmdC1zbSBtYXJnaW4tdG9wLXNtIG1hcmdpbi1ib3R0b20tc21cIj7ov5znq690cmFja++8mjwvdGV4dD5cclxuICAgIDx2aWV3IGNsYXNzPVwidHJhY2staXRlbS13cmFwXCIgdi1mb3I9XCIoaXRlbSwgaW5kZXgpIGluIHJlbW90ZVRyYWNrc1wiIDprZXk9XCJ0cmFja0lEXCI+XHJcbiAgICAgIDxRTlJUQy1VbmlQbHVnaW4tU3VyZmFjZVZpZXdcclxuICAgICAgICBjbGFzcz1cInRyYWNrLXZpZGVvXCJcclxuICAgICAgICB2LWlmPVwiaXRlbS5raW5kID09PSAndmlkZW8nXCJcclxuICAgICAgICA6bG9jYWw9XCIxXCJcclxuICAgICAgICA6aWRlbnRpZnlJRD1cIml0ZW0uaWRlbnRpZnlJRFwiXHJcbiAgICAgICAgOnVzZXJJRD1cIml0ZW0udXNlcklEXCJcclxuICAgICAgICA6dHJhY2tJRD1cIml0ZW0udHJhY2tJRFwiXHJcbiAgICAgID5cclxuICAgICAgPC9RTlJUQy1VbmlQbHVnaW4tU3VyZmFjZVZpZXc+XHJcbiAgICAgIDx2aWV3IGNsYXNzPVwidHJhY2staW5mby13cmFwXCI+XHJcbiAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgdi1pZj1cIml0ZW0ua2luZCA9PT0gJ3ZpZGVvJ1wiXHJcbiAgICAgICAgICBzdHlsZT1cIndpZHRoOiAxMDB1cHg7IG1hcmdpbi10b3A6IDIwdXB4OyBtYXJnaW4tYm90dG9tOiAxMHVweFwiXHJcbiAgICAgICAgICBzaXplPVwibWluaVwiXHJcbiAgICAgICAgICB0eXBlPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICBAY2xpY2s9XCJ0YWtlUmVtb3RlVmlkZW9TbmFwc2hvdChpdGVtKVwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAg5oiq5Zu+XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPHRleHQgY2xhc3M9XCJ0cmFjay1pbmZvLWl0ZW1cIj7ovajpgZNJRO+8mnt7IGl0ZW0udHJhY2tJRCB9fTwvdGV4dD5cclxuICAgICAgICA8dGV4dCBjbGFzcz1cInRyYWNrLWluZm8taXRlbVwiPueUqOaIt0lE77yae3sgaXRlbS51c2VySUQgfX08L3RleHQ+XHJcbiAgICAgICAgPHRleHQgY2xhc3M9XCJ0cmFjay1pbmZvLWl0ZW1cIj7nsbvlnovvvJp7eyBpdGVtLmtpbmQgfX08L3RleHQ+XHJcbiAgICAgICAgPHZpZXcgdi1pZj1cIml0ZW0udHJhY2tJRFwiPlxyXG4gICAgICAgICAgPHRleHRcclxuICAgICAgICAgICAgY2xhc3M9XCJ0cmFjay1pbmZvLWl0ZW1cIlxyXG4gICAgICAgICAgICB2LWlmPVwicmVtb3RlQXVkaW9UcmFja1N0YXRzW2l0ZW0udHJhY2tJRF0gJiYgaXRlbS5raW5kID09PSAnYXVkaW8nXCJcclxuICAgICAgICAgICAgPuS4i+ihjOS4ouWMheeOh++8mnt7IHJlbW90ZUF1ZGlvVHJhY2tTdGF0c1tpdGVtLnRyYWNrSURdLmRvd25saW5rTG9zdFJhdGUudG9GaXhlZCg1KSB9fTwvdGV4dFxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgPHRleHRcclxuICAgICAgICAgICAgY2xhc3M9XCJ0cmFjay1pbmZvLWl0ZW1cIlxyXG4gICAgICAgICAgICB2LWlmPVwicmVtb3RlQXVkaW9UcmFja1N0YXRzW2l0ZW0udHJhY2tJRF0gJiYgaXRlbS5raW5kID09PSAnYXVkaW8nXCJcclxuICAgICAgICAgICAgPuS4i+ihjOeggeeOh++8mnt7IHJlbW90ZUF1ZGlvVHJhY2tTdGF0c1tpdGVtLnRyYWNrSURdLmRvd25saW5rQml0cmF0ZS50b0ZpeGVkKDUpIH19PC90ZXh0XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICA8dGV4dFxyXG4gICAgICAgICAgICBjbGFzcz1cInRyYWNrLWluZm8taXRlbVwiXHJcbiAgICAgICAgICAgIHYtaWY9XCJyZW1vdGVBdWRpb1RyYWNrU3RhdHNbaXRlbS50cmFja0lEXSAmJiBpdGVtLmtpbmQgPT09ICdhdWRpbydcIlxyXG4gICAgICAgICAgICA+5LiK6KGMUlRU77yae3sgcmVtb3RlQXVkaW9UcmFja1N0YXRzW2l0ZW0udHJhY2tJRF0udXBsaW5rUlRUIH19PC90ZXh0XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICA8dGV4dFxyXG4gICAgICAgICAgICBjbGFzcz1cInRyYWNrLWluZm8taXRlbVwiXHJcbiAgICAgICAgICAgIHYtaWY9XCJyZW1vdGVBdWRpb1RyYWNrU3RhdHNbaXRlbS50cmFja0lEXSAmJiBpdGVtLmtpbmQgPT09ICdhdWRpbydcIlxyXG4gICAgICAgICAgICA+5LiK6KGM5Lii5YyF546H77yae3sgcmVtb3RlQXVkaW9UcmFja1N0YXRzW2l0ZW0udHJhY2tJRF0udXBsaW5rTG9zdFJhdGUgfX08L3RleHRcclxuICAgICAgICAgID5cclxuICAgICAgICAgIDx0ZXh0XHJcbiAgICAgICAgICAgIGNsYXNzPVwidHJhY2staW5mby1pdGVtXCJcclxuICAgICAgICAgICAgdi1pZj1cInJlbW90ZVZpZGVvVHJhY2tTdGF0c1tpdGVtLnRyYWNrSURdICYmIGl0ZW0ua2luZCA9PT0gJ3ZpZGVvJ1wiXHJcbiAgICAgICAgICAgID7kuIrooYzkuKLljIXnjofvvJp7eyByZW1vdGVWaWRlb1RyYWNrU3RhdHNbaXRlbS50cmFja0lEXS51cGxpbmtMb3N0UmF0ZSB9fTwvdGV4dFxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgPHRleHRcclxuICAgICAgICAgICAgY2xhc3M9XCJ0cmFjay1pbmZvLWl0ZW1cIlxyXG4gICAgICAgICAgICB2LWlmPVwicmVtb3RlVmlkZW9UcmFja1N0YXRzW2l0ZW0udHJhY2tJRF0gJiYgaXRlbS5raW5kID09PSAndmlkZW8nXCJcclxuICAgICAgICAgICAgPuS4iuihjOinhumikeW4p+WuveW6pu+8mnt7IHJlbW90ZVZpZGVvVHJhY2tTdGF0c1tpdGVtLnRyYWNrSURdLnVwbGlua0ZyYW1lV2lkdGggfX08L3RleHRcclxuICAgICAgICAgID5cclxuICAgICAgICAgIDx0ZXh0XHJcbiAgICAgICAgICAgIGNsYXNzPVwidHJhY2staW5mby1pdGVtXCJcclxuICAgICAgICAgICAgdi1pZj1cInJlbW90ZVZpZGVvVHJhY2tTdGF0c1tpdGVtLnRyYWNrSURdICYmIGl0ZW0ua2luZCA9PT0gJ3ZpZGVvJ1wiXHJcbiAgICAgICAgICAgID7kuIrooYzop4bpopHluKfpq5jluqbvvJp7eyByZW1vdGVWaWRlb1RyYWNrU3RhdHNbaXRlbS50cmFja0lEXS51cGxpbmtGcmFtZUhlaWdodCB9fTwvdGV4dFxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgPHRleHRcclxuICAgICAgICAgICAgY2xhc3M9XCJ0cmFjay1pbmZvLWl0ZW1cIlxyXG4gICAgICAgICAgICB2LWlmPVwicmVtb3RlVmlkZW9UcmFja1N0YXRzW2l0ZW0udHJhY2tJRF0gJiYgaXRlbS5raW5kID09PSAndmlkZW8nXCJcclxuICAgICAgICAgICAgPuS4i+ihjOS4ouWMheeOh++8mnt7IHJlbW90ZVZpZGVvVHJhY2tTdGF0c1tpdGVtLnRyYWNrSURdLmRvd25saW5rTG9zdFJhdGUgfX08L3RleHRcclxuICAgICAgICAgID5cclxuICAgICAgICAgIDx0ZXh0XHJcbiAgICAgICAgICAgIGNsYXNzPVwidHJhY2staW5mby1pdGVtXCJcclxuICAgICAgICAgICAgdi1pZj1cInJlbW90ZVZpZGVvVHJhY2tTdGF0c1tpdGVtLnRyYWNrSURdICYmIGl0ZW0ua2luZCA9PT0gJ3ZpZGVvJ1wiXHJcbiAgICAgICAgICAgID7kuIvooYznoIHnjofvvJp7eyByZW1vdGVWaWRlb1RyYWNrU3RhdHNbaXRlbS50cmFja0lEXS5kb3dubGlua0JpdHJhdGUudG9GaXhlZCg1KSB9fTwvdGV4dFxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgPHRleHRcclxuICAgICAgICAgICAgY2xhc3M9XCJ0cmFjay1pbmZvLWl0ZW1cIlxyXG4gICAgICAgICAgICB2LWlmPVwicmVtb3RlVmlkZW9UcmFja1N0YXRzW2l0ZW0udHJhY2tJRF0gJiYgaXRlbS5raW5kID09PSAndmlkZW8nXCJcclxuICAgICAgICAgICAgPuS4iuihjFJUVO+8mnt7IHJlbW90ZVZpZGVvVHJhY2tTdGF0c1tpdGVtLnRyYWNrSURdLnVwbGlua1JUVCB9fTwvdGV4dFxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgPHRleHRcclxuICAgICAgICAgICAgY2xhc3M9XCJ0cmFjay1pbmZvLWl0ZW1cIlxyXG4gICAgICAgICAgICB2LWlmPVwicmVtb3RlVmlkZW9UcmFja1N0YXRzW2l0ZW0udHJhY2tJRF0gJiYgaXRlbS5raW5kID09PSAndmlkZW8nXCJcclxuICAgICAgICAgICAgPui0qOmHj+etiee6p++8mnt7IHJlbW90ZVZpZGVvVHJhY2tTdGF0c1tpdGVtLnRyYWNrSURdLnByb2ZpbGUgfX08L3RleHRcclxuICAgICAgICAgID5cclxuICAgICAgICAgIDx0ZXh0XHJcbiAgICAgICAgICAgIGNsYXNzPVwidHJhY2staW5mby1pdGVtXCJcclxuICAgICAgICAgICAgdi1pZj1cInJlbW90ZVZpZGVvVHJhY2tTdGF0c1tpdGVtLnRyYWNrSURdICYmIGl0ZW0ua2luZCA9PT0gJ3ZpZGVvJ1wiXHJcbiAgICAgICAgICAgID7kuIvooYzluKfnjofvvJp7eyByZW1vdGVWaWRlb1RyYWNrU3RhdHNbaXRlbS50cmFja0lEXS5kb3dubGlua0ZyYW1lUmF0ZSB9fTwvdGV4dFxyXG4gICAgICAgICAgPlxyXG4gICAgICAgIDwvdmlldz5cclxuICAgICAgPC92aWV3PlxyXG4gICAgPC92aWV3PlxyXG4gIDwvdmlldz5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbmltcG9ydCB7XHJcbiAgUU5SVEMsXHJcbiAgUU5SVENMb2dMZXZlbCxcclxufSBmcm9tICdAL2pzX3Nkay9RTlJUQy1VbmlQbHVnaW4tSlMvUU5SVEMtVW5pUGx1Z2luLUpTL1JUQ0luZGV4Lm5hdGl2ZS5qcydcclxuaW1wb3J0IHsgbWFwU3RhdGUsIG1hcE11dGF0aW9ucyB9IGZyb20gJ3Z1ZXgnXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBjb21wdXRlZDoge1xyXG4gICAgLi4ubWFwU3RhdGUoW1xyXG4gICAgICAnY2FwdHVyZUhlaWdodCcsXHJcbiAgICAgICdjYXB0dXJlV2lkdGgnLFxyXG4gICAgICAnZW5jb2RlV2lkdGgnLFxyXG4gICAgICAnZW5jb2RlSGVpZ2h0JyxcclxuICAgICAgJ3BsYXRmb3JtJyxcclxuICAgICAgJ211bHRpU3RyZWFtRW5hYmxlJyxcclxuICAgICAgJ3Rva2VuJyxcclxuICAgICAgJ3BvbGljeScsXHJcbiAgICAgICdsb2dMZXZlbCcsXHJcbiAgICAgICdzdGVyZW8nLFxyXG4gICAgICAnYndlUG9saWN5JyxcclxuICAgICAgJ2FsbG93QXVkaW9NaXhXaXRoT3RoZXJzJyxcclxuICAgICAgJ2hXQ29kZWNFbmFibGVkJyxcclxuICAgICAgJ21haW50YWluUmVzb2x1dGlvbicsXHJcbiAgICAgICdmaWVsZFRyaWFscycsXHJcbiAgICAgICdlbmNvZGVyUXVhbGl0eU1vZGUnLFxyXG4gICAgICAnaXNBRUMzRW5hYmxlZCcsXHJcbiAgICAgICdtdWx0aVN0cmVhbUVuYWJsZScsXHJcbiAgICAgICdhdWRpb1NjZW5lJyxcclxuICAgICAgJ2RlZmF1bHRBdWRpb1JvdXRlVG9TcGVha2VycGhvbmUnLFxyXG4gICAgICAncmVjb25uZWN0aW9uVGltZW91dCcsXHJcbiAgICAgICdjbGllbnRSb2xlJyxcclxuICAgICAgJ2NsaWVudE1vZGUnLFxyXG4gICAgXSksXHJcbiAgfSxcclxuICBkYXRhKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgcmVtb3RlVHJhY2tzOiBbXSxcclxuICAgICAgcHVibGlzaGVkVHJhY2tzOiBbXSxcclxuICAgICAgbG9jYWxWaWRlb1RyYWNrU3RhdHM6IHt9LFxyXG4gICAgICBsb2NhbEF1ZGlvVHJhY2tTdGF0czoge30sXHJcbiAgICAgIGxvY2FsVHJhY2tzOiBbXSxcclxuICAgICAgY2xpZW50OiBudWxsLFxyXG4gICAgICBjb25uZWN0aW9uU3RhdGU6ICcnLFxyXG4gICAgICBtZXNzYWdlOiAnJyxcclxuICAgICAgc3Vic2NyaWJlZFRyYWNrczogW10sXHJcbiAgICAgIHJlbW90ZVVzZXJzOiBbXSxcclxuICAgICAgcmVtb3RlVmlkZW9UcmFja1N0YXRzOiBbXSxcclxuICAgICAgcmVtb3RlQXVkaW9UcmFja1N0YXRzOiBbXSxcclxuICAgIH1cclxuICB9LFxyXG4gIG9uQmFja1ByZXNzKCkge1xyXG4gICAgdGhpcy5jbGllbnQubGVhdmUoKVxyXG4gICAgUU5SVEMuZGVpbml0KClcclxuICAgIGNvbnNvbGUubG9nKCfmiafooYxvblVubG9hZCcpXHJcbiAgfSxcclxuICBvblVubG9hZCgpIHtcclxuICAgIHRoaXMuY2xpZW50LmxlYXZlKClcclxuICAgIFFOUlRDLmRlaW5pdCgpXHJcbiAgfSxcclxuICBvbkxvYWQoKSB7XHJcbiAgICB0aGlzLmhhbmRsZUpvaW5Sb29tKClcclxuICAgIHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgaWYgKHRoaXMuY2xpZW50KSB7XHJcbiAgICAgICAgdGhpcy5jb25uZWN0aW9uU3RhdGUgPSB0aGlzLmNsaWVudC5nZXRDb25uZWN0aW9uU3RhdGUoKVxyXG4gICAgICAgIHRoaXMucmVtb3RlVXNlcnMgPSB0aGlzLmNsaWVudC5nZXRSZW1vdGVVc2VycygpXHJcbiAgICAgICAgdGhpcy5zdWJzY3JpYmVkVHJhY2tzID0gW11cclxuICAgICAgICBmb3IgKGxldCBpIG9mIHRoaXMucmVtb3RlVXNlcnMpIHtcclxuICAgICAgICAgIHRoaXMuc3Vic2NyaWJlZFRyYWNrcy5wdXNoKC4uLnRoaXMuY2xpZW50LmdldFN1YnNjcmliZWRUcmFja3MoaS51c2VySUQpKVxyXG4gICAgICAgICAgY29uc3QgbmV0d29ya1F1YWxpdHkgPSB0aGlzLmNsaWVudC5nZXRVc2VyTmV0d29ya1F1YWxpdHkoaS51c2VySUQpXHJcbiAgICAgICAgICB0aGlzLiRzZXQoaSwgJ25ldHdvcmtRdWFsaXR5JywgbmV0d29ya1F1YWxpdHkpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMucmVtb3RlVmlkZW9UcmFja1N0YXRzID0gdGhpcy5jbGllbnQuZ2V0UmVtb3RlVmlkZW9UcmFja1N0YXRzKClcclxuICAgICAgICBmb3IgKGxldCBpIG9mIHRoaXMucmVtb3RlVHJhY2tzKSB7XHJcbiAgICAgICAgICBmb3IgKGxldCBrZXkgaW4gdGhpcy5yZW1vdGVWaWRlb1RyYWNrU3RhdHMpXHJcbiAgICAgICAgICAgIGlmIChpLnRyYWNrSUQgPT09IGtleSkge1xyXG4gICAgICAgICAgICAgIGkuc3RhdHMgPSB0aGlzLnJlbW90ZVZpZGVvVHJhY2tTdGF0c1trZXldXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5yZW1vdGVBdWRpb1RyYWNrU3RhdHMgPSB0aGlzLmNsaWVudC5nZXRSZW1vdGVBdWRpb1RyYWNrU3RhdHMoKVxyXG4gICAgICAgIGZvciAobGV0IGkgb2YgdGhpcy5yZW1vdGVUcmFja3MpIHtcclxuICAgICAgICAgIGZvciAobGV0IGtleSBpbiB0aGlzLnJlbW90ZUF1ZGlvVHJhY2tTdGF0cylcclxuICAgICAgICAgICAgaWYgKGkudHJhY2tJRCA9PT0ga2V5KSB7XHJcbiAgICAgICAgICAgICAgaS5zdGF0cyA9IHRoaXMucmVtb3RlQXVkaW9UcmFja1N0YXRzW2tleV1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnB1Ymxpc2hlZFRyYWNrcyA9IHRoaXMuY2xpZW50LmdldFB1Ymxpc2hlZFRyYWNrcygpXHJcbiAgICAgICAgdGhpcy5sb2NhbEF1ZGlvVHJhY2tTdGF0cyA9IHRoaXMuY2xpZW50LmdldExvY2FsQXVkaW9UcmFja1N0YXRzKClcclxuICAgICAgICB0aGlzLmxvY2FsVmlkZW9UcmFja1N0YXRzID0gdGhpcy5jbGllbnQuZ2V0TG9jYWxWaWRlb1RyYWNrU3RhdHMoKVxyXG4gICAgICB9XHJcbiAgICB9LCAxMDAwKVxyXG4gIH0sXHJcbiAgbWV0aG9kczoge1xyXG4gICAgc2F2ZUJhc2VJbWdGaWxlKGJhc2U2NCkge1xyXG4gICAgICBjb25zdCBiaXRtYXAgPSBuZXcgcGx1cy5uYXRpdmVPYmouQml0bWFwKCdiYXNlNjQnKVxyXG4gICAgICBiaXRtYXAubG9hZEJhc2U2NERhdGEoXHJcbiAgICAgICAgYmFzZTY0LFxyXG4gICAgICAgIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgIGNvbnN0IHVybCA9ICdfZG9jLycgKyBuZXcgRGF0ZSgpLmdldFRpbWUoKSArICcucG5nJ1xyXG4gICAgICAgICAgY29uc29sZS5sb2coJ3NhdmVIZWFkSW1nRmlsZScsIHVybClcclxuICAgICAgICAgIGJpdG1hcC5zYXZlKFxyXG4gICAgICAgICAgICB1cmwsXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBvdmVyd3JpdGU6IHRydWUsIC8vIOaYr+WQpuimhuebllxyXG4gICAgICAgICAgICAgIC8vIHF1YWxpdHk6ICdxdWFsaXR5JyAgLy8g5Zu+54mH5riF5pmw5bqmXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIChpKSA9PiB7XHJcbiAgICAgICAgICAgICAgdW5pLnNhdmVJbWFnZVRvUGhvdG9zQWxidW0oe1xyXG4gICAgICAgICAgICAgICAgZmlsZVBhdGg6IHVybCxcclxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgdW5pLnNob3dUb2FzdCh7XHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICflm77niYfkv53lrZjmiJDlip8nLFxyXG4gICAgICAgICAgICAgICAgICAgIGljb246ICdub25lJyxcclxuICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgYml0bWFwLmNsZWFyKClcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgKGUpID0+IHtcclxuICAgICAgICAgICAgICB1bmkuc2hvd1RvYXN0KHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAn5Zu+54mH5L+d5a2Y5aSx6LSlJyxcclxuICAgICAgICAgICAgICAgIGljb246ICdub25lJyxcclxuICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpXHJcbiAgICAgICAgICAgICAgYml0bWFwLmNsZWFyKClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgKVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgKGUpID0+IHtcclxuICAgICAgICAgIHVuaS5zaG93VG9hc3Qoe1xyXG4gICAgICAgICAgICB0aXRsZTogJ+WbvueJh+S/neWtmOWksei0pScsXHJcbiAgICAgICAgICAgIGljb246ICdub25lJyxcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICBiaXRtYXAuY2xlYXIoKVxyXG4gICAgICAgIH1cclxuICAgICAgKVxyXG4gICAgfSxcclxuICAgIGFzeW5jIHRha2VMb2NhbFZpZGVvU25hcHNob3QoKSB7XHJcbiAgICAgIGNvbnN0IHsgYmFzZTY0LCByb3RhdGUgfSA9IGF3YWl0IHRoaXMuY2FtZXJhVmlkZW9UcmFjay50YWtlVmlkZW9TbmFwc2hvdCgpXHJcbiAgICAgIHRoaXMuc2F2ZUJhc2VJbWdGaWxlKGJhc2U2NClcclxuICAgIH0sXHJcbiAgICBhc3luYyB0YWtlUmVtb3RlVmlkZW9TbmFwc2hvdChpdGVtKSB7XHJcbiAgICAgIGNvbnN0IHsgYmFzZTY0LCByb3RhdGUgfSA9IGF3YWl0IGl0ZW0udGFrZVZpZGVvU25hcHNob3QoKVxyXG4gICAgICB0aGlzLnNhdmVCYXNlSW1nRmlsZShiYXNlNjQpXHJcbiAgICB9LFxyXG4gICAgaGFuZGxlU2VuZE1lc3NhZ2UoKSB7XHJcbiAgICAgIHRoaXMuY2xpZW50LnNlbmRNZXNzYWdlKHRoaXMubWVzc2FnZSwgW10sIE1hdGgucmFuZG9tKCkgKyAnbWVzc2FnZUlEJylcclxuICAgIH0sXHJcbiAgICBhc3luYyBoYW5kbGVKb2luUm9vbSgpIHtcclxuICAgICAgaWYgKHRoaXMuY29ubmVjdGlvblN0YXRlID09PSAnQ09OTkVDVEVEJykge1xyXG4gICAgICAgIHVuaS5zaG93TW9kYWwoe1xyXG4gICAgICAgICAgY29udGVudDogJ+W3sue7j+WKoOWFpeaIv+mXtCcsXHJcbiAgICAgICAgfSlcclxuICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgICAgfVxyXG4gICAgICBRTlJUQy5jb25maWdSVEMoe1xyXG4gICAgICAgIHBvbGljeTogdGhpcy5wb2xpY3ksXHJcbiAgICAgICAgbG9nTGV2ZWw6IHRoaXMubG9nTGV2ZWwsXHJcbiAgICAgICAgc3RlcmVvOiB0aGlzLnN0ZXJlbyA9PT0gMSxcclxuICAgICAgICBid2VQb2xpY3k6IHRoaXMuYndlUG9saWN5LFxyXG4gICAgICAgIGFsbG93QXVkaW9NaXhXaXRoT3RoZXJzOiB0aGlzLmFsbG93QXVkaW9NaXhXaXRoT3RoZXJzID09PSAxLFxyXG4gICAgICAgIGhXQ29kZWNFbmFibGVkOiB0aGlzLmhXQ29kZWNFbmFibGVkID09PSAxLFxyXG4gICAgICAgIG1haW50YWluUmVzb2x1dGlvbjogdGhpcy5tYWludGFpblJlc29sdXRpb24gPT09IDEsXHJcbiAgICAgICAgZmllbGRUcmlhbHM6IHRoaXMuZmllbGRUcmlhbHMsXHJcbiAgICAgICAgZW5jb2RlclF1YWxpdHlNb2RlOiB0aGlzLmVuY29kZXJRdWFsaXR5TW9kZSA9PT0gMSxcclxuICAgICAgICBpc0FFQzNFbmFibGVkOiB0aGlzLmlzQUVDM0VuYWJsZWQgPT09IDEsXHJcbiAgICAgICAgYXVkaW9TY2VuZTogdGhpcy5hdWRpb1NjZW5lLFxyXG4gICAgICAgIGRlZmF1bHRBdWRpb1JvdXRlVG9TcGVha2VycGhvbmU6IHRoaXMuZGVmYXVsdEF1ZGlvUm91dGVUb1NwZWFrZXJwaG9uZSxcclxuICAgICAgICByZWNvbm5lY3Rpb25UaW1lb3V0OiB0aGlzLnJlY29ubmVjdGlvblRpbWVvdXQsXHJcbiAgICAgIH0pXHJcbiAgICAgIHRoaXMuY2xpZW50ID0gUU5SVEMuY3JlYXRlQ2xpZW50KHtcclxuICAgICAgICBtb2RlOiB0aGlzLmNsaWVudE1vZGUsXHJcbiAgICAgICAgcm9sZTogdGhpcy5jbGllbnRSb2xlLFxyXG4gICAgICB9KVxyXG4gICAgICB0aGlzLmNsaWVudC5zZXRBdXRvU3Vic2NyaWJlKHRydWUpXHJcbiAgICAgIGNvbnN0IGNhbWVyYVZpZGVvVHJhY2sgPSBRTlJUQy5jcmVhdGVDYW1lcmFWaWRlb1RyYWNrKHtcclxuICAgICAgICBtdWx0aVN0cmVhbUVuYWJsZTogdGhpcy5tdWx0aVN0cmVhbUVuYWJsZSA9PT0gMSxcclxuICAgICAgICB3aWR0aDogdGhpcy5lbmNvZGVXaWR0aCAqIDEsXHJcbiAgICAgICAgaGVpZ2h0OiB0aGlzLmVuY29kZUhlaWdodCAqIDEsXHJcbiAgICAgICAgY2FwdHVyZUhlaWdodDogdGhpcy5jYXB0dXJlSGVpZ2h0ICogMSxcclxuICAgICAgICBjYXB0dXJlV2lkdGg6IHRoaXMuY2FwdHVyZVdpZHRoICogMSxcclxuICAgICAgfSlcclxuICAgICAgdGhpcy5sb2NhbFRyYWNrcy5wdXNoKGNhbWVyYVZpZGVvVHJhY2spXHJcbiAgICAgIHRoaXMuY2FtZXJhVmlkZW9UcmFjayA9IGNhbWVyYVZpZGVvVHJhY2tcclxuICAgICAgY29uc3QgbWljcm9waG9uZUF1ZGlvVHJhY2sgPSBRTlJUQy5jcmVhdGVNaWNyb3Bob25lQXVkaW9UcmFjaygpXHJcbiAgICAgIHRoaXMubG9jYWxUcmFja3MucHVzaChtaWNyb3Bob25lQXVkaW9UcmFjaylcclxuICAgICAgaWYgKFFOUlRDLmlzU2NyZWVuQ2FwdHVyZVN1cHBvcnRlZCgpKSB7XHJcbiAgICAgICAgaWYgKHRoaXMucGxhdGZvcm0gPT09ICdhbmRyb2lkJykge1xyXG4gICAgICAgICAgUU5SVEMucmVxdWVzdFBlcm1pc3Npb24oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgY29uc3Qgc2NyZWVuVmlkZW9UcmFjayA9IFFOUlRDLmNyZWF0ZVNjcmVlblZpZGVvVHJhY2soKVxyXG4gICAgICAgICAgICAgIHRoaXMubG9jYWxUcmFja3MucHVzaChzY3JlZW5WaWRlb1RyYWNrKVxyXG4gICAgICAgICAgICAgIHRoaXMuY2xpZW50LmpvaW4odGhpcy50b2tlbilcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICB1bmkuc2hvd01vZGFsKHtcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICfml6Dms5XlvZXlsY8nLFxyXG4gICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgdGhpcy5jbGllbnQuam9pbih0aGlzLnRva2VuKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBjb25zdCBzY3JlZW5WaWRlb1RyYWNrID0gUU5SVEMuY3JlYXRlU2NyZWVuVmlkZW9UcmFjaygpXHJcbiAgICAgICAgICB0aGlzLmxvY2FsVHJhY2tzLnB1c2goc2NyZWVuVmlkZW9UcmFjaylcclxuICAgICAgICAgIHRoaXMuY2xpZW50LmpvaW4odGhpcy50b2tlbilcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5jbGllbnQuam9pbih0aGlzLnRva2VuKVxyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuY2xpZW50Lm9uKCdvbkNvbm5lY3Rpb25TdGF0ZUNoYW5nZWQnLCAoeyBzdGF0ZSwgaW5mbyB9KSA9PiB7XHJcbiAgICAgICAgaWYgKHN0YXRlID09PSAnQ09OTkVDVEVEJykge1xyXG4gICAgICAgICAgdGhpcy5jbGllbnQucHVibGlzaCh0aGlzLmxvY2FsVHJhY2tzLCAob25QdWJsaXNoZWQsIGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChvblB1Ymxpc2hlZCkge1xyXG4gICAgICAgICAgICAgIHVuaS5zaG93TW9kYWwoe1xyXG4gICAgICAgICAgICAgICAgY29udGVudDogJ+WPkeW4g+aIkOWKnycsXHJcbiAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICB1bmkuc2hvd01vZGFsKHtcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IGVycm9yLm1lc3NhZ2UsXHJcbiAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9IGVsc2UgaWYgKHN0YXRlID09PSAnRElTQ09OTkVDVEVEJykge1xyXG4gICAgICAgICAgaWYgKGluZm8ucmVhc29uID09PSAnS0lDS0VEX09VVCcpIHtcclxuICAgICAgICAgICAgdW5pLnNob3dNb2RhbCh7XHJcbiAgICAgICAgICAgICAgY29udGVudDogJ+iiq+i4ouWHuuaIv+mXtCcsXHJcbiAgICAgICAgICAgICAgc3VjY2VzczogKHJlcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgdW5pLm5hdmlnYXRlQmFjaygpXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgIH0gZWxzZSBpZiAoaW5mby5yZWFzb24gPT09ICdST09NX0NMT1NFRCcpIHtcclxuICAgICAgICAgICAgdW5pLnNob3dNb2RhbCh7XHJcbiAgICAgICAgICAgICAgY29udGVudDogJ+aIv+mXtOiiq+WFs+mXrScsXHJcbiAgICAgICAgICAgICAgc3VjY2VzczogKHJlcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgdW5pLm5hdmlnYXRlQmFjaygpXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgIH0gZWxzZSBpZiAoaW5mby5yZWFzb24gPT09ICdST09NX0ZVTEwnKSB7XHJcbiAgICAgICAgICAgIHVuaS5zaG93TW9kYWwoe1xyXG4gICAgICAgICAgICAgIGNvbnRlbnQ6ICfmiL/pl7TkurrmlbDlt7Lmu6EnLFxyXG4gICAgICAgICAgICAgIHN1Y2Nlc3M6IChyZXMpID0+IHtcclxuICAgICAgICAgICAgICAgIHVuaS5uYXZpZ2F0ZUJhY2soKVxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIGlmIChzdGF0ZSA9PT0gJ1JFQ09OTkVDVElORycpIHtcclxuICAgICAgICAgIHVuaS5zaG93TG9hZGluZyh7XHJcbiAgICAgICAgICAgIG1hc2s6IHRydWUsXHJcbiAgICAgICAgICAgIHRpdGxlOiAn6YeN6L+e5LitJyxcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfSBlbHNlIGlmIChzdGF0ZSA9PT0gJ1JFQ09OTkVDVEVEJykge1xyXG4gICAgICAgICAgdW5pLmhpZGVMb2FkaW5nKClcclxuICAgICAgICAgIHVuaS5zaG93TW9kYWwoe1xyXG4gICAgICAgICAgICBjb250ZW50OiAn6YeN6L+e5oiQ5YqfJyxcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgICB0aGlzLmNsaWVudC5vbignb25BdWRpb1N1YnNjcmliZWQnLCAocGFyYW1zKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ+eUqOaIt+iuoumYheaIkOWKnycpXHJcbiAgICAgICAgZm9yIChsZXQgaSBvZiBwYXJhbXMudHJhY2tMaXN0KSB7XHJcbiAgICAgICAgICB0aGlzLnJlbW90ZVRyYWNrcy5wdXNoKGkpXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgICB0aGlzLmNsaWVudC5vbignb25WaWRlb1N1YnNjcmliZWQnLCAocGFyYW1zKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ+eUqOaIt+iuoumYheaIkOWKnycpXHJcbiAgICAgICAgZm9yIChsZXQgaSBvZiBwYXJhbXMudHJhY2tMaXN0KSB7XHJcbiAgICAgICAgICB0aGlzLnJlbW90ZVRyYWNrcy5wdXNoKGkpXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgICB0aGlzLmNsaWVudC5vbignb25Vc2VyUHVibGlzaGVkJywgKHBhcmFtcykgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCfnlKjmiLflj5HluIMnLCBwYXJhbXMpXHJcbiAgICAgICAgdGhpcy5jbGllbnQuc3Vic2NyaWJlKHBhcmFtcy50cmFja0xpc3QpXHJcbiAgICAgIH0pXHJcbiAgICAgIHRoaXMuY2xpZW50Lm9uKCdvblVzZXJVbnB1Ymxpc2hlZCcsIChwYXJhbXMpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZygn55So5oi35Y+W5raI5Y+R5biDJywgcGFyYW1zKVxyXG4gICAgICAgIGZvciAobGV0IGkgb2YgcGFyYW1zLnRyYWNrTGlzdCkge1xyXG4gICAgICAgICAgY29uc3QgaW5kZXggPSB0aGlzLnJlbW90ZVRyYWNrcy5maW5kSW5kZXgoKGl0ZW0pID0+IGl0ZW0udHJhY2tJRCA9PT0gaS50cmFja0lEKVxyXG4gICAgICAgICAgaWYgKGluZGV4ID49IDApIHtcclxuICAgICAgICAgICAgdGhpcy5yZW1vdGVUcmFja3Muc3BsaWNlKGluZGV4LCAxKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgICAgdGhpcy5jbGllbnQub24oJ29uTWVzc2FnZVJlY2VpdmVkJywgKHBhcmFtcykgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCfmjqXmlLbliLDmtojmga8nLCBwYXJhbXMpXHJcbiAgICAgICAgdW5pLnNob3dNb2RhbCh7XHJcbiAgICAgICAgICBjb250ZW50OiBgJHtwYXJhbXMudXNlcklkfeivtO+8miR7cGFyYW1zLmNvbnRlbnR9YCxcclxuICAgICAgICB9KVxyXG4gICAgICB9KVxyXG4gICAgICB0aGlzLmNsaWVudC5vbignb25Vc2VyUmVjb25uZWN0aW5nJywgKHBhcmFtcykgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCfnlKjmiLfph43ov57kuK0nLCBwYXJhbXMpXHJcbiAgICAgIH0pXHJcbiAgICAgIHRoaXMuY2xpZW50Lm9uKCdvblVzZXJSZWNvbm5lY3RlZCcsIChwYXJhbXMpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZygn55So5oi36YeN6L+e5oiQ5YqfJywgcGFyYW1zKVxyXG4gICAgICB9KVxyXG4gICAgICB0aGlzLmNsaWVudC5vbignb25Vc2VyTGVmdCcsIChwYXJhbXMpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZygn55So5oi356a75byA5oi/6Ze0JywgcGFyYW1zKVxyXG4gICAgICB9KVxyXG4gICAgfSxcclxuICB9LFxyXG59XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlPlxyXG4ud3JhcCB7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIG1hcmdpbjogMCAyMHB4IDIwcHg7XHJcbiAgcGFkZGluZzogMTBweCAwO1xyXG59XHJcblxyXG4uZmxleC1yb3cge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLnRpdGxlIHtcclxuICBmb250LXNpemU6IDI4dXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4uaXRlbSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbjwvc3R5bGU+XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///342\n");

/***/ }),

/***/ 343:
/*!****************************************************************************************************************************!*\
  !*** /Users/tongjie/Desktop/QNRTC-Uniapp/demo/pages/group-to-group/index.nvue?vue&type=style&index=0&lang=css&mpType=page ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-1!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--10-oneOf-0-2!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-3!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./index.nvue?vue&type=style&index=0&lang=css&mpType=page */ 344);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 344:
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-1!./node_modules/postcss-loader/src??ref--10-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!/Users/tongjie/Desktop/QNRTC-Uniapp/demo/pages/group-to-group/index.nvue?vue&type=style&index=0&lang=css&mpType=page ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
  ".flex-row": {
    "": {
      "display": [
        "flex",
        0,
        0,
        1
      ],
      "flexDirection": [
        "row",
        0,
        0,
        1
      ],
      "justifyContent": [
        "flex-start",
        0,
        0,
        1
      ],
      "alignItems": [
        "center",
        0,
        0,
        1
      ]
    }
  },
  ".title": {
    "": {
      "fontSize": [
        "28upx",
        0,
        0,
        2
      ],
      "fontWeight": [
        "bold",
        0,
        0,
        2
      ]
    }
  },
  ".item": {
    "": {
      "position": [
        "relative",
        0,
        0,
        3
      ]
    }
  },
  "@VERSION": 2
}

/***/ }),

/***/ 37:
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray.js */ 38);
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}
module.exports = _unsupportedIterableToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 38:
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayLikeToArray.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
module.exports = _arrayLikeToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

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

/***/ 55:
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ 43);
// TODO(Babel 8): Remove this file.

var runtime = __webpack_require__(/*! ../helpers/regeneratorRuntime */ 56)();
module.exports = runtime;

// Copied from https://github.com/facebook/regenerator/blob/main/packages/runtime/runtime.js#L736=
try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  if ((typeof globalThis === "undefined" ? "undefined" : _typeof(globalThis)) === "object") {
    globalThis.regeneratorRuntime = runtime;
  } else {
    Function("r", "regeneratorRuntime = r")(runtime);
  }
}

/***/ }),

/***/ 56:
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/regeneratorRuntime.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ./typeof.js */ 43)["default"];
function _regeneratorRuntime() {
  "use strict";

  /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
  module.exports = _regeneratorRuntime = function _regeneratorRuntime() {
    return exports;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  var exports = {},
    Op = Object.prototype,
    hasOwn = Op.hasOwnProperty,
    defineProperty = Object.defineProperty || function (obj, key, desc) {
      obj[key] = desc.value;
    },
    $Symbol = "function" == typeof Symbol ? Symbol : {},
    iteratorSymbol = $Symbol.iterator || "@@iterator",
    asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator",
    toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
  function define(obj, key, value) {
    return Object.defineProperty(obj, key, {
      value: value,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }), obj[key];
  }
  try {
    define({}, "");
  } catch (err) {
    define = function define(obj, key, value) {
      return obj[key] = value;
    };
  }
  function wrap(innerFn, outerFn, self, tryLocsList) {
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator,
      generator = Object.create(protoGenerator.prototype),
      context = new Context(tryLocsList || []);
    return defineProperty(generator, "_invoke", {
      value: makeInvokeMethod(innerFn, self, context)
    }), generator;
  }
  function tryCatch(fn, obj, arg) {
    try {
      return {
        type: "normal",
        arg: fn.call(obj, arg)
      };
    } catch (err) {
      return {
        type: "throw",
        arg: err
      };
    }
  }
  exports.wrap = wrap;
  var ContinueSentinel = {};
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}
  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });
  var getProto = Object.getPrototypeOf,
    NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype);
  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function (method) {
      define(prototype, method, function (arg) {
        return this._invoke(method, arg);
      });
    });
  }
  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if ("throw" !== record.type) {
        var result = record.arg,
          value = result.value;
        return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) {
          invoke("next", value, resolve, reject);
        }, function (err) {
          invoke("throw", err, resolve, reject);
        }) : PromiseImpl.resolve(value).then(function (unwrapped) {
          result.value = unwrapped, resolve(result);
        }, function (error) {
          return invoke("throw", error, resolve, reject);
        });
      }
      reject(record.arg);
    }
    var previousPromise;
    defineProperty(this, "_invoke", {
      value: function value(method, arg) {
        function callInvokeWithMethodAndArg() {
          return new PromiseImpl(function (resolve, reject) {
            invoke(method, arg, resolve, reject);
          });
        }
        return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
      }
    });
  }
  function makeInvokeMethod(innerFn, self, context) {
    var state = "suspendedStart";
    return function (method, arg) {
      if ("executing" === state) throw new Error("Generator is already running");
      if ("completed" === state) {
        if ("throw" === method) throw arg;
        return doneResult();
      }
      for (context.method = method, context.arg = arg;;) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }
        if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) {
          if ("suspendedStart" === state) throw state = "completed", context.arg;
          context.dispatchException(context.arg);
        } else "return" === context.method && context.abrupt("return", context.arg);
        state = "executing";
        var record = tryCatch(innerFn, self, context);
        if ("normal" === record.type) {
          if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue;
          return {
            value: record.arg,
            done: context.done
          };
        }
        "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg);
      }
    };
  }
  function maybeInvokeDelegate(delegate, context) {
    var methodName = context.method,
      method = delegate.iterator[methodName];
    if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel;
    var record = tryCatch(method, delegate.iterator, context.arg);
    if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel;
    var info = record.arg;
    return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel);
  }
  function pushTryEntry(locs) {
    var entry = {
      tryLoc: locs[0]
    };
    1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry);
  }
  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal", delete record.arg, entry.completion = record;
  }
  function Context(tryLocsList) {
    this.tryEntries = [{
      tryLoc: "root"
    }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0);
  }
  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) return iteratorMethod.call(iterable);
      if ("function" == typeof iterable.next) return iterable;
      if (!isNaN(iterable.length)) {
        var i = -1,
          next = function next() {
            for (; ++i < iterable.length;) {
              if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next;
            }
            return next.value = undefined, next.done = !0, next;
          };
        return next.next = next;
      }
    }
    return {
      next: doneResult
    };
  }
  function doneResult() {
    return {
      value: undefined,
      done: !0
    };
  }
  return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", {
    value: GeneratorFunctionPrototype,
    configurable: !0
  }), defineProperty(GeneratorFunctionPrototype, "constructor", {
    value: GeneratorFunction,
    configurable: !0
  }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) {
    var ctor = "function" == typeof genFun && genFun.constructor;
    return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name));
  }, exports.mark = function (genFun) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun;
  }, exports.awrap = function (arg) {
    return {
      __await: arg
    };
  }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    void 0 === PromiseImpl && (PromiseImpl = Promise);
    var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
    return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) {
      return result.done ? result.value : iter.next();
    });
  }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () {
    return this;
  }), define(Gp, "toString", function () {
    return "[object Generator]";
  }), exports.keys = function (val) {
    var object = Object(val),
      keys = [];
    for (var key in object) {
      keys.push(key);
    }
    return keys.reverse(), function next() {
      for (; keys.length;) {
        var key = keys.pop();
        if (key in object) return next.value = key, next.done = !1, next;
      }
      return next.done = !0, next;
    };
  }, exports.values = values, Context.prototype = {
    constructor: Context,
    reset: function reset(skipTempReset) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) {
        "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined);
      }
    },
    stop: function stop() {
      this.done = !0;
      var rootRecord = this.tryEntries[0].completion;
      if ("throw" === rootRecord.type) throw rootRecord.arg;
      return this.rval;
    },
    dispatchException: function dispatchException(exception) {
      if (this.done) throw exception;
      var context = this;
      function handle(loc, caught) {
        return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught;
      }
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i],
          record = entry.completion;
        if ("root" === entry.tryLoc) return handle("end");
        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc"),
            hasFinally = hasOwn.call(entry, "finallyLoc");
          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
          } else {
            if (!hasFinally) throw new Error("try statement without catch or finally");
            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
          }
        }
      }
    },
    abrupt: function abrupt(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }
      finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null);
      var record = finallyEntry ? finallyEntry.completion : {};
      return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record);
    },
    complete: function complete(record, afterLoc) {
      if ("throw" === record.type) throw record.arg;
      return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel;
    },
    finish: function finish(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel;
      }
    },
    "catch": function _catch(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if ("throw" === record.type) {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }
      throw new Error("illegal catch attempt");
    },
    delegateYield: function delegateYield(iterable, resultName, nextLoc) {
      return this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      }, "next" === this.method && (this.arg = undefined), ContinueSentinel;
    }
  }, exports;
}
module.exports = _regeneratorRuntime, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 58:
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toConsumableArray.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(/*! ./arrayWithoutHoles.js */ 59);
var iterableToArray = __webpack_require__(/*! ./iterableToArray.js */ 60);
var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray.js */ 37);
var nonIterableSpread = __webpack_require__(/*! ./nonIterableSpread.js */ 61);
function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
}
module.exports = _toConsumableArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 59:
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray.js */ 38);
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return arrayLikeToArray(arr);
}
module.exports = _arrayWithoutHoles, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 60:
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArray.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
module.exports = _iterableToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 61:
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableSpread.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
module.exports = _nonIterableSpread, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 62:
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/asyncToGenerator.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }
  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}
function _asyncToGenerator(fn) {
  return function () {
    var self = this,
      args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);
      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }
      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }
      _next(undefined);
    });
  };
}
module.exports = _asyncToGenerator, module.exports.__esModule = true, module.exports["default"] = module.exports;

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

/***/ 8:
/*!*********************************************************************************************************************!*\
  !*** /Users/tongjie/Desktop/QNRTC-Uniapp/demo/uni_modules/uni-easyinput/components/uni-easyinput/uni-easyinput.vue ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _uni_easyinput_vue_vue_type_template_id_abe12412_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./uni-easyinput.vue?vue&type=template&id=abe12412&scoped=true& */ 9);\n/* harmony import */ var _uni_easyinput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./uni-easyinput.vue?vue&type=script&lang=js& */ 21);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _uni_easyinput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _uni_easyinput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 20);\n\nvar renderjs\n\n\nfunction injectStyles (context) {\n  \n  if(!this.options.style){\n          this.options.style = {}\n      }\n      if(Vue.prototype.__merge_style && Vue.prototype.__$appStyle__){\n        Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style)\n      }\n      if(Vue.prototype.__merge_style){\n                Vue.prototype.__merge_style(__webpack_require__(/*! ./uni-easyinput.vue?vue&type=style&index=0&id=abe12412&lang=scss&scoped=true& */ 23).default, this.options.style)\n            }else{\n                Object.assign(this.options.style,__webpack_require__(/*! ./uni-easyinput.vue?vue&type=style&index=0&id=abe12412&lang=scss&scoped=true& */ 23).default)\n            }\n\n}\n\n/* normalize component */\n\nvar component = Object(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _uni_easyinput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _uni_easyinput_vue_vue_type_template_id_abe12412_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _uni_easyinput_vue_vue_type_template_id_abe12412_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"abe12412\",\n  \"1aecf219\",\n  false,\n  _uni_easyinput_vue_vue_type_template_id_abe12412_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ninjectStyles.call(component)\ncomponent.options.__file = \"uni_modules/uni-easyinput/components/uni-easyinput/uni-easyinput.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBc0k7QUFDdEk7QUFDaUU7QUFDTDtBQUM1RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxtQkFBTyxDQUFDLHVGQUErRTtBQUNuSSxhQUFhO0FBQ2IsaURBQWlELG1CQUFPLENBQUMsdUZBQStFO0FBQ3hJOztBQUVBOztBQUVBO0FBQ3NOO0FBQ3ROLGdCQUFnQixpTkFBVTtBQUMxQixFQUFFLG1GQUFNO0FBQ1IsRUFBRSxvR0FBTTtBQUNSLEVBQUUsNkdBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsd0dBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDZSxnRiIsImZpbGUiOiI4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMsIHJlY3ljbGFibGVSZW5kZXIsIGNvbXBvbmVudHMgfSBmcm9tIFwiLi91bmktZWFzeWlucHV0LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1hYmUxMjQxMiZzY29wZWQ9dHJ1ZSZcIlxudmFyIHJlbmRlcmpzXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL3VuaS1lYXN5aW5wdXQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi91bmktZWFzeWlucHV0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZnVuY3Rpb24gaW5qZWN0U3R5bGVzIChjb250ZXh0KSB7XG4gIFxuICBpZighdGhpcy5vcHRpb25zLnN0eWxlKXtcbiAgICAgICAgICB0aGlzLm9wdGlvbnMuc3R5bGUgPSB7fVxuICAgICAgfVxuICAgICAgaWYoVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlICYmIFZ1ZS5wcm90b3R5cGUuX18kYXBwU3R5bGVfXyl7XG4gICAgICAgIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18sIHRoaXMub3B0aW9ucy5zdHlsZSlcbiAgICAgIH1cbiAgICAgIGlmKFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZSl7XG4gICAgICAgICAgICAgICAgVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlKHJlcXVpcmUoXCIuL3VuaS1lYXN5aW5wdXQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9YWJlMTI0MTImbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiKS5kZWZhdWx0LCB0aGlzLm9wdGlvbnMuc3R5bGUpXG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMub3B0aW9ucy5zdHlsZSxyZXF1aXJlKFwiLi91bmktZWFzeWlucHV0LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWFiZTEyNDEyJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIikuZGVmYXVsdClcbiAgICAgICAgICAgIH1cblxufVxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCJhYmUxMjQxMlwiLFxuICBcIjFhZWNmMjE5XCIsXG4gIGZhbHNlLFxuICBjb21wb25lbnRzLFxuICByZW5kZXJqc1xuKVxuXG5pbmplY3RTdHlsZXMuY2FsbChjb21wb25lbnQpXG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInVuaV9tb2R1bGVzL3VuaS1lYXN5aW5wdXQvY29tcG9uZW50cy91bmktZWFzeWlucHV0L3VuaS1lYXN5aW5wdXQudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///8\n");

/***/ }),

/***/ 9:
/*!****************************************************************************************************************************************************************!*\
  !*** /Users/tongjie/Desktop/QNRTC-Uniapp/demo/uni_modules/uni-easyinput/components/uni-easyinput/uni-easyinput.vue?vue&type=template&id=abe12412&scoped=true& ***!
  \****************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_easyinput_vue_vue_type_template_id_abe12412_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-0!../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./uni-easyinput.vue?vue&type=template&id=abe12412&scoped=true& */ 10);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_easyinput_vue_vue_type_template_id_abe12412_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_easyinput_vue_vue_type_template_id_abe12412_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_easyinput_vue_vue_type_template_id_abe12412_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_easyinput_vue_vue_type_template_id_abe12412_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



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