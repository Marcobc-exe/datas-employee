Datas-employee is a Rest API developed using Node.js and Express where different types of queries to can be made to a database such as create, update, get an delete the data of the 3 employees registered in the db.

# Getting Started
First, run the development server: `npm run dev` <br>
Open http://localhost:3000 with your browser to see the result.

### Requirements
- Node v18.7.0
- npm v8.15.0
- MySQL v8.0.30
### Dependencies
- Express v4.18.2
- mysql2 v2.3.3
- Add this "type": "module" to your package.json
### Dev dependencies
- Nodemon v2.0.20
- logplease 2.0.20

# Preview query result
### Welcome
`http://localhost:3000/` <br>
<img src="https://github.com/Marcobc-exe/datas-employee/blob/master/img/welcome.png" width="800">

### Get all datas of all employees
`http://localhost:3000/api/alldataemployees` <br>
<img src="https://github.com/Marcobc-exe/datas-employee/blob/master/img/searchAlDataEmployees.png" width="500">

### Get Salaries employees from table 'employee'
`http://localhost:3000/api/allsalaryemployees` <br>
<img src="https://github.com/Marcobc-exe/datas-employee/blob/master/img/searchSalaryEmployees.png" width="500">

### Get id employee, full name and salary of an employee by their name
`http://localhost:3000/api/salarybyname` <br>
<img src="https://github.com/Marcobc-exe/datas-employee/blob/master/img/searchByName.png" width="500">

### 404 not found
<img src="https://github.com/Marcobc-exe/datas-employee/blob/master/img/404NotFound.png" width="500">
