const sequelize = require('../config/connection');
const { User } = require('../models');

const userdata = [
  {
    username: 'Andrew-Smith78',
    email: 'andrewsmith@test.com',
    password: 'password123'
  },
  {
    username: 'Logan-Adams34',
    email: 'loganadams@test.com',
    password: 'password123'
  },
  {
    username: 'Charlie-Day93',
    email: 'charlieday@test.com',
    password: 'password123'
  }
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;
