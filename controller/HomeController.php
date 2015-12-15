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
			$this->set('scores', $scores);
			
		}

		private function _processAddItemFormIfNeeded() {
			if(!empty($_POST['action'])) {

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

	}



 ?>