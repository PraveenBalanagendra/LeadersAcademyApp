-- MySQL dump 10.13  Distrib 5.7.17, for Win64 (x86_64)
--
-- Host: leadersdb.ctg6ujawfiqo.us-west-2.rds.amazonaws.com    Database: leadersacademy
-- ------------------------------------------------------
-- Server version	5.6.27

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Dumping routines for database 'leadersacademy'
--
/*!50003 DROP PROCEDURE IF EXISTS `AddModifyUser` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`awsdbpb`@`%` PROCEDURE `AddModifyUser`(IN UserId INT, In UserName varchar(50), IN Password varchar(50),
								 IN FirstName VARCHAR(50), IN LastName VARCHAR(50), IN RoleId INT, IN Contact VARCHAR(20),
                                 IN DOB VARCHAR(20), IN Profession VARCHAR(50), IN TeamId INT, IN JoiningType INT, 
                                 IN JoinedBy VARCHAR(50), IN WorkshopDetails VARCHAR(200))
BEGIN
	DECLARE user INT;
    DECLARE substr vARCHAR(100);
    DECLARE admissionCardNo VARCHAR(50);
    DECLARE workshopId INT;

	IF(UserId = -1) THEN
		INSERT INTO Users (UserName, Password, FirstName, LastName, RoleId, Contact, DOB, Profession, TeamId, JoiningTypeId, JoinedBy)
        SELECT UserName, Password, FirstName, LastName, RoleId, Contact, STR_TO_DATE(DOB, '%d-%m-%Y'), Profession, TeamId, JoiningType, JoinedBy;
        
        SET user = LAST_INSERT_ID();
    ELSE
		SET user = UserId;
		UPDATE Users
           SET UserName = UserName
             , Password = Password
             , FirstName = FirstName
             , LastName = LastName
             , RoleId = RoleId
             , Contact = Contact
             , DOB = STR_TO_DATE(DoB, '%d-%m-%Y')
             , Profession = Profession
             , TeamId = TeamId
             , JoiningTypeId = JoiningType
             , JoinedBy = JoinedBy
		 WHERE Id = UserId;
	 END if;
    
    DELETE FROM UserWorkshop WHERE UserWorkshop.UserId = user;
    
	WHILE (length(WorkshopDetails) > 0) do
		IF(INSTR(WorkshopDetails, '-') -1 > 0) THEN
			set substr = substring(WorkshopDetails, 1, INSTR(WorkshopDetails, '-') -1 );
			set WorkshopDetails = substring(WorkshopDetails, INSTR(WorkshopDetails, '-')+1, length(WorkshopDetails));
		ELSE 
			set substr = WorkshopDetails;
			set WorkshopDetails = '';
		END IF;
        
        SET workshopId = substring(substr, 1, INSTR(substr, '$')-1);
        SET admissionCardNo = substring(substr, INSTR(substr, '$') + 1);
                
        INSERT INTO UserWorkshop
        VALUES (user, workshopId, admissionCardNo);
        
	END WHILE;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `AuthenticateUser` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`awsdbpb`@`%` PROCEDURE `AuthenticateUser`(IN ContactNumber VARCHAR(50), IN PinNumber VARCHAR(4))
BEGIN

	DECLARE userPin VARCHAR(4) DEFAULT '';
    
	/*IF(SELECT COUNT(*) = 0 FROM Users WHERE Contact = ContactNumber) THEN
		INSERT INTO Users(Contact, Pin) VALUES(ContactNumber, PinNumber);
    ELSEIF(SELECT COALESCE(Pin, '') = '' FROM Users WHERE Contact = ContactNumber) THEN
		UPDATE Users SET Pin = PinNumber WHERE Contact = ContactNumber;
     END IF;*/
     
	SELECT Users.Id, Users.FirstName, Users.LastName, Role.Name AS RoleName 
	  FROM Users 
	  LEFT JOIN Role ON Users.RoleId = Role.Id 
	 WHERE Contact = ContactNumber
	   AND Pin = PinNumber;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `CreateNirvana` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`awsdbpb`@`%` PROCEDURE `CreateNirvana`()
BEGIN
	INSERT INTO Nirvana(CreatedDate)
    SELECT NOW();
    
    SELECT LAST_INSERT_ID();
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `CreateNirvanaDates` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`awsdbpb`@`%` PROCEDURE `CreateNirvanaDates`(IN NirvanaId INT,
IN NirvanaDay VARCHAR(200), IN StartTime VARCHAR(5), IN EndTime VARCHAR(5))
BEGIN
	INSERT INTO NirvanaDates(NirvanaId, Day, StartTime, EndTime)
    VALUES (NirvanaId, STR_TO_DATE(NirvanaDay, '%d-%m-%Y'), StartTime, EndTime);
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `CreateWorkshop` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`awsdbpb`@`%` PROCEDURE `CreateWorkshop`(IN LocationId INT)
BEGIN
	INSERT INTO Workshop(LocationId) VALUES(LocationId);
    SELECT LAST_INSERT_ID();
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `CreateWorkShopDates` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`awsdbpb`@`%` PROCEDURE `CreateWorkShopDates`(IN WorkshopId INT,
IN WorkshopDay VARCHAR(200), IN StartTime VARCHAR(5), IN EndTime VARCHAR(5))
BEGIN
	INSERT INTO WorkshopDates(WorkshopId, Day, StartTime, EndTime)
    VALUES (WorkshopId, STR_TO_DATE(WorkshopDay, '%d-%m-%Y'), StartTime, EndTime);
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `GetEvents` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`awsdbpb`@`%` PROCEDURE `GetEvents`()
BEGIN
	SELECT w.Id, 'Workshop' EventType, l.Name, l.Address, l.GeoCoordinates, wd.Day
      FROM Workshop w
      JOIN Location l ON w.LocationId = l.Id
      JOIN WorkshopDates wd ON wd.WorkshopId = w.Id
	 WHERE wd.Id IN (SELECT Id FROM (
						SELECT Id, MIN(Day) Day FROM WorkshopDates GROUP BY Id
				   )a WHERE Day > CURDATE())
    UNION ALL
    SELECT n.Id, 'Nirvana' EventType, 'Unknown' Name, '' Address, '' GeoCoordinates, nd.Day
      FROM Nirvana n
      JOIN NirvanaDates nd ON nd.NirvanaId = n.Id
	 WHERE nd.Id IN (SELECT Id FROM (
						SELECT Id, MIN(Day) Day FROM NirvanaDates GROUP BY Id
				   )a WHERE Day > CURDATE())
    
      ORDER BY Day ASC; 
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `GetNirvana` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`awsdbpb`@`%` PROCEDURE `GetNirvana`()
BEGIN
	SELECT w.Id, wd.Day
      FROM Nirvana w
      JOIN NirvanaDates wd ON wd.NirvanaId = w.Id
      ORDER BY Day DESC;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `GetNotifications` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`awsdbpb`@`%` PROCEDURE `GetNotifications`(IN UserId INT, In NotificationId INT)
BEGIN

	DECLARE roleName VARCHAR(50) DEFAULT '';
    
    SELECT r.Name INTO roleName 
      FROM Users u
      JOIN Role r ON u.RoleId = r.Id
	 WHERE u.Id = UserId;

	SELECT Id, Title, Message
	  FROM Notification
	 WHERE (NotificationId IS NULL OR Id > NotificationId)
	   AND (MessageTo = 'Everyone'
        OR (MessageTo = 'CTM' AND roleName = 'CTM Member')
        OR (MessageTo = 'Participant' AND roleName = 'Participant')
        OR (MessageTo = 'GLT' AND roleName = 'Group Leader Trainee')
        OR (MessageTo = 'CTM' AND roleName = 'CTM Member')
        OR roleName = 'Group Leader Trainer'
        OR roleName = 'Admin')
       AND EndDate >= CURDATE();
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `GetWorkshop` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`awsdbpb`@`%` PROCEDURE `GetWorkshop`()
BEGIN
	SELECT w.Id, l.Name, wd.Day
      FROM Workshop w
      JOIN Location l ON w.LocationId = l.Id
      JOIN WorkshopDates wd ON wd.WorkshopId = w.Id
      ORDER BY Day DESC;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `new_procedure` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`awsdbpb`@`%` PROCEDURE `new_procedure`()
BEGIN
DECLARE str VARCHAR(200);
declare substr varchar(100);
set str = 'ab-ber-cad';
WHILE (length(str) > 0) do
	IF(INSTR(str, '-') -1 > 0) THEN
		set substr = substring(str, 1, INSTR(str, '-') -1 );
        set str = substring(str, INSTR(str, '-')+1, length(str));
	ELSE 
		set substr = str;
        set str = '';
    END IF;
    
    select substr, length(str);
END WHILE;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `RegisterUser` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`awsdbpb`@`%` PROCEDURE `RegisterUser`(IN PhoneNumber VARCHAR(200))
BEGIN

	IF(SELECT COUNT(*) FROM Users WHERE Contact = PhoneNumber > 0) THEN
		SELECT 'Error' Status, 'Account already exists' StatusDescription;
    else
		
		INSERT INTO Users (Contact, Pin)
        SELECT PhoneNumber, FLOOR(RAND() * 10000);
        
        SELECT 'Success' Status, 'Thank you for registering. Please contact us to associate with Leaders Academy.' StatusDescription, Pin AS PIN
          FROM Users 
		 WHERE Contact = PhoneNumber;
    END if;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2017-06-08 10:12:22
