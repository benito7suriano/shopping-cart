import React from 'react'
import { Container, FormControl, Navbar } from 'react-bootstrap'

const Header = () => {
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
          />
        </Navbar.Text>
      </Container>
    </Navbar>
  )
}

export default Header
