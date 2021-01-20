const timerAppState = {
    tasks: [
        {id: 1, taskName: 'this is the first one', time: 13},
        {id: 2, taskName: 'this is the second', time: 4},
    ],
    isRunning: null
}



// MUST RETURN NEW OBJECT !!!!!!!
export default (state = timerAppState, action) => {
    switch (action.type) {
        case 'ADD_TASK':
            return {...state,
                tasks: [...state.tasks,
                    {id: state.tasks.length + 1,
                    taskName: action.payload.taskName,
                    time: 0}]};
        case 'START_TASK':
            return {...state,
                isRunning: action.payload};
        case 'STOP_TASK':
            return {...state,
                isRunning: null};
        case 'INCREASES_TIME':
            return state;
        default:
            return state;
    }
}

const start = function () {

}
