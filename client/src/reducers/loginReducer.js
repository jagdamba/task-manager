const loginReducer = (state = {
    isLoggedin: localStorage.getItem('token') ? true : false,
    user: ''
}, { action }) => {
    switch (action) {
        case 'LOGIN':
            state.user = action.data.user
            state.isLoggedin = true
            state.token = action.data.token
            return state;

        case 'LOGOUT':
            state.token = ''
            state.isLoggedin = false
            return state;

        default:
            return state
    }
}
export default loginReducer; 