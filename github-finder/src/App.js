import React, { Component } from "react";
import axios from 'axios'
import Navbar from "./Components/layouts/Navbar";
import "./App.css";
import Users from "./Components/users/Users";

class App extends Component {

  state = {
    users:[],
    loading:false
  }

  async componentDidMount() { 
    this.setState({loading: true})
    const res  = await axios.get('https://api.github.com/users');
    this.setState({loading: false, users:res.data})

    console.log(res.data)
  }
  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="container">
          <Users loading={this.state.loading} users={this.state.users} />
        </div>
      </div>
    );
  }
}

export default App;
