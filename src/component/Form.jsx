import { useState } from "react";

function Form({todos,setTodos}) {
    // const [todo, setTodo] = useState("");
    const [todo, setTodo] = useState({titel:"", done: false});

    function handlesubmit(e) {
        e.preventDefault();
        setTodos([...todos,todo]);
        setTodo({titel:"", done: false});
    }
    return(
        <form onSubmit={handlesubmit}>
        <input 
        className="fild"
        type="text"
        value={todo.titel}
        onChange={(e) => setTodo({titel:e.target.value, done: false})}
        placeholder="Enter Todo item"
        />
        <button type="submit" className="btn-event">Add</button>
    </form>
    );
}
export default Form;