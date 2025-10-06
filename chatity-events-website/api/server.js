const express = require('express');
const cors = require('cors');
require('dotenv').config();


const path = require('path');

const { testConnection } = require('./event_db');
const eventRoutes = require('./routes/events');

const app = express();
const PORT = process.env.PORT || 3000;


app.use(express.static('.')); 


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.path}`);
  next();
});

app.use('/api', eventRoutes);
app.use('/images', express.static(path.join(__dirname, 'images')));

app.get('/', (req, res) => {
  res.json({
    message: 'Charity Events API Server',
    version: '1.0.0',
    endpoints: {
      health: 'GET /api/health',
      events: 'GET /api/events',
      featured: 'GET /api/events/featured',
      search: 'GET /api/events/search',
      eventDetails: 'GET /api/events/:id',
      categories: 'GET /api/categories'
    },
    documentation: 'See README for API documentation'
  });
});

app.use('*', (req, res) => {
  res.status(404).json({
    success: false,
    message: `Route ${req.originalUrl} not found`
  });
});

app.use((error, req, res, next) => {
  console.error('Unhandled error:', error);
  res.status(500).json({
    success: false,
    message: 'Internal server error',
    error: process.env.NODE_ENV === 'development' ? error.message : 'Something went wrong'
  });
});

async function startServer() {
  try {

    const dbConnected = await testConnection();
    if (!dbConnected) {
      console.error('❌ Cannot start server without database connection');
      process.exit(1);
    }

    app.listen(PORT, () => {
      console.log(`🚀 Charity Events API Server running on port ${PORT}`);
      console.log(`📍 API Base URL: http://localhost:${PORT}/api`);
      console.log(`📊 Health check: http://localhost:${PORT}/api/health`);
      console.log('✅ Server is ready to accept requests');
    });
  } catch (error) {
    console.error('❌ Failed to start server:', error);
    process.exit(1);
  }
}


process.on('SIGINT', () => {
  console.log('\n👋 Shutting down server gracefully...');
  process.exit(0);
});

process.on('SIGTERM', () => {
  console.log('\n👋 Server terminated');
  process.exit(0);
});


startServer();
