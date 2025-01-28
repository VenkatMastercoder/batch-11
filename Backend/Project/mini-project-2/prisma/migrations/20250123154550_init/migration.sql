-- CreateTable
CREATE TABLE "Product" (
    "product_id" TEXT NOT NULL,
    "product_image_url" TEXT NOT NULL,
    "product_price" TEXT NOT NULL,
    "product_title" TEXT NOT NULL,
    "product_rating" TEXT NOT NULL,
    "product_category_group" TEXT NOT NULL,
    "product_location" TEXT NOT NULL,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("product_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Product_product_id_key" ON "Product"("product_id");
