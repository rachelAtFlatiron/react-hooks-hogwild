import React from 'react';

export default function Tile(props){
    return (
        <div className="col-4">
            <div className="intro">
                <h1>{props.name}</h1>
                <img className="img-fluid img-thumbnail" src={props.img} alt={props.name} />
            </div>
            <div className="details">
                <p>{props.specialty}</p>
                <p>{props.greased ? "greased" : "not greased"}</p>
                <p>{props.weight}</p>
                <p>{props.highestMedalAchieved}</p>
            </div>
        </div>
    )
}