import './App.css';
import Task from "./components/Task";
import {useSelector, useDispatch} from "react-redux";
import {addTask, startTimer, stopTimer} from './actions/index'

function App() {
    let inputValueHolder = ''
    const inputChange = function (e) {
        inputValueHolder = e.target.value
    }

    const tasks = useSelector(state => state.tasks) // bring the state to the component
    const dispatch = useDispatch();

    console.log(tasks)
    const handleClick = function () {
        dispatch(addTask(3, inputValueHolder))
    }




    return (
    <div className="App">

        <div>This is my app</div>
        <br/><br/>

        <input type={'text'} placeholder={'New Task'} onChange={inputChange} />
        <button onClick={handleClick}>Add</button>

        {tasks ? tasks.map((task) =>
                <Task key={task.id} taskNmae={task.taskName} time={task.time}></Task>
        ): null}

    </div>
  );
}

export default App;
