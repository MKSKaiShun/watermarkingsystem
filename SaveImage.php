<?php

	 define('HOST','localhost');
	 define('USERNAME', 'root');
	 define('PASSWORD','MKS29089');
	 define('DB','i-Mark');
	 
	 $con = mysqli_connect(HOST,USERNAME,PASSWORD,DB);
	 
	 $imessage=$_POST['imessage'];
	
	$sql="INSERT INTO image(imessage) VALUES('$imessage')";
	if(mysql_query($con,$sql))
	{
		echo "Error: " . mysql_error();
	}
	
	echo imessage;
	
?>