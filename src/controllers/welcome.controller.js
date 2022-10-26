
export const welcome = (req, res) => {
    res.json({
        title: 'Welcome to datas-employee app!',
        greet: "Hello, I'm Marco Bravo Castillo a Back-End Developer Junior",
        routes: {
            getAllSalaryEmployees: {
                path: "http://localhost:3000/api/allsalaryemployees",
                description: "Get Salaries employees from table 'employee'"
            },
            getAllDataEmployees: {
                path: "http://localhost:3000/api/alldataemployees",
                description: "Get all datas of all employees"
            },
            getAddressEmployees: {
                path: "http://localhost:3000/api/alladdressemployees",
                description: "Get full name, address and email of all employess"
            },
            getSalaryByName: {
                path: "http://localhost:3000/api/salarybyname",
                description: "Get id employee, full name and salary of an employee by their name",
                paramsName: "/joe, /mathias or /ryan"
            }
        }
    })
}