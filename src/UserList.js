import React from 'react';
import User from './User.js';

export default function UserList(props) {
  return (
    <>
      {props.users.map((user) => {
        return <User name={user.name} age={user.age} />;
      })}
    </>
  );
}
