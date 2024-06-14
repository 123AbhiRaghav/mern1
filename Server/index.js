import cookieParser from "cookie-parser";
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";
import dbConnection from "./utils/index1.js";
import { errorHandler,routeNotFound } from "./middleware/error.js";
import routes from "./routes/route.js"

dotenv.config();

dbConnection();

const PORT = process.env.PORT || 3000;

const app = express();

app.use(cors({
   origin: ["http://localhost:3000", "http://localhost:3001"],
   methods: ["GET", "POST", "PUT", "DELETE"],
   credentials: true,
}));

app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use(cookieParser())
app.use(morgan("dev"))
app.use("/api", routes)
app.use(routeNotFound)
app.use(errorHandler)

app.listen(PORT, () => console.log(`Server running on ${PORT}`));