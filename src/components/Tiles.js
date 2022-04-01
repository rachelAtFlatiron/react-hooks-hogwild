import React from 'react';
import Tile from './Tile';

/*TODO: this filtering shit*/
export default function Tiles({hogs, grease, sort}){
    
    //filter out greased or not greased hogs
    const filterHog = hogs.filter(hog => {
        if(grease === "all") {
            return true;
        } else {
            return hog.greased === grease
        }
    })

    //sort hog by weight or name
    const sortHog = filterHog.sort((a,b) => { 
        if(sort === "weight") {
            return a.weight-b.weight;  
        } else {
            if(a.name.toUpperCase() < b.name.toUpperCase()){
                return -1
            } else if (a.name.toUpperCase() > b.name.toUpperCase()) {
                return 1
            }
            return 0
        } 
    })

    //map hogs into Tile
    const hogList = sortHog.map((el, i) => {
        return <Tile name={el.name} 
        key={i}
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