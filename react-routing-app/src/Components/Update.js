import React, { Component } from 'react';
import { useEffect, useState } from 'react';
function Update() {
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
        setTitle(resp[0].title);
        setBody(resp[0].body);
        setUserId(resp[0].id);
      });
    });
  }
  function selectUser(id) {
    console.warn(users[id - 1]);
    let item = users[id - 1];
    setTitle(item.title);
    setBody(item.body);
    setUserId(item.id);
  }
  function updateUser() {
    let item = { title, body, userId };
    fetch(`http://localhost:3006/contacts/${userId}`, {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(item),
    }).then((result) => {
      result.json().then((resp) => {
        console.warn(resp);
        getList();
      });
    });
  }

  return (
    <>
      <div>
        <br />
        <br />
        <h3>For Update Oeration</h3>
        <br />
        Title :={' '}
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <br />
        <br />
        Body :={' '}
        <input
          type="text"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
        <br />
        <br />
        <button onClick={updateUser}>UpdateUser</button>
      </div>
      <div className="App">
        <h1> List After Update Operation </h1>
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
              <td>
                <button onClick={() => selectUser(item.id)}>Update</button>
              </td>
            </tr>
          ))}
        </table>
        <br />
        <br />
      </div>
    </>
  );
}
export default Update;
