import { useState, createContext, useContext } from "react";
import Child from "./Child";
export const UserContext = createContext();
export default function App13() {
  const [user, setUser] = useState("John");
  const [email, setEmail] = useState("john@gmail.com")
  return (
    <>
    <UserContext.Provider value={{user, email}}>
      <h2>Hello {user} from App13 component</h2>
      <Child />
    </UserContext.Provider>
    </>
  );
}
