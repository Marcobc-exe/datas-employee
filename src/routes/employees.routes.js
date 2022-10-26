import { Router } from "express";
import {
    getAllSalaryEmployees,
    getAllDataEmployees,
    getAddressEmployees,
    getSalaryByName
} from "../controllers/employees.controller.js";

const router = Router();

router.get("/allsalaryemployees", getAllSalaryEmployees);
router.get("/alldataemployees", getAllDataEmployees);
router.get("/alladdressemployees", getAddressEmployees);
router.get("/salarybyname/:name", getSalaryByName);

export default router;
