const express = require('express');
const router = express.Router();
const eventsController = require('../controllers/eventsController');

// @route   GET /api/health
// @desc    Health check endpoint
// @access  Public
router.get('/health', eventsController.healthCheck);

// @route   GET /api/events
// @desc    Get all upcoming events for homepage
// @access  Public
router.get('/', eventsController.getHomepageEvents);

// @route   GET /api/events/featured
// @desc    Get featured events (optional endpoint)
// @access  Public
router.get('/featured', eventsController.getFeaturedEvents);

// @route   GET /api/events/search
// @desc    Search events by criteria
// @access  Public
router.get('/search', eventsController.searchEvents);

// @route   GET /api/events/:id
// @desc    Get event details by ID
// @access  Public
router.get('/:id', eventsController.getEventDetails);

// @route   GET /api/categories
// @desc    Get all event categories
// @access  Public
router.get('/categories', eventsController.getCategories);

module.exports = router;