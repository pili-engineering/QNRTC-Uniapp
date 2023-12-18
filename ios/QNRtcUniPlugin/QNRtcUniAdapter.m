//
//  QNRtcUniAdapter.m
//  QNRtcUniPlugin
//
//  Created by 童捷 on 2021/10/8.
//  Copyright © 2020 DCloud. All rights reserved.
//


#import "QNRtcUniAdapter.h"
#import "QNRtcTools.h"
#import "QNRtcLocalTrack.h"

@implementation QNRtcUniAdapter

+ (QNRTCConfiguration *)getNativeConfig:(NSDictionary *)uniConfig {
    QNRTCConfiguration *nativeConfig;
    
    if (uniConfig.count > 0) {
        QNRTCPolicy policy = QNRTCPolicyForceUDP;
        QNAudioScene audioScene = QNAudioSceneDefault;
        NSNumber *reconnectionTimeout = @30000;
        QNVideoEncoderType encoderType = QNVideoEncoderToolboxH264;

        NSNumber *allowAudioMixWithOthersNum = [QNRtcTools getObject:@"hWCodecEnabled" fromDic:uniConfig objClass:[NSNumber class]];
        if (allowAudioMixWithOthersNum.boolValue == NO) {
            encoderType = QNVideoEncoderOpenH264;
        }
        
        NSString *policyStr = [QNRtcTools getObject:@"policy" fromDic:uniConfig objClass:[NSString class]];
        if (policyStr) {
            if ([policyStr isEqualToString:@"forceUDP"]) {
                policy = QNRTCPolicyForceUDP;
            } else if ([policyStr isEqualToString:@"forceTCP"]) {
                policy = QNRTCPolicyForceTCP;
            } else if ([policyStr isEqualToString:@"preferUDP"]) {
                policy = QNRTCPolicyPreferUDP;
            } else {
                policy = QNRTCPolicyForceUDP;
            }
        }

        NSString *audioSceneStr = [QNRtcTools getObject:@"audioScene" fromDic:uniConfig objClass:[NSString class]];
        if (audioSceneStr) {
            if ([audioSceneStr isEqualToString:@"DEFAULT"]) {
                audioScene = QNAudioSceneDefault;
            } else if ([policyStr isEqualToString:@"VOICE_CHAT"]) {
                audioScene = QNAudioSceneVoiceChat;
            } else if ([policyStr isEqualToString:@"SOUND_EQUALIZE"]) {
                audioScene = QNAudioSceneSoundEqualize;
            }
        }

        NSNumber *reconnectionTimeoutNum = [QNRtcTools getObject:@"reconnectionTimeout" fromDic:uniConfig objClass:[NSNumber class]];
        if (reconnectionTimeoutNum) reconnectionTimeout = reconnectionTimeoutNum;
        
        nativeConfig = [[QNRTCConfiguration alloc] initWithPolicy:policy
                                                            audioScene:audioScene
                                                         reconnectionTimeout:reconnectionTimeout
                                           encoderType:encoderType];
    } else {
        nativeConfig = [QNRTCConfiguration defaultConfiguration];
    }
    
    return nativeConfig;
}

+ (QNMicrophoneAudioTrackConfig *)getNativeMicrophoneAudioTrackConfig:(NSDictionary *)uniMicrophoneAudioTrackConfig {
    if ([uniMicrophoneAudioTrackConfig count] > 0) {
        NSString *tag = [QNRtcTools getObject:@"tag" fromDic:uniMicrophoneAudioTrackConfig objClass:[NSString class]];
        NSNumber *bitrate = [QNRtcTools getObject:@"bitrate" fromDic:uniMicrophoneAudioTrackConfig objClass:[NSNumber class]];
        
        QNAudioQuality *audioQuality = [[QNAudioQuality alloc] initWithBitrate: (bitrate && (bitrate.unsignedIntegerValue > 64))];
        
        QNMicrophoneAudioTrackConfig *nativeMicrophoneAudioTrackConfig = [[QNMicrophoneAudioTrackConfig alloc] initWithTag:tag ? tag : @"" audioQuality: audioQuality];
        return nativeMicrophoneAudioTrackConfig;
    }
    return nil;
}

+ (QNClientConfig *)getNativeClientConfig:(NSDictionary *)uniClientConfig {
    if ([uniClientConfig count] > 0) {
        QNClientMode nativeMode = QNClientModeRTC;
        QNClientRole nativeRole = QNClientRoleBroadcaster;

        NSString *uniMode = [QNRtcTools getObject:@"mode" fromDic:uniClientConfig objClass:[NSString class]];
        if ([uniMode isEqualToString:@"RTC"]) {
            nativeMode = QNClientModeRTC;
        } else if ([uniMode isEqualToString:@"LIVE"]) {
            nativeMode = QNClientModeLive;
        }

        NSString *uniRole = [QNRtcTools getObject:@"role" fromDic:uniClientConfig objClass:[NSNumber class]];
        if ([uniRole isEqualToString:@"BROADCASTER"]) {
            nativeRole = QNClientRoleBroadcaster;
        } else if ([uniRole isEqualToString:@"AUDIENCE"]) {
            nativeRole = QNClientRoleAudience;
        }

        QNClientConfig *clientConfig = [[QNClientConfig alloc] initWithMode:nativeMode role:nativeRole];
        return clientConfig;
    }
    return nil;
}

+ (QNCustomAudioTrackConfig *)getNativeCustomAudioTrackConfig:(NSDictionary *)uniCustomAudioTrackConfig {
    if ([uniCustomAudioTrackConfig count] > 0) {
        NSString *tag = [QNRtcTools getObject:@"tag" fromDic:uniCustomAudioTrackConfig objClass:[NSString class]];
        NSNumber *bitrate = [QNRtcTools getObject:@"bitrate" fromDic:uniCustomAudioTrackConfig objClass:[NSNumber class]];
        
        QNAudioQuality *audioQuality = [[QNAudioQuality alloc] initWithBitrate: (bitrate && (bitrate.unsignedIntegerValue > 64)) ? bitrate.unsignedIntegerValue : 64];
        
        QNCustomAudioTrackConfig *nativeCustomAudioTrackConfig = [[QNCustomAudioTrackConfig alloc] initWithTag:tag ? tag : @"" audioQuality:audioQuality];
        return nativeCustomAudioTrackConfig;
    }
    return nil;
}

+ (QNCameraVideoTrackConfig *)getNativeCameraVideoTrackConfig:(NSDictionary *)uniCameraVideoTrackConfig {
    if ([uniCameraVideoTrackConfig count] > 0) {
        NSString *tag = [QNRtcTools getObject:@"tag" fromDic:uniCameraVideoTrackConfig objClass:[NSString class]];
        NSNumber *bitrate = [QNRtcTools getObject:@"bitrate" fromDic:uniCameraVideoTrackConfig objClass:[NSNumber class]];
        NSNumber *width = [QNRtcTools getObject:@"width" fromDic:uniCameraVideoTrackConfig objClass:[NSNumber class]];
        NSNumber *height = [QNRtcTools getObject:@"height" fromDic:uniCameraVideoTrackConfig objClass:[NSNumber class]];
        NSNumber *multiStreamEnable = [QNRtcTools getObject:@"multiStreamEnable" fromDic:uniCameraVideoTrackConfig objClass:[NSNumber class]];
        
        QNVideoEncoderConfig  *videoEncoderConfig = [[QNVideoEncoderConfig alloc] initWithBitrate: bitrate ? bitrate.unsignedIntegerValue : 800 videoEncodeSize: width && height ? CGSizeMake(width.intValue, height.intValue) : CGSizeMake(640, 480)];
        QNCameraVideoTrackConfig *cameraVideoTrackConfig = [[QNCameraVideoTrackConfig alloc] initWithSourceTag:tag ? tag : @"" config: videoEncoderConfig multiStreamEnable:multiStreamEnable ? multiStreamEnable.boolValue : NO];
        return cameraVideoTrackConfig;
    }
    return nil;
}

+ (QNCameraVideoTrackSetting *)getNativeCameraVideoTrackSetting:(NSDictionary *)uniCameraVideoTrackSetting {
    QNCameraVideoTrackSetting *cameraVideoTrackSetting = [[QNCameraVideoTrackSetting alloc] init];
    NSString *cameraFacing = [QNRtcTools getObject:@"cameraFacing" fromDic:uniCameraVideoTrackSetting objClass:[NSString class]];
    if (cameraFacing) {
        if ([cameraFacing isEqualToString:@"front"]) {
            cameraVideoTrackSetting.captureDevicePosition = AVCaptureDevicePositionFront;
        } else if ([cameraFacing isEqualToString:@"back"]) {
            cameraVideoTrackSetting.captureDevicePosition = AVCaptureDevicePositionBack;
        } else {
            cameraVideoTrackSetting.captureDevicePosition = AVCaptureDevicePositionFront;
        }
    } else {
        cameraVideoTrackSetting.captureDevicePosition = AVCaptureDevicePositionFront;
    }
    
    NSString *uniSessionPreset = [QNRtcTools getObject:@"sessionPreset" fromDic:uniCameraVideoTrackSetting objClass:[NSString class]];
    cameraVideoTrackSetting.sessionPreset = [[self class] getNativeSessionPreset:uniSessionPreset];
    cameraVideoTrackSetting.videoFrameRate = [QNRtcTools getObject:@"frameRate" fromDic:uniCameraVideoTrackSetting objClass:[NSNumber class]];
    
    return cameraVideoTrackSetting;
}

+ (QNScreenVideoTrackConfig *)getNativeScreenVideoTrackConfig:(NSDictionary *)uniScreenVideoTrackConfig {
    if ([uniScreenVideoTrackConfig count] > 0) {
        NSString *tag = [QNRtcTools getObject:@"tag" fromDic:uniScreenVideoTrackConfig objClass:[NSString class]];
        NSNumber *bitrate = [QNRtcTools getObject:@"bitrate" fromDic:uniScreenVideoTrackConfig objClass:[NSNumber class]];
        NSNumber *width = [QNRtcTools getObject:@"width" fromDic:uniScreenVideoTrackConfig objClass:[NSNumber class]];
        NSNumber *height = [QNRtcTools getObject:@"height" fromDic:uniScreenVideoTrackConfig objClass:[NSNumber class]];
        NSNumber *multiStreamEnable = [QNRtcTools getObject:@"multiStreamEnable" fromDic:uniScreenVideoTrackConfig objClass:[NSNumber class]];
        
        QNVideoEncoderConfig  *videoEncoderConfig = [[QNVideoEncoderConfig alloc] initWithBitrate: bitrate ? bitrate.unsignedIntegerValue : 800 videoEncodeSize: width && height ? CGSizeMake(width.intValue, height.intValue) : CGSizeMake(640, 480)];
        QNScreenVideoTrackConfig *screenVideoTrackConfig = [[QNScreenVideoTrackConfig alloc] initWithSourceTag:tag ? tag : @"" config: videoEncoderConfig multiStreamEnable:multiStreamEnable ? multiStreamEnable.boolValue : NO];
        return screenVideoTrackConfig;
    }
    return nil;
}

+ (QNScreenVideoTrackSetting *)getNativeScreenVideoTrackSetting:(NSDictionary *)uniScreenVideoTrackSetting {
    QNScreenVideoTrackSetting *screenVideoTrackSetting = [[QNScreenVideoTrackSetting alloc] init];
    screenVideoTrackSetting.screenRecorderFrameRate = [QNRtcTools getObject:@"frameRate" fromDic:uniScreenVideoTrackSetting objClass:[NSNumber class]];
    return screenVideoTrackSetting;
}

+ (QNCustomVideoTrackConfig *)getNativeCustomVideoTrackConfig:(NSDictionary *)uniCustomVideoTrackConfig {
    if ([uniCustomVideoTrackConfig count] > 0) {
        NSString *tag = [QNRtcTools getObject:@"tag" fromDic:uniCustomVideoTrackConfig objClass:[NSString class]];
        NSNumber *bitrate = [QNRtcTools getObject:@"bitrate" fromDic:uniCustomVideoTrackConfig objClass:[NSNumber class]];
        NSNumber *width = [QNRtcTools getObject:@"width" fromDic:uniCustomVideoTrackConfig objClass:[NSNumber class]];
        NSNumber *height = [QNRtcTools getObject:@"height" fromDic:uniCustomVideoTrackConfig objClass:[NSNumber class]];
        NSNumber *multiStreamEnable = [QNRtcTools getObject:@"multiStreamEnable" fromDic:uniCustomVideoTrackConfig objClass:[NSNumber class]];
        
        QNVideoEncoderConfig  *videoEncoderConfig = [[QNVideoEncoderConfig alloc] initWithBitrate: bitrate ? bitrate.unsignedIntegerValue : 800 videoEncodeSize: width && height ? CGSizeMake(width.intValue, height.intValue) : CGSizeMake(640, 480)];
        
        QNCustomVideoTrackConfig *customVideoTrackConfig = [[QNCustomVideoTrackConfig alloc] initWithSourceTag:tag ? tag : @"" config: videoEncoderConfig multiStreamEnable:multiStreamEnable ? multiStreamEnable.boolValue : NO];
        return customVideoTrackConfig;
    }
    return nil;
}

+ (QNDirectLiveStreamingConfig *)getNativeDirectLiveStreamingConfig:(NSDictionary *)uniDirectLiveStreamingConfig tracks: (NSMutableArray<QNRtcLocalTrack *> *)tracks {
    if ([uniDirectLiveStreamingConfig count] > 0) {
        QNDirectLiveStreamingConfig *directLiveStreamingConfig = [[QNDirectLiveStreamingConfig alloc] init];
        
        NSString *videoTrackID = [QNRtcTools getObject:@"videoTracks" fromDic:uniDirectLiveStreamingConfig objClass:[NSString class]];
        if (videoTrackID) {
            for(QNRtcLocalTrack *localTrack in tracks) {
                if ([localTrack.nativeTrack.trackID isEqualToString:videoTrackID]) {
                    directLiveStreamingConfig.videoTrack = localTrack.nativeTrack;
                }
            }
        }
        
        NSString *audioTrackID = [QNRtcTools getObject:@"audioTracks" fromDic:uniDirectLiveStreamingConfig objClass:[NSString class]];
        if (audioTrackID) {
            for(QNRtcLocalTrack *localTrack in tracks) {
                if ([localTrack.nativeTrack.trackID isEqualToString:audioTrackID]) {
                    directLiveStreamingConfig.audioTrack = localTrack.nativeTrack;
                }
            }
        }
        
        NSString *publishUrl = [QNRtcTools getObject:@"url" fromDic:uniDirectLiveStreamingConfig objClass:[NSString class]];
        if (publishUrl) directLiveStreamingConfig.publishUrl = publishUrl;

        NSString *streamID = [QNRtcTools getObject:@"streamID" fromDic:uniDirectLiveStreamingConfig objClass:[NSString class]];
        if (streamID) directLiveStreamingConfig.streamID = streamID;

        return directLiveStreamingConfig;
    }
    return nil;
}

+ (QNTranscodingLiveStreamingConfig *)getNativeTranscodingLiveStreamingConfig:(NSDictionary *)uniTranscodingLiveStreamingConfig {
    if ([uniTranscodingLiveStreamingConfig count] > 0) {
        QNTranscodingLiveStreamingConfig *transcodingLiveStreamingConfig = [QNTranscodingLiveStreamingConfig defaultConfiguration];
        
        NSString *streamID = [QNRtcTools getObject:@"streamID" fromDic:uniTranscodingLiveStreamingConfig objClass:[NSString class]];
        if (streamID) transcodingLiveStreamingConfig.streamID = streamID;
        
        NSString *publishUrl = [QNRtcTools getObject:@"url" fromDic:uniTranscodingLiveStreamingConfig objClass:[NSString class]];
        if (publishUrl) transcodingLiveStreamingConfig.publishUrl = publishUrl;
        
        NSNumber *width = [QNRtcTools getObject:@"width" fromDic:uniTranscodingLiveStreamingConfig objClass:[NSNumber class]];
        if (width) transcodingLiveStreamingConfig.width = width.intValue;
        
        NSNumber *height = [QNRtcTools getObject:@"height" fromDic:uniTranscodingLiveStreamingConfig objClass:[NSNumber class]];
        if (height) transcodingLiveStreamingConfig.height = height.intValue;
        
        NSNumber *videoFrameRate = [QNRtcTools getObject:@"videoFrameRate" fromDic:uniTranscodingLiveStreamingConfig objClass:[NSNumber class]];
        if (videoFrameRate) transcodingLiveStreamingConfig.fps = videoFrameRate.intValue;
        
        NSNumber *bitrate = [QNRtcTools getObject:@"bitrate" fromDic:uniTranscodingLiveStreamingConfig objClass:[NSNumber class]];
        if (bitrate) transcodingLiveStreamingConfig.bitrateBps = bitrate.unsignedIntegerValue;
        
        NSNumber *minBitrate = [QNRtcTools getObject:@"minBitrate" fromDic:uniTranscodingLiveStreamingConfig objClass:[NSNumber class]];
        if (minBitrate) transcodingLiveStreamingConfig.minBitrateBps = minBitrate.unsignedIntegerValue;
        
        NSNumber *maxBitrate = [QNRtcTools getObject:@"maxBitrate" fromDic:uniTranscodingLiveStreamingConfig objClass:[NSNumber class]];
        if (maxBitrate) transcodingLiveStreamingConfig.maxBitrateBps = maxBitrate.unsignedIntegerValue;
        
        NSString *renderMode = [QNRtcTools getObject:@"renderMode" fromDic:uniTranscodingLiveStreamingConfig objClass:[NSString class]];
        if (renderMode) {
            QNVideoFillModeType fillMode = QNVideoFillModePreserveAspectRatioAndFill;
            if ([renderMode isEqualToString:@"FILL"]) {
                fillMode = QNVideoFillModeStretch;
            } else if ([renderMode isEqualToString:@"ASPECT_FILL"]) {
                fillMode = QNVideoFillModePreserveAspectRatioAndFill;
            } else if ([renderMode isEqualToString:@"ASPECT_FIT"]) {
                fillMode = QNVideoFillModePreserveAspectRatio;
            } else {
                fillMode = QNVideoFillModePreserveAspectRatioAndFill;
            }
            transcodingLiveStreamingConfig.fillMode = fillMode;
        }
        
        NSArray *uniWatermarks = [QNRtcTools getObject:@"watermarks" fromDic:uniTranscodingLiveStreamingConfig objClass:[NSArray class]];
        if ([uniWatermarks count] > 0) {
            NSMutableArray<QNTranscodingLiveStreamingImage *> *watermarks = [NSMutableArray array];
            for (NSDictionary *uniWatermark in uniWatermarks) {
                QNTranscodingLiveStreamingImage *transcodingLiveStreamingImage = [[QNTranscodingLiveStreamingImage alloc] init];

                NSString *url = [QNRtcTools getObject:@"url" fromDic:uniWatermark objClass:[NSString class]];
                if (url) transcodingLiveStreamingImage.imageUrl = url;
                
                NSNumber *x = [QNRtcTools getObject:@"x" fromDic:uniWatermark objClass:[NSNumber class]];
                NSNumber *y = [QNRtcTools getObject:@"y" fromDic:uniWatermark objClass:[NSNumber class]];
                NSNumber *w = [QNRtcTools getObject:@"w" fromDic:uniWatermark objClass:[NSNumber class]];
                NSNumber *h = [QNRtcTools getObject:@"h" fromDic:uniWatermark objClass:[NSNumber class]];
                transcodingLiveStreamingImage.frame = CGRectMake(x ? x.intValue : 0, y ? y.intValue : 0, w ? w.intValue : 0, h ? h.intValue : 0);
                
                [watermarks addObject:transcodingLiveStreamingImage];
            }
            transcodingLiveStreamingConfig.watermarks = watermarks;
        }
        
        NSDictionary *background = [QNRtcTools getObject:@"background" fromDic:uniTranscodingLiveStreamingConfig objClass:[NSDictionary class]];
        if ([background count] > 0) {
            QNTranscodingLiveStreamingImage *transcodingLiveStreamingImage = [[QNTranscodingLiveStreamingImage alloc] init];

            NSString *url = [QNRtcTools getObject:@"url" fromDic:background objClass:[NSString class]];
            if (url) transcodingLiveStreamingImage.imageUrl = url;
            
            NSNumber *x = [QNRtcTools getObject:@"x" fromDic:background objClass:[NSNumber class]];
            NSNumber *y = [QNRtcTools getObject:@"y" fromDic:background objClass:[NSNumber class]];
            NSNumber *w = [QNRtcTools getObject:@"w" fromDic:background objClass:[NSNumber class]];
            NSNumber *h = [QNRtcTools getObject:@"h" fromDic:background objClass:[NSNumber class]];
            transcodingLiveStreamingImage.frame = CGRectMake(x ? x.intValue : 0, y ? y.intValue : 0, w ? w.intValue : 0, h ? h.intValue : 0);
            transcodingLiveStreamingImage.imageUrl = url;
            
            transcodingLiveStreamingConfig.background = transcodingLiveStreamingImage;
        }
        
        return transcodingLiveStreamingConfig;
    }
    return nil;
}

+ (NSArray <QNTranscodingLiveStreamingTrack *> *)getNativeTranscodingLiveStreamingTracks:(NSArray<NSDictionary *> *)uniTranscodingLiveStreamingTracks {
    if ([uniTranscodingLiveStreamingTracks count] > 0) {
        NSMutableArray<QNTranscodingLiveStreamingTrack *> *nativeTranscodingLiveStreamingTracks = [NSMutableArray arrayWithCapacity:uniTranscodingLiveStreamingTracks.count];
        for (NSDictionary *uniTranscodingLiveStreamingTrack in uniTranscodingLiveStreamingTracks) {
            QNTranscodingLiveStreamingTrack *nativeTranscodingLiveStreamingTrack = [[QNTranscodingLiveStreamingTrack alloc] init];
            
            NSString *trackID = [QNRtcTools getObject:@"trackID" fromDic:uniTranscodingLiveStreamingTrack objClass:[NSString class]];
            if (trackID) nativeTranscodingLiveStreamingTrack.trackID = trackID;
            
            NSNumber *x = [QNRtcTools getObject:@"x" fromDic:uniTranscodingLiveStreamingTrack objClass:[NSNumber class]];
            NSNumber *y = [QNRtcTools getObject:@"y" fromDic:uniTranscodingLiveStreamingTrack objClass:[NSNumber class]];
            NSNumber *width = [QNRtcTools getObject:@"width" fromDic:uniTranscodingLiveStreamingTrack objClass:[NSNumber class]];
            NSNumber *height = [QNRtcTools getObject:@"height" fromDic:uniTranscodingLiveStreamingTrack objClass:[NSNumber class]];
            nativeTranscodingLiveStreamingTrack.frame = CGRectMake(x ? x.intValue : 0, y ? y.intValue : 0, width ? width.intValue : 0, height ? height.intValue : 0);
            
            NSNumber *zOrder = [QNRtcTools getObject:@"zOrder" fromDic:uniTranscodingLiveStreamingTrack objClass:[NSNumber class]];
            if (zOrder) nativeTranscodingLiveStreamingTrack.zOrder = zOrder.unsignedIntegerValue;
            
            NSString *renderMode = [QNRtcTools getObject:@"renderMode" fromDic:uniTranscodingLiveStreamingTrack objClass:[NSString class]];
            if (renderMode) {
                if ([renderMode isEqualToString:@"FILL"]) {
                    nativeTranscodingLiveStreamingTrack.fillMode = QNVideoFillModeStretch;
                } else if ([renderMode isEqualToString:@"ASPECT_FILL"]) {
                    nativeTranscodingLiveStreamingTrack.fillMode = QNVideoFillModePreserveAspectRatioAndFill;
                } else if ([renderMode isEqualToString:@"ASPECT_FIT"]) {
                    nativeTranscodingLiveStreamingTrack.fillMode = QNVideoFillModePreserveAspectRatio;
                }
            }
            
            NSNumber *SEIEnabled = [QNRtcTools getObject:@"SEIEnabled" fromDic:uniTranscodingLiveStreamingTrack objClass:[NSNumber class]];
            if (SEIEnabled) nativeTranscodingLiveStreamingTrack.supportSEI = SEIEnabled.boolValue;
            [nativeTranscodingLiveStreamingTracks addObject:nativeTranscodingLiveStreamingTrack];
        }
        return nativeTranscodingLiveStreamingTracks;
    }
    return nil;
}

+ (QNTrackProfile)getNativeProfile:(NSString *)uniProfile {
    if ([uniProfile isEqualToString:@"LOW"]) {
        return QNTrackProfileLow;
    } else if ([uniProfile isEqualToString:@"MEDIUM"]) {
        return QNTrackProfileMedium;
    } else if ([uniProfile isEqualToString:@"HIGH"]) {
        return QNTrackProfileHigh;
    }
    return QNTrackProfileLow;
}

+ (AVCaptureVideoOrientation)getNativeCaptureVideoOrientation:(NSString *)uniCaptureVideoOrientation {
    if ([uniCaptureVideoOrientation isEqualToString:@"AVCaptureVideoOrientationPortrait"]) {
        return AVCaptureVideoOrientationPortrait;
    } else if ([uniCaptureVideoOrientation isEqualToString:@"AVCaptureVideoOrientationLandscapeRight"]) {
        return AVCaptureVideoOrientationLandscapeRight;
    } else if ([uniCaptureVideoOrientation isEqualToString:@"AVCaptureVideoOrientationLandscapeLeft"]) {
        return AVCaptureVideoOrientationLandscapeLeft;
    } else if ([uniCaptureVideoOrientation isEqualToString:@"AVCaptureVideoOrientationPortraitUpsideDown"]) {
        return AVCaptureVideoOrientationPortraitUpsideDown;
    } else {
        return AVCaptureVideoOrientationPortrait;
    }
}

+ (AVCaptureSessionPreset)getNativeSessionPreset:(NSString *)uniSessionPreset {
    if (uniSessionPreset) {
        if ([uniSessionPreset isEqualToString:AVCaptureSessionPreset352x288]) {
            return AVCaptureSessionPreset352x288;
        } else if ([uniSessionPreset isEqualToString:AVCaptureSessionPreset640x480]) {
            return AVCaptureSessionPreset640x480;
        } else if ([uniSessionPreset isEqualToString:AVCaptureSessionPreset1280x720]) {
            return AVCaptureSessionPreset1280x720;
        } else if ([uniSessionPreset isEqualToString:AVCaptureSessionPreset1920x1080]) {
            return AVCaptureSessionPreset1920x1080;
        } else if ([uniSessionPreset isEqualToString:AVCaptureSessionPreset3840x2160]) {
            return AVCaptureSessionPreset3840x2160;
        } else if ([uniSessionPreset isEqualToString:AVCaptureSessionPresetiFrame960x540]) {
            return AVCaptureSessionPresetiFrame960x540;
        } else if ([uniSessionPreset isEqualToString:AVCaptureSessionPresetiFrame1280x720]) {
            return AVCaptureSessionPresetiFrame1280x720;
        } else {
            return AVCaptureSessionPreset640x480;
        }
    } else {
        return AVCaptureSessionPreset640x480;
    }
}

+ (QNVideoFillModeType)getNativeFillMode:(NSString *)uniFillMode {
    if ([uniFillMode isEqualToString:@"QNVideoFillModeNone"]) {
        return QNVideoFillModeNone;
    } else if ([uniFillMode isEqualToString:@"QNVideoFillModeStretch"]) {
        return QNVideoFillModeStretch;
    } else if ([uniFillMode isEqualToString:@"QNVideoFillModePreserveAspectRatio"]) {
        return QNVideoFillModePreserveAspectRatio;
    } else if ([uniFillMode isEqualToString:@"QNVideoFillModePreserveAspectRatioAndFill"]) {
        return QNVideoFillModePreserveAspectRatioAndFill;
    } else {
        return QNVideoFillModePreserveAspectRatioAndFill;
    }
}

+ (QNAudioScene)getNativeAudioScene:(NSString *)uniAudioScene {
    if ([uniAudioScene isEqualToString:@"DEFAULT"]) {
        return QNAudioSceneDefault;
    } else if ([uniAudioScene isEqualToString:@"VOICE_CHAT"]) {
        return QNAudioSceneVoiceChat;
    } else if ([uniAudioScene isEqualToString:@"SOUND_EQUALIZE"]) {
        return QNAudioSceneSoundEqualize;
    }
    return QNAudioSceneDefault;
}

+ (void)getNativePublishLocalTracks:(NSMutableArray<QNLocalTrack *> **)nativePublishLocalTracks
              nativePublishRtcLocalTracks:(NSMutableArray<QNRtcLocalTrack *> **)nativePublishRtcLocalTracks
          fromUniPublishLocalTracks:(NSArray<NSDictionary *> *)uniPublishLocalTracks
    withCreatedNativeRtcLocalTracks:(NSArray<QNRtcLocalTrack *> *)createdNativeRtcLocalTracks {
    
    for (NSDictionary *uniPublishLocalTrack in uniPublishLocalTracks) {
        NSString *identifyID = [QNRtcTools getObject:@"identifyID" fromDic:uniPublishLocalTrack objClass:[NSString class]];
        for (QNRtcLocalTrack *createdNativeRtcLocalTrack in createdNativeRtcLocalTracks) {
            if ([createdNativeRtcLocalTrack.identifyID isEqualToString:identifyID]) {
                [*nativePublishLocalTracks addObject:createdNativeRtcLocalTrack.nativeTrack];
                [*nativePublishRtcLocalTracks addObject:createdNativeRtcLocalTrack];
                break;
            }
        }
    }
}

+ (NSArray<QNLocalTrack *> *)getNativeUnPublishLocalTracks:(NSArray<NSDictionary *> *)uniUnPublishLocalTracks publishedLocalTracks:(NSArray<QNLocalTrack *> *)publishedLocalTracks {
    NSMutableArray<QNLocalTrack *> *nativeUnPublishLocalTracks = [NSMutableArray arrayWithCapacity:uniUnPublishLocalTracks.count];
    for (NSDictionary *uniUnPublishLocalTrack in uniUnPublishLocalTracks) {
        NSString *trackID = [QNRtcTools getObject:@"trackID" fromDic:uniUnPublishLocalTrack objClass:[NSString class]];
        for (QNLocalTrack *publishedLocalTrack in publishedLocalTracks) {
            if ([publishedLocalTrack.trackID isEqualToString:trackID]) {
                [nativeUnPublishLocalTracks addObject:publishedLocalTrack];
                break;
            }
        }
    }
    return nativeUnPublishLocalTracks;
}

+ (NSArray<QNRemoteTrack *> *)getNativeSubscribeRemoteTracks:(NSArray<NSDictionary *> *)uniSubscribeRemoteTracks client: (QNRTCClient*) client {
    NSMutableArray<QNRemoteTrack *> *nativeSubcribeRemoteTracks = [NSMutableArray arrayWithCapacity:uniSubscribeRemoteTracks.count];
    NSMutableDictionary *remoteTracks = [NSMutableDictionary dictionary];
    for (QNRemoteUser *remoteUser in client.remoteUserList) {
        NSArray <QNRemoteAudioTrack *> *audioTracks = remoteUser.audioTrack;
        NSArray <QNRemoteVideoTrack *> *videoTracks = remoteUser.videoTrack;
        for (QNRemoteAudioTrack *audioTrack in audioTracks) {
            [remoteTracks setValue:audioTrack forKey:audioTrack.trackID];
        }
        for (QNRemoteAudioTrack *videoTrack in videoTracks) {
            [remoteTracks setValue:videoTrack forKey:videoTrack.trackID];
        }
    }
    
    for (NSDictionary *uniSubscribeRemoteTrack in uniSubscribeRemoteTracks) {
        NSString *trackID = [QNRtcTools getObject:@"trackID" fromDic:uniSubscribeRemoteTrack objClass:[NSString class]];
        if (trackID) {
            if ([remoteTracks valueForKey:trackID] != nil){
                [nativeSubcribeRemoteTracks addObject:[remoteTracks valueForKey:trackID]];
            }
        }
    }
    return nativeSubcribeRemoteTracks;
}

+ (NSArray<QNRemoteTrack *> *)getNativeUnSubscribeRemoteTracks:(NSArray<NSDictionary *> *)uniUnSubscribeRemoteTracks subscribedRemoteTracks:(NSArray<QNRemoteTrack *> *)subscribedRemoteTracks {
    NSMutableArray<QNRemoteTrack *> *nativeUnSubscribeRemoteTracks = [NSMutableArray arrayWithCapacity:uniUnSubscribeRemoteTracks.count];
    for (NSDictionary *uniUnSubscribeRemoteTrack in uniUnSubscribeRemoteTracks) {
        NSString *trackID = [QNRtcTools getObject:@"trackID" fromDic:uniUnSubscribeRemoteTrack objClass:[NSString class]];
        for (QNRemoteTrack *subscribedRemoteTrack in subscribedRemoteTracks) {
            if ([subscribedRemoteTrack.trackID isEqualToString:trackID]) {
                [nativeUnSubscribeRemoteTracks addObject:subscribedRemoteTrack];
                break;
            }
        }
    }
    return nativeUnSubscribeRemoteTracks;
}

+ (QNBeautySetting *)getNativeBeautySetting:(NSDictionary *)uniBeautySetting {
    QNBeautySetting *nativeBeautySetting = [[QNBeautySetting alloc] init];
    nativeBeautySetting.enabled = [QNRtcTools getObject:@"enabled" fromDic:uniBeautySetting objClass:[NSNumber class]];
    nativeBeautySetting.smoothLevel = [QNRtcTools getObject:@"smoothLevel" fromDic:uniBeautySetting objClass:[NSNumber class]];
    nativeBeautySetting.whiten = [QNRtcTools getObject:@"whiten" fromDic:uniBeautySetting objClass:[NSNumber class]];
    nativeBeautySetting.redden = [QNRtcTools getObject:@"redden" fromDic:uniBeautySetting objClass:[NSNumber class]];
    return nativeBeautySetting;
}

+ (QNPushImageSetting *)getNativePushImageSetting:(NSDictionary *)uniPushImageSetting {
    QNPushImageSetting *nativePushImageSetting = [[QNPushImageSetting alloc] init];
    nativePushImageSetting.width = [QNRtcTools getObject:@"width" fromDic:uniPushImageSetting objClass:[NSNumber class]];
    nativePushImageSetting.height = [QNRtcTools getObject:@"height" fromDic:uniPushImageSetting objClass:[NSNumber class]];
    NSString *resourcePath = [QNRtcTools getObject:@"resourcePath" fromDic:uniPushImageSetting objClass:[NSString class]];
    if (resourcePath) {
        if (![resourcePath isEqualToString:@""]) {
            NSData *imageData = [[NSData alloc] initWithContentsOfURL:[NSURL URLWithString:resourcePath]];
            nativePushImageSetting.image = [UIImage imageWithData:imageData];
        }
    }
    return nativePushImageSetting;
}

+ (QNWaterMarkSetting *)getNativeWaterMarkSetting:(NSDictionary *)uniWaterMarkSetting {
    QNWaterMarkSetting *nativeWaterMarkSetting = [[QNWaterMarkSetting alloc] init];
    double x = [[QNRtcTools getObject:@"x" fromDic:uniWaterMarkSetting objClass:[NSNumber class]] doubleValue];
    double y = [[QNRtcTools getObject:@"y" fromDic:uniWaterMarkSetting objClass:[NSNumber class]] doubleValue];
    nativeWaterMarkSetting.x = @((int)(x));
    nativeWaterMarkSetting.y = @((int)(y));
    NSString *resourcePath = [QNRtcTools getObject:@"resourcePath" fromDic:uniWaterMarkSetting objClass:[NSString class]];
    if (resourcePath) {
        NSData *imageData = [[NSData alloc] initWithContentsOfURL:[NSURL URLWithString:resourcePath]];
        nativeWaterMarkSetting.image = [UIImage imageWithData:imageData];
    }
    return nativeWaterMarkSetting;
}

+ (QNRoomMediaRelayConfiguration *)getNativeRoomMediaRelayConfig:(NSDictionary *)uniRoomMediaRelayConfig {
    QNRoomMediaRelayConfiguration *nativeRoomMediaRelayConfig = [[QNRoomMediaRelayConfiguration alloc] init];
    NSString *roomName = [QNRtcTools getObject:@"roomName" fromDic:uniRoomMediaRelayConfig objClass:[NSString class]];
    NSString *relayToken = [QNRtcTools getObject:@"relayToken" fromDic:uniRoomMediaRelayConfig objClass:[NSString class]];
    if (roomName && relayToken) {
        QNRoomMediaRelayInfo *nativeRoomMediaRelayInfo = [[QNRoomMediaRelayInfo alloc] initWithToken:relayToken];
        nativeRoomMediaRelayInfo.roomName = roomName;
        nativeRoomMediaRelayConfig.srcRoomInfo = nativeRoomMediaRelayInfo;
        NSArray *uniDesRoomInfo = [QNRtcTools getObject:@"desRoomInfo" fromDic:uniRoomMediaRelayConfig objClass:[NSArray class]];
        if ([uniDesRoomInfo count] > 0) {
            for (NSDictionary *info in uniDesRoomInfo) {
                NSString *desRoomName = [QNRtcTools getObject:@"roomName" fromDic:info objClass:[NSString class]];
                NSString *desRelayToken = [QNRtcTools getObject:@"relayToken" fromDic:info objClass:[NSString class]];
                QNRoomMediaRelayInfo *nativeDesRoomMediaRelayInfo = [[QNRoomMediaRelayInfo alloc] initWithToken:desRelayToken];
                nativeDesRoomMediaRelayInfo.roomName = desRoomName;
                [nativeRoomMediaRelayConfig setDestRoomInfo:nativeDesRoomMediaRelayInfo forRoomName:desRoomName];
            }
        }
    }

    return nativeRoomMediaRelayConfig;
}

+ (QNClientRole)getNativeClientRole:(NSString *)uniRole {
    if ([uniRole isEqualToString:@"BROADCASTER"]) {
        return QNClientRoleBroadcaster;
    } else if ([uniRole isEqualToString:@"AUDIENCE"]) {
        return QNClientRoleAudience;
    }
    return QNClientRoleBroadcaster;
}

+ (NSDictionary *)getUniLocalTrack:(QNRtcLocalTrack *)nativeRtcLocalTrack {
    return @{
        @"identifyID": nativeRtcLocalTrack.identifyID,
        @"kind": nativeRtcLocalTrack.nativeTrack.kind == QNTrackKindAudio ? @"audio" : @"video",
        @"tag": nativeRtcLocalTrack.nativeTrack.tag,
    };
}

+ (NSDictionary *)getUniPublishCallBackWithNativePublishingLocalTracks:(NSArray<QNRtcLocalTrack *> *)nativePublishingLocalTracks onPublished:(BOOL)onPublished error:(NSError *)error {
    NSMutableDictionary *localTrackDescription = [NSMutableDictionary dictionaryWithCapacity:nativePublishingLocalTracks.count];
    for (QNRtcLocalTrack *nativePublishingLocalTrack in nativePublishingLocalTracks) {
        if (nativePublishingLocalTrack.identifyID && nativePublishingLocalTrack.nativeTrack.trackID) {
            [localTrackDescription setValue:nativePublishingLocalTrack.nativeTrack.trackID forKey:nativePublishingLocalTrack.identifyID];
        }
    }
    return @{
        @"onPublished": @(onPublished),
        @"error": @{
            @"code": error ? @(error.code) : @0,
            @"message": error.localizedDescription ? error.localizedDescription : @""
        },
        @"data": localTrackDescription
    };
}

+ (NSDictionary *)getUniRoomMediaRelayCallBack:(NSDictionary *)state error:(NSError *)error {
    if (state == nil) {
        return @{
            @"state": @{},
            @"error": @{
                @"code": error ? @(error.code) : @0,
                @"message": error.localizedDescription ? error.localizedDescription : @""
            }
        };
    } else {
        NSMutableDictionary *dict = [NSMutableDictionary dictionary];
        for (NSString *trackId in state.allKeys) {
            switch ([state[trackId] intValue]) {
                case 0: [dict setObject:@"SUCCESS" forKey:trackId]; break;
                case 1: [dict setObject:@"STOPPED" forKey:trackId]; break;
                case 2: [dict setObject:@"INVALID_TOKEN" forKey:trackId]; break;
                case 3: [dict setObject:@"NO_ROOM" forKey:trackId]; break;
                case 4: [dict setObject:@"ROOM_CLOSED" forKey:trackId]; break;
                case 5: [dict setObject:@"PLAYER_EXISTED" forKey:trackId]; break;
                case 0XFF: [dict setObject:@"UNKNOWN" forKey:trackId]; break;
                default: break;
            }
        }
        return @{
            @"state": dict,
            @"error": @{
                @"code": error ? @(error.code) : @0,
                @"message": error.localizedDescription ? error.localizedDescription : @""
            }
        };
    }
}


+ (NSDictionary *)getUniClientRoleCallBack:(QNClientRole)role error:(NSError *)error {
    NSString *uniRole = @"";
    switch (role) {
        case QNClientRoleBroadcaster: uniRole = @"BROADCASTER"; break;
        case QNClientRoleAudience: uniRole = @"AUDIENCE"; break;
        default: break;
    }
    return @{
        @"role": uniRole,
        @"error": @{
            @"code": error ? @(error.code) : @0,
            @"message": error.localizedDescription ? error.localizedDescription : @""
        }
    };
}

+ (NSString *)getUniConnectionState:(QNConnectionState)nativeConnectionState {
    NSString *uniConnectionState = @"";
    switch (nativeConnectionState) {
        case QNConnectionStateDisconnected: uniConnectionState = @"DISCONNECTED"; break;
        case QNConnectionStateConnecting: uniConnectionState = @"CONNECTING"; break;
        case QNConnectionStateConnected: uniConnectionState = @"CONNECTED"; break;
        case QNConnectionStateReconnecting: uniConnectionState = @"RECONNECTING"; break;
        case QNConnectionStateReconnected: uniConnectionState = @"RECONNECTED"; break;
        default: break;
    }
    return uniConnectionState;
}

+ (NSArray<NSDictionary *> *)getUniRemoteUsers:(NSArray<QNRemoteUser *>*)nativeRemoteUsers {
    NSMutableArray<NSDictionary *> *uniRemoteUsers = [NSMutableArray arrayWithCapacity:nativeRemoteUsers.count];
    for (QNRemoteUser *nativeRemoteUser in nativeRemoteUsers) {
        NSMutableArray<NSDictionary *> *remoteUserVideoTracks = [NSMutableArray array];
        for (QNRemoteVideoTrack *remoteVideoTrack in nativeRemoteUser.videoTrack) {
            NSDictionary *uniRemoteTrack = @{
                @"userID": nativeRemoteUser.userID ? nativeRemoteUser.userID : @"",
                @"trackID": remoteVideoTrack.trackID ? remoteVideoTrack.trackID : @"",
                @"kind": @"video",
                @"tag": remoteVideoTrack.tag ? remoteVideoTrack.tag : @""
            };
            [remoteUserVideoTracks addObject:uniRemoteTrack];
        }
        
        NSMutableArray<NSDictionary *> *remoteUserAudioTracks = [NSMutableArray array];
        for (QNRemoteAudioTrack *remoteAudioTrack in nativeRemoteUser.audioTrack) {
            NSDictionary *uniRemoteTrack = @{
                @"userID": nativeRemoteUser.userID ? nativeRemoteUser.userID : @"",
                @"trackID": remoteAudioTrack.trackID ? remoteAudioTrack.trackID : @"",
                @"kind": @"audio",
                @"tag": remoteAudioTrack.tag ? remoteAudioTrack.tag : @""
            };
            [remoteUserAudioTracks addObject:uniRemoteTrack];
        }
        
        NSDictionary *uniRemoteUser = @{
            @"userID": nativeRemoteUser.userID ? nativeRemoteUser.userID : @"",
            @"videoTracks": remoteUserVideoTracks,
            @"audioTracks": remoteUserAudioTracks,
            @"userData": nativeRemoteUser.userData ? nativeRemoteUser.userData : @""
        };
        [uniRemoteUsers addObject:uniRemoteUser];
    }
    return uniRemoteUsers;
}

+ (NSArray<NSDictionary *> *)getUniPublishedTracks:(NSArray<QNTrack *> *)nativePublishedTracks {
    NSMutableArray<NSDictionary *> *uniPublishedTracks = [NSMutableArray arrayWithCapacity:nativePublishedTracks.count];
    for (QNTrack *track in nativePublishedTracks) {
        QNLocalTrack *nativePublishedTrack = (QNLocalTrack *)track;
        NSDictionary *uniPublishedTrack = @{
            @"userID": @"",
            @"trackID": nativePublishedTrack.trackID ? nativePublishedTrack.trackID : @"",
            @"kind": nativePublishedTrack.kind == QNTrackKindAudio ? @"audio" : @"video",
            @"tag": nativePublishedTrack.tag ? nativePublishedTrack.tag : @""
        };
        [uniPublishedTracks addObject:uniPublishedTrack];
    }
    return uniPublishedTracks;
}

+ (NSArray<NSDictionary *> *)getUniSubscribedTracks:(NSArray<QNTrack *> *)nativeSubscribedTracks userID:(NSString *)userID {
    NSMutableArray<NSDictionary *> *uniSubscribedTracks = [NSMutableArray arrayWithCapacity:nativeSubscribedTracks.count];
    for (QNTrack *track in nativeSubscribedTracks) {
        QNRemoteTrack *nativeSubscribedTrack = (QNRemoteTrack *)track;
        NSDictionary *uniSubscribedTrack = @{
            @"userID": userID ? userID : @"",
            @"trackID": nativeSubscribedTrack.trackID ? nativeSubscribedTrack.trackID : @"",
            @"kind": nativeSubscribedTrack.kind == QNTrackKindAudio ? @"audio" : @"video",
            @"tag": nativeSubscribedTrack.tag ? nativeSubscribedTrack.tag : @""
        };
        [uniSubscribedTracks addObject:uniSubscribedTrack];
    }
    return uniSubscribedTracks;
}

+ (NSDictionary *)getUniUserNetworkQuality:(QNNetworkQuality *)nativeUserNetworkQuality {
    NSString *uplinkNetworkGrade = @"";
    NSString *downlinkNetworkGrade = @"";
    switch (nativeUserNetworkQuality.uplinkNetworkGrade) {
        case QNNetworkGradeInvalid: uplinkNetworkGrade = @"INVALID"; break;
        case QNNetworkGradeExcellent: uplinkNetworkGrade = @"EXCELLENT"; break;
        case QNNetworkGradeGood: uplinkNetworkGrade = @"GOOD"; break;
        case QNNetworkGradeGeneral: uplinkNetworkGrade = @"FAIR"; break;
        case QNNetworkGradePoor: uplinkNetworkGrade = @"POOR"; break;
        default: break;
    }
    switch (nativeUserNetworkQuality.downlinkNetworkGrade) {
        case QNNetworkGradeInvalid: downlinkNetworkGrade = @"INVALID"; break;
        case QNNetworkGradeExcellent: downlinkNetworkGrade = @"EXCELLENT"; break;
        case QNNetworkGradeGood: downlinkNetworkGrade = @"GOOD"; break;
        case QNNetworkGradeGeneral: downlinkNetworkGrade = @"FAIR"; break;
        case QNNetworkGradePoor: downlinkNetworkGrade = @"POOR"; break;
        default: break;
    }
    return @{
        @"uplinkNetworkGrade": uplinkNetworkGrade,
        @"downlinkNetworkGrade": downlinkNetworkGrade
    };
}

+ (NSDictionary *)getUniLocalAudioTrackStats:(NSDictionary *)nativeLocalAudioTrackStats {
    NSMutableDictionary *uniLocalAudioTrackStats = [NSMutableDictionary dictionaryWithCapacity:nativeLocalAudioTrackStats.count];
    for (NSString *trackId in nativeLocalAudioTrackStats.allKeys) {
        QNLocalAudioTrackStats *nativeLocalAudioTrackStat = [QNRtcTools getObject:trackId fromDic:nativeLocalAudioTrackStats objClass:[QNLocalAudioTrackStats class]];
        if (nativeLocalAudioTrackStat) {
            NSMutableDictionary *uniLocalAudioTrackStat = [NSMutableDictionary dictionary];
            [uniLocalAudioTrackStat setObject:@(nativeLocalAudioTrackStat.uplinkBitrate) forKey:@"uplinkBitrate"];
            [uniLocalAudioTrackStat setObject:@(nativeLocalAudioTrackStat.uplinkRTT) forKey:@"uplinkRTT"];
            [uniLocalAudioTrackStat setObject:@(nativeLocalAudioTrackStat.uplinkLostRate) forKey:@"uplinkLostRate"];
            
            [uniLocalAudioTrackStats setObject:uniLocalAudioTrackStat forKey:trackId];
        }
    }
    return uniLocalAudioTrackStats;
}

+ (NSDictionary *)getUniLocalVideoTrackStats:(NSDictionary *)nativeLocalVideoTrackStats {
    NSMutableDictionary *uniLocalVideoTrackStats = [NSMutableDictionary dictionaryWithCapacity:nativeLocalVideoTrackStats.count];
    for (NSString *trackId in nativeLocalVideoTrackStats.allKeys) {
        NSMutableArray *uniLocalVideoTrackStatList = [NSMutableArray array];
        for (QNLocalVideoTrackStats *nativeLocalVideoTrackStat in nativeLocalVideoTrackStats[trackId]) {
            if (nativeLocalVideoTrackStat) {
                NSMutableDictionary *uniLocalVideoTrackStat = [NSMutableDictionary dictionary];
                NSString *profile = @"";
                switch (nativeLocalVideoTrackStat.profile) {
                    case QNTrackProfileLow: profile = @"LOW"; break;
                    case QNTrackProfileMedium: profile = @"MEDIUM"; break;
                    case QNTrackProfileHigh: profile = @"HIGH"; break;
                }
                [uniLocalVideoTrackStat setObject:profile forKey:@"profile"];
                [uniLocalVideoTrackStat setObject:@(nativeLocalVideoTrackStat.uplinkFrameRate) forKey:@"uplinkFrameRate"];
                [uniLocalVideoTrackStat setObject:@(nativeLocalVideoTrackStat.uplinkBitrate) forKey:@"uplinkBitrate"];
                [uniLocalVideoTrackStat setObject:@(nativeLocalVideoTrackStat.uplinkRTT) forKey:@"uplinkRTT"];
                [uniLocalVideoTrackStat setObject:@(nativeLocalVideoTrackStat.uplinkLostRate) forKey:@"uplinkLostRate"];
                [uniLocalVideoTrackStat setObject:@(nativeLocalVideoTrackStat.uplinkFrameWidth) forKey:@"uplinkFrameWidth"];
                [uniLocalVideoTrackStat setObject:@(nativeLocalVideoTrackStat.uplinkFrameHeight) forKey:@"uplinkFrameHeight"];
                [uniLocalVideoTrackStat setObject:@(nativeLocalVideoTrackStat.captureFrameRate) forKey:@"captureFrameRate"];
                [uniLocalVideoTrackStat setObject:@(nativeLocalVideoTrackStat.captureFrameWidth) forKey:@"captureFrameWidth"];
                [uniLocalVideoTrackStat setObject:@(nativeLocalVideoTrackStat.captureFrameHeight) forKey:@"captureFrameHeight"];
                [uniLocalVideoTrackStat setObject:@(nativeLocalVideoTrackStat.targetFrameRate) forKey:@"targetFrameRate"];
                [uniLocalVideoTrackStat setObject:@(nativeLocalVideoTrackStat.targetFrameWidth) forKey:@"targetFrameWidth"];
                [uniLocalVideoTrackStat setObject:@(nativeLocalVideoTrackStat.targetFrameHeight) forKey:@"targetFrameHeight"];
                
                [uniLocalVideoTrackStatList addObject:uniLocalVideoTrackStat];
            }
        }
        [uniLocalVideoTrackStats setObject:uniLocalVideoTrackStatList forKey:trackId];
    }
    return uniLocalVideoTrackStats;
}

+ (NSDictionary *)getUniRemoteAudioTrackStats:(NSDictionary *)nativeRemoteAudioTrackStats {
    NSMutableDictionary *uniRemoteAudioTrackStats = [NSMutableDictionary dictionaryWithCapacity:nativeRemoteAudioTrackStats.count];
    for (NSString *trackId in nativeRemoteAudioTrackStats.allKeys) {
        QNRemoteAudioTrackStats *nativeRemoteAudioTrackStat = [QNRtcTools getObject:trackId fromDic:nativeRemoteAudioTrackStats objClass:[QNRemoteAudioTrackStats class]];
        if (nativeRemoteAudioTrackStat) {
            NSMutableDictionary *uniRemoteAudioTrackStat = [NSMutableDictionary dictionary];
            [uniRemoteAudioTrackStat setObject:@(nativeRemoteAudioTrackStat.downlinkBitrate) forKey:@"downlinkBitrate"];
            [uniRemoteAudioTrackStat setObject:@(nativeRemoteAudioTrackStat.downlinkLostRate) forKey:@"downlinkLostRate"];
            [uniRemoteAudioTrackStat setObject:@(nativeRemoteAudioTrackStat.uplinkRTT) forKey:@"uplinkRTT"];
            [uniRemoteAudioTrackStat setObject:@(nativeRemoteAudioTrackStat.uplinkLostRate) forKey:@"uplinkLostRate"];
            
            [uniRemoteAudioTrackStats setObject:uniRemoteAudioTrackStat forKey:trackId];
        }
    }
    return uniRemoteAudioTrackStats;
}

+ (NSDictionary *)getUniRemoteVideoTrackStats:(NSDictionary *)nativeRemoteVideoTrackStats {
    NSMutableDictionary *uniRemoteVideoTrackStats = [NSMutableDictionary dictionaryWithCapacity:nativeRemoteVideoTrackStats.count];
    for (NSString *trackId in nativeRemoteVideoTrackStats.allKeys) {
        QNRemoteVideoTrackStats *nativeRemoteVideoTrackStat = [QNRtcTools getObject:trackId fromDic:nativeRemoteVideoTrackStats objClass:[QNRemoteVideoTrackStats class]];
        if (nativeRemoteVideoTrackStat) {
            NSMutableDictionary *uniRemoteVideoTrackStat = [NSMutableDictionary dictionary];
            NSString *profile = @"";
            switch (nativeRemoteVideoTrackStat.profile) {
                case QNTrackProfileLow: profile = @"LOW"; break;
                case QNTrackProfileMedium: profile = @"MEDIUM"; break;
                case QNTrackProfileHigh: profile = @"HIGH"; break;
                default: break;
            }
            [uniRemoteVideoTrackStat setObject:profile forKey:@"profile"];
            [uniRemoteVideoTrackStat setObject:@(nativeRemoteVideoTrackStat.downlinkFrameRate) forKey:@"downlinkFrameRate"];
            [uniRemoteVideoTrackStat setObject:@(nativeRemoteVideoTrackStat.downlinkBitrate) forKey:@"downlinkBitrate"];
            [uniRemoteVideoTrackStat setObject:@(nativeRemoteVideoTrackStat.downlinkLostRate) forKey:@"downlinkLostRate"];
            [uniRemoteVideoTrackStat setObject:@(nativeRemoteVideoTrackStat.uplinkRTT) forKey:@"uplinkRTT"];
            [uniRemoteVideoTrackStat setObject:@(nativeRemoteVideoTrackStat.uplinkLostRate) forKey:@"uplinkLostRate"];
            [uniRemoteVideoTrackStat setObject:@(nativeRemoteVideoTrackStat.uplinkFrameWidth) forKey:@"uplinkFrameWidth"];
            [uniRemoteVideoTrackStat setObject:@(nativeRemoteVideoTrackStat.uplinkFrameHeight) forKey:@"uplinkFrameHeight"];
            
            [uniRemoteVideoTrackStats setObject:uniRemoteVideoTrackStat forKey:trackId];
        }
    }
    return uniRemoteVideoTrackStats;
}

+ (NSString *)getUniProfile:(QNTrackProfile)nativeProfile {
    NSString *uniProfile = @"";
    switch (nativeProfile) {
        case QNTrackProfileLow: uniProfile = @"LOW"; break;
        case QNTrackProfileMedium: uniProfile = @"MEDIUM"; break;
        case QNTrackProfileHigh: uniProfile = @"HIGH"; break;
        default: break;
    }
    return uniProfile;
}

+ (NSString *)getUniCaptureVideoOrientation:(AVCaptureVideoOrientation)nativeCaptureVideoOrientation {
    NSString *uniCaptureVideoOrientation = @"";
    switch (nativeCaptureVideoOrientation) {
        case AVCaptureVideoOrientationPortrait: uniCaptureVideoOrientation = @"AVCaptureVideoOrientationPortrait"; break;
        case AVCaptureVideoOrientationLandscapeRight: uniCaptureVideoOrientation = @"AVCaptureVideoOrientationLandscapeRight"; break;
        case AVCaptureVideoOrientationLandscapeLeft: uniCaptureVideoOrientation = @"AVCaptureVideoOrientationLandscapeLeft"; break;
        case AVCaptureVideoOrientationPortraitUpsideDown: uniCaptureVideoOrientation = @"AVCaptureVideoOrientationPortraitUpsideDown"; break;
        default: break;
    }
    return uniCaptureVideoOrientation;
}

+ (NSString *)getUniFillMode:(QNVideoFillModeType)nativeFillMode {
    NSString *uniFillMode = @"";
    switch (nativeFillMode) {
        case QNVideoFillModeNone: uniFillMode = @"QNVideoFillModeNone"; break;
        case QNVideoFillModeStretch: uniFillMode = @"QNVideoFillModeStretch"; break;
        case QNVideoFillModePreserveAspectRatio: uniFillMode = @"QNVideoFillModePreserveAspectRatio"; break;
        case QNVideoFillModePreserveAspectRatioAndFill: uniFillMode = @"QNVideoFillModePreserveAspectRatioAndFill"; break;
        default: break;
    }
    return uniFillMode;
}

+ (NSDictionary *)getUniAudioDeviceChangedCallBackWithDeviceType:(QNAudioDeviceType)deviceType {
    NSString *device = @"";
    switch (deviceType) {
        case QNAudioDeviceTypeSpeaker: device = @"SPEAKER_PHONE"; break;
        case QNAudioDeviceTypeReceiver: device = @"EARPIECE"; break;
        case QNAudioDeviceTypeWiredHeadphone: device = @"WIRED_HEADSET"; break;
        case QNAudioDeviceTypeBluetooth: device = @"BLUETOOTH"; break;
        default: break;
    }
    return @{
        @"device": device
    };
}

+ (NSDictionary *)getUniConnectionStateChangedCallBackWithRoomState:(QNConnectionState)state disconnectedInfo:(QNConnectionDisconnectedInfo *)info {
    NSString *connectState = @"";
    NSString *reason = @"";
    switch (state) {
        case QNConnectionStateConnected: connectState = @"CONNECTED"; break;
        case QNConnectionStateConnecting: connectState = @"CONNECTING"; break;
        case QNConnectionStateDisconnected: connectState = @"DISCONNECTED"; break;
        case QNConnectionStateReconnecting: connectState = @"RECONNECTING"; break;
        case QNConnectionStateReconnected: connectState = @"RECONNECTED"; break;
        default: break;
    }
    switch (info.reason) {
        case QNConnectionDisconnectedReasonLeave: reason = @"LEAVE"; break;
        case QNConnectionDisconnectedReasonKickedOut: reason = @"KICKED_OUT"; break;
        case QNConnectionDisconnectedReasonRoomClosed: reason = @"ROOM_CLOSED"; break;
        case QNConnectionDisconnectedReasonRoomFull: reason = @"ROOM_FULL"; break;
        case QNConnectionDisconnectedReasonError: reason = @"ERROR"; break;
        default: break;
    }
    return @{
        @"state": connectState,
        @"info": @{
            @"reason": reason,
            @"errorMessage": info.error.localizedDescription ? info.error.localizedDescription : @"",
            @"errorCode": @(info.error.code)
        }
    };
}

+ (NSDictionary *)getUniUserJoinedCallBackWithUserID:(NSString *)userID userData:(NSString *)userData {
    return @{
        @"remoteUserID": userID ? userID : @"",
        @"userData": userData ? userData : @""
    };
}

+ (NSDictionary *)getUniUserReconnectingCallBackWithUserID:(NSString *)userID {
    return @{
        @"remoteUserID": userID ? userID : @""
    };
}

+ (NSDictionary *)getUniUserReconnectedCallBackWithUserID:(NSString *)userID {
    return @{
        @"remoteUserID": userID ? userID : @""
    };
}

+ (NSDictionary *)getUniUserLeftCallBackWithUserID:(NSString *)userID {
    return @{
        @"remoteUserID": userID ? userID : @""
    };
}

+ (NSDictionary *)getUniUserPublishedCallBackWithTracks:(NSArray<QNRemoteTrack *> *)tracks userID:(NSString *)userID {
    NSMutableArray<NSDictionary *> *uniRemoteTracks = [NSMutableArray arrayWithCapacity:tracks.count];
    for (QNRemoteTrack *remoteTrack in tracks) {
        NSString *trackKind = remoteTrack.kind == QNTrackKindVideo ? @"video" : @"audio";
        NSDictionary *uniRemoteTrack = @{
            @"userID": userID ? userID : @"",
            @"trackID": remoteTrack.trackID ? remoteTrack.trackID : @"",
            @"kind": trackKind,
            @"tag": remoteTrack.tag ? remoteTrack.tag : @""
        };
        [uniRemoteTracks addObject:uniRemoteTrack];
    }
    return @{
        @"remoteUserID": userID ? userID : @"",
        @"trackList": uniRemoteTracks
    };
}

+ (NSDictionary *)getUniUserUnpublishedCallBackWithTracks:(NSArray<QNRemoteTrack *> *)tracks userID:(NSString *)userID {
    NSMutableArray<NSDictionary *> *uniRemoteTracks = [NSMutableArray arrayWithCapacity:tracks.count];
    for (QNRemoteTrack *remoteTrack in tracks) {
        NSString *trackKind = remoteTrack.kind == QNTrackKindVideo ? @"video" : @"audio";
        NSDictionary *uniRemoteTrack = @{
            @"userID": userID ? userID : @"",
            @"trackID": remoteTrack.trackID ? remoteTrack.trackID : @"",
            @"kind": trackKind,
            @"tag": remoteTrack.tag ? remoteTrack.tag : @""
        };
        [uniRemoteTracks addObject:uniRemoteTrack];
    }
    return @{
        @"remoteUserID": userID ? userID : @"",
        @"trackList": uniRemoteTracks
    };
}

+ (NSDictionary *)getUniAudioSubscribedCallBackWithAudioTracks:(NSArray<QNRemoteAudioTrack *> *)audioTracks userID:(NSString *)userID {
    NSMutableArray<NSDictionary *> *uniRemoteAudioTracks = [NSMutableArray arrayWithCapacity:audioTracks.count];
    for (QNRemoteAudioTrack *remoteAudioTrack in audioTracks) {
        NSDictionary *uniRemoteAudioTrack = @{
            @"userID": userID ? userID : @"",
            @"trackID": remoteAudioTrack.trackID ? remoteAudioTrack.trackID : @"",
            @"kind": @"audio",
            @"tag": remoteAudioTrack.tag ? remoteAudioTrack.tag : @""
        };
        [uniRemoteAudioTracks addObject:uniRemoteAudioTrack];
    }
    return @{
        @"remoteUserID": userID ? userID : @"",
        @"trackList": uniRemoteAudioTracks
    };
}

+ (NSDictionary *)getUniVideoSubscribedCallBackWithVideoTrack:(QNRemoteVideoTrack *)videoTrack userID:(NSString *)userID {
    return @{
        @"remoteUserID": userID ? userID : @"",
        @"trackList": @[
                @{
                    @"userID": userID ? userID : @"",
                    @"trackID": videoTrack.trackID ? videoTrack.trackID : @"",
                    @"kind": @"video",
                    @"tag": videoTrack.tag ? videoTrack.tag : @""
                }
        ]
    };
}

+ (NSDictionary *)getUniMessageReceivedCallBackWithMessage:(QNMessageInfo *)message {
    return @{
        @"id": message.identifier ? message.identifier : @"",
        @"userId": message.userID ? message.userID : @"",
        @"content": message.content ? message.content : @"",
        @"timestamp": message.timestamp ? message.timestamp : @0
    };
}

+ (NSDictionary *)getUniStartLiveStreamingCallBackWithStreamID:(NSString *)streamID {
    return @{
        @"streamID": streamID ? streamID : @""
    };
}

+ (NSDictionary *)getUniStoppedLiveStreamingCallBackWithStreamID:(NSString *)streamID {
    return @{
        @"streamID": streamID ? streamID : @""
    };
}

+ (NSDictionary *)getUniUpdatedLiveStreamingCallBackWithStreamID:(NSString *)streamID {
    return @{
        @"streamID": streamID ? streamID : @""
    };
}

+ (NSDictionary *)getUniErrorLiveStreamingCallBackWithStreamID:(NSString *)streamID errorInfo:(QNLiveStreamingErrorInfo *)errorInfo {
    NSString *type = @"";
    NSString *code = @"";
    switch (errorInfo.type) {
        case QNLiveStreamingTypeStart: type = @"START"; break;
        case QNLiveStreamingTypeStop: type = @"STOP"; break;
        case QNLiveStreamingTypeUpdate: type = @"UPDATE"; break;
        default: break;
    }
    switch (errorInfo.error.code) {
        case QNRTCErrorNoPermission: code = @"ERROR_NO_PERMISSION"; break;
        case QNRTCErrorRoomStateError: code = @"ERROR_INVALID_STATE"; break;
        case QNRTCErrorInvalidParameter: code = @"ERROR_INVALID_PARAMETER"; break;
        case QNRTCErrorSignalTimeOut: code = @"ERROR_SIGNAL_TIMEOUT"; break;
        case QNRTCErrorServerUnavailable: code = @"SERVER_ERROR"; break;
        default: break;
    }
    return @{
        @"streamID": streamID ? streamID : @"",
        @"info": @{
                @"type": type,
                @"code": code,
                @"message": errorInfo.error.localizedDescription ? errorInfo.error.localizedDescription : @"Unknown Error"
        }
    };
}

+ (NSDictionary *)getUniMuteStateChangedCallBackWithTrackID:(NSString *)trackID isMuted:(BOOL)isMuted {
    return @{
        @"isMuted": @(isMuted),
        @"trackID": trackID ? trackID : @""
    };
}

+ (NSDictionary *)getUniVideoProfileChangedCallBackWithTrackID:(NSString *)trackID profile:(QNTrackProfile)profile {
    return @{
        @"profile": [self getUniProfile:profile],
        @"trackID": trackID ? trackID : @""
    };
}

+ (NSArray<NSNumber *> *)getUniZooms:(CGFloat)nativeVideoMaxZoomFactor {
    return @[@1.0, @(nativeVideoMaxZoomFactor)];
}

+ (NSDictionary *)getUniAudioMusicMixerState:(QNAudioMusicMixerState) audioMusicMixerState {
    NSString *state = @"";
    switch (audioMusicMixerState) {
        case QNAudioMusicMixerStateIdle: state = @"IDLE"; break;
        case QNAudioMusicMixerStateMixing: state = @"MIXING"; break;
        case QNAudioMusicMixerStatePaused: state = @"PAUSED"; break;
        case QNAudioMusicMixerStateStopped: state = @"STOPPED"; break;
        case QNAudioMusicMixerStateCompleted: state = @"COMPLETED"; break;
        default: break;
    }
    return @{
        @"state": state
    };
}

@end

@implementation QNCameraVideoTrackSetting
@end

@implementation QNScreenVideoTrackSetting
@end

@implementation QNBeautySetting
@end

@implementation QNPushImageSetting
@end

@implementation QNWaterMarkSetting
@end
