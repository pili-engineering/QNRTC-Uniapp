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
var RTCLocalTrack_1 = require("./RTCLocalTrack");
// @ts-ignore
// eslint-disable-next-line no-undef
var QNRtcTrack = uni.requireNativePlugin('QNRTC-UniPlugin-QNRtcTrack');
/**
 * 本地视频轨
 */
var QNLocalVideoTrack = /** @class */ (function (_super) {
    __extends(QNLocalVideoTrack, _super);
    function QNLocalVideoTrack() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * 发送 SEI
     * @param message 消息内容
     * @param repeatCount 重复次数，-1 为每一帧都发送
     * @param uuid 唯一 ID
     */
    QNLocalVideoTrack.prototype.sendSEI = function (message, repeatCount, uuid) {
        return QNRtcTrack.sendSEI(this.identifyID, message, repeatCount, uuid);
    };
    return QNLocalVideoTrack;
}(RTCLocalTrack_1["default"]));
exports["default"] = QNLocalVideoTrack;
