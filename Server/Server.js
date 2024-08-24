const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const moodRoutes = require('./moodRoutes.js');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err));

app.use('/api/moods', moodRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
