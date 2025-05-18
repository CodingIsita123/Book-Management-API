import dotenv from 'dotenv';
import app from './app';
import { errorHandler } from './middlewares/errorHandler';

dotenv.config();
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
app.use(errorHandler)
