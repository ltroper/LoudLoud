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
          songFile: "https://cdn.pixabay.com/download/audio/2022/01/20/audio_3cf7c6e6ec.mp3?filename=frantic-15190.mp3",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'The Sacrifice',
          userId: 1,
          artWork: "https://ia902803.us.archive.org/11/items/mbid-44b7cab1-0ce1-404e-9089-b458eb3fa530/mbid-44b7cab1-0ce1-404e-9089-b458eb3fa530-1229779722_thumb500.jpg",
          songFile: 'https://cdn.pixabay.com/download/audio/2021/10/25/audio_f039413a63.mp3?filename=the-sacrifice-9829.mp3',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Deadite',
          userId: 1,
          artWork: "https://ia902803.us.archive.org/11/items/mbid-44b7cab1-0ce1-404e-9089-b458eb3fa530/mbid-44b7cab1-0ce1-404e-9089-b458eb3fa530-1229779722_thumb500.jpg",
          songFile: 'https://cdn.pixabay.com/download/audio/2021/09/25/audio_39318807ea.mp3?filename=deadite-ash-vs-evil-dead-song--8688.mp3',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Personal Hell',
          userId: 1,
          artWork: "https://ia902803.us.archive.org/11/items/mbid-44b7cab1-0ce1-404e-9089-b458eb3fa530/mbid-44b7cab1-0ce1-404e-9089-b458eb3fa530-1229779722_thumb500.jpg",
          songFile: 'https://cdn.pixabay.com/download/audio/2021/09/25/audio_d240abb89a.mp3?filename=your-own-personal-hell-8685.mp3',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "The Ring",
          userId: 2,
          artWork: "https://ia902803.us.archive.org/11/items/mbid-44b7cab1-0ce1-404e-9089-b458eb3fa530/mbid-44b7cab1-0ce1-404e-9089-b458eb3fa530-1229779722_thumb500.jpg",
          songFile: "https://cdn.pixabay.com/download/audio/2022/02/19/audio_af967a0058.mp3?filename=the-ring-21303.mp3",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Fanatic Rush',
          userId: 3,
          artWork: "https://ia902803.us.archive.org/11/items/mbid-44b7cab1-0ce1-404e-9089-b458eb3fa530/mbid-44b7cab1-0ce1-404e-9089-b458eb3fa530-1229779722_thumb500.jpg",
          songFile: "https://cdn.pixabay.com/download/audio/2022/02/19/audio_d106040c63.mp3?filename=welcome-to-college-21306.mp3",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Scarface',
          userId: 2,
          artWork: "https://ia902803.us.archive.org/11/items/mbid-44b7cab1-0ce1-404e-9089-b458eb3fa530/mbid-44b7cab1-0ce1-404e-9089-b458eb3fa530-1229779722_thumb500.jpg",
          songFile: 'https://cdn.pixabay.com/download/audio/2022/02/19/audio_3bf0a099d9.mp3?filename=showdown-21307.mp3',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Harry Potter Sings',
          userId: 4,
          artWork: "https://ia902803.us.archive.org/11/items/mbid-44b7cab1-0ce1-404e-9089-b458eb3fa530/mbid-44b7cab1-0ce1-404e-9089-b458eb3fa530-1229779722_thumb500.jpg",
          songFile: 'https://cdn.pixabay.com/download/audio/2022/02/19/audio_c22220f07f.mp3?filename=break-surf-21305.mp3',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Personal Heaven',
          userId: 5,
          artWork: "https://ia902803.us.archive.org/11/items/mbid-44b7cab1-0ce1-404e-9089-b458eb3fa530/mbid-44b7cab1-0ce1-404e-9089-b458eb3fa530-1229779722_thumb500.jpg",
          songFile: 'https://cdn.pixabay.com/download/audio/2022/02/19/audio_8af46bc4a3.mp3?filename=spy-rock-21304.mp3',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "The Lord of the Ring",
          userId: 6,
          artWork: "https://ia902803.us.archive.org/11/items/mbid-44b7cab1-0ce1-404e-9089-b458eb3fa530/mbid-44b7cab1-0ce1-404e-9089-b458eb3fa530-1229779722_thumb500.jpg",
          songFile: "https://cdn.pixabay.com/download/audio/2022/02/18/audio_8467d31162.mp3?filename=the-storm-is-coming-21181.mp3",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Franky',
          userId: 5,
          artWork: "https://ia902803.us.archive.org/11/items/mbid-44b7cab1-0ce1-404e-9089-b458eb3fa530/mbid-44b7cab1-0ce1-404e-9089-b458eb3fa530-1229779722_thumb500.jpg",
          songFile: "https://cdn.pixabay.com/download/audio/2022/01/21/audio_567470a2c7.mp3?filename=rage-15292.mp3",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'The Zoroaster',
          userId: 6,
          artWork: "https://ia902803.us.archive.org/11/items/mbid-44b7cab1-0ce1-404e-9089-b458eb3fa530/mbid-44b7cab1-0ce1-404e-9089-b458eb3fa530-1229779722_thumb500.jpg",
          songFile: 'https://cdn.pixabay.com/download/audio/2022/01/07/audio_cec63d1968.mp3?filename=sport-metal-90-bpm-loop-13726.mp3',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Liveite',
          userId: 6,
          artWork: "https://ia902803.us.archive.org/11/items/mbid-44b7cab1-0ce1-404e-9089-b458eb3fa530/mbid-44b7cab1-0ce1-404e-9089-b458eb3fa530-1229779722_thumb500.jpg",
          songFile: 'https://cdn.pixabay.com/download/audio/2021/11/13/audio_343081d119.mp3?filename=rammstein-style-metal-10726.mp3',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Personal Walk',
          userId: 7,
          artWork: "https://ia902803.us.archive.org/11/items/mbid-44b7cab1-0ce1-404e-9089-b458eb3fa530/mbid-44b7cab1-0ce1-404e-9089-b458eb3fa530-1229779722_thumb500.jpg",
          songFile: 'https://cdn.pixabay.com/download/audio/2021/09/25/audio_4f63492e64.mp3?filename=demon-slayer-8687.mp3',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "The Rings of Saturn",
          userId: 7,
          artWork: "https://ia902803.us.archive.org/11/items/mbid-44b7cab1-0ce1-404e-9089-b458eb3fa530/mbid-44b7cab1-0ce1-404e-9089-b458eb3fa530-1229779722_thumb500.jpg",
          songFile: "https://cdn.pixabay.com/download/audio/2021/09/16/audio_fd62ec0233.mp3?filename=powerful-rhythmic-metal-8412.mp3",
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
