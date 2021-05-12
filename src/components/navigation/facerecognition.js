import React from 'react'
import './FaceRecognition.css'

const FaceRecognition = ({imageUrl, box}) =>{
return(
    
    <div className='center ma'>
       <div className='absolute mt2'>
        <img id='image' src={imageUrl} alt='' width='500px' height='auto'></img>
        <div className='bounding-box' style={{top: `${box.top}%`, bottom: `${box.bottom}%`, right: `${box.right}%`, left: `${box.left}%`}}></div>
     </div>
    </div>
)
}

// https://static01.nyt.com/images/2011/07/31/sunday-review/FACES/FACES-jumbo.jpg
// {top: box.top, left: box.left, right: box.right, bottom: box.bottom}

export default FaceRecognition