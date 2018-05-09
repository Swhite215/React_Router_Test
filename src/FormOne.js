import React, { Component } from "react";

class FormOne extends Component {
  render() {
    return (
      <form>
        {this.props.formData.map((category, index) => (

         <div>
          <label>Hello, {category.name}!</label>
            <select>
              {category.options.map((option, index) => (
                <option value={option}>{option}</option>
              ))}
            </select>
          </div>))}
      </form>);
  }
}

export default FormOne;
