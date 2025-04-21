import express from 'express';
import * as foodNutrientController from '../controllers/foodNutrientController.js';

const router = express.Router();

router.get('/', foodNutrientController.getAllFoodNutrients);
router.get('/:id', foodNutrientController.getFoodNutrientById);
router.post('/', foodNutrientController.createFoodNutrient);
router.put('/:id', foodNutrientController.updateFoodNutrient);
router.delete('/:id', foodNutrientController.deleteFoodNutrient);

export default router;
