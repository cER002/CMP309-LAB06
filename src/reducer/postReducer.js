function postReducer(state, action) {
    switch (action.type) {
        case 'FETCH_START':
            return { ...state, status: 'loading' };
        case 'FETCH_SUCCESS':
            return { ...state, status: 'success', data: action.payload };
        case 'FETCH_ERROR':
            return { ...state, status: 'error', data: action.payload };
        default:
            return state
    }
}

export default postReducer