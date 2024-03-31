import { useState } from "react";

function Form({todos,setTodos}) {
    const [todo, setTodo] = useState("");
    function handlesubmit(e) {
        e.preventDefault();
        setTodos([...todos,todo]);
        setTodo("");
    }
    return(
        <form onSubmit={handlesubmit}>
        <input 
        className="fild"
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder="Enter Todo item"
        />
        <button type="submit" className="btn-event">Add</button>
    </form>
    );
}
export default Form;