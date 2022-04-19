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
exports.QNRemoteAudioTrack = void 0;
var RTCRemoteTrack_1 = require("./RTCRemoteTrack");
// @ts-ignore
// eslint-disable-next-line no-undef
var QNRtcTrack = uni.requireNativePlugin('QNRTC-UniPlugin-QNRtcTrack');
var QNRemoteAudioTrack = /** @class */ (function (_super) {
    __extends(QNRemoteAudioTrack, _super);
    function QNRemoteAudioTrack() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * 设置音量
     * @remarks 设置当前 Track 播放音量大小
     * @param volume 音量值 默认 1 范围 [0,10]
     */
    QNRemoteAudioTrack.prototype.setRemoteVolume = function (volume) {
        return QNRtcTrack.setRemoteVolume(this.identifyID, volume);
    };
    /**
     * 获取音量
     * @remarks 获取当前 Track 播放的音量大小，只支持安卓
     * @returns 音量值
     */
    QNRemoteAudioTrack.prototype.getRemoteVolume = function () {
        return QNRtcTrack.getRemoteVolume(this.identifyID);
    };
    return QNRemoteAudioTrack;
}(RTCRemoteTrack_1.QNRemoteTrack));
exports.QNRemoteAudioTrack = QNRemoteAudioTrack;
