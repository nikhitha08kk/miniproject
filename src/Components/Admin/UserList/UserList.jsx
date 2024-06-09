import React from 'react'
import { useEffect, useState } from "react";
import { userList,removeUser } from '../../../Services/Adminapi';
import './UserList.css'
function UserList() {

    const [users, setUsers] = useState([]);
    const [totalUsers, setTotalUsers] = useState(0);
  
    const fetchData = async () => {
      const {data} = await userList();
      if(data.status) {
        setUsers(data.UserList);
        setTotalUsers(data.UserList.length);
      } else {
        console.log("error");
      }
    };

    const handleRemoveUser = async (userId) => {
      try {
        const { data } = await removeUser(userId);
        if (data.status) {
          fetchData(); // Refresh the user list after removing user
        } else {
          console.log("Error removing user");
        }
      } catch (error) {
        console.error("Error removing user:", error);
      }
    };
  
    useEffect(() => {
      fetchData();
    }, []);
  return (
    <>
    <div className="adminHome">
      <h1>User List</h1>
      <h3>
        Total Users: {totalUsers}
      </h3>
      <div className="adminUserTable">
      <table className="userListTable">
        <thead>
          <tr>
            <th>Username</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.username}>
              <td>{user.username}</td>
              <td>{user.email}</td>
              {/* <td>
                {user.blockStatus ? (
                  <button
                    className="adminUserListBlock"
                    onClick={(user.id)}
                  >
                    Unblock
                  </button>
                ) : (
                  <button
                    className="adminUserListBlock"
                    onClick={(user.id)}
                  >
                    Block
                  </button>
                )}
              </td> */}
               <td>
                    <button
                      className="adminUserListBlock"
                      onClick={() => handleRemoveUser(user._id)}
                    >
                      Delete
                    </button>
                  </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
  </>
);
}

  

export default UserList