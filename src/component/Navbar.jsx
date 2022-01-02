import './style/navbar.css'
import { BrowserRouter, Route, Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../redux/login/action';

export const Navbar = () => {
    const { isAuth } = useSelector(store => store.login)
    const dispatch = useDispatch();

    const handleLogout = () => {
        const action = logout();
        dispatch(action);
    }

    return (
        <div className="navbar-container">
            <div><img src="https://img.icons8.com/nolan/48/reminders.png" /></div>
            <div className='link-tag'> <Link to="/todo-app">TodoApp</Link> </div>
            {isAuth ?
                <div className='link-tag'> <Link to="/" onClick={handleLogout}>Logout</Link> </div>
                :
                <div className='link-tag'><Link to="/">Login</Link></div>
            }
        </div>
    )
    }
