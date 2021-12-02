//
//  QNRtcLocalTrack.h
//  QNRtcUniPlugin
//
//  Created by WorkSpace_Sun on 2021/10/29.
//  Local Track 发布前没有 trackId，所以将 QNLocalTrack 封装一层，增加 Track 标识。

#import <Foundation/Foundation.h>

/*!
 * @abstract 相机视频 Track 标识
 */
static NSString *LOCAL_CAMERA_VIDEO_IDENTIFY_ID = @"LOCAL_CAMERA_VIDEO_IDENTIFY_ID";

/*!
 * @abstract 录屏视频 Track 标识
 */
static NSString *LOCAL_SCREEN_VIDEO_IDENTIFY_ID = @"LOCAL_SCREEN_VIDEO_IDENTIFY_ID";

/*!
 * @abstract 自定义视频 Track 标识
 */
static NSString *LOCAL_CUSTOM_VIDEO_IDENTIFY_ID = @"LOCAL_CUSTOM_VIDEO_IDENTIFY_ID";

/*!
 * @abstract 麦克风音频 Track 标识
 */
static NSString *LOCAL_MIC_AUDIO_IDENTIFY_ID = @"LOCAL_MIC_AUDIO_IDENTIFY_ID";

/*!
 * @abstract 自定义音频 Track 标识
 */
static NSString *LOCAL_CUSTOM_AUDIO_IDENTIFY_ID = @"LOCAL_CUSTOM_AUDIO_IDENTIFY_ID";

@class QNLocalTrack;

@interface QNRtcLocalTrack : NSObject

/*!
 * @abstract Track 标识
 */
@property (nonatomic, copy, readonly) NSString *identifyID;

/*!
 * @abstract 映射的 QNLocalTrack 实例
 */
@property (nonatomic, strong, readonly) QNLocalTrack *nativeTrack;

/*!
 * @abstract 实例化方法
 *
 * @param identifyID Track 标识
 * @param nativeTrack QNLocalTrack 实例
 */
+ (instancetype)instanceWithIdentifyID:(NSString *)identifyID nativeTrack:(QNLocalTrack *)nativeTrack;

@end
