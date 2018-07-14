//include the html builder class
class SideMenu extends React.Component {
  constructor(titleArr, itemArr) {
    super();
    this.titleArr=titleArr;
    this.itemArr=itemArr;
  }

  render() {
    var menu = [];
    var x;
    for(x=0;x<this.props.titleArr.length;x++) {
      menu.push(<MenuComponent title={this.props.titleArr[x]} items={this.props.itemArr[x]}/>);
    }
    return (
      <div id = 'sideMenu'>
        {menu}
      </div>
    );
  }
}

class MenuComponent extends React.Component {
  constructor (title, items) {
    super();
    this.title=title;
    this.items=items;
    this.displayMenu = this.displayMenu.bind(this);
    this.state={display: []};
  }

  displayMenu() {
    if (this.state.display === undefined|| this.state.display.length==0) {
      this.setState(prevState => ({
        display: this.props.items 
      }));
    } else {
      this.setState(prevState => ({
        display: []
      }));
    }
  }

  render() {
    return (
      <div className='menuComp'>
        <button onClick={this.displayMenu}>{this.props.title}</button>
	<ListBuilder elements={this.state.display} />
      </div>
    );
  }
}

ReactDOM.render(
  <SideMenu titleArr={['Year 1', 'Year 2']} itemArr={[['Prestudy','Biochemistry','Biophysics'],['Prestudy','Biochemistry 2','Biophysics 2']]} />,
  document.getElementById('yearMenu')
);
