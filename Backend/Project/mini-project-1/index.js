const { PrismaClient } = require("@prisma/client");
const express = require("express");
var morgan = require("morgan");
const app = express();

const prisma = new PrismaClient();

// app.use(express.json()); // Error Fix - Json Body Parse
// app.use(morgan("dev"));

app.get("/", morgan("dev"), (req, res) => {
  res.send("API is Working");
});

// API - 1 : GET ---> http://localhost:3000/students --> ALL DATA
app.get("/students", async (req, res) => {
  // 1. Data from Frontend [ No ]

  // 2. DB Logic
  const studentData = await prisma.student.findMany();

  // 3. Data to Frontend
  res.send(studentData);
});

// API - 2 : GET ---> http://localhost:3000/students/:roll_no --> ONE STUDENT DATA
app.get("/students/:roll_no", async (req, res) => {
  // 1. Data from Frontend
  const data = req.params;

  // 2.DB Logic
  const studentdata = await prisma.student.findUnique({
    where: {
      roll_no: data.roll_no,
    },
  });

  // 3. Data to Frontend
  res.send(studentdata);
});

// API - 3 : POST ---> http://localhost:3000/students/ --> CREATE A STUDENT DATA
app.post("/students", express.json(), async (req, res) => {
  // 1. Data from Frontend
  const data = req.body;

  // 2. DB Logic
  const newStudent = await prisma.student.create({
    data: {
      roll_no: data.roll_no,
      name: data.name,
      dob: data.dob,
      class: data.class,
    },
  });

  // 3. Data to Frontend
  res.send(newStudent);
});

// API - 4 : PUT ---> http://localhost:3000/students/ --> UPDATE A STUDENT DATA
app.put("/students", express.json(), async (req, res) => {
  // 1. Data from Frontend
  const data = req.body;

  // 2. DB Logic
  const newUpdateData = await prisma.student.update({
    data: {
      roll_no: data.roll_no,
      name: data.name,
      dob: data.dob,
      class: data.class,
    },
    where: {
      roll_no: data.roll_no,
    },
  });

  // 3. Data to Frontend
  res.send(newUpdateData);
});

// API - 5 : DELETE ---> http://localhost:3000/students/ --> DELETE A STUDENT DATA
app.delete("/students", express.json(), async (req, res) => {
  // 1. Data From Frontend
  const data = req.body;

  // 2. DB Logic
  await prisma.student.delete({
    where: {
      roll_no: data.roll_no,
    },
  });

  // 3. Data to Frotend
  res.send("student deleted");
});

app.listen(3000);
