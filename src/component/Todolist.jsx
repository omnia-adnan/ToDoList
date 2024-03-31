import Todoitem from "./Todoitem";

function Todolist({todos}) {
    return(
        <div>
            {todos.map((item, index) => (
            <Todoitem item={item} key={index}
            />
            ))}
        </div>
    );
}
export default Todolist;