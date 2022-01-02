import { useDispatch, useSelector } from 'react-redux'
import { loginSuccess } from '../redux/login/action';
import './style/loginForm.css'
import {Redirect} from 'react-router-dom'
import { useState } from 'react';

export const LoginForm = () => {
    const dispatch = useDispatch();
    const {token} = useSelector(store => store.login);
    const [email,setEmail] = useState("")    
    const [password,setPassword] = useState("")


    const handleSubmit = (e)=>{
        e.preventDefault();
        if(email.length !== 0 && password.length !== 0)
        dispatch(loginSuccess("kjekjnakkj"))
        else
        return alert("Enter Proper Details");
    }

    //redirect to todoApp
    if(token)
    return <Redirect to="/todo-app" />
    
    return (
        <>
        <h2 className="login-heading">Login</h2>
        <div className="login-form-container">
            <form onSubmit={handleSubmit}>
                <label><strong>Email</strong></label>
                <input type="email" name="email" placeholder="Enter Email" autoFocus onChange={(e)=> setEmail(e.target.value)} />
                <label> Password</label>
                <input type="password" name="password" placeholder="Enter password" onChange={(e)=> setPassword(e.target.value)} />
                <input type="submit" value="Submit" />
            </form>
        </div>
        </>
    )
}
