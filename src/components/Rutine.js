import React, { Component } from 'react'
import RutineItem from './RutineItem'

class  Rutine extends Component {
  constructor(){
    super();
    this.deleteRutine = this.deleteRutine.bind(this);
  }

  deleteRutine = (id) =>{
    this.props.onDelete(id);
  }
  
  render(){

    let rutineItem;

    if(this.props.rutines){
      rutineItem = this.props.rutines.map(rutine =>{
        return(
          <RutineItem  key={rutine.name} rutine={ rutine } onDelete={this.deleteRutine} />
        )
      })
    }

    return (
      <React.Fragment>

      
        <table className = "table table-striped" >
          <thead>
            <tr>
              <th scope="col">Date</th>
              <th scope="col">Name</th>
              <th scope="col">Sets</th>
              <th scope="col">Reps</th>
              <th scope = "col"> Actions </th>
            </tr>
          </thead>
          <tbody>
            { rutineItem }
          </tbody> 
        </table>
           
        
      </React.Fragment>
    )

  }

  
}

export default Rutine
