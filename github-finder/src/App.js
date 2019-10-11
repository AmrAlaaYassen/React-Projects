import React, { Component } from "react";
import axios from "axios";
import Navbar from "./Components/layouts/Navbar";
import "./App.css";
import Users from "./Components/users/Users";
import Search from "./Components/users/Search";
import Alert from "./Components/layouts/Alert";
class App extends Component {
  state = {
    users: [],
    loading: false,
    alert: null
  };

  async componentDidMount() {
    this.setState({ loading: true });
    const res = await axios.get(
      `https://api.github.com/users?client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}`
    );

    this.setState({ loading: false, users: res.data });
  }

  searchUsers = async searchText => {
    this.setState({ loading: true });
    const res = await axios.get(
      `https://api.github.com/search/users?q=${searchText}&client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}`
    );

    this.setState({ users: res.data.items, loading: false });
  };

  clearUsers() {
    this.setState({ users: [] });
  }

  setAlert = (msg, type) => {
    this.setState({ alert: { msg: msg, type: type } });

    setTimeout(() => {
      this.setState({alert: null});
    }, 2000);
  };
  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="container">
    {this.state.alert && <Alert alert={this.state.alert} /> }
          <Search
            searchUsers={this.searchUsers}
            clearUsers={this.clearUsers.bind(this)}
            showClear={this.state.users.length > 0 ? true : false}
            setAlert={this.setAlert.bind(this)}
          />
          <Users loading={this.state.loading} users={this.state.users} />
        </div>
      </div>
    );
  }
}

export default App;
