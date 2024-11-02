
const express = require('express');
const router = express.Router();
const plaidController = require('../controllers/plaidController');

router.post('/transactions', plaidController.getTransactions);

module.exports = router;
