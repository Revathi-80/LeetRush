import express from "express";
import {
  registerUser,
  loginUser,
  getProfile,
  logoutUser,
} from "../controllers/auth.controllers.js";

const authRoutes = express.Router();

authRoutes.post("/register", registerUser);

authRoutes.post("/login", loginUser);

authRoutes.get("/getProfile", getProfile);

authRoutes.post("/logout", logoutUser);

export default authRoutes;
