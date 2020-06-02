//
//  PTCExposureNotificationEventEmitter.swift
//  BTE
//
//  Created by John Schoeman on 6/2/20.
//  Copyright © 2020 Path Check Inc. All rights reserved.
//

import Foundation
@objc(PTCExposureNotificationEventEmitter)
class PTCExposureNotificationEventEmitter: RCTEventEmitter {
  
  override func supportedEvents() -> [String]! {
    return ["onExposureNotificaitonStateUpdated"]
  }
}

