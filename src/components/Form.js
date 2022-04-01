import React from 'react'

export default function Form(props){
    return (
        <form onSubmit={e => props.handleSubmit(e)}>
            <label for="name">Name: </label>
            <input type="text" name="name" />
            <label for="image">Image link: </label>
            <input type="text" name="image" />
            <label for="weight">Weight</label>
            <input type="number" name="weight" />
            <label for="grease">Greased: </label>
            <input type="checkbox" name="grease" />
            <label for="comment">Comment: </label>
            <input type="text" name="comment" />
            <label for="award">Highest Medal Achieved: </label>
            <select name="award">
                <option value="bronze">Bronze</option>
                <option value="silver">Silver</option>
                <option value="gold">Gold</option>
                <option value="platnium">Platnium</option>
            </select>
            <input type="submit" name="submit"/>
        </form>
    )
}