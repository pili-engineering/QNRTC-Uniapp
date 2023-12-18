const QNRtcAudioEffect = uni.requireNativePlugin('QNRTC-UniPlugin-QNRtcAudioEffect')
export class QNAudioEffect {
    constructor(private effectID: number, private filePath: string) { }
    /**
     * 获取指定音效文件的时长
     * @remarks 单位：ms
     * 该接口为同步方法，对于在线音频文件，获取时长会存在一定的耗时
     * @returns 音效文件的时长，单位：ms
     */
    static getDuration(filePath: string): number {
        return QNRtcAudioEffect.getDuration(filePath)
    }

    /**
     * 获取音效文件的唯一标识符
     * @returns 音效文件的唯一标识符
     */
    getID(): number {
        return QNRtcAudioEffect.getID(this.effectID)
    }

    /**
     * 获取音效文件的路径
     * @returns 音效文件路径
     */
    getFilePath(): string {
        return QNRtcAudioEffect.getFilePath(this.effectID)
    }

    /**
     * 设置音效混音的初始位置
     * @param position 混音位置，单位：ms
     */
    setStartPosition(position: number) {
        QNRtcAudioEffect.setStartPosition(this.effectID, position)
    }

    /**
     * 获取音效混音的初始位置
     * @returns 音效混音初始位置，单位：ms
     */
    getStartPosition(): number {
        return QNRtcAudioEffect.getStartPosition(this.effectID)
    }

    /**
     * 设置音效混音的循环次数
     * @param loopCount 循环次数，-1 为无限循环，0 则不做混音，其他则为指定次数的混音
     */
    setLoopCount(loopCount: number) {
        QNRtcAudioEffect.setLoopCount(this.effectID, loopCount)
    }

    /**
     * 获取音效混音的循环次数
     * @returns 循环次数
     */
    getLoopCount(): number {
        return QNRtcAudioEffect.getLoopCount(this.effectID)
    }
}