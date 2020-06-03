/*global JSX*/
import React, { createContext, useEffect, useState } from 'react';
import {Button} from "react-native"

import * as ExposureNotifications from './exposureNotificationsNativeModule';
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

    {/* const subscriptionExposureNotification = */}
    {/*   ExposureNotifications.subscribeToExposureNotificationState( */}
    {/*    ({exposure}: ExposureNotificationsState) => { */}
    {/*     setExposureNotificationState(exposure); */}
    {/*   }, */}
    {/* ); */}

    const subscriptionToDeleteDiagnosisKeyFile =
      ExposureNotifications.subscribeToDeleteDiagnosisKeyFile(
      (foo) => {
        console.log("Got some event!:", foo)
      }
    )

    return () => {
      subscriptionExposureNotification.remove();
      subscriptionToDeleteDiagnosisKeyFile.remove()
    };
  }, []);

  return (
    <ExposureNotificationsContext.Provider value={{ exposure: exposureNotificationState }}>
      {children}
      <Button onPress={ExposureNotifications.detectExposures} title={"DETECT"} />
    </ExposureNotificationsContext.Provider>
  );
};

export { ExposureNotificationsProvider };
export default ExposureNotificationsContext;

