// a reducer takes in two things:
// 1. the ation (info about what happened)
// 2. copy of current state

function posts(state = [], action) {
    console.log(state, action);
    return state;

}

export default posts;