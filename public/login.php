<html>
  <head>
    <title>Login Page</title>

    <meta charset="UTF-8" />
    <?php include'../pumsTemplate.php'?>
    <script type="text/babel" src='../pumsTemplate.js'></script>
    <script type="text/babel" src='../app/pumsTabs.js'></script>
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
        <div>
          <label htmlFor='gradutation'>Graduation Year:</label>
          <select name='select_graduation'>
            <option value='2018'>2018</option>
            <option value='2019'>2019</option>
            <option value='2020'>2020</option>
            <option value='2021'>2021</option>
            <option value='2022'>2022</option>
            <option value='2023'>2023</option>
          </select>
        </div>
        <div>
          <label htmlFor='program'>Program:</label>
          <select name='select_program'>
	    <option value='6md'>6MD</option>
	    <option value='5dd'>5DD</option>
	    <option value='4md'>4MD</option>
	    <option value='pharmd'>Pharm D</option>
	  </select>
        </div>
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
