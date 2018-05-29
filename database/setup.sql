SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `frontend`
--

CREATE DATABASE frontend;
USE frontend;
-- --------------------------------------------------------

--
-- Table structure for table `cards`
--

CREATE TABLE `cards` (
  `id` int(10) UNSIGNED NOT NULL,
  `title` varchar(256) NOT NULL,
  `subtitle` varchar(256) NOT NULL,
  `datatitle` varchar(256) NOT NULL,
  `dataunit` varchar(128) NOT NULL,
  `minortick` int(10) UNSIGNED NOT NULL,
  `tickformat` varchar(256) NOT NULL,
  `type` int(10) UNSIGNED NOT NULL,
  `PublicPresVis` tinyint(1) DEFAULT '0',
  `disabled` tinyint(1) DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `cards`
--

INSERT INTO `cards` (`id`, `title`, `subtitle`, `datatitle`, `dataunit`, `minortick`, `tickformat`, `type`, `PublicPresVis`, `disabled`) VALUES
(1, 'Network Card #1', 'Download', 'Download', 'Mb/s', 1, '0,20,30,40,50,60,70,80,90,100', 1, 1, 0),
(2, 'Network Card #2', 'Download', 'Download', 'Mb/s', 1, '0,20,30,40,50,60,70,80,90,100', 1, 0, 0),
(3, 'Network Card #3', 'Download', 'Download', 'Mb/s', 1, '0,20,30,40,50,60,70,80,90,100', 1, 0, 0),
(4, 'Network Card #4', 'Download', 'Download', 'Mb/s', 1, '0,20,30,40,50,60,70,80,90,100', 1, 0, 0),
(5, 'Performance Card #1', 'Performance', 'Performance', 'XX', 1, '0,20,30,40,50,60,70,80,90,100', 2, 1, 0),
(6, 'Performance Card #2', 'Performance', 'Performance', 'XX', 1, '0,20,30,40,50,60,70,80,90,100', 2, 0, 0),
(7, 'Performance Card #3', 'Performance', 'Performance', 'XX', 1, '0,20,30,40,50,60,70,80,90,100', 2, 0, 0),
(8, 'Performance Card #4', 'Performance', 'Performance', 'XX', 1, '0,20,30,40,50,60,70,80,90,100', 2, 0, 0),
(9, 'Power Card #1', 'Power', 'Power', 'MB/s', 1, '0,20,30,40,50,60,70,80,90,100', 3, 1, 0),
(10, 'Power Card #2', 'Power', 'Power', 'MB/s', 1, '0,20,30,40,50,60,70,80,90,100', 3, 0, 0),
(11, 'Power Card #3', 'Power', 'Power', 'MB/s', 1, '0,20,30,40,50,60,70,80,90,100', 3, 0, 0),
(12, 'Power Card #4', 'Power', 'Power', 'MB/s', 1, '0,20,30,40,50,60,70,80,90,100', 3, 0, 0),
(13, 'Environment Card #1', 'Environment', 'Environment', 'PPM', 1, '0,20,30,40,50,60,70,80,90,100', 4, 1, 0),
(14, 'Environment Card #2', 'Environment', 'Environment', 'PPM', 1, '0,20,30,40,50,60,70,80,90,100', 4, 0, 0),
(15, 'Environment Card #3', 'Environment', 'Environment', 'PPM', 1, '0,20,30,40,50,60,70,80,90,100', 4, 0, 0),
(16, 'Environment Card #4', 'Environment', 'Environment', 'PPM', 1, '0,20,30,40,50,60,70,80,90,100', 4, 0, 0);

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `id` int(10) UNSIGNED NOT NULL,
  `category` varchar(256) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `category`) VALUES
(4, 'environment'),
(1, 'network'),
(2, 'performance'),
(3, 'power');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `cards`
--
ALTER TABLE `cards`
  ADD PRIMARY KEY (`id`),
  ADD KEY `type` (`type`);

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`),
  ADD KEY `name` (`category`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `cards`
--
ALTER TABLE `cards`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;
--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- Constraints for dumped tables
--

--
-- Constraints for table `cards`
--
ALTER TABLE `cards`
  ADD CONSTRAINT `cards_ibfk_1` FOREIGN KEY (`type`) REFERENCES `categories` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
