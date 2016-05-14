<?php     
include('Dbconnect.php');

if(isset($_REQUEST['submit'])!='')
{
if($_REQUEST['Username']==''|| $_REQUEST['User_email']==''|| 
		$_REQUEST['Password']=='')
{
echo "please fill the empty field.";
?>
	<script type="text/javascript">

		function Redirect()
			{
				window.location="./mainpage.php";
			}

				document.write("You will be redirected to main page in 5 sec.");
				setTimeout('Redirect()', 5000);

	</script>
<?php
}
else
{
$sql="insert into user_data(Username,User_email,Password) values
	('".$_REQUEST['Username']."', '".$_REQUEST['User_email']."', 
		'".$_REQUEST['Password']."')";
		
$res=mysql_query($sql);
if($res)
{
echo "Record successfully inserted";
echo "<br/>";
?>
	<script type="text/javascript">

		function Redirect()
		{
			window.location="./usermainpage.php";
		}

			document.write("You will be redirected to main page in 4 sec.");
			setTimeout('Redirect()', 4000);

	</script>
<?php
}
else
{
echo "There is some problem in inserting record";
}
}
}
?>