import React from 'react';
import './Navbar.css'

function Navbar() {
  return (
    <div >
      <nav className="navbar navbar-expand-lg  bg-white  shadow p-3 mb-5 bg-body rounded navWidth ">
  <div className="container-fluid">
    <a className="navbar-brand" href="/"><img src="navlogo.svg"/></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">Indoor</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">Outdoor</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">Commerical</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">Review</a>
        </li>
      </ul>
      <button type="button" class="btn btnColor text-white  rounded-pill btn-lg">GetStarted</button>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar
