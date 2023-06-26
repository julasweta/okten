/* використовуємо базу user7777 */
use user7777;          

/* шукаємо всі машини */
select *
from cars;              

drop table users;

/* створення таблиці */
create table users             
(
    id     int         not null auto_increment primary key,   /* auto_increment автоматично проставляє номер id*/
    name   varchar(25) not null,
    age    int         not null,
    status tinyint     not null,
    gender varchar(6)  not null
);

/*додаємо дані в табличку */
insert into users
values (null, 'Olha', 35, 0, 'female');

/* вибираємо окремі стовпчики */
select name, gender
from users;

select *
from users
where name = 'oleg';

/* 
У шаблоні '%o' символ '%' використовується для позначення будь-якої кількості символів (включаючи його відсутність) */
select *
from users
where name like 'o%';  

select *
from users
where name like '%a';

select *
from users
where name like '%li%';

/* Символ '_' в шаблоні позначає будь-який один символ. два символи, дві будь-які літери, як в нашому випадку */
select *
from users
where name like '__e%';


select *
from users
where age != 30;


select * from users where age  between 20 and 30; 
select * from users where age not between 20 and 30;

select * from users where age>=20 and age<=30 and name like '%l%';
select * from users where age>=20 and age<=30 or name='kokos';

select * from users where age in (25,55,4,36);    /*декілька умов з одного стовпчика*/ 

select * from users where  length(name)<4;  /*довжина строки */

select * from users order by age;           /* сортуємо по віку */

select * from users limit 4 offset 12;     /*виводимо тільки 4 зверху, OFFSET ця частина вказує, що ми пропускаємо перші 12 рядків */


select min(age) as min_age from users;
select max(age) as max_age from users;   /* виводить загальний макс вік */
select avg(age) as avg_age from users;   /* середній показник */
select sum(age) as sum_age from users;
select count(*) as users_count from users;
select * from users where gender='female' order by age,name limit 1;  /* вибираємо жінок, сортуємо по віці і беремо першу */


select count(*) as users_count, gender from users group by gender;
select max(age) as users_count, gender from users group by gender;  /* виводить макс вік і для жінок і для чоловіків окремо*/
select count(*), age from users group by age;

select name from users order by name desc ; /* зворотній порядок */

/*спочатку рахуємо всі моделі, потім беремо в яких вік > 2020 і потім відсортовуємо ті, загальна кількість яких менше= 2 */
select count(*) as model_count, model from cars where year>2020 group by model having model_count>=2;

/*перезаписуємо дані */
update users set age=100, name='Nijak' where age<10;

/* видаляємо рядок*/
delete from users where name='Nijak';

/* знайти машини ціна котрих більше ніж ціна середнього арифметичного всіх машин */
/* спочатку шукаємо середню ціну всіх машин, находимо число і беремо його в дужки як число,яке ми шукаємо,
а потім з цим числом порівнюємо всі машини*/
/* - "as avg_price" можна без цього, якщо ми далі в запиті його не використовуємо */
select *from cars where price > (select avg(price) as avg_price from cars);