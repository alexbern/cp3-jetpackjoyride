<?php 
	require_once WWW_ROOT . 'dao' . DS . 'DAO.php';

	class ScoreDAO extends DAO {

		public function selectAll() {
		$sql = "SELECT * FROM `scores`";
		$stmt = $this->pdo->prepare($sql);
		$stmt->execute();
		return $stmt->fetchAll(PDO::FETCH_ASSOC);
	}

	public function selectById($id) {
		$sql = "SELECT * FROM `scores` WHERE `id` = :id";
		$stmt = $this->pdo->prepare($sql);
		$stmt->bindValue(':id', $id);
		$stmt->execute();
		return $stmt->fetch(PDO::FETCH_ASSOC);
	}

	public function insert($data) {
		$errors = $this->getValidationErrors($data);
		if(empty($errors)) {
			$sql = "INSERT INTO `scores` (`name`, `score`) VALUES (:name, :score)";
			$stmt = $this->pdo->prepare($sql);
			$stmt->bindValue(':name', $data['name']);
			$stmt->bindValue(':score', $data['score']);
			if($stmt->execute()) {
				$insertedId = $this->pdo->lastInsertId();
				return $this->selectById($insertedId);
			}
		}
		return false;
	}

	public function getValidationErrors($data) {
		$errors = array();
		if(empty($data['name'])) {
			$errors['name'] = "Please fill in a name value";
		}
		if(empty($data['score'])) {
			$errors['score'] = "Please fill in a score value";
		}
		return $errors;
	}



	}



 ?>