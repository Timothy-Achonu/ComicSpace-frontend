import React from 'react'
import './productDesc.css'

export const Reviewers = ({img,name,location,text}) => {
  return (
    <section className='reviewers'>
        <div className='reviewers-img'>
            <img src={img} alt="" />
        </div>
        <div className='reviewers-text'>
            <h6>
                {name}
            </h6>
            <span className='location'>{location}</span>
            <p>{text}</p>
        </div>
    </section>
  )
}
