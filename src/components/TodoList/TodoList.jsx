import React, { useEffect, useState} from 'react'
import styles from '../TodoList/TodoList.module.css'
import TodoCreate from '../TodoCreate/TodoCreate';
import TodoItem from '../TodoItem/TodoItem';

export default function TodoList({filter}) {
const [todos, setTodos] = useState(readTodoStorage);

useEffect(() => {
  localStorage.setItem('todos', JSON.stringify(todos));
}, [todos])


const createHandle = (todo) => {
  setTodos([...todos, todo]);
  
}
const onUpdatedHandle = (updated) => {
  setTodos(todos.map((item) => item.id === updated.id ?
  updated : item));
}

const onRemoveHandle = (removed) => {
  setTodos(todos.filter((item) => item.id !== removed.id));
  
}

const filtered = getFilteredItems(todos, filter);

  return (
    <section className={styles.container}>
      <ul className={styles.list}>
      {filtered.map((todo) => (
          <TodoItem
          key={todo.id}
          onUpdate={onUpdatedHandle}
          onRemove={onRemoveHandle}
          todo={todo}/>
      ))}
      </ul>
        <TodoCreate onCreate={createHandle}/>
    </section>
  )
}

function readTodoStorage() {
  const todos = localStorage.getItem('todos');
  return todos ? JSON.parse(todos) : [];
}

function getFilteredItems(todos, filter) {
  if (filter === 'all') {
    return todos;
  }
  return todos.filter((todo) => todo.done === filter)
}
