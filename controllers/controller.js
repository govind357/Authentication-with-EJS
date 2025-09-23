import { usercollection } from "../sevice/db.js";
import bcrypt from "bcrypt";

export const register=async(req,res)=>{
     const { username, password,email } = req.body;
    
      const existingUser = await usercollection.findOne({ email: email });
      if (existingUser) {
        return res.render('register',{ message: "User already exists" });
      }
    
      const hashedPassword = await bcrypt.hash(password, 10);
      await usercollection.insertOne({ name: username, password: hashedPassword , role:'user',email:email});
    
      res.redirect('/login')
}

export const login=async(req,res)=>{
    const { password,email } = req.body;
    
    
      const user = await usercollection.findOne({ email:email});
      if(user.role==='admin'){


        const userdetails=await usercollection.find().toArray()
        return res.render('admin',{userdetails})
      }
      req.session.username = user.name;
        const isMatch = await bcrypt.compare(password, user.password);
      if (!user) {
        return res.send('user not fount')
      }else if(!isMatch) {
        return res.send('invaled password')
      }else{
         res.render('home',{message:`hi ${req.session.username}`})
      }
    
    // const {id,fristname} = { id: user._id, name: user.name };
   
      
}
export const logout=(req,res)=>{
  if(req.session.username){
    req.session.destroy(err =>{
      console.log(err);
      
    })
  }
  res.redirect('/login')
}