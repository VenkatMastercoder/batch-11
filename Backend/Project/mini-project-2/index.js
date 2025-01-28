const { PrismaClient } = require("@prisma/client");
const express = require("express");

const app = express();

app.use(express.json());

const prisma = new PrismaClient();

const { z } = require("zod");

const getProductByIdSchema = z.object({
  product_id: z.string(),
});

const productCreateSchema = z.object({
  product_image_url: z.string().url(),
  product_price: z.string(),
  product_title: z.string(),
  product_rating: z.string(),
  product_category_group: z.string(),
  product_location: z.string(),
});

const productUpdateSchema = z.object({
  product_image_url: z.string().url(),
  product_price: z.string(),
  product_title: z.string(),
  product_rating: z.string(),
  product_category_group: z.string(),
  product_location: z.string(),
  product_id: z.string(),
});

const productDeleteSchema = z.object({
  product_id: z.string(),
});

// API
app.get("/", (req, res) => {
  res.send("API Working");
});

// API 1 : GET - localhost:3000/products
app.get("/products", async (req, res) => {
  try {
    // 1. Data from Frontend

    // 2. DB Logic
    const products = await prisma.product.findMany();

    // 3. Data to Frontend
    res.json({ message: "retrieved Products", data: products });
  } catch (error) {
    res.status(500).json({ message: error || "Internal Server Error" });
  }
});

//  API 2 : GET - localhost:3000/products/product_id
app.get("/products/:product_id", async (req, res) => {
  try {
    // 1. Data from Frontend
    const data = getProductByIdSchema.parse(req.params);

    // 2. DB Logic
    const productdata = await prisma.product.findUnique({
      where: {
        product_id: data.product_id,
      },
    });

    // 3. Data to Frontend
    res.json({ message: "retrieved Product", data: productdata });
  } catch (error) {
    res.status(500).json({ message: error || "Internal Server Error" });
  }
});

// API 3 : POST - localhost:3000/products
app.post("/products", async (req, res) => {
  try {
    // 1. Data from Frontend
    const data = productCreateSchema.parse(req.body);

    // 2. DB Logic
    const newData = await prisma.product.create({
      data: {
        product_image_url: data.product_image_url,
        product_price: data.product_price,
        product_title: data.product_title,
        product_rating: data.product_rating,
        product_category_group: data.product_category_group,
        product_location: data.product_location,
      },
    });

    // 3. Data to Frontend
    res
      .status(200)
      .json({ message: "Created a Product Scuessfully", data: newData });
  } catch (error) {
    res.status(500).json({ message: error || "Internal Server Error" });
  }
});

// API 4 : PUT - localhost:3000/products
app.put("/products", async (req, res) => {
  try {
    // 1. Data from Frontend
    const data = productUpdateSchema.parse(req.body);

    // 2. DB Logic
    const newData = await prisma.product.update({
      data: {
        product_image_url: data.product_image_url,
        product_price: data.product_price,
        product_title: data.product_title,
        product_rating: data.product_rating,
        product_category_group: data.product_category_group,
        product_location: data.product_location,
      },
      where: {
        product_id: data.product_id,
      },
    });

    // 3. Data to Frontend
    res
      .status(200)
      .json({ message: "Updated a Product Scuessfully", data: newData });
  } catch (error) {
    res.status(500).json({ message: error || "Internal Server Error" });
  }
});

// API 5 : DEL - localhost:3000/products
app.delete("/products", async (req, res) => {
  try {
    // 1. Data from Frontend
    const data = productDeleteSchema.parse(req.body);

    // 2. DB Logic
    await prisma.product.delete({
      where: {
        product_id: data.product_id,
      },
    });

    // 3. Data to Frontend
    res.status(200).json({ message: "Deleted a Product Successfully" });
  } catch (error) {
    res.status(500).json({ message: error || "Internal Server Error" });
  }
});

app.listen(3000);
