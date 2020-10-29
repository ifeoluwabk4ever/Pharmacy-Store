import React from 'react'

export const Links = ({name, item1, item2, item3, item4, item5, item6}) => {
    return (
        <ul className="row d-block ul-link text-capitalize">
            <h3 className="mb-4">{name}</h3>
            <li className="mb-3 ml-4">{item1}</li>
            <li className="mb-3 ml-4">{item2}</li>
            <li className="mb-3 ml-4">{item3}</li>
            <li className="mb-3 ml-4">{item4}</li>
            <li className="mb-3 ml-4">{item5}</li>
            <li className="ml-4">{item6}</li>
        </ul>
    )
}
