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

    Song.belongsToMany(models.User, {
      through: "Playlist",
      foreignKey: "songId",
      otherKey: "userId",
      as: 'Playlists'
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
