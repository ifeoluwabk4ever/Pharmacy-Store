import React from 'react'
import { FaPhone, FaMailBulk, FaGlobeAfrica, FaStreetView } from 'react-icons/fa'

export default function GetInTouch() {
    return (
        <div className="get-in-touch">
            <h3>get in touch</h3>
            <div className="mt-4 d-flex">
                <FaPhone />
                <div className="ml-5">
                    +234 (0)813 537 3695<br />
                    +234 (0)903 656 9521
                </div>
            </div>
            <div className="mt-4 d-flex">
                <FaMailBulk />
                <div className="ml-5">
                    admin@carepoint.com<br />
                    ifeoluwabk4ever@gmail.com
                </div>
            </div>
            <div className="mt-4 d-flex">
                <FaGlobeAfrica />
                <div className="ml-5">
                    www.carepoint.com
                </div>
            </div>
            <div className="mt-4 d-flex">
                <FaStreetView />
                <div className="ml-5">
                    123, Main Road, New City,
                    My Country 123456
                </div>
            </div>
        </div>
    )
}
