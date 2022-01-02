import { LOGIN_FAIL, LOGIN_SUCCESS, LOGOUT } from "./actionTypes"


export const loginSuccess = (payload)=>{
    return ({type : LOGIN_SUCCESS,payload})
}

export const loginFail = ()=>{
    return ({type : LOGIN_FAIL,payload})
}

export const logout = ()=>{
    return ({type:LOGOUT})
}