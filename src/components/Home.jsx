import React from 'react'
import { CartState } from '../context/Context'

const Home = () => {
  const {
    state: { products },
  } = CartState()
  console.log(products)
  return <div className='home'>Home</div>
}

export default Home
