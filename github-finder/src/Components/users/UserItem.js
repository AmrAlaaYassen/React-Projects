import React from "react";

const UserItem = props => {
  const { avatar_url, html_url, login } = props.user;
  return (
    <div className="card text-center">
      <img className="round-img" src={avatar_url} style={{ width: 60 }} alt="user Pic" />
      <h3>{login}</h3>
      <div>
        <a href={html_url} className="btn btn-dark btn-sm my-1">
          More
        </a>
      </div>
    </div>
  );
};

export default UserItem;
