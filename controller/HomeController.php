<?php 
	require_once WWW_ROOT . 'controller' . DS . 'Controller.php';
	require_once WWW_ROOT . 'dao' . DS . 'ScoreDAO.php';

	class HomeController extends Controller{

		private $scoreDAO;

		function __construct(){
			$this->scoreDAO = new ScoreDAO();
		}

		function index(){

			$this->_processAddItemFormIfNeeded();
			$scores = $this->scoreDAO->selectTop();
			 if($this->isAjax) {
		      header('Content-Type: application/json');
		      echo json_encode($scores);
		      exit();
		    }
			$this->set('scores', $scores);
			
		}

		private function _processAddItemFormIfNeeded() {
				if ($_POST) {
					$errors = array();
					if(empty($_POST['name'])) {
						$errors['name'] = 'Please enter your name';
					}

					if (empty($_POST['score'])) {
						$errors['score'] = 'Score not defined';
					}

					
					$data = array(
						'name' => $_POST['name'],
						'score' => $_POST['score']
					);

					if(empty($errors)) {
						$inserted = $this->scoreDAO->insert($data);
						if(!empty($inserted)) {
							$_SESSION['info'] = 'Your score has been saved!';
							$this->redirect('index.php');
						}
					}
					$_SESSION['error'] = 'Oops! Something went wrong :(';
					$this->set('errors', $errors);
				}
		    }



		




		 // if(!empty($_POST['action']) && $_POST['action'] == 'add-score') {
		 //      $data = array_merge($_POST, array('created' => date('Y-m-d H:i:s')));
		 //      if($result = $this->scoreDAO->insert($data)) {
		 //        if($this->isAjax) {
		 //          header('Content-Type: application/json');
		 //          echo json_encode(array('result' => 'ok', 'inserted_id' => $result));
		 //          exit();
		 //        }
		 //        $this->redirect('index.php');
		 //      } else {
		 //        $errors = $this->scoreDAO->getValidationErrors($data);
		 //        if($this->isAjax) {
		 //          header('Content-Type: application/json');
		 //          echo json_encode(array('result' => 'error', 'errors' => $errors));
		 //          exit();
		 //        }
		 //        $this->set('errors', $errors);
		 //      }
			
		

	}



 ?>