import { Router } from 'express';
import { requestRide, viewRideRequests, acceptBid } from '../controllers/rideController';

const router = Router();

router.post('/rides', requestRide);
router.get('/rides', viewRideRequests);
router.put('/rides/:id/accept-bid', acceptBid);

export default router;
