import Hello from "./Hello";
import KgButton from "./KgButton";
import Random from "./Random";

function App(){

  let myName = 'Pawan Sanap'; //variable declare in React.
  let fullName = () => {
    return 'Pawan Dashrath Sanap';
  }
  return <div>
   <h1>
    Hello React by {fullName()}
  </h1>

  <KgButton></KgButton>
  <Hello></Hello>
  <Random></Random>
  <Random></Random>
  <Random></Random>
  <Random></Random>

  </div>
}

export default App;