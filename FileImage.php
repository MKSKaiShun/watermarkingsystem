<?php
#strip slashes before putting the form data into target file
$cd=stripslashes($_POST['src']);
 #Show the msg,if the code string is empty
 if(empty($cd))
 {echo "Nothing to write";}
#if the code string is not empty then open the target file and put form data in it
else
{$file=fopen("demo.php","w");
echo fwrite($file,$cd);
#show a success msg 

echo "data successfully entered";
fclose($file);}

$folder="images/";

move_uploaded_file($_FILES[('{$file}')]["tmp_name"],"$folder".$_FILES[('{$file}')]["name"]);

echo "<p align=center>File".$_FILES[('{$file}')]["name"]."loaded...";
$result=mysql_connect("localhost","root","MKS29089") or die("Could not save image name Error:".mysql_error());

mysql_select_db("i-mark") or die("Cloud not select database");
mysql_query("INSERT into test VALUES(".$_FILES[('{$file}')]["name"].")");

if($result) { echo "Image name saved into database"; }
else {

//Gives and error if its not
echo "Sorry, there was a problem uploading your file.";
}
?>