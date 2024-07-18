-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               8.0.33 - MySQL Community Server - GPL
-- Server OS:                    Win64
-- HeidiSQL Version:             12.1.0.6537
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Dumping database structure for sum
CREATE DATABASE IF NOT EXISTS `sum` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `sum`;

-- Dumping structure for table sum.barang
CREATE TABLE IF NOT EXISTS `barang` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nama` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `harga` int DEFAULT '0',
  `gambar` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci ROW_FORMAT=DYNAMIC;

-- Dumping data for table sum.barang: ~5 rows (approximately)
INSERT INTO `barang` (`id`, `nama`, `harga`, `gambar`, `createdAt`, `updatedAt`) VALUES
	(5, 'Barang', 100000, 'uploads/6cd162b4-ea3e-4db9-9bd2-4b72c65af844.jpg', '2024-06-22 14:13:02', '2024-07-01 18:57:49'),
	(6, 'Tenda', 200000, 'uploads/c711ff67-da21-4a4b-9d94-896d4a354151.jpg', '2024-06-22 15:36:39', '2024-06-22 18:10:12'),
	(7, 'Kursi', 50000, 'uploads/828382ff-7757-4449-847a-3e8cb44b6f9e.jpg', '2024-06-22 16:08:20', '2024-06-22 18:10:16'),
	(8, 'Meja', 300000, 'uploads/a2ed14d2-729b-476b-8578-7e46e6abec8a.jpg', '2024-06-22 18:03:28', '2024-06-22 18:03:28'),
	(9, 'gfdgfd', 200000, 'uploads/7cb429c9-77bb-401b-959b-4bcba893c6d4.png', '2024-06-23 03:59:10', '2024-06-23 03:59:10');

-- Dumping structure for table sum.eo
CREATE TABLE IF NOT EXISTS `eo` (
  `id` int NOT NULL AUTO_INCREMENT,
  `kegiatan` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `venue` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `konsep` text COLLATE utf8mb4_general_ci,
  `venue_panjang` int DEFAULT '0',
  `venue_lebar` int DEFAULT '0',
  `kapasitas_orang` int DEFAULT '0',
  `panggung_lebar` int DEFAULT '0',
  `panggung_panjang` int DEFAULT '0',
  `kapasitas_sound` int DEFAULT '0',
  `kelengkapan` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci,
  `pembayaran` text COLLATE utf8mb4_general_ci,
  `user_id` varchar(50) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `status` varchar(100) COLLATE utf8mb4_general_ci DEFAULT 'Menunggu Pembayaran',
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci ROW_FORMAT=DYNAMIC;

-- Dumping data for table sum.eo: ~5 rows (approximately)
INSERT INTO `eo` (`id`, `kegiatan`, `venue`, `konsep`, `venue_panjang`, `venue_lebar`, `kapasitas_orang`, `panggung_lebar`, `panggung_panjang`, `kapasitas_sound`, `kelengkapan`, `pembayaran`, `user_id`, `status`, `createdAt`, `updatedAt`) VALUES
	(11, 'CHECKBOT', 'Indoor', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et', 5, 3, 1, 10, 9, 4, '{"Sound":true,"Blower":true,"Lighting":false,"Kusi VIP":true,"Mini Garden":true}', NULL, '6', 'Menunggu Pembayaran', '2024-06-21 16:18:07', '2024-06-23 06:12:21'),
	(12, 'hhhjj', 'Indoor', 'hkjhoji', 15, 15, 12, 6, 4, 100000, '{"Sound":true,"Dekor Meja":true,"Foto Both":true,"Backdrop Panggung":true,"Kusi VIP":true,"Meja VIP":true}', NULL, '6', 'Menunggu Pembayaran', '2024-06-23 03:51:04', '2024-06-23 03:51:04'),
	(13, 'FIKRI HIDAYAT', 'Indoor', 'konsep', 2, 2, 4, 2, 2, 2, '{"Sound":true,"Blower":true,"Mini Garden":true}', 'uploads/7191981c-8f7a-4ed3-8efa-dcf37b331649.jpg', '3', 'Proses Antar', '2024-06-23 06:39:55', '2024-07-15 11:20:30'),
	(14, 'kegiatan', 'Outdoor', 'adfasdf', 1, 1, 1, 1, 1, 1, '{"Sound":true,"Blower":true}', NULL, '10', 'Menunggu Pembayaran', '2024-07-04 14:05:13', '2024-07-04 14:05:13'),
	(15, 'TEST DETAIL', 'Indoor', 'sdfsdfsdf', 2, 2, 2, 2, 2, 2, '{"Sound":true,"Blower":true}', 'uploads/07fa552f-7c9b-4eae-bb49-52d3c2bc2e8d.jpg', '3', 'Selesai', '2024-07-12 11:57:02', '2024-07-15 10:56:29');

-- Dumping structure for table sum.print
CREATE TABLE IF NOT EXISTS `print` (
  `id` int NOT NULL AUTO_INCREMENT,
  `kegiatan` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `cetak` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `bahan` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `bahan_harga` int DEFAULT '0',
  `ukuran_panjang` double DEFAULT NULL,
  `ukuran_lebar` double DEFAULT NULL,
  `finishing` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `desain` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci,
  `total` int DEFAULT '0',
  `pembayaran` text COLLATE utf8mb4_general_ci,
  `user_id` varchar(50) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `status` varchar(100) COLLATE utf8mb4_general_ci DEFAULT 'Menunggu Pembayaran',
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci ROW_FORMAT=DYNAMIC;

-- Dumping data for table sum.print: ~3 rows (approximately)
INSERT INTO `print` (`id`, `kegiatan`, `cetak`, `bahan`, `bahan_harga`, `ukuran_panjang`, `ukuran_lebar`, `finishing`, `desain`, `total`, `pembayaran`, `user_id`, `status`, `createdAt`, `updatedAt`) VALUES
	(6, 'KEGIATAN 2', 'Banner', '340 gsm', 20000, 0.5, 1, 'Lebih Bahan', 'uploads/0803c074-209d-47ef-93f9-aa8a30a85bd4.jpg', 10000, NULL, '6', 'Menunggu Pembayaran', '2024-06-22 14:00:15', '2024-06-23 04:19:12'),
	(7, 'llll', 'Banner', '340 gsm', 20000, 120, 200, 'Lebih Bahan', 'uploads/d1baa735-1423-44ae-b0a2-203aa20e0a77.jpg', 480000000, NULL, '6', 'Menunggu Pembayaran', '2024-06-23 03:53:07', '2024-06-23 04:15:01'),
	(8, 'rengga-casyatirengga-casyati', 'Baliho', '280 gsm', 15000, 4, 4, '', 'uploads/3cdcf25a-55f6-4bc4-a19f-4bee99cb2932.jpg', 240000, 'uploads/69869dca-a06b-4086-b6cb-52cdbe8674fa.jpg', '3', 'Proses Antar', '2024-06-23 06:40:32', '2024-07-15 07:42:47');

-- Dumping structure for table sum.satulayar
CREATE TABLE IF NOT EXISTS `satulayar` (
  `id` int NOT NULL AUTO_INCREMENT,
  `kegiatan` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `tanggal_pemesanan` date DEFAULT NULL,
  `tanggal_pengembalian` date DEFAULT NULL,
  `jumlah_hari` int DEFAULT '0',
  `pengantaran` varchar(50) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `lokasi` varchar(50) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `lokasi_harga` int DEFAULT '0',
  `total_barang` int DEFAULT '0',
  `total` int DEFAULT '0',
  `pembayaran` text COLLATE utf8mb4_general_ci,
  `user_id` varchar(50) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `status` varchar(100) COLLATE utf8mb4_general_ci DEFAULT 'Menunggu Pembayaran',
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci ROW_FORMAT=DYNAMIC;

-- Dumping data for table sum.satulayar: ~3 rows (approximately)
INSERT INTO `satulayar` (`id`, `kegiatan`, `tanggal_pemesanan`, `tanggal_pengembalian`, `jumlah_hari`, `pengantaran`, `lokasi`, `lokasi_harga`, `total_barang`, `total`, `pembayaran`, `user_id`, `status`, `createdAt`, `updatedAt`) VALUES
	(1, 'KEGIATAN', '2024-06-23', '2024-06-24', 1, 'Jemput', '', 0, 450000, 450000, NULL, '6', 'Menunggu Pembayaran', '2024-06-22 17:08:08', '2024-06-22 17:08:29'),
	(2, 'FIKRI HIDAYAT', '2024-06-23', '2024-06-24', 1, 'Diantar', 'Dalam Kota', 100000, 1100000, 1250000, 'uploads/e44fde70-5a61-4d34-aa64-dc87045af6e4.jpg', '3', 'Selesai', '2024-06-23 06:40:55', '2024-07-15 11:16:07'),
	(3, 'KEGIATAN', '2024-07-07', '2024-07-09', 2, 'Jemput', '', 0, 100000, 200000, 'uploads/880bd701-8c16-4a06-9a9c-3137c0c2f5b9.jpg', '3', 'Proses Antar', '2024-07-07 06:49:30', '2024-07-15 07:59:30');

-- Dumping structure for table sum.satulayar_barang
CREATE TABLE IF NOT EXISTS `satulayar_barang` (
  `id` int NOT NULL AUTO_INCREMENT,
  `barang_id` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `satulayar_id` varchar(100) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `qty` int DEFAULT '0',
  `total` int DEFAULT '0',
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci ROW_FORMAT=DYNAMIC;

-- Dumping data for table sum.satulayar_barang: ~5 rows (approximately)
INSERT INTO `satulayar_barang` (`id`, `barang_id`, `satulayar_id`, `qty`, `total`, `createdAt`, `updatedAt`) VALUES
	(3, '6', '1', 2, 400000, '2024-06-22 17:08:29', '2024-06-22 17:08:29'),
	(4, '7', '1', 1, 50000, '2024-06-22 17:08:29', '2024-06-22 17:08:29'),
	(5, '5', '2', 2, 200000, '2024-06-23 06:40:55', '2024-06-23 06:40:55'),
	(6, '8', '2', 3, 900000, '2024-06-23 06:40:55', '2024-06-23 06:40:55'),
	(9, '5', '3', 1, 100000, '2024-07-07 06:51:36', '2024-07-07 06:51:36');

-- Dumping structure for table sum.user
CREATE TABLE IF NOT EXISTS `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_username` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `user_password` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci,
  `role` varchar(50) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `user_name` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci,
  `user_phone` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Dumping data for table sum.user: ~4 rows (approximately)
INSERT INTO `user` (`id`, `user_username`, `user_password`, `role`, `user_name`, `user_phone`, `createdAt`, `updatedAt`) VALUES
	(2, 'fhdyt', '$2a$08$N1.0Vjz1VzaoLwp2/fAu2uJ5DAMZrye8JAr5knPUyNcb8rNyh1Kju', 'admin', 'Fikri', '4456456', NULL, '2024-07-01 18:57:58'),
	(3, 'user', '$2a$08$N1.0Vjz1VzaoLwp2/fAu2uJ5DAMZrye8JAr5knPUyNcb8rNyh1Kju', 'user', 'Fikri HIDAYAT', '022222', NULL, '2024-06-23 06:39:05'),
	(6, '123123', '$2a$08$U.bGcjbsTydPz9mR0nt70.BHICHY38457q0qT9Pwb0cwiUHFjrEq6', 'user', 'asdasd', 'fasdfasdf', '2024-07-04 13:53:31', '2024-07-04 13:53:31'),
	(10, 'asdf', '$2a$08$tF9U6OliWHwVM2Gvqnsip.ij0WdpGMqi07/A/2Q5rrnMHY57kgkh2', 'user', 'asdf', '12123', '2024-07-04 14:01:08', '2024-07-04 14:01:08');

-- Dumping structure for table sum.work
CREATE TABLE IF NOT EXISTS `work` (
  `id` int NOT NULL AUTO_INCREMENT,
  `perusahaan` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `order` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `bahan` varchar(200) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `ukuran_panjang` int DEFAULT '0',
  `ukuran_lebar` int DEFAULT '0',
  `detail` varchar(50) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `finishing` varchar(50) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `desain` text COLLATE utf8mb4_general_ci,
  `pembayaran` text COLLATE utf8mb4_general_ci,
  `user_id` varchar(50) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `status` varchar(100) COLLATE utf8mb4_general_ci DEFAULT 'Menunggu Pembayaran',
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci ROW_FORMAT=DYNAMIC;

-- Dumping data for table sum.work: ~3 rows (approximately)
INSERT INTO `work` (`id`, `perusahaan`, `order`, `bahan`, `ukuran_panjang`, `ukuran_lebar`, `detail`, `finishing`, `desain`, `pembayaran`, `user_id`, `status`, `createdAt`, `updatedAt`) VALUES
	(1, 'Work Test', 'Logo', 'Full Acrilyc', 5, 6, '', 'Stiker', 'uploads/52e23971-86fa-4352-b397-75794c4fac53.jpg', NULL, '6', 'Menunggu Pembayaran', '2024-06-22 03:23:07', '2024-06-22 18:11:00'),
	(4, 'lkkp;', 'Logo & Letter', 'Body Alumunium Depan Acrilyc', 100, 40, NULL, 'Duho', 'uploads/764e257e-df71-4be7-854f-f8910d9a6264.jpg', NULL, '6', 'Menunggu Pembayaran', '2024-06-23 03:52:21', '2024-06-23 03:52:21'),
	(5, 'rengga-casyati', 'Logo', 'Full Acrilyc', 2, 2, NULL, 'Stiker', 'uploads/5eb62d1c-9295-43c5-9026-05d6be5fa8de.jpg', 'uploads/e8512ba0-d8e9-4292-b63c-4851170001e4.jpg', '3', 'Persiapan Pengantaran', '2024-06-23 06:40:21', '2024-07-15 07:42:43');

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
