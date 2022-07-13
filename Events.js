import React, {Component} from "react";

function Form() {
  function handleSubmit(e) {                   // Here, e is a synthetic event.
    e.preventDefault();
    alert("You clicked submit.");
  }

  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">Submit</button>
    </form>
  );
}

// Toggle component renders a button that handles the event handleClick() and this method determines the button to be ON or OFF
class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};

    // This binding is necessary to make `this` work in the callback
    // this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((prevState) => ({
      isToggleOn: !prevState.isToggleOn,
    }));
  }

  render() {
    return (
      <button onClick={() => this.handleClick()}>
        {this.state.isToggleOn ? "ON" : "OFF"}
      </button>
    );
  }
}
// In JavaScript, class methods are not bound by default. If you forget to bind this.handleClick and pass it to onClick, this will be undefined when the function is actually called.
// this binding to 'this' can be avoided if the callback is used as an arrow function with ().
// or modify the event listener as an arrow function.
export {Form, Toggle};
