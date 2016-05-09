<!DOCTYPE html>
<html lang="en">
<head>
 <title>i-Mark Watermarking System</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link href='./css/bootstrapinvisible.min.css' type='text/css' rel='stylesheet' />
  <script src='./js/sjcl.js' type='text/javascript'></script>
  <script src='./js/main.js' type='text/javascript'></script>

  
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
								<li ><a href="usermainpage.php">Home</a></li>
								<li class="dropdown" >
									<a class="dropdown-toggle" data-toggle="dropdown">Watermark<span class="caret"></span></a>
									<ul class="dropdown-menu">
									<li><a href="uservisible.php">Visible Watermark</a></li>
									<li class="active"><a href="userinvisible.php">Invisible Watermark</a></li>                       
									</ul>
								</li>
								<li><a href="#">Guidelines</a></li>
								<li><a href="#">Contact Us</a></li>
								<li><button type="button" class="btn btn-info btn-lg"><span class="glyphicon glyphicon-log-out"></span><a href='logout.php'><font color="white">&nbsp;Logout</font></a></button></li>
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
						<li ><a href="usermainpage.php"><h4><font color="white">Home</font></h4></a></li>
						<li class="dropdown" >
							  <a class="dropdown-toggle" data-toggle="dropdown"><h4><font color="white">Watermark <span class="caret"></span></font></h4></a>
							  <ul class="dropdown-menu">
								<li><a href="uservisible.php">Visible Watermark</a></li>
								<li class="active"><a href="userinvisible.php">Invisible Watermark</a></li>                       
							  </ul>
						</li>
						<li><a href="#section3"><h4><font color="white">Guidelines</font></h4></a></li>
						<li><a href="#section3"><h4><font color="white">Contact Us</font></h4></a></li>
						<li><button type="button" class="btn btn-info btn-lg"><span class="glyphicon glyphicon-log-out"></span><a href='logout.php'><font color="white">&nbsp;Logout</font></a></button></li>
						</ul><br>
			</div>
		
	<br>
	
	<div class="row">
	<div class="row">
	
	<div id='main' class='section dark'>
        <div class='step'>Choose an image</div>
        <img id='preview' class='preview hide' />
        <div class='sectionbody'>
            <input type='file' id='file' />
        </div>
    </div>
    <div id='choose' class='section dark hide'>
        <div class='step'>Encode secret message</div>
        <div class='sectionbody'>
            <div class='left'>
                <textarea id='message' class='message' maxlength='1000'
                    placeholder='Type hidden message'></textarea>
                <input type='password' id='password' class='password'
                    placeholder='Password (optional)' />
                <button id='encode' class='submit'>Hide message</button>
            </div>
            <div class='right'>
                <input type='password' id='password2' class='password'
                    placeholder='Password' />
                <button id='decode' class='submit'>Reveal secret message</button>
            </div>
        </div>
    </div>
    <div id='reveal' class='section dark hide'>
        <div class='step'>Hidden message</div>
        <div id='messageDecoded' class='sectionbody'></div>
		
    </div>
	
	<div>
    <canvas id='canvas' class='hide'></canvas>
	
	</div>
	
    <img id='output' />
	
	<form method="POST" action="./SaveImage.php">
	<input type="hidden" name="imessage" id="imessage" value="" />
	<button name="SaveImage" class="submit">Save Into Database</button>
	</form>
	</div>
	
	

	
	
</body>
</html>