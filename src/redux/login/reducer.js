import { loadData, saveData } from "../../utils/localStorage";
import { LOGIN_FAIL, LOGIN_SUCCESS, LOGOUT } from "./actionTypes";

const data = loadData("todoapptoken");

const initState = {
    isAuth : data ? true : false,
    token : data || ""
}

const loginReducer  = (state = initState,{type,payload})=>{

    switch(type){
        case LOGIN_SUCCESS:
            saveData("todoapptoken",payload)
            return {
                isAuth:true,
                token: payload
            }
        case LOGIN_FAIL:
            return {
                isAuth : false,
                token: ""
            }
        case LOGOUT: 
        //it remove todoapptoken from locatstorage 
        window.localStorage.removeItem("todoapptoken")
            return {
                isAuth : false,
                token: ""
            }
        default:
            return state
    }
}

export default loginReducer;