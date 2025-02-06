import React from 'react'
import Hero from '@/components/ShopPages/ShopHero';
import ShopProducts from './shop';
import ShoppingCart from '../cart/ShopingCart';
import Checkout from '@/components/Checkout/Checkout';
import OurChef from '@/components/OurChef';

export default function Shop() {
  return (
    <div className="bg-grey-900">
        <Hero />
        <ShopProducts />
        <ShoppingCart/>
        <Checkout/>
        <OurChef/>
        
    </div>
  )
}
