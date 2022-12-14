import { Router } from "express";
import {
    getAllSalaryEmployees,
    getAllDataEmployees,
    getAddressEmployees,
    getSalaryByName,
    updateEmployee
} from "../controllers/employees.controller.js";
import {welcome} from '../controllers/index.controller.js'

const router = Router();

router.get('/welcome', welcome)
router.get("/allsalaryemployees", getAllSalaryEmployees);
router.get("/alldataemployees", getAllDataEmployees);
router.get("/alladdressemployees", getAddressEmployees);
router.get("/salarybyname/:name", getSalaryByName);

router.patch("/updateEmployee/:nameParam", updateEmployee);

export default router;
