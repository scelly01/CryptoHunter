import React from 'react'
import { Container, makeStyles, Typography } from '@material-ui/core'

const useStyles = makeStyles(() =>({
    carousel:{
        height: "50%",
        display: "flex",
        alignItems: "center"
    }
}));

const Carousel = () => {
  
  const classes = useStyles();
    return (
    <div className={classes.carousel}>Carousel</div>
  )
}

export default Carousel