import React, { Component } from "react";
import axios from "axios";
import Navbar from "./Components/layouts/Navbar";
import "./App.css";
import Users from "./Components/users/Users";
import Search from "./Components/users/Search";
class App extends Component {
  state = {
    users: [],
    loading: false
  };

  async componentDidMount() {
    this.setState({ loading: true });
    const res = await axios.get(
      `https://api.github.com/users?client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}`
    );

    this.setState({ loading: false, users: res.data });
  }

  searchUsers = searchText => {
    this.setState({ loading: true });
    axios
      .get(
        `https://api.github.com/search/users?q=${searchText}&client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}`
      )
      .then(res => {
        this.setState({ users: res.data.items});
      })
      .catch(err => {
        console.log(err);
      });

      this.setState({loading:false})

  };
  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="container">
          <Search searchUsers={this.searchUsers} />
          <Users loading={this.state.loading} users={this.state.users} />
        </div>
      </div>
    );
  }
}

export default App;
