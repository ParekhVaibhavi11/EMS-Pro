import prisma from "../../config/prisma.js";
import bcrypt from "bcryptjs";

export const getProfileService =
  async (userId) => {

    return prisma.user.findUnique({

      where: {
        id: userId
      },

      select: {
        id: true,
        username: true,
        email: true,
        profileImage: true,
        role: true
      }

    });

};

export const updateProfileService =
  async (
    userId,
    data
  ) => {

    return prisma.user.update({

      where: {
        id: userId
      },

      data: {

        username:
          data.username,

        email:
          data.email,

        profileImage:
          data.profileImage

      }

    });

};

export const changePasswordService =
  async (
    userId,
    currentPassword,
    newPassword
  ) => {

    const user =
      await prisma.user.findUnique({

        where: {
          id: userId
        }

      });

    const valid =
      await bcrypt.compare(
        currentPassword,
        user.password
      );

    if (!valid) {

      throw new Error(
        "Current password incorrect"
      );

    }

    const hashed =
      await bcrypt.hash(
        newPassword,
        10
      );

    return prisma.user.update({

      where: {
        id: userId
      },

      data: {
        password: hashed
      }

    });

};

export const getSystemSettingsService =
  async () => {

    let settings =
      await prisma.systemSettings.findFirst();

    if (!settings) {

      settings =
        await prisma.systemSettings.create({
          data: {}
        });

    }

    return settings;

};

export const updateSystemSettingsService =
  async (data) => {

    const settings =
      await prisma.systemSettings.findFirst();

    return prisma.systemSettings.update({

      where: {
        id: settings.id
      },

      data

    });

};