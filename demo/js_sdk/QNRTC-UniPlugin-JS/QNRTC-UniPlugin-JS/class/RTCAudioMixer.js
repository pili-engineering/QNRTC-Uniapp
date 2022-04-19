"use strict";
exports.__esModule = true;
var QNRtcAudioMixer = uni.requireNativePlugin('QNRTC-UniPlugin-QNRtcAudioMixer');
var QNEvent = uni.requireNativePlugin('globalEvent');
var RTCAudioMixer = (function () {
    function RTCAudioMixer(identifyID, url) {
        this.variationList = ["onStateChanged"];
        this.identifyID = identifyID;
        this.url = url;
    }
    RTCAudioMixer.prototype.createAudioMixerCallback = function (name, listener) {
        if (name === "onStateChanged") {
            var variationCallback = function (params) {
                if (params.state) {
                    listener(params);
                }
            };
            return variationCallback;
        }
    };
    RTCAudioMixer.prototype.on = function (name, listener) {
        if (this.variationList.some(function (item) { return item === name; })) {
            var callback = this.createAudioMixerCallback(name, listener);
            QNEvent.addEventListener(name, callback);
        }
        else {
            QNEvent.addEventListener(name, listener);
        }
    };
    RTCAudioMixer.prototype.off = function (name, listener) {
        QNEvent.removeEventListener(name, listener);
    };
    RTCAudioMixer.prototype.start = function (loopTimes) {
        QNRtcAudioMixer.start(this.identifyID, loopTimes);
    };
    RTCAudioMixer.prototype.stop = function () {
        QNRtcAudioMixer.stop(this.identifyID);
    };
    RTCAudioMixer.prototype.resume = function () {
        QNRtcAudioMixer.resume(this.identifyID);
    };
    RTCAudioMixer.prototype.pause = function () {
        QNRtcAudioMixer.pause(this.identifyID);
    };
    RTCAudioMixer.prototype.seekTo = function (timeUs) {
        QNRtcAudioMixer.seekTo(this.identifyID, timeUs);
    };
    RTCAudioMixer.prototype.setMixingVolume = function (microphoneVolume, musicVolume) {
        QNRtcAudioMixer.setMixingVolume(this.identifyID, microphoneVolume, musicVolume);
    };
    RTCAudioMixer.prototype.setPlayingVolume = function (volume) {
        QNRtcAudioMixer.setPlayingVolume(this.identifyID, volume);
    };
    RTCAudioMixer.prototype.getDuration = function () {
        return QNRtcAudioMixer.getDuration(this.identifyID);
    };
    RTCAudioMixer.prototype.getCurrentPosition = function () {
        return QNRtcAudioMixer.getCurrentPosition(this.identifyID);
    };
    RTCAudioMixer.prototype.setPlayBack = function (playBack) {
        QNRtcAudioMixer.setPlayBack(this.identifyID, playBack);
    };
    return RTCAudioMixer;
}());
exports["default"] = RTCAudioMixer;
