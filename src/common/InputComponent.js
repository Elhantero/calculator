import React, { Component } from "react";
import styled from "styled-components";

const InputContainer = styled.div`
  display: -ms-flexbox; /* IE10 */
  display: flex;
  width: 100%;
  margin-bottom: 15px;
  .input-field {
    padding: 10px;
    outline: none;
    width: 135px;
  }
  .icon {
    padding: 10px;
    background: orange;
    color: white;
    min-width: 25px;
    text-align: center;
  }
`;

class InputComponent extends Component {
  render() {
    const {
      name,
      value,
      onChange,
      type,
      step,
      min,
      max,
      placeholder,
      iconText
    } = this.props;
    return (
      <InputContainer>
        <input
          className="input-field"
          placeholder={placeholder}
          name={name}
          value={value}
          onChange={onChange}
          type={type}
          step={step}
          min={min}
          max={max}
          size="50"
        />
        <span className="icon">{iconText}</span>
      </InputContainer>
    );
  }
}

export default InputComponent;
