const mongoose = require('mongoose');

const projectsSchema = new mongoose.Schema({

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
  collection: 'projects',
  database: 'altasTemp',
});

const Projects = mongoose.model('projects', projectsSchema);

module.exports = Projects;
