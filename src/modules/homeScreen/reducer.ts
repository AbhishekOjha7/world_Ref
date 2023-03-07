import { ProductReducerModal } from "../../modals";



export const productReducer = (state = new ProductReducerModal(), action: any) => {
  switch (action.type) {
    case 'productAction': {
      return {...state, ...action.payload};
    }
    default:
      return state;
  }
};