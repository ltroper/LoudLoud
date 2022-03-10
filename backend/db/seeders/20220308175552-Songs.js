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
      return queryInterface.bulkInsert('Songs', [
        {
          name: 'Frantic',
          userId: 2,
          artWork: "https://ia902803.us.archive.org/11/items/mbid-44b7cab1-0ce1-404e-9089-b458eb3fa530/mbid-44b7cab1-0ce1-404e-9089-b458eb3fa530-1229779722_thumb500.jpg",
          songFile: "https://pixabay.com/music/rock-frantic-15190/",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'The Sacrifice',
          userId: 1,
          artWork: "https://ia902803.us.archive.org/11/items/mbid-44b7cab1-0ce1-404e-9089-b458eb3fa530/mbid-44b7cab1-0ce1-404e-9089-b458eb3fa530-1229779722_thumb500.jpg",
          songFile: 'https://pixabay.com/music/rock-the-sacrifice-9829/',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Deadite',
          userId: 1,
          artWork: "https://ia902803.us.archive.org/11/items/mbid-44b7cab1-0ce1-404e-9089-b458eb3fa530/mbid-44b7cab1-0ce1-404e-9089-b458eb3fa530-1229779722_thumb500.jpg",
          songFile: 'https://pixabay.com/music/action-deadite-ash-vs-evil-dead-song--8688/',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Personal Hell',
          userId: 1,
          artWork: "https://ia902803.us.archive.org/11/items/mbid-44b7cab1-0ce1-404e-9089-b458eb3fa530/mbid-44b7cab1-0ce1-404e-9089-b458eb3fa530-1229779722_thumb500.jpg",
          songFile: 'https://pixabay.com/music/action-your-own-personal-hell-8685/',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "The Ring",
          userId: 3,
          artWork: "https://ia902803.us.archive.org/11/items/mbid-44b7cab1-0ce1-404e-9089-b458eb3fa530/mbid-44b7cab1-0ce1-404e-9089-b458eb3fa530-1229779722_thumb500.jpg",
          songFile: "https://pixabay.com/music/rock-the-ring-21303/",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Fanatic Rush',
          userId: 2,
          artWork: "https://ia902803.us.archive.org/11/items/mbid-44b7cab1-0ce1-404e-9089-b458eb3fa530/mbid-44b7cab1-0ce1-404e-9089-b458eb3fa530-1229779722_thumb500.jpg",
          songFile: "https://pixabay.com/music/rock-frantic-15190/",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Scarface',
          userId: 2,
          artWork: "https://ia902803.us.archive.org/11/items/mbid-44b7cab1-0ce1-404e-9089-b458eb3fa530/mbid-44b7cab1-0ce1-404e-9089-b458eb3fa530-1229779722_thumb500.jpg",
          songFile: 'https://pixabay.com/music/rock-the-sacrifice-9829/',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Harry Potter Sings',
          userId: 4,
          artWork: "https://ia902803.us.archive.org/11/items/mbid-44b7cab1-0ce1-404e-9089-b458eb3fa530/mbid-44b7cab1-0ce1-404e-9089-b458eb3fa530-1229779722_thumb500.jpg",
          songFile: 'https://pixabay.com/music/action-deadite-ash-vs-evil-dead-song--8688/',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Personal Heaven',
          userId: 5,
          artWork: "https://ia902803.us.archive.org/11/items/mbid-44b7cab1-0ce1-404e-9089-b458eb3fa530/mbid-44b7cab1-0ce1-404e-9089-b458eb3fa530-1229779722_thumb500.jpg",
          songFile: 'https://pixabay.com/music/action-your-own-personal-hell-8685/',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "The Lord of the Ring",
          userId: 6,
          artWork: "https://ia902803.us.archive.org/11/items/mbid-44b7cab1-0ce1-404e-9089-b458eb3fa530/mbid-44b7cab1-0ce1-404e-9089-b458eb3fa530-1229779722_thumb500.jpg",
          songFile: "https://pixabay.com/music/rock-the-ring-21303/",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Franky',
          userId: 5,
          artWork: "https://ia902803.us.archive.org/11/items/mbid-44b7cab1-0ce1-404e-9089-b458eb3fa530/mbid-44b7cab1-0ce1-404e-9089-b458eb3fa530-1229779722_thumb500.jpg",
          songFile: "https://pixabay.com/music/rock-frantic-15190/",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'The Zoroaster',
          userId: 6,
          artWork: "https://ia902803.us.archive.org/11/items/mbid-44b7cab1-0ce1-404e-9089-b458eb3fa530/mbid-44b7cab1-0ce1-404e-9089-b458eb3fa530-1229779722_thumb500.jpg",
          songFile: 'https://pixabay.com/music/rock-the-sacrifice-9829/',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Liveite',
          userId: 6,
          artWork: "https://ia902803.us.archive.org/11/items/mbid-44b7cab1-0ce1-404e-9089-b458eb3fa530/mbid-44b7cab1-0ce1-404e-9089-b458eb3fa530-1229779722_thumb500.jpg",
          songFile: 'https://pixabay.com/music/action-deadite-ash-vs-evil-dead-song--8688/',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Personal Walk',
          userId: 7,
          artWork: "https://ia902803.us.archive.org/11/items/mbid-44b7cab1-0ce1-404e-9089-b458eb3fa530/mbid-44b7cab1-0ce1-404e-9089-b458eb3fa530-1229779722_thumb500.jpg",
          songFile: 'https://pixabay.com/music/action-your-own-personal-hell-8685/',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "The Rings of Saturn",
          userId: 7,
          artWork: "https://ia902803.us.archive.org/11/items/mbid-44b7cab1-0ce1-404e-9089-b458eb3fa530/mbid-44b7cab1-0ce1-404e-9089-b458eb3fa530-1229779722_thumb500.jpg",
          songFile: "https://pixabay.com/music/rock-the-ring-21303/",
          createdAt: new Date(),
          updatedAt: new Date(),
        }
      ])
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkDelete('Songs', null, {});
  }
};
