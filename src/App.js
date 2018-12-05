import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      dogs: [],
      isLoaded: false,
      hideBut: true, 
    }
  }
  
  componentDidMount() {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          dogs: json, 
          hideBut: false, 
        })
      })
    this.setState({
      hideBut: true, 
    })
  }
  
  render() {

    var {isLoaded, dogs} = this.state;

    if (!isLoaded){
      return<div>Loading dog...</div>
    }

    return (
      <div className="App">
        <div className="center">
          <h1 className='heading'>Tinder for Dogs</h1>
          <img src={dogs.message} alt="dog"></img>
          <div>
          {this.state.hideBut ? 
            <></>
          :
            [
              <button className='btn-success btn-lg' onClick={this.componentDidMount.bind(this)}>Like</button>, 
              <button className='btn-danger btn-lg' onClick={this.componentDidMount.bind(this)}>Dislike</button>
            ]
          }
          </div>
        </div>
      </div>
    );
  }
}

export default App;
