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
// @ts-ignore
// eslint-disable-next-line no-undef
var QNRtcTrack = uni.requireNativePlugin('QNRTC-UniPlugin-QNRtcTrack');
/**
 * 远端视频轨
 */
var QNRemoteVideoTrack = /** @class */ (function (_super) {
    __extends(QNRemoteVideoTrack, _super);
    function QNRemoteVideoTrack() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * 设置当前视频轨道质量等级
     * @param profile 质量等级
     */
    QNRemoteVideoTrack.prototype.setProfile = function (profile) {
        return QNRtcTrack.setProfile(this.identifyID, profile);
    };
    /**
     * 获取当前 track 是否开启了大小流发布
     * @returns 1 开启 0 未开启
     */
    QNRemoteVideoTrack.prototype.isMultiProfileEnabled = function () {
        return QNRtcTrack.isMultiProfileEnabled(this.identifyID);
    };
    /**
     * 获取当前视频轨道的分辨率等级
     * @returns 分辨率等级
     */
    QNRemoteVideoTrack.prototype.getProfile = function () {
        return QNRtcTrack.getProfile(this.identifyID);
    };
    return QNRemoteVideoTrack;
}(RTCRemoteTrack_1["default"]));
exports["default"] = QNRemoteVideoTrack;
