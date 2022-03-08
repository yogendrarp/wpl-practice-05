import React, { Component } from "react";
import "./App.css";
import Videos from "./components/videos";
import SearchBar from "./components/searchbar";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      filterText: "",
      isAvailable: false,
    };

    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    this.handleIsAvailableChange = this.handleIsAvailableChange.bind(this);
  }

  handleFilterTextChange(filterText) {
    this.setState({ filterText: filterText });
  }

  handleIsAvailableChange(isAvailable) {
    this.setState({ isAvailable: isAvailable });
  }

  componentDidMount() {
    fetch("videos.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        this.setState({ videos: data });
      })
      .catch(console.log);
  }

  render() {
    return (
      <div>
        <h1>Video List</h1>
        <SearchBar
          filterText={this.state.filterText}
          isAvailable={this.state.isAvailable}
          onFilterTextChange={this.handleFilterTextChange}
          onIsAvailableChange={this.handleIsAvailableChange}
        ></SearchBar>
        <Videos
          videoList={this.state.videos}
          filterText={this.state.filterText}
          isAvailable={this.state.isAvailable}
        ></Videos>
      </div>
    );
  }
}

export default App;
