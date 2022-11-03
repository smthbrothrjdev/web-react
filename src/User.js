import React from 'react';

export default function User(props) {
  return (
    <>
      <br />
      <h3> name: {props.name}</h3>
      <h3> age: {props.age}</h3>
    </>
  );
}
