import React, { createContext, useReducer } from 'react'
import { faker } from '@faker-js/faker'

import { cartReducer } from './Reducers'

const Cart = createContext()

const Context = ({ children }) => {
  const products = [...Array(20)].map(() => ({
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.image.abstract(),
    inStock: faker.random.numeric(),
    fastDelivery: faker.datatype.boolean(),
    ratings: Math.ceil(Math.random() * 5),
  }))

  const [state, dispatch] = useReducer(cartReducer, { products, cart: [] })

  return <Cart.Provider value={{ state, dispatch }}>{children}</Cart.Provider>
}

export default Context
