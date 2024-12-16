import React from "react";

const UserInfo = ({
    name,
    email,
}) => {
    return  <div>
    <h1>{name}</h1>
    <p>Email: {email}</p>
  </div>
}

export default UserInfo