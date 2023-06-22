const express = require('express');
const { generateToken } = require('../jwt/jwt');

const router = express.Router();

router.post('/', (req, res) => {
  const ip = req.body;
  console.log(ip);
  if (!ip) return res.status(404).send({ error: 'Ip not found' });
  const token = generateToken(ip);

  return res.status(200).send({
    token,
  });
});

module.exports = router;
