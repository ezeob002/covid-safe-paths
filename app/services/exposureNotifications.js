import { NativeEventEmitter, NativeModules } from 'react-native';

const ExposureNotificationEvents = new NativeEventEmitter(
  NativeModules.ExposureNotificationEventEmitter,
);

// export interface ExposureNotificationState {
//   foo: string
// }

export const subscribeToExposureNotificationState = callback => {
  return ExposureNotificationEvents.addListener(
    'onExposureNotificationStateUpdated',
    ({ foo }) => {
      const exposureNotificationState = {
        foo,
      };
      callback(exposureNotificationState);
    },
  );
};
