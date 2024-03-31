import React from 'react'
import styles from '../TodoItem/TodoItem.module.css'
import { MdDelete } from "react-icons/md";
export default function TodoItem({todo, onUpdate, onRemove}) {
  
  const {text, done, id} = todo;

  const changeHandle = (e) => {
    const done = e.target.checked ? "done" : "do";
    onUpdate({...todo, done});
  }

  const removeHandle = () => {
    onRemove(todo);  
  }


  return (
    <li className={styles.item}>
        <input
        className={styles.checkbox}
        type='checkbox' id={id}
        checked={done === "done"}
        onChange={changeHandle}/>
      <label htmlFor={id} className={styles.text}>{text}</label>
     <span className={styles.icon}>
      <button className={styles.button} onClick={removeHandle}>
        <MdDelete/>
      </button>
     </span>
    </li>
  )
}
