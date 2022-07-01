import { Container } from "@mui/system";
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
