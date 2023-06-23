const express = require('express');
const { generateToken } = require('../jwt/jwt');

const router = express.Router();

router.get('/', (req, res) => {
  const { ip } = req;
  const token = generateToken(ip);

  return res.status(200).send({
    token,
  });
});

module.exports = router;
