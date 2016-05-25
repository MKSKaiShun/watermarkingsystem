<?php

	 define('Server','127.10.146.130');
	 define('Root User', 'admin8nWg8HU');
	 define('Root Password','eYbE4_Ef1qiR');
	 define('Database Name','imark');
	 
	 $con = mysqli_connect(Server,Root User,Root Password,Database Name);
	 if(mysqli_connect_errno())
	 {
		 echo "Failed to connect mysql:".mysqli_connect_error();
	 }
?>