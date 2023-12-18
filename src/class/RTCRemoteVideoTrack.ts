import { QNRemoteTrack } from './RTCRemoteTrack'
import { QNTrackProfile } from '../interface/RTCInterface'

const QNRtcTrack = uni.requireNativePlugin('QNRTC-UniPlugin-QNRtcTrack')
const QNEvent = uni.requireNativePlugin('globalEvent')
export class QNRemoteVideoTrack extends QNRemoteTrack {
  /**
   * 设置当前视频轨道质量等级
   * @param profile 质量等级
   */
  setProfile(profile: QNTrackProfile): void {
    return QNRtcTrack.setProfile(this.identifyID, profile)
  }

  /**
   * 获取当前 track 是否开启了大小流发布
   * @returns 1 开启 0 未开启
   */
  isMultiProfileEnabled(): number {
    return QNRtcTrack.isMultiProfileEnabled(this.identifyID)
  }

  /**
   * 获取当前视频轨道的分辨率等级
   */
  getProfile(): QNTrackProfile {
    return QNRtcTrack.getProfile(this.identifyID)
  }

  /**
   * 截图
   */
  async takeVideoSnapshot(): Promise<{ base64: string; rotate?: number }> {
    //@ts-ignore
    const { platform } = uni.getSystemInfoSync()
    if (platform === 'ios') {
      return new Promise((resolve, reject) => {
        QNRtcTrack.takeVideoSnapshot(this.identifyID)
        const listener = (param: { data: string }) => {
          QNEvent.removeEventListener('onLocalVideoFrame', listener)
          resolve({ base64: this.trimBase64(param.data) })
        }
        QNEvent.addEventListener('onLocalVideoFrame', listener)
        // 5秒未有数据范围则认为失败
        setTimeout(() => {
          QNEvent.removeEventListener('onLocalVideoFrame', listener)
          reject()
        }, 5000)
      })
    } else if (platform === 'android') {
      return new Promise((resolve, reject) => {
        QNRtcTrack.takeVideoSnapshot(this.trackID, (data: { base64: string; rotate: number }) => {
          resolve(data)
        })
      })
    }
  }

  /**
   * 去除图片base64字符串中的\r \n 防止图片解析出错
   * @param base64 需要去除\r \n的图片base64字符串
   * @returns 去除\r \n后的base64字符串
   */
  private trimBase64(base64: string): string {
    if (!base64) {
      return ''
    }
    return base64.replace(/\r|\n/g, '')
  }
}
