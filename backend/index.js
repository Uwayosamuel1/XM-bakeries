require('dotenv').config(); // Must be first

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const productRoutes = require('./routes/productRoutes');
const logger = require('./middleware/logger');

console.log("DB_USER is:", process.env.DB_USER);

const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(bodyParser.json());
app.use(logger);

// Routes
app.use('/api', productRoutes);

// Root route for quick test
app.get('/', (req, res) => {
  res.send('Welcome to XM Bakeries API');
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
