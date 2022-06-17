import { types } from "../types/types"

export const TodoReducer = (state, action) => {
    switch (action.type) {
        case types.cargarTodos:
            return {
                ...state,
                todos: [...action.payload]
            }
        case types.addTodo:
            return {
                ...state,
                todos: [...state.todos, action.payload]
            }    
        case types.deleteTodo: 
            return {
                ...state,
                todos: action.payload.filter(x=> x.id !== todoSelected.id)
            }
        case types.updateTodo:
            return {
                ...state,
                todos: state.map(todo => todo.id === action.payload ? {...action.payload} : todo)
            }
        case types.categorySelected:
            if (state.categorySelected === action.payload) return state; 
            return{
                ...state,
                categorySelected: action.payload
            }
        case types.todosByCategory:
            return {
                ...state,
                todos: state.todosTotal.filter(todo => todo.category === action.payload)
            }
        default:
            return state;
    }
}