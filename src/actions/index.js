export const addTask = function (id ,taskName) {
    return{
        type: 'ADD_TASK',
        payload: {
            id,
            taskName
        }
    }
}

export const startTimer = function (id) {
    return {
        type: 'START_TASK',
        payload: id
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
