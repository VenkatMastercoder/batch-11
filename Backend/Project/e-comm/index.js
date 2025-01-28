const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const { z } = require("zod");

const express = require("express");

const app = express();

const prodcutByIdSchema = z.object({
  prodcut_id: z.string(),
});

app.get("/",(req,res)=>{
  res.send("API Working")
})

// API - GET : AllProducts
app.get("/products", async (req, res) => {
  try {
    // 1. Data from Frontend

    // 2. DB Logic
    const productsData = await prisma.product.findMany();

    // Dara from Frontend
    res.status(200).json({ message: "Product Data Send Scuffly", data: productsData });
  } catch (error) {
    console.log(error), res.json({ message: "Internal Server Error" });
    res.json({ message: error || "Internal Server Error" });
  }
});

// API - GET : A Products by Product IS
app.get("/products/:prodcut_id",async (req, res) => {
  try {
    // 1 data from Frontend
    const data = prodcutByIdSchema.parse(req.params);

    // 2. DB Logic
    const prodcutData =await prisma.product.findUnique({
      where: {
        product_id: data.prodcut_id,
      },
    });

    // Datta to Fronted
    res.status(200).json({ message: "prodcutData Fetched", data: prodcutData });
  } catch (error) {
    console.log("Internal Server error", error);
    res.json({ message: error || "Internal Server Error" });
  }
});

app.listen(3000);
