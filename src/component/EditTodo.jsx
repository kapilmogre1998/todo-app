import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory, useLocation } from "react-router"
import { edittodo } from "../redux/todo/action";
import './style/editTodo.css'

export const EditTodo = () => {
    const {state:id} = useLocation();
    const dispatch = useDispatch();
    const history = useHistory();
    const [editText,setEditText] = useState();
    

    const handleEditTodo = ()=>{
        if(editText !== undefined){
            const action = edittodo({id,title:editText});
            dispatch(action);
            history.push("/todo-app");
        }
        else
        return alert("Please Enter Todo")
    }

    const handleBackBtn = ()=>{
        history.push("/todo-app")
    }

    return (
        <div className="edit-todo-container">
            <textarea onChange={(e)=> setEditText(e.target.value)} style={{background:"initial"}} placeholder="Enter todo">
            </textarea>
            <br />
            <button onClick={handleBackBtn}>Back</button>
            <button onClick={handleEditTodo}><strong>Done</strong></button>
        </div>
    )
}
