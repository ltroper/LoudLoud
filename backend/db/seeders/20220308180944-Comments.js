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
      return queryInterface.bulkInsert('Comments', [
        {
          userId: 1,
          songId: 1,
          content: "good song",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          songId: 1,
          content: "good song2",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 3,
          songId: 1,
          content: "good song3",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 1,
          songId: 2,
          content: "good song4",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          songId: 2,
          content: "good song5",
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
   return queryInterface.bulkDelete('Comments', null, {});
  }
};
