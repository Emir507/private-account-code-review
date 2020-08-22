import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import './Sidebar.css'
import 'bootstrap/dist/css/bootstrap.min.css'

export default function Side() {

  function logOut() {
    localStorage.removeItem('username')
    localStorage.removeItem('mydata')
    localStorage.removeItem('avatar_url')
    window.location.reload(false);
  }

  return(
    <Navbar bg="light" expand="lg" className="d-lg-flex flex-lg-column p-0">
      <Navbar.Brand className="d-flex align-items-center flex-lg-column m-0">
        <img src={localStorage.getItem('avatar_url')} className='mx-auto rounded-circle' width="50" height="50" alt="profile_photo"/>
        <h6 className="m-0">{localStorage.getItem("username")}</h6>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto d-lg-flex flex-lg-column">
          <Nav.Link href="#/terminals">Терминалы</Nav.Link>
          <Nav.Link href="#/buyers">Покупатели</Nav.Link>
          <button onClick={logOut} className="btn btn-secondary">Log Out</button>
        </Nav>
      </Navbar.Collapse>
      <div className="d-none d-lg-flex py-3 px-1 bg-dark">
        <h6 className='m-0 text-light'>Copyright © 2020</h6>
      </div>
    </Navbar>
  )
}