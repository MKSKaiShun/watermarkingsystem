<script type="text/javascript">
		
  function checkPassword(str)
  {
    var re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    return re.test(str);
  }

  function checkForm(form)
  {
    if(form.Username.value == "") {
      alert("Error: Username cannot be blank!");
      form.username.focus();
      return false;
    }
    re = /^\w+$/;
    if(!re.test(form.username.value)) {
      alert("Error: Username must contain only letters, numbers and underscores!");
      form.username.focus();
      return false;
    }
    if(form.Password.value != "" && form.Password.value == form.Password2.value) {
      if(!checkPassword(form.Password.value)) {
        alert("The password you have entered is not valid!");
        form.Password.focus();
        return false;
      }
    } else {
      alert("Error: Please check that you've entered and confirmed your password!");
      form.Password.focus();
      return false;
    }
    return true;
  }

</script>

<div class="modal fade" id="signup" role="dialog">
    <div class="modal-dialog">
    
      <!-- Modal content-->
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal">&times;</button>
          <h4 class="modal-title">Sign Up</h4>
        </div>
        <div class="modal-body">
          <form class="form-horizontal" method="post" action="signup.php" onsubmit="return checkForm(this);">
			
			<div class="form-group">
				<label class="control-label col-sm-2" for="Username">Username:</label>
					<div class="col-sm-10">
						<input type="Username" class="form-control" name="Username" placeholder="Username" required>
					</div>
			</div>
			<div class="form-group">
				<label class="control-label col-sm-2" for="pwd">Password:</label>
					<div class="col-sm-10">          
						<input type="password" class="form-control" name="Password" placeholder="Enter password" required>
					</div>
			</div>
			<div class="form-group">
				<label class="control-label col-sm-2" for="pwd">Re-Type Password:</label>
					<div class="col-sm-10">          
						<input type="password" class="form-control" name="Password2" placeholder="Enter password" required>
					</div>
			</div>
			<div class="form-group">
				<label class="control-label col-sm-2" for="email">Email:</label>
					<div class="col-sm-10">
						<input type="email" class="form-control" name="User_email" placeholder="Enter email" required>
					</div>
			</div>
			<div class="form-group">        
				<div class="col-sm-offset-2 col-sm-10">
					<button type="submit" name="submit">Submit</button>
				</div>
			</div>
		</form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
        </div>
      </div>
      
    </div>
  </div>
  
<div class="modal fade" id="login" role="dialog">
    <div class="modal-dialog">
    
      <!-- Modal content-->
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal">&times;</button>
          <h4 class="modal-title">Login</h4>
        </div>
         <div class="modal-body">
          <form class="form-horizontal" action="checklogin.php" role="form" method="post">
			<div class="form-group">
				<label class="control-label col-sm-2" for="Username">Username:</label>
					<div class="col-sm-10">
						<input type="Username" class="form-control" name="Username" placeholder="Username">
					</div>
			</div>
			<div class="form-group">
				<label class="control-label col-sm-2" for="pwd">Password:</label>
					<div class="col-sm-10">          
						<input type="password" class="form-control" name="Password" placeholder="Enter password">
					</div>
			</div>
			<div class="form-group">        
				<div class="col-sm-offset-2 col-sm-10">
					<button type="submit" name="submit" class="btn btn-default">Login</button>
				</div>
			</div>
		</form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
        </div>
      </div>
      
    </div>
  </div>
  
  