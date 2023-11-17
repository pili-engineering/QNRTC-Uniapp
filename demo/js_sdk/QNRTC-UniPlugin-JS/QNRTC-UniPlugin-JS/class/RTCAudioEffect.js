var QNRtcAudioEffect = uni.requireNativePlugin('QNRTC-UniPlugin-QNRtcAudioEffect');
var QNAudioEffect = (function () {
    function QNAudioEffect(effectID, filePath) {
        this.effectID = effectID;
        this.filePath = filePath;
    }
    QNAudioEffect.getDuration = function (filePath) {
        return QNRtcAudioEffect.getDuration(filePath);
    };
    QNAudioEffect.prototype.getID = function () {
        return QNRtcAudioEffect.getID(this.effectID);
    };
    QNAudioEffect.prototype.getFilePath = function () {
        return QNRtcAudioEffect.getFilePath(this.effectID);
    };
    QNAudioEffect.prototype.setStartPosition = function (position) {
        QNRtcAudioEffect.setStartPosition(this.effectID, position);
    };
    QNAudioEffect.prototype.getStartPosition = function () {
        return QNRtcAudioEffect.getStartPosition(this.effectID);
    };
    QNAudioEffect.prototype.setLoopCount = function (loopCount) {
        QNRtcAudioEffect.setLoopCount(this.effectID, loopCount);
    };
    QNAudioEffect.prototype.getLoopCount = function () {
        return QNRtcAudioEffect.getLoopCount(this.effectID);
    };
    return QNAudioEffect;
}());
export { QNAudioEffect };
