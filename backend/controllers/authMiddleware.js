const jwt = require('jsonwebtoken');

const requireSignIn = (req, res, next) => {
  const token = req.headers.authorization;

  console.log('Received Token:', token);

  if (!token) {
    return res.status(401).json({ error: 'Unauthorized: Missing token' });
  }

  try {
    const decoded = jwt.verify(token.replace('Bearer ', ''), process.env.JWT_SECRET);
    // console.log('Decoded Payload:', decoded);
    req.user = decoded;
    next();
  } catch (error) {
    console.error('JWT Verification Error:', error);
    return res.status(401).json({ error: 'Unauthorized: Invalid token' });
  }
};

module.exports = {
  requireSignIn,
};


  