const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const connectDB = require('./utils/database');

dotenv.config();
const app = express();

// Connect to the database
connectDB();

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api', require('./routes/userRoutes'));
app.use('/api', require('./routes/rideRoutes'));

// Start server
const PORT = process.env.PORT || 5000;

// Default route for the browser
app.get('/', (req, res) => {
    res.send('<h1>Welcome to the Backend Assignment API</h1><p>Available Endpoints:</p><ul><li><b>POST</b> /api/register - Register a new user</li><li><b>GET</b> /api/rides - List all rides</li><li><b>GET</b> /api/rides/:id - Get details for a specific ride</li></ul>');
  });
  
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
