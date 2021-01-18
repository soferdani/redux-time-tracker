const increment = function (multiBy) {
    return{
        type: 'INCREMENT',
        data: multiBy
    }
}

export default increment