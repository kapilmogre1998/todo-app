import { useState } from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { addtodo, error, loading } from '../redux/todo/action';
import './style/todoapp.css'
import { TodoList } from './TodoList';
import { v4 as uuidv4 } from 'uuid';

export const TodoApp = () => {
    const [todo, setTodo] = useState("");
    const dispatch = useDispatch();
    const {data:todoList} = useSelector(store => store.todo)

    
    const handleAddTodo = () => {
        dispatch(loading());
        try{
            if(todo.length !== 0){
                const action = addtodo({
                    id: uuidv4(),
                    status: false,
                    title: todo
                })
                setTodo("")
                dispatch(action);
            }
            else 
            return;
        }catch(err){
            dispatch(error())
        }
    }

    return (
        <div>
            <div style={{marginTop:"10px",marginLeft:"20px",marginBottom:"10px"}}>
            <button type="button" className="btn position-relative" style={{background:"#81CFE9"}} >
            Tasks <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-secondary"> 
              <strong>
                  {todoList.length}
              </strong>
            <span className="visually-hidden"></span>
            </span>
            </button>
            </div>
        <div className="input-todo">
            <form>
                <input type="text" value={todo} name="text" placeholder="Enter Todo" autoFocus autoComplete="off" onChange={(e) => setTodo(e.target.value)} />
                <input type="button" value="Add Todo" onClick={handleAddTodo} />
            </form>
            <TodoList />
        </div>
        </div>
    )
}
