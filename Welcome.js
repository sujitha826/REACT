import React, {Component} from "react";

// Function component named as Welcome with a single object as parameter-props
function Welcome(props) {
  return <h1>Hello...{props.name}</h1>;
}

// Arrow function as component with props
const Person = (props) => {
  return <h2>I am {props.me}!</h2>;
}


function House() {
  const name1 = "Sujitha K";
  const name2 = "Nitara K";              // House takes Person as inner component and pass me as props to Person.
  return (
    <div>
      <h1>Who live in my House?</h1>
      <Person me={name1} />                       
      <Person me={name2} />                                  
    </div>
  );
}

// Class component with state assigned to the prop-date
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()}; //The only place where you can assign this.state is the constructor.
  }

  // This method returns an interval ID(timer ID) which uniquely identifies the interval, so you can remove it later by calling clearInterval().
  componentDidMount() {
    // mounting timer whenever the Clock component is rendered to the DOM for the first time so that the browser set up a timer to call the tick every 1sec.
    this.timerID = setInterval(() => this.tick(), 1000);
    console.log("timerID:" + this.timerID);
  }

  componentWillUnmount() {
    // unmounting (Clear timer)
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      // tick method updates the state of Clock that renders again to the screen.
      date: new Date(),
    });
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}


export {Welcome, Person, House, Clock};
