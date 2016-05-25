<?php

	 define('HOST','127.10.146.130:3306');
	 define('USERNAME', 'adminKyZq78U');
	 define('PASSWORD','ZTT9pfUH5VrN');
	 define('DB','system');
	 
	 $con = mysqli_connect(HOST,USERNAME,PASSWORD,DB);
	 if(mysqli_connect_errno())
	 {
		 echo "Failed to connect mysql:".mysqli_connect_error();
	 }
?>