import { GET_PATIENT, GET_PATIENT_FAILURE, GET_PATIENT_SUCESS, REGISTER_PATIENT_PROFILE, REGISTER_PATIENT_PROFILE_FAILURE, REGISTER_PATIENT_PROFILE_SUCESS, UPDATE_PATIENT_PROFILE, UPDATE_PATIENT_PROFILE_FAILURE, UPDATE_PATIENT_PROFILE_SUCESS } from "../constants/actiontype";


const initialState={
    loading:false,
    user:null,
    errors:null
};

const patientReducer =(state = initialState,{type,payload})=> 
{
    switch (type) {
        case GET_PATIENT: return {...state,loading:true}
        case GET_PATIENT_FAILURE: return {...state,loading:false,errors:payload}
        case GET_PATIENT_SUCESS:return {...state,loading:false,user:payload,errors:null}
        case REGISTER_PATIENT_PROFILE: return {...state,loading:true}
        case REGISTER_PATIENT_PROFILE_FAILURE: return {...state,loading:false,errors:payload}
        case REGISTER_PATIENT_PROFILE_SUCESS: return {...state,loading:false,user:payload,errors:null};
        case UPDATE_PATIENT_PROFILE:return{...state,loading:true}
        case UPDATE_PATIENT_PROFILE_FAILURE:return{...state,loading:false,errors:payload}
        case UPDATE_PATIENT_PROFILE_SUCESS:return{...state,user:payload,errors:null}
    
        default: return state;
           
    }
}
export default patientReducer;