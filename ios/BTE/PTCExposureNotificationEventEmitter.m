#import "PTCExposureNotificationEventEmitter.h"

@implementation PTCExposureNotificationEventEmitter

- (instancetype)init
{
  self = [super init];
  if (self) {
    //
  }
  return self;
}

- (NSArray<NSString *> *)supportedEvents {
  return @[@"deleteDiagnosisKeyFile"];
}

@end

