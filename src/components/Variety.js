import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import defaultImg from '../images/LUP03920.jpg'
import PropTypes from 'prop-types'
import { FaGg, FaShoppingCart } from 'react-icons/fa'
import { MedicsConsumer } from '../Context'

export default function Variety({ drug }) {

    let { id, name, slug, images, price, company, type, inCart } = drug

    return (
        <MedicsConsumer>
        { value => {
            let { openModal, addToCart } = value
            return  <div className="room">  
                <div className="img-container">
                    <img src={images || defaultImg} alt={name}/>
                    <div className="room-link d-flex">
                        <Link to={`/drugs/${slug}`} className="btn btn-white btn-link mx-3"><FaGg /></Link>
                        <Link to="/cart" className="btn btn-white btn-link mx-3" disabled={inCart ? true : false} onClick={ () => {
                            openModal(id)
                            addToCart(id)
                        }}>
                            { inCart ? (<p className="text-capitalize mb-0" disabled>{" "}ordered</p>): (<FaShoppingCart />)
                            }
                        </Link>
                    </div>
                </div>
                <article className="room-info">
                <h4>name: <em>{name}</em></h4>
                    <h5>type: <em>{type}</em></h5>
                    <h6>Manufacturer: <em>{company}</em></h6>
                    <p>price: <em>${price}</em></p>
                </article>
            </div>
        }}
        </MedicsConsumer>
    )
}

Variety.propTypes = {
    drug: PropTypes.shape({
        name: PropTypes.string.isRequired,
        slug: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        company: PropTypes.string.isRequired,
        images: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired
    })
}