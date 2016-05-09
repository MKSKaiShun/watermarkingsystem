<html>
<head>
<title></title>
<script src="js.js"></script>
<style>
.dropbtn {
    background-color: #4CAF50;
    color: white;
    padding: 16px;
    font-size: 16px;
    border: none;
    cursor: pointer;
}

.dropbtn:hover, .dropbtn:focus {
    background-color: #3e8e41;
}

.dropdown {
    position: relative;
    display: inline-block;
}

.dropdown-content {
    display: none;
    position: absolute;
    background-color: #f9f9f9;
    min-width: 160px;
    overflow: auto;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
}

.dropdown-content a {
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
}

.dropdown-content a:hover {background-color: #f1f1f1}

.show {display:block;}
</style>
</head>

<body onload="iframe()">

	<form class="form-horizontal" role="form" method="post" enctype="multipart/form-data">

<input type="button" value="B" onclick="bold()">
<input type="button" value="I" onclick="italic()">
<input type="button" value="U" onclick="underline()">

<p>Font
<select onclick="font(this);">
  <option>Abadi MT Condensed Light</option> 
<option>Albertus Extra Bold </option>
<option>Albertus Medium </option>
<option>Allegro </option>
<option>Amazone BT </option>
<option>AmerType Md BT </option>
<option>Antique Olive </option>
<option>Arial </option>
<option>Arial Black </option>
<option>Arial MT </option>
<option>Arial Narrow </option>
<option>Arrus BT </option>
<option>Aurora Cn BT </option>
<option>AvantGarde Bk BT </option>
<option>AvantGarde Md BT </option>
<option>BankGothic Md BT </option>
<option>Bazooka </option>
<option>Benguiat Bk BT </option>
<option>BernhardFashion BT </option>
<option>BernhardMod BT </option>
<option>BinnerD</option>
<option>Book Antiqua </option>
<option>Bookman Old Style </option>
<option>Boulder </option>
<option>Bremen Bd BT </option>
<option>Calisto MT </option>
<option>Calligrapher </option>
<option>CaslonOpnface BT </option>
<option>Century Gothic </option>
<option>Century Schoolbook </option>
<option>Cezanne </option>
<option>CG Omega </option>
<option>CG Times </option>
<option>Charlesworth </option>
<option>Chaucer </option>
<option>Charter Bd BT </option>
<option>Charter BT </option>
<option>ChelthmITC Bk BT </option>
<option>Clarendon Condensed </option>
<option>CloisterBlack BT </option>
<option>Comic Sans MS </option>
<option>Copperplate Gothic Bold </option>
<option>Copperplate Gothic Light </option>
<option>CopperplGoth Bd BT  </option>
<option>Cornerstone </option>
<option>Coronet </option>
<option>Courier </option>
<option>Courier New </option>
<option>Cuckoo </option>
<option>Dauphin </option>
<option>Denmark </option>
<option>English 111 Vivace BT </option>
<option>EngraversGothic BT </option>
<option>Exotc350 Bd BT </option>
<option>Fransiscan </option>
<option>Garamond </option>
<option>Geneva </option>
<option>Haettenschweiler </option>
<option>Heather </option>
<option>Helvetica </option>
<option>Herald </option>
<option>Impact </option>
<option>Jester </option>
<option>Kabel Bk BT </option>
<option>Kabel Ult BT </option>
<option>Kaufmann Bd BT </option>
<option>Kaufmann BT </option>
<option>Korinna BT </option>
<option>Letter Gothic </option>
<option>Lithograph </option>
<option>Lithograph Light </option>
<option>Long Island </option>
<option>Lucida Console </option>
<option>Lucida Handwriting </option>
<option>Lucida Sans </option>
<option>Lucida Sans Unicode </option>
<option>Marigold </option>
<option>Market </option>
<option>Matisse ITC </option>
<option>MS LineDraw </option>
<option>News GothicMT </option>
<option>OCR A Extended </option>
<option>Old Century </option>
<option>Pegasus </option>
<option>Pickwick </option>
<option>Poster </option>
<option>Pythagoras </option>
<option>Sceptre </option>
<option>Sherwood </option>
<option>Signboard </option>
<option>Socket </option>
<option>Steamer </option>
<option>Storybook </option>
<option>Subway </option>
<option>Tahoma </option>
<option>Technical </option>
<option>Teletype </option>
<option>Tempus Sans ITC </option>
<option>Times </option>
<option>Times New Roman </option>
<option>Times New Roman PS </option>
<option>Trebuchet MS </option>
<option>Tristan </option>
<option>Tubular </option>
<option>Unicorn </option>
<option>Univers </option>
<option>Univers Condensed </option>
<option>Vagabond </option>
<option>Verdana </option>
<option>Westminster</option>
</select>
<script>
function font(selectTag) {
    var listValue = selectTag.options[selectTag.selectedIndex].text;
	editor.document.execCommand('fontname',false,listValue);
}
</script>
</p>

<p>Size
<select onclick="fontsize(this);">
	<option>1</option>
  <option>2</option>
  <option>3</option>
  <option>4</option>
  <option>5</option>
  <option>6</option>
  <option>7</option>
  <option>8</option>
  <option>9</option>
  <option>10</option>
  <option>11</option>
</select>
<script>
function fontsize(selectTag) {
    var listValue = selectTag.options[selectTag.selectedIndex].text;
	editor.document.execCommand('fontsize',false,listValue);
}
</script>
</p>

<p>Color
<select onclick="fontcolor(this);">
<option value="#F0F8FF">Alice Blue</option>
<option value="#FAEBD7">Antique White</option>
<option value="#00FFFF">Aqua</option>
<option value="#7FFFD4">Aquamarine</option>
<option value="#F0FFFF">Azure</option>
<option value="#F5F5DC">Beige</option>
<option value="#FFE4C4">Bisque</option>
<option value="#000000">Black</option>
<option value="#FFEBCD">Blanched Almond</option>
<option value="#0000FF">Blue</option>
<option value="#8A2BE2">Blue Violet</option>
<option value="#A52A2A">Brown</option>
<option value="#DEB887">Burly Wood</option>
<option value="#5F9EA0">Cadet Blue</option>
<option value="#7FFF00">Chartreuse</option>
<option value="#D2691E">Chocolate</option>
<option value="#FF7F50">Coral</option>
<option value="#6495ED">Cornflower Blue</option>
<option value="#FFF8DC">Cornsilk</option>
<option value="#DC143C">Crimson</option>
<option value="#00FFFF">Cyan</option>
<option value="#00008B">Dark Blue</option>
<option value="#008B8B">Dark Cyan</option>
<option value="#B8860B">Dark Golden Rod</option>
<option value="#A9A9A9">Dark Gray</option>
<option value="#006400">Dark Green</option>
<option value="#BDB76B">Dark Khaki</option>
<option value="#8B008B">Dark Magenta</option>
<option value="#556B2F">Dark Olive Green</option>
<option value="#FF8C00">Dark Orange</option>
<option value="#9932CC">Dark Orchid</option>
<option value="#8B0000">Dark Red</option>
<option value="#E9967A">Dark Salmon</option>
<option value="#8FBC8F">Dark Sea Green</option>
<option value="#483D8B">Dark Slate Blue </option>
<option value="##2F4F4F">Dark Slate Gray </option>
<option value="#483D8B">Dark Slate Blue </option>
<option value="#2F4F4F">Dark Slate Gray</option>
<option value="#00CED1">Dark Turquoise</option>
<option value="#9400D3">Dark Violet</option>
<option value="#FF1493">Deep Pink</option>
<option value="#00BFFF">Deep Sky Blue</option>
<option value="#696969">Dim Gray</option>
<option value="#1E90FF">Dodger Blue</option>
<option value="#B22222">Fire Brick</option>
<option value="#FFFAF0">Floral White</option>
<option value="#228B22">Forest Green</option>
<option value="#FF00FF">Fuchsia</option>
<option value="#DCDCDC">Gainsboro</option>
<option value="#F8F8FF">Ghost White</option>
<option value="#FFD700">Gold</option>
<option value="#DAA520">Golden Rod</option>
<option value="#808080">Gray</option>
<option value="#008000">Green</option>
<option value="#ADFF2F">Green Yellow</option>
<option value="#F0FFF0">Honey Dew</option>
<option value="#FF69B4">Hot Pink</option>
<option value="#CD5C5C">Indian Red</option>
<option value="#4B0082">Indigo</option>
<option value="#FFFFF0">Ivory</option>
<option value="#F0E68C">Khaki</option>
<option value="#E6E6FA">Lavender</option>
<option value="#FFF0F5">Lavender Blush</option>
<option value="#7CFC00">Lawn Green</option>
<option value="#FFFACD">Lemon Chiffon</option>
<option value="#ADD8E6">Light Blue</option>
<option value="#F08080">Light Coral</option>
<option value="#E0FFFF">Light Cyan</option>
<option value="#FAFAD2">Light Golden Rod Yellow</option>
<option value="#D3D3D3">Light Gray</option>
<option value="#90EE90">light Green</option>
<option value="#FFB6C1">Light Pink</option>
<option value="#FFA07A">Light Salmon</option>
<option value="#20B2AA">Light Sea Green</option>
<option value="#87CEFA">Light Sky Blue</option>
<option value="#778899">Light Slate Gray</option>
<option value="#B0C4DE">Light Steel Blue</option>
<option value="#FFFFE0">Light Yellow</option>
<option value="#00FF00">Lime</option>
<option value="32CD32">Lime Green</option>
<option value="#FAF0E6">Linen</option>
<option value="#FF00FF">Magenta</option>
<option value="#800000">Maroon</option>
<option value="#F5FFFA">Mint Cream</option>
<option value="#FFE4E1">Misty Rose</option>
<option value="#FFE4B5">Moccasin</option>
<option value="#808000">Olive</option>
<option value="#FFA500">Orange</option>
<option value="#FF4500">Orange Red</option>
<option value="#DA70D6">Orchid</option>
<option value="#98FB98">Pale Green</option>
<option value="#AFEEEE">Pale Turquoise</option>
<option value="#DB7093">Pale Violet Red</option>
<option value="#800080">Purple</option>
<option value="#FF0000">Red</option>
<option value="#4169E1">Royal Blue</option>
<option value="#FA8072">Salmon</option>
<option value="#C0C0C0">Silver</option>
<option value="#FFFAFA">Snow</option>
<option value="#00FF7F">Spring Green</option>
</select>
<script>
function fontcolor(selectTag) {
    var listValue = selectTag.options[selectTag.selectedIndex].value;
	editor.document.execCommand('forecolor',false,listValue);
}
</script>
</p>

<br>
<textarea name="textarea" id="textarea" style="display:none;"></textarea>

<iframe name="editor" id="editor" style="width:500;height:400;"></iframe>

<br><br>
<input type="submit" name="submit" value="Finish"/>

<?php	
			if(isset($_POST['submit']))
			{
				echo $_POST['textarea'];
			}
?>

</form>



</body>
</html>