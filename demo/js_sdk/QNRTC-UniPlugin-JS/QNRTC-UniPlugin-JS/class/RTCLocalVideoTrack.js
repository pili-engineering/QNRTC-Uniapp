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
import { QNLocalTrack } from './RTCLocalTrack';
import { QNVideoFormatDefault } from '../interface/RTCInterface';
var QNRtcTrack = uni.requireNativePlugin('QNRTC-UniPlugin-QNRtcTrack');
var isQNVideoEncoderConfig = function (preset) {
    return preset.prefer !== undefined;
};
var isQNVideoFormatDefault = function (preset) {
    return preset in QNVideoFormatDefault;
};
var QNLocalVideoTrack = (function (_super) {
    __extends(QNLocalVideoTrack, _super);
    function QNLocalVideoTrack() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    QNLocalVideoTrack.prototype.sendSEI = function (message, repeatCount, uuid) {
        return QNRtcTrack.sendSEI(this.identifyID, message, repeatCount, uuid);
    };
    QNLocalVideoTrack.prototype.setVideoEncoderConfig = function (preset, prefer) {
        if (isQNVideoEncoderConfig(preset)) {
            QNRtcTrack.setVideoEncoderConfig(this.identifyID, preset);
        }
        else if (isQNVideoFormatDefault(preset)) {
            if (prefer === undefined) {
                QNRtcTrack.setVideoEncoderConfigPreset(this.identifyID, preset);
            }
            else {
                QNRtcTrack.setVideoEncoderConfigPreset(this.identifyID, preset, prefer);
            }
        }
    };
    return QNLocalVideoTrack;
}(QNLocalTrack));
export { QNLocalVideoTrack };
