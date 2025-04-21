import express from 'express';
import * as illnessController from '../controllers/illnessController.js';

const router = express.Router();

router.get('/', illnessController.getAllIllnesses);
router.get('/:id', illnessController.getIllnessById);
router.post('/', illnessController.createIllness);
router.put('/:id', illnessController.updateIllness);
router.delete('/:id', illnessController.deleteIllness);

export default router;
