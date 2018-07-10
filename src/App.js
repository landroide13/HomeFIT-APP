import React, { Component } from 'react';
import Form from './components/Form'
import Rutine from './components/Rutine'
import Nav from './components/nav'

import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      rutines: []
    }
    this.getRutines = this.getRutines.bind(this)
  }

  getRutines = (rutine) => {
    let rutines = this.state.rutines;
    rutines.push(rutine);
    this.setState({ rutines })
  }



  render() {


    return (
      <div className="App">
        <Nav />

        <div className="container top30">

          <h2 align="center">Calistechnic App</h2>

          <div className="row top50">

            <div className="col-md-4">
              <Form rutine={this.getRutines} />
            </div> 

            <div className = "col-md-8" >
              <Rutine rutines={this.state.rutines} />
            </div>

          </div>

        </div>
      </div>

    );
  }
}

export default App;
