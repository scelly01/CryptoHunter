import { AppBar, Container, makeStyles, MenuItem, Select, Toolbar, Typography } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles(()=> ({
  title: {
  flex: 1,
  color: "gold",
  fontFamily: "Montserrat",
  fontWeight: "bold",
  cursor: "pointer",
  },
}));


const Header = () => {

  const classes = useStyles();

  return (
    <AppBar color='transparent' position='static'>
      <Container>
        <Toolbar>
        <Typography className={classes.title}>Crypto Hunter</Typography>
        </Toolbar>
        <Select
        variant="outlined"
        style={{
          width: 100,
          height: 40,
          marginLeft: 15,
        }}>
          <MenuItem value='USD'>USD</MenuItem>
          <MenuItem value='INR'>INR</MenuItem>
        </Select>
      </Container>
    </AppBar>
  ) 
}

export default Header