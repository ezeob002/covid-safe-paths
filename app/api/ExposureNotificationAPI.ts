const exposureNotificationServerUrl = 'https://example.com';

const defaultHeaders = {
  'content-type': 'ampplication/json',
  accept: 'application/json',
};

export type NetworkResponse<T, U = {}> = NetworkSuccess<T> | NetworkFailure<U>;

interface NetworkSuccess<T> {
  kind: 'success';
  body: T;
}

interface NetworkFailure<U> {
  kind: 'failure';
  error: U;
}

interface DiagnosisKeys {}

type ExposureNotificationError = 'unknown';

interface Exposure {
  date: Date;
  duration: TimeInterval;
  totalRiskScore: ENRiskScore;
  transmissionRiskLevel: ENRiskLevel;
}

interface TestResult {
  id: UUID; // A unique identifier for this test result
  isAdded: boolean; // Whether the user completed the add positive diagnosis flow for this test result
  dateAdministered: Date; // The date the test was administered
  isShared: boolean; // Whether diagnosis keys were shared with the Health Authority for the purpose of notifying others
}

type Date = string;
type TimeInterval = string;
type ENRiskScore = number;
type ENRiskLevel = number;
type UUID = string;

export const postDiagnosisKeys = async (): Promise<NetworkResponse<
  DiagnosisKeys,
  ExposureNotificationError
>> => {
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
