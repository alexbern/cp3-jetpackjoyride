<script src="js/vendors/phaser.min.js"></script>
	<script src="js/script.js"></script>

	<!--
	<form class="form" action="#" method="#">
		<label for="name">Name:</label>
		<input id="name" type="text" />
		<input type="submit" />
	</form>
	-->


	<section>
	  <form method="post" action="index.php" id="itemAddForm">
	    <div class="form-group<?php if(!empty($errors['title'])) echo ' has-error';?>">
	      <label for="Name">Title</label>
	      <input type="text" class="form-control" id="Name" placeholder="Enter your Name" name="name" value="<?php if(!empty($_POST['name'])) echo $_POST['name'];?>">
	      <?php if(!empty($errors['name'])) echo '<span class="help-block">' . $errors['name'] . '</span>'; ?>
	    </div>
	    <button type="submit" class="btn btn-default">Submit</button>
	  </form>
	</section>