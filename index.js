// app.js

const express = require('express');
const connectDB = require('./config/db');
const errorHandler = require('./middlewares/errorHandler');
const authMiddleware = require('./middlewares/authMiddleware');
const app = express();

// Connect to MongoDB
connectDB();

// Other app configurations and middleware
app.use(express.json());

// auth check middleware (applies to specific routes)
// app.use('/api/issues', authMiddleware);

// Define routes
app.use('/api/issues', require('./routes/issueRoutes'));
app.use('/api/auth', require('./routes/authRoutes'));

// Error handler middleware
app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
