const exposureNotificationServerUrl = 'https://example.com';

const defaultHeaders = {
  'content-type': 'application/json',
  accept: 'application/json',
};

export const postDiagnosisKeys = async () => {
  const url = exposureNotificationServerUrl;
  const data = {
    foo: 'bar',
  };

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: defaultHeaders,
      body: JSON.stringify(data),
    });

    const json = await response.json();
    if (response.ok) {
      const { bar } = json;
      return { kind: 'success', body: { bar } };
    } else {
      switch (json.error) {
        default:
          return { kind: 'failure', error: 'unknown' };
      }
    }
  } catch (e) {
    return { kind: 'failure', error: 'unknown' };
  }
};

export const getDiagnosisKeyFileURLs = async () => {
  const url = exposureNotificationServerUrl;
  const response = await fetch(url, {
    method: 'GET',
    headers: defaultHeaders,
  });

  return wrapResponseBody(response);
};

export const downloadDiagnosisKeyFile = async () => {};

export const deleteDiagnosisKeyFile = async () => {};

export const getExposureConfiguration = async () => {};

export const verifyUniqueTestIdentifier = async () => {};

const wrapResponseBody = async response => {
  try {
    const json = await response.json();
    if (response.ok) {
      return { kind: 'success', body: json };
    } else {
      return { kind: 'failure', error: json };
    }
  } catch (e) {
    return { kind: 'failure', error: e };
  }
};
