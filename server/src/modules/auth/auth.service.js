import bcrypt from "bcrypt";
import prisma from "../../config/prisma.js";
import { generateToken } from "../../utils/jwt.js";

export const loginUser = async (email, password) => {
  const user = await prisma.user.findUnique({
    where: {
      email
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

 const safeUser = {
  id: user.id,
  username: user.username,
  email: user.email,
  role: user.role
};

return {
  user: safeUser,
  token
};
};