import express from "express";
const router=express.Router()
import { register } from "../controllers/controller.js";
import { login } from "../controllers/controller.js";
import { logout } from "../controllers/controller.js";

router.get("/register", (req, res) => {
  res.render("register",{message:null});
});

router.post("/register", register);

// Login page
router.get("/login", (req, res) => {
  res.render("login");
});
// router.get('/admin',)
router.post('/logout',logout)

router.post("/login", login);

export default router