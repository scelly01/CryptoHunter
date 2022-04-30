import { Container } from '@material-ui/core'
import React from 'react'
import { classicNameResolver } from 'typescript'

const useStyles = makeStyles(() =>({
    banner: {
        backgroundImage: "url(./banner2.jpg)",
    },
    bannerContent: {
        height: 400,
        display: "flex",
        flexDirection: "column",
        paddingTop: 25,
        justifyContent: "space-around",
    }
}))

const Banner = () => {

    const classes = useStyles();

  return (
    <div className={classes.banner}> 
        <Container className={classes.bannerContent}></Container>
    </div>
  )
}

export default Banner