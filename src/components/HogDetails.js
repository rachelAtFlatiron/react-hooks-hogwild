import React from 'react'

export default function HogDetails({ specialty, medal, weight, greased }) {
  return (
    <div style={{border: "solid 2px red"}}>
        <p>Weight: {weight} </p>
        <p>Specialty: {specialty}</p>
        <p>{greased ? "Greased" : "Not Greased"}</p>
        <p>Highest Medal {medal} </p>
    </div>
  )
}
