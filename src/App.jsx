import { useReducer, useState } from "react";
import "./App.css";
const InitialState = {
  number: 0,
  user: null,
};

function reducer(state, action) {
  switch (action.type) {
    case "multiplyBy7":
      return { ...state, number: state.number * 7 };
    case "divideBy25":
      return { ...state, number: parseInt(state.number / 25) };
    case "sumByNum":
      return { ...state, number: state.number + parseInt(action.num) };
    default:
      return state;
  }
}
function App(props) {
  const [state, dispatch] = useReducer(reducer, InitialState);
const [numero,setNumero] = useState('')
  return (
    <div className="App">
      <h1>{state.number}</h1>
  
      <button onClick={() => dispatch({ type: "multiplyBy7" })}>*7</button>
      <button onClick={() => dispatch({ type: "divideBy25" })}>/25</button>
      <input type="number" value={numero} onChange={(e)=> setNumero( e.target.value)}/>
      <button onClick={() => dispatch({ type: "sumByNum", num: numero })}>by Num</button>
    </div>
  );
}

export default App;
