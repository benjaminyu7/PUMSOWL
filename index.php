<html>
  <head>
    <title>PUMS OWL</title>

    <meta charset="UTF-8" />
    <script type="text/babel" src='pums/app/pumsTabs.js'></script>
    <script type="text/babel" src='pums/pumsTemplate.js'></script>
    <script type='text/babel' src='pums/app/htmlBuilder.js'></script>
    <?php include 'pums/pumsTemplate.php';?>
    <link rel='stylesheet' href='pums/pumsTemplate.css'/>
    <link rel='stylesheet' href='pums/style/pumsTabs.css'/>
    
  </head>
  <body>
    <?php echo $menu;?>
    <div id='root'>This is there the tabs will go 'root'</div>
    <?php echo "$footer";?>
    <script type="text/babel">
      var tabFac= new tabObjectFactory();
      ReactDOM.render(
        <TabsGeneric tabArr={[tabFac.getListTab("Academics", [<a href='/pums/public/guidesTemplate.php'>6MD</a>, '5DDs', '4MD', 'Pharm D']),tabFac.getTab("Social", <div>This is social</div>)]} />,
        document.getElementById('root')
      );
    </script>
  </body>
</html>
