import { QNLocalTrack } from './RTCLocalTrack'
import { QNVideoEncoderConfig, QNVideoFormatDefault } from '../interface/RTCInterface'
import { QNDegradationPreference } from '../enum/RTCEnum'

const QNRtcTrack = uni.requireNativePlugin('QNRTC-UniPlugin-QNRtcTrack')

const isQNVideoEncoderConfig = (
  preset: QNVideoEncoderConfig | QNVideoFormatDefault
): preset is QNVideoEncoderConfig => {
  return (preset as QNVideoEncoderConfig).prefer !== undefined
}

const isQNVideoFormatDefault = (
  preset: QNVideoEncoderConfig | QNVideoFormatDefault
): preset is QNVideoFormatDefault => {
  return (preset as QNVideoFormatDefault) in QNVideoFormatDefault
}

export class QNLocalVideoTrack extends QNLocalTrack {
  /**
   * 发送 SEI
   * @param message 消息内容
   * @param repeatCount 重复次数，-1 为每一帧都发送
   * @param uuid 唯一 ID
   * @note 需要注意的是 android 需要 byte 转换
   */
  sendSEI(message: string, repeatCount: number, uuid?: string): void {
    return QNRtcTrack.sendSEI(this.identifyID, message, repeatCount, uuid)
  }

  /**
   * 动态修改视频 Track 的编码参数
   * @since 5.2.5
   * @remarks 该接口用于在通话过程中动态修改视频的编码参数，若您无需修改，可在创建视频 Track 时通过对应的 TrackConfig 直接指定编码参数
   * 建议修改时目标编码分辨率小于采集的分辨率。当目标编码分辨率大于采集分辨率时，SDK 会基于采集分辨率裁剪输出一个和目标编码分辨率宽高比相匹配，但小于等于采集分辨率的参数
   */
  setVideoEncoderConfig(preset: QNVideoEncoderConfig): void
  setVideoEncoderConfig(preset: QNVideoFormatDefault): void
  setVideoEncoderConfig(preset: QNVideoFormatDefault, prefer: QNDegradationPreference): void
  setVideoEncoderConfig(
    preset: QNVideoEncoderConfig | QNVideoFormatDefault,
    prefer?: QNDegradationPreference
  ) {
    if (isQNVideoEncoderConfig(preset)) {
      QNRtcTrack.setVideoEncoderConfig(this.identifyID, preset)
    } else if (isQNVideoFormatDefault(preset)) {
      if (prefer === undefined) {
        QNRtcTrack.setVideoEncoderConfigPreset(this.identifyID, preset)
      } else {
        QNRtcTrack.setVideoEncoderConfigPreset(this.identifyID, preset, prefer)
      }
    }
  }
}
