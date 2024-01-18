import createCampaign from '@/controllers/campaign/create';
import { protect } from '@/controllers';
import express from 'express';
const router = express.Router();

router.use(protect);
router.post('/create', createCampaign);
export { router as campaignRouter };