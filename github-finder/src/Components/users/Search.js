import React, { Component } from "react";

class Search extends Component {
  state = {
    text: ""
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit(e) {
    e.preventDefault();

    this.props.searchUsers(this.state.text);
    this.setState({ text: "" });
  }
  render() {
    return (
      <div>
        <form className="form" onSubmit={this.onSubmit.bind(this)}>
          <input
            name="text"
            type="text"
            value={this.state.text}
            onChange={this.onChange}
            placeholder="Search for a user"
          />
          <input
            className="btn btn-dark btn-block"
            value="search"
            type="submit"
          />
        </form>
        {
          this.props.showClear && <button
          className="btn btn-light btn-block"
          onClick={this.props.clearUsers}
        >
          Clear
        </button>
        }
        
      </div>
    );
  }
}

export default Search;
