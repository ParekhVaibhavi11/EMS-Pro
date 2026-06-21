import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import authRoutes from "./modules/auth/auth.routes.js";
import testRoutes from "./middleware/test.routes.js";
import employeeRoutes
from "./modules/employee/employee.routes.js";
import departmentRoutes
from "./modules/department/department.routes.js";
import managerRoutes
from "./modules/manager/manager.routes.js";
import attendanceRoutes
from "./modules/attendance/attendance.routes.js";
import leaveRoutes
from "./modules/leave/leave.routes.js";
import payrollRoutes
from "./modules/payroll/payroll.routes.js";
import reportRoutes
from "./modules/report/report.routes.js";
import settingsRoutes
from "./modules/settings/settings.routes.js";

import employeePortalRoutes
from "./modules/employeePortal/employeePortal.routes.js";
import managerPortalRoutes
from "./modules/managerPortal/managerPortal.routes.js";

const app = express();

app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan("dev"));
app.use(
  "/api/auth",
  authRoutes
);

app.use(
  "/api/test",
  testRoutes
);
app.use(
  "/api/employees",
  employeeRoutes
);
app.use(
  "/api/departments",
  departmentRoutes
);

app.use(
  "/api/managers",
  managerRoutes
);

app.use(
  "/api/attendance",
  attendanceRoutes
);

app.use(
  "/api/leaves",
  leaveRoutes
);

app.use(
  "/api/payroll",
  payrollRoutes
);

app.use(
  "/api/reports",
  reportRoutes
);

app.use(
  "/api/settings",
  settingsRoutes
);


app.use(
  "/api/employee",
  employeePortalRoutes
);

app.use(
  "/api/manager",
  managerPortalRoutes
);

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "EMS API Running Successfully"
  });
});

export default app;