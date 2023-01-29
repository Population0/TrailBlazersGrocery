import logo from './logo.svg';
import './App.css';

import React, { Component, createElement } from "react";
import { findByLabelText } from '@testing-library/react';

export default class groceryArrList extends Component {
  state = {
    groceryArr: [],
    inputValue: ""
  };
  price = {
    //pull price from json file
    priceArr: [],
    priceVal: ""
  };
  investment = {
    investArr: [],
    investVal: ""
  };

  addGrocery = () => {
    this.setState({ groceryArr: [this.state.inputValue, ...this.state.groceryArr] });
    
    // I want to insert separate paragraph tags (groceryArrs from this.state.groceryArr) into the list element here
  };

  handleKeyDown = (e) => {
    if (e.keyCode === 13) {
      if (this.state.inputValue === "") return;

      this.addGrocery();
      this.state.inputValue = "";
    }
  };

  handleChange = (e) => {
    this.setState({ inputValue: e.target.value });
  };

  render() {
    const mystyle = {
      color: "white",
      backgroundColor: "DodgerBlue",
      padding: "10px",
      fontFamily: "Arial",
      display: "flex",
      flexDirection: "row"
    };
    const mainBox = {
      display: "flex",
      alignItems: "center",
      flexDirection: "column"
    };
    const NPI = {
      display: "flex",
      alignItems: "column",
      justifyContent: "Space-between"
    };
    const titleStyle = {
      backgroundColor: "#B27092"

    };
    const listCategory = {
      padding: "90px"
    }
    return (
      <div style={mainBox}>
        <h1 style={titleStyle}>
          LETS START WHOPPING
        </h1>
        <div style={mystyle}>
          <input
            type="text"
            className="insertgroceryArr"
            placeholder="Add a new item!"
            onChange={this.handleChange}
            onKeyDown={this.handleKeyDown}
            value={this.state.inputValue}
          />
          <button onClick={this.addgroceryArr}>Add to list</button>
        </div>
        <div style={NPI}>
          <div className="list" style={listCategory}>
          <h3>
            ITEM
          </h3>
            {this.state.groceryArr.map((groceryArr) => {
              return <p>{groceryArr}</p>;
            })}
          </div>
          <div style={listCategory}>
            <h3>
              PRICE
            </h3>
          </div>
          <div style={listCategory}>
            <h3>
              INVESTMENT
            </h3>
          </div>
        </div>

      </div>
    );
  }
}

