<?
include_once $_SERVER['DOCUMENT_ROOT'] . '/include/core.php';

function addCountry() {
  global $db;

  $status = array();

  $error = NULL;

  if ($db->isConnected) {
    if (isset($_POST['countryName'])) {
      $countryName = $_POST['countryName'];

      $status = $db->addCountry($countryName);
    } else {
      $error = 'Undefined array key countryName';
    }
  } else {
    $error = $db->connectionError;
  }

  if (isset($error)) {
    $status = array(
      'done' => FALSE,
      'error' => $error
    );
  }

  return $status;
}

echo json_encode(
  addCountry()
);
