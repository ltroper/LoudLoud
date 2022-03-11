'use strict';
module.exports = (sequelize, DataTypes) => {
  const Song = sequelize.define('Song', {
    name: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    artWork: DataTypes.TEXT,
    songFile: DataTypes.TEXT
  }, {});
  Song.associate = function(models) {
    // associations can be defined here
    Song.belongsToMany(models.User, {
      through: "Like",
      foreignKey: "songId",
      otherKey: "userId",
      as: 'Likes'
    });

    Song.belongsToMany(models.Playlist, {
      otherKey: 'playlistId',
      through: "Playlist_Songs",
      foreignKey: 'songId',
      as: "playlists"
    });

    Song.belongsToMany(models.User, {
      through: "Comment",
      foreignKey: "albumId",
      otherKey: "userId",
      as: 'Comments'
    })


  };
  return Song;
};
