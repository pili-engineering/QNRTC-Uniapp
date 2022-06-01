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
/******/ 	return __webpack_require__(__webpack_require__.s = 180);
/******/ })
/************************************************************************/
/******/ ({

/***/ 1:
/*!****************************************************************************!*\
  !*** /Users/tongjie/Desktop/QNRTC-Uniapp/demo/main.js?{"type":"appStyle"} ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("Vue.prototype.__$appStyle__ = {}\nVue.prototype.__merge_style && Vue.prototype.__merge_style(__webpack_require__(/*! ./App.vue?vue&type=style&index=0&lang=css */ 2).default,Vue.prototype.__$appStyle__)\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0EsMkRBQTJELG1CQUFPLENBQUMsa0RBQTJDIiwiZmlsZSI6IjEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18gPSB7fVxuVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlICYmIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShyZXF1aXJlKFwiLi9BcHAudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3NcIikuZGVmYXVsdCxWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18pXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///1\n");

/***/ }),

/***/ 100:
/*!******************************************************************************************************************************!*\
  !*** /Users/tongjie/Desktop/QNRTC-Uniapp/demo/js_sdk/QNRTC-UniPlugin-JS/QNRTC-UniPlugin-JS/class/RTCMicrophoneAudioTrack.js ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__webpack_provided_uni_dot_requireNativePlugin) {\nvar __extends = this && this.__extends || function () {\n  var _extendStatics = function extendStatics(d, b) {\n    _extendStatics = Object.setPrototypeOf ||\n    { __proto__: [] } instanceof Array && function (d, b) {d.__proto__ = b;} ||\n    function (d, b) {for (var p in b) {if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];}};\n    return _extendStatics(d, b);\n  };\n  return function (d, b) {\n    if (typeof b !== \"function\" && b !== null)\n    throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\n    _extendStatics(d, b);\n    function __() {this.constructor = d;}\n    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n  };\n}();\nexports.__esModule = true;\nexports.QNMicrophoneAudioTrack = void 0;\nvar RTCLocalAudioTrack_1 = __webpack_require__(/*! ./RTCLocalAudioTrack */ 101);\nvar RTCAudioMixer_1 = __webpack_require__(/*! ../class/RTCAudioMixer */ 102);\nvar QNRtcTrack = __webpack_provided_uni_dot_requireNativePlugin('QNRTC-UniPlugin-QNRtcTrack');\nvar QNMicrophoneAudioTrack = function (_super) {\n  __extends(QNMicrophoneAudioTrack, _super);\n  function QNMicrophoneAudioTrack() {\n    return _super !== null && _super.apply(this, arguments) || this;\n  }\n  QNMicrophoneAudioTrack.prototype.setVolume = function (volume) {\n    return QNRtcTrack.setVolume(this.identifyID, volume);\n  };\n  QNMicrophoneAudioTrack.prototype.createAudioMixer = function (url) {\n    QNRtcTrack.createAudioMixer(this.identifyID, url);\n    return new RTCAudioMixer_1.QNAudioMixer(this.identifyID, url);\n  };\n  return QNMicrophoneAudioTrack;\n}(RTCLocalAudioTrack_1.QNLocalAudioTrack);\nexports.QNMicrophoneAudioTrack = QNMicrophoneAudioTrack;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/uni-app-plus-nvue/dist/require-native-plugin.js */ 66)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vanNfc2RrL1FOUlRDLVVuaVBsdWdpbi1KUy9RTlJUQy1VbmlQbHVnaW4tSlMvY2xhc3MvUlRDTWljcm9waG9uZUF1ZGlvVHJhY2suanMiXSwibmFtZXMiOlsiX19leHRlbmRzIiwiZXh0ZW5kU3RhdGljcyIsImQiLCJiIiwiT2JqZWN0Iiwic2V0UHJvdG90eXBlT2YiLCJfX3Byb3RvX18iLCJBcnJheSIsInAiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJUeXBlRXJyb3IiLCJTdHJpbmciLCJfXyIsImNvbnN0cnVjdG9yIiwiY3JlYXRlIiwiZXhwb3J0cyIsIl9fZXNNb2R1bGUiLCJRTk1pY3JvcGhvbmVBdWRpb1RyYWNrIiwiUlRDTG9jYWxBdWRpb1RyYWNrXzEiLCJyZXF1aXJlIiwiUlRDQXVkaW9NaXhlcl8xIiwiUU5SdGNUcmFjayIsInVuaSIsIl9zdXBlciIsImFwcGx5IiwiYXJndW1lbnRzIiwic2V0Vm9sdW1lIiwidm9sdW1lIiwiaWRlbnRpZnlJRCIsImNyZWF0ZUF1ZGlvTWl4ZXIiLCJ1cmwiLCJRTkF1ZGlvTWl4ZXIiLCJRTkxvY2FsQXVkaW9UcmFjayJdLCJtYXBwaW5ncyI6IkFBQUEsc0ZBQWE7QUFDYixJQUFJQSxTQUFTLEdBQUksUUFBUSxLQUFLQSxTQUFkLElBQTZCLFlBQVk7QUFDckQsTUFBSUMsY0FBYSxHQUFHLHVCQUFVQyxDQUFWLEVBQWFDLENBQWIsRUFBZ0I7QUFDaENGLGtCQUFhLEdBQUdHLE1BQU0sQ0FBQ0MsY0FBUDtBQUNYLE1BQUVDLFNBQVMsRUFBRSxFQUFiLGNBQTZCQyxLQUE3QixJQUFzQyxVQUFVTCxDQUFWLEVBQWFDLENBQWIsRUFBZ0IsQ0FBRUQsQ0FBQyxDQUFDSSxTQUFGLEdBQWNILENBQWQsQ0FBa0IsQ0FEL0Q7QUFFWixjQUFVRCxDQUFWLEVBQWFDLENBQWIsRUFBZ0IsQ0FBRSxLQUFLLElBQUlLLENBQVQsSUFBY0wsQ0FBZCxHQUFpQixJQUFJQyxNQUFNLENBQUNLLFNBQVAsQ0FBaUJDLGNBQWpCLENBQWdDQyxJQUFoQyxDQUFxQ1IsQ0FBckMsRUFBd0NLLENBQXhDLENBQUosRUFBZ0ROLENBQUMsQ0FBQ00sQ0FBRCxDQUFELEdBQU9MLENBQUMsQ0FBQ0ssQ0FBRCxDQUFSLENBQWpFLENBQStFLENBRnJHO0FBR0EsV0FBT1AsY0FBYSxDQUFDQyxDQUFELEVBQUlDLENBQUosQ0FBcEI7QUFDSCxHQUxEO0FBTUEsU0FBTyxVQUFVRCxDQUFWLEVBQWFDLENBQWIsRUFBZ0I7QUFDbkIsUUFBSSxPQUFPQSxDQUFQLEtBQWEsVUFBYixJQUEyQkEsQ0FBQyxLQUFLLElBQXJDO0FBQ0ksVUFBTSxJQUFJUyxTQUFKLENBQWMseUJBQXlCQyxNQUFNLENBQUNWLENBQUQsQ0FBL0IsR0FBcUMsK0JBQW5ELENBQU47QUFDSkYsa0JBQWEsQ0FBQ0MsQ0FBRCxFQUFJQyxDQUFKLENBQWI7QUFDQSxhQUFTVyxFQUFULEdBQWMsQ0FBRSxLQUFLQyxXQUFMLEdBQW1CYixDQUFuQixDQUF1QjtBQUN2Q0EsS0FBQyxDQUFDTyxTQUFGLEdBQWNOLENBQUMsS0FBSyxJQUFOLEdBQWFDLE1BQU0sQ0FBQ1ksTUFBUCxDQUFjYixDQUFkLENBQWIsSUFBaUNXLEVBQUUsQ0FBQ0wsU0FBSCxHQUFlTixDQUFDLENBQUNNLFNBQWpCLEVBQTRCLElBQUlLLEVBQUosRUFBN0QsQ0FBZDtBQUNILEdBTkQ7QUFPSCxDQWQyQyxFQUE1QztBQWVBRyxPQUFPLENBQUNDLFVBQVIsR0FBcUIsSUFBckI7QUFDQUQsT0FBTyxDQUFDRSxzQkFBUixHQUFpQyxLQUFLLENBQXRDO0FBQ0EsSUFBSUMsb0JBQW9CLEdBQUdDLG1CQUFPLENBQUMsK0JBQUQsQ0FBbEM7QUFDQSxJQUFJQyxlQUFlLEdBQUdELG1CQUFPLENBQUMsaUNBQUQsQ0FBN0I7QUFDQSxJQUFJRSxVQUFVLEdBQUdDLDhDQUFBLENBQXdCLDRCQUF4QixDQUFqQjtBQUNBLElBQUlMLHNCQUFzQixHQUFJLFVBQVVNLE1BQVYsRUFBa0I7QUFDNUN6QixXQUFTLENBQUNtQixzQkFBRCxFQUF5Qk0sTUFBekIsQ0FBVDtBQUNBLFdBQVNOLHNCQUFULEdBQWtDO0FBQzlCLFdBQU9NLE1BQU0sS0FBSyxJQUFYLElBQW1CQSxNQUFNLENBQUNDLEtBQVAsQ0FBYSxJQUFiLEVBQW1CQyxTQUFuQixDQUFuQixJQUFvRCxJQUEzRDtBQUNIO0FBQ0RSLHdCQUFzQixDQUFDVixTQUF2QixDQUFpQ21CLFNBQWpDLEdBQTZDLFVBQVVDLE1BQVYsRUFBa0I7QUFDM0QsV0FBT04sVUFBVSxDQUFDSyxTQUFYLENBQXFCLEtBQUtFLFVBQTFCLEVBQXNDRCxNQUF0QyxDQUFQO0FBQ0gsR0FGRDtBQUdBVix3QkFBc0IsQ0FBQ1YsU0FBdkIsQ0FBaUNzQixnQkFBakMsR0FBb0QsVUFBVUMsR0FBVixFQUFlO0FBQy9EVCxjQUFVLENBQUNRLGdCQUFYLENBQTRCLEtBQUtELFVBQWpDLEVBQTZDRSxHQUE3QztBQUNBLFdBQU8sSUFBSVYsZUFBZSxDQUFDVyxZQUFwQixDQUFpQyxLQUFLSCxVQUF0QyxFQUFrREUsR0FBbEQsQ0FBUDtBQUNILEdBSEQ7QUFJQSxTQUFPYixzQkFBUDtBQUNILENBYjZCLENBYTVCQyxvQkFBb0IsQ0FBQ2MsaUJBYk8sQ0FBOUI7QUFjQWpCLE9BQU8sQ0FBQ0Usc0JBQVIsR0FBaUNBLHNCQUFqQyxDIiwiZmlsZSI6IjEwMC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBiICE9PSBcImZ1bmN0aW9uXCIgJiYgYiAhPT0gbnVsbClcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDbGFzcyBleHRlbmRzIHZhbHVlIFwiICsgU3RyaW5nKGIpICsgXCIgaXMgbm90IGEgY29uc3RydWN0b3Igb3IgbnVsbFwiKTtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLlFOTWljcm9waG9uZUF1ZGlvVHJhY2sgPSB2b2lkIDA7XG52YXIgUlRDTG9jYWxBdWRpb1RyYWNrXzEgPSByZXF1aXJlKFwiLi9SVENMb2NhbEF1ZGlvVHJhY2tcIik7XG52YXIgUlRDQXVkaW9NaXhlcl8xID0gcmVxdWlyZShcIi4uL2NsYXNzL1JUQ0F1ZGlvTWl4ZXJcIik7XG52YXIgUU5SdGNUcmFjayA9IHVuaS5yZXF1aXJlTmF0aXZlUGx1Z2luKCdRTlJUQy1VbmlQbHVnaW4tUU5SdGNUcmFjaycpO1xudmFyIFFOTWljcm9waG9uZUF1ZGlvVHJhY2sgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhRTk1pY3JvcGhvbmVBdWRpb1RyYWNrLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIFFOTWljcm9waG9uZUF1ZGlvVHJhY2soKSB7XG4gICAgICAgIHJldHVybiBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgICB9XG4gICAgUU5NaWNyb3Bob25lQXVkaW9UcmFjay5wcm90b3R5cGUuc2V0Vm9sdW1lID0gZnVuY3Rpb24gKHZvbHVtZSkge1xuICAgICAgICByZXR1cm4gUU5SdGNUcmFjay5zZXRWb2x1bWUodGhpcy5pZGVudGlmeUlELCB2b2x1bWUpO1xuICAgIH07XG4gICAgUU5NaWNyb3Bob25lQXVkaW9UcmFjay5wcm90b3R5cGUuY3JlYXRlQXVkaW9NaXhlciA9IGZ1bmN0aW9uICh1cmwpIHtcbiAgICAgICAgUU5SdGNUcmFjay5jcmVhdGVBdWRpb01peGVyKHRoaXMuaWRlbnRpZnlJRCwgdXJsKTtcbiAgICAgICAgcmV0dXJuIG5ldyBSVENBdWRpb01peGVyXzEuUU5BdWRpb01peGVyKHRoaXMuaWRlbnRpZnlJRCwgdXJsKTtcbiAgICB9O1xuICAgIHJldHVybiBRTk1pY3JvcGhvbmVBdWRpb1RyYWNrO1xufShSVENMb2NhbEF1ZGlvVHJhY2tfMS5RTkxvY2FsQXVkaW9UcmFjaykpO1xuZXhwb3J0cy5RTk1pY3JvcGhvbmVBdWRpb1RyYWNrID0gUU5NaWNyb3Bob25lQXVkaW9UcmFjaztcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///100\n");

/***/ }),

/***/ 101:
/*!*************************************************************************************************************************!*\
  !*** /Users/tongjie/Desktop/QNRTC-Uniapp/demo/js_sdk/QNRTC-UniPlugin-JS/QNRTC-UniPlugin-JS/class/RTCLocalAudioTrack.js ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __extends = this && this.__extends || function () {\n  var _extendStatics = function extendStatics(d, b) {\n    _extendStatics = Object.setPrototypeOf ||\n    { __proto__: [] } instanceof Array && function (d, b) {d.__proto__ = b;} ||\n    function (d, b) {for (var p in b) {if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];}};\n    return _extendStatics(d, b);\n  };\n  return function (d, b) {\n    if (typeof b !== \"function\" && b !== null)\n    throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\n    _extendStatics(d, b);\n    function __() {this.constructor = d;}\n    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n  };\n}();\nexports.__esModule = true;\nexports.QNLocalAudioTrack = void 0;\nvar RTCLocalTrack_1 = __webpack_require__(/*! ./RTCLocalTrack */ 97);\nvar QNLocalAudioTrack = function (_super) {\n  __extends(QNLocalAudioTrack, _super);\n  function QNLocalAudioTrack() {\n    return _super !== null && _super.apply(this, arguments) || this;\n  }\n  return QNLocalAudioTrack;\n}(RTCLocalTrack_1.QNLocalTrack);\nexports.QNLocalAudioTrack = QNLocalAudioTrack;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vanNfc2RrL1FOUlRDLVVuaVBsdWdpbi1KUy9RTlJUQy1VbmlQbHVnaW4tSlMvY2xhc3MvUlRDTG9jYWxBdWRpb1RyYWNrLmpzIl0sIm5hbWVzIjpbIl9fZXh0ZW5kcyIsImV4dGVuZFN0YXRpY3MiLCJkIiwiYiIsIk9iamVjdCIsInNldFByb3RvdHlwZU9mIiwiX19wcm90b19fIiwiQXJyYXkiLCJwIiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwiVHlwZUVycm9yIiwiU3RyaW5nIiwiX18iLCJjb25zdHJ1Y3RvciIsImNyZWF0ZSIsImV4cG9ydHMiLCJfX2VzTW9kdWxlIiwiUU5Mb2NhbEF1ZGlvVHJhY2siLCJSVENMb2NhbFRyYWNrXzEiLCJyZXF1aXJlIiwiX3N1cGVyIiwiYXBwbHkiLCJhcmd1bWVudHMiLCJRTkxvY2FsVHJhY2siXSwibWFwcGluZ3MiOiJBQUFhO0FBQ2IsSUFBSUEsU0FBUyxHQUFJLFFBQVEsS0FBS0EsU0FBZCxJQUE2QixZQUFZO0FBQ3JELE1BQUlDLGNBQWEsR0FBRyx1QkFBVUMsQ0FBVixFQUFhQyxDQUFiLEVBQWdCO0FBQ2hDRixrQkFBYSxHQUFHRyxNQUFNLENBQUNDLGNBQVA7QUFDWCxNQUFFQyxTQUFTLEVBQUUsRUFBYixjQUE2QkMsS0FBN0IsSUFBc0MsVUFBVUwsQ0FBVixFQUFhQyxDQUFiLEVBQWdCLENBQUVELENBQUMsQ0FBQ0ksU0FBRixHQUFjSCxDQUFkLENBQWtCLENBRC9EO0FBRVosY0FBVUQsQ0FBVixFQUFhQyxDQUFiLEVBQWdCLENBQUUsS0FBSyxJQUFJSyxDQUFULElBQWNMLENBQWQsR0FBaUIsSUFBSUMsTUFBTSxDQUFDSyxTQUFQLENBQWlCQyxjQUFqQixDQUFnQ0MsSUFBaEMsQ0FBcUNSLENBQXJDLEVBQXdDSyxDQUF4QyxDQUFKLEVBQWdETixDQUFDLENBQUNNLENBQUQsQ0FBRCxHQUFPTCxDQUFDLENBQUNLLENBQUQsQ0FBUixDQUFqRSxDQUErRSxDQUZyRztBQUdBLFdBQU9QLGNBQWEsQ0FBQ0MsQ0FBRCxFQUFJQyxDQUFKLENBQXBCO0FBQ0gsR0FMRDtBQU1BLFNBQU8sVUFBVUQsQ0FBVixFQUFhQyxDQUFiLEVBQWdCO0FBQ25CLFFBQUksT0FBT0EsQ0FBUCxLQUFhLFVBQWIsSUFBMkJBLENBQUMsS0FBSyxJQUFyQztBQUNJLFVBQU0sSUFBSVMsU0FBSixDQUFjLHlCQUF5QkMsTUFBTSxDQUFDVixDQUFELENBQS9CLEdBQXFDLCtCQUFuRCxDQUFOO0FBQ0pGLGtCQUFhLENBQUNDLENBQUQsRUFBSUMsQ0FBSixDQUFiO0FBQ0EsYUFBU1csRUFBVCxHQUFjLENBQUUsS0FBS0MsV0FBTCxHQUFtQmIsQ0FBbkIsQ0FBdUI7QUFDdkNBLEtBQUMsQ0FBQ08sU0FBRixHQUFjTixDQUFDLEtBQUssSUFBTixHQUFhQyxNQUFNLENBQUNZLE1BQVAsQ0FBY2IsQ0FBZCxDQUFiLElBQWlDVyxFQUFFLENBQUNMLFNBQUgsR0FBZU4sQ0FBQyxDQUFDTSxTQUFqQixFQUE0QixJQUFJSyxFQUFKLEVBQTdELENBQWQ7QUFDSCxHQU5EO0FBT0gsQ0FkMkMsRUFBNUM7QUFlQUcsT0FBTyxDQUFDQyxVQUFSLEdBQXFCLElBQXJCO0FBQ0FELE9BQU8sQ0FBQ0UsaUJBQVIsR0FBNEIsS0FBSyxDQUFqQztBQUNBLElBQUlDLGVBQWUsR0FBR0MsbUJBQU8sQ0FBQyx5QkFBRCxDQUE3QjtBQUNBLElBQUlGLGlCQUFpQixHQUFJLFVBQVVHLE1BQVYsRUFBa0I7QUFDdkN0QixXQUFTLENBQUNtQixpQkFBRCxFQUFvQkcsTUFBcEIsQ0FBVDtBQUNBLFdBQVNILGlCQUFULEdBQTZCO0FBQ3pCLFdBQU9HLE1BQU0sS0FBSyxJQUFYLElBQW1CQSxNQUFNLENBQUNDLEtBQVAsQ0FBYSxJQUFiLEVBQW1CQyxTQUFuQixDQUFuQixJQUFvRCxJQUEzRDtBQUNIO0FBQ0QsU0FBT0wsaUJBQVA7QUFDSCxDQU53QixDQU12QkMsZUFBZSxDQUFDSyxZQU5PLENBQXpCO0FBT0FSLE9BQU8sQ0FBQ0UsaUJBQVIsR0FBNEJBLGlCQUE1QiIsImZpbGUiOiIxMDEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChiLCBwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgIH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgYiAhPT0gXCJmdW5jdGlvblwiICYmIGIgIT09IG51bGwpXG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2xhc3MgZXh0ZW5kcyB2YWx1ZSBcIiArIFN0cmluZyhiKSArIFwiIGlzIG5vdCBhIGNvbnN0cnVjdG9yIG9yIG51bGxcIik7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5RTkxvY2FsQXVkaW9UcmFjayA9IHZvaWQgMDtcbnZhciBSVENMb2NhbFRyYWNrXzEgPSByZXF1aXJlKFwiLi9SVENMb2NhbFRyYWNrXCIpO1xudmFyIFFOTG9jYWxBdWRpb1RyYWNrID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoUU5Mb2NhbEF1ZGlvVHJhY2ssIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gUU5Mb2NhbEF1ZGlvVHJhY2soKSB7XG4gICAgICAgIHJldHVybiBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgICB9XG4gICAgcmV0dXJuIFFOTG9jYWxBdWRpb1RyYWNrO1xufShSVENMb2NhbFRyYWNrXzEuUU5Mb2NhbFRyYWNrKSk7XG5leHBvcnRzLlFOTG9jYWxBdWRpb1RyYWNrID0gUU5Mb2NhbEF1ZGlvVHJhY2s7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///101\n");

/***/ }),

/***/ 102:
/*!********************************************************************************************************************!*\
  !*** /Users/tongjie/Desktop/QNRTC-Uniapp/demo/js_sdk/QNRTC-UniPlugin-JS/QNRTC-UniPlugin-JS/class/RTCAudioMixer.js ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__webpack_provided_uni_dot_requireNativePlugin) {\nexports.__esModule = true;\nexports.QNAudioMixer = void 0;\nvar QNRtcAudioMixer = __webpack_provided_uni_dot_requireNativePlugin('QNRTC-UniPlugin-QNRtcAudioMixer');\nvar QNEvent = __webpack_provided_uni_dot_requireNativePlugin('globalEvent');\nvar QNAudioMixer = function () {\n  function QNAudioMixer(identifyID, url) {\n    this.variationList = [\"onStateChanged\"];\n    this.identifyID = identifyID;\n    this.url = url;\n  }\n  QNAudioMixer.prototype.createAudioMixerCallback = function (name, listener) {\n    if (name === \"onStateChanged\") {\n      var variationCallback = function variationCallback(params) {\n        if (params.state) {\n          listener(params);\n        }\n      };\n      return variationCallback;\n    }\n  };\n  QNAudioMixer.prototype.on = function (name, listener) {\n    if (this.variationList.some(function (item) {return item === name;})) {\n      var callback = this.createAudioMixerCallback(name, listener);\n      QNEvent.addEventListener(name, callback);\n    } else\n    {\n      QNEvent.addEventListener(name, listener);\n    }\n  };\n  QNAudioMixer.prototype.off = function (name, listener) {\n    QNEvent.removeEventListener(name, listener);\n  };\n  QNAudioMixer.prototype.start = function (loopTimes) {\n    QNRtcAudioMixer.start(this.identifyID, loopTimes);\n  };\n  QNAudioMixer.prototype.stop = function () {\n    QNRtcAudioMixer.stop(this.identifyID);\n  };\n  QNAudioMixer.prototype.resume = function () {\n    QNRtcAudioMixer.resume(this.identifyID);\n  };\n  QNAudioMixer.prototype.pause = function () {\n    QNRtcAudioMixer.pause(this.identifyID);\n  };\n  QNAudioMixer.prototype.seekTo = function (timeUs) {\n    QNRtcAudioMixer.seekTo(this.identifyID, timeUs);\n  };\n  QNAudioMixer.prototype.setMixingVolume = function (microphoneVolume, musicVolume) {\n    QNRtcAudioMixer.setMixingVolume(this.identifyID, microphoneVolume, musicVolume);\n  };\n  QNAudioMixer.prototype.setPlayingVolume = function (volume) {\n    QNRtcAudioMixer.setPlayingVolume(this.identifyID, volume);\n  };\n  QNAudioMixer.prototype.getDuration = function () {\n    return QNRtcAudioMixer.getDuration(this.identifyID);\n  };\n  QNAudioMixer.prototype.getCurrentPosition = function () {\n    return QNRtcAudioMixer.getCurrentPosition(this.identifyID);\n  };\n  QNAudioMixer.prototype.setPlayBack = function (playBack) {\n    QNRtcAudioMixer.setPlayBack(this.identifyID, playBack);\n  };\n  return QNAudioMixer;\n}();\nexports.QNAudioMixer = QNAudioMixer;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/uni-app-plus-nvue/dist/require-native-plugin.js */ 66)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vanNfc2RrL1FOUlRDLVVuaVBsdWdpbi1KUy9RTlJUQy1VbmlQbHVnaW4tSlMvY2xhc3MvUlRDQXVkaW9NaXhlci5qcyJdLCJuYW1lcyI6WyJleHBvcnRzIiwiX19lc01vZHVsZSIsIlFOQXVkaW9NaXhlciIsIlFOUnRjQXVkaW9NaXhlciIsInVuaSIsIlFORXZlbnQiLCJpZGVudGlmeUlEIiwidXJsIiwidmFyaWF0aW9uTGlzdCIsInByb3RvdHlwZSIsImNyZWF0ZUF1ZGlvTWl4ZXJDYWxsYmFjayIsIm5hbWUiLCJsaXN0ZW5lciIsInZhcmlhdGlvbkNhbGxiYWNrIiwicGFyYW1zIiwic3RhdGUiLCJvbiIsInNvbWUiLCJpdGVtIiwiY2FsbGJhY2siLCJhZGRFdmVudExpc3RlbmVyIiwib2ZmIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInN0YXJ0IiwibG9vcFRpbWVzIiwic3RvcCIsInJlc3VtZSIsInBhdXNlIiwic2Vla1RvIiwidGltZVVzIiwic2V0TWl4aW5nVm9sdW1lIiwibWljcm9waG9uZVZvbHVtZSIsIm11c2ljVm9sdW1lIiwic2V0UGxheWluZ1ZvbHVtZSIsInZvbHVtZSIsImdldER1cmF0aW9uIiwiZ2V0Q3VycmVudFBvc2l0aW9uIiwic2V0UGxheUJhY2siLCJwbGF5QmFjayJdLCJtYXBwaW5ncyI6IkFBQUEsc0ZBQWE7QUFDYkEsT0FBTyxDQUFDQyxVQUFSLEdBQXFCLElBQXJCO0FBQ0FELE9BQU8sQ0FBQ0UsWUFBUixHQUF1QixLQUFLLENBQTVCO0FBQ0EsSUFBSUMsZUFBZSxHQUFHQyw4Q0FBQSxDQUF3QixpQ0FBeEIsQ0FBdEI7QUFDQSxJQUFJQyxPQUFPLEdBQUdELDhDQUFBLENBQXdCLGFBQXhCLENBQWQ7QUFDQSxJQUFJRixZQUFZLEdBQUksWUFBWTtBQUM1QixXQUFTQSxZQUFULENBQXNCSSxVQUF0QixFQUFrQ0MsR0FBbEMsRUFBdUM7QUFDbkMsU0FBS0MsYUFBTCxHQUFxQixDQUFDLGdCQUFELENBQXJCO0FB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QUZEO0FBR0FKLGNBQVksQ0FBQ08sU0FBYixDQUF1QjJCLGtCQUF2QixHQUE0QyxZQUFZO0FBQ3BELFdBQU9qQyxlQUFlLENBQUNpQyxrQkFBaEIsQ0FBbUMsS0FBSzlCLFVBQXhDLENBQVA7QUFDSCxHQUZEO0FBR0FKLGNBQVksQ0FBQ08sU0FBYixDQUF1QjRCLFdBQXZCLEdBQXFDLFVBQVVDLFFBQVYsRUFBb0I7QUFDckRuQyxtQkFBZSxDQUFDa0MsV0FBaEIsQ0FBNEIsS0FBSy9CLFVBQWpDLEVBQTZDZ0MsUUFBN0M7QUFDSCxHQUZEO0FBR0EsU0FBT3BDLFlBQVA7QUFDSCxDQTNEbUIsRUFBcEI7QUE0REFGLE9BQU8sQ0FBQ0UsWUFBUixHQUF1QkEsWUFBdkIsQyIsImZpbGUiOiIxMDIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLlFOQXVkaW9NaXhlciA9IHZvaWQgMDtcbnZhciBRTlJ0Y0F1ZGlvTWl4ZXIgPSB1bmkucmVxdWlyZU5hdGl2ZVBsdWdpbignUU5SVEMtVW5pUGx1Z2luLVFOUnRjQXVkaW9NaXhlcicpO1xudmFyIFFORXZlbnQgPSB1bmkucmVxdWlyZU5hdGl2ZVBsdWdpbignZ2xvYmFsRXZlbnQnKTtcbnZhciBRTkF1ZGlvTWl4ZXIgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFFOQXVkaW9NaXhlcihpZGVudGlmeUlELCB1cmwpIHtcbiAgICAgICAgdGhpcy52YXJpYXRpb25MaXN0ID0gW1wib25TdGF0ZUNoYW5nZWRcIl07XG4gICAgICAgIHRoaXMuaWRlbnRpZnlJRCA9IGlkZW50aWZ5SUQ7XG4gICAgICAgIHRoaXMudXJsID0gdXJsO1xuICAgIH1cbiAgICBRTkF1ZGlvTWl4ZXIucHJvdG90eXBlLmNyZWF0ZUF1ZGlvTWl4ZXJDYWxsYmFjayA9IGZ1bmN0aW9uIChuYW1lLCBsaXN0ZW5lcikge1xuICAgICAgICBpZiAobmFtZSA9PT0gXCJvblN0YXRlQ2hhbmdlZFwiKSB7XG4gICAgICAgICAgICB2YXIgdmFyaWF0aW9uQ2FsbGJhY2sgPSBmdW5jdGlvbiAocGFyYW1zKSB7XG4gICAgICAgICAgICAgICAgaWYgKHBhcmFtcy5zdGF0ZSkge1xuICAgICAgICAgICAgICAgICAgICBsaXN0ZW5lcihwYXJhbXMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICByZXR1cm4gdmFyaWF0aW9uQ2FsbGJhY2s7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFFOQXVkaW9NaXhlci5wcm90b3R5cGUub24gPSBmdW5jdGlvbiAobmFtZSwgbGlzdGVuZXIpIHtcbiAgICAgICAgaWYgKHRoaXMudmFyaWF0aW9uTGlzdC5zb21lKGZ1bmN0aW9uIChpdGVtKSB7IHJldHVybiBpdGVtID09PSBuYW1lOyB9KSkge1xuICAgICAgICAgICAgdmFyIGNhbGxiYWNrID0gdGhpcy5jcmVhdGVBdWRpb01peGVyQ2FsbGJhY2sobmFtZSwgbGlzdGVuZXIpO1xuICAgICAgICAgICAgUU5FdmVudC5hZGRFdmVudExpc3RlbmVyKG5hbWUsIGNhbGxiYWNrKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIFFORXZlbnQuYWRkRXZlbnRMaXN0ZW5lcihuYW1lLCBsaXN0ZW5lcik7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFFOQXVkaW9NaXhlci5wcm90b3R5cGUub2ZmID0gZnVuY3Rpb24gKG5hbWUsIGxpc3RlbmVyKSB7XG4gICAgICAgIFFORXZlbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihuYW1lLCBsaXN0ZW5lcik7XG4gICAgfTtcbiAgICBRTkF1ZGlvTWl4ZXIucHJvdG90eXBlLnN0YXJ0ID0gZnVuY3Rpb24gKGxvb3BUaW1lcykge1xuICAgICAgICBRTlJ0Y0F1ZGlvTWl4ZXIuc3RhcnQodGhpcy5pZGVudGlmeUlELCBsb29wVGltZXMpO1xuICAgIH07XG4gICAgUU5BdWRpb01peGVyLnByb3RvdHlwZS5zdG9wID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBRTlJ0Y0F1ZGlvTWl4ZXIuc3RvcCh0aGlzLmlkZW50aWZ5SUQpO1xuICAgIH07XG4gICAgUU5BdWRpb01peGVyLnByb3RvdHlwZS5yZXN1bWUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIFFOUnRjQXVkaW9NaXhlci5yZXN1bWUodGhpcy5pZGVudGlmeUlEKTtcbiAgICB9O1xuICAgIFFOQXVkaW9NaXhlci5wcm90b3R5cGUucGF1c2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIFFOUnRjQXVkaW9NaXhlci5wYXVzZSh0aGlzLmlkZW50aWZ5SUQpO1xuICAgIH07XG4gICAgUU5BdWRpb01peGVyLnByb3RvdHlwZS5zZWVrVG8gPSBmdW5jdGlvbiAodGltZVVzKSB7XG4gICAgICAgIFFOUnRjQXVkaW9NaXhlci5zZWVrVG8odGhpcy5pZGVudGlmeUlELCB0aW1lVXMpO1xuICAgIH07XG4gICAgUU5BdWRpb01peGVyLnByb3RvdHlwZS5zZXRNaXhpbmdWb2x1bWUgPSBmdW5jdGlvbiAobWljcm9waG9uZVZvbHVtZSwgbXVzaWNWb2x1bWUpIHtcbiAgICAgICAgUU5SdGNBdWRpb01peGVyLnNldE1peGluZ1ZvbHVtZSh0aGlzLmlkZW50aWZ5SUQsIG1pY3JvcGhvbmVWb2x1bWUsIG11c2ljVm9sdW1lKTtcbiAgICB9O1xuICAgIFFOQXVkaW9NaXhlci5wcm90b3R5cGUuc2V0UGxheWluZ1ZvbHVtZSA9IGZ1bmN0aW9uICh2b2x1bWUpIHtcbiAgICAgICAgUU5SdGNBdWRpb01peGVyLnNldFBsYXlpbmdWb2x1bWUodGhpcy5pZGVudGlmeUlELCB2b2x1bWUpO1xuICAgIH07XG4gICAgUU5BdWRpb01peGVyLnByb3RvdHlwZS5nZXREdXJhdGlvbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIFFOUnRjQXVkaW9NaXhlci5nZXREdXJhdGlvbih0aGlzLmlkZW50aWZ5SUQpO1xuICAgIH07XG4gICAgUU5BdWRpb01peGVyLnByb3RvdHlwZS5nZXRDdXJyZW50UG9zaXRpb24gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBRTlJ0Y0F1ZGlvTWl4ZXIuZ2V0Q3VycmVudFBvc2l0aW9uKHRoaXMuaWRlbnRpZnlJRCk7XG4gICAgfTtcbiAgICBRTkF1ZGlvTWl4ZXIucHJvdG90eXBlLnNldFBsYXlCYWNrID0gZnVuY3Rpb24gKHBsYXlCYWNrKSB7XG4gICAgICAgIFFOUnRjQXVkaW9NaXhlci5zZXRQbGF5QmFjayh0aGlzLmlkZW50aWZ5SUQsIHBsYXlCYWNrKTtcbiAgICB9O1xuICAgIHJldHVybiBRTkF1ZGlvTWl4ZXI7XG59KCkpO1xuZXhwb3J0cy5RTkF1ZGlvTWl4ZXIgPSBRTkF1ZGlvTWl4ZXI7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///102\n");

/***/ }),

/***/ 103:
/*!**************************************************************************************************************************!*\
  !*** /Users/tongjie/Desktop/QNRTC-Uniapp/demo/js_sdk/QNRTC-UniPlugin-JS/QNRTC-UniPlugin-JS/class/RTCScreenVideoTrack.js ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__webpack_provided_uni_dot_requireNativePlugin) {\nvar __extends = this && this.__extends || function () {\n  var _extendStatics = function extendStatics(d, b) {\n    _extendStatics = Object.setPrototypeOf ||\n    { __proto__: [] } instanceof Array && function (d, b) {d.__proto__ = b;} ||\n    function (d, b) {for (var p in b) {if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];}};\n    return _extendStatics(d, b);\n  };\n  return function (d, b) {\n    if (typeof b !== \"function\" && b !== null)\n    throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\n    _extendStatics(d, b);\n    function __() {this.constructor = d;}\n    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n  };\n}();\nexports.__esModule = true;\nexports.QNScreenVideoTrack = void 0;\nvar RTCLocalVideoTrack_1 = __webpack_require__(/*! ./RTCLocalVideoTrack */ 99);\nvar QNRtcTrack = __webpack_provided_uni_dot_requireNativePlugin('QNRTC-UniPlugin-QNRtcTrack');\nvar QNScreenVideoTrack = function (_super) {\n  __extends(QNScreenVideoTrack, _super);\n  function QNScreenVideoTrack() {\n    return _super !== null && _super.apply(this, arguments) || this;\n  }\n  QNScreenVideoTrack.prototype.setScreenRecorderFrameRate = function (screenRecorderFrameRate) {\n    return QNRtcTrack.setScreenRecorderFrameRate(this.identifyID, screenRecorderFrameRate);\n  };\n  return QNScreenVideoTrack;\n}(RTCLocalVideoTrack_1.QNLocalVideoTrack);\nexports.QNScreenVideoTrack = QNScreenVideoTrack;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/uni-app-plus-nvue/dist/require-native-plugin.js */ 66)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vanNfc2RrL1FOUlRDLVVuaVBsdWdpbi1KUy9RTlJUQy1VbmlQbHVnaW4tSlMvY2xhc3MvUlRDU2NyZWVuVmlkZW9UcmFjay5qcyJdLCJuYW1lcyI6WyJfX2V4dGVuZHMiLCJleHRlbmRTdGF0aWNzIiwiZCIsImIiLCJPYmplY3QiLCJzZXRQcm90b3R5cGVPZiIsIl9fcHJvdG9fXyIsIkFycmF5IiwicCIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsIlR5cGVFcnJvciIsIlN0cmluZyIsIl9fIiwiY29uc3RydWN0b3IiLCJjcmVhdGUiLCJleHBvcnRzIiwiX19lc01vZHVsZSIsIlFOU2NyZWVuVmlkZW9UcmFjayIsIlJUQ0xvY2FsVmlkZW9UcmFja18xIiwicmVxdWlyZSIsIlFOUnRjVHJhY2siLCJ1bmkiLCJfc3VwZXIiLCJhcHBseSIsImFyZ3VtZW50cyIsInNldFNjcmVlblJlY29yZGVyRnJhbWVSYXRlIiwic2NyZWVuUmVjb3JkZXJGcmFtZVJhdGUiLCJpZGVudGlmeUlEIiwiUU5Mb2NhbFZpZGVvVHJhY2siXSwibWFwcGluZ3MiOiJBQUFBLHNGQUFhO0FBQ2IsSUFBSUEsU0FBUyxHQUFJLFFBQVEsS0FBS0EsU0FBZCxJQUE2QixZQUFZO0FBQ3JELE1BQUlDLGNBQWEsR0FBRyx1QkFBVUMsQ0FBVixFQUFhQyxDQUFiLEVBQWdCO0FBQ2hDRixrQkFBYSxHQUFHRyxNQUFNLENBQUNDLGNBQVA7QUFDWCxNQUFFQyxTQUFTLEVBQUUsRUFBYixjQUE2QkMsS0FBN0IsSUFBc0MsVUFBVUwsQ0FBVixFQUFhQyxDQUFiLEVBQWdCLENBQUVELENBQUMsQ0FBQ0ksU0FBRixHQUFjSCxDQUFkLENBQWtCLENBRC9EO0FBRVosY0FBVUQsQ0FBVixFQUFhQyxDQUFiLEVBQWdCLENBQUUsS0FBSyxJQUFJSyxDQUFULElBQWNMLENBQWQsR0FBaUIsSUFBSUMsTUFBTSxDQUFDSyxTQUFQLENBQWlCQyxjQUFqQixDQUFnQ0MsSUFBaEMsQ0FBcUNSLENBQXJDLEVBQXdDSyxDQUF4QyxDQUFKLEVBQWdETixDQUFDLENBQUNNLENBQUQsQ0FBRCxHQUFPTCxDQUFDLENBQUNLLENBQUQsQ0FBUixDQUFqRSxDQUErRSxDQUZyRztBQUdBLFdBQU9QLGNBQWEsQ0FBQ0MsQ0FBRCxFQUFJQyxDQUFKLENBQXBCO0FBQ0gsR0FMRDtBQU1BLFNBQU8sVUFBVUQsQ0FBVixFQUFhQyxDQUFiLEVBQWdCO0FBQ25CLFFBQUksT0FBT0EsQ0FBUCxLQUFhLFVBQWIsSUFBMkJBLENBQUMsS0FBSyxJQUFyQztBQUNJLFVBQU0sSUFBSVMsU0FBSixDQUFjLHlCQUF5QkMsTUFBTSxDQUFDVixDQUFELENBQS9CLEdBQXFDLCtCQUFuRCxDQUFOO0FBQ0pGLGtCQUFhLENBQUNDLENBQUQsRUFBSUMsQ0FBSixDQUFiO0FBQ0EsYUFBU1csRUFBVCxHQUFjLENBQUUsS0FBS0MsV0FBTCxHQUFtQmIsQ0FBbkIsQ0FBdUI7QUFDdkNBLEtBQUMsQ0FBQ08sU0FBRixHQUFjTixDQUFDLEtBQUssSUFBTixHQUFhQyxNQUFNLENBQUNZLE1BQVAsQ0FBY2IsQ0FBZCxDQUFiLElBQWlDVyxFQUFFLENBQUNMLFNBQUgsR0FBZU4sQ0FBQyxDQUFDTSxTQUFqQixFQUE0QixJQUFJSyxFQUFKLEVBQTdELENBQWQ7QUFDSCxHQU5EO0FBT0gsQ0FkMkMsRUFBNUM7QUFlQUcsT0FBTyxDQUFDQyxVQUFSLEdBQXFCLElBQXJCO0FBQ0FELE9BQU8sQ0FBQ0Usa0JBQVIsR0FBNkIsS0FBSyxDQUFsQztBQUNBLElBQUlDLG9CQUFvQixHQUFHQyxtQkFBTyxDQUFDLDhCQUFELENBQWxDO0FBQ0EsSUFBSUMsVUFBVSxHQUFHQyw4Q0FBQSxDQUF3Qiw0QkFBeEIsQ0FBakI7QUFDQSxJQUFJSixrQkFBa0IsR0FBSSxVQUFVSyxNQUFWLEVBQWtCO0FBQ3hDeEIsV0FBUyxDQUFDbUIsa0JBQUQsRUFBcUJLLE1BQXJCLENBQVQ7QUFDQSxXQUFTTCxrQkFBVCxHQUE4QjtBQUMxQixXQUFPSyxNQUFNLEtBQUssSUFBWCxJQUFtQkEsTUFBTSxDQUFDQyxLQUFQLENBQWEsSUFBYixFQUFtQkMsU0FBbkIsQ0FBbkIsSUFBb0QsSUFBM0Q7QUFDSDtBQUNEUCxvQkFBa0IsQ0FBQ1YsU0FBbkIsQ0FBNkJrQiwwQkFBN0IsR0FBMEQsVUFBVUMsdUJBQVYsRUFBbUM7QUFDekYsV0FBT04sVUFBVSxDQUFDSywwQkFBWCxDQUFzQyxLQUFLRSxVQUEzQyxFQUF1REQsdUJBQXZELENBQVA7QUFDSCxHQUZEO0FBR0EsU0FBT1Qsa0JBQVA7QUFDSCxDQVR5QixDQVN4QkMsb0JBQW9CLENBQUNVLGlCQVRHLENBQTFCO0FBVUFiLE9BQU8sQ0FBQ0Usa0JBQVIsR0FBNkJBLGtCQUE3QixDIiwiZmlsZSI6IjEwMy5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBiICE9PSBcImZ1bmN0aW9uXCIgJiYgYiAhPT0gbnVsbClcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDbGFzcyBleHRlbmRzIHZhbHVlIFwiICsgU3RyaW5nKGIpICsgXCIgaXMgbm90IGEgY29uc3RydWN0b3Igb3IgbnVsbFwiKTtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLlFOU2NyZWVuVmlkZW9UcmFjayA9IHZvaWQgMDtcbnZhciBSVENMb2NhbFZpZGVvVHJhY2tfMSA9IHJlcXVpcmUoXCIuL1JUQ0xvY2FsVmlkZW9UcmFja1wiKTtcbnZhciBRTlJ0Y1RyYWNrID0gdW5pLnJlcXVpcmVOYXRpdmVQbHVnaW4oJ1FOUlRDLVVuaVBsdWdpbi1RTlJ0Y1RyYWNrJyk7XG52YXIgUU5TY3JlZW5WaWRlb1RyYWNrID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoUU5TY3JlZW5WaWRlb1RyYWNrLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIFFOU2NyZWVuVmlkZW9UcmFjaygpIHtcbiAgICAgICAgcmV0dXJuIF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICAgIH1cbiAgICBRTlNjcmVlblZpZGVvVHJhY2sucHJvdG90eXBlLnNldFNjcmVlblJlY29yZGVyRnJhbWVSYXRlID0gZnVuY3Rpb24gKHNjcmVlblJlY29yZGVyRnJhbWVSYXRlKSB7XG4gICAgICAgIHJldHVybiBRTlJ0Y1RyYWNrLnNldFNjcmVlblJlY29yZGVyRnJhbWVSYXRlKHRoaXMuaWRlbnRpZnlJRCwgc2NyZWVuUmVjb3JkZXJGcmFtZVJhdGUpO1xuICAgIH07XG4gICAgcmV0dXJuIFFOU2NyZWVuVmlkZW9UcmFjaztcbn0oUlRDTG9jYWxWaWRlb1RyYWNrXzEuUU5Mb2NhbFZpZGVvVHJhY2spKTtcbmV4cG9ydHMuUU5TY3JlZW5WaWRlb1RyYWNrID0gUU5TY3JlZW5WaWRlb1RyYWNrO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///103\n");

/***/ }),

/***/ 104:
/*!***********************************************************************************************************************!*\
  !*** /Users/tongjie/Desktop/QNRTC-Uniapp/demo/js_sdk/QNRTC-UniPlugin-JS/QNRTC-UniPlugin-JS/interface/RTCInterface.js ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {\n  if (k2 === undefined) k2 = k;\n  Object.defineProperty(o, k2, { enumerable: true, get: function get() {return m[k];} });\n} : function (o, m, k, k2) {\n  if (k2 === undefined) k2 = k;\n  o[k2] = m[k];\n});\nvar __exportStar = this && this.__exportStar || function (m, exports) {\n  for (var p in m) {if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);}\n};\nexports.__esModule = true;\n__exportStar(__webpack_require__(/*! ../enum/RTCEnum */ 91), exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vanNfc2RrL1FOUlRDLVVuaVBsdWdpbi1KUy9RTlJUQy1VbmlQbHVnaW4tSlMvaW50ZXJmYWNlL1JUQ0ludGVyZmFjZS5qcyJdLCJuYW1lcyI6WyJfX2NyZWF0ZUJpbmRpbmciLCJPYmplY3QiLCJjcmVhdGUiLCJvIiwibSIsImsiLCJrMiIsInVuZGVmaW5lZCIsImRlZmluZVByb3BlcnR5IiwiZW51bWVyYWJsZSIsImdldCIsIl9fZXhwb3J0U3RhciIsImV4cG9ydHMiLCJwIiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwiX19lc01vZHVsZSIsInJlcXVpcmUiXSwibWFwcGluZ3MiOiJBQUFhO0FBQ2IsSUFBSUEsZUFBZSxHQUFJLFFBQVEsS0FBS0EsZUFBZCxLQUFtQ0MsTUFBTSxDQUFDQyxNQUFQLEdBQWlCLFVBQVNDLENBQVQsRUFBWUMsQ0FBWixFQUFlQyxDQUFmLEVBQWtCQyxFQUFsQixFQUFzQjtBQUM1RixNQUFJQSxFQUFFLEtBQUtDLFNBQVgsRUFBc0JELEVBQUUsR0FBR0QsQ0FBTDtBQUN0QkosUUFBTSxDQUFDTyxjQUFQLENBQXNCTCxDQUF0QixFQUF5QkcsRUFBekIsRUFBNkIsRUFBRUcsVUFBVSxFQUFFLElBQWQsRUFBb0JDLEdBQUcsRUFBRSxlQUFXLENBQUUsT0FBT04sQ0FBQyxDQUFDQyxDQUFELENBQVIsQ0FBYyxDQUFwRCxFQUE3QjtBQUNILENBSHdELEdBR25ELFVBQVNGLENBQVQsRUFBWUMsQ0FBWixFQUFlQyxDQUFmLEVBQWtCQyxFQUFsQixFQUFzQjtBQUN4QixNQUFJQSxFQUFFLEtBQUtDLFNBQVgsRUFBc0JELEVBQUUsR0FBR0QsQ0FBTDtBQUN0QkYsR0FBQyxDQUFDRyxFQUFELENBQUQsR0FBUUYsQ0FBQyxDQUFDQyxDQUFELENBQVQ7QUFDSCxDQU5xQixDQUF0QjtBQU9BLElBQUlNLFlBQVksR0FBSSxRQUFRLEtBQUtBLFlBQWQsSUFBK0IsVUFBU1AsQ0FBVCxFQUFZUSxPQUFaLEVBQXFCO0FBQ25FLE9BQUssSUFBSUMsQ0FBVCxJQUFjVCxDQUFkLEdBQWlCLElBQUlTLENBQUMsS0FBSyxTQUFOLElBQW1CLENBQUNaLE1BQU0sQ0FBQ2EsU0FBUCxDQUFpQkMsY0FBakIsQ0FBZ0NDLElBQWhDLENBQXFDSixPQUFyQyxFQUE4Q0MsQ0FBOUMsQ0FBeEIsRUFBMEViLGVBQWUsQ0FBQ1ksT0FBRCxFQUFVUixDQUFWLEVBQWFTLENBQWIsQ0FBZixDQUEzRjtBQUNILENBRkQ7QUFHQUQsT0FBTyxDQUFDSyxVQUFSLEdBQXFCLElBQXJCO0FBQ0FOLFlBQVksQ0FBQ08sbUJBQU8sQ0FBQyx5QkFBRCxDQUFSLEVBQTZCTixPQUE3QixDQUFaIiwiZmlsZSI6IjEwNC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xudmFyIF9fY3JlYXRlQmluZGluZyA9ICh0aGlzICYmIHRoaXMuX19jcmVhdGVCaW5kaW5nKSB8fCAoT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIGsyLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24oKSB7IHJldHVybiBtW2tdOyB9IH0pO1xufSkgOiAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xuICAgIG9bazJdID0gbVtrXTtcbn0pKTtcbnZhciBfX2V4cG9ydFN0YXIgPSAodGhpcyAmJiB0aGlzLl9fZXhwb3J0U3RhcikgfHwgZnVuY3Rpb24obSwgZXhwb3J0cykge1xuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKHAgIT09IFwiZGVmYXVsdFwiICYmICFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoZXhwb3J0cywgcCkpIF9fY3JlYXRlQmluZGluZyhleHBvcnRzLCBtLCBwKTtcbn07XG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuX19leHBvcnRTdGFyKHJlcXVpcmUoXCIuLi9lbnVtL1JUQ0VudW1cIiksIGV4cG9ydHMpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///104\n");

/***/ }),

/***/ 105:
/*!*********************************************************************************************************!*\
  !*** /Users/tongjie/Desktop/QNRTC-Uniapp/demo/js_sdk/QNRTC-UniPlugin-JS/QNRTC-UniPlugin-JS/RTCEvent.js ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nexports.__esModule = true;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vanNfc2RrL1FOUlRDLVVuaVBsdWdpbi1KUy9RTlJUQy1VbmlQbHVnaW4tSlMvUlRDRXZlbnQuanMiXSwibmFtZXMiOlsiZXhwb3J0cyIsIl9fZXNNb2R1bGUiXSwibWFwcGluZ3MiOiJBQUFhO0FBQ2JBLE9BQU8sQ0FBQ0MsVUFBUixHQUFxQixJQUFyQiIsImZpbGUiOiIxMDUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///105\n");

/***/ }),

/***/ 180:
/*!*****************************************************************************************!*\
  !*** /Users/tongjie/Desktop/QNRTC-Uniapp/demo/main.js?{"page":"pages%2Findex%2Findex"} ***!
  \*****************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var uni_app_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uni-app-style */ 1);\n/* harmony import */ var uni_app_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uni_app_style__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var uni_polyfill__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! uni-polyfill */ 4);\n/* harmony import */ var uni_polyfill__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(uni_polyfill__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _pages_index_index_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/index/index.nvue?mpType=page */ 181);\n\n        \n        \n        \n        \n        _pages_index_index_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__[\"default\"].mpType = 'page'\n        _pages_index_index_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__[\"default\"].route = 'pages/index/index'\n        _pages_index_index_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__[\"default\"].el = '#root'\n        new Vue(_pages_index_index_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__[\"default\"])\n        //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBRUEsUUFBOEI7QUFDOUIsUUFBNkI7QUFDN0IsUUFBOEQ7QUFDOUQsUUFBUSwyRUFBRztBQUNYLFFBQVEsMkVBQUc7QUFDWCxRQUFRLDJFQUFHO0FBQ1gsZ0JBQWdCLDJFQUFHIiwiZmlsZSI6IjE4MC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgICAgICBcbiAgICAgICAgaW1wb3J0ICd1bmktYXBwLXN0eWxlJ1xuICAgICAgICBpbXBvcnQgJ3VuaS1wb2x5ZmlsbCdcbiAgICAgICAgaW1wb3J0IEFwcCBmcm9tICcuL3BhZ2VzL2luZGV4L2luZGV4Lm52dWU/bXBUeXBlPXBhZ2UnXG4gICAgICAgIEFwcC5tcFR5cGUgPSAncGFnZSdcbiAgICAgICAgQXBwLnJvdXRlID0gJ3BhZ2VzL2luZGV4L2luZGV4J1xuICAgICAgICBBcHAuZWwgPSAnI3Jvb3QnXG4gICAgICAgIG5ldyBWdWUoQXBwKVxuICAgICAgICAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///180\n");

/***/ }),

/***/ 181:
/*!***********************************************************************************!*\
  !*** /Users/tongjie/Desktop/QNRTC-Uniapp/demo/pages/index/index.nvue?mpType=page ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_nvue_vue_type_template_id_7b909402_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.nvue?vue&type=template&id=7b909402&mpType=page */ 182);\n/* harmony import */ var _index_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.nvue?vue&type=script&lang=js&mpType=page */ 191);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 19);\n\nvar renderjs\n\n\nfunction injectStyles (context) {\n  \n  if(!this.options.style){\n          this.options.style = {}\n      }\n      if(Vue.prototype.__merge_style && Vue.prototype.__$appStyle__){\n        Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style)\n      }\n      if(Vue.prototype.__merge_style){\n                Vue.prototype.__merge_style(__webpack_require__(/*! ./index.nvue?vue&type=style&index=0&lang=css&mpType=page */ 193).default, this.options.style)\n            }else{\n                Object.assign(this.options.style,__webpack_require__(/*! ./index.nvue?vue&type=style&index=0&lang=css&mpType=page */ 193).default)\n            }\n\n}\n\n/* normalize component */\n\nvar component = Object(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _index_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _index_nvue_vue_type_template_id_7b909402_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _index_nvue_vue_type_template_id_7b909402_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  \"13e07eb8\",\n  false,\n  _index_nvue_vue_type_template_id_7b909402_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ninjectStyles.call(component)\ncomponent.options.__file = \"pages/index/index.nvue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBOEg7QUFDOUg7QUFDcUU7QUFDTDtBQUNoRTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxtQkFBTyxDQUFDLG1FQUEwRDtBQUM5RyxhQUFhO0FBQ2IsaURBQWlELG1CQUFPLENBQUMsbUVBQTBEO0FBQ25IOztBQUVBOztBQUVBO0FBQ2dOO0FBQ2hOLGdCQUFnQixpTkFBVTtBQUMxQixFQUFFLHVGQUFNO0FBQ1IsRUFBRSw0RkFBTTtBQUNSLEVBQUUscUdBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsZ0dBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDZSxnRiIsImZpbGUiOiIxODEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IGZyb20gXCIuL2luZGV4Lm52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9N2I5MDk0MDImbXBUeXBlPXBhZ2VcIlxudmFyIHJlbmRlcmpzXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL2luZGV4Lm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIlxuZXhwb3J0ICogZnJvbSBcIi4vaW5kZXgubnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiXG5mdW5jdGlvbiBpbmplY3RTdHlsZXMgKGNvbnRleHQpIHtcbiAgXG4gIGlmKCF0aGlzLm9wdGlvbnMuc3R5bGUpe1xuICAgICAgICAgIHRoaXMub3B0aW9ucy5zdHlsZSA9IHt9XG4gICAgICB9XG4gICAgICBpZihWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUgJiYgVnVlLnByb3RvdHlwZS5fXyRhcHBTdHlsZV9fKXtcbiAgICAgICAgVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlKFZ1ZS5wcm90b3R5cGUuX18kYXBwU3R5bGVfXywgdGhpcy5vcHRpb25zLnN0eWxlKVxuICAgICAgfVxuICAgICAgaWYoVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlKXtcbiAgICAgICAgICAgICAgICBWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUocmVxdWlyZShcIi4vaW5kZXgubnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJm1wVHlwZT1wYWdlXCIpLmRlZmF1bHQsIHRoaXMub3B0aW9ucy5zdHlsZSlcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24odGhpcy5vcHRpb25zLnN0eWxlLHJlcXVpcmUoXCIuL2luZGV4Lm52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZtcFR5cGU9cGFnZVwiKS5kZWZhdWx0KVxuICAgICAgICAgICAgfVxuXG59XG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBcIjEzZTA3ZWI4XCIsXG4gIGZhbHNlLFxuICBjb21wb25lbnRzLFxuICByZW5kZXJqc1xuKVxuXG5pbmplY3RTdHlsZXMuY2FsbChjb21wb25lbnQpXG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInBhZ2VzL2luZGV4L2luZGV4Lm52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///181\n");

/***/ }),

/***/ 182:
/*!*****************************************************************************************************************!*\
  !*** /Users/tongjie/Desktop/QNRTC-Uniapp/demo/pages/index/index.nvue?vue&type=template&id=7b909402&mpType=page ***!
  \*****************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_template_id_7b909402_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.js!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-0!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./index.nvue?vue&type=template&id=7b909402&mpType=page */ 183);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_template_id_7b909402_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_template_id_7b909402_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_template_id_7b909402_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_template_id_7b909402_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 183:
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
    uniFab: __webpack_require__(/*! @/uni_modules/uni-fab/components/uni-fab/uni-fab.vue */ 184)
      .default
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
var render = function() {
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
        bubble: "true"
      }
    },
    [
      _c(
        "div",
        { staticClass: ["wrap"] },
        [
          _c("uni-fab", {
            attrs: { horizontal: "right", content: _vm.content },
            on: { trigger: _vm.handleChooseItem }
          }),
          _c(
            "view",
            { staticClass: ["margin-top-sm"] },
            [
              _c(
                "button",
                {
                  attrs: { type: "primary" },
                  on: { click: _vm.routeGroupToGroup }
                },
                [_vm._v("多人通讯")]
              )
            ],
            1
          ),
          _c(
            "view",
            { staticClass: ["margin-top-sm"] },
            [
              _c(
                "button",
                {
                  staticClass: ["margin-top-sm"],
                  attrs: { type: "primary" },
                  on: { click: _vm.routeLiveStreamingDirect }
                },
                [_vm._v("单路转推配置")]
              )
            ],
            1
          ),
          _c(
            "view",
            { staticClass: ["margin-top-sm"] },
            [
              _c(
                "button",
                {
                  staticClass: ["margin-top-sm"],
                  attrs: { type: "primary" },
                  on: { click: _vm.routeLiveStreamingTranscoding }
                },
                [_vm._v("合流配置")]
              )
            ],
            1
          ),
          _c(
            "view",
            { staticClass: ["margin-top-sm"] },
            [
              _c(
                "button",
                {
                  staticClass: ["margin-top-sm"],
                  attrs: { type: "primary" },
                  on: { click: _vm.routeTrackSetting }
                },
                [_vm._v("track设置")]
              )
            ],
            1
          ),
          _c(
            "view",
            { staticClass: ["margin-top-sm"] },
            [
              _c(
                "button",
                {
                  staticClass: ["margin-top-sm"],
                  attrs: { type: "primary" },
                  on: { click: _vm.routeAudioMixer }
                },
                [_vm._v("混音设置")]
              )
            ],
            1
          )
        ],
        1
      )
    ]
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 184:
/*!***************************************************************************************************!*\
  !*** /Users/tongjie/Desktop/QNRTC-Uniapp/demo/uni_modules/uni-fab/components/uni-fab/uni-fab.vue ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _uni_fab_vue_vue_type_template_id_7d5a6316_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./uni-fab.vue?vue&type=template&id=7d5a6316&scoped=true& */ 185);\n/* harmony import */ var _uni_fab_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./uni-fab.vue?vue&type=script&lang=js& */ 187);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _uni_fab_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _uni_fab_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 19);\n\nvar renderjs\n\n\nfunction injectStyles (context) {\n  \n  if(!this.options.style){\n          this.options.style = {}\n      }\n      if(Vue.prototype.__merge_style && Vue.prototype.__$appStyle__){\n        Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style)\n      }\n      if(Vue.prototype.__merge_style){\n                Vue.prototype.__merge_style(__webpack_require__(/*! ./uni-fab.vue?vue&type=style&index=0&id=7d5a6316&lang=scss&scoped=true& */ 189).default, this.options.style)\n            }else{\n                Object.assign(this.options.style,__webpack_require__(/*! ./uni-fab.vue?vue&type=style&index=0&id=7d5a6316&lang=scss&scoped=true& */ 189).default)\n            }\n\n}\n\n/* normalize component */\n\nvar component = Object(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _uni_fab_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _uni_fab_vue_vue_type_template_id_7d5a6316_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _uni_fab_vue_vue_type_template_id_7d5a6316_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"7d5a6316\",\n  \"57800bb8\",\n  false,\n  _uni_fab_vue_vue_type_template_id_7d5a6316_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ninjectStyles.call(component)\ncomponent.options.__file = \"uni_modules/uni-fab/components/uni-fab/uni-fab.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBZ0k7QUFDaEk7QUFDMkQ7QUFDTDtBQUN0RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxtQkFBTyxDQUFDLGtGQUF5RTtBQUM3SCxhQUFhO0FBQ2IsaURBQWlELG1CQUFPLENBQUMsa0ZBQXlFO0FBQ2xJOztBQUVBOztBQUVBO0FBQ3NOO0FBQ3ROLGdCQUFnQixpTkFBVTtBQUMxQixFQUFFLDZFQUFNO0FBQ1IsRUFBRSw4RkFBTTtBQUNSLEVBQUUsdUdBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsa0dBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDZSxnRiIsImZpbGUiOiIxODQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IGZyb20gXCIuL3VuaS1mYWIudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTdkNWE2MzE2JnNjb3BlZD10cnVlJlwiXG52YXIgcmVuZGVyanNcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vdW5pLWZhYi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL3VuaS1mYWIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5mdW5jdGlvbiBpbmplY3RTdHlsZXMgKGNvbnRleHQpIHtcbiAgXG4gIGlmKCF0aGlzLm9wdGlvbnMuc3R5bGUpe1xuICAgICAgICAgIHRoaXMub3B0aW9ucy5zdHlsZSA9IHt9XG4gICAgICB9XG4gICAgICBpZihWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUgJiYgVnVlLnByb3RvdHlwZS5fXyRhcHBTdHlsZV9fKXtcbiAgICAgICAgVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlKFZ1ZS5wcm90b3R5cGUuX18kYXBwU3R5bGVfXywgdGhpcy5vcHRpb25zLnN0eWxlKVxuICAgICAgfVxuICAgICAgaWYoVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlKXtcbiAgICAgICAgICAgICAgICBWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUocmVxdWlyZShcIi4vdW5pLWZhYi52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD03ZDVhNjMxNiZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIpLmRlZmF1bHQsIHRoaXMub3B0aW9ucy5zdHlsZSlcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24odGhpcy5vcHRpb25zLnN0eWxlLHJlcXVpcmUoXCIuL3VuaS1mYWIudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9N2Q1YTYzMTYmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiKS5kZWZhdWx0KVxuICAgICAgICAgICAgfVxuXG59XG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcIjdkNWE2MzE2XCIsXG4gIFwiNTc4MDBiYjhcIixcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmluamVjdFN0eWxlcy5jYWxsKGNvbXBvbmVudClcbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwidW5pX21vZHVsZXMvdW5pLWZhYi9jb21wb25lbnRzL3VuaS1mYWIvdW5pLWZhYi52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///184\n");

/***/ }),

/***/ 185:
/*!**********************************************************************************************************************************************!*\
  !*** /Users/tongjie/Desktop/QNRTC-Uniapp/demo/uni_modules/uni-fab/components/uni-fab/uni-fab.vue?vue&type=template&id=7d5a6316&scoped=true& ***!
  \**********************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_fab_vue_vue_type_template_id_7d5a6316_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-0!../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./uni-fab.vue?vue&type=template&id=7d5a6316&scoped=true& */ 186);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_fab_vue_vue_type_template_id_7d5a6316_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_fab_vue_vue_type_template_id_7d5a6316_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_fab_vue_vue_type_template_id_7d5a6316_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_fab_vue_vue_type_template_id_7d5a6316_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 186:
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
var render = function() {
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
              "uni-fab--rightTop": _vm.rightTop
            }
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
                  "uni-fab__content--other-platform": !_vm.isAndroidNvue
                },
                style: {
                  width: _vm.boxWidth,
                  height: _vm.boxHeight,
                  backgroundColor: _vm.styles.backgroundColor
                },
                attrs: { elevation: "5" }
              },
              [
                _vm.flexDirectionStart || _vm.horizontalLeft
                  ? _c("view", {
                      staticClass: ["uni-fab__item", "uni-fab__item--first"]
                    })
                  : _vm._e(),
                _vm._l(_vm.content, function(item, index) {
                  return _c(
                    "view",
                    {
                      key: index,
                      staticClass: ["uni-fab__item"],
                      class: { "uni-fab__item--active": _vm.isShow },
                      on: {
                        click: function($event) {
                          _vm._onItemClick(index, item)
                        }
                      }
                    },
                    [
                      _c("u-image", {
                        staticClass: ["uni-fab__item-image"],
                        attrs: {
                          src: item.active
                            ? item.selectedIconPath
                            : item.iconPath,
                          mode: "widthFix"
                        }
                      }),
                      _c(
                        "u-text",
                        {
                          staticClass: ["uni-fab__item-text"],
                          style: {
                            color: item.active
                              ? _vm.styles.selectedColor
                              : _vm.styles.color
                          },
                          appendAsTree: true,
                          attrs: { append: "tree" }
                        },
                        [_vm._v(_vm._s(item.text))]
                      )
                    ],
                    1
                  )
                }),
                _vm.flexDirectionEnd || _vm.horizontalRight
                  ? _c("view", {
                      staticClass: ["uni-fab__item", "uni-fab__item--first"]
                    })
                  : _vm._e()
              ],
              2
            )
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
          "uni-fab__content--other-platform": !_vm.isAndroidNvue
        },
        style: { "background-color": _vm.styles.buttonColor },
        on: { click: _vm._onClick }
      },
      [
        _c("view", {
          staticClass: ["fab-circle-v"],
          class: {
            "uni-fab__plus--active": _vm.isShow && _vm.content.length > 0
          }
        }),
        _c("view", {
          staticClass: ["fab-circle-h"],
          class: {
            "uni-fab__plus--active": _vm.isShow && _vm.content.length > 0
          }
        })
      ]
    )
  ])
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 187:
/*!****************************************************************************************************************************!*\
  !*** /Users/tongjie/Desktop/QNRTC-Uniapp/demo/uni_modules/uni-fab/components/uni-fab/uni-fab.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_fab_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib??ref--5-0!../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--5-1!../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./uni-fab.vue?vue&type=script&lang=js& */ 188);\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_fab_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_fab_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_fab_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_fab_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_fab_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQStqQixDQUFnQix1akJBQUcsRUFBQyIsImZpbGUiOiIxODcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNS0wIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS01LTEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vdW5pLWZhYi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS01LTAhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTUtMSEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi91bmktZmFiLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///187\n");

/***/ }),

/***/ 188:
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--5-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--5-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!/Users/tongjie/Desktop/QNRTC-Uniapp/demo/uni_modules/uni-fab/components/uni-fab/uni-fab.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0; //\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\nvar platform = 'other';\n\nplatform = uni.getSystemInfoSync().platform;\n\n\n/**\n                                              * Fab 悬浮按钮\n                                              * @description 点击可展开一个图形按钮菜单\n                                              * @tutorial https://ext.dcloud.net.cn/plugin?id=144\n                                              * @property {Object} pattern 可选样式配置项\n                                              * @property {Object} horizontal = [left | right] 水平对齐方式\n                                              * \t@value left 左对齐\n                                              * \t@value right 右对齐\n                                              * @property {Object} vertical = [bottom | top] 垂直对齐方式\n                                              * \t@value bottom 下对齐\n                                              * \t@value top 上对齐\n                                              * @property {Object} direction = [horizontal | vertical] 展开菜单显示方式\n                                              * \t@value horizontal 水平显示\n                                              * \t@value vertical 垂直显示\n                                              * @property {Array} content 展开菜单内容配置项\n                                              * @property {Boolean} popMenu 是否使用弹出菜单\n                                              * @event {Function} trigger 展开菜单点击事件，返回点击信息\n                                              * @event {Function} fabClick 悬浮按钮点击事件\n                                              */var _default2 =\n{\n  name: 'UniFab',\n  emits: ['fabClick', 'trigger'],\n  props: {\n    pattern: {\n      type: Object,\n      default: function _default() {\n        return {};\n      } },\n\n    horizontal: {\n      type: String,\n      default: 'left' },\n\n    vertical: {\n      type: String,\n      default: 'bottom' },\n\n    direction: {\n      type: String,\n      default: 'horizontal' },\n\n    content: {\n      type: Array,\n      default: function _default() {\n        return [];\n      } },\n\n    show: {\n      type: Boolean,\n      default: false },\n\n    popMenu: {\n      type: Boolean,\n      default: true } },\n\n\n  data: function data() {\n    return {\n      fabShow: false,\n      isShow: false,\n      isAndroidNvue: platform === 'android',\n      styles: {\n        color: '#3c3e49',\n        selectedColor: '#007AFF',\n        backgroundColor: '#fff',\n        buttonColor: '#007AFF' } };\n\n\n  },\n  computed: {\n    contentWidth: function contentWidth(e) {\n      return (this.content.length + 1) * 55 + 10 + 'px';\n    },\n    contentWidthMin: function contentWidthMin() {\n      return 55 + 'px';\n    },\n    // 动态计算宽度\n    boxWidth: function boxWidth() {\n      return this.getPosition(3, 'horizontal');\n    },\n    // 动态计算高度\n    boxHeight: function boxHeight() {\n      return this.getPosition(3, 'vertical');\n    },\n    // 计算左下位置\n    leftBottom: function leftBottom() {\n      return this.getPosition(0, 'left', 'bottom');\n    },\n    // 计算右下位置\n    rightBottom: function rightBottom() {\n      return this.getPosition(0, 'right', 'bottom');\n    },\n    // 计算左上位置\n    leftTop: function leftTop() {\n      return this.getPosition(0, 'left', 'top');\n    },\n    rightTop: function rightTop() {\n      return this.getPosition(0, 'right', 'top');\n    },\n    flexDirectionStart: function flexDirectionStart() {\n      return this.getPosition(1, 'vertical', 'top');\n    },\n    flexDirectionEnd: function flexDirectionEnd() {\n      return this.getPosition(1, 'vertical', 'bottom');\n    },\n    horizontalLeft: function horizontalLeft() {\n      return this.getPosition(2, 'horizontal', 'left');\n    },\n    horizontalRight: function horizontalRight() {\n      return this.getPosition(2, 'horizontal', 'right');\n    } },\n\n  watch: {\n    pattern: function pattern(newValue, oldValue) {\n      //console.log(JSON.stringify(newValue))\n      this.styles = Object.assign({}, this.styles, newValue);\n    } },\n\n  created: function created() {\n    this.isShow = this.show;\n    if (this.top === 0) {\n      this.fabShow = true;\n    }\n    // 初始化样式\n    this.styles = Object.assign({}, this.styles, this.pattern);\n  },\n  methods: {\n    _onClick: function _onClick() {\n      this.$emit('fabClick');\n      if (!this.popMenu) {\n        return;\n      }\n      this.isShow = !this.isShow;\n    },\n    open: function open() {\n      this.isShow = true;\n    },\n    close: function close() {\n      this.isShow = false;\n    },\n    /**\n        * 按钮点击事件\n        */\n    _onItemClick: function _onItemClick(index, item) {\n      this.$emit('trigger', {\n        index: index,\n        item: item });\n\n    },\n    /**\n        * 获取 位置信息\n        */\n    getPosition: function getPosition(types, paramA, paramB) {\n      if (types === 0) {\n        return this.horizontal === paramA && this.vertical === paramB;\n      } else if (types === 1) {\n        return this.direction === paramA && this.vertical === paramB;\n      } else if (types === 2) {\n        return this.direction === paramA && this.horizontal === paramB;\n      } else {\n        return this.isShow && this.direction === paramA ? this.contentWidth : this.contentWidthMin;\n      }\n    } } };exports.default = _default2;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vdW5pX21vZHVsZXMvdW5pLWZhYi9jb21wb25lbnRzL3VuaS1mYWIvdW5pLWZhYi52dWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTJDQTs7QUFFQTs7O0FBR0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFtQkE7QUFDQSxnQkFEQTtBQUVBLGdDQUZBO0FBR0E7QUFDQTtBQUNBLGtCQURBO0FBRUEsYUFGQSxzQkFFQTtBQUNBO0FBQ0EsT0FKQSxFQURBOztBQU9BO0FBQ0Esa0JBREE7QUFFQSxxQkFGQSxFQVBBOztBQVdBO0FBQ0Esa0JBREE7QUFFQSx1QkFGQSxFQVhBOztBQWVBO0FBQ0Esa0JBREE7QUFFQSwyQkFGQSxFQWZBOztBQW1CQTtBQUNBLGlCQURBO0FBRUEsYUFGQSxzQkFFQTtBQUNBO0FBQ0EsT0FKQSxFQW5CQTs7QUF5QkE7QUFDQSxtQkFEQTtBQUVBLG9CQUZBLEVBekJBOztBQTZCQTtBQUNBLG1CQURBO0FBRUEsbUJBRkEsRUE3QkEsRUFIQTs7O0FBcUNBLE1BckNBLGtCQXFDQTtBQUNBO0FBQ0Esb0JBREE7QUFFQSxtQkFGQTtBQUdBLDJDQUhBO0FBSUE7QUFDQSx3QkFEQTtBQUVBLGdDQUZBO0FBR0EsK0JBSEE7QUFJQSw4QkFKQSxFQUpBOzs7QUFXQSxHQWpEQTtBQWtEQTtBQUNBLGdCQURBLHdCQUNBLENBREEsRUFDQTtBQUNBO0FBQ0EsS0FIQTtBQUlBLG1CQUpBLDZCQUlBO0FBQ0E7QUFDQSxLQU5BO0FBT0E7QUFDQSxZQVJBLHNCQVFBO0FBQ0E7QUFDQSxLQVZBO0FBV0E7QUFDQSxhQVpBLHVCQVlBO0FBQ0E7QUFDQSxLQWRBO0FBZUE7QUFDQSxjQWhCQSx3QkFnQkE7QUFDQTtBQUNBLEtBbEJBO0FBbUJBO0FBQ0EsZUFwQkEseUJBb0JBO0FBQ0E7QUFDQSxLQXRCQTtBQXVCQTtBQUNBLFdBeEJBLHFCQXdCQTtBQUNBO0FBQ0EsS0ExQkE7QUEyQkEsWUEzQkEsc0JBMkJBO0FBQ0E7QUFDQSxLQTdCQTtBQThCQSxzQkE5QkEsZ0NBOEJBO0FBQ0E7QUFDQSxLQWhDQTtBQWlDQSxvQkFqQ0EsOEJBaUNBO0FBQ0E7QUFDQSxLQW5DQTtBQW9DQSxrQkFwQ0EsNEJBb0NBO0FBQ0E7QUFDQSxLQXRDQTtBQXVDQSxtQkF2Q0EsNkJBdUNBO0FBQ0E7QUFDQSxLQXpDQSxFQWxEQTs7QUE2RkE7QUFDQSxXQURBLG1CQUNBLFFBREEsRUFDQSxRQURBLEVBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FKQSxFQTdGQTs7QUFtR0EsU0FuR0EscUJBbUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0ExR0E7QUEyR0E7QUFDQSxZQURBLHNCQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBUEE7QUFRQSxRQVJBLGtCQVFBO0FBQ0E7QUFDQSxLQVZBO0FBV0EsU0FYQSxtQkFXQTtBQUNBO0FBQ0EsS0FiQTtBQWNBOzs7QUFHQSxnQkFqQkEsd0JBaUJBLEtBakJBLEVBaUJBLElBakJBLEVBaUJBO0FBQ0E7QUFDQSxvQkFEQTtBQUVBLGtCQUZBOztBQUlBLEtBdEJBO0FBdUJBOzs7QUFHQSxlQTFCQSx1QkEwQkEsS0ExQkEsRUEwQkEsTUExQkEsRUEwQkEsTUExQkEsRUEwQkE7QUFDQTtBQUNBO0FBQ0EsT0FGQSxNQUVBO0FBQ0E7QUFDQSxPQUZBLE1BRUE7QUFDQTtBQUNBLE9BRkEsTUFFQTtBQUNBO0FBQ0E7QUFDQSxLQXBDQSxFQTNHQSxFIiwiZmlsZSI6IjE4OC5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cclxuXHQ8dmlldyBjbGFzcz1cInVuaS1jdXJzb3ItcG9pbnRcIj5cclxuXHRcdDx2aWV3IHYtaWY9XCJwb3BNZW51ICYmIChsZWZ0Qm90dG9tfHxyaWdodEJvdHRvbXx8bGVmdFRvcHx8cmlnaHRUb3ApICYmIGNvbnRlbnQubGVuZ3RoID4gMFwiIDpjbGFzcz1cIntcclxuICAgICAgICAndW5pLWZhYi0tbGVmdEJvdHRvbSc6IGxlZnRCb3R0b20sXHJcbiAgICAgICAgJ3VuaS1mYWItLXJpZ2h0Qm90dG9tJzogcmlnaHRCb3R0b20sXHJcbiAgICAgICAgJ3VuaS1mYWItLWxlZnRUb3AnOiBsZWZ0VG9wLFxyXG4gICAgICAgICd1bmktZmFiLS1yaWdodFRvcCc6IHJpZ2h0VG9wXHJcbiAgICAgIH1cIlxyXG5cdFx0IGNsYXNzPVwidW5pLWZhYlwiPlxyXG5cdFx0XHQ8dmlldyA6Y2xhc3M9XCJ7XHJcbiAgICAgICAgICAndW5pLWZhYl9fY29udGVudC0tbGVmdCc6IGhvcml6b250YWwgPT09ICdsZWZ0JyxcclxuICAgICAgICAgICd1bmktZmFiX19jb250ZW50LS1yaWdodCc6IGhvcml6b250YWwgPT09ICdyaWdodCcsXHJcbiAgICAgICAgICAndW5pLWZhYl9fY29udGVudC0tZmxleERpcmVjdGlvbic6IGRpcmVjdGlvbiA9PT0gJ3ZlcnRpY2FsJyxcclxuICAgICAgICAgICd1bmktZmFiX19jb250ZW50LS1mbGV4RGlyZWN0aW9uU3RhcnQnOiBmbGV4RGlyZWN0aW9uU3RhcnQsXHJcbiAgICAgICAgICAndW5pLWZhYl9fY29udGVudC0tZmxleERpcmVjdGlvbkVuZCc6IGZsZXhEaXJlY3Rpb25FbmQsXHJcblx0XHQgICd1bmktZmFiX19jb250ZW50LS1vdGhlci1wbGF0Zm9ybSc6ICFpc0FuZHJvaWROdnVlXHJcbiAgICAgICAgfVwiXHJcblx0XHRcdCA6c3R5bGU9XCJ7IHdpZHRoOiBib3hXaWR0aCwgaGVpZ2h0OiBib3hIZWlnaHQsIGJhY2tncm91bmRDb2xvcjogc3R5bGVzLmJhY2tncm91bmRDb2xvciB9XCIgY2xhc3M9XCJ1bmktZmFiX19jb250ZW50XCJcclxuXHRcdFx0IGVsZXZhdGlvbj1cIjVcIj5cclxuXHRcdFx0XHQ8dmlldyB2LWlmPVwiZmxleERpcmVjdGlvblN0YXJ0IHx8IGhvcml6b250YWxMZWZ0XCIgY2xhc3M9XCJ1bmktZmFiX19pdGVtIHVuaS1mYWJfX2l0ZW0tLWZpcnN0XCIgLz5cclxuXHRcdFx0XHQ8dmlldyB2LWZvcj1cIihpdGVtLCBpbmRleCkgaW4gY29udGVudFwiIDprZXk9XCJpbmRleFwiIDpjbGFzcz1cInsgJ3VuaS1mYWJfX2l0ZW0tLWFjdGl2ZSc6IGlzU2hvdyB9XCIgY2xhc3M9XCJ1bmktZmFiX19pdGVtXCJcclxuXHRcdFx0XHQgQGNsaWNrPVwiX29uSXRlbUNsaWNrKGluZGV4LCBpdGVtKVwiPlxyXG5cdFx0XHRcdFx0PGltYWdlIDpzcmM9XCJpdGVtLmFjdGl2ZSA/IGl0ZW0uc2VsZWN0ZWRJY29uUGF0aCA6IGl0ZW0uaWNvblBhdGhcIiBjbGFzcz1cInVuaS1mYWJfX2l0ZW0taW1hZ2VcIiBtb2RlPVwid2lkdGhGaXhcIiAvPlxyXG5cdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJ1bmktZmFiX19pdGVtLXRleHRcIiA6c3R5bGU9XCJ7IGNvbG9yOiBpdGVtLmFjdGl2ZSA/IHN0eWxlcy5zZWxlY3RlZENvbG9yIDogc3R5bGVzLmNvbG9yIH1cIj57eyBpdGVtLnRleHQgfX08L3RleHQ+XHJcblx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdDx2aWV3IHYtaWY9XCJmbGV4RGlyZWN0aW9uRW5kIHx8IGhvcml6b250YWxSaWdodFwiIGNsYXNzPVwidW5pLWZhYl9faXRlbSB1bmktZmFiX19pdGVtLS1maXJzdFwiIC8+XHJcblx0XHRcdDwvdmlldz5cclxuXHRcdDwvdmlldz5cclxuXHRcdDx2aWV3IDpjbGFzcz1cIntcclxuXHRcdCAgJ3VuaS1mYWJfX2NpcmNsZS0tbGVmdEJvdHRvbSc6IGxlZnRCb3R0b20sXHJcblx0XHQgICd1bmktZmFiX19jaXJjbGUtLXJpZ2h0Qm90dG9tJzogcmlnaHRCb3R0b20sXHJcblx0XHQgICd1bmktZmFiX19jaXJjbGUtLWxlZnRUb3AnOiBsZWZ0VG9wLFxyXG5cdFx0ICAndW5pLWZhYl9fY2lyY2xlLS1yaWdodFRvcCc6IHJpZ2h0VG9wLFxyXG5cdFx0ICAndW5pLWZhYl9fY29udGVudC0tb3RoZXItcGxhdGZvcm0nOiAhaXNBbmRyb2lkTnZ1ZVxyXG5cdFx0fVwiXHJcblx0XHQgY2xhc3M9XCJ1bmktZmFiX19jaXJjbGUgdW5pLWZhYl9fcGx1c1wiIDpzdHlsZT1cInsgJ2JhY2tncm91bmQtY29sb3InOiBzdHlsZXMuYnV0dG9uQ29sb3IgfVwiIEBjbGljaz1cIl9vbkNsaWNrXCI+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwiZmFiLWNpcmNsZS12XCIgIDpjbGFzcz1cInsndW5pLWZhYl9fcGx1cy0tYWN0aXZlJzogaXNTaG93ICYmIGNvbnRlbnQubGVuZ3RoID4gMH1cIj48L3ZpZXc+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwiZmFiLWNpcmNsZS1oXCIgOmNsYXNzPVwieyd1bmktZmFiX19wbHVzLS1hY3RpdmUnOiBpc1Nob3cgICYmIGNvbnRlbnQubGVuZ3RoID4gMH1cIj48L3ZpZXc+XHJcblx0XHQ8L3ZpZXc+XHJcblx0PC92aWV3PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuXHRsZXQgcGxhdGZvcm0gPSAnb3RoZXInXHJcblx0Ly8gI2lmZGVmIEFQUC1OVlVFXHJcblx0cGxhdGZvcm0gPSB1bmkuZ2V0U3lzdGVtSW5mb1N5bmMoKS5wbGF0Zm9ybVxyXG5cdC8vICNlbmRpZlxyXG5cclxuXHQvKipcclxuXHQgKiBGYWIg5oKs5rWu5oyJ6ZKuXHJcblx0ICogQGRlc2NyaXB0aW9uIOeCueWHu+WPr+WxleW8gOS4gOS4quWbvuW9ouaMiemSruiPnOWNlVxyXG5cdCAqIEB0dXRvcmlhbCBodHRwczovL2V4dC5kY2xvdWQubmV0LmNuL3BsdWdpbj9pZD0xNDRcclxuXHQgKiBAcHJvcGVydHkge09iamVjdH0gcGF0dGVybiDlj6/pgInmoLflvI/phY3nva7poblcclxuXHQgKiBAcHJvcGVydHkge09iamVjdH0gaG9yaXpvbnRhbCA9IFtsZWZ0IHwgcmlnaHRdIOawtOW5s+Wvuem9kOaWueW8j1xyXG5cdCAqIFx0QHZhbHVlIGxlZnQg5bem5a+56b2QXHJcblx0ICogXHRAdmFsdWUgcmlnaHQg5Y+z5a+56b2QXHJcblx0ICogQHByb3BlcnR5IHtPYmplY3R9IHZlcnRpY2FsID0gW2JvdHRvbSB8IHRvcF0g5Z6C55u05a+56b2Q5pa55byPXHJcblx0ICogXHRAdmFsdWUgYm90dG9tIOS4i+Wvuem9kFxyXG5cdCAqIFx0QHZhbHVlIHRvcCDkuIrlr7npvZBcclxuXHQgKiBAcHJvcGVydHkge09iamVjdH0gZGlyZWN0aW9uID0gW2hvcml6b250YWwgfCB2ZXJ0aWNhbF0g5bGV5byA6I+c5Y2V5pi+56S65pa55byPXHJcblx0ICogXHRAdmFsdWUgaG9yaXpvbnRhbCDmsLTlubPmmL7npLpcclxuXHQgKiBcdEB2YWx1ZSB2ZXJ0aWNhbCDlnoLnm7TmmL7npLpcclxuXHQgKiBAcHJvcGVydHkge0FycmF5fSBjb250ZW50IOWxleW8gOiPnOWNleWGheWuuemFjee9rumhuVxyXG5cdCAqIEBwcm9wZXJ0eSB7Qm9vbGVhbn0gcG9wTWVudSDmmK/lkKbkvb/nlKjlvLnlh7roj5zljZVcclxuXHQgKiBAZXZlbnQge0Z1bmN0aW9ufSB0cmlnZ2VyIOWxleW8gOiPnOWNleeCueWHu+S6i+S7tu+8jOi/lOWbnueCueWHu+S/oeaBr1xyXG5cdCAqIEBldmVudCB7RnVuY3Rpb259IGZhYkNsaWNrIOaCrOa1ruaMiemSrueCueWHu+S6i+S7tlxyXG5cdCAqL1xyXG5cdGV4cG9ydCBkZWZhdWx0IHtcclxuXHRcdG5hbWU6ICdVbmlGYWInLFxyXG5cdFx0ZW1pdHM6WydmYWJDbGljaycsJ3RyaWdnZXInXSxcclxuXHRcdHByb3BzOiB7XHJcblx0XHRcdHBhdHRlcm46IHtcclxuXHRcdFx0XHR0eXBlOiBPYmplY3QsXHJcblx0XHRcdFx0ZGVmYXVsdCAoKSB7XHJcblx0XHRcdFx0XHRyZXR1cm4ge31cclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblx0XHRcdGhvcml6b250YWw6IHtcclxuXHRcdFx0XHR0eXBlOiBTdHJpbmcsXHJcblx0XHRcdFx0ZGVmYXVsdDogJ2xlZnQnXHJcblx0XHRcdH0sXHJcblx0XHRcdHZlcnRpY2FsOiB7XHJcblx0XHRcdFx0dHlwZTogU3RyaW5nLFxyXG5cdFx0XHRcdGRlZmF1bHQ6ICdib3R0b20nXHJcblx0XHRcdH0sXHJcblx0XHRcdGRpcmVjdGlvbjoge1xyXG5cdFx0XHRcdHR5cGU6IFN0cmluZyxcclxuXHRcdFx0XHRkZWZhdWx0OiAnaG9yaXpvbnRhbCdcclxuXHRcdFx0fSxcclxuXHRcdFx0Y29udGVudDoge1xyXG5cdFx0XHRcdHR5cGU6IEFycmF5LFxyXG5cdFx0XHRcdGRlZmF1bHQgKCkge1xyXG5cdFx0XHRcdFx0cmV0dXJuIFtdXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRzaG93OiB7XHJcblx0XHRcdFx0dHlwZTogQm9vbGVhbixcclxuXHRcdFx0XHRkZWZhdWx0OiBmYWxzZVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRwb3BNZW51OiB7XHJcblx0XHRcdFx0dHlwZTogQm9vbGVhbixcclxuXHRcdFx0XHRkZWZhdWx0OiB0cnVlXHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRkYXRhKCkge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdGZhYlNob3c6IGZhbHNlLFxyXG5cdFx0XHRcdGlzU2hvdzogZmFsc2UsXHJcblx0XHRcdFx0aXNBbmRyb2lkTnZ1ZTogcGxhdGZvcm0gPT09ICdhbmRyb2lkJyxcclxuXHRcdFx0XHRzdHlsZXM6IHtcclxuXHRcdFx0XHRcdGNvbG9yOiAnIzNjM2U0OScsXHJcblx0XHRcdFx0XHRzZWxlY3RlZENvbG9yOiAnIzAwN0FGRicsXHJcblx0XHRcdFx0XHRiYWNrZ3JvdW5kQ29sb3I6ICcjZmZmJyxcclxuXHRcdFx0XHRcdGJ1dHRvbkNvbG9yOiAnIzAwN0FGRidcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRjb21wdXRlZDoge1xyXG5cdFx0XHRjb250ZW50V2lkdGgoZSkge1xyXG5cdFx0XHRcdHJldHVybiAodGhpcy5jb250ZW50Lmxlbmd0aCArIDEpICogNTUgKyAxMCArICdweCdcclxuXHRcdFx0fSxcclxuXHRcdFx0Y29udGVudFdpZHRoTWluKCkge1xyXG5cdFx0XHRcdHJldHVybiA1NSArICdweCdcclxuXHRcdFx0fSxcclxuXHRcdFx0Ly8g5Yqo5oCB6K6h566X5a695bqmXHJcblx0XHRcdGJveFdpZHRoKCkge1xyXG5cdFx0XHRcdHJldHVybiB0aGlzLmdldFBvc2l0aW9uKDMsICdob3Jpem9udGFsJylcclxuXHRcdFx0fSxcclxuXHRcdFx0Ly8g5Yqo5oCB6K6h566X6auY5bqmXHJcblx0XHRcdGJveEhlaWdodCgpIHtcclxuXHRcdFx0XHRyZXR1cm4gdGhpcy5nZXRQb3NpdGlvbigzLCAndmVydGljYWwnKVxyXG5cdFx0XHR9LFxyXG5cdFx0XHQvLyDorqHnrpflt6bkuIvkvY3nva5cclxuXHRcdFx0bGVmdEJvdHRvbSgpIHtcclxuXHRcdFx0XHRyZXR1cm4gdGhpcy5nZXRQb3NpdGlvbigwLCAnbGVmdCcsICdib3R0b20nKVxyXG5cdFx0XHR9LFxyXG5cdFx0XHQvLyDorqHnrpflj7PkuIvkvY3nva5cclxuXHRcdFx0cmlnaHRCb3R0b20oKSB7XHJcblx0XHRcdFx0cmV0dXJuIHRoaXMuZ2V0UG9zaXRpb24oMCwgJ3JpZ2h0JywgJ2JvdHRvbScpXHJcblx0XHRcdH0sXHJcblx0XHRcdC8vIOiuoeeul+W3puS4iuS9jee9rlxyXG5cdFx0XHRsZWZ0VG9wKCkge1xyXG5cdFx0XHRcdHJldHVybiB0aGlzLmdldFBvc2l0aW9uKDAsICdsZWZ0JywgJ3RvcCcpXHJcblx0XHRcdH0sXHJcblx0XHRcdHJpZ2h0VG9wKCkge1xyXG5cdFx0XHRcdHJldHVybiB0aGlzLmdldFBvc2l0aW9uKDAsICdyaWdodCcsICd0b3AnKVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRmbGV4RGlyZWN0aW9uU3RhcnQoKSB7XHJcblx0XHRcdFx0cmV0dXJuIHRoaXMuZ2V0UG9zaXRpb24oMSwgJ3ZlcnRpY2FsJywgJ3RvcCcpXHJcblx0XHRcdH0sXHJcblx0XHRcdGZsZXhEaXJlY3Rpb25FbmQoKSB7XHJcblx0XHRcdFx0cmV0dXJuIHRoaXMuZ2V0UG9zaXRpb24oMSwgJ3ZlcnRpY2FsJywgJ2JvdHRvbScpXHJcblx0XHRcdH0sXHJcblx0XHRcdGhvcml6b250YWxMZWZ0KCkge1xyXG5cdFx0XHRcdHJldHVybiB0aGlzLmdldFBvc2l0aW9uKDIsICdob3Jpem9udGFsJywgJ2xlZnQnKVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRob3Jpem9udGFsUmlnaHQoKSB7XHJcblx0XHRcdFx0cmV0dXJuIHRoaXMuZ2V0UG9zaXRpb24oMiwgJ2hvcml6b250YWwnLCAncmlnaHQnKVxyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0d2F0Y2g6IHtcclxuXHRcdFx0cGF0dGVybihuZXdWYWx1ZSwgb2xkVmFsdWUpIHtcclxuXHRcdFx0XHQvL2NvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KG5ld1ZhbHVlKSlcclxuXHRcdFx0XHR0aGlzLnN0eWxlcyA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuc3R5bGVzLCBuZXdWYWx1ZSlcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdGNyZWF0ZWQoKSB7XHJcblx0XHRcdHRoaXMuaXNTaG93ID0gdGhpcy5zaG93XHJcblx0XHRcdGlmICh0aGlzLnRvcCA9PT0gMCkge1xyXG5cdFx0XHRcdHRoaXMuZmFiU2hvdyA9IHRydWVcclxuXHRcdFx0fVxyXG5cdFx0XHQvLyDliJ3lp4vljJbmoLflvI9cclxuXHRcdFx0dGhpcy5zdHlsZXMgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnN0eWxlcywgdGhpcy5wYXR0ZXJuKVxyXG5cdFx0fSxcclxuXHRcdG1ldGhvZHM6IHtcclxuXHRcdFx0X29uQ2xpY2soKSB7XG5cdFx0XHRcdHRoaXMuJGVtaXQoJ2ZhYkNsaWNrJylcclxuXHRcdFx0XHRpZiAoIXRoaXMucG9wTWVudSkge1xyXG5cdFx0XHRcdFx0cmV0dXJuXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHRoaXMuaXNTaG93ID0gIXRoaXMuaXNTaG93XHJcblx0XHRcdH0sXHJcblx0XHRcdG9wZW4oKSB7XHJcblx0XHRcdFx0dGhpcy5pc1Nob3cgPSB0cnVlXHJcblx0XHRcdH0sXHJcblx0XHRcdGNsb3NlKCkge1xyXG5cdFx0XHRcdHRoaXMuaXNTaG93ID0gZmFsc2VcclxuXHRcdFx0fSxcclxuXHRcdFx0LyoqXHJcblx0XHRcdCAqIOaMiemSrueCueWHu+S6i+S7tlxyXG5cdFx0XHQgKi9cclxuXHRcdFx0X29uSXRlbUNsaWNrKGluZGV4LCBpdGVtKSB7XHJcblx0XHRcdFx0dGhpcy4kZW1pdCgndHJpZ2dlcicsIHtcclxuXHRcdFx0XHRcdGluZGV4LFxyXG5cdFx0XHRcdFx0aXRlbVxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdH0sXHJcblx0XHRcdC8qKlxyXG5cdFx0XHQgKiDojrflj5Yg5L2N572u5L+h5oGvXHJcblx0XHRcdCAqL1xyXG5cdFx0XHRnZXRQb3NpdGlvbih0eXBlcywgcGFyYW1BLCBwYXJhbUIpIHtcclxuXHRcdFx0XHRpZiAodHlwZXMgPT09IDApIHtcclxuXHRcdFx0XHRcdHJldHVybiB0aGlzLmhvcml6b250YWwgPT09IHBhcmFtQSAmJiB0aGlzLnZlcnRpY2FsID09PSBwYXJhbUJcclxuXHRcdFx0XHR9IGVsc2UgaWYgKHR5cGVzID09PSAxKSB7XHJcblx0XHRcdFx0XHRyZXR1cm4gdGhpcy5kaXJlY3Rpb24gPT09IHBhcmFtQSAmJiB0aGlzLnZlcnRpY2FsID09PSBwYXJhbUJcclxuXHRcdFx0XHR9IGVsc2UgaWYgKHR5cGVzID09PSAyKSB7XHJcblx0XHRcdFx0XHRyZXR1cm4gdGhpcy5kaXJlY3Rpb24gPT09IHBhcmFtQSAmJiB0aGlzLmhvcml6b250YWwgPT09IHBhcmFtQlxyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRyZXR1cm4gdGhpcy5pc1Nob3cgJiYgdGhpcy5kaXJlY3Rpb24gPT09IHBhcmFtQSA/IHRoaXMuY29udGVudFdpZHRoIDogdGhpcy5jb250ZW50V2lkdGhNaW5cclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIGxhbmc9XCJzY3NzXCIgc2NvcGVkPlxyXG5cdC51bmktZmFiIHtcclxuXHRcdHBvc2l0aW9uOiBmaXhlZDtcclxuXHRcdC8qICNpZm5kZWYgQVBQLU5WVUUgKi9cclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHQvKiAjZW5kaWYgKi9cclxuXHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdHotaW5kZXg6IDEwO1xyXG5cdH1cblx0XG5cdC51bmktY3Vyc29yLXBvaW50IHtcblx0XHQvKiAjaWZkZWYgSDUgKi9cblx0XHRjdXJzb3I6IHBvaW50ZXI7XG5cdFx0LyogI2VuZGlmICovXG5cdH1cclxuXHJcblx0LnVuaS1mYWItLWFjdGl2ZSB7XHJcblx0XHRvcGFjaXR5OiAxO1xyXG5cdH1cclxuXHJcblx0LnVuaS1mYWItLWxlZnRCb3R0b20ge1xyXG5cdFx0bGVmdDogNXB4O1xyXG5cdFx0Ym90dG9tOiAyMHB4O1xuXHRcdC8qICNpZmRlZiBINSAqL1xuXHRcdGxlZnQ6IGNhbGMoNXB4ICsgdmFyKC0td2luZG93LWxlZnQpKTtcclxuXHRcdGJvdHRvbTogY2FsYygyMHB4ICsgdmFyKC0td2luZG93LWJvdHRvbSkpO1xyXG5cdFx0LyogI2VuZGlmICovXHJcblx0XHRwYWRkaW5nOiAxMHB4O1xyXG5cdH1cclxuXHJcblx0LnVuaS1mYWItLWxlZnRUb3Age1xyXG5cdFx0bGVmdDogNXB4O1xyXG5cdFx0dG9wOiAzMHB4O1xyXG5cdFx0LyogI2lmZGVmIEg1ICovXG5cdFx0bGVmdDogY2FsYyg1cHggKyB2YXIoLS13aW5kb3ctbGVmdCkpO1xyXG5cdFx0dG9wOiBjYWxjKDMwcHggKyB2YXIoLS13aW5kb3ctdG9wKSk7XHJcblx0XHQvKiAjZW5kaWYgKi9cclxuXHRcdHBhZGRpbmc6IDEwcHg7XHJcblx0fVxyXG5cclxuXHQudW5pLWZhYi0tcmlnaHRCb3R0b20ge1xyXG5cdFx0cmlnaHQ6IDVweDtcclxuXHRcdGJvdHRvbTogMjBweDtcclxuXHRcdC8qICNpZmRlZiBINSAqL1xuXHRcdHJpZ2h0OiBjYWxjKDVweCArIHZhcigtLXdpbmRvdy1yaWdodCkpO1xyXG5cdFx0Ym90dG9tOiBjYWxjKDIwcHggKyB2YXIoLS13aW5kb3ctYm90dG9tKSk7XHJcblx0XHQvKiAjZW5kaWYgKi9cclxuXHRcdHBhZGRpbmc6IDEwcHg7XHJcblx0fVxyXG5cclxuXHQudW5pLWZhYi0tcmlnaHRUb3Age1xyXG5cdFx0cmlnaHQ6IDVweDtcclxuXHRcdHRvcDogMzBweDtcclxuXHRcdC8qICNpZmRlZiBINSAqL1xuXHRcdHJpZ2h0OiBjYWxjKDVweCArIHZhcigtLXdpbmRvdy1yaWdodCkpO1xyXG5cdFx0dG9wOiBjYWxjKDMwcHggKyB2YXIoLS13aW5kb3ctdG9wKSk7XHJcblx0XHQvKiAjZW5kaWYgKi9cclxuXHRcdHBhZGRpbmc6IDEwcHg7XHJcblx0fVxyXG5cclxuXHQudW5pLWZhYl9fY2lyY2xlIHtcclxuXHRcdHBvc2l0aW9uOiBmaXhlZDtcclxuXHRcdC8qICNpZm5kZWYgQVBQLU5WVUUgKi9cclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHQvKiAjZW5kaWYgKi9cclxuXHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdHdpZHRoOiA1NXB4O1xyXG5cdFx0aGVpZ2h0OiA1NXB4O1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogIzNjM2U0OTtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDU1cHg7XHJcblx0XHR6LWluZGV4OiAxMTtcclxuXHR9XHJcblxyXG5cdC51bmktZmFiX19jaXJjbGUtLWxlZnRCb3R0b20ge1xyXG5cdFx0bGVmdDogMTVweDtcclxuXHRcdGJvdHRvbTogMzBweDtcclxuXHRcdC8qICNpZmRlZiBINSAqL1xuXHRcdGxlZnQ6IGNhbGMoMTVweCArIHZhcigtLXdpbmRvdy1sZWZ0KSk7XHJcblx0XHRib3R0b206IGNhbGMoMzBweCArIHZhcigtLXdpbmRvdy1ib3R0b20pKTtcclxuXHRcdC8qICNlbmRpZiAqL1xyXG5cdH1cclxuXHJcblx0LnVuaS1mYWJfX2NpcmNsZS0tbGVmdFRvcCB7XHJcblx0XHRsZWZ0OiAxNXB4O1xyXG5cdFx0dG9wOiA0MHB4O1xyXG5cdFx0LyogI2lmZGVmIEg1ICovXG5cdFx0bGVmdDogY2FsYygxNXB4ICsgdmFyKC0td2luZG93LWxlZnQpKTtcclxuXHRcdHRvcDogY2FsYyg0MHB4ICsgdmFyKC0td2luZG93LXRvcCkpO1xyXG5cdFx0LyogI2VuZGlmICovXHJcblx0fVxyXG5cclxuXHQudW5pLWZhYl9fY2lyY2xlLS1yaWdodEJvdHRvbSB7XHJcblx0XHRyaWdodDogMTVweDtcclxuXHRcdGJvdHRvbTogMzBweDtcclxuXHRcdC8qICNpZmRlZiBINSAqL1xuXHRcdHJpZ2h0OiBjYWxjKDE1cHggKyB2YXIoLS13aW5kb3ctcmlnaHQpKTtcclxuXHRcdGJvdHRvbTogY2FsYygzMHB4ICsgdmFyKC0td2luZG93LWJvdHRvbSkpO1xyXG5cdFx0LyogI2VuZGlmICovXHJcblx0fVxyXG5cclxuXHQudW5pLWZhYl9fY2lyY2xlLS1yaWdodFRvcCB7XHJcblx0XHRyaWdodDogMTVweDtcclxuXHRcdHRvcDogNDBweDtcclxuXHRcdC8qICNpZmRlZiBINSAqL1xuXHRcdHJpZ2h0OiBjYWxjKDE1cHggKyB2YXIoLS13aW5kb3ctcmlnaHQpKTtcclxuXHRcdHRvcDogY2FsYyg0MHB4ICsgdmFyKC0td2luZG93LXRvcCkpO1xyXG5cdFx0LyogI2VuZGlmICovXHJcblx0fVxyXG5cclxuXHQudW5pLWZhYl9fY2lyY2xlLS1sZWZ0IHtcclxuXHRcdGxlZnQ6IDA7XHJcblx0fVxyXG5cclxuXHQudW5pLWZhYl9fY2lyY2xlLS1yaWdodCB7XHJcblx0XHRyaWdodDogMDtcclxuXHR9XHJcblxyXG5cdC51bmktZmFiX19jaXJjbGUtLXRvcCB7XHJcblx0XHR0b3A6IDA7XHJcblx0fVxyXG5cclxuXHQudW5pLWZhYl9fY2lyY2xlLS1ib3R0b20ge1xyXG5cdFx0Ym90dG9tOiAwO1xyXG5cdH1cclxuXHJcblx0LnVuaS1mYWJfX3BsdXMge1xyXG5cdFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XHJcblx0fVxyXG5cclxuXHQuZmFiLWNpcmNsZS12IHtcclxuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdHdpZHRoOiAzcHg7XHJcblx0XHRoZWlnaHQ6IDMxcHg7XHJcblx0XHRsZWZ0OiAyNnB4O1xyXG5cdFx0dG9wOiAxMnB4O1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcblx0XHR0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuXHRcdHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzO1xyXG5cdH1cclxuXHJcblx0LmZhYi1jaXJjbGUtaCB7XHJcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHR3aWR0aDogMzFweDtcclxuXHRcdGhlaWdodDogM3B4O1xyXG5cdFx0bGVmdDogMTJweDtcclxuXHRcdHRvcDogMjZweDtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG5cdFx0dHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcblx0XHR0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcztcclxuXHR9XHJcblxyXG5cdC51bmktZmFiX19wbHVzLS1hY3RpdmUge1xyXG5cdFx0dHJhbnNmb3JtOiByb3RhdGUoMTM1ZGVnKTtcclxuXHR9XHJcblxyXG5cdC51bmktZmFiX19jb250ZW50IHtcclxuXHRcdC8qICNpZm5kZWYgQVBQLU5WVUUgKi9cclxuXHRcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0LyogI2VuZGlmICovXHJcblx0XHRmbGV4LWRpcmVjdGlvbjogcm93O1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogNTVweDtcclxuXHRcdG92ZXJmbG93OiBoaWRkZW47XHJcblx0XHR0cmFuc2l0aW9uLXByb3BlcnR5OiB3aWR0aCwgaGVpZ2h0O1xyXG5cdFx0dHJhbnNpdGlvbi1kdXJhdGlvbjogMC4ycztcclxuXHRcdHdpZHRoOiA1NXB4O1xyXG5cdFx0Ym9yZGVyLWNvbG9yOiAjREREREREO1xyXG5cdFx0Ym9yZGVyLXdpZHRoOiAxcnB4O1xyXG5cdFx0Ym9yZGVyLXN0eWxlOiBzb2xpZDtcclxuXHR9XHJcblxyXG5cdC51bmktZmFiX19jb250ZW50LS1vdGhlci1wbGF0Zm9ybSB7XHJcblx0XHRib3JkZXItd2lkdGg6IDBweDtcclxuXHRcdGJveC1zaGFkb3c6IDAgMCA1cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuXHR9XHJcblxyXG5cdC51bmktZmFiX19jb250ZW50LS1sZWZ0IHtcclxuXHRcdGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuXHR9XHJcblxyXG5cdC51bmktZmFiX19jb250ZW50LS1yaWdodCB7XHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG5cdH1cclxuXHJcblx0LnVuaS1mYWJfX2NvbnRlbnQtLWZsZXhEaXJlY3Rpb24ge1xyXG5cdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHRcdGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcblx0fVxyXG5cclxuXHQudW5pLWZhYl9fY29udGVudC0tZmxleERpcmVjdGlvblN0YXJ0IHtcclxuXHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcblx0fVxyXG5cclxuXHQudW5pLWZhYl9fY29udGVudC0tZmxleERpcmVjdGlvbkVuZCB7XHJcblx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuXHR9XHJcblxyXG5cdC51bmktZmFiX19pdGVtIHtcclxuXHRcdC8qICNpZm5kZWYgQVBQLU5WVUUgKi9cclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHQvKiAjZW5kaWYgKi9cclxuXHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHR3aWR0aDogNTVweDtcclxuXHRcdGhlaWdodDogNTVweDtcclxuXHRcdG9wYWNpdHk6IDA7XHJcblx0XHR0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMnM7XHJcblx0fVxyXG5cclxuXHQudW5pLWZhYl9faXRlbS0tYWN0aXZlIHtcclxuXHRcdG9wYWNpdHk6IDE7XHJcblx0fVxyXG5cclxuXHQudW5pLWZhYl9faXRlbS1pbWFnZSB7XHJcblx0XHR3aWR0aDogMjVweDtcclxuXHRcdGhlaWdodDogMjVweDtcclxuXHRcdG1hcmdpbi1ib3R0b206IDNweDtcclxuXHR9XHJcblxyXG5cdC51bmktZmFiX19pdGVtLXRleHQge1xyXG5cdFx0Y29sb3I6ICNGRkZGRkY7XHJcblx0XHRmb250LXNpemU6IDEycHg7XHJcblx0fVxyXG5cclxuXHQudW5pLWZhYl9faXRlbS0tZmlyc3Qge1xyXG5cdFx0d2lkdGg6IDU1cHg7XHJcblx0fVxyXG48L3N0eWxlPlxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///188\n");

/***/ }),

/***/ 189:
/*!*************************************************************************************************************************************************************!*\
  !*** /Users/tongjie/Desktop/QNRTC-Uniapp/demo/uni_modules/uni-fab/components/uni-fab/uni-fab.vue?vue&type=style&index=0&id=7d5a6316&lang=scss&scoped=true& ***!
  \*************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_10_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_fab_vue_vue_type_style_index_0_id_7d5a6316_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-1!../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--10-oneOf-0-2!../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--10-oneOf-0-3!../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-4!../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./uni-fab.vue?vue&type=style&index=0&id=7d5a6316&lang=scss&scoped=true& */ 190);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_10_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_fab_vue_vue_type_style_index_0_id_7d5a6316_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_10_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_fab_vue_vue_type_style_index_0_id_7d5a6316_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_10_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_fab_vue_vue_type_style_index_0_id_7d5a6316_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_10_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_fab_vue_vue_type_style_index_0_id_7d5a6316_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_10_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_fab_vue_vue_type_style_index_0_id_7d5a6316_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 19:
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

/***/ 190:
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-1!./node_modules/postcss-loader/src??ref--10-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--10-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!/Users/tongjie/Desktop/QNRTC-Uniapp/demo/uni_modules/uni-fab/components/uni-fab/uni-fab.vue?vue&type=style&index=0&id=7d5a6316&lang=scss&scoped=true& ***!
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

/***/ 191:
/*!***********************************************************************************************************!*\
  !*** /Users/tongjie/Desktop/QNRTC-Uniapp/demo/pages/index/index.nvue?vue&type=script&lang=js&mpType=page ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib??ref--5-0!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--5-1!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./index.nvue?vue&type=script&lang=js&mpType=page */ 192);\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXVqQixDQUFnQixpa0JBQUcsRUFBQyIsImZpbGUiOiIxOTEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNS0wIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS01LTEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgubnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNS0wIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS01LTEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgubnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///191\n");

/***/ }),

/***/ 192:
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--5-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--5-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!/Users/tongjie/Desktop/QNRTC-Uniapp/demo/pages/index/index.nvue?vue&type=script&lang=js&mpType=page ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;\n\n\n\n\n\n\n\n\n\n\n\nvar _RTCIndexNative = _interopRequireDefault(__webpack_require__(/*! @/js_sdk/QNRTC-UniPlugin-JS/QNRTC-UniPlugin-JS/RTCIndex.native.js */ 88));\nvar _vuex = __webpack_require__(/*! vuex */ 49);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _createForOfIteratorHelper(o, allowArrayLike) {var it;if (typeof Symbol === \"undefined\" || o[Symbol.iterator] == null) {if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") {if (it) o = it;var i = 0;var F = function F() {};return { s: F, n: function n() {if (i >= o.length) return { done: true };return { done: false, value: o[i++] };}, e: function e(_e) {throw _e;}, f: F };}throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");}var normalCompletion = true,didErr = false,err;return { s: function s() {it = o[Symbol.iterator]();}, n: function n() {var step = it.next();normalCompletion = step.done;return step;}, e: function e(_e2) {didErr = true;err = _e2;}, f: function f() {try {if (!normalCompletion && it.return != null) it.return();} finally {if (didErr) throw err;}} };}function _unsupportedIterableToArray(o, minLen) {if (!o) return;if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);var n = Object.prototype.toString.call(o).slice(8, -1);if (n === \"Object\" && o.constructor) n = o.constructor.name;if (n === \"Map\" || n === \"Set\") return Array.from(o);if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);}function _arrayLikeToArray(arr, len) {if (len == null || len > arr.length) len = arr.length;for (var i = 0, arr2 = new Array(len); i < len; i++) {arr2[i] = arr[i];}return arr2;}function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {ownKeys(Object(source), true).forEach(function (key) {_defineProperty(target, key, source[key]);});} else if (Object.getOwnPropertyDescriptors) {Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));} else {ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}var _default =\n\n\n{\n  computed: _objectSpread({},\n  (0, _vuex.mapState)([\"platform\"])),\n\n  data: function data() {\n    return {\n      content: [\n      {\n        iconPath: \"/static/template.png\",\n        selectedIconPath: \"/static/template.png\",\n        text: \"设置\" }] };\n\n\n\n  },\n  methods: {\n    routeGroupToGroup: function routeGroupToGroup() {\n      uni.navigateTo({\n        url: \"/pages/group-to-group/index\" });\n\n    },\n    routeLiveStreamingDirect: function routeLiveStreamingDirect() {\n      uni.navigateTo({\n        url: \"/pages/live-streaming-direct/index\" });\n\n    },\n    routeLiveStreamingTranscoding: function routeLiveStreamingTranscoding() {\n      uni.navigateTo({\n        url: \"/pages/live-streaming-transcoding/index\" });\n\n    },\n    routeTrackSetting: function routeTrackSetting() {\n      uni.navigateTo({\n        url: \"/pages/track-setting/index\" });\n\n    },\n    routeAudioMixer: function routeAudioMixer() {\n      uni.navigateTo({\n        url: \"/pages/audio-mixer/index\" });\n\n    },\n    handleChooseItem: function handleChooseItem(event) {\n      if (event.item.text === \"设置\") {\n        uni.navigateTo({\n          url: \"/pages/setting/index\" });\n\n      }\n    },\n    requestPermission: function requestPermission() {\n      var permission = [\"android.permission.CAMERA\", \"android.permission.RECORD_AUDIO\",\n      \"android.permission.WRITE_EXTERNAL_STORAGE\"];\n\n      if (plus.android) {var _iterator = _createForOfIteratorHelper(\n        permission),_step;try {for (_iterator.s(); !(_step = _iterator.n()).done;) {var i = _step.value;\n            plus.android.requestPermissions(\n            [i],\n            function (resultObj) {\n              for (var i = 0; i < resultObj.granted.length; i++) {\n                var grantedPermission = resultObj.granted[i];\n                __f__(\"log\", '已获取的权限：' + grantedPermission, \" at pages/index/index.nvue:76\");\n              }\n              for (var i = 0; i < resultObj.deniedPresent.length; i++) {\n                var deniedPresentPermission = resultObj.deniedPresent[i];\n                __f__(\"log\", '拒绝本次申请的权限：' + deniedPresentPermission, \" at pages/index/index.nvue:80\");\n              }\n              for (var i = 0; i < resultObj.deniedAlways.length; i++) {\n                var deniedAlwaysPermission = resultObj.deniedAlways[i];\n                __f__(\"log\", '永久拒绝申请的权限：' + deniedAlwaysPermission, \" at pages/index/index.nvue:84\");\n              }\n            },\n            function (error) {\n              __f__(\"log\", '申请权限错误：' + error.code + \" = \" + error.message, \" at pages/index/index.nvue:88\");\n            });\n\n          }} catch (err) {_iterator.e(err);} finally {_iterator.f();}\n      }\n\n    } },\n\n  created: function created() {\n    if (this.platform = \"android\") {\n      this.requestPermission();\n    }\n  } };exports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 64)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvaW5kZXgvaW5kZXgubnZ1ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFZQTtBQUNBLGdEOzs7QUFHQTtBQUNBO0FBQ0EsbUNBREEsQ0FEQTs7QUFJQSxNQUpBLGtCQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBREE7QUFFQSxnREFGQTtBQUdBLGtCQUhBLEVBREEsQ0FEQTs7OztBQVNBLEdBZEE7QUFlQTtBQUNBLHFCQURBLCtCQUNBO0FBQ0E7QUFDQSwwQ0FEQTs7QUFHQSxLQUxBO0FBTUEsNEJBTkEsc0NBTUE7QUFDQTtBQUNBLGlEQURBOztBQUdBLEtBVkE7QUFXQSxpQ0FYQSwyQ0FXQTtBQUNBO0FBQ0Esc0RBREE7O0FBR0EsS0FmQTtBQWdCQSxxQkFoQkEsK0JBZ0JBO0FBQ0E7QUFDQSx5Q0FEQTs7QUFHQSxLQXBCQTtBQXFCQSxtQkFyQkEsNkJBcUJBO0FBQ0E7QUFDQSx1Q0FEQTs7QUFHQSxLQXpCQTtBQTBCQSxvQkExQkEsNEJBMEJBLEtBMUJBLEVBMEJBO0FBQ0E7QUFDQTtBQUNBLHFDQURBOztBQUdBO0FBQ0EsS0FoQ0E7QUFpQ0EscUJBakNBLCtCQWlDQTtBQUNBO0FBQ0EsaURBREE7O0FBR0E7QUFDQSxrQkFEQSxhQUNBO0FBQ0E7QUFDQSxlQURBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQWZBO0FBZ0JBO0FBQ0E7QUFDQSxhQWxCQTs7QUFvQkEsV0F0QkE7QUF1QkE7O0FBRUEsS0E5REEsRUFmQTs7QUErRUEsU0EvRUEscUJBK0VBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FuRkEsRSIsImZpbGUiOiIxOTIuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcbjxkaXYgY2xhc3M9XCJ3cmFwXCI+XHJcblx0PHVuaS1mYWIgaG9yaXpvbnRhbD1cInJpZ2h0XCIgOmNvbnRlbnQ9XCJjb250ZW50XCIgQHRyaWdnZXI9XCJoYW5kbGVDaG9vc2VJdGVtXCI+PC91bmktZmFiPlxyXG4gICAgPHZpZXcgY2xhc3M9XCJtYXJnaW4tdG9wLXNtXCI+PGJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiIEBjbGljaz1cInJvdXRlR3JvdXBUb0dyb3VwXCI+5aSa5Lq66YCa6K6vPC9idXR0b24+PC92aWV3PlxyXG4gICAgPHZpZXcgY2xhc3M9XCJtYXJnaW4tdG9wLXNtXCI+PGJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiIGNsYXNzPVwibWFyZ2luLXRvcC1zbVwiIEBjbGljaz1cInJvdXRlTGl2ZVN0cmVhbWluZ0RpcmVjdFwiPuWNlei3r+i9rOaOqOmFjee9rjwvYnV0dG9uPjwvdmlldz5cclxuICAgIDx2aWV3IGNsYXNzPVwibWFyZ2luLXRvcC1zbVwiPjxidXR0b24gdHlwZT1cInByaW1hcnlcIiBjbGFzcz1cIm1hcmdpbi10b3Atc21cIiBAY2xpY2s9XCJyb3V0ZUxpdmVTdHJlYW1pbmdUcmFuc2NvZGluZ1wiPuWQiOa1gemFjee9rjwvYnV0dG9uPjwvdmlldz5cclxuICAgIDx2aWV3IGNsYXNzPVwibWFyZ2luLXRvcC1zbVwiPjxidXR0b24gdHlwZT1cInByaW1hcnlcIiBjbGFzcz1cIm1hcmdpbi10b3Atc21cIiBAY2xpY2s9XCJyb3V0ZVRyYWNrU2V0dGluZ1wiPnRyYWNr6K6+572uPC9idXR0b24+PC92aWV3PlxyXG4gICAgPHZpZXcgY2xhc3M9XCJtYXJnaW4tdG9wLXNtXCI+PGJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiIGNsYXNzPVwibWFyZ2luLXRvcC1zbVwiIEBjbGljaz1cInJvdXRlQXVkaW9NaXhlclwiPua3t+mfs+iuvue9rjwvYnV0dG9uPjwvdmlldz5cclxuPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5pbXBvcnQgUU5SVEMgZnJvbSBcIkAvanNfc2RrL1FOUlRDLVVuaVBsdWdpbi1KUy9RTlJUQy1VbmlQbHVnaW4tSlMvUlRDSW5kZXgubmF0aXZlLmpzXCJcclxuaW1wb3J0IHtcclxuICAgIG1hcFN0YXRlXHJcbn0gZnJvbSBcInZ1ZXhcIlxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgICBjb21wdXRlZDoge1xyXG5cdFx0XHQuLi5tYXBTdGF0ZShbXCJwbGF0Zm9ybVwiXSlcclxuXHRcdH0sXHJcblx0ZGF0YSgpIHtcclxuXHRcdHJldHVybiB7XHJcblx0XHRcdGNvbnRlbnQ6IFtcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRpY29uUGF0aDogXCIvc3RhdGljL3RlbXBsYXRlLnBuZ1wiLFxyXG5cdFx0XHRcdFx0c2VsZWN0ZWRJY29uUGF0aDogXCIvc3RhdGljL3RlbXBsYXRlLnBuZ1wiLFxyXG5cdFx0XHRcdFx0dGV4dDogXCLorr7nva5cIlxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XVxyXG5cdFx0fVxyXG5cdH0sXHJcbiAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgcm91dGVHcm91cFRvR3JvdXAoKSB7XHJcbiAgICAgICAgICAgIHVuaS5uYXZpZ2F0ZVRvKHtcclxuICAgICAgICAgICAgICAgIHVybDogXCIvcGFnZXMvZ3JvdXAtdG8tZ3JvdXAvaW5kZXhcIlxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcm91dGVMaXZlU3RyZWFtaW5nRGlyZWN0KCkge1xyXG4gICAgICAgICAgICB1bmkubmF2aWdhdGVUbyh7XHJcbiAgICAgICAgICAgICAgICB1cmw6IFwiL3BhZ2VzL2xpdmUtc3RyZWFtaW5nLWRpcmVjdC9pbmRleFwiXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSxcclxuICAgICAgICByb3V0ZUxpdmVTdHJlYW1pbmdUcmFuc2NvZGluZygpIHtcclxuICAgICAgICAgICAgdW5pLm5hdmlnYXRlVG8oe1xyXG4gICAgICAgICAgICAgICAgdXJsOiBcIi9wYWdlcy9saXZlLXN0cmVhbWluZy10cmFuc2NvZGluZy9pbmRleFwiXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSxcclxuICAgICAgICByb3V0ZVRyYWNrU2V0dGluZygpIHtcclxuICAgICAgICAgICAgdW5pLm5hdmlnYXRlVG8oe1xyXG4gICAgICAgICAgICAgICAgdXJsOiBcIi9wYWdlcy90cmFjay1zZXR0aW5nL2luZGV4XCJcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9LFxyXG4gICAgICAgIHJvdXRlQXVkaW9NaXhlcigpIHtcclxuXHRcdFx0dW5pLm5hdmlnYXRlVG8oe1xyXG5cdFx0XHRcdHVybDogXCIvcGFnZXMvYXVkaW8tbWl4ZXIvaW5kZXhcIlxyXG5cdFx0XHR9KVxyXG5cdFx0fSxcclxuXHRcdGhhbmRsZUNob29zZUl0ZW0oZXZlbnQpIHtcclxuXHRcdFx0aWYoZXZlbnQuaXRlbS50ZXh0ID09PSBcIuiuvue9rlwiKSB7XHJcblx0XHRcdFx0dW5pLm5hdmlnYXRlVG8oe1xyXG5cdFx0XHRcdFx0dXJsOiBcIi9wYWdlcy9zZXR0aW5nL2luZGV4XCJcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG4gICAgICAgIHJlcXVlc3RQZXJtaXNzaW9uKCkge1xyXG4gICAgICAgICAgICBjb25zdCBwZXJtaXNzaW9uID0gW1wiYW5kcm9pZC5wZXJtaXNzaW9uLkNBTUVSQVwiLCBcImFuZHJvaWQucGVybWlzc2lvbi5SRUNPUkRfQVVESU9cIixcclxuICAgICAgICAgICAgICAgIFwiYW5kcm9pZC5wZXJtaXNzaW9uLldSSVRFX0VYVEVSTkFMX1NUT1JBR0VcIlxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIGlmIChwbHVzLmFuZHJvaWQpIHtcclxuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgaSBvZiBwZXJtaXNzaW9uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGx1cy5hbmRyb2lkLnJlcXVlc3RQZXJtaXNzaW9ucyhcclxuICAgICAgICAgICAgICAgICAgICAgICAgW2ldLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAocmVzdWx0T2JqKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHJlc3VsdE9iai5ncmFudGVkLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGdyYW50ZWRQZXJtaXNzaW9uID0gcmVzdWx0T2JqLmdyYW50ZWRbaV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ+W3suiOt+WPlueahOadg+mZkO+8micgKyBncmFudGVkUGVybWlzc2lvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHJlc3VsdE9iai5kZW5pZWRQcmVzZW50Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGRlbmllZFByZXNlbnRQZXJtaXNzaW9uID0gcmVzdWx0T2JqLmRlbmllZFByZXNlbnRbaV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ+aLkue7neacrOasoeeUs+ivt+eahOadg+mZkO+8micgKyBkZW5pZWRQcmVzZW50UGVybWlzc2lvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHJlc3VsdE9iai5kZW5pZWRBbHdheXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZGVuaWVkQWx3YXlzUGVybWlzc2lvbiA9IHJlc3VsdE9iai5kZW5pZWRBbHdheXNbaV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ+awuOS5heaLkue7neeUs+ivt+eahOadg+mZkO+8micgKyBkZW5pZWRBbHdheXNQZXJtaXNzaW9uKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygn55Sz6K+35p2D6ZmQ6ZSZ6K+v77yaJyArIGVycm9yLmNvZGUgKyBcIiA9IFwiICsgZXJyb3IubWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBjcmVhdGVkKCkge1xyXG4gICAgICAgIGlmKHRoaXMucGxhdGZvcm0gPSBcImFuZHJvaWRcIikge1xyXG4gICAgICAgICAgICB0aGlzLnJlcXVlc3RQZXJtaXNzaW9uKClcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuPC9zY3JpcHQ+XHJcbjxzdHlsZT5cclxuXHQud3JhcCB7XHJcblx0XHRib3JkZXItcmFkaXVzOiA1cHg7XHJcblx0XHRtYXJnaW46IDAgMjBweCAyMHB4O1xyXG5cdFx0cGFkZGluZzogMTBweCAwO1xyXG5cdH1cclxuPC9zdHlsZT5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///192\n");

/***/ }),

/***/ 193:
/*!*******************************************************************************************************************!*\
  !*** /Users/tongjie/Desktop/QNRTC-Uniapp/demo/pages/index/index.nvue?vue&type=style&index=0&lang=css&mpType=page ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-1!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--9-oneOf-0-2!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-3!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./index.nvue?vue&type=style&index=0&lang=css&mpType=page */ 194);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 194:
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-1!./node_modules/postcss-loader/src??ref--9-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!/Users/tongjie/Desktop/QNRTC-Uniapp/demo/pages/index/index.nvue?vue&type=style&index=0&lang=css&mpType=page ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
  "@VERSION": 2
}

/***/ }),

/***/ 2:
/*!****************************************************************************************!*\
  !*** /Users/tongjie/Desktop/QNRTC-Uniapp/demo/App.vue?vue&type=style&index=0&lang=css ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-1!../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--9-oneOf-0-2!../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-3!../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&lang=css */ 3);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 3:
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-1!./node_modules/postcss-loader/src??ref--9-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!/Users/tongjie/Desktop/QNRTC-Uniapp/demo/App.vue?vue&type=style&index=0&lang=css ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  ".margin-top-sm": {
    "": {
      "marginTop": [
        "15",
        0,
        0,
        0
      ]
    }
  },
  ".margin-right-sm": {
    "": {
      "marginRight": [
        "20",
        0,
        0,
        1
      ]
    }
  },
  ".margin-left-sm": {
    "": {
      "marginLeft": [
        "20",
        0,
        0,
        2
      ]
    }
  },
  ".margin-bottom-sm": {
    "": {
      "marginBottom": [
        "10",
        0,
        0,
        3
      ]
    }
  },
  ".flex-row": {
    "": {
      "flex": [
        1,
        0,
        0,
        4
      ],
      "display": [
        "flex",
        0,
        0,
        4
      ],
      "flexDirection": [
        "row",
        1,
        0,
        4
      ],
      "justifyContent": [
        "space-between",
        0,
        0,
        4
      ],
      "flexWrap": [
        "nowrap",
        0,
        0,
        4
      ],
      "alignItems": [
        "center",
        1,
        0,
        4
      ]
    }
  },
  ".scroll-view": {
    "": {
      "flex": [
        1,
        0,
        0,
        5
      ]
    }
  },
  ".scroll-view-box": {
    "": {
      "flex": [
        1,
        0,
        0,
        6
      ],
      "position": [
        "absolute",
        0,
        0,
        6
      ],
      "top": [
        0,
        0,
        0,
        6
      ],
      "right": [
        0,
        0,
        0,
        6
      ],
      "bottom": [
        0,
        0,
        0,
        6
      ],
      "left": [
        0,
        0,
        0,
        6
      ]
    }
  },
  ".scroll-view-wrap": {
    "": {
      "paddingLeft": [
        "10",
        0,
        0,
        7
      ],
      "paddingTop": [
        "10",
        0,
        0,
        7
      ],
      "paddingBottom": [
        "10",
        0,
        0,
        7
      ],
      "paddingRight": [
        "10",
        0,
        0,
        7
      ]
    }
  },
  ".table": {
    "": {
      "marginTop": [
        "20upx",
        0,
        0,
        8
      ],
      "marginBottom": [
        "20upx",
        0,
        0,
        8
      ],
      "flex": [
        1,
        0,
        0,
        8
      ],
      "borderWidth": [
        "1",
        1,
        0,
        8
      ],
      "borderStyle": [
        "solid",
        1,
        0,
        8
      ],
      "borderColor": [
        "#BEBEBE",
        1,
        0,
        8
      ]
    }
  },
  ".th": {
    "": {
      "display": [
        "flex",
        1,
        0,
        9
      ],
      "flexDirection": [
        "row",
        1,
        0,
        9
      ],
      "justifyContent": [
        "flex-start",
        1,
        0,
        9
      ],
      "alignItems": [
        "stretch",
        1,
        0,
        9
      ],
      "flex": [
        1,
        0,
        0,
        9
      ],
      "flexWrap": [
        "nowrap",
        0,
        0,
        9
      ]
    }
  },
  ".tr": {
    ".th ": {
      "backgroundColor": [
        "#eeeeee",
        0,
        1,
        10
      ]
    },
    "": {
      "fontSize": [
        "24upx",
        0,
        0,
        12
      ],
      "flex": [
        1,
        0,
        0,
        12
      ],
      "textAlign": [
        "center",
        0,
        0,
        12
      ],
      "paddingTop": [
        "15upx",
        0,
        0,
        12
      ],
      "paddingRight": [
        0,
        0,
        0,
        12
      ],
      "paddingBottom": [
        "15upx",
        0,
        0,
        12
      ],
      "paddingLeft": [
        0,
        0,
        0,
        12
      ]
    }
  },
  ".td": {
    "": {
      "display": [
        "flex",
        1,
        0,
        11
      ],
      "flexDirection": [
        "row",
        1,
        0,
        11
      ],
      "justifyContent": [
        "flex-start",
        1,
        0,
        11
      ],
      "alignItems": [
        "stretch",
        1,
        0,
        11
      ],
      "flex": [
        1,
        0,
        0,
        11
      ],
      "flexWrap": [
        "nowrap",
        0,
        0,
        11
      ]
    }
  },
  ".track-item-wrap": {
    "": {
      "position": [
        "relative",
        0,
        0,
        13
      ],
      "height": [
        "300",
        0,
        0,
        13
      ],
      "display": [
        "flex",
        0,
        0,
        13
      ],
      "flexDirection": [
        "row",
        0,
        0,
        13
      ],
      "justifyContent": [
        "flex-start",
        0,
        0,
        13
      ],
      "backgroundColor": [
        "#000000",
        0,
        0,
        13
      ]
    }
  },
  ".track-video": {
    "": {
      "position": [
        "absolute",
        0,
        0,
        14
      ],
      "top": [
        0,
        0,
        0,
        14
      ],
      "left": [
        0,
        0,
        0,
        14
      ],
      "height": [
        "300",
        0,
        0,
        14
      ],
      "width": [
        "750upx",
        0,
        0,
        14
      ]
    }
  },
  ".track-info-wrap": {
    "": {
      "position": [
        "absolute",
        0,
        0,
        15
      ],
      "top": [
        0,
        0,
        0,
        15
      ],
      "left": [
        0,
        0,
        0,
        15
      ],
      "paddingBottom": [
        "20upx",
        0,
        0,
        15
      ],
      "paddingLeft": [
        "20upx",
        0,
        0,
        15
      ],
      "paddingRight": [
        "20upx",
        0,
        0,
        15
      ],
      "width": [
        "750upx",
        0,
        0,
        15
      ]
    }
  },
  ".track-info-item": {
    "": {
      "color": [
        "#007AFF",
        0,
        0,
        16
      ],
      "fontSize": [
        "20upx",
        0,
        0,
        16
      ],
      "paddingTop": [
        "10upx",
        0,
        0,
        16
      ],
      "paddingBottom": [
        "10upx",
        0,
        0,
        16
      ],
      "fontWeight": [
        "bold",
        0,
        0,
        16
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

/***/ 49:
/*!********************************************!*\
  !*** ./node_modules/vuex/dist/vuex.esm.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.install = install;exports.mapState = exports.mapMutations = exports.mapGetters = exports.mapActions = exports.createNamespacedHelpers = exports.Store = exports.default = void 0; /*!
                                                                                                                                                                                                                                                                      * vuex v3.4.0
                                                                                                                                                                                                                                                                      * (c) 2020 Evan You
                                                                                                                                                                                                                                                                      * @license MIT
                                                                                                                                                                                                                                                                      */
function applyMixin(Vue) {
  var version = Number(Vue.version.split('.')[0]);

  if (version >= 2) {
    Vue.mixin({ beforeCreate: vuexInit });
  } else {
    // override init and inject vuex init procedure
    // for 1.x backwards compatibility.
    var _init = Vue.prototype._init;
    Vue.prototype._init = function (options) {
      if (options === void 0) options = {};

      options.init = options.init ?
      [vuexInit].concat(options.init) :
      vuexInit;
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
      this.$store = typeof options.store === 'function' ?
      options.store() :
      options.store;
    } else if (options.parent && options.parent.$store) {
      this.$store = options.parent.$store;
    }
  }
}

var target = typeof window !== 'undefined' ?
window :
typeof global !== 'undefined' ?
global :
{};
var devtoolHook = target.__VUE_DEVTOOLS_GLOBAL_HOOK__;

function devtoolPlugin(store) {
  if (!devtoolHook) {return;}

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

/**
       * forEach for object
       */
function forEachValue(obj, fn) {
  Object.keys(obj).forEach(function (key) {return fn(obj[key], key);});
}

function isObject(obj) {
  return obj !== null && typeof obj === 'object';
}

function isPromise(val) {
  return val && typeof val.then === 'function';
}

function assert(condition, msg) {
  if (!condition) {throw new Error("[vuex] " + msg);}
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

var prototypeAccessors = { namespaced: { configurable: true } };

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
  if (!parent.getChild(key).runtime) {return;}

  parent.removeChild(key);
};

ModuleCollection.prototype.isRegistered = function isRegistered(path) {
  var parent = this.get(path.slice(0, -1));
  var key = path[path.length - 1];

  return parent.hasChild(key);
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
          console.warn(
          "[vuex] trying to add a new module '" + key + "' on hot reloading, " +
          'manual reload is needed');

        }
        return;
      }
      update(
      path.concat(key),
      targetModule.getChild(key),
      newModule.modules[key]);

    }
  }
}

var functionAssert = {
  assert: function assert(value) {return typeof value === 'function';},
  expected: 'function' };


var objectAssert = {
  assert: function assert(value) {return typeof value === 'function' ||
    typeof value === 'object' && typeof value.handler === 'function';},
  expected: 'function or object with "handler" function' };


var assertTypes = {
  getters: functionAssert,
  mutations: functionAssert,
  actions: objectAssert };


function assertRawModule(path, rawModule) {
  Object.keys(assertTypes).forEach(function (key) {
    if (!rawModule[key]) {return;}

    var assertOptions = assertTypes[key];

    forEachValue(rawModule[key], function (value, type) {
      assert(
      assertOptions.assert(value),
      makeAssertionMessage(path, key, type, value, assertOptions.expected));

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

  var plugins = options.plugins;if (plugins === void 0) plugins = [];
  var strict = options.strict;if (strict === void 0) strict = false;

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
  plugins.forEach(function (plugin) {return plugin(this$1);});

  var useDevtools = options.devtools !== undefined ? options.devtools : Vue.config.devtools;
  if (useDevtools) {
    devtoolPlugin(this);
  }
};exports.Store = Store;

var prototypeAccessors$1 = { state: { configurable: true } };

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

  var mutation = { type: type, payload: payload };
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

  this._subscribers.
  slice() // shallow copy to prevent iterator invalidation if subscriber synchronously calls unsubscribe
  .forEach(function (sub) {return sub(mutation, this$1.state);});

  if (
   true &&
  options && options.silent)
  {
    console.warn(
    "[vuex] mutation type: " + type + ". Silent option has been removed. " +
    'Use the filter functionality in the vue-devtools');

  }
};

Store.prototype.dispatch = function dispatch(_type, _payload) {
  var this$1 = this;

  // check object-style dispatch
  var ref = unifyObjectStyle(_type, _payload);
  var type = ref.type;
  var payload = ref.payload;

  var action = { type: type, payload: payload };
  var entry = this._actions[type];
  if (!entry) {
    if (true) {
      console.error("[vuex] unknown action type: " + type);
    }
    return;
  }

  try {
    this._actionSubscribers.
    slice() // shallow copy to prevent iterator invalidation if subscriber synchronously calls unsubscribe
    .filter(function (sub) {return sub.before;}).
    forEach(function (sub) {return sub.before(action, this$1.state);});
  } catch (e) {
    if (true) {
      console.warn("[vuex] error in before action subscribers: ");
      console.error(e);
    }
  }

  var result = entry.length > 1 ?
  Promise.all(entry.map(function (handler) {return handler(payload);})) :
  entry[0](payload);

  return new Promise(function (resolve, reject) {
    result.then(function (res) {
      try {
        this$1._actionSubscribers.
        filter(function (sub) {return sub.after;}).
        forEach(function (sub) {return sub.after(action, this$1.state);});
      } catch (e) {
        if (true) {
          console.warn("[vuex] error in after action subscribers: ");
          console.error(e);
        }
      }
      resolve(res);
    }, function (error) {
      try {
        this$1._actionSubscribers.
        filter(function (sub) {return sub.error;}).
        forEach(function (sub) {return sub.error(action, this$1.state, error);});
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
  var subs = typeof fn === 'function' ? { before: fn } : fn;
  return genericSubscribe(subs, this._actionSubscribers, options);
};

Store.prototype.watch = function watch(getter, cb, options) {
  var this$1 = this;

  if (true) {
    assert(typeof getter === 'function', "store.watch only accepts a function.");
  }
  return this._watcherVM.$watch(function () {return getter(this$1.state, this$1.getters);}, cb, options);
};

Store.prototype.replaceState = function replaceState(state) {
  var this$1 = this;

  this._withCommit(function () {
    this$1._vm._data.$$state = state;
  });
};

Store.prototype.registerModule = function registerModule(path, rawModule, options) {
  if (options === void 0) options = {};

  if (typeof path === 'string') {path = [path];}

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

  if (typeof path === 'string') {path = [path];}

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
  if (typeof path === 'string') {path = [path];}

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
    options && options.prepend ?
    subs.unshift(fn) :
    subs.push(fn);
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
      get: function get() {return store._vm[key];},
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
      $$state: state },

    computed: computed });

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
    Vue.nextTick(function () {return oldVm.$destroy();});
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
          console.warn(
          "[vuex] state field \"" + moduleName + "\" was overridden by a module with the same name at \"" + path.join('.') + "\"");

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
    } };


  // getters and state object must be gotten lazily
  // because they will be changed by vm update
  Object.defineProperties(local, {
    getters: {
      get: noNamespace ?
      function () {return store.getters;} :
      function () {return makeLocalGetters(store, namespace);} },

    state: {
      get: function get() {return getNestedState(store.state, path);} } });



  return local;
}

function makeLocalGetters(store, namespace) {
  if (!store._makeLocalGettersCache[namespace]) {
    var gettersProxy = {};
    var splitPos = namespace.length;
    Object.keys(store.getters).forEach(function (type) {
      // skip if the target getter is not match this namespace
      if (type.slice(0, splitPos) !== namespace) {return;}

      // extract local getter type
      var localType = type.slice(splitPos);

      // Add a port to the getters proxy.
      // Define as getter property because
      // we do not want to evaluate the getters in this time.
      Object.defineProperty(gettersProxy, localType, {
        get: function get() {return store.getters[type];},
        enumerable: true });

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
      rootState: store.state },
    payload);
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
    return rawGetter(
    local.state, // local state
    local.getters, // local getters
    store.state, // root state
    store.getters // root getters
    );
  };
}

function enableStrictMode(store) {
  store._vm.$watch(function () {return this._data.$$state;}, function () {
    if (true) {
      assert(store._committing, "do not mutate vuex store state outside mutation handlers.");
    }
  }, { deep: true, sync: true });
}

function getNestedState(state, path) {
  return path.reduce(function (state, key) {return state[key];}, state);
}

function unifyObjectStyle(type, payload, options) {
  if (isObject(type) && type.type) {
    options = payload;
    payload = type;
    type = type.type;
  }

  if (true) {
    assert(typeof type === 'string', "expects string as the type, but found " + typeof type + ".");
  }

  return { type: type, payload: payload, options: options };
}

function install(_Vue) {
  if (Vue && _Vue === Vue) {
    if (true) {
      console.error(
      '[vuex] already installed. Vue.use(Vuex) should be called only once.');

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
      return typeof val === 'function' ?
      val.call(this, state, getters) :
      state[val];
    };
    // mark vuex getter for devtools
    res[key].vuex = true;
  });
  return res;
});

/**
     * Reduce the code which written in Vue.js for committing the mutation
     * @param {String} [namespace] - Module's namespace
     * @param {Object|Array} mutations # Object's item can be a function which accept `commit` function as the first param, it can accept anthor params. You can commit mutation and do any other things in this function. specially, You need to pass anthor params from the mapped function.
     * @return {Object}
     */exports.mapState = mapState;
var mapMutations = normalizeNamespace(function (namespace, mutations) {
  var res = {};
  if ( true && !isValidMap(mutations)) {
    console.error('[vuex] mapMutations: mapper parameter must be either an Array or an Object');
  }
  normalizeMap(mutations).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedMutation() {
      var args = [],len = arguments.length;
      while (len--) {args[len] = arguments[len];}

      // Get the commit method from store
      var commit = this.$store.commit;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapMutations', namespace);
        if (!module) {
          return;
        }
        commit = module.context.commit;
      }
      return typeof val === 'function' ?
      val.apply(this, [commit].concat(args)) :
      commit.apply(this.$store, [val].concat(args));
    };
  });
  return res;
});

/**
     * Reduce the code which written in Vue.js for getting the getters
     * @param {String} [namespace] - Module's namespace
     * @param {Object|Array} getters
     * @return {Object}
     */exports.mapMutations = mapMutations;
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
     */exports.mapGetters = mapGetters;
var mapActions = normalizeNamespace(function (namespace, actions) {
  var res = {};
  if ( true && !isValidMap(actions)) {
    console.error('[vuex] mapActions: mapper parameter must be either an Array or an Object');
  }
  normalizeMap(actions).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedAction() {
      var args = [],len = arguments.length;
      while (len--) {args[len] = arguments[len];}

      // get dispatch function from store
      var dispatch = this.$store.dispatch;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapActions', namespace);
        if (!module) {
          return;
        }
        dispatch = module.context.dispatch;
      }
      return typeof val === 'function' ?
      val.apply(this, [dispatch].concat(args)) :
      dispatch.apply(this.$store, [val].concat(args));
    };
  });
  return res;
});

/**
     * Rebinding namespace param for mapXXX function in special scoped, and return them by simple object
     * @param {String} namespace
     * @return {Object}
     */exports.mapActions = mapActions;
var createNamespacedHelpers = function createNamespacedHelpers(namespace) {return {
    mapState: mapState.bind(null, namespace),
    mapGetters: mapGetters.bind(null, namespace),
    mapMutations: mapMutations.bind(null, namespace),
    mapActions: mapActions.bind(null, namespace) };
};

/**
    * Normalize the map
    * normalizeMap([1, 2, 3]) => [ { key: 1, val: 1 }, { key: 2, val: 2 }, { key: 3, val: 3 } ]
    * normalizeMap({a: 1, b: 2, c: 3}) => [ { key: 'a', val: 1 }, { key: 'b', val: 2 }, { key: 'c', val: 3 } ]
    * @param {Array|Object} map
    * @return {Object}
    */exports.createNamespacedHelpers = createNamespacedHelpers;
function normalizeMap(map) {
  if (!isValidMap(map)) {
    return [];
  }
  return Array.isArray(map) ?
  map.map(function (key) {return { key: key, val: key };}) :
  Object.keys(map).map(function (key) {return { key: key, val: map[key] };});
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

var index = {
  Store: Store,
  install: install,
  version: '3.4.0',
  mapState: mapState,
  mapMutations: mapMutations,
  mapGetters: mapGetters,
  mapActions: mapActions,
  createNamespacedHelpers: createNamespacedHelpers };var _default =


index;exports.default = _default;

/***/ }),

/***/ 64:
/*!*********************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.log = log;exports.default = formatLog;function typof(v) {
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
      return p;}

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

/***/ }),

/***/ 66:
/*!******************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/uni-app-plus-nvue/dist/require-native-plugin.js ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = requireNativePlugin;function requireNativePlugin(name) {
  return weex.requireModule(name);
}

/***/ }),

/***/ 88:
/*!****************************************************************************************************************!*\
  !*** /Users/tongjie/Desktop/QNRTC-Uniapp/demo/js_sdk/QNRTC-UniPlugin-JS/QNRTC-UniPlugin-JS/RTCIndex.native.js ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {\n  if (k2 === undefined) k2 = k;\n  Object.defineProperty(o, k2, { enumerable: true, get: function get() {return m[k];} });\n} : function (o, m, k, k2) {\n  if (k2 === undefined) k2 = k;\n  o[k2] = m[k];\n});\nvar __exportStar = this && this.__exportStar || function (m, exports) {\n  for (var p in m) {if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);}\n};\nexports.__esModule = true;\nvar RTCEngine_1 = __webpack_require__(/*! ./class/RTCEngine */ 89);\nexports[\"default\"] = RTCEngine_1[\"default\"];\n__exportStar(__webpack_require__(/*! ./enum/RTCEnum */ 91), exports);\n__exportStar(__webpack_require__(/*! ./interface/RTCInterface */ 104), exports);\n__exportStar(__webpack_require__(/*! ./RTCEvent */ 105), exports);\n__exportStar(__webpack_require__(/*! ./class/RTCClient */ 92), exports);\n__exportStar(__webpack_require__(/*! ./class/RTCCameraVideoTrack */ 98), exports);\n__exportStar(__webpack_require__(/*! ./class/RTCLocalAudioTrack */ 101), exports);\n__exportStar(__webpack_require__(/*! ./class/RTCLocalTrack */ 97), exports);\n__exportStar(__webpack_require__(/*! ./class/RTCLocalVideoTrack */ 99), exports);\n__exportStar(__webpack_require__(/*! ./class/RTCMicrophoneAudioTrack */ 100), exports);\n__exportStar(__webpack_require__(/*! ./class/RTCRemoteAudioTrack */ 96), exports);\n__exportStar(__webpack_require__(/*! ./class/RTCRemoteTrack */ 94), exports);\n__exportStar(__webpack_require__(/*! ./class/RTCRemoteVideoTrack */ 93), exports);\n__exportStar(__webpack_require__(/*! ./class/RTCScreenVideoTrack */ 103), exports);\n__exportStar(__webpack_require__(/*! ./class/RTCTrack */ 95), exports);\n__exportStar(__webpack_require__(/*! ./class/RTCAudioMixer */ 102), exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vanNfc2RrL1FOUlRDLVVuaVBsdWdpbi1KUy9RTlJUQy1VbmlQbHVnaW4tSlMvUlRDSW5kZXgubmF0aXZlLmpzIl0sIm5hbWVzIjpbIl9fY3JlYXRlQmluZGluZyIsIk9iamVjdCIsImNyZWF0ZSIsIm8iLCJtIiwiayIsImsyIiwidW5kZWZpbmVkIiwiZGVmaW5lUHJvcGVydHkiLCJlbnVtZXJhYmxlIiwiZ2V0IiwiX19leHBvcnRTdGFyIiwiZXhwb3J0cyIsInAiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJfX2VzTW9kdWxlIiwiUlRDRW5naW5lXzEiLCJyZXF1aXJlIl0sIm1hcHBpbmdzIjoiQUFBYTtBQUNiLElBQUlBLGVBQWUsR0FBSSxRQUFRLEtBQUtBLGVBQWQsS0FBbUNDLE1BQU0sQ0FBQ0MsTUFBUCxHQUFpQixVQUFTQyxDQUFULEVBQVlDLENBQVosRUFBZUMsQ0FBZixFQUFrQkMsRUFBbEIsRUFBc0I7QUFDNUYsTUFBSUEsRUFBRSxLQUFLQyxTQUFYLEVBQXNCRCxFQUFFLEdBQUdELENBQUw7QUFDdEJKLFFBQU0sQ0FBQ08sY0FBUCxDQUFzQkwsQ0FBdEIsRUFBeUJHLEVBQXpCLEVBQTZCLEVBQUVHLFVBQVUsRUFBRSxJQUFkLEVBQW9CQyxHQUFHLEVBQUUsZUFBVyxDQUFFLE9BQU9OLENBQUMsQ0FBQ0MsQ0FBRCxDQUFSLENBQWMsQ0FBcEQsRUFBN0I7QUFDSCxDQUh3RCxHQUduRCxVQUFTRixDQUFULEVBQVlDLENBQVosRUFBZUMsQ0FBZixFQUFrQkMsRUFBbEIsRUFBc0I7QUFDeEIsTUFBSUEsRUFBRSxLQUFLQyxTQUFYLEVBQXNCRCxFQUFFLEdBQUdELENBQUw7QUFDdEJGLEdBQUMsQ0FBQ0csRUFBRCxDQUFELEdBQVFGLENBQUMsQ0FBQ0MsQ0FBRCxDQUFUO0FBQ0gsQ0FOcUIsQ0FBdEI7QUFPQSxJQUFJTSxZQUFZLEdBQUksUUFBUSxLQUFLQSxZQUFkLElBQStCLFVBQVNQLENBQVQsRUFBWVEsT0FBWixFQUFxQjtBQUNuRSxPQUFLLElBQUlDLENBQVQsSUFBY1QsQ0FBZCxHQUFpQixJQUFJUyxDQUFDLEtBQUssU0FBTixJQUFtQixDQUFDWixNQUFNLENBQUNhLFNBQVAsQ0FBaUJDLGNBQWpCLENBQWdDQyxJQUFoQyxDQUFxQ0osT0FBckMsRUFBOENDLENBQTlDLENBQXhCLEVBQTBFYixlQUFlLENBQUNZLE9BQUQsRUFBVVIsQ0FBVixFQUFhUyxDQUFiLENBQWYsQ0FBM0Y7QUFDSCxDQUZEO0FBR0FELE9BQU8sQ0FBQ0ssVUFBUixHQUFxQixJQUFyQjtBQUNBLElBQUlDLFdBQVcsR0FBR0MsbUJBQU8sQ0FBQywyQkFBRCxDQUF6QjtBQUNBUCxPQUFPLENBQUMsU0FBRCxDQUFQLEdBQXFCTSxXQUFXLENBQUMsU0FBRCxDQUFoQztBQUNBUCxZQUFZLENBQUNRLG1CQUFPLENBQUMsd0JBQUQsQ0FBUixFQUE0QlAsT0FBNUIsQ0FBWjtBQUNBRCxZQUFZLENBQUNRLG1CQUFPLENBQUMsbUNBQUQsQ0FBUixFQUFzQ1AsT0FBdEMsQ0FBWjtBQUNBRCxZQUFZLENBQUNRLG1CQUFPLENBQUMscUJBQUQsQ0FBUixFQUF3QlAsT0FBeEIsQ0FBWjtBQUNBRCxZQUFZLENBQUNRLG1CQUFPLENBQUMsMkJBQUQsQ0FBUixFQUErQlAsT0FBL0IsQ0FBWjtBQUNBRCxZQUFZLENBQUNRLG1CQUFPLENBQUMscUNBQUQsQ0FBUixFQUF5Q1AsT0FBekMsQ0FBWjtBQUNBRCxZQUFZLENBQUNRLG1CQUFPLENBQUMscUNBQUQsQ0FBUixFQUF3Q1AsT0FBeEMsQ0FBWjtBQUNBRCxZQUFZLENBQUNRLG1CQUFPLENBQUMsK0JBQUQsQ0FBUixFQUFtQ1AsT0FBbkMsQ0FBWjtBQUNBRCxZQUFZLENBQUNRLG1CQUFPLENBQUMsb0NBQUQsQ0FBUixFQUF3Q1AsT0FBeEMsQ0FBWjtBQUNBRCxZQUFZLENBQUNRLG1CQUFPLENBQUMsMENBQUQsQ0FBUixFQUE2Q1AsT0FBN0MsQ0FBWjtBQUNBRCxZQUFZLENBQUNRLG1CQUFPLENBQUMscUNBQUQsQ0FBUixFQUF5Q1AsT0FBekMsQ0FBWjtBQUNBRCxZQUFZLENBQUNRLG1CQUFPLENBQUMsZ0NBQUQsQ0FBUixFQUFvQ1AsT0FBcEMsQ0FBWjtBQUNBRCxZQUFZLENBQUNRLG1CQUFPLENBQUMscUNBQUQsQ0FBUixFQUF5Q1AsT0FBekMsQ0FBWjtBQUNBRCxZQUFZLENBQUNRLG1CQUFPLENBQUMsc0NBQUQsQ0FBUixFQUF5Q1AsT0FBekMsQ0FBWjtBQUNBRCxZQUFZLENBQUNRLG1CQUFPLENBQUMsMEJBQUQsQ0FBUixFQUE4QlAsT0FBOUIsQ0FBWjtBQUNBRCxZQUFZLENBQUNRLG1CQUFPLENBQUMsZ0NBQUQsQ0FBUixFQUFtQ1AsT0FBbkMsQ0FBWiIsImZpbGUiOiI4OC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xudmFyIF9fY3JlYXRlQmluZGluZyA9ICh0aGlzICYmIHRoaXMuX19jcmVhdGVCaW5kaW5nKSB8fCAoT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIGsyLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24oKSB7IHJldHVybiBtW2tdOyB9IH0pO1xufSkgOiAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xuICAgIG9bazJdID0gbVtrXTtcbn0pKTtcbnZhciBfX2V4cG9ydFN0YXIgPSAodGhpcyAmJiB0aGlzLl9fZXhwb3J0U3RhcikgfHwgZnVuY3Rpb24obSwgZXhwb3J0cykge1xuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKHAgIT09IFwiZGVmYXVsdFwiICYmICFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoZXhwb3J0cywgcCkpIF9fY3JlYXRlQmluZGluZyhleHBvcnRzLCBtLCBwKTtcbn07XG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xudmFyIFJUQ0VuZ2luZV8xID0gcmVxdWlyZShcIi4vY2xhc3MvUlRDRW5naW5lXCIpO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBSVENFbmdpbmVfMVtcImRlZmF1bHRcIl07XG5fX2V4cG9ydFN0YXIocmVxdWlyZShcIi4vZW51bS9SVENFbnVtXCIpLCBleHBvcnRzKTtcbl9fZXhwb3J0U3RhcihyZXF1aXJlKFwiLi9pbnRlcmZhY2UvUlRDSW50ZXJmYWNlXCIpLCBleHBvcnRzKTtcbl9fZXhwb3J0U3RhcihyZXF1aXJlKFwiLi9SVENFdmVudFwiKSwgZXhwb3J0cyk7XG5fX2V4cG9ydFN0YXIocmVxdWlyZShcIi4vY2xhc3MvUlRDQ2xpZW50XCIpLCBleHBvcnRzKTtcbl9fZXhwb3J0U3RhcihyZXF1aXJlKFwiLi9jbGFzcy9SVENDYW1lcmFWaWRlb1RyYWNrXCIpLCBleHBvcnRzKTtcbl9fZXhwb3J0U3RhcihyZXF1aXJlKFwiLi9jbGFzcy9SVENMb2NhbEF1ZGlvVHJhY2tcIiksIGV4cG9ydHMpO1xuX19leHBvcnRTdGFyKHJlcXVpcmUoXCIuL2NsYXNzL1JUQ0xvY2FsVHJhY2tcIiksIGV4cG9ydHMpO1xuX19leHBvcnRTdGFyKHJlcXVpcmUoXCIuL2NsYXNzL1JUQ0xvY2FsVmlkZW9UcmFja1wiKSwgZXhwb3J0cyk7XG5fX2V4cG9ydFN0YXIocmVxdWlyZShcIi4vY2xhc3MvUlRDTWljcm9waG9uZUF1ZGlvVHJhY2tcIiksIGV4cG9ydHMpO1xuX19leHBvcnRTdGFyKHJlcXVpcmUoXCIuL2NsYXNzL1JUQ1JlbW90ZUF1ZGlvVHJhY2tcIiksIGV4cG9ydHMpO1xuX19leHBvcnRTdGFyKHJlcXVpcmUoXCIuL2NsYXNzL1JUQ1JlbW90ZVRyYWNrXCIpLCBleHBvcnRzKTtcbl9fZXhwb3J0U3RhcihyZXF1aXJlKFwiLi9jbGFzcy9SVENSZW1vdGVWaWRlb1RyYWNrXCIpLCBleHBvcnRzKTtcbl9fZXhwb3J0U3RhcihyZXF1aXJlKFwiLi9jbGFzcy9SVENTY3JlZW5WaWRlb1RyYWNrXCIpLCBleHBvcnRzKTtcbl9fZXhwb3J0U3RhcihyZXF1aXJlKFwiLi9jbGFzcy9SVENUcmFja1wiKSwgZXhwb3J0cyk7XG5fX2V4cG9ydFN0YXIocmVxdWlyZShcIi4vY2xhc3MvUlRDQXVkaW9NaXhlclwiKSwgZXhwb3J0cyk7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///88\n");

/***/ }),

/***/ 89:
/*!****************************************************************************************************************!*\
  !*** /Users/tongjie/Desktop/QNRTC-Uniapp/demo/js_sdk/QNRTC-UniPlugin-JS/QNRTC-UniPlugin-JS/class/RTCEngine.js ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__webpack_provided_uni_dot_requireNativePlugin) {\nvar __assign = this && this.__assign || function () {\n  __assign = Object.assign || function (t) {\n    for (var s, i = 1, n = arguments.length; i < n; i++) {\n      s = arguments[i];\n      for (var p in s) {if (Object.prototype.hasOwnProperty.call(s, p))\n        t[p] = s[p];}\n    }\n    return t;\n  };\n  return __assign.apply(this, arguments);\n};\nexports.__esModule = true;\nvar RTCPreset_1 = __webpack_require__(/*! ../RTCPreset */ 90);\nvar RTCClient_1 = __webpack_require__(/*! ./RTCClient */ 92);\nvar RTCCameraVideoTrack_1 = __webpack_require__(/*! ./RTCCameraVideoTrack */ 98);\nvar RTCMicrophoneAudioTrack_1 = __webpack_require__(/*! ./RTCMicrophoneAudioTrack */ 100);\nvar RTCScreenVideoTrack_1 = __webpack_require__(/*! ./RTCScreenVideoTrack */ 103);\nvar RTCTrack_1 = __webpack_require__(/*! ./RTCTrack */ 95);\nvar QNRtcEngine = __webpack_provided_uni_dot_requireNativePlugin('QNRTC-UniPlugin-QNRtcEngine');\nvar QNEvent = __webpack_provided_uni_dot_requireNativePlugin('globalEvent');\nvar QNRtcTrack = __webpack_provided_uni_dot_requireNativePlugin('QNRTC-UniPlugin-QNRtcTrack');\nvar QNRTCClientPlugin = __webpack_provided_uni_dot_requireNativePlugin('QNRTC-UniPlugin-QNRtcClient');\nvar QNRtcAudioMixer = __webpack_provided_uni_dot_requireNativePlugin('QNRTC-UniPlugin-QNRtcAudioMixer');\nvar QNRTC = function () {\n  function QNRTC() {\n  }\n  QNRTC.on = function (name, listener) {\n    QNEvent.addEventListener(name, listener);\n  };\n  QNRTC.off = function (name, listener) {\n    QNEvent.removeEventListener(name, listener);\n  };\n  QNRTC.requestPermission = function (callback) {\n    return QNRtcTrack.requestPermission(callback);\n  };\n  QNRTC.isScreenCaptureSupported = function () {\n    return QNRtcTrack.isScreenCaptureSupported();\n  };\n  QNRTC.configRTC = function (config) {\n    var _config = __assign(__assign({}, RTCPreset_1.QNRTCConfigurationPreset), config);\n    try {\n      QNRtcEngine.initDelegate();\n    }\n    catch (e) {}\n    QNRtcTrack.initDelegate();\n    QNRTCClientPlugin.initDelegate();\n    QNRtcAudioMixer.initDelegate();\n    return QNRtcEngine.configRTC(_config);\n  };\n  QNRTC.deinit = function () {\n    return QNRtcEngine.deinit();\n  };\n  QNRTC.createClient = function () {\n    QNRtcEngine.createRTCClient();\n    return new RTCClient_1.QNRTCClient();\n  };\n  QNRTC.createMicrophoneAudioTrack = function (config) {\n    var _config = __assign(__assign({}, RTCPreset_1.QNMicrophoneAudioTrackConfigPreset), config);\n    var result = QNRtcEngine.createMicrophoneAudioTrack(_config);\n    return new RTCMicrophoneAudioTrack_1.QNMicrophoneAudioTrack(__assign({ trackID: '', raw: result, userID: '' }, result));\n  };\n  QNRTC.createCameraVideoTrack = function (config) {\n    var _config = __assign(__assign({}, RTCPreset_1.QNCameraVideoTrackConfigPreset), config);\n    var result = QNRtcEngine.createCameraVideoTrack(_config);\n    return new RTCCameraVideoTrack_1.QNCameraVideoTrack(__assign({ trackID: '', raw: result, userID: '' }, result));\n  };\n  QNRTC.createScreenVideoTrack = function (config) {\n    var _config = __assign(__assign({}, RTCPreset_1.QNScreenVideoTrackConfigPreset), config);\n    var result = QNRtcEngine.createScreenVideoTrack(_config);\n    return new RTCScreenVideoTrack_1.QNScreenVideoTrack(__assign({ trackID: '', raw: result, userID: '' }, result));\n  };\n  QNRTC.createCustomAudioTrack = function (config) {\n    var _config = __assign(__assign({}, RTCPreset_1.QNCustomAudioTrackConfigPreset), config);\n    var result = QNRtcEngine.createCustomAudioTrack(_config);\n    return new RTCTrack_1.QNTrack(__assign({ trackID: '', raw: result, userID: '' }, result));\n  };\n  QNRTC.createCustomVideoTrack = function (config) {\n    var _config = __assign(__assign({}, RTCPreset_1.QNCustomVideoTrackConfigPreset), config);\n    var result = QNRtcEngine.createCustomVideoTrack(_config);\n    return new RTCTrack_1.QNTrack(__assign({ trackID: '', raw: result, userID: '' }, result));\n  };\n  QNRTC.setAudioRouteToSpeakerphone = function (audioRouteToSpeakerphone) {\n    return QNRtcEngine.setAudioRouteToSpeakerphone(audioRouteToSpeakerphone);\n  };\n  QNRTC.enableFileLogging = function () {\n    return QNRtcEngine.enableFileLogging();\n  };\n  return QNRTC;\n}();\nexports[\"default\"] = QNRTC;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/uni-app-plus-nvue/dist/require-native-plugin.js */ 66)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vanNfc2RrL1FOUlRDLVVuaVBsdWdpbi1KUy9RTlJUQy1VbmlQbHVnaW4tSlMvY2xhc3MvUlRDRW5naW5lLmpzIl0sIm5hbWVzIjpbIl9fYXNzaWduIiwiT2JqZWN0IiwiYXNzaWduIiwidCIsInMiLCJpIiwibiIsImFyZ3VtZW50cyIsImxlbmd0aCIsInAiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJhcHBseSIsImV4cG9ydHMiLCJfX2VzTW9kdWxlIiwiUlRDUHJlc2V0XzEiLCJyZXF1aXJlIiwiUlRDQ2xpZW50XzEiLCJSVENDYW1lcmFWaWRlb1RyYWNrXzEiLCJSVENNaWNyb3Bob25lQXVkaW9UcmFja18xIiwiUlRDU2NyZWVuVmlkZW9UcmFja18xIiwiUlRDVHJhY2tfMSIsIlFOUnRjRW5naW5lIiwidW5pIiwiUU5FdmVudCIsIlFOUnRjVHJhY2siLCJRTlJUQ0NsaWVudFBsdWdpbiIsIlFOUnRjQXVkaW9NaXhlciIsIlFOUlRDIiwib24iLCJuYW1lIiwibGlzdGVuZXIiLCJhZGRFdmVudExpc3RlbmVyIiwib2ZmIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInJlcXVlc3RQZXJtaXNzaW9uIiwiY2FsbGJhY2siLCJpc1NjcmVlbkNhcHR1cmVTdXBwb3J0ZWQiLCJjb25maWdSVEMiLCJjb25maWciLCJfY29uZmlnIiwiUU5SVENDb25maWd1cmF0aW9uUHJlc2V0IiwiaW5pdERlbGVnYXRlIiwiZSIsImRlaW5pdCIsImNyZWF0ZUNsaWVudCIsImNyZWF0ZVJUQ0NsaWVudCIsIlFOUlRDQ2xpZW50IiwiY3JlYXRlTWljcm9waG9uZUF1ZGlvVHJhY2siLCJRTk1pY3JvcGhvbmVBdWRpb1RyYWNrQ29uZmlnUHJlc2V0IiwicmVzdWx0IiwiUU5NaWNyb3Bob25lQXVkaW9UcmFjayIsInRyYWNrSUQiLCJyYXciLCJ1c2VySUQiLCJjcmVhdGVDYW1lcmFWaWRlb1RyYWNrIiwiUU5DYW1lcmFWaWRlb1RyYWNrQ29uZmlnUHJlc2V0IiwiUU5DYW1lcmFWaWRlb1RyYWNrIiwiY3JlYXRlU2NyZWVuVmlkZW9UcmFjayIsIlFOU2NyZWVuVmlkZW9UcmFja0NvbmZpZ1ByZXNldCIsIlFOU2NyZWVuVmlkZW9UcmFjayIsImNyZWF0ZUN1c3RvbUF1ZGlvVHJhY2siLCJRTkN1c3RvbUF1ZGlvVHJhY2tDb25maWdQcmVzZXQiLCJRTlRyYWNrIiwiY3JlYXRlQ3VzdG9tVmlkZW9UcmFjayIsIlFOQ3VzdG9tVmlkZW9UcmFja0NvbmZpZ1ByZXNldCIsInNldEF1ZGlvUm91dGVUb1NwZWFrZXJwaG9uZSIsImF1ZGlvUm91dGVUb1NwZWFrZXJwaG9uZSIsImVuYWJsZUZpbGVMb2dnaW5nIl0sIm1hcHBpbmdzIjoiQUFBQSxzRkFBYTtBQUNiLElBQUlBLFFBQVEsR0FBSSxRQUFRLEtBQUtBLFFBQWQsSUFBMkIsWUFBWTtBQUNsREEsVUFBUSxHQUFHQyxNQUFNLENBQUNDLE1BQVAsSUFBaUIsVUFBU0MsQ0FBVCxFQUFZO0FBQ3BDLFNBQUssSUFBSUMsQ0FBSixFQUFPQyxDQUFDLEdBQUcsQ0FBWCxFQUFjQyxDQUFDLEdBQUdDLFNBQVMsQ0FBQ0MsTUFBakMsRUFBeUNILENBQUMsR0FBR0MsQ0FBN0MsRUFBZ0RELENBQUMsRUFBakQsRUFBcUQ7QUFDakRELE9BQUMsR0FBR0csU0FBUyxDQUFDRixDQUFELENBQWI7QUFDQSxXQUFLLElBQUlJLENBQVQsSUFBY0wsQ0FBZCxHQUFpQixJQUFJSCxNQUFNLENBQUNTLFNBQVAsQ0FBaUJDLGNBQWpCLENBQWdDQyxJQUFoQyxDQUFxQ1IsQ0FBckMsRUFBd0NLLENBQXhDLENBQUo7QUFDYk4sU0FBQyxDQUFDTSxDQUFELENBQUQsR0FBT0wsQ0FBQyxDQUFDSyxDQUFELENBQVIsQ0FESjtBQUVIO0FBQ0QsV0FBT04sQ0FBUDtBQUNILEdBUEQ7QUFRQSxTQUFPSCxRQUFRLENBQUNhLEtBQVQsQ0FBZSxJQUFmLEVBQXFCTixTQUFyQixDQUFQO0FBQ0gsQ0FWRDtBQVdBTyxPQUFPLENBQUNDLFVBQVIsR0FB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a0VBZixPQUFPLENBQUMsU0FBRCxDQUFQLEdBQXFCZSxLQUFyQixDIiwiZmlsZSI6Ijg5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBmdW5jdGlvbiAoKSB7XG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKVxuICAgICAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0O1xuICAgIH07XG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59O1xuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbnZhciBSVENQcmVzZXRfMSA9IHJlcXVpcmUoXCIuLi9SVENQcmVzZXRcIik7XG52YXIgUlRDQ2xpZW50XzEgPSByZXF1aXJlKFwiLi9SVENDbGllbnRcIik7XG52YXIgUlRDQ2FtZXJhVmlkZW9UcmFja18xID0gcmVxdWlyZShcIi4vUlRDQ2FtZXJhVmlkZW9UcmFja1wiKTtcbnZhciBSVENNaWNyb3Bob25lQXVkaW9UcmFja18xID0gcmVxdWlyZShcIi4vUlRDTWljcm9waG9uZUF1ZGlvVHJhY2tcIik7XG52YXIgUlRDU2NyZWVuVmlkZW9UcmFja18xID0gcmVxdWlyZShcIi4vUlRDU2NyZWVuVmlkZW9UcmFja1wiKTtcbnZhciBSVENUcmFja18xID0gcmVxdWlyZShcIi4vUlRDVHJhY2tcIik7XG52YXIgUU5SdGNFbmdpbmUgPSB1bmkucmVxdWlyZU5hdGl2ZVBsdWdpbignUU5SVEMtVW5pUGx1Z2luLVFOUnRjRW5naW5lJyk7XG52YXIgUU5FdmVudCA9IHVuaS5yZXF1aXJlTmF0aXZlUGx1Z2luKCdnbG9iYWxFdmVudCcpO1xudmFyIFFOUnRjVHJhY2sgPSB1bmkucmVxdWlyZU5hdGl2ZVBsdWdpbignUU5SVEMtVW5pUGx1Z2luLVFOUnRjVHJhY2snKTtcbnZhciBRTlJUQ0NsaWVudFBsdWdpbiA9IHVuaS5yZXF1aXJlTmF0aXZlUGx1Z2luKCdRTlJUQy1VbmlQbHVnaW4tUU5SdGNDbGllbnQnKTtcbnZhciBRTlJ0Y0F1ZGlvTWl4ZXIgPSB1bmkucmVxdWlyZU5hdGl2ZVBsdWdpbignUU5SVEMtVW5pUGx1Z2luLVFOUnRjQXVkaW9NaXhlcicpO1xudmFyIFFOUlRDID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBRTlJUQygpIHtcbiAgICB9XG4gICAgUU5SVEMub24gPSBmdW5jdGlvbiAobmFtZSwgbGlzdGVuZXIpIHtcbiAgICAgICAgUU5FdmVudC5hZGRFdmVudExpc3RlbmVyKG5hbWUsIGxpc3RlbmVyKTtcbiAgICB9O1xuICAgIFFOUlRDLm9mZiA9IGZ1bmN0aW9uIChuYW1lLCBsaXN0ZW5lcikge1xuICAgICAgICBRTkV2ZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIobmFtZSwgbGlzdGVuZXIpO1xuICAgIH07XG4gICAgUU5SVEMucmVxdWVzdFBlcm1pc3Npb24gPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICAgICAgcmV0dXJuIFFOUnRjVHJhY2sucmVxdWVzdFBlcm1pc3Npb24oY2FsbGJhY2spO1xuICAgIH07XG4gICAgUU5SVEMuaXNTY3JlZW5DYXB0dXJlU3VwcG9ydGVkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gUU5SdGNUcmFjay5pc1NjcmVlbkNhcHR1cmVTdXBwb3J0ZWQoKTtcbiAgICB9O1xuICAgIFFOUlRDLmNvbmZpZ1JUQyA9IGZ1bmN0aW9uIChjb25maWcpIHtcbiAgICAgICAgdmFyIF9jb25maWcgPSBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgUlRDUHJlc2V0XzEuUU5SVENDb25maWd1cmF0aW9uUHJlc2V0KSwgY29uZmlnKTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIFFOUnRjRW5naW5lLmluaXREZWxlZ2F0ZSgpO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlKSB7IH1cbiAgICAgICAgUU5SdGNUcmFjay5pbml0RGVsZWdhdGUoKTtcbiAgICAgICAgUU5SVENDbGllbnRQbHVnaW4uaW5pdERlbGVnYXRlKCk7XG4gICAgICAgIFFOUnRjQXVkaW9NaXhlci5pbml0RGVsZWdhdGUoKTtcbiAgICAgICAgcmV0dXJuIFFOUnRjRW5naW5lLmNvbmZpZ1JUQyhfY29uZmlnKTtcbiAgICB9O1xuICAgIFFOUlRDLmRlaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIFFOUnRjRW5naW5lLmRlaW5pdCgpO1xuICAgIH07XG4gICAgUU5SVEMuY3JlYXRlQ2xpZW50ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBRTlJ0Y0VuZ2luZS5jcmVhdGVSVENDbGllbnQoKTtcbiAgICAgICAgcmV0dXJuIG5ldyBSVENDbGllbnRfMS5RTlJUQ0NsaWVudCgpO1xuICAgIH07XG4gICAgUU5SVEMuY3JlYXRlTWljcm9waG9uZUF1ZGlvVHJhY2sgPSBmdW5jdGlvbiAoY29uZmlnKSB7XG4gICAgICAgIHZhciBfY29uZmlnID0gX19hc3NpZ24oX19hc3NpZ24oe30sIFJUQ1ByZXNldF8xLlFOTWljcm9waG9uZUF1ZGlvVHJhY2tDb25maWdQcmVzZXQpLCBjb25maWcpO1xuICAgICAgICB2YXIgcmVzdWx0ID0gUU5SdGNFbmdpbmUuY3JlYXRlTWljcm9waG9uZUF1ZGlvVHJhY2soX2NvbmZpZyk7XG4gICAgICAgIHJldHVybiBuZXcgUlRDTWljcm9waG9uZUF1ZGlvVHJhY2tfMS5RTk1pY3JvcGhvbmVBdWRpb1RyYWNrKF9fYXNzaWduKHsgdHJhY2tJRDogJycsIHJhdzogcmVzdWx0LCB1c2VySUQ6ICcnIH0sIHJlc3VsdCkpO1xuICAgIH07XG4gICAgUU5SVEMuY3JlYXRlQ2FtZXJhVmlkZW9UcmFjayA9IGZ1bmN0aW9uIChjb25maWcpIHtcbiAgICAgICAgdmFyIF9jb25maWcgPSBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgUlRDUHJlc2V0XzEuUU5DYW1lcmFWaWRlb1RyYWNrQ29uZmlnUHJlc2V0KSwgY29uZmlnKTtcbiAgICAgICAgdmFyIHJlc3VsdCA9IFFOUnRjRW5naW5lLmNyZWF0ZUNhbWVyYVZpZGVvVHJhY2soX2NvbmZpZyk7XG4gICAgICAgIHJldHVybiBuZXcgUlRDQ2FtZXJhVmlkZW9UcmFja18xLlFOQ2FtZXJhVmlkZW9UcmFjayhfX2Fzc2lnbih7IHRyYWNrSUQ6ICcnLCByYXc6IHJlc3VsdCwgdXNlcklEOiAnJyB9LCByZXN1bHQpKTtcbiAgICB9O1xuICAgIFFOUlRDLmNyZWF0ZVNjcmVlblZpZGVvVHJhY2sgPSBmdW5jdGlvbiAoY29uZmlnKSB7XG4gICAgICAgIHZhciBfY29uZmlnID0gX19hc3NpZ24oX19hc3NpZ24oe30sIFJUQ1ByZXNldF8xLlFOU2NyZWVuVmlkZW9UcmFja0NvbmZpZ1ByZXNldCksIGNvbmZpZyk7XG4gICAgICAgIHZhciByZXN1bHQgPSBRTlJ0Y0VuZ2luZS5jcmVhdGVTY3JlZW5WaWRlb1RyYWNrKF9jb25maWcpO1xuICAgICAgICByZXR1cm4gbmV3IFJUQ1NjcmVlblZpZGVvVHJhY2tfMS5RTlNjcmVlblZpZGVvVHJhY2soX19hc3NpZ24oeyB0cmFja0lEOiAnJywgcmF3OiByZXN1bHQsIHVzZXJJRDogJycgfSwgcmVzdWx0KSk7XG4gICAgfTtcbiAgICBRTlJUQy5jcmVhdGVDdXN0b21BdWRpb1RyYWNrID0gZnVuY3Rpb24gKGNvbmZpZykge1xuICAgICAgICB2YXIgX2NvbmZpZyA9IF9fYXNzaWduKF9fYXNzaWduKHt9LCBSVENQcmVzZXRfMS5RTkN1c3RvbUF1ZGlvVHJhY2tDb25maWdQcmVzZXQpLCBjb25maWcpO1xuICAgICAgICB2YXIgcmVzdWx0ID0gUU5SdGNFbmdpbmUuY3JlYXRlQ3VzdG9tQXVkaW9UcmFjayhfY29uZmlnKTtcbiAgICAgICAgcmV0dXJuIG5ldyBSVENUcmFja18xLlFOVHJhY2soX19hc3NpZ24oeyB0cmFja0lEOiAnJywgcmF3OiByZXN1bHQsIHVzZXJJRDogJycgfSwgcmVzdWx0KSk7XG4gICAgfTtcbiAgICBRTlJUQy5jcmVhdGVDdXN0b21WaWRlb1RyYWNrID0gZnVuY3Rpb24gKGNvbmZpZykge1xuICAgICAgICB2YXIgX2NvbmZpZyA9IF9fYXNzaWduKF9fYXNzaWduKHt9LCBSVENQcmVzZXRfMS5RTkN1c3RvbVZpZGVvVHJhY2tDb25maWdQcmVzZXQpLCBjb25maWcpO1xuICAgICAgICB2YXIgcmVzdWx0ID0gUU5SdGNFbmdpbmUuY3JlYXRlQ3VzdG9tVmlkZW9UcmFjayhfY29uZmlnKTtcbiAgICAgICAgcmV0dXJuIG5ldyBSVENUcmFja18xLlFOVHJhY2soX19hc3NpZ24oeyB0cmFja0lEOiAnJywgcmF3OiByZXN1bHQsIHVzZXJJRDogJycgfSwgcmVzdWx0KSk7XG4gICAgfTtcbiAgICBRTlJUQy5zZXRBdWRpb1JvdXRlVG9TcGVha2VycGhvbmUgPSBmdW5jdGlvbiAoYXVkaW9Sb3V0ZVRvU3BlYWtlcnBob25lKSB7XG4gICAgICAgIHJldHVybiBRTlJ0Y0VuZ2luZS5zZXRBdWRpb1JvdXRlVG9TcGVha2VycGhvbmUoYXVkaW9Sb3V0ZVRvU3BlYWtlcnBob25lKTtcbiAgICB9O1xuICAgIFFOUlRDLmVuYWJsZUZpbGVMb2dnaW5nID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gUU5SdGNFbmdpbmUuZW5hYmxlRmlsZUxvZ2dpbmcoKTtcbiAgICB9O1xuICAgIHJldHVybiBRTlJUQztcbn0oKSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IFFOUlRDO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///89\n");

/***/ }),

/***/ 90:
/*!**********************************************************************************************************!*\
  !*** /Users/tongjie/Desktop/QNRTC-Uniapp/demo/js_sdk/QNRTC-UniPlugin-JS/QNRTC-UniPlugin-JS/RTCPreset.js ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nexports.__esModule = true;\nexports.QNCustomVideoTrackConfigPreset = exports.QNScreenVideoTrackConfigPreset = exports.QNCameraVideoTrackConfigPreset = exports.QNCustomAudioTrackConfigPreset = exports.QNMicrophoneAudioTrackConfigPreset = exports.QNRTCConfigurationPreset = void 0;\nvar RTCEnum_1 = __webpack_require__(/*! ./enum/RTCEnum */ 91);\nexports.QNRTCConfigurationPreset = {\n  policy: RTCEnum_1.QNRTCPolicy.forceUDP,\n  stereo: false,\n  logLevel: RTCEnum_1.QNRTCLogLevel.info,\n  bwePolicy: RTCEnum_1.QNRTCBwePolicy.TCC,\n  allowAudioMixWithOthers: true,\n  hWCodecEnabled: true,\n  maintainResolution: false,\n  fieldTrials: '',\n  encoderQualityMode: false,\n  isAEC3Enabled: true };\n\nexports.QNMicrophoneAudioTrackConfigPreset = {\n  tag: '',\n  bitrate: 24,\n  BitsPerSample: 16,\n  ChannelCount: 1,\n  SampleRate: 16000,\n  communicationModeOn: true };\n\nexports.QNCustomAudioTrackConfigPreset = {\n  tag: '',\n  bitrate: 24,\n  BitsPerSample: 16,\n  ChannelCount: 1,\n  SampleRate: 16000 };\n\nexports.QNCameraVideoTrackConfigPreset = {\n  tag: '',\n  bitrate: 800,\n  width: 640,\n  height: 480,\n  multiStreamEnable: false,\n  cameraFacing: RTCEnum_1.QNRTCCameraFacing.front,\n  frameRate: 20,\n  captureWidth: 640,\n  captureHeight: 480,\n  captureFrameRate: 20,\n  sessionPreset: RTCEnum_1.QNSessionPresetType.AVCaptureSessionPreset640x480 };\n\nexports.QNScreenVideoTrackConfigPreset = {\n  tag: '',\n  bitrate: 800,\n  width: 640,\n  height: 480,\n  multiStreamEnable: false,\n  frameRate: 20 };\n\nexports.QNCustomVideoTrackConfigPreset = {\n  tag: '',\n  bitrate: 800,\n  width: 640,\n  height: 480,\n  multiStreamEnable: false,\n  frameRate: 20 };//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vanNfc2RrL1FOUlRDLVVuaVBsdWdpbi1KUy9RTlJUQy1VbmlQbHVnaW4tSlMvUlRDUHJlc2V0LmpzIl0sIm5hbWVzIjpbImV4cG9ydHMiLCJfX2VzTW9kdWxlIiwiUU5DdXN0b21WaWRlb1RyYWNrQ29uZmlnUHJlc2V0IiwiUU5TY3JlZW5WaWRlb1RyYWNrQ29uZmlnUHJlc2V0IiwiUU5DYW1lcmFWaWRlb1RyYWNrQ29uZmlnUHJlc2V0IiwiUU5DdXN0b21BdWRpb1RyYWNrQ29uZmlnUHJlc2V0IiwiUU5NaWNyb3Bob25lQXVkaW9UcmFja0NvbmZpZ1ByZXNldCIsIlFOUlRDQ29uZmlndXJhdGlvblByZXNldCIsIlJUQ0VudW1fMSIsInJlcXVpcmUiLCJwb2xpY3kiLCJRTlJUQ1BvbGljeSIsImZvcmNlVURQIiwic3RlcmVvIiwibG9nTGV2ZWwiLCJRTlJUQ0xvZ0xldmVsIiwiaW5mbyIsImJ3ZVBvbGljeSIsIlFOUlRDQndlUG9saWN5IiwiVENDIiwiYWxsb3dBdWRpb01peFdpdGhPdGhlcnMiLCJoV0NvZGVjRW5hYmxlZCIsIm1haW50YWluUmVzb2x1dGlvbiIsImZpZWxkVHJpYWxzIiwiZW5jb2RlclF1YWxpdHlNb2RlIiwiaXNBRUMzRW5hYmxlZCIsInRhZyIsImJpdHJhdGUiLCJCaXRzUGVyU2FtcGxlIiwiQ2hhbm5lbENvdW50IiwiU2FtcGxlUmF0ZSIsImNvbW11bmljYXRpb25Nb2RlT24iLCJ3aWR0aCIsImhlaWdodCIsIm11bHRpU3RyZWFtRW5hYmxlIiwiY2FtZXJhRmFjaW5nIiwiUU5SVENDYW1lcmFGYWNpbmciLCJmcm9udCIsImZyYW1lUmF0ZSIsImNhcHR1cmVXaWR0aCIsImNhcHR1cmVIZWlnaHQiLCJjYXB0dXJlRnJhbWVSYXRlIiwic2Vzc2lvblByZXNldCIsIlFOU2Vzc2lvblByZXNldFR5cGUiLCJBVkNhcHR1cmVTZXNzaW9uUHJlc2V0NjQweDQ4MCJdLCJtYXBwaW5ncyI6IkFBQWE7QUFDYkEsT0FBTyxDQUFDQyxVQUFSLEdBQXFCLElBQXJCO0FBQ0FELE9BQU8sQ0FBQ0UsOEJBQVIsR0FBeUNGLE9BQU8sQ0FBQ0csOEJBQVIsR0FBeUNILE9BQU8sQ0FBQ0ksOEJBQVIsR0FBeUNKLE9BQU8sQ0FBQ0ssOEJBQVIsR0FBeUNMLE9BQU8sQ0FBQ00sa0NBQVIsR0FBNkNOLE9BQU8sQ0FBQ08sd0JBQVIsR0FBbUMsS0FBSyxDQUF6UDtBQUNBLElBQUlDLFNBQVMsR0FBR0MsbUJBQU8sQ0FBQyx3QkFBRCxDQUF2QjtBQUNBVCxPQUFPLENBQUNPLHdCQUFSLEdBQW1DO0FBQy9CRyxRQUFNLEVBQUVGLFNBQVMsQ0FBQ0csV0FBVixDQUFzQkMsUUFEQztBQUUvQkMsUUFBTSxFQUFFLEtBRnVCO0FBRy9CQyxVQUFRLEVBQUVOLFNBQVMsQ0FBQ08sYUFBVixDQUF3QkMsSUFISDtBQUkvQkMsV0FBUyxFQUFFVCxTQUFTLENBQUNVLGNBQVYsQ0FBeUJDLEdBSkw7QUFLL0JDLHlCQUF1QixFQUFFLElBTE07QUFNL0JDLGdCQUFjLEVBQUUsSUFOZTtBQU8vQkMsb0JBQWtCLEVBQUUsS0FQVztBQVEvQkMsYUFBVyxFQUFFLEVBUmtCO0FBUy9CQyxvQkFBa0IsRUFBRSxLQVRXO0FBVS9CQyxlQUFhLEVBQUUsSUFWZ0IsRUFBbkM7O0FBWUF6QixPQUFPLENBQUNNLGtDQUFSLEdBQTZDO0FBQ3pDb0IsS0FBRyxFQUFFLEVBRG9DO0FBRXpDQyxTQUFPLEVBQUUsRUFGZ0M7QUFHekNDLGVBQWEsRUFBRSxFQUgwQjtBQUl6Q0MsY0FBWSxFQUFFLENBSjJCO0FBS3pDQyxZQUFVLEVBQUUsS0FMNkI7QUFNekNDLHFCQUFtQixFQUFFLElBTm9CLEVBQTdDOztBQVFBL0IsT0FBTyxDQUFDSyw4QkFBUixHQUF5QztBQUNyQ3FCLEtBQUcsRUFBRSxFQURnQztBQUVyQ0MsU0FBTyxFQUFFLEVBRjRCO0FBR3JDQyxlQUFhLEVBQUUsRUFIc0I7QUFJckNDLGNBQVksRUFBRSxDQUp1QjtBQUtyQ0MsWUFBVSxFQUFFLEtBTHlCLEVBQXpDOztBQU9BOUIsT0FBTyxDQUFDSSw4QkFBUixHQUF5QztBQUNyQ3NCLEtBQUcsRUFBRSxFQURnQztBQUVyQ0MsU0FBTyxFQUFFLEdBRjRCO0FBR3JDSyxPQUFLLEVBQUUsR0FIOEI7QUFJckNDLFFBQU0sRUFBRSxHQUo2QjtBQUtyQ0MsbUJBQWlCLEVBQUUsS0FMa0I7QUFNckNDLGNBQVksRUFBRTNCLFNBQVMsQ0FBQzRCLGlCQUFWLENBQTRCQyxLQU5MO0FBT3JDQyxXQUFTLEVBQUUsRUFQMEI7QUFRckNDLGNBQVksRUFBRSxHQVJ1QjtBQVNyQ0MsZUFBYSxFQUFFLEdBVHNCO0FBVXJDQyxrQkFBZ0IsRUFBRSxFQVZtQjtBQVdyQ0MsZUFBYSxFQUFFbEMsU0FBUyxDQUFDbUMsbUJBQVYsQ0FBOEJDLDZCQVhSLEVBQXpDOztBQWFBNUMsT0FBTyxDQUFDRyw4QkFBUixHQUF5QztBQUNyQ3VCLEtBQUcsRUFBRSxFQURnQztBQUVyQ0MsU0FBTyxFQUFFLEdBRjRCO0FBR3JDSyxPQUFLLEVBQUUsR0FIOEI7QUFJckNDLFFBQU0sRUFBRSxHQUo2QjtBQUtyQ0MsbUJBQWlCLEVBQUUsS0FMa0I7QUFNckNJLFdBQVMsRUFBRSxFQU4wQixFQUF6Qzs7QUFRQXRDLE9BQU8sQ0FBQ0UsOEJBQVIsR0FBeUM7QUFDckN3QixLQUFHLEVBQUUsRUFEZ0M7QUFFckNDLFNBQU8sRUFBRSxHQUY0QjtBQUdyQ0ssT0FBSyxFQUFFLEdBSDhCO0FBSXJDQyxRQUFNLEVBQUUsR0FKNkI7QUFLckNDLG1CQUFpQixFQUFFLEtBTGtCO0FBTXJDSSxXQUFTLEVBQUUsRUFOMEIsRUFBekMiLCJmaWxlIjoiOTAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLlFOQ3VzdG9tVmlkZW9UcmFja0NvbmZpZ1ByZXNldCA9IGV4cG9ydHMuUU5TY3JlZW5WaWRlb1RyYWNrQ29uZmlnUHJlc2V0ID0gZXhwb3J0cy5RTkNhbWVyYVZpZGVvVHJhY2tDb25maWdQcmVzZXQgPSBleHBvcnRzLlFOQ3VzdG9tQXVkaW9UcmFja0NvbmZpZ1ByZXNldCA9IGV4cG9ydHMuUU5NaWNyb3Bob25lQXVkaW9UcmFja0NvbmZpZ1ByZXNldCA9IGV4cG9ydHMuUU5SVENDb25maWd1cmF0aW9uUHJlc2V0ID0gdm9pZCAwO1xudmFyIFJUQ0VudW1fMSA9IHJlcXVpcmUoXCIuL2VudW0vUlRDRW51bVwiKTtcbmV4cG9ydHMuUU5SVENDb25maWd1cmF0aW9uUHJlc2V0ID0ge1xuICAgIHBvbGljeTogUlRDRW51bV8xLlFOUlRDUG9saWN5LmZvcmNlVURQLFxuICAgIHN0ZXJlbzogZmFsc2UsXG4gICAgbG9nTGV2ZWw6IFJUQ0VudW1fMS5RTlJUQ0xvZ0xldmVsLmluZm8sXG4gICAgYndlUG9saWN5OiBSVENFbnVtXzEuUU5SVENCd2VQb2xpY3kuVENDLFxuICAgIGFsbG93QXVkaW9NaXhXaXRoT3RoZXJzOiB0cnVlLFxuICAgIGhXQ29kZWNFbmFibGVkOiB0cnVlLFxuICAgIG1haW50YWluUmVzb2x1dGlvbjogZmFsc2UsXG4gICAgZmllbGRUcmlhbHM6ICcnLFxuICAgIGVuY29kZXJRdWFsaXR5TW9kZTogZmFsc2UsXG4gICAgaXNBRUMzRW5hYmxlZDogdHJ1ZVxufTtcbmV4cG9ydHMuUU5NaWNyb3Bob25lQXVkaW9UcmFja0NvbmZpZ1ByZXNldCA9IHtcbiAgICB0YWc6ICcnLFxuICAgIGJpdHJhdGU6IDI0LFxuICAgIEJpdHNQZXJTYW1wbGU6IDE2LFxuICAgIENoYW5uZWxDb3VudDogMSxcbiAgICBTYW1wbGVSYXRlOiAxNjAwMCxcbiAgICBjb21tdW5pY2F0aW9uTW9kZU9uOiB0cnVlXG59O1xuZXhwb3J0cy5RTkN1c3RvbUF1ZGlvVHJhY2tDb25maWdQcmVzZXQgPSB7XG4gICAgdGFnOiAnJyxcbiAgICBiaXRyYXRlOiAyNCxcbiAgICBCaXRzUGVyU2FtcGxlOiAxNixcbiAgICBDaGFubmVsQ291bnQ6IDEsXG4gICAgU2FtcGxlUmF0ZTogMTYwMDBcbn07XG5leHBvcnRzLlFOQ2FtZXJhVmlkZW9UcmFja0NvbmZpZ1ByZXNldCA9IHtcbiAgICB0YWc6ICcnLFxuICAgIGJpdHJhdGU6IDgwMCxcbiAgICB3aWR0aDogNjQwLFxuICAgIGhlaWdodDogNDgwLFxuICAgIG11bHRpU3RyZWFtRW5hYmxlOiBmYWxzZSxcbiAgICBjYW1lcmFGYWNpbmc6IFJUQ0VudW1fMS5RTlJUQ0NhbWVyYUZhY2luZy5mcm9udCxcbiAgICBmcmFtZVJhdGU6IDIwLFxuICAgIGNhcHR1cmVXaWR0aDogNjQwLFxuICAgIGNhcHR1cmVIZWlnaHQ6IDQ4MCxcbiAgICBjYXB0dXJlRnJhbWVSYXRlOiAyMCxcbiAgICBzZXNzaW9uUHJlc2V0OiBSVENFbnVtXzEuUU5TZXNzaW9uUHJlc2V0VHlwZS5BVkNhcHR1cmVTZXNzaW9uUHJlc2V0NjQweDQ4MFxufTtcbmV4cG9ydHMuUU5TY3JlZW5WaWRlb1RyYWNrQ29uZmlnUHJlc2V0ID0ge1xuICAgIHRhZzogJycsXG4gICAgYml0cmF0ZTogODAwLFxuICAgIHdpZHRoOiA2NDAsXG4gICAgaGVpZ2h0OiA0ODAsXG4gICAgbXVsdGlTdHJlYW1FbmFibGU6IGZhbHNlLFxuICAgIGZyYW1lUmF0ZTogMjBcbn07XG5leHBvcnRzLlFOQ3VzdG9tVmlkZW9UcmFja0NvbmZpZ1ByZXNldCA9IHtcbiAgICB0YWc6ICcnLFxuICAgIGJpdHJhdGU6IDgwMCxcbiAgICB3aWR0aDogNjQwLFxuICAgIGhlaWdodDogNDgwLFxuICAgIG11bHRpU3RyZWFtRW5hYmxlOiBmYWxzZSxcbiAgICBmcmFtZVJhdGU6IDIwXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///90\n");

/***/ }),

/***/ 91:
/*!*************************************************************************************************************!*\
  !*** /Users/tongjie/Desktop/QNRTC-Uniapp/demo/js_sdk/QNRTC-UniPlugin-JS/QNRTC-UniPlugin-JS/enum/RTCEnum.js ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nexports.__esModule = true;\nexports.QNVideoFrameType = exports.QNAudioMixerState = exports.QNSessionPresetType = exports.QNVideoFillModeType = exports.QNAVCaptureVideoOrientation = exports.QNVideoWaterMarkSize = exports.QNAudioDevice = exports.QNLiveStreamingErrorInfoCode = exports.QNLiveStreamingErrorInfoType = exports.QNConnectionDisconnectedReason = exports.QNNetworkGrade = exports.QNTrackProfile = exports.QNRenderMode = exports.QNConnectionState = exports.QNRTCLogLevel = exports.QNRTCTrackKind = exports.QNRTCBwePolicy = exports.QNRTCPolicy = exports.QNRTCCameraFacing = void 0;\nvar QNRTCCameraFacing;\n(function (QNRTCCameraFacing) {\n  QNRTCCameraFacing[\"back\"] = \"back\";\n  QNRTCCameraFacing[\"front\"] = \"front\";\n})(QNRTCCameraFacing = exports.QNRTCCameraFacing || (exports.QNRTCCameraFacing = {}));\nvar QNRTCPolicy;\n(function (QNRTCPolicy) {\n  QNRTCPolicy[\"forceUDP\"] = \"forceUDP\";\n  QNRTCPolicy[\"forceTCP\"] = \"forceTCP\";\n  QNRTCPolicy[\"preferUDP\"] = \"preferUDP\";\n})(QNRTCPolicy = exports.QNRTCPolicy || (exports.QNRTCPolicy = {}));\nvar QNRTCBwePolicy;\n(function (QNRTCBwePolicy) {\n  QNRTCBwePolicy[\"TCC\"] = \"TCC\";\n  QNRTCBwePolicy[\"GCC\"] = \"GCC\";\n})(QNRTCBwePolicy = exports.QNRTCBwePolicy || (exports.QNRTCBwePolicy = {}));\nvar QNRTCTrackKind;\n(function (QNRTCTrackKind) {\n  QNRTCTrackKind[\"audio\"] = \"audio\";\n  QNRTCTrackKind[\"video\"] = \"video\";\n})(QNRTCTrackKind = exports.QNRTCTrackKind || (exports.QNRTCTrackKind = {}));\nvar QNRTCLogLevel;\n(function (QNRTCLogLevel) {\n  QNRTCLogLevel[\"verbose\"] = \"verbose\";\n  QNRTCLogLevel[\"info\"] = \"info\";\n  QNRTCLogLevel[\"warning\"] = \"warning\";\n  QNRTCLogLevel[\"error\"] = \"error\";\n  QNRTCLogLevel[\"none\"] = \"none\";\n})(QNRTCLogLevel = exports.QNRTCLogLevel || (exports.QNRTCLogLevel = {}));\nvar QNConnectionState;\n(function (QNConnectionState) {\n  QNConnectionState[\"DISCONNECTED\"] = \"DISCONNECTED\";\n  QNConnectionState[\"CONNECTING\"] = \"CONNECTING\";\n  QNConnectionState[\"CONNECTED\"] = \"CONNECTED\";\n  QNConnectionState[\"RECONNECTING\"] = \"RECONNECTING\";\n  QNConnectionState[\"RECONNECTED\"] = \"RECONNECTED\";\n})(QNConnectionState = exports.QNConnectionState || (exports.QNConnectionState = {}));\nvar QNRenderMode;\n(function (QNRenderMode) {\n  QNRenderMode[\"FILL\"] = \"FILL\";\n  QNRenderMode[\"ASPECT_FILL\"] = \"ASPECT_FILL\";\n  QNRenderMode[\"ASPECT_FIT\"] = \"ASPECT_FIT\";\n})(QNRenderMode = exports.QNRenderMode || (exports.QNRenderMode = {}));\nvar QNTrackProfile;\n(function (QNTrackProfile) {\n  QNTrackProfile[\"LOW\"] = \"LOW\";\n  QNTrackProfile[\"MEDIUM\"] = \"MEDIUM\";\n  QNTrackProfile[\"HIGH\"] = \"HIGH\";\n})(QNTrackProfile = exports.QNTrackProfile || (exports.QNTrackProfile = {}));\nvar QNNetworkGrade;\n(function (QNNetworkGrade) {\n  QNNetworkGrade[\"INVALID\"] = \"INVALID\";\n  QNNetworkGrade[\"EXCELLENT\"] = \"EXCELLENT\";\n  QNNetworkGrade[\"GOOD\"] = \"GOOD\";\n  QNNetworkGrade[\"FAIR\"] = \"FAIR\";\n  QNNetworkGrade[\"POOR\"] = \"POOR\";\n})(QNNetworkGrade = exports.QNNetworkGrade || (exports.QNNetworkGrade = {}));\nvar QNConnectionDisconnectedReason;\n(function (QNConnectionDisconnectedReason) {\n  QNConnectionDisconnectedReason[\"LEAVE\"] = \"LEAVE\";\n  QNConnectionDisconnectedReason[\"KICKED_OUT\"] = \"KICKED_OUT\";\n  QNConnectionDisconnectedReason[\"ROOM_CLOSED\"] = \"ROOM_CLOSED\";\n  QNConnectionDisconnectedReason[\"ROOM_FULL\"] = \"ROOM_FULL\";\n  QNConnectionDisconnectedReason[\"ERROR\"] = \"ERROR\";\n})(QNConnectionDisconnectedReason = exports.QNConnectionDisconnectedReason || (exports.QNConnectionDisconnectedReason = {}));\nvar QNLiveStreamingErrorInfoType;\n(function (QNLiveStreamingErrorInfoType) {\n  QNLiveStreamingErrorInfoType[\"START\"] = \"START\";\n  QNLiveStreamingErrorInfoType[\"STOP\"] = \"STOP\";\n  QNLiveStreamingErrorInfoType[\"UPDATE\"] = \"UPDATE\";\n})(QNLiveStreamingErrorInfoType = exports.QNLiveStreamingErrorInfoType || (exports.QNLiveStreamingErrorInfoType = {}));\nvar QNLiveStreamingErrorInfoCode;\n(function (QNLiveStreamingErrorInfoCode) {\n  QNLiveStreamingErrorInfoCode[\"ERROR_NO_PERMISSION\"] = \"ERROR_NO_PERMISSION\";\n  QNLiveStreamingErrorInfoCode[\"ERROR_INVALID_STATE\"] = \"ERROR_INVALID_STATE\";\n  QNLiveStreamingErrorInfoCode[\"ERROR_INVALID_PARAMETER\"] = \"ERROR_INVALID_PARAMETER\";\n  QNLiveStreamingErrorInfoCode[\"ERROR_SIGNAL_TIMEOUT\"] = \"ERROR_SIGNAL_TIMEOUT\";\n  QNLiveStreamingErrorInfoCode[\"SERVER_ERROR\"] = \"SERVER_ERROR\";\n})(QNLiveStreamingErrorInfoCode = exports.QNLiveStreamingErrorInfoCode || (exports.QNLiveStreamingErrorInfoCode = {}));\nvar QNAudioDevice;\n(function (QNAudioDevice) {\n  QNAudioDevice[\"SPEAKER_PHONE\"] = \"SPEAKER_PHONE\";\n  QNAudioDevice[\"EARPIECE\"] = \"EARPIECE\";\n  QNAudioDevice[\"WIRED_HEADSET\"] = \"WIRED_HEADSET\";\n  QNAudioDevice[\"BLUETOOTH\"] = \"BLUETOOTH\";\n  QNAudioDevice[\"NONE\"] = \"NONE\";\n})(QNAudioDevice = exports.QNAudioDevice || (exports.QNAudioDevice = {}));\nvar QNVideoWaterMarkSize;\n(function (QNVideoWaterMarkSize) {\n  QNVideoWaterMarkSize[\"LARGE\"] = \"LARGE\";\n  QNVideoWaterMarkSize[\"MEDIUM\"] = \"MEDIUM\";\n  QNVideoWaterMarkSize[\"SMALL\"] = \"SMALL\";\n})(QNVideoWaterMarkSize = exports.QNVideoWaterMarkSize || (exports.QNVideoWaterMarkSize = {}));\nvar QNAVCaptureVideoOrientation;\n(function (QNAVCaptureVideoOrientation) {\n  QNAVCaptureVideoOrientation[\"AVCaptureVideoOrientationPortrait\"] = \"AVCaptureVideoOrientationPortrait\";\n  QNAVCaptureVideoOrientation[\"AVCaptureVideoOrientationLandscapeRight\"] = \"AVCaptureVideoOrientationLandscapeRight\";\n  QNAVCaptureVideoOrientation[\"AVCaptureVideoOrientationLandscapeLeft\"] = \"AVCaptureVideoOrientationLandscapeLeft\";\n})(QNAVCaptureVideoOrientation = exports.QNAVCaptureVideoOrientation || (exports.QNAVCaptureVideoOrientation = {}));\nvar QNVideoFillModeType;\n(function (QNVideoFillModeType) {\n  QNVideoFillModeType[\"QNVideoFillModeNone\"] = \"QNVideoFillModeNone\";\n  QNVideoFillModeType[\"QNVideoFillModeStretch\"] = \"QNVideoFillModeStretch\";\n  QNVideoFillModeType[\"QNVideoFillModePreserveAspectRatio\"] = \"QNVideoFillModePreserveAspectRatio\";\n  QNVideoFillModeType[\"QNVideoFillModePreserveAspectRatioAndFill\"] = \"QNVideoFillModePreserveAspectRatioAndFill\";\n})(QNVideoFillModeType = exports.QNVideoFillModeType || (exports.QNVideoFillModeType = {}));\nvar QNSessionPresetType;\n(function (QNSessionPresetType) {\n  QNSessionPresetType[\"AVCaptureSessionPreset352x288\"] = \"AVCaptureSessionPreset352x288\";\n  QNSessionPresetType[\"AVCaptureSessionPreset640x480\"] = \"AVCaptureSessionPreset640x480\";\n  QNSessionPresetType[\"AVCaptureSessionPreset1280x720\"] = \"AVCaptureSessionPreset1280x720\";\n  QNSessionPresetType[\"AVCaptureSessionPreset1920x1080\"] = \"AVCaptureSessionPreset1920x1080\";\n  QNSessionPresetType[\"AVCaptureSessionPreset3840x2160\"] = \"AVCaptureSessionPreset3840x2160\";\n  QNSessionPresetType[\"AVCaptureSessionPresetiFrame960x540\"] = \"AVCaptureSessionPresetiFrame960x540\";\n  QNSessionPresetType[\"AVCaptureSessionPresetiFrame1280x720\"] = \"AVCaptureSessionPresetiFrame1280x720\";\n})(QNSessionPresetType = exports.QNSessionPresetType || (exports.QNSessionPresetType = {}));\nvar QNAudioMixerState;\n(function (QNAudioMixerState) {\n  QNAudioMixerState[\"MIXING\"] = \"MIXING\";\n  QNAudioMixerState[\"PAUSED\"] = \"PAUSED\";\n  QNAudioMixerState[\"STOPPED\"] = \"STOPPED\";\n  QNAudioMixerState[\"COMPLETED\"] = \"COMPLETED\";\n})(QNAudioMixerState = exports.QNAudioMixerState || (exports.QNAudioMixerState = {}));\nvar QNVideoFrameType;\n(function (QNVideoFrameType) {\n  QNVideoFrameType[\"YUV_NV21\"] = \"YUV_NV21\";\n  QNVideoFrameType[\"TEXTURE_RGB\"] = \"TEXTURE_RGB\";\n  QNVideoFrameType[\"TEXTURE_OES\"] = \"TEXTURE_OES\";\n})(QNVideoFrameType = exports.QNVideoFrameType || (exports.QNVideoFrameType = {}));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vanNfc2RrL1FOUlRDLVVuaVBsdWdpbi1KUy9RTlJUQy1VbmlQbHVnaW4tSlMvZW51bS9SVENFbnVtLmpzIl0sIm5hbWVzIjpbImV4cG9ydHMiLCJfX2VzTW9kdWxlIiwiUU5WaWRlb0ZyYW1lVHlwZSIsIlFOQXVkaW9NaXhlclN0YXRlIiwiUU5TZXNzaW9uUHJlc2V0VHlwZSIsIlFOVmlkZW9GaWxsTW9kZVR5cGUiLCJRTkFWQ2FwdHVyZVZpZGVvT3JpZW50YXRpb24iLCJRTlZpZGVvV2F0ZXJNYXJrU2l6ZSIsIlFOQXVkaW9EZXZpY2UiLCJRTkxpdmVTdHJlYW1pbmdFcnJvckluZm9Db2RlIiwiUU5MaXZlU3RyZWFtaW5nRXJyb3JJbmZvVHlwZSIsIlFOQ29ubmVjdGlvbkRpc2Nvbm5lY3RlZFJlYXNvbiIsIlFOTmV0d29ya0dyYWRlIiwiUU5UcmFja1Byb2ZpbGUiLCJRTlJlbmRlck1vZGUiLCJRTkNvbm5lY3Rpb25TdGF0ZSIsIlFOUlRDTG9nTGV2ZWwiLCJRTlJUQ1RyYWNrS2luZCIsIlFOUlRDQndlUG9saWN5IiwiUU5SVENQb2xpY3kiLCJRTlJUQ0NhbWVyYUZhY2luZyJdLCJtYXBwaW5ncyI6IkFBQWE7QUFDYkEsT0FBTyxDQUFDQyxVQUFSLEdBQXFCLElBQXJCO0FBQ0FELE9BQU8sQ0FBQ0UsZ0JBQVIsR0FBMkJGLE9BQU8sQ0FBQ0csaUJBQVIsR0FBNEJILE9BQU8sQ0FBQ0ksbUJBQVIsR0FBOEJKLE9BQU8sQ0FBQ0ssbUJBQVIsR0FBOEJMLE9BQU8sQ0FBQ00sMkJBQVIsR0FBc0NOLE9BQU8sQ0FBQ08sb0JBQVIsR0FBK0JQLE9BQU8sQ0FBQ1EsYUFBUixHQUF3QlIsT0FBTyxDQUFDUyw0QkFBUixHQUF1Q1QsT0FBTyxDQUFDVSw0QkFBUixHQUF1Q1YsT0FBTyxDQUFDVyw4QkFBUixHQUF5Q1gsT0FBTyxDQUFDWSxjQUFSLEdBQXlCWixPQUFPLENBQUNhLGNBQVIsR0FBeUJiLE9BQU8sQ0FBQ2MsWUFBUixHQUF1QmQsT0FB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QUQsQ0FBaEIsR0FBK0IsVUFBL0I7QUFDQUEsa0JBQWdCLENBQUMsYUFBRCxDQUFoQixHQUFrQyxhQUFsQztBQUNBQSxrQkFBZ0IsQ0FBQyxhQUFELENBQWhCLEdBQWtDLGFBQWxDO0FBQ0gsQ0FKRCxFQUlHQSxnQkFBZ0IsR0FBR0YsT0FBTyxDQUFDRSxnQkFBUixLQUE2QkYsT0FBTyxDQUFDRSxnQkFBUixHQUEyQixFQUF4RCxDQUp0QiIsImZpbGUiOiI5MS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuUU5WaWRlb0ZyYW1lVHlwZSA9IGV4cG9ydHMuUU5BdWRpb01peGVyU3RhdGUgPSBleHBvcnRzLlFOU2Vzc2lvblByZXNldFR5cGUgPSBleHBvcnRzLlFOVmlkZW9GaWxsTW9kZVR5cGUgPSBleHBvcnRzLlFOQVZDYXB0dXJlVmlkZW9PcmllbnRhdGlvbiA9IGV4cG9ydHMuUU5WaWRlb1dhdGVyTWFya1NpemUgPSBleHBvcnRzLlFOQXVkaW9EZXZpY2UgPSBleHBvcnRzLlFOTGl2ZVN0cmVhbWluZ0Vycm9ySW5mb0NvZGUgPSBleHBvcnRzLlFOTGl2ZVN0cmVhbWluZ0Vycm9ySW5mb1R5cGUgPSBleHBvcnRzLlFOQ29ubmVjdGlvbkRpc2Nvbm5lY3RlZFJlYXNvbiA9IGV4cG9ydHMuUU5OZXR3b3JrR3JhZGUgPSBleHBvcnRzLlFOVHJhY2tQcm9maWxlID0gZXhwb3J0cy5RTlJlbmRlck1vZGUgPSBleHBvcnRzLlFOQ29ubmVjdGlvblN0YXRlID0gZXhwb3J0cy5RTlJUQ0xvZ0xldmVsID0gZXhwb3J0cy5RTlJUQ1RyYWNrS2luZCA9IGV4cG9ydHMuUU5SVENCd2VQb2xpY3kgPSBleHBvcnRzLlFOUlRDUG9saWN5ID0gZXhwb3J0cy5RTlJUQ0NhbWVyYUZhY2luZyA9IHZvaWQgMDtcbnZhciBRTlJUQ0NhbWVyYUZhY2luZztcbihmdW5jdGlvbiAoUU5SVENDYW1lcmFGYWNpbmcpIHtcbiAgICBRTlJUQ0NhbWVyYUZhY2luZ1tcImJhY2tcIl0gPSBcImJhY2tcIjtcbiAgICBRTlJUQ0NhbWVyYUZhY2luZ1tcImZyb250XCJdID0gXCJmcm9udFwiO1xufSkoUU5SVENDYW1lcmFGYWNpbmcgPSBleHBvcnRzLlFOUlRDQ2FtZXJhRmFjaW5nIHx8IChleHBvcnRzLlFOUlRDQ2FtZXJhRmFjaW5nID0ge30pKTtcbnZhciBRTlJUQ1BvbGljeTtcbihmdW5jdGlvbiAoUU5SVENQb2xpY3kpIHtcbiAgICBRTlJUQ1BvbGljeVtcImZvcmNlVURQXCJdID0gXCJmb3JjZVVEUFwiO1xuICAgIFFOUlRDUG9saWN5W1wiZm9yY2VUQ1BcIl0gPSBcImZvcmNlVENQXCI7XG4gICAgUU5SVENQb2xpY3lbXCJwcmVmZXJVRFBcIl0gPSBcInByZWZlclVEUFwiO1xufSkoUU5SVENQb2xpY3kgPSBleHBvcnRzLlFOUlRDUG9saWN5IHx8IChleHBvcnRzLlFOUlRDUG9saWN5ID0ge30pKTtcbnZhciBRTlJUQ0J3ZVBvbGljeTtcbihmdW5jdGlvbiAoUU5SVENCd2VQb2xpY3kpIHtcbiAgICBRTlJUQ0J3ZVBvbGljeVtcIlRDQ1wiXSA9IFwiVENDXCI7XG4gICAgUU5SVENCd2VQb2xpY3lbXCJHQ0NcIl0gPSBcIkdDQ1wiO1xufSkoUU5SVENCd2VQb2xpY3kgPSBleHBvcnRzLlFOUlRDQndlUG9saWN5IHx8IChleHBvcnRzLlFOUlRDQndlUG9saWN5ID0ge30pKTtcbnZhciBRTlJUQ1RyYWNrS2luZDtcbihmdW5jdGlvbiAoUU5SVENUcmFja0tpbmQpIHtcbiAgICBRTlJUQ1RyYWNrS2luZFtcImF1ZGlvXCJdID0gXCJhdWRpb1wiO1xuICAgIFFOUlRDVHJhY2tLaW5kW1widmlkZW9cIl0gPSBcInZpZGVvXCI7XG59KShRTlJUQ1RyYWNrS2luZCA9IGV4cG9ydHMuUU5SVENUcmFja0tpbmQgfHwgKGV4cG9ydHMuUU5SVENUcmFja0tpbmQgPSB7fSkpO1xudmFyIFFOUlRDTG9nTGV2ZWw7XG4oZnVuY3Rpb24gKFFOUlRDTG9nTGV2ZWwpIHtcbiAgICBRTlJUQ0xvZ0xldmVsW1widmVyYm9zZVwiXSA9IFwidmVyYm9zZVwiO1xuICAgIFFOUlRDTG9nTGV2ZWxbXCJpbmZvXCJdID0gXCJpbmZvXCI7XG4gICAgUU5SVENMb2dMZXZlbFtcIndhcm5pbmdcIl0gPSBcIndhcm5pbmdcIjtcbiAgICBRTlJUQ0xvZ0xldmVsW1wiZXJyb3JcIl0gPSBcImVycm9yXCI7XG4gICAgUU5SVENMb2dMZXZlbFtcIm5vbmVcIl0gPSBcIm5vbmVcIjtcbn0pKFFOUlRDTG9nTGV2ZWwgPSBleHBvcnRzLlFOUlRDTG9nTGV2ZWwgfHwgKGV4cG9ydHMuUU5SVENMb2dMZXZlbCA9IHt9KSk7XG52YXIgUU5Db25uZWN0aW9uU3RhdGU7XG4oZnVuY3Rpb24gKFFOQ29ubmVjdGlvblN0YXRlKSB7XG4gICAgUU5Db25uZWN0aW9uU3RhdGVbXCJESVNDT05ORUNURURcIl0gPSBcIkRJU0NPTk5FQ1RFRFwiO1xuICAgIFFOQ29ubmVjdGlvblN0YXRlW1wiQ09OTkVDVElOR1wiXSA9IFwiQ09OTkVDVElOR1wiO1xuICAgIFFOQ29ubmVjdGlvblN0YXRlW1wiQ09OTkVDVEVEXCJdID0gXCJDT05ORUNURURcIjtcbiAgICBRTkNvbm5lY3Rpb25TdGF0ZVtcIlJFQ09OTkVDVElOR1wiXSA9IFwiUkVDT05ORUNUSU5HXCI7XG4gICAgUU5Db25uZWN0aW9uU3RhdGVbXCJSRUNPTk5FQ1RFRFwiXSA9IFwiUkVDT05ORUNURURcIjtcbn0pKFFOQ29ubmVjdGlvblN0YXRlID0gZXhwb3J0cy5RTkNvbm5lY3Rpb25TdGF0ZSB8fCAoZXhwb3J0cy5RTkNvbm5lY3Rpb25TdGF0ZSA9IHt9KSk7XG52YXIgUU5SZW5kZXJNb2RlO1xuKGZ1bmN0aW9uIChRTlJlbmRlck1vZGUpIHtcbiAgICBRTlJlbmRlck1vZGVbXCJGSUxMXCJdID0gXCJGSUxMXCI7XG4gICAgUU5SZW5kZXJNb2RlW1wiQVNQRUNUX0ZJTExcIl0gPSBcIkFTUEVDVF9GSUxMXCI7XG4gICAgUU5SZW5kZXJNb2RlW1wiQVNQRUNUX0ZJVFwiXSA9IFwiQVNQRUNUX0ZJVFwiO1xufSkoUU5SZW5kZXJNb2RlID0gZXhwb3J0cy5RTlJlbmRlck1vZGUgfHwgKGV4cG9ydHMuUU5SZW5kZXJNb2RlID0ge30pKTtcbnZhciBRTlRyYWNrUHJvZmlsZTtcbihmdW5jdGlvbiAoUU5UcmFja1Byb2ZpbGUpIHtcbiAgICBRTlRyYWNrUHJvZmlsZVtcIkxPV1wiXSA9IFwiTE9XXCI7XG4gICAgUU5UcmFja1Byb2ZpbGVbXCJNRURJVU1cIl0gPSBcIk1FRElVTVwiO1xuICAgIFFOVHJhY2tQcm9maWxlW1wiSElHSFwiXSA9IFwiSElHSFwiO1xufSkoUU5UcmFja1Byb2ZpbGUgPSBleHBvcnRzLlFOVHJhY2tQcm9maWxlIHx8IChleHBvcnRzLlFOVHJhY2tQcm9maWxlID0ge30pKTtcbnZhciBRTk5ldHdvcmtHcmFkZTtcbihmdW5jdGlvbiAoUU5OZXR3b3JrR3JhZGUpIHtcbiAgICBRTk5ldHdvcmtHcmFkZVtcIklOVkFMSURcIl0gPSBcIklOVkFMSURcIjtcbiAgICBRTk5ldHdvcmtHcmFkZVtcIkVYQ0VMTEVOVFwiXSA9IFwiRVhDRUxMRU5UXCI7XG4gICAgUU5OZXR3b3JrR3JhZGVbXCJHT09EXCJdID0gXCJHT09EXCI7XG4gICAgUU5OZXR3b3JrR3JhZGVbXCJGQUlSXCJdID0gXCJGQUlSXCI7XG4gICAgUU5OZXR3b3JrR3JhZGVbXCJQT09SXCJdID0gXCJQT09SXCI7XG59KShRTk5ldHdvcmtHcmFkZSA9IGV4cG9ydHMuUU5OZXR3b3JrR3JhZGUgfHwgKGV4cG9ydHMuUU5OZXR3b3JrR3JhZGUgPSB7fSkpO1xudmFyIFFOQ29ubmVjdGlvbkRpc2Nvbm5lY3RlZFJlYXNvbjtcbihmdW5jdGlvbiAoUU5Db25uZWN0aW9uRGlzY29ubmVjdGVkUmVhc29uKSB7XG4gICAgUU5Db25uZWN0aW9uRGlzY29ubmVjdGVkUmVhc29uW1wiTEVBVkVcIl0gPSBcIkxFQVZFXCI7XG4gICAgUU5Db25uZWN0aW9uRGlzY29ubmVjdGVkUmVhc29uW1wiS0lDS0VEX09VVFwiXSA9IFwiS0lDS0VEX09VVFwiO1xuICAgIFFOQ29ubmVjdGlvbkRpc2Nvbm5lY3RlZFJlYXNvbltcIlJPT01fQ0xPU0VEXCJdID0gXCJST09NX0NMT1NFRFwiO1xuICAgIFFOQ29ubmVjdGlvbkRpc2Nvbm5lY3RlZFJlYXNvbltcIlJPT01fRlVMTFwiXSA9IFwiUk9PTV9GVUxMXCI7XG4gICAgUU5Db25uZWN0aW9uRGlzY29ubmVjdGVkUmVhc29uW1wiRVJST1JcIl0gPSBcIkVSUk9SXCI7XG59KShRTkNvbm5lY3Rpb25EaXNjb25uZWN0ZWRSZWFzb24gPSBleHBvcnRzLlFOQ29ubmVjdGlvbkRpc2Nvbm5lY3RlZFJlYXNvbiB8fCAoZXhwb3J0cy5RTkNvbm5lY3Rpb25EaXNjb25uZWN0ZWRSZWFzb24gPSB7fSkpO1xudmFyIFFOTGl2ZVN0cmVhbWluZ0Vycm9ySW5mb1R5cGU7XG4oZnVuY3Rpb24gKFFOTGl2ZVN0cmVhbWluZ0Vycm9ySW5mb1R5cGUpIHtcbiAgICBRTkxpdmVTdHJlYW1pbmdFcnJvckluZm9UeXBlW1wiU1RBUlRcIl0gPSBcIlNUQVJUXCI7XG4gICAgUU5MaXZlU3RyZWFtaW5nRXJyb3JJbmZvVHlwZVtcIlNUT1BcIl0gPSBcIlNUT1BcIjtcbiAgICBRTkxpdmVTdHJlYW1pbmdFcnJvckluZm9UeXBlW1wiVVBEQVRFXCJdID0gXCJVUERBVEVcIjtcbn0pKFFOTGl2ZVN0cmVhbWluZ0Vycm9ySW5mb1R5cGUgPSBleHBvcnRzLlFOTGl2ZVN0cmVhbWluZ0Vycm9ySW5mb1R5cGUgfHwgKGV4cG9ydHMuUU5MaXZlU3RyZWFtaW5nRXJyb3JJbmZvVHlwZSA9IHt9KSk7XG52YXIgUU5MaXZlU3RyZWFtaW5nRXJyb3JJbmZvQ29kZTtcbihmdW5jdGlvbiAoUU5MaXZlU3RyZWFtaW5nRXJyb3JJbmZvQ29kZSkge1xuICAgIFFOTGl2ZVN0cmVhbWluZ0Vycm9ySW5mb0NvZGVbXCJFUlJPUl9OT19QRVJNSVNTSU9OXCJdID0gXCJFUlJPUl9OT19QRVJNSVNTSU9OXCI7XG4gICAgUU5MaXZlU3RyZWFtaW5nRXJyb3JJbmZvQ29kZVtcIkVSUk9SX0lOVkFMSURfU1RBVEVcIl0gPSBcIkVSUk9SX0lOVkFMSURfU1RBVEVcIjtcbiAgICBRTkxpdmVTdHJlYW1pbmdFcnJvckluZm9Db2RlW1wiRVJST1JfSU5WQUxJRF9QQVJBTUVURVJcIl0gPSBcIkVSUk9SX0lOVkFMSURfUEFSQU1FVEVSXCI7XG4gICAgUU5MaXZlU3RyZWFtaW5nRXJyb3JJbmZvQ29kZVtcIkVSUk9SX1NJR05BTF9USU1FT1VUXCJdID0gXCJFUlJPUl9TSUdOQUxfVElNRU9VVFwiO1xuICAgIFFOTGl2ZVN0cmVhbWluZ0Vycm9ySW5mb0NvZGVbXCJTRVJWRVJfRVJST1JcIl0gPSBcIlNFUlZFUl9FUlJPUlwiO1xufSkoUU5MaXZlU3RyZWFtaW5nRXJyb3JJbmZvQ29kZSA9IGV4cG9ydHMuUU5MaXZlU3RyZWFtaW5nRXJyb3JJbmZvQ29kZSB8fCAoZXhwb3J0cy5RTkxpdmVTdHJlYW1pbmdFcnJvckluZm9Db2RlID0ge30pKTtcbnZhciBRTkF1ZGlvRGV2aWNlO1xuKGZ1bmN0aW9uIChRTkF1ZGlvRGV2aWNlKSB7XG4gICAgUU5BdWRpb0RldmljZVtcIlNQRUFLRVJfUEhPTkVcIl0gPSBcIlNQRUFLRVJfUEhPTkVcIjtcbiAgICBRTkF1ZGlvRGV2aWNlW1wiRUFSUElFQ0VcIl0gPSBcIkVBUlBJRUNFXCI7XG4gICAgUU5BdWRpb0RldmljZVtcIldJUkVEX0hFQURTRVRcIl0gPSBcIldJUkVEX0hFQURTRVRcIjtcbiAgICBRTkF1ZGlvRGV2aWNlW1wiQkxVRVRPT1RIXCJdID0gXCJCTFVFVE9PVEhcIjtcbiAgICBRTkF1ZGlvRGV2aWNlW1wiTk9ORVwiXSA9IFwiTk9ORVwiO1xufSkoUU5BdWRpb0RldmljZSA9IGV4cG9ydHMuUU5BdWRpb0RldmljZSB8fCAoZXhwb3J0cy5RTkF1ZGlvRGV2aWNlID0ge30pKTtcbnZhciBRTlZpZGVvV2F0ZXJNYXJrU2l6ZTtcbihmdW5jdGlvbiAoUU5WaWRlb1dhdGVyTWFya1NpemUpIHtcbiAgICBRTlZpZGVvV2F0ZXJNYXJrU2l6ZVtcIkxBUkdFXCJdID0gXCJMQVJHRVwiO1xuICAgIFFOVmlkZW9XYXRlck1hcmtTaXplW1wiTUVESVVNXCJdID0gXCJNRURJVU1cIjtcbiAgICBRTlZpZGVvV2F0ZXJNYXJrU2l6ZVtcIlNNQUxMXCJdID0gXCJTTUFMTFwiO1xufSkoUU5WaWRlb1dhdGVyTWFya1NpemUgPSBleHBvcnRzLlFOVmlkZW9XYXRlck1hcmtTaXplIHx8IChleHBvcnRzLlFOVmlkZW9XYXRlck1hcmtTaXplID0ge30pKTtcbnZhciBRTkFWQ2FwdHVyZVZpZGVvT3JpZW50YXRpb247XG4oZnVuY3Rpb24gKFFOQVZDYXB0dXJlVmlkZW9PcmllbnRhdGlvbikge1xuICAgIFFOQVZDYXB0dXJlVmlkZW9PcmllbnRhdGlvbltcIkFWQ2FwdHVyZVZpZGVvT3JpZW50YXRpb25Qb3J0cmFpdFwiXSA9IFwiQVZDYXB0dXJlVmlkZW9PcmllbnRhdGlvblBvcnRyYWl0XCI7XG4gICAgUU5BVkNhcHR1cmVWaWRlb09yaWVudGF0aW9uW1wiQVZDYXB0dXJlVmlkZW9PcmllbnRhdGlvbkxhbmRzY2FwZVJpZ2h0XCJdID0gXCJBVkNhcHR1cmVWaWRlb09yaWVudGF0aW9uTGFuZHNjYXBlUmlnaHRcIjtcbiAgICBRTkFWQ2FwdHVyZVZpZGVvT3JpZW50YXRpb25bXCJBVkNhcHR1cmVWaWRlb09yaWVudGF0aW9uTGFuZHNjYXBlTGVmdFwiXSA9IFwiQVZDYXB0dXJlVmlkZW9PcmllbnRhdGlvbkxhbmRzY2FwZUxlZnRcIjtcbn0pKFFOQVZDYXB0dXJlVmlkZW9PcmllbnRhdGlvbiA9IGV4cG9ydHMuUU5BVkNhcHR1cmVWaWRlb09yaWVudGF0aW9uIHx8IChleHBvcnRzLlFOQVZDYXB0dXJlVmlkZW9PcmllbnRhdGlvbiA9IHt9KSk7XG52YXIgUU5WaWRlb0ZpbGxNb2RlVHlwZTtcbihmdW5jdGlvbiAoUU5WaWRlb0ZpbGxNb2RlVHlwZSkge1xuICAgIFFOVmlkZW9GaWxsTW9kZVR5cGVbXCJRTlZpZGVvRmlsbE1vZGVOb25lXCJdID0gXCJRTlZpZGVvRmlsbE1vZGVOb25lXCI7XG4gICAgUU5WaWRlb0ZpbGxNb2RlVHlwZVtcIlFOVmlkZW9GaWxsTW9kZVN0cmV0Y2hcIl0gPSBcIlFOVmlkZW9GaWxsTW9kZVN0cmV0Y2hcIjtcbiAgICBRTlZpZGVvRmlsbE1vZGVUeXBlW1wiUU5WaWRlb0ZpbGxNb2RlUHJlc2VydmVBc3BlY3RSYXRpb1wiXSA9IFwiUU5WaWRlb0ZpbGxNb2RlUHJlc2VydmVBc3BlY3RSYXRpb1wiO1xuICAgIFFOVmlkZW9GaWxsTW9kZVR5cGVbXCJRTlZpZGVvRmlsbE1vZGVQcmVzZXJ2ZUFzcGVjdFJhdGlvQW5kRmlsbFwiXSA9IFwiUU5WaWRlb0ZpbGxNb2RlUHJlc2VydmVBc3BlY3RSYXRpb0FuZEZpbGxcIjtcbn0pKFFOVmlkZW9GaWxsTW9kZVR5cGUgPSBleHBvcnRzLlFOVmlkZW9GaWxsTW9kZVR5cGUgfHwgKGV4cG9ydHMuUU5WaWRlb0ZpbGxNb2RlVHlwZSA9IHt9KSk7XG52YXIgUU5TZXNzaW9uUHJlc2V0VHlwZTtcbihmdW5jdGlvbiAoUU5TZXNzaW9uUHJlc2V0VHlwZSkge1xuICAgIFFOU2Vzc2lvblByZXNldFR5cGVbXCJBVkNhcHR1cmVTZXNzaW9uUHJlc2V0MzUyeDI4OFwiXSA9IFwiQVZDYXB0dXJlU2Vzc2lvblByZXNldDM1MngyODhcIjtcbiAgICBRTlNlc3Npb25QcmVzZXRUeXBlW1wiQVZDYXB0dXJlU2Vzc2lvblByZXNldDY0MHg0ODBcIl0gPSBcIkFWQ2FwdHVyZVNlc3Npb25QcmVzZXQ2NDB4NDgwXCI7XG4gICAgUU5TZXNzaW9uUHJlc2V0VHlwZVtcIkFWQ2FwdHVyZVNlc3Npb25QcmVzZXQxMjgweDcyMFwiXSA9IFwiQVZDYXB0dXJlU2Vzc2lvblByZXNldDEyODB4NzIwXCI7XG4gICAgUU5TZXNzaW9uUHJlc2V0VHlwZVtcIkFWQ2FwdHVyZVNlc3Npb25QcmVzZXQxOTIweDEwODBcIl0gPSBcIkFWQ2FwdHVyZVNlc3Npb25QcmVzZXQxOTIweDEwODBcIjtcbiAgICBRTlNlc3Npb25QcmVzZXRUeXBlW1wiQVZDYXB0dXJlU2Vzc2lvblByZXNldDM4NDB4MjE2MFwiXSA9IFwiQVZDYXB0dXJlU2Vzc2lvblByZXNldDM4NDB4MjE2MFwiO1xuICAgIFFOU2Vzc2lvblByZXNldFR5cGVbXCJBVkNhcHR1cmVTZXNzaW9uUHJlc2V0aUZyYW1lOTYweDU0MFwiXSA9IFwiQVZDYXB0dXJlU2Vzc2lvblByZXNldGlGcmFtZTk2MHg1NDBcIjtcbiAgICBRTlNlc3Npb25QcmVzZXRUeXBlW1wiQVZDYXB0dXJlU2Vzc2lvblByZXNldGlGcmFtZTEyODB4NzIwXCJdID0gXCJBVkNhcHR1cmVTZXNzaW9uUHJlc2V0aUZyYW1lMTI4MHg3MjBcIjtcbn0pKFFOU2Vzc2lvblByZXNldFR5cGUgPSBleHBvcnRzLlFOU2Vzc2lvblByZXNldFR5cGUgfHwgKGV4cG9ydHMuUU5TZXNzaW9uUHJlc2V0VHlwZSA9IHt9KSk7XG52YXIgUU5BdWRpb01peGVyU3RhdGU7XG4oZnVuY3Rpb24gKFFOQXVkaW9NaXhlclN0YXRlKSB7XG4gICAgUU5BdWRpb01peGVyU3RhdGVbXCJNSVhJTkdcIl0gPSBcIk1JWElOR1wiO1xuICAgIFFOQXVkaW9NaXhlclN0YXRlW1wiUEFVU0VEXCJdID0gXCJQQVVTRURcIjtcbiAgICBRTkF1ZGlvTWl4ZXJTdGF0ZVtcIlNUT1BQRURcIl0gPSBcIlNUT1BQRURcIjtcbiAgICBRTkF1ZGlvTWl4ZXJTdGF0ZVtcIkNPTVBMRVRFRFwiXSA9IFwiQ09NUExFVEVEXCI7XG59KShRTkF1ZGlvTWl4ZXJTdGF0ZSA9IGV4cG9ydHMuUU5BdWRpb01peGVyU3RhdGUgfHwgKGV4cG9ydHMuUU5BdWRpb01peGVyU3RhdGUgPSB7fSkpO1xudmFyIFFOVmlkZW9GcmFtZVR5cGU7XG4oZnVuY3Rpb24gKFFOVmlkZW9GcmFtZVR5cGUpIHtcbiAgICBRTlZpZGVvRnJhbWVUeXBlW1wiWVVWX05WMjFcIl0gPSBcIllVVl9OVjIxXCI7XG4gICAgUU5WaWRlb0ZyYW1lVHlwZVtcIlRFWFRVUkVfUkdCXCJdID0gXCJURVhUVVJFX1JHQlwiO1xuICAgIFFOVmlkZW9GcmFtZVR5cGVbXCJURVhUVVJFX09FU1wiXSA9IFwiVEVYVFVSRV9PRVNcIjtcbn0pKFFOVmlkZW9GcmFtZVR5cGUgPSBleHBvcnRzLlFOVmlkZW9GcmFtZVR5cGUgfHwgKGV4cG9ydHMuUU5WaWRlb0ZyYW1lVHlwZSA9IHt9KSk7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///91\n");

/***/ }),

/***/ 92:
/*!****************************************************************************************************************!*\
  !*** /Users/tongjie/Desktop/QNRTC-Uniapp/demo/js_sdk/QNRTC-UniPlugin-JS/QNRTC-UniPlugin-JS/class/RTCClient.js ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__webpack_provided_uni_dot_requireNativePlugin) {\nvar __assign = this && this.__assign || function () {\n  __assign = Object.assign || function (t) {\n    for (var s, i = 1, n = arguments.length; i < n; i++) {\n      s = arguments[i];\n      for (var p in s) {if (Object.prototype.hasOwnProperty.call(s, p))\n        t[p] = s[p];}\n    }\n    return t;\n  };\n  return __assign.apply(this, arguments);\n};\nexports.__esModule = true;\nexports.QNRTCClient = void 0;\nvar RTCEnum_1 = __webpack_require__(/*! ../enum/RTCEnum */ 91);\nvar RTCRemoteVideoTrack_1 = __webpack_require__(/*! ./RTCRemoteVideoTrack */ 93);\nvar RTCRemoteAudioTrack_1 = __webpack_require__(/*! ./RTCRemoteAudioTrack */ 96);\nvar RTCLocalTrack_1 = __webpack_require__(/*! ./RTCLocalTrack */ 97);\nvar RTCClient = __webpack_provided_uni_dot_requireNativePlugin('QNRTC-UniPlugin-QNRtcClient');\nvar QNEvent = __webpack_provided_uni_dot_requireNativePlugin('globalEvent');\nvar QNRTCClient = function () {\n  function QNRTCClient() {\n    this.variationList = ['onUserPublished', 'onUserUnpublished', 'onVideoSubscribed', 'onAudioSubscribed'];\n  }\n  QNRTCClient.prototype.transformRemoteRTCTrack = function (trackList) {\n    var result = [];\n    for (var _i = 0, trackList_1 = trackList; _i < trackList_1.length; _i++) {\n      var i = trackList_1[_i];\n      var config = __assign({ identifyID: i.trackID, raw: i }, i);\n      if (i.kind === RTCEnum_1.QNRTCTrackKind.audio) {\n        result.push(new RTCRemoteAudioTrack_1.QNRemoteAudioTrack(config));\n      } else\n      {\n        result.push(new RTCRemoteVideoTrack_1.QNRemoteVideoTrack(config));\n      }\n    }\n    return result;\n  };\n  QNRTCClient.prototype.transformLocalRTCTrack = function (trackList) {\n    var result = [];\n    for (var _i = 0, trackList_2 = trackList; _i < trackList_2.length; _i++) {\n      var i = trackList_2[_i];\n      var config = __assign({ identifyID: i.trackID, userID: '', raw: i }, i);\n      if (i.kind === RTCEnum_1.QNRTCTrackKind.audio) {\n        result.push(new RTCLocalTrack_1.QNLocalTrack(config));\n      } else\n      {\n        result.push(new RTCLocalTrack_1.QNLocalTrack(config));\n      }\n    }\n    return result;\n  };\n  QNRTCClient.prototype.createRemoteTrackDataCallback = function (listener) {\n    var _this = this;\n    var variationCallback = function variationCallback(params) {\n      var result = _this.transformRemoteRTCTrack(params.trackList);\n      var callbackData = {\n        remoteUserID: params.remoteUserID,\n        trackList: result };\n\n      var callback = listener;\n      callback(callbackData);\n    };\n    return variationCallback;\n  };\n  QNRTCClient.prototype.on = function (name, listener) {\n    if (this.variationList.some(function (item) {return item === name;})) {\n      var callback = this.createRemoteTrackDataCallback(listener);\n      QNEvent.addEventListener(name, callback);\n    } else\n    {\n      QNEvent.addEventListener(name, listener);\n    }\n  };\n  QNRTCClient.prototype.off = function (name, listener) {\n    QNEvent.removeEventListener(name, listener);\n  };\n  QNRTCClient.prototype.join = function (token, userData) {\n    return RTCClient.join(token, userData);\n  };\n  QNRTCClient.prototype.leave = function () {\n    return RTCClient.leave();\n  };\n  QNRTCClient.prototype.publish = function (tracks, callback) {\n    return RTCClient.publish(tracks, function (_a) {\n      var onPublished = _a.onPublished,data = _a.data,error = _a.error;\n      if (onPublished) {\n        var _loop_1 = function _loop_1(key) {\n          var index = tracks.findIndex(function (item) {return item.identifyID === key;});\n          if (index >= 0) {\n            tracks[index].trackID = data[key];\n          }\n        };\n        for (var key in data) {\n          _loop_1(key);\n        }\n      }\n      callback(onPublished, error);\n    });\n  };\n  QNRTCClient.prototype.unpublish = function (tracks) {\n    return RTCClient.unpublish(tracks);\n  };\n  QNRTCClient.prototype.subscribe = function (tracks) {\n    return RTCClient.subscribe(tracks);\n  };\n  QNRTCClient.prototype.unsubscribe = function (tracks) {\n    return RTCClient.unsubscribe(tracks);\n  };\n  QNRTCClient.prototype.getSubscribedTracks = function (userID) {\n    var remoteTrack = RTCClient.getSubscribedTracks(userID);\n    return this.transformRemoteRTCTrack(remoteTrack);\n  };\n  QNRTCClient.prototype.getLocalAudioTrackStats = function () {\n    return RTCClient.getLocalAudioTrackStats();\n  };\n  QNRTCClient.prototype.getLocalVideoTrackStats = function () {\n    return RTCClient.getLocalVideoTrackStats();\n  };\n  QNRTCClient.prototype.getRemoteAudioTrackStats = function () {\n    return RTCClient.getRemoteAudioTrackStats();\n  };\n  QNRTCClient.prototype.getRemoteVideoTrackStats = function () {\n    return RTCClient.getRemoteVideoTrackStats();\n  };\n  QNRTCClient.prototype.getUserNetworkQuality = function (userID) {\n    return RTCClient.getUserNetworkQuality(userID);\n  };\n  QNRTCClient.prototype.getRemoteUsers = function () {\n    var remoteUser = RTCClient.getRemoteUsers();\n    var result = [];\n    for (var _i = 0, remoteUser_1 = remoteUser; _i < remoteUser_1.length; _i++) {\n      var i = remoteUser_1[_i];\n      var audioTracks = this.transformRemoteRTCTrack(i.audioTracks);\n      var videoTracks = this.transformRemoteRTCTrack(i.videoTracks);\n      result.push({\n        userID: i.userID,\n        videoTracks: videoTracks,\n        audioTracks: audioTracks,\n        userData: i.userData });\n\n    }\n    return result;\n  };\n  QNRTCClient.prototype.getPublishedTracks = function () {\n    var locakTrack = RTCClient.getPublishedTracks();\n    return this.transformLocalRTCTrack(locakTrack);\n  };\n  QNRTCClient.prototype.sendMessage = function (message, users, messageId) {\n    return RTCClient.sendMessage(message, users, messageId);\n  };\n  QNRTCClient.prototype.getConnectionState = function () {\n    return RTCClient.getConnectionState();\n  };\n  QNRTCClient.prototype.setAutoSubscribe = function (autoSubscribe) {\n    return RTCClient.setAutoSubscribe(autoSubscribe);\n  };\n  QNRTCClient.prototype.startLiveStreamingWithDirect = function (config) {\n    return RTCClient.startLiveStreamingWithDirect(config);\n  };\n  QNRTCClient.prototype.startLiveStreamingWithTranscoding = function (config) {\n    return RTCClient.startLiveStreamingWithTranscoding(config);\n  };\n  QNRTCClient.prototype.stopLiveStreamingWithDirect = function (config) {\n    return RTCClient.stopLiveStreamingWithDirect(config);\n  };\n  QNRTCClient.prototype.stopLiveStreamingWithTranscoding = function (config) {\n    return RTCClient.stopLiveStreamingWithTranscoding(config);\n  };\n  QNRTCClient.prototype.setTranscodingLiveStreamingTracks = function (streamID, transcodingTracks) {\n    return RTCClient.setTranscodingLiveStreamingTracks(streamID, transcodingTracks);\n  };\n  QNRTCClient.prototype.removeTranscodingLiveStreamingTracks = function (streamID, transcodingTracks) {\n    return RTCClient.removeTranscodingLiveStreamingTracks(streamID, transcodingTracks);\n  };\n  return QNRTCClient;\n}();\nexports.QNRTCClient = QNRTCClient;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/uni-app-plus-nvue/dist/require-native-plugin.js */ 66)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vanNfc2RrL1FOUlRDLVVuaVBsdWdpbi1KUy9RTlJUQy1VbmlQbHVnaW4tSlMvY2xhc3MvUlRDQ2xpZW50LmpzIl0sIm5hbWVzIjpbIl9fYXNzaWduIiwiT2JqZWN0IiwiYXNzaWduIiwidCIsInMiLCJpIiwibiIsImFyZ3VtZW50cyIsImxlbmd0aCIsInAiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJhcHBseSIsImV4cG9ydHMiLCJfX2VzTW9kdWxlIiwiUU5SVENDbGllbnQiLCJSVENFbnVtXzEiLCJyZXF1aXJlIiwiUlRDUmVtb3RlVmlkZW9UcmFja18xIiwiUlRDUmVtb3RlQXVkaW9UcmFja18xIiwiUlRDTG9jYWxUcmFja18xIiwiUlRDQ2xpZW50IiwidW5pIiwiUU5FdmVudCIsInZhcmlhdGlvbkxpc3QiLCJ0cmFuc2Zvcm1SZW1vdGVSVENUcmFjayIsInRyYWNrTGlzdCIsInJlc3VsdCIsIl9pIiwidHJhY2tMaXN0XzEiLCJjb25maWciLCJpZGVudGlmeUlEIiwidHJhY2tJRCIsInJhdyIsImtpbmQiLCJRTlJUQ1RyYWNrS2luZCIsImF1ZGlvIiwicHVzaCIsIlFOUmVtb3RlQXVkaW9UcmFjayIsIlFOUmVtb3RlVmlkZW9UcmFjayIsInRyYW5zZm9ybUxvY2FsUlRDVHJhY2siLCJ0cmFja0xpc3RfMiIsInVzZXJJRCIsIlFOTG9jYWxUcmFjayIsImNyZWF0ZVJlbW90ZVRyYWNrRGF0YUNhbGxiYWNrIiwibGlzdGVuZXIiLCJfdGhpcyIsInZhcmlhdGlvbkNhbGxiYWNrIiwicGFyYW1zIiwiY2FsbGJhY2tEYXRhIiwicmVtb3RlVXNlcklEIiwiY2FsbGJhY2siLCJvbiIsIm5hbWUiLCJzb21lIiwiaXRlbSIsImFkZEV2ZW50TGlzdGVuZXIiLCJvZmYiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiam9pbiIsInRva2VuIiwidXNlckRhdGEiLCJsZWF2ZSIsInB1Ymxpc2giLCJ0cmFja3MiLCJfYSIsIm9uUHVibGlzaGVkIiwiZGF0YSIsImVycm9yIiwiX2xvb3BfMSIsImtleSIsImluZGV4IiwiZmluZEluZGV4IiwidW5wdWJsaXNoIiwic3Vic2NyaWJlIiwidW5zdWJzY3JpYmUiLCJnZXRTdWJzY3JpYmVkVHJhY2tzIiwicmVtb3RlVHJhY2siLCJnZXRMb2NhbEF1ZGlvVHJhY2tTdGF0cyIsImdldExvY2FsVmlkZW9UcmFja1N0YXRzIiwiZ2V0UmVtb3RlQXVkaW9UcmFja1N0YXRzIiwiZ2V0UmVtb3RlVmlkZW9UcmFja1N0YXRzIiwiZ2V0VXNlck5ldHdvcmtRdWFsaXR5IiwiZ2V0UmVtb3RlVXNlcnMiLCJyZW1vdGVVc2VyIiwicmVtb3RlVXNlcl8xIiwiYXVkaW9UcmFja3MiLCJ2aWRlb1RyYWNrcyIsImdldFB1Ymxpc2hlZFRyYWNrcyIsImxvY2FrVHJhY2siLCJzZW5kTWVzc2FnZSIsIm1lc3NhZ2UiLCJ1c2VycyIsIm1lc3NhZ2VJZCIsImdldENvbm5lY3Rpb25TdGF0ZSIsInNldEF1dG9TdWJzY3JpYmUiLCJhdXRvU3Vic2NyaWJlIiwic3RhcnRMaXZlU3RyZWFtaW5nV2l0aERpcmVjdCIsInN0YXJ0TGl2ZVN0cmVhbWluZ1dpdGhUcmFuc2NvZGluZyIsInN0b3BMaXZlU3RyZWFtaW5nV2l0aERpcmVjdCIsInN0b3BMaXZlU3RyZWFtaW5nV2l0aFRyYW5zY29kaW5nIiwic2V0VHJhbnNjb2RpbmdMaXZlU3RyZWFtaW5nVHJhY2tzIiwic3RyZWFtSUQiLCJ0cmFuc2NvZGluZ1RyYWNrcyIsInJlbW92ZVRyYW5zY29kaW5nTGl2ZVN0cmVhbWluZ1RyYWNrcyJdLCJtYXBwaW5ncyI6IkFBQUEsc0ZBQWE7QUFDYixJQUFJQSxRQUFRLEdBQUksUUFBUSxLQUFLQSxRQUFkLElBQTJCLFlBQVk7QUFDbERBLFVBQVEsR0FBR0MsTUFBTSxDQUFDQyxNQUFQLElBQWlCLFVBQVNDLENBQVQsRUFBWTtBQUNwQyxTQUFLLElBQUlDLENBQUosRUFBT0MsQ0FBQyxHQUFHLENBQVgsRUFBY0MsQ0FBQyxHQUFHQyxTQUFT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eUYsaUNBQXRCLEdBQTBELFVBQVVwRSxNQUFWLEVBQWtCO0FBQ3hFLFdBQU9ULFNBQVMsQ0FBQzZFLGlDQUFWLENBQTRDcEUsTUFBNUMsQ0FBUDtBQUNILEdBRkQ7QUFHQWYsYUFBVyxDQUFDTixTQUFaLENBQXNCMEYsMkJBQXRCLEdBQW9ELFVBQVVyRSxNQUFWLEVBQWtCO0FBQ2xFLFdBQU9ULFNBQVMsQ0FBQzhFLDJCQUFWLENBQXNDckUsTUFBdEMsQ0FBUDtBQUNILEdBRkQ7QUFHQWYsYUFBVyxDQUFDTixTQUFaLENBQXNCMkYsZ0NBQXRCLEdBQXlELFVBQVV0RSxNQUFWLEVBQWtCO0FBQ3ZFLFdBQU9ULFNBQVMsQ0FBQytFLGdDQUFWLENBQTJDdEUsTUFBM0MsQ0FBUDtBQUNILEdBRkQ7QUFHQWYsYUFBVyxDQUFDTixTQUFaLENBQXNCNEYsaUNBQXRCLEdBQTBELFVBQVVDLFFBQVYsRUFBb0JDLGlCQUFwQixFQUF1QztBQUM3RixXQUFPbEYsU0FBUyxDQUFDZ0YsaUNBQVYsQ0FBNENDLFFBQTVDLEVBQXNEQyxpQkFBdEQsQ0FBUDtBQUNILEdBRkQ7QUFHQXhGLGFBQVcsQ0FBQ04sU0FBWixDQUFzQitGLG9DQUF0QixHQUE2RCxVQUFVRixRQUFWLEVBQW9CQyxpQkFBcEIsRUFBdUM7QUFDaEcsV0FBT2xGLFNBQVMsQ0FBQ21GLG9DQUFWLENBQStDRixRQUEvQyxFQUF5REMsaUJBQXpELENBQVA7QUFDSCxHQUZEO0FBR0EsU0FBT3hGLFdBQVA7QUFDSCxDQTVKa0IsRUFBbkI7QUE2SkFGLE9BQU8sQ0FBQ0UsV0FBUixHQUFzQkEsV0FBdEIsQyIsImZpbGUiOiI5Mi5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xudmFyIF9fYXNzaWduID0gKHRoaXMgJiYgdGhpcy5fX2Fzc2lnbikgfHwgZnVuY3Rpb24gKCkge1xuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcbiAgICAgICAgICAgICAgICB0W3BdID0gc1twXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdDtcbiAgICB9O1xuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufTtcbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLlFOUlRDQ2xpZW50ID0gdm9pZCAwO1xudmFyIFJUQ0VudW1fMSA9IHJlcXVpcmUoXCIuLi9lbnVtL1JUQ0VudW1cIik7XG52YXIgUlRDUmVtb3RlVmlkZW9UcmFja18xID0gcmVxdWlyZShcIi4vUlRDUmVtb3RlVmlkZW9UcmFja1wiKTtcbnZhciBSVENSZW1vdGVBdWRpb1RyYWNrXzEgPSByZXF1aXJlKFwiLi9SVENSZW1vdGVBdWRpb1RyYWNrXCIpO1xudmFyIFJUQ0xvY2FsVHJhY2tfMSA9IHJlcXVpcmUoXCIuL1JUQ0xvY2FsVHJhY2tcIik7XG52YXIgUlRDQ2xpZW50ID0gdW5pLnJlcXVpcmVOYXRpdmVQbHVnaW4oJ1FOUlRDLVVuaVBsdWdpbi1RTlJ0Y0NsaWVudCcpO1xudmFyIFFORXZlbnQgPSB1bmkucmVxdWlyZU5hdGl2ZVBsdWdpbignZ2xvYmFsRXZlbnQnKTtcbnZhciBRTlJUQ0NsaWVudCA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gUU5SVENDbGllbnQoKSB7XG4gICAgICAgIHRoaXMudmFyaWF0aW9uTGlzdCA9IFsnb25Vc2VyUHVibGlzaGVkJywgJ29uVXNlclVucHVibGlzaGVkJywgJ29uVmlkZW9TdWJzY3JpYmVkJywgJ29uQXVkaW9TdWJzY3JpYmVkJ107XG4gICAgfVxuICAgIFFOUlRDQ2xpZW50LnByb3RvdHlwZS50cmFuc2Zvcm1SZW1vdGVSVENUcmFjayA9IGZ1bmN0aW9uICh0cmFja0xpc3QpIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IFtdO1xuICAgICAgICBmb3IgKHZhciBfaSA9IDAsIHRyYWNrTGlzdF8xID0gdHJhY2tMaXN0OyBfaSA8IHRyYWNrTGlzdF8xLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgdmFyIGkgPSB0cmFja0xpc3RfMVtfaV07XG4gICAgICAgICAgICB2YXIgY29uZmlnID0gX19hc3NpZ24oeyBpZGVudGlmeUlEOiBpLnRyYWNrSUQsIHJhdzogaSB9LCBpKTtcbiAgICAgICAgICAgIGlmIChpLmtpbmQgPT09IFJUQ0VudW1fMS5RTlJUQ1RyYWNrS2luZC5hdWRpbykge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKG5ldyBSVENSZW1vdGVBdWRpb1RyYWNrXzEuUU5SZW1vdGVBdWRpb1RyYWNrKGNvbmZpZykpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0LnB1c2gobmV3IFJUQ1JlbW90ZVZpZGVvVHJhY2tfMS5RTlJlbW90ZVZpZGVvVHJhY2soY29uZmlnKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xuICAgIFFOUlRDQ2xpZW50LnByb3RvdHlwZS50cmFuc2Zvcm1Mb2NhbFJUQ1RyYWNrID0gZnVuY3Rpb24gKHRyYWNrTGlzdCkge1xuICAgICAgICB2YXIgcmVzdWx0ID0gW107XG4gICAgICAgIGZvciAodmFyIF9pID0gMCwgdHJhY2tMaXN0XzIgPSB0cmFja0xpc3Q7IF9pIDwgdHJhY2tMaXN0XzIubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICB2YXIgaSA9IHRyYWNrTGlzdF8yW19pXTtcbiAgICAgICAgICAgIHZhciBjb25maWcgPSBfX2Fzc2lnbih7IGlkZW50aWZ5SUQ6IGkudHJhY2tJRCwgdXNlcklEOiAnJywgcmF3OiBpIH0sIGkpO1xuICAgICAgICAgICAgaWYgKGkua2luZCA9PT0gUlRDRW51bV8xLlFOUlRDVHJhY2tLaW5kLmF1ZGlvKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0LnB1c2gobmV3IFJUQ0xvY2FsVHJhY2tfMS5RTkxvY2FsVHJhY2soY29uZmlnKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXN1bHQucHVzaChuZXcgUlRDTG9jYWxUcmFja18xLlFOTG9jYWxUcmFjayhjb25maWcpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH07XG4gICAgUU5SVENDbGllbnQucHJvdG90eXBlLmNyZWF0ZVJlbW90ZVRyYWNrRGF0YUNhbGxiYWNrID0gZnVuY3Rpb24gKGxpc3RlbmVyKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciB2YXJpYXRpb25DYWxsYmFjayA9IGZ1bmN0aW9uIChwYXJhbXMpIHtcbiAgICAgICAgICAgIHZhciByZXN1bHQgPSBfdGhpcy50cmFuc2Zvcm1SZW1vdGVSVENUcmFjayhwYXJhbXMudHJhY2tMaXN0KTtcbiAgICAgICAgICAgIHZhciBjYWxsYmFja0RhdGEgPSB7XG4gICAgICAgICAgICAgICAgcmVtb3RlVXNlcklEOiBwYXJhbXMucmVtb3RlVXNlcklELFxuICAgICAgICAgICAgICAgIHRyYWNrTGlzdDogcmVzdWx0XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgdmFyIGNhbGxiYWNrID0gbGlzdGVuZXI7XG4gICAgICAgICAgICBjYWxsYmFjayhjYWxsYmFja0RhdGEpO1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gdmFyaWF0aW9uQ2FsbGJhY2s7XG4gICAgfTtcbiAgICBRTlJUQ0NsaWVudC5wcm90b3R5cGUub24gPSBmdW5jdGlvbiAobmFtZSwgbGlzdGVuZXIpIHtcbiAgICAgICAgaWYgKHRoaXMudmFyaWF0aW9uTGlzdC5zb21lKGZ1bmN0aW9uIChpdGVtKSB7IHJldHVybiBpdGVtID09PSBuYW1lOyB9KSkge1xuICAgICAgICAgICAgdmFyIGNhbGxiYWNrID0gdGhpcy5jcmVhdGVSZW1vdGVUcmFja0RhdGFDYWxsYmFjayhsaXN0ZW5lcik7XG4gICAgICAgICAgICBRTkV2ZW50LmFkZEV2ZW50TGlzdGVuZXIobmFtZSwgY2FsbGJhY2spO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgUU5FdmVudC5hZGRFdmVudExpc3RlbmVyKG5hbWUsIGxpc3RlbmVyKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgUU5SVENDbGllbnQucHJvdG90eXBlLm9mZiA9IGZ1bmN0aW9uIChuYW1lLCBsaXN0ZW5lcikge1xuICAgICAgICBRTkV2ZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIobmFtZSwgbGlzdGVuZXIpO1xuICAgIH07XG4gICAgUU5SVENDbGllbnQucHJvdG90eXBlLmpvaW4gPSBmdW5jdGlvbiAodG9rZW4sIHVzZXJEYXRhKSB7XG4gICAgICAgIHJldHVybiBSVENDbGllbnQuam9pbih0b2tlbiwgdXNlckRhdGEpO1xuICAgIH07XG4gICAgUU5SVENDbGllbnQucHJvdG90eXBlLmxlYXZlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gUlRDQ2xpZW50LmxlYXZlKCk7XG4gICAgfTtcbiAgICBRTlJUQ0NsaWVudC5wcm90b3R5cGUucHVibGlzaCA9IGZ1bmN0aW9uICh0cmFja3MsIGNhbGxiYWNrKSB7XG4gICAgICAgIHJldHVybiBSVENDbGllbnQucHVibGlzaCh0cmFja3MsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgdmFyIG9uUHVibGlzaGVkID0gX2Eub25QdWJsaXNoZWQsIGRhdGEgPSBfYS5kYXRhLCBlcnJvciA9IF9hLmVycm9yO1xuICAgICAgICAgICAgaWYgKG9uUHVibGlzaGVkKSB7XG4gICAgICAgICAgICAgICAgdmFyIF9sb29wXzEgPSBmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBpbmRleCA9IHRyYWNrcy5maW5kSW5kZXgoZnVuY3Rpb24gKGl0ZW0pIHsgcmV0dXJuIGl0ZW0uaWRlbnRpZnlJRCA9PT0ga2V5OyB9KTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGluZGV4ID49IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYWNrc1tpbmRleF0udHJhY2tJRCA9IGRhdGFba2V5XTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgZm9yICh2YXIga2V5IGluIGRhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgX2xvb3BfMShrZXkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhbGxiYWNrKG9uUHVibGlzaGVkLCBlcnJvcik7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgUU5SVENDbGllbnQucHJvdG90eXBlLnVucHVibGlzaCA9IGZ1bmN0aW9uICh0cmFja3MpIHtcbiAgICAgICAgcmV0dXJuIFJUQ0NsaWVudC51bnB1Ymxpc2godHJhY2tzKTtcbiAgICB9O1xuICAgIFFOUlRDQ2xpZW50LnByb3RvdHlwZS5zdWJzY3JpYmUgPSBmdW5jdGlvbiAodHJhY2tzKSB7XG4gICAgICAgIHJldHVybiBSVENDbGllbnQuc3Vic2NyaWJlKHRyYWNrcyk7XG4gICAgfTtcbiAgICBRTlJUQ0NsaWVudC5wcm90b3R5cGUudW5zdWJzY3JpYmUgPSBmdW5jdGlvbiAodHJhY2tzKSB7XG4gICAgICAgIHJldHVybiBSVENDbGllbnQudW5zdWJzY3JpYmUodHJhY2tzKTtcbiAgICB9O1xuICAgIFFOUlRDQ2xpZW50LnByb3RvdHlwZS5nZXRTdWJzY3JpYmVkVHJhY2tzID0gZnVuY3Rpb24gKHVzZXJJRCkge1xuICAgICAgICB2YXIgcmVtb3RlVHJhY2sgPSBSVENDbGllbnQuZ2V0U3Vic2NyaWJlZFRyYWNrcyh1c2VySUQpO1xuICAgICAgICByZXR1cm4gdGhpcy50cmFuc2Zvcm1SZW1vdGVSVENUcmFjayhyZW1vdGVUcmFjayk7XG4gICAgfTtcbiAgICBRTlJUQ0NsaWVudC5wcm90b3R5cGUuZ2V0TG9jYWxBdWRpb1RyYWNrU3RhdHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBSVENDbGllbnQuZ2V0TG9jYWxBdWRpb1RyYWNrU3RhdHMoKTtcbiAgICB9O1xuICAgIFFOUlRDQ2xpZW50LnByb3RvdHlwZS5nZXRMb2NhbFZpZGVvVHJhY2tTdGF0cyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIFJUQ0NsaWVudC5nZXRMb2NhbFZpZGVvVHJhY2tTdGF0cygpO1xuICAgIH07XG4gICAgUU5SVENDbGllbnQucHJvdG90eXBlLmdldFJlbW90ZUF1ZGlvVHJhY2tTdGF0cyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIFJUQ0NsaWVudC5nZXRSZW1vdGVBdWRpb1RyYWNrU3RhdHMoKTtcbiAgICB9O1xuICAgIFFOUlRDQ2xpZW50LnByb3RvdHlwZS5nZXRSZW1vdGVWaWRlb1RyYWNrU3RhdHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBSVENDbGllbnQuZ2V0UmVtb3RlVmlkZW9UcmFja1N0YXRzKCk7XG4gICAgfTtcbiAgICBRTlJUQ0NsaWVudC5wcm90b3R5cGUuZ2V0VXNlck5ldHdvcmtRdWFsaXR5ID0gZnVuY3Rpb24gKHVzZXJJRCkge1xuICAgICAgICByZXR1cm4gUlRDQ2xpZW50LmdldFVzZXJOZXR3b3JrUXVhbGl0eSh1c2VySUQpO1xuICAgIH07XG4gICAgUU5SVENDbGllbnQucHJvdG90eXBlLmdldFJlbW90ZVVzZXJzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgcmVtb3RlVXNlciA9IFJUQ0NsaWVudC5nZXRSZW1vdGVVc2VycygpO1xuICAgICAgICB2YXIgcmVzdWx0ID0gW107XG4gICAgICAgIGZvciAodmFyIF9pID0gMCwgcmVtb3RlVXNlcl8xID0gcmVtb3RlVXNlcjsgX2kgPCByZW1vdGVVc2VyXzEubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICB2YXIgaSA9IHJlbW90ZVVzZXJfMVtfaV07XG4gICAgICAgICAgICB2YXIgYXVkaW9UcmFja3MgPSB0aGlzLnRyYW5zZm9ybVJlbW90ZVJUQ1RyYWNrKGkuYXVkaW9UcmFja3MpO1xuICAgICAgICAgICAgdmFyIHZpZGVvVHJhY2tzID0gdGhpcy50cmFuc2Zvcm1SZW1vdGVSVENUcmFjayhpLnZpZGVvVHJhY2tzKTtcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHtcbiAgICAgICAgICAgICAgICB1c2VySUQ6IGkudXNlcklELFxuICAgICAgICAgICAgICAgIHZpZGVvVHJhY2tzOiB2aWRlb1RyYWNrcyxcbiAgICAgICAgICAgICAgICBhdWRpb1RyYWNrczogYXVkaW9UcmFja3MsXG4gICAgICAgICAgICAgICAgdXNlckRhdGE6IGkudXNlckRhdGFcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfTtcbiAgICBRTlJUQ0NsaWVudC5wcm90b3R5cGUuZ2V0UHVibGlzaGVkVHJhY2tzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgbG9jYWtUcmFjayA9IFJUQ0NsaWVudC5nZXRQdWJsaXNoZWRUcmFja3MoKTtcbiAgICAgICAgcmV0dXJuIHRoaXMudHJhbnNmb3JtTG9jYWxSVENUcmFjayhsb2Nha1RyYWNrKTtcbiAgICB9O1xuICAgIFFOUlRDQ2xpZW50LnByb3RvdHlwZS5zZW5kTWVzc2FnZSA9IGZ1bmN0aW9uIChtZXNzYWdlLCB1c2VycywgbWVzc2FnZUlkKSB7XG4gICAgICAgIHJldHVybiBSVENDbGllbnQuc2VuZE1lc3NhZ2UobWVzc2FnZSwgdXNlcnMsIG1lc3NhZ2VJZCk7XG4gICAgfTtcbiAgICBRTlJUQ0NsaWVudC5wcm90b3R5cGUuZ2V0Q29ubmVjdGlvblN0YXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gUlRDQ2xpZW50LmdldENvbm5lY3Rpb25TdGF0ZSgpO1xuICAgIH07XG4gICAgUU5SVENDbGllbnQucHJvdG90eXBlLnNldEF1dG9TdWJzY3JpYmUgPSBmdW5jdGlvbiAoYXV0b1N1YnNjcmliZSkge1xuICAgICAgICByZXR1cm4gUlRDQ2xpZW50LnNldEF1dG9TdWJzY3JpYmUoYXV0b1N1YnNjcmliZSk7XG4gICAgfTtcbiAgICBRTlJUQ0NsaWVudC5wcm90b3R5cGUuc3RhcnRMaXZlU3RyZWFtaW5nV2l0aERpcmVjdCA9IGZ1bmN0aW9uIChjb25maWcpIHtcbiAgICAgICAgcmV0dXJuIFJUQ0NsaWVudC5zdGFydExpdmVTdHJlYW1pbmdXaXRoRGlyZWN0KGNvbmZpZyk7XG4gICAgfTtcbiAgICBRTlJUQ0NsaWVudC5wcm90b3R5cGUuc3RhcnRMaXZlU3RyZWFtaW5nV2l0aFRyYW5zY29kaW5nID0gZnVuY3Rpb24gKGNvbmZpZykge1xuICAgICAgICByZXR1cm4gUlRDQ2xpZW50LnN0YXJ0TGl2ZVN0cmVhbWluZ1dpdGhUcmFuc2NvZGluZyhjb25maWcpO1xuICAgIH07XG4gICAgUU5SVENDbGllbnQucHJvdG90eXBlLnN0b3BMaXZlU3RyZWFtaW5nV2l0aERpcmVjdCA9IGZ1bmN0aW9uIChjb25maWcpIHtcbiAgICAgICAgcmV0dXJuIFJUQ0NsaWVudC5zdG9wTGl2ZVN0cmVhbWluZ1dpdGhEaXJlY3QoY29uZmlnKTtcbiAgICB9O1xuICAgIFFOUlRDQ2xpZW50LnByb3RvdHlwZS5zdG9wTGl2ZVN0cmVhbWluZ1dpdGhUcmFuc2NvZGluZyA9IGZ1bmN0aW9uIChjb25maWcpIHtcbiAgICAgICAgcmV0dXJuIFJUQ0NsaWVudC5zdG9wTGl2ZVN0cmVhbWluZ1dpdGhUcmFuc2NvZGluZyhjb25maWcpO1xuICAgIH07XG4gICAgUU5SVENDbGllbnQucHJvdG90eXBlLnNldFRyYW5zY29kaW5nTGl2ZVN0cmVhbWluZ1RyYWNrcyA9IGZ1bmN0aW9uIChzdHJlYW1JRCwgdHJhbnNjb2RpbmdUcmFja3MpIHtcbiAgICAgICAgcmV0dXJuIFJUQ0NsaWVudC5zZXRUcmFuc2NvZGluZ0xpdmVTdHJlYW1pbmdUcmFja3Moc3RyZWFtSUQsIHRyYW5zY29kaW5nVHJhY2tzKTtcbiAgICB9O1xuICAgIFFOUlRDQ2xpZW50LnByb3RvdHlwZS5yZW1vdmVUcmFuc2NvZGluZ0xpdmVTdHJlYW1pbmdUcmFja3MgPSBmdW5jdGlvbiAoc3RyZWFtSUQsIHRyYW5zY29kaW5nVHJhY2tzKSB7XG4gICAgICAgIHJldHVybiBSVENDbGllbnQucmVtb3ZlVHJhbnNjb2RpbmdMaXZlU3RyZWFtaW5nVHJhY2tzKHN0cmVhbUlELCB0cmFuc2NvZGluZ1RyYWNrcyk7XG4gICAgfTtcbiAgICByZXR1cm4gUU5SVENDbGllbnQ7XG59KCkpO1xuZXhwb3J0cy5RTlJUQ0NsaWVudCA9IFFOUlRDQ2xpZW50O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///92\n");

/***/ }),

/***/ 93:
/*!**************************************************************************************************************************!*\
  !*** /Users/tongjie/Desktop/QNRTC-Uniapp/demo/js_sdk/QNRTC-UniPlugin-JS/QNRTC-UniPlugin-JS/class/RTCRemoteVideoTrack.js ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__webpack_provided_uni_dot_requireNativePlugin) {\nvar __extends = this && this.__extends || function () {\n  var _extendStatics = function extendStatics(d, b) {\n    _extendStatics = Object.setPrototypeOf ||\n    { __proto__: [] } instanceof Array && function (d, b) {d.__proto__ = b;} ||\n    function (d, b) {for (var p in b) {if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];}};\n    return _extendStatics(d, b);\n  };\n  return function (d, b) {\n    if (typeof b !== \"function\" && b !== null)\n    throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\n    _extendStatics(d, b);\n    function __() {this.constructor = d;}\n    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n  };\n}();\nexports.__esModule = true;\nexports.QNRemoteVideoTrack = void 0;\nvar RTCRemoteTrack_1 = __webpack_require__(/*! ./RTCRemoteTrack */ 94);\nvar QNRtcTrack = __webpack_provided_uni_dot_requireNativePlugin('QNRTC-UniPlugin-QNRtcTrack');\nvar QNRemoteVideoTrack = function (_super) {\n  __extends(QNRemoteVideoTrack, _super);\n  function QNRemoteVideoTrack() {\n    return _super !== null && _super.apply(this, arguments) || this;\n  }\n  QNRemoteVideoTrack.prototype.setProfile = function (profile) {\n    return QNRtcTrack.setProfile(this.identifyID, profile);\n  };\n  QNRemoteVideoTrack.prototype.isMultiProfileEnabled = function () {\n    return QNRtcTrack.isMultiProfileEnabled(this.identifyID);\n  };\n  QNRemoteVideoTrack.prototype.getProfile = function () {\n    return QNRtcTrack.getProfile(this.identifyID);\n  };\n  return QNRemoteVideoTrack;\n}(RTCRemoteTrack_1.QNRemoteTrack);\nexports.QNRemoteVideoTrack = QNRemoteVideoTrack;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/uni-app-plus-nvue/dist/require-native-plugin.js */ 66)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vanNfc2RrL1FOUlRDLVVuaVBsdWdpbi1KUy9RTlJUQy1VbmlQbHVnaW4tSlMvY2xhc3MvUlRDUmVtb3RlVmlkZW9UcmFjay5qcyJdLCJuYW1lcyI6WyJfX2V4dGVuZHMiLCJleHRlbmRTdGF0aWNzIiwiZCIsImIiLCJPYmplY3QiLCJzZXRQcm90b3R5cGVPZiIsIl9fcHJvdG9fXyIsIkFycmF5IiwicCIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsIlR5cGVFcnJvciIsIlN0cmluZyIsIl9fIiwiY29uc3RydWN0b3IiLCJjcmVhdGUiLCJleHBvcnRzIiwiX19lc01vZHVsZSIsIlFOUmVtb3RlVmlkZW9UcmFjayIsIlJUQ1JlbW90ZVRyYWNrXzEiLCJyZXF1aXJlIiwiUU5SdGNUcmFjayIsInVuaSIsIl9zdXBlciIsImFwcGx5IiwiYXJndW1lbnRzIiwic2V0UHJvZmlsZSIsInByb2ZpbGUiLCJpZGVudGlmeUlEIiwiaXNNdWx0aVByb2ZpbGVFbmFibGVkIiwiZ2V0UHJvZmlsZSIsIlFOUmVtb3RlVHJhY2siXSwibWFwcGluZ3MiOiJBQUFBLHNGQUFhO0FBQ2IsSUFBSUEsU0FBUyxHQUFJLFFBQVEsS0FBS0EsU0FBZCxJQUE2QixZQUFZO0FBQ3JELE1BQUlDLGNBQWEsR0FBRyx1QkFBVUMsQ0FBVixFQUFhQyxDQUFiLEVBQWdCO0FBQ2hDRixrQkFBYSxHQUFHRyxNQUFNLENBQUNDLGNBQVA7QUFDWCxNQUFFQyxTQUFTLEVBQUUsRUFBYixjQUE2QkMsS0FBN0IsSUFBc0MsVUFBVUwsQ0FBVixFQUFhQyxDQUFiLEVBQWdCLENBQUVELENBQUMsQ0FBQ0ksU0FBRixHQUFjSCxDQUFkLENBQWtCLENBRC9EO0FBRVosY0FBVUQsQ0FBVixFQUFhQyxDQUFiLEVBQWdCLENBQUUsS0FBSyxJQUFJSyxDQUFULElBQWNMLENBQWQsR0FBaUIsSUFBSUMsTUFBTSxDQUFDSyxTQUFQLENBQWlCQyxjQUFqQixDQUFnQ0MsSUFBaEMsQ0FBcUNSLENBQXJDLEVBQXdDSyxDQUF4QyxDQUFKLEVBQWdETixDQUFDLENBQUNNLENBQUQsQ0FBRCxHQUFPTCxDQUFDLENBQUNLLENBQUQsQ0FBUixDQUFqRSxDQUErRSxDQUZyRztBQUdBLFdBQU9QLGNBQWEsQ0FBQ0MsQ0FBRCxFQUFJQyxDQUFKLENBQXBCO0FBQ0gsR0FMRDtBQU1BLFNBQU8sVUFBVUQsQ0FBVixFQUFhQyxDQUFiLEVBQWdCO0FBQ25CLFFBQUksT0FBT0EsQ0FBUCxLQUFhLFVBQWIsSUFBMkJBLENBQUMsS0FBSyxJQUFyQztBQUNJLFVBQU0sSUFBSVMsU0FBSixDQUFjLHlCQUF5QkMsTUFBTSxDQUFDVixDQUFELENBQS9CLEdBQXFDLCtCQUFuRCxDQUFOO0FBQ0pGLGtCQUFhLENBQUNDLENBQUQsRUFBSUMsQ0FBSixDQUFiO0FBQ0EsYUFBU1csRUFBVCxHQUFjLENBQUUsS0FBS0MsV0FBTCxHQUFtQmIsQ0FBbkIsQ0FBdUI7QUFDdkNBLEtBQUMsQ0FBQ08sU0FBRixHQUFjTixDQUFDLEtBQUssSUFBTixHQUFhQyxNQUFNLENBQUNZLE1BQVAsQ0FBY2IsQ0FBZCxDQUFiLElBQWlDVyxFQUFFLENBQUNMLFNBQUgsR0FBZU4sQ0FBQyxDQUFDTSxTQUFqQixFQUE0QixJQUFJSyxFQUFKLEVBQTdELENBQWQ7QUFDSCxHQU5EO0FBT0gsQ0FkMkMsRUFBNUM7QUFlQUcsT0FBTyxDQUFDQyxVQUFSLEdBQXFCLElBQXJCO0FBQ0FELE9BQU8sQ0FBQ0Usa0JBQVIsR0FBNkIsS0FBSyxDQUFsQztBQUNBLElBQUlDLGdCQUFnQixHQUFHQyxtQkFBTyxDQUFDLDBCQUFELENBQTlCO0FBQ0EsSUFBSUMsVUFBVSxHQUFHQyw4Q0FBQSxDQUF3Qiw0QkFBeEIsQ0FBakI7QUFDQSxJQUFJSixrQkFBa0IsR0FBSSxVQUFVSyxNQUFWLEVBQWtCO0FBQ3hDeEIsV0FBUyxDQUFDbUIsa0JBQUQsRUFBcUJLLE1BQXJCLENBQVQ7QUFDQSxXQUFTTCxrQkFBVCxHQUE4QjtBQUMxQixXQUFPSyxNQUFNLEtBQUssSUFBWCxJQUFtQkEsTUFBTSxDQUFDQyxLQUFQLENBQWEsSUFBYixFQUFtQkMsU0FBbkIsQ0FBbkIsSUFBb0QsSUFBM0Q7QUFDSDtBQUNEUCxvQkFBa0IsQ0FBQ1YsU0FBbkIsQ0FBNkJrQixVQUE3QixHQUEwQyxVQUFVQyxPQUFWLEVBQW1CO0FBQ3pELFdBQU9OLFVBQVUsQ0FBQ0ssVUFBWCxDQUFzQixLQUFLRSxVQUEzQixFQUF1Q0QsT0FBdkMsQ0FBUDtBQUNILEdBRkQ7QUFHQVQsb0JBQWtCLENBQUNWLFNBQW5CLENBQTZCcUIscUJBQTdCLEdBQXFELFlBQVk7QUFDN0QsV0FBT1IsVUFBVSxDQUFDUSxxQkFBWCxDQUFpQyxLQUFLRCxVQUF0QyxDQUFQO0FBQ0gsR0FGRDtBQUdBVixvQkFBa0IsQ0FBQ1YsU0FBbkIsQ0FBNkJzQixVQUE3QixHQUEwQyxZQUFZO0FBQ2xELFdBQU9ULFVBQVUsQ0FBQ1MsVUFBWCxDQUFzQixLQUFLRixVQUEzQixDQUFQO0FBQ0gsR0FGRDtBQUdBLFNBQU9WLGtCQUFQO0FBQ0gsQ0FmeUIsQ0FleEJDLGdCQUFnQixDQUFDWSxhQWZPLENBQTFCO0FBZ0JBZixPQUFPLENBQUNFLGtCQUFSLEdBQTZCQSxrQkFBN0IsQyIsImZpbGUiOiI5My5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBiICE9PSBcImZ1bmN0aW9uXCIgJiYgYiAhPT0gbnVsbClcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDbGFzcyBleHRlbmRzIHZhbHVlIFwiICsgU3RyaW5nKGIpICsgXCIgaXMgbm90IGEgY29uc3RydWN0b3Igb3IgbnVsbFwiKTtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLlFOUmVtb3RlVmlkZW9UcmFjayA9IHZvaWQgMDtcbnZhciBSVENSZW1vdGVUcmFja18xID0gcmVxdWlyZShcIi4vUlRDUmVtb3RlVHJhY2tcIik7XG52YXIgUU5SdGNUcmFjayA9IHVuaS5yZXF1aXJlTmF0aXZlUGx1Z2luKCdRTlJUQy1VbmlQbHVnaW4tUU5SdGNUcmFjaycpO1xudmFyIFFOUmVtb3RlVmlkZW9UcmFjayA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKFFOUmVtb3RlVmlkZW9UcmFjaywgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBRTlJlbW90ZVZpZGVvVHJhY2soKSB7XG4gICAgICAgIHJldHVybiBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgICB9XG4gICAgUU5SZW1vdGVWaWRlb1RyYWNrLnByb3RvdHlwZS5zZXRQcm9maWxlID0gZnVuY3Rpb24gKHByb2ZpbGUpIHtcbiAgICAgICAgcmV0dXJuIFFOUnRjVHJhY2suc2V0UHJvZmlsZSh0aGlzLmlkZW50aWZ5SUQsIHByb2ZpbGUpO1xuICAgIH07XG4gICAgUU5SZW1vdGVWaWRlb1RyYWNrLnByb3RvdHlwZS5pc011bHRpUHJvZmlsZUVuYWJsZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBRTlJ0Y1RyYWNrLmlzTXVsdGlQcm9maWxlRW5hYmxlZCh0aGlzLmlkZW50aWZ5SUQpO1xuICAgIH07XG4gICAgUU5SZW1vdGVWaWRlb1RyYWNrLnByb3RvdHlwZS5nZXRQcm9maWxlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gUU5SdGNUcmFjay5nZXRQcm9maWxlKHRoaXMuaWRlbnRpZnlJRCk7XG4gICAgfTtcbiAgICByZXR1cm4gUU5SZW1vdGVWaWRlb1RyYWNrO1xufShSVENSZW1vdGVUcmFja18xLlFOUmVtb3RlVHJhY2spKTtcbmV4cG9ydHMuUU5SZW1vdGVWaWRlb1RyYWNrID0gUU5SZW1vdGVWaWRlb1RyYWNrO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///93\n");

/***/ }),

/***/ 94:
/*!*********************************************************************************************************************!*\
  !*** /Users/tongjie/Desktop/QNRTC-Uniapp/demo/js_sdk/QNRTC-UniPlugin-JS/QNRTC-UniPlugin-JS/class/RTCRemoteTrack.js ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__webpack_provided_uni_dot_requireNativePlugin) {\nvar __extends = this && this.__extends || function () {\n  var _extendStatics = function extendStatics(d, b) {\n    _extendStatics = Object.setPrototypeOf ||\n    { __proto__: [] } instanceof Array && function (d, b) {d.__proto__ = b;} ||\n    function (d, b) {for (var p in b) {if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];}};\n    return _extendStatics(d, b);\n  };\n  return function (d, b) {\n    if (typeof b !== \"function\" && b !== null)\n    throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\n    _extendStatics(d, b);\n    function __() {this.constructor = d;}\n    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n  };\n}();\nexports.__esModule = true;\nexports.QNRemoteTrack = void 0;\nvar RTCTrack_1 = __webpack_require__(/*! ./RTCTrack */ 95);\nvar QNRtcTrack = __webpack_provided_uni_dot_requireNativePlugin('QNRTC-UniPlugin-QNRtcTrack');\nvar QNRemoteTrack = function (_super) {\n  __extends(QNRemoteTrack, _super);\n  function QNRemoteTrack() {\n    return _super !== null && _super.apply(this, arguments) || this;\n  }\n  QNRemoteTrack.prototype.isSubscribed = function () {\n    return QNRtcTrack.isSubscribed(this.identifyID);\n  };\n  return QNRemoteTrack;\n}(RTCTrack_1.QNTrack);\nexports.QNRemoteTrack = QNRemoteTrack;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/uni-app-plus-nvue/dist/require-native-plugin.js */ 66)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vanNfc2RrL1FOUlRDLVVuaVBsdWdpbi1KUy9RTlJUQy1VbmlQbHVnaW4tSlMvY2xhc3MvUlRDUmVtb3RlVHJhY2suanMiXSwibmFtZXMiOlsiX19leHRlbmRzIiwiZXh0ZW5kU3RhdGljcyIsImQiLCJiIiwiT2JqZWN0Iiwic2V0UHJvdG90eXBlT2YiLCJfX3Byb3RvX18iLCJBcnJheSIsInAiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJUeXBlRXJyb3IiLCJTdHJpbmciLCJfXyIsImNvbnN0cnVjdG9yIiwiY3JlYXRlIiwiZXhwb3J0cyIsIl9fZXNNb2R1bGUiLCJRTlJlbW90ZVRyYWNrIiwiUlRDVHJhY2tfMSIsInJlcXVpcmUiLCJRTlJ0Y1RyYWNrIiwidW5pIiwiX3N1cGVyIiwiYXBwbHkiLCJhcmd1bWVudHMiLCJpc1N1YnNjcmliZWQiLCJpZGVudGlmeUlEIiwiUU5UcmFjayJdLCJtYXBwaW5ncyI6IkFBQUEsc0ZBQWE7QUFDYixJQUFJQSxTQUFTLEdBQUksUUFBUSxLQUFLQSxTQUFkLElBQTZCLFlBQVk7QUFDckQsTUFBSUMsY0FBYSxHQUFHLHVCQUFVQyxDQUFWLEVBQWFDLENBQWIsRUFBZ0I7QUFDaENGLGtCQUFhLEdBQUdHLE1BQU0sQ0FBQ0MsY0FBUDtBQUNYLE1BQUVDLFNBQVMsRUFBRSxFQUFiLGNBQTZCQyxLQUE3QixJQUFzQyxVQUFVTCxDQUFWLEVBQWFDLENBQWIsRUFBZ0IsQ0FBRUQsQ0FBQyxDQUFDSSxTQUFGLEdBQWNILENBQWQsQ0FBa0IsQ0FEL0Q7QUFFWixjQUFVRCxDQUFWLEVBQWFDLENBQWIsRUFBZ0IsQ0FBRSxLQUFLLElBQUlLLENBQVQsSUFBY0wsQ0FBZCxHQUFpQixJQUFJQyxNQUFNLENBQUNLLFNBQVAsQ0FBaUJDLGNBQWpCLENBQWdDQyxJQUFoQyxDQUFxQ1IsQ0FBckMsRUFBd0NLLENBQXhDLENBQUosRUFBZ0ROLENBQUMsQ0FBQ00sQ0FBRCxDQUFELEdBQU9MLENBQUMsQ0FBQ0ssQ0FBRCxDQUFSLENBQWpFLENBQStFLENBRnJHO0FBR0EsV0FBT1AsY0FBYSxDQUFDQyxDQUFELEVBQUlDLENBQUosQ0FBcEI7QUFDSCxHQUxEO0FBTUEsU0FBTyxVQUFVRCxDQUFWLEVBQWFDLENBQWIsRUFBZ0I7QUFDbkIsUUFBSSxPQUFPQSxDQUFQLEtBQWEsVUFBYixJQUEyQkEsQ0FBQyxLQUFLLElBQXJDO0FBQ0ksVUFBTSxJQUFJUyxTQUFKLENBQWMseUJBQXlCQyxNQUFNLENBQUNWLENBQUQsQ0FBL0IsR0FBcUMsK0JBQW5ELENBQU47QUFDSkYsa0JBQWEsQ0FBQ0MsQ0FBRCxFQUFJQyxDQUFKLENBQWI7QUFDQSxhQUFTVyxFQUFULEdBQWMsQ0FBRSxLQUFLQyxXQUFMLEdBQW1CYixDQUFuQixDQUF1QjtBQUN2Q0EsS0FBQyxDQUFDTyxTQUFGLEdBQWNOLENBQUMsS0FBSyxJQUFOLEdBQWFDLE1BQU0sQ0FBQ1ksTUFBUCxDQUFjYixDQUFkLENBQWIsSUFBaUNXLEVBQUUsQ0FBQ0wsU0FBSCxHQUFlTixDQUFDLENBQUNNLFNBQWpCLEVBQTRCLElBQUlLLEVBQUosRUFBN0QsQ0FBZDtBQUNILEdBTkQ7QUFPSCxDQWQyQyxFQUE1QztBQWVBRyxPQUFPLENBQUNDLFVBQVIsR0FBcUIsSUFBckI7QUFDQUQsT0FBTyxDQUFDRSxhQUFSLEdBQXdCLEtBQUssQ0FBN0I7QUFDQSxJQUFJQyxVQUFVLEdBQUdDLG1CQUFPLENBQUMsb0JBQUQsQ0FBeEI7QUFDQSxJQUFJQyxVQUFVLEdBQUdDLDhDQUFBLENBQXdCLDRCQUF4QixDQUFqQjtBQUNBLElBQUlKLGFBQWEsR0FBSSxVQUFVSyxNQUFWLEVBQWtCO0FBQ25DeEIsV0FBUyxDQUFDbUIsYUFBRCxFQUFnQkssTUFBaEIsQ0FBVDtBQUNBLFdBQVNMLGFBQVQsR0FBeUI7QUFDckIsV0FBT0ssTUFBTSxLQUFLLElBQVgsSUFBbUJBLE1BQU0sQ0FBQ0MsS0FBUCxDQUFhLElBQWIsRUFBbUJDLFNBQW5CLENBQW5CLElBQW9ELElBQTNEO0FBQ0g7QUFDRFAsZUFBYSxDQUFDVixTQUFkLENBQXdCa0IsWUFBeEIsR0FBdUMsWUFBWTtBQUMvQyxXQUFPTCxVQUFVLENBQUNLLFlBQVgsQ0FBd0IsS0FBS0MsVUFBN0IsQ0FBUDtBQUNILEdBRkQ7QUFHQSxTQUFPVCxhQUFQO0FBQ0gsQ0FUb0IsQ0FTbkJDLFVBQVUsQ0FBQ1MsT0FUUSxDQUFyQjtBQVVBWixPQUFPLENBQUNFLGFBQVIsR0FBd0JBLGFBQXhCLEMiLCJmaWxlIjoiOTQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChiLCBwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgIH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgYiAhPT0gXCJmdW5jdGlvblwiICYmIGIgIT09IG51bGwpXG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2xhc3MgZXh0ZW5kcyB2YWx1ZSBcIiArIFN0cmluZyhiKSArIFwiIGlzIG5vdCBhIGNvbnN0cnVjdG9yIG9yIG51bGxcIik7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5RTlJlbW90ZVRyYWNrID0gdm9pZCAwO1xudmFyIFJUQ1RyYWNrXzEgPSByZXF1aXJlKFwiLi9SVENUcmFja1wiKTtcbnZhciBRTlJ0Y1RyYWNrID0gdW5pLnJlcXVpcmVOYXRpdmVQbHVnaW4oJ1FOUlRDLVVuaVBsdWdpbi1RTlJ0Y1RyYWNrJyk7XG52YXIgUU5SZW1vdGVUcmFjayA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKFFOUmVtb3RlVHJhY2ssIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gUU5SZW1vdGVUcmFjaygpIHtcbiAgICAgICAgcmV0dXJuIF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICAgIH1cbiAgICBRTlJlbW90ZVRyYWNrLnByb3RvdHlwZS5pc1N1YnNjcmliZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBRTlJ0Y1RyYWNrLmlzU3Vic2NyaWJlZCh0aGlzLmlkZW50aWZ5SUQpO1xuICAgIH07XG4gICAgcmV0dXJuIFFOUmVtb3RlVHJhY2s7XG59KFJUQ1RyYWNrXzEuUU5UcmFjaykpO1xuZXhwb3J0cy5RTlJlbW90ZVRyYWNrID0gUU5SZW1vdGVUcmFjaztcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///94\n");

/***/ }),

/***/ 95:
/*!***************************************************************************************************************!*\
  !*** /Users/tongjie/Desktop/QNRTC-Uniapp/demo/js_sdk/QNRTC-UniPlugin-JS/QNRTC-UniPlugin-JS/class/RTCTrack.js ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__webpack_provided_uni_dot_requireNativePlugin) {\nvar __rest = this && this.__rest || function (s, e) {\n  var t = {};\n  for (var p in s) {if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)\n    t[p] = s[p];}\n  if (s != null && typeof Object.getOwnPropertySymbols === \"function\")\n  for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {\n    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))\n    t[p[i]] = s[p[i]];\n  }\n  return t;\n};\nexports.__esModule = true;\nexports.QNTrack = void 0;\nvar QNRtcTrack = __webpack_provided_uni_dot_requireNativePlugin('QNRTC-UniPlugin-QNRtcTrack');\nvar QNEvent = __webpack_provided_uni_dot_requireNativePlugin('globalEvent');\nvar QNTrack = function () {\n  function QNTrack(_a) {\n    var identifyID = _a.identifyID,kind = _a.kind,tag = _a.tag,trackID = _a.trackID,raw = _a.raw,userID = _a.userID;\n    this.identifyID = identifyID;\n    this.kind = kind;\n    this.tag = tag;\n    this.trackID = trackID;\n    this.raw = raw;\n    this.userID = userID;\n  }\n  QNTrack.prototype.on = function (name, listener) {\n    var _this = this;\n    var _listener = function _listener(params) {\n      var trackID = params.trackID,arguv = __rest(params, [\"trackID\"]);\n      if (trackID && trackID === _this.trackID) {\n        listener(arguv);\n      }\n    };\n    QNEvent.addEventListener(name, _listener);\n  };\n  QNTrack.prototype.off = function (name, listener) {\n    QNEvent.removeEventListener(name, listener);\n  };\n  QNTrack.prototype.getMuted = function () {\n    return QNRtcTrack.getMuted(this.identifyID);\n  };\n  return QNTrack;\n}();\nexports.QNTrack = QNTrack;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/uni-app-plus-nvue/dist/require-native-plugin.js */ 66)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vanNfc2RrL1FOUlRDLVVuaVBsdWdpbi1KUy9RTlJUQy1VbmlQbHVnaW4tSlMvY2xhc3MvUlRDVHJhY2suanMiXSwibmFtZXMiOlsiX19yZXN0IiwicyIsImUiLCJ0IiwicCIsIk9iamVjdCIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsImluZGV4T2YiLCJnZXRPd25Qcm9wZXJ0eVN5bWJvbHMiLCJpIiwibGVuZ3RoIiwicHJvcGVydHlJc0VudW1lcmFibGUiLCJleHBvcnRzIiwiX19lc01vZHVsZSIsIlFOVHJhY2siLCJRTlJ0Y1RyYWNrIiwidW5pIiwiUU5FdmVudCIsIl9hIiwiaWRlbnRpZnlJRCIsImtpbmQiLCJ0YWciLCJ0cmFja0lEIiwicmF3IiwidXNlcklEIiwib24iLCJuYW1lIiwibGlzdGVuZXIiLCJfdGhpcyIsIl9saXN0ZW5lciIsInBhcmFtcyIsImFyZ3V2IiwiYWRkRXZlbnRMaXN0ZW5lciIsIm9mZiIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJnZXRNdXRlZCJdLCJtYXBwaW5ncyI6IkFBQUEsc0ZBQWE7QUFDYixJQUFJQSxNQUFNLEdBQUksUUFBUSxLQUFLQSxNQUFkLElBQXlCLFVBQVVDLENBQVYsRUFBYUMsQ0FBYixFQUFnQjtBQUNsRCxNQUFJQyxDQUFDLEdBQUcsRUFBUjtBQUNBLE9BQUssSUFBSUMsQ0FBVCxJQUFjSCxDQUFkLEdBQWlCLElBQUlJLE1BQU0sQ0FBQ0MsU0FBUCxDQUFpQkMsY0FBakIsQ0FBZ0NDLElBQWhDLENBQXFDUCxDQUFyQyxFQUF3Q0csQ0FBeEMsS0FBOENGLENBQUMsQ0FBQ08sT0FBRixDQUFVTCxDQUFWLElBQWUsQ0FBakU7QUFDYkQsS0FBQyxDQUFDQyxDQUFELENBQUQsR0FBT0gsQ0FBQyxDQUFDRyxDQUFELENBQVIsQ0FESjtBQUVBLE1BQUlILENBQUMsSUFBSSxJQUFMLElBQWEsT0FBT0ksTUFBTSxDQUFDSyxxQkFBZCxLQUF3QyxVQUF6RDtBQUNJLE9BQUss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bnZhciBfX3Jlc3QgPSAodGhpcyAmJiB0aGlzLl9fcmVzdCkgfHwgZnVuY3Rpb24gKHMsIGUpIHtcbiAgICB2YXIgdCA9IHt9O1xuICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKVxuICAgICAgICB0W3BdID0gc1twXTtcbiAgICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChlLmluZGV4T2YocFtpXSkgPCAwICYmIE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzLCBwW2ldKSlcbiAgICAgICAgICAgICAgICB0W3BbaV1dID0gc1twW2ldXTtcbiAgICAgICAgfVxuICAgIHJldHVybiB0O1xufTtcbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLlFOVHJhY2sgPSB2b2lkIDA7XG52YXIgUU5SdGNUcmFjayA9IHVuaS5yZXF1aXJlTmF0aXZlUGx1Z2luKCdRTlJUQy1VbmlQbHVnaW4tUU5SdGNUcmFjaycpO1xudmFyIFFORXZlbnQgPSB1bmkucmVxdWlyZU5hdGl2ZVBsdWdpbignZ2xvYmFsRXZlbnQnKTtcbnZhciBRTlRyYWNrID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBRTlRyYWNrKF9hKSB7XG4gICAgICAgIHZhciBpZGVudGlmeUlEID0gX2EuaWRlbnRpZnlJRCwga2luZCA9IF9hLmtpbmQsIHRhZyA9IF9hLnRhZywgdHJhY2tJRCA9IF9hLnRyYWNrSUQsIHJhdyA9IF9hLnJhdywgdXNlcklEID0gX2EudXNlcklEO1xuICAgICAgICB0aGlzLmlkZW50aWZ5SUQgPSBpZGVudGlmeUlEO1xuICAgICAgICB0aGlzLmtpbmQgPSBraW5kO1xuICAgICAgICB0aGlzLnRhZyA9IHRhZztcbiAgICAgICAgdGhpcy50cmFja0lEID0gdHJhY2tJRDtcbiAgICAgICAgdGhpcy5yYXcgPSByYXc7XG4gICAgICAgIHRoaXMudXNlcklEID0gdXNlcklEO1xuICAgIH1cbiAgICBRTlRyYWNrLnByb3RvdHlwZS5vbiA9IGZ1bmN0aW9uIChuYW1lLCBsaXN0ZW5lcikge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB2YXIgX2xpc3RlbmVyID0gZnVuY3Rpb24gKHBhcmFtcykge1xuICAgICAgICAgICAgdmFyIHRyYWNrSUQgPSBwYXJhbXMudHJhY2tJRCwgYXJndXYgPSBfX3Jlc3QocGFyYW1zLCBbXCJ0cmFja0lEXCJdKTtcbiAgICAgICAgICAgIGlmICh0cmFja0lEICYmIHRyYWNrSUQgPT09IF90aGlzLnRyYWNrSUQpIHtcbiAgICAgICAgICAgICAgICBsaXN0ZW5lcihhcmd1dik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIFFORXZlbnQuYWRkRXZlbnRMaXN0ZW5lcihuYW1lLCBfbGlzdGVuZXIpO1xuICAgIH07XG4gICAgUU5UcmFjay5wcm90b3R5cGUub2ZmID0gZnVuY3Rpb24gKG5hbWUsIGxpc3RlbmVyKSB7XG4gICAgICAgIFFORXZlbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihuYW1lLCBsaXN0ZW5lcik7XG4gICAgfTtcbiAgICBRTlRyYWNrLnByb3RvdHlwZS5nZXRNdXRlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIFFOUnRjVHJhY2suZ2V0TXV0ZWQodGhpcy5pZGVudGlmeUlEKTtcbiAgICB9O1xuICAgIHJldHVybiBRTlRyYWNrO1xufSgpKTtcbmV4cG9ydHMuUU5UcmFjayA9IFFOVHJhY2s7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///95\n");

/***/ }),

/***/ 96:
/*!**************************************************************************************************************************!*\
  !*** /Users/tongjie/Desktop/QNRTC-Uniapp/demo/js_sdk/QNRTC-UniPlugin-JS/QNRTC-UniPlugin-JS/class/RTCRemoteAudioTrack.js ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__webpack_provided_uni_dot_requireNativePlugin) {\nvar __extends = this && this.__extends || function () {\n  var _extendStatics = function extendStatics(d, b) {\n    _extendStatics = Object.setPrototypeOf ||\n    { __proto__: [] } instanceof Array && function (d, b) {d.__proto__ = b;} ||\n    function (d, b) {for (var p in b) {if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];}};\n    return _extendStatics(d, b);\n  };\n  return function (d, b) {\n    if (typeof b !== \"function\" && b !== null)\n    throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\n    _extendStatics(d, b);\n    function __() {this.constructor = d;}\n    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n  };\n}();\nexports.__esModule = true;\nexports.QNRemoteAudioTrack = void 0;\nvar RTCRemoteTrack_1 = __webpack_require__(/*! ./RTCRemoteTrack */ 94);\nvar QNRtcTrack = __webpack_provided_uni_dot_requireNativePlugin('QNRTC-UniPlugin-QNRtcTrack');\nvar QNRemoteAudioTrack = function (_super) {\n  __extends(QNRemoteAudioTrack, _super);\n  function QNRemoteAudioTrack() {\n    return _super !== null && _super.apply(this, arguments) || this;\n  }\n  QNRemoteAudioTrack.prototype.setRemoteVolume = function (volume) {\n    return QNRtcTrack.setRemoteVolume(this.identifyID, volume);\n  };\n  QNRemoteAudioTrack.prototype.getRemoteVolume = function () {\n    return QNRtcTrack.getRemoteVolume(this.identifyID);\n  };\n  return QNRemoteAudioTrack;\n}(RTCRemoteTrack_1.QNRemoteTrack);\nexports.QNRemoteAudioTrack = QNRemoteAudioTrack;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/uni-app-plus-nvue/dist/require-native-plugin.js */ 66)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vanNfc2RrL1FOUlRDLVVuaVBsdWdpbi1KUy9RTlJUQy1VbmlQbHVnaW4tSlMvY2xhc3MvUlRDUmVtb3RlQXVkaW9UcmFjay5qcyJdLCJuYW1lcyI6WyJfX2V4dGVuZHMiLCJleHRlbmRTdGF0aWNzIiwiZCIsImIiLCJPYmplY3QiLCJzZXRQcm90b3R5cGVPZiIsIl9fcHJvdG9fXyIsIkFycmF5IiwicCIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsIlR5cGVFcnJvciIsIlN0cmluZyIsIl9fIiwiY29uc3RydWN0b3IiLCJjcmVhdGUiLCJleHBvcnRzIiwiX19lc01vZHVsZSIsIlFOUmVtb3RlQXVkaW9UcmFjayIsIlJUQ1JlbW90ZVRyYWNrXzEiLCJyZXF1aXJlIiwiUU5SdGNUcmFjayIsInVuaSIsIl9zdXBlciIsImFwcGx5IiwiYXJndW1lbnRzIiwic2V0UmVtb3RlVm9sdW1lIiwidm9sdW1lIiwiaWRlbnRpZnlJRCIsImdldFJlbW90ZVZvbHVtZSIsIlFOUmVtb3RlVHJhY2siXSwibWFwcGluZ3MiOiJBQUFBLHNGQUFhO0FBQ2IsSUFBSUEsU0FBUyxHQUFJLFFBQVEsS0FBS0EsU0FBZCxJQUE2QixZQUFZO0FBQ3JELE1BQUlDLGNBQWEsR0FBRyx1QkFBVUMsQ0FBVixFQUFhQyxDQUFiLEVBQWdCO0FBQ2hDRixrQkFBYSxHQUFHRyxNQUFNLENBQUNDLGNBQVA7QUFDWCxNQUFFQyxTQUFTLEVBQUUsRUFBYixjQUE2QkMsS0FBN0IsSUFBc0MsVUFBVUwsQ0FBVixFQUFhQyxDQUFiLEVBQWdCLENBQUVELENBQUMsQ0FBQ0ksU0FBRixHQUFjSCxDQUFkLENBQWtCLENBRC9EO0FBRVosY0FBVUQsQ0FBVixFQUFhQyxDQUFiLEVBQWdCLENBQUUsS0FBSyxJQUFJSyxDQUFULElBQWNMLENBQWQsR0FBaUIsSUFBSUMsTUFBTSxDQUFDSyxTQUFQLENBQWlCQyxjQUFqQixDQUFnQ0MsSUFBaEMsQ0FBcUNSLENBQXJDLEVBQXdDSyxDQUF4QyxDQUFKLEVBQWdETixDQUFDLENBQUNNLENBQUQsQ0FBRCxHQUFPTCxDQUFDLENBQUNLLENBQUQsQ0FBUixDQUFqRSxDQUErRSxDQUZyRztBQUdBLFdBQU9QLGNBQWEsQ0FBQ0MsQ0FBRCxFQUFJQyxDQUFKLENBQXBCO0FBQ0gsR0FMRDtBQU1BLFNBQU8sVUFBVUQsQ0FBVixFQUFhQyxDQUFiLEVBQWdCO0FBQ25CLFFBQUksT0FBT0EsQ0FBUCxLQUFhLFVBQWIsSUFBMkJBLENBQUMsS0FBSyxJQUFyQztBQUNJLFVBQU0sSUFBSVMsU0FBSixDQUFjLHlCQUF5QkMsTUFBTSxDQUFDVixDQUFELENBQS9CLEdBQXFDLCtCQUFuRCxDQUFOO0FBQ0pGLGtCQUFhLENBQUNDLENBQUQsRUFBSUMsQ0FBSixDQUFiO0FBQ0EsYUFBU1csRUFBVCxHQUFjLENBQUUsS0FBS0MsV0FBTCxHQUFtQmIsQ0FBbkIsQ0FBdUI7QUFDdkNBLEtBQUMsQ0FBQ08sU0FBRixHQUFjTixDQUFDLEtBQUssSUFBTixHQUFhQyxNQUFNLENBQUNZLE1BQVAsQ0FBY2IsQ0FBZCxDQUFiLElBQWlDVyxFQUFFLENBQUNMLFNBQUgsR0FBZU4sQ0FBQyxDQUFDTSxTQUFqQixFQUE0QixJQUFJSyxFQUFKLEVBQTdELENBQWQ7QUFDSCxHQU5EO0FBT0gsQ0FkMkMsRUFBNUM7QUFlQUcsT0FBTyxDQUFDQyxVQUFSLEdBQXFCLElBQXJCO0FBQ0FELE9BQU8sQ0FBQ0Usa0JBQVIsR0FBNkIsS0FBSyxDQUFsQztBQUNBLElBQUlDLGdCQUFnQixHQUFHQyxtQkFBTyxDQUFDLDBCQUFELENBQTlCO0FBQ0EsSUFBSUMsVUFBVSxHQUFHQyw4Q0FBQSxDQUF3Qiw0QkFBeEIsQ0FBakI7QUFDQSxJQUFJSixrQkFBa0IsR0FBSSxVQUFVSyxNQUFWLEVBQWtCO0FBQ3hDeEIsV0FBUyxDQUFDbUIsa0JBQUQsRUFBcUJLLE1BQXJCLENBQVQ7QUFDQSxXQUFTTCxrQkFBVCxHQUE4QjtBQUMxQixXQUFPSyxNQUFNLEtBQUssSUFBWCxJQUFtQkEsTUFBTSxDQUFDQyxLQUFQLENBQWEsSUFBYixFQUFtQkMsU0FBbkIsQ0FBbkIsSUFBb0QsSUFBM0Q7QUFDSDtBQUNEUCxvQkFBa0IsQ0FBQ1YsU0FBbkIsQ0FBNkJrQixlQUE3QixHQUErQyxVQUFVQyxNQUFWLEVBQWtCO0FBQzdELFdBQU9OLFVBQVUsQ0FBQ0ssZUFBWCxDQUEyQixLQUFLRSxVQUFoQyxFQUE0Q0QsTUFBNUMsQ0FBUDtBQUNILEdBRkQ7QUFHQVQsb0JBQWtCLENBQUNWLFNBQW5CLENBQTZCcUIsZUFBN0IsR0FBK0MsWUFBWTtBQUN2RCxXQUFPUixVQUFVLENBQUNRLGVBQVgsQ0FBMkIsS0FBS0QsVUFBaEMsQ0FBUDtBQUNILEdBRkQ7QUFHQSxTQUFPVixrQkFBUDtBQUNILENBWnlCLENBWXhCQyxnQkFBZ0IsQ0FBQ1csYUFaTyxDQUExQjtBQWFBZCxPQUFPLENBQUNFLGtCQUFSLEdBQTZCQSxrQkFBN0IsQyIsImZpbGUiOiI5Ni5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBiICE9PSBcImZ1bmN0aW9uXCIgJiYgYiAhPT0gbnVsbClcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDbGFzcyBleHRlbmRzIHZhbHVlIFwiICsgU3RyaW5nKGIpICsgXCIgaXMgbm90IGEgY29uc3RydWN0b3Igb3IgbnVsbFwiKTtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLlFOUmVtb3RlQXVkaW9UcmFjayA9IHZvaWQgMDtcbnZhciBSVENSZW1vdGVUcmFja18xID0gcmVxdWlyZShcIi4vUlRDUmVtb3RlVHJhY2tcIik7XG52YXIgUU5SdGNUcmFjayA9IHVuaS5yZXF1aXJlTmF0aXZlUGx1Z2luKCdRTlJUQy1VbmlQbHVnaW4tUU5SdGNUcmFjaycpO1xudmFyIFFOUmVtb3RlQXVkaW9UcmFjayA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKFFOUmVtb3RlQXVkaW9UcmFjaywgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBRTlJlbW90ZUF1ZGlvVHJhY2soKSB7XG4gICAgICAgIHJldHVybiBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgICB9XG4gICAgUU5SZW1vdGVBdWRpb1RyYWNrLnByb3RvdHlwZS5zZXRSZW1vdGVWb2x1bWUgPSBmdW5jdGlvbiAodm9sdW1lKSB7XG4gICAgICAgIHJldHVybiBRTlJ0Y1RyYWNrLnNldFJlbW90ZVZvbHVtZSh0aGlzLmlkZW50aWZ5SUQsIHZvbHVtZSk7XG4gICAgfTtcbiAgICBRTlJlbW90ZUF1ZGlvVHJhY2sucHJvdG90eXBlLmdldFJlbW90ZVZvbHVtZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIFFOUnRjVHJhY2suZ2V0UmVtb3RlVm9sdW1lKHRoaXMuaWRlbnRpZnlJRCk7XG4gICAgfTtcbiAgICByZXR1cm4gUU5SZW1vdGVBdWRpb1RyYWNrO1xufShSVENSZW1vdGVUcmFja18xLlFOUmVtb3RlVHJhY2spKTtcbmV4cG9ydHMuUU5SZW1vdGVBdWRpb1RyYWNrID0gUU5SZW1vdGVBdWRpb1RyYWNrO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///96\n");

/***/ }),

/***/ 97:
/*!********************************************************************************************************************!*\
  !*** /Users/tongjie/Desktop/QNRTC-Uniapp/demo/js_sdk/QNRTC-UniPlugin-JS/QNRTC-UniPlugin-JS/class/RTCLocalTrack.js ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__webpack_provided_uni_dot_requireNativePlugin) {\nvar __extends = this && this.__extends || function () {\n  var _extendStatics = function extendStatics(d, b) {\n    _extendStatics = Object.setPrototypeOf ||\n    { __proto__: [] } instanceof Array && function (d, b) {d.__proto__ = b;} ||\n    function (d, b) {for (var p in b) {if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];}};\n    return _extendStatics(d, b);\n  };\n  return function (d, b) {\n    if (typeof b !== \"function\" && b !== null)\n    throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\n    _extendStatics(d, b);\n    function __() {this.constructor = d;}\n    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n  };\n}();\nexports.__esModule = true;\nexports.QNLocalTrack = void 0;\nvar RTCTrack_1 = __webpack_require__(/*! ./RTCTrack */ 95);\nvar QNRtcTrack = __webpack_provided_uni_dot_requireNativePlugin('QNRTC-UniPlugin-QNRtcTrack');\nvar QNLocalTrack = function (_super) {\n  __extends(QNLocalTrack, _super);\n  function QNLocalTrack() {\n    return _super !== null && _super.apply(this, arguments) || this;\n  }\n  QNLocalTrack.prototype.setMuted = function (muted) {\n    return QNRtcTrack.setMuted(this.identifyID, muted);\n  };\n  return QNLocalTrack;\n}(RTCTrack_1.QNTrack);\nexports.QNLocalTrack = QNLocalTrack;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/uni-app-plus-nvue/dist/require-native-plugin.js */ 66)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vanNfc2RrL1FOUlRDLVVuaVBsdWdpbi1KUy9RTlJUQy1VbmlQbHVnaW4tSlMvY2xhc3MvUlRDTG9jYWxUcmFjay5qcyJdLCJuYW1lcyI6WyJfX2V4dGVuZHMiLCJleHRlbmRTdGF0aWNzIiwiZCIsImIiLCJPYmplY3QiLCJzZXRQcm90b3R5cGVPZiIsIl9fcHJvdG9fXyIsIkFycmF5IiwicCIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsIlR5cGVFcnJvciIsIlN0cmluZyIsIl9fIiwiY29uc3RydWN0b3IiLCJjcmVhdGUiLCJleHBvcnRzIiwiX19lc01vZHVsZSIsIlFOTG9jYWxUcmFjayIsIlJUQ1RyYWNrXzEiLCJyZXF1aXJlIiwiUU5SdGNUcmFjayIsInVuaSIsIl9zdXBlciIsImFwcGx5IiwiYXJndW1lbnRzIiwic2V0TXV0ZWQiLCJtdXRlZCIsImlkZW50aWZ5SUQiLCJRTlRyYWNrIl0sIm1hcHBpbmdzIjoiQUFBQSxzRkFBYTtBQUNiLElBQUlBLFNBQVMsR0FBSSxRQUFRLEtBQUtBLFNBQWQsSUFBNkIsWUFBWTtBQUNyRCxNQUFJQyxjQUFhLEdBQUcsdUJBQVVDLENBQVYsRUFBYUMsQ0FBYixFQUFnQjtBQUNoQ0Ysa0JBQWEsR0FBR0csTUFBTSxDQUFDQyxjQUFQO0FBQ1gsTUFBRUMsU0FBUyxFQUFFLEVBQWIsY0FBNkJDLEtBQTdCLElBQXNDLFVBQVVMLENBQVYsRUFBYUMsQ0FBYixFQUFnQixDQUFFRCxDQUFDLENBQUNJLFNBQUYsR0FBY0gsQ0FBZCxDQUFrQixDQUQvRDtBQUVaLGNBQVVELENBQVYsRUFBYUMsQ0FBYixFQUFnQixDQUFFLEtBQUssSUFBSUssQ0FBVCxJQUFjTCxDQUFkLEdBQWlCLElBQUlDLE1BQU0sQ0FBQ0ssU0FBUCxDQUFpQkMsY0FBakIsQ0FBZ0NDLElBQWhDLENBQXFDUixDQUFyQyxFQUF3Q0ssQ0FBeEMsQ0FBSixFQUFnRE4sQ0FBQyxDQUFDTSxDQUFELENBQUQsR0FBT0wsQ0FBQyxDQUFDSyxDQUFELENBQVIsQ0FBakUsQ0FBK0UsQ0FGckc7QUFHQSxXQUFPUCxjQUFhLENBQUNDLENBQUQsRUFBSUMsQ0FBSixDQUFwQjtBQUNILEdBTEQ7QUFNQSxTQUFPLFVBQVVELENBQVYsRUFBYUMsQ0FBYixFQUFnQjtBQUNuQixRQUFJLE9BQU9BLENBQVAsS0FBYSxVQUFiLElBQTJCQSxDQUFDLEtBQUssSUFBckM7QUFDSSxVQUFNLElBQUlTLFNBQUosQ0FBYyx5QkFBeUJDLE1BQU0sQ0FBQ1YsQ0FBRCxDQUEvQixHQUFxQywrQkFBbkQsQ0FBTjtBQUNKRixrQkFBYSxDQUFDQyxDQUFELEVBQUlDLENBQUosQ0FBYjtBQUNBLGFBQVNXLEVBQVQsR0FBYyxDQUFFLEtBQUtDLFdBQUwsR0FBbUJiLENBQW5CLENBQXVCO0FBQ3ZDQSxLQUFDLENBQUNPLFNBQUYsR0FBY04sQ0FBQyxLQUFLLElBQU4sR0FBYUMsTUFBTSxDQUFDWSxNQUFQLENBQWNiLENBQWQsQ0FBYixJQUFpQ1csRUFBRSxDQUFDTCxTQUFILEdBQWVOLENBQUMsQ0FBQ00sU0FBakIsRUFBNEIsSUFBSUssRUFBSixFQUE3RCxDQUFkO0FBQ0gsR0FORDtBQU9ILENBZDJDLEVBQTVDO0FBZUFHLE9BQU8sQ0FBQ0MsVUFBUixHQUFxQixJQUFyQjtBQUNBRCxPQUFPLENBQUNFLFlBQVIsR0FBdUIsS0FBSyxDQUE1QjtBQUNBLElBQUlDLFVBQVUsR0FBR0MsbUJBQU8sQ0FBQyxvQkFBRCxDQUF4QjtBQUNBLElBQUlDLFVBQVUsR0FBR0MsOENBQUEsQ0FBd0IsNEJBQXhCLENBQWpCO0FBQ0EsSUFBSUosWUFBWSxHQUFJLFVBQVVLLE1BQVYsRUFBa0I7QUFDbEN4QixXQUFTLENBQUNtQixZQUFELEVBQWVLLE1BQWYsQ0FBVDtBQUNBLFdBQVNMLFlBQVQsR0FBd0I7QUFDcEIsV0FBT0ssTUFBTSxLQUFLLElBQVgsSUFBbUJBLE1BQU0sQ0FBQ0MsS0FBUCxDQUFhLElBQWIsRUFBbUJDLFNBQW5CLENBQW5CLElBQW9ELElBQTNEO0FBQ0g7QUFDRFAsY0FBWSxDQUFDVixTQUFiLENBQXVCa0IsUUFBdkIsR0FBa0MsVUFBVUMsS0FBVixFQUFpQjtBQUMvQyxXQUFPTixVQUFVLENBQUNLLFFBQVgsQ0FBb0IsS0FBS0UsVUFBekIsRUFBcUNELEtBQXJDLENBQVA7QUFDSCxHQUZEO0FBR0EsU0FBT1QsWUFBUDtBQUNILENBVG1CLENBU2xCQyxVQUFVLENBQUNVLE9BVE8sQ0FBcEI7QUFVQWIsT0FBTyxDQUFDRSxZQUFSLEdBQXVCQSxZQUF2QixDIiwiZmlsZSI6Ijk3LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYiwgcCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICB9O1xuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBpZiAodHlwZW9mIGIgIT09IFwiZnVuY3Rpb25cIiAmJiBiICE9PSBudWxsKVxuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNsYXNzIGV4dGVuZHMgdmFsdWUgXCIgKyBTdHJpbmcoYikgKyBcIiBpcyBub3QgYSBjb25zdHJ1Y3RvciBvciBudWxsXCIpO1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuUU5Mb2NhbFRyYWNrID0gdm9pZCAwO1xudmFyIFJUQ1RyYWNrXzEgPSByZXF1aXJlKFwiLi9SVENUcmFja1wiKTtcbnZhciBRTlJ0Y1RyYWNrID0gdW5pLnJlcXVpcmVOYXRpdmVQbHVnaW4oJ1FOUlRDLVVuaVBsdWdpbi1RTlJ0Y1RyYWNrJyk7XG52YXIgUU5Mb2NhbFRyYWNrID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoUU5Mb2NhbFRyYWNrLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIFFOTG9jYWxUcmFjaygpIHtcbiAgICAgICAgcmV0dXJuIF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICAgIH1cbiAgICBRTkxvY2FsVHJhY2sucHJvdG90eXBlLnNldE11dGVkID0gZnVuY3Rpb24gKG11dGVkKSB7XG4gICAgICAgIHJldHVybiBRTlJ0Y1RyYWNrLnNldE11dGVkKHRoaXMuaWRlbnRpZnlJRCwgbXV0ZWQpO1xuICAgIH07XG4gICAgcmV0dXJuIFFOTG9jYWxUcmFjaztcbn0oUlRDVHJhY2tfMS5RTlRyYWNrKSk7XG5leHBvcnRzLlFOTG9jYWxUcmFjayA9IFFOTG9jYWxUcmFjaztcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///97\n");

/***/ }),

/***/ 98:
/*!**************************************************************************************************************************!*\
  !*** /Users/tongjie/Desktop/QNRTC-Uniapp/demo/js_sdk/QNRTC-UniPlugin-JS/QNRTC-UniPlugin-JS/class/RTCCameraVideoTrack.js ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__webpack_provided_uni_dot_requireNativePlugin) {\nvar __extends = this && this.__extends || function () {\n  var _extendStatics = function extendStatics(d, b) {\n    _extendStatics = Object.setPrototypeOf ||\n    { __proto__: [] } instanceof Array && function (d, b) {d.__proto__ = b;} ||\n    function (d, b) {for (var p in b) {if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];}};\n    return _extendStatics(d, b);\n  };\n  return function (d, b) {\n    if (typeof b !== \"function\" && b !== null)\n    throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\n    _extendStatics(d, b);\n    function __() {this.constructor = d;}\n    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n  };\n}();\nexports.__esModule = true;\nexports.QNCameraVideoTrack = void 0;\nvar RTCLocalVideoTrack_1 = __webpack_require__(/*! ./RTCLocalVideoTrack */ 99);\nvar QNRtcTrack = __webpack_provided_uni_dot_requireNativePlugin('QNRTC-UniPlugin-QNRtcTrack');\nvar QNCameraVideoTrack = function (_super) {\n  __extends(QNCameraVideoTrack, _super);\n  function QNCameraVideoTrack() {\n    return _super !== null && _super.apply(this, arguments) || this;\n  }\n  QNCameraVideoTrack.prototype.destroy = function () {\n    return QNRtcTrack.destroy(this.identifyID);\n  };\n  QNCameraVideoTrack.prototype.setSessionPreset = function (sessionPreset) {\n    return QNRtcTrack.setSessionPreset(this.identifyID, sessionPreset);\n  };\n  QNCameraVideoTrack.prototype.startCapture = function () {\n    return QNRtcTrack.startCapture(this.identifyID);\n  };\n  QNCameraVideoTrack.prototype.stopCapture = function () {\n    return QNRtcTrack.stopCapture(this.identifyID);\n  };\n  QNCameraVideoTrack.prototype.switchCamera = function () {\n    return QNRtcTrack.switchCamera(this.identifyID);\n  };\n  QNCameraVideoTrack.prototype.turnLightOn = function () {\n    return QNRtcTrack.turnLightOn(this.identifyID);\n  };\n  QNCameraVideoTrack.prototype.turnLightOff = function () {\n    return QNRtcTrack.turnLightOff(this.identifyID);\n  };\n  QNCameraVideoTrack.prototype.manualFocus = function (x, y) {\n    return QNRtcTrack.manualFocus(this.identifyID, x, y);\n  };\n  QNCameraVideoTrack.prototype.setExposureCompensation = function (value) {\n    return QNRtcTrack.setExposureCompensation(this.identifyID, value);\n  };\n  QNCameraVideoTrack.prototype.getMaxExposureCompensation = function () {\n    return QNRtcTrack.getMaxExposureCompensation(this.identifyID);\n  };\n  QNCameraVideoTrack.prototype.getMinExposureCompensation = function () {\n    return QNRtcTrack.getMinExposureCompensation(this.identifyID);\n  };\n  QNCameraVideoTrack.prototype.setVideoOrientation = function (videoOrientation) {\n    return QNRtcTrack.setVideoOrientation(this.identifyID, videoOrientation);\n  };\n  QNCameraVideoTrack.prototype.getVideoOrientation = function () {\n    return QNRtcTrack.getVideoOrientation(this.identifyID);\n  };\n  QNCameraVideoTrack.prototype.setZoom = function (zoom) {\n    return QNRtcTrack.setZoom(this.identifyID, zoom);\n  };\n  QNCameraVideoTrack.prototype.getZooms = function () {\n    return QNRtcTrack.getZooms(this.identifyID);\n  };\n  QNCameraVideoTrack.prototype.setPreviewEnabled = function (isEnabled) {\n    return QNRtcTrack.setPreviewEnabled(this.identifyID, isEnabled);\n  };\n  QNCameraVideoTrack.prototype.setBeauty = function (beautySetting) {\n    return QNRtcTrack.setBeauty(this.identifyID, beautySetting);\n  };\n  QNCameraVideoTrack.prototype.previewMirrorFrontFacing = function (previewMirrorFrontFacing) {\n    return QNRtcTrack.previewMirrorFrontFacing(this.identifyID, previewMirrorFrontFacing);\n  };\n  QNCameraVideoTrack.prototype.previewMirrorRearFacing = function (previewMirrorRearFacing) {\n    return QNRtcTrack.previewMirrorRearFacing(this.identifyID, previewMirrorRearFacing);\n  };\n  QNCameraVideoTrack.prototype.encodeMirrorFrontFacing = function (encodeMirrorFrontFacing) {\n    return QNRtcTrack.encodeMirrorFrontFacing(this.identifyID, encodeMirrorFrontFacing);\n  };\n  QNCameraVideoTrack.prototype.encodeMirrorRearFacing = function (encodeMirrorRearFacing) {\n    return QNRtcTrack.encodeMirrorRearFacing(this.identifyID, encodeMirrorRearFacing);\n  };\n  QNCameraVideoTrack.prototype.pushImage = function (image) {\n    return QNRtcTrack.pushImage(this.identifyID, image);\n  };\n  QNCameraVideoTrack.prototype.setWaterMark = function (waterMark) {\n    return QNRtcTrack.setWaterMark(this.identifyID, waterMark);\n  };\n  QNCameraVideoTrack.prototype.clearWaterMark = function () {\n    return QNRtcTrack.clearWaterMark(this.identifyID);\n  };\n  return QNCameraVideoTrack;\n}(RTCLocalVideoTrack_1.QNLocalVideoTrack);\nexports.QNCameraVideoTrack = QNCameraVideoTrack;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/uni-app-plus-nvue/dist/require-native-plugin.js */ 66)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vanNfc2RrL1FOUlRDLVVuaVBsdWdpbi1KUy9RTlJUQy1VbmlQbHVnaW4tSlMvY2xhc3MvUlRDQ2FtZXJhVmlkZW9UcmFjay5qcyJdLCJuYW1lcyI6WyJfX2V4dGVuZHMiLCJleHRlbmRTdGF0aWNzIiwiZCIsImIiLCJPYmplY3QiLCJzZXRQcm90b3R5cGVPZiIsIl9fcHJvdG9fXyIsIkFycmF5IiwicCIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsIlR5cGVFcnJvciIsIlN0cmluZyIsIl9fIiwiY29uc3RydWN0b3IiLCJjcmVhdGUiLCJleHBvcnRzIiwiX19lc01vZHVsZSIsIlFOQ2FtZXJhVmlkZW9UcmFjayIsIlJUQ0xvY2FsVmlkZW9UcmFja18xIiwicmVxdWlyZSIsIlFOUnRjVHJhY2siLCJ1bmkiLCJfc3VwZXIiLCJhcHBseSIsImFyZ3VtZW50cyIsImRlc3Ryb3kiLCJpZGVudGlmeUlEIiwic2V0U2Vzc2lvblByZXNldCIsInNlc3Npb25QcmVzZXQiLCJzdGFydENhcHR1cmUiLCJzdG9wQ2FwdHVyZSIsInN3aXRjaENhbWVyYSIsInR1cm5MaWdodE9uIiwidHVybkxpZ2h0T2ZmIiwibWFudWFsRm9jdXMiLCJ4IiwieSIsInNldEV4cG9zdXJlQ29tcGVuc2F0aW9uIiwidmFsdWUiLCJnZXRNYXhFeHBvc3VyZUNvbXBlbnNhdGlvbiIsImdldE1pbkV4cG9zdXJlQ29tcGVuc2F0aW9uIiwic2V0VmlkZW9PcmllbnRhdGlvbiIsInZpZGVvT3JpZW50YXRpb24iLCJnZXRWaWRlb09yaWVudGF0aW9uIiwic2V0Wm9vbSIsInpvb20iLCJnZXRab29tcyIsInNldFByZXZpZXdFbmFibGVkIiwiaXNFbmFibGVkIiwic2V0QmVhdXR5IiwiYmVhdXR5U2V0dGluZyIsInByZXZpZXdNaXJyb3JGcm9udEZhY2luZyIsInByZXZpZXdNaXJyb3JSZWFyRmFjaW5nIiwiZW5jb2RlTWlycm9yRnJvbnRGYWNpbmciLCJlbmNvZGVNaXJyb3JSZWFyRmFjaW5nIiwicHVzaEltYWdlIiwiaW1hZ2UiLCJzZXRXYXRlck1hcmsiLCJ3YXRlck1hcmsiLCJjbGVhcldhdGVyTWFyayIsIlFOTG9jYWxWaWRlb1RyYWNrIl0sIm1hcHBpbmdzIjoiQUFBQSxzRkFBYTtBQUNiLElBQUlBLFNBQVMsR0FBSSxRQUFRLEtBQUtBLFNBQWQsSUFBNkIsWUFBWTtBQUNyRCxNQUFJQyxjQUFhLEdBQUcsdUJBQVVDLENBQVYsRUFBYUMsQ0FBYixFQUFnQjtBQUNoQ0Ysa0JBQWEsR0FBR0csTUFBTSxDQUFDQyxjQUFQO0FBQ1gsTUFBRUMsU0FBUyxFQUFFLEVBQWIsY0FBNkJDLEtBQTdCLElBQXNDLFVBQVVMLENBQVYsRUFBYUMsQ0FBYixFQUFnQixDQUFFRCxDQUFDLENBQUNJLFNBQUYsR0FBY0gsQ0FBZCxDQUFrQixDQUQvRDtBQUVaLGNBQVVELENBQVYsRUFBYUMsQ0FBYixFQUFnQixDQUFFLEtBQUssSUFBSUssQ0FBVCxJQUFjTCxDQUFkLEdBQWlCLElBQUlDLE1BQU0sQ0FBQ0ssU0FBUCxDQUFpQkMsY0FBakIsQ0FBZ0NDLElBQWhDLENBQXFDUixDQUFyQyxFQUF3Q0ssQ0FBeEMsQ0FBSixFQUFnRE4sQ0FBQyxDQUFDTSxDQUFELENBQUQsR0FBT0wsQ0FBQyxDQUFDSyxDQUFELENBQVIsQ0FBakUsQ0FBK0UsQ0FGckc7QUFHQSxXQUFPUCxjQUFhLENBQUNDLENBQUQsRUFBSUMsQ0FBSixDQUFwQjtBQUNILEdBTEQ7QUFNQSxTQUFPLFVBQVVELENBQVYsRUFBYUMsQ0FBYixFQUFnQjtBQUNuQixRQUFJLE9BQU9BLENBQVAsS0FBYSxVQUFiLElBQTJCQSxDQUFDLEtBQUssSUFBckM7QUFDSSxVQUFNLElBQUlTLFNBQUosQ0FBYyx5QkFBeUJDLE1BQU0sQ0FBQ1YsQ0FBRCxDQUEvQixHQUFxQywrQkFBbkQsQ0FBTjtBQUNKRixrQkFBYSxDQUFDQyxDQUFELEVBQUlDLENBQUosQ0FBYjtBQUNBLGFBQVNXLEVBQVQsR0FBYyxDQUFFLEtBQUtDLFdBQUwsR0FB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LGNBQTdCLEdBQThDLFlBQVk7QUFDdEQsV0FBT3ZDLFVBQVUsQ0FBQ3VDLGNBQVgsQ0FBMEIsS0FBS2pDLFVBQS9CLENBQVA7QUFDSCxHQUZEO0FBR0EsU0FBT1Qsa0JBQVA7QUFDSCxDQTlFeUIsQ0E4RXhCQyxvQkFBb0IsQ0FBQzBDLGlCQTlFRyxDQUExQjtBQStFQTdDLE9BQU8sQ0FBQ0Usa0JBQVIsR0FBNkJBLGtCQUE3QixDIiwiZmlsZSI6Ijk4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYiwgcCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICB9O1xuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBpZiAodHlwZW9mIGIgIT09IFwiZnVuY3Rpb25cIiAmJiBiICE9PSBudWxsKVxuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNsYXNzIGV4dGVuZHMgdmFsdWUgXCIgKyBTdHJpbmcoYikgKyBcIiBpcyBub3QgYSBjb25zdHJ1Y3RvciBvciBudWxsXCIpO1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuUU5DYW1lcmFWaWRlb1RyYWNrID0gdm9pZCAwO1xudmFyIFJUQ0xvY2FsVmlkZW9UcmFja18xID0gcmVxdWlyZShcIi4vUlRDTG9jYWxWaWRlb1RyYWNrXCIpO1xudmFyIFFOUnRjVHJhY2sgPSB1bmkucmVxdWlyZU5hdGl2ZVBsdWdpbignUU5SVEMtVW5pUGx1Z2luLVFOUnRjVHJhY2snKTtcbnZhciBRTkNhbWVyYVZpZGVvVHJhY2sgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhRTkNhbWVyYVZpZGVvVHJhY2ssIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gUU5DYW1lcmFWaWRlb1RyYWNrKCkge1xuICAgICAgICByZXR1cm4gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gICAgfVxuICAgIFFOQ2FtZXJhVmlkZW9UcmFjay5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIFFOUnRjVHJhY2suZGVzdHJveSh0aGlzLmlkZW50aWZ5SUQpO1xuICAgIH07XG4gICAgUU5DYW1lcmFWaWRlb1RyYWNrLnByb3RvdHlwZS5zZXRTZXNzaW9uUHJlc2V0ID0gZnVuY3Rpb24gKHNlc3Npb25QcmVzZXQpIHtcbiAgICAgICAgcmV0dXJuIFFOUnRjVHJhY2suc2V0U2Vzc2lvblByZXNldCh0aGlzLmlkZW50aWZ5SUQsIHNlc3Npb25QcmVzZXQpO1xuICAgIH07XG4gICAgUU5DYW1lcmFWaWRlb1RyYWNrLnByb3RvdHlwZS5zdGFydENhcHR1cmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBRTlJ0Y1RyYWNrLnN0YXJ0Q2FwdHVyZSh0aGlzLmlkZW50aWZ5SUQpO1xuICAgIH07XG4gICAgUU5DYW1lcmFWaWRlb1RyYWNrLnByb3RvdHlwZS5zdG9wQ2FwdHVyZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIFFOUnRjVHJhY2suc3RvcENhcHR1cmUodGhpcy5pZGVudGlmeUlEKTtcbiAgICB9O1xuICAgIFFOQ2FtZXJhVmlkZW9UcmFjay5wcm90b3R5cGUuc3dpdGNoQ2FtZXJhID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gUU5SdGNUcmFjay5zd2l0Y2hDYW1lcmEodGhpcy5pZGVudGlmeUlEKTtcbiAgICB9O1xuICAgIFFOQ2FtZXJhVmlkZW9UcmFjay5wcm90b3R5cGUudHVybkxpZ2h0T24gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBRTlJ0Y1RyYWNrLnR1cm5MaWdodE9uKHRoaXMuaWRlbnRpZnlJRCk7XG4gICAgfTtcbiAgICBRTkNhbWVyYVZpZGVvVHJhY2sucHJvdG90eXBlLnR1cm5MaWdodE9mZiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIFFOUnRjVHJhY2sudHVybkxpZ2h0T2ZmKHRoaXMuaWRlbnRpZnlJRCk7XG4gICAgfTtcbiAgICBRTkNhbWVyYVZpZGVvVHJhY2sucHJvdG90eXBlLm1hbnVhbEZvY3VzID0gZnVuY3Rpb24gKHgsIHkpIHtcbiAgICAgICAgcmV0dXJuIFFOUnRjVHJhY2subWFudWFsRm9jdXModGhpcy5pZGVudGlmeUlELCB4LCB5KTtcbiAgICB9O1xuICAgIFFOQ2FtZXJhVmlkZW9UcmFjay5wcm90b3R5cGUuc2V0RXhwb3N1cmVDb21wZW5zYXRpb24gPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIFFOUnRjVHJhY2suc2V0RXhwb3N1cmVDb21wZW5zYXRpb24odGhpcy5pZGVudGlmeUlELCB2YWx1ZSk7XG4gICAgfTtcbiAgICBRTkNhbWVyYVZpZGVvVHJhY2sucHJvdG90eXBlLmdldE1heEV4cG9zdXJlQ29tcGVuc2F0aW9uID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gUU5SdGNUcmFjay5nZXRNYXhFeHBvc3VyZUNvbXBlbnNhdGlvbih0aGlzLmlkZW50aWZ5SUQpO1xuICAgIH07XG4gICAgUU5DYW1lcmFWaWRlb1RyYWNrLnByb3RvdHlwZS5nZXRNaW5FeHBvc3VyZUNvbXBlbnNhdGlvbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIFFOUnRjVHJhY2suZ2V0TWluRXhwb3N1cmVDb21wZW5zYXRpb24odGhpcy5pZGVudGlmeUlEKTtcbiAgICB9O1xuICAgIFFOQ2FtZXJhVmlkZW9UcmFjay5wcm90b3R5cGUuc2V0VmlkZW9PcmllbnRhdGlvbiA9IGZ1bmN0aW9uICh2aWRlb09yaWVudGF0aW9uKSB7XG4gICAgICAgIHJldHVybiBRTlJ0Y1RyYWNrLnNldFZpZGVvT3JpZW50YXRpb24odGhpcy5pZGVudGlmeUlELCB2aWRlb09yaWVudGF0aW9uKTtcbiAgICB9O1xuICAgIFFOQ2FtZXJhVmlkZW9UcmFjay5wcm90b3R5cGUuZ2V0VmlkZW9PcmllbnRhdGlvbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIFFOUnRjVHJhY2suZ2V0VmlkZW9PcmllbnRhdGlvbih0aGlzLmlkZW50aWZ5SUQpO1xuICAgIH07XG4gICAgUU5DYW1lcmFWaWRlb1RyYWNrLnByb3RvdHlwZS5zZXRab29tID0gZnVuY3Rpb24gKHpvb20pIHtcbiAgICAgICAgcmV0dXJuIFFOUnRjVHJhY2suc2V0Wm9vbSh0aGlzLmlkZW50aWZ5SUQsIHpvb20pO1xuICAgIH07XG4gICAgUU5DYW1lcmFWaWRlb1RyYWNrLnByb3RvdHlwZS5nZXRab29tcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIFFOUnRjVHJhY2suZ2V0Wm9vbXModGhpcy5pZGVudGlmeUlEKTtcbiAgICB9O1xuICAgIFFOQ2FtZXJhVmlkZW9UcmFjay5wcm90b3R5cGUuc2V0UHJldmlld0VuYWJsZWQgPSBmdW5jdGlvbiAoaXNFbmFibGVkKSB7XG4gICAgICAgIHJldHVybiBRTlJ0Y1RyYWNrLnNldFByZXZpZXdFbmFibGVkKHRoaXMuaWRlbnRpZnlJRCwgaXNFbmFibGVkKTtcbiAgICB9O1xuICAgIFFOQ2FtZXJhVmlkZW9UcmFjay5wcm90b3R5cGUuc2V0QmVhdXR5ID0gZnVuY3Rpb24gKGJlYXV0eVNldHRpbmcpIHtcbiAgICAgICAgcmV0dXJuIFFOUnRjVHJhY2suc2V0QmVhdXR5KHRoaXMuaWRlbnRpZnlJRCwgYmVhdXR5U2V0dGluZyk7XG4gICAgfTtcbiAgICBRTkNhbWVyYVZpZGVvVHJhY2sucHJvdG90eXBlLnByZXZpZXdNaXJyb3JGcm9udEZhY2luZyA9IGZ1bmN0aW9uIChwcmV2aWV3TWlycm9yRnJvbnRGYWNpbmcpIHtcbiAgICAgICAgcmV0dXJuIFFOUnRjVHJhY2sucHJldmlld01pcnJvckZyb250RmFjaW5nKHRoaXMuaWRlbnRpZnlJRCwgcHJldmlld01pcnJvckZyb250RmFjaW5nKTtcbiAgICB9O1xuICAgIFFOQ2FtZXJhVmlkZW9UcmFjay5wcm90b3R5cGUucHJldmlld01pcnJvclJlYXJGYWNpbmcgPSBmdW5jdGlvbiAocHJldmlld01pcnJvclJlYXJGYWNpbmcpIHtcbiAgICAgICAgcmV0dXJuIFFOUnRjVHJhY2sucHJldmlld01pcnJvclJlYXJGYWNpbmcodGhpcy5pZGVudGlmeUlELCBwcmV2aWV3TWlycm9yUmVhckZhY2luZyk7XG4gICAgfTtcbiAgICBRTkNhbWVyYVZpZGVvVHJhY2sucHJvdG90eXBlLmVuY29kZU1pcnJvckZyb250RmFjaW5nID0gZnVuY3Rpb24gKGVuY29kZU1pcnJvckZyb250RmFjaW5nKSB7XG4gICAgICAgIHJldHVybiBRTlJ0Y1RyYWNrLmVuY29kZU1pcnJvckZyb250RmFjaW5nKHRoaXMuaWRlbnRpZnlJRCwgZW5jb2RlTWlycm9yRnJvbnRGYWNpbmcpO1xuICAgIH07XG4gICAgUU5DYW1lcmFWaWRlb1RyYWNrLnByb3RvdHlwZS5lbmNvZGVNaXJyb3JSZWFyRmFjaW5nID0gZnVuY3Rpb24gKGVuY29kZU1pcnJvclJlYXJGYWNpbmcpIHtcbiAgICAgICAgcmV0dXJuIFFOUnRjVHJhY2suZW5jb2RlTWlycm9yUmVhckZhY2luZyh0aGlzLmlkZW50aWZ5SUQsIGVuY29kZU1pcnJvclJlYXJGYWNpbmcpO1xuICAgIH07XG4gICAgUU5DYW1lcmFWaWRlb1RyYWNrLnByb3RvdHlwZS5wdXNoSW1hZ2UgPSBmdW5jdGlvbiAoaW1hZ2UpIHtcbiAgICAgICAgcmV0dXJuIFFOUnRjVHJhY2sucHVzaEltYWdlKHRoaXMuaWRlbnRpZnlJRCwgaW1hZ2UpO1xuICAgIH07XG4gICAgUU5DYW1lcmFWaWRlb1RyYWNrLnByb3RvdHlwZS5zZXRXYXRlck1hcmsgPSBmdW5jdGlvbiAod2F0ZXJNYXJrKSB7XG4gICAgICAgIHJldHVybiBRTlJ0Y1RyYWNrLnNldFdhdGVyTWFyayh0aGlzLmlkZW50aWZ5SUQsIHdhdGVyTWFyayk7XG4gICAgfTtcbiAgICBRTkNhbWVyYVZpZGVvVHJhY2sucHJvdG90eXBlLmNsZWFyV2F0ZXJNYXJrID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gUU5SdGNUcmFjay5jbGVhcldhdGVyTWFyayh0aGlzLmlkZW50aWZ5SUQpO1xuICAgIH07XG4gICAgcmV0dXJuIFFOQ2FtZXJhVmlkZW9UcmFjaztcbn0oUlRDTG9jYWxWaWRlb1RyYWNrXzEuUU5Mb2NhbFZpZGVvVHJhY2spKTtcbmV4cG9ydHMuUU5DYW1lcmFWaWRlb1RyYWNrID0gUU5DYW1lcmFWaWRlb1RyYWNrO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///98\n");

/***/ }),

/***/ 99:
/*!*************************************************************************************************************************!*\
  !*** /Users/tongjie/Desktop/QNRTC-Uniapp/demo/js_sdk/QNRTC-UniPlugin-JS/QNRTC-UniPlugin-JS/class/RTCLocalVideoTrack.js ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__webpack_provided_uni_dot_requireNativePlugin) {\nvar __extends = this && this.__extends || function () {\n  var _extendStatics = function extendStatics(d, b) {\n    _extendStatics = Object.setPrototypeOf ||\n    { __proto__: [] } instanceof Array && function (d, b) {d.__proto__ = b;} ||\n    function (d, b) {for (var p in b) {if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];}};\n    return _extendStatics(d, b);\n  };\n  return function (d, b) {\n    if (typeof b !== \"function\" && b !== null)\n    throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\n    _extendStatics(d, b);\n    function __() {this.constructor = d;}\n    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n  };\n}();\nexports.__esModule = true;\nexports.QNLocalVideoTrack = void 0;\nvar RTCLocalTrack_1 = __webpack_require__(/*! ./RTCLocalTrack */ 97);\nvar QNRtcTrack = __webpack_provided_uni_dot_requireNativePlugin('QNRTC-UniPlugin-QNRtcTrack');\nvar QNLocalVideoTrack = function (_super) {\n  __extends(QNLocalVideoTrack, _super);\n  function QNLocalVideoTrack() {\n    return _super !== null && _super.apply(this, arguments) || this;\n  }\n  QNLocalVideoTrack.prototype.sendSEI = function (message, repeatCount, uuid) {\n    return QNRtcTrack.sendSEI(this.identifyID, message, repeatCount, uuid);\n  };\n  return QNLocalVideoTrack;\n}(RTCLocalTrack_1.QNLocalTrack);\nexports.QNLocalVideoTrack = QNLocalVideoTrack;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/uni-app-plus-nvue/dist/require-native-plugin.js */ 66)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vanNfc2RrL1FOUlRDLVVuaVBsdWdpbi1KUy9RTlJUQy1VbmlQbHVnaW4tSlMvY2xhc3MvUlRDTG9jYWxWaWRlb1RyYWNrLmpzIl0sIm5hbWVzIjpbIl9fZXh0ZW5kcyIsImV4dGVuZFN0YXRpY3MiLCJkIiwiYiIsIk9iamVjdCIsInNldFByb3RvdHlwZU9mIiwiX19wcm90b19fIiwiQXJyYXkiLCJwIiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwiVHlwZUVycm9yIiwiU3RyaW5nIiwiX18iLCJjb25zdHJ1Y3RvciIsImNyZWF0ZSIsImV4cG9ydHMiLCJfX2VzTW9kdWxlIiwiUU5Mb2NhbFZpZGVvVHJhY2siLCJSVENMb2NhbFRyYWNrXzEiLCJyZXF1aXJlIiwiUU5SdGNUcmFjayIsInVuaSIsIl9zdXBlciIsImFwcGx5IiwiYXJndW1lbnRzIiwic2VuZFNFSSIsIm1lc3NhZ2UiLCJyZXBlYXRDb3VudCIsInV1aWQiLCJpZGVudGlmeUlEIiwiUU5Mb2NhbFRyYWNrIl0sIm1hcHBpbmdzIjoiQUFBQSxzRkFBYTtBQUNiLElBQUlBLFNBQVMsR0FBSSxRQUFRLEtBQUtBLFNBQWQsSUFBNkIsWUFBWTtBQUNyRCxNQUFJQyxjQUFhLEdBQUcsdUJBQVVDLENBQVYsRUFBYUMsQ0FBYixFQUFnQjtBQUNoQ0Ysa0JBQWEsR0FBR0csTUFBTSxDQUFDQyxjQUFQO0FBQ1gsTUFBRUMsU0FBUyxFQUFFLEVBQWIsY0FBNkJDLEtBQTdCLElBQXNDLFVBQVVMLENBQVYsRUFBYUMsQ0FBYixFQUFnQixDQUFFRCxDQUFDLENBQUNJLFNBQUYsR0FBY0gsQ0FBZCxDQUFrQixDQUQvRDtBQUVaLGNBQVVELENBQVYsRUFBYUMsQ0FBYixFQUFnQixDQUFFLEtBQUssSUFBSUssQ0FBVCxJQUFjTCxDQUFkLEdBQWlCLElBQUlDLE1BQU0sQ0FBQ0ssU0FBUCxDQUFpQkMsY0FBakIsQ0FBZ0NDLElBQWhDLENBQXFDUixDQUFyQyxFQUF3Q0ssQ0FBeEMsQ0FBSixFQUFnRE4sQ0FBQyxDQUFDTSxDQUFELENBQUQsR0FBT0wsQ0FBQyxDQUFDSyxDQUFELENBQVIsQ0FBakUsQ0FBK0UsQ0FGckc7QUFHQSxXQUFPUCxjQUFhLENBQUNDLENBQUQsRUFBSUMsQ0FBSixDQUFwQjtBQUNILEdBTEQ7QUFNQSxTQUFPLFVBQVVELENBQVYsRUFBYUMsQ0FBYixFQUFnQjtBQUNuQixRQUFJLE9BQU9BLENBQVAsS0FBYSxVQUFiLElBQTJCQSxDQUFDLEtBQUssSUFBckM7QUFDSSxVQUFNLElBQUlTLFNBQUosQ0FBYyx5QkFBeUJDLE1BQU0sQ0FBQ1YsQ0FBRCxDQUEvQixHQUFxQywrQkFBbkQsQ0FBTjtBQUNKRixrQkFBYSxDQUFDQyxDQUFELEVBQUlDLENBQUosQ0FBYjtBQUNBLGFBQVNXLEVBQVQsR0FBYyxDQUFFLEtBQUtDLFdBQUwsR0FBbUJiLENBQW5CLENBQXVCO0FBQ3ZDQSxLQUFDLENBQUNPLFNBQUYsR0FBY04sQ0FBQyxLQUFLLElBQU4sR0FBYUMsTUFBTSxDQUFDWSxNQUFQLENBQWNiLENBQWQsQ0FBYixJQUFpQ1csRUFBRSxDQUFDTCxTQUFILEdBQWVOLENBQUMsQ0FBQ00sU0FBakIsRUFBNEIsSUFBSUssRUFBSixFQUE3RCxDQUFkO0FBQ0gsR0FORDtBQU9ILENBZDJDLEVBQTVDO0FBZUFHLE9BQU8sQ0FBQ0MsVUFBUixHQUFxQixJQUFyQjtBQUNBRCxPQUFPLENBQUNFLGlCQUFSLEdBQTRCLEtBQUssQ0FBakM7QUFDQSxJQUFJQyxlQUFlLEdBQUdDLG1CQUFPLENBQUMseUJBQUQsQ0FBN0I7QUFDQSxJQUFJQyxVQUFVLEdBQUdDLDhDQUFBLENBQXdCLDRCQUF4QixDQUFqQjtBQUNBLElBQUlKLGlCQUFpQixHQUFJLFVBQVVLLE1BQVYsRUFBa0I7QUFDdkN4QixXQUFTLENBQUNtQixpQkFBRCxFQUFvQkssTUFBcEIsQ0FBVDtBQUNBLFdBQVNMLGlCQUFULEdBQTZCO0FBQ3pCLFdBQU9LLE1BQU0sS0FBSyxJQUFYLElBQW1CQSxNQUFNLENBQUNDLEtBQVAsQ0FBYSxJQUFiLEVBQW1CQyxTQUFuQixDQUFuQixJQUFvRCxJQUEzRDtBQUNIO0FBQ0RQLG1CQUFpQixDQUFDVixTQUFsQixDQUE0QmtCLE9BQTVCLEdBQXNDLFVBQVVDLE9BQVYsRUFBbUJDLFdBQW5CLEVBQWdDQyxJQUFoQyxFQUFzQztBQUN4RSxXQUFPUixVQUFVLENBQUNLLE9BQVgsQ0FBbUIsS0FBS0ksVUFBeEIsRUFBb0NILE9BQXBDLEVBQTZDQyxXQUE3QyxFQUEwREMsSUFBMUQsQ0FBUDtBQUNILEdBRkQ7QUFHQSxTQUFPWCxpQkFBUDtBQUNILENBVHdCLENBU3ZCQyxlQUFlLENBQUNZLFlBVE8sQ0FBekI7QUFVQWYsT0FBTyxDQUFDRSxpQkFBUixHQUE0QkEsaUJBQTVCLEMiLCJmaWxlIjoiOTkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChiLCBwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgIH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgYiAhPT0gXCJmdW5jdGlvblwiICYmIGIgIT09IG51bGwpXG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2xhc3MgZXh0ZW5kcyB2YWx1ZSBcIiArIFN0cmluZyhiKSArIFwiIGlzIG5vdCBhIGNvbnN0cnVjdG9yIG9yIG51bGxcIik7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5RTkxvY2FsVmlkZW9UcmFjayA9IHZvaWQgMDtcbnZhciBSVENMb2NhbFRyYWNrXzEgPSByZXF1aXJlKFwiLi9SVENMb2NhbFRyYWNrXCIpO1xudmFyIFFOUnRjVHJhY2sgPSB1bmkucmVxdWlyZU5hdGl2ZVBsdWdpbignUU5SVEMtVW5pUGx1Z2luLVFOUnRjVHJhY2snKTtcbnZhciBRTkxvY2FsVmlkZW9UcmFjayA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKFFOTG9jYWxWaWRlb1RyYWNrLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIFFOTG9jYWxWaWRlb1RyYWNrKCkge1xuICAgICAgICByZXR1cm4gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gICAgfVxuICAgIFFOTG9jYWxWaWRlb1RyYWNrLnByb3RvdHlwZS5zZW5kU0VJID0gZnVuY3Rpb24gKG1lc3NhZ2UsIHJlcGVhdENvdW50LCB1dWlkKSB7XG4gICAgICAgIHJldHVybiBRTlJ0Y1RyYWNrLnNlbmRTRUkodGhpcy5pZGVudGlmeUlELCBtZXNzYWdlLCByZXBlYXRDb3VudCwgdXVpZCk7XG4gICAgfTtcbiAgICByZXR1cm4gUU5Mb2NhbFZpZGVvVHJhY2s7XG59KFJUQ0xvY2FsVHJhY2tfMS5RTkxvY2FsVHJhY2spKTtcbmV4cG9ydHMuUU5Mb2NhbFZpZGVvVHJhY2sgPSBRTkxvY2FsVmlkZW9UcmFjaztcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///99\n");

/***/ })

/******/ });