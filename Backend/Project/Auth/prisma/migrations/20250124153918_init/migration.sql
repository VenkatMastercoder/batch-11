-- CreateTable
CREATE TABLE "User" (
    "user_id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "phone_number" TEXT NOT NULL,
    "age" INTEGER NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("user_id")
);
