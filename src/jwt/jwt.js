const jws = require('jsonwebtoken');
require('dotenv').config();

function generateToken(ip) {
  const payload = {
    ip,
  };

  const token = jws.sign(payload, process.env.JWT_SECRET, { expiresIn: '6d' });

  return token;
}

function verifyToken(req, res, next) {
  const token = req.headers.authorization;

  if (!token) return res.status(401).send({ error: 'No token provided' });

  try {
    const decoded = jws.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    return next();
  } catch (err) {
    return res.status(401).send({ error: 'Invalid token' });
  }
}

module.exports = {
  generateToken,
  verifyToken,
};
