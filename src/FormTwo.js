import React, { Component } from "react";

class FormTwo extends Component {
  render() {
    return (
      <form>
        {this.props.formData.map((category, index) => (

          <div>
            <label>Hi, {category.name}!</label>
            <select>
              {category.options.map((option, index) => (
                <option value={option}>{option}</option>
              ))}
            </select>
          </div>))}
      </form>);
  }
}

export default FormTwo;
