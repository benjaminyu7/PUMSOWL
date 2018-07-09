<html>
  <head>
    <title>Login Page</title>

    <meta charset="UTF-8" />
    <?php include'../pumsTemplate.php'?>
    <script type="text/babel" src='../pumsTemplate.js'></script>
    <script type="text/babel" src='../app/pumsTabs.js'></script>
    <script type="text/babel" src='../app/formsTemplate.js'></script>
    <link rel='stylesheet' href='../style/pumsTabs.css' />
    <link rel='stylesheet' href='../pumsTemplate.css' />
  </head>
  <body>
    <?php echo $menu;?>
    <div id='root'>'root'</div>
    <script type="text/babel">
      const login = <form action='place' method='post'>
        <div>
          <label htmlFor='username'>Username:</label>
          <input type='text' id='username' name='user_name'/>
        </div>
        <div>
          <label htmlFor='password'>Password:</label>
          <input type='password' id='password' name='pass_word'/>
        </div>
        <div className='button'>
          <button type='submit'>Log in</button>
        </div>
      </form>;
      const register = <form action='place' method='post'>
        <div>
          <label htmlFor='username'>Username:</label>
          <input type='text' id='username' name='user_name'/>
        </div>
        <div>
          <label htmlFor='password'>Password:</label>
          <input type='password' id='password' name='pass_word'/>
        </div>
        <div>
          <label htmlFor='repeat'>Repeat Password:</label>
          <input type='password' id='repeat' name='repeat' />
        </div>
        {<SelectGraduation />}
	{<SelectProgram />}
        <div>
          <label htmlFor='donate'>Donation:</label>
          <select name='select_donation'>
	    <option value='none'>No Donation</option>
	  </select>
        </div>
        <div>
	  <p>Please upload a selfie with your face and student ID</p>
          <input type='file'/>
        </div>
        <div className='button'>
          <button type='submit'>Register</button>
        </div>
    </form>;
    var tabs = [];
    tabs.push(new tabObject("Login", login));
    tabs.push(new tabObject("Register", register));
    ReactDOM.render(
      <TabsGeneric tabArr={tabs} />,
      document.getElementById('root')
    );
    </script>
    <?php echo $footer;?>
  </body>
</html>
