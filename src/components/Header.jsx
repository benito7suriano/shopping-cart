import React from 'react'
import {
  Container,
  FormControl,
  Navbar,
  Nav,
  Dropdown,
  Badge,
  Button,
} from 'react-bootstrap'
import { Link } from 'react-router-dom'

import { FaShoppingCart } from 'react-icons/fa'

import { CartState } from '../context/Context'
import { AiFillDelete } from 'react-icons/ai'

const Header = () => {
  const {
    state: { cart },
    dispatch,
  } = CartState()

  return (
    <Navbar bg='dark' variant='dark' style={{ height: 80 }}>
      <Container>
        <Navbar.Brand>
          <Link to='/'>Shopping Cart</Link>
        </Navbar.Brand>
        <Navbar.Text className='search'>
          <FormControl
            style={{ width: 500 }}
            placeholder='search a product'
            className='m-auto'
            aria-label='Search'
          />
        </Navbar.Text>
        <Nav>
          <Dropdown>
            <Dropdown.Toggle variant='success'>
              <FaShoppingCart color='white' fontSize={25} />
              <Badge style={{ marginLeft: 2 }} bg='secondary' pill='true'>
                {cart.length}
              </Badge>
            </Dropdown.Toggle>

            <Dropdown.Menu style={{ minWidth: 370 }}>
              {cart.length > 0 ? (
                cart.map((prod) => (
                  <span className='cartitem' key={prod.id}>
                    <img
                      src={prod.image}
                      alt={prod.name}
                      className='cartItemImg'
                    />
                    <div className='cartItemDetail'>
                      <span>{prod.name}</span>
                      <span>${prod.price.split('.')[0]}</span>
                    </div>
                    <AiFillDelete
                      fontSize='20px'
                      style={{ cursor: 'pointer' }}
                      onClick={() =>
                        dispatch({ type: 'REMOVE_FROM_CART', payload: prod })
                      }
                    />
                  </span>
                ))
              ) : (
                <span style={{ padding: 10 }}>Cart is empty</span>
              )}
              <Link to={'/cart'}>
                <Button style={{ width: '95%', margin: '0 10px' }}>
                  Go to Cart
                </Button>
              </Link>
            </Dropdown.Menu>
          </Dropdown>
        </Nav>
      </Container>
    </Navbar>
  )
}

export default Header
