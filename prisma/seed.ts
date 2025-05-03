import { PrismaClient } from "@prisma/client";
import cuid from "cuid";
const prisma = new PrismaClient();
async function main() {
  await prisma.user.create({
    data: {
      id: "cma6ik4de00001pcoljc5p09p",
      login: "admin",
      password_hash:
        "14a718222c52861e7afa41bc9435093ff34ef12894540de181c113a54056edd830bf287d6ef0b0e46776a066ac99cefea5c9e0de866b79b2df7b5ddab9397857",
      salt: "9ecbb7516aa92cd3cd23e267c5cab615",
      role: "admin",
      created_at: new Date(),
    },
  });
  await prisma.user.create({
    data: {
      id: "cma6im2mz00021pco2eqt8yos",
      login: "users",
      password_hash:
        "a6bd0f4858acacee1e39fb55be4398ade85a75227815336735e5ec411bc000f149a119186e604dc3a4c1a29ac9f2e7ac70e7bf7871ca91c5fc939864ae1d104d",
      salt: "a7190cb92cebceb3f92918561a303b5d",
      role: "user",
      created_at: new Date(),
    },
  });
  await prisma.userProfile.create({
    data: {
      id: cuid(),
      phone: "+79532042320",
      email: "smxxtdzmail@gmail.com",
      name: "Dmitriy",
      last_name: "Spitsyn",
      user_id: "cma6ik4de00001pcoljc5p09p",
    },
  });
  await prisma.userProfile.create({
    data: {
      id: cuid(),
      phone: " ",
      email: "",
      name: "",
      last_name: "",
      user_id: "cma6im2mz00021pco2eqt8yos",
    },
  });
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
