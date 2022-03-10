import { csrfFetch } from "./csrf"

const GET_USERS = "users/profile"

const getUsers = (users) => {
    return {
        type: GET_USERS,
        users
    }
}


export const getUsersThunk = (userId) => async (dispatch) => {

    const res = await csrfFetch(`/api/users/${userId}`);

    const data = await res.json()
    dispatch(getUsers(data))
}

const initialState = {}


const usersReducer = (state = initialState, action) => {
    let newState = {}
    switch (action.type) {
        case GET_USERS: {
            newState = {...state}
            action.users.forEach(user => {
                newState[user.id] = user
            });
            return newState;
        }
        default: return state
    }
}

export default usersReducer
