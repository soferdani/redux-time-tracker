import {useSelector,useDispatch} from "react-redux";
import {startTimer,stopTimer} from '../actions/index'



export default function Task (props) {
    const dispatch = useDispatch();
    const isRunning = useSelector(state => state.isRunning)

    const startTimerFromTheComponent = function () {
        dispatch(startTimer(props.id))
    }


    const pauseTimerFromTheComponent = function () {
        dispatch(stopTimer(props.id))
    }

    //to run the clock i need to use the set interval and clear interval

    return (
        <div>
            <br/>
            <span>{props.taskName}   </span>
            <span>{props.time}     </span>

            {isRunning !== props.id ?
                <button onClick={startTimerFromTheComponent}>start</button>
                :<button onClick={pauseTimerFromTheComponent}>pause</button>}
        </div>
    )
}