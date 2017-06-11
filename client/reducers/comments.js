function postComments(state = [], action) {
    const { type } = action;
    switch (type) {
        case 'ADD_COMMENT':
            const { author, comment } = action;
            // return the new state with the new comment
            return [
                ...state,
                {
                    user: author,
                    text: comment
                }
            ]
        case 'REMOVE_COMMENT':
            // return the new state without the deleted comment
            return [
                // from the start to the one we want to delete
                ...state.slice(0, action.i),
                // after the deleted one, to the end
                ...state.slice(action.i + 1)
            ];
        default:
            return state
    }
}

function comments(state = [], action) {
    if (typeof action.postId !== 'undefined') {
        return {
            // take the current state
            ...state,
            // overwrite this post with a new one
            [action.postId]: postComments(state[action.postId], action)
        }
    }
    return state
}

export default comments;
