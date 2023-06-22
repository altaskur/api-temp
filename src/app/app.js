const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

const authRouter = require('../router/auth');
const tempRouter = require('../router/temp');

app.use('/api/token', authRouter);
app.use('/api', tempRouter);

module.exports = app;
