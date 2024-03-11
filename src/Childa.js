import {UserContext} from "./App13a"
import { useContext } from "react";
export default function Childa() {
  const {user,setUser} = useContext(UserContext);
  return (
    <>
      <h2>Hello {user} from Child component</h2>
      <button>Change to Cathy</button>
    </>
  );
}