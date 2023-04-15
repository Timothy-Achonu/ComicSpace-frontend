import React, { useState} from 'react'
import ProductImg from '../../assets/product-img.jpg'
import '../productpage/product.css'
import { Link } from 'react-router-dom'
import Description from '../../components/ProductDescriptions/description'
import  ProductReview from '../../components/ProductDescriptions/productReview'
import Navbar from '../../components/Navbar/Navbar'


const index = () => {
  const [description, setDescription] = useState("The Spider-Man comic book is a thrilling and action-packed adventure that follows the story of Peter Parker, a high school student who gains incredible spider-like abilities after being bitten by a radioactive spider. As Spider-Man, Peter takes on a dual identity as a superhero and tries to balance his responsibilities as a crimefighter with his personal life. The comic explores the challenges and complexities of being a superhero, including the constant danger and the toll it takes on Peter's relationships. Throughout the comic, readers are taken on a high-flying adventure as Spider-Man battles against some of the most notorious villains in the Marvel Universe, such as the Green Goblin, Doctor Octopus, and Venom. The intense fight scenes are accompanied by stunning artwork that captures the excitement and energy of Spider-Man's web-slinging heroics. Beyond the action, the comic book also delves into important themes such as responsibility, sacrifice, and justice. Peter struggles to navigate the blurred lines between right and wrong, and the choices he makes often have far-reaching consequences. Overall, the Spider-Man comic book is a must-read for fans of the superhero genre and anyone who loves thrilling adventures filled with complex characters and compelling themes.")


  return (
    <>
      {/* <Navbar/> */}
    <section className='product-container'>
        <div className='product-img'>
            <img src={ProductImg} alt="" />
        </div>
        <div className='product-text'>
          <h1 >
            Spider-Man
          </h1>
          <p>
            Title: The amazing spiderman
          </p>
          <p>
            Writers: Various (including Steve Ditko, John Romita Sr., and Mark Bagley)
          </p>
          <p>
            artists: Various (including Steve Ditko, John Romita Sr., and Mark Bagley)
          </p>
          <p>
            publisher: Marvel Comics
          </p>
          <p>
            publication date: 1963-present
          </p>
          <p>
            format: Ongoing Series
          </p>
          <p>
            genre: Superhero, action, adventure
          </p>
          <p className='price'>
            N5,000 <span className='discount'>(10% discount)</span>
          </p>
          <div className='product-btn'>
            <button className='product-btn-one'>buy now</button>
            <button className='product-btn-two'>add to cart</button>
          </div>
        </div>
    </section>
    {/* <div>
      <p>Click to preview pages</p>
    </div> */}

      <section >
        <div  className='product-reviews'>
        <Link onClick={()=>{
          setDescription(<Description/>)
        }}>Description</Link>
        <Link onClick={()=>{
          setDescription(<ProductReview/>)
        }}>Product Reviews</Link>
        <Link>Return and Refund Policy</Link>
        </div>
        <p className='desc-text'>
          {description}
        </p>
      </section>
      <section className='footer-hero'>
        <div className='footer-hero-text'>
          <h3>
            Step into a world of heroes and villains with our pulse-pounding comics!
          </h3>
          <p>
            Explore the multiverse and uncover new worlds with our expansive collection of comics!
          </p>
        </div>
      </section>
    </>
  )
}

export default index