## 概述

**QNRTC-Uniapp** 是基于 **[UNIAPP](https://uniapp.dcloud.io/)**、 **[QNRTC-Android](https://developer.qiniu.com/rtc/8764/an-overview-of-the-android-sdk)** 以及 **[QNRTC-iOS](https://developer.qiniu.com/rtc/8830/an-overview-of-the-ios-sdk)** 三者所实现的。前端可通过 **QNRTC-Uniapp** 所提供的 JS 插件调用原生 Android 以及 iOS 的 RTC 接口来实现实时音视频通话。

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
            <string>QNRtcUniPlugin-QNRtcEngine</string>
            <key>type</key>
            <string>module</string>
        </dict>
        <dict>
            <key>class</key>
            <string>QNRtcClient</string>
            <key>name</key>
            <string>QNRtcUniPlugin-QNRtcClient</string>
            <key>type</key>
            <string>module</string>
        </dict>
        <dict>
            <key>class</key>
            <string>QNRtcTrack</string>
            <key>name</key>
            <string>QNRtcUniPlugin-QNRtcTrack</string>
            <key>type</key>
            <string>module</string>
        </dict>
        <dict>
            <key>class</key>
            <string>QNRtcAudio</string>
            <key>name</key>
            <string>QNRtcUniPlugin-QNRtcAudio</string>
            <key>type</key>
            <string>module</string>
        </dict>
        <dict>
            <key>class</key>
            <string>QNRtcSurfaceView</string>
            <key>name</key>
            <string>surfaceView</string>
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
                "name": "QNRtcUniPlugin-QNRtcEngine",
                "class": "uni.qiniu.droid.uniplugin_rtc.uni.module.QNRTCModule"
                }
            ]
            },
            {
            "plugins": [
                {
                "type": "module",
                "name": "QNRtcUniPlugin-QNRtcClient",
                "class": "uni.qiniu.droid.uniplugin_rtc.uni.module.QNRTCClientModule"
                }
            ]
            },
            {
            "plugins": [
                {
                "type": "module",
                "name": "QNRtcUniPlugin-QNRtcTrack",
                "class": "uni.qiniu.droid.uniplugin_rtc.uni.module.QNRTCTrackModule"
                }
            ]
            },
            {
            "plugins": [
                {
                "type": "component",
                "name": "surfaceView",
                "class": "uni.qiniu.droid.uniplugin_rtc.uni.component.QNRTCSurfaceView"
                }
            ]
            },
            {
            "plugins": [
                {
                "type": "component",
                "name": "textureView",
                "class": "uni.qiniu.droid.uniplugin_rtc.uni.component.QNRTCTextureView"
                }
            ]
            }
        ]
    }
```

> 编译原生插件，请见 **uniapp** [官方文档](https://nativesupport.dcloud.net.cn/NativePlugin/course/android)  
> 离线打包，请见 **uniapp** [官方文档](https://nativesupport.dcloud.net.cn/AppDocs/README)

## 生成原生插件包

通过配置 **package.json** 并将编译后的 **Android** 与 **iOS** 的插件包，按照固定格式与配置放入文件夹中，即可生成原生插件，详情请见官方文档：

1. [Android 插件配置](https://nativesupport.dcloud.net.cn/NativePlugin/course/android?id=%e7%94%9f%e6%88%90uni-app%e6%8f%92%e4%bb%b6)
2. [iOS 插件配置](https://nativesupport.dcloud.net.cn/NativePlugin/course/ios?id=%e7%94%9f%e6%88%90%e6%8f%92%e4%bb%b6%e5%8c%85)

## 使用指南
如果您已经完成了上文中提到的开发准备，现在就让我们开始编写一个基本的实时音视频应用吧。这个应用会展示 SDK 基本的连麦功能，包括 加入房间，采集，发布，订阅 等过程。但是在实际的连麦应用开发过程中，是需要后端介入的（用于给用户鉴权并生成 RoomToken），如果您还不知道如何生成 RoomToken，请先阅读 [RoomToken 签发服务](https://developer.qiniu.com/rtc/8813/roomToken)。

#### 初始化 SDK
> 必须在使用其它接口前调用
```typescript
QNRTC.configRTC()
```

#### 添加原生 component 组件

添加音视频通话需要的原生组件

```html
<surfaceView class="track-video" v-for="(item,index) in localTracks" :key="item.identifyID" v-if="item.kind === 'video'" :local="0" :identifyID="item.identifyID" fillMode="QNVideoFillModePreserveAspectRatioAndFill" :trackID="item.trackID"></surfaceView>
<surfaceView class="track-video" v-for="(item,index) in remoteTracks" :key="item.identifyID" v-if="item.kind === 'video'" :local="1" :identifyID="item.identifyID" :userID="item.userID" fillMode="QNVideoFillModePreserveAspectRatioAndFill" :trackID="item.trackID"></surfaceView>
```

- local:  0 本地 track 视图，1 远端 track 视图
- identifyID: uniapp 中每个 track 的唯一标识符
- trackID: 服务器对于每个 track 的唯一标识符（track 未发布时该值为""）
- userID 发布该 track 的 用户 ID（local = 1 时需要该属性）
- fillMode 对应视图层的渲染模式（暂时只支持iOS）


#### 采集音视频轨

这里我们将要采集 3 个音视频轨，分别是 **摄像头视频轨** 和 **麦克风音频轨** 以及 **录屏轨**。

```typescript
const cameraVideoTrack = QNRTC.createCameraVideoTrack()
const microphoneAudioTrack = QNRTC.createMicrophoneAudioTrack()
if(QNRTC.isScreenCaptureSupported()) {
    if(uni.getSystemInfoSync().platform === 'android') {
        QNRTC.requestPermission((result) => {
            if(result) {
                const screenVideoTrack = QNRTC.createScreenVideoTrack()
            }else {
                uni.showModal({
                    content: "无法录屏"
                })
            }
        })
    }else {
        const screenVideoTrack = QNRTC.createScreenVideoTrack()
    }
}
```

> 可以创建录屏轨前需要判断设备是否支持录屏，并且如果是安卓的话，需要先申请录屏权限，当原生返回成功时，才能成功创建录屏轨。

#### 加入房间

上文提到过，SDK 所有的功能都是从 RoomToken 开始的，所以加入房间只需要将 RoomToken 作为参数传给 SDK 就可以成功进入房间。

```typescript
const RoomToken = "...."
const client = QNRTC.createClient()
client.join(RoomToken)
```
> 加入房间成功后会触发 **QNRTCClientEvent.onConnectionStateChanged** 回调 **QNConnectionState.CONNECTED** 状态。此时即可进行发布、订阅等操作。

#### 发布本地音视频轨

成功加入房间后，即可在 **QNRTCClientEvent.onConnectionStateChanged** 回调中调用以下代码进行本地 Track 的发布。

```typescript
this.client.on("onConnectionStateChanged", ({
    state
}) => {
    if (state === QNConnectionState.CONNECTED) {
        this.client.publish(this.localTracks, ({
            onPublished,
            data,
            info
        }) => {
            if (onPublished) {
                // ...
            } else {
                // ...
            }
        })
    }
})
```

发布成功后，本地通过回调获得发布成功的结果。而远端用户则会通过 **QNRTCClientEvent.onUserPublished** 收到发布成功的回调。

#### 订阅远端音视频 Track

SDK 默认会进行自动订阅，订阅成功后根据媒体类型收到 **QNRTCClientEvent.onAudioSubscribed** 或者 **QNRTCClientEvent.onVideoSubscribed** 的回调，然后通过原生组件传入对应参数，实现远端窗口显示。

```typescript
this.client.on("onAudioSubscribed", (params) => {
    for (let i of params.trackList) {
        this.remoteTracks.push(i)
    }
})
this.client.on("onVideoSubscribed", (params) => {
    for (let i of params.trackList) {
        this.remoteTracks.push(i)
    }
})
```

#### 离开房间

在进入音视频通话房间之后，用户可以根据业务场景的需求在适当的时间调用离开房间的接口退出连麦。例如客户端踢人：

```typescript
client.on("onMessageReceived", (params) => {
    if(params.content === "kickOut") {
        client.leave()
    }
})
```

#### 销毁

在整个页面销毁时，用户需要调用以下代码对资源进行释放，一般此操作建议在页面生命周期 *onUnload* 和 *onBackPress* 中进行，示例代码如下：

```typescript
onUnload() {
    this.client.leave()
    QNRTC.deinit()
}
onBackPress() {
    this.client.leave()
    QNRTC.deinit()
}
```

#### CDN 转推

CDN 转推可实现直播场景的功能，实时音视频场景下的直播主要包括三个部分：单路流直播、多路流合流直播以及两者结合可切换的直播场景。

> CDN 转推需要配置本地或者远端的音视频 Track，因此，调用转推接口前请务必保证已加入房间，且已发布或者订阅了相应的音视频 Track。

下面将会对这三种场景的使用姿势进行分别说明。

- 设置监听

```typescript
    // 合流转推出错的回调
    client.on("onErrorLiveStreaming",(params) => {
        console.log(params.streamID, params.info)
    })
    // 更新合流布局的回调
    client.on("onUpdatedLiveStreaming",(params) => {
        console.log(params.streamID)
    })
    // 停止转推/合流转推任务的回调
    client.on("onStoppedLiveStreaming",(params) => {
        console.log(params.streamID)
    })
    // 成功创建转推/合流转推任务的回调
    client.on("onStartLiveStreaming",(params) => {
        console.log(params.streamID)
    })
```

设置好监听事件后，便可以基于实际业务场景进行单路转推或者合流转推任务的创建和使用了。

- 单路流直播场景

单路流直播的场景，顾名思义，就是将一条音视频流直接转推到直播服务器，主要适用于`不包含连麦的秀场直播`、`连麦中需要将某一路流单独转推落存储`等场景。

> 安卓不支持推远端 Track

场景示意图如下：

![单路流直播](http://docs.qnsdk.com/forward_job.jpg)

相关配置及创建转推任务的示例代码如下：

```typescript
    const directLiveStreamingConfig: QNDirectLiveStreamingConfig = {
        // 设置 stream id，该 id 为合流任务的唯一标识符
        streamID: roomName,
        // 设置推流地址
        publishUrl: "publish url",
        // 设置单路流中的音频轨，仅支持一路音频的设置，重复设置会被覆盖
        audioTrack: microphoneAudioTrack,
        // 设置单路流中的视频轨，仅支持一路视频的设置，重复设置会被覆盖
        videoTrack: cameraVideoTrack
    }
    // 开始进行单路转推
    rtcClient.startLiveStreamingWithDirect(directLiveStreamingConfig);
```

单路转推任务创建成功后，会触发 ***QNRTCClientEvent.startLiveStreaming*** 回调接口。

创建成功后，就可以通过相应的播放链接拉取直播流进行观看了。

> 注意: QNDirectLiveStreamingConfig 仅支持配置一路视频轨和一路音频轨，重复设置将会被覆盖  

调用 QNRTCClient.stopLiveStreamingWithDirect 实现单路转推任务的停止：

```typescript
    rtcClient.stopLiveStreamingWithDirect(directLiveStreamingConfig);
```

单路转推任务创建成功后，会触发 ***QNRTCClientEvent.stoppedLiveStreaming*** 回调接口。

停止转推成功后，相应的播放链接直播流就无法观看了。

- 多路流合流直播场景

多路流合流直播场景，主要适用于**连麦互动直播**、**PK 直播**以及**单主播需要两路以上视频合流转推**等场景。简单来说，就是对连麦各方的视频画面进行合流，然后转推。这种场景相较于纯直播场景的单路流转推会复杂一些。

场景示意图如下：

![多路流合流直播](http://docs.qnsdk.com/merge_job.jpg)

为了实现该场景，首先，需要了解下相关配置类及其作用：

- **QNTranscodingLiveStreamingConfig** 用于配置合流的基本参数，包括任务 id、推流地址、合流的宽高、码率等信息。
- **QNTranscodingLiveStreamingTrack** 用于配置参与 CDN 合流的每一路媒体 track 在合流画布中的位置、大小等信息。

了解上述概念后，该场景的主要实现步骤如下：


##### 创建 QNTranscodingLiveStreamingConfig

```typescript
const backgroundTranscodingLiveStreamingImage: QNTranscodingLiveStreamingImage = {
    x: 0,
    y: 0,
    w: 600,
    h: 480,
    url: "background url"
}
const watermarksTranscodingLiveStreamingImages: QNTranscodingLiveStreamingImage[] = [{
    x: 0,
    y: 0,
    w: 100,
    h: 100,
    url: "watermark url"
}]
const transcodingLiveStreamingConfig = {
    streamID: "mstreamid-1", // 设置 stream id，该 id 为合流任务的唯一标识符
    url: "publish url", // 设置合流任务的推流地址
    width: 600, // 设置合流画布的宽度
    height: 480, // 设置合流画布的高度
    videoFrameRate: 20, // 设置合流任务的视频帧率
    bitrate: 1000, // 设置合流任务的码率，单位: kbps
    minBitrate: 1000,  // 最小码率
    maxBitrate: 1000,  // 最大码率
    renderMode: QNRenderMode.ASPECT_FILL, // 设置合流任务的默认画面填充方式
    background: backgroundTranscodingLiveStreamingImage, // 设置合流画布背景图片的x轴y轴宽高和url信息，图片仅支持 HTTP
    watermarks: watermarksTranscodingLiveStreamingImages // 设置合流合流任务的水印的x轴y轴宽高和url信息
}

Client.startLiveStreamingWithTranscoding(transcodingLiveStreamingConfig); // 开始转推
```

##### 设置合流布局

合流任务创建成功之后，就可以基于用户发布的 track 进行合流布局的配置了。操作示例代码如下：

```typescript
const transcodingLiveStreamingTracks: QNTranscodingLiveStreamingTrack[] = [{
    trackID: "xxx", // 设置待合流 track id
    x: 220, // 设置 track 画面在合流画面中位置的 x 轴坐标
    y: 220, // 设置 track 画面在合流画面中位置的 y 轴坐标
    width: 200, // 设置 track 画面在合流画面中位置宽度
    height: 200 // 设置 track 画面在合流画面中位置高度
    zOrder: 100, // 设置 track 画面在合流画面中的 zOrder 层级
    renderMode: QNRenderMode.ASPECT_FILL, // track 画面合流时的填充方式
    SEIEnabled: false // 是否发送 sei
}]
```

通过上述代码创建 **QNTranscodingLiveStreamingTrack** ，就可以进行布局的配置了：

```typescript
client.setTranscodingLiveStreamingTracks("mstreamid-1", transcodingLiveStreamingTracks);
```

当期望取消某路合流布局时，可以通过如下调用实现：

```typescript
await client.removeTranscodingLiveStreamingTracks("mstreamid-1", transcodingLiveStreamingTracks);
```

##### 停止合流直播

可以通过如下方式实现合流转推任务的停止：

```typescript
await client.stopLiveStreamingWithTranscoding(streamID);
```

合流转推任务停止成功后，会触发上述 `onStoppedLiveStreaming` 事件，

- 单路流、多路流合流二者切换的场景

单路流、多路流合流二者切换的场景，主要适用于**有连麦需求的秀场直播**等场景，能够满足主播在自己单路流直播和连麦两路流合流直播二者间切换的需求。对于该场景的实现，需要注意的问题是，在两种场景切换的过程中，如何保证观看端不会断流黑屏。

为了避免切换过程中断流黑屏的问题，这里我们七牛直播云引入 **serialnum** 的概念，支持 **serialnum** 决定流的优先级，值越大，优先级越高，可以帮助更好的实现两路流的平滑切换：

1. **QNDirectLiveStreamingConfig** 和 **QNTranscodingLiveStreamingConfig** 两种任务场景推流地址需要保持一致，以避免播放端需要实现多余的切流操作
2. 由于上述完全一致的地址可能会导致抢流的现象出现，所以需要在推流地址后面加上 **serialnum** 的参数，如 "rtmp://domain/app/streamName?serialnum=xxx"，其中，**serialnum** 决定流的优先级，值越大，优先级越高，便不会出现抢流的现象。也基于此，合流任务必须使用自定义合流任务，以便自定义推流地址。

## 示例 demo

[QNRTC-Uniapp-Demo](https://github.com/pili-engineering/QNRTC-Uniapp/tree/main/demo)
