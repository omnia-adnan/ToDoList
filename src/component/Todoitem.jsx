import '../App.css';

function Todoitem({item, todos, setTodos}) {
    function handelremove(item) {
        setTodos(todos.filter((todo) => todo !== item))
    }
    function handeltitelclick(titel) {
        console.log("item click",titel);
        setTodos(todos.map((todo) => todo.titel === titel? {...todo, done: !todo.done} : todo));
        console.log(todos);
    }
    const itmedone = item.done ? "itmedone" : "";
    
    return(
        <div className="eachitem">
            <div className="eachitemname">
                <span className={itmedone} onClick={() => handeltitelclick(item.titel)}>
                {item.titel}
                </span>
            <span>
                <button 
                onClick={() => handelremove(item)}
                className='btn-event delete'>Del</button>
            </span>
            <hr />
            </div>
        </div>
    );
}
export default Todoitem;