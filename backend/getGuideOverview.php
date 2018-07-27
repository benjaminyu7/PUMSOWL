<?php
	$dbc = new PDO('mysql:host=localhost;dbname=pumsUsers', admin, administrator);
	$getOverview = $dbc->prepare("SELECT * FROM pumsGuides");
	$getOverview->execute();
	$getOverview->bindColumn('title',$title);
	$getOverview->fetch(PDO::FETCH_BOUND);
	$rawJson=['title'=>$title];
	echo json_encode($rawJson);
?>
