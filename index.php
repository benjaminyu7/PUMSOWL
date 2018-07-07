<html>
  <head>
    <title>PUMS OWL</title>

    <meta charset="UTF-8" />
    <script type="text/babel" src='pums/app/pumsTabs.js'></script>
    <script type="text/babel" src='pums/pumsTemplate.js'></script>
    <?php include 'pums/pumsTemplate.php';?>
    <link rel='stylesheet' href='pums/style/pumsTabs.css'/>
    <link rel='stylesheet' href='pums/pumsTemplate.css'/>
  </head>
  <body>
    <?php echo $menu;?>
    <div id='root'>This is there the tabs will go 'root'</div>
    <?php echo "$footer";?>
    <script type="text/babel">
      ReactDOM.render(
        <TabsGeneric tabArr={tabArr} />,
        document.getElementById('root')
      );
    </script>
  </body>
</html>
