<?php
	ini_set('mysql_connect_timeout',300);
	ini_set('default_socket_timeout',300);
?>

<!DOCTYPE html>
<html lang="en">
<?php include ('modal_signup_login.html');?>
<head>
  <title>i-Mark Watermarking System</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" type="text/css" href="./css/bootstrap.min.css">
  <script src="./css/jquery.min.js"></script>
  <script src="./css/bootstrap.min.js"></script>

    <link href='https://fonts.googleapis.com/css?family=Roboto:400,700' rel='stylesheet' type='text/css'>
	<link href="./css/spectrum.min.css" rel="stylesheet">
	<link href="./css/font-awesome.min.css" rel="stylesheet">

	<link rel="stylesheet" type="text/css" href="./stylesheets/vendor/animate.min.css">
	<link rel="stylesheet" type="text/css" href="./stylesheets/vendor/bootstrap-slider.min.css">
	<link rel="stylesheet" type="text/css" href="./stylesheets/style.css">
</head>
<style>
 /* Set height of the grid so .sidenav can be 100% (adjust as needed) */
    .row.content {height: 600px;}
	
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
.nav-pills>li>a:hover{color:#fff;background-color:#00ffcc}
</style>

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
								<li><a href="usermainpage.php">Home</a></li>
								<li class="dropdown">
									<a class="dropdown-toggle" data-toggle="dropdown">Watermark<span class="caret"></span></a>
									<ul class="dropdown-menu">
									<li class="active"><a href="uservisible.php">Visible Watermark</a></li>
									<li><a href="userinvisible.php">Invisible Watermark</a></li>                       
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
						<li><a href="usermainpage.php"><h4><font color="white">Home</font></h4></a></li>
						<li class="dropdown">
							  <a class="dropdown-toggle" data-toggle="dropdown"><h4><font color="white">Watermark <span class="caret"></span></font></h4></a>
							  <ul class="dropdown-menu">
								<li class="active"><a href="uservisible.php">Visible Watermark</a></li>
								<li><a href="userinvisible.php">Invisible Watermark</a></li>                       
							  </ul>
						</li>
						<li><a href="#section3"><h4><font color="white">Guidelines</font></h4></a></li>
						<li><a href="#section3"><h4><font color="white">Contact Us</font></h4></a></li>
						<li><button type="button" class="btn btn-info btn-lg"><span class="glyphicon glyphicon-log-out"></span><a href='logout.php'><font color="white">&nbsp;Logout</font></a></button></li>
						</ul><br>
			</div>
		
	<br>
			
				
				
			<div class="col-sm-10" style="height:100px;">
				<div class="well">
				<div class="row">
			<div id="menu">
	<nav class="navbar navbar-default">
		<div class="container" style="width:90%;">
			<div class="btn-group" role="group" aria-label="...">
				<button id="addPhotos" type="button" class="btn btn-default btn-header" data-step="1" data-intro="This button will let you select photos from your computer.">
					<img src="./images/icons/used/Add_image_icon.svg">
					Add Photos
				</button>
				<button id="addText" type="button" class="btn btn-default btn-header disabled imageRequired" data-step="3" data-intro="After you've added your photos, you can <strong>Add Text</strong>, such as your name or your business's name.">
					<img src="./images/icons/used/edit_text.svg">
					Add Text
				</button>
				<button id="addLogo" type="button" class="btn btn-default btn-header disabled imageRequired" data-step="4" data-intro="You can also <strong>Add Logo</strong> watermarks, such as your company or personal logo image.">
					<img src="./images/icons/used/add_logo.svg">
					Add Logo
				</button>
				
				<button id="save" type="button" class="btn btn-default btn-header disabled watermarkRequired" data-toggle="modal" data-target="#saveModal" data-step="6" data-intro="When your done watermarking your photos, click the <strong>Save</strong> button.">
					<img src="./images/icons/used/save.svg">
					Save
				</button>
			</div>
			</div>
			</div>
			</div>
			
		</div>
	</nav>
</div>
			
			<div class="col-sm-10" >
				<div class="well">
				<div class="row">
				
						<div id="viewer">
	<div id="container"></div>
</div>


		<div id="saveModal" class="modal" tabindex="-1" role="dialog">
	<div class="modal-dialog modal-lg">
		<div class="modal-content">
			<div class="modal-header">
				<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
				<h4 class="modal-title">Save Images</h4>
			</div>
			<div class="modal-body">
				<p>
					When rendering is complete, you can click on an image to save it.
				</p>
				<div class="saveGallery"></div>
			</div>
			<div style="background-color:#fff;margin:5px;text-align:center;">
			<div class="modal-footer">
				<button class="btn btn-primary btn-lg disabled">
					<i class="fa fa-file-zip-o"></i>
					Save All
				</button>
			</div>
		</div>
	</div>
</div>




<div id="basicErrorModal" class="modal" tabindex="-1" role="dialog">
	<div class="modal-dialog">
		<div class="modal-content">
			<div class="modal-header">
				<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
				<h4 class="modal-title">Upgrade to Water Marquee Pro</h4>
			</div>
			<div class="modal-body">
				<p>
					With our free service, you can watermark up to <strong>5 photos at a time</strong>, and each photo can be up to <strong>3 MB in size</strong>. 
				</p>
				<p>
					Please consider upgrading to our <a href='/pro' target='_'>Pro service</a>. For a one-time cost of $5, you can watermark as many photos as you'd like, with no size restriction.
				</p>
				<div class="tooBigList hidden">
					<p>
						These photos were too big:
					</p>
					<ul></ul>
				</div>
				<div class="text-center">
					<a class="btn btn-success btn-lg" href='/pro' target='_'>Check out Water Marquee Pro →</a>
				</div>
			</div>
		</div>
	</div>
</div>

<script type="text/template" id="templateTemplate">
	{{ if ( type === 'personal' ) { }}
		<a href='#' class="personal-template text-center">{{= name }}</a>
	{{ } else { }}
		<img class="template" src="{{= imgSrc() }}">
		<div class="corner-ribbon top-right sticky">Pro</div>
	{{ } }}
</script>

<script type="text/template" id="galleryImageTemplate">
	<div class="galleryImage" style="background-image:url({{=src}});" title="{{=name}}"></div>
</script>

<script type="text/template" id="renderedImageTemplate">
	<img src="{{= src }}" class="rendered">
</script>

<script type="text/template" id="saveImageTemplate">
	<img src="{{= src }}" class="prerender">
	<div class="text">
		<i class="fa fa-spinner fa-spin fa-2x"></i><br />
		Rendering
	</div>
</script>

<script type="text/template" id="viewerLogoPopoverTemplate">
	<form class="form-horizontal">		
		
		<div class="form-group">
			<label for="size" class="col-md-3 control-label">Scale</label>
			<div class="col-md-9">
				<div class="input-group">
					<span class="input-group-btn">
						<button type="button" class="btn btn-default btn-number" data-value="-5" data-target="size">
							<i class="fa fa-minus"></i>
						</button>
					</span>
					<input type="text" id="size" class="form-control input-number" value="{{=size}}" data-min="0" data-max="1000">
					<span class="input-group-btn">
						<button type="button" class="btn btn-default btn-number" data-value="5" data-target="size">
							<i class="fa fa-plus"></i>
						</button>
					</span>
				</div>
			</div>
		</div>

		<div class="form-group">
			<label for="visibility" class="col-md-3 control-label">Visibility</label>
			<div class="col-md-9">
				<div class="slide"></div>
				<input type="hidden" class="visibility" value="{{=visibility}}">
			</div>			
		</div>

	</form>
</script>

<script type="text/template" id="viewerTextPopoverTemplate">

	<form class="form-horizontal">		
		
		<div class="form-group">
			<label for="watermarkText" class="col-md-3 control-label">Text</label>
			<div class="col-md-9">
				<input type="text" class="form-control text" value="{{=text}}">
			</div>
		</div>

		<div class="form-group">
			<label for="size" class="col-md-3 control-label">Size</label>
			<div class="col-md-9">
				<div class="input-group">
					<span class="input-group-btn">
						<button type="button" class="btn btn-default btn-number" data-value="-5" data-target="size">
							<i class="fa fa-minus"></i>
						</button>
					</span>
					<input type="text" id="size" class="form-control input-number" value="{{=size}}" data-min="0" data-max="1000">
					<span class="input-group-btn">
						<button type="button" class="btn btn-default btn-number" data-value="5" data-target="size">
							<i class="fa fa-plus"></i>
						</button>
					</span>
				</div>
			</div>
		</div>

		<div class="form-group">
			<label for="visibility" class="col-md-3 control-label">Visibility</label>
			<div class="col-md-9">
				<div class="slide"></div>
				<input type="hidden" class="visibility" value="{{=visibility}}">
			</div>			
		</div>

		<div class="form-group">
			<label for="font" class="col-md-3 control-label">Font</label>
			<div class="col-md-9">
				<select class="form-control font">
					<optgroup label="Basic Fonts">
						<option {{= font === 'Amatic' ? 'selected' : ''}} value="Amatic" style="font-family: Amatic;">Amatic</option>
						<option {{= font === 'Anonymous Pro' ? 'selected' : ''}} value="Anonymous Pro" style="font-family: Anonymous Pro;">Anonymous Pro</option>
						<option {{= font === 'arial' ? 'selected' : ''}} value="arial" style="font-family: arial;">Arial</option>
						<option {{= font === 'Comic Sans MS' ? 'selected' : ''}} value="Comic Sans MS" style="font-family: 'Comic Sans MS';">Comic Sans MS</option>
						<option {{= font === 'arial' ? 'selected' : ''}} value="Courier New" style="font-family: 'Courier New';">Courier New</option>
						<option {{= font === 'Forum' ? 'selected' : ''}} value="Forum" style="font-family: Forum;">Forum</option>
						<option {{= font === 'garamond' ? 'selected' : ''}} value="garamond" style="font-family: garamond;">Garamond</option>
						<option {{= font === 'georgia' ? 'selected' : ''}} value="georgia" style="font-family: georgia;">Georgia</option>
						<option {{= font === 'Impact' ? 'selected' : ''}} value="Impact" style="font-family: Impact;">Impact</option>
						<option {{= font === 'Italiana' ? 'selected' : ''}} value="Italiana" style="font-family: Italiana;">Italiana</option>
						<option {{= font === 'Josefin Slab' ? 'selected' : ''}} value="Josefin Slab" style="font-family: Josefin Slab;">Josefin Slab</option>
						<option {{= font === 'Lato' ? 'selected' : ''}} value="Lato" style="font-family: Lato;">Lato</option>
						<option {{= font === 'Lucida Console' ? 'selected' : ''}} value="Lucida Console" style="font-family: 'Lucida Console';">Lucida Console</option>
						<option {{= font === 'Montserrat' ? 'selected' : ''}} value="Montserrat" style="font-family: Montserrat;">Montserrat</option>
						<option {{= font === 'Palatino Linotype' ? 'selected' : ''}} value="Palatino Linotype" style="font-family: 'Palatino Linotype';">Palatino Linotype</option>						
						<option {{= font === 'Open Sans' ? 'selected' : ''}} value="Open Sans" style="font-family: 'Open Sans';">Open Sans</option>
						<option {{= font === 'Pacifico' ? 'selected' : ''}} value="Pacifico" style="font-family: 'Pacifico';">Pacifico</option>
						<option {{= font === 'Poppins' ? 'selected' : ''}} value="Poppins" style="font-family: 'Poppins';">Poppins</option>
						<option {{= font === 'Roboto' ? 'selected' : ''}} value="Roboto" style="font-family: 'Roboto';">Roboto</option>
						<option {{= font === 'Tahoma' ? 'selected' : ''}} value="Tahoma" style="font-family: 'Tahoma';">Tahoma</option>
						<option {{= font === 'times' ? 'selected' : ''}} value="times" style="font-family: times;">Times</option>
						<option {{= font === 'Trebuchet MS' ? 'selected' : ''}} value="Trebuchet MS" style="font-family: 'Trebuchet MS';">Trebuchet MS</option>
						<option {{= font === 'Verdana' ? 'selected' : ''}} value="Verdana" style="font-family: 'Verdana';">Verdana</option>
					</optgroup>
					<optgroup label="Pro Fonts" disabled>
						<option {{= font === 'Abril Fatface' ? 'selected' : ''}} value="Abril Fatface" style="font-family: Abril Fatface;">Abril Fatface</option>
						<option {{= font === 'Alegreya' ? 'selected' : ''}} value="Alegreya" style="font-family: Alegreya;">Alegreya</option>
						<option {{= font === 'Amaranth' ? 'selected' : ''}} value="Amaranth" style="font-family: Amaranth;">Amaranth</option>
						<option {{= font === 'Bangers' ? 'selected' : ''}} value="Bangers" style="font-family: Bangers;">Bangers</option>
						<option {{= font === 'Bevan' ? 'selected' : ''}} value="Bevan" style="font-family: Bevan;">Bevan</option>
						<option {{= font === 'Cabin Sketch' ? 'selected' : ''}} value="Cabin Sketch" style="font-family: Cabin Sketch;">Cabin Sketch</option>
						<option {{= font === 'Cardo' ? 'selected' : ''}} value="Cardo" style="font-family: Cardo;">Cardo</option>
						<option {{= font === 'Courgette' ? 'selected' : ''}} value="Courgette" style="font-family: Courgette;">Courgette</option>
						<option {{= font === 'Crimson Text' ? 'selected' : ''}} value="Crimson Text" style="font-family: Crimson Text;">Crimson Text</option>
						<option {{= font === 'Days One' ? 'selected' : ''}} value="Days One" style="font-family: Days One;">Days One</option>
						<option {{= font === 'Domine' ? 'selected' : ''}} value="Domine" style="font-family: Domine;">Domine</option>
						<option {{= font === 'Dosis' ? 'selected' : ''}} value="Dosis" style="font-family: Dosis;">Dosis</option>
						<option {{= font === 'Exo' ? 'selected' : ''}} value="Exo" style="font-family: Exo;">Exo</option>
						<option {{= font === 'Gentium Book Basic' ? 'selected' : ''}} value="Gentium Book Basic" style="font-family: Gentium Book Basic;">Gentium Book Basic</option>
						<option {{= font === 'Gravitas One' ? 'selected' : ''}} value="Gravitas One" style="font-family: Gravitas One;">Gravitas One</option>
						<option {{= font === 'Gruppo' ? 'selected' : ''}} value="Gruppo" style="font-family: Gruppo;">Gruppo</option>
						<option {{= font === 'Handlee' ? 'selected' : ''}} value="Handlee" style="font-family: Handlee;">Handlee</option>
						<option {{= font === 'Imprima' ? 'selected' : ''}} value="Imprima" style="font-family: Imprima;">Imprima</option>
						<option {{= font === 'Istok Web' ? 'selected' : ''}} value="Istok Web" style="font-family: Istok Web;">Istok Web</option>
						<option {{= font === 'Karla' ? 'selected' : ''}} value="Karla" style="font-family: Karla;">Karla</option>
						<option {{= font === 'Kaushan Script' ? 'selected' : ''}} value="Kaushan Script" style="font-family: Kaushan Script;">Kaushan Script</option>
						<option {{= font === 'Lemon' ? 'selected' : ''}} value="Lemon" style="font-family: Lemon;">Lemon</option>
						<option {{= font === 'Lobster' ? 'selected' : ''}} value="Lobster" style="font-family: Lobster;">Lobster</option>
						<option {{= font === 'Lora' ? 'selected' : ''}} value="Lora" style="font-family: Lora;">Lora</option>
						<option {{= font === 'Marvel' ? 'selected' : ''}} value="Marvel" style="font-family: Marvel;">Marvel</option>
						<option {{= font === 'Merriweather' ? 'selected' : ''}} value="Merriweather" style="font-family: Merriweather;">Merriweather</option>
						<option {{= font === 'News Cycle' ? 'selected' : ''}} value="News Cycle" style="font-family: News Cycle;">News Cycle</option>
						<option {{= font === 'Noto Serif' ? 'selected' : ''}} value="Noto Serif" style="font-family: Noto Serif;">Noto Serif</option>
						<option {{= font === 'Old Standard TT' ? 'selected' : ''}} value="Old Standard TT" style="font-family: 'Old Standard TT';">Old Standard TT</option>
						<option {{= font === 'Oswald' ? 'selected' : ''}} value="Oswald" style="font-family: 'Oswald';">Oswald</option>
						<option {{= font === 'Philosopher' ? 'selected' : ''}} value="Philosopher" style="font-family: 'Philosopher';">Philosopher</option>
						<option {{= font === 'Playball' ? 'selected' : ''}} value="Playball" style="font-family: 'Playball';">Playball</option>
						<option {{= font === 'Playfair Display' ? 'selected' : ''}} value="Playfair Display" style="font-family: 'Playfair Display';">Playfair Display</option>
						<option {{= font === 'Quicksand' ? 'selected' : ''}} value="Quicksand" style="font-family: 'Quicksand';">Quicksand</option>
						<option {{= font === 'Raleway' ? 'selected' : ''}} value="Raleway" style="font-family: 'Raleway';">Raleway</option>
						<option {{= font === 'Righteous' ? 'selected' : ''}} value="Righteous" style="font-family: 'Righteous';">Righteous</option>
						<option {{= font === 'Sofia' ? 'selected' : ''}} value="Sofia" style="font-family: 'Sofia';">Sofia</option>
						<option {{= font === 'Stalemate' ? 'selected' : ''}} value="Stalemate" style="font-family: 'Stalemate';">Stalemate</option>
						<option {{= font === 'Tienne' ? 'selected' : ''}} value="Tienne" style="font-family: 'Tienne';">Tienne</option>
						<option {{= font === 'Ubuntu' ? 'selected' : ''}} value="Ubuntu" style="font-family: 'Ubuntu';">Ubuntu</option>
						<option {{= font === 'Vollkorn' ? 'selected' : ''}} value="Vollkorn" style="font-family: 'Vollkorn';">Vollkorn</option>
						<option {{= font === 'Wire One' ? 'selected' : ''}} value="Wire One" style="font-family: 'Wire One';">Wire One</option>
						<option {{= font === 'Yellowtail' ? 'selected' : ''}} value="Yellowtail" style="font-family: 'Yellowtail';">Yellowtail</option>
						
					</optgroup>
				</select>
			</div>
		</div>	
		
		<div class="form-group">
			<label for="color" class="col-md-3 control-label">Color</label>
			<div class="col-md-9">
				<div class="input-group">
					<input type="text" class="form-control color" value="{{= color }}">
					<span class="input-group-btn">
						<input type='text' class='color-picker' />
					</span>
				</div>
			</div>	
		</div>
		<div class="text-center">
			<button class="btn btn-danger btn-sm">
				<i class="fa fa-remove"></i>
					Delete
			</button>
		</div>
	</form>
</script>

<script type="text/template" id="viewerWatermarkTemplate">
	<div class="watermark" style="background-image:url({{=src}});width:{{=displayWidth()}}px;height:{{=displayHeight()}}px;top:{{=offsetTop}}%;left:{{=offsetLeft}}%;opacity:{{=(visibility/100)}}" data-toggle='popover' data-html="true"></div>
</script>
<link href="/stylesheets/vendor/introjs.min.css" rel="stylesheet">


	<script src="javascripts/dist.js"></script>

<script>
	$('body').css({
		'margin-bottom' : 0
	});
	$('#starter').modal('show');
	
	var touring = false;
	function stopTour(){
		touring = false;
	}
	
	$('#startTour').on('click',function(e){
		$('#starter').modal('hide');
		e.preventDefault();
		var intro = introJs().start();
		var touring = true;
		intro.oncomplete(stopTour);
		intro.onexit(stopTour);
		intro.onbeforechange(function(target){
			return false;
		})
	});
	
	Editor.start({
		pro : false
	});
	WebFont.load({
		google: {
			families: ['Gentium Book Basic','Cardo','Open Sans', 'Josefin Slab', 'Lato', 'Vollkorn', 'Poppins', 'Roboto', 'Anonymous Pro', 'Old Standard TT', 'Montserrat', 'Amaranth', 'Forum', 'Bevan', 'Italiana', 'Stalemate', 'Playfair Display', 'Pacifico', 'Amatic', 'Merriweather','Oswald', 'Gravitas One', 'Abril Fatface', 'Raleway','Lobster','Wire One', 'Crimson Text', 'Dosis', 'Tienne', 'Halant', 'Alegreya','Kaushan Script','Gruppo','Days One','Amatic SC','Bangers','Cabin Sketch','Courgette','Imprima','Istok Web','Lemon','Marvel','News Cycle','Philosopher', 'Playball','Quicksand','Righteous','Sofia','Yellowtail','Domine','Noto Serif','Karla','Ubuntu','Exo','Lora','Handlee']
		}
	});	
</script>

<!-- Google Analytics -->
<script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-27077480-1', 'auto');
  ga('send', 'pageview');

</script>
</body>
</html>