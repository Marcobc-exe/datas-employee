
export const welcome = (req, res) => {
    res.json({
        title: 'Welcome to datas-employee app!',
        greet: "Hello, I'm Marco Bravo Castillo a Back-End Developer Junior",
        routes: {
            getAllSalaryEmployees: {
                description: "Get Salaries employees from table 'employee'",
                path: "http://localhost:3000/api/allsalaryemployees"
            },
            getAllDataEmployees: {
                description: "Get all datas of all employees",
                path: "http://localhost:3000/api/alldataemployees"
            },
            getAddressEmployees: {
                description: "Get full name, address and email of all employess",
                path: "http://localhost:3000/api/alladdressemployees"
            },
            getSalaryByName: {
                description: "Get id employee, full name and salary of an employee by their name",
                path: "http://localhost:3000/api/salarybyname"
            }
        }
    })
}