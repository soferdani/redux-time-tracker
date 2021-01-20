import {useSelector} from "react-redux";
import Task from "./components/Task";
import Input from "./components/Input";
import './App.css';


function App() {
    const {tasks} = useSelector(state => state) // bring the state to the component
    return (
    <div className="App">
        <div>This is my Time Tracker</div>
        <br/><br/>
        <Input/>
        {tasks && tasks.map((task) =>
                <Task key={task.id} id={task.id} taskNmae={task.taskName} time={task.time}/>
        )}

    </div>
  );
}

export default App;
