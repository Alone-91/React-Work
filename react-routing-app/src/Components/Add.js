import React, { Component } from 'react';
import { useEffect, useState } from 'react';

function Add() {
  const [users, setUser] = useState([]);
  const [title, setTitle] = useState();
  const [body, setBody] = useState();
  const [userId, setUserId] = useState(null);
  useEffect(() => {
    getList();
  }, []);
  //console.warn(users);
  function getList() {
    fetch('http://localhost:3006/contacts').then((result) => {
      result.json().then((resp) => {
        //console.warn('result', resp);
        setUser(resp);
        setTitle(resp[7].title);
        setBody(resp[7].body);
        setUserId(resp[7].id);
      });
    });
  }
  function saveUser() {
    console.warn({ title, body });
    let data = { title, body };
    fetch('http://localhost:3006/contacts', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then((result) => {
      console.warn('result', result);
      getList();
    });
  }

  return (
    <>
      <div>
        <h1>For Add Operation</h1>
        Title :=
        <input
          type="text"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          name="title"
        ></input>
        <br />
        <br />
        Body :=
        <input
          type="text"
          value={body}
          onChange={(e) => {
            setBody(e.target.value);
          }}
          name="body"
        ></input>
        <br />
        <br />
        <button type="button" onClick={saveUser}>
          Save New Data
        </button>
      </div>
      <div className="App">
        <h1> List After Adding Data</h1>
        <table border="1">
          <tr>
            <td>ID</td>
            <td>Title</td>
            <td>Body</td>
          </tr>
          {users.map((item, i) => (
            <tr key={i}>
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td>{item.body}</td>
            </tr>
          ))}
        </table>
        <br />
        <br />
      </div>
    </>
  );
}
export default Add;
