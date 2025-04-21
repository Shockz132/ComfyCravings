import express from 'express';
import * as foodController from '../controllers/foodController.js';

const router = express.Router();

router.get('/', foodController.getAllFoods);
router.get('/:id', foodController.getFoodById);
router.post('/', foodController.createFood);
router.put('/:id', foodController.updateFood);
router.delete('/:id', foodController.deleteFood);

export default router;
