import React from 'react'
import { Reviewers } from './reviewers'
import './productDesc.css'
import QA from '../../assets/qa.png'
import BO from '../../assets/bo.png'
import MR from '../../assets/mr.png'
import SA from '../../assets/sa.png'

const productReview = () => {
  return (
   <div className='reviewers-container'>
    <Reviewers img={QA} name={'Qalbi Audu'} location={'Kaduna,Nigeria'} text={`“The Amazing Spider-Man" is a true classic that has stood the test of time. The storylines are thrilling, the characters are well-developed, and the artwork is stunning. If you're a fan of superhero comics, this is a must-read.”`} />
    <Reviewers img={MR} name={'Manyo Rose'} location={'kaduna,Nigeria'} text={`“The Amazing Spider-Man" is a true classic that has stood the test of time. The storylines are thrilling, the characters are well-developed, and the artwork is stunning. If you're a fan of superhero comics, this is a must-read.”`} />
    <Reviewers img={SA} name={'Sydney Adonu'} location={'kaduna,Nigeria'} text={`“The Amazing Spider-Man" is a true classic that has stood the test of time. The storylines are thrilling, the characters are well-developed, and the artwork is stunning. If you're a fan of superhero comics, this is a must-read.”`} />
    <Reviewers img={BO} name={'Bismark Oslar'} location={'kaduna,Nigeria'} text={`“The Amazing Spider-Man" is a true classic that has stood the test of time. The storylines are thrilling, the characters are well-developed, and the artwork is stunning. If you're a fan of superhero comics, this is a must-read.”`} />
   </div>
  )
}

export default productReview