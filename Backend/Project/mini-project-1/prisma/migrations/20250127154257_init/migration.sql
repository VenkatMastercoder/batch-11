/*
  Warnings:

  - You are about to drop the column `class` on the `Student` table. All the data in the column will be lost.
  - You are about to drop the column `dob` on the `Student` table. All the data in the column will be lost.
  - Added the required column `blood_group` to the `Student` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Student" DROP COLUMN "class",
DROP COLUMN "dob",
ADD COLUMN     "blood_group" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "Proof" (
    "proof_id" TEXT NOT NULL,
    "proof_type" TEXT NOT NULL,
    "proof_link" TEXT NOT NULL,
    "roll_no" TEXT NOT NULL,

    CONSTRAINT "Proof_pkey" PRIMARY KEY ("proof_id")
);

-- CreateTable
CREATE TABLE "Payment" (
    "payment_id" TEXT NOT NULL,
    "bank_name" TEXT NOT NULL,
    "payment_amount" TEXT NOT NULL,
    "roll_no" TEXT NOT NULL,

    CONSTRAINT "Payment_pkey" PRIMARY KEY ("payment_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Proof_roll_no_key" ON "Proof"("roll_no");

-- AddForeignKey
ALTER TABLE "Proof" ADD CONSTRAINT "Proof_roll_no_fkey" FOREIGN KEY ("roll_no") REFERENCES "Student"("roll_no") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Payment" ADD CONSTRAINT "Payment_roll_no_fkey" FOREIGN KEY ("roll_no") REFERENCES "Student"("roll_no") ON DELETE RESTRICT ON UPDATE CASCADE;
