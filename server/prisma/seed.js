import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

async function main() {

  const existingAdmin =
    await prisma.user.findUnique({
      where: {
        email: "admin@ems.com"
      }
    });

  if (existingAdmin) {
    console.log("Admin already exists");
    return;
  }

  const hashedPassword =
    await bcrypt.hash("Admin@123", 10);

  const admin =
    await prisma.user.create({
      data: {
        username: "admin",
        email: "admin@ems.com",
        password: hashedPassword,
        role: "ADMIN"
      }
    });

  console.log(
    "Admin Created Successfully"
  );

  console.log(admin);
}

main()
  .catch((error) => {
    console.error(error);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });