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
  const [value, setValue] = React.useState(''); //add new managed variable
  
  //handling what happens when user hits submit
  const handleSubmit = e => {
      e.preventDefault();
      if (!value) return; //check for existing value
      const newTodos = [...todos, {text: value, isCompleted: false}]; //construct new list -existing list plus new todo
      setTodos(newTodos); //add input
      setValue(''); //clear form
  }
  return (<>
    {todos.map((todo, i) => <div className="todo" key={i}>{todo.text}</div>)}
    <form onSubmit = {handleSubmit}>
        <input type="text" className="input" value={value} placeholder="Add ToDo ..." onChange={e => setValue(e.target.value)}/>
    </form>
  </>);
}

ReactDOM.render(<App/>, document.getElementById("root"));
