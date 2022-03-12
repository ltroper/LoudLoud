const express = require('express');
const asyncHandler = require('express-async-handler');

const { setTokenCookie, restoreUser } = require('../../utils/auth');
const { User, Song, Playlist_Song, Like, Comment } = require('../../db/models');

const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');


const router = express.Router();

router.get("/all", asyncHandler (async (req, res) => {

    const songs = await Song.findAll()
    return res.json(songs)
}))

router.get("/:userId", asyncHandler (async (req, res) => {
    const userId = req.params.userId;
    const tracks = await Song.findAll({
        where: {userId}
    })
    return res.json(tracks)
}))



router.post("/upload", asyncHandler (async (req, res) => {
    const { name, userId, artWork, songFile } = req.body
    const newSong = await Song.create({
        name,
        userId,
        artWork,
        songFile
    })
    return res.json(newSong)
}))

router.put("/update/:trackId", asyncHandler (async (req, res) => {
    const id = req.params.trackId
    const { name, artWork, songFile } = req.body
    const newSong = await Song.findByPk(id)

    newSong.name = name;
    newSong.artWork = artWork;
    newSong.songFile = songFile;

    await newSong.save();

    return res.json(newSong)
}))


router.delete("/delete/:trackId", asyncHandler (async (req, res) => {
    const songId = req.params.trackId
    const song = await Song.findByPk(songId)
    const playlistSongs = await Playlist_Song.findAll({
        where: {
           songId
        }
    })
    const songLikes = await Like.findAll({
        where: {
           songId
        }
    })
    const songComments = await Comment.findAll({
        where: {
           songId
        }
    })


    for (let i = 0; i < playlistSongs.length; i++){
        await playlistSongs[i].destroy()
     }

     for (let i = 0; i < songLikes.length; i++){
        await songLikes[i].destroy()
     }

     for (let i = 0; i < songComments.length; i++){
        await songComments[i].destroy()
     }

    await song.destroy();
    return res.json(song)
}))

module.exports = router
