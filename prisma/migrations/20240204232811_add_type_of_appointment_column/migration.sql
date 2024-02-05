/*
  Warnings:

  - Added the required column `type` to the `appointment` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "appointment" ADD COLUMN     "type" TEXT NOT NULL;
