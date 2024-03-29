import React, { useReducer } from "react";
import axios from "axios";

import GithubContext from "./githubContext";
import GithubReducer from "./githubReducer";
import {
  SEARCH_USERS,
  SET_LOADING,
  CLEAR_USERS,
  GET_SINGLE_USER,
  GET_REPOS
} from "../types";

const GithubState = props => {
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false
  };

  const [state, dispatch] = useReducer(GithubReducer, initialState);

  //Search User
  const searchUsers = async searchText => {
    setLoading();
    const res = await axios.get(
      `https://api.github.com/search/users?q=${searchText}&client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}`
    );
    dispatch({
      type: SEARCH_USERS,
      payload: res.data.items
    });
  };
  //Get User
  const getSingleUser = async username => {
    setLoading();
    const res = await axios.get(
      `https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}`
    );
    
    dispatch({type: GET_SINGLE_USER, payload: res.data})
  }
  //Get Repos
  const getUserRepos = async username => {
    setLoading(true);
    const res = await axios.get(
      `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}`
    );
    dispatch({type:GET_REPOS, payload:res.data})
  };

  //Clear Users
  const clearUsers = () => {
    dispatch({type:CLEAR_USERS})
  };
  //Set Loading
  const setLoading= () => {
    dispatch({type: SET_LOADING});
  }
  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        user: state.user,
        repos: state.repos,
        loading: state.loading,
        searchUsers,
        clearUsers,
        getSingleUser,
        getUserRepos
      }}
    >
      {props.children}
    </GithubContext.Provider>
  );
};

export default GithubState;
