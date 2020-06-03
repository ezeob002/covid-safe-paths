/*global JSX*/
import React, { createContext, useEffect, useState } from 'react';

{/* import * as ExposureNotifications from './exposureNotificationsNativeModule'; */}
{/* import * as API from './exposureNotificationsAPI' */}

interface ExposureNotificationsState {
  exposure: boolean
}

const ExposureNotificationsContext = createContext<ExposureNotificationsState>({
  exposure: false
});

interface ExposureNotificationProviderProps {
  children: JSX.Element
}

const ExposureNotificationsProvider = ({ children }: ExposureNotificationProviderProps) => {
  const [exposureNotificationState, setExposureNotificationState] = useState<boolean>(
    false
  );

  useEffect(() => {
    console.log('mounting provider')


    return () => {
      subscriptionExposureNotification.remove();
      subscriptionToDeleteDiagnosisKeyFile.remove()
    };
  }, []);

  return (
    <ExposureNotificationsContext.Provider value={{ exposure: exposureNotificationState }}>
      {children}
    </ExposureNotificationsContext.Provider>
  );
};

export { ExposureNotificationsProvider };
export default ExposureNotificationsContext;

    {/* const subscriptionExposureNotification = */}
    {/*   ExposureNotifications.subscribeToExposureNotificationState( */}
    {/*    ({exposure}: ExposureNotificationsState) => { */}
    {/*      API.postDiagnosisKeys() */}
    {/*     setExposureNotificationState(exposure); */}
    {/*   }, */}
    {/* ); */}
    {/* const subscriptionToDeleteDiagnosisKeyFile = */}
    {/*   ExposureNotifications.subscribeToDeleteDiagnosisKeyFile( */}
    {/*   (foo) => { */}
    {/*     console.log(foo) */}
    {/*   } */}
    {/* ) */}
