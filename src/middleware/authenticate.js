// middleware/decodeToken.js
const jwt = require('jsonwebtoken');
const { promisify } = require('util');

const verifyToken = promisify(jwt.verify);

const authenticate = async (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ error: 'No token provided' });
  }

  try {
    const decoded = await verifyToken(token, 'jwt_secret');
    req.user = decoded; // Set the decoded information in req.user
    next();
  } catch (error) {
    console.error('Error decoding token:', error);
    res.status(401).json({ error: 'Invalid token' });
  }
};

module.exports = authenticate;
