#import <React/RCTLog.h>
#import <React/RCTBridgeModule.h>
#import "BTE-Swift.h"

@interface RCT_EXTERN_MODULE(ExposureManagerModule, NSObject)

RCT_EXPORT_METHOD(detectExposures)
{
//  [[ExposureNotificationService shared] detectExposures];
  [[ExposureManager shared] detectExposuresWithCompletionHandler:^(BOOL success) {
    if (success) {
      NSLog(@"ZORG");
    }
  }];
}
@end
