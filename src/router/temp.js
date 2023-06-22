const express = require('express');
const { verifyToken } = require('../jwt/jwt');
require('dotenv').config();

const router = express.Router();

router.get('/', verifyToken, (req, res) => {
  const { user } = req;
  console.log(user);
  return res.status(200).send({
    ip: user.ip.ip,
  });
});

router.post('/', verifyToken, (req, res) => {
  const { temp, hum } = req.body;
  const { user } = req;
  console.log(temp);
  return res.status(200).send({
    ip: user.ip.ip,
    temp,
    hum,
  });
});

module.exports = router;
