function NumberList(props) {
  const numbers = props.numbers;
  // assign a key to our list items inside numbers.map() to help React identify which items have changed, are added, or are removed. Keys should be given to the elements inside the array to give the elements a stable identity.
  const listItems = numbers.map((number) => (
    <li key={number.toString()}>{number}</li>
  ));
  return <ul>{listItems}</ul>;
}

function TodoList(props) {
  const todoArray = props.todo;
  const todoItems = todoArray.map((todo) => (
    <li key={todo.id}>{todo.text}</li>
  ));
  return <ul>{todoItems}</ul>;
}

export  { NumberList, TodoList };
