<?php
session_start();

if(isset($_SESSION['usr_id'])!="")
{
	header("Location:usermainpage.php");
}

include_once 'Dbconnect.php';

//check if form is submitted
if(isset($_POST['login']))
{
	$Username=mysqli_real_escape_string($con,$_POST['Username']);
	$Password=mysqli_real_escape_string($con,$_POST['Password']);
	$result=mysqli_query($con,"SELECT * FROM i_members WHERE Username='".$Username."' and Password='".md5($Password)."'");
	
	if($row=mysqli_fetch_array($result))
	{
		$_SESSION['usr_id']=$row['id'];
		$_SESSION['usr_name']=$row['Username'];
		
		header("Location:usermainpage.php");
	}
	else
	{
		$errormsg="Incorrect Username or Password!!!";
	}
}

	//$query = "INSERT INTO i_members SET dt = CURRENT_TIMESTAMP";
	//$sql = mysqli_query($query) or die(mysqli_error());


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
								<li><button type="button" class="btn btn-info btn-lg"><a href="Register.php"><span class="glyphicon glyphicon-user"></span>&nbsp;Sign up</a></button></li>
								<li class="active"><button type="button" class="btn btn-info btn-lg"><a href="Login.php"><span class="glyphicon glyphicon-log-in"></span>&nbsp; &nbsp;Login&nbsp;</a></button></li>
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
						<li><button type="button" class="btn btn-info btn-lg"><a href="Register.php"><span class="glyphicon glyphicon-user"></span><font color="white">&nbsp;Sign up</font></a></button></li>
						<li class="active"><button type="button" class="btn btn-info btn-lg" ><a href="Login.php"><span class="glyphicon glyphicon-log-in"></span><font color="white">&nbsp; &nbsp;Login&nbsp;</font></a></button></li>
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
	  
		<div class="row">	
			<div class="col-md-offset-2 col-md-7  well2">
				<form role="form" action="<?php echo $_SERVER['PHP_SELF']; ?>" method="post" name="loginform">
					<fieldset>
						<legend><center>Login</center></legend>
					<div class="signupcolor">
						<div class="form-group">
							<label for="Username">Username</label>
							<input type="text" name="Username" placeholder="Your Username" required class="form-control" />
						</div>
						
						<div class="form-group">
							<label for="Password">Password</label>
							<input type="password" name="Password" placeholder="Your Password" required class="form-control" />
						</div>

						<div class="form-group">
							<input type="submit" name="login" value="Login" class="btn btn-primary" />
						</div>
					</div>
					</fieldset>
				</form>
				<span class="text-danger" style="background-color:#4dd2ff;"><?php if(isset($errormsg)){echo $errormsg;} ?></span>
			</div>
		</div>
	</div>
	</div>
</div>
</body>
</html>