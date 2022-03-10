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
var RTCRemoteTrack_1 = require("./RTCRemoteTrack");
var QNRtcTrack = uni.requireNativePlugin('QNRTC-UniPlugin-QNRtcTrack');
var QNRemoteVideoTrack = (function (_super) {
    __extends(QNRemoteVideoTrack, _super);
    function QNRemoteVideoTrack() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    QNRemoteVideoTrack.prototype.setProfile = function (profile) {
        return QNRtcTrack.setProfile(this.identifyID, profile);
    };
    QNRemoteVideoTrack.prototype.isMultiProfileEnabled = function () {
        return QNRtcTrack.isMultiProfileEnabled(this.identifyID);
    };
    QNRemoteVideoTrack.prototype.getProfile = function () {
        return QNRtcTrack.getProfile(this.identifyID);
    };
    return QNRemoteVideoTrack;
}(RTCRemoteTrack_1["default"]));
exports["default"] = QNRemoteVideoTrack;
