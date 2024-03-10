import React from "react";

export default function App1(props) {
   return (
    <div style={{color:'silver'}}>
      Hello {props.name}. You are {props.age}
    </div>
  );
}

App1.defaultProps = {name: "Cathy", age: 20 };