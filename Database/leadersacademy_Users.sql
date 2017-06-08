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
-- Table structure for table `Users`
--

DROP TABLE IF EXISTS `Users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Users` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `UserName` varchar(30) CHARACTER SET utf8 DEFAULT NULL,
  `Password` varchar(30) CHARACTER SET utf8 DEFAULT NULL,
  `FirstName` varchar(45) DEFAULT NULL,
  `LastName` varchar(45) DEFAULT NULL,
  `RoleId` int(11) DEFAULT NULL,
  `Contact` varchar(12) DEFAULT NULL,
  `DOB` datetime DEFAULT NULL,
  `Profession` varchar(20) DEFAULT NULL,
  `TeamId` int(11) DEFAULT NULL,
  `JoiningTypeId` int(11) DEFAULT NULL,
  `JoinedBy` varchar(45) DEFAULT NULL,
  `Pin` varchar(4) DEFAULT NULL,
  PRIMARY KEY (`Id`),
  UNIQUE KEY `UserName_UNIQUE` (`UserName`),
  KEY `FK_User_Role_idx` (`RoleId`),
  KEY `FN_User_Team_idx` (`TeamId`),
  KEY `FK_User_JoiningType_idx` (`JoiningTypeId`),
  CONSTRAINT `FK_User_JoiningType` FOREIGN KEY (`JoiningTypeId`) REFERENCES `JoiningType` (`Id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `FK_User_Role` FOREIGN KEY (`RoleId`) REFERENCES `Role` (`Id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `FN_User_Team` FOREIGN KEY (`TeamId`) REFERENCES `Team` (`Id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=34 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Users`
--

LOCK TABLES `Users` WRITE;
/*!40000 ALTER TABLE `Users` DISABLE KEYS */;
INSERT INTO `Users` VALUES (1,NULL,'testpwd','Praveen','KB',5,'919632723025','1981-10-25 00:00:00','Software',1,3,'-1','2233'),(2,'maddy','maddy','Madhura','Chinnanna',4,'9538597217','1983-12-25 00:00:00','Home Maker',1,1,'1',NULL),(3,'madhu1','madhu1','Madhu','Chandan',4,'0123456789',NULL,'Business',7,1,'1',NULL),(4,'kavya1','kavya1','Kavya','Madhu',2,'0123456789',NULL,'Teacher',7,1,'1',NULL),(6,'giri1','giri1','Giriyappa','G',4,'0123456689','1990-01-01 00:00:00','Teacher',7,1,'1',NULL),(7,'pramod1','pramod1','Pramod','Balanagendra',2,'0123456789','1990-01-01 00:00:00','Software',1,1,'1',NULL),(8,'mamatha1','mamath1','Mamatha','M',2,'0123456789','1990-01-01 00:00:00','Home Maker',8,1,'1',NULL),(9,'usha1','usha1','Usha','B',2,'0123345679','1990-01-01 00:00:00','Home Maker',1,1,'1',NULL),(10,'Narsamma1','Narsamma1','Narsamma','N',2,'0123456779','1990-01-01 00:00:00','Home Maker',1,1,'1',NULL),(11,'lohith1','lohith1','Lohith','C',2,'0123446789','1990-01-01 00:00:00','Private',1,1,'1',NULL),(12,'Divya1','divya1','Divya','Doc',4,'0123446689','1990-01-01 00:00:00','Doctor',3,1,'1',NULL),(13,'Divya2','divya2','Divya Sis','Doc',2,'0123456789','1990-01-01 00:00:00','Student',3,1,'1',NULL),(14,'prashanth1','prashanth1','Prashanth','Bhatt',2,'0123456778','2003-01-01 00:00:00','Software',8,1,'1',NULL),(15,'mahabhala1','mahabhala','Mahabhala','Bhatt',2,'0123456789','1990-01-01 00:00:00','Retired',8,1,'1',NULL),(16,'Ghanavi','ghanavi','Ghanavi','Giri',2,'0123456789','1990-01-01 00:00:00','Student',7,1,'1',NULL),(17,'rohini1','rohini1','Rohini','R',2,'0123456789','1990-01-01 00:00:00','Software',1,1,'1',NULL),(18,'swetha1','swetha1','Swetha','R',1,'0123456789','1990-01-01 00:00:00','Doctor',1,1,'1',NULL),(19,'manasa1','manasa1','Manasa','Loknath',1,'0123456789','1990-01-01 00:00:00','Software',1,1,'1',NULL),(20,'shruthi1','shruthi1','Shruthi','N',1,'0122456789','1990-01-01 00:00:00','Software',8,1,'1',NULL),(33,NULL,NULL,NULL,NULL,NULL,'9620175489',NULL,NULL,NULL,NULL,NULL,'4960');
/*!40000 ALTER TABLE `Users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2017-06-08 10:10:42
