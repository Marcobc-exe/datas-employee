import { Router } from "express";
import { getAllEmployees } from "../controllers/employees.controller.js";

const router = Router();

router.get("/allemployees", getAllEmployees);

export default router;
