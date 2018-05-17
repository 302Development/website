<?php
	function getTemplate($name) {
		return file_get_contents($_SERVER['DOCUMENT_ROOT']."/html/templates/".$name.".html");
	}

	function populateTemplate($templateType, &$data) {
		$cleanTemplate = getTemplate($templateType);		
		$out = array();		

		$count = 1;
		foreach ($data as &$card)
			$card['count'] = $count++;

		foreach ($data as &$card) {
			$template = $cleanTemplate;			

			foreach ($card as $key => &$value) 
				$template = str_replace("{{".$key."}}", $value, $template);

			array_push($out, $template);
		}
		return implode($out);
	}
?>