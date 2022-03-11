import { csrfFetch } from "./csrf"

const GET_PLAYLISTS = "playlists/profile"
const ADD_PLAYLISTS = "playlists/add"
const DELETE_PLAYLIST = "playlists/delete"

const getPlaylists = (playlists) => {
    return {
        type: GET_PLAYLISTS,
        playlists
    }
}

const addPlaylists = (playlists) => {
    return {
        type: ADD_PLAYLISTS,
        playlists
    }
}

const deletePlaylist = (playlistName) => {
    return {
        type: DELETE_PLAYLIST,
        playlistName
    }
}

export const deletePlaylistThunk = (playlistName) => async (dispatch) => {
    const res = await csrfFetch(`/api/playlists/delete/${playlistName}`, {
        method: "DELETE"

    })
    const data = await res.json()
    dispatch(deletePlaylist(data));
}

export const getPlaylistsThunk = (userId) => async (dispatch) => {

    const res = await csrfFetch(`/api/playlists/${userId}`);

    const data = await res.json()
    dispatch(getPlaylists(data))

}

export const addToPlaylistThunk = (playlist) => async (dispatch) => {
    const { name, userId, songId } = playlist;
    const res = await csrfFetch(`/api/playlists/upload`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            name,
            userId,
            songId
        }),
    });

    const data = await res.json()
    dispatch(addPlaylists(data))
}


const initialState = {}

const playlistReducer = (state = initialState, action) => {
    let newState = {}
    let solutionToMyProblems
    switch (action.type) {
        case GET_PLAYLISTS: {
            newState = {...state}
            const arr = action.playlists
            newState = arr
            // for (let i = 0; i < arr.length; i++) {
            //     newState[i] = arr[i]
            // }
            return newState
        }
        case ADD_PLAYLISTS: {
            newState = {...state}
            solutionToMyProblems = Object.keys(newState)
            newState[solutionToMyProblems.length] = action.playlists
            return newState
        }
        case DELETE_PLAYLIST: {
            newState = {...state}
            const arr = Object.keys(newState)
            console.log(arr)
            console.log(newState)
            for (let i = 0; i < arr.length; i++){
                if (newState[i].name === arr[0].name){
                    delete newState[i]
                }
            }
            return newState
        }
        default: return state;
    }

}

export default playlistReducer
