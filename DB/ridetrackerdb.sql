-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema ridetrackerdb
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `ridetrackerdb` ;

-- -----------------------------------------------------
-- Schema ridetrackerdb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `ridetrackerdb` DEFAULT CHARACTER SET utf8 ;
USE `ridetrackerdb` ;

-- -----------------------------------------------------
-- Table `ride`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `ride` ;

CREATE TABLE IF NOT EXISTS `ride` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `bike` VARCHAR(45) NULL,
  `address_start` VARCHAR(45) NULL,
  `city_start` VARCHAR(45) NULL,
  `state_start` VARCHAR(45) NULL,
  `zipcode_start` VARCHAR(45) NULL,
  `address_end` VARCHAR(45) NULL,
  `city_end` VARCHAR(45) NULL,
  `state_end` VARCHAR(45) NULL,
  `zipcode_end` VARCHAR(45) NULL,
  `distance` INT NULL,
  `duration` TIME NULL,
  `calories` INT NULL,
  `avg_pwr` INT NULL,
  `avg_hr` INT NULL,
  `course_url` VARCHAR(1000) NULL,
  `activity_url` VARCHAR(1000) NULL,
  `comments` VARCHAR(300) NULL,
  `rating` INT(5) NULL,
  `description` VARCHAR(500) NULL,
  `name` VARCHAR(45) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

SET SQL_MODE = '';
DROP USER IF EXISTS ridetrackeruser@localhost;
SET SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';
CREATE USER 'ridetrackeruser'@'localhost' IDENTIFIED BY '#3ridetracker#3';

GRANT SELECT, INSERT, TRIGGER, UPDATE, DELETE ON TABLE * TO 'ridetrackeruser'@'localhost';

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
