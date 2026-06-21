import bcrypt from "bcrypt";
import prisma from "../../config/prisma.js";
import { generateToken } from "../../utils/jwt.js";

export const loginUser = async (email, password) => {
  const user =
  await prisma.user.findFirst({

    where: {

      OR: [

        {
          email
        },

        {
          username:
            email
        }

      ]

    }

  });

  if (!user) {
    throw new Error("Invalid credentials");
  }

  const isMatch = await bcrypt.compare(
    password,
    user.password
  );

  if (!isMatch) {
    throw new Error("Invalid credentials");
  }

  const token = generateToken(user);

  const employee =
  await prisma.employee.findUnique({

    where: {
      userId: user.id
    },

    select: {

      firstName: true,

      lastName: true,

      employeeCode: true

    }

  });

const safeUser = {

  id: user.id,

  username: user.username,

  email: user.email,

  role: user.role,

  mustChangePassword:
    user.mustChangePassword,

  profileImage:
    user.profileImage,

  firstName:
    employee?.firstName || null,

  lastName:
    employee?.lastName || null,

  employeeCode:
    employee?.employeeCode || null

};

return {
  user: safeUser,
  token
};
};