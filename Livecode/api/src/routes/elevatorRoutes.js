const express = require('express');
const router = express.Router();
const elevatorController = require('../controllers/elevatorController')

router.post('/move', elevatorController.move);
router.get('/status', elevatorController.getStatus);
router.post('/enter', elevatorController.entrada);
router.post('/saida', elevatorController.entrada);