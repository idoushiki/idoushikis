<?php


echo "
<html>
<body>
<form action="" method="post">
<input type="text" name="t" value="" size="20">
<input type="submit" value="t">
</form>
</body>
</html>
";

if(isset($_POST['t'])){


$data['t'] = $_POST['t'];
$a=$data+1;
}


echo $a;
?>