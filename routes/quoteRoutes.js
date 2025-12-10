const express = require('express');
const router = express.Router();
const controller = require('../controllers/quoteController');

router.get('/random', controller.getRandomQuote);

router.get('/', controller.getAllQuotes);

router.get('/:id', controller.getQuoteById);

router.post('/', controller.createQuote);

module.exports = router;