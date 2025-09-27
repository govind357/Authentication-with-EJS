import { usercollection } from "../sevice/db.js";
import bcrypt from "bcrypt";
let userdetails=[]
export const register=async(req,res)=>{
     const { username, password,email } = req.body;
    
      const existingUser = await usercollection.findOne({ email: email });
      if (existingUser) {
        return res.render('register',{ message: "User already exists" });
      }
    
      const hashedPassword = await bcrypt.hash(password, 10);
      await usercollection.insertOne({ name: username, password: hashedPassword , role:'user',email:email,status:'active'});
    
      res.redirect('/login')
}

export const login=async(req,res)=>{
    const { password,email } = req.body;
    
    
      const user = await usercollection.findOne({ email:email});
     
      
      req.session.username = user.name; 
      console.log(req.sessionID);
       if(user.role==='admin'){
          userdetails=await usercollection.find().toArray()
        res.redirect('admin')
      
      
      }

      const isMatch = await bcrypt.compare(password, user.password);
      if (!user) {
        return res.send('user not fount')
      }else if(!isMatch) {
        return res.send('invaled password')
      }else{
         res.redirect('/home')
      }
}
     export const homePage=(req,res)=>{

        res.render('home',{message:`hi ${req.session.username}`})
      }
    //  const {id,fristname} = { id: user._id, name: user.name };
    
      




export const sessionchecking=(req,res,next)=>{
  if(req.session.username){
    return next()
    
  }
  return res.redirect('/login')
  
}
export const logout=(req,res)=>{
  console.log('keri');
  if(req.session.username){
    req.session.destroy(err =>{
      console.log(err);
    })
  }
  res.redirect('/login')
}

export{userdetails}