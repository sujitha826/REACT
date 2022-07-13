import React, {Component} from "react";

function UserGreeting(props) {
  return <h1>Welcome back! {props.name}</h1>;
}

function GuestGreeting(props) {
  return <h1>Please sign up. {props.name}</h1>;
}

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting name= "Sujitha K"/>;
  }
  return <GuestGreeting name= "Guest"/>;
}

export default Greeting;