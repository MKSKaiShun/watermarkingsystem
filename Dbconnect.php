<?php

	 define('HOST','localhost');
	 define('USERNAME', 'adminKyZq78U');
	 define('PASSWORD','ZTT9pfUH5VrN');
	 define('DB','system');
	 
	 $con = mysqli_connect(HOST,USERNAME,PASSWORD,DB);
	 if(mysqli_connect_errno())
	 {
		 echo "Failed to connect mysql:".mysqli_connect_error();
	 }
?>