import React, { Component } from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import Banner from '../components/Banner'
import Hero from '../components/Hero'
import { MedicsConsumer, MedicsContext } from '../Context'
import defaultBcg from '../images/LUP03920.jpg'
import {StyledHero} from '../components/StyledHero'
import { FaShoppingCart } from 'react-icons/fa'

export default class SingleDrug extends Component {

    constructor(props) {
        super(props)

        this.state = {
            slug: this.props.match.params.drug,
            defaultBcg
        }
    }

    static contextType = MedicsContext

    render() {

        let { getDrug } = this.context
        let drug = getDrug(this.state.slug)
        if (!drug) {
            return ( 
                <Hero hero="roomsHero">
                    <Banner title="oops!!!" subtitle="we do not have such drug in our bank yet, do check out later...">
                    <Link to="/drugs" className="btn-white btn">back to drugs</Link>
                    </Banner>
                </Hero>
            )
        }

        let { id, name, description, price, images, sideEffect, uses, application, dosage, precaution, company, type, inCart } = drug

        return (
            <MedicsConsumer>
                {value => {
                return <>
                    <StyledHero img={images}>
                        <Banner title={`${name}`}>
                            <Link to="/drugs" className="btn-white btn">Back to drugs</Link>
                        </Banner>
                    </StyledHero>
                    <section className="single-room">
                        <div className="single-room-info">
                            <article className="desc mb-5">
                                <h3>Details</h3>
                                <p className="ml-3">{description}.</p>
                                <Link to="/cart" className="btn btn-white btn-link mx-3 w-25 text-center text-decoration-none" disabled={inCart ? true : false} onClick={ () => {
                                    value.addToCart(id)
                                    value.openModal(id)
                                }}>
                                { inCart ? (<p className="text-capitalize" disabled>{" "}ordered</p>): (<><FaShoppingCart /><span>order</span></>)
                                }
                                </Link>
                            </article>
                            <article className="info">
                                <h3>Info</h3>
                                <h6 className="ml-3">Name : <em>{name}</em>.</h6>
                                <h6 className="ml-3">price : <em>${price}</em>.</h6>
                                <h6 className="ml-3">company: <em>{company}</em></h6>
                                <h6 className="ml-3">drug type: <em>{type}</em></h6>
                                <div className="ml-3">
                                <h5>uses:</h5>
                                <ul className="extras ml-3">
                                    {
                                        uses.map( (item, index) => {
                                            return <li key={index}> - {item}</li>
                                        })
                                    }
                                </ul>
                                </div>
                            </article>
                            <article className="info1">
                                <h5>dosage:</h5>
                                <ul className="extras ml-3">
                                    {
                                        dosage.map( (item, index) => {
                                            return <li key={index}> - {item}</li>
                                        })
                                    }
                                </ul>
                            </article>
                            <article className="info">
                                <h5>how to apply:</h5>
                                <ul className="extras ml-3">
                                    {
                                        application.map( (item, index) => {
                                            return <li key={index}> - {item}</li>
                                        })
                                    }
                                </ul>
                            </article>
                            <article className="info1">
                                <h5>Effects:</h5>
                                <ul className="extras ml-3">
                                    {
                                        sideEffect.map( (item, index) => {
                                            return <li key={index}> - {item}</li>
                                        })
                                    }
                                </ul>
                            </article>
                            <article className="info">
                                <h5>precautions:</h5>
                                <ul className="extras ml-3">
                                    {
                                        precaution.map( (item, index) => {
                                            return <li key={index}> - {item}</li>
                                        })
                                    }
                                </ul>
                            </article>
                        </div>
                    </section>
                </>}}
            </MedicsConsumer>
        )
    }
}
