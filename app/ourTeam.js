//convert this to run on php

class Profile extends React.Component {
  constructor (image, name,title) {
    super();
    this.image=image;
    this.name=name;
    this.title=title;
  }
  render() {
    return (
      <div className='profile'>
        <img src={this.props.image} alt="hawt doc"/>
        <h3>{this.props.name}</h3>
        <p>{this.props.title}</p>
      </div>
    );
  }
}

ReactDOM.render(
  <Profile image="../pictures/2pCxdQW8_400x400.jpg" name="Alvin Hu" title="Founder" />,
  document.getElementById('root')
);
