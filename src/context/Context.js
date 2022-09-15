import React, { createContext } from 'react'
import { faker } from '@faker-js/faker'

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

  console.log(products)

  return <Cart.Provider value={products}>{children}</Cart.Provider>
}

export default Context
