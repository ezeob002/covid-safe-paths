import Foundation
import ExposureNotification
import BackgroundTasks

final class ExposureNotificationService: NSObject {

  static let backgroundTaskIdentifier = Bundle.main.bundleIdentifier! + ".exposure-notification"

  @objc static let shared = ExposureNotificationService()

  @objc func start() {
    BGTaskScheduler.shared.register(forTaskWithIdentifier: ExposureNotificationService.backgroundTaskIdentifier, using: .main) { task in

      // Perform the exposure detection
      let progress = ExposureManager.shared.detectExposures { success in
        task.setTaskCompleted(success: success)
      }

      // Handle running out of time
      task.expirationHandler = {
        progress.cancel()
        LocalStore.shared.exposureDetectionErrorLocalizedDescription = NSLocalizedString("BACKGROUND_TIMEOUT", comment: "Error")
      }

      // Schedule the next background task
      self.scheduleBackgroundTaskIfNeeded()
    }

    scheduleBackgroundTaskIfNeeded()
  }

  func scheduleBackgroundTaskIfNeeded() {
    guard ENManager.authorizationStatus == .authorized else { return }
    let taskRequest = BGProcessingTaskRequest(identifier: ExposureNotificationService.backgroundTaskIdentifier)
    taskRequest.requiresNetworkConnectivity = true
    do {
      try BGTaskScheduler.shared.submit(taskRequest)
    } catch {
      print("Unable to schedule background task: \(error)")
    }
  }
}
