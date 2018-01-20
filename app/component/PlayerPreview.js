/**
 * Created by Daniel on 19/01/2018.
 */
/**
 * Created by Daniel on 19/01/2018.
 */
import React from "react";

export default ({ avatar, username, children }) => {
  return (
    <div>
      <div className="column">
        <img className="avatar" src={avatar} alt={`Avatar ${username}`} />
        <h2 className="username">@{username}</h2>
      </div>
      {children}
    </div>
  );
};
