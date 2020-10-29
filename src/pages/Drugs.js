import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import Banner from '../components/Banner'
import DrugContainer from '../components/DrugContainer'
import Hero from '../components/Hero'

export let Drugs = () => {
    return (
        <>
            <Hero hero="roomsHero">
                <Banner title="our drugs" subtitle="here is a colllection of our drugs">
                    <Link to="/" className="btn btn-white">return home</Link>
                </Banner>
            </Hero>
            <DrugContainer />
        </>
    )
}
