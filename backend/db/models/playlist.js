'use strict';
module.exports = (sequelize, DataTypes) => {
  const Playlist = sequelize.define('Playlist', {
    name: DataTypes.STRING,
    userId: DataTypes.INTEGER,
  }, {});
  Playlist.associate = function(models) {
    // associations can be defined here
    Playlist.belongsToMany(models.Song, {
      otherKey: 'songId',
      through: "Playlist_Songs",
      foreignKey: 'playlistId',
      as: "songs"
    });
  };
  return Playlist;
};
