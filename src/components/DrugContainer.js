import React from 'react'
// import RoomFilter from './RoomFilter'
import Loading from './Loading'
import { withMedicsConsumer } from '../Context'
import DrugArray from './DrugArray'

function DrugContainer({context}) {
    let { loading, sortedDrugs, drugs } = context

    if (loading) {
        return <Loading />
    }

    return (
        <>
            {/*<RoomFilter drugs={drugs} />*/}
            <DrugArray drugs={sortedDrugs} />
        </>
    )
}

export default withMedicsConsumer(DrugContainer)




// import React from 'react'
// import RoomList from './RoomList'
// import RoomFilter from './RoomFilter'
// import Loading from './Loading'
// import { RoomConsumer } from '../Context'

// export default function RoomsContainer() {
//     return (
//         <RoomConsumer>
//             {
//                 value => {

//                     let { loading, sortedRooms, rooms } = value

//                     if(loading) {
//                         return <Loading />
//                     }

//                     return (
//                         <div>
//                             Hello Room Container
//                             <RoomFilter rooms={rooms} />
//                             <RoomList rooms={sortedRooms} />
//                         </div>
//                     )
//                 }
//             }
//         </RoomConsumer>
//     )
// }
