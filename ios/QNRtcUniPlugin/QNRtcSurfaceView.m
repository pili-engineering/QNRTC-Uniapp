//
//  QNRtcSurfaceView.m
//  QNRtcUniPlugin
//
//  Created by 童捷 on 2021/10/8.
//  Copyright © 2020 DCloud. All rights reserved.
//

#import "QNRtcSurfaceView.h"
#import "QNRtcNative.h"
#import "QNCustomView.h"

@interface QNRtcSurfaceView ()

@property (nonatomic, assign) NSInteger local;

@property (nonatomic, copy) NSString *identifyID;

@property (nonatomic, copy) NSString *trackID;

@property (nonatomic, copy) NSString *userID;

@end

@implementation QNRtcSurfaceView
// 初始化属性
- (instancetype)initWithRef:(NSString *)ref type:(NSString *)type styles:(NSDictionary *)styles attributes:(NSDictionary *)attributes events:(NSArray *)events weexInstance:(WXSDKInstance *)weexInstance {
    if (self = [super initWithRef:ref type:type styles:styles attributes:attributes events:events weexInstance:weexInstance]) {
        if (attributes[@"local"]) {
            _local = [WXConvert NSInteger: attributes[@"local"]];
        }
        if (attributes[@"identifyID"]) {
            _identifyID = [WXConvert NSString: attributes[@"identifyID"]];
        }
        if (attributes[@"userID"]) {
            _userID = [WXConvert NSString: attributes[@"userID"]];
        }
        if (attributes[@"trackID"]) {
            _trackID = [WXConvert NSString: attributes[@"trackID"]];
        }
    }
    return self;
}

// 属性更新
- (void)updateAttributes:(NSDictionary *)attributes {
    if (attributes[@"local"]) {
        _local = [WXConvert NSInteger: attributes[@"local"]];
    }
    if (attributes[@"identifyID"]) {
        _identifyID = [WXConvert NSString: attributes[@"identifyID"]];
    }
    if (attributes[@"userID"]) {
        _userID = [WXConvert NSString: attributes[@"userID"]];
    }
    if (attributes[@"trackID"]) {
        _trackID = [WXConvert NSString: attributes[@"trackID"]];
    }
    [self setupPreviewView];
}

// 视图加载生命周期
- (void)viewDidLoad {
    [super viewDidLoad];
    self.view.backgroundColor = [UIColor colorWithRed:30/255.0 green:30/255.0 blue:30/255.0 alpha:1.0];
    [self setupPreviewView];
}

// 渲染自定义 UIView
- (UIView *)loadView {
    return [[QNCustomView alloc] init];
}

// 创建渲染视图
- (void)setupPreviewView {
    [RtcNativePlugin play:self.view local:self.local userID:self.userID identityID:self.identifyID trackID:self.trackID];
}


@end
