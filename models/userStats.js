'use strict';
const mongoose = require('mongoose');

const userStatsSchema = new mongoose.Schema({
  userId:{type: mongoose.Schema.Types.ObjectId, ref:'User',required:true},
  recurringCorrect: {type: Number},
  totalQuestions :{type: Number},
  totalRight:{type:Number},
  questions:{type:Array},
  head:{type:Number}
});

userStatsSchema.set('toObject', {
  virtuals: true,     // include built-in virtual `id`
  versionKey: false,  // remove `__v` version key
  transform: (doc, ret) => {
    delete ret._id; // delete `_id`
  }
});

module.exports = mongoose.model('UserStats', userStatsSchema);