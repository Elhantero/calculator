import React, { Component } from "react";
import styled from "styled-components";

const SelectContainer = styled.div`
  display: -ms-flexbox; /* IE10 */
  display: flex;
  width: 100%;
  margin-bottom: 15px;
  .select-field {
    padding: 10px;
    outline: none;
    width: 150px;
  }
`;

class SelectComponent extends Component {
  render() {
    const { name, value, onChange, valuesToNamesMap } = this.props;
    return (
      <SelectContainer>
        <select
          className="select-field"
          name={name}
          onChange={onChange}
          defaultValue=""
        >
          <option value="" disabled>
            Choose state
          </option>
          {Object.keys(valuesToNamesMap).map(value => {
            return (
              <option value={value} key={value}>
                {valuesToNamesMap[value]}
              </option>
            );
          })}
        </select>
      </SelectContainer>
    );
  }
}

export default SelectComponent;
