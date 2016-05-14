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
	  
	$sql="SELECT * from image";
	$result=mysqli_query($con,$sql);

?>

<html>
<body>

<?php
if(mysqli_num_rows($result)>0)
	{
		while($row=mysqli_fetch_assoc($result))
		{
			?>
			
			<img src="<?php echo $row['data'] ?>" />
		
<?php
		
		}
	}
	
	else
	{
		echo "0 result";
	}
	?>


	
</body>
</html>