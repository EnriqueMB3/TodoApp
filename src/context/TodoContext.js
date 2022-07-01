import axios from 'axios';
import React, {createContext, useReducer} from 'react';
import { TodoReducer } from './TodoReducer';

export const TodoContext = createContext();

 const initialState = {
    todosTotal: [{task: 'Correr', done: true, category:'Ejercicio'}, {task: 'Estar en dicord', done: false, category:'Discord'}, 
    {task: 'DRG', done: false, category:'Discord'}, {task: 'Dar de comer al perro', done: true, category:'Mascota'}, 
    {task: 'Hacer la cuentas', done: true, category:'Default'}, {task: 'Dormir mejor', done: true, category:'Default'} ],
    todos: [],
    categorySelected: 'Default',
    loading: false,
    categories: [],
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