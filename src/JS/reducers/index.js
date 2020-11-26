import {combineReducers} from "redux"
import userReducer from "./userReducer.js"
import patientReducer from "./patientReducer"
import postpatientReducer from './postpatientReducer'


export default combineReducers({

    userReducer,patientReducer,postpatientReducer
})
