<?php
  $user=htmlspecialchars($_POST['user_name']);
  $pass=htmlspecialchars($_POST['pass_word']);
  //login with the login user,only has access to user accounts
  $dbc = new PDO('mysql:host=localhost;dbname=pumsUsers', admin, administrator);
  //select user from students, where user
  $getLogin = $dbc->prepare("SELECT studentId,password FROM pumsUsers WHERE studentId = $user");
  $getLogin->execute();
  //check if the pass matches
  $getLogin->bindColumn('password',$password);
  $getLogin->fetch(PDO::FETCH_BOUND);
  //login, store the session id into the thing
  if (strcmp($pass, $password)==0) {
    echo "login success";
?>
    <script>
      localStorage.setItem('session_id','12345678');
    </script>
<?php
  } else {
    echo "login failed";
  }
  //header("Location:../../index.html");
?>
