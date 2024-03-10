import "./App.css";
import Calc from "./Calc";
import Add from "./Add";
import Students from "./Students";
import Sqr from "./Sqr";
import User from "./User";
function App() {
  const sqrfunction = (n) => {
    return n*n
  }
  return (
    <div>
      <User name="John"/>
     <Calc a={3} b={5}/>
     <Add arr={[5,6,8]} />
     <Students score={{'John':40,'Cathy':50}}/>
     <Sqr a={5} fn={sqrfunction}/>
    </div>
  );
}
export default App;
