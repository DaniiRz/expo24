-- MariaDB dump 10.19  Distrib 10.4.32-MariaDB, for Win64 (AMD64)
--
-- Host: localhost    Database: expo24
-- ------------------------------------------------------
-- Server version	10.4.32-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

DROP DATABASE IF EXISTS expo24;
CREATE DATABASE expo24;
USE expo24;

--
-- Table structure for table `administradores`
--

DROP TABLE IF EXISTS `administradores`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `administradores` (
  `id_administrador` varchar(36) NOT NULL DEFAULT uuid(),
  `nombre_administrador` varchar(50) NOT NULL,
  `carnet_administrador` varchar(5) NOT NULL,
  `correo_administrador` varchar(40) NOT NULL,
  `clave_administrador` varchar(30) NOT NULL,
  PRIMARY KEY (`id_administrador`),
  UNIQUE KEY `nombre_administrador` (`nombre_administrador`),
  UNIQUE KEY `carnet_administrador` (`carnet_administrador`),
  UNIQUE KEY `correo_administrador` (`correo_administrador`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `administradores`
--

LOCK TABLES `administradores` WRITE;
/*!40000 ALTER TABLE `administradores` DISABLE KEYS */;
/*!40000 ALTER TABLE `administradores` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `alumnos`
--

DROP TABLE IF EXISTS `alumnos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `alumnos` (
  `id_alumno` varchar(36) NOT NULL DEFAULT uuid(),
  `nombre_alumno` varchar(36) NOT NULL,
  `carnet_alumno` int(11) NOT NULL,
  `correo_alumno` varchar(100) NOT NULL,
  `clave_alumno` varchar(50) NOT NULL,
  `id_curso` varchar(36) DEFAULT NULL,
  PRIMARY KEY (`id_alumno`),
  UNIQUE KEY `carnet_alumno` (`carnet_alumno`),
  UNIQUE KEY `correo_alumno` (`correo_alumno`),
  KEY `fk_id_curso_alumnos` (`id_curso`),
  CONSTRAINT `fk_id_curso_alumnos` FOREIGN KEY (`id_curso`) REFERENCES `cursos` (`id_curso`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `alumnos`
--

LOCK TABLES `alumnos` WRITE;
/*!40000 ALTER TABLE `alumnos` DISABLE KEYS */;
/*!40000 ALTER TABLE `alumnos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `archivo_adjunto`
--

DROP TABLE IF EXISTS `archivo_adjunto`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `archivo_adjunto` (
  `id_archivo_adjunto` varchar(36) NOT NULL DEFAULT uuid(),
  `archivo_ajunto` longblob DEFAULT NULL,
  PRIMARY KEY (`id_archivo_adjunto`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `archivo_adjunto`
--

LOCK TABLES `archivo_adjunto` WRITE;
/*!40000 ALTER TABLE `archivo_adjunto` DISABLE KEYS */;
/*!40000 ALTER TABLE `archivo_adjunto` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cursos`
--

DROP TABLE IF EXISTS `cursos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cursos` (
  `id_curso` varchar(36) NOT NULL DEFAULT uuid(),
  `minestudiantes` int(11) DEFAULT NULL CHECK (`minestudiantes` >= 0),
  `maxestuidantes` int(11) DEFAULT NULL CHECK (`maxestuidantes` >= 0),
  `id_grupo` varchar(36) DEFAULT NULL,
  `id_profesores` varchar(36) DEFAULT NULL,
  `id_grado` varchar(36) DEFAULT NULL,
  PRIMARY KEY (`id_curso`),
  KEY `fk_id_grupo_cursos` (`id_grupo`),
  KEY `fk_id_profesores_cursos` (`id_profesores`),
  KEY `fk_id_grado_cursos` (`id_grado`),
  CONSTRAINT `fk_id_grado_cursos` FOREIGN KEY (`id_grado`) REFERENCES `grados` (`id_grado`),
  CONSTRAINT `fk_id_grupo_cursos` FOREIGN KEY (`id_grupo`) REFERENCES `grupos_tecnicos` (`id_grupo`),
  CONSTRAINT `fk_id_profesores_cursos` FOREIGN KEY (`id_profesores`) REFERENCES `profesores` (`id_profesores`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cursos`
--

LOCK TABLES `cursos` WRITE;
/*!40000 ALTER TABLE `cursos` DISABLE KEYS */;
/*!40000 ALTER TABLE `cursos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `dt_archivos`
--

DROP TABLE IF EXISTS `dt_archivos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `dt_archivos` (
  `id_dt_archivo` varchar(36) NOT NULL DEFAULT uuid(),
  `id_propuesta` varchar(36) DEFAULT NULL,
  PRIMARY KEY (`id_dt_archivo`),
  KEY `fk_id_popuesta_detalle` (`id_propuesta`),
  CONSTRAINT `fk_id_popuesta_detalle` FOREIGN KEY (`id_propuesta`) REFERENCES `propuestas` (`id_propuesta`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `dt_archivos`
--

LOCK TABLES `dt_archivos` WRITE;
/*!40000 ALTER TABLE `dt_archivos` DISABLE KEYS */;
/*!40000 ALTER TABLE `dt_archivos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `dt_curso`
--

DROP TABLE IF EXISTS `dt_curso`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `dt_curso` (
  `id_detalle` varchar(36) NOT NULL DEFAULT uuid(),
  `id_curso` varchar(36) DEFAULT NULL,
  `id_seccion` varchar(36) DEFAULT NULL,
  PRIMARY KEY (`id_detalle`),
  KEY `id_curso_detalles` (`id_curso`),
  KEY `id_seccion_detalle` (`id_seccion`),
  CONSTRAINT `id_curso_detalles` FOREIGN KEY (`id_curso`) REFERENCES `cursos` (`id_curso`),
  CONSTRAINT `id_seccion_detalle` FOREIGN KEY (`id_seccion`) REFERENCES `secciones` (`id_seccion`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `dt_curso`
--

LOCK TABLES `dt_curso` WRITE;
/*!40000 ALTER TABLE `dt_curso` DISABLE KEYS */;
/*!40000 ALTER TABLE `dt_curso` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `equipo_expo`
--

DROP TABLE IF EXISTS `equipo_expo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `equipo_expo` (
  `id_equipo_expo` varchar(36) NOT NULL DEFAULT uuid(),
  `id_rol` varchar(36) DEFAULT NULL,
  `id_alumno` varchar(36) DEFAULT NULL,
  `id_proyecto` varchar(36) DEFAULT NULL,
  PRIMARY KEY (`id_equipo_expo`),
  KEY `fk_id_rol_equipo_expo` (`id_rol`),
  KEY `fk_id_proyecto_equipo_expo` (`id_proyecto`),
  KEY `fk_id_alumno_equipo_expo` (`id_alumno`),
  CONSTRAINT `fk_id_alumno_equipo_expo` FOREIGN KEY (`id_alumno`) REFERENCES `alumnos` (`id_alumno`),
  CONSTRAINT `fk_id_proyecto_equipo_expo` FOREIGN KEY (`id_proyecto`) REFERENCES `proyectos` (`id_proyecto`),
  CONSTRAINT `fk_id_rol_equipo_expo` FOREIGN KEY (`id_rol`) REFERENCES `roles` (`id_rol`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `equipo_expo`
--

LOCK TABLES `equipo_expo` WRITE;
/*!40000 ALTER TABLE `equipo_expo` DISABLE KEYS */;
/*!40000 ALTER TABLE `equipo_expo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `especialidades`
--

DROP TABLE IF EXISTS `especialidades`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `especialidades` (
  `id_especialidad` varchar(36) NOT NULL DEFAULT uuid(),
  `nombre_especialidad` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id_especialidad`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `especialidades`
--

LOCK TABLES `especialidades` WRITE;
/*!40000 ALTER TABLE `especialidades` DISABLE KEYS */;
/*!40000 ALTER TABLE `especialidades` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `estado_propuesta`
--

DROP TABLE IF EXISTS `estado_propuesta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `estado_propuesta` (
  `id_estado_propuesta` varchar(36) NOT NULL DEFAULT uuid(),
  `estado_propuesta` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`id_estado_propuesta`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `estado_propuesta`
--

LOCK TABLES `estado_propuesta` WRITE;
/*!40000 ALTER TABLE `estado_propuesta` DISABLE KEYS */;
/*!40000 ALTER TABLE `estado_propuesta` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `grados`
--

DROP TABLE IF EXISTS `grados`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `grados` (
  `id_grado` varchar(36) NOT NULL DEFAULT uuid(),
  `nombre_grado` varchar(40) NOT NULL,
  `id_nivel_academico` varchar(36) DEFAULT NULL,
  PRIMARY KEY (`id_grado`),
  KEY `fk_id_nivel_academico_grado` (`id_nivel_academico`),
  CONSTRAINT `fk_id_nivel_academico_grado` FOREIGN KEY (`id_nivel_academico`) REFERENCES `nivel_academico` (`id_nivel_academico`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `grados`
--

LOCK TABLES `grados` WRITE;
/*!40000 ALTER TABLE `grados` DISABLE KEYS */;
/*!40000 ALTER TABLE `grados` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `grupos_tecnicos`
--

DROP TABLE IF EXISTS `grupos_tecnicos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `grupos_tecnicos` (
  `id_grupo` varchar(36) NOT NULL DEFAULT uuid(),
  `nombre_grupo` varchar(50) NOT NULL,
  PRIMARY KEY (`id_grupo`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `grupos_tecnicos`
--

LOCK TABLES `grupos_tecnicos` WRITE;
/*!40000 ALTER TABLE `grupos_tecnicos` DISABLE KEYS */;
/*!40000 ALTER TABLE `grupos_tecnicos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `nivel_academico`
--

DROP TABLE IF EXISTS `nivel_academico`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `nivel_academico` (
  `id_nivel_academico` varchar(36) NOT NULL DEFAULT uuid(),
  `nivel_grado` varchar(50) NOT NULL,
  PRIMARY KEY (`id_nivel_academico`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `nivel_academico`
--

LOCK TABLES `nivel_academico` WRITE;
/*!40000 ALTER TABLE `nivel_academico` DISABLE KEYS */;
/*!40000 ALTER TABLE `nivel_academico` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `profesores`
--

DROP TABLE IF EXISTS `profesores`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `profesores` (
  `id_profesores` varchar(36) NOT NULL DEFAULT uuid(),
  `nombre_profesor` varchar(50) NOT NULL,
  `carnet_profesor` int(11) NOT NULL,
  `correo_profesor` varchar(50) NOT NULL,
  `clave_profesor` varchar(40) NOT NULL,
  `id_especialidad` varchar(36) DEFAULT NULL,
  PRIMARY KEY (`id_profesores`),
  UNIQUE KEY `nombre_profesor` (`nombre_profesor`),
  UNIQUE KEY `carnet_profesor` (`carnet_profesor`),
  UNIQUE KEY `correo_profesor` (`correo_profesor`),
  KEY `fk_especialidad_profesores` (`id_especialidad`),
  CONSTRAINT `fk_especialidad_profesores` FOREIGN KEY (`id_especialidad`) REFERENCES `especialidades` (`id_especialidad`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `profesores`
--

LOCK TABLES `profesores` WRITE;
/*!40000 ALTER TABLE `profesores` DISABLE KEYS */;
/*!40000 ALTER TABLE `profesores` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `propuestas`
--

DROP TABLE IF EXISTS `propuestas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `propuestas` (
  `id_propuesta` varchar(36) NOT NULL DEFAULT uuid(),
  `nombre_propuesta` varchar(100) NOT NULL,
  `objetivos_propuesta` varchar(500) NOT NULL,
  `justificacion_propuesta` varchar(500) NOT NULL,
  `descripcion_propuesta` varchar(500) NOT NULL,
  `id_tipo_propuesta` varchar(36) DEFAULT NULL,
  PRIMARY KEY (`id_propuesta`),
  UNIQUE KEY `nombre_propuesta` (`nombre_propuesta`),
  KEY `fk_id_tipo_propuesta_propuestas` (`id_tipo_propuesta`),
  CONSTRAINT `fk_id_tipo_propuesta_propuestas` FOREIGN KEY (`id_tipo_propuesta`) REFERENCES `tipo_propuestas` (`id_tipo_propuesta`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `propuestas`
--

LOCK TABLES `propuestas` WRITE;
/*!40000 ALTER TABLE `propuestas` DISABLE KEYS */;
/*!40000 ALTER TABLE `propuestas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `proyectos`
--

DROP TABLE IF EXISTS `proyectos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `proyectos` (
  `id_proyecto` varchar(36) NOT NULL DEFAULT uuid(),
  `url_proyecto` varchar(100) NOT NULL,
  `nombre_proyecto` varchar(50) NOT NULL,
  `estado_proyecto` varchar(40) NOT NULL,
  `id_profesores` varchar(36) DEFAULT NULL,
  PRIMARY KEY (`id_proyecto`),
  UNIQUE KEY `url_proyecto` (`url_proyecto`),
  UNIQUE KEY `nombre_proyecto` (`nombre_proyecto`),
  KEY `fk_id_profesor_proyectos` (`id_profesores`),
  CONSTRAINT `fk_id_profesor_proyectos` FOREIGN KEY (`id_profesores`) REFERENCES `profesores` (`id_profesores`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `proyectos`
--

LOCK TABLES `proyectos` WRITE;
/*!40000 ALTER TABLE `proyectos` DISABLE KEYS */;
/*!40000 ALTER TABLE `proyectos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `roles`
--

DROP TABLE IF EXISTS `roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `roles` (
  `id_rol` varchar(36) NOT NULL DEFAULT uuid(),
  `rol_estudiante` varchar(25) NOT NULL,
  PRIMARY KEY (`id_rol`),
  UNIQUE KEY `rol_estudiante` (`rol_estudiante`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `roles`
--

LOCK TABLES `roles` WRITE;
/*!40000 ALTER TABLE `roles` DISABLE KEYS */;
/*!40000 ALTER TABLE `roles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `rubro_comercial`
--

DROP TABLE IF EXISTS `rubro_comercial`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `rubro_comercial` (
  `id_rubro` varchar(36) NOT NULL DEFAULT uuid(),
  `tipo_rubro` varchar(50) NOT NULL,
  PRIMARY KEY (`id_rubro`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rubro_comercial`
--

LOCK TABLES `rubro_comercial` WRITE;
/*!40000 ALTER TABLE `rubro_comercial` DISABLE KEYS */;
/*!40000 ALTER TABLE `rubro_comercial` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `secciones`
--

DROP TABLE IF EXISTS `secciones`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `secciones` (
  `id_seccion` varchar(36) NOT NULL DEFAULT uuid(),
  `secciones` varchar(1) NOT NULL,
  PRIMARY KEY (`id_seccion`),
  UNIQUE KEY `secciones` (`secciones`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `secciones`
--

LOCK TABLES `secciones` WRITE; 
/*!40000 ALTER TABLE `secciones` DISABLE KEYS */;
/*!40000 ALTER TABLE `secciones` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tipo_propuestas`
--

DROP TABLE IF EXISTS `tipo_propuestas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tipo_propuestas` (
  `id_tipo_propuesta` varchar(36) NOT NULL DEFAULT uuid(),
  `tipo_propuesta` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id_tipo_propuesta`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tipo_propuestas`
--

LOCK TABLES `tipo_propuestas` WRITE;
/*!40000 ALTER TABLE `tipo_propuestas` DISABLE KEYS */;
/*!40000 ALTER TABLE `tipo_propuestas` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-06-29 17:17:45
