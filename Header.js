import React, {Component} from "react";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {favoritecolor: "red"};
  }

  // this built-in method is required if the component state to be updated before render to new state using props that are passed from component.
  // static getDerivedStateFromProps(props, state) {                 // props are passed from outside of the component if needed, but state is private to a component and fully controlled inside
  //   return {favoritecolor: props.favcol };
  // }

  componentDidMount() {
    setTimeout(() => {
      this.setState({favoritecolor: "yellow"});
    }, 1000);
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    document.getElementById("div1").innerHTML =
      "Before the update, the favorite was " + prevState.favoritecolor;
  }

  componentDidUpdate() {
    document.getElementById("div2").innerHTML =
      "The updated favorite is " + this.state.favoritecolor;
  }

  render() {
    return (
      <div>
        <h1>My Favorite Color is {this.state.favoritecolor}</h1>
        <div id="div1"></div>
        <div id="div2"></div>
      </div>
    );
  }
}

export default Header;
