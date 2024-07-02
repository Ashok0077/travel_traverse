import express from "express";
import { login, register } from "../controllers/authController.js";

const router = express.Router() //jab bhi hum apne routes ko re-factor karte hai , app ke jagha roter likh dete hai fir roter ko export kar dete hai
// iss mai hum router level pe kaam karte hai

router.post('/register', register)
router.post('/login', login)

export default router