'use strict';
const bcrypt = require('bcryptjs');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        email: 'demo@user.io',
        username: 'Demo-lition',
        fullName: "Demo Lition",
        profilePic: "https://ia902803.us.archive.org/11/items/mbid-44b7cab1-0ce1-404e-9089-b458eb3fa530/mbid-44b7cab1-0ce1-404e-9089-b458eb3fa530-1229779722_thumb500.jpg",
        hashedPassword: bcrypt.hashSync('password')
      },
      {
        email: 'user1@user.io',
        username: 'DaveMustache',
        fullName: "Dave Mustache",
        profilePic: "https://ia800907.us.archive.org/2/items/mbid-d930166c-e5b6-420d-8177-e62f351f6859/mbid-d930166c-e5b6-420d-8177-e62f351f6859-5658377319_thumb500.jpg",
        hashedPassword: bcrypt.hashSync('password2')
      },
      {
        email: 'user2@user.io',
        username: 'Larsulrickenbacker',
        fullName: "Lars Ulrickenbacker",
        profilePic: "https://ia800300.us.archive.org/20/items/mbid-14518b26-55fe-387b-94c6-a3843a1af487/mbid-14518b26-55fe-387b-94c6-a3843a1af487-1680563891_thumb500.jpg",
        hashedPassword: bcrypt.hashSync('password3')
      },
      {
        email: 'user3@user.io',
        username: 'ItsMeChris',
        fullName: "Chris Cornellius",
        profilePic: "https://ia601303.us.archive.org/24/items/mbid-615b4312-4c75-4083-bd6c-5ec79b4b2950/mbid-615b4312-4c75-4083-bd6c-5ec79b4b2950-11972533656_thumb500.jpg",
        hashedPassword: bcrypt.hashSync('password3')
      },
      {
        email: 'user4@user.io',
        username: 'lstyles',
        fullName: "Layne Styles",
        profilePic: "https://ia601007.us.archive.org/30/items/mbid-accf1347-fb12-4a2f-98e9-5c7bf6b12209/mbid-accf1347-fb12-4a2f-98e9-5c7bf6b12209-19923908625_thumb500.jpg",
        hashedPassword: bcrypt.hashSync('password3')
      },
      {
        email: 'user5@user.io',
        username: 'EdBet',
        fullName: "Eddie Better",
        profilePic: "https://ia904604.us.archive.org/5/items/mbid-4a1b57de-8cf7-4320-bf01-ec37a9fd8cc0/mbid-4a1b57de-8cf7-4320-bf01-ec37a9fd8cc0-31474978811_thumb500.jpg",
        hashedPassword: bcrypt.hashSync('password3')
      },
      {
        email: 'user6@user.io',
        username: 'back2theMetal',
        fullName: "Marty McFriedman",
        profilePic: "https://ia800901.us.archive.org/34/items/mbid-9dca4aec-6e5c-40c6-a750-b36cf3f4af68/mbid-9dca4aec-6e5c-40c6-a750-b36cf3f4af68-5254225795_thumb500.jpg",
        hashedPassword: bcrypt.hashSync('password3')
      },

    ], {});
  },

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Users', {
      username: { [Op.in]: ['Demo-lition', 'DaveMustache', 'Larsulrickenbacker',
    'ItsMeChris', 'lstyles', 'EdBet', 'back2theMetal'] }
    }, {});
  }
};
