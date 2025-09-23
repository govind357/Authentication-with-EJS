// import bcrypt from "bcrypt";
// import session from "express-session";
// import express from "express";
// const app=express()
// import { MongoClient } from "mongodb";
// const url='mongodb://127.0.0.1:27017/'
// const client=new MongoClient(url)


// app.set('view engine','ejs')

// app.use(express.urlencoded({extended:true}))
// let usercollection;
// let db;
// async function mongoDb() {
// if(!db)    {
//     await client.connect()
//     console.log('connected');
//      db=client.db('ecommerce')
//     usercollection=await db.createCollection('details')
// }
// }
// mongoDb()
// // register
// app.get ('/register',(req,res)=>{
//     res.render('register')
// })
// app.post('/register',async(req,res)=>{
//    const {username,password}=req.body  
// const existingUser = await usercollection.findOne({ username });
//    if(existingUser){
//       return res.status(400).json({ message: "User already exists" });
//    }
//      const hashedPassword= await bcrypt.hash(password,10)
//      await usercollection.insertOne({name:username,password:hashedPassword})
//      res.status(201).json({ message: "User registered successfully" });

// })
// // login
// app.get('/login',(req,res)=>{
//     res.render('login')
// })
// app.post('/login',async(req,res)=>{
//     const {username,password}=req.body  
//     const user = await usercollection.findOne({ username });
//     if (!user) return res.status(400).json({ message: "User not found" });
//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) return res.status(400).json({ message: "Invalid password" });
//     res.json({ message: "Login successful" });
//       req.session.user = { id: user._id, name: user.name };


// })

// function isAuth(req, res, next) {
//   if (req.session.user) {
//     next();
//   } else {
//     res.status(401).json({ message: "Unauthorized. Please log in." });
//   }
// }

// app.get("/logout", (req, res) => {
//   req.session.destroy((err) => {
//     if (err) {
//       return res.status(500).json({ message: "Logout failed" });
//     }
//     res.clearCookie("connect.sid");
//     res.json({ message: "Logged out successfully" });
//   });
// });

// app.listen(3000,()=>console.log('running')
// )