import { db } from "../db/db.js";

const goToHome = "http://localhost:3000/";
const message = "Something goes wrong...";

// Get Salaries employees from table 'employee'
export const getAllSalaryEmployees = async (req, res) => {
    try {
        const [searchSalaryEmployees] = await db.query(
            "select e.employee_id, e.first_name, e.last_name, e.salary from employee e;"
        );
        res.json({
            goToHome,
            searchSalaryEmployees,
        });
    } catch (error) {
        return res.json(message);
    }
};

// Get all datas of all employees
export const getAllDataEmployees = async (req, res) => {
    try {
        const [searchAllDataEmployees] = await db.query(
            `
                select e.employee_id, e.first_name, e.last_name, e.salary, ct.country, c.city, a.street, e.email
                from city c 
                inner join country ct on c.country_id = ct.country_id
                inner join address a on c.country_id = a.city_id
                inner join employee e on c.country_id = e.address_id
                order by e.employee_id asc;
            `
        );
        res.json({
            goToHome,
            searchAllDataEmployees,
        });
    } catch (error) {
        return res.json(message);
    }
};

// Get full name, address and email of all employess
export const getAddressEmployees = async (req, res) => {
    try {
        const [searchAddressEmployee] = await db.query(
            `
                select e.first_name, e.last_name, a.street, e.email
                from address a
                inner join employee e on e.address_id = a.address_id;
            `
        );
        res.json({
            goToHome,
            searchAddressEmployee,
        });
    } catch (error) {
        return res.json(message);
    }
};

// Get id employee, full name and salary of an employee by their name
export const getSalaryByName = async (req, res) => {
    const name = req.params.name;
    console.log(name)
    try {
        const [searchByName] = await db.query(
            `
                select e.employee_id, e.first_name, e.last_name, e.salary 
                from employee e 
                where e.first_name = ?;
            `,
            [name]
        );
        res.json({
            goToHome,
            searchByName,
        });
    } catch (error) {
        return res.json(message);
    }
};
