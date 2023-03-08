import endPoints from "../../utils/endPoints"
import { getApiCall } from "../../utils/serviceApi"

export const getProducts=(successCallback:Function,failureCallback:Function)=>{
    console.log("ssssss");
    return (dispatch: Function, getState: any) => {
        getApiCall(endPoints.get_Product,(onSuccess: any)=>{
         dispatch({type:'productAction',payload:{product_Detail:onSuccess}})
         successCallback({data:true})
         console.log("suuucess",onSuccess);
            
        },(onFailure: any)=>{
            failureCallback({data:false})
        })
    }
    
}