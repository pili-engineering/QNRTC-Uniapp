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
var RTCTrack_1 = require("./RTCTrack");
// @ts-ignore
// eslint-disable-next-line no-undef
var QNRtcTrack = uni.requireNativePlugin('QNRTC-UniPlugin-QNRtcTrack');
/**
 * 远端轨
 */
var QNRemoteTrack = /** @class */ (function (_super) {
    __extends(QNRemoteTrack, _super);
    function QNRemoteTrack() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * 是否订阅
     * @returns 1 订阅 2 未订阅
     */
    QNRemoteTrack.prototype.isSubscribed = function () {
        return QNRtcTrack.isSubscribed(this.identifyID);
    };
    return QNRemoteTrack;
}(RTCTrack_1["default"]));
exports["default"] = QNRemoteTrack;
