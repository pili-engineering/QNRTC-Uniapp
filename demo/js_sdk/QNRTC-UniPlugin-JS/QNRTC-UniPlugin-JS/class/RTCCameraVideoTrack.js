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
var RTCLocalVideoTrack_1 = require("./RTCLocalVideoTrack");
var QNRtcTrack = uni.requireNativePlugin('QNRtcUniPlugin-QNRtcTrack');
var QNCameraVideoTrack = (function (_super) {
    __extends(QNCameraVideoTrack, _super);
    function QNCameraVideoTrack() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    QNCameraVideoTrack.prototype.destroy = function () {
        return QNRtcTrack.destroy(this.identifyID);
    };
    QNCameraVideoTrack.prototype.setSessionPreset = function (sessionPreset) {
        return QNRtcTrack.setSessionPreset(this.identifyID, sessionPreset);
    };
    QNCameraVideoTrack.prototype.startCapture = function () {
        return QNRtcTrack.startCapture(this.identifyID);
    };
    QNCameraVideoTrack.prototype.stopCapture = function () {
        return QNRtcTrack.stopCapture(this.identifyID);
    };
    QNCameraVideoTrack.prototype.switchCamera = function () {
        return QNRtcTrack.switchCamera(this.identifyID);
    };
    QNCameraVideoTrack.prototype.turnLightOn = function () {
        return QNRtcTrack.turnLightOn(this.identifyID);
    };
    QNCameraVideoTrack.prototype.turnLightOff = function () {
        return QNRtcTrack.turnLightOff(this.identifyID);
    };
    QNCameraVideoTrack.prototype.manualFocus = function (x, y, viewWidth, viewHeight) {
        return QNRtcTrack.manualFocus(this.identifyID, x, y, viewWidth, viewHeight);
    };
    QNCameraVideoTrack.prototype.setExposureCompensation = function (value) {
        return QNRtcTrack.setExposureCompensation(this.identifyID, value);
    };
    QNCameraVideoTrack.prototype.getMaxExposureCompensation = function () {
        return QNRtcTrack.getMaxExposureCompensation(this.identifyID);
    };
    QNCameraVideoTrack.prototype.getMinExposureCompensation = function () {
        return QNRtcTrack.getMinExposureCompensation(this.identifyID);
    };
    QNCameraVideoTrack.prototype.setVideoOrientation = function (videoOrientation) {
        return QNRtcTrack.setVideoOrientation(this.identifyID, videoOrientation);
    };
    QNCameraVideoTrack.prototype.getVideoOrientation = function () {
        return QNRtcTrack.getVideoOrientation(this.identifyID);
    };
    QNCameraVideoTrack.prototype.setFillMode = function (fillMode) {
        return QNRtcTrack.setFillMode(this.identifyID, fillMode);
    };
    QNCameraVideoTrack.prototype.getFillMode = function () {
        return QNRtcTrack.getFillMode(this.identifyID);
    };
    QNCameraVideoTrack.prototype.setZoom = function (zoom) {
        return QNRtcTrack.setZoom(this.identifyID, zoom);
    };
    QNCameraVideoTrack.prototype.getZooms = function () {
        return QNRtcTrack.getZooms(this.identifyID);
    };
    QNCameraVideoTrack.prototype.setPreviewEnabled = function (isEnabled) {
        return QNRtcTrack.setPreviewEnabled(this.identifyID, isEnabled);
    };
    QNCameraVideoTrack.prototype.setBeauty = function (beautySetting) {
        return QNRtcTrack.setBeauty(this.identifyID, beautySetting);
    };
    QNCameraVideoTrack.prototype.previewMirrorFrontFacing = function (previewMirrorFrontFacing) {
        return QNRtcTrack.previewMirrorFrontFacing(this.identifyID, previewMirrorFrontFacing);
    };
    QNCameraVideoTrack.prototype.previewMirrorRearFacing = function (previewMirrorRearFacing) {
        return QNRtcTrack.previewMirrorRearFacing(this.identifyID, previewMirrorRearFacing);
    };
    QNCameraVideoTrack.prototype.encodeMirrorFrontFacing = function (encodeMirrorFrontFacing) {
        return QNRtcTrack.encodeMirrorFrontFacing(this.identifyID, encodeMirrorFrontFacing);
    };
    QNCameraVideoTrack.prototype.encodeMirrorRearFacing = function (encodeMirrorRearFacing) {
        return QNRtcTrack.encodeMirrorRearFacing(this.identifyID, encodeMirrorRearFacing);
    };
    QNCameraVideoTrack.prototype.pushImage = function (image) {
        return QNRtcTrack.pushImage(this.identifyID, image);
    };
    QNCameraVideoTrack.prototype.setWaterMark = function (waterMark) {
        return QNRtcTrack.setWaterMark(this.identifyID, waterMark);
    };
    QNCameraVideoTrack.prototype.clearWaterMark = function () {
        return QNRtcTrack.clearWaterMark(this.identifyID);
    };
    return QNCameraVideoTrack;
}(RTCLocalVideoTrack_1["default"]));
exports["default"] = QNCameraVideoTrack;
