import { AppBar, Container, Toolbar } from '@material-ui/core'
import React from 'react'

const Header = () => {
  return (
    <div>Header
    <AppBar>
      <Container>
        <Toolbar>Crypto Hunter</Toolbar>
      </Container>
    </AppBar>
    </div>
  ) 
}

export default Header