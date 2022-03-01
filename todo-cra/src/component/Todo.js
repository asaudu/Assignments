const Todo = ({ todo, toggleTodo, index, deleteTodo }) => {
    return (
      <div>
        <label htmlFor={`todo-${index}`}>
          <input
            id={`todo-${index}`}
            type="checkbox"
            checked={todo.isCompleted}
            onChange={() => toggleTodo(index)}
          />
          {todo.text}
          <button onClick={() => deleteTodo(index)}>delete</button>
        </label>
      </div>
    );
  };
  
  export default Todo;