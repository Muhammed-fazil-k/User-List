import React from "react";
import Card from "../UI/Card";
import "./User.css";
function User({ user }) {
  return (
    <Card className= 'user-container'>
        <div className="user-content">{`${user.name} (${user.age} Years Old)`}</div>
    </Card>
  );
}

export default User;
