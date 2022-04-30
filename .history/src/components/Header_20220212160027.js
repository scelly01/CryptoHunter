import { AppBar, Container, MenuItem, Select, Toolbar } from '@material-ui/core'
import React from 'react'

const Header = () => {
  return (
    <AppBar color='transparent' position='static'>
      <Container>
        <Toolbar>Crypto Hunter</Toolbar>
        <Select>
          <MenuItem>USD</MenuItem>
          <MenuItem>INR</MenuItem>
        </Select>
      </Container>
    </AppBar>
  ) 
}

export default Header