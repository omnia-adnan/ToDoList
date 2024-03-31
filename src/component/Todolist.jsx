import Todoitem from "./Todoitem";
import '../App.css';


function Todolist({todos, setTodos}) {
    return(
        <div id="itemlist">
            {todos.map((item, index) => (
            <Todoitem item={item} key={index} todos={todos} setTodos={setTodos}
            />
            ))}
        </div>
    );
}
export default Todolist;