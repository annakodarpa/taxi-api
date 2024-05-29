import { Router } from 'express';
import { requestRide, viewRideRequests } from '../controllers/rideController';

const router = Router();

router.post('/rides', requestRide);
router.get('/rides', viewRideRequests);

export default router;
