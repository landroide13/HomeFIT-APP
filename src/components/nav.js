import React from 'react'

 const Nav =  () => {

  return (
    <React.Fragment>
      
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <a className="navbar-brand" href="#">CaliApp</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-item nav-link active" href="#">Home </a>
            <a className="nav-item nav-link" href="#">Features</a>
            <a className="nav-item nav-link" href="#">Pricing</a>
          </div>
        </div>
      </nav>






    </React.Fragment>
  )
}



export default Nav