import { NativeEventEmitter, NativeModules } from 'react-native';

const ExposureNotificationEvents = new NativeEventEmitter(
  NativeModules.ExposureNotificationEventEmitter,
);

export interface ExposureNotificationState {
  exposure: boolean;
}

export const subscribeToExposureNotificationState = (
  callback: (exposureNotificationState: ExposureNotificationState) => void,
) => {
  return ExposureNotificationEvents.addListener(
    'onExposureNotificationStateUpdated',
    ({ exposure }) => {
      const exposureNotificationState: ExposureNotificationState = {
        exposure,
      };
      callback(exposureNotificationState);
    },
  );
};
