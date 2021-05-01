/*!40101 SET NAMES utf8mb4 */;
CREATE TABLE `countries` (
  `id` int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `name` varchar(255) NOT NULL
);
INSERT INTO `countries` (`name`)
VALUES ('Франция'),
  ('Испания'),
  ('США'),
  ('Китай'),
  ('Италия');