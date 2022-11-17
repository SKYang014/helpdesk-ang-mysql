drop database if exists helpdesk;
create database helpdesk;
use helpdesk;

create table Ticket (
    Id int NOT NULL auto_increment,
    Title varchar(50),
    Description varchar(50),
    SubmittedBy varchar(50),
    Bookmarked bool,
    Resolved bool,
    ResolvedInfo varchar(300),
    ResolvedBy varchar(50),
    PRIMARY KEY (Id)
);

insert into  Ticket (Title, Description, SubmittedBy, Bookmarked, Resolved, ResolvedInfo, ResolvedBy) values ('Mic doesnt work','Microphone not recognised by teams','Sarah',false,true, null, null);
insert into  Ticket (Title, Description, SubmittedBy, Bookmarked, Resolved, ResolvedInfo, ResolvedBy) values ('Monitor not turning on','Monitor not able to turn on when computer is on','Susie',true, true, 'Monitor not plugged in', 'Jessica');

