function App() {
  const [todos, setTodos] = React.useState([
    {
      text: "learn react",
      isCompleted: false,
    },
    {
      text: "meet friend for lunch",
      isCompleted: false,
    },
    {
      text: "build todo app",
      isCompleted: false,
    },
  ]);

  //handling what happens when user hits submit
  const addTodo = (text) => {
    const newTodos = [...todos, { text: text, isCompleted: false }]; //construct new list -existing list plus new todo
    setTodos(newTodos); //add input
  };

  const removeTodo = (e) => {
    const index = Number(e.target.id);
    let temp = [...todos];
    temp.splice(index, 1);
    setTodos(temp);
  };
  return (
    <>
      {todos.map((todo, i) => (
        <div className="todo" key={i} id={i} onClick={removeTodo}>
          {todo.text}
        </div>
      ))}
      <TodoForm addTodo={addTodo} />
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
