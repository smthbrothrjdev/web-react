import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserEdit from './EditUser.js';
import UserList from './UserList.js';
import './App.css';

function App() {
  const rootUrl = 'http://localhost:8080/users';
  const [users, setUsers] = useState([]);

  function fetchUsers() {
    axios.get(rootUrl).then((res) => {
      console.log('fetching');
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
      <hr />
      <UserList users={users} />
    </div>
  );
}

export default App;
