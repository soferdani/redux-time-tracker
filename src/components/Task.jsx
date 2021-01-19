import {useSelector, useDispatch} from "react-redux";
import {addTask, startTimer, stopTimer} from '../actions/index'



export default function Task () {





    const allInfo = useSelector(state => state) // bring the state to the component
    // console.log(allInfo);
    const dispatch = useDispatch();

    const handleClick = function () {
        console.log(dispatch(addTask()))
        dispatch(addTask())
    }


    return (
        <div>
            <input type={'text'} placeholder={'New Task'} />
            <button onClick={handleClick}>Add</button>
        </div>
    )
}