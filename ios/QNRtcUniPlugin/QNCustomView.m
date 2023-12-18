//
//  QNCustomView.m
//  QNRtcUniPlugin
//
//  Created by 童捷 on 2021/10/8.
//  Copyright © 2020 DCloud. All rights reserved.
//
#import "QNCustomView.h"
@implementation QNCustomView
- (void)layoutSubviews {
    for (UIView *subview in self.subviews) {
        subview.frame = self.bounds;
    }
}
@end
