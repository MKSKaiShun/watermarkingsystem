<?php
	
include_once 'Dbconnect.php';

//set validation error flag as false
$error=false;

//check if form us submitted
if(isset($_POST['signup']))
{
	$Username=mysqli_real_escape_string($con,$_POST['Username']);
	$Password=mysqli_real_escape_string($con,$_POST['Password']);
	$Password2=mysqli_real_escape_string($con,$_POST['Password2']);
	$User_email=mysqli_real_escape_string($con,$_POST['User_email']);
	
	//name can contain only alpha characters and space
	if(!preg_match("/^[a-zA-Z ]+$/",$Username))
	{
		$error=true;
		$Username_error="Name must contain only alphabets and space";
	}
	if(!filter_var($User_email,FILTER_VALIDATE_EMAIL))
	{
		$error=true;
		$User_email_error="Please Enter Valid Email ID";
	}
	if(strlen($Password)<6)
	{
		$error=true;
		$Password_error="Password must be minimum of 6 characters";
	}
	if($Password != $Password2)
	{
		$error=true;
		$Password2_error="Password and Confirm Password doesn't match";
	}
	if(!$error)
	{
		if(mysqli_query($con,"INSERT INTO i_members(Username,Password,User_email) VALUES('".$Username."','".md5($Password)."','".$User_email."')"))
		{
			$successmsg="Successfully Registered!";
		}
		else
		{
			$errormsg="Error in registering...Please try again later!";
		}
	}
		
}
	
	//Let's check if the username is already in username
	//$user_check=mysqli_query("SELECT Username FROM i_members WHERE Username='$Username'");
	//$do_user_check=mysqli_num_rows($user_check);
	
	//Now display errors
	//if($do_user_check>0)
	//{
	//	die("Username is already in use!<br>");
	//}
	
?>

<html lang="en">
<head>
  <title>i-Mark Watermarking System</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="icon" type="image/png" href="./images/myLogo.png">
  <link rel="stylesheet" type="text/css" href="./css/bootstrap.min.css">
  <link href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css" rel="stylesheet">
  <script src="./css/jquery.min.js"></script>
  <script src="./css/bootstrap.min.js"></script>
  <style>
  
    /* Set height of the grid so .sidenav can be 100% (adjust as needed) */
    .row.content {height: 600px;}
	
	 /* Set height of the grid so .sidenav can be 100% (adjust as needed) */
    .row.content2 {height: 275px;
	width: 550px;}
	
	* Set height of the grid so .sidenav can be 100% (adjust as needed) */
    .row.content3 {
	height: 250px;
	width: 550px;}
	
	.container2 {height: 300px;
	width 900px;}
	
	.boxes{
		background-color: #cce6ff;
		height:220px;
	}
    
    /* Set gray background color and 100% height */
    .sidenav{
      background-color: #000000;
	  opacity: 0.8;
      height: 100%;
    }
        
    /* On small screens, set height to 'auto' for the grid */
    @media screen and (max-width: 767px) {
      .row.content {height: auto;} 
    }
	
 
 .carousel-inner > .item > img,
  .carousel-inner > .item > a > img {
      width: 70%;
      margin: auto;
  }
  
    .well{
	  background-image: url("./images/images.jpg");
	  height:97px;
	  margin-bottom: 0px;
	  
  }
  
  .well2{
	  background-image: url("./images/well2.jpg");
	  height:50px;
	  margin-bottom: 0px;
  }
  
  legend {
    width: 100%;
    padding: 0;
	margin-top: 10px;
    margin-bottom: 0px;
    font-size: 21px;
    line-height: inherit;
    color: #333;
    border: 0;
    border-bottom: 1px solid #e5e5e5;
}
  
  .signupcolor{
	 background-color: #4CAF50; /* Green */
    border: none; 
	margin-top: 19px;
  }
  
  
  .btn.btn-info.btn-lg {
    background-color: #4CAF50; /* Green */
    border: none;
    color: white;
    padding: 8px 10px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
}

h4{margin-top : 0px;}

.nav-pills>li>a:hover{color:#fff;background-color:#00ffcc}
  </style>
</head>
<body background="./images/Cool-Grey-Background.jpg">

				<nav class="navbar navbar-inverse visible-xs">
					<div class="container-fluid">
						<div class="navbar-header">
							<button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
							<span class="icon-bar"></span>
							<span class="icon-bar"></span>
							<span class="icon-bar"></span>                        
							</button>
							<a class="navbar-brand">
								<img src="./images/myLogo.png"  width="50" height="35">
								
							</a>
							<h3><font color="#66998c"<p> Watermarking System</p></font></h3>
						</div>
						<div class="collapse navbar-collapse" id="myNavbar">
							<ul class="nav navbar-nav">
								<li><a href="mainpage.php">Home</a></li>
								<li><a href="visible.php">Try It Free</a></li>
								<li><a href="guide.php">Guidelines</a></li>
								<li><a href="Contactus.php">Contact Us</a></li>
								<li class="active"><button type="button" class="btn btn-info btn-lg"><a href="Register.php"><span class="glyphicon glyphicon-user"></span>&nbsp;Sign up</a></button></li>
								<li><button type="button" class="btn btn-info btn-lg"><a href="Login.php.php"><span class="glyphicon glyphicon-log-in"></span>&nbsp; &nbsp;Login&nbsp;</a></button></li>
							 </ul>
						</div>
					</div>
				</nav>

<div class="container">
	<div class="row content">
		<br/>
			<div class="col-sm-2 sidenav hidden-xs">
				<img src="./images/myLogo.png" width="100" height="100">
				<h3><font color="#66998c"<p> Watermarking System</p></font></h3>
				<br/>
					<ul class="nav nav-pills nav-stacked">
						<li><a href="mainpage.php"><h4><font color="white">Home</font></h4></a></li>
						<li><a href="visible.php"><h4><font color="white">Try It Free</font></h4></a></li>
						<li><a href="guide.php"><h4><font color="white">Guidelines</font></h4></a></li>
						<li><a href="Contactus.php"><h4><font color="white">Contact Us</font></h4></a></li>
						<li class="active"><button type="button" class="btn btn-info btn-lg"><a href="Register.php"><span class="glyphicon glyphicon-user"></span><font color="white">&nbsp;Sign up</font></a></button></li>
						<li><button type="button" class="btn btn-info btn-lg" ><a href="Login.php"><span class="glyphicon glyphicon-log-in"></span><font color="white">&nbsp; &nbsp;Login&nbsp;</font></a></button></li>
						</ul><br>
			</div>
	
	<br>
	
	
	<div class="col-sm-10">
	<div class="col-md-offset-1 col-md-9 well">
	  <center>
        <h4>Watermarking Your Photos Has Never Been Easier</h4>
		<a href="visible.php" class="btn btn-info btn-lg">Start Watermarking Now<span class="glyphicon glyphicon-menu-right"></span> 
        </a>         
	  </center>
	  
      </div>
	  <br>
		<div class="row">
        <div class="col-md-offset-2 col-md-7  well2">
            <form role="form" action="<?php echo $_SERVER['PHP_SELF']; ?>" method="post" name="signupform">
                <fieldset>
                    <legend><center>Sign Up</center></legend>
				<div class="signupcolor">
                    <div class="form-group">
                        <label for="Username">Name</label>
                        <input type="text" name="Username" placeholder="Enter Full Name" required value="<?php if($error) echo $Username; ?>" class="form-control" />
                        <span class="text-danger"><?php if (isset($Username_error)) echo $Username_error; ?></span>
                    </div>       

                    <div class="form-group">
                        <label for="pwd">Password</label>
                        <input type="password" name="Password" placeholder="Password" required class="form-control" />
                        <span class="text-danger"><?php if (isset($Password_error)) echo $Password_error; ?></span>
                    </div>

                    <div class="form-group">
                        <label for="pwd">Confirm Password</label>
                        <input type="password" name="Password2" placeholder="Confirm Password" required class="form-control" />
                        <span class="text-danger"><?php if (isset($Password2_error)) echo $Password2_error; ?></span>
                    </div>
					
					 <div class="form-group">
                        <label for="email">Email</label>
                        <input type="text" name="User_email" placeholder="Email" required value="<?php if($error) echo $User_email; ?>" class="form-control" />
                        <span class="text-danger"><?php if (isset($User_email_error)) echo $User_email_error; ?></span>
                    </div>

                    <div class="form-group">
                        <input type="submit" name="signup" value="Sign Up" class="btn btn-primary" />
                    </div>
				</div>
                </fieldset>
            </form>
            <span class="text-success" style="background-color:#4dd2ff;"><?php if (isset($successmsg)) { echo $successmsg;} ?></span>
            <span class="text-danger"><?php if (isset($errormsg)) { echo $errormsg; } ?></span>
        </div>
    </div>
	</div>
	</div>
	</div>
	</body>
</html>