const academics=<div>This is the Academics
  <ul>
    <li><a href='/pums/public/guidesTemplate.php'>6MD</a></li>
    <li>5DDs</li>
    <li>4MD</li>
    <li>Pharm D</li>
  </ul>
</div>;

function tabObject(title,content) {
  this.title = title;
  this.content = content;
}

var tabArr =[];
tabArr.push(new tabObject("Academics", academics));
tabArr.push(new tabObject("Social", <div>This is social</div>));

//modify the tabs to take an array of titles and content and create a method creates button that makes a certain function happen like a hash map

class TabsGeneric extends React.Component {
  constructor(tabArr) {
    super();
    this.tabArr = tabArr;
    this.handleContent = this.handleContent.bind(this);
    this.state={init: 0};
    //this.state={currentContent: this.props.tabArr[0].content};
  }
  
  componentDidMount() {
      this.setState(prev => ({
        currentContent: this.props.tabArr[0].content,
      }));
  }

  handleContent(content) {
    this.setState(prevState => ({
      currentContent: content
    }));
  }

  render() {
    var tabs = [];
    var x;
    for (x=0;x<this.props.tabArr.length;x++) {
      tabs.push(<li key={x}><button onClick={this.handleContent.bind(this,this.props.tabArr[x].content)}> {this.props.tabArr[x].title}</button></li>);
    }
    return (
      <div className='Tabs'>
        <ul className='theTabs'>
          {tabs}
        </ul>
        <div id='canvas'>{this.state.currentContent}</div>
        
      </div>
    );
  }
}

