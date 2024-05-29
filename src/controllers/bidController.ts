import { Request, Response } from 'express';
import RideRequest from '../models/RideRequest';

export const bidOnRide = async (req: Request, res: Response) => {
    try {
        const { rideID, fleetId, bidAmount } = req.body;

        // Validate input data
        if (!rideID || !fleetId || typeof bidAmount !== 'number') {
            return res.status(400).json({ message: 'Invalid input data' });
        }

        // Save the bid to the ride request
        const updateResult = await RideRequest.updateOne(
            { _id: rideID },
            { $push: { bids: { fleetId, bidAmount } } }
        );

        // Check if the ride was found and updated
        if (updateResult.modifiedCount === 0) {
            return res.status(404).json({ message: 'Ride not found or bid not added' });
        }
        res.status(201).json({ message: 'Bid created successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const viewBids = async (req: Request, res: Response) => {
    try {
        const { rideID } = req.params;

        // Find the ride with the specific rideID
        const ride = await RideRequest.findById(rideID);

        if (!ride) {
            return res.status(404).json({ message: 'Ride not found' });
        }

        res.status(200).json(ride);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};