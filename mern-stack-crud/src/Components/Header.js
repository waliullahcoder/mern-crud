import React, { Component } from 'react';
 import { Navbar, Nav, NavItem } from 'react-bootstrap';
 // To use routing functionalities
 import { Link } from 'react-router-dom';
 import '../index.css';
 
 class Header extends Component {
 render() {
 return (
 <div>
 <Navbar>
 <Navbar.Header>
 <Navbar.Brand>
 <a href="/">MERN Stack CRUD Operations</a>
 </Navbar.Brand>
 </Navbar.Header>
 <Nav>
 <NavItem href="/">
 <Link to="/">Home</Link>
 </NavItem>
 <NavItem href="/">
 <Link to="/addemployee">Add New Employee</Link>
 </NavItem>
 </Nav>
 </Navbar>
 </div>
 );
 }
 }
export default Header;