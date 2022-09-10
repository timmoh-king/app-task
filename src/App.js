import { Route, Routes } from "react-router-dom";
import FormSignUp from "./FormSignup";
import TodoList from "./TodoList";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<FormSignUp />} />
        <Route path="todolist" element={<TodoList />} />
      </Routes>
    </div>
  );
}

export default App;
