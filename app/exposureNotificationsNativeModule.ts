import { NativeEventEmitter, NativeModules } from 'react-native';

console.log('native module', NativeModules.PTCExposureNotificationEventEmitter);

// const ExposureNotificationEvents = new NativeEventEmitter(
//   NativeModules.PTCExposureNotificationEventEmitter,
// );

// const exposureNotificationModule = NativeModules.PTCExposureNotificationModule;

// export const ping = () => {
//   exposureNotificationModule.ping();
// };

// console.log('ExposureNotificationsEvents', ExposureNotificationEvents);

export interface ExposureNotificationState {
  exposure: boolean;
}

// export const subscribeToExposureNotificationState = (
//   callback: (exposureNotificationState: ExposureNotificationState) => void,
// ) => {
//   return ExposureNotificationEvents.addListener(
//     'onExposureNotificationStateUpdated',
//     ({ exposure }) => {
//       const exposureNotificationState: ExposureNotificationState = {
//         exposure,
//       };
//       callback(exposureNotificationState);
//     },
//   );
// };

// export const subscribeToDeleteDiagnosisKeyFile = (
//   callback: (foo: string, urlString: string[]) => void,
// ) => {
//   return ExposureNotificationEvents.addListener(
//     'onRequestDeleteDiagnosisKeyFile',
//     (urlStrings: string[]) => {
//       callback('callback to deleteDiagnosisKeyFile called', urlStrings);
//     },
//   );
// };

console.log(NativeModules.Counter);
