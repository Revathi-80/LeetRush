import express from "express";
import {
  registerUser,
  loginUser,
  getProfile,
  logoutUser,
} from "../controllers/auth.controllers.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";

const authRoutes = express.Router();

authRoutes.post("/register", registerUser);

authRoutes.post("/login", loginUser);

authRoutes.get("/getProfile", authMiddleware, getProfile);

authRoutes.post("/logout", authMiddleware, logoutUser);

export default authRoutes;
