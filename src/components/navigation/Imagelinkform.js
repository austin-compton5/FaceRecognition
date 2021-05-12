import React from 'react'
import 'tachyons'

const Imagelinkform = ({onInputChange, onButtonSubmit})=>{

    return(
        <div >
        <p className='f3'>
            {'This Website Detects Faces, Enter a Picture to Try It!'}
        </p>
        <div className='center'>
            <div className='center pa4 br3 shadow-5'>
            <input 
             className='f4 pa2 w-70 center'
             type='t'
             onChange={onInputChange}/>
            <button 
            className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple' 
            onClick={onButtonSubmit}>Detect</button>
            </div>
        </div>
        </div>
    )
}

export default Imagelinkform

