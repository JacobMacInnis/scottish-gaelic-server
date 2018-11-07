'use strict';

const mongoose = require('mongoose');

const { MONGODB_URI } = require('../config');

const User = require('../models/user');
const seedUsers = require('../db/seed/users');
const UserStats = require('../models/userStats');
const seedUserStats = require('../db/seed/userStats');

mongoose.connect(MONGODB_URI)
  .then(() => mongoose.connection.db.dropDatabase())
  .then(() => {
    return Promise.all([
      User.insertMany(seedUsers),
      UserStats.insertMany(seedUserStats),
      User.createIndexes(),
      UserStats.createIndexes()
    ]);
  })
  .then((results) => {
    console.log(`inserted ${results[0].length} users, and ${results[1].length} userStats`);
  })
  .then(() => mongoose.disconnect())
  .catch(err => {
    console.log(err);
  });