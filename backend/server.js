const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const alumniRoutes = require('./routes/alumniRoutes');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use('/api/alumni', alumniRoutes);

app.listen(5000, () => console.log('Backend running on port 5000'));
