USE Organization;
GO

Print '1A'
Select * FROM Employee AS em; 

Print '1B'
Select Name, MinEarn From Job Where MinEarn <= 1300;

Print '1C'
SELECT AVG(Earn) AS Average
FROM Salary 
WHERE Year = 2015 AND Month = 10

Print '2A'
Select Burthday, FullName From Employee Where Burthday = (
	Select MIN(Burthday) From Employee
);
Print '2B'
Select FullName From Employee Where Id IN (
	Select EmployeeId From Salary
	Where Month = 1 AND YEAR = 2015
);
Print '2C'
SELECT S.EmployeeId, S.Earn, S.Month, S.Year FROM 
(Select EmployeeId, Earn, Month, Year
From Salary
Where Month = 5 AND YEAR = 2015) AS tmp, Salary AS S 
WHERE tmp.EmployeeId = S.EmployeeId AND S.Month < 5 AND tmp.YEAR = 2015 AND tmp.Earn > S.Earn
Print '2D'
SELECT Id, Name, (
SELECT COUNT(*) FROM Career AS C
WHERE D.Id = C.DepartmentId AND C.Fire IS NULL
) FROM Department AS D

Print '3A'
SELECT EmployeeId, AVG(Earn) AS Average
FROM Salary 
WHERE Year = 2015
GROUP BY EmployeeId
Print '3B'
SELECT EmployeeId, AVG(Earn) AS Average
FROM Salary 
WHERE Year = 2015
GROUP BY EmployeeId
HAVING COUNT(Earn) > 2
Print '4A'
SELECT FullName 
FROM Employee AS E JOIN Salary AS S ON E.Id = S.EmployeeId
WHERE Month = 1 AND Year = 2015 AND Earn > 1000
Print '4B'
SELECT E.FullName, C.JobId, C.DepartmentId, [WorkMonths] = IIF(C.Fire IS NULL, (SELECT DATEDIFF(mm, C.Hire, GETDATE()))
, (SELECT DATEDIFF(mm,C.Hire, C.Fire)))
FROM Employee AS E JOIN Career AS C ON E.Id = C.EmployeeId
Print '5A'
SELECT TOP(10) * FROM Job
UPDATE Job SET MinEarn = MinEarn * 1.5
SELECT TOP(10) * FROM Job

Print'5B'
SELECT * FROM Salary
DELETE FROM Salary WHERE Year > 2014
SELECT * FROM Salary