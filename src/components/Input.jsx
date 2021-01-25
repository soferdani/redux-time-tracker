import {addTask} from '../actions/index'
import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";



export default function Input () {
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

    const handleAddNewTaskUseKey = function (e) {
        if (e.key === 'Enter') {
            dispatch(addTask(lastTaskId ?  lastTaskId + 1 : 0  , inputValue))
            setInputValue('')
        }
    }

    return (
    <div>
        <input type={'text'} placeholder={'New Task'} onChange={inputChange} value={inputValue}/>
        <button onKeyUp={handleAddNewTaskUseKey} onClick={handleAddNewTask}>Add</button>
    </div>
    )
}