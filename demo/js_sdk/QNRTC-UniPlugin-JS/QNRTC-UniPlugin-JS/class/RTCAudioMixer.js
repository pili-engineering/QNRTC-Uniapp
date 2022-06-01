"use strict";
exports.__esModule = true;
exports.QNAudioMixer = void 0;
var QNRtcAudioMixer = uni.requireNativePlugin('QNRTC-UniPlugin-QNRtcAudioMixer');
var QNEvent = uni.requireNativePlugin('globalEvent');
var QNAudioMixer = (function () {
    function QNAudioMixer(identifyID, url) {
        this.variationList = ["onStateChanged"];
        this.identifyID = identifyID;
        this.url = url;
    }
    QNAudioMixer.prototype.createAudioMixerCallback = function (name, listener) {
        if (name === "onStateChanged") {
            var variationCallback = function (params) {
                if (params.state) {
                    listener(params);
                }
            };
            return variationCallback;
        }
    };
    QNAudioMixer.prototype.on = function (name, listener) {
        if (this.variationList.some(function (item) { return item === name; })) {
            var callback = this.createAudioMixerCallback(name, listener);
            QNEvent.addEventListener(name, callback);
        }
        else {
            QNEvent.addEventListener(name, listener);
        }
    };
    QNAudioMixer.prototype.off = function (name, listener) {
        QNEvent.removeEventListener(name, listener);
    };
    QNAudioMixer.prototype.start = function (loopTimes) {
        QNRtcAudioMixer.start(this.identifyID, loopTimes);
    };
    QNAudioMixer.prototype.stop = function () {
        QNRtcAudioMixer.stop(this.identifyID);
    };
    QNAudioMixer.prototype.resume = function () {
        QNRtcAudioMixer.resume(this.identifyID);
    };
    QNAudioMixer.prototype.pause = function () {
        QNRtcAudioMixer.pause(this.identifyID);
    };
    QNAudioMixer.prototype.seekTo = function (timeUs) {
        QNRtcAudioMixer.seekTo(this.identifyID, timeUs);
    };
    QNAudioMixer.prototype.setMixingVolume = function (microphoneVolume, musicVolume) {
        QNRtcAudioMixer.setMixingVolume(this.identifyID, microphoneVolume, musicVolume);
    };
    QNAudioMixer.prototype.setPlayingVolume = function (volume) {
        QNRtcAudioMixer.setPlayingVolume(this.identifyID, volume);
    };
    QNAudioMixer.prototype.getDuration = function () {
        return QNRtcAudioMixer.getDuration(this.identifyID);
    };
    QNAudioMixer.prototype.getCurrentPosition = function () {
        return QNRtcAudioMixer.getCurrentPosition(this.identifyID);
    };
    QNAudioMixer.prototype.setPlayBack = function (playBack) {
        QNRtcAudioMixer.setPlayBack(this.identifyID, playBack);
    };
    return QNAudioMixer;
}());
exports.QNAudioMixer = QNAudioMixer;
