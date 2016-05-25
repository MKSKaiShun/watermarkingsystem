<?php
session_start();

?>
<?php


	 define('Server','127.13.35.130');
	 define('Root User', 'admin8nWg8HU');
	 define('Root Password','eYbE4_Ef1qiR');
	 define('Database Name','imark');
	 
	 $con = mysqli_connect(Server,Root User,Root Password,Database Name);
	 if(mysqli_connect_errno())
	 {
		 echo "Failed to connect mysql:".mysqli_connect_error();
	 }
	  
	$sql="SELECT * from image";
	$result=mysqli_query($con,$sql);

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

table {
    border-collapse: collapse;
    width: 100%;
	background-color:#cce6ff;
}

th, td {
    padding: 8px;
    text-align: left;
    border-bottom: 1px solid #53ff1a;
}

tr:hover{background-color:#f5f5f5}

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
								<img src="./images/myLogo.png"  width="50" height="25">
								
							</a>
							<h3><font color="#66998c"<p> Watermarking System</p></font></h3>
						</div>
						<div class="collapse navbar-collapse" id="myNavbar">
							<ul class="nav navbar-nav">
								<li><a href="usermainpage.php">Home</a></li>	
								<li><a href="uservisible.php">Visible Watermark</a></li>
								<li><a href="userinvisible.php">Invisible Watermark</a></li>   
								<li class="active"><a href="Library.php">Library</a></li>								
								<li><a href="guidelines.php">Guidelines</a></li>
								<li><a href="#">Contact Us</a></li>
								<li><button type="button" class="btn btn-info btn-lg"><span class="glyphicon glyphicon-log-out"></span><a href='logout.php'><font color="white">&nbsp;Logout</font></a></button></li>
							 </ul>
						</div>
					</div>
				</nav>

<div class="container">
	<div class="row content">
		<br/>
			<div class="col-sm-3 sidenav hidden-xs">
				<img src="./images/myLogo.png" width="100" height="80">
				<h3><font color="#66998c"<p> Watermarking System</p></font></h3>
				<p class="navbar-text"><h5><font color="white">Signed in as <?php echo $_SESSION['usr_name']; ?></font></h5></p>
				<br/>
					<ul class="nav nav-pills nav-stacked">
					<?php if (isset($_SESSION['usr_id'])) { ?>
						<li><a href="usermainpage.php"><h4><font color="white">Home</font></h4></a></li>
						<li><a href="uservisible.php"><h4><font color="white">Visible Watermark</font></h4></a></li>
						<li><a href="userinvisible.php"><h4><font color="white">Invisible Watermark</font></h4></a></li> 
						<li class="active"><a href="Library.php"><h4><font color="white">Library</font></h4></a></li>						
						<li><a href="guidelines.php"><h4><font color="white">Guidelines</font></h4></a></li>
						<li><a href="#section3"><h4><font color="white">Contact Us</font></h4></a></li>
						<li><button type="button" class="btn btn-info btn-lg"><span class="glyphicon glyphicon-log-out"></span><a href='logout.php'><font color="white">&nbsp;Logout</font></a></button></li>
					</ul><br>
					<?php } else { ?><li><a href="login.php">Login</a></li>
					<li><a href="register.php">Sign Up</a></li>
					<?php } ?>
			</div>
			
		
	<br>
	
	<div class="col-sm-9">
	<table>
	<tr>
		<th>Images</th>
		<th>Secret Message</th>
		<th>Secret Key</th>
		<th>Time Created</th>
	</tr>
	<?php
		if(mysqli_num_rows($result)>0)
			{
				while($row=mysqli_fetch_assoc($result))
				{
	?>
	<tr>
		<td>
				<a href="view.php?id=<?php echo $row['id'] ?>"><img src="<?php echo $row['data'] ?>" height="150" width="320" /></a>
		</td>
		<td>
			<?php echo $row['imessage'] ?>
		</td>
		<td>
			<?php echo $row['Image_key'] ?>
		</td>
		<td>
			<?php echo $row['Image_date'] ?>
		</td>
	</tr>
	<?php
		
				}
			}
	else
	{
		echo "0 result";
	}
	?>
	</table>
	</div>


	
</body>
</html>