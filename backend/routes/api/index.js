const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const tracksRouter = require('./tracks.js')
const playlistRouter = require('./playlists')

router.use('/session', sessionRouter);

router.use('/users', usersRouter);

router.use('/tracks', tracksRouter);

router.use('/playlists', playlistRouter);










module.exports = router;
