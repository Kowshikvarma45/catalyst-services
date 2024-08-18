import express from "express";
const router = express.Router();

import { loginusingEmailPassword, loginusingNamePassword, signupUsingNameEmailPhonePassword, signupusingEmailPassword, signupusingNamePassword } from "../controllers/user.register.controller.js";

router.post("/signupUsingNameEmailPhonePassword", signupUsingNameEmailPhonePassword);
router.post("/signupUsingEmailPassword",signupusingEmailPassword)
router.post("/signupUsingNamePassword",signupusingNamePassword)
router.post("/loginusingEmailPassword",loginusingEmailPassword)
router.post("/loginusingNamePassword",loginusingNamePassword)

export default router;
