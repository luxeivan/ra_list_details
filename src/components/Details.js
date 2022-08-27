import React from 'react'

export default function Detail({ details }) {
  return (
    <div className='details'>
      <img className='details__img' src={details.avatar+'?'+details.name} alt="" />
      <h2 className='details__name'>{details.name}</h2>
      <p className='details__desc'> <b>City: </b>{details.details.city}</p>
      <p className='details__desc'><b>Company: </b>{details.details.company}</p>
      <p className='details__desc'><b>Position: </b>{details.details.position}</p>
    </div>
  )
}
