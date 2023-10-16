"use strict";
exports.__esModule = true;
exports.QNAudioMusicMixer = void 0;
var QNRtcAudioMusicMixer = uni.requireNativePlugin('QNRTC-UniPlugin-QNRtcAudioMusicMixer');
var QNEvent = uni.requireNativePlugin('globalEvent');
var QNAudioMusicMixer = (function () {
    function QNAudioMusicMixer() {
        this.variationList = ['onStateChanged'];
        this.eventMap = {
            onStateChanged: 'onMusicStateChanged',
            onMixing: 'onMusicMixing',
            onError: 'onMusicError'
        };
    }
    QNAudioMusicMixer.prototype.createAudioMusicMixerCallback = function (name, listener) {
        if (name === 'onStateChanged') {
            var variationCallback = function (params) {
                if (params.state) {
                    listener(params);
                }
            };
            return variationCallback;
        }
    };
    QNAudioMusicMixer.prototype.on = function (name, listener) {
        if (this.variationList.some(function (item) { return item === name; })) {
            var callback = this.createAudioMusicMixerCallback(name, listener);
            QNEvent.addEventListener(this.eventMap[name], callback);
        }
        else {
            QNEvent.addEventListener(this.eventMap[name], listener);
        }
    };
    QNAudioMusicMixer.prototype.off = function (name, listener) {
        QNEvent.removeEventListener(this.eventMap[name], listener);
    };
    QNAudioMusicMixer.prototype.setPublishEnabled = function (enabled) {
        QNRtcAudioMusicMixer.setPublishEnabled(enabled);
    };
    QNAudioMusicMixer.prototype.isPublishEnabled = function () {
        return QNRtcAudioMusicMixer.isPublishEnabled();
    };
    QNAudioMusicMixer.prototype.getDuration = function (filePath) {
        return QNRtcAudioMusicMixer.getDuration(filePath);
    };
    QNAudioMusicMixer.prototype.start = function (loopCount) {
        if (loopCount === void 0) { loopCount = 1; }
        QNRtcAudioMusicMixer.start(loopCount);
    };
    QNAudioMusicMixer.prototype.stop = function () {
        QNRtcAudioMusicMixer.stop();
    };
    QNAudioMusicMixer.prototype.resume = function () {
        QNRtcAudioMusicMixer.resume();
    };
    QNAudioMusicMixer.prototype.pause = function () {
        QNRtcAudioMusicMixer.pause();
    };
    QNAudioMusicMixer.prototype.getCurrentPosition = function () {
        return QNRtcAudioMusicMixer.getCurrentPosition();
    };
    QNAudioMusicMixer.prototype.seekTo = function (timeUs) {
        QNRtcAudioMusicMixer.seekTo(timeUs);
    };
    QNAudioMusicMixer.prototype.setMusicVolume = function (musicVolume) {
        QNRtcAudioMusicMixer.setMusicVolume(musicVolume);
    };
    QNAudioMusicMixer.prototype.getMusicVolume = function () {
        return QNRtcAudioMusicMixer.getMusicVolume();
    };
    QNAudioMusicMixer.prototype.setStartPosition = function (position) {
        QNRtcAudioMusicMixer.setStartPosition(position);
    };
    QNAudioMusicMixer.prototype.getStartPosition = function () {
        return QNRtcAudioMusicMixer.getStartPosition();
    };
    return QNAudioMusicMixer;
}());
exports.QNAudioMusicMixer = QNAudioMusicMixer;
