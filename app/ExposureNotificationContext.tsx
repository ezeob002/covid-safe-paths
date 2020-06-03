/*global JSX*/
import React, { createContext, useEffect, useState } from 'react';

import {ExposureNotifications} from './services';

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
    const subscriptionExposureNotification = ExposureNotifications.subscribeToExposureNotificationState(
       ({exposure}: ExposureNotificationsState) => {
        setExposureNotificationState(exposure);
      },
    );
    return () => {
      subscriptionExposureNotification.remove();
    };
  }, []);

  return (
    <ExposureNotificationsContext.Provider value={{ exposure: exposureNotificationState, }}>
      {children}
    </ExposureNotificationsContext.Provider>
  );
};

export { ExposureNotificationsProvider };
export default ExposureNotificationsContext;
