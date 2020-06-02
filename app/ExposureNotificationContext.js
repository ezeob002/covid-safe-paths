import React, { createContext, useEffect, useState } from 'react';

import ExposureNotification from './services';

const initialState = {};

const ExposureNotificationsContext = createContext(initialState);

const ExposureNotificationsProvider = ({ children }) => {
  const [exposureNotificationState, setExposureNotificationState] = useState(
    {},
  );

  useEffect(() => {
    const subscriptionExposureNotification = ExposureNotification.subscribeToExposureNotificationState(
      exposureNotificationState => {
        setExposureNotificationState(exposureNotificationState);
      },
    );
    return () => {
      subscriptionExposureNotification.remove();
    };
  }, []);

  return (
    <ExposureNotificationsContext.Provider
      value={{
        exposureNotificationState,
      }}>
      {children}
    </ExposureNotificationsContext.Provider>
  );
};

export { ExposureNotificationsProvider };
export default ExposureNotificationsContext;
