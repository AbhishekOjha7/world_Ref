
import { AuthReducerModal } from '../../modals';

export const authReducer = (state = new AuthReducerModal(), action: any) => {

  switch (action.type) {
    case 'loginAction': 
    console.log("actionpayload",action.payload);
    
      return {...state, ...action.payload};
       break;
    default:
      return state;
  }
};