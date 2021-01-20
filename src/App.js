import {useSelector} from "react-redux";
import Task from "./components/Task";
import './App.css';
import Input from "./components/Input";


function App() {
    const {tasks} = useSelector(state => state) // bring the state to the component
    return (
    <div className="App">
        <div>This is my app</div>
        <br/><br/>
        <Input/>
        {tasks && tasks.map((task) =>
                <Task key={task.id} id={task.id} taskNmae={task.taskName} time={task.time}/>
        )}

    </div>
  );
}

export default App;
