'use strict';
module.exports = (sequelize, DataTypes) => {
  const Playlist = sequelize.define('Playlist', {
    name: DataTypes.STRING,
    userId: DataTypes.INTEGER,
  }, {});
  Playlist.associate = function(models) {
    // associations can be defined here
    Playlist.belongsToMany(models.Song, {
      through: "Playlist_Song",
      as: "playlists"
    });

  };
  return Playlist;
};
