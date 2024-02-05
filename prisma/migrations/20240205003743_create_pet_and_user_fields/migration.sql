/*
  Warnings:

  - You are about to drop the `_AppointmentToPet` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_AppointmentToUser` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `pet_id` to the `appointment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_id` to the `appointment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `role` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "_AppointmentToPet" DROP CONSTRAINT "_AppointmentToPet_A_fkey";

-- DropForeignKey
ALTER TABLE "_AppointmentToPet" DROP CONSTRAINT "_AppointmentToPet_B_fkey";

-- DropForeignKey
ALTER TABLE "_AppointmentToUser" DROP CONSTRAINT "_AppointmentToUser_A_fkey";

-- DropForeignKey
ALTER TABLE "_AppointmentToUser" DROP CONSTRAINT "_AppointmentToUser_B_fkey";

-- AlterTable
ALTER TABLE "appointment" ADD COLUMN     "pet_id" TEXT NOT NULL,
ADD COLUMN     "user_id" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "role" TEXT NOT NULL;

-- DropTable
DROP TABLE "_AppointmentToPet";

-- DropTable
DROP TABLE "_AppointmentToUser";

-- AddForeignKey
ALTER TABLE "appointment" ADD CONSTRAINT "appointment_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "appointment" ADD CONSTRAINT "appointment_pet_id_fkey" FOREIGN KEY ("pet_id") REFERENCES "pet"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
