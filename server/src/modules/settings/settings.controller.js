import {
  getProfileService,
  updateProfileService,
  changePasswordService,
  getSystemSettingsService,
  updateSystemSettingsService
}
from "./settings.service.js";

export const getProfile =
  async (req, res) => {

    const profile =
      await getProfileService(
        req.user.id
      );

    res.json({
      success: true,
      data: profile
    });

};

export const updateProfile =
  async (req, res) => {

    const profile =
      await updateProfileService(
        req.user.id,
        req.body
      );

    res.json({
      success: true,
      data: profile
    });

};

export const changePassword =
  async (req, res) => {

    try {

      await changePasswordService(
        req.user.id,
        req.body.currentPassword,
        req.body.newPassword
      );

      res.json({
        success: true
      });

    } catch (error) {

      res.status(400).json({

        success: false,

        message:
          error.message

      });

    }

};

export const getSystemSettings =
  async (req, res) => {

    const settings =
      await getSystemSettingsService();

    res.json({

      success: true,

      data: settings

    });

};

export const updateSystemSettings =
  async (req, res) => {

    const settings =
      await updateSystemSettingsService(
        req.body
      );

    res.json({

      success: true,

      data: settings

    });

};