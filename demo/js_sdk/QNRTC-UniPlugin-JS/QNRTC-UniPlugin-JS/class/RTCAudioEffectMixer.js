import { QNAudioEffect } from './RTCAudioEffect';
var QNRtcAudioEffectMixer = uni.requireNativePlugin('QNRTC-UniPlugin-QNRtcAudioEffectMixer');
var QNEvent = uni.requireNativePlugin('globalEvent');
var QNAudioEffectMixer = (function () {
    function QNAudioEffectMixer() {
        this.id = "audioEffectMixer";
        this.eventMap = {
            onEffectFinished: 'onEffectFinished',
            onEffectError: 'onEffectEffectError',
            onError: 'onEffectError'
        };
    }
    QNAudioEffectMixer.prototype.on = function (name, listener) {
        QNEvent.addEventListener(this.eventMap[name], listener);
    };
    QNAudioEffectMixer.prototype.off = function (name, listener) {
        QNEvent.removeEventListener(name, listener);
    };
    QNAudioEffectMixer.prototype.createAudioEffect = function (effectID, filePath) {
        QNRtcAudioEffectMixer.createAudioEffect(effectID, filePath);
        return new QNAudioEffect(effectID, filePath);
    };
    QNAudioEffectMixer.prototype.start = function (effectID) {
        QNRtcAudioEffectMixer.start(effectID);
    };
    QNAudioEffectMixer.prototype.setPublishEnabled = function (effectID, enabled) {
        QNRtcAudioEffectMixer.setPublishEnabled(effectID, enabled);
    };
    QNAudioEffectMixer.prototype.isPublishEnabled = function (effectID) {
        return QNRtcAudioEffectMixer.isPublishEnabled(effectID);
    };
    QNAudioEffectMixer.prototype.stop = function (effectID) {
        QNRtcAudioEffectMixer.stop(effectID);
    };
    QNAudioEffectMixer.prototype.resume = function (effectID) {
        QNRtcAudioEffectMixer.resume(effectID);
    };
    QNAudioEffectMixer.prototype.pause = function (effectID) {
        QNRtcAudioEffectMixer.pause(effectID);
    };
    QNAudioEffectMixer.prototype.stopAll = function () {
        QNRtcAudioEffectMixer.stopAll();
    };
    QNAudioEffectMixer.prototype.pauseAll = function () {
        QNRtcAudioEffectMixer.pauseAll();
    };
    QNAudioEffectMixer.prototype.resumeAll = function () {
        QNRtcAudioEffectMixer.resumeAll();
    };
    QNAudioEffectMixer.prototype.getCurrentPosition = function (effectID) {
        return QNRtcAudioEffectMixer.getCurrentPosition(effectID);
    };
    QNAudioEffectMixer.prototype.setVolume = function (effectID, volume) {
        QNRtcAudioEffectMixer.setVolume(effectID, volume);
    };
    QNAudioEffectMixer.prototype.getVolume = function (effectID) {
        return QNRtcAudioEffectMixer.getVolume(effectID);
    };
    QNAudioEffectMixer.prototype.setAllEffectsVolume = function (volume) {
        QNRtcAudioEffectMixer.setAllEffectsVolume(volume);
    };
    return QNAudioEffectMixer;
}());
export { QNAudioEffectMixer };
