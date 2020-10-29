import React from 'react'
import { Link } from 'react-router-dom'

export default function Consult() {
    return (
        <div className="d-flex justify-content-center mx-auto my-2 text-center">
            <div>
                <h1>new patient special offer complimentary consultancy</h1>
                <Link to="/" className=" btn btn-white">Read More</Link>
            </div>
        </div>
    )
}
