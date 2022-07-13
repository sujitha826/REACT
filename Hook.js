import React, {useState} from "react";
// Hooks can only be used in function components
// not allowed inside conditional statements useState/hook are to be executed in the same order in which they are defined in the function.

function UseHook() {
  const [state, setState] = useState(() => ({count: 4, theme: "blue"})); // counter is the current/default state(4) and setCounter is the function allowed us to update counter
  // always use function definition inside setCounter with prevCount to update counter rather than updating the current value of counter.
  // useState can be given in 2 ways, either as hardcoded with value like useState(4) or using function version of it like useState(()=>4) so that this will be run only once dusring first rendering of component and not on each update.

  function incrementer() {
    setState((prevState) => {
        return {...prevState, count: prevState.count + 1};              // merge with prevState, else theme will be lost
      });
  }

  function decrementer() {
    setState((prevState) => {
      return {...prevState, count: prevState.count - 1};
    });
  }

  return (
    <div>
      <button onClick={incrementer}>+1</button>
      <span>{state.count}</span>
      <span>{state.theme}</span>
      <button onClick={decrementer}>-1</button>
    </div>
  );
}
// It's always better to use different useState/hook to update different states independently rather than merged in a single object.
// const [count, setcount] = useState(4);
// const [theme, setTheme] = useState("red")
// now this will be much easier to manage them as we wish.
export default UseHook;
