<!DOCTYPE html>
<html>
<body>

<form id="form" method="post" action="upload.php" enctype="multipart/form-data" target="iframe">
	<input type="file" id="file" name="file"/>
	<input type="submit" name="submit" id="submit" value="Upload File"/>

</form>
	
<p id="message">Upload message will go here.</p>

<img style="min-height:120;min-width:200;max-height:120px;" id="image"/><br/><br/>

<iframe style="display:none;" name="iframe"></iframe>

</body>
</html>