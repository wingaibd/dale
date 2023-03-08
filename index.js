import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';

import connectDB from './mongodb/connect.js';
import postRoutes from './routes/postRoutes.js';
import dalleRoutes from './routes/dalleRoutes.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: '50mb' }));

app.use('/api/v1/post', postRoutes);
app.use('/api/v1/dalle', dalleRoutes);

app.get('/', async (req, res) => {
  res.status(200).json({
    message: 'Hello from DALL.E!',
  });
});
// process.env.MONGODB_URL
const startServer = async () => {
  try {
    connectDB("mongodb+srv://daleAdmin:$505697Ab$@cluster0.jrdu3hi.mongodb.net/?retryWrites=true&w=majority");
    app.listen(8080, () => console.log('Server started on port 8080'));
  } catch (error) {
    console.log('database error')
    console.log(error);
  }
};

startServer();
