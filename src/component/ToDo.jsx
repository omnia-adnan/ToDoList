import Form from "./Form";
import Todolist from "./Todolist";
import { useState } from "react";

function ToDo() {
    const [todos, setTodos] = useState([]);
    return(
        <div>
            <Form todos={todos} setTodos={setTodos} />
            <Todolist todos={todos} setTodos={setTodos} />
        </div>
    );
}
export default ToDo;