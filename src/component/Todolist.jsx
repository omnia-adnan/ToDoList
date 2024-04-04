import Todoitem from "./Todoitem";
import '../App.css';


function Todolist({todos, setTodos}) {
    return(
        <div id="itemlist">
            {todos.map((item) => (
            <Todoitem item={item} key={item.titel} todos={todos} setTodos={setTodos}
            />
            ))}
        </div>
    );
}
export default Todolist;