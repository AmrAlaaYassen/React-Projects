import React, { Component } from 'react'

 class Search extends Component {
  render() {
    return (
      <div>
        <form className="form">
          <input name="text" type="text" placeholder="Search for a user"/>
          <input className="btn btn-dark btn-block" value="search" type="submit" /> 
        </form>
      </div>
    )
  }
}

export default Search
