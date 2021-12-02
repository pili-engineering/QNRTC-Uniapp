import QNRemoteTrack from './RTCRemoteTrack'
import { QNTrackProfile } from '../interface/RTCInterface'

// @ts-ignore
// eslint-disable-next-line no-undef
const QNRtcTrack = uni.requireNativePlugin('QNRtcUniPlugin-QNRtcTrack')
export default class QNRemoteVideoTrack extends QNRemoteTrack {
  /**
   * setProfile
   * @description 设置当前视频轨道质量等级
   * @param { QNTrackProfile } profile 质量等级
   * @returns { void }
   */
  setProfile (profile: QNTrackProfile): void {
    return QNRtcTrack.setProfile(this.identifyID, profile)
  }

  /**
   * isMultiProfileEnabled
   * @description 获取当前 track 是否开启了大小流发布
   * @returns { number } 1 开启 0 未开启
   */
  isMultiProfileEnabled (): number {
    return QNRtcTrack.isMultiProfileEnabled(this.identifyID)
  }

  /**
   * getProfile
   * @description 获取当前视频轨道的分辨率等级
   * @returns { QNTrackProfile }
   */
  getProfile (): QNTrackProfile {
    return QNRtcTrack.getProfile(this.identifyID)
  }
}
