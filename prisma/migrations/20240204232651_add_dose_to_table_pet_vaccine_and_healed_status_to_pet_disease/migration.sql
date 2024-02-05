/*
  Warnings:

  - Added the required column `healed` to the `PetDisease` table without a default value. This is not possible if the table is not empty.
  - Added the required column `dose` to the `PetVaccine` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "PetDisease" ADD COLUMN     "healed" BOOLEAN NOT NULL;

-- AlterTable
ALTER TABLE "PetVaccine" ADD COLUMN     "dose" INTEGER NOT NULL;
