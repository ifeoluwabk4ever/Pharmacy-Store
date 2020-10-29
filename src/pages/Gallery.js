import React from 'react'
import { Link } from 'react-router-dom'
import Banner from '../components/Banner'
import { gallery } from '../Products'

export default function Gallery() {
    return (
        <>
            <div className="bg-info d-flex mx-auto justify-content-center align-content-center py-5">
                <Banner title="album speak" subtitle="Take a look at our gallery." className="bg-none">
                    <Link to="/" className="btn btn-white">return home</Link>
                </Banner>
            </div>
            <section className="services gallery">
                <div className="work-rate-center gallery container">
                    {
                        gallery.map((item, index) => {
                            return( 
                                <article key={index} className="service">
                                    <img src={item.img} alt={item.name} />
                                </article>
                            )
                        })
                    }
                </div>
            </section>
        </>
    )
}
