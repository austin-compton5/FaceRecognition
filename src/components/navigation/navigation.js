import React from'react'

const Nav = ({onRouteChange2, isSignedIn})=>{
    if(isSignedIn){
        return (
            <nav style={{display: "flex", justifyContent:'flex-end'}}>
                <p className='f3 link dim black underline pa3 pointer' onClick={onRouteChange2}> Sign Out</p>
            </nav>
        )
    }else{
        return (
            <nav style={{display: "flex", justifyContent:'flex-end'}}>
                <p className='f3 link dim black underline pa3 pointer'> </p>
            </nav>
        )
    }
}


export default Nav