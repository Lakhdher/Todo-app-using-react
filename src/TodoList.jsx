import TodoItem from "./TodoItem"

export default function TodoList({Todos, toggleCompleted, deleteTodo}){
    return (
        <ul className="list">
        {Todos.length === 0 && <li className="list-item">No items</li>}
        {Todos.map(todo => {
          return <TodoItem key={todo.id} title={todo.name} completed={todo.completed} toggleCompleted={toggleCompleted} deleteTodo={deleteTodo} id={todo.id}/>
        })}
        </ul>
    )
}