<html>
  <head>
    <title>Testing</title>

    <meta charset="UTF-8" />
    <?php include'../pumsTemplate.php'?>
    <script type="text/babel" src='../pumsTemplate.js'></script>
    <script type="text/babel" src='../app/htmlBuilder.js'></script>
    <link rel='stylesheet' href='../pumsTemplate.css' />
  </head>
  <body>
    <?php echo $menu;?>
    <div id='root'>'root'</div>
    <script type="text/babel"> 
      if (localStorage.getItem('session_id') == '12345678') {
         ReactDOM.render( new titleContentBuilder(
           'Title',(<p>content1</p>)).addContent(<p>content2</p>).getContent(),
           document.getElementById('root')
         );
      }
      console.log(titleContentBuilder.prototype);
    </script>
    <?php echo $footer;?>
  </body>
</html>
