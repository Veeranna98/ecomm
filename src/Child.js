import {UserContext} from "./App13"
import { useContext } from "react";
export default function Child() {
  const {user, email} = useContext(UserContext);
  return (
    <>
      <h2>Hello {user} from Child component</h2>
    </>
  );
}
