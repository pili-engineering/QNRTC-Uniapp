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
var RTCEngine_1 = require("./class/RTCEngine");
exports["default"] = RTCEngine_1["default"];
__exportStar(require("./enum/RTCEnum"), exports);
__exportStar(require("./interface/RTCInterface"), exports);
__exportStar(require("./RTCEvent"), exports);
__exportStar(require("./class/RTCClient"), exports);
__exportStar(require("./class/RTCCameraVideoTrack"), exports);
__exportStar(require("./class/RTCLocalAudioTrack"), exports);
__exportStar(require("./class/RTCLocalTrack"), exports);
__exportStar(require("./class/RTCLocalVideoTrack"), exports);
__exportStar(require("./class/RTCMicrophoneAudioTrack"), exports);
__exportStar(require("./class/RTCRemoteAudioTrack"), exports);
__exportStar(require("./class/RTCRemoteTrack"), exports);
__exportStar(require("./class/RTCRemoteVideoTrack"), exports);
__exportStar(require("./class/RTCScreenVideoTrack"), exports);
__exportStar(require("./class/RTCTrack"), exports);
