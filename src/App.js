import { Container } from "@mui/system";
import { Header } from "./components/Header";
import { CategoryList } from "./components/Category/CategoryList";
import { TodoList } from "./components/Todos/TodoList";
import { TodoProvider } from "./context/TodoContext";
import { TodoPage } from "./pages/TodoPage";

export const App = () => {
  return (
    <>
      <TodoProvider>
        <Container
          style={{
            backgroundColor: "#fff",
            height: "100vh",
            overflowx: "hidden",
            padding: 0,
          }}
          maxWidth="sm"
          fixed
          >
        <TodoPage/>
        </Container>
      </TodoProvider>
    </>
  );
};
