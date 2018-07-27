<html>
  <head>
    <title>Guides Template</title>

    <meta charset="UTF-8" />
    <?php include '../pumsTemplate.php';?>
    <script type='text/babel' src='../app/guidesTemplate.js'></script>
    <script type='text/babel' src='../app/htmlBuilder.js'></script>
    <script type='text/babel' src='../app/sideMenu.js'></script>
    <link rel='stylesheet' href='../style/guidesTemplate.css'>
  </head>
  <body>
    <?php echo $menu;?>
    <div id=middle>
      <div id='yearMenu'>This is the side menu</div>
      <div id='root'>This is where I put the guides</div>
    </div>
    <br style="clear: both;" />
    <a href='submitGuide.php'>Submit a guide!</a>
    <script type='text/babel'>
      var commentArray=['Final','Integrative','Integrative Retake'];
      ReactDOM.render(
        <GuideOverview title='Dank Bio Guide' author='Alvin' year='2016' score='4.5/5' comments={commentArray}/>,
        document.getElementById('root')
      );
      getGuide();
    </script>
    <?php echo $footer;?>
  </body>
</html>
