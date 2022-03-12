import { csrfFetch } from "./csrf"

const GET_PLAYLISTS = "playlists/profile"
const ADD_PLAYLISTS = "playlists/add"
const DELETE_PLAYLIST = "playlists/delete"
const ADD_SONG_TOPLAY = "playlist/addSong"

const getPlaylists = (playlists) => {
    return {
        type: GET_PLAYLISTS,
        playlists
    }
}

const addPlaylists = (playlist) => {
    return {
        type: ADD_PLAYLISTS,
        playlist
    }
}

const addSongToPlaylist = (playlist) => {
    return {
        type: ADD_SONG_TOPLAY,
        playlist
    }
}

const deletePlaylist = (playlist) => {
    return {
        type: DELETE_PLAYLIST,
        playlist
    }
}

export const deletePlaylistThunk = (playlistId) => async (dispatch) => {
    const res = await csrfFetch(`/api/playlists/${playlistId}`, {
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

export const addSongToPlaylistThunk = (playlistId, songId) => async (dispatch) => {
    const res = await csrfFetch(`/api/playlists/${playlistId}/${songId}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" }
    })

    if (res.ok) {
        const playlist = await res.json()
        dispatch(addSongToPlaylist(playlist))
        return playlist
    }
}

export const addPlaylistThunk = (playlist) => async (dispatch) => {
    const { name, userId } = playlist;
    const res = await csrfFetch(`/api/playlists/upload`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            name,
            userId,
        }),
    });

    const data = await res.json()
    dispatch(addPlaylists(data))
    return data
}


const initialState = {}

const playlistReducer = (state = initialState, action) => {

    switch (action.type) {
        case GET_PLAYLISTS: {
            const newState = JSON.parse(JSON.stringify(state))
            action.playlists.forEach(playlist => {
                newState[playlist.id] = playlist
            });
            return newState
        }
        case ADD_SONG_TOPLAY: {
            const newState = JSON.parse(JSON.stringify(state))
            newState[action.playlist.id] = action.playlist
            return newState
        }
        case ADD_PLAYLISTS: {
            const newState = JSON.parse(JSON.stringify(state))
            newState[action.playlist.id] = action.playlist
            return newState
        }
        case DELETE_PLAYLIST: {
            const newState = JSON.parse(JSON.stringify(state))
            delete newState[action.playlist.id]
            return newState
        }
        default: return state;
    }

}

export default playlistReducer
