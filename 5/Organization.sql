USE master;
GO
IF DB_ID (N'Organization') IS NOT NULL
DROP DATABASE Organization;
GO
CREATE DATABASE Organization;
GO
USE Organization;
Go
 DROP TABLE IF EXISTS Department;
CREATE TABLE Department
(
Id int NOT NULL IDENTITY CONSTRAINT PK_Department PRIMARY KEY,
Name varchar(20),
Address varchar(100),
)

 DROP TABLE IF EXISTS Employee;
CREATE TABLE Employee
(
Id int NOT NULL IDENTITY CONSTRAINT PK_Employee PRIMARY KEY,
FullName varchar(20),
Burthday datetime,
)

DROP TABLE IF EXISTS Job;
CREATE TABLE Job
(
Id int NOT NULL IDENTITY CONSTRAINT PK_Job PRIMARY KEY,
Name varchar(20),
MinEarn smallmoney,
)

DROP TABLE IF EXISTS Career;
CREATE TABLE Career
(
Id int NOT NULL IDENTITY CONSTRAINT PK_Career PRIMARY KEY,
JobId int NOT NULL REFERENCES Job(Id),
EmployeeId int NOT NULL REFERENCES Employee(Id),
DepartmentId int NOT NULL REFERENCES Department(Id),
Hire datetime NOT NULL,
Fire datetime NULL
)

DROP TABLE IF EXISTS Salary;
CREATE TABLE Salary
(
Id int NOT NULL IDENTITY CONSTRAINT PK_Salary PRIMARY KEY,
EmployeeId int NOT NULL REFERENCES Employee(Id),
Month tinyint NOT NULL CHECK(Month >0 AND Month < 100),
Year smallint NOT NULL CHECK(Year >2002 AND Year < 2016),
Earn money NOT NULL 
)
