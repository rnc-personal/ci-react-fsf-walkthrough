import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import logo from '../assets/logo.png'
import styles from '../styles/NavBar.module.css'
import { NavLink } from 'react-router-dom'

export default function NavBar() {
    return <Navbar expand="md" fixed="top" className={styles.NavBar}>
        <Container>
            <NavLink to="/">
            <Navbar.Brand>
                <img src={logo} alt="logo" height="45" />
            </Navbar.Brand>
            </NavLink> 
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto text-left" >
                    <NavLink className={styles.navLink} activeClassName={styles.Active} to="/" exact>
                        <i className='fas fa-home'></i>
                        Home
                    </NavLink>
                    <NavLink className={styles.navLink} activeClassName={styles.Active} to="signin">
                    <i className='fas fa-sign-in-alt'></i>
                        Sign In
                    </NavLink>
                    <NavLink className={styles.navLink} activeClassName={styles.Active} to="signup">
                    <i className='fas fa-user-plus'></i>
                        Sign Up
                    </NavLink>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
}
