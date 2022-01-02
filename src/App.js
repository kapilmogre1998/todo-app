import './App.css';
import { TodoApp } from './component/TodoApp';
import { Navbar } from './component/Navbar';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";

import { LoginForm } from './component/LoginForm';
import { PrivateRoute } from './isAuth/PrivateRoute';
import { EditTodo } from './component/EditTodo';

function App() {
  return (
    <div>
      <Navbar/>
      <Switch>
        <PrivateRoute exact path="/todo-app">
        <TodoApp/>
        </PrivateRoute>
        <Route exact  path="/">
          <LoginForm/>
        </Route>
        <Route exact path="/edit-todo">
          <EditTodo/>
        </Route>
        <Route path="/">
          <div className='App'>
           <h3> Opps!!</h3>
          </div>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
