'use strict';
const bcrypt = require('bcryptjs');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        email: 'demo@user.io',
        username: 'Demo-lition',
        fullName: "Demo Lition",
        profilePic: "https://image.shutterstock.com/mosaic_250/2780032/1714666150/stock-photo-head-shot-portrait-close-up-smiling-confident-businessman-wearing-glasses-looking-at-camera-1714666150.jpg",
        hashedPassword: bcrypt.hashSync('password')
      },
      {
        email: 'user1@user.io',
        username: 'DaveMustache',
        fullName: "Dave Mustache",
        profilePic: "https://image.shutterstock.com/mosaic_250/2780032/1733598437/stock-photo-close-up-headshot-portrait-picture-of-smiling-african-american-businesswoman-happy-attractive-1733598437.jpg",
        hashedPassword: bcrypt.hashSync('password2')
      },
      {
        email: 'user2@user.io',
        username: 'Larsulrickenbacker',
        fullName: "Lars Ulrickenbacker",
        profilePic: "https://us.123rf.com/450wm/fizkes/fizkes2007/fizkes200701872/152319944-close-up-headshot-portrait-of-smiling-vietnamese-young-woman-look-at-camera-talk-on-video-call-profi.jpg",
        hashedPassword: bcrypt.hashSync('password3')
      },
      {
        email: 'user3@user.io',
        username: 'ItsMeChris',
        fullName: "Chris Cornellius",
        profilePic: "https://us.123rf.com/450wm/fizkes/fizkes2011/fizkes201102042/159430998-headshot-portrait-profile-picture-of-pretty-smiling-young-woman-posing-indoors-looking-at-camera-sat.jpg",
        hashedPassword: bcrypt.hashSync('password3')
      },
      {
        email: 'user4@user.io',
        username: 'lstyles',
        fullName: "Layne Styles",
        profilePic: "https://healthprofessions.ucf.edu/wp-content/uploads/sites/2/2018/06/Matt-Stock.jpg",
        hashedPassword: bcrypt.hashSync('password3')
      },
      {
        email: 'user5@user.io',
        username: 'EdBet',
        fullName: "Eddie Better",
        profilePic: "https://caricom.org/wp-content/uploads/Floyd-Morris-Remake-1024x879-1.jpg",
        hashedPassword: bcrypt.hashSync('password3')
      },
      {
        email: 'user6@user.io',
        username: 'back2theMetal',
        fullName: "Marty McFriedman",
        profilePic: "https://www.dmarge.com/wp-content/uploads/2021/01/dwayne-the-rock-.jpg",
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
