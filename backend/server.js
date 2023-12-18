const express = require('express');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');
require('dotenv').config();



const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

// Use your authentication routes
app.use('/auth', authRoutes);


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

