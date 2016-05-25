<?php
session_start();
include_once'Dbconnect.php';
?>
<html lang="en">
<head>
 <title>i-Mark Watermarking System</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="icon" type="image/png" href="./images/myLogo.png">
  <link href='./css/bootstrapinvisible.min.css' type='text/css' rel='stylesheet' />
  
  <script   src="https://code.jquery.com/jquery-1.12.3.min.js"   integrity="sha256-aaODHAgvwQW1bFOGXMeX+pC4PZIPsvn2h1sArYOhgXQ="   crossorigin="anonymous"></script>
  <script src='./js/sjcl.js' type='text/javascript'></script>
  <script src='./js/main.js' type='text/javascript'></script>

  
  <style>
  
    /* Set height of the grid so .sidenav can be 100% (adjust as needed) */
    .row.content {height: 600px;}
	
	 /* Set height of the grid so .sidenav can be 100% (adjust as needed) */
    .row.content2 {height: 200px;
	width: 550px;
	background-color: #1a53ff;
	margin-top: 20px;}
	
	.container2 {height: 300px;
	width: 900px;
	}
	
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

.glyphicon-log-out:before{content:"\e163";}
.glyphicon{position:relative;top:1px;display:inline-block;font-family:'Glyphicons Halflings';font-style:normal;font-weight:400;line-height:1;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}
@font-face {
font-family:'Glyphicons Halflings';
src:url(http://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/fonts/glyphicons-halflings-regular.eot?#iefix) format(embedded-opentype),url(http://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/fonts/glyphicons-halflings-regular.woff2) format(woff2),url(http://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/fonts/glyphicons-halflings-regular.woff) format(woff),url(http://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/fonts/glyphicons-halflings-regular.ttf) format(truetype),url(http://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/fonts/glyphicons-halflings-regular.svg#glyphicons_halflingsregular) format(svg);
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
					<img src="./images/myLogo.png"  width="50" height="25">
				</a>
				<h3><font color="#66998c"<p> Watermarking System</p></font></h3>
			</div>
			<div class="collapse navbar-collapse" id="myNavbar">
				<ul class="nav navbar-nav">
					<li><a href="usermainpage.php">Home</a></li>	
					<li><a href="uservisible.php">Visible Watermark</a></li>
					<li><a href="userinvisible.php">Invisible Watermark</a></li>  
					<li><a href="Library.php">Library</a></li>					
					<li class="active"><a href="guidelines.php">Guidelines</a></li>
					<li><a href="Contactus.php">Contact Us</a></li>
					<li><button type="button" class="btn btn-info btn-lg"><span class="glyphicon-log-out"></span><a href='logout.php'><font color="white">&nbsp;Logout</font></a></button></li>
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
						<li><a href="Library.php"><h4><font color="white">Library</font></h4></a></li>						
						<li class="active"><a href="guidelines.php"><h4><font color="white">Guidelines</font></h4></a></li>
						<li><a href="Contactus.php"><h4><font color="white">Contact Us</font></h4></a></li>
						<li><button type="button" class="btn btn-info btn-lg"><span class="glyphicon glyphicon-log-out"></span><a href='logout.php'><font color="white">&nbsp;Logout</font></a></button></li>
					</ul><br>
					<?php } else { ?><li><a href="login.php">Login</a></li>
					<li><a href="register.php">Sign Up</a></li>
					<?php } ?>
			</div>
		
	<br>
	
	<div class="col-sm-9">
      <div class="well">
		  <center>
			<h4>Watermarking Your Photos Has Never Been Easier</h4>
			<a href="uservisible.php" class="btn btn-info btn-lg">Start Watermarking Now<span class="glyphicon glyphicon-menu-right"></span> 
			</a>         
		  </center>
      </div>
	  
		<div class="row">
		<div class="col-sm-offset-2 col-sm-7">
				<div class="row content2">
					<br>
					<img src="./images/visi.jpg"  width="33%" height="80%">
					<img src="./images/Invisible.jpg"  width="33%" height="80%">
					<img src="./images/view_image.jpg"  width="32%" height="80%">
				</div>
		</div>
		</div>
		
		<div class="row">
		<div class="col-sm-offset-1 col-sm-5">
			<div style="background-color:#4dd2ff; margin-top: 20px; padding:8px 8px;">
				<p>
					<h2><font color="#ffff1a">Our Mission</font></h2>
						<h5><font color="white">
							World Wide Web is an available place where someone can 
							obtain digital information such as image easily. It became very 
							simple to make a duplicate copy of digital information, 
							to manipulate, destroy and spread the data through Internet by impostors. 
							Hence it is important to protect the integrity of the digital information 
							from the attacker. Thus, our mission is to provide a place for user to protect 
							their digital information by implemented steganography technique.
						</font></h5>
				</p>
			</div>
		</div>
		
		<div class="col-sm-5">
			<div style="background-color:#4dd2ff; margin-top: 20px; padding:8px 6px;">
			<img src="./images/foother.png"  width="100%" height="37%">
			</div>
		</div>
		
		</div>
	</div>
	</div>
</div>

</body>
</html>
	