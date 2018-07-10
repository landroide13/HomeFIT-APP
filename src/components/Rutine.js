import React, { Component } from 'react'
import RutineItem from './RutineItem'

class  Rutine extends Component {
  
  render(){

    let rutineItem;

    if(this.props.rutines){
      rutineItem = this.props.rutines.map(rutine =>{
        return(
          <RutineItem key={rutine.name} rutine={ rutine } />
        )
      })
    }

    return (
      <React.Fragment>

      <div className="col-md-6">
        <table className = "table table-striped" >
          <thead>
            <tr>
              <th scope="col">id</th>
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
      </div>       
        
      </React.Fragment>
    )

  }

  
}

export default Rutine
