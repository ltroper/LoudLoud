const express = require('express');
const asyncHandler = require('express-async-handler');
const db = require('../../db/models');

const { User, Song, Playlist, Playlist_Song } = require('../../db/models');



const router = express.Router();


router.get("/:userId", asyncHandler (async (req, res) => {
    const userId = req.params.userId;
    const playlists = await Playlist.findAll({
        where: {userId}
    })
    return res.json(playlists)
}))

router.post("/upload", asyncHandler (async (req, res) => {
    const { name, userId } = req.body;
    const newPlaylist = await Playlist.create({
        name,
        userId

    })

    return res.json(newPlaylist)

}))

router.post("/:playlistId/:songId", asyncHandler (async (req, res) => {
    const { playlistId, songId } = req.params


    const newSongInPlaylist = await Playlist_Song.create({
        playlistId, songId
    })


    const playlist = await Playlist.findOne({
        where: {
            id: playlistId
        },
        include: {
            model: Song,
            as: "songs"
        }
    })
    return res.json(playlist)

}))

router.delete("/delete/:name", asyncHandler (async (req, res) => {
    const name = req.params.name
    const song = await Playlist.findAll({
        where:{
            name
        }
    })


    song.forEach(element => {
        console.log(element)
        element.destroy()
    });

    return res.json(song)
}))










module.exports = router
