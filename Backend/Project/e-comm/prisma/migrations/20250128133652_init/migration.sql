-- CreateTable
CREATE TABLE "Product" (
    "product_id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "price" TEXT NOT NULL,
    "discountPercentage" TEXT NOT NULL,
    "rating" TEXT NOT NULL,
    "stock" TEXT NOT NULL,
    "images" TEXT[],
    "thumbnail" TEXT NOT NULL,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("product_id")
);
