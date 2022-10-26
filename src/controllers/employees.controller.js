import { db } from "../db/db.js";

// Get all employees with all their data
export const getAllEmployees = async (req, res) => {
    try {
        const [searchEmployees] = await db.query("SELECT * FROM employee;");
        res.json(searchEmployees)
        
    } catch (error) {
        return res.json({
            message: 'Something goes wrong...'
        })
    }
};
