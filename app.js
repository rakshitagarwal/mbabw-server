import express from "express";
import dotenv from "dotenv";
import { connectPassport } from "./utils/Provider.js";
import session from "express-session";
import passport from "passport";
import cookieParser from "cookie-parser";

const app = express();
app.use(express.json());
export default app;
dotenv.config({
  path: "./config/config.env",
});

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
  })
);
app.use(cookieParser());

app.use(passport.authenticate("session"));
app.use(passport.initialize());
app.use(passport.session());

connectPassport();

import userRoutes from "./routes/user.js";
import orderRoutes from "./routes/order.js";

app.use("/api/v1", userRoutes);
app.use("/api/v1", orderRoutes);

