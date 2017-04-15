select * from Location;

delete from Location where Id >3;
ALTER TABLE Location  AUTO_INCREMENT = 1;

delete from Users where Id = 1;
ALTER TABLE Users AUTO_INCREMENT = 1;


CALL CreateWorkshop(1,'2012.01.01 12:12:12','2012.01.01 12:12:12','2012.01.01 12:12:12','2012.01.01 12:12:12');

call GetEvents();

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

select * from Users;new_procedure
select * from UserWorkshop;

update UserWorkshop set WorkshopId = 3 WHERE UserId = 4;

DELETE FROM UserWorkshop WHERE UserId = 3;

update Users SET JoinedBy = 1 WHERE Id > 1;

SELECT w.Id, 'Workshop' EventType, l.Name, l.Address, l.GeoCoordinates, wd.Day
      FROM Workshop w
      JOIN Location l ON w.LocationId = l.Id
      JOIN WorkshopDates wd ON wd.WorkshopId = w.Id
	 WHERE w.Id IN (SELECT Id FROM WorkshopDates WHERE MIN(Day) > CURDATE() GROUP BY Id)
      ORDER BY Day DESC; 
      
      
SELECT CURDATE(), Id FROM (
SELECT Id, MIN(Day) Day FROM WorkshopDates GROUP BY Id
)a
 WHERE Day > CURDATE();
 
select * from Workshop; 

select distinct workshopid from WorkshopDates;

delete from WorkshopDates where WorkshopId = 9;

delete from Workshop where Id = 9;


SELECT w.Id, 'Workshop' EventType, l.Name, l.Address, l.GeoCoordinates, wd.Day
      FROM Workshop w
      JOIN Location l ON w.LocationId = l.Id
      JOIN WorkshopDates wd ON wd.WorkshopId = w.Id
	 WHERE wd.Id IN (SELECT Id FROM (
						SELECT Id, MIN(Day) Day FROM WorkshopDates GROUP BY Id
				   )a WHERE Day > CURDATE())
      ORDER BY Day DESC; 