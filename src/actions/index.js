export const addTask = function (taskName) {
    return{
        type: 'ADD_TASK',
        payload: taskName
    }
}

export const startTimer = function () {
    return {
        type: 'START_TASK'
    }
}

export const stopTimer = function () {
    return {
        type: 'STOP_TASK'
    }
}


export const increasesTime = function () {
    return {
        type: 'INCREASES_TIME'
    }
}
