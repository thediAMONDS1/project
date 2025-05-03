/*
  Warnings:

  - Added the required column `created_at` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `created_by` to the `Order` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Order" ADD COLUMN     "created_at" TEXT NOT NULL,
ADD COLUMN     "created_by" TEXT NOT NULL;
