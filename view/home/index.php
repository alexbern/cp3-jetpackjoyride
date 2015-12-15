<script src="js/vendors/phaser.min.js"></script>
	<script src="js/script.js"></script>

	<!--
	<form class="form" action="#" method="#">
		<label for="name">Name:</label>
		<input id="name" type="text" />
		<input type="submit" />
	</form>
	-->


	<section class="form-section">
	 <form method="post" action="index.php" id="itemAddForm">
   	 <div class="form-group<?php if(!empty($errors['name'])) echo ' has-error';?>">
   	 <p class="score-message">Your score is: 345</p>
     <label for="inputName" class="name-label">Name:</label>
     <input type="text" class="form-control" id="inputName" placeholder="Enter your Name" name="name" value="<?php if(!empty($_POST['name'])) echo $_POST['name'];?>"></br>
     <!-- <?php if(!empty($errors['name'])) echo '<span class="help-block">' . $errors['name'] . '</span>'; ?> -->
    </div>
    <input type="hidden" name="action" value="add-score" />
    <button type="submit" class="btn btn-submit">Menu</button>
  </form>
	</section>