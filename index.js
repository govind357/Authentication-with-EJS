
import express from "express";
const app = express();
import session from "express-session";
import router from "./routes/router.js";
import MongoStore from "connect-mongo";



app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));


app.use(session({
  secret: "mySuperSecretKey",  // used to sign the session ID
  resave: false,               // don’t save session if nothing changes
  saveUninitialized: false,    // don’t create empty sessions
  store: MongoStore.create({
    mongoUrl: "mongodb://127.0.0.1:27017",
    dbName:'ecommerce' ,   // store sessions in MongoDB
    collectionName: "sessions" // collection name
  }),
  cookie: { maxAge: 1000 * 60 * 60}    // true only if HTTPS
}));




app.use(router)








app.listen(3000, () => console.log("Server running on http://localhost:3000"));
