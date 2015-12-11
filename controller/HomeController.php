<?php 
	require_once WWW_ROOT . 'controller' . DS . 'Controller.php';
	// require_once WWW_ROOT . 'dao' . DS . 'TravelDAO.php';

	class HomeController extends Controller{

		private $travelDAO;

		function __construct(){
			// $this->travelDAO = new TravelDAO();
		}

		function index(){
			// if ($_POST) {
			// 	$insertTravel = $this->travelDAO->insertTravel($_POST);
			// 	$this->redirect('index.php?page=takeover');
			// }
		}

	}



 ?>