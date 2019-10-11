import React, { useState } from "react";

const Search = ({ searchUsers, showClear, clearUsers, setAlert }) => {
  const [text, setText] = useState("");

  const onChange = e => {
    setText(e.target.value);
  };

  const onSubmit = e => {
    e.preventDefault();
    if (text === "") {
      setAlert("Please search word", "light");
    } else {
      searchUsers(text);
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
      {showClear && (
        <button className="btn btn-light btn-block" onClick={clearUsers}>
          Clear
        </button>
      )}
    </div>
  );
};

export default Search;
