import React from 'react'

const RutineItem = (props) => {


  return (

    <React.Fragment>

      <tr>
        <td>{props.rutine.id}</td>
        <td>{props.rutine.name}</td>
        <td>{props.rutine.set}</td>
        <td>{props.rutine.rep}</td>
        <td> Edit / Delete </td>
      </tr>
      
    </React.Fragment>
    
  )


}

export default RutineItem
