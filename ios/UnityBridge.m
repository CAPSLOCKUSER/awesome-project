#import "UnityBridge.h"

@implementation UnityBridge

// Expose this module to the React Native bridge
RCT_EXPORT_MODULE()

// Persist data
RCT_EXPORT_METHOD(showUnityWindow) {
  
  NSLog(@"----> objective c: showUnityWindow");
  
  [(AppDelegate *)[UIApplication sharedApplication].delegate showUnityWindow];
}

@end