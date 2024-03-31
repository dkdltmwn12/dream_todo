import React from 'react'
import styles from '../TodoHead/TodoHead.module.css'
import { MdSunny, MdDarkMode } from "react-icons/md";
import { useDarkMode } from '../../context/DarkModeContext';
export default function TodoHead({filters, filter, onChangeFilter}) {

  const {darkMode, toggleDarkMode} = useDarkMode();

  return (
    <header className={styles.header}>
      <button className={styles.toggle}
      onClick={toggleDarkMode}>
      {darkMode ? <MdSunny/> : <MdDarkMode/>}
      </button>
      <ul className={styles.filters}>
        {filters.map((value, index) => (
          <li key={index} >
            <button
             className={`${styles.filter} ${
              filter === value && styles.selected}`}
            onClick={() => onChangeFilter(value)}>{value}</button>
          </li>
        ))}
      </ul>
    </header>
  )
}
