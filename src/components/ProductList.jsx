import React from 'react'
import Header from './Header'
import CarouselHead from './CarouselHead'
import SideNav from './SideNav'
import HomeDeals from './HomeDeals'
import Carsosel from './Carsosel'

export default function ProductList() {
  return (
    <div className=''>
      <Header/>
      <Carsosel/>
      
      {/* <CarouselHead/>  */}
      <HomeDeals/>
      </div>
  )
}
