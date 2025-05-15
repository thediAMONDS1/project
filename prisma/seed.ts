import { PrismaClient } from "@prisma/client";
import cuid from "cuid";

const prisma = new PrismaClient();

async function createUsersAndProfiles() {
  await prisma.user.createMany({
    data: [
      {
        id: "cma6ik4de00001pcoljc5p09p",
        login: "admin",
        password_hash:
          "14a718222c52861e7afa41bc9435093ff34ef12894540de181c113a54056edd830bf287d6ef0b0e46776a066ac99cefea5c9e0de866b79b2df7b5ddab9397857",
        salt: "9ecbb7516aa92cd3cd23e267c5cab615",
        role: "admin",
        created_at: new Date(),
      },
      {
        id: "cma6im2mz00021pco2eqt8yos",
        login: "users",
        password_hash:
          "a6bd0f4858acacee1e39fb55be4398ade85a75227815336735e5ec411bc000f149a119186e604dc3a4c1a29ac9f2e7ac70e7bf7871ca91c5fc939864ae1d104d",
        salt: "a7190cb92cebceb3f92918561a303b5d",
        role: "user",
        created_at: new Date(),
      },
      {
        id: "cmaaynjb800001p8cpcpd16s1",
        login: "manager",
        password_hash:
          "4bbc87eb5e0c4d5c7d68146816fabbc40f7aac64d490373302aa803f9c5e008fe3f21ef4bc7f00aef3d747a075b7f5a450ef3c7dfb4899a8dd8cf3d06e9db1b1",
        salt: "f49ff244eb8795cea28c2dc4664a5776",
        role: "manager",
        created_at: new Date(),
      },
    ],
  });

  await prisma.user_profile.createMany({
    data: [
      {
        id: cuid(),
        phone: "+79532042320",
        email: "smxxtdzmail@gmail.com",
        name: "Дмитрий",
        last_name: "Спицын",
        user_id: "cma6ik4de00001pcoljc5p09p",
      },
      {
        id: cuid(),
        phone: " ",
        email: "",
        name: "",
        last_name: "",
        user_id: "cma6im2mz00021pco2eqt8yos",
      },
      {
        id: cuid(),
        phone: " ",
        email: "",
        name: "",
        last_name: "",
        user_id: "cmaaynjb800001p8cpcpd16s1",
      },
    ],
  });
}

async function fillReferenceData() {
  await prisma.ref_cargo_act_in_status.createMany({
    data: [
      { status_name: "Оформлен" },
      { status_name: "В пути" },
      { status_name: "Прибыл" },
      { status_name: "На складе" },
      { status_name: "Завершён" },
    ],
  });

  await prisma.ref_cargo.createMany({
    data: [
      { cargo_name: "Уголь", add_info: "" },
      { cargo_name: "Песок", add_info: "" },
      { cargo_name: "Железная руда", add_info: "" },
      { cargo_name: "Щебень", add_info: "" },
      { cargo_name: "Цемент", add_info: "" },
    ],
  });

  await prisma.ref_wagon.createMany({
    data: [
      { wagon_number: 1001, wagon_type: "крытый", add_info: "" },
      { wagon_number: 1002, wagon_type: "полувагон", add_info: "" },
      { wagon_number: 1003, wagon_type: "крытый", add_info: "" },
      { wagon_number: 1004, wagon_type: "платформа", add_info: "" },
      { wagon_number: 1005, wagon_type: "полувагон", add_info: "" },
    ],
  });

  await prisma.ref_vessel.createMany({
    data: [
      {
        vessel_name: "Судно-1",
        user_id: "cma6ik4de00001pcoljc5p09p",
        add_info: "",
      },
      {
        vessel_name: "Судно-2",
        user_id: "cma6ik4de00001pcoljc5p09p",
        add_info: "",
      },
      {
        vessel_name: "Судно-3",
        user_id: "cma6ik4de00001pcoljc5p09p",
        add_info: "",
      },
      {
        vessel_name: "Судно-4",
        user_id: "cma6ik4de00001pcoljc5p09p",
        add_info: "",
      },
      {
        vessel_name: "Судно-5",
        user_id: "cma6ik4de00001pcoljc5p09p",
        add_info: "",
      },
    ],
  });

  await prisma.ref_warehouse.createMany({
    data: [
      { warehouse_number: 1, warehouse_type: "Открытый", add_info: "" },
      { warehouse_number: 2, warehouse_type: "Закрытый", add_info: "" },
    ],
  });

  await prisma.ref_shipper.createMany({
    data: [
      {
        shipper_name: "Отправитель А",
        add_info: "",
        contact: "+79025554210",
        user_id: "cma6ik4de00001pcoljc5p09p", // admin
      },
      {
        shipper_name: "Отправитель Б",
        add_info: "",
        contact: "+79782349858",
        user_id: "cmaaynjb800001p8cpcpd16s1", // manager
      },
    ],
  });

  await prisma.ref_consignee.createMany({
    data: [
      {
        consignee_name: "Грузополучатель А",
        add_info: "",
        contact: "+79096565742",
        user_id: "cma6ik4de00001pcoljc5p09p",
      },
      {
        consignee_name: "Грузополучатель Б",
        add_info: "",
        contact: "+79503948584",
        user_id: "cmaaynjb800001p8cpcpd16s1",
      },
    ],
  });
}

async function main() {
  await createUsersAndProfiles();
  await fillReferenceData();
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
