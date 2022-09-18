import React from 'react'
import { Card } from 'react-bootstrap'

const SingleProduct = ({ product }) => {
  return (
    <div>
      <Card>
        <Card.Img variant='top' src={product.image} alt={product.name} />
        <Card.Body></Card.Body>
      </Card>
    </div>
  )
}

export default SingleProduct
