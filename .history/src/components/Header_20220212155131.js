import { AppBar, Container, Toolbar } from '@material-ui/core'
import React from 'react'

const Header = () => {
  return (
    <AppBar color='transparent' position='static'>
      <Container>
        <Toolbar>Crypto Hunter</Toolbar>
      </Container>
    </AppBar>
  ) 
}

export default Header