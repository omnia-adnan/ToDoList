import '../App.css';

function Todoitem({item, todos, setTodos}) {
    function handelremove(item) {
        setTodos(todos.filter((todo) => todo !== item))
    }
    return(
        <div className="eachitem">
            <div className="eachitemname">
                {item}
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