<?php


/* 

راهنمای استفاده از ایمپورت

وقتی پروژه رو پول میکنید از گیت هاب یا کلون میکنید برای اینکه تمام دیتاهاتون یکسان باشه این فایل رو بعد از آدرس پروژه  به صورت
/db/Importer.php

وارد کنید و اجازه دهید ایمپورت اجرا شود

** نکته مهم

حتما به نام دیتابیس و یوزر و پسورد دقت کنید
اگر از زمپ استفاده میکنید تنظمیات به شکل زیر می باشد.
db : uwin
user : root
pass : empty


*/

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);


$db_name = "uwin";
$conn =new mysqli('localhost', 'root', '' , $db_name);

$conn->set_charset("utf8");
$query = '';
$sqlScript = file('uwin_db.sql');
foreach ($sqlScript as $line)	{
	
	$startWith = substr(trim($line), 0 ,2);
	$endWith = substr(trim($line), -1 ,1);
	
	if (empty($line) || $startWith == '--' || $startWith == '/*' || $startWith == '//') {
		continue;
	}
		
	$query = $query . $line;
	if ($endWith == ';') {
		mysqli_query($conn,$query) or die('<div class="error-response sql-import-response">Problem in executing the SQL query <b>' . $query. '</b></div>');
		$query= '';		
	}
}
echo '<div class="success-response sql-import-response">SQL file imported successfully</div>';
?>