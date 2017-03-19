select * from Location;

delete from Location where Id >3;
ALTER TABLE Location  AUTO_INCREMENT = 1;

CALL CreateWorkshop(1,'2012.01.01 12:12:12','2012.01.01 12:12:12','2012.01.01 12:12:12','2012.01.01 12:12:12');

select * from Workshop;
select * from WorkshopDates;

SELECT  STR_TO_DATE('18-03-2017', '%d-%m-%Y');

delete from WorkshopDates where Id >= 1;
ALTER TABLE WorkshopDates AUTO_INCREMENT = 1;
delete from Workshop  where Id >= 1;
ALTER TABLE Workshop AUTO_INCREMENT = 1;

SELECT w.Id, l.Name, wd.Day
      FROM Workshop w
      JOIN Location l ON w.LocationId = l.Id
      JOIN WorkshopDates wd ON wd.WorkshopId = w.Id
      ORDER BY Day DESC;
      
SELECT * FROM Team;

UPDATE Team SET Contact = '9632723025' WHERE Id>=1;

select * from Role;