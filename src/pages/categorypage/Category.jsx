import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import QuicklinkNav from '../../components/CategoryPage/QuicklinkNav/QuicklinkNav'
import Jumbotron from '../../components/CategoryPage/Jumbotron/Jumbotron'
import ProductCount from '../../components/CategoryPage/ProductCount/ProductCount'
import SortByCategory from '../../components/CategoryPage/SortByCategory/SortByCategory'
import BookGallary from '../../components/CategoryPage/BookGallary/BookGallary'

import './Categorie.css'


export default function Category() {
  return (
    <div className='cat-wrapper'>
        <div className='nav-container'>
            <Navbar/>
        </div>
        <QuicklinkNav/>
        <Jumbotron/>
        <ProductCount/>
        <section className='book-section'>
            <SortByCategory/>
            <BookGallary/>
        </section>

    </div>
  )
}
