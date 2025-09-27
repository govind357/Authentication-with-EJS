import express from "express";
const router=express.Router()
import { register, sessionchecking } from "../controllers/controller.js";
import { login } from "../controllers/controller.js";
import { logout } from "../controllers/controller.js";
import { homePage } from "../controllers/controller.js";
import { userdetails } from "../controllers/controller.js";
router.get("/register", (req, res) => {
  res.render("register",{message:null});
});

router.post("/register", register);

// Login page
router.get("/login", (req, res) => {
  res.render("login");
});
router.post('/logout',logout)
router.post("/login", login); 

router.use(sessionchecking)
router.get('/admin',(req,res)=>{
    return res.render('admin',{userdetails})

})

// router.get('/admin',)
router.get('/home',homePage)
router.get('/about',(req,res)=>{
res.send('helo')
})

export default router  