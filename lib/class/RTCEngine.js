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
// @ts-ignore
// eslint-disable-next-line no-undef
var QNRtcEngine = uni.requireNativePlugin('QNRTC-UniPlugin-QNRtcEngine');
// @ts-ignore
// eslint-disable-next-line no-undef
var QNEvent = uni.requireNativePlugin('globalEvent');
// @ts-ignore
// eslint-disable-next-line no-undef
var QNRtcTrack = uni.requireNativePlugin('QNRTC-UniPlugin-QNRtcTrack');
// @ts-ignore
// eslint-disable-next-line no-undef
var QNRTCClientPlugin = uni.requireNativePlugin('QNRTC-UniPlugin-QNRtcClient');
// @ts-ignore
// eslint-disable-next-line no-undef
var QNRtcAudioMixer = uni.requireNativePlugin('QNRTC-UniPlugin-QNRtcAudioMixer');
var QNRTC = /** @class */ (function () {
    function QNRTC() {
    }
    /**
     * 监听对应的事件
     * @remarks 支持多次调用同一事件
     * @param name 事件名
     * @param listener 事件句柄
     */
    QNRTC.on = function (name, listener) {
        QNEvent.addEventListener(name, listener);
    };
    /**
     * 取消监听对应的事件
     * @param name 事件名
     * @param listener 事件句柄
     */
    QNRTC.off = function (name, listener) {
        QNEvent.removeEventListener(name, listener);
    };
    /**
     * 请求录屏权限
     * @remarks 只支持安卓，创建 QNScreenVideoTrack 前安卓需要调用此接口获取对应权限
     * @param callback 请求录屏权限后回调
     */
    QNRTC.requestPermission = function (callback) {
        return QNRtcTrack.requestPermission(callback);
    };
    /**
     * 判断屏幕录制功能是否可用
     * @remarks 建议创建 QNScreenVideoTrack 前先调用次接口确认是否支持录屏
     * @returns 可用 1 不可用 0
     */
    QNRTC.isScreenCaptureSupported = function () {
        return QNRtcTrack.isScreenCaptureSupported();
    };
    /**
     * 初始化 SDK
     * @remarks 必须在使用其它接口前调用
     * @param config 初始化配置项
     */
    QNRTC.configRTC = function (config) {
        var _config = __assign(__assign({}, RTCPreset_1.QNRTCConfigurationPreset), config);
        // 安卓目前无该方法，可能造成crach
        try {
            QNRtcEngine.initDelegate();
        }
        catch (e) { }
        QNRtcTrack.initDelegate();
        QNRTCClientPlugin.initDelegate();
        QNRtcAudioMixer.initDelegate();
        return QNRtcEngine.configRTC(_config);
    };
    /**
     * 反初始化操作
     * @remarks 在确认不再使用实时音视频后调用此接口释放其占用的资源，此后如果再使用需要再次调用 configRTC 方法
     */
    QNRTC.deinit = function () {
        return QNRtcEngine.deinit();
    };
    /**
     * 创建 QNRTCClient 对象
     * @remarks 全局只可存在一个
     * @returns RTC 管理对象
     */
    QNRTC.createClient = function () {
        QNRtcEngine.createRTCClient();
        return new RTCClient_1.QNRTCClient();
    };
    /**
     * 创建麦克风音频轨
     * @remarks 默认 tag 为 ""
     * @param config 采集音频的配置，可指定音频质量等级与开关通讯模式
     * @returns Track 实例
     */
    QNRTC.createMicrophoneAudioTrack = function (config) {
        var _config = __assign(__assign({}, RTCPreset_1.QNMicrophoneAudioTrackConfigPreset), config);
        var result = QNRtcEngine.createMicrophoneAudioTrack(_config);
        return new RTCMicrophoneAudioTrack_1.QNMicrophoneAudioTrack(__assign({ trackID: '', raw: result, userID: '' }, result));
    };
    /**
     * 创建摄像头视频轨
     * @remarks 默认 tag 为 ""
     * @param config 摄像头 Track 的配置，可设置视频的采集配置、编码配置等
     * @returns QNCameraVideoTrack 实例
     */
    QNRTC.createCameraVideoTrack = function (config) {
        var _config = __assign(__assign({}, RTCPreset_1.QNCameraVideoTrackConfigPreset), config);
        var result = QNRtcEngine.createCameraVideoTrack(_config);
        return new RTCCameraVideoTrack_1.QNCameraVideoTrack(__assign({ trackID: '', raw: result, userID: '' }, result));
    };
    /**
     * 创建屏幕录制轨
     * @remarks 默认 tag 为 ""
     * @param config 屏幕录制 Track 的配置，可设置视频的编码配置与开关大小流功能
     * @returns QNScreenVideoTrack 实例
     */
    QNRTC.createScreenVideoTrack = function (config) {
        var _config = __assign(__assign({}, RTCPreset_1.QNScreenVideoTrackConfigPreset), config);
        var result = QNRtcEngine.createScreenVideoTrack(_config);
        return new RTCScreenVideoTrack_1.QNScreenVideoTrack(__assign({ trackID: '', raw: result, userID: '' }, result));
    };
    /**
     * 创建自定义音频轨
     * @internal 暂不支持自定义轨
     * @remarks 默认 tag 为 ""
     * @param config 采集音频的配置，可指定音频质量等级
     * @returns Track 实例
     */
    QNRTC.createCustomAudioTrack = function (config) {
        var _config = __assign(__assign({}, RTCPreset_1.QNCustomAudioTrackConfigPreset), config);
        var result = QNRtcEngine.createCustomAudioTrack(_config);
        return new RTCTrack_1.QNTrack(__assign({ trackID: '', raw: result, userID: '' }, result));
    };
    /**
     * 创建自定义视频采集轨
     * @internal 暂不支持自定义轨
     * @remarks 默认 tag 为 ""
     * @param config 自定义视频采集 Track 的配置，可设置视频的编码配置与开关大小流功能
     * @returns Track 实例
     */
    QNRTC.createCustomVideoTrack = function (config) {
        var _config = __assign(__assign({}, RTCPreset_1.QNCustomVideoTrackConfigPreset), config);
        var result = QNRtcEngine.createCustomVideoTrack(_config);
        return new RTCTrack_1.QNTrack(__assign({ trackID: '', raw: result, userID: '' }, result));
    };
    /**
     * 音频路由切换
     * @remarks 设置是否将音频路由切换到扬声器，默认音频路由为扬声器
     * @param audioRouteToSpeakerphone 初始化配置项
     */
    QNRTC.setAudioRouteToSpeakerphone = function (audioRouteToSpeakerphone) {
        return QNRtcEngine.setAudioRouteToSpeakerphone(audioRouteToSpeakerphone);
    };
    /**
     * 设置是否开启本地日志保存
     * @remarks 设置是否开启本地日志保存
     */
    QNRTC.enableFileLogging = function () {
        return QNRtcEngine.enableFileLogging();
    };
    return QNRTC;
}());
exports["default"] = QNRTC;
