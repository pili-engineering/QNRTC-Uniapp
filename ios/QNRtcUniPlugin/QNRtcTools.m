//
//  QNRtcTools.m
//  QNRtcUniPlugin
//
//  Created by WorkSpace_Sun on 2021/11/10.
//

#import "QNRtcTools.h"

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

@end
