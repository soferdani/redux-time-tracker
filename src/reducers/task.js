export default (state = false, action) => {
    switch (action.type){
        case 'ADD_TASK':
            return !state
        default:
            return state
    }
}