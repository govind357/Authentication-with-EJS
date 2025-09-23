
import { MongoClient } from "mongodb";
const url = "mongodb://127.0.0.1:27017";
const client = new MongoClient(url);


export let usercollection;
  export let db;
 async function connectDB() {
if(!db){  await client.connect();
  console.log("MongoDB connected");
   db = client.db("ecommerce");
  usercollection = db.collection("details");}
}


 connectDB();