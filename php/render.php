<?php
	include_once($_SERVER['DOCUMENT_ROOT']."/php/database.php");
	include_once($_SERVER['DOCUMENT_ROOT']."/php/templates.php");

	function renderError($msg) {
		echo "
		<div class=\"text-center\">
			<h1>
				There was an issue rendering: $msg.
			<h1/>
		</div>
		";
	}

	function renderLog($msg) {
		echo "
		<div class=\"text-center\">
			<h1>
				$msg
			<h1/>
		</div>
		";
	}

	function render($option) {
		$contents = "";

		switch ($option) {
			case 'network-settings':
				$response = Database::getSettings('network');
				echo ($response === false) ? 
					renderError("network-settings") : 
					populateTemplate("settings", $response);
				break;

			case 'performance-settings':
				$response = Database::getSettings('performance');
				echo ($response === false) ? 
					renderError("performance-settings") : 
					populateTemplate("settings", $response);
				break;

			case 'power-settings':
				$response = Database::getSettings('power');
				echo ($response === false) ? 
					renderError("power-settings") : 
					populateTemplate("settings", $response);
				break;

			case 'environment-settings':
				$response = Database::getSettings('environment');
				echo ($response === false) ? 
					renderError("environemnt-settings") : 
					populateTemplate("settings", $response);
				break;


			case 'network-cards':
				$response = Database::getCards('network');
				echo ($response === false) ? 
					renderError("network-cards") : 
					populateTemplate("cards", $response);
				break;

			case 'performance-cards':
				$response = Database::getCards('performance');
				echo ($response === false) ? 
					renderError("performance-cards") : 
					populateTemplate("cards", $response);
				break;

			case 'power-cards':
				$response = Database::getCards('power');
				echo ($response === false) ? 
					renderError("power-cards") : 
					populateTemplate("cards", $response);
				break;

			case 'environment-cards':
				$response = Database::getCards('environment');
				echo ($response === false) ? 
					renderError("environemnt-cards") : 
					populateTemplate("cards", $response);
				break;

			case 'presentation-cards':
				$response = Database::getPresentationCards();
				echo ($response === false) ? 	
					renderLog("Do you have any cards set to present?") : 
					populateTemplate("cards", $response);
				break;

			default:
				# code...
				break;
		}
	}
?>