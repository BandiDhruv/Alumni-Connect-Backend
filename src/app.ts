import express,{Express} from "express";
import passport from "passport";
import authRoutes from "./routes/authRoutes";
import cors from "cors"
import corsOptions from "./Config/corsOption";

const app:Express = express();
app.use(express.json());
app.use(cors(corsOptions))

// Routes
app.use("/api/auth", authRoutes);

export default app;
