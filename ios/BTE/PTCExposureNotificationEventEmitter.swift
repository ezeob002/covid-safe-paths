import Foundation

@objc(PTCExposureEventEmitter)
class PTCExposureEventEmitter: RCTEventEmitter {
  
//  @objc static func requiresMainQueueSetup() -> Bool {
//      return false
//  }
  override func supportedEvents() -> [String]! {
    return ["onExposureNotificaitonStateUpdated", "onDeleteDiagnosisFileKeys"]
  }
  
}
