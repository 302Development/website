<?php
	class Database {
	private static function connect() {
		$connection = new PDO("mysql:host=127.0.0.1;dbname=frontend;charset=utf8", "root", "password");
		$connection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
		$connection->setAttribute(PDO::ATTR_EMULATE_PREPARES, true);
		return $connection;
	}

	public static function query($query, $params) {
		$statement = self::connect()->prepare($query);
		$success = $statement->execute($params);
		
		if (explode(' ', $query)[0] == 'SELECT') {
			return $statement->fetchAll();
		}

		return $success;
	}

	private static function checkUpdatable($column) {
		return !in_array($column, array("id", "action"));
	}

	public static function updateCard(&$postData) {
		if (isset($postData['id'])) {
			$cardID = intval($postData['id']);
			
			foreach ($postData as $column => $data) {            	
				if (self::checkUpdatable($column) && (strlen($data) != 0 || !empty($data))) {

					$response = Database::query("UPDATE cards SET $column = :data WHERE id = :cardID",
						array(
							":data" => $data,
							":cardID" => $cardID
						)
					);

					if ($response) 
						echo "Updated card #$cardID: '$column' to '$data'.<br>";
				}
			}
		}		
	}

	public static function deleteCard(&$postData) {
		if (isset($postData['id'])) {
			$cardID = intval($postData['id']);
			$response = Database::query("DELETE FROM cards WHERE id = :cardID",
				array( ":cardID" => $cardID )
			);
			if ($response) 
				echo "Deleted card #$cardID.<br>";
		}		
	}

	public static function addCard(&$postData) {
		if (isset($postData['category'])) {
			// Set defualt values in database.
			$response = Database::query("INSERT INTO cards (title, subtitle, datatitle, type) VALUES ( 'Title', 'Sub-Title', 'Data Title', (SELECT categories.id FROM categories WHERE categories.category = :category))",
				array( ":category" => $postData['category'])
			);

			if ($response) 
				echo "Added a new card.<br>";
		}
	}

	public static function getSettings($category) {
		$response = Database::query("SELECT cards.*, categories.category FROM cards LEFT JOIN categories ON cards.type = categories.id WHERE categories.category = :category ORDER BY cards.id ASC",
			array(":category" => $category)
		);

		return (empty($response)) ? false : $response;
	}

	public static function getCards($category) {
		$response = Database::query("SELECT cards.* FROM cards LEFT JOIN categories ON cards.type = categories.id WHERE disabled = 0 AND categories.category = :category ORDER BY cards.id ASC",
			array(":category" => $category)
		);

		return (empty($response)) ? false : $response;
	}

	public static function getPresentationCards() {
		$response = Database::query("SELECT cards.* FROM cards WHERE disabled = 0 AND publicPresVis = '1' ORDER BY cards.id ASC", array());

		return (empty($response)) ? false : $response;
	}
}
?>