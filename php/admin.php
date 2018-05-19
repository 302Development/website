<?php
	include_once($_SERVER['DOCUMENT_ROOT']."/php/database.php");

	session_start();

	function notLoggedIn() {
		header("Location: /html/admin-login/");
		die();
	}

	function incorrectLogin() {
		header("Location: /html/admin-login/?incorrect");
		die();
	}

	function timeout() {
		header("Location: /html/admin-login/?timeout");
		die();
	}

	function redirectDashboard() {
		header("Location: /admin/");
		die();
	}

	function checkLogin($username, $password) {
		if (!is_string($username) || !is_string($username)) {
			return false;
		}

		return (strcmp($username, "admin") === 0 && password_verify($password, "$2y$10$8OKna.EwyI.97nULT8CBQeAvgVeVqyTpnQ4DHlFnpwZwGAoxsZLkm"));
	}

	function endSession() {
		unset($_SESSION['login']);
		unset($_SESSION['timeout']);
		session_unset();
		session_destroy();
	}

	function checkSession() {

		if ((isset($_SESSION['timeout']) && ((time() - $_SESSION['timeout']) > 600*1000))) {
			endSession();
			return false;
		}

		return isset($_SESSION['login']);
	}
?>