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
var QNRtcTrack = uni.requireNativePlugin('QNRTC-UniPlugin-QNRtcTrack');
var QNLocalAudioTrack = (function (_super) {
    __extends(QNLocalAudioTrack, _super);
    function QNLocalAudioTrack() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    QNLocalAudioTrack.prototype.setVolume = function (volume) {
        return QNRtcTrack.setVolume(this.identifyID, volume);
    };
    QNLocalAudioTrack.prototype.getVolumeLevel = function () {
        return QNRtcTrack.getVolumeLevel(this.identifyID);
    };
    QNLocalAudioTrack.prototype.addAudioFilter = function (filter) {
        QNRtcTrack.addAudioFilter(this.identifyID, filter.id);
    };
    QNLocalAudioTrack.prototype.removeAudioFilter = function (filter) {
        QNRtcTrack.removeAudioFilter(this.identifyID, filter.id);
    };
    return QNLocalAudioTrack;
}(QNLocalTrack));
export { QNLocalAudioTrack };
