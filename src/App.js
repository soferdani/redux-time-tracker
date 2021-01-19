import './App.css';
import Task from "./components/Task";
import {useSelector, useDispatch} from "react-redux";
import {addTask, startTimer, stopTimer} from './actions/index'


function App() {
    const allInfo = useSelector(state => state) // bring the state to the component
    const tasks = useSelector(state => state.tasks) // bring the state to the component
    // console.log(allInfo);
    const dispatch = useDispatch();

    console.log(tasks)
    const handleClick = function () {
        dispatch(addTask())
    }


    return (
    <div className="App">

        <div>This is my app</div>
        <br/><br/>

        <input type={'text'} placeholder={'New Task'} />
        <button onClick={handleClick}>Add</button>

        {tasks ? tasks.map((task) =>
                <Task key={task.id} taskNmae={task.taskName}></Task>
        ): null}

    </div>
  );
}

export default App;
