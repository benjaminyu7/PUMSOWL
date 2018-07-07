<html>
  <head>
    <title>Disclosures</title>

    <meta charset="UTF-8" />
    <?php include'../pumsTemplate.php'?>
    <script type="text/babel" src='../pumsTemplate.js'></script>
    <link rel='stylesheet' href='../pumsTemplate.css' />
  </head>
  <body>
    <?php echo $menu;?>
    <div id='root'>'root'</div>
    <script type="text/babel">ReactDOM.render(
      <BodyTitle title='Disclosure' message='This website is not reponsible for you!'/>,
      document.getElementById('root'));
    </script>
    <?php echo $footer;?>
  </body>
</html>
