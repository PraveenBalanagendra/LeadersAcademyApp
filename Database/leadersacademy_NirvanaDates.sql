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
-- Table structure for table `NirvanaDates`
--

DROP TABLE IF EXISTS `NirvanaDates`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `NirvanaDates` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `NirvanaId` int(11) DEFAULT NULL,
  `Day` datetime DEFAULT NULL,
  `StartTime` varchar(5) DEFAULT NULL,
  `EndTime` varchar(5) DEFAULT NULL,
  PRIMARY KEY (`Id`),
  KEY `NirvanaDates_Nirvana_idx` (`NirvanaId`),
  CONSTRAINT `NirvanaDates_Nirvana` FOREIGN KEY (`NirvanaId`) REFERENCES `Nirvana` (`Id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `NirvanaDates`
--

LOCK TABLES `NirvanaDates` WRITE;
/*!40000 ALTER TABLE `NirvanaDates` DISABLE KEYS */;
INSERT INTO `NirvanaDates` VALUES (1,0,'2017-06-15 00:00:00','11:00','23:59'),(2,0,'2017-06-16 00:00:00','00:00','23:59'),(3,0,'2017-06-17 00:00:00','00:00','23:59'),(4,0,'2017-06-18 00:00:00','00:00','16:00');
/*!40000 ALTER TABLE `NirvanaDates` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2017-06-08 10:10:51
