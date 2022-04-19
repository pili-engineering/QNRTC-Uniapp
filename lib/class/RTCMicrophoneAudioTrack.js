"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.QNMicrophoneAudioTrack = void 0;
var RTCLocalAudioTrack_1 = require("./RTCLocalAudioTrack");
var RTCAudioMixer_1 = require("../class/RTCAudioMixer");
// @ts-ignore
// eslint-disable-next-line no-undef
var QNRtcTrack = uni.requireNativePlugin('QNRTC-UniPlugin-QNRtcTrack');
var QNMicrophoneAudioTrack = /** @class */ (function (_super) {
    __extends(QNMicrophoneAudioTrack, _super);
    function QNMicrophoneAudioTrack() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * 设置音量
     * @remarks 设置设备上当前音频输入设备采集后音量，默认 1 范围 [0,10]
     * @param volume 音量值
     */
    QNMicrophoneAudioTrack.prototype.setVolume = function (volume) {
        return QNRtcTrack.setVolume(this.identifyID, volume);
    };
    /**
     * 创建混音控制器对象
     * @remarks 创建混音控制器对象，当前仅支持同一时间混一路音频，重复对不同的 QNAudioMixer 执行 start 操作，后面的会覆盖前面的，即以后执行 start 的音频混音控制器为准进行混音
     * @param url 音频文件路径
     * @returns 混音控制器对象
     */
    QNMicrophoneAudioTrack.prototype.createAudioMixer = function (url) {
        QNRtcTrack.createAudioMixer(this.identifyID, url);
        return new RTCAudioMixer_1.QNAudioMixer(this.identifyID, url);
    };
    return QNMicrophoneAudioTrack;
}(RTCLocalAudioTrack_1.QNLocalAudioTrack));
exports.QNMicrophoneAudioTrack = QNMicrophoneAudioTrack;
