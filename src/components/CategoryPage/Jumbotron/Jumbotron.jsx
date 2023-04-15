import React from 'react'
import { IconContext } from 'react-icons/lib';

import './Jumbotron.css'

import { FaStar } from 'react-icons/fa';

export default function Jumbotron() {
  return (
    <div className='jumb-wrapper'>
        <section>
          <p>Season II</p>
          <h1>Lexica Aperture</h1>
          <div className='book-disc'>
            <p>Story book art by greg rutkowski, tiny brunette 
              girl riding on the back of giant grey and blueish 
              cat in the jungle
            </p>
            <div>
              <IconContext.Provider 
                value={{color: 'white', size: '18px'}}>
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <FaStar/>
              </IconContext.Provider>
            </div>
            <p className='book-author'>By Onah Sochima</p>
          </div>
          <button >Buy Now</button>
        </section>
    </div>
  )
}
