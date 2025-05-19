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

async function fillMainData() {
  // Морские рейсы
  await prisma.vessel_voyage.createMany({
    data: [
      {
        estimated_date_departure: new Date("2025-06-01"),
        vessel_id: 1,
        user_id: "cma6ik4de00001pcoljc5p09p",
      },
      {
        estimated_date_departure: new Date("2025-06-05"),
        vessel_id: 2,
        user_id: "cma6ik4de00001pcoljc5p09p",
      },
      {
        estimated_date_departure: new Date("2025-06-10"),
        vessel_id: 3,
        user_id: "cma6ik4de00001pcoljc5p09p",
      },
      {
        estimated_date_departure: new Date("2025-06-15"),
        vessel_id: 4,
        user_id: "cma6ik4de00001pcoljc5p09p",
      },
      {
        estimated_date_departure: new Date("2025-06-20"),
        vessel_id: 5,
        user_id: "cma6ik4de00001pcoljc5p09p",
      },
    ],
  });

  // Приемные акты
  await prisma.cargo_act_in.createMany({
    data: [
      {
        act_in_number: 5001,
        act_in_date: new Date("2025-05-01"),
        status_id: 1,
        shipper_id: 1,
        consignee_id: 1,
        rail_waybill: 7001,
        user_id: "cma6ik4de00001pcoljc5p09p",
      },
      {
        act_in_number: 5002,
        act_in_date: new Date("2025-05-02"),
        status_id: 2,
        shipper_id: 2,
        consignee_id: 2,
        rail_waybill: 7002,
        user_id: "cma6ik4de00001pcoljc5p09p",
      },
      {
        act_in_number: 5003,
        act_in_date: new Date("2025-05-03"),
        status_id: 3,
        shipper_id: 3,
        consignee_id: 3,
        rail_waybill: 7003,
        user_id: "cma6ik4de00001pcoljc5p09p",
      },
      {
        act_in_number: 5004,
        act_in_date: new Date("2025-05-04"),
        status_id: 4,
        shipper_id: 4,
        consignee_id: 4,
        rail_waybill: 7004,
        user_id: "cma6ik4de00001pcoljc5p09p",
      },
      {
        act_in_number: 5005,
        act_in_date: new Date("2025-05-05"),
        status_id: 5,
        shipper_id: 5,
        consignee_id: 5,
        rail_waybill: 7005,
        user_id: "cma6ik4de00001pcoljc5p09p",
      },
    ],
  });

  // Приход груза
  await prisma.cargo_in.createMany({
    data: [
      {
        cargo_id: 1,
        cargo_act_in_id: 1,
        warehouse_id: 1,
        wagon_id: 1,
        user_id: "cma6ik4de00001pcoljc5p09p",
        weight_brutto_start: 12000,
        weight_brutto_rest: 11500,
      },
      {
        cargo_id: 2,
        cargo_act_in_id: 2,
        warehouse_id: 2,
        wagon_id: 2,
        user_id: "cma6ik4de00001pcoljc5p09p",
        weight_brutto_start: 15000,
        weight_brutto_rest: 14000,
      },
      {
        cargo_id: 3,
        cargo_act_in_id: 3,
        warehouse_id: 3,
        wagon_id: 3,
        user_id: "cma6ik4de00001pcoljc5p09p",
        weight_brutto_start: 11000,
        weight_brutto_rest: 10500,
      },
      {
        cargo_id: 4,
        cargo_act_in_id: 4,
        warehouse_id: 4,
        wagon_id: 4,
        user_id: "cma6ik4de00001pcoljc5p09p",
        weight_brutto_start: 13000,
        weight_brutto_rest: 12500,
      },
      {
        cargo_id: 5,
        cargo_act_in_id: 5,
        warehouse_id: 5,
        wagon_id: 5,
        user_id: "cma6ik4de00001pcoljc5p09p",
        weight_brutto_start: 14000,
        weight_brutto_rest: 13500,
      },
    ],
  });

  // Отгрузка груза
  await prisma.cargo_load.createMany({
    data: [
      {
        load_date: new Date("2025-06-01"),
        vessel_voyage_id: 1,
        cargo_act_in_id: 1,
        user_id: "cma6ik4de00001pcoljc5p09p",
        weight_brutto: 11000,
        shipper_id: 1,
        consignee_id: 1,
      },
      {
        load_date: new Date("2025-06-05"),
        vessel_voyage_id: 2,
        cargo_act_in_id: 2,
        user_id: "cma6ik4de00001pcoljc5p09p",
        weight_brutto: 14000,
        shipper_id: 2,
        consignee_id: 2,
      },
      {
        load_date: new Date("2025-06-10"),
        vessel_voyage_id: 3,
        cargo_act_in_id: 3,
        user_id: "cma6ik4de00001pcoljc5p09p",
        weight_brutto: 10500,
        shipper_id: 3,
        consignee_id: 3,
      },
      {
        load_date: new Date("2025-06-15"),
        vessel_voyage_id: 4,
        cargo_act_in_id: 4,
        user_id: "cma6ik4de00001pcoljc5p09p",
        weight_brutto: 12500,
        shipper_id: 4,
        consignee_id: 4,
      },
      {
        load_date: new Date("2025-06-20"),
        vessel_voyage_id: 5,
        cargo_act_in_id: 5,
        user_id: "cma6ik4de00001pcoljc5p09p",
        weight_brutto: 13500,
        shipper_id: 5,
        consignee_id: 5,
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
      { cargo_name: "Железная руда", add_info: "Крупные поставки из Карелии" },
      { cargo_name: "Уголь каменный", add_info: "Кузбасс" },
      {
        cargo_name: "Бокситы",
        add_info: "Используются для производства алюминия",
      },
      { cargo_name: "Фосфориты", add_info: "Сырьё для удобрений" },
      { cargo_name: "Медная руда", add_info: "Поставки с Урала" },
      { cargo_name: "Цинковая руда", add_info: "Применяется в металлургии" },
      { cargo_name: "Никелевая руда", add_info: "Поставки из Норильска" },
      { cargo_name: "Известняк", add_info: "Вспомогательное сырьё" },
      { cargo_name: "Щебень", add_info: "Для строительства" },
      { cargo_name: "Цемент", add_info: "Для укрепления шахт" },
    ],
  });

  await prisma.ref_wagon.createMany({
    data: [
      {
        wagon_number: 301245,
        wagon_type: "крытый",
        add_info: "Для ценных грузов",
      },
      {
        wagon_number: 301310,
        wagon_type: "полувагон",
        add_info: "Открытый тип",
      },
      {
        wagon_number: 301427,
        wagon_type: "платформа",
        add_info: "Для контейнеров",
      },
      {
        wagon_number: 301512,
        wagon_type: "цементовоз",
        add_info: "Для цемента",
      },
      {
        wagon_number: 301634,
        wagon_type: "хоппер",
        add_info: "Для сыпучих материалов",
      },
      { wagon_number: 301789, wagon_type: "крытый", add_info: "Изолированный" },
      {
        wagon_number: 301845,
        wagon_type: "полувагон",
        add_info: "Большой объём",
      },
      { wagon_number: 301923, wagon_type: "платформа", add_info: "Без бортов" },
      { wagon_number: 302001, wagon_type: "крытый", add_info: "С вентиляцией" },
      {
        wagon_number: 302120,
        wagon_type: "хоппер",
        add_info: "С нижней выгрузкой",
      },
    ],
  });

  await prisma.ref_vessel.createMany({
    data: [
      { vessel_name: "Сормовский-3050", add_info: "Река-море" },
      { vessel_name: "Волго-Балт-199", add_info: "Грузоподъёмность 3000 т" },
      { vessel_name: "Амур-2515", add_info: "Навигация по рекам" },
      { vessel_name: "Снегирь", add_info: "Современное оборудование" },
      { vessel_name: "Волго-Дон-5013", add_info: "Частные перевозки" },
      { vessel_name: "Балтийск", add_info: "Порт приписки — Санкт-Петербург" },
      { vessel_name: "Инженер Карев", add_info: "Минеральные ресурсы" },
      { vessel_name: "Невский-36", add_info: "Работа в зимних условиях" },
      { vessel_name: "Капитан Пушкарёв", add_info: "Высокая скорость" },
      { vessel_name: "Механик Котов", add_info: "Грузовой отсек 4000 т" },
    ],
  });

  await prisma.ref_warehouse.createMany({
    data: [
      {
        warehouse_number: 101,
        warehouse_type: "Закрытый",
        add_info: "Для хранения угля",
      },
      {
        warehouse_number: 102,
        warehouse_type: "Открытый",
        add_info: "Щебень и песок",
      },
      { warehouse_number: 103, warehouse_type: "Закрытый", add_info: "Руда" },
      {
        warehouse_number: 104,
        warehouse_type: "Открытый",
        add_info: "Для крупногабаритных грузов",
      },
      {
        warehouse_number: 105,
        warehouse_type: "Закрытый",
        add_info: "Температурный режим",
      },
      {
        warehouse_number: 106,
        warehouse_type: "Открытый",
        add_info: "Ближайший к причалу",
      },
      { warehouse_number: 107, warehouse_type: "Закрытый", add_info: "Цемент" },
      {
        warehouse_number: 108,
        warehouse_type: "Открытый",
        add_info: "Фосфориты",
      },
      {
        warehouse_number: 109,
        warehouse_type: "Закрытый",
        add_info: "Высокий уровень безопасности",
      },
      {
        warehouse_number: 110,
        warehouse_type: "Открытый",
        add_info: "Временное хранение",
      },
    ],
  });

  await prisma.ref_shipper.createMany({
    data: [
      {
        shipper_name: "МетИнвест",
        add_info: "Железная руда",
        contact: "+7 (495) 111-22-33",
      },
      {
        shipper_name: "СУЭК",
        add_info: "Уголь",
        contact: "+7 (495) 234-44-55",
      },
      {
        shipper_name: "Рудник Северный",
        add_info: "Медь",
        contact: "+7 (812) 345-67-89",
      },
      {
        shipper_name: "ФосАгро",
        add_info: "Фосфориты",
        contact: "+7 (495) 987-65-43",
      },
      {
        shipper_name: "Норникель",
        add_info: "Никель",
        contact: "+7 (495) 101-20-30",
      },
      {
        shipper_name: "СибЦемент",
        add_info: "Цемент",
        contact: "+7 (383) 111-22-33",
      },
      {
        shipper_name: "КарелРуда",
        add_info: "Железная руда",
        contact: "+7 (814) 222-33-44",
      },
      {
        shipper_name: "СтройПром",
        add_info: "Щебень",
        contact: "+7 (812) 555-66-77",
      },
      {
        shipper_name: "УралМинерал",
        add_info: "Цинк",
        contact: "+7 (343) 888-99-00",
      },
      {
        shipper_name: "ЮжПолимет",
        add_info: "Бокситы",
        contact: "+7 (861) 999-88-77",
      },
    ],
  });

  await prisma.ref_consignee.createMany({
    data: [
      {
        consignee_name: "СеверСталь",
        add_info: "Приём руды",
        contact: "+7 (820) 123-45-67",
      },
      {
        consignee_name: "ЕВРАЗ",
        add_info: "Уголь и руда",
        contact: "+7 (495) 234-56-78",
      },
      {
        consignee_name: "РусАл",
        add_info: "Бокситы",
        contact: "+7 (391) 876-54-32",
      },
      {
        consignee_name: "ФосАгро-М",
        add_info: "Фосфориты",
        contact: "+7 (495) 765-43-21",
      },
      {
        consignee_name: "ЧТПЗ",
        add_info: "Цинк",
        contact: "+7 (351) 654-32-10",
      },
      {
        consignee_name: "КНАУФ",
        add_info: "Щебень и цемент",
        contact: "+7 (812) 321-00-12",
      },
      {
        consignee_name: "РостЦемент",
        add_info: "Цемент",
        contact: "+7 (863) 456-78-90",
      },
      {
        consignee_name: "УралХим",
        add_info: "Известняк",
        contact: "+7 (342) 111-22-33",
      },
      {
        consignee_name: "Мечел",
        add_info: "Медная руда",
        contact: "+7 (495) 998-77-66",
      },
      {
        consignee_name: "РосГео",
        add_info: "Фосфориты и уголь",
        contact: "+7 (495) 777-66-55",
      },
    ],
  });
}

async function main() {
  await createUsersAndProfiles();
  await fillReferenceData();
  await fillMainData();
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
