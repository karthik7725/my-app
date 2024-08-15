import React from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function Navbar(props) {
  return (
<nav className="navbar navbar-dark bg-dark navbar-expand-lg">
  <div className="container-fluid">
    <a className="navbar-brand" href="/"> {props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/about">{props.aboutText}</Link>
        </li>
        
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Our Products
          </a>  
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="/">Bitcoin</a></li>
            <li><a className="dropdown-item" href="/">Ethereum</a></li>
            <li><hr className="dropdown-divider"/> &nbsp;&nbsp;&nbsp;SPECIAL MENTION</li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="/">Dogecoin</a></li>
          </ul>
        </li>
       
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button type="button" class="btn btn-outline-primary">Search</button>
      </form>
    </div>
  </div>
</nav>
  )
}

Navbar.propTypes = {
  title : PropTypes.string.isRequired,
  aboutText : PropTypes.string
}

Navbar.defaultProps =  {
  title : "Set title here",
  aboutText :  "Set about text here"
}

