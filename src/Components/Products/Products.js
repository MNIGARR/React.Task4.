import React from 'react'

export default function Products({name, price, description, imageUrl}) {
  return (
    <div>
      <p>{name}</p>
      <p>{price}</p>
      <p>{description}</p>
      <img src ={imageUrl} alt ={name} ></img>
     </div>
  )
}