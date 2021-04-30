<?
include_once $_SERVER['DOCUMENT_ROOT'] . '/include/core.php';

echo json_encode(
  $db->getCountries()
);
