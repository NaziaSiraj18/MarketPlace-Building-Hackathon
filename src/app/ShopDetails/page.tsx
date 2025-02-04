import React from 'react'
import Hero from './Hero'
import ShopDetail from '@/components/ShopPages/Shop-Details/ShopDetail'
import DescriptionComponent from '@/components/ShopPages/Shop-Details/ShopDescription'
import SimilarProducts from '@/components/ShopPages/Shop-Details/SimilarProducts'




const ShopDetails = () => {
  return (
    <div>
        {/* Hero section page */}
        <Hero />

        {/* Shop detail page */}
        <ShopDetail/>

        {/* Description of Products page */}
        <DescriptionComponent/>

        {/* Similar products page */}
        <SimilarProducts/>
        
        

    </div>
  )
}

export default ShopDetails