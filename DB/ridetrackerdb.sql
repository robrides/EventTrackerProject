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
-- Table `address`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `address` ;

CREATE TABLE IF NOT EXISTS `address` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `address` VARCHAR(100) NULL,
  `address2` VARCHAR(45) NULL,
  `city` VARCHAR(75) NULL,
  `state` VARCHAR(50) NULL,
  `zipcode` VARCHAR(10) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `ride`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `ride` ;

CREATE TABLE IF NOT EXISTS `ride` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(100) NULL,
  `ride_date` DATE NULL,
  `description` VARCHAR(500) NULL,
  `bike` VARCHAR(45) NULL,
  `distance` DECIMAL(4,2) NULL,
  `duration` INT NULL,
  `calories` INT NULL,
  `avg_pwr` INT NULL,
  `avg_hr` INT NULL,
  `course_url` VARCHAR(1000) NULL,
  `activity_url` VARCHAR(1000) NULL,
  `comments` VARCHAR(300) NULL,
  `rating` INT(6) NULL,
  `address_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_ride_address_idx` (`address_id` ASC),
  CONSTRAINT `fk_ride_address`
    FOREIGN KEY (`address_id`)
    REFERENCES `address` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
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
-- Data for table `address`
-- -----------------------------------------------------
START TRANSACTION;
USE `ridetrackerdb`;
INSERT INTO `address` (`id`, `address`, `address2`, `city`, `state`, `zipcode`) VALUES (1, '4400 S Quebec St', '', 'Denver', 'CO', '80237');
INSERT INTO `address` (`id`, `address`, `address2`, `city`, `state`, `zipcode`) VALUES (2, '309 Harrison Ave', '', 'Leadville', 'CO', '80461');
INSERT INTO `address` (`id`, `address`, `address2`, `city`, `state`, `zipcode`) VALUES (3, '500 Fairgrounds Rd', '', 'Castle Rock', 'CO', '80104');

COMMIT;


-- -----------------------------------------------------
-- Data for table `ride`
-- -----------------------------------------------------
START TRANSACTION;
USE `ridetrackerdb`;
INSERT INTO `ride` (`id`, `name`, `ride_date`, `description`, `bike`, `distance`, `duration`, `calories`, `avg_pwr`, `avg_hr`, `course_url`, `activity_url`, `comments`, `rating`, `address_id`) VALUES (1, 'Cherry Creek Trail', '2019-03-24', 'Bike trail, Denver CO', 'Venge', 45, 9360, 1700, 145, 144, 'https://ridewithgps.com/routes/29518129', 'https://ridewithgps.com/trips/32773581', 'Trail doesn\'t go as far as expected', 3, 1);
INSERT INTO `ride` (`id`, `name`, `ride_date`, `description`, `bike`, `distance`, `duration`, `calories`, `avg_pwr`, `avg_hr`, `course_url`, `activity_url`, `comments`, `rating`, `address_id`) VALUES (2, 'Twin Lakes Leadville', '2019-05-26', 'Single track, lake and mountain view', 'Stumpy', 14.81, 6120, 1000, 150, 144, '', 'https://www.strava.com/activities/2400350614', 'MTB at 10,000 feet, beautiful!', 5, 2);
INSERT INTO `ride` (`id`, `name`, `ride_date`, `description`, `bike`, `distance`, `duration`, `calories`, `avg_pwr`, `avg_hr`, `course_url`, `activity_url`, `comments`, `rating`, `address_id`) VALUES (3, 'Elephant Rock', '2019-06-02', '32nd annual ride', 'Venge', 58.1, 12883, 2300, 150, 146, 'https://ridewithgps.com/routes/30147653', 'https://www.strava.com/activities/2419020601', 'Great day, great ride. Rode with USMES Team members.', 5, 3);

COMMIT;

