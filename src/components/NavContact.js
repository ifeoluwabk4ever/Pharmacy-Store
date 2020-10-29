import React from 'react'
import styled from 'styled-components'
import { FaPhone, FaEnvelope, FaClock } from 'react-icons/fa'

export default function NavContact() {
    return (
        <>
            <NavWrapper className="navbar py-2 navbar-expand-sm navbar-dark px-sm-5 d-none d-lg-flex">
                <ul className="navbar-nav align-items-center mx-auto">
                    <li className="nav-item ml-5"><FaPhone color="green"/><span className="ml-3 text-muted">+234 (0)813 537 3695</span></li>
                    <li className="nav-item ml-5"><FaEnvelope color="maroon"/><span className="ml-3 text-muted">admin@smallchops.com</span></li>
                    <li className="nav-item ml-5"><FaClock /><span className="ml-3 text-muted">Working Hours: 8:00am - 5:00pm daily</span></li>
                </ul>
            </NavWrapper>
        </>
    )
}

let NavWrapper = styled.nav`
    background: var(--clr-white-1);
    box-shadow: var(--dark-shadow) !important;
    
    .nav-link {
        color: var(--clr-primary-1) !important;
        transition: var(--transition) !important;
        font-size: 1.3rem;
        text-transform: capitalize;
        font-family: Tekton Pro;

        &:hover{
            color: var(--clr-gold) !important;
            font-style: italic;
        }
    }
`