import { csrfFetch } from "./csrf"

const GET_LIKES = "likes/all"
const NEW_LIKE = "likes/new"
const DELETE_LIKE = 'likes/delete'

const getLikes = (likes) => {
    return {
        type: GET_LIKES,
        likes
    }
}

const newLike = (like) => {
    return {
        type: NEW_LIKE,
        like
    }
}

const deleteLike = (likeId) => {
    return {
        type: DELETE_LIKE,
        likeId
    }
}


export const getAllLikesThunk = (userId) => async (dispatch) => {

    const res = await csrfFetch(`/api/likes/${userId}`);
    const data = await res.json()
    dispatch(getLikes(data))
}

export const newLikeThunk = (like) => async (dispatch) => {
    const {userId, songId} = like
    const res = await csrfFetch(`/api/likes/new`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            userId,
            songId
    }),
})
    const data = await res.json()
    dispatch(newLike(data))
}

export const deleteLikeThunk = (likeId) => async (dispatch) => {
    const res = await csrfFetch(`/api/likes/delete/${likeId}`, {
        method: "DELETE"

    })
    const data = await res.json()
    dispatch(deleteLike(data));
}

const initialState = {}

const likesReducer = (state = initialState, action) => {
    let newState = {}
    switch (action.type) {
        case GET_LIKES: {
            newState = {...state}
            action.likes.forEach(element => {
                newState[element.id] = element.songId
            });
            return newState;
        }

        case NEW_LIKE: {
            newState = {...state}
            newState[action.like.id] = action.like.songId
            return newState
        }

        case DELETE_LIKE: {
            newState = {...state}
            console.log(action)
            delete newState[action.likeId.id]
            return newState
        }

        default: return state;
    }

}

export default likesReducer
