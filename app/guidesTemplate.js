function GuideOverview(props){
  var x;
  for(x=0; x<props.comments.length;x++){
    props.comments[x]=<li>{props.comments[x]}</li>;
  }
  return(
    <a href="/pums/public/guideDisplay.php">
    <div className='guideOverview'>
      <div id='leftblock'>
        <h2>{props.title}</h2>
        <p id='author'>{props.author}</p>
        <p id='year'>{props.year}</p>
      </div>
      <ul className='guideOverview'>{props.comments}</ul>
      <h3>{props.score}</h3>
    </div>
    </a>
  );
}

var commentArray=['Final','Integrative','Integrative Retake'];

ReactDOM.render(
  <GuideOverview title='Dank Bio Guide' author='Alvin' year='2016' score='4.5/5' comments={commentArray}/>,
  document.getElementById('root')
);
