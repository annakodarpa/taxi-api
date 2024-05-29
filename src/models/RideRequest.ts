import mongoose, { Schema, Document } from 'mongoose';
let mongooseHidden = require('mongoose-hidden')()

interface IRideRequest extends Document {
    _id: { type: mongoose.Types.ObjectId, auto: true },
    clientId: string;
    // clientId: mongoose.Types.ObjectId; // should be an objectID, but doing string for this assignment
    pickupLocation: string;
    dropoffLocation: string;
    proposedPrice: number;
    status: string;
    bids: [{
        fleetId: mongoose.Types.ObjectId,
        bidAmount: number
    }]
    createdAt: Date;
}

const RideRequestSchema: Schema = new Schema({
    _id: { type: mongoose.Types.ObjectId, auto: true, hide: false },
    clientId: { type: String, required: true, ref: 'Client' },
    pickupLocation: { type: String, required: true },
    dropoffLocation: { type: String, required: true },
    proposedPrice: { type: Number, required: true },
    status: { type: String, required: true, default: 'open', hide: true },
    bids: [{
        fleetId: { type: String, ref: 'Fleet' },
        bidAmount: { type: Number, required: true }
    }],
    createdAt: { type: Date, default: Date.now },
});

RideRequestSchema.plugin(mongooseHidden);

export default mongoose.model<IRideRequest>('RideRequest', RideRequestSchema);
