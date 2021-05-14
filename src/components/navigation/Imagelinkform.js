import React from 'react'
import 'tachyons'

const Imagelinkform = ({onInputChange, onButtonSubmit, handleData})=>{

    return(
        <div >
        {handleData.length < 1 ?
        <p className='f3'>
            {'This Website Detects Monarch Butterflies! Upload Your Sightings'}
        </p>
        : <p className ='f4'>
            {handleData}
        </p>
        }
        <div className='center'>
            <div className='center pa4 br3 shadow-5'>
            <input 
             className='f4 pa2 w-70 center'
             type='t'
             onChange={onInputChange}/>
            <button 
            className='w-30 grow f4 link ph3 pv2 dib white bg-black' 
            onClick={onButtonSubmit}>Detect</button>
            </div>
        </div>
        </div>
    )
}

export default Imagelinkform

