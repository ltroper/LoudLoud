'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
      return queryInterface.bulkInsert('Playlist_Songs', [
        {
          playlistId: 1,
          songId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          playlistId: 2,
          songId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          playlistId: 3,
          songId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          playlistId: 3,
          songId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ])

  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkDelete('Playlist_Songs', null, {});
  }
};
