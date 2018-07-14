//import htmlBuilder.js

//Tab objects that are put into the TabsGeneric class
function tabObject (title, content) {
  this.title=title;
  this.content=content;
}

function tabObjectFactory () {
  this.getTab= function(title, content){
    return new tabObject(title, content)
  }
  this.getListTab= function(title, elements) {
    return new tabObject(title, <ListBuilder elements={elements} />);
  }
}

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
	init: 0
      }));
  }

  handleContent(x) {
    this.setState(prevState => ({
      currentContent: this.props.tabArr[x].content,
      init: x
    }));
  }

  render() {
    var tabs = [];
    var x;
    for (x=0;x<this.props.tabArr.length;x++) {
      if (x==this.state.init){
        tabs.push(<li key={x} id='selected'><button onClick={this.handleContent.bind(this,x)}> {this.props.tabArr[x].title}</button></li>);
      } else {
        tabs.push(<li key={x} ><button onClick={this.handleContent.bind(this,x)}> {this.props.tabArr[x].title}</button></li>); 
      }
    }
    tabs.push(<li key={x} id='padding'></li>);
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

