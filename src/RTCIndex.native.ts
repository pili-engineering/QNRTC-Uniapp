
/**
 * 七牛 UniApp 原生插件
 * @remarks
 * QNRTC-Uniapp 是基于 {@link https://uniapp.dcloud.io/ | UNIAPP}、 {@link https://developer.qiniu.com/rtc/8764/an-overview-of-the-android-sdk | QNRTC-Android} 以及 {@link https://developer.qiniu.com/rtc/8830/an-overview-of-the-ios-sdk | QNRTC-iOS} 三者所实现的。
 * 
 * 前端可通过 QNRTC-Uniapp 所提供的 JS 插件调用原生 Android 以及 iOS 的 RTC 接口来实现实时音视频通话。
 * 
 * @packageDocumentation
 */

import QNRTC from './class/RTCEngine'
export default QNRTC

export * from './enum/RTCEnum'
export * from './interface/RTCInterface'
export * from './RTCEvent'
export { QNPublishResultCallback, QNScreenPermissionResultCallback } from './RTCPreset'
export * from './class/RTCClient'
export * from './class/RTCCameraVideoTrack'
export * from './class/RTCLocalAudioTrack'
export * from './class/RTCLocalTrack'
export * from './class/RTCLocalVideoTrack'
export * from './class/RTCMicrophoneAudioTrack'
export * from './class/RTCRemoteAudioTrack'
export * from './class/RTCRemoteTrack'
export * from './class/RTCRemoteVideoTrack'
export * from './class/RTCScreenVideoTrack'
export * from './class/RTCTrack'