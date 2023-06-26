
/* 1.Вибрати усіх клієнтів, чиє ім'я має менше ніж 6 символів.*/
select * from client where length(FirstName) < 6;

/* 2.Вибрати львівські відділення банку. */
select * from department where DepartmentCity='Lviv';

/* 3.Вибрати клієнтів з вищою освітою та посортувати по прізвищу. */
select * from client where Education = 'high';

/* 4.Виконати сортування у зворотньому порядку над таблицею Заявка і вивести 5 останніх елементів.*/
select * from application order by idApplication desc ;

/* 5.Вивести усіх клієнтів, чиє прізвище закінчується на OV чи OVA. */
select * from client where LastName like '%iv' or LastName like '%iva';

/* 6.Вивести клієнтів банку, які обслуговуються київськими відділеннями. */
select * from client join department d on d.DepartmentCity = 'Kyiv';

/* 7.Знайти унікальні імена клієнтів. */
SELECT DISTINCT FirstName FROM client;

/* 8.Вивести дані про клієнтів, які мають кредит більше ніж на 5000 гривень. */
select * from client join application a on a.Sum > 5000;

/* 9.Порахувати кількість клієнтів лише львівських відділень. */
select COUNT(*) AS client_count FROM client JOIN department d ON d.DepartmentCity = 'Lviv';

/* Вивести дані про клієнта, в якого середня сума кредитів найвища. */
SELECT c.* FROM client AS c
JOIN application AS a ON c.idclient = a.client_idclient
GROUP BY c.idclient
ORDER BY AVG(a.Sum) DESC
LIMIT 1;


/* вивід з сумою */ 
/* вибираємо таблицю client як c, також вибираємо в підзапиті TotalSum(суто для виведення інфо), 
з таблиці клієнтів беремо тільки того клієнта id якого дорівнює потрібному значенню   */

SELECT c.*, (SELECT avg(a.Sum) FROM application AS a WHERE a.Client_idClient = c.idClient) AS TotalSum
FROM client AS c WHERE c.idClient = (
  SELECT Client_idClient
  FROM application
  GROUP BY Client_idClient
  ORDER BY AVG(Sum) DESC
  LIMIT 1
);

/* вивід без суми */ 
SELECT *
FROM client
WHERE idClient = (
  SELECT Client_idClient
  FROM application
  GROUP BY Client_idClient
  ORDER BY AVG(Sum) DESC
  LIMIT 1
);

/*  Вивести відділення, яке видало в кредити найбільше грошей */
SELECT d.idDepartment, SUM(a.Sum) AS TotalCreditAmount, d.DepartmentCity
FROM application AS a
JOIN client AS c ON a.Client_idClient = c.idClient
JOIN department AS d ON c.Department_idDepartment = d.idDepartment
GROUP BY d.idDepartment
ORDER BY TotalCreditAmount DESC
LIMIT 1;

/* Знайти максимальний неповернений кредит.*/
SELECT
  c.Department_idDepartment,
  d.idDepartment, d.DepartmentCity,
  SUM(a.Sum) AS TotalCreditAmount, c.FirstName
FROM
  application AS a
  JOIN client AS c ON a.Client_idClient = c.idClient
  JOIN department AS d ON c.Department_idDepartment = d.idDepartment
WHERE
  a.CreditState = 'Not returned'
GROUP BY
  c.Department_idDepartment, d.idDepartment, c.FirstName, d.DepartmentCity
ORDER BY
  TotalCreditAmount DESC
  limit 1 
;

/* 24.Знайти клієнта, сума кредиту якого найменша */ 
/* Через SELECT вибираємо всі поля, які нам треба вивести, в тому чмслі загальну суму, яку ми потім згрупуємо по клієнту */ 
/* В GROUP BY додаємо такох всі змінні з SELECT, крім ф-ції для обчислення суми */ 
/*В ORDER BY  сортуруємо значення по сумі як TotalSum */
/*В JOIN приєднюємо клієнтів і вказуємо по якому id  */ 
SELECT
Sum(a.sum) AS TotalSum, a.Client_idClient, c.FirstName
FROM 
application AS a
JOIN client as c ON a.Client_idClient = c.idClient
GROUP BY
c.idClient, c.FirstName
ORDER BY TotalSum
limit 1

























