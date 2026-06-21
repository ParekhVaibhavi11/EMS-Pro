import {
  getDashboardStatsService, getDetailedReportsService
}
from "./report.service.js";

export const getDashboardStats =
  async (req, res) => {

    try {

      const stats =
        await getDashboardStatsService();

      res.status(200).json({

        success: true,

        data: stats

      });

    } catch (error) {

      res.status(500).json({

        success: false,

        message:
          error.message

      });

    }

  };

  export const getDetailedReports =
  async (req, res) => {

    try {

      const report =
        await getDetailedReportsService();

      res.status(200).json({
        success: true,
        data: report
      });

    } catch (error) {

      res.status(500).json({
        success: false,
        message:
          error.message
      });

    }

  };