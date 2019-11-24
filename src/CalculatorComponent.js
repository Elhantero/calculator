import React, { Component } from "react";
import styled from "styled-components";
import sortBy from "lodash/sortBy";
import remove from "lodash/remove";
import SelectComponent from "./common/SelectComponent";
import InputComponent from "./common/InputComponent";
import WorkCmponent from "./common/WorkCmponent";

const Container = styled.div`
  display: flex;
  background-color: lightgrey;
  padding: 10px;
  max-width: 900px;
`;

const stateIdToNameMap = {
  1: "Vinnitsa",
  2: "Kiev",
  3: "Lvov"
};

class CalculatorComponent extends Component {
  state = {
    fields: {
      stateId: "",
      areaMin: "",
      ceilingHeight: "",
      roomCount: ""
    },
    selectedWorks: [
      {
        id: 1,
        name: "somename",
        price: 1000,
        info: "some info"
      },
      {
        id: 2,
        name: "somename2",
        price: 2000,
        info: "some info2"
      },
      {
        id: 3,
        name: "somename3",
        price: 3000,
        info: "some info3"
      },
      {
        id: 4,
        name: "somename4",
        price: 4000,
        info: "some info4"
      },
      {
        id: 5,
        name: "somename5",
        price: 5000,
        info: "some info5"
      }
    ],
    allWorks: [],
    showInfoIds: [],
    totalSum: 0
  };
  onChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    const newState = { ...this.state };
    newState.fields[name] = value;
    this.setState(newState);
  };
  onSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  };
  onClickDelete = e => {
    e.preventDefault();
    const newState = { ...this.state };
    let { selectedWorks, allWorks } = newState;
    const deletedWorks = selectedWorks.filter(
      work => work.id === Number(e.target.name)
    );
    allWorks.push(...deletedWorks);
    allWorks = sortBy(allWorks, o => o.id);
    selectedWorks = selectedWorks.filter(
      work => work.id !== Number(e.target.name)
    );
    this.setState({ selectedWorks, allWorks });
  };
  onChangeAddWork = e => {
    e.preventDefault();
    const newState = { ...this.state };
    let { selectedWorks, allWorks } = newState;
    const temp = allWorks.filter(work => work.id === Number(e.target.value));
    selectedWorks = [...selectedWorks, ...temp];
    allWorks = allWorks.filter(work => work.id !== Number(e.target.value));
    allWorks = sortBy(allWorks, o => o.id);
    this.setState({ selectedWorks, allWorks });
  };
  onChangeInfo = e => {
    const newState = { ...this.state };
    let { showInfoIds } = newState;
    const { name, checked } = e.target;
    if (checked) showInfoIds.push(Number(name));
    if (!checked) showInfoIds = remove(showInfoIds, Number(name));
    this.setState({ showInfoIds });
  };
  render() {
    const { fields, selectedWorks, allWorks, showInfoIds } = this.state;
    const { areaMin, ceilingHeight, roomCount } = fields;
    return (
      <form onSubmit={this.onSubmit}>
        <Container>Base information</Container>
        <Container>
          <SelectComponent
            name="stateId"
            onChange={this.onChange}
            valuesToNamesMap={stateIdToNameMap}
          />
          <InputComponent
            placeholder="Площадь"
            name="areaMin"
            value={areaMin}
            onChange={this.onChange}
            type="number"
            step="0.01"
            min="0.01"
            max="1000"
            iconText="м²"
          />
          <InputComponent
            placeholder="Высота потолков"
            name="ceilingHeight"
            type="number"
            value={ceilingHeight}
            onChange={this.onChange}
            step="1"
            min="200"
            max="500"
            iconText="см"
          />
          <InputComponent
            placeholder="Количество комнат"
            name="roomCount"
            type="number"
            value={roomCount}
            onChange={this.onChange}
            step="1"
            min="1"
            max="10"
            iconText="1-10"
          />
        </Container>
        <Container>Black works</Container>
        <Container>
          <WorkCmponent
            selectedWorks={selectedWorks}
            allWorks={allWorks}
            onClickDelete={this.onClickDelete}
            onChangeAddWork={this.onChangeAddWork}
            onChangeInfo={this.onChangeInfo}
            showInfoIds={showInfoIds}
          />
        </Container>
        <Container>
          <input type="submit" value="Calculate" />
        </Container>
      </form>
    );
  }
}

export default CalculatorComponent;
