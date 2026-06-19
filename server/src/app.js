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

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "EMS API Running Successfully"
  });
});

export default app;