-- CreateTable
CREATE TABLE "Order" (
    "id" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "weight" BIGINT NOT NULL,
    "departure_point" TEXT NOT NULL,
    "destination_point" TEXT NOT NULL,
    "departure_date" TEXT NOT NULL,
    "arrival_date" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "carrier" TEXT NOT NULL,
    "created_by" TEXT NOT NULL,
    "created_at" DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Order_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "login" TEXT NOT NULL,
    "password_hash" TEXT NOT NULL,
    "salt" TEXT NOT NULL,
    "role" TEXT NOT NULL DEFAULT 'user',
    "created_at" DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserProfile" (
    "id" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,

    CONSTRAINT "UserProfile_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Wagon" (
    "id" BIGSERIAL NOT NULL,
    "wagon_number" INTEGER NOT NULL,
    "wagon_type" TEXT NOT NULL,

    CONSTRAINT "Wagon_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CargoActIn" (
    "id" BIGSERIAL NOT NULL,
    "act_in_no" INTEGER NOT NULL,
    "act_in_date" DATE NOT NULL,
    "statusId" BIGINT NOT NULL,
    "supplier_id" INTEGER NOT NULL,
    "rail_waybill" INTEGER NOT NULL,
    "user_id" TEXT NOT NULL,

    CONSTRAINT "CargoActIn_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CargoActInStatus" (
    "id" BIGSERIAL NOT NULL,
    "status_name" TEXT NOT NULL,

    CONSTRAINT "CargoActInStatus_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Cargo" (
    "id" BIGSERIAL NOT NULL,
    "cargo_name" TEXT NOT NULL,

    CONSTRAINT "Cargo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CargoIn" (
    "id" BIGSERIAL NOT NULL,
    "cargo_id" BIGINT NOT NULL,
    "weight_brutto" INTEGER NOT NULL,
    "weight_brutto_rest" INTEGER NOT NULL,
    "cargo_act_in_id" BIGINT NOT NULL,
    "warehouse" INTEGER NOT NULL,
    "storage_type_id" INTEGER NOT NULL,
    "wagon_id" BIGINT NOT NULL,
    "user_id" TEXT NOT NULL,

    CONSTRAINT "CargoIn_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "VesselVoyage" (
    "id" SERIAL NOT NULL,
    "estimated_date_departure" DATE NOT NULL,
    "vessel_id" INTEGER NOT NULL,
    "user_id" TEXT NOT NULL,

    CONSTRAINT "VesselVoyage_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Vessel" (
    "id" SERIAL NOT NULL,
    "vessel_name" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,

    CONSTRAINT "Vessel_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CargoLoad" (
    "id" SERIAL NOT NULL,
    "load_date" DATE NOT NULL,
    "vessel_voyage_id" INTEGER NOT NULL,
    "weight_brutto" INTEGER NOT NULL,
    "cargo_act_in_id" BIGINT NOT NULL,
    "shipper" INTEGER NOT NULL,
    "consignee" INTEGER NOT NULL,
    "user_id" TEXT NOT NULL,

    CONSTRAINT "CargoLoad_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "UserProfile_user_id_key" ON "UserProfile"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "CargoActIn_act_in_no_act_in_date_key" ON "CargoActIn"("act_in_no", "act_in_date");

-- AddForeignKey
ALTER TABLE "UserProfile" ADD CONSTRAINT "UserProfile_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CargoActIn" ADD CONSTRAINT "CargoActIn_statusId_fkey" FOREIGN KEY ("statusId") REFERENCES "CargoActInStatus"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CargoActIn" ADD CONSTRAINT "CargoActIn_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CargoIn" ADD CONSTRAINT "CargoIn_cargo_id_fkey" FOREIGN KEY ("cargo_id") REFERENCES "Cargo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CargoIn" ADD CONSTRAINT "CargoIn_cargo_act_in_id_fkey" FOREIGN KEY ("cargo_act_in_id") REFERENCES "CargoActIn"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CargoIn" ADD CONSTRAINT "CargoIn_wagon_id_fkey" FOREIGN KEY ("wagon_id") REFERENCES "Wagon"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CargoIn" ADD CONSTRAINT "CargoIn_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "VesselVoyage" ADD CONSTRAINT "VesselVoyage_vessel_id_fkey" FOREIGN KEY ("vessel_id") REFERENCES "Vessel"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "VesselVoyage" ADD CONSTRAINT "VesselVoyage_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Vessel" ADD CONSTRAINT "Vessel_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CargoLoad" ADD CONSTRAINT "CargoLoad_vessel_voyage_id_fkey" FOREIGN KEY ("vessel_voyage_id") REFERENCES "VesselVoyage"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CargoLoad" ADD CONSTRAINT "CargoLoad_cargo_act_in_id_fkey" FOREIGN KEY ("cargo_act_in_id") REFERENCES "CargoActIn"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CargoLoad" ADD CONSTRAINT "CargoLoad_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
