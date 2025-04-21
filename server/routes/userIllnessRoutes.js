// routes/ccUserIllnessRoutes.js
import express from 'express';
import * as ccUserIllnessController from '../controllers/userIllnessController.js';

const router = express.Router();

router.get('/', ccUserIllnessController.getAllUserIllnesses);
router.get('/:id', ccUserIllnessController.getUserIllnessById);
router.post('/', ccUserIllnessController.createUserIllness);
router.put('/:id', ccUserIllnessController.updateUserIllness);
router.delete('/:id', ccUserIllnessController.deleteUserIllness);

export default router;
