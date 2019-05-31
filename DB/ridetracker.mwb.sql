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
  `distance` DECIMAL(3,1) NULL,
  `duration` INT NULL,
  `calories` INT NULL,
  `avg_pwr` INT NULL,
  `avg_hr` INT NULL,
  `course_url` VARCHAR(1000) NULL,
  `activity_url` VARCHAR(1000) NULL,
  `comments` VARCHAR(300) NULL,
  `rating` INT(5) NULL,
  `description` VARCHAR(500) NULL,
  `name` VARCHAR(45) NULL,
  `date` DATE NULL,
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

-- -----------------------------------------------------
-- Data for table `ride`
-- -----------------------------------------------------
START TRANSACTION;
USE `ridetrackerdb`;
INSERT INTO `ride` (`id`, `bike`, `address_start`, `city_start`, `state_start`, `zipcode_start`, `address_end`, `city_end`, `state_end`, `zipcode_end`, `distance`, `duration`, `calories`, `avg_pwr`, `avg_hr`, `course_url`, `activity_url`, `comments`, `rating`, `description`, `name`, `date`) VALUES (1, 'Gravel', '4400 S Quebec St', 'Denver', 'CO', '80237', '4400 S Quebec St', 'Denver', 'CO', '80237', 35.5, 4500, 750, 190, 155, 'https://ridewithgps.com/routes/29705143', '', 'City riding', 3, 'description', 'Gravel Run', '2019-05-11');

COMMIT;

