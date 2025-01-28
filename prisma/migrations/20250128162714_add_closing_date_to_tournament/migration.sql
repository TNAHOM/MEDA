/*
  Warnings:

  - Added the required column `ClosingDate` to the `Tournament` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Tournament" ADD COLUMN     "ClosingDate" TIMESTAMP(3) NOT NULL;
