import { AppBar, Container, MenuItem, Select, Toolbar, Typography } from '@material-ui/core'
import React from 'react'

const Header = () => {
  return (
    <AppBar color='transparent' position='static'>
      <Container>
        <Toolbar>Crypto Hunter</Toolbar>
        <Select
        variant='outlined'
        style={{
          width: 100,
          height: 40,
          marginLeft: 15,
        }}>
          <MenuItem value="USD">USD</MenuItem>
          <MenuItem value="INR">INR</MenuItem>
        </Select>
      </Container>
    </AppBar>
  ) 
}

export default Header