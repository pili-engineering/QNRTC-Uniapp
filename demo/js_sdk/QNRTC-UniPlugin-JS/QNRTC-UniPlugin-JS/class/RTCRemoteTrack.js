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
exports.QNRemoteTrack = void 0;
var RTCTrack_1 = require("./RTCTrack");
var QNRtcTrack = uni.requireNativePlugin('QNRTC-UniPlugin-QNRtcTrack');
var QNRemoteTrack = (function (_super) {
    __extends(QNRemoteTrack, _super);
    function QNRemoteTrack() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    QNRemoteTrack.prototype.isSubscribed = function () {
        return QNRtcTrack.isSubscribed(this.identifyID);
    };
    return QNRemoteTrack;
}(RTCTrack_1.QNTrack));
exports.QNRemoteTrack = QNRemoteTrack;
