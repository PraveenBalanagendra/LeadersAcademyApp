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
-- Table structure for table `UserWorkshop`
--

DROP TABLE IF EXISTS `UserWorkshop`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `UserWorkshop` (
  `UserId` int(11) DEFAULT NULL,
  `WorkshopId` int(11) DEFAULT NULL,
  `AdmissionCardNo` varchar(10) DEFAULT NULL,
  KEY `FK_UW_User_idx` (`UserId`),
  KEY `FK_UW_Workshop_idx` (`WorkshopId`),
  CONSTRAINT `FK_UW_User` FOREIGN KEY (`UserId`) REFERENCES `Users` (`Id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `FK_UW_Workshop` FOREIGN KEY (`WorkshopId`) REFERENCES `Workshop` (`Id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `UserWorkshop`
--

LOCK TABLES `UserWorkshop` WRITE;
/*!40000 ALTER TABLE `UserWorkshop` DISABLE KEYS */;
INSERT INTO `UserWorkshop` VALUES (1,2,'354'),(2,3,'000'),(3,3,'000'),(4,3,'000'),(6,3,'000'),(7,4,'000'),(8,4,'000'),(9,5,'000'),(10,5,'000'),(11,5,'000'),(12,6,'000'),(13,6,'000'),(14,7,'000'),(15,7,'000'),(16,7,'000'),(17,8,'000'),(18,1,'000'),(19,1,'000'),(20,1,'000');
/*!40000 ALTER TABLE `UserWorkshop` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2017-06-08 10:11:06
