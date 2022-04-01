import React, { useState } from 'react';

export default function Tile(props){
    const [details, setDetails] = useState(false);
    const [hide, setHide] = useState("block");
    const handleClick = () => {
        setDetails(details => !details)
    }
    const updateHide = () => {
        console.log('setting hide')
        if (hide === "block"){
            setHide("none");
        } else {
            setHide("block")
        }
    }
    return (
        <div className="col-4" key={props.id} >
            <h1>{props.name}</h1>
            <div className="pig" style={{display: hide }}>
                <div className="intro">
                    
                    <img className="img-fluid img-thumbnail" src={props.img} alt={props.name} onClick={handleClick} />
                </div>
                <div className="details"  style={ details ? {"display" : "block"} : {"display" : "none"} }>
                    <p>{props.specialty}</p>
                    <p>{props.greased ? "greased" : "not greased"}</p>
                    <p>{props.weight}</p>
                    <p>{props.highestMedalAchieved}</p>
                </div>
            </div>
            <button onClick={updateHide}>{hide === "none" ? "Show" : "Hide"}</button>
        </div>
    )
}