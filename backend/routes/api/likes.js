const express = require('express');
const asyncHandler = require('express-async-handler');

const { setTokenCookie, restoreUser } = require('../../utils/auth');
const { User, Song, Playlist_Song, Like, Comment } = require('../../db/models');

const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');


const router = express.Router();

router.get("/:userId", asyncHandler (async (req, res) => {
    const userId = req.params.userId;
    const likes = await Like.findAll({
        where: {userId}
    })
    return res.json(likes)
}))

router.post("/new", asyncHandler (async (req, res) => {
    const { userId, songId } = req.body
    const newLike = await Like.create({
        userId,
        songId
    })
    return res.json(newLike)
}))

router.delete("/delete/:likeId", asyncHandler (async (req, res) => {
    const id = req.params.likeId
    const like = await Like.findByPk(id)

    await like.destroy()

}))

module.exports = router
