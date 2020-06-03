import Foundation

@objc(PTCExposureNotificationEventEmitter)
class PTCExposureNotificationEventEmitter: RCTEventEmitter {
  
  public static var emitter: RCTEventEmitter!
  
  override init() {
    super.init()
    PTCExposureEventEmitter.emitter = self
  }
  
  override func supportedEvents() -> [String]! {
    return ["onExposureNotificaitonStateUpdated", "onDeleteDiagnosisFileKeys"]
  }
}
