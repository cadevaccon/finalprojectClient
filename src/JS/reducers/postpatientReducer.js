import { GET_PATIENT_POST, GET_PATIENT_POST_FAILURE, GET_PATIENT_POST_SUCESS, PATIENT_INSERT_POST, PATIENT_INSERT_POST_FAILURE, PATIENT_INSERT_POST_SUCESS, UPDATE_PATIENT_POST, UPDATE_PATIENT_POST_FAILURE, UPDATE_PATIENT_POST_SUCESS } from "../constants/actiontype";


const initialState={
    loading:false,
    post:null,
    errors:null
};

const patientReducer =(state = initialState,{type,payload})=> 
{
    switch (type) {
        case PATIENT_INSERT_POST: return {...state,loading:true}
        case PATIENT_INSERT_POST_FAILURE: return {...state,loading:false,errors:payload}
        case PATIENT_INSERT_POST_SUCESS:return {...state,loading:false,user:payload,errors:null}
        case GET_PATIENT_POST: return {...state,loading:true}
        case GET_PATIENT_POST_FAILURE: return {...state,loading:false,errors:payload}
        case GET_PATIENT_POST_SUCESS:return {...state,loading:false,post:payload,errors:null}
        case UPDATE_PATIENT_POST: return {...state,loading:true}
        case UPDATE_PATIENT_POST_FAILURE: return {...state,loading:false,errors:payload}
        case UPDATE_PATIENT_POST_SUCESS:return {...state,loading:false,post:payload,errors:null}
    
        default: return state;
           
    }
}
export default patientReducer;