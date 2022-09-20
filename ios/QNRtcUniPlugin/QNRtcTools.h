//
//  QNRtcTools.h
//  QNRtcUniPlugin
//
//  Created by WorkSpace_Sun on 2021/11/10.
//

#import <Foundation/Foundation.h>
#import "WeexSDK.h"
#import <CoreMedia/CoreMedia.h>
NS_ASSUME_NONNULL_BEGIN

@interface QNRtcTools : NSObject

/*!
 * @abstract 从 Dic 中获取指定 Key 的对象  同时做类型校验
 *
 * @param key 键值
 * @param dic 源字典
 * @param objClass 类型
 *
 * @return id类型
 */
+ (id)getObject:(NSString *)key fromDic:(NSDictionary *)dic objClass:(Class)objClass;

/*!
 * @abstract 同步切换主线程执行任务
 *
 * @param operation 待执行的任务
 */
+ (void)dispatchSyncMainThreadSafe:(void(^)(void))operation;

/*!
 * @abstract SampleBsampleBuffer
 *
 * @param sampleBuffer 引用
 */
+ (UIImage *)imageFromSampleBuffer:(CMSampleBufferRef)sampleBuffer;

+ (UIImage *)imageFromPixelBuffer:(CVPixelBufferRef)pixelBufferRef;
+ (void)convertI420PixelBuffer:(CVPixelBufferRef)srcPixelBuffer toNV12PixelBuffer:(CVPixelBufferRef)destPixelBuffer;
+ (NSString *) image2DataURL: (UIImage *) image;
@end

NS_ASSUME_NONNULL_END
