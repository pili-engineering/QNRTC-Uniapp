"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var RTCPreset_1 = require("../RTCPreset");
var RTCClient_1 = require("./RTCClient");
var RTCCameraVideoTrack_1 = require("./RTCCameraVideoTrack");
var RTCMicrophoneAudioTrack_1 = require("./RTCMicrophoneAudioTrack");
var RTCScreenVideoTrack_1 = require("./RTCScreenVideoTrack");
var RTCTrack_1 = require("./RTCTrack");
var QNRtcEngine = uni.requireNativePlugin('QNRtcUniPlugin-QNRtcEngine');
var QNEvent = uni.requireNativePlugin('globalEvent');
var RTCEngine = (function () {
    function RTCEngine() {
    }
    RTCEngine.on = function (name, listener) {
        QNEvent.addEventListener(name, listener);
    };
    RTCEngine.off = function (name, listener) {
        QNEvent.removeEventListener(name, listener);
    };
    RTCEngine.configRTC = function (config) {
        var _config = __assign(__assign({}, RTCPreset_1.QNRTCConfigurationPreset), config);
        return QNRtcEngine.configRTC(_config);
    };
    RTCEngine.deinit = function () {
        return QNRtcEngine.deinit();
    };
    RTCEngine.createClient = function () {
        QNRtcEngine.createRTCClient();
        return new RTCClient_1["default"]();
    };
    RTCEngine.createMicrophoneAudioTrack = function (config) {
        var _config = __assign(__assign({}, RTCPreset_1.QNMicrophoneAudioTrackConfigPreset), config);
        var result = QNRtcEngine.createMicrophoneAudioTrack(_config);
        return new RTCMicrophoneAudioTrack_1["default"](__assign({ trackID: '', raw: result, userID: '' }, result));
    };
    RTCEngine.createCameraVideoTrack = function (config) {
        var _config = __assign(__assign({}, RTCPreset_1.QNCameraVideoTrackConfigPreset), config);
        var result = QNRtcEngine.createCameraVideoTrack(_config);
        return new RTCCameraVideoTrack_1["default"](__assign({ trackID: '', raw: result, userID: '' }, result));
    };
    RTCEngine.createScreenVideoTrack = function (config) {
        var _config = __assign(__assign({}, RTCPreset_1.QNScreenVideoTrackConfigPreset), config);
        var result = QNRtcEngine.createScreenVideoTrack(_config);
        return new RTCScreenVideoTrack_1["default"](__assign({ trackID: '', raw: result, userID: '' }, result));
    };
    RTCEngine.createCustomAudioTrack = function (config) {
        var _config = __assign(__assign({}, RTCPreset_1.QNCustomAudioTrackConfigPreset), config);
        var result = QNRtcEngine.createCustomAudioTrack(_config);
        return new RTCTrack_1["default"](__assign({ trackID: '', raw: result, userID: '' }, result));
    };
    RTCEngine.createCustomVideoTrack = function (config) {
        var _config = __assign(__assign({}, RTCPreset_1.QNCustomVideoTrackConfigPreset), config);
        var result = QNRtcEngine.createCustomVideoTrack(_config);
        return new RTCTrack_1["default"](__assign({ trackID: '', raw: result, userID: '' }, result));
    };
    RTCEngine.setAudioRouteToSpeakerphone = function (audioRouteToSpeakerphone) {
        return QNRtcEngine.setAudioRouteToSpeakerphone(audioRouteToSpeakerphone);
    };
    RTCEngine.enableFileLogging = function () {
        return QNRtcEngine.enableFileLogging();
    };
    return RTCEngine;
}());
exports["default"] = RTCEngine;
