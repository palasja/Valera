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
Burthday date,
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
Hire date NOT NULL,
Fire date NULL
)

DROP TABLE IF EXISTS Salary;
CREATE TABLE Salary
(
Id int NOT NULL IDENTITY CONSTRAINT PK_Salary PRIMARY KEY,
EmployeeId int NOT NULL REFERENCES Employee(Id),
Month tinyint NOT NULL CHECK(Month >0 AND Month < 13),
Year smallint NOT NULL CHECK(Year >2002 AND Year < 2016),
Earn money NOT NULL 
)

INSERT INTO Department (Name, Address) VALUES ('OSASFO Minsk', 'Minsk, Kalvariiskaya 17')
INSERT INTO Department (Name, Address) VALUES ('OSASFO Ghomel', 'Ghomel, Kommunarov 7')
INSERT INTO Department (Name, Address) VALUES ('Accounting', 'Minsk, Kalvariiskaya 17 k25')

INSERT INTO Employee (FullName, Burthday) VALUES ('Yakubenka Ivan', '1991-06-08')
INSERT INTO Employee (FullName, Burthday) VALUES ('Yatskov Valery', '1985-10-18')
INSERT INTO Employee (FullName, Burthday) VALUES ('Thugai Valery', '1986-11-22')
INSERT INTO Employee (FullName, Burthday) VALUES ('Pavlychenka Tatyana', '1978-02-26')
INSERT INTO Employee (FullName, Burthday) VALUES ('Yurkovskaya Galina', '1972-04-17')
INSERT INTO Employee (FullName, Burthday) VALUES ('Koltunov Aleksey', '1981-01-04')

INSERT INTO Job (Name, MinEarn) VALUES ('Head of department', '1500')
INSERT INTO Job (Name, MinEarn) VALUES ('Head of accounting', '1210')
INSERT INTO Job (Name, MinEarn) VALUES ('Accountment', '1100')
INSERT INTO Job (Name, MinEarn) VALUES ('Engineer', '1450')

INSERT INTO Career (JobId, EmployeeId, DepartmentId, Hire, Fire) VALUES (4, 1, 2, '2015-04-01', NULL)
INSERT INTO Career (JobId, EmployeeId, DepartmentId, Hire, Fire) VALUES (1, 2, 2, '2015-08-04', NULL)
INSERT INTO Career (JobId, EmployeeId, DepartmentId, Hire, Fire) VALUES (1, 3, 1, '2014-09-21', '2015-02-28')
INSERT INTO Career (JobId, EmployeeId, DepartmentId, Hire, Fire) VALUES (3, 4, 3, '2015-01-14', NULL)
INSERT INTO Career (JobId, EmployeeId, DepartmentId, Hire, Fire) VALUES (2, 5, 3, '2014-12-01', NULL)
INSERT INTO Career (JobId, EmployeeId, DepartmentId, Hire, Fire) VALUES (4, 6, 2, '2015-02-01', NULL)

INSERT INTO Salary (EmployeeId, Month, Year, Earn) VALUES (1, 4, 2015, 1510.5)
INSERT INTO Salary (EmployeeId, Month, Year, Earn) VALUES (1, 5, 2015, 1750.0)
INSERT INTO Salary (EmployeeId, Month, Year, Earn) VALUES (1, 6, 2015, 1450.14)
INSERT INTO Salary (EmployeeId, Month, Year, Earn) VALUES (1, 7, 2015, 2100.5)
INSERT INTO Salary (EmployeeId, Month, Year, Earn) VALUES (1, 8, 2015, 2454.78)
INSERT INTO Salary (EmployeeId, Month, Year, Earn) VALUES (1, 9, 2015, 1500.5)
INSERT INTO Salary (EmployeeId, Month, Year, Earn) VALUES (1, 10, 2015, 1185.94)
INSERT INTO Salary (EmployeeId, Month, Year, Earn) VALUES (1, 11, 2015, 1784.45)
INSERT INTO Salary (EmployeeId, Month, Year, Earn) VALUES (2, 8, 2015, 1540.89)
INSERT INTO Salary (EmployeeId, Month, Year, Earn) VALUES (2, 9, 2015, 1856.57)
INSERT INTO Salary (EmployeeId, Month, Year, Earn) VALUES (2, 10, 2015, 2486.14)
INSERT INTO Salary (EmployeeId, Month, Year, Earn) VALUES (2, 11, 2015, 2642.71)
INSERT INTO Salary (EmployeeId, Month, Year, Earn) VALUES (3, 9, 2014, 2142.21)
INSERT INTO Salary (EmployeeId, Month, Year, Earn) VALUES (3, 10, 2014, 2564.44)
INSERT INTO Salary (EmployeeId, Month, Year, Earn) VALUES (3, 11, 2014, 1812.12)
INSERT INTO Salary (EmployeeId, Month, Year, Earn) VALUES (3, 12, 2014, 1658.95)
INSERT INTO Salary (EmployeeId, Month, Year, Earn) VALUES (3, 1, 2015, 468.75)
INSERT INTO Salary (EmployeeId, Month, Year, Earn) VALUES (4, 1, 2015, 1305.47)
INSERT INTO Salary (EmployeeId, Month, Year, Earn) VALUES (4, 2, 2015, 1756.51)
INSERT INTO Salary (EmployeeId, Month, Year, Earn) VALUES (4, 3, 2015, 1345.23)
INSERT INTO Salary (EmployeeId, Month, Year, Earn) VALUES (4, 4, 2015, 1148.54)
INSERT INTO Salary (EmployeeId, Month, Year, Earn) VALUES (4, 5, 2015, 1135.44)
INSERT INTO Salary (EmployeeId, Month, Year, Earn) VALUES (4, 6, 2015, 1236.98)
INSERT INTO Salary (EmployeeId, Month, Year, Earn) VALUES (4, 7, 2015, 1472.12)
INSERT INTO Salary (EmployeeId, Month, Year, Earn) VALUES (4, 8, 2015, 1756.04)
INSERT INTO Salary (EmployeeId, Month, Year, Earn) VALUES (4, 9, 2015, 2148.35)
INSERT INTO Salary (EmployeeId, Month, Year, Earn) VALUES (4, 10, 2015, 1478.12)
INSERT INTO Salary (EmployeeId, Month, Year, Earn) VALUES (4, 11, 2015, 1956.19)
INSERT INTO Salary (EmployeeId, Month, Year, Earn) VALUES (5, 12, 2014, 1210.79)
INSERT INTO Salary (EmployeeId, Month, Year, Earn) VALUES (5, 1, 2015, 1780.20)
INSERT INTO Salary (EmployeeId, Month, Year, Earn) VALUES (5, 2, 2015, 1452.13)
INSERT INTO Salary (EmployeeId, Month, Year, Earn) VALUES (5, 3, 2015, 1234.16)
INSERT INTO Salary (EmployeeId, Month, Year, Earn) VALUES (5, 4, 2015, 1634.23)
INSERT INTO Salary (EmployeeId, Month, Year, Earn) VALUES (5, 5, 2015, 1653.87)
INSERT INTO Salary (EmployeeId, Month, Year, Earn) VALUES (5, 6, 2015, 1644.65)
INSERT INTO Salary (EmployeeId, Month, Year, Earn) VALUES (5, 7, 2015, 2154.78)
INSERT INTO Salary (EmployeeId, Month, Year, Earn) VALUES (5, 8, 2015, 1895.45)
INSERT INTO Salary (EmployeeId, Month, Year, Earn) VALUES (5, 9, 2015, 1756.46)
INSERT INTO Salary (EmployeeId, Month, Year, Earn) VALUES (5, 10, 2015, 1466.2)
INSERT INTO Salary (EmployeeId, Month, Year, Earn) VALUES (5, 11, 2015, 1236.7)
INSERT INTO Salary (EmployeeId, Month, Year, Earn) VALUES (6, 2, 2015, 1450.45)
INSERT INTO Salary (EmployeeId, Month, Year, Earn) VALUES (6, 3, 2015, 1896.18)
INSERT INTO Salary (EmployeeId, Month, Year, Earn) VALUES (6, 4, 2015, 2680.66)
INSERT INTO Salary (EmployeeId, Month, Year, Earn) VALUES (6, 5, 2015, 2156.42)
INSERT INTO Salary (EmployeeId, Month, Year, Earn) VALUES (6, 6, 2015, 2148.05)
INSERT INTO Salary (EmployeeId, Month, Year, Earn) VALUES (6, 7, 2015, 1856.70)
INSERT INTO Salary (EmployeeId, Month, Year, Earn) VALUES (6, 8, 2015, 1974.86)
INSERT INTO Salary (EmployeeId, Month, Year, Earn) VALUES (6, 9, 2015, 1965.45)
INSERT INTO Salary (EmployeeId, Month, Year, Earn) VALUES (6, 10, 2015, 2514.71)
INSERT INTO Salary (EmployeeId, Month, Year, Earn) VALUES (6, 11, 2015, 2746.19)

Select * FROM Employee AS em; 
Select Name, MinEarn From Job Where MinEarn <= 1300;
Select Burthday, FullName From Employee Where Burthday = (
	Select MIN(Burthday) From Employee
);

Select FullName From Employee Where Id IN (
	Select EmployeeId From Salary
	Where Month = 1 AND YEAR = 2015
);

Select FullName From Employee Where Id IN (
	Select EmployeeId From Salary
	Where Month = 5 AND YEAR = 2015
);


Select Earn From Salary
	Where Month = 5 AND YEAR = 2015