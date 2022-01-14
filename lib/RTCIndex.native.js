"use strict";
/**
 * 七牛 UniApp 原生插件
 * @remarks
 * QNRTC-Uniapp 是基于 {@link https://uniapp.dcloud.io/ | UNIAPP}、 {@link https://developer.qiniu.com/rtc/8764/an-overview-of-the-android-sdk | QNRTC-Android} 以及 {@link https://developer.qiniu.com/rtc/8830/an-overview-of-the-ios-sdk | QNRTC-iOS} 三者所实现的。
 *
 * 前端可通过 QNRTC-Uniapp 所提供的 JS 插件调用原生 Android 以及 iOS 的 RTC 接口来实现实时音视频通话。
 *
 * @packageDocumentation
 */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
exports.__esModule = true;
exports.QNTrack = exports.QNScreenVideoTrack = exports.QNRemoteVideoTrack = exports.QNRemoteTrack = exports.QNRemoteAudioTrack = exports.QNMicrophoneAudioTrack = exports.QNLocalVideoTrack = exports.QNLocalTrack = exports.QNLocalAudioTrack = exports.QNCameraVideoTrack = exports.RTCClient = exports.RTCEngine = void 0;
__exportStar(require("./enum/RTCEnum"), exports);
__exportStar(require("./interface/RTCInterface"), exports);
__exportStar(require("./RTCEvent"), exports);
var RTCEngine_1 = require("./class/RTCEngine");
__createBinding(exports, RTCEngine_1, "RTCEngine");
var RTCClient_1 = require("./class/RTCClient");
__createBinding(exports, RTCClient_1, "RTCClient");
var RTCCameraVideoTrack_1 = require("./class/RTCCameraVideoTrack");
__createBinding(exports, RTCCameraVideoTrack_1, "QNCameraVideoTrack");
var RTCLocalAudioTrack_1 = require("./class/RTCLocalAudioTrack");
__createBinding(exports, RTCLocalAudioTrack_1, "QNLocalAudioTrack");
var RTCLocalTrack_1 = require("./class/RTCLocalTrack");
__createBinding(exports, RTCLocalTrack_1, "QNLocalTrack");
var RTCLocalVideoTrack_1 = require("./class/RTCLocalVideoTrack");
__createBinding(exports, RTCLocalVideoTrack_1, "QNLocalVideoTrack");
var RTCMicrophoneAudioTrack_1 = require("./class/RTCMicrophoneAudioTrack");
__createBinding(exports, RTCMicrophoneAudioTrack_1, "QNMicrophoneAudioTrack");
var RTCRemoteAudioTrack_1 = require("./class/RTCRemoteAudioTrack");
__createBinding(exports, RTCRemoteAudioTrack_1, "QNRemoteAudioTrack");
var RTCRemoteTrack_1 = require("./class/RTCRemoteTrack");
__createBinding(exports, RTCRemoteTrack_1, "QNRemoteTrack");
var RTCRemoteVideoTrack_1 = require("./class/RTCRemoteVideoTrack");
__createBinding(exports, RTCRemoteVideoTrack_1, "QNRemoteVideoTrack");
var RTCScreenVideoTrack_1 = require("./class/RTCScreenVideoTrack");
__createBinding(exports, RTCScreenVideoTrack_1, "QNScreenVideoTrack");
var RTCTrack_1 = require("./class/RTCTrack");
__createBinding(exports, RTCTrack_1, "QNTrack");
