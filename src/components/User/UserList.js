import React, { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import User from "./User";
import './UserList.css'
const UserList = () => {
  const [users, setUsers] = useContext(UserContext);
  return (
    <div className="user-list-container">
        
      <ul>
        {users.map((user) => {
          return (
            <li key={user.id}>
              <User user={user} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default UserList;
