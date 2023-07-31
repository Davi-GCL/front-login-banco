import React from 'react'

export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-md navbar-dark sticky-top shadow p-2" aria-label="Fourth navbar example" style={{zIndex:100 , backgroundColor:'darkorange'}}>
    <div className="container-fluid">
      <a className="navbar-brand" href="/">Banco Mundial</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarsExample04">
        <ul className="navbar-nav me-auto mb-2 mb-md-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/">| Home</a>
          </li>
          {/* <li className="nav-item">
            <a className="nav-link" href="cadastro">Cadastro</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="login">Login</a>
          </li> */}
          {/* <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">Dropdown</a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#">Action</a></li>
              <li><a className="dropdown-item" href="#">Another action</a></li>
              <li><a className="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li> */}
        </ul>
        
        <ul className="navbar-nav mb-2 mb-md-0">
          <li><a className="btn btn-primary me-2"  href="/cadastro">Cadastro</a></li>
          <li><a className="btn btn-primary"  href="/login">Login</a></li>
        </ul>

      </div>
    </div>
  </nav>
  )
}
