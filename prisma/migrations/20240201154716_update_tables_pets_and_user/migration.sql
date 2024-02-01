/*
  Warnings:

  - You are about to drop the column `appointment_id` on the `pet` table. All the data in the column will be lost.
  - You are about to drop the column `appointment_id` on the `users` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "pet" DROP CONSTRAINT "pet_appointment_id_fkey";

-- DropForeignKey
ALTER TABLE "users" DROP CONSTRAINT "users_appointment_id_fkey";

-- AlterTable
ALTER TABLE "pet" DROP COLUMN "appointment_id";

-- AlterTable
ALTER TABLE "users" DROP COLUMN "appointment_id";

-- CreateTable
CREATE TABLE "_AppointmentToUser" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_AppointmentToPet" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_AppointmentToUser_AB_unique" ON "_AppointmentToUser"("A", "B");

-- CreateIndex
CREATE INDEX "_AppointmentToUser_B_index" ON "_AppointmentToUser"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_AppointmentToPet_AB_unique" ON "_AppointmentToPet"("A", "B");

-- CreateIndex
CREATE INDEX "_AppointmentToPet_B_index" ON "_AppointmentToPet"("B");

-- AddForeignKey
ALTER TABLE "_AppointmentToUser" ADD CONSTRAINT "_AppointmentToUser_A_fkey" FOREIGN KEY ("A") REFERENCES "appointment"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AppointmentToUser" ADD CONSTRAINT "_AppointmentToUser_B_fkey" FOREIGN KEY ("B") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AppointmentToPet" ADD CONSTRAINT "_AppointmentToPet_A_fkey" FOREIGN KEY ("A") REFERENCES "appointment"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AppointmentToPet" ADD CONSTRAINT "_AppointmentToPet_B_fkey" FOREIGN KEY ("B") REFERENCES "pet"("id") ON DELETE CASCADE ON UPDATE CASCADE;
