import React from "react";
import {useState} from "react";

function About() {
  return (
    <div className="About">
      <h1>About page</h1>
      <div>
        <MyForm />
      </div>
    </div>
  );
}

function MyForm() {
  const [inputs, setInputs] = useState({}); // inputs is the current object and this is updated by method setInputs()

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`The inputs you entered were: ${JSON.stringify(inputs)}`);
  };

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((input) => ({...input, [name]: value}));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Enter your name:
        <input
          type="text"
          name="username"
          value={inputs.username}
          onChange={handleChange}
        />
      </label>
      <label>
        Enter your age:
        <input
          type="number"
          name="age"
          value={inputs.age}
          onChange={handleChange}
        />
      </label>

      <label>
        Enter your address:
        <textarea className="textarea"
          name="address"
          value={inputs.textarea}
          onChange={handleChange}
        />
      </label>
      <br></br>
      <input type="submit" />
    </form>
  );
}

export default About;
