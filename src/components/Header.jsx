import React from 'react'
import {
  Container,
  FormControl,
  Navbar,
  Nav,
  Dropdown,
  Badge,
} from 'react-bootstrap'

import { FaShoppingCart } from 'react-icons/fa'

const Header = ({ cart }) => {
  return (
    <Navbar bg='dark' variant='dark' style={{ height: 80 }}>
      <Container>
        <Navbar.Brand>
          <a href=''>Shopping Cart</a>
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
          <Dropdown alignRight>
            <Dropdown.Toggle variant='success'>
              <FaShoppingCart color='white' fontSize={25} />
              <Badge>{10}</Badge>
            </Dropdown.Toggle>

            <Dropdown.Menu style={{ minWidth: 370 }}>
              <span style={{ padding: 10 }}>Cart is empty</span>
            </Dropdown.Menu>
          </Dropdown>
        </Nav>
      </Container>
    </Navbar>
  )
}

export default Header
