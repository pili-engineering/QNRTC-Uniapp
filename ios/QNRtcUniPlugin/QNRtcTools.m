//
//  QNRtcTools.m
//  QNRtcUniPlugin
//
//  Created by 童捷 on 2021/10/8.
//  Copyright © 2020 DCloud. All rights reserved.
//
#import "QNRtcTools.h"
#import <QNRTCKit/QNUtil.h>
@implementation QNRtcTools

+ (id)getObject:(NSString *)key fromDic:(NSDictionary *)dic objClass:(Class)objClass {
    if (key && dic && dic[key] && [dic[key] isKindOfClass:objClass]) {
        return (id)dic[key];
    }
    return nil;
}

+ (void)dispatchSyncMainThreadSafe:(void(^)(void))operation {
    if (strcmp(dispatch_queue_get_label(DISPATCH_CURRENT_QUEUE_LABEL), dispatch_queue_get_label(dispatch_get_main_queue())) == 0) {
        operation();
    } else {
        dispatch_sync(dispatch_get_main_queue(), ^{
            operation();
        });
    }
}

+ (UIImage *)imageFromSampleBuffer:(CMSampleBufferRef)sampleBuffer
{
    if (!sampleBuffer) {
        return nil;
    }

    CVImageBufferRef imageBuffer = CMSampleBufferGetImageBuffer(sampleBuffer);

    CVPixelBufferLockBaseAddress(imageBuffer, 0);
    
    void *baseAddress = CVPixelBufferGetBaseAddress(imageBuffer);
    
    size_t bytesPerRow = CVPixelBufferGetBytesPerRow(imageBuffer);

    size_t width = CVPixelBufferGetWidth(imageBuffer);
    size_t height = CVPixelBufferGetHeight(imageBuffer);
    
    CGColorSpaceRef colorSpace = CGColorSpaceCreateDeviceRGB();
    
    CGContextRef context = CGBitmapContextCreate(baseAddress, width, height, 8,
                                                 bytesPerRow, colorSpace, kCGBitmapByteOrder32Little | kCGImageAlphaPremultipliedFirst);
    CGImageRef quartzImage = CGBitmapContextCreateImage(context);
    
    CVPixelBufferUnlockBaseAddress(imageBuffer,0);
    
    CGContextRelease(context);
    CGColorSpaceRelease(colorSpace);
    
    UIImage *image = [UIImage imageWithCGImage:quartzImage scale:1.0f orientation:UIImageOrientationRight];

    CGImageRelease(quartzImage);
    
    return image;
    
}
+ (void)convertI420PixelBuffer:(CVPixelBufferRef)srcPixelBuffer
             toNV12PixelBuffer:(CVPixelBufferRef *)destPixelBuffer {
    
//    CVPixelBufferLockBaseAddress(srcPixelBuffer, kCVPixelBufferLock_ReadOnly);
//
//    uint8_t *srcY = (uint8_t *)CVPixelBufferGetBaseAddressOfPlane(srcPixelBuffer, 0);
//    uint8_t *srcU = (uint8_t *)CVPixelBufferGetBaseAddressOfPlane(srcPixelBuffer, 1);
//    uint8_t *srcV = (uint8_t *)CVPixelBufferGetBaseAddressOfPlane(srcPixelBuffer, 2);
//    
//    size_t srcStrideY = CVPixelBufferGetBytesPerRowOfPlane(srcPixelBuffer, 0);
//    size_t srcStrideU = CVPixelBufferGetBytesPerRowOfPlane(srcPixelBuffer, 1);
//    
//    size_t width    = CVPixelBufferGetWidth(srcPixelBuffer);
//    size_t height   = CVPixelBufferGetHeight(srcPixelBuffer);
//    
//    OSType destPixelFormat = kCVPixelFormatType_420YpCbCr8BiPlanarVideoRange;
//    if (kCVPixelFormatType_420YpCbCr8PlanarFullRange == CVPixelBufferGetPixelFormatType(srcPixelBuffer)) {
//        destPixelFormat = kCVPixelFormatType_420YpCbCr8BiPlanarFullRange;
//    }
//    
//    NSDictionary* pixelBufferOptions = @{
//                                         (NSString*) kCVPixelBufferOpenGLESCompatibilityKey : @YES,
//                                         (NSString*) kCVPixelBufferIOSurfacePropertiesKey : [NSDictionary new]
//                                         };
//    
//    CVReturn result = CVPixelBufferCreate(kCFAllocatorDefault,
//                                          width,
//                                          height,
//                                          destPixelFormat,
//                                          (__bridge CFDictionaryRef _Nullable)(pixelBufferOptions),
//                                          destPixelBuffer);
//    
//    if (result != kCVReturnSuccess) {
//        CVPixelBufferUnlockBaseAddress(srcPixelBuffer, kCVPixelBufferLock_ReadOnly);
//        return;
//    }
//    
//    CVPixelBufferLockBaseAddress(*destPixelBuffer, 0);
//    
//    uint8_t *destY  = (uint8_t *)CVPixelBufferGetBaseAddressOfPlane(*destPixelBuffer, 0);
//    uint8_t *destUV = (uint8_t *)CVPixelBufferGetBaseAddressOfPlane(*destPixelBuffer, 1);
//    
//    size_t destStrideY  = CVPixelBufferGetBytesPerRowOfPlane(*destPixelBuffer, 0);
//    size_t destStrideUV = CVPixelBufferGetBytesPerRowOfPlane(*destPixelBuffer, 1);
//    
//    for (int i = 0; i < height; i ++) {
//        memcpy(destY + i * destStrideY, srcY + i * srcStrideY , MIN(destStrideY, srcStrideY));
//    }
//    
//    for (int i = 0; i < height / 2; i ++) {
//        for (int j = 0 ; j < MIN(destStrideUV / 2, srcStrideU); j ++) {
//            destUV[i * destStrideUV + j * 2] = srcU[i * srcStrideU + j];
//            destUV[i * destStrideUV + j * 2 + 1] = srcV[i * srcStrideU + j];
//        }
//    }
//    
//    CVPixelBufferUnlockBaseAddress(*destPixelBuffer, 0);
//    CVPixelBufferUnlockBaseAddress(srcPixelBuffer, kCVPixelBufferLock_ReadOnly);
}

+ (UIImage *)imageFromPixelBuffer:(CVPixelBufferRef)pixelBuffer {
    
    UIImage *resultImage    = nil;
//    CVPixelBufferRef tempPixelBuffer = NULL;
//    
//    OSType pixelFormat = CVPixelBufferGetPixelFormatType(pixelBuffer);
//    
//    if (kCVPixelFormatType_420YpCbCr8Planar == pixelFormat ||
//        kCVPixelFormatType_420YpCbCr8PlanarFullRange == pixelFormat) {
//        [self convertI420PixelBuffer:pixelBuffer toNV12PixelBuffer:&tempPixelBuffer];
//    } else {
//        tempPixelBuffer = pixelBuffer;
//    }
//
//    CIImage *ciImage        = [CIImage imageWithCVPixelBuffer:tempPixelBuffer];
//    CGRect fromRect         = CGRectMake(0, 0, CVPixelBufferGetWidth(tempPixelBuffer),CVPixelBufferGetHeight(tempPixelBuffer));
//    CIContext *context      = [CIContext contextWithOptions:nil];
//    CGImageRef cgImage      = [context createCGImage:ciImage fromRect:fromRect];
//    resultImage             = [UIImage imageWithCGImage:cgImage];
//    CGImageRelease(cgImage);
//    
//    if (tempPixelBuffer != pixelBuffer) {
//        CVPixelBufferRelease(tempPixelBuffer);
//    }
    
    return resultImage;
}

+ (NSString *) image2DataURL: (UIImage *) image
{
    NSData *imageData = nil;
    NSString *mimeType = nil;
 
    imageData = UIImageJPEGRepresentation(image, 1.0f);
    mimeType = @"image/jpeg";
    return [NSString stringWithFormat:@"data:%@;base64,%@", mimeType,
           [imageData base64EncodedStringWithOptions: NSDataBase64Encoding64CharacterLineLength]];
 
}


@end
