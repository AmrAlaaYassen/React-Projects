import React, { useState, useContext } from "react";
import GithubContext from "../../context/github/githubContext";
import AlertContext from '../../context/alert/alertContext';
const Search = ( ) => {
  const githubContext = useContext(GithubContext);
  const alertContext = useContext(AlertContext);
  const [text, setText] = useState("");

  const onChange = e => {
    setText(e.target.value);
  };

  const onSubmit = e => {
    e.preventDefault();
    if (text === "") {
     alertContext.setAlert("Please enter search word", 'light')
    } else {
      githubContext.searchUsers(text);
      setText("");
    }
  };

  return (
    <div>
      <form className="form" onSubmit={onSubmit.bind(this)}>
        <input
          name="text"
          type="text"
          value={text}
          onChange={onChange}
          placeholder="Search for a user"
        />
        <input
          className="btn btn-dark btn-block"
          value="search"
          type="submit"
        />
      </form>
      {githubContext.users.length > 0 && (
        <button className="btn btn-light btn-block" onClick={githubContext.clearUsers}>
          Clear
        </button>
      )}
    </div>
  );
};

export default Search;
