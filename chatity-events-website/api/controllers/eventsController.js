const eventModel = require('../models/eventModel');

class EventsController {
  

  async getHomepageEvents(req, res) {
    try {
      const events = await eventModel.getUpcomingEvents();
      
      res.json({
        success: true,
        data: events,
        count: events.length,
        message: 'Upcoming events retrieved successfully'
      });
    } catch (error) {
      console.error('Error in getHomepageEvents:', error);
      res.status(500).json({
        success: false,
        message: 'Failed to retrieve events',
        error: error.message
      });
    }
  }


  async searchEvents(req, res) {
    try {
      const { date, location, category } = req.query;
      
      const filters = {};
      if (date) filters.date = date;
      if (location) filters.location = location;
      if (category) filters.category = parseInt(category);

      const events = await eventModel.searchEvents(filters);
      
      res.json({
        success: true,
        data: events,
        count: events.length,
        filters: filters,
        message: 'Events search completed successfully'
      });
    } catch (error) {
      console.error('Error in searchEvents:', error);
      res.status(500).json({
        success: false,
        message: 'Failed to search events',
        error: error.message
      });
    }
  }


  async getEventDetails(req, res) {
    try {
      const eventId = parseInt(req.params.id);
      
      if (!eventId || isNaN(eventId)) {
        return res.status(400).json({
          success: false,
          message: 'Invalid event ID'
        });
      }

      const event = await eventModel.getEventById(eventId);
      
      if (!event) {
        return res.status(404).json({
          success: false,
          message: 'Event not found'
        });
      }

      res.json({
        success: true,
        data: event,
        message: 'Event details retrieved successfully'
      });
    } catch (error) {
      console.error('Error in getEventDetails:', error);
      res.status(500).json({
        success: false,
        message: 'Failed to retrieve event details',
        error: error.message
      });
    }
  }


  async getCategories(req, res) {
    try {
      const categories = await eventModel.getAllCategories();
      
      res.json({
        success: true,
        data: categories,
        count: categories.length,
        message: 'Categories retrieved successfully'
      });
    } catch (error) {
      console.error('Error in getCategories:', error);
      res.status(500).json({
        success: false,
        message: 'Failed to retrieve categories',
        error: error.message
      });
    }
  }


  async getFeaturedEvents(req, res) {
    try {
      const limit = parseInt(req.query.limit) || 6;
      const events = await eventModel.getFeaturedEvents(limit);
      
      res.json({
        success: true,
        data: events,
        count: events.length,
        message: 'Featured events retrieved successfully'
      });
    } catch (error) {
      console.error('Error in getFeaturedEvents:', error);
      res.status(500).json({
        success: false,
        message: 'Failed to retrieve featured events',
        error: error.message
      });
    }
  }


  async healthCheck(req, res) {
    try {

      await eventModel.getAllCategories();
      
      res.json({
        success: true,
        message: 'API is healthy and database connection is working',
        timestamp: new Date().toISOString(),
        version: '1.0.0'
      });
    } catch (error) {
      res.status(503).json({
        success: false,
        message: 'API is unhealthy - database connection failed',
        error: error.message
      });
    }
  }
}

module.exports = new EventsController();