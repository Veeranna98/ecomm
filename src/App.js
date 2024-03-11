// import "./App.css";
// import Calc from "./Calc";
// import Add from "./Add";
// import Students from "./Students";
// import Sqr from "./Sqr";
// import User from "./User";
// function App() {
//   const sqrfunction = (n) => {
//     return n*n
//   }
//   return (
//     <div>
//       <User name="John"/>
//      <Calc a={3} b={5}/>
//      <Add arr={[5,6,8]} />
//      <Students score={{'John':40,'Cathy':50}}/>
//      <Sqr a={5} fn={sqrfunction}/>
//     </div>
//   );
// }
// export default App;

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