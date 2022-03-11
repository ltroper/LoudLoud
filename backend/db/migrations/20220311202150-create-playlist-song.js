'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Playlist_Songs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      playlistId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Playlists'
        },
      },
      songId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Songs'
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Playlist_Songs');
  }
};