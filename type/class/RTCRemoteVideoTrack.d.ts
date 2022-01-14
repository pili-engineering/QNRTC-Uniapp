import { QNRemoteTrack } from './RTCRemoteTrack';
import { QNTrackProfile } from '../interface/RTCInterface';
/**
 * 远端视频轨
 */
export declare class QNRemoteVideoTrack extends QNRemoteTrack {
    /**
     * 设置当前视频轨道质量等级
     * @param profile 质量等级
     */
    setProfile(profile: QNTrackProfile): void;
    /**
     * 获取当前 track 是否开启了大小流发布
     * @returns 1 开启 0 未开启
     */
    isMultiProfileEnabled(): number;
    /**
     * 获取当前视频轨道的分辨率等级
     * @returns 分辨率等级
     */
    getProfile(): QNTrackProfile;
}
