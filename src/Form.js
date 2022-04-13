import React, { Component } from "react";

import FormData from "./FormData";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
      name: "",
      age: "",
      salary: "",
      array: [],
    };
  }

  toggleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  changeEvent = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  submitForm(event) {
    // event.preventDefault();
    const tem_obj = {
      name: this.state.name,
      age: this.state.age,
      salary: this.state.salary,
    };
    this.state.array.push(tem_obj);

    this.setState({
      clicked: true,
      name: "",
      age: "",
      salary: "",
    });
  }

  render() {
    return (
      <div>
        {!this.state.clicked && (
          <div>
            <form>
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                name="name"
                id="name"
                value={this.state.name}
                onChange={this.changeEvent}
              />
              <br />
              <br />

              <label htmlFor="age">Age</label>
              <input
                type="number"
                name="age"
                id="age"
                value={this.state.age}
                onChange={this.changeEvent}
              />
              <br />
              <br />

              <label htmlFor="salary">Salary:</label>
              <input
                type="number"
                name="salary"
                id="salary"
                value={this.state.salary}
                onChange={this.changeEvent}
              />
              <br />
              <br />

              <input type="submit" onClick={() => this.submitForm()} />
            </form>
          </div>
        )}
        {this.state.clicked && (
          <FormData details={this.state.array} funcTogg={this.toggleClick} />
        )}
      </div>
    );
  }
}

export default Form;
