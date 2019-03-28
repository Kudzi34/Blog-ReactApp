const initState = {
    authError: null
};

const authReducer = (state = initState, action) => {
    switch (action.type) {
        case "LOGIN_ERROR":
            console.log("login error");
            return {
                ...state,
                authError: "login Failed"
            };

        case "LOGIN_SUCCESS":
            console.log("login successful");
            return {
                ...state,
                authError: null
            };
        case "LOGOUT_SUCCESS":
            console.log(" log out successful");
            return state;
        case "SIGNUP_SUCCESS":
            console.log("signUp success");
            return { ...state, authError: null };
        case "SIGNUP_FAILED":
            console.log("signup failed");
            return {
                ...state,
                authError: action.err.message
            };
        default:
            return state;
    }
};

export default authReducer;
