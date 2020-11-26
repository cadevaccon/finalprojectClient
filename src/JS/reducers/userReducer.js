import { GET_PROFILE, GET_PROFILE_FAILURE, GET_PROFILE_SUCESS, LOGIN_FAILURE, LOGIN_SUCESS, LOGIN_USER, REGISTER_FAILURE, REGISTER_SUCESS, REGISTER_USER } from "../constants/actiontype";

const initialState={
    loading:false,
    user:null,
    errors:null
};

const userReducer =(state = initialState,{type,payload})=> 
{

    switch (type) {
        case REGISTER_USER:return {
                ...state,loading:true
        }
        case REGISTER_SUCESS:return {
            ...state,loading:false,user:payload,errors:null
        }
        case REGISTER_FAILURE:return {
          ...state,loading:false,errors:payload
        }   
        case LOGIN_USER:return {
            ...state,loading:true
    }
    case LOGIN_SUCESS:return {
        ...state,loading:false,token:payload,errors:null
    }
    case LOGIN_FAILURE:return {
        ...state,loading:false,errors:payload
    }
    case GET_PROFILE:return {
        ...state,loading:true
}
case GET_PROFILE_SUCESS:return {
    ...state,loading:false,user:payload,errors:null
}
case GET_PROFILE_FAILURE:return {
    ...state,loading:false,errors:payload
} 
        default:
            return state;
    }
}

export default userReducer;