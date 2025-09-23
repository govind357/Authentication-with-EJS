



import express from "express";

import session from "express-session";
import router from "./routes/router.js";
const app = express();


app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));


app.use(session({
  secret: "mySuperSecretKey",  // used to sign the session ID
  resave: false,               // don’t save session if nothing changes
  saveUninitialized: false,    // don’t create empty sessions
  cookie: { secure: false }    // true only if HTTPS
}));

app.use(router)



// register





app.listen(3000, () => console.log("Server running on http://localhost:3000"));
