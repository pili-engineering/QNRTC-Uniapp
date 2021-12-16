import QNLocalVideoTrack from './RTCLocalVideoTrack';
/**
 * 屏幕录制轨
 */
export default class QNScreenVideoTrack extends QNLocalVideoTrack {
    /**
     * 设置屏幕录制的帧率
     * @remarks 默认值 20
     * @param screenRecorderFrameRate 帧率
     */
    setScreenRecorderFrameRate(screenRecorderFrameRate: number): void;
}
