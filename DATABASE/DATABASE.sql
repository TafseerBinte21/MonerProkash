CREATE DATABASE  IF NOT EXISTS `moner_prokash` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `moner_prokash`;
-- MySQL dump 10.13  Distrib 8.0.22, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: moner_prokash
-- ------------------------------------------------------
-- Server version	8.0.22

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `admin`
--

DROP TABLE IF EXISTS `admin`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `admin` (
  `id` int NOT NULL AUTO_INCREMENT,
  `email` varchar(155) DEFAULT NULL,
  `password` varchar(155) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `admin`
--

LOCK TABLES `admin` WRITE;
/*!40000 ALTER TABLE `admin` DISABLE KEYS */;
INSERT INTO `admin` VALUES (1,'xy@gmail.com','124');
/*!40000 ALTER TABLE `admin` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `appointment`
--

DROP TABLE IF EXISTS `appointment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `appointment` (
  `userId` int NOT NULL,
  `counselorId` int NOT NULL,
  `status` varchar(145) DEFAULT NULL,
  PRIMARY KEY (`userId`,`counselorId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `appointment`
--

LOCK TABLES `appointment` WRITE;
/*!40000 ALTER TABLE `appointment` DISABLE KEYS */;
INSERT INTO `appointment` VALUES (1,3,'pending'),(3,7,NULL),(4,7,NULL);
/*!40000 ALTER TABLE `appointment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `counselor`
--

DROP TABLE IF EXISTS `counselor`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `counselor` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(155) DEFAULT NULL,
  `experience` varchar(155) DEFAULT NULL,
  `education` varchar(155) DEFAULT NULL,
  `phone` varchar(155) DEFAULT NULL,
  `time` varchar(155) DEFAULT NULL,
  `img` varchar(155) DEFAULT NULL,
  `email` varchar(145) DEFAULT NULL,
  `password` varchar(145) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `counselor`
--

LOCK TABLES `counselor` WRITE;
/*!40000 ALTER TABLE `counselor` DISABLE KEYS */;
INSERT INTO `counselor` VALUES (1,'Tanisha Ahmed','3','M.Sc., BRACU','01300000001','Fri, 08:00-11:00; Fri, 11:00-14:00; Fri, 14:00-17:00','img/tanisha.jpg','tanisha@gmail.com','125'),(2,'Monirul Haque','3','M.Sc., BRACU','01300000004','Fri, 08:00-11:00; Fri, 11:00-14:00; Fri, 14:00-17:00','img/monirul.jpg','monirul@gmail.com','125'),(3,'Sifat Tanvir','3','M.Sc., BRACU','01300000008','Fri, 08:00-11:00; Fri, 11:00-14:00; Fri, 14:00-17:00','img/sifat.jpg','sifat@gmail.com','125'),(4,'Tahsina Tajrim','5','M.Sc., BRACU','01300000005','Sun, 08:00-11:00; Fri, 11:00-14:00; Wed, 14:00-17:00','img/oishi.jpg','oishi@gmail.com','125'),(5,'Tashfiah Tahiya Ahmed','4','M.Sc., BRACU','013000000010','Sun, 08:00-11:00; Fri, 11:00-14:00; Wed, 14:00-17:00','img/tahiya.jpg','tahiya@gmail.com','125'),(6,'Tanha Tanzia','6','M.Sc., BRACU','01300000006','Thur, 08:00-11:00; Fri, 11:00-14:00','img/tanha.jpg','tanha@gmail.com','125'),(7,'Avijit Biswas','3','M.Sc., BRACU','013000000013','Fri, 08:00-11:00; Fri, 11:00-14:00','img/avijit.jpg','avijit@gmail.com','125'),(8,'Fahim Irfan Ahmed','11','M.Sc., BRACU','013000000014','Fri, 08:00-11:00; Fri, 11:00-14:00','img/fahim.jpg','fahim@gmail.com','125'),(9,'Husne Mubarak','1','M.Sc., BRACU','013000000013','Fri, 08:00-11:00; Fri, 11:00-14:00','img/husne.jpg','husne@gmail.com','125'),(10,'Tahreema Rahman','10','M.Sc., BRACU','013000000043','Fri, 08:00-11:00; Fri, 11:00-14:00','img/zariyat.jpg','zariyat@gmail.com',NULL),(11,'Tasfia Farzana','10','M.Sc., BRACU','013000000063','Fri, 08:00-11:00; Fri, 11:00-14:00','img/tasfia.jpg','tasfiat@gmail.com',NULL),(12,'Shihab Sikder','5','M.Sc., BRACU','013000000023','Fri, 08:00-11:00; Mon, 11:00-14:00','img/shihab.jpg','shihab@gmail.com',NULL);
/*!40000 ALTER TABLE `counselor` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `course`
--

DROP TABLE IF EXISTS `course`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `course` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) DEFAULT NULL,
  `description` varchar(100) DEFAULT NULL,
  `time` varchar(100) DEFAULT NULL,
  `img` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `course`
--

LOCK TABLES `course` WRITE;
/*!40000 ALTER TABLE `course` DISABLE KEYS */;
INSERT INTO `course` VALUES (4,'What is mental health?','Two days weekly.Friday and Saturday','Fri, 08:00-11:00; Sat, 11:00-14:00','img/mental.jpg'),(5,'Meditation Session','Two days weekly.Friday and Saturday','Fri, 08:00-11:00; Sat, 11:00-14:00','img/medi.jpg');
/*!40000 ALTER TABLE `course` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(145) DEFAULT NULL,
  `email` varchar(145) DEFAULT NULL,
  `gender` varchar(145) DEFAULT NULL,
  `phone` varchar(415) DEFAULT NULL,
  `password` varchar(145) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'Mehedi','mehedi@gmail.com','m','1489','$2a$08$lIwEPr7.56o99vh1wPqeVekzSalcAJn0TAwj6eZBMGZ9L3CK8yjMK'),(2,'Tafseer BINTE Mannan','tafa@gmail.com','f','1234','$2a$08$xZK/dktEYkwoj0f2WBglAe3NEFC/..s5GgiecfhpZa9PK2BNCux6C'),(3,'taiba','taiba@hmail.com','f','5335325','$2a$08$HSeGlT0CymW8CuXtbLi/NeGE/2nBVPFnAxqSR2vSy89bfWPKxHj3u');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'moner_prokash'
--

--
-- Dumping routines for database 'moner_prokash'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-12-11  5:15:28
