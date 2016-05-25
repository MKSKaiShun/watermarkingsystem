<?php
session_start();
?>
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
	 $Image_key=$_POST['Image_key'];
	 
	 //var_dump($_POST);
	//exit();
	$sql="INSERT INTO image(imessage,data,Image_key) VALUES('$imessage','$data','$Image_key')";
	if(mysqli_query($con,$sql))
	{
		
		echo header("Location: Library.php");
	}
	
	
	
?>