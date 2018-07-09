class SelectGraduation extends React.Component {
  constructor(props) {
    super(props);
  };
  render () {
    return(
    <div>
    <label htmlFor='gradutation'>Graduation Year:</label>
    <select name='select_graduation'>
      <option value='2018'>2018</option>
      <option value='2019'>2019</option>
      <option value='2020'>2020</option>
      <option value='2021'>2021</option>
      <option value='2022'>2022</option>
      <option value='2023'>2023</option>
    </select>
    </div>
    );
  }
}

class SelectProgram extends React.Component {
  constructor(props) {
    super(props);
  };
  render () {
    return(
    <div>
    <label htmlFor='program'>Program:</label>
    <select name='select_program'>
      <option value='6md'>6MD</option>
      <option value='5dd'>5DD</option>
      <option value='4md'>4MD</option>
      <option value='pharmd'>Pharm D</option>
    </select>
    </div>
    );
  }
}

function dynamicComponentInput (title, component) {
  this.title = title;
  this.component = (
    <div key={title}>
      <label htmlFor={title+'_input'}>{component}</label>
      <input type='text' name={title} id={title+'_input'} />
    </div>
  );
  this.checked = false;
}

var submitGuideComponents=[];
submitGuideComponents.push(new dynamicComponentInput('Lecture','Tell us about the Lecture'));
submitGuideComponents.push(new dynamicComponentInput('Quizes','Tell us about the Quizes'));
submitGuideComponents.push(new dynamicComponentInput('Final','Tell us about the Final'));
submitGuideComponents.push(new dynamicComponentInput('Final Retake','Tell us about the Final Retake'));
submitGuideComponents.push(new dynamicComponentInput('Integrative','Tell us about the Integrative'));
submitGuideComponents.push(new dynamicComponentInput('Integrative Retake','Tell us about the Integrative Retake'));

/*Takes an array of tuples (title, component)
 *The class creates a checkbox for each title and displays the component when it's checked */
class DynamicComponent extends React.Component {
  constructor(components) {
    super();
    this.components=components;
    this.state={init :[]};
    this.handleCheck = this.handleCheck.bind(this);
  };

  //Make the check boxes
  componentDidMount() {
    var x;
    var checkBoxes = [];
    for(x=0;x<this.props.components.length;x++) {
      checkBoxes.push(<div key={x} >
        <label htmlFor={this.props.components[x].title}>{this.props.components[x].title}</label>
	<input type='checkbox' id={this.props.components[x].title} onChange={this.handleCheck.bind(this,x)} />
      </div>);
    }
    this.setState(prevState => ({
      init: checkBoxes
    }));
  } 

  //Recreate the inputs based on whether they are checked
  handleCheck(changed) {
    var temp = [];
    this.props.components[changed].checked = !this.props.components[changed].checked; 
    var x;
    for (x=0;x<this.props.components.length;x++) {
      if (this.props.components[x].checked==true) {
        temp.push(this.props.components[x].component);
      }
    }
    this.setState(prevState=>({
      revealed: temp
    }));
  }
  render() {
    return(
      <div>
        {this.state.init}
	{this.state.revealed}
      </div>
    );
  }
}

class SelectClass extends React.Component {
  render() {
    return(
      <div>
        <label htmlFor='class'>Class:</label>
        <select name='select_class'>
          <option value='physiology'>Physiology</option>
	</select>
      </div>
    );
  }
}

class SubmitGuideForm extends React.Component {
  constructor(props) {
    super(props);
  }
  render (){
    return (
      <form action='submitGuide' method='post'>
        <SelectProgram />
	<SelectGraduation />
	<SelectClass />
	<div>
	  <label htmlFor='title'>Title</label>
	  <input type='text' id='title' name='guide_title' />
	</div>
	<div>
	  <label htmlFor='introduction'>Tell us about the class in general.</label>
	  <input type='text' id='introduction' name='guide_introduction' />
	</div>
	<div>
	  <label htmlFor='resources'>List names of good resources separated by [Enter] key.</label>
	  <input type='text' id='resources' name='guide_resources' />
	</div>
	<DynamicComponent components={submitGuideComponents} />
        <button type='submit'>Submit Guide</button>
      </form>
    );
  }
}

ReactDOM.render(
  <SubmitGuideForm  />,
  document.getElementById('root')
);
