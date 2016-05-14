<?php

	 define('HOST','localhost');
	 define('USERNAME', 'root');
	 define('PASSWORD','MKS29089');
	 define('DB','i-Mark');
	 
	 $con = mysqli_connect(HOST,USERNAME,PASSWORD,DB);
	 if(mysqli_connect_errno())
	 {
		 echo "Failed to connect mysql:".mysqli_connect_error();
	 }
	 
	 $imessage=$_POST['imessage'];
	 $data=$_POST['data'];
	 
	 //var_dump($_POST);
	//exit();
	$sql="INSERT INTO image(imessage,data) VALUES('$imessage','$data')";
	if(mysqli_query($con,$sql))
	{
		//echo "Error: " . mysql_error();
		echo $imessage;
	}
	
	
	
?>