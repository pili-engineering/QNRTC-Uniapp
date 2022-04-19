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
var QNRtcTrack = uni.requireNativePlugin('QNRTC-UniPlugin-QNRtcTrack');
var QNRemoteAudioTrack = (function (_super) {
    __extends(QNRemoteAudioTrack, _super);
    function QNRemoteAudioTrack() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    QNRemoteAudioTrack.prototype.setRemoteVolume = function (volume) {
        return QNRtcTrack.setRemoteVolume(this.identifyID, volume);
    };
    QNRemoteAudioTrack.prototype.getRemoteVolume = function () {
        return QNRtcTrack.getRemoteVolume(this.identifyID);
    };
    return QNRemoteAudioTrack;
}(RTCRemoteTrack_1.QNRemoteTrack));
exports.QNRemoteAudioTrack = QNRemoteAudioTrack;
