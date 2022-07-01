import { useContext, useEffect } from "react"
import { CategoryList } from "../components/Category/CategoryList"
import { Header } from "../components/Header"
import { TodoList } from "../components/Todos/TodoList"

export const TodoPage = () => {

 
  
    return (
        <>
          {/* Logo */}
          <Header />
          {/* Category List */}
          <CategoryList />
          {/* TaskList */}
          <TodoList />
        </>
        )

}