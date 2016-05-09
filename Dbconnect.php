<?php
$connection = mysql_connect('localhost', 'root', 'MKS29089');
if (!$connection){
    die("Database Connection Failed" . mysql_error());
}

$select_db = mysql_select_db('i-mark');
if (!$select_db){
    die("Database Selection Failed" . mysql_error());
}
