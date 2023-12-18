//
//  QNRtcLocalTrack.m
//  QNRtcUniPlugin
//
//  Created by 童捷 on 2023/10/8.
//  Copyright © 2023 DCloud. All rights reserved.
//

#import "QNRtcLocalTrack.h"
#import <QNRTCKit/QNRTCKit.h>

@interface QNRtcLocalTrack ()

@property (nonatomic, strong, readwrite) QNLocalTrack *nativeTrack;

@property (nonatomic, copy, readwrite) NSString *identifyID;

@end

@implementation QNRtcLocalTrack

- (instancetype)initWithIdentifyID:(NSString *)identifyID nativeTrack:(QNLocalTrack *)nativeTrack  {
    self = [super init];
    if (self) {
        self.nativeTrack = nativeTrack;
        self.identifyID = identifyID;
    }
    return self;
}

+ (instancetype)instanceWithIdentifyID:(NSString *)identifyID nativeTrack:(QNLocalTrack *)nativeTrack {
    return [[QNRtcLocalTrack alloc] initWithIdentifyID:identifyID nativeTrack:nativeTrack];
}

@end



