import { db } from "../db/db.js";

const goToHome = "http://localhost:3000/";
const message = "Something goes wrong...";

// Get Salaries employees from table 'employee'
export const getAllSalaryEmployees = async (req, res) => {
    try {
        const [searchSalaryEmployees] = await db.query(
            "SELECT e.employee_id, e.first_name, e.last_name, e.salary FROM employee e;"
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
                SELECT e.employee_id, e.first_name, e.last_name, e.salary, ct.country, c.city, a.street, e.email
                FROM city c 
                INNER JOIN country ct ON c.country_id = ct.country_id
                INNER JOIN address a ON c.country_id = a.city_id
                INNER JOIN employee e ON c.country_id = e.address_id
                ORDER BY e.employee_id ASC;
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
                SELECT e.first_name, e.last_name, a.street, e.email
                FROM address a
                INNER JOIN employee e ON e.address_id = a.address_id;
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
    console.log(name);
    try {
        const [searchByName] = await db.query(
            `
                SELECT e.employee_id, e.first_name, e.last_name, e.salary 
                FROM employee e 
                WHERE e.first_name = ?;
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

// Update datas employees like first name, last name email and salary
export const updateEmployee = async (req, res) => {
    const { nameParam } = req.params;
    // console.log(nameParam)
    const {
        employeeFirstName,
        employeeLastName,
        employeeEmail,
        employeeSalary,
    } = req.body;

    console.log(`
        first_name: ${employeeFirstName}
        last_name: ${employeeLastName}
        email: ${employeeEmail}
        salary: ${employeeSalary}
    `)

    try {
        const [updateEmployeeQuery] = await db.query(
            `
            UPDATE employee SET
            first_name = IFNULL(?, first_name), 
            last_name = IFNULL(?, last_name), 
            email = IFNULL(?, email), 
            salary = IFNULL(?, salary)
            WHERE first_name = ?;
            `,
            [ employeeFirstName, employeeLastName, employeeEmail, employeeSalary, nameParam ]
        );

        if (updateEmployeeQuery.affectedRows === 0) return res.json(404).json(message)

        const [newData] = await db.query(
            "SELECT * FROM EMPLOYEE WHERE first_name = ?",
            [nameParam]
        )

        res.json({
            goToHome,
            newData
        });

    } catch (error) {
        return res.json(message);
    }
};
