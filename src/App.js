import { useState } from 'react';
import TodoHead from './components/TodoHead/TodoHead';
import TodoList from './components/TodoList/TodoList';
import { DarkModeProvider } from './context/DarkModeContext';


const filters = ['all', 'do', 'done'];
function App() {
  const [filter, setFilter] = useState(filters[0]);
  
  return (
    <DarkModeProvider>
      <TodoHead filters={filters} filter={filter} onChangeFilter={setFilter}/>
      <TodoList filter={filter}/>
    </DarkModeProvider>
  );
}

export default App;
