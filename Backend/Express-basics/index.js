const express = require("express")

// Instance Of HTTP Server
const app = express();

// app.use(express.json()) // Global when you want to Call a Middleware

// API - GET : http://localhost:3000/
app.get("/",(req,res)=>{
  // 1. Data from Frontend

  // 2. DB Logic

  // 3. Data to Frontend
  res.send("Express - HTTP Server")
})

// API - GET : http://localhost:3000/car --> HELLO WORLD - 1 
app.get("/car",express.json(),(req,res)=>{
  // 1. Data from Frontend

  // 2. DB Logic

  // 3. Data to Frontend
  res.send("HELLO WORLD - 1")
})

// API - GET : http://localhost:3000/car --> HELLO WORLD - 2
app.get("/car",(req,res)=>{
  // 1. Data from Frontend

  // 2. DB Logic

  // 3. Data to Frontend
  res.send("HELLO WORLD - 2")
})

// API - GET : http://localhost:3000/car/bike --> Bike
app.get("/car/bike",(req,res)=>{
  // 1. Data from Frontend

  // 2. DB Logic

  // 3. Data to Frontend
  res.send("Bike")
})

app.listen(3000)