import React, { useState } from 'react';
import axios from 'axios';

export default function UserEdit(props) {
  const [text, setText] = useState('');
  const [formData, setFormData] = useState({
    name: props.name,
    age: props.age,
  });

  const handleSetAge = () => {
    setFormData((prevState) => ({
      ...prevState,
      age: Math.floor(Math.random() * 100),
    }));
  };

  const handleNameChange = () => {
    setFormData((prevState) => ({
      ...prevState,
      name: text,
    }));
    setText('');
  };

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = () => {
    axios.post(props.rootUrl, formData);
    props.fetchUsers();
  };

  return (
    <>
      <div className="box">
        <h3> name: {formData.name}</h3>
        <h3> age: {formData.age}</h3>
      </div>
      <input
        type="text"
        id="input"
        value={text}
        onChange={handleChange}
      ></input>
      <button className="button" onClick={handleNameChange}>
        update name
      </button>
      <button className="button" onClick={handleSetAge}>
        set random age
      </button>
      <button className="button" onClick={handleSubmit}>
        {' '}
        save
      </button>
    </>
  );
}
