//import React, { Component } from 'react';
//import ReactDOM from 'react-dom';

class Menu extends React.Component {
  render() {
    //if the page is the home page
    if (document.title=="PUMS OWL"){
      return (
                <ul className="Menu">
              		<li><a href='index.html'>Home</a></li>
                          <li><a href='/pums/public/contactUs.html'>Contact Us</a></li>
                          <li><a href='/pums/public/login.html'>Login</a></li>
                  </ul>
      );
    }
    else{
      return(
                <ul className="Menu">
              		<li><a href='../../index.html'>Home</a></li>
                          <li><a href='/pums/public/contactUs.html'>Contact Us</a></li>
                          <li><a href='/pums/public/login.html'>Login</a></li>
                  </ul>
      );
    //if the page is not the home page
    }
  }
}

class Footer extends React.Component {
  render() {
    if (document.title=="PUMS OWL"){
      var financeLink='/pums/public/finances.html';
      var ourTeamLink='/pums/public/ourTeam.html';
      var disclosuresLink='/pums/public/disclosures.html';
    }
    else{
      var financeLink='/pums/public/finances.html';
      var ourTeamLink='/pums/public/ourTeam.html';
      var disclosuresLink='/pums/public/disclosures.html';
    }
    return (
              <ul className="Footer">
                <li><a href={financeLink}>Finances</a></li>
                <li><a href={ourTeamLink}>Our Team</a></li>
                <li><a href={disclosuresLink}>Disclosures</a></li>
              </ul>
    );
  }
}

class BodyTitle extends React.Component{
  constructor(title,message) {
    super();
    this.title=title;
    this.message=message;
  }
  render() {
    return (
      <div className='bodyTitle'>
        <h2>{this.props.title}</h2>
        <p>{this.props.message}</p>
      </div>
    );
  }
}

ReactDOM.render(
  <Menu />,
  document.getElementById('menu')
);
ReactDOM.render(<Footer />,document.getElementById('footer'));

