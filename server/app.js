import express from 'express';
import dotenv from 'dotenv';
import foodRoutes from './routes/foodRoutes.js';
import nutrientRoutes from './routes/nutrientRoutes.js';
import illnessRoutes from './routes/illnessRoutes.js';
import foodNutrientRoutes from './routes/foodNutrientRoutes.js';
import ccUserIllnessRoutes from './routes/userIllnessRoutes.js'; // Add this line
import userRoutes from './routes/userRoutes.js'; // Add this line for user routes

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json()); // To parse JSON requests

// Use routes
app.use('/api/foods', foodRoutes);
app.use('/api/nutrients', nutrientRoutes);
app.use('/api/illnesses', illnessRoutes);
app.use('/api/foodNutrients', foodNutrientRoutes);
app.use('/api/userIllnesses', ccUserIllnessRoutes); // Add this line
app.use('/api/users', userRoutes); // Add this line for user routes

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
