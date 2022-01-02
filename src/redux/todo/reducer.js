import { ADD_TODO, DEL_TODO, EDIT_TODO, ERROR, LOADING, SUCCESS, TOGGLE_TODO } from "./actionTypes";

const initState = {
    loading : true,
    data : [],
    error : false
}

export const todoReducer = (state = initState, {type,payload})=>{
    switch(type){
        case ADD_TODO:
            return {
                ...state,
                data: [...state.data,payload]
            }

        case DEL_TODO:
            return {
                ...state,
                data : state.data.filter(elem => elem.id != payload)
            }

        case EDIT_TODO:
            return {
                ...state,
                data : state.data.map(elem =>{
                    if(elem.id === payload.id){
                        elem.title = payload.title;
                        elem.status = false
                    }

                    return elem
                })
            }

        case TOGGLE_TODO:
            return {
                ...state,
                data : state.data.map(e =>{
                    if(e.id === payload){
                        e.status = !e.status
                        return e;
                    }
                    return e;
                })
            }
        case LOADING:
            return{
                ...state
            }

        case ERROR:
            return{
                ...state,
                loading : false,
                error: true
            }

        // case SUCCESS:
        //     return{
        //         ...state,
        //         data: [...state.data,payload]
        //     }
        default:
            return (state)
    }
}