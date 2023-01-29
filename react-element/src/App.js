import './App.css';

import React, { Component} from "react";
import data from "./components/sample.json";


export default class groceryArrList extends Component {
  state = {
    groceryArr: [],
    inputValue: "",

    investArr: [],
    investVal: "",

    priceArr: [],
    priceVal: ""
  };
  
  map = new Map(Object.entries(data));
  addGrocery = () => {
    this.setState({ groceryArr: [this.state.inputValue, ...this.state.groceryArr], priceArr: [this.state.priceVal, ...this.state.priceArr]});
    // I want to insert separate paragraph tags (groceryArrs from this.state.groceryArr) into the list element here
  };

  handleKeyDown = (e) => {
    if (e.keyCode === 13) {
      if (this.state.inputValue === "") return;

      this.setState({priceVal: this.map.get(this.state.inputValue)})
      this.addGrocery();
      this.state.inputValue = "";
    }
  };

  handleChange = (e) => {
    console.log(data)
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
            className="groceryArr"
            placeholder="Add a new item!"
            onChange={this.handleChange}
            onKeyDown={this.handleKeyDown}
            value={this.state.inputValue}
          />
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