import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserEdit from './EditUser.js';
import UserList from './UserList.js';

function App() {
  const rootUrl = 'http://localhost:3000/users';
  const [users, setUsers] = useState([]);

  function fetchUsers() {
    axios.get(rootUrl).then((res) => {
      setUsers(res.data);
      console.log(res.data);
    });
  }
  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="App">
      <UserEdit
        name="put name here"
        age={0}
        fetchUsers={fetchUsers}
        rootUrl={rootUrl}
      />
      <br />
      <UserList users={users} />
    </div>
  );
}

export default App;
