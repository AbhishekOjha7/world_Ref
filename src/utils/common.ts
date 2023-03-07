import axios, {AxiosInstance} from 'axios';


const BASE_URL = 'https://fakestoreapi.com/'

const $http: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 20000,
  headers: {
    'content-type': 'application/json',
  },
});

const setAuthorizationToken = (token: string) => {
  if (token) {
    $http.defaults.headers.Authorization = `Bearer ${token}`;
  }
};

const STATUS_CODE = {
  invalid: 422,
  success: 200,
  timeout: 408,
  notFound: 404,
  badRequest: 400,
  userBlocked: 403,
  userNotFound: 410,
  successAction: 201,
  accountSuspend: 401,
};

export default {
  axiosInstance: $http,
  setAuthorizationToken,
  statusCode: STATUS_CODE,
};
