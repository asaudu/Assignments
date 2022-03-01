import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Todo from './component/Todo';

const App = () => {
  // Declare a new state variable, which we'll call "todo"
  const [todos, setTodos] = useState([
    //isCompleted adds the functionality of checking complete or not
    { text: 'Walk dog', isCompleted: false },
    { text: 'Feed cat', isCompleted: false }
  ]);

    // completeTodo function
  const toggleTodo = (index) => {
      // use spread operator to grab the current list of items
    const newTodos = [...todos];
      // toggle isComplete
      newTodos[index].isCompleted = !newTodos[index].isCompleted;
      // setTodos to update that state.
      setTodos(newTodos);
  };
  //console.log(todos);

  const deleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  }; 

  return (
   // ...
   <div className="app">
     <h2>My todos:</h2>
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo key={index} index={index} todo={todo} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
        ))}
      </div>
    </div>
  );
};

export default App;
