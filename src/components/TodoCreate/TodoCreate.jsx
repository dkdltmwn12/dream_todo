import React, { useState} from 'react'
import styles from '../TodoCreate/TodoCreate.module.css'
import {v4 as uuidv4} from 'uuid';
export default function TodoCreate({onCreate}) {
  const [text, setText] = useState('')

  const onChangeHandle = (e) => setText(e.target.value);

  const onSubmitHandle = (e) => {
    e.preventDefault();
    if(text.trim().length === 0) {
      return;
    }
    onCreate({ id : uuidv4(), text, done : "do"});
    setText('');
  }

  return (
      <form className={styles.form} onSubmit={onSubmitHandle}>
        <input className={styles.input}
        placeholder='Enter Your To Do'
        type='text'
        onChange={onChangeHandle}
        value={text}
        ></input>
        <button className={styles.button}>Add</button>
      </form>
  )
}
