import { QNRemoteTrack } from './RTCRemoteTrack';
/**
 * 远端音频轨
 */
export declare class QNRemoteAudioTrack extends QNRemoteTrack {
    /**
     * 设置音量
     * @remarks 设置当前 Track 播放音量大小
     * @param volume 音量值 默认 1 范围 [0,10]
     */
    setRemoteVolume(volume: number): void;
    /**
     * 获取音量
     * @remarks 获取当前 Track 播放的音量大小，只支持安卓
     * @returns 音量值
     */
    getRemoteVolume(): number;
}
