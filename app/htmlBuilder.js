//Title with content, pretty much a decorator
function TitleDecorator (props) {
  return (
    <div>
      <h2>{this.title}</h2>
      {this.content}
    </div>
  );
}

function ListBuilder (props) {
  var elements= [];
  var x;
  for (x=0;x<props.elements.length;x++) {
    elements.push(<li key={x}>{props.elements[x]}</li>);
  }
  return ( 
    <ul>
      {elements}
    </ul>
  );
}


