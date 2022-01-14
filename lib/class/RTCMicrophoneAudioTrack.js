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
// @ts-ignore
// eslint-disable-next-line no-undef
var QNRtcTrack = uni.requireNativePlugin('QNRTC-UniPlugin-QNRtcTrack');
/**
 * 本地麦克风轨
 */
var QNMicrophoneAudioTrack = /** @class */ (function (_super) {
    __extends(QNMicrophoneAudioTrack, _super);
    function QNMicrophoneAudioTrack() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * 设置音量
     * @remarks 设置设备上当前音频输入设备采集后音量
     * @param volume 音量值 默认 1 范围 [0,10]
     */
    QNMicrophoneAudioTrack.prototype.setVolume = function (volume) {
        return QNRtcTrack.setVolume(this.identifyID, volume);
    };
    return QNMicrophoneAudioTrack;
}(RTCLocalAudioTrack_1.QNLocalAudioTrack));
exports.QNMicrophoneAudioTrack = QNMicrophoneAudioTrack;
