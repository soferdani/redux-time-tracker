import './App.css';
import {useSelector, useDispatch} from "react-redux";
import increment from './actions'

function App() {
    const counter = useSelector(state => state)
    const dispatch = useDispatch();
  return (
    <div className="App">

        <div>counter {counter}</div>
        <button onClick={()=> dispatch(increment(5))}>+</button>
        <button>-</button>
    </div>
  );
}

export default App;
