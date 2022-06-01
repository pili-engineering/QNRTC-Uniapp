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
var QNRtcEngine = uni.requireNativePlugin('QNRTC-UniPlugin-QNRtcEngine');
var QNEvent = uni.requireNativePlugin('globalEvent');
var QNRtcTrack = uni.requireNativePlugin('QNRTC-UniPlugin-QNRtcTrack');
var QNRTCClientPlugin = uni.requireNativePlugin('QNRTC-UniPlugin-QNRtcClient');
var QNRtcAudioMixer = uni.requireNativePlugin('QNRTC-UniPlugin-QNRtcAudioMixer');
var QNRTC = (function () {
    function QNRTC() {
    }
    QNRTC.on = function (name, listener) {
        QNEvent.addEventListener(name, listener);
    };
    QNRTC.off = function (name, listener) {
        QNEvent.removeEventListener(name, listener);
    };
    QNRTC.requestPermission = function (callback) {
        return QNRtcTrack.requestPermission(callback);
    };
    QNRTC.isScreenCaptureSupported = function () {
        return QNRtcTrack.isScreenCaptureSupported();
    };
    QNRTC.configRTC = function (config) {
        var _config = __assign(__assign({}, RTCPreset_1.QNRTCConfigurationPreset), config);
        try {
            QNRtcEngine.initDelegate();
        }
        catch (e) { }
        QNRtcTrack.initDelegate();
        QNRTCClientPlugin.initDelegate();
        QNRtcAudioMixer.initDelegate();
        return QNRtcEngine.configRTC(_config);
    };
    QNRTC.deinit = function () {
        return QNRtcEngine.deinit();
    };
    QNRTC.createClient = function () {
        QNRtcEngine.createRTCClient();
        return new RTCClient_1.QNRTCClient();
    };
    QNRTC.createMicrophoneAudioTrack = function (config) {
        var _config = __assign(__assign({}, RTCPreset_1.QNMicrophoneAudioTrackConfigPreset), config);
        var result = QNRtcEngine.createMicrophoneAudioTrack(_config);
        return new RTCMicrophoneAudioTrack_1.QNMicrophoneAudioTrack(__assign({ trackID: '', raw: result, userID: '' }, result));
    };
    QNRTC.createCameraVideoTrack = function (config) {
        var _config = __assign(__assign({}, RTCPreset_1.QNCameraVideoTrackConfigPreset), config);
        var result = QNRtcEngine.createCameraVideoTrack(_config);
        return new RTCCameraVideoTrack_1.QNCameraVideoTrack(__assign({ trackID: '', raw: result, userID: '' }, result));
    };
    QNRTC.createScreenVideoTrack = function (config) {
        var _config = __assign(__assign({}, RTCPreset_1.QNScreenVideoTrackConfigPreset), config);
        var result = QNRtcEngine.createScreenVideoTrack(_config);
        return new RTCScreenVideoTrack_1.QNScreenVideoTrack(__assign({ trackID: '', raw: result, userID: '' }, result));
    };
    QNRTC.createCustomAudioTrack = function (config) {
        var _config = __assign(__assign({}, RTCPreset_1.QNCustomAudioTrackConfigPreset), config);
        var result = QNRtcEngine.createCustomAudioTrack(_config);
        return new RTCTrack_1.QNTrack(__assign({ trackID: '', raw: result, userID: '' }, result));
    };
    QNRTC.createCustomVideoTrack = function (config) {
        var _config = __assign(__assign({}, RTCPreset_1.QNCustomVideoTrackConfigPreset), config);
        var result = QNRtcEngine.createCustomVideoTrack(_config);
        return new RTCTrack_1.QNTrack(__assign({ trackID: '', raw: result, userID: '' }, result));
    };
    QNRTC.setAudioRouteToSpeakerphone = function (audioRouteToSpeakerphone) {
        return QNRtcEngine.setAudioRouteToSpeakerphone(audioRouteToSpeakerphone);
    };
    QNRTC.enableFileLogging = function () {
        return QNRtcEngine.enableFileLogging();
    };
    return QNRTC;
}());
exports["default"] = QNRTC;
