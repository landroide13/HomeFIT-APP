import React from 'react'

 const Nav =  () => {

  return (
    <React.Fragment>
      
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <a className="navbar-brand">CaliApp</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-item nav-link active">Home</a>
            <a className="nav-item nav-link">Features</a>
            <a className="nav-item nav-link">Pricing</a>
          </div>
        </div>
      </nav>






    </React.Fragment>
  )
}



export default Nav