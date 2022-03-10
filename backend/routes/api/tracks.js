const express = require('express');
const asyncHandler = require('express-async-handler');

const { setTokenCookie, restoreUser } = require('../../utils/auth');
const { User, Song } = require('../../db/models');

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

router.delete("/delete/:trackId", asyncHandler (async (req, res) => {
    const songId = req.params.trackId
    const song = await Song.findByPk(songId)
    await song.destroy();
    return res.json(song)
}))

module.exports = router
