import React from 'react'
import { CartState } from '../context/Context'

import { ListGroup } from 'react-bootstrap'

const Cart = () => {
  const {
    state: { cart },
    dispatch,
  } = CartState()

  return (
    <div className='home'>
      <div className='productContainer'>
        <ListGroup>
          {cart.map((prod) => (
            <span>{prod.name}</span>
          ))}
        </ListGroup>
      </div>
      <div className='filters summary'></div>
    </div>
  )
}

export default Cart
