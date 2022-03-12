'use strict';
module.exports = (sequelize, DataTypes) => {
  const Playlist_Song = sequelize.define('Playlist_Song', {
    playlistId: DataTypes.INTEGER,
    songId: DataTypes.INTEGER,
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    }
  }, {});
  Playlist_Song.associate = function(models) {
    // associations can be defined here
  };
  return Playlist_Song;
};