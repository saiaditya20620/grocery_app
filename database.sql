create database team1;
use team1;
create table user(id int not null primary key,username varchar(30),email varchar(30),password varchar(20),phone varchar(20),role varchar(20),address varchar(100));
insert into user values(1,"admin","admin@gmail.com","admin","9087654321","admin","India");
create table product(pid int not null primary key,pname varchar(100),description varchar(100),price int,image varchar(200),stockquantity int,discount int,category varchar(30));
create table wishlist(wid int not null primary key,id int,pid int,pname varchar(30),description varchar(200),price int,image varchar(8000));

create table odetails(orderid int not null primary key,id int,pid int,pname varchar(30),description varchar(200),price int,address varchar(100),email varchar(30),discount int,image varchar(10000),datedetails date,category varchar(30));
create table sales(sid int not null primary key,datedetails date,id int,pid int,pname varchar(40),category varchar(30),stockquantity int,price int);

create table myorders(mid int not null primary key,orderid int,id int,pid int,pname varchar(30),description varchar(200),price int,address varchar(100),email varchar(30),image varchar(10000),datedetails date,category varchar(30));

create table discount(did int not null primary key,id int,percentage int,image varchar(9000));

insert into product values(701,"Pepsi","Bed with Storgae",150,"assets/images/b2.jpg",10,20,"Beverages");
insert into product values(702,"RedWine","Bed with Storgae",900,"assets/images/b3.jpg",4,15,"Beverages");
insert into product values(703,"Alphanso mango juice","Bed with Storgae",400,"assets/images/b4.jpg",10,20,"Beverages");
insert into product values(704," Blueberry Juice","Bed with Storgae",50,"assets/images/b5.jpg",25,5,"Beverages");
insert into product values(705,"Cold Coffe","Bed with Storgae",110,"assets/images/b6.jpg",41,6,"Beverages");
insert into product values(706,"Sparkling water","Bed with Storgae",90,"assets/images/b7.jpg",45,10,"Beverages");

insert into product values(801,"Rice","Bed with Storgae",1200,"assets/images/c2.jpg",5,10,"Cereals");
insert into product values(802,"Maize","Bed with Storgae",1300,"assets/images/c3.jpg",4,5,"Cereals");
insert into product values(803,"Oats","Bed with Storgae",400,"assets/images/c4.jpg",5,3,"Cereals");
insert into product values(804," Barley","Bed with Storgae",100,"assets/images/c5.jpg",15,5,"Cereals");
insert into product values(805,"Wheat","Bed with Storgae",1100,"assets/images/c6.jpg",11,5,"Cereals");
insert into product values(806,"Millet","Bed with Storgae",1500,"assets/images/c7.jpg",14,8,"Cereals");

insert into product values(901,"Milk","Bed with Storgae",80,"assets/images/d2.jpg",5,10,"Dairy Products");
insert into product values(902,"Butter","Bed with Storgae",200,"assets/images/d3.jpg",4,5,"Dairy Products");
insert into product values(903,"Cream","Bed with Storgae",400,"assets/images/d4.jpg",5,3,"Dairy Products");
insert into product values(904," Cheese","Bed with Storgae",300,"assets/images/d5.jpg",15,5,"Dairy Products");
insert into product values(905,"Yogurt","Bed with Storgae",60,"assets/images/d6.jpg",11,5,"Dairy Products");
insert into product values(906,"Paneer","Bed with Storgae",200,"assets/images/d7.jpg",14,8,"Dairy Products");


insert into product values(101,"Carrot","Bed with Storgae",80,"assets/images/v2.jpg",5,10,"vegetables");
insert into product values(102,"Broccoli","Bed with Storgae",200,"assets/images/v3.jpg",4,5,"vegetables");
insert into product values(103,"Asparagus","Bed with Storgae",400,"assets/images/v4.jpg",5,3,"vegetables");
insert into product values(104," Cauliflower","Bed with Storgae",300,"assets/images/v5.jpg",15,5,"vegetables");
insert into product values(105,"Eggplant","Bed with Storgae",60,"assets/images/v6.jpg",11,5,"vegetables");
insert into product values(106,"Green Pepper","Bed with Storgae",200,"assets/images/v7.jpg",14,8,"vegetables");

insert into product values(201,"Apple","Bed with Storgae",100,"assets/images/f2.jpg",14,5,"fruits");
insert into product values(202,"Banana","Bed with Storgae",50,"assets/images/f3.jpg",18,5,"fruits");
insert into product values(203,"Orange","Bed with Storgae",60,"assets/images/f4.jpg",14,6,"fruits");
insert into product values(204," Grape","Bed with Storgae",40,"assets/images/f5.jpg",15,5,"fruits");
insert into product values(205,"Strawberry","Bed with Storgae",110,"assets/images/f6.jpg",11,5,"fruits");
insert into product values(206,"Avacado","Bed with Storgae",200,"assets/images/f7.jpg",14,5,"fruits");


insert into product values(301,"Chicken","Bed with Storgae",180,"assets/images/m2.jpg",14,5,"meat");
insert into product values(302,"Pork","Bed with Storgae",270,"assets/images/m3.jpg",18,5,"meat");
insert into product values(303,"Lamb","Bed with Storgae",450,"assets/images/m4.jpg",14,6,"meat");
insert into product values(304," Sausages","Bed with Storgae",220,"assets/images/m5.jpg",15,5,"meat");
insert into product values(305,"Ham","Bed with Storgae",280,"assets/images/m6.jpg",11,5,"meat");
insert into product values(306,"Fish","Bed with Storgae",150,"assets/images/m7.jpg",14,5,"meat");
insert into discount values(11,1,30,"assets/images/360_F_295334437_7PH6byrEfFqqZxzyj84zMGWZuAMILmnI.jpg");
insert into discount values(12,1,20,"assets/images/sign-board-discount-vector-1947183.jpg");
insert into discount values(13,1,10,"assets/images/special-discount-10-off-grunge-260nw-173111078.webp");
insert into discount values(14,1,25,"assets/images/71XtX-MjXJL._SL1500_.jpg");
insert into discount values(15,1,40,"assets/images/pngtree-offer-discount-sale-pink-label-png-image_3588558.jpg");