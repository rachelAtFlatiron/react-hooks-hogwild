import React, { useState, useEffect } from 'react'
import HogTile from './HogTile'

export default function HogsContainer({ hogs }) {
  //keeps track of whether to display greased hogs or not
  const [ greased, setGreased ] = useState(false)
  //state to tell us how to sort hogs
  const [ sort, setSort ] = useState(null)

  const handleGreaseChange = function(){
    setGreased(greased => !greased)
  }

  const handleSortChange = function(e){
    setSort(e.target.value)
  }

  /*~~~~~~~~~~~~~~~~~~~SORT AND FILTER~~~~~~~~~~~~~~~~~~~*/
  // if state greased is true : is current hog's greased true or false
  /*
  if hog.greased === true 
    return true
  if hog.greased !== true
    return false
  */
  let displayedHogs = hogs.filter(hog => greased ? hog.greased : true)
  
  //if sort is by weight....sort displayedHogs
  if(sort === "weight"){
    displayedHogs.sort((curHog, nextHog) => {return curHog.weight - nextHog.weight})
  } else if (sort === "name") {
    displayedHogs.sort((curHog, nextHog) => { 
        return curHog.name > nextHog.name ? 1 : -1
    })
  }

 

  
  return (
    <div>
        <form>
            <label htmlFor="greased">Greased?</label>
            <input onChange={handleGreaseChange} type="checkbox" checked={greased} name="greased" />

            <select value={sort} onChange={handleSortChange}>
                <option value="name">Name</option>
                <option value="weight">Weight</option>
            </select>
        </form>
        {
            displayedHogs.map(curHog => {
                return <HogTile key={curHog.name} hog={curHog} />
            }) 
        }
    </div>

  )
}
