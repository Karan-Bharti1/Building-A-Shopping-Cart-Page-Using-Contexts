import { useContext, useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'
import Nav from './components/Nav'
import { useCartContext } from './contexts/CartContext'

function ProductListing() {
  
const {displayData}=useCartContext()

  return (
    <>
   <Nav/>
   <main className='container'>
    <h2>Smarter Groceries....</h2>
    <div className='row my-4'>
    {displayData}
    </div>
   </main>
    </>
  )
}

export default ProductListing;
