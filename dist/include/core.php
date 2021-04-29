<?

class Db {
  public $pdo;
  public $isConnected;
  public $connectionError;

  function __construct($host, $dbname, $username, $password) {
    try {
      $this->pdo = new PDO(
        "mysql:host=$host;dbname=$dbname",
        $username,
        $password
      );

      $this->isConnected = TRUE;
    } catch (Exception $e) {
      $this->isConnected = FALSE;
      $this->connectionError = $e;
    }
  }

  function getCountries() {
    $returnValue = array();

    if ($this->isConnected) {
      try {
        $getCountries = $this->pdo->query(
          'SELECT * FROM `countries`'
        );

        $returnValue = $getCountries->fetchAll(
          PDO::FETCH_ASSOC
        );
      } catch (Exception $e) {
        $error = $e;
      }
    } else {
      $error = $this->connectionError;
    }

    if (isset($error)) {
      $returnValue = array(
        'error' => $error
      );
    }

    return $returnValue;
  }

  function addCountry($countryName) {
    $status = array();
    $error = NULL;

    if (0 < strlen(trim($countryName))) {
      try {
        $addCountry = $this->pdo->prepare(
          'INSERT INTO `countries` (`name`) VALUES(?)'
        );

        $addCountry->execute(
          array(
            htmlspecialchars($countryName)
          )
        );

        $status = array(
          'done' => TRUE
        );
      } catch (Exception $e) {
        $error = $e;
      }
    } else {
      $error = 'The countryName value is empty';
    }

    if(isset($error)) {
      $status = array(
        'done' => FALSE,
        'error' => $error
      );
    }

    return $status;
  }
}

$db = new Db(
  'db',
  'php-ts',
  'root',
  'notSecureChangeMe'
);
