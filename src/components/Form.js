import React from 'react'
import { FaEnvelope } from 'react-icons/fa'

export default function Form() {
    return (
        <form className="text-capitalize">
            <h3 className="mb-4">Enquiry</h3>
            <div className="form-group ml-3">
                <label htmlFor="email">email:</label>
                <input type="email" name="email" id="email" placeholder="Email" className="form-control" required />
            </div>
            <div className="form-group ml-3">
                <button className="btn btn-danger" value="subscribe" type="submit"><FaEnvelope /> subscribe</button>
            </div>
        </form>
    )
}
