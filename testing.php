<?php
	ini_set('mysql_connect_timeout',300);
	ini_set('default_socket_timeout',300);
?>

<html>
	<body>
		<form method="post" enctype="multipart/form-data">
		<br/>
			<input type="file" name="image"/>
			<br/><br/>
			<input type="submit" name="submit" value="Upload"/>
		</form>
		<?php	
			if(isset($_POST['submit']))
			{
				if(getimagesize($_FILES['image']['tmp_name'])==FALSE)
				{
					echo "Please select an image.";
				}
				else
				{
					$image=addslashes($_FILES['image']['tmp_name']);
					$name=addslashes($_FILES['image']['name']);
					$image=file_get_contents($image);
					$image=base64_encode($image);
					saveimage($name,$image);
				}
			}
			function saveimage($name,$image)
			{
				$connection = mysql_connect("localhost", "root", "MKS29089");
				$db = mysql_select_db("i-mark", $connection);
				$sql="insert into store_images(name,image) values('$name.','$image')";
				$res=mysql_query($sql);
				if($res)
				{
					echo "<br/>Image uploaded.";
				}
				else
				{
					echo "<br/>Image not uploaded.";
				}
			}
			
			?>
		</body>
	</html>