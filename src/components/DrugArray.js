import React from 'react'
import Banner from './Banner'
import {StyledRoom} from './StyledHero'
import Variety from './Variety'


export default function DrugArray({drugs}) {
    if ( drugs.length === 0) {
        return ( 
            <StyledRoom>
                <Banner title="oops!!!" subtitle="we do not have such drug in our bank yet, do check out later...">
                </Banner>
            </StyledRoom>
        )
    }
    return (
        <section className="roomslist">
            <div className="roomslist-center">
                {
                    drugs.map( drug => {
                        return(
                            <Variety key={drug.id} drug={drug} />
                        )
                    })
                }
            </div>
        </section>
    )
}
