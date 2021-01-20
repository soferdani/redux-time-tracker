
const timerAppState = {
    tasks: [
        {id: 1, taskName: 'this is the first one', time: 13},
        {id: 2, taskName: 'this is the second', time: 4},
    ],
    taskId: null
}


export default (state= timerAppState, action) => {
    switch (action.type){
        case 'ADD_TASK':
            state.tasks.push({id: action.payload.id, taskName: action.payload.taskName, time: 0})
        case 'START_TASK':
            return state;
        case 'STOP_TASK':
            return state;
        case 'INCREASES_TIME':
            return state;
        default:
            return state;
    }
}




