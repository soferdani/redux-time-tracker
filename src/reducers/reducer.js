export default (state = 4, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return state + action.data;
        case 'DECREMENT':
            return state - 1
        default:
            return state
    }
}