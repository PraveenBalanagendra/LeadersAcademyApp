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

select * from Users;
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
      
CREATE TABLE `NirvanaDates` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `NirvanaId` int(11) DEFAULT NULL,
  `Day` datetime DEFAULT NULL,
  `StartTime` varchar(5) DEFAULT NULL,
  `EndTime` varchar(5) DEFAULT NULL,
  PRIMARY KEY (`Id`),
  KEY `NirvanaDates_Nirvana_idx` (`NirvanaId`),
  CONSTRAINT `NirvanaDates_Nirvana` FOREIGN KEY (`NirvanaId`) REFERENCES `Nirvana` (`Id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=latin1;


CALL `leadersacademy`.`GetNirvana`();

SELECT w.Id, 'Workshop' EventType, l.Name, l.Address, l.GeoCoordinates, wd.Day
      FROM Workshop w
      JOIN Location l ON w.LocationId = l.Id
      JOIN WorkshopDates wd ON wd.WorkshopId = w.Id
	 WHERE wd.Id IN (SELECT Id FROM (
						SELECT Id, MIN(Day) Day FROM WorkshopDates GROUP BY Id
				   )a WHERE Day > CURDATE())
    UNION ALL
    SELECT n.Id, 'Nirvana' EventType, '' Name, '' Address, '' GeoCoordinates, nd.Day
      FROM Nirvana n
      JOIN NirvanaDates nd ON nd.NirvanaId = n.Id
	 WHERE nd.Id IN (SELECT Id FROM (
						SELECT Id, MIN(Day) Day FROM NirvanaDates GROUP BY Id
				   )a WHERE Day > CURDATE())
    
    
select * from Location;

UPDATE Location set Address = 'No. 32, K.G. Road, Bangalore - 560002 (Opposite Cauvery Bhavan)'
WHERE Id = 1;

select * from Role;
select * from Notification;
INSERT INTO Notification(Title, Message, MessageTo, EventType, Batch, Role, Type, StartDate, EndDate, CreatedDate)
VALUES('Upcoming CTM', 'CTM this Thursday at RPA at 6:30 PM. Reporting time 6:10 PM.', 'Everyone', 'All', 'All', 'All', 'Notification', curdate(), curdate(), curdate());

truncate table Notification;

CALL `leadersacademy`.`GetNotifications`(NULL, NULL);