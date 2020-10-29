import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/logo.png'
import styled from 'styled-components'
import { FaBars } from 'react-icons/fa'

export default function Navbar() {
    return (
        <>
            <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
                <Link to="/"><img src={logo} alt="Logo" className="navbar-brand" /></Link>
                <div className="ml-auto navbar-nav align-items-center d-none d-lg-block">
                    <Link to="/" className="mr-4 text-decoration-none nav-title nav-item">Home</Link>
                    <Link to="/about-us" className="mr-4 nav-title text-decoration-none nav-item">About</Link>
                    <Link to="/services" className="mr-4 nav-title text-decoration-none nav-item">Services</Link>
                    <Link to="/gallery" className="mr-4 nav-title text-decoration-none nav-item">Gallery</Link>
                    <Link to="/team" className="mr-4 nav-title nav-item">Team</Link>
                    <Link to="/contact-us" className="mr-4 nav-title text-decoration-none nav-item">Contact us</Link>
                </div>
                <div className="dropdown d-lg-none ml-auto">
                    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-expanded="false">
                        <FaBars />
                    </button>
                    <div className="dropdown-menu dropMenu" aria-labelledby="dropdownMenuButton">
                        <Link to="/" className="d-block mr-4 nav-title text-decoration-none nav-item">Home</Link>
                        <Link to="/about-us" className="d-block text-decoration-none mr-4 nav-title nav-item">About</Link>
                        <Link to="/services" className="mr-4 text-decoration-none d-block nav-title nav-item">services</Link>
                        <Link to="/gallery" className="mr-4 nav-title text-decoration-none d-block nav-item">Gallery</Link>
                        <Link to="/team" className="mr-4 nav-title text-decoration-none d-block nav-item">Team</Link>
                        <Link to="/contact-us" className="mr-4 text-decoration-none d-block nav-title nav-item">Contact us</Link>
                    </div>
                </div>
            </NavWrapper>
        </>
    )
}

let NavWrapper = styled.nav`
    background: var(--clr-white-1);
    box-shadow: var(--dark-shadow) !important;
    
    .nav-link {
        color: var(--clr-primary-5) !important;
        transition: var(--transition) !important;
        font-size: 1.3rem;
        text-transform: capitalize;
        font-family: Tekton Pro;

        &:hover{
            color: var(--clr-primary-1) !important;
            font-style: italic;
        }
    }
`