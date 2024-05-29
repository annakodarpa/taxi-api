import { Request, Response } from 'express';
import RideRequest from '../models/RideRequest';

export const requestRide = async (req: Request, res: Response) => {
    try {
        const { clientId, pickupLocation, dropoffLocation, proposedPrice } = req.body;
        const rideRequest = new RideRequest({ clientId, pickupLocation, dropoffLocation, proposedPrice });
        await rideRequest.save();
        res.status(201).json({ message: 'Ride request created successfully', rideRequestId: rideRequest._id });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const viewRideRequests = async (req: Request, res: Response) => {
    try {
        const rideRequests = await RideRequest.find({ status: 'open' });
        res.status(200).json(rideRequests);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
