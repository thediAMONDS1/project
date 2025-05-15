-- CreateTable
CREATE TABLE "user" (
    "id" TEXT NOT NULL,
    "login" TEXT NOT NULL,
    "password_hash" TEXT NOT NULL,
    "salt" TEXT NOT NULL,
    "role" TEXT NOT NULL DEFAULT 'user',
    "created_at" DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user_profile" (
    "id" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,

    CONSTRAINT "user_profile_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ref_wagon" (
    "id" BIGSERIAL NOT NULL,
    "wagon_number" INTEGER NOT NULL,
    "wagon_type" TEXT NOT NULL,
    "add_info" TEXT NOT NULL,

    CONSTRAINT "ref_wagon_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ref_cargo_act_in_status" (
    "id" BIGSERIAL NOT NULL,
    "status_name" TEXT NOT NULL,

    CONSTRAINT "ref_cargo_act_in_status_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ref_cargo" (
    "id" BIGSERIAL NOT NULL,
    "cargo_name" TEXT NOT NULL,
    "add_info" TEXT NOT NULL,

    CONSTRAINT "ref_cargo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ref_vessel" (
    "id" BIGSERIAL NOT NULL,
    "vessel_name" TEXT NOT NULL,
    "add_info" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,

    CONSTRAINT "ref_vessel_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ref_warehouse" (
    "id" BIGSERIAL NOT NULL,
    "warehouse_number" INTEGER NOT NULL,
    "warehouse_type" TEXT NOT NULL,
    "add_info" TEXT NOT NULL,

    CONSTRAINT "ref_warehouse_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ref_shipper" (
    "id" BIGSERIAL NOT NULL,
    "shipper_name" TEXT NOT NULL,
    "add_info" TEXT NOT NULL,
    "contact" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,

    CONSTRAINT "ref_shipper_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ref_consignee" (
    "id" BIGSERIAL NOT NULL,
    "consignee_name" TEXT NOT NULL,
    "add_info" TEXT NOT NULL,
    "contact" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,

    CONSTRAINT "ref_consignee_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "cargo_act_in" (
    "id" BIGSERIAL NOT NULL,
    "act_in_number" INTEGER NOT NULL,
    "act_in_date" DATE NOT NULL,
    "status_id" BIGINT NOT NULL,
    "shipper_id" BIGINT NOT NULL,
    "consignee_id" BIGINT NOT NULL,
    "rail_waybill" INTEGER NOT NULL,
    "user_id" TEXT NOT NULL,

    CONSTRAINT "cargo_act_in_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "cargo_in" (
    "id" BIGSERIAL NOT NULL,
    "cargo_id" BIGINT NOT NULL,
    "cargo_act_in_id" BIGINT NOT NULL,
    "warehouse_id" BIGINT NOT NULL,
    "wagon_id" BIGINT NOT NULL,
    "user_id" TEXT NOT NULL,
    "weight_brutto_start" INTEGER NOT NULL,
    "weight_brutto_rest" INTEGER NOT NULL,

    CONSTRAINT "cargo_in_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "vessel_voyage" (
    "id" BIGSERIAL NOT NULL,
    "estimated_date_departure" DATE NOT NULL,
    "vessel_id" BIGINT NOT NULL,
    "user_id" TEXT NOT NULL,

    CONSTRAINT "vessel_voyage_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "cargo_load" (
    "id" SERIAL NOT NULL,
    "load_date" DATE NOT NULL,
    "vessel_voyage_id" BIGINT NOT NULL,
    "cargo_act_in_id" BIGINT NOT NULL,
    "user_id" TEXT NOT NULL,
    "weight_brutto" INTEGER NOT NULL,
    "shipper_id" BIGINT NOT NULL,
    "consignee_id" BIGINT NOT NULL,

    CONSTRAINT "cargo_load_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_profile_user_id_key" ON "user_profile"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "cargo_act_in_act_in_number_act_in_date_key" ON "cargo_act_in"("act_in_number", "act_in_date");

-- AddForeignKey
ALTER TABLE "user_profile" ADD CONSTRAINT "user_profile_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ref_vessel" ADD CONSTRAINT "ref_vessel_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ref_shipper" ADD CONSTRAINT "ref_shipper_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ref_consignee" ADD CONSTRAINT "ref_consignee_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "cargo_act_in" ADD CONSTRAINT "cargo_act_in_status_id_fkey" FOREIGN KEY ("status_id") REFERENCES "ref_cargo_act_in_status"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "cargo_act_in" ADD CONSTRAINT "cargo_act_in_shipper_id_fkey" FOREIGN KEY ("shipper_id") REFERENCES "ref_shipper"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "cargo_act_in" ADD CONSTRAINT "cargo_act_in_consignee_id_fkey" FOREIGN KEY ("consignee_id") REFERENCES "ref_consignee"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "cargo_act_in" ADD CONSTRAINT "cargo_act_in_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "cargo_in" ADD CONSTRAINT "cargo_in_cargo_id_fkey" FOREIGN KEY ("cargo_id") REFERENCES "ref_cargo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "cargo_in" ADD CONSTRAINT "cargo_in_cargo_act_in_id_fkey" FOREIGN KEY ("cargo_act_in_id") REFERENCES "cargo_act_in"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "cargo_in" ADD CONSTRAINT "cargo_in_wagon_id_fkey" FOREIGN KEY ("wagon_id") REFERENCES "ref_wagon"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "cargo_in" ADD CONSTRAINT "cargo_in_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "cargo_in" ADD CONSTRAINT "cargo_in_warehouse_id_fkey" FOREIGN KEY ("warehouse_id") REFERENCES "ref_warehouse"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "vessel_voyage" ADD CONSTRAINT "vessel_voyage_vessel_id_fkey" FOREIGN KEY ("vessel_id") REFERENCES "ref_vessel"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "vessel_voyage" ADD CONSTRAINT "vessel_voyage_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "cargo_load" ADD CONSTRAINT "cargo_load_vessel_voyage_id_fkey" FOREIGN KEY ("vessel_voyage_id") REFERENCES "vessel_voyage"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "cargo_load" ADD CONSTRAINT "cargo_load_cargo_act_in_id_fkey" FOREIGN KEY ("cargo_act_in_id") REFERENCES "cargo_act_in"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "cargo_load" ADD CONSTRAINT "cargo_load_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "cargo_load" ADD CONSTRAINT "cargo_load_shipper_id_fkey" FOREIGN KEY ("shipper_id") REFERENCES "ref_shipper"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "cargo_load" ADD CONSTRAINT "cargo_load_consignee_id_fkey" FOREIGN KEY ("consignee_id") REFERENCES "ref_consignee"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
