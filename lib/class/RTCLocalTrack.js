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
exports.QNLocalTrack = void 0;
var RTCTrack_1 = require("./RTCTrack");
// @ts-ignore
// eslint-disable-next-line no-undef
var QNRtcTrack = uni.requireNativePlugin('QNRTC-UniPlugin-QNRtcTrack');
/**
 * 本地轨
 */
var QNLocalTrack = /** @class */ (function (_super) {
    __extends(QNLocalTrack, _super);
    function QNLocalTrack() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * 设置 mute
     * @remarks 更新当前 Track 的 mute 值
     * @param muted 是否 mute
     */
    QNLocalTrack.prototype.setMuted = function (muted) {
        return QNRtcTrack.setMuted(this.identifyID, muted);
    };
    return QNLocalTrack;
}(RTCTrack_1.QNTrack));
exports.QNLocalTrack = QNLocalTrack;
