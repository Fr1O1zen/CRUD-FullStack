import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import { testRoutes } from './routes/test.routes';
import { loginRoutes } from './routes/login.routes';
import { hiveRoutes } from './routes/hives.routes';
import { errorMiddleware } from './middlewares/error.middleware';
import { registerRoutes } from './routes/register.routes';
import cookieParser from 'cookie-parser';


const app = express();
app.use(cors({
  origin: "http://localhost:5173", // <-- tu wpisz dokładny adres frontu
  credentials: true,
}));
app.use(cookieParser());
app.use(helmet());
app.use(express.json());
app.use(testRoutes,loginRoutes,hiveRoutes,registerRoutes);


app.use((_req, res) => {
  res.status(404).json({ message: "Route not found" });
});
app.use(errorMiddleware);

export default app