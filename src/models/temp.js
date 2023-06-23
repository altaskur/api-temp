const mongoose = require('mongoose');

const tempSchema = new mongoose.Schema({

  temp: {
    type: Number,
    required: true,
  },
  hum: {
    type: Number,
    required: true,
  },
  ip: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
}, {
  collection: 'temp',
  database: 'altasTemp',
});

const Temp = mongoose.model('temp', tempSchema);

module.exports = Temp;
