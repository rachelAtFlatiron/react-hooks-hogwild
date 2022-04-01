import React from 'react';

export default function Sort(props){
    return (
        <select onChange={e => props.onChange(e)}>
            <option value="name">Name</option>
            <option value="weight">Weight</option>
        </select>
    )
}