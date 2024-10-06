const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
  const token = req.headers['authorization'];
  
  if (!token) {
    return res.status(403).json({ success: false, message: 'Unauthorized access error' });
  }

  jwt.verify(token.split(' ')[1], process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      const message = err.name === 'TokenExpiredError' ? 'Token expired' : 'Invalid token error';
      return res.status(401).json({ success: false, message });
    }
    req.user = decoded;
    next();
  });
};

module.exports = verifyToken;
