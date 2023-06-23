const express = require('express');
const { verifyToken } = require('../jwt/jwt');
const Temp = require('../models/temp');
require('dotenv').config();

const router = express.Router();

router.get('/', verifyToken, async (req, res) => {
  const { user } = req;
  console.log(user);
  const temps = await Temp.find();
  return res.status(200).json({
    ip: user.ip.ip,
    temp: temps,
  });
});

router.post('/', verifyToken, async (req, res) => {
  try {
    const { temp, hum } = req.body;
    const { user } = req;

    if (!temp || !hum) {
      console.log('faltan datos');
      console.log(temp, hum, user);
      return res.status(400).json({ error: 'Faltan datos' });
    }
    console.log(temp, hum, user.ip);
    const bdRes = await Temp.create({ temp, hum, ip: user.ip });
    return res.status(200).json(bdRes);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: 'Error al registrar la temperatura' });
  }
});

module.exports = router;
