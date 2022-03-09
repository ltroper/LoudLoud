const express = require('express');
const asyncHandler = require('express-async-handler');

const { setTokenCookie, restoreUser } = require('../../utils/auth');
const { User, Song, Playlist } = require('../../db/models');

const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');


const router = express.Router();


router.get("/:userId", asyncHandler (async (req, res) => {
    const userId = req.params.userId;
    const playlists = await Playlist.findAll({
        where: {userId}
    })

    return res.json(playlists)
}))











module.exports = router
