import { csrfFetch } from "./csrf"



const initialState = {
    user: null
}

const SET_USER = "session/setUser"
const REMOVE_USER = "session/removeUser"


const setUser = (user) => {
    return {
        type: SET_USER,
        user
    }
}

const removeUser = () => {
    return {
        type: REMOVE_USER
    }
}

export const login = (user) => async (dispatch) => {
    const res = await csrfFetch("/api/session", {
        method: "POST",
        body: JSON.stringify({
            credential: user.credential,
            password: user.password
        })
    });

    const data = await res.json()
    dispatch(setUser(data.user))
}

export const signUp = (user) => async (dispatch) => {
    const { username, email, password } = user;
    const response = await csrfFetch("/api/users", {
        method: "POST",
        body: JSON.stringify({
            username,
            email,
            password,
        }),
    });
    const data = await response.json();
    dispatch(setUser(data.user));
    return data;
};


export const restoreUser = () => async (dispatch) => {
    const res = await csrfFetch("/api/session")

    const data = await res.json()
    dispatch(setUser(data.user))

}


export const logout = () => async (dispatch) => {
    const res = await csrfFetch("/api/session", {
        method: "DELETE",

    })

    dispatch(removeUser());
    return res;
}



const sessionReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER: {
            let newState = { ...state };
            newState.user = action.user;
            return newState;
        }
        case REMOVE_USER: {
            let newState = { ...state };
            newState.user = null;
            return newState
        }
        default: return state;
    }

}

export default sessionReducer
