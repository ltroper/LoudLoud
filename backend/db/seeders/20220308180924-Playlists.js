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
      return queryInterface.bulkInsert('Playlists', [
        {
          name: 'MyPlaylist',
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'MyPlaylist',
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'MyPlaylist',
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'MyPlaylist2',
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'MyPlaylist2',
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'DemoPlaylist',
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'DemoPlaylist',
          userId: 2,
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
   return queryInterface.bulkDelete('Playlists', null, {});
  }
};
