import React from "react";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    this.handleIsAvailableChange = this.handleIsAvailableChange.bind(this);
  }

  handleFilterTextChange(e) {
    this.props.onFilterTextChange(e.target.value);
  }

  handleIsAvailableChange(e) {
    this.props.onIsAvailableChange(e.target.checked);
  }

  render() {
    const filterText = this.props.filterText;
    const isAvailable = this.props.isAvailable;

    return (
      <form>
        <input
          type="text"
          placeholder="search movie.."
          value={filterText}
          onChange={this.handleFilterTextChange}
        ></input>
        <p>
          <input
            type="checkbox"
            checked={isAvailable}
            onChange={this.handleIsAvailableChange}
          />{" "}
          Only show movies that are available
        </p>
      </form>
    );
  }
}

export default SearchBar;
