import { AppBar, Container, makeStyles, MenuItem, Select, ThemeProvider, createTheme , Toolbar, Typography } from '@material-ui/core'
import React from 'react'
import { useNavigate } from "react-router-dom";

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
  const history = useNavigate();

  const darkTheme = createTheme({
    palette: {
      primary: {
        main: "#fff",
      },
      type: "dark",
    }
  });


  return (
    <ThemeProvider theme={darkTheme}>
    <AppBar color='transparent' position='static'>
      <Container>
        <Toolbar>
          <Typography 
          onClick={()=>history.push("/")} 
          className={classes.title}>Crypto Hunter</Typography>
        </Toolbar>
        <Select
          variant="outlined"
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
    </ThemeProvider>
  ) 
}

export default Header