import { NativeEventEmitter, NativeModules } from 'react-native';

console.log('native module', NativeModules.PTCExposureNotificationEventEmitter);

const ExposureNotificationEvents = new NativeEventEmitter(
  NativeModules.PTCExposureNotificationEventEmitter,
);

const exposureNotificationModule = NativeModules.PTCExposureManagerModule;
console.log('expModule', exposureNotificationModule);
export const detectExposures = async () => {
  console.log('js side, calling detectExposures');
  exposureNotificationModule.detectExposures();
};
export const ping = async () => {
  exposureNotificationModule.ping();
};

console.log('ExposureNotificationsEvents', ExposureNotificationEvents);

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

export const subscribeToDeleteDiagnosisKeyFile = (
  callback: (foo: string, urlString: string[]) => void,
) => {
  console.log('subscribing to events');
  return ExposureNotificationEvents.addListener(
    'onRequestDeleteDiagnosisKeyFile',
    (urlStrings: string[]) => {
      console.log('got urlstirngs', urlStrings);
      callback('callback to deleteDiagnosisKeyFile called', urlStrings);
    },
  );
};

