import React from 'react'

const RutineItem = (props) => {


  return (

    <React.Fragment>

      <tr>
        <td>{props.rutine.id}</td>
        <td>{props.rutine.name}</td>
        <td>{props.rutine.set}</td>
        <td>{props.rutine.rep}</td>
        <td><button className="btn btn-sm btn-danger" onClick >Delete</button> 
        <button  className="btn btn-sm btn-success" onClick >Edit</button> </td>
      </tr>
      
    </React.Fragment>
    
  )


}

export default RutineItem
