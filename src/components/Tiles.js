import React from 'react';
import Tile from './Tile';

/*TODO: this filtering shit*/
export default function Tiles({hogs, grease}){
    const filterHog = hogs.filter(hog => {
        if(grease === "all") {
            return true;
        } else {
            return hog.grease === grease
        }
    })
    const hogList = filterHog.map((el, i) => {
        return <Tile name={el.name} 
        img={el.image} 
        highestMedalAchieved={el["highest medal achieved"]} 
        specialty={el.specialty} 
        weight={el.weight} 
        greased={el.greased}/>
    });


    return(
        <div className="row">
            {hogList}
        </div>
    )
}