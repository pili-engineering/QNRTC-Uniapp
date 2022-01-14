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
exports.QNCameraVideoTrack = void 0;
var RTCLocalVideoTrack_1 = require("./RTCLocalVideoTrack");
// @ts-ignore
// eslint-disable-next-line no-undef
var QNRtcTrack = uni.requireNativePlugin('QNRTC-UniPlugin-QNRtcTrack');
/**
 * 本地摄像头轨
 */
var QNCameraVideoTrack = /** @class */ (function (_super) {
    __extends(QNCameraVideoTrack, _super);
    function QNCameraVideoTrack() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * 销毁本地创建的 track
     */
    QNCameraVideoTrack.prototype.destroy = function () {
        return QNRtcTrack.destroy(this.identifyID);
    };
    /**
     * 设置采集分辨率
     * @remarks 只支持ios
     * @param sessionPreset 分辨率
     */
    QNCameraVideoTrack.prototype.setSessionPreset = function (sessionPreset) {
        return QNRtcTrack.setSessionPreset(this.identifyID, sessionPreset);
    };
    /**
     * 开启摄像头采集
     */
    QNCameraVideoTrack.prototype.startCapture = function () {
        return QNRtcTrack.startCapture(this.identifyID);
    };
    /**
     * 关闭摄像头采集
     */
    QNCameraVideoTrack.prototype.stopCapture = function () {
        return QNRtcTrack.stopCapture(this.identifyID);
    };
    /**
     * 切换相机前后置
     */
    QNCameraVideoTrack.prototype.switchCamera = function () {
        return QNRtcTrack.switchCamera(this.identifyID);
    };
    /**
     * 开启闪光灯
     */
    QNCameraVideoTrack.prototype.turnLightOn = function () {
        return QNRtcTrack.turnLightOn(this.identifyID);
    };
    /**
     * 关闭闪光灯
     */
    QNCameraVideoTrack.prototype.turnLightOff = function () {
        return QNRtcTrack.turnLightOff(this.identifyID);
    };
    /**
     * 手动聚焦
     * @remarks 对于前置摄像头，大部分机型并不支持手动对焦，因此，请勿调用该接口，否则会抛异常
     * @param x 焦点 x 轴绝对位置，范围 0 - 1
     * @param y 焦点 y 轴绝对位置，范围 0 - 1
     */
    QNCameraVideoTrack.prototype.manualFocus = function (x, y) {
        return QNRtcTrack.manualFocus(this.identifyID, x, y);
    };
    /**
     * 设置曝光度
     * @remarks 只支持安卓
     * @param value 曝光度
     */
    QNCameraVideoTrack.prototype.setExposureCompensation = function (value) {
        return QNRtcTrack.setExposureCompensation(this.identifyID, value);
    };
    /**
     * 获取最大曝光度
     * @remarks 只支持安卓
     * @returns 曝光度
     */
    QNCameraVideoTrack.prototype.getMaxExposureCompensation = function () {
        return QNRtcTrack.getMaxExposureCompensation(this.identifyID);
    };
    /**
     * 获取最小曝光度
     * @remarks 只支持安卓
     * @returns 曝光度
     */
    QNCameraVideoTrack.prototype.getMinExposureCompensation = function () {
        return QNRtcTrack.getMinExposureCompensation(this.identifyID);
    };
    /**
     * 设置 camera 时的采集摄像头的旋转方向
     * @remarks 只支持ios，默认 AVCaptureVideoOrientationPortrait
     * @param videoOrientation 旋转方向
     */
    QNCameraVideoTrack.prototype.setVideoOrientation = function (videoOrientation) {
        return QNRtcTrack.setVideoOrientation(this.identifyID, videoOrientation);
    };
    /**
     * 获取camera 时的采集摄像头的旋转方向
     * @remarks 只支持ios
     * @returns 旋转方向
     */
    QNCameraVideoTrack.prototype.getVideoOrientation = function () {
        return QNRtcTrack.getVideoOrientation(this.identifyID);
    };
    /**
     * 设置缩放大小
     * @param zoom 缩放大小
     */
    QNCameraVideoTrack.prototype.setZoom = function (zoom) {
        return QNRtcTrack.setZoom(this.identifyID, zoom);
    };
    /**
     * 获取支持的缩放大小列表
     * @example
     * ```
     * const result = caneraVideoTrack.getZooms()
     * console.log (result)
     * // [0.4,0.8]
     * ```
     * @returns 缩放大小列表
     */
    QNCameraVideoTrack.prototype.getZooms = function () {
        return QNRtcTrack.getZooms(this.identifyID);
    };
    /**
     * 设置是否允许预览
     * @param isEnabled 是否允许预览
     */
    QNCameraVideoTrack.prototype.setPreviewEnabled = function (isEnabled) {
        return QNRtcTrack.setPreviewEnabled(this.identifyID, isEnabled);
    };
    /**
     * 设置是否启用美颜
     * @param beautySetting 美颜配置
     */
    QNCameraVideoTrack.prototype.setBeauty = function (beautySetting) {
        return QNRtcTrack.setBeauty(this.identifyID, beautySetting);
    };
    /**
     * 前置摄像头预览是否开启镜像
     * @remarks 默认 YES
     * @param previewMirrorFrontFacing 是否开启镜像
     */
    QNCameraVideoTrack.prototype.previewMirrorFrontFacing = function (previewMirrorFrontFacing) {
        return QNRtcTrack.previewMirrorFrontFacing(this.identifyID, previewMirrorFrontFacing);
    };
    /**
     * 后置摄像头预览是否开启镜像
     * @remarks 默认 NO
     * @param previewMirrorRearFacing 是否开启镜像
     */
    QNCameraVideoTrack.prototype.previewMirrorRearFacing = function (previewMirrorRearFacing) {
        return QNRtcTrack.previewMirrorRearFacing(this.identifyID, previewMirrorRearFacing);
    };
    /**
     * 前置摄像头编码以及预览是否开启镜像
     * @remarks 默认 NO
     * @param encodeMirrorFrontFacing 是否开启镜像
     */
    QNCameraVideoTrack.prototype.encodeMirrorFrontFacing = function (encodeMirrorFrontFacing) {
        return QNRtcTrack.encodeMirrorFrontFacing(this.identifyID, encodeMirrorFrontFacing);
    };
    /**
     * 后置摄像头编码以及预览是否开启镜像
     * @remarks 默认 NO
     * @param encodeMirrorRearFacing 是否开启镜像
     */
    QNCameraVideoTrack.prototype.encodeMirrorRearFacing = function (encodeMirrorRearFacing) {
        return QNRtcTrack.encodeMirrorRearFacing(this.identifyID, encodeMirrorRearFacing);
    };
    /**
     * 使用图片替代相机画面
     * @remarks 如需取消图片替代相机 resourcePath 传空字符串即可
     * @param image 图片配置
     */
    QNCameraVideoTrack.prototype.pushImage = function (image) {
        return QNRtcTrack.pushImage(this.identifyID, image);
    };
    /**
     * 设置水印
     * @param waterMark 水印配置
     */
    QNCameraVideoTrack.prototype.setWaterMark = function (waterMark) {
        return QNRtcTrack.setWaterMark(this.identifyID, waterMark);
    };
    /**
     * 清空水印配置
     */
    QNCameraVideoTrack.prototype.clearWaterMark = function () {
        return QNRtcTrack.clearWaterMark(this.identifyID);
    };
    return QNCameraVideoTrack;
}(RTCLocalVideoTrack_1.QNLocalVideoTrack));
exports.QNCameraVideoTrack = QNCameraVideoTrack;
