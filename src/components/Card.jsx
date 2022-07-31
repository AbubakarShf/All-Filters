import React from "react"

const Card = ({ id, title, description, price, rating }) => {
  return (
    <>
      <div className='card'>
        <h3 className='Heading'>{title}</h3>
        <p className='Description'>{description}</p>
        <div className='pricing'>
          <span className='Price'>${price}</span>

            {
              Array.from({ length: rating }, (_, i) => <span key={i} className='Rating'>⭐</span>)
            }
        </div>
      </div>
    </>
  )
}

export default Card
