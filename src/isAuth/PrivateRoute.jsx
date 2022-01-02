import { useSelector } from "react-redux";
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import {Redirect} from "react-router-dom"


export const PrivateRoute = ({path,children})=>{
    const {token} = useSelector(store => store.login);

    if(!token)
     return <Redirect to="/" />

    return (
        <Route path={path}>
            {children}
        </Route>
    )
}