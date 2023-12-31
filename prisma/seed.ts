import prisma from "../src/prisma";
import { hash } from "bcrypt";

async function main() {
  const pwd = process.env.SEEDPWD;
  const passwordHash = await hash(pwd as string, 8);
  await prisma.agent.create({
    data: {
      name: "admin",
      password: passwordHash,
      clients: [],
    },
  });
  console.log("[INFO] Admin successfully created!");
}

main();
