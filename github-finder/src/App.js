import React, { Component } from "react";
import axios from 'axios'
import Navbar from "./Components/layouts/Navbar";
import "./App.css";
import Users from "./Components/users/Users";
import Search from './Components/users/Search'
class App extends Component {

  state = {
    users:[],
    loading:false
  }

  async componentDidMount() { 
    console.log('env', process.env)
    this.setState({loading: true})
    const res  = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}`);
    this.setState({loading: false, users:res.data})

    console.log(res.data)
  }
  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="container">
          <Search />
          <Users loading={this.state.loading} users={this.state.users} />
        </div>
      </div>
    );
  }
}

export default App;
