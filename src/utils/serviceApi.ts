import common from './common';

/**
 * Function to handle API error
 * @param payload
 */
const handleApiError = (payload: any) => {
  if (payload?.status === 401 || payload?.response?.status === 401) {
    console.log('session out');
  }
};
/**
 * get API
 * @param endPoint
 * @param successCallback
 * @param failureCallback
 */
const getApiCall = (
  endPoint: string,
  successCallback: Function,
  failureCallback: Function,
) => {
  common.axiosInstance
    .get(endPoint)
    .then(response => {
      console.log('sss', response);
      successCallback(response.data);
    })
    .catch((error: any) => {
      failureCallback(error.message);
      handleApiError(error.message);
    });
};

/**
 * @param endPoint api end point
 * @param params request data
 * @param successCallback function for handles uccess response
 * @param errorCallback function for handle error response
 */

const postApiCall = (
  endPoint: string,
  params: object,
  successCallback: Function,
  errorCallback: Function,
) => {
  console.log('end,params', endPoint, params);
  common.axiosInstance
    .post(endPoint, params)
    .then((response: any) => {
      successCallback(response);
    })
    .catch((error: any) => {
      errorCallback(error);
      handleApiError(error.message);
    });
};

export {postApiCall, getApiCall};
