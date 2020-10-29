import React from 'react'
import { Link } from 'react-router-dom'
import { Title } from '../components/Title'
import Banner from '../components/Banner'
import { teamMembers } from '../Products'

export default function Team() {
    return (
        <>
            <div className="bg-info d-flex mx-auto justify-content-center align-content-center py-5">
                <Banner title="meet our team of doctors'" subtitle="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi aliquam ipsa quidem cum, amet quo voluptatibus quia, debitis pariatur reprehenderit velit culpa eius odit voluptatum temporibus ipsam tenetur, maxime iusto." className="bg-none">
                    <Link to="/" className="btn btn-white">return home</Link>
                </Banner>
            </div>
            <section className="services team">
                <Title title="team doctors"/>
                <div className="work-rate-center team">
                    {
                        teamMembers.map((item, index) => {
                            return( 
                                <article key={index} className="service">
                                    <img src={item.img} alt={item.name} />
                                    <h4>{item.name}</h4>
                                    <h6>{item.title}</h6>
                                </article>
                            )
                        })
                    }
                </div>
            </section>
        </>
    )
}
