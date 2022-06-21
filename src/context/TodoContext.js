import axios from 'axios';
import React, {createContext, useReducer} from 'react'
import { TodoReducer } from './TodoReducer';

export const TodoContext = createContext();

 const initialState = {
    todosTotal: [{task: 'Correr', done: true, category:'Ejercicio'}, {task: 'Estar en dicord', done: false, category:'Discord'}, 
    {task: 'DRG', done: false, category:'Discord'}, {task: 'Dar de comer al perro', done: true, category:'Mascota'}, 
    {task: 'Hacer la cuentas', done: true, category:'Default'}, {task: 'Dormir mejor', done: true, category:'Default'} ],
    todos: [],
    categorySelected: 'Default',
    categories: ['Default', 'Escuela', 'Trabajo', 'Amigos', 'Discord', 'Mascota', 'Ejercicio'],
    todo : {
        name: '',
        status: true
    }
}

export const TodoProvider = ({children}) => {

    const [todoState, dispatch] = useReducer(TodoReducer, initialState);

    return (<TodoContext.Provider value={{
        todoState,
        dispatch
    }}>
        {children}
    </TodoContext.Provider>)
}


const GetTodos = ()=> {
    axios.get('https://localhost:7196/api/Todo').then(res => {
     console.log(res);
     initialState.todos = res.data
    }).catch(problem => {
        console.log(problem)
    });
}

const PostTodo = () => {
    axios.post('https://localhost:7196/api/Todo',initialState.todo. then(res => {
        console.log(res);
    })).catch(problem => {
        console.log(problem);
    })
}


const DeleteTodo = ({id}) => {
    axios.delete(`https://localhost:7196/api/Todo/${id}`).then(res => {
        console.log(res);
        console.log(res.data);
    }).catch(problem => {
        console.log(problem);
    })
}

const GetCategories = () => {
    axios.get('https://localhost:7196/api/Category').then(res => {
        console.log(res);
        initialState.categories = res.data
       }).catch(problem => {
           console.log(problem)
       });
}