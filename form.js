function TodoForm({addTodo}) {
  const [value, setValue] = React.useState(""); //add new managed variable

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return; //check for existing value
    addTodo(value);
    setValue(""); //clear form
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="input"
        value={value}
        placeholder="Add ToDo ..."
        onChange={(e) => setValue(e.target.value)}
      />
    </form>
  );
}
