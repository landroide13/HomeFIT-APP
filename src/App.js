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
    this.getRutines = this.getRutines.bind(this);
    this.handleDeleteRutine = this.handleDeleteRutine.bind(this);
  }

  getRutines = (rutine) => {
    let rutines = this.state.rutines;
    rutines.push(rutine);
    this.setState({ rutines })
  }

  handleDeleteRutine = (id) =>{
    let rutines = this.state.rutines;
    let idx = rutines.findIndex(ix => ix.id === id );
    rutines.splice(idx, 1);
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
              <Rutine onDelete={this.handleDeleteRutine} rutines={this.state.rutines} />
            </div>

          </div>

        </div>
      </div>

    );
  }
}

export default App;
