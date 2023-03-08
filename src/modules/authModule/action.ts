import endPoints from '../../utils/endPoints';
import {postApiCall} from '../../utils/serviceApi';

export const login = (
  params: any,
  successCallback: Function,
  failureCallback: Function,
) => {
  console.log('params', params);
  return (dispatch: Function) => {
    postApiCall(
      endPoints.login_signUp,
      params,
      (onSuccess: {data: {token: any}}) => {
        dispatch({
          type: 'loginAction',
          payload: {Auth_Token: onSuccess.data.token},
        });
        // console.log("nSuccess",onSuccess.data.token);

        successCallback(onSuccess);
      },
      (onFailure: any) => {
        failureCallback(onFailure);
      },
    );
  };
};
