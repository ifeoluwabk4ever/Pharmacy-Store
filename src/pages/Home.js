import React from 'react'
import Services from '../components/Services'
import Landing from '../components/Landing'
import Consult from '../components/Consult'
import FeaturedDrug from '../components/FeaturedDrug'

export default function Home() {
    return (
        <div>
            <Landing />
            <Services />
            <Consult />
            <FeaturedDrug />
        </div>
    )
}
