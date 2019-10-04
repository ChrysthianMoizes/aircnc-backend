const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

class App {

  constructor() {
    this.express = express();
    this.database();
    this.middlewares();
    this.routes();
  }

  database() {
    mongoose.connect('mongodb+srv://aircnc:aircnc@cluster0-h5nnd.mongodb.net/aircnc?retryWrites=true&w=majority', {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
  }

  middlewares() {
    this.express.use(express.json());
    this.express.use(cors());
  }

  routes() {
    this.express.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')));
    this.express.use(require('./routes'));
  }
}

module.exports = new App().express;