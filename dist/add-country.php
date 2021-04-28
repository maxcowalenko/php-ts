<?
$pdo = new PDO('mysql:dbname=mysql;host=db', 'root', 'notSecureChangeMe');
$help_keyword = $pdo->prepare('INSERT INTO `help_keyword` (`help_keyword_id`, `name`) VALUES(?, ?)');
$help_keyword->execute(array(22, htmlspecialchars($_POST['countryName'])));

echo json_encode(array(
  "done" => TRUE
))
?>
