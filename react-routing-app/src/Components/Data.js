import React, { Component } from 'react';
import { useEffect, useState } from 'react';
function Data() {
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

  return (
    <div className="App">
      <h1>Data List</h1>
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
            {/* <td>
                <button onClick={() => deleteUser(item.id)}>Delete</button>
              </td>
              <td>
                <button onClick={() => selectUser(item.id)}>Update</button>
              </td> */}
          </tr>
        ))}
      </table>
    </div>
  );
}
export default Data;
