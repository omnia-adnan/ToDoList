import { useState } from "react";
import Todoitem from "./Todoitem";

function ToDo() {
    const [todo, setTodo] = useState("");
    const [todos, setTodos] = useState([]);
    function handlesubmit(e) {
        e.preventDefault();
        setTodos([...todos,todo]);
        setTodo("");
        // console.log(todos);
    }
    return(
        <div>
            <form onSubmit={handlesubmit}>
                <input 
                type="text"
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
                />
                <button type="submit">Add</button>
            </form>
            {todos.map((item, index) => (
            <Todoitem item={item} key={index}
            />
            ))}
            {/* {console.log(todos)} */}
        </div>
    );
}
export default ToDo;