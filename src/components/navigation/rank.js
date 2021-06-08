import React from 'react'
import 'tachyons'

const Rank = ({userName, userEntries})=>{

    return(
    <div>
        <div className='black f3'>
            {`${userName}` + ', ' + `Your current number of sightings is`}
        
        </div>
        <div className='black f1'>
            {`${userEntries}`}
        </div>

    </div>
    )
}

export default Rank

