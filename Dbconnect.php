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
?>