-- CreateTable
CREATE TABLE "Student" (
    "roll_no" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "dob" TEXT NOT NULL,
    "class" TEXT NOT NULL,

    CONSTRAINT "Student_pkey" PRIMARY KEY ("roll_no")
);
