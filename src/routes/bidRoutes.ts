import { Router } from 'express';
import { bidOnRide, viewBids } from '../controllers/bidController';

const router = Router();

router.post('/bids', bidOnRide);
router.get('/bids/:rideID', viewBids);

export default router;
