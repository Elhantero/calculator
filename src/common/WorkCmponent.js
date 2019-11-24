import React, { Component, Fragment } from "react";
import fromPairs from "lodash/fromPairs";
import styled from "styled-components";
import SelectComponent from "./SelectComponent";

const Wrapper = styled.div`
  width: 880px;
  .info-container {
    width: 880px;
    background-color: yellow;
    margin-top: -15px;
  }
`;

const WorkContainer = styled.div`
  display: -ms-flexbox; /* IE10 */
  display: flex;
  width: 100%;
  margin-bottom: 15px;
  justify-content: space-between;
  div {
    height: 25px;
    background-color: lightgreen;
    padding: 15px;
    text-align: center;
  }
  .work-name {
    width: 300px;
  }
  .info {
    width: 50px;
  }
  .price {
    width: 300px;
  }
  .delete {
    width: 50px;
  }
`;

class InputComponent extends Component {
  render() {
    const {
      selectedWorks,
      onClickDelete,
      onChangeAddWork,
      onChangeInfo,
      allWorks,
      showInfoIds
    } = this.props;
    const workIdToNameMap = fromPairs(
      allWorks.map(work => [work.id, work.name])
    );
    if (!selectedWorks) return null;
    return (
      <Wrapper>
        {selectedWorks.map(work => (
          <div>
            <WorkContainer>
              <div className="work-name">{work.name}</div>
              <input type="checkbox" onChange={onChangeInfo} name={work.id} />
              <div className="price">{work.price}</div>
              <input
                type="button"
                className="delete"
                onClick={onClickDelete}
                name={work.id}
                value="x"
              />
            </WorkContainer>
            {showInfoIds.includes(work.id) ? (
              <div className="info-container">{work.info}</div>
            ) : null}
          </div>
        ))}
        <select
          className="select-field"
          name="addWork"
          onChange={onChangeAddWork}
          defaultValue=""
        >
          <option value="">Add work</option>
          {Object.keys(workIdToNameMap).map(value => {
            return (
              <option value={value} key={value}>
                {workIdToNameMap[value]}
              </option>
            );
          })}
        </select>
      </Wrapper>
    );
  }
}

export default InputComponent;
