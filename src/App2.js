import React from "react";
// import Login from "./Login";
// import Home from "./Home";
export default function App2(props) {
  return props.user === "" && (
    <div>
      <h2>Login Form</h2>
      <p>
        <input type="text" placeholder="Enter Username"></input>
      </p>
      <p>
        <input type="password" placeholder="Enter Password"></input>
      </p>
      <button>Login</button>
    </div>
  ) 
}

// : (
//     <div>Hello {props.user}</div>
//   );

// return (props.user==="" ? <Login /> : <Home username={props.user} />);

// if (props.user === "") {
//     return <Login />;
//   } else {
//     return <Home username={props.user} />;
//   }
