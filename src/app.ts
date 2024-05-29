import express from 'express';
import mongoose from 'mongoose';
import rideRoutes from './routes/rideRoutes';
import bidRoutes from './routes/bidRoutes';

const app = express();
app.use(express.json());

app.use('/api', rideRoutes);
app.use('/api', bidRoutes);

const PORT = process.env.PORT || 4000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://mongodb:27017/taxi-service';

mongoose.connect(MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

export default app;
