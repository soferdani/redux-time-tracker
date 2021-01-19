

export default function Task (props) {

    return (
        <div>
            <br/>
            <span>{props.taskNmae}   </span>
            <span>{props.time}     </span>
            <button>start</button>

        </div>
    )
}