import React from "react";
import {useState} from "react";

const Register = () => {
  return (
    <div className="Register">
      <h1>Register Here</h1>
      <div>
        <MyForm />
      </div>
    </div>
  );
};

function MyForm() {
  const [inputs, setInputs] = useState({}); // inputs is the current object and this is updated by method setInputs()

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`The inputs you entered were: ${JSON.stringify(inputs)}`);
  };

  const handleInputChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((input) => ({...input, [name]: value}));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div><label>
        Enter your name:
        <input
          type="text"
          name="username"
          placeholder="Enter your Full Name"
          value={inputs.username}
          onChange={handleInputChange}
          required
        />
      </label></div>
      <label>
        Enter your Email:
        <input
          type="text"
          name="email"
          placeholder="Enter your Email ID"
          value={inputs.email}
          onChange={handleInputChange}
          required
        />
      </label>

      <label>
        Gender:
        <input type="radio" value={inputs.gender} name="gender" /> Male
        <input type="radio" value={inputs.gender} name="gender" /> Female
      </label>
      <label>
        Department:
        <select value={inputs.dept} onChange={handleInputChange}>
          <option value="Web">Web</option>
          <option value="Platform">Platform</option>
          <option value="Middleware">Middleware</option>
          <option value="Product Delivery">Product Delivery</option>
        </select>
      </label>
      <label>
        Role:
        <select value={inputs.role} onChange={handleInputChange}>
          <option value="Admin">Admin</option>
          <option value="User">User</option>
        </select>
      </label>
      <label>
        Enter Password:
        <input
          type="password"
          name="password"
          placeholder="Enter password of your choice"
          value={inputs.password}
          onChange={handleInputChange}
          required
        />
      </label>
      <label>
        Confirm Password:
        <input
          type="password"
          name="confirm-pwrd"
          placeholder="Enter the same password again"
          value={inputs.password}
          onChange={handleInputChange}
          required
        />
      </label>
      <input type="submit" />
    </form>
  );
}

export default Register;
