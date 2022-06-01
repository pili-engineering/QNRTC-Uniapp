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
exports.QNScreenVideoTrack = void 0;
var RTCLocalVideoTrack_1 = require("./RTCLocalVideoTrack");
var QNRtcTrack = uni.requireNativePlugin('QNRTC-UniPlugin-QNRtcTrack');
var QNScreenVideoTrack = (function (_super) {
    __extends(QNScreenVideoTrack, _super);
    function QNScreenVideoTrack() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    QNScreenVideoTrack.prototype.setScreenRecorderFrameRate = function (screenRecorderFrameRate) {
        return QNRtcTrack.setScreenRecorderFrameRate(this.identifyID, screenRecorderFrameRate);
    };
    return QNScreenVideoTrack;
}(RTCLocalVideoTrack_1.QNLocalVideoTrack));
exports.QNScreenVideoTrack = QNScreenVideoTrack;
