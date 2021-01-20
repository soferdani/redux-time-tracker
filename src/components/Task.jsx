import {useSelector} from "react-redux";



export default function Task (props) {

    const isRunning = useSelector(state => state.isRunning)

    const startTimer = function () {
        if (!isRunning) {
            console.log(isRunning)
        } // here i can add something if i want that something will happened if a task is running
    }

    const pauseTimer = function () {

    }

    return (
        <div>
            <br/>
            <span>{props.taskNmae}   </span>
            <span>{props.time}     </span>

            {!isRunning ?
                <button onClick={startTimer}>start</button>
                :<button onClick={pauseTimer}>pause</button>}


        </div>
    )
}