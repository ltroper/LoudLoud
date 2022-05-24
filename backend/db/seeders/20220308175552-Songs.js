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
          artWork: "https://archive.org/download/srwmangaartbookcollect/001.jpg",
          songFile: 'https://cdn.pixabay.com/download/audio/2021/10/25/audio_f039413a63.mp3?filename=the-sacrifice-9829.mp3',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Deadite',
          userId: 1,
          artWork: "https://ia800300.us.archive.org/20/items/mbid-14518b26-55fe-387b-94c6-a3843a1af487/mbid-14518b26-55fe-387b-94c6-a3843a1af487-1680563891_thumb500.jpg",
          songFile: 'https://cdn.pixabay.com/download/audio/2021/09/25/audio_39318807ea.mp3?filename=deadite-ash-vs-evil-dead-song--8688.mp3',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Personal Hell',
          userId: 1,
          artWork: "https://ia800907.us.archive.org/2/items/mbid-d930166c-e5b6-420d-8177-e62f351f6859/mbid-d930166c-e5b6-420d-8177-e62f351f6859-5658377319_thumb500.jpg",
          songFile: 'https://cdn.pixabay.com/download/audio/2021/09/25/audio_d240abb89a.mp3?filename=your-own-personal-hell-8685.mp3',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "The Ring",
          userId: 2,
          artWork: "https://ia601303.us.archive.org/24/items/mbid-615b4312-4c75-4083-bd6c-5ec79b4b2950/mbid-615b4312-4c75-4083-bd6c-5ec79b4b2950-11972533656_thumb500.jpg",
          songFile: "https://cdn.pixabay.com/download/audio/2022/02/19/audio_af967a0058.mp3?filename=the-ring-21303.mp3",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Fanatic Rush',
          userId: 3,
          artWork: "https://ia601007.us.archive.org/30/items/mbid-accf1347-fb12-4a2f-98e9-5c7bf6b12209/mbid-accf1347-fb12-4a2f-98e9-5c7bf6b12209-19923908625_thumb500.jpg",
          songFile: "https://cdn.pixabay.com/download/audio/2022/02/19/audio_d106040c63.mp3?filename=welcome-to-college-21306.mp3",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Scarface',
          userId: 2,
          artWork: "https://ia904604.us.archive.org/5/items/mbid-4a1b57de-8cf7-4320-bf01-ec37a9fd8cc0/mbid-4a1b57de-8cf7-4320-bf01-ec37a9fd8cc0-31474978811_thumb500.jpg",
          songFile: 'https://cdn.pixabay.com/download/audio/2022/02/19/audio_3bf0a099d9.mp3?filename=showdown-21307.mp3',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Harry Potter Sings',
          userId: 4,
          artWork: "https://ia800901.us.archive.org/34/items/mbid-9dca4aec-6e5c-40c6-a750-b36cf3f4af68/mbid-9dca4aec-6e5c-40c6-a750-b36cf3f4af68-5254225795_thumb500.jpg",
          songFile: 'https://cdn.pixabay.com/download/audio/2022/02/19/audio_c22220f07f.mp3?filename=break-surf-21305.mp3',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Personal Heaven',
          userId: 5,
          artWork: "https://ia902202.us.archive.org/32/items/mbid-6d4cecbb-d460-48e5-b0dc-0d385486757f/mbid-6d4cecbb-d460-48e5-b0dc-0d385486757f-31479169406_thumb500.jpg",
          songFile: 'https://cdn.pixabay.com/download/audio/2022/02/19/audio_8af46bc4a3.mp3?filename=spy-rock-21304.mp3',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "The Lord of the Ring",
          userId: 6,
          artWork: "https://ia902804.us.archive.org/34/items/mbid-c7827a8b-46c2-4fa3-8fab-d1c1a04bc1ad/mbid-c7827a8b-46c2-4fa3-8fab-d1c1a04bc1ad-25587774786_thumb500.jpg",
          songFile: "https://cdn.pixabay.com/download/audio/2022/02/18/audio_8467d31162.mp3?filename=the-storm-is-coming-21181.mp3",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Franky',
          userId: 5,
          artWork: "https://ia803206.us.archive.org/25/items/mbid-607c79df-23ee-4628-8c99-0f0c6795f446/mbid-607c79df-23ee-4628-8c99-0f0c6795f446-26323361021_thumb500.jpg",
          songFile: "https://cdn.pixabay.com/download/audio/2022/01/21/audio_567470a2c7.mp3?filename=rage-15292.mp3",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'The Zoroaster',
          userId: 6,
          artWork: "https://ia802906.us.archive.org/2/items/mbid-fd7ebee8-8c64-4127-a9be-8e31ed6364e3/mbid-fd7ebee8-8c64-4127-a9be-8e31ed6364e3-25807105705_thumb500.jpg",
          songFile: 'https://cdn.pixabay.com/download/audio/2022/01/07/audio_cec63d1968.mp3?filename=sport-metal-90-bpm-loop-13726.mp3',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Liveite',
          userId: 6,
          artWork: "https://media.wired.com/photos/59270236cfe0d93c47432130/1:1/w_1417,h_1417,c_limit/InRainbows.jpg",
          songFile: 'https://cdn.pixabay.com/download/audio/2021/11/13/audio_343081d119.mp3?filename=rammstein-style-metal-10726.mp3',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Personal Walk',
          userId: 7,
          artWork: "https://media.pitchfork.com/photos/594a859c95f2026a33f7a213/1:1/w_320/oknotok.jpg",
          songFile: 'https://cdn.pixabay.com/download/audio/2021/09/25/audio_4f63492e64.mp3?filename=demon-slayer-8687.mp3',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "The Rings of Saturn",
          userId: 7,
          artWork: "https://f4.bcbits.com/img/a0348996479_10.jpg",
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
