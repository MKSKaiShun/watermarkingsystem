<?php

	$data=$_POST['data'];
	
	$server="localhost";
	$username="root";
	$password="MKS29089";
	$database="i-mark";
	
	$bd=mysql_connect($server,$username,$password) or die ("1");
	$ok=mysql_select_db($database,$bd) or die("2");
	
	$sql="INSERT INTO image(data) VALUES ($data)";
	if(!mysql_query($sql))
	{
		echo "Error: " . mysql_error();
	}
	
	echo $qry;
	
?>