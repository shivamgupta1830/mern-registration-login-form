import express from "express";
const router = express.Router();
import { login, logout, signup } from "../controllers/auth.js";
import authUser from "../middleware/authenticateUser.js";
import dashboard from "../controllers/dashboard.js";

router.post("/login", login);
router.post("/signup", signup);
router.get("/dashboard", authUser, dashboard);
router.get("/logout", logout);

export default router;
