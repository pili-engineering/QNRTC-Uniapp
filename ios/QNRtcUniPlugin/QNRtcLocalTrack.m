//
//  QNRtcLocalTrack.m
//  QNRtcUniPlugin
//
//  Created by WorkSpace_Sun on 2021/10/29.
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



