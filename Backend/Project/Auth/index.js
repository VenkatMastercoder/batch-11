const { PrismaClient } = require("@prisma/client");
const express = require("express");
const bcrypt = require("bcrypt");
const app = express();
const jwt = require("jsonwebtoken");

app.use(express.json());

const prisma = new PrismaClient();

const middeware = (req, res, next) => {
  console.log("Middleware - 1");
  next();
};

const middeware2 = (req, res, next) => {
  console.log("Middleware - 2");
  next();
};

const authMiddleware = (req, res, next) => {
  console.log("Auth Middleware");
  const token = req.headers.authorization.split(" ")[1];

  const ans = jwt.verify(token, "hh-room", function (err, decoded) {
    console.log(err);
    if (!err) {
      next();
    } else {
      res.json({ message: "Token invaild" });
    }
  });
};

const RBAC = (role) => {
  return (req, res, next) => {
    const token = req.headers.authorization.split(" ")[1];
    var decoded = jwt.verify(token, "hh-room");
    if (decoded.role === role) {
      next();
    } else {
      res.send("No Access to Rule");
    }
  };
};

app.get("/", RBAC("ADMIN"), (req, res) => {
  res.send("Auth APIs Working");
});

app.post("/register", async (req, res) => {
  // 1. Data from Frontend
  const data = req.body;

  // 2. DB Logic
  const isUserExists = await prisma.user.findUnique({
    where: {
      email: data.email,
    },
  });

  if (isUserExists) {
    res.status(201).json({ message: "Email is Already Exits" });
  } else {
    const hashedpassword = await bcrypt.hash(data.password, 10);

    const newUser = await prisma.user.create({
      data: {
        email: data.email,
        password: hashedpassword,
        phone_number: data.phone_number,
        age: data.age,
        role: data.role,
      },
    });

    const { password, ...frontendData } = newUser;

    // 3. Data to Frontend
    res
      .status(200)
      .json({ message: "New User Created Scufully", data: frontendData });
  }
});

app.post("/login", async (req, res) => {
  // 1. Data from Frontend
  const data = req.body; // Email & Password

  // 2. DB Logic
  const isUserExists = await prisma.user.findUnique({
    where: {
      email: data.email,
    },
  });

  if (isUserExists) {
    // Check The Pass
    const ans = await bcrypt.compare(data.password, isUserExists.password);

    const temp_key = jwt.sign(
      { user_id: isUserExists.user_id, role: isUserExists.role },
      "hh-room",
      {
        expiresIn: "1h",
      }
    );
    const main_key = jwt.sign(
      { user_id: isUserExists.user_id, role: isUserExists.role },
      "hh-room",
      {
        expiresIn: "2d",
      }
    );

    const userData = {
      data: isUserExists,
      token: {
        temp_key: temp_key,
        main_key: main_key,
      },
    };

    if (ans) {
      res.status(200).json({ message: "Login in Scufully", data: userData });
    } else {
      res.status(404).json({ message: "No Password is Wrong." });
    }
  } else {
    res
      .status(404)
      .json({ message: "No Email id Found.Please Register First" });
  }
});

app.post("/refresh", async (req, res) => {
  // 1. Data from frontend
  const data = req.body;

  // 2. DB Logic
  const ans = jwt.verify(data.main_key, "hh-room", function (err, decoded) {
    if (!err) {
      const temp_key = jwt.sign(
        { user_id: decoded.user_id, role: decoded.role },
        "hh-room",
        {
          expiresIn: "1h",
        }
      );

      res.status(200).json({ message: "NEW REFRESH TOKEN", data: temp_key });
    } else {
      res.json({ message: "Token invaild" });
    }
  });
});

app.listen(3000);
