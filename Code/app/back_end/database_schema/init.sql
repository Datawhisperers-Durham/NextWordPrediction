mysql -u root_1 -p;
use word_predictor_schema;
DROP TABLE IF EXISTS `prediction_history`;
CREATE TABLE `prediction_history` (`id` int(11) NOT NULL AUTO_INCREMENT,`user_input` varchar(256) DEFAULT NULL,`prediction_output` varchar(45) DEFAULT NULL,PRIMARY KEY (`id`)) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
DROP TABLE IF EXISTS `user_prediction_selection`;
CREATE TABLE `user_prediction_selection` (`id` int(11) NOT NULL AUTO_INCREMENT,`user_input` varchar(256) DEFAULT NULL,`user_selected_word` varchar(45) DEFAULT NULL,PRIMARY KEY (`id`)) ENGINE=InnoDB AUTO_INCREMENT=29 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;