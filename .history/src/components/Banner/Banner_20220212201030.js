import { Container, makeStyles } from '@material-ui/core'
import React from 'react'

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
        <div className={classes.tagline}>
            <Typography
                variant="h2"
                style={{
                fontWeight: "bold",
                marginBottom: 15,
                fontFamily: "Montserrat",
                }}>
                Crypto Hunter
            </Typography>
            <Typography
                variant="subtitle2"
                style={{
                color: "darkgrey",
                textTransform: "capitalize",
                fontFamily: "Montserrat",
                }}>
                Get all the Info regarding your favorite Crypto Currency
            </Typography>
        </div>
    </div>
  )
}

export default Banner