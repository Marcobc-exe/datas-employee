create database if not exists employeedb;
use employeedb;

create table country (
	country_id smallint not null auto_increment,
    country varchar(50) not null,
    primary key(country_id)
);

create table city (
	city_id smallint not null auto_increment,
    city varchar(50) not null,
    country_id smallint not null,
    primary key(city_id),
    foreign key(country_id) references country(country_id)
);

create table address (
	address_id smallint not null auto_increment,
    street varchar(150) not null,
    city_id smallint not null,
    primary key(address_id),
    foreign key (city_id) references city(city_id)
);

create table employee (
    employee_id smallint not null auto_increment,
    first_name varchar(50) not null,
    last_name varchar(50) not null,
    email varchar(255) not null,
    salary int not null,
    address_id smallint not null,
    primary key (employee_id),
    foreign key (address_id) references address(address_id)
);

insert into country (country_id, country) values
	(1, 'Canada'),
    (2, 'Chile'),
	(3, 'United Stated');

select * from country;

insert into city (city_id, city, country_id) values
	(1, 'Toronto', 1),
    (2, 'Santiago', 2),
    (3, 'New York', 3);

select * from city;

insert into address (address_id, street, city_id) values
    (1, 'main frozen av. street 730',1),
    (2, 'avenida providencia 6014', 2),
    (3, 'main york av. street 290', 3);

select * from address;

insert into employee (employee_id, first_name, last_name, email, salary, address_id) values
    (1, 'Joe','Brown', 'joe@gmail.com' , 7500, 2),
    (2, 'Ryan','Red', 'ryan@gmail.com' , 8000, 3),
    (3, 'Mathias','Math', 'math@gmail.com' , 10000, 1);

select * from employee;

# Get id employee, your fullname, country, city and street
select e.employee_id, e.first_name, e.last_name, e.salary, ct.country, c.city, a.street, e.email
from city c
inner join country ct on c.country_id = ct.country_id
inner join address a on c.country_id = a.city_id
inner join employee e on c.country_id = e.address_id
order by e.employee_id asc;

# Get full name and salary of all employees
select e.first_name, e.last_name, e.salary from employee e;

# Get full name, address and email of all employess
select e.first_name, e.last_name, a.street, e.email
from address a
inner join employee e on a.address_id = e.address_id
inner join city c on c.city_id = e.address_id;

# Get id employee, full name and salary of an employee by their name
select e.employee_id, e.first_name, e.last_name, e.salary 
from employee e 
where e.first_name = 'joe';






