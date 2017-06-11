// a reducer takes in two things:

// 1. the ation (info about what happened)
// 2. copy of current state

function posts(state = [], action) {
    const { type, index } = action;
    switch (type) {
        case 'INCREMENT_LIKES':
            // return updated state
            return [
                ...state.slice(0, index), // before the one we are updating
                {...state[index], likes: state[index].likes + 1},
                ...state.slice(index + 1), // after the one we are updating
            ]

        default:
            return state;
    }

}

export default posts;
