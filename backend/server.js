const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const cityRoutes = require('./routes/cities');

require('dotenv').config();

const City = require('./models/City');
const app = express();
app.use(cors());
app.use(express.json());

connectDB();

app.use('/cities', cityRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
