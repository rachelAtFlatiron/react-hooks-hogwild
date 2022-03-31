import React from 'react';

export default function Filter(props){
    return (
        <select onChange={props.onChange}>
            <option value="all">All</option>
            <option value={true}>Greased</option>
            <option value={false}>Not Greased</option>
        </select>
    )
}