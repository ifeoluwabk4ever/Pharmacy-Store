import React, { useContext } from 'react'
import { MedicsContext } from '../Context'
import Loading from './Loading';
import Variety from './Variety';
import { Title } from './Title';

export default function FeaturedDrug() {    

    let { loading, featuredDrugs: drugs} = useContext(MedicsContext)

    drugs = drugs.map( drug => {
        return <Variety key={drug.id} drug={drug} />
    })

    return (
        <section className="featured-rooms">
            <Title  title="featured drugs"/>
            <div className="featured-rooms-center">
                {
                    loading ? <Loading /> : drugs
                }
            </div>
        </section>
    )
}
