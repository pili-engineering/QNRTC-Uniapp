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
var RTCAudioMusicMixer_1 = require("../class/RTCAudioMusicMixer");
var RTCAudioEffectMixer_1 = require("../class/RTCAudioEffectMixer");
var QNRtcTrack = uni.requireNativePlugin('QNRTC-UniPlugin-QNRtcTrack');
var QNMicrophoneAudioTrack = (function (_super) {
    __extends(QNMicrophoneAudioTrack, _super);
    function QNMicrophoneAudioTrack() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    QNMicrophoneAudioTrack.prototype.createAudioMixer = function (url) {
        QNRtcTrack.createAudioMixer(url);
        return new RTCAudioMixer_1.QNAudioMixer(this.identifyID, url);
    };
    QNMicrophoneAudioTrack.prototype.createAudioMusicMixer = function (url) {
        QNRtcTrack.createAudioMusicMixer(url);
        return new RTCAudioMusicMixer_1.QNAudioMusicMixer();
    };
    QNMicrophoneAudioTrack.prototype.createAudioEffectMixer = function () {
        QNRtcTrack.createAudioEffectMixer();
        return new RTCAudioEffectMixer_1.QNAudioEffectMixer();
    };
    return QNMicrophoneAudioTrack;
}(RTCLocalAudioTrack_1.QNLocalAudioTrack));
exports.QNMicrophoneAudioTrack = QNMicrophoneAudioTrack;
