'use strict';
module.exports = (sequelize, DataTypes) => {
  const Playlist_Song = sequelize.define('Playlist_Song', {
    playlistId: DataTypes.INTEGER,
    songId: DataTypes.INTEGER
  }, {});
  Playlist_Song.associate = function(models) {
    // associations can be defined here

    // Playlist_Song.hasMany()
  };
  return Playlist_Song;
};
