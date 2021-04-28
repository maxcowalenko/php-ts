<?
$pdo = new PDO('mysql:dbname=mysql;host=db', 'root', 'notSecureChangeMe');
$help_keyword = $pdo->query('SELECT * FROM `help_keyword`');
$help_keyword = $help_keyword->fetchAll(PDO::FETCH_ASSOC);

echo json_encode($help_keyword)
?>
