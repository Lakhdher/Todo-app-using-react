export default function TodoItem({completed, id, title, toggleCompleted, deleteTodo}){
    return (
        <li className="list-item">
            <label>
                <input type="checkbox" checked={completed} onChange={() => toggleCompleted(id)}/>
                {title}
            </label>
            <button className="btn btn-danger" onClick={() => deleteTodo(id)}>Delete</button>
        </li>
    )
}