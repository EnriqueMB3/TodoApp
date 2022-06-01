import { Container } from "@mui/system";
import { Header } from "./components/Header";
import { CategoryList } from "./components/Category/CategoryList";
import { TodoList } from "./components/Todos/TodoList";

export const App = () => {
  return (
    <>
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
        {/* Logo */}
        <Header />
        {/* Category List */}
        <CategoryList />
        {/* TaskList */}
        <TodoList />
      </Container>
    </>
  );
};
