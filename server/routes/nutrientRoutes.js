import express from 'express';
import * as nutrientController from '../controllers/nutrientController.js';

const router = express.Router();

router.get('/', nutrientController.getAllNutrients);
router.get('/:id', nutrientController.getNutrientById);
router.post('/', nutrientController.createNutrient);
router.put('/:id', nutrientController.updateNutrient);
router.delete('/:id', nutrientController.deleteNutrient);

export default router;
