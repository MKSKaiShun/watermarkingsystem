<?php
session_start(); // Starting Session
$error=''; // Variable To Store Error Message
if (isset($_POST['submit'])) {
if (empty($_POST['Username']) || empty($_POST['Password'])) {
$error = "Username or Password is invalid";
}
else
{
// Define $Username and $Password
$Username=$_POST['Username'];
$Password=$_POST['Password'];
// Establishing Connection with Server by passing server_name, 
// user_id and Password as a parameter
$connection = mysql_connect("localhost", "root", "MKS29089");
// To protect MySQL injection for Security purpose
$Username = stripslashes($Username);
$Password = stripslashes($Password);
$Username = mysql_real_escape_string($Username);
$Password = mysql_real_escape_string($Password);
// Selecting Database
$db = mysql_select_db("i-mark", $connection);
// SQL query to fetch information of registerd users and finds user match.
$query = mysql_query("select * from user_data where Password='$Password' 
						AND Username='$Username'", $connection);
						
$rows = mysql_num_rows($query);
if ($rows == 1) {
$_SESSION['login_user']=$Username; // Initializing Session
header("location: usermainpage.php"); // Redirecting To Other Page
} else {
$error = "Username or Password is invalid";
echo "Username or Password is invalid";
echo "<br>";

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
mysql_close($connection); // Closing Connection
}
}
?>