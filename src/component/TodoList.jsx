import { useDispatch, useSelector } from 'react-redux';
import { TiTick } from "react-icons/ti";
import { MdDelete } from "react-icons/md";
import { RiEdit2Fill } from "react-icons/ri";
import './style/todolist.css'
import { deltodo, toggletodo } from '../redux/todo/action';
import { useHistory } from 'react-router-dom';

export const TodoList = () => {
    const {data} = useSelector(store => store.todo);
    const dispatch = useDispatch();
    const history = useHistory();

    const handleToggle = (item)=>{
        let action = toggletodo(item)
        dispatch(action);
    }

    const handleDelete = (item)=>{
        let action = deltodo(item)
        dispatch(action)
    }

    const handleEdit = (item)=>{
        history.push({
            pathname: '/edit-todo',
            state: item
        })
    }
    
    return (
        <div className="todolist-container">
            {
                data.map(e =>
                    <div key={e.id} className="todolist-box">
                        <strong style={{textDecoration : e.status ? "line-through" : "none"}} >{e.title}</strong>
                        <div>
                        <button onClick={()=> handleToggle(e.id)}>
                            <TiTick size={30}/>
                        </button>
                        <button onClick={()=> handleDelete(e.id)}>
                         <MdDelete size={30} />
                        </button>
                        <button onClick={()=> handleEdit(e.id)}>
                            <RiEdit2Fill size={30}/>
                        </button>
                        </div>
                    </div>
                )
            }
        </div>
    )
}
