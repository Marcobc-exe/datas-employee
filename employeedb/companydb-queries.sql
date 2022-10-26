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
    full_name varchar(45) not null,
    email varchar(255) not null,
    salary int not null,
    address_id smallint not null,
    primary key (employee_id),
    foreign key (address_id) references address(address_id)
);

insert into country (country) values
	('Canada'),
    ('Chile'),
	('United Stated');

select * from city;

insert into city (city, country_id) values
	('Toronto', 1),
    ('Santiago', 2),
    ('New York', 3);

insert into address (street, city_id) values
    ('main frozen av. street 730',1),
    ('main york av. street 290', 3),
    ('avenida providencia 6014', 2);

insert into employee (full_name, email, salary, address_id) values
    ('Joe Brown','joe@gmail.com' , 7500, 2),
    ('Marco del Arco','marco@gmail.com' , 8000, 3),
    ('Mathias Math','math@gmail.com' , 10000, 1);

# Get id employee, your fullname, country, city and street
select e.employee_id, e.full_name, ct.country, c.city, a.street 
from city c 
inner join country ct on c.country_id = ct.country_id
inner join address a on c.country_id = a.city_id
inner join employee e on c.country_id = e.address_id
order by e.employee_id asc;

select e.full_name, e.email from employee e;
    
    
    
