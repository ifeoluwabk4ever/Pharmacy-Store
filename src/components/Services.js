import React from 'react'
import { services, workRate } from '../Products'
import {Title} from './Title'

export default function Services() {

    return (
        <section className="services">
            <Title title="services"/>
            <div className="services-center">
                {
                    services.map((item, index) => {
                        return( 
                            <article key={index} className="service">
                                <span>{item.icon}</span>
                                <h4>{item.title}</h4>
                                <p>{item.info}</p>
                            </article>
                        )
                    })
                }
            </div>
            <div className="work-rate-center">
                {
                    workRate.map((item, index) => {
                        return( 
                            <article key={index} className="work-rate">
                                <span>{item.icon}</span>
                                <div className="about-div" />
                                <h4>{item.number}</h4>
                                <p>{item.remark}</p>
                            </article>
                        )
                    })
                }
            </div>
        </section>
    )
}
