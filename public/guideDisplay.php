<html>
  <head>
    <title>This Guide!</title>

    <meta charset="UTF-8" />
    <?php include'../pumsTemplate.php'?>
    <script type="text/babel" src='../pumsTemplate.js'></script>
    <link rel='stylesheet' href='../pumsTemplate.css' />
  </head>
  <body>
    <?php echo $menu;?>
    <?php 
      $dbc = new PDO('mysql:host=localhost;dbname=pumsUsers', admin, administrator);
      $getGuide = $dbc->prepare("SELECT * FROM pumsGuides");
      $getGuide->execute();
      $getGuide->bindColumn('program',$program);
      $getGuide->bindColumn('graduationYear',$gradYear);
      $getGuide->bindColumn('class',$class);
      $getGuide->bindColumn('title',$title);
      $getGuide->bindColumn('classSummary',$classSum);
      $getGuide->bindColumn('lecture',$lecture);
      $getGuide->bindColumn('final',$final);
      $getGuide->fetch(PDO::FETCH_BOUND);
    ?>
    <h1><?php echo $title;?></h1>
    <h2><?php echo $class;?></h2>
    <p><?php echo $classSum;?></p>
    
    <h2>Test</h2>
    <h3>Final</h3>
    <p><?php echo $final;?></p>
    <h3>Integrative</h3>
    <p>Integrative Lorem ipsum dotta gotta watta matta</p>
    <h3>Integrative Retake</h3>
    <p>Integrative Retake Lorem ipsum dotta gotta watta matta</p>

    <h2>Lecture</h2>
    <p><?php echo $lecture;?></p>

    <h2>Tops</h2>
    <p>Integrative Retake Lorem ipsum dotta gotta watta matta</p>

    <div id='root'>'root'</div>
    <?php echo $footer;?>
  </body>
</html>
