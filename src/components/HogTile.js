import React, { useState } from 'react'
import HogDetails from './HogDetails'

export default function HogTile({ hog }) {
  const [showDetails, setShowDetails] = useState(false)

  const handleClick = function(){
    console.log("click")
    //updating to say whether to show or hide details
    setShowDetails(showDetails => !showDetails)
  }
  return (
    <div>
        <h4>{hog.name}</h4>
        <img  src={hog.image} alt={hog.name} onClick={handleClick}/>

        {/* Passing in hog information for HogDetails */}
        {showDetails ? <HogDetails 
                specialty={hog.specialty} 
                medal={hog["highest medal achieved"]}
                weight={hog.weight}
                greased={hog.greased}
        /> : null }
        
    </div>
  )
}
