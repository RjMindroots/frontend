const initialState = {
    user: null
}
const user = (state = initialState, action) => {
    switch (action.type) {
        case "SIGN_UP": return {user :action.data}

        default: return state
    }
}
export default user