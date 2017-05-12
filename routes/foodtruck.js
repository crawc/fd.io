const express = require('express');
const router = express.Router();

const foodTruckController = require('../controllers/foodTruckController');

/* RESTful route definitions */
router.get('/', foodTruckController.map);
router.get('/favorites', foodTruckController.index);
router.get('/favorites/new', foodTruckController.new);
router.post('/favorites', foodTruckController.create);
router.get('/favorites/:id', foodTruckController.show);
router.get('/favorites/:id/edit', foodTruckController.edit);
router.put('/favorites/:id', foodTruckController.update);
router.delete('/favorites', foodTruckController.delete);

module.exports = router;
