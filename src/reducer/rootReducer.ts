import {combineReducers} from 'redux';
authReducer;

//custom imports

import {authReducer} from '../modules/authModule/reducer';
import {productReducer} from '../modules/homeScreen/reducer';

const reducers = combineReducers({
  authReducer,
  productReducer,
});
export {reducers};
