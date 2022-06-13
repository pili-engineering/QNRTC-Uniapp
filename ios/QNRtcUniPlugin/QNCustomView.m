#import "QNCustomView.h"
@implementation QNCustomView
- (void)layoutSubviews {
    for (UIView *subview in self.subviews) {
        subview.frame = self.bounds;
    }
}
@end
