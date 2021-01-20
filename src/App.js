import {useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import {addTask, startTimer, stopTimer} from './actions/index'
import Task from "./components/Task";
import './App.css';



function App() {
    const [inputValue, setInputValue] = useState ('')
    const inputChange = function (event) {
        setInputValue(event.target.value)
    }


    const tasks = useSelector(state => state.tasks) // bring the state to the component
    const dispatch = useDispatch();

    const handleClick = function () {
        dispatch(addTask(3, inputValue))
        setInputValue('')
    }




    return (
    <div className="App">

        <div>This is my app</div>
        <br/><br/>

        <input type={'text'} placeholder={'New Task'} onChange={inputChange} value={inputValue}/>
        <button onClick={handleClick}>Add</button>

        {tasks ? tasks.map((task) =>
                <Task key={task.id} taskNmae={task.taskName} time={task.time}/>
        ): null}

    </div>
  );
}

export default App;
