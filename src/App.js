import {useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import {addTask, startTimer} from './actions/index'
import Task from "./components/Task";
import './App.css';



function App() {
    const tasks = useSelector(state => state.tasks) // bring the state to the component
    const lastTaskId = useSelector(state => state.tasks[state.tasks.length -1].id)
    const dispatch = useDispatch();


    const [inputValue, setInputValue] = useState ('')


    const inputChange = function (event) {
        setInputValue(event.target.value)
    }
    const handleAddNewTask = function () {
        dispatch(addTask(lastTaskId ?  lastTaskId + 1 : 0  , inputValue))
        setInputValue('')
    }




    return (
    <div className="App">

        <div>This is my app</div>
        <br/><br/>

        <input type={'text'} placeholder={'New Task'} onChange={inputChange} value={inputValue}/>
        <button onClick={handleAddNewTask}>Add</button>

        {tasks ? tasks.map((task) =>
                <Task key={task.id} taskNmae={task.taskName} time={task.time}/>
        ): null}

    </div>
  );
}

export default App;
