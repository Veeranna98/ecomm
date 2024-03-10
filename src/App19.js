import React from 'react'
import { useState} from "react";

export default function Form() {
    const[username, setUsername] = useState([]);
    const[password, setPassword] = useState([]);
    const[login, setLogin] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if(username === 'John' && password === 'pass1234'){
            setLogin('granted');
        }else{
            setLogin('denied');
        }
    };
  return (
    <div className='main'>
    <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            value={username}
            onChange={(e) =>
            setUsername(e.target.value)}
            placeholder="Enter Name"
          ></input>
        </div>
        <div>
          <input
            type="text"
            value={password}
            onChange={(e) =>
            setPassword(e.target.value)}
            placeholder="Password"
          ></input>
        </div>
          <button>Submit</button>
          </form>
          {login === 'granted' && <p style={{color:'green'}}>Access Granted</p>} 
          {login === 'denied' && <p style={{color:'red'}}>Access Denied</p>}       
        </div>
    );
}