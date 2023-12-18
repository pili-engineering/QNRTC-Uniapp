## 概述

**QNRTC-Uniapp** 基于 **[QNRTC-Android](https://developer.qiniu.com/rtc/8764/an-overview-of-the-android-sdk)** 以及 **[QNRTC-iOS](https://developer.qiniu.com/rtc/8830/an-overview-of-the-ios-sdk)** 原生 SDK 。前端可通过 **QNRTC-Uniapp** 所提供的 JS 插件调用原生 Android 以及 iOS 的 RTC 接口来实现实时音视频通话。

## 云打包


> 需要在插件市场载入 [JS 插件](https://ext.dcloud.net.cn/plugin?id=6859) 以及 [Native 插件](https://ext.dcloud.net.cn/plugin?id=6857)。JS 插件主要负责处理加工原生返回的数据，便于使用者调用，Native 插件负责直接调用原生接口返回 JS 插件。


## 离线打包

```shell
    git clone git@github.com:pili-engineering/QNRTC-Uniapp.git
    cd QNRTC-Uniapp
```

#### 前端编译

1. `npm run build`
2. 将编译后的文件直接引入前端项目中使用即可


#### iOS 编译

1. 将 iOS 文件工程放到 uni-app 离线 SDK 对应的目录中 (**HBuilder-uniPluginDemo**)
2. 引入 uni-app 离线 SDK
    - 在 Xcode 中右键 **HBuilder-uniPlugin** 工程，并点击 **Add Files to "HBuilder-uniPlugin"**， 选中 **QNRtcUniPlugin.xcodeproj** 并添加
    - 在 Xcode 中点击 **HBuilder-uniPlugin** 工程，并点击 **HBuilder** Target，选中 **Build Phases**
    - 在 **Dependencies** 中添加 **QNRtcUniPlugin**
    - 在 **Link Binary With Libraries** 中添加 **QNRtcUniPlugin.framework**
    - 在 **Embed Frameworks** 中添加 **QNRTCKit.framework** **HappyDNS.framework**  （需要通过 **Add Other...** 选择 **ios/** 目录中的 **.framework** 文件添加）
3. 配置插件信息
搜索 **HBuilder-uniPlugin-Info.plist** ，右键 **open as source code** ，然后找到 **< key >dcloud_uniplugins< /key >** ，添加如下代码：
```xml
<dict>
    <key>hooksClass</key>
    <string></string>
    <key>plugins</key>
    <array>
        <dict>
            <key>class</key>
            <string>QNRtcEngine</string>
            <key>name</key>
            <string>QNRTC-UniPlugin-QNRtcEngine</string>
            <key>type</key>
            <string>module</string>
        </dict>
        <dict>
            <key>class</key>
            <string>QNRtcClient</string>
            <key>name</key>
            <string>QNRTC-UniPlugin-QNRtcClient</string>
            <key>type</key>
            <string>module</string>
        </dict>
        <dict>
            <key>class</key>
            <string>QNRtcAudioMixer</string>
            <key>name</key>
            <string>QNRTC-UniPlugin-QNRtcAudioMixer</string>
            <key>type</key>
            <string>module</string>
        </dict>
        <dict>
            <key>class</key>
            <string>QNRtcTrack</string>
            <key>name</key>
            <string>QNRTC-UniPlugin-QNRtcTrack</string>
            <key>type</key>
            <string>module</string>
        </dict>
        <dict>
            <key>class</key>
            <string>QNRtcAudio</string>
            <key>name</key>
            <string>QNRTC-UniPlugin-QNRtcAudio</string>
            <key>type</key>
            <string>module</string>
        </dict>
        <dict>
            <key>class</key>
            <string>QNRtcSurfaceView</string>
            <key>name</key>
            <string>QNRTC-UniPlugin-SurfaceView</string>
            <key>type</key>
            <string>component</string>
        </dict>
    </array>
</dict>
```

> 编译原生插件，请见 **uniapp** [官方文档](https://nativesupport.dcloud.net.cn/NativePlugin/course/ios)  
> 离线打包，请见 **uniapp** [官方文档](https://nativesupport.dcloud.net.cn/AppDocs/README)

#### Android 编译

1. 将 Android 文件夹中 **uniplugin_qndroid_rtc** 工程以 module 的形式导入到 uni-app 离线 SDK 对应的目录中 (UniPlugin-Hello-AS)，导入方式可参考[官方文档](https://developer.android.com/studio/projects/add-app-module?hl=zh-cn#ImportAModule)。
2. 将 Android 文件夹中 **QNRtcUniPlugin/android/libs** 目录下的 jar 文件放到 uni-app 离线 SDK 对应的 **app/libs/** 目录中，不同架构的 so 文件放到 **app/src/main/jniLibs/** 目录中，如无 jniLibs 目录，需手动创建。集成后的目录结构如下：
![单路流直播](https://docs.qnsdk.com/android_uniapp.png)

3. 在 settings.gradle 中添加
```
    include ':uniplugin_qndroid_rtc'
```
4. 在 app/build.gradle 中添加 
```
    implementation 'com.qiniu:happy-dns:0.2.18'
    implementation "com.google.code.gson:gson:2.8.8"
    implementation project(':uniplugin_qndroid_rtc')
```
5. 配置插件信息
```json
    {
    "nativePlugins": [
        {
        "plugins": [
            {
            "type": "module",
            "name": "QNRTC-UniPlugin-QNRtcEngine",
            "class": "uni.qiniu.droid.uniplugin_rtc.uni.module.QNRTCModule"
            }
        ]
        },
        {
        "plugins": [
            {
            "type": "module",
            "name": "QNRTC-UniPlugin-QNRtcClient",
            "class": "uni.qiniu.droid.uniplugin_rtc.uni.module.QNRTCClientModule"
            }
        ]
        },
        {
        "plugins": [
            {
            "type": "module",
            "name": "QNRTC-UniPlugin-QNRtcTrack",
            "class": "uni.qiniu.droid.uniplugin_rtc.uni.module.QNRTCTrackModule"
            }
        ]
        },
        {
        "plugins": [
            {
            "type": "module",
            "name": "QNRTC-UniPlugin-QNRtcAudioMixer",
            "class": "uni.qiniu.droid.uniplugin_rtc.uni.module.QNRTCAudioMixerModule"
            }
        ]
        },
        {
        "plugins": [
            {
            "type": "module",
            "name": "QNRTC-UniPlugin-QNRtcAudioMusicMixer",
            "class": "uni.qiniu.droid.uniplugin_rtc.uni.module.QNRTCAudioMusicMixerModule"
            }
        ]
        },
        {
        "plugins": [
            {
            "type": "module",
            "name": "QNRTC-UniPlugin-QNRtcAudioEffectMixer",
            "class": "uni.qiniu.droid.uniplugin_rtc.uni.module.QNRTCAudioEffectMixerModule"
            }
        ]
        },
        {
        "plugins": [
            {
            "type": "module",
            "name": "QNRTC-UniPlugin-QNRtcAudioEffect",
            "class": "uni.qiniu.droid.uniplugin_rtc.uni.module.QNRTCAudioEffectModule"
            }
        ]
        },
        {
        "plugins": [
            {
            "type": "component",
            "name": "QNRTC-UniPlugin-SurfaceView",
            "class": "uni.qiniu.droid.uniplugin_rtc.uni.component.QNRTCSurfaceView"
            }
        ]
        },
        {
        "plugins": [
            {
            "type": "component",
            "name": "QNRTC-UniPlugin-TextureView",
            "class": "uni.qiniu.droid.uniplugin_rtc.uni.component.QNRTCTextureView"
            }
        ]
        }
    ]
    }
```
6. 配置 proguard-rules.pro
4.x
```
-keep class org.webrtc.** {*;}
-dontwarn org.webrtc.**
-keep class com.qiniu.droid.rtc.**{*;}
-keep interface com.qiniu.droid.rtc.**{*;}
```

5.x
```
-keep class org.qnwebrtc.** {*;}
-dontwarn org.qnwebrtc.**
-keep class com.qiniu.droid.rtc.**{*;}
-keep interface com.qiniu.droid.rtc.**{*;}
```

> 编译原生插件，请见 **uniapp** [官方文档](https://nativesupport.dcloud.net.cn/NativePlugin/course/android)  
> 离线打包，请见 **uniapp** [官方文档](https://nativesupport.dcloud.net.cn/AppDocs/README)

## 生成原生插件包

通过配置 **package.json** 并将编译后的 **Android** 与 **iOS** 的插件包，按照固定格式与配置放入文件夹中，即可生成原生插件，详情请见官方文档：

1. [Android 插件配置](https://nativesupport.dcloud.net.cn/NativePlugin/course/android?id=%e7%94%9f%e6%88%90uni-app%e6%8f%92%e4%bb%b6)
2. [iOS 插件配置](https://nativesupport.dcloud.net.cn/NativePlugin/course/ios?id=%e7%94%9f%e6%88%90%e6%8f%92%e4%bb%b6%e5%8c%85)

## 如何使用

#### 发布轨

```typescript
// 初始化
QNRTC.init()
// 创建视频轨
this.cameraVideoTrack = QNRTC.createCameraVideoTrack()
// 创建核心类
const client = QNRTC.createClient()
// 加入房间
client.join(RoomToken)
// 发布轨
client.publish(this.cameraVideoTrack, (onPublished, error) => {)
```

```html
<!--预览本地视频轨-->
<QNRTC-UniPlugin-SurfaceView :local="0" :identifyID="cameraVideoTrack.identifyID" :trackID="cameraVideoTrack.trackID"></QNRTC-UniPlugin-SurfaceView>
```

#### 订阅轨

```typescript
// 初始化
QNRTC.init()
// 创建核心类
const client = QNRTC.createClient()
// 监听音频轨订阅事件
client.on("onAudioSubscribed", (params) => {})
// 监听视频轨订阅事件
client.on("onVideoSubscribed", (params) => {
    for (let i of params.trackList) {
        this.remoteTracks.push(i)
    }
})
// 加入房间
client.join(RoomToken)
```

```html
<!--预览远端视频轨-->
<QNRTC-UniPlugin-SurfaceView v-for="(item,index) in remoteTracks" :key="item.identifyID" :local="1" :identifyID="item.identifyID" :userID="item.userID" :trackID="item.trackID"></QNRTC-UniPlugin-SurfaceView>
```

* 如果您还不知道如何生成 RoomToken，请先阅读 [RoomToken 签发服务](https://developer.qiniu.com/rtc/8813/roomToken)。
* 具体使用方法可参考[官方文档](https://developer.qiniu.com/rtc/11847/an-overview-of-the-uniapp-sdk)。
* 具体示例 demo 可参考[QNRTC-Uniapp-Demo](https://github.com/pili-engineering/QNRTC-Uniapp/tree/main/demo)。

## FAQ

#### 实时通话功能是否收费？

客户端 SDK 不收费，服务端可按照带宽、流量或者时长收费，具体请联系七牛商务或者技术支持。

#### 实时通话对讲延时多大？

正常网络条件下，对讲延时在 200-300ms 左右。

#### 是否有服务端的 SDK 或者 demo 代码可以参考？

有的，请参考： [QNRTC-Server](https://doc.qnsdk.com/rtn/docs/server_sdk)
