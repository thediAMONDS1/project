/*
  Warnings:

  - You are about to drop the column `act_in_no` on the `CargoActIn` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[act_in_number,act_in_date]` on the table `CargoActIn` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `act_in_number` to the `CargoActIn` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "CargoActIn_act_in_no_act_in_date_key";

-- AlterTable
ALTER TABLE "CargoActIn" DROP COLUMN "act_in_no",
ADD COLUMN     "act_in_number" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "CargoActIn_act_in_number_act_in_date_key" ON "CargoActIn"("act_in_number", "act_in_date");
