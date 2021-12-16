import QNRemoteTrack from './RTCRemoteTrack'
import { QNTrackProfile } from '../interface/RTCInterface'

// @ts-ignore
// eslint-disable-next-line no-undef
const QNRtcTrack = uni.requireNativePlugin('QNRTC-UniPlugin-QNRtcTrack')

/**
 * 远端视频轨
 */
export default class QNRemoteVideoTrack extends QNRemoteTrack {
  /**
   * 设置当前视频轨道质量等级
   * @param profile 质量等级
   */
  setProfile (profile: QNTrackProfile): void {
    return QNRtcTrack.setProfile(this.identifyID, profile)
  }

  /**
   * 获取当前 track 是否开启了大小流发布
   * @returns 1 开启 0 未开启
   */
  isMultiProfileEnabled (): number {
    return QNRtcTrack.isMultiProfileEnabled(this.identifyID)
  }

  /**
   * 获取当前视频轨道的分辨率等级
   * @returns 分辨率等级
   */
  getProfile (): QNTrackProfile {
    return QNRtcTrack.getProfile(this.identifyID)
  }
}
