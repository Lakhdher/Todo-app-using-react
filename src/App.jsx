import NewTodoForm from './NewTodoForm';
import TodoList from './TodoList';
import './styles.css';
import { useEffect, useState } from 'react';

export default function App(){
  const [Todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("ITEMS");
    if(savedTodos){
      return JSON.parse(savedTodos);
      }else{
        return [];
      }
    });

  useEffect(() => {localStorage.setItem("ITEMS" , JSON.stringify(Todos))}, [Todos]);

  function addTodoItem(NewItem){
    setTodos((currentTodos) => {return [...currentTodos, {id : crypto.randomUUID(), name : NewItem, completed : false}]});    
  }

  function toggleCompleted(id){
    setTodos((currentTodos) => {
      return currentTodos.map(todo => {
        if(todo.id === id){
          return {...todo, completed : !todo.completed}
        }
        return todo;
      })
    })
  }

  function deleteTodo(id){
    setTodos((currentTodos) => {
      return currentTodos.filter(todo => todo.id !== id)
    })
  }

  return (
    <>    
    <NewTodoForm  onSubmit={addTodoItem} />
    <h1 className='header'>Todo list</h1>
    <TodoList Todos={Todos} toggleCompleted={toggleCompleted} deleteTodo={deleteTodo}/>
    </>
  );
}